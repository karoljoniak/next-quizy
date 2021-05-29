import Head from 'next/head'
import Layout from "../../components/layout/Layout"
import LoginForm from "../../components/form/login/LoginForm"
import styles from '../../styles/Login.module.scss'

export default function Quizy() {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <Layout>
                <div className={styles.main_content_wrapper}>
                    <LoginForm/>
                </div>
            </Layout>

        </div>
    )
}
