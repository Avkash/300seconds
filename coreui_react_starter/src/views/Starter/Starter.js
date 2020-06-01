import React, { Component, lazy, Suspense } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

class Starter extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
      };
    }
  

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
    render() {
  
      return (
        <div className="animated fadeIn">
          <Row>
            <Col md={12}>
              <h3>Starter</h3>
            </Col>
          </Row>
        </div>
    );
  }
}

export default Starter;
