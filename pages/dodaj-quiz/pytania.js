import Head from 'next/head'
import Layout from "../../components/layout/Layout"
import QuestionsForm from "../../components/form/add_quiz/questions_form/QuestionsForm";

export default function DodajQuiz() {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <Layout>
                <div>
                    <QuestionsForm/>
                </div>
            </Layout>

        </div>
    )
}
