import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles';
export function BasicPie() {
    const theme = useTheme();
    return (<div style={{
            backgroundColor:'White',
            display:"flex",
            alignItems:"center",
            height:"300px",
            padding:"20px"
        }}>
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: 'mmmm',color:"rgba(34,110,138,0.64)"},
                        { id: 2, value: 14, label: 'series C' ,color:"rgba(49,32,103,0.82)"},
                        { id: 1, value: 15, label: 'series B',color:"rgb(248,217,106)" },
                        ],
                },
            ]}
            width={500}
            height={240}

        />
    </div>
    );
}