import {useRouter} from "next/router";
import {useEffect} from "react";
import Cookies from "js-cookie";
import { ClientsTable } from "../../components/Clients";

export default function(){
    const router = useRouter();

    useEffect(() => {
        if (!Cookies.get('auth-token')) {
            router.push('/auth/login');
        }
    }, []);
    return(
        <>
           <ClientsTable/>
        </>
    );
}