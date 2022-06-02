import Logo from '../header/Logo';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import Offerings from './Offerings';
import NewsLetterSignup from './NewsLetterSignup';

const Footer = () => {
	return (
		<>
			<div className='bg-gray-200'>
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
				<div className='border-t-2 pt-6 border-blue-300'>
					<NewsLetterSignup />
				</div>
				<Link href='/admin/admin_login'>
					<p className='text-xs p-2 text-center mt-4 cursor-pointer'>
						Admin
					</p>
				</Link>

				<p className='text-center text-sm pt-2'>© for development only.</p>
			
			</div>
		</>
	);
};

export default Footer;
