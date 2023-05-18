import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import '/src/App.css'
import emailjs, { init } from "@emailjs/browser";

function Form() {
     
  init("mls-XN3XlB9jkl3ri");
  const form = useRef();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:'',
        address: '',
    })


    const userIntput = (event) =>{
      console.log(user)
      setUser({...user, [event.target.name]: event.target.value})
    }
    const submit = (e) =>{
      setUser({firstName: '', lastName: '', email: '', phoneNumber: '', address: ''});
      e.preventDefault()
      if(user.firstName == ""){
        alert("please fill the full name");
      }else if(user.lastName == ""){
        alert("Please fill the last name");
      }else if(user.email == ""){
        alert("Please fill the email address");
      }else if(user.phoneNumber == ""){
        alert("Please fill the phoneNumber")
      }else if(user.address == ""){
        alert("Please fill the address");
      }else{
        // alert("Form Submit");
        emailjs.sendForm("service_z02de54", "template_wnfzmyt", form.current, "mls-XN3XlB9jkl3ri").then(
          (result) => {
            alert("Message Sent Successfully");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
        fetch('http://localhost/reactform/inset.php', {
          method: 'POST',
          body: new URLSearchParams({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address
          }),
        })
          .then((data) => {
            setMessage(data.message);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
  return (
     <div>
        <Header />
            <section>
                <main>
                    <div className='mr-auto ml-auto max-w-xl  mt-16 bg-[#712cf9] h-[70vh]'>
                         <form method='post' ref={form}>
                            <div className='w-full grid gap-5 px-12 py-10'>
                              <label className='text-white font-sans font-bold text-xl'>Register the form</label>
                              <input className='w-full px-2 py-3 font-sans font-normal text-lg' placeholder='Firstname' type='text' onChange={userIntput} name='firstName' value={user.firstName}/>
                              <input className='w-full px-2 py-3 text-lg font-normal font-sans' placeholder='Lastname' type='text' onChange={userIntput} name='lastName' value={user.lastName}/>
                              <input className='w-full px-2 py-3 font-sans font-normal text-lg' placeholder='Email' type='email' onChange={userIntput} name='email' value={user.email}/>
                              <input className='w-full px-2 py-3 font-sans font-normal text-lg' placeholder='PhoneNumber' type='text' value={user.phoneNumber} name='phoneNumber' onChange={userIntput}/>
                              <textarea placeholder='Adrress' className='w-full h-28 px-2 py-3' type="text" name='address' value={user.address} onChange={userIntput}></textarea>
                              <button className='bg-teal-600 w-full text-white py-4 font-sans font-medium text-xl mt-4' onClick={submit} name='submit' type='submit'>Submit</button>
                            </div>
                         </form>
                    </div>
                </main>
            </section>
     </div>
  )
}

export default Form