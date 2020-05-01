import React from 'react';
import { Layout } from 'components';
import './index.scss';

const Index = ({ location }) => (
  <Layout location={location}>
    <div className="wrapper">
      <h1>Homepage</h1>
    </div>
  </Layout>
);

export default Index;
