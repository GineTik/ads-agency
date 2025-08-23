import { Features } from './ui/features'
import { Gallery } from './ui/gallery'
import { Hero } from './ui/hero'
import { Logos } from './ui/logos'
import { Team } from './ui/team'
import { Testimonials } from './ui/testimonials'

export function HomePage() {
	return (
		<>
			<Hero />
			<Logos />
			<Features />
			<Team />
			<Testimonials />
			<Gallery />
		</>
	)
}
