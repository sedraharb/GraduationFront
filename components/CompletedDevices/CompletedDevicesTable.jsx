import { useEffect, useState } from "react";
import { completedDevices } from "../../Routes/api/completedDevices";

const columns = [

    { field: 'rowNumber', headerName: '#', width: 70 },
    { field: 'model', headerName: 'Model', width: 130 },
    { field: 'imei', headerName: 'Imei', width: 130 },
    { field: 'code', headerName: 'Code', width: 170 },
    { field: 'client_name', headerName: 'Client Name', width: 170 },
    { field: 'user_name', headerName: 'Technician Name', width: 160 },
    { field: 'cost_to_client', headerName: 'Cost To Client', width: 160 },
    { field: 'status', headerName: 'Status', width: 160 },
    { field: 'date_receipt', headerName: 'Date Receipt', width: 160 },
    { field: 'date_delivery', headerName: 'Date Delivery', width: 160 },
];
export  function CompltedDevices(){
    
    const [completed_devices, setCompletedDevices] = useState([]);
    useEffect(() => {
        const getDevices = async () => {
            const params = {
                'repaired_in_center': 1,
            }
            const data = await completedDevices.getAll(params);
            setCompletedDevices(data)
        };
        getDevices();
    }, [])

    const rows = completed_devices;

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );

}