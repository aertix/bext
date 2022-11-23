import Link from 'next/link'
const Quote = () => {
    return(
        <div className="quote">
                <img src="/media/quote.png" alt="call"></img>
                <h1>Call us Today 310.200.0242</h1>
                <Link passHref={true}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSetlRCvDTMujnZFG7ta7bRI24kiWl25ZTzGKx1wt13hLc0nig/viewform">
                    <button>Take a look</button>
                    </Link>
        </div>
    )
}

export default Quote

