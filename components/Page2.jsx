import Link from 'next/link'
const Page1 = ({price1,price2}) => {
    return(
        <div className="page1">
            <section>
                <div>
                    <img src="../media/stain1.png" alt="stain" />
                    <img src="../media/home3.jpg" alt="stain" />
                </div>

                <h1 className="die">$849,000</h1>
                <h2>2 bedroom 2 bath, Residential, condominium</h2>
                <Link passHref={true}
                    href="https://www.zillow.com/homedetails/7310-Raintree-Cir-Culver-City-CA-90230/20488873_zpid/">
                    <button>Take a look</button>
                    </Link>
            </section>

            <section>
                <div>
                    <img src="../media/stain1.png" alt="stain" />
                    <img src="../media/house4.jpg"  alt="stain"/>
                </div>

                <h1>$3,150,000</h1>
                <h2>4 bedroom 5 bath, Residential</h2>
                <Link passHref={true}
                    href="https://www.zillow.com/homedetails/3138-Roberts-Ave-Culver-City-CA-90232/20431345_zpid/?">
                    <button>Take a look</button>
                    </Link>
            </section>
        </div>
    )

}


export default Page1;