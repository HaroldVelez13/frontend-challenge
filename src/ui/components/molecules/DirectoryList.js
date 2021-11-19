import Button from "ui/components/atoms/Button";

export default function DirectoryList({ offerList, showMore, handleClick, ...props }) {
    /* log.debug("Here is your offers list", offerList);
    console.log("Here is your offers list", offerList); */

    return (
        <div class="flex items-center justify-center h-auto px-5 pb-5 ">
            <div class="container">
                <div class="flex justify-center">
                    <div class="bg-white shadow-2xl rounded-lg w-full md:w-3/4 lg:w-2/4">
                        <ul class="divide-y divide-gray-300">
                            {offerList.map((offer, i) => (
                                <li
                                    class="p-4 cursor-pointer hover:bg-gray-100 text-black grid grid-cols-12 "
                                    key={i}>
                                    <div className="col-span-2 my-auto">
                                        <span className="p-2 text-base rounded-full text-purple-500 border border-purple-500 undefined">
                                            {offer.alpha_two_code}
                                        </span>
                                    </div>

                                    <div className="col-span-10 ">
                                        <h2>{offer.name}</h2>
                                        <a
                                            className="text-blue-600 hover:text-blue-300"
                                            target="_blank"
                                            href={"https://" + offer.domains[0]}
                                            title={`Website: ${offer.name}`}>
                                            {offer.domains[0]}
                                        </a>
                                    </div>
                                </li>
                                
                            ))}
                            {showMore && (
                            <li className="text-center py-2">
                                <Button title=" Show More" onClick={handleClick}>
                                <i class="fas fa-spinner ml-1"></i> 
                                </Button>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
