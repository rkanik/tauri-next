'use client'

import type { TPage } from '@/types'
import type { FormEventHandler } from 'react'

import { createClient } from '@/utils/supabase/client'
import { formToObject } from '@/utils/formToObject'

import Link from 'next/link'

export default (function () {
	const supabase = createClient()

	const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault()

		const { email, password } = formToObject<{
			email: string
			password: string
		}>(event.target)

		if (!email || !password) return
		const { error, data } = await supabase.auth.signInWithPassword({
			email,
			password,
		})

		if (error || !data.user) {
			console.log(error)
			return
		}
	}

	return (
		<main>
			<h1>
				Sign In <Link href={'/'}>Home</Link>
			</h1>
			<form onSubmit={onSubmit}>
				<input type="email" name="email" placeholder="Enter email..." />
				<input
					type="password"
					name="password"
					placeholder="Enter password..."
				/>
				<input type="submit" value="Sign In" />
			</form>
		</main>
	)
} satisfies TPage)
