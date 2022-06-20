import { XIcon } from '@heroicons/react/outline'

interface CloseBtnProps {
	handleClose: () => void
}

const CloseBtn = ({ handleClose }: CloseBtnProps) => {
	return (
		<button
			className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]'
			onClick={handleClose}
		>
			<XIcon className='h-6 w-6' />
		</button>
	)
}

export default CloseBtn
