export const formToObject = <T>(form: any) => {
	return Object.fromEntries(new FormData(form)) as T
}
