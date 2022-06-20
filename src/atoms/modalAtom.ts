import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { IMovie } from '../types'

export const movieModalState = atom({
	key: 'movieModalState',
	default: false,
})

export const infoModalState = atom({
	key: 'infoModalState',
	default: false,
})

export const movieState = atom<IMovie | DocumentData | null>({
	key: 'movieState',
	default: null,
})
