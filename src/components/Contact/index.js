import './index.scss';
import Headerbar from '../Headerbar'
import Loader from '../Loader'
import React, { useState , useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

// Convert only one input value to titlecase and update state
	const [value, setValue] = useState('');
	const toTitleCase = (str) => {
		return str.replace(/\w\S*/g, (txt) => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};
	const handleChange = (event) => {
		const titleCaseValue = toTitleCase(event.target.value);
		setValue(titleCaseValue);
	};
// EMAILJS
	const refForm = useRef();
	const sendEmail = (e) => {
		e.preventDefault()
		   const serviceID = 'default_service';
		   const templateID = process.env.REACT_APP_EMAILJS_TEMPLET_ID ;
		   const PublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY ;
		   emailjs.sendForm(serviceID, templateID, refForm.current, PublicKey)
		.then (
			() =>{
				alert("Thanks for contacting me. I'll reply you soon")
				window.location.reload(false)
			},
			() => {
				alert('Failed to send the message. Please, Try Again!')
			}
		)
	}
	
	return (
		<>
		<Loader />
		<Headerbar />
		<center><h1 class="titlecard">
		 Contact Me
		</h1></center>
		<p></p>
		<div class="contact-form" >
			<form ref={refForm} onSubmit={sendEmail} >
			<ul>
				<li class="half"> 
					<input type="text" name="name" value={value} onChange={handleChange} placeholder="Name" />
				</li>
				<li class="half">
					<input
						type="email" name="email" placeholder="Email" />
				</li>
				<li class="half">
 					<input
 						type="text" name="subject" placeholder="Subject" />
 				</li>
 				<li class="half">
 					<textarea placeholder="Message . . . " name="message" required></textarea>
 				</li>
 				<li class="half">
 					<input type="submit" class="btn-color-3" value="SEND" />
 				</li>
 			</ul>
 			</form>
		</div>
		</>
	);
}

export default Contact
