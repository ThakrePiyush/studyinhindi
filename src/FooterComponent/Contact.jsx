

const Contact = () => {

  return <>
         <header>
    <div className="icon">
        <button id="left2"><i className="ri-arrow-left-s-line"></i></button>
        <h1>Contact Us</h1>
    </div>
   
         </header>
         <main>
    <div className="contact-form">
      <form action="#" method="post">
        <input type="text" name="name" placeholder="Your Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
          </main>
  </>
}

export default Contact;