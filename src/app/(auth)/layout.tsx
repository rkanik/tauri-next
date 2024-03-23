import type { TLayout } from '@/types'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default (async function ({ children }) {
	const supabase = createClient(cookies())

	const { data } = await supabase.auth.getSession()
	if (data.session) return redirect('/')

	return <>{children}</>
} satisfies TLayout)
