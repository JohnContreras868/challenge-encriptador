// Función para encriptar el texto
function encryptText() {
    const inputText = document.getElementById('input-text').value.toLowerCase(); // Convertir a minúsculas
    const encryptedText = encrypt(inputText);
    document.getElementById('output-text').value = encryptedText;
}

// Función para desencriptar el texto
function decryptText() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('output-text').value = decryptedText;
}

// Función para copiar el texto encriptado
function copyText() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

// Función para encriptar una palabra
function encrypt(word) {
    let encryptedWord = '';
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        switch (letter) {
            case 'e':
                encryptedWord += 'enter';
                break;
            case 'i':
                encryptedWord += 'imes';
                break;
            case 'a':
                encryptedWord += 'ai';
                break;
            case 'o':
                encryptedWord += 'ober';
                break;
            case 'u':
                encryptedWord += 'ufat';
                break;
            default:
                encryptedWord += letter;
                break;
        }
    }
    return encryptedWord;
}

// Función para desencriptar una palabra
function decrypt(word) {
    let decryptedWord = '';
    let i = 0;
    while (i < word.length) {
        const letter = word[i];
        switch (letter) {
            case 'e':
                if (word.substr(i, 5) === 'enter') {
                    decryptedWord += 'e';
                    i += 4;
                } else {
                    decryptedWord += letter;
                }
                break;
            case 'i':
                if (word.substr(i, 4) === 'imes') {
                    decryptedWord += 'i';
                    i += 3;
                } else {
                    decryptedWord += letter;
                }
                break;
            case 'a':
                if (word.substr(i, 2) === 'ai') {
                    decryptedWord += 'a';
                    i += 1;
                } else {
                    decryptedWord += letter;
                }
                break;
            case 'o':
                if (word.substr(i, 4) === 'ober') {
                    decryptedWord += 'o';
                    i += 3;
                } else {
                    decryptedWord += letter;
                }
                break;
            case 'u':
                if (word.substr(i, 4) === 'ufat') {
                    decryptedWord += 'u';
                    i += 3;
                } else {
                    decryptedWord += letter;
                }
                break;
            default:
                decryptedWord += letter;
                break;
        }
        i++;
    }
    return decryptedWord;
}

// Event listener para el botón de encriptar
document.getElementById('encrypt-btn').addEventListener('click', encryptText);

// Event listener para el botón de desencriptar
document.getElementById('decrypt-btn').addEventListener('click', decryptText);

// Event listener para el botón de copiar
document.getElementById('copy-btn').addEventListener('click', copyText);