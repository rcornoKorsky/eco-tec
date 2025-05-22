"use strict";
(function () {
  document.getElementById("sendWhatsapp").addEventListener('click', () => {
    const nameEl    = document.getElementById('contact-your-name-2').value.trim();
    const emailEl   = document.getElementById('contact-email-2').value.trim();
    const msgEl     = document.getElementById('contact-message-2').value.trim();

    if (!nameEl || !emailEl || !msgEl) {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    const text =
      `*Hola, soy *%0A` + `${encodeURIComponent(nameEl)}%0A` +
      `*Mi correo es: * ${encodeURIComponent(emailEl)}%0A` +
      `** ${encodeURIComponent(msgEl)}`;


    const phone = '527713631740';
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    let url
    if(isMobile){
      url = `whatsapp://send?phone=${phone}&text=${text}` 
    }else{
      url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}`;
    }
    window.open(url, '_blank');
  })
}())