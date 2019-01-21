import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
    root: {
        //backgroundColor: theme.palette.background.paper,
        position: 'relative',
        width: 130,
        minHeight: 130, 
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        transition: '.5s'
    },
    elevation0: {
        boxShadow: theme.shadows[0]
    },
    elevation10: {
        boxShadow: theme.shadows[10]
    },
    expanded: {
        width: '100vw', 
        minHeight: '100vw',
    }
})

class Bubble extends React.Component {
    constructor(props) {
        super(props)
        this.getDownElevation = this.getDownElevation.bind(this)
        this.getUpElevation = this.getUpElevation.bind(this)
        this.initialElevation = 10
        this.state = {
            isElevated: true,
            isExpanded : false
        }
    }

    getDownElevation(e, val) {
        this.setState({ isElevated: false })
    }

    getUpElevation() {
        this.setState({ isElevated: true })
    }

    componentWillUnmount() {
        console.log('byyee')
        this.setState({ isExpanded: true })
    }

    // handleChange = (event, value) => {
    //     this.setState({ value });
    // };

    // handleChangeIndex = index => {
    //     this.setState({ value: index });
    // };

    render() {
        const { classes, theme, text, icon, themeColor } = this.props
        const transitionDuration = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
        }

        //console.log(theme.shadows)

        return (          
            <Zoom
                in={true}
                timeout={transitionDuration}
                style={{transitionDelay: `${transitionDuration.exit}ms`}}
                unmountOnExit>
                <Fab 
                    className={`
                        ${classes.root} 
                        ${this.state.isElevated ? classes.elevation10 : classes.elevation0}
                        ${this.state.isExpanded ? classes.expanded : null}
                    `} 
                    color={themeColor}
                    onMouseEnter={this.getDownElevation}
                    onMouseLeave={this.getUpElevation}>
                    <Icon fontSize="large">{icon}</Icon>
                    <h2>{text}</h2>
                </Fab>
            </Zoom>
        )
    }
}

Bubble.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Bubble)