import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export  function BasicBars() {
    return (
        <div style={{
            backgroundColor:'White',
            borderRadius:"10px",
            boxShadow:"0 45px 50% black",
            display:"flex",
            alignItems:"center",
            height:"300px",
            padding:"20px"
        }}>
        <BarChart
            xAxis={[{ scaleType: 'band', data: [ 'الاسبوع الاول','السبوع الثاني', 'الاسبوع الثالث', 'الاسبوع الرابع'] }]}
            series={[{ data: [4, 3, 5,8],color:"rgb(248,217,106)",label:'المبيعات' },
                    { data: [1, 6, 3,7] ,color:"rgb(60,57,85)",label:'التكاليف'},
                    { data: [2, 5, 6,7] ,color:"rgba(45,45,45,0.56)",label:'الجودة'}]}

            width={590}
            height={300}
        />
        </div>
    );
}