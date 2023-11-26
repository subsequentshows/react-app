import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Header from "./../../Layout/Header/Header";
import axios from 'axios';
import DanhMucPage from '../DanhMucPage/DanhMucPage';

function Items({ currentItems, startIndex }) {
  let i = 1;
  return (
    <>
      {currentItems &&
        currentItems.map((pokemon, index) => (
          <tr className='items' key={pokemon.id}>
            <td className={`stt-${startIndex + index + 1}`}>{startIndex + index + 1}</td>
            <td>{pokemon.name}</td>
            <td>{pokemon.length}</td>
            <td></td>
          </tr>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // State variables using the useState hook
  const [pokemons, setPokemons] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000`
        );

        // Updating the 'pokemons' state with the results
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Đã xảy ra lỗi khi lấy dữ liệu:', error);
      }
    };

    // Calling when component mounts
    fetchData();
  }, []);

  // Calculating the end offset for the current page
  const endOffset = itemOffset + itemsPerPage;
  
  // Slicing the 'pokemons' array to get the current items for the current page
  // current offset for pagination
  const currentItems = pokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemons.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;

    setItemOffset(newOffset);
  };

  return (
    <div className='item-wrapper'>
      <DanhMucPage></DanhMucPage>
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Mã</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <Items currentItems={currentItems} startIndex={itemOffset} />
          </tbody>
        </table>

        <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageClassName="pages"
              pageCount={pageCount}
              containerClassName="pagination"
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
      </div>
    </div>
  );
}

ReactDOM.render(
  <PaginatedItems itemsPerPage={10} />,
  document.getElementById('root')
);

const DanhMucPageConnector = () => {
  return (
    <></>
  );
};

export default DanhMucPageConnector;
