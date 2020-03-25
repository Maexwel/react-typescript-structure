import React from 'react';
import { IconButton as MaterialIconButton, IconButtonProps as MaterialIconButtonProps, Icon, Tooltip } from '@material-ui/core';

// Type def
type IconButtonProps = {
    icon: string,
    tip?: string,
    onClick: (e: React.MouseEvent) => void,
    buttonProps?: MaterialIconButtonProps,
};

// Override of IconButton from Material-ui
export const IconButton = ({ icon, onClick, buttonProps = { color: "primary" }, tip = '' }: IconButtonProps) => {
    return (
        <Tooltip
            title={tip}
            placement="bottom">
            <MaterialIconButton
                onClick={onClick}
                {...buttonProps}>
                <Icon>
                    {icon}
                </Icon>
            </MaterialIconButton>
        </Tooltip>
    );
};