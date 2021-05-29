
import Head from 'next/head'
import Layout from "../../../components/layout/Layout"
import QuizSolver from "../../../components/quiz_solver/QuizSolver";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Quiz</title>
            </Head>
            <Layout>
                <QuizSolver/>
            </Layout>

        </div>
    )
}
