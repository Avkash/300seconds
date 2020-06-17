import React from 'react';

const Starter = React.lazy(() => import('./views/Starter/Starter.js'));
const CsvDataReader = React.lazy(() => import('./views/DataReader/CsvDataReader.js'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/starter', name: 'Starter Dashboard', component: Starter },
  { path: '/csvdatareder', name: 'CSV Data Reader', component: CsvDataReader },

];

export default routes;
