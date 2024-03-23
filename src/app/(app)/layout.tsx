'use client'

import type { TLayout } from '@/types'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

export default (function ({ children }) {
	const supabase = createClient()

	const onClickSignOut = async () => {
		if (!window.confirm('Are you sure to sign out?')) return

		await supabase.auth.signOut()
	}

	return (
		<div>
			<header className="flex items-center justify-between">
				<div>
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/signin">Sign In</Link>
				</div>
				<div>
					<button onClick={onClickSignOut}>Logout</button>
				</div>
			</header>
			{children}
		</div>
	)
} satisfies TLayout)
