import React from 'react';

import Table from 'react-bootstrap/Table';

class SummaryData extends React.Component {

  render() {
    return (
      <>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th colSpan="2"><sup>o</sup>C</th>
              <th>W</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.max}</td>
              <td>{this.props.min}</td>
              <td>{this.props.wind}</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }


}

export default SummaryData;