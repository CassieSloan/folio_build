import React from 'react';
import { Layout } from 'components';
import './index.scss';

const Index = ({ location }) => (
  <Layout location={location}>
    <div className="wrapper">
      <h1>Nuzzle Homepage</h1>
      <h2>bellow is the embed link</h2>
      <div>
        <iframe src="https://app.acuityscheduling.com/schedule.php?owner=18392918&calendarID=3800259" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
      </div>
    </div>
  </Layout>
);

export default Index;
