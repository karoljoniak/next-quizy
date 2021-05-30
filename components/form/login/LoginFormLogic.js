import {useState} from "react";
import {useRouter} from "next/router";

const LoginFormLogic = () => {

    const router = useRouter()
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

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username: state.login,
                password: state.password
            })

        })
        console.log(res)
        const res_parsed = await res.json()
        console.log(res_parsed)
        if(res_parsed.status === 200){
            localStorage.setItem('token', res_parsed.data.token)
            await router.push('/')
        }
    }

    return {setData, onSubmit}
}

export default LoginFormLogic;