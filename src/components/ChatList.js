import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {List} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles(() => ({
    root: {
        width: '30%',
        maxWidth: 360,

    },
}));


export default function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <List component="list" aria-label="secondary mailbox folders">
            <ul>
                <li> first list</li>
                <li> second list</li>
            </ul>
            <ListItem alignItems='flex-start'></ListItem>
        </List>
        </div>
    );
}





