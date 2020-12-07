import encryption from "src/components/encrypt";

const validate = (store, password, login)=>{
    const storePasswordHash = store.users[login].password;
    // const StoreHash = aes.decrypt(StorePassword,this.login);
    const passwordHash = encryption(password, login);
    // const oldHash = aes.decrypt(oldPassword, this.login);
    return storePasswordHash === passwordHash;

}
export default validate;