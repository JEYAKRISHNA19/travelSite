import React from 'react';
import GooglePayButton from '@google-pay/button-react'; 
const Payment = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Book Your Trip</h1>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '100.00',
            currencyCode: 'USD',
            countryCode: 'US',
          },
        }}
        buttonColor="white"  
        buttonType="book"    
        onLoadPaymentData={paymentRequest => {
          console.log('load payment data', paymentRequest);
        }}
        style={styles.button} 
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  header: {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
  button: {
    width: '100%', 
    maxWidth: '300px', 
    height: '50px', 
  },
};

export default Payment;
