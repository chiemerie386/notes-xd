import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tabsWrapper:{
        flex:'30%'
    }
});

const Tabs = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.tabsWrapper}>
            NOTE TABS TO BE HERE
        </div>
        </>
    )
}

export default Tabs 