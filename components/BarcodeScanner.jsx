import React, { useEffect, useRef } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            facingMode: 'environment', // or 'user' for the front camera
          },
        },
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 4,
        decoder: {
          readers: ['ean_reader'],
        },
        locate: true,
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      console.log('Barcode detected:', data.codeResult.code);
      // Do something with the detected barcode value
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <video ref={videoRef} style={{ width: '100%' }} />
        <canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default BarcodeScanner;