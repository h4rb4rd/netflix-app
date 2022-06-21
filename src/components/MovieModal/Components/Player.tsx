import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { useRecoilValue } from 'recoil'
import { FaPlay, FaPause } from 'react-icons/fa'
import {
	collection,
	deleteDoc,
	doc,
	DocumentData,
	onSnapshot,
	setDoc,
} from 'firebase/firestore'
import {
	CheckIcon,
	PlusIcon,
	VolumeOffIcon,
	VolumeUpIcon,
} from '@heroicons/react/outline'

import { db } from '../../../../firebase'
import { IMovie } from '../../../types'
import { movieState } from '../../../atoms/modalAtom'
import { VIDEO_PLACEHOLDER } from '../../../constants'
import useAuth from '../../../hooks/useAuth'

interface PlayerProps {
	trailer: string
}

const Player = ({ trailer }: PlayerProps) => {
	const movie = useRecoilValue(movieState)
	const [muted, setMuted] = useState(false)
	const [played, setPLayed] = useState(true)
	const [addedToList, setAddedToList] = useState(false)
	const [movies, setMovies] = useState<DocumentData[] | IMovie[]>([])
	const { user } = useAuth()

	useEffect(() => {
		if (user) {
			return onSnapshot(
				collection(db, 'customers', user.uid, 'myList'),
				snapshot => setMovies(snapshot.docs)
			)
		}
	}, [db, movie?.id])

	useEffect(
		() =>
			setAddedToList(
				movies.findIndex(result => result.data().id === movie?.id) !== -1
			),
		[movies]
	)

	const handleList = async () => {
		if (addedToList) {
			await deleteDoc(
				doc(db, 'customers', user!.uid, 'myList', movie?.id.toString()!)
			)
		} else {
			await setDoc(
				doc(db, 'customers', user!.uid, 'myList', movie?.id.toString()!),
				{
					...movie,
				}
			)
		}
	}

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
						className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6] mr-2'
						onClick={() => setPLayed(!played)}
					>
						{played ? (
							<FaPause className='h-7 w-7 text-black' />
						) : (
							<FaPlay className='h-7 w-7 text-black' />
						)}
					</button>
					<button className='modalButton' onClick={handleList}>
						{addedToList ? (
							<CheckIcon className='h-7 w-7' />
						) : (
							<PlusIcon className='h-7 w-7' />
						)}
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
