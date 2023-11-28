import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import DanhMucPage from '../DanhMucPage/DanhMucPage';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Items({ currentItems, startIndex }) {
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

function PaginatedItems({ itemsPerPage, isLoading }) {
  // State variables using the useState hook
  const [pokemons, setPokemons] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  // Pagination
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;

    setItemOffset(newOffset);
  };

  // Search functionality
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculating the end offset for the current page
  const endOffset = itemOffset + itemsPerPage;

  // Get the current items for the current page
  // const currentItems = pokemons.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(pokemons.length / itemsPerPage);

  const currentItems = filteredPokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredPokemons.length / itemsPerPage);
  // const [modalShow, setModalShow] = React.useState(false);


  return (
    <div className='item-wrapper haha'>
      <DanhMucPage />

      <div className='container'>
        <div className='item-header'>
          <div className='item-title'>
            <p>I. Danh mục pokemon</p>
          </div>

          <div className='item-function'>
            <div className='item-function-btn'>
              <button className='qi-button'>Tìm kiếm</button>
            </div>

            <div className='item-function-btn'>
              <button className='qi-button'>Ghi</button>
            </div>

            <div className='item-function-btn'>
              <button className='qi-button'>Nhập từ excel</button>
            </div>

            <div className='item-function-btn'>
              <button className='qi-button'>Xóa mục chọn</button>
            </div>

            <div className='item-function-btn'>
              <button className='qi-button'>Xuất excel</button>
            </div>
          </div>
        </div>

        <div className='item-filter'>
          <div className='search-field'>
            <label>Tên</label>
            <input
              type='text'
              placeholder='Tên'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className='item-data'>
          <table className='content-table'>
            <thead>
              <tr>
                <th className=''>STT</th>
                <th className=''>Tên</th>
                <th className=''>Mã</th>
                <th className=''></th>
              </tr>
            </thead>

            <tbody >
              <div className={`loading-modal ${isLoading ? 'loading-modal__show' : ''}`}>
                {isLoading ? (<h3>Loading...</h3>) : ''}
              </div>

              <Items currentItems={currentItems} startIndex={itemOffset} />
            </tbody>
          </table>
        </div>

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

PaginatedItems.defaultProps = {
  isLoading: false
}

PaginatedItems.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })),
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  })),
  isLoading: PropTypes.bool
}

const DanhMucPageConnector = () => {
  return (
    <></>
  );
};

export default DanhMucPageConnector;
