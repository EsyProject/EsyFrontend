import { Component } from 'react';
import QrReader from 'react-qr-scanner';
import PropTypes from 'prop-types';

class ReaderQR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      cameraActive: true,
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleScan(data) {
    if (data) {
      console.log(data.text); 

      this.props.onQrCodeScan(data.text);
    }
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    const previewStyle = {
      height: 300,
      width: 300,
      objectFit: 'cover',
      borderRadius: '10px',
    };

    return (
      <div>
        {this.state.cameraActive && (
          <div>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
            />
          </div>
        )}
      </div>
    );
  }
}

ReaderQR.propTypes = {
  onQrCodeScan: PropTypes.func.isRequired 
};

export default ReaderQR;
