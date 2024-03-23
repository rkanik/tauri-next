import { TPage } from '@/types'
import { createClient } from '@/utils/supabase/server'

export default (async function () {
	const supabase = createClient()

	const { data: todos } = await supabase.from('projects').select()

	return (
		<main>
			<h1>Home</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
				ipsa commodi corrupti natus perspiciatis quae labore. Nisi vitae
				esse sit totam excepturi! Sit quas doloribus aperiam adipisci, minus
				explicabo laudantium.
			</p>
			<div>
				{todos?.map((todo) => (
					<li>{todo.name}</li>
				))}
			</div>
		</main>
	)
} satisfies TPage)
