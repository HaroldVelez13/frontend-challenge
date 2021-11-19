import DirectoryList from "ui/components/molecules/DirectoryList";
import DirectoryTable from "ui/components/organisms/DirectoryTable";



export default function Directory({ offerList,offerTotal, showMore, handleShowMore, isList, ...props }) {
    /* log.debug("Here is your offers list", offerList);
    console.log("Here is your offers list", offerList); */

    return (
        <>
        {isList
            ?(
                <DirectoryList
                offerList={offerList}
                showMore={showMore}
                handleClick={handleShowMore}/>
            )
            :(
                <DirectoryTable
                data={offerTotal}/>
            )
        }
        </>
        
    );
}
