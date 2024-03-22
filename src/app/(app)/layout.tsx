import type { TLayout } from '@/types'
import Link from 'next/link'

export default (function Layout({ children }) {
	return (
		<div>
			<div>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
			</div>
			{children}
		</div>
	)
} satisfies TLayout)
