
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
                <h2>4 bedroom 4 bath single family home</h2>
            </section>

            <section>
                <div>
                    <img src="../media/stain1.png" alt="stain" />
                    <img src="../media/home2.jpg"  alt="stain"/>
                </div>

                <h1>{price2}</h1>
                <h2>4 bedroom 4 bath single family home</h2>
            </section>
        </div>
    )

}


export default Page1;