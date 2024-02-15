import './index.scss'
import {Link} from 'react-router-dom'
import github from "../../assets/github.png";
import Loader from '../Loader'
import Headerbar from '../Headerbar'


const Projects = () => {
	return (
			<>
			<Loader />
			<Headerbar />
			<center><h1 class="titlecard">
					 Projects
			</h1><br /><br /><br />
			<Link to="https://github.com/sadhvikbathini">
			<img
			src={github}
			alt="My Github profile"
			class="iconn"
			/>
			</Link></center>
			</>
	);
}

export default Projects
