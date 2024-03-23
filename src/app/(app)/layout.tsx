import type { TLayout } from '@/types'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

import LayoutClient from './layout-client'

export default (async function ({ children }) {
	const supabase = createClient(cookies())

	const { error, data } = await supabase.auth.getSession()
	if (error || !data.session) return redirect('/signin')

	return <LayoutClient>{children}</LayoutClient>
} satisfies TLayout)
