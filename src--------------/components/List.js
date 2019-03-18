import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currency: [],
      error: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20")
      .then(response => {
        return response.json().then(json => {
          return response.ok ? json : Promise.reject(json);
        });
      })
      .then(data => {
        this.setState({ currency: data.currencies });
        this.setState({ loading: false });
        console.log("Success", data);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading data...</div>;
    }
    return (
    <div>
        {/*<p>{this.state.currency.map(dataV => <li key={dataV.id}>{dataV.id}</li>)}</p>*/}
    
    <BootstrapTable data={this.state.currency} striped hover>
      <TableHeaderColumn isKey dataField='id'>Currency ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Currency Name</TableHeaderColumn>
      <TableHeaderColumn dataField='price'>Currency Price</TableHeaderColumn>
  </BootstrapTable>
    
    </div>
    )
  }
}

export default List;
