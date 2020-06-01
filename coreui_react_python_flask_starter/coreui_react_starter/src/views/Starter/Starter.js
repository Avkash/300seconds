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
import GetRestObject from '../../api/ConnectServerGet';
import PostRestObject from '../../api/ConnectServerPost';


class Starter extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
      };
    }
  
    HelloGetRequestedDetails = () => {
      GetRestObject.GetRestRequest(`/v1/hello`, getResultObj => {
        console.log(getResultObj);
      });
    }

    ByeGetRequestedDetails = () => {
      GetRestObject.GetRestRequest(`/v1/bye`, getResultObj => {
        console.log(getResultObj);
      });
    }

    PostRequestedDetails = () => {
      var postData = {
        RequestType: 'api',
        RequestJson: {'param':'YouTube'}
      }    
      PostRestObject.PostRestRequest(`/v1/bye`, postData, postResultObj => {
        console.log(postResultObj);
      });
    }

    componentDidMount(){
      this.HelloGetRequestedDetails()
      this.ByeGetRequestedDetails()
      this.PostRequestedDetails()
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
