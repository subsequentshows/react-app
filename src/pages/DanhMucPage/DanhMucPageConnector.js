import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import DanhMucPage from '../DanhMucPage/DanhMucPage';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

function PaginatedItems({ itemsPerPage, isLoading }) {
  // State variables using the useState hook
  const [pokemons, setPokemons] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // File upload
  // const [file, setFile] = useState();
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState();
  const [error, setError] = useState();

  // Delete
  const [selectedItems, setSelectedItems] = useState([]);
  const [editedItems, setEditedItems] = useState({});

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

  // Search
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Delete
  const handleSelectChange = (event, id) => {
    if (event.target.checked) {
      // Add the selected item to the array
      setSelectedItems([...selectedItems, id]);
    } else {
      // Remove the item from the array
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    }
  };

  // Update
  const handleEditItem = (id) => {
    // Set the item to be edited
    setEditedItems((prevEditedItems) => ({
      ...prevEditedItems,
      [id]: { ...pokemons.find((pokemon) => pokemon.id === id) },
    }));
  };

  const handleUpdateItem = (id) => {
    // Implement your logic for updating the item on the backend
    // Send a request to your backend with the edited item

    // After successful update, clear the edited item
    setEditedItems((prevEditedItems) => {
      const updatedItems = { ...prevEditedItems };
      delete updatedItems[id];
      return updatedItems;
    });
  };

  // Modify the handleInputChange function to update the edited items
  const handleInputChange = (event, id, field) => {
    const { value } = event.target;
    setEditedItems((prevEditedItems) => ({
      ...prevEditedItems,
      [id]: { ...prevEditedItems[id], [field]: value },
    }));
  };
  const handleUpdateSelected = () => {
    // Implement your logic for updating the selected items on the backend
    // Send a request to your backend with the editedItems array

    // After successful update, clear the selected and edited items
    setSelectedItems([]);
    setEditedItems({});
  };

  const handleDeleteSelected = () => {
    // Filter out the selected items from the 'pokemons' array
    const updatedPokemons = pokemons.filter((pokemon) => !selectedItems.includes(pokemon.id));

    // Update the state with the modified array
    setPokemons(updatedPokemons);

    // Clear the selected items
    setSelectedItems([]);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Upload
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      console.log("Uploading file...");

      const formData = new FormData();
      formData.append("file", file);

      try {
        const result = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: formData,
        });

        const data = await result.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };
  // End of upload

  // const SingleFileUploader = () => {
  //   const [file, setFile] = useState < File | null > (null);

  //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files) {
  //       setFile(e.target.files[0]);
  //     }
  //   };



  // function Items({ currentItems, startIndex, onDelete, onSelectChange, selectedItems }) {
  function Items({ currentItems, startIndex, searchTerm, onDelete, onSelectChange, selectedItems, onInputChange, onUpdateSelected, onEditItem, onUpdateItem, }) {
    return (
      <>
        {currentItems &&
          currentItems.map((pokemon, index) => (
            <tr className='items' key={pokemon.id}>
              <td className={`stt-${startIndex + index + 1}`}>{startIndex + index + 1}</td>
              <td>
                <input
                  type="checkbox"
                  name={pokemon.name}
                  checked={selectedItems.includes(pokemon.id)}
                  onChange={(event) => handleSelectChange(event, pokemon.id)}
                />
              </td>
              <td>
                {editedItems[pokemon.id] ? (
                  <button className='edit-btn ' onClick={() => handleUpdateItem(pokemon.id)}>Update</button>
                ) : (
                  <button className='edit-btn' onClick={() => handleEditItem(pokemon.id)}>
                    <Icon.Gear />
                  </button>
                )}
              </td>
              <td>{pokemon.name}</td>
              <td>{pokemon.length}</td>
              <td></td>
            </tr>
          ))}
      </>
    );
  }

  // Calculating the end offset for the current page
  const endOffset = itemOffset + itemsPerPage;

  // Get the current items for the current page
  // const currentItems = pokemons.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(pokemons.length / itemsPerPage);

  const currentItems = filteredPokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredPokemons.length / itemsPerPage);

  return (
    <div className='item-wrapper'>
      <DanhMucPage />

      <div className='container-wrapper'>
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
              <Button className='qi-button' variant="primary" onClick={handleShow}>
                Nhập từ excel
              </Button>
            </div>

            <div className='item-function-btn'>
              <Button className='qi-button' onClick={handleDeleteSelected}>Xóa mục chọn</Button>
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
                <th className=''>[]</th>
                <th className=''>Sửa</th>
                <th className=''>Tên</th>
                <th className=''>Mã</th>
                <th className=''></th>
                <th className=''></th>
              </tr>
            </thead>

            <tbody>
              <Items
                currentItems={currentItems}
                startIndex={itemOffset}
                searchTerm={searchTerm}
                onDelete={handleDeleteSelected}
                onSelectChange={handleSelectChange}
                selectedItems={selectedItems}
                onInputChange={handleInputChange}
                onUpdateSelected={handleUpdateSelected}
                onEditItem={handleEditItem}
                onUpdateItem={handleUpdateItem}
              />
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
        >
        </ReactPaginate>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className='modal-title-wrapper'>
              <img className='modal-logo' src='' alt='' />
              <p className='modal-title'>Quản lý thu phí</p>
            </Modal.Title>

            {/* <Button variant="secondary" onClick={handleClose}>
              X
            </Button> */}
          </Modal.Header>

          <Modal.Body>
            <div className='item-header'>
              <div className='item-title'>
                <img className='icon' src='' alt='' />
                <p>Nhập từ excel</p>
              </div>

              <div className='item-function'>
                <div className='item-function-btn'>
                  <Button className='qi-button'>
                    Tải file mẫu
                  </Button>
                </div>

                <div className='item-function-btn'>
                  <Button className='qi-button'>
                    Ghi
                  </Button>
                </div>

                <div className='item-function-btn'>
                  <Button className='qi-button' variant="secondary" onClick={handleClose}>
                    Đóng
                  </Button>
                </div>
              </div>
            </div>

            <div className='item-filter'>

            </div>

            <div className='upload-item-wrapper'>
              <div className='upload-item'>
                <form name='upload-form' className='upload-file' >
                  <input id="file" type="file" onChange={handleFileChange} />
                </form>
                {file && <button className='upload' onClick={handleUpload}>Tải lên</button>}
              </div>
            </div>
          </Modal.Body>
        </Modal>
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
