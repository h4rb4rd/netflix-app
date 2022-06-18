import { UseFormRegister } from 'react-hook-form'

import { LoginFormDataType } from '../../types'

export type PasswordProps = {
	error?: string
	register: UseFormRegister<LoginFormDataType>
}

const Password = ({ error = '', register }: PasswordProps) => {
	return (
		<label className='inline-block w-full'>
			<input
				{...register('password', {
					required: 'Password is required.',
					minLength: {
						value: 4,
						message: 'Your password must be at least 4 characters long.',
					},
					maxLength: {
						value: 60,
						message: 'Your password can be max 60 characters long.',
					},
				})}
				type='password'
				placeholder='Password'
				className='input'
			/>
			{error && <p className='text-sm  text-orange-500'>{error}</p>}
		</label>
	)
}

export default Password
