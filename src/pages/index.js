import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Content from './Content';

export function Pages(props) {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Content} />
        <Route render={() => <p>you seem lost...</p>} />
      </Switch>
    </Layout>
  );
}
