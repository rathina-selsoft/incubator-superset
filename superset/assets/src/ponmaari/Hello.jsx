import React, { Fragment } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Datasource from "./components/Datasource";
import Charts from "./components/Charts";
import Dashboard from "./components/Dashboard";

export class HelloPonmaari extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Fragment>
        <h3>Create Dashboard</h3>
        <Tabs defaultActiveKey="datasource" id="uncontrolled-tab-example">
          <Tab eventKey="datasource" title="Datasource">
            <Datasource />
          </Tab>
          <Tab eventKey="chart" title="Chart">
            <Charts />
          </Tab>
          <Tab eventKey="dashboard" title="Dashboard">
            <Dashboard />
          </Tab>
        </Tabs>
      </Fragment>
    );
  }
}

export default HelloPonmaari;
