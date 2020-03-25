import React from 'react';
import { Tooltip, FabProps, Fab, Icon } from '@material-ui/core';

// Type def
type FloatingButtonProps = {
    icon: string,
    tip?: string,
    onClick: (e: React.MouseEvent) => void,
    buttonProps?: FabProps,
};

// Override of FAB from Material-UI
export const FloatingButton = ({ icon, onClick, buttonProps = { color: "primary" }, tip = '' }: FloatingButtonProps) => {
    return (
        <Tooltip
            title={tip}
            placement="bottom">
            <Fab
                onClick={onClick}
                {...buttonProps}>
                <Icon>
                    {icon}
                </Icon>
            </Fab>
        </Tooltip>
    );
};