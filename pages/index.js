import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">
      <Head>
         <title>Dépannage Automobile en Île-de-France - Ouvert 24h/24</title>
         <meta property="og:title" content="Dépannage Automobile en Île-de-France - Ouvert 24h/24" key="title" />
      </Head>
    <Head>
        <meta property="og:description" content="Dépannage automobile en Île-de-France ouvert 24h/24. Fiable, rapide et professionnel. Nous intervenons pour tous types de pannes, du dépannage à la fourniture de carburant d'urgence. Contactez-nous dès maintenant." key="desc"/>
      </Head>

      <main>
     
    
      
      <h1>Dépannage automobile - Ile-de-France</h1>
      <h2>Ouvert 24h/24</h2>

      <Image
        src="public/background.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />

        <p>Lorsque vous êtes confronté à une panne de voiture, il est essentiel de pouvoir compter sur un service fiable et rapide. Notre équipe de professionnels expérimentés est là pour vous aider, que vous soyez en pleine nuit, en weekend ou pendant les jours fériés. Nous comprenons que les pannes de voiture peuvent survenir à tout moment, c est pourquoi nous sommes disponibles à toute heure pour vous fournir une assistance immédiate.</p>
        <p>Nos services de dépannage couvrent tous types de pannes, des problèmes de batterie déchargée aux crevaisons, en passant par les pannes mécaniques plus complexes. Nous disposons des équipements nécessaires pour résoudre la plupart des problèmes sur place, vous permettant ainsi de reprendre rapidement la route en toute tranquillité.</p>
        <p>En plus de notre service de dépannage, nous proposons également des services complémentaires tels que le remorquage de véhicules et la fourniture de carburant d urgence. Notre objectif est de vous offrir une solution complète pour tous vos besoins en matière de dépannage automobile.</p>
        <p>Faites confiance à notre équipe compétente et dévouée pour prendre en charge votre véhicule avec professionnalisme et diligence. Nous sommes fiers de notre réputation en tant que prestataire de services de dépannage fiable en Île-de-France.</p>
        <p>N hésitez pas à nous contacter dès maintenant pour bénéficier de notre assistance rapide et efficace. Votre satisfaction est notre priorité absolue.</p>
      
        <a href="tel:06.12.34.56.78">Appelez-nous directement : (+33) 06.12.34.56.78</a>
      </main>

      <Footer />
    </div>
  )
}

