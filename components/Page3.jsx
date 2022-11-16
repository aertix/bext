import Link from 'next/link'

const Page3 = () => {
    return(
      <div className="page4" >
       <section>

        <div>
            
          <p>Phone</p>
          <p>(310) 606-2727</p>
          <br></br>
      
          <p>Hours of Operation</p>
          <p>Monday - Friday, 9 a.m. - 5 p.m.</p>
          <p>After-Hour Appointments Available</p>
          <br></br>
          
          <p>Address</p>
          <p>475 Washington Blvd, Marina Del Rey, CA 90292</p>
          <br></br>
    
          <p>For Billing & Service Requests:</p>
          <p>P.O. Box 124, Palos Verdes Estate, CA 90274</p>
          <br></br>
    
          <p>Service Area</p>
          <p>Southern California, including ZIP Codes 90064, 90043, 90008, 90056, 90045, 90066, & 90094</p>
        </div>
       <div style={{ 
      backgroundImage: `url("media/Ostairs.jpg")` 
    }} className="die" ><Link target="_blank" passHref={true} href="https://forms.gle/AXgy8XEn9grMWDkC7">
       <button>Contact Us</button></Link></div>
       </section>

      </div>
    )
};

export default Page3;