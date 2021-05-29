import Head from 'next/head'
import Layout from "../../../components/layout/Layout"
import QuizDetail from "../../../components/quiz_detail/QuizDetail";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Quiz</title>
            </Head>
            <Layout>
                <QuizDetail/>
            </Layout>

        </div>
    )
}
