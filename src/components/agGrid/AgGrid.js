import * as React from "react";
import './agGrid.css'

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class AgGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      columnDefs: [
        {headerName: 'Id', field: 'id', sortable: true, filter: true, checkboxSelection: true},
        {headerName: 'Name', field: 'name', sortable: true, filter: true},
        {headerName: 'Username', field: 'username', sortable: true, filter: true},
        {headerName: 'Email', field: 'email', sortable: true, filter: true},
        {headerName: 'Website', field: 'website', sortable: true, filter: true},
        {headerName: 'Street', field: 'address.street', sortable: true, filter: true}
      ],
      // rowData: [
      //   { make: "Toyota", model: "Celica", price: 35000 },
      //   { make: "Ford", model: "Mondeo", price: 32000 },
      //   { make: "Porsche", model: "Boxter", price: 72000 }
      // ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(rowData => this.setState({rowData}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="ag-theme-balham agGrid-text">
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection="multiple"
        />
      </div>
    )
  }
}

export default AgGrid;