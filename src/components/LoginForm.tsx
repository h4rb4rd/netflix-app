import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Email from './FormUI/Email'
import { LoginFormDataType } from '../types'
import Password from './FormUI/Password'
import useAuth from '../hooks/useAuth'

const LoginForm = () => {
	const [login, setLogin] = useState(true)
	const { signIn, signUp } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormDataType>()

	const onSubmit: SubmitHandler<LoginFormDataType> = async data => {
		if (login) {
			await signIn(data.email, data.password)
		} else {
			await signUp(data.email, data.password)
		}
	}

	return (
		<form
			className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
			onSubmit={handleSubmit(onSubmit)}
			noValidate
		>
			<h1 className='text-4xl font-semibold'>
				{login ? 'Sign In' : 'Sign Up'}
			</h1>
			<div className='space-y-4'>
				<Email register={register} error={errors?.email?.message} />
				<Password register={register} error={errors?.password?.message} />
			</div>
			<button
				className='w-full rounded bg-[#E50914] py-3 font-semibold'
				type='submit'
			>
				{login ? 'Sign In' : 'Sign Up'}
			</button>
			<div className='text-[gray]'>
				{login ? 'New to Netflix?' : 'Already have an account?'} &nbsp;
				<button
					className='cursor-pointer text-white hover:underline'
					onClick={() => (login ? setLogin(false) : setLogin(true))}
					type='button'
				>
					{login ? 'Sign up now' : 'Sign in'}
				</button>
			</div>
		</form>
	)
}

export default LoginForm
