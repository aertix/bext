import Link from 'next/link'

const Page1 = ({price1,price2}) => {
    return(
        <div style={{ 
            backgroundImage: `url("../public/media/header.png")` 
          }} className="page1">
            <section>
                <div>
                    <img src="../media/stain1.png" alt="stain" />
                    <img src="../media/home1.jpg" alt="stain" />

                </div>
    
                <h1 className="die">{price1}</h1>
                <h2>3 bedroom 2 bath single family home</h2>
                <Link passHref={true}
                    href="https://www.zillow.com/homedetails/2543-Veteran-Ave-Los-Angeles-CA-90064/20462126_zpid/">
                    <button>Take a look</button>
                    </Link>
            </section>

            <section>
                <div>
                    <img src="../media/stain1.png" alt="stain" />
                    <img src="../media/home2.jpg"  alt="stain"/>
                </div>

                <h1>{price2}</h1>
                <h2>2 bedroom 1 bath single family home</h2>
                <Link passHref={true}
                    href="https://www.zillow.com/homedetails/4812-Hollow-Corner-Rd-UNIT-252-Culver-City-CA-90230/20489295_zpid/">
                    <button>Take a look</button>
                    </Link>
            </section>
        </div>
    )

}


export default Page1;