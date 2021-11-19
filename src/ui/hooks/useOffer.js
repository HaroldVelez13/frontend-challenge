import { useEffect } from "react";

export default function useOffer() {
    const [offerList, setOfferList] = useState([]);
    const [offerTotal, setOfferTotal] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(true);
    const [maxShow, setMaxShow] = useState(10);
    const [limit, setLimit] = useState(0);

    const fetchOffersList = async () => {
        let response = await fetch(
            "http://universities.hipolabs.com/search?country=Mexico",
        );
        let json = await response.json();
        let offter_limit = json.length;
        setOfferTotal(json);
        setLimit(offter_limit);
        setLoading(false);
    };

    const handleShowMore = () => {
        const max = maxShow + 20;
        setMaxShow(max);
        if (max > limit) {
            setShowMore(false);
        }
    };

    useEffect(() => {
        fetchOffersList();
    }, []);

    useEffect(() => {
        const list = offerTotal.slice(0, maxShow);
        setOfferList(list);
    }, [offerTotal, maxShow]);

    return {
        offerList,
        offerTotal,
        loading,
        showMore,
        handleShowMore,
    };
}
