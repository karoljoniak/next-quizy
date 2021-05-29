import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
        <Layout>
            <div className={styles.home}>
                <h1 className={styles.header}>Nowoczesne technologie programistyczne</h1>
                <h3 className={styles.header2}>Aplikacja z quizami</h3>
            </div>
        </Layout>

    </div>
  )
}
