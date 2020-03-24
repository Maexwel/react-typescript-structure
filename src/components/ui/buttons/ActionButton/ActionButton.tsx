import React from 'react';
import { Button, Tooltip, ButtonProps } from '@material-ui/core';

type ActionButtonProps = {
    label: string,
    tip?: string,
    buttonProps?: ButtonProps,
}

// Action button
// Override of material-ui button
export const ActionButton = ({ label, tip = '', buttonProps = { variant: "contained", color: "primary" } }: ActionButtonProps) => {

    return (
        <Tooltip
            title={tip}
            placement="bottom">
            <Button {...buttonProps}>
                {label}
            </Button>
        </Tooltip>
    );
};