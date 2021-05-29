import Head from 'next/head'
import Layout from "../../components/layout/Layout"
import QuizList from "../../components/quiz_list/QuizList";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
            <Layout>
                <QuizList/>
            </Layout>

        </div>
    )
}
