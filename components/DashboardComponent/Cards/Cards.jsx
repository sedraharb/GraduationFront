import MailIcon from "@mui/icons-material/Mail";
import { useEffect, useState } from 'react';
import { device } from "../../../Routes";
import { OutlinedCard } from "./Card";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import TvIcon from '@mui/icons-material/Tv';
import DoneIcon from '@mui/icons-material/Done';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import HourglassDisabledRoundedIcon from '@mui/icons-material/HourglassDisabledRounded';
import { completedDevices } from "../../../Routes/api/completedDevices";

export function Cards() {
    const [devices, setDevices] = useState([]);
    useEffect(() => {
        const getDevices = async () => {
            const params = {
                'repaired_in_center': 1,
                'with': 'client,user'
            }
            const data = await device.getAll(params);
            setDevices(data)
        };
        getDevices();
    }, [])

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
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    return (
        <>
            <div style={{
                display: ' flex',
                alignContent: 'center',
                alignItems: 'baseline',
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                justifyContent: ' flex-start'

            }}>
                <OutlinedCard name='عدد الأجهزة الموجودة في المركز' number={devices.length}>
                    <TvIcon />
                </OutlinedCard>

                <OutlinedCard name='عدد الجاهز منها' number={devices.filter(device => device.status === 'جاهز').length}>
                    <DoneIcon />
                </OutlinedCard>
                <OutlinedCard name='عدد الذي يتم العمل عليه' number={devices.filter(device => device.status === 'قيد العمل').length}>
                    <BuildIcon />
                </OutlinedCard>
                <OutlinedCard name=' عدد التي تم تسليمها جاهزة' number={completed_devices.filter(completed_device => completed_device.status === 'جاهز').length}>
                    <LocalShippingOutlinedIcon />
                </OutlinedCard>
                <OutlinedCard name=' عدد التي تم تسليمها غير جاهزة' number={completed_devices.filter(completed_device => completed_device.status === 'غير جاهز'
                    || completed_device.status === 'لا يصلح').length}>
                    <PieChartRoundedIcon />
                </OutlinedCard>
                <OutlinedCard name='عدد الأجهزة التي تم تسليمها هذا الشهر' number={completed_devices.filter(completed_device => {
                    const deliveryDate = new Date(completed_device.date_delivery);
                    const deliveryMonth = deliveryDate.getMonth() + 1;
                    return deliveryMonth === currentMonth && deliveryDate.getFullYear() === currentDate.getFullYear();
                }).length}>
                    <HourglassDisabledRoundedIcon />
                </OutlinedCard>
            </div>
        </>
    );
}