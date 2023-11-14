import React from 'react';
import whatsappImage from "../assets/img/whatsapp (1).png"

const WhatsAppButton = () => {
  const phoneNumber = '447577842671'; // Replace with the desired phone number

  const openWhatsAppChat = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsAppChat}>
      <img src={whatsappImage} alt="WhatsApp Icon" />
      
    </div>
  );
};

export default WhatsAppButton;