const container = document.querySelector('.qr-code');
const qrCodeBtn = document.querySelector('.qr-form button');
const qrCodeInput = document.querySelector('.input');
const qrCodeImg = document.querySelector('.qr-code img');

generateQrCode = () => {
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando QR Code...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener('load', () => {
        container.classList.add('active');
        qrCodeBtn.classList.add('active');
        qrCodeBtn.innerText = "Novo QR Code";

    });


    
}

qrCodeBtn.addEventListener('click', () => {
    if(qrCodeBtn.innerText === 'Gerar QR Code'){
        generateQrCode();
        return;

    }
    if(qrCodeBtn.innerText === 'Novo QR Code'){
        window.location.reload();
        return;
    }

});

qrCodeInput.addEventListener('keydown', e => {
    if(e.code === 'Enter'){
        if(qrCodeBtn.innerText === 'Gerar QR Code'){
            generateQrCode();
            return;
    
        }
        if(qrCodeBtn.innerText === 'Novo QR Code'){
            window.location.reload();
            return;
        }
    }
})

qrCodeInput.addEventListener('keyup', () => {
    if(!qrCodeInput.value){
        container.classList.remove('active');
        qrCodeBtn.classList.remove('active');
        qrCodeBtn.innerText = "Gerar QR Code";
        qrCodeBtn.setAttribute('disabled', true);
        return;
    } else {
        qrCodeBtn.removeAttribute('disabled');
        return;
    }
})
