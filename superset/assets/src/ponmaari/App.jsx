import React from 'react';
import { hot } from 'react-hot-loader';
import setupApp from '../setup/setupApp';
import setupPlugins from '../setup/setupPlugins';
import HelloPonmaari from './Hello';

setupApp();
setupPlugins();

const addSliceContainer = document.getElementById('app');
const bootstrapData = JSON.parse(addSliceContainer.getAttribute('data-bootstrap'));

const App = () => (
  <HelloPonmaari datasources={bootstrapData.datasources} />
);

export default hot(module)(App);
