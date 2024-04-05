import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='text-center'>Contact us</h1>
      <iframe title="Firozabad, Uttar Pradesh Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56799.76253465664!2d78.35339942753076!3d27.156757184366437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974469872bde991%3A0xdf84663a8c11acee!2sFirozabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710343818030!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container d-flex justify-content-center align-items-center ">
        <form className='my-5' action='https://formspree.io/f/mwkgqzor' method='POST'>
          <div className="mb-3">
            <label for="name" className="form-label">Username</label>
            <input type="text" required  className="form-control " id="name" aria-describedby="emailHelp" name='name' />

          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" required  className="form-control" id="email" name='email' />
          </div>
          <div className="form-floating">
            <textarea name='message' className="form-control" placeholder="Leave a comment here" id="text"></textarea>
            <label for="text">Comments</label>
          </div>
          <button type="submit" className="btn btn-primary my-2">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
