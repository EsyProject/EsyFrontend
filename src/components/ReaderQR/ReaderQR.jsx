import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';

class ReaderQR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: 'No result',
      cameraActive: false,
      qrCodeDetected: false
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    this.activateCamera = this.activateCamera.bind(this);
    this.deactivateCamera = this.deactivateCamera.bind(this);
  }

  handleScan(data) {
    if (data && !this.state.qrCodeDetected) { // Verifica se há um QR code detectado e se não foi detectado antes
      this.setState({
        result: data.text,
        qrCodeDetected: true, // Define qrCodeDetected como true para indicar que um QR code foi detectado
        cameraActive: false // Desativa a câmera após detectar o QR code
      });
    }
  }

  handleError(err) {
    console.error(err);
  }

  activateCamera() {
    this.setState({ cameraActive: true });
  }

  deactivateCamera() {
    this.setState({ cameraActive: false, qrCodeDetected: false }); // Função para desativar a câmera
  }

  render() {
    const previewStyle = {
      height: 240,
      width: 320
    };

    return (
      <div>
        {!this.state.cameraActive && (
          <button onClick={this.activateCamera}>Ativar Câmera</button>
        )}
        {this.state.cameraActive && (
          <div>
            <button onClick={this.deactivateCamera}>Fechar Câmera</button> {/* Botão para fechar a câmera */}
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
            />
            {this.state.qrCodeDetected && ( // Renderiza o texto se um QR code foi detectado
              <p>{this.state.result}</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ReaderQR;
