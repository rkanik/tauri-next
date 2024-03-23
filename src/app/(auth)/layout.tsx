'use client'

import { TLayout } from '@/types'
import { useEffect } from 'react'

export default (function ({ children }) {
	useEffect(() => {
		// createDir('data', {
		// 	dir: BaseDirectory.AppConfig,
		// 	recursive: true,
		// })
		// readTextFile('data/cookies.json', {
		// 	dir: BaseDirectory.App,
		// }).then((contents) => {
		// 	console.log(JSON.parse(contents))
		// })
		// writeFile('data/cookies.json', JSON.stringify({ test: 'hello' }), {
		// 	dir: BaseDirectory.App,
		// 	// append: true,
		// })
	}, [])
	return <>{children}</>
} satisfies TLayout)
