import {styled} from "@mui/material/styles";
import {Grid, Paper} from "@mui/material";
import {Title} from "../../Title";
import * as PropTypes from "prop-types";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export function GridChart({title,children}){
    return(
        <>

            <Grid item xs={12} md={6} sx={{mt:8}}>
                <Title title={title}></Title>
                <Item>{children}</Item>
            </Grid>


        </>
    )
}