import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card, Avatar} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        border: '1px solid #f1dddd',
        gridGap: '20px',
        padding: '20px',
        boxShadow: 'none',
        marginTop: '20px',

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
        img:{
    height: '80px',
    border: '1px solid #f1dddd',
    borderRadius: '100px',
    padding: '10px',
    },
    textWrapper: {
       '& h3':{
            marginTop: '0',
        },
        '& h4': {
            marginTop: '0',
        },
        '& p': {
            marginTop: '0',
        },
    },
    counter: {
        display: 'grid',
        gridTemplateColumns: '40px 40px 40px',
        gridGap: '10px',
        '& span': {
            display: 'grid',
            gridTemplateRows: '40px auto',
            gridTemplateColumns: '40px',
            textAlign: 'center',
            '& span': {
                backgroundColor: '#111111',
                color: '#fff',
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center',
            }
        }
    }
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.imageContainer}>
                <img className={classes.img} src='/logo192.png' alt='Avatar' />
                <h4>Expriation</h4>
            </div>
            <div className={classes.textWrapper}>
                <h3>Company Name</h3>
                <h4>Required Brands</h4>
                <p>Total Items</p>
                <div className={classes.counter}>
                    <span>
                        <span>31</span> 
                        Day
                    </span>
                    
                    <span>
                        <span>2</span> 
                        Hour
                    </span>
                    <span>
                        <span>4</span>
                        Minute
                    </span>
                </div>
            </div>
        </Card>
    );
}
