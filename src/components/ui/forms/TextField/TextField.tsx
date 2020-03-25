import React from 'react';
import { TextField as MaterialTextField, TextFieldProps as MaterialTextFieldProps } from '@material-ui/core';

// Type def
type TextFieldProps = {
    inputProps?: MaterialTextFieldProps,
    onChange: (event: any) => void | undefined,
    value?: string,
    label: string,
    name?: string,
};

// Override of default Material-ui Textfield
export const TextField = ({ onChange, name, label, value, inputProps = { variant: "outlined" } }: TextFieldProps) => {
    return (
        <MaterialTextField
            {...inputProps}
            name={name}
            value={value}
            onChange={onChange}
            label={label} />
    );
};