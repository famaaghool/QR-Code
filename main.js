const inputUrl = document.querySelector('.input-url');
const createQr = document.querySelector('.btn-create');
const showQr = document.getElementById('qrcode');
const boxInput = document.querySelector('.box-input');
const qrContainer=document.querySelector('.qr-container');
const downloadBtn = document.querySelector('.download');
const shareBtn = document.querySelector('.share')


createQr.addEventListener('click',()=>{
    if(inputUrl.value){
        boxInput.style.display='none';
        qrContainer.style.display='block';
        showQr.innerHTML='';
        new QRCode(showQr,{
        text:inputUrl.value,
        width:150,
        height:150
    })
    }
    else{
        alert('Please enter a valid URL')
    }
   
});
downloadBtn.addEventListener('click',()=>{
    const qrImage = document.querySelector('#qrcode img');
    if(qrImage){
        const imgUlr = qrImage.src;
        const downloadLink = document.createElement('a');
        downloadLink.href=imgUlr;
        downloadLink.download='qr-code.png';
        downloadLink.click();
    }
    else{
        alert('QR code image not found')
    }
})
shareBtn.addEventListener('click',()=>{
    const qrImage = document.querySelector('#qrcode img');
    if(qrImage){
        const imgUrl = qrImage.src;
        console.log(imgUrl)
        try{
             new URL(imgUrl);
            if(navigator.share){
                console.log(imgUrl)
                navigator.share({
                    title:'QR Code',
                    text:'heck Out This QR Code !',
                    url:imgUrl.href
                })
                .then(()=>alert('QR Code shared successfully :)'))
                .catch((error)=>console.log('Error sharing QR Code :(',error))
            }
            else{
                alert('Sharing not supported on this browser.');
            }
        }catch (error) {
            alert('Invalid URL for QR Code.');
        }
    }
    else {
        alert('QR Code not found.');
   
    }
})