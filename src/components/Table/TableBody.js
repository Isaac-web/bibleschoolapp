import React from 'react'
import { TableBody as MuiTableBody, TableRow, TableCell} from '@material-ui/core';
import _ from 'lodash';

const TableBody = ({data, columns}) => {
    const renderCell = (item, column) => {
        return column.content ? 
            column.content(item) : _.get(item, column.path);
    }
    
    return (
        <MuiTableBody>
           {data.map(item => <TableRow key={item._id}>
                {columns.map(column => <TableCell key={`${item._id}_${column.path || column.key}`}>{renderCell(item, column)}</TableCell>)}
            </TableRow>)}
        </MuiTableBody>
    )
}

export default TableBody
