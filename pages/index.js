import Head from 'next/head'
import Chart from '../components/Chart'
import Header from '../components/Header'

export default function Home({ data }) {
  return (
    <div className="bg-cream h-screen grid place-content-center">
      <Head>
        <title>Expenses Chart Component</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main className="p-5 mt-4 min-w-[375px] bg-very-pale-orange rounded-lg">
        <h2 className="text-2xl font-bold tracking-wide text-dark-brown">
          Spending - Last 7 days
        </h2>

        <Chart data={data} />

        <div className="mx-auto h-[2px] w-6/7 bg-cream my-5" />

        <div className="flex justify-between">
          <div>
            <p className="text-medium-brown mb-1">Total this month</p>
            <p className="font-bold text-dark-brown text-3xl">$478.33</p>
          </div>
          <div className="self-end text-right">
            <p className="text-dark-brown font-bold">+2.4%</p>
            <p className="text-medium-brown">from last month</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const data = [
    {
      day: 'mon',
      amount: 17.45,
    },
    {
      day: 'tue',
      amount: 34.91,
    },
    {
      day: 'wed',
      amount: 52.36,
    },
    {
      day: 'thu',
      amount: 31.07,
    },
    {
      day: 'fri',
      amount: 23.39,
    },
    {
      day: 'sat',
      amount: 43.28,
    },
    {
      day: 'sun',
      amount: 25.48,
    },
  ]

  return {
    props: {
      data,
    },
  }
}
