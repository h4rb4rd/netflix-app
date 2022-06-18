import { UseFormRegister } from 'react-hook-form'

import { LoginFormDataType } from '../../types'

export type EmailProps = {
	error?: string
	register: UseFormRegister<LoginFormDataType>
}

const Email = ({ error = '', register }: EmailProps) => {
	return (
		<label className='inline-block w-full'>
			<input
				{...register('email', {
					required: 'Email is required.',
					pattern: {
						value:
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						message: 'Please enter a valid email.',
					},
				})}
				type='email'
				placeholder='Email'
				className='input'
			/>
			{error && <p className='text-sm  text-orange-500'>{error}</p>}
		</label>
	)
}

export default Email
