import MailIcon from "@mui/icons-material/Mail";
import {OutlinedCard} from "./Card";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import TvIcon from '@mui/icons-material/Tv';
import DoneIcon from '@mui/icons-material/Done';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import HourglassDisabledRoundedIcon from '@mui/icons-material/HourglassDisabledRounded';

export function Cards(){
    return  (
        <>
            <div style={{
                display:' flex',
                alignContent: 'center',
                alignItems: 'baseline',
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                justifyContent:' flex-start'

            }}>

                <OutlinedCard name='عدد الأجهزة الموجودة في المركز' number='76'>
                    <TvIcon />
                </OutlinedCard>

                <OutlinedCard name='عدد الجاهز منها' number='76'>
                    <DoneIcon/>
                </OutlinedCard>
                <OutlinedCard name='عدد الذي يتم العمل عليه' number='56%'>
                    <BuildIcon />
                </OutlinedCard>
                <OutlinedCard name=' عدد التي تم تسليمها جاهزة' number='95'>
                    <LocalShippingOutlinedIcon/>
                </OutlinedCard>
                <OutlinedCard name=' عدد التي تم تسليمها غير جاهزة' number='567'>
                    <PieChartRoundedIcon/>
                </OutlinedCard>
                <OutlinedCard name='عدد الأجهزة التي تم تسليمها هذا الشهر' number='76'>
                    <HourglassDisabledRoundedIcon />
                </OutlinedCard>
            </div>
        </>
    );
}