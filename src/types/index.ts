export type TPage = () => JSX.Element | Promise<JSX.Element>

export type TLayout = (
	props: Readonly<{
		children: React.ReactNode
	}>
) => JSX.Element | Promise<JSX.Element>
