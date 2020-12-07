import Base64 from "crypto-js/enc-base64";
import hmacSHA512 from "crypto-js/hmac-sha512";


const  encryption = (password, login) => {

    // const ciphertext = aes.encrypt(hmacDigest, login).toString();

    return Base64.stringify(hmacSHA512(password, login));
}

export default encryption;