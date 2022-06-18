import { useState } from 'react'

const LoginForm = () => {
	const [login, setLogin] = useState(false)

	return (
		<form
			className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
			onSubmit={() => console.log('submit')}
		>
			<h1 className='text-4xl font-semibold'>Sign In</h1>
			<div className='space-y-4'>
				<label className='inline-block w-full'>
					<input type='email' placeholder='Email' className='input' />
					{'email error ' && (
						<p className='text-sm  text-orange-500'>
							Please enter a valid email.
						</p>
					)}
				</label>
				<label className='inline-block w-full'>
					<input type='password' placeholder='Password' className='input' />
					{'password error' && (
						<p className='text-sm  text-orange-500'>
							Your password must contain between 4 and 60 characters.
						</p>
					)}
				</label>
			</div>
			<button
				className='w-full rounded bg-[#E50914] py-3 font-semibold'
				onClick={() => setLogin(true)}
				type='submit'
			>
				Sign In
			</button>
			<div className='text-[gray]'>
				New to Netflix? &nbsp;
				<button
					className='cursor-pointer text-white hover:underline'
					onClick={() => setLogin(false)}
					type='submit'
				>
					Sign up now
				</button>
			</div>
		</form>
	)
}

export default LoginForm
