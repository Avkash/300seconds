import React from 'react';

const Starter = React.lazy(() => import('./views/Starter/Starter.js'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/starter', name: 'Starter Dashboard', component: Starter },

];

export default routes;
