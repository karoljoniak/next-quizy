import {useState} from "react";

const LoginFormLogic = () => {


    const [state, setState] = useState({
        login: '',
        password: ''
    });


    const setData = (name, value) => {
        setState({
            ...state,
            [name]: value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(state);
    }

    return {setData, onSubmit}
}

export default LoginFormLogic;