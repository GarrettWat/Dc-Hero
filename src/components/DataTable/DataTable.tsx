import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'power',
    headerName: 'Power',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, power: 'Flight' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, power: 'Flight' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, power: 'Flight' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, power: 'Flight' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, power: 'Flight' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, power: 'Flight' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, power: 'Flight' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, power: 'Flight' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, power: 'Flight' },
];

export const DataTable = () => {
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Super-Heros</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }