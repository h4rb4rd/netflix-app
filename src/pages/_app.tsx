import { RecoilRoot } from 'recoil'
import NextNProgress from 'nextjs-progressbar'

import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<RecoilRoot>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</RecoilRoot>
			<NextNProgress
				color='#E50914'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
				options={{ showSpinner: false }}
			/>
		</>
	)
}

export default MyApp
