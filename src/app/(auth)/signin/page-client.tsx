'use client'

import type { TPage } from '@/types'
import type { FormEventHandler } from 'react'

import { createClient } from '@/utils/supabase/client'
import { formToObject } from '@/utils/formToObject'
import { useRouter } from 'next/navigation'

export default (function () {
	const supabase = createClient()

	const router = useRouter()
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

		router.replace('/')
	}

	return (
		<main>
			<h1>Sign In</h1>
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
