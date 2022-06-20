import { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { FaPlay } from 'react-icons/fa'
import {
	CheckIcon,
	PlusIcon,
	ThumbUpIcon,
	VolumeOffIcon,
	VolumeUpIcon,
} from '@heroicons/react/outline'

interface PlayerProps {
	trailer: string
}

const Player = ({ trailer }: PlayerProps) => {
	const [muted, setMuted] = useState(true)
	const [addedToList, setAddedToList] = useState(false)

	return (
		<div className='relative pt-[56.25%]'>
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${trailer}`}
				width='100%'
				height='100%'
				style={{ position: 'absolute', top: '0', left: '0' }}
				playing
				muted={muted}
			/>
			<div className='absolute bottom-10 flex w-full items-center justify-between px-10 '>
				<div className='flex space-x-2'>
					<button className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]'>
						<FaPlay className='h-7 w-7 text-black' />
						Play
					</button>
					<button className='modalButton'>
						{addedToList ? (
							<CheckIcon className='h-7 w-7' />
						) : (
							<PlusIcon className='h-7 w-7' />
						)}
					</button>
					<button className='modalButton'>
						<ThumbUpIcon className='h-6 w-6' />
					</button>
				</div>
				<button className='modalButton' onClick={() => setMuted(!muted)}>
					{muted ? (
						<VolumeOffIcon className='h-6 w-6' />
					) : (
						<VolumeUpIcon className='h-6 w-6' />
					)}
				</button>
			</div>
		</div>
	)
}

export default Player
