import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'

import CloseBtn from './Components/CloseBtn'
import MovieInfo from '../MovieInfo'
import { movieModalState } from '../../atoms/modalAtom'
import Player from './Components/Player'
import useFetchMovie from '../../hooks/useFetchMovie'

const MovieModal = () => {
	const [showMovieModal, setMovieShowModal] = useRecoilState(movieModalState)
	const { trailer, genres } = useFetchMovie()

	const handleClose = () => {
		setMovieShowModal(false)
	}

	return (
		<MuiModal
			open={showMovieModal}
			onClose={handleClose}
			className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide'
		>
			<>
				<CloseBtn handleClose={handleClose} />
				<Player trailer={trailer} />
				<MovieInfo genres={genres} />
			</>
		</MuiModal>
	)
}

export default MovieModal
