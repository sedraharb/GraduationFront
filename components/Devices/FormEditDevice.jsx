import {TextField} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {getValidationObject, Notify} from "../../utils";
import {useForm} from "react-hook-form";
import {authServices} from "../../Routes";

export function FormEditDevice(){



    return (
        <>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="اسم العميل"
            name="email"
            autoComplete="email"
            autoFocus
        />
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="حالة الجهاز"
            name="email"
            autoComplete="email"
            autoFocus
        />
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Code"
            name="email"
            autoFocus
        />
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="اسم فني الصيانة"
            name="email"
            autoComplete="email"
            autoFocus
        />
    </>
    );
}