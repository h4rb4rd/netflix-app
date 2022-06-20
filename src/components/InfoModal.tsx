import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'

import MovieInfo from './MovieInfo'
import { infoModalState } from '../atoms/modalAtom'
import useFetchMovie from '../hooks/useFetchMovie'

const InfoModal = () => {
	const [showInfoModal, setShowInfoModal] = useRecoilState(infoModalState)
	const { genres } = useFetchMovie()

	const handleClose = () => {
		setShowInfoModal(false)
	}

	return (
		<MuiModal
			open={showInfoModal}
			onClose={handleClose}
			className='fixed !top-[25vh] left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide'
		>
			<>
				<MovieInfo genres={genres} />
			</>
		</MuiModal>
	)
}

export default InfoModal
