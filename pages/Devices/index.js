import {useRouter} from "next/router";
import {useEffect} from "react";
import Cookies from "js-cookie";
import {Cards, DataTable, GridAriaV7} from '/components'
import {BasicPie} from "/components";
import {BasicBars} from "/components"
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import {Grid} from "@mui/material";
import {GridChart} from "/components";
import {Title} from "/components";
export default function(){
    const router = useRouter();

    useEffect(() => {
        if (!Cookies.get('auth-token')) {
            router.push('/auth/login');
        }
    }, []);
    return(
        <>

          <DataTable/>

        </>
    );
}