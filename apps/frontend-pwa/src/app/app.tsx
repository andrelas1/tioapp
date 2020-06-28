import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import styled from 'styled-components';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

const StyledApp = styled.div`

`;

export const App = () => {
  return (
    <div>
      <header>
        <h1>TIOAPP</h1>
      </header>
      <main>
        something here...
      </main>

      <Button color="primary">
        TESTING BUTTION
      </Button>

      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
    </div>
  );
};

export default App;
