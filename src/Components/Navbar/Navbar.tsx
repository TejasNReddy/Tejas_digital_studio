import logo from '../../assets/iconSmall.png'
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from './MobileNavbar';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
	const [navtoggle,setnavtoggle] = useState<boolean>(false) 
	const [active ,setactive] = useState<boolean>(false)
		useEffect(() => {
			const handleScroll = () => {
				if (window.scrollY > 100) {
					setactive(true);
				} else {
					setactive(false);
				}
			};

			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}, []);

	return (
		<div className="fixed top-0 left-0 p-4 font-primary-font flex justify-between items-center w-[100%] z-50"
			style={{backgroundColor: active? 'white' : 'transparent'}}
		>
			<div className='flex items-center justify-center gap-2 w-fit'>
				<Link to="/"><img src={logo} alt="tejasdigitalstudio" className='w-12'/></Link>
				<Link to="/" className='text-3xl font-normal text-white' style={{color:active?'#6A0DAD':'white'}}>Tejas Digital Studio</Link>
			</div>
			<div className='text-4xl cursor-pointer text-white lg:hidden' onClick={()=>{setnavtoggle(true)}} style={{color:active?'#6A0DAD':'white'}}>
				<GiHamburgerMenu/>
			</div>
			<div className='hidden lg:block'>
			<ul className='text-xl font-medium flex items-center justify-between gap-5 text-white' style={{color:active?'#6A0DAD':'white'}}>
				<Link to="/">Home</Link>
				<Link to="/About">About</Link>
				<Link to="/Works">Works</Link>
				<Link to="/Services">Services</Link>
				<Link to="/Contact">Contact</Link>
				</ul>
			</div>
			<div className='fixed top-0 left-0'>
				<MobileNavbar navtoggle={navtoggle} setnavtoggle={setnavtoggle} />
			</div>
		</div>
	)
}

export default Navbar
