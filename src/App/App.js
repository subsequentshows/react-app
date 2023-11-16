import React, { Suspense } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routes from '../routes';
import Header from '../Layout/Header/Header';
import loadingGif from './../assets/images/loading.gif';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div><img src={loadingGif} alt='' /></div>}>
        <>
          <Header >

          </Header>

          <div className="navbar">
            <Link className="link" to="/">Danh Mục</Link>
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
