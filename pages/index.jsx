import Head from 'next/head'
import Hero from '../components/Pages/Home/Hero'
import Services from '../components/Pages/Home/Services'
import Digital from '../components/Pages/Home/Digital'
import Contact from '../components/Pages/Home/Contact'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Kryptostreber</title>
      </Head>
      <section>
        <Hero />
      </section>
      <section id='digital-transformation' className='pt-24'>
        <Digital />
      </section>
      <section id='services' className='pt-24'>
        <Services />
      </section>
      <section id='contact' className='pt-24'>
        <Contact />
      </section>
    </div>
  )
}

export default Home
