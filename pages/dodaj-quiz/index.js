import Head from 'next/head'
import Layout from "../../components/layout/Layout"
import TitleForm from "../../components/form/add_quiz/title_form/TitleForm";

export default function DodajQuiz() {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <Layout>
                <TitleForm/>
            </Layout>

        </div>
    )
}
