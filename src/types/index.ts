export type TPage = () => JSX.Element

export type TLayout = (
	props: Readonly<{
		children: React.ReactNode
	}>
) => JSX.Element
