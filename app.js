function encryptText() {
    var inputText = document.getElementById("inputText").value;
    var error = document.getElementById("error");
    var resultText = document.getElementById("resultText");
    var placeholderImage = document.getElementById("placeholder-image");
    var outputMessage = document.getElementById("output-message");
    var instruction = document.getElementById("instruction");

    var regex = /^[a-z]+$/;

    if (!regex.test(inputText)) {
        error.textContent = "El texto contiene caracteres inválidos. Usa solo letras minúsculas, sin tildes ni caracteres especiales.";
        resultText.value = "";
    } else {
        error.textContent = "";
        var encrypted = CryptoJS.AES.encrypt(inputText, "secret key 123").toString();
        resultText.value = encrypted;

        // Ocultar imagen, mensaje y instrucciones
        placeholderImage.style.display = "none";
        outputMessage.style.display = "none";
        instruction.style.display = "none";
    }
}

function decryptText() {
    var inputText = document.getElementById("inputText").value;
    var error = document.getElementById("error");
    var resultText = document.getElementById("resultText");

    try {
        var decrypted = CryptoJS.AES.decrypt(inputText, "secret key 123").toString(CryptoJS.enc.Utf8);
        if (decrypted === "") {
            throw new Error("Texto no válido");
        }
        error.textContent = "";
        resultText.value = decrypted;
    } catch (e) {
        error.textContent = "El texto no es válido para desencriptar.";
        resultText.value = "";
    }
}

function copyText() {
    var resultText = document.getElementById("resultText");
    resultText.select();
    resultText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
}
