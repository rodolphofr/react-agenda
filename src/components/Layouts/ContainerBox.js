import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types'

const ContainerBox = props => {
    return (
        <Grid container justify="center">
            { props.children }
        </Grid>
    )
}

ContainerBox.propTypes = {
    children: PropTypes.element.isRequired
}

export default ContainerBox