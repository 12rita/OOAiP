import {Component} from "react";
import {observable} from "mobx";

class SignUpStore extends Component {
    @observable error

    constructor(props) {
        super(props);
        this.error = false;
    }


}
export default SignUpStore;