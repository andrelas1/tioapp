import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Button } from 'antd';

import styled from 'styled-components';
import 'antd/dist/antd.css';

const StyledApp = styled.div`

`;

export const App = () => {
  return (
    <StyledApp>
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
    </StyledApp>
  );
};

export default App;
