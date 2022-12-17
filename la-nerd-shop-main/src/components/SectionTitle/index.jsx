export default function SectionTitle({ children }) {
	return (
		<h2 className="section-title">
			{children}
			<div className="underline"></div>
		</h2>
	)
}
