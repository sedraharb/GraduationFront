import * as React from 'react';
import {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Notify} from "../../utils";
import TableCell from '@mui/material/TableCell';

import {device} from "../../Routes";



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



export function Devices() {

    //get devices from Api
    const[devices,setDevices]=useState([]);
    useEffect(()=>{
        const getDevices=async ()=>{
            // const params={
            //
            // }
            const data=await device.getAll();
            console.log(data);
            setDevices(data)

        };
        getDevices();

    },[])
    const rows=[
        {id:1,last_name:"sedra"}
    ]
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
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