
import Head from 'next/head';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import './globals.css'
import HomeNav from '../components/HomeNav';




function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Pygame Documentation 2.0</title>
       
      </Head>
      <body className="bg-gray-900 h-screen">
        <nav>
          <Navbar />
        </nav>
        <HomeNav />

        {children}
        <br />
        <div className="md:block hidden">
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;