import axios, { AxiosReponse } from 'axios';
import React, { useEffect } from 'react';
// import './DanhMucHuyenPage.scss';

const DanhMucHuyenPage = () => {
  useEffect(() => {

    axios.get('https://localhost:44300/NguoiDung?ma_nam_hoc=2022&Id=69')
      .then(function (response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      })
  }, [])

  //   axios.get('axios')
  //     .then((response: AxiosReponse) => {
  //       console.log(response.data);
  //     })
  // }, [])
  return (
    <div className='danh-muc-page'>

    </div>
  );
};

export default DanhMucHuyenPage;
