import React, { useState } from 'react';
import './DanhMucPage.scss';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

// import PagePagination from '../../shared/components/TablePagePagination/TablePagePagination';

const DanhMucPage = () => {
  return (
    <div id='container'>
      <div className='container'>
        <div className='page-title'>
          <p>Danh Mục</p>
        </div>

        <div className='item-content'>
          <p>I. Danh Mục</p>

          <div className='inner-content'>
            <div className='pagination'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DanhMucPage;
