import Head from 'next/head'
import Layout from "../../components/layout/Layout"
import styles from '../../styles/Login.module.scss'
import QuizResult from "../../components/quiz_result/QuizResult";

export default function Result() {
    return (
        <div>
            <Head>
                <title>Result</title>
            </Head>
            <Layout>
                <div className={styles.main_content_wrapper}>
                    <QuizResult/>
                </div>
            </Layout>

        </div>
    )
}
