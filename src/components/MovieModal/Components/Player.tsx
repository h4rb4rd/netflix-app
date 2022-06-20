import { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { FaPlay, FaPause } from 'react-icons/fa'
import { VIDEO_PLACEHOLDER } from '../../../constants'
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
	const [played, setPLayed] = useState(true)
	const [addedToList, setAddedToList] = useState(false)

	return (
		<div className='relative pt-[56.25%]'>
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${trailer || VIDEO_PLACEHOLDER}`}
				width='100%'
				height='100%'
				style={{ position: 'absolute', top: '0', left: '0' }}
				playing={played}
				muted={muted}
				onPause={() => setPLayed(false)}
				onPlay={() => setPLayed(true)}
			/>
			<div className='absolute bottom-10 flex w-full items-center justify-between px-10 '>
				<div className='flex space-x-2'>
					<button
						className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]'
						onClick={() => setPLayed(!played)}
					>
						{played ? (
							<FaPause className='h-7 w-7 text-black' />
						) : (
							<FaPlay className='h-7 w-7 text-black' />
						)}
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
