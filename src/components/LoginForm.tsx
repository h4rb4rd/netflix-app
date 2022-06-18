import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Email from './FormUI/Email'
import { LoginFormDataType } from '../types'
import Password from './FormUI/Password'

const LoginForm = () => {
	const [login, setLogin] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormDataType>()

	const onSubmit: SubmitHandler<LoginFormDataType> = data => {
		if (login) {
			console.log(data.email, data.password)
		} else {
			console.log(data.email, data.password)
		}
	}

	return (
		<form
			className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
			onSubmit={handleSubmit(onSubmit)}
			noValidate
		>
			<h1 className='text-4xl font-semibold'>Sign In</h1>
			<div className='space-y-4'>
				<Email register={register} error={errors?.email?.message} />
				<Password register={register} error={errors?.password?.message} />
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
