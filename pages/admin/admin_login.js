import LoginForm from '../../components/admin/LoginForm';

const AdminPage = () => {
	return (
		<div className='p-8 m-8 max-w-lg mx-auto bg-gray-100'>
			<div className='pb-4'>
				<h1 className='text-2xl text-center'>Login</h1>
			</div>
			<div>
				<LoginForm />
			</div>
		</div>
	);
};

export default AdminPage;
