import Logo from '../header/Logo';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import Offerings from './Offerings';
import NewsLetterSignup from './NewsLetterSignup';

const Footer = () => {
	return (
		<>
			<div className="bg-gray-200">
				<Offerings />
				<div className='flex items-center justify-around py-12'>
					<div>
						<Logo />
					</div>
					<div className='text-xl grid grid-cols-5 gap-3'>
						<FaFacebookSquare />
						<FaInstagramSquare />
						<AiFillYoutube />
						<AiOutlineTwitter />
						<BsPinterest />
					</div>
				</div>
				<div>
					<NewsLetterSignup />
				</div>
				<p className='text-center text-sm p-6'>
					Copyright © for development only.
				</p>
			</div>
		</>
	);
};

export default Footer;