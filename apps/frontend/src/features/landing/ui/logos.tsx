'use client'

import AutoScroll from 'embla-carousel-auto-scroll'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/shared/components/ui-kit/carousel'
import { cn } from '../../../shared/lib/utils'

interface Logo {
	id: string
	description: string
	image: string
	className?: string
}

interface Logos3Props {
	heading?: string
	subheading?: string
	logos?: Logo[]
	className?: string
}

export const Logos = ({
	heading = 'З нами – це якість і ефективність',
	subheading = 'Провідні компанії вже відкрили для себе переваги нашої роботи',
	logos = [
		{
			id: 'logo-1',
			description: 'Logo 1',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg',
			className: 'h-7 w-auto',
		},
		{
			id: 'logo-2',
			description: 'Logo 2',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg',
			className: 'h-7 w-auto',
		},
		{
			id: 'logo-3',
			description: 'Logo 3',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg',
			className: 'h-10 w-auto opacity-100',
		},
		{
			id: 'logo-4',
			description: 'Logo 4',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg',
			className: 'h-10 w-auto',
		},
		{
			id: 'logo-5',
			description: 'Logo 5',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg',
			className: 'h-7 w-auto',
		},
		{
			id: 'logo-6',
			description: 'Logo 6',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg',
			className: 'h-7 w-auto',
		},
		{
			id: 'logo-7',
			description: 'Logo 7',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg',
			className: 'h-4 w-auto',
		},
		{
			id: 'logo-8',
			description: 'Logo 8',
			image:
				'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg',
			className: 'h-7 w-auto',
		},
	],
}: Logos3Props) => {
	return (
		<section className='pt-16 pb-36 bg-sand-100'>
			<div className='mx-auto container flex flex-col items-center text-center'>
				<h1 className='text-xl font-semibold tracking-tight text-balance lg:text-3xl'>
					{heading}
					<br />
					<span className='text-muted-foreground'>{subheading}</span>
				</h1>
			</div>
			<div className='pt-16'>
				<div className='relative flex items-center justify-center w-full'>
					<Carousel
						opts={{ loop: true, watchDrag: false }}
						plugins={[AutoScroll({ playOnInit: true })]}
						className='w-full'
					>
						<CarouselContent className='ml-0'>
							<CarouselLogos logos={logos} />
							<CarouselLogos logos={logos} />
							<CarouselLogos logos={logos} />
						</CarouselContent>
					</Carousel>
					<div className='absolute inset-y-0 left-0 w-12 bg-linear-to-r from-sand-100 to-transparent'></div>
					<div className='absolute inset-y-0 right-0 w-12 bg-linear-to-l from-sand-100 to-transparent'></div>
				</div>
			</div>
		</section>
	)
}

function CarouselLogos({ logos }: { logos: Logo[] }) {
	return logos.map((logo) => (
		<CarouselItem key={logo.id} className='flex basis-[250px]'>
			<div className='mx-10 flex shrink-0 items-center justify-center'>
				<div>
					<img
						src={logo.image}
						alt={logo.description}
						className={cn(
							'opacity-80 grayscale pointer-events-none select-none',
							logo.className
						)}
					/>
				</div>
			</div>
		</CarouselItem>
	))
}
