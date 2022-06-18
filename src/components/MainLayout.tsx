import Head from 'next/head'

interface MainLayoutProps {
	title: string
	children: React.ReactNode
}

const MainLayout = ({ title, children }: MainLayoutProps) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
		</>
	)
}

export default MainLayout
