import React from 'react';

const routes = [
  {
    path: '/Home',
    component: React.lazy(() => import('./pages/Home/Home')),
    exact: true
  },
  {
    path: '/DanhMuc/DanhMuc',
    component: React.lazy(() => import('./pages/DanhMucPage/DanhMucPageConnector')),
    exact: true
  },
  {
    path: '/DanhMuc/DanhMucHuyen',
    component: React.lazy(() => import('./pages/DanhMucHuyenPage/DanhMucHuyenPageConnector')),
    exact: true
  }
]

export default routes;
