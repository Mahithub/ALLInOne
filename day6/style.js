const type = document.getElementById("type");
const image = document.getElementById("image"); 

function generateQR() {
    if (type.value.length > 0) {
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + type.value;
    } else {
        type.classList.add("error");
        setTimeout(() => { 
            type.classList.remove("error");
        }, 1000);
    }
}