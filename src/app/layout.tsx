import type { Metadata } from 'next'
import type { TLayout } from '@/types'

import './globals.css'

import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/useAuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default (async function ({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	)
} satisfies TLayout)
