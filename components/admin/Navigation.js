import Link from 'next/link'

const Navigation = () => {
    return (
		<div className='p-2'>
			<ul className='grid gap-2 justify-center sm:flex sm:justify-around items-center '>
				<Link href='/admin/admin_panel/user_newsletters'>
					<li className='category-nav cursor-crosshair bg-gray-300'>Newsletter Signups</li>
				</Link>
		
			</ul>
		</div>
	);
}
 
export default Navigation;