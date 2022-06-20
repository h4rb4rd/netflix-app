import { RecoilRoot } from 'recoil'

import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</RecoilRoot>
	)
}

export default MyApp
