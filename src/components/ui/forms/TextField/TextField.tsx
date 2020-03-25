import React from 'react';
import { TextField as MaterialTextField, TextFieldProps as MaterialTextFieldProps } from '@material-ui/core';

// Type def
type TextFieldProps = {
    inputProps?: MaterialTextFieldProps,
    onChange: (event: any) => void | undefined,
    value: string,
};

// Override of default Material-ui Textfield
export const TextField = ({ onChange, value, inputProps = { variant: "outlined" } }: TextFieldProps) => {
    return (
        <MaterialTextField
            {...inputProps}
            value={value}
            onChange={onChange} />
    );
};