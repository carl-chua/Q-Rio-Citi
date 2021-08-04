import React from 'react';
import QrReader from 'react-qr-reader';

export default function QRScanner() {
  function handleScan(data) {
    if (data) {
      window.location.href = data;
    }
  }

  function handleError(err) {
    console.error(err);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '95vh',
        justifyContent: 'center',
      }}
    >
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}
