import CryptoJS from 'crypto-js';

    
const secretKey = import.meta.env.VITE_ENCRYPTION_KEY;

export const encryptMessage = (value: string) => {

    const encryptedMessage = CryptoJS.AES.encrypt(value, secretKey).toString();

    return encryptedMessage;
};

export const decryptMessage = (value: string) => {
    const decryptedBytes = CryptoJS.AES.decrypt(value, secretKey);
    const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
};

