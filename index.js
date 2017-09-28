import React, { Component } from 'react'
import PropTypes from 'prop-types'
import qrImage from 'qr-image'

class ReactQR extends Component {
  render () {
    const pngBuffer = qrImage.imageSync(this.props.text, {type: 'png', margin: 1})
    const dataURI = 'data:image/png;base64,' + pngBuffer.toString('base64')
    return (
      <img className='react-qr' src={dataURI} />
    )
  }
}

ReactQR.displayName = 'ReactQR'
ReactQR.propTypes = {
  text: PropTypes.string.isRequired
}

module.exports = ReactQR
