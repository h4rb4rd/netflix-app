import { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRecoilState } from 'recoil'

import { BASE_URL } from '../constants'
import { IMovie } from '../types'
import { modalState, movieState } from '../atoms/modalAtom'

interface BannerProps {
	netflixOriginals: IMovie[]
}

const Banner = ({ netflixOriginals }: BannerProps) => {
	const [movie, setMovie] = useState<IMovie | null>(null)
	const [showModal, setShowModal] = useRecoilState(modalState)
	const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

	useEffect(() => {
		setMovie(
			netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
		)
	}, [netflixOriginals])

	return (
		<div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
			<div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
				<Image
					layout='fill'
					src={`${BASE_URL}${movie?.backdrop_path || movie?.poster_path}`}
					objectFit='cover'
					priority
				/>
			</div>

			<h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
				{movie?.title || movie?.name || movie?.original_name}
			</h1>
			<p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
				{movie?.overview}
			</p>
			<div className='flex space-x-3'>
				<button className='bannerButton bg-white text-black'>
					<FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' />
					Play
				</button>

				<button
					className='bannerButton bg-[gray]/70'
					onClick={() => {
						setCurrentMovie(movie)
						setShowModal(true)
					}}
				>
					<InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' /> More Info
				</button>
			</div>
		</div>
	)
}

export default Banner
