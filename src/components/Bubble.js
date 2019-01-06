import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const BubbleButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 50,
        border: 0,
        color: 'white',
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        height: 100,
        width: 100
    },
    label: {
        textTransform: 'capitalize',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})(Button);

const Bubble = (props) => {
    return (
        <BubbleButton>
            <Icon>{props.icon}</Icon>
            <h2>{props.text}</h2>
        </BubbleButton>
    )
}

export default Bubble;