import Link from 'next/link'


const LoginForm = () => {
	return (
		<div>
			<form className='grid gap-4 justify-items-center'>
				<div className='grid gap-2'>
					<label>Email</label>
					<input
						type='text'
						className='border border-gray-400 focus:border-gray-800'
					/>
				</div>
				<div className='grid gap-2'>
					<label>Password</label>
					<input
						type='text'
						className='border border-gray-400 focus:border-gray-800'
					/>
				</div>
				<Link href='/admin/admin_panel'>
					<div className='border p-2 bg-gray-600 rounded hover:bg-gray-400 text-white font-semibold cursor-pointer'>
						Login
					</div>
				</Link>
			</form>
		</div>
	);
};

export default LoginForm;
