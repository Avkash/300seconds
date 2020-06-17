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
import JsonTable from 'ts-react-json-table';
import GetRestObject from '../../api/ConnectServerGet';
import PostRestObject from '../../api/ConnectServerPost';


class CsvDataReader extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
          csvDataObject:[]
      };
    }
  
    HelloGetRequestedDetails = () => {
      GetRestObject.GetRestRequest(`/v1/datareader`, getResultObj => {
          this.setState({
            csvDataObject:getResultObj   
          })
      });
    }

    renderColumnNames = (colmunList) => {
        return(
            colmunList.map( (item, index) => {
                return(
                    <span key={index} className="mr-1 text-default">{index+1}: {item}</span>
                )
            })
        )
    }
 
    renderCsvDataResults = () => {
        if (this.state.csvDataObject && this.state.csvDataObject.resultStatus && this.state.csvDataObject.resultData){
            var apiStatus = this.state.csvDataObject.resultStatus;
            var apiData = this.state.csvDataObject.resultData;
            if (apiStatus === 'SUCCESS' && apiData.length == 1){
                apiData = apiData[0]
                return(
                    <div>
                        <span className="text-success">Rows: <span className="text-primary"><b>{apiData.rows}</b></span></span>
                        <br/>
                        <span className="text-success">Columns: <span className="text-primary"><b>{apiData.cols}</b></span></span>
                        <br/>
                        <span className="text-success">Column Names: 
                            <span className="text-primary"><b>{this.renderColumnNames(apiData.columns)}</b></span>
                        </span>
                        <hr/>
                        <Card>
                            <CardHeader>All Rows</CardHeader>
                            <CardBody className="mb-1" style={{height:'400px', overflowY: "auto", overflow: "-moz-scrollbars-horizontal"}}>
                                <JsonTable rows={apiData.rowData} columns={apiData.columns} />
                            </CardBody>
                        </Card>
                    </div>
                )
            } else {
                return(
                    <div>
                        <span className="text-danger">{apiData[0].message}</span>
                    </div>
                )
            }
        }
    }

    componentDidMount(){
      this.HelloGetRequestedDetails()
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
    render() {
  
      return (
        <div className="animated fadeIn">
          <Row>
            <Col md={12}>
              <h3>Data Reader Starter</h3>
              <hr/>
              {this.renderCsvDataResults()}
            </Col>
          </Row>
        </div>
    );
  }
}

export default CsvDataReader;
