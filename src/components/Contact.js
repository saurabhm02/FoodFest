import { useState } from "react";
import contact from '/assets/contact-us.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

  const [formData, setFormData] = useState({ Name: "", email: "", message:""});
  const [message, setMessage] = useState(false);
  function changeHandler(e){
    const {name, value} = e.target
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name] : value ,
        }
      });
  }

  function submitHandler(e){
    e.preventDefault();
    // setMessage(true);
    toast.success('Thank you for Contact us!', {
      position: toast.POSITION.TOP_CENTER
    });
    console.log(formData);
  }


  
  return (
    <div className="contact-container">
      <div className="contact-left">
      <img src={contact} alt="" />
      </div>
      <div className="contact-right">
      <h1>Contact us</h1>
                <form onSubmit={submitHandler}>
                    <input 
                      type="text" 
                      placeholder="Name" required
                      name="Name"
                      value={formData.Name}
                      onChange={changeHandler}
                    />

                    <input 
                      type="email" 
                      placeholder="Email" required
                      name="email"
                      value={formData.email} 
                      onChange={changeHandler}
                    />

                    <textarea 
                      placeholder="Type your Message here..." 
                      required
                      onChange={changeHandler}
                      name="message"
                      formData={formData.message}
                    >

                    </textarea>

                    <button type="submit">Submit</button>
                    {/* {message && <span>Thanks for contacting FoodFest, We will reply ASAP.</span>} */}
                </form>
      </div>
    </div>
  );
};

export default Contact;