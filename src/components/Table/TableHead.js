import React from 'react'
import {TableHead as MuiTableHead, TableRow, TableCell} from '@material-ui/core';


const TableHead = ({columns, onSort, sortColumn}) => {
    const raiseSort = (path) => {
        let order = "asc";
        if(path === sortColumn.path)
            if(sortColumn.order === "asc") order = "desc";
            else order = "asc";
        onSort({...sortColumn, path, order});
    }


    return (
        <MuiTableHead>
            <TableRow>
                {columns.map(c => <TableCell key={c.path || c.key} onClick={() => raiseSort(c.path)}>{c.label}</TableCell>)}
            </TableRow>
      </MuiTableHead>
    )
}

export default TableHead
