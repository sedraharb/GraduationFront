import * as React from 'react';
import {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {users} from "../../Routes";
import {Notify} from "../../utils";
import TableCell from '@mui/material/TableCell';


const columns = [

    {field: 'id', headerName: 'ID', width: 0.1,},
    {field: 'name', headerName: 'First name', width: 130},
    {field: 'last_name', headerName: 'Last name', width: 130},
    {field: 'email', headerName: 'Email', width: 170},
    {field: 'phone', headerName: 'phone', width: 170},
    {field: 'updated_at', headerName: 'updated_at', width:160},
    {field: 'created_at', headerName: 'created_at', width: 160},
    {field: 'address', headerName: 'address', width: 170},

];



export function UsersTable() {

     //get users from Api

    const [allUsers, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            // const params={
            //
            // }
            const data = await users.getAll();
            console.log(data);
            setUsers(data);
        };
        getUsers()
        console.log(allUsers)
    }, [])

    const rows = allUsers


    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows
                // allUsers.map(user=>[{key:{user.id},id:{user.id},last_name:{user.last}}]
               }
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 5},
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}