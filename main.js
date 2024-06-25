const container = document.querySelector('.qr-code');
const qrCodeBtn = document.querySelector('.qr-form button');
const qrCodeInput = document.querySelector('.qr-form input');
const qrCodeImg = document.querySelector('.qr-code img');

generateQrCode = () => {
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando Código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener('load', () => {
        container.classList.add('active');
        qrCodeBtn.classList.add('active');
        qrCodeBtn.innerText = "Código Gerado";

    });


    
}

qrCodeBtn.addEventListener('click', () => {
    
        generateQrCode();

});

qrCodeInput.addEventListener('keydown', e => {
    if(e.code === 'Enter') generateQrCode();
})

qrCodeInput.addEventListener('keyup', () => {
    if(!qrCodeInput.value){
        container.classList.remove('active');
        qrCodeBtn.classList.remove('active');
        qrCodeBtn.innerText = "Gerar código";
        qrCodeBtn.setAttribute('disabled', true);
        return;
    } else {
        qrCodeBtn.removeAttribute('disabled');
        return;
    }
})

onClear = () => {
    window.location.reload();
}