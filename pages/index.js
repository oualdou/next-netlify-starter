import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Depannage automobile en Ile-de-France ouvert 24h/24. Fiable, rapide et professionnel. Nous intervenons pour tous types de pannes, du depannage a la fourniture de carburant en urgence. Contactez-nous maintenant.">
        <title>Dépannage Automobile en Île-de-France - Ouvert 24h/24</title>
      </Head>

     

      <Footer />
    </div>
  )
}

