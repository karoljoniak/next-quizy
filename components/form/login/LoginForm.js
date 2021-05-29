import styles from './LoginForm.module.scss'
import Button from "../../ui/button/Button"
import LoginFormLogic from "./LoginFormLogic";
import Input from "../../ui/input/Input";

const LoginForm = () => {

    const {setData, onSubmit} = LoginFormLogic();

    return(
    <div className={styles.main_form_wrapper}>
        <div className={styles.input_wrapper}>
            <Input
                handler={setData}
                label={"Login"}
                type={"text"}
                name={"login"}
                placeholder={"login"}/>
            <Input
                handler={setData}
                label={"Password"}
                type={"password"}
                name={"password"}
                placeholder={"password"}/>
        </div>
        <Button onClick={onSubmit}>Sign in</Button>
    </div>


    )
}

export default LoginForm