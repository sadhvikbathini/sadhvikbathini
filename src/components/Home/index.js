import './index.scss';
import {Link} from 'react-router-dom'
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/email.png";
import Logo from './Logo';
//import Loader from "../Loader"

const  Home = () => {
	
	
	return (
	<>
	<Logo />
<div className="fixeddisplay">
<div><Link class="customlogo" to="/">./*</Link></div>
<div className="container">
<div class="aligning">
<h1 class="title"><div class="cursorstart"></div><div class="animy">Sadhvik Bathini <div class="cursor"></div></div></h1>
</div>
<p class="section__text__p">Committed to continuous learning, passionate about hands-on projects, and eager to absorb new skills. I bring a fresh perspective and innovative solutions to your team.</p>


<div class="socials-container" >
<Link to="https://github.com/sadhvikbathini">
<img
src={github}
alt="My Github profile"
class="iconn"
/>
</Link>
<Link to="https://linkedin.com/in/sadhvikbathini">
<img src={linkedin}
alt="My LinkedIn profile"
class="iconn" />
</Link>
<Link to="#" onClick={() => window.location = 'mailto:sadhvik.ini@gmail.com'}>
<img src={email}
alt="My Mail"
class="iconn" />
</Link>
</div>

<div class="btn-container">
<Link className="btn-color-2" to="/projects" >
Projects
</Link>
<Link className="btn-color-1" to='/contact'>
Contact Me
</Link>
</div>
</div>
</div>
</>
	);
}

export default Home

