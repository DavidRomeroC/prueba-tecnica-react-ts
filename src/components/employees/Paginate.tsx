import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export const Paginate = ({ data }: any) => {

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <table className='table__main-content'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Cumpleaños</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(({id, name, last_name, birthday}) => (
                        <tr key={id}>
                            <td> {name} </td>
                            <td> {last_name} </td>
                            <td> { `${new Date(birthday).getFullYear()}/${new Date(birthday).getMonth()}/${new Date(birthday).getDay()} ` } </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Siguiente >"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                pageRangeDisplayed={5}
                previousLabel="< Anterior"
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='page-num'
            />
        </>
    )
}
