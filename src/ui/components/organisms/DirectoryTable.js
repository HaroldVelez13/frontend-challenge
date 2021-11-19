import { useTable, useSortBy, usePagination } from "react-table";
import Button from "ui/components/atoms/Button";

const columns = [
    {
      Header: 'Code',
      accessor: 'alpha_two_code',
    },
    {
      Header: 'University',
      accessor: 'name',
    },
    {
        Header: 'Domains',
        accessor: 'domains',
      },
  ]

export default function DirectoryList({  data }) {
    /* log.debug("Here is your offers list", offerList);
    console.log("Here is your offers list", offerList); */
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
        usePagination,
    );

    return (
        <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/4">
                <div className="flex flex-col ">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow-2xl overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table
                                    className="min-w-full divide-y divide-gray-200 "
                                    {...getTableProps()}>
                                    <thead className="bg-gray-50">
                                        {headerGroups.map(headerGroup => (
                                            <tr
                                                {...headerGroup.getHeaderGroupProps()}>
                                                {headerGroup.headers.map(
                                                    column => (
                                                        // Add the sorting props to control sorting. For this example
                                                        // we can add them into the header props
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                                                            {...column.getHeaderProps(
                                                                column.getSortByToggleProps(),
                                                            )}>
                                                            {column.render(
                                                                "Header",
                                                            )}

                                                            {/* Add a sort direction indicator */}
                                                            <span>
                                                                {column.isSorted ? (
                                                                    column.isSortedDesc ? (
                                                                        <i className="ml-1  fas fa-sort-down"></i>
                                                                    ) : (
                                                                        <i className="ml-1  fas fa-sort-up"></i>
                                                                    )
                                                                ) : (
                                                                    ""
                                                                )}
                                                            </span>
                                                        </th>
                                                    ),
                                                )}
                                            </tr>
                                        ))}
                                    </thead>
                                    <tbody
                                        className="bg-white divide-y divide-gray-200"
                                        {...getTableBodyProps()}>
                                        {page.map((row, i) => {
                                            prepareRow(row);
                                            return (
                                                <tr {...row.getRowProps()}>
                                                    {row.cells.map(cell => {
                                                        return (
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                {...cell.getCellProps()}>
                                                                {cell.column.id === "domains"
                                                                ?(<a
                                                                className="text-blue-600 hover:text-blue-300"
                                                                target="_blank"
                                                                href={"https://" + cell.row.values["domains"]}
                                                                title={`Website: ${cell.row.values["name"]}`}>
                                                                {cell.row.values["domains"]}
                                                            </a>)
                                                                :cell.render(
                                                                    "Cell",
                                                                )}
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <div className="flex  justify-center">
                                    <Button onClick={() => gotoPage(0)}>
                                        <i className="fas fa-angle-double-left"></i>
                                    </Button>
                                    <Button onClick={() => previousPage()}>
                                        <i className="fas fa-angle-left"></i>
                                    </Button>
                                    <p className="mx-2 font-light uppercase text-purple-500 my-auto">
                                        Page{" "}
                                        <strong>
                                            {pageIndex + 1} of{" "}
                                            {pageOptions.length}
                                        </strong>
                                    </p>
                                    <Button onClick={() => nextPage()}>
                                        <i className="fas fa-angle-right"></i>
                                    </Button>
                                    <Button
                                        onClick={() => gotoPage(pageCount - 1)}>
                                        <i className="fas fa-angle-double-right"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
