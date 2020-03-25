import React, { useState } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { IconButton, Icon, Card, CardActions, Collapse, Paper, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { NotificationFactory } from '../../../../util';

// Style
const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            maxWidth: 400,
            minWidth: 344,
        },
        title: {
            fontWeight: 'bold',
            color: 'white',
        },
        text: {
            fontSize: 13,
        },
        error: {
            backgroundColor: theme.palette.error.main,
        },
        success: {
            backgroundColor: theme.palette.success.main,
        },
        info: {
            backgroundColor: theme.palette.primary.main,
        },
        default: {
            backgroundColor: theme.palette.grey[900],
        },
        actionRoot: {
            padding: theme.spacing(1),
        },
        icons: {
            marginLeft: 'auto',
            color: 'white',
        },
        icon: {
            color: 'white',
        },
        expand: {
            padding: '4px 4px',
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        collapse: {
            padding: theme.spacing(1),
            display: 'flex',
            flexWrap: 'wrap',
            color: theme.palette.common.white,
        },
    })
);

// Type def
type NotificationProviderProps = {
    children: React.ReactChild,
};

// Custom SnackbarProvider used to provide a close button to all notifications
// This is related to "prevent duplicate section" here : https://iamhosseindhv.com/notistack/demos#material-props 
// Thanks to notistack
export const NotificationProvider = ({ children }: NotificationProviderProps) => {

    return (
        <SnackbarProvider
            maxSnack={5}
            anchorOrigin={{ horizontal: "right", vertical: 'bottom' }}
            autoHideDuration={10000}
            content={
                (key, message:string) => (<div key={key}><SnackMessage id={key} {...NotificationFactory.parseNotification(message)} /></div>) // parse notification to extract title, content and variant
            }>
            {/** Render children */}
            {children}
        </SnackbarProvider>
    );
};

// // //
// Type def
type SnackMessageProps ={
    title: string,
    content?:string,
    variant?:string,
    id?:string,
};
// Custom SnackMessage. Thanks to https://github.com/iamhosseindhv/notistack/issues/120
const SnackMessage = ({ title, content, variant = 'default', id }:SnackMessageProps) => {
    const classes = useStyles();
    const { closeSnackbar } = useSnackbar();
    const [expanded, setExpanded] = useState(false);


    // Expand the content of the snack bar on expand clicked
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // Close the snack bar on dismiss clicked
    const handleDismiss = () => {
        closeSnackbar(id);
    };

    return (
        <Card className={clsx(classes.card, {
            [classes.success]: variant === 'success',
            [classes.error]: variant === 'error',
            [classes.default]: variant === 'default',
            [classes.info]: variant === 'info',
        })}>
            <CardActions className={classes.actionRoot}>
                <Typography className={classes.title}>{title}</Typography>
                <div className={classes.icons}>
                    <IconButton
                        aria-label="Show more"
                        className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
                        onClick={handleExpandClick}
                    >
                        <Icon className={classes.icon} >expand_more</Icon>
                    </IconButton>
                    <IconButton className={classes.expand} onClick={handleDismiss}>
                        <Icon className={classes.icon}>close</Icon>
                    </IconButton>
                </div>
            </CardActions>
            <Collapse in={expanded} timeout="auto" mountOnEnter unmountOnExit>
                <Paper className={clsx(classes.collapse, {
                    [classes.success]: variant === 'success',
                    [classes.error]: variant === 'error',
                    [classes.default]: variant === 'default',
                    [classes.info]: variant === 'info',
                })}>
                    <Typography gutterBottom className={classes.text}>{content}</Typography>
                </Paper>
            </Collapse>
        </Card >
    );
};