export default function ViewSelect({handleList,handleTable,isList}) {
    return (
        <div className="flex items-center justify-center h-auto p-4 ">
            <div className="container">
                <div className="flex justify-center">
                    <div className="shadow-md bg-gray-50 rounded-md mb-3 flex items-center justify-center w-full md:w-3/4 lg:w-2/4">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12">
                                <h3 className="mt-2 text-gray-800 font-light text-base text-center">
                                    View
                                </h3>
                            </div>
                            <div className="col-span-12">
                                <div className="flex items-end  my-2">
                                    <button
                                        className={` ${
                                            isList
                                                ? "bg-purple-500 text-white"
                                                : "bg-transparent text-purple-500"
                                        } border-l border-t border-b border-purple-500  font-bold uppercase text-xs px-4 py-2 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150`}
                                        type="button"
                                        title="Show List"
                                        onClick={handleList}>
                                        <i className="fas fa-list"></i>
                                    </button>
                                    <button
                                        className={`${
                                            !isList
                                                ? "bg-purple-500 text-white"
                                                : "text-purple-500 bg-transparent"
                                        }   border border-solid border-purple-500  active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150`}
                                        type="button"
                                        title="Show Table"
                                        onClick={handleTable}>
                                        <i className="fas fa-table"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
