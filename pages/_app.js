
import Layout from '../components/Layout'
import Header from '../components/Header'
import Page1 from '../components/Page1'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Page4 from '../components/Page4'
import Quote from '../components/Quote'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
       <Page1 price1="$1,799,000" price2 = "$1,500,000"/>
      <Page2  price1="$510,000" price2 = "$1,300,000"/>
    <Quote />
    <Page4 />
    <Page3 />

  </>
  )

}

export default MyApp
