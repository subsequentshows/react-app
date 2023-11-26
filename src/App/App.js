import React, { Suspense } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import routes from '../routes';
import Header from '../Layout/Header/Header';
import loadingGif from './../assets/images/loading.gif';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div><img src={loadingGif} alt='' /></div>}>
        <>
          <Header />

          <div className="navbar">
            <Link className="link" to="/DanhMuc/DanhMuc">Danh mục</Link>
            <Link className="link" to="/DanhMuc/DanhMucTinh">Danh mục tỉnh</Link>
            <Link className="link" to="/DanhMuc/DanhMucHuyen">Danh mục huyen</Link>
            <Link className="link" to="/todos">Todos</Link>
          </div>

          <Switch>
            {
              routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />))
            }
          </Switch>
        </>
      </Suspense>
    </Router>
  );
}

export default App;
