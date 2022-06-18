import Image from 'next/image'
import MainLayout from '../components/MainLayout'

const login = () => {
	return (
		<MainLayout title='Login | Netflix'>
			<div>
				<Image
					src='https://rb.gy/p2hphi'
					layout='fill'
					className='-z-10 !hidden opacity-60 sm:!inline'
					objectFit='cover'
				/>
			</div>
		</MainLayout>
	)
}

export default login
