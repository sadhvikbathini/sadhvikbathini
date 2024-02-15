import './index.scss';
import Headerbar from '../Headerbar'
import Loader from '../Loader'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const refForm = useRef();
	const sendEmail = (e) => {
		e.preventDefault()
		   const serviceID = 'default_service';
		   const templateID = REACT_APP_EMAILJS_TEMPLET_ID ;
		   const PublicKey = REACT_APP_EMAILJS_PUBLIC_KEY ;
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
					<input type="text" name="name" placeholder="Name"  />
				</li>
				<li class="half">
					<input
						type="email" name="email" placeholder="Email"  />
				</li>
				<li class="half">
 					<input
 						type="text" name="subject" placeholder="Subject"  />
 				</li>
 				<li class="half">
 					<textarea placeholder="Message . . . " name="message" requried ></textarea>
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
