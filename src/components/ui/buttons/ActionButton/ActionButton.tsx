import React from 'react';
import { Button, Tooltip, ButtonProps, Icon } from '@material-ui/core';

// Type def
type ActionButtonProps = {
    label: string,
    icon?: string,
    tip?: string,
    onClick: (e: React.MouseEvent) => void,
    buttonProps?: ButtonProps,
};

// Action button
// Override of material-ui button
export const ActionButton = ({ label, onClick, icon, tip = '', buttonProps = { variant: "contained", color: "primary" } }: ActionButtonProps) => {

    return (
        <Tooltip
            title={tip}
            placement="bottom">
            <Button
                onClick={onClick}
                {...buttonProps}>
                {icon && <Icon>{icon}</Icon>}
                {label}
            </Button>
        </Tooltip>
    );
};