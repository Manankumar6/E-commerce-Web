import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useFilterContext } from '../context/Filter_context';
import Button from '@mui/material/Button';
const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const { filters: { email, name, message }, handleInput } = useFilterContext()
  return (
    <div>
     
      <iframe title="Firozabad, Uttar Pradesh Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56799.76253465664!2d78.35339942753076!3d27.156757184366437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974469872bde991%3A0xdf84663a8c11acee!2sFirozabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710343818030!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <h1 className='text-center' style={{color:"#274c77"}}>Contact us</h1>
      <div className="container  d-flex justify-content-center align-items-center fl flex-column flex-md-row ">
       
            <form className='my-5 ' action='https://formspree.io/f/mwkgqzor' method='POST'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Username</label>
                <input type="text" required className="form-control " id="name" aria-describedby="emailHelp" name='name'
                  value={isAuthenticated ? user.name : name} onChange={handleInput}
                />

              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" required className="form-control" id="email" name='email'
                  value={isAuthenticated ? user.email : email} onChange={handleInput}
                />
              </div>
              
                <label htmlFor="text" className="form-label">Message</label>
                <textarea name='message' className="form-control" placeholder="Leave a message here" id="text" value={message} onChange={handleInput} style={{minHeight:"100px"}}></textarea>
         
              <Button variant="contained" className='text-light fw-light  mt-2' style={{ background: "#274c77" }}>Submit</Button>

            </form>
       
  
          <div className="row my-auto">
            <img src="/images/contactus2.gif" className='img-fluid ' alt="gif" />
          </div>

      </div>
    </div >
  )
}

export default Contact
