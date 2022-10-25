
const Page1 = ({price1,price2}) => {
    return(
        <div className="page1">
            <section>
                <div>
                    <img src="../media/stain1.png" alt="stain" />
                    <img src="../media/home3.jpg" alt="stain" />
                </div>

                <h1 className="die">{price1}</h1>
                <h2>4 bedroom 4 bath single family home</h2>
            </section>

            <section>
                <div>
                    <img src="../media/stain1.png" alt="stain" />
                    <img src="../media/house4.jpg"  alt="stain"/>
                </div>

                <h1>{price2}</h1>
                <h2>4 bedroom 4 bath single family home</h2>
            </section>
        </div>
    )

}


export default Page1;