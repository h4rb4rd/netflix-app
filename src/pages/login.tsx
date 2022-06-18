import Image from 'next/image'

import LoginForm from '../components/LoginForm'
import MainLayout from '../components/MainLayout'

const login = () => {
	return (
		<MainLayout title='Login | Netflix'>
			<div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
				<div className='absolute left-2 top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4'>
					<Image
						src='https://rb.gy/ek4j9f'
						layout='fill'
						objectFit='contain'
						priority
					/>
				</div>
				<Image
					src='https://rb.gy/p2hphi'
					layout='fill'
					className='-z-10 !hidden opacity-60 sm:!inline'
					objectFit='cover'
				/>
				<LoginForm />
			</div>
		</MainLayout>
	)
}

export default login
