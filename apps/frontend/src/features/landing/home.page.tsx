import { Features } from './ui/features'
import { Gallery } from './ui/gallery'
import { Hero } from './ui/hero'
import { Logos } from './ui/logos'

export function HomePage() {
	return (
		<>
			<Hero />
			<Logos />
			<Features />
			<Gallery />
		</>
	)
}
