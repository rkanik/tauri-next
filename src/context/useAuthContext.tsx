'use client'

import type { Session } from '@supabase/supabase-js'

import { createClient } from '@/utils/supabase/client'
import { usePathname, useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

type TAuthContext = {
	session: Session | null
}

export const AuthContext = createContext<TAuthContext>(null!)

export const AuthProvider = ({ children }: any) => {
	const [session, setSession] = useState<Session | null>(null)
	const [initialized, setInitialized] = useState(false)

	const router = useRouter()
	const pathname = usePathname()
	const supabase = createClient()

	useEffect(() => {
		supabase.auth.onAuthStateChange((_, data) => {
			setSession(data)
			setInitialized(true)
		})
	}, [supabase.auth])

	useEffect(() => {
		if (initialized) {
			if (pathname === '/signin' && session) {
				router.replace('/')
			} else if (pathname !== '/signin' && !session) {
				router.replace('/signin')
			}
		}
	}, [initialized, pathname, router, session])

	return (
		<AuthContext.Provider value={{ session }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('AuthContext must use inside AuthProvider')
	}
	return context
}
