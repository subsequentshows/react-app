import React from 'react';
import './DanhMucPage.scss';
import './../../shared/components/Table/Table.scss';
import Header from "./../../Layout/Header/Header";

const DanhMucPage = () => {
  return (
    <div className='danh-muc-page'>
      <Header />

      <div className=''>
        <div className='page-title'>
          <p>Danh Mục</p>
        </div>

        {/* <div className='item-content'>
          <p>I. Danh mục pokemon</p>
        </div> */}
      </div>
    </div>
  );
};

export default DanhMucPage;
