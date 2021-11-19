import WrapperApp from "ui/components/atoms/WrapperApp";
import ViewSelect from "ui/components/atoms/ViewSelect";

import Directory from "ui/components/templates/Directory";
import Loading from "ui/components/Loading";
import useOffer from "ui/hooks/useOffer";

export default function App() {
    const {
        offerList,
        offerTotal,
        loading,
        showMore,
        handleShowMore,
    } = useOffer();
    const [isList, setIsList] = useState(false);

    return (
        <WrapperApp>
            <>
                <ViewSelect
                isList={isList}
                    handleList={() => setIsList(true)}
                    handleTable={() => setIsList(false)}
                />
                {loading ? (
                    <Loading />
                ) : (
                    <Directory
                        offerList={offerList}
                        offerTotal={offerTotal}
                        showMore={showMore}
                        handleShowMore={handleShowMore}
                        isList={isList}
                    />
                )}
            </>
        </WrapperApp>
    );
}
