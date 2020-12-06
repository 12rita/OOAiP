import React, {Component} from 'react';
import Store from "src/components/Store";
import User from  'src/components/User';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import aes from 'crypto-js/aes'
import CryptoJS from "crypto-js";
import './SignUp.css';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {login: '', password: '', error: false}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const type = event.target.id;
        if (type === 'login') {
            this.setState({login: event.target.value});

        } else if (type === 'password')
            this.setState({password: event.target.value});

    }

    onClick = (event) => {
        event.preventDefault();

        this.setState({error: false})
        if (!Store.users[this.state.login]) {
            const encryptPassword = this.encryption(this.state.password, this.state.login);
            const newUser = new User(this.state.login, this.state.password);
            Store.users[this.state.login] = newUser;
        } else {
            this.setState({error: true})
        }

    };

    // generateKey = async () =>
    //     window.crypto.subtle.generateKey({
    //         name: 'AES-GCM',
    //         length: 256,
    //     }, true, ['encrypt', 'decrypt'])
    //
    // generateIv = () =>
    //     window.crypto.getRandomValues(new Uint8Array(12))
    //
    // encode = data => {
    //     const encoder = new TextEncoder()
    //
    //     return encoder.encode(data)
    // }
    //
    // encrypt = async (data, key) => {
    //     const encoded = this.encode(data)
    //     const iv = this.generateIv()
    //     const cipher = await window.crypto.subtle.encrypt({
    //         name: 'AES-GCM',
    //         iv
    //     }, key, encoded)
    //
    //     return {
    //         cipher,
    //         iv
    //     }
    // }
    getEncryptedPass = async(msg)=>{
       const key = await this.generateKey()

        const {
            cipher,
            iv
        } = await this.encrypt(msg, key);
       return {cipher, iv}
    }


    encryption = (password, login) =>{
        const hmacDigest = Base64.stringify(hmacSHA512(password, login));
        const ciphertext = aes.encrypt(hmacDigest, login).toString();
        // const hash = sha256(ciphertext);
        console.log(ciphertext);
        // console.log(hash);
        return ciphertext;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="overlay">
                    <form id="form">
                        <label htmlFor="login">Придумайте логин:</label><input
                        className={this.state.error ? 'error' : null}
                        value={this.state.login}
                        onChange={this.handleChange} type="text"
                        id="login" required/>
                        <label htmlFor="password">Придумайте пароль:</label> <input type="password"
                                                                                    value={this.state.password}
                                                                                    onChange={this.handleChange}
                                                                                    id="password"
                                                                                    required/>
                        <button onClick={this.onClick}>Зарегестрироваться</button>

                    </form>

                </div>
            </div>
        );
    }

}

export default SignUp;