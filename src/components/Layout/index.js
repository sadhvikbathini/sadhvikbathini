import './index.scss';
import { Outlet } from 'react-router-dom'
// import {Link} from 'react-router-dom'


const Layout = () => {
	return (
		<div className="App">
			<div className="page">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
