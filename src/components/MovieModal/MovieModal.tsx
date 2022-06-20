import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'

import CloseBtn from './Components/CloseBtn'
import { modalState } from '../../atoms/modalAtom'
import Player from './Components/Player'
import useFetchMovie from '../../hooks/useFetchMovie'
import Info from './Components/Info'

const MovieModal = () => {
	const [showModal, setShowModal] = useRecoilState(modalState)
	const { trailer, genres } = useFetchMovie()

	const handleClose = () => {
		setShowModal(false)
	}

	return (
		<MuiModal
			open={showModal}
			onClose={handleClose}
			className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide'
		>
			<>
				<CloseBtn handleClose={handleClose} />
				<Player trailer={trailer} />
				<Info genres={genres} />
			</>
		</MuiModal>
	)
}

export default MovieModal
