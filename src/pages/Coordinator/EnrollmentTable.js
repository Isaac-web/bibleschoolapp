import React, {useState} from 'react';
import _ from 'lodash';
import {Paper, TableContainer, Table, Toolbar, TextField} from '@material-ui/core';
import {FilterList} from '@material-ui/icons';


import {studentsData} from "../../config/tabledata";
import AppMenu from '../../components/common/AppMenu';
import Search from '../../components/common/Search/Search';
import TableHead from "../../components/Table/TableHead";
import TableBody from '../../components/Table/TableBody';



const EnrollmentTable = () => {
    const [enrollments, setEnrollments] = useState(studentsData);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(undefined);
    const [sortColumn, setSortColumn] = useState({path: "", order: "asc"});


    const handleSort = sortColumn => {
        setSortColumn(sortColumn);
    }


    const handleFilter = option => {
        setFilter(option)
    };


    const handleSearch = (value) => {
        setSearch(value);
    }


    


    const columns = [
        {path: "name", label: "Name"},
        {path: "age", label: "Age"},
        {path: "progress", label: "Progress (%)"},
        {path: "gender", label: "Gender"},
    ];

    
    const filterMenu = [
            {label: "Completed", option: "complete"},
            {label: "In Progress", option: "inProgress"},
        ]


    const sortedEnrollments = _.orderBy(enrollments, [sortColumn.path], [sortColumn.order]);
    const filteredEnrollments = filter !== undefined ? sortedEnrollments.filter(s => s.status === filter) : sortedEnrollments;
    const searchResults = filteredEnrollments.filter(f => f.name.trim().toLowerCase().includes(search.trim().toLowerCase()))
    return (
          <TableContainer>
          <Toolbar>
            <div style={{width: "70%"}}>
                <Search value={search} onSearch={handleSearch}/>
            </div>
            <div style={{marginLeft: "auto"}}>
                <AppMenu
                    IconComponent={<FilterList color="primary"/>}
                    menuItems={[{label: "All"},...filterMenu]}
                    onItemSelect={handleFilter}
                />
            </div>
          </Toolbar>
              <Table>
                  <TableHead columns={columns} onSort={handleSort} sortColumn={sortColumn}/>
                  <TableBody data={searchResults ? searchResults : filteredEnrollments} columns={columns}/>
              </Table>
          </TableContainer>         
    )
}

export default EnrollmentTable
