import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, useTheme, CssBaseline, Drawer, Grid, AppBar, Toolbar, List, ListItemText, ListItemIcon, ListItem, IconButton, Divider, Typography, Icon, Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { updateViewAction } from '../../store/actions';
import { withRouter } from 'react-router-dom';

// Type def
type LinkObjectProps = {
    icon: string,
    name: string,
    displayText: string,
    path: string,
};

// Style def
const drawerWidth = 220;

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        selectedListItem: {
            color: theme.palette.secondary.main,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap'
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: 0, // The drawer close isn't displayed if sm
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(8),
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            padding: theme.spacing(2),
            marginTop: theme.spacing(8),
            width: "100%"
        },
    }),
);

// Base Page component
// Component that wrap all pages of the application
const BasePage = (props: any) => {
    // Variable definition
    const { component: Component, path, name, currentPage, viewToState, history } = props;
    const classes = useStyles();
    const theme = useTheme();
    // State    
    const [open, setOpen] = useState(false);

    // Links definition
    const links: Array<LinkObjectProps> = [
        {
            icon: 'home',
            name: 'HOME_PAGE',
            displayText: 'Accueil',
            path: '/',
        }
    ];

    // onRedirect
    useEffect(() => {
        viewToState({ path, name }); // set the current page (route = { path: '/', name: '/' })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path, name]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                color="primary" >
                <Toolbar>
                    <Grid
                        justify="space-between"
                        alignItems="center"
                        container
                    >
                        <Grid item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <Icon>menu</Icon>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography
                                component="h1">
                                <b>Gestion de Rues</b>
                            </Typography>
                        </Grid>
                        <Grid item></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <Typography component="h5">
                        Menu
                            </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <Icon>chevron_right</Icon> : <Icon>chevron_left</Icon>}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {
                        links.map((link: LinkObjectProps, index) => (
                            <DrawerLink
                                key={index}
                                {...link}
                                displayText={link.displayText}
                                isCurrent={currentPage.name === link.name}
                                history={history}
                                drawerOpen={open} />
                        ))}
                </List>
            </Drawer>
            <div className={classes.content}>
                {/** Component injection */}
                <Component {...props} />
            </div>
        </div >
    );
};
// // //
// Redux connexion
const mapStateToProps = (state: any) => ({
    currentPage: state.view, // Current location in the app
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        viewToState: (val: any) => {
            dispatch(
                updateViewAction(val) // Update the view
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BasePage));
// // //
// Link displayed in the drawer
type DrawerLinkProps = {
    path: string,
    displayText: string,
    icon: string,
    isCurrent: boolean,
    history: any,
    drawerOpen: boolean,
};

// Link in the Drawer (left menu)
const DrawerLink = ({ path, displayText, icon, isCurrent, history, drawerOpen }: DrawerLinkProps) => {

    const navigationClicked = (path: string) => {
        history.push(path); // Redirect to "path"
    }

    const classes = useStyles();
    return (
        <Tooltip
            title={!drawerOpen ? displayText : ''}
            placement="right">
            <ListItem
                button
                selected={isCurrent}
                className={clsx(null, { [classes.selectedListItem]: isCurrent })}
                onClick={() => navigationClicked(path)}>
                <ListItemIcon
                    className={clsx(null, { [classes.selectedListItem]: isCurrent })} >
                    <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={displayText} />
            </ListItem>
        </Tooltip>
    )
};