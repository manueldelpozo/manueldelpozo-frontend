import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
})

function ListGrid(props) {
    const { classes } = props
    //console.log(props.list)
    return (
        <List className={classes.root}>
            {props.list.map(item => (
                <ListItem alignItems="flex-start" key={item.icon}>
                    <ListItemAvatar>
                        <Avatar alt={item.title} src={require(`./../assets/${item.icon}`)} />
                    </ListItemAvatar>
                    <ListItemText   
                        primary={item.title}
                        secondary={
                            <React.Fragment>
                                <Typography component="span" className={classes.inline} color="textPrimary">
                                    {item.text}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            ))}
        </List>
    )
}

export default withStyles(styles)(ListGrid)
