import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import { movieState } from '../atoms/modalAtom'
import { IElement, GenreType } from '../types'

interface IMovieData {
	trailer: string
	genres: GenreType[]
}

const useFetchMovie = (): IMovieData => {
	const movie = useRecoilValue(movieState)
	const [trailer, setTrailer] = useState('')
	const [genres, setGenres] = useState<GenreType[]>([])

	useEffect(() => {
		if (!movie) return

		async function fetching() {
			const data = await fetch(
				`https://api.themoviedb.org/3/${
					movie?.media_type === 'tv' ? 'tv' : 'movie'
				}/${movie?.id}?api_key=${
					process.env.NEXT_PUBLIC_API_KEY
				}&language=en-US&append_to_response=videos`
			)
				.then(response => response.json())
				.catch(error => alert(error.message))

			if (data?.videos) {
				const index = data.videos.results.findIndex(
					(element: IElement) => element.type === 'Trailer'
				)
				setTrailer(data.videos?.results[index]?.key)
			}
			if (data?.genres) {
				setGenres(data.genres)
			}
		}

		fetching()
	}, [movie])

	return { trailer, genres }
}

export default useFetchMovie
