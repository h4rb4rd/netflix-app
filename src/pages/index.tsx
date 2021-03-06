import { useRecoilValue } from 'recoil'

import Banner from '../components/Banner'
import Header from '../components/Header'
import { infoModalState, movieModalState } from '../atoms/modalAtom'
import MainLayout from '../components/MainLayout'
import MovieModal from '../components/MovieModal'
import Row from '../components/Row'
import { IMovie } from '../types'
import requests from '../utils/requests'
import useAuth from '../hooks/useAuth'
import InfoModal from '../components/InfoModal'
import useList from '../hooks/useList'

interface HomeProps {
	netflixOriginals: IMovie[]
	trendingNow: IMovie[]
	topRated: IMovie[]
	actionMovies: IMovie[]
	comedyMovies: IMovie[]
	horrorMovies: IMovie[]
	romanceMovies: IMovie[]
	documentaries: IMovie[]
}

const Home = ({
	netflixOriginals,
	actionMovies,
	comedyMovies,
	documentaries,
	horrorMovies,
	romanceMovies,
	topRated,
	trendingNow,
}: HomeProps) => {
	const { user, loading } = useAuth()
	const showMovieModal = useRecoilValue(movieModalState)
	const showInfoModal = useRecoilValue(infoModalState)
	const list = useList(user?.uid)

	if (loading) return null

	return (
		<MainLayout title='Home | Netflix'>
			<div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
				<Header />
				<main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16 '>
					<Banner netflixOriginals={netflixOriginals} />
					<section className='md:space-y-24'>
						<Row title='Trending Now' movies={trendingNow} />
						<Row title='Top Rated' movies={topRated} />
						<Row title='Action Thrillers' movies={actionMovies} />
						{list.length > 0 && <Row title='My List' movies={list} />}
						<Row title='Comedies' movies={comedyMovies} />
						<Row title='Scary Movies' movies={horrorMovies} />
						<Row title='Romance Movies' movies={romanceMovies} />
						<Row title='Documentaries' movies={documentaries} />
					</section>
				</main>
				{showMovieModal && <MovieModal />}
				{showInfoModal && <InfoModal />}
			</div>
		</MainLayout>
	)
}

export default Home

export const getServerSideProps = async () => {
	const [
		netflixOriginals,
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries,
	] = await Promise.all([
		fetch(requests.fetchNetflixOriginals).then(res => res.json()),
		fetch(requests.fetchTrending).then(res => res.json()),
		fetch(requests.fetchTopRated).then(res => res.json()),
		fetch(requests.fetchActionMovies).then(res => res.json()),
		fetch(requests.fetchComedyMovies).then(res => res.json()),
		fetch(requests.fetchHorrorMovies).then(res => res.json()),
		fetch(requests.fetchRomanceMovies).then(res => res.json()),
		fetch(requests.fetchDocumentaries).then(res => res.json()),
	])

	return {
		props: {
			netflixOriginals: netflixOriginals.results,
			trendingNow: trendingNow.results,
			topRated: topRated.results,
			actionMovies: actionMovies.results,
			comedyMovies: comedyMovies.results,
			horrorMovies: horrorMovies.results,
			romanceMovies: romanceMovies.results,
			documentaries: documentaries.results,
		},
	}
}
