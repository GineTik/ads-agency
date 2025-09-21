'use client'

import { Button } from '@/shared/components/ui-kit/button'
import { Card, CardContent, CardHeader } from '@/shared/components/ui-kit/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi
} from '@/shared/components/ui-kit/carousel'
import { cn } from '@/shared/lib/utils'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ClientTestimonial {
	id: string
	name: string
	position: string
	company: string
	image: string
	testimonial: string
	featured?: boolean
	imageClassName?: string
}

const clientTestimonials: ClientTestimonial[] = [
	{
		id: '1',
		name: 'Андрій Коваль',
		position: 'Маркетинг-директор',
		company: 'Світ Продуктів',
		testimonial: 'Завдяки професійній роботі агентства ми збільшили впізнаваність бренду на 60%. Якість неперевершена!',
		featured: true,
		image: 'https://streamline-nextjs-template.vercel.app/images/homepage/testimonials/kevin-yam.webp',
		imageClassName: 'object-top'
	},
	{
		id: '2',
		name: 'Ольга Мельник',
		position: 'Власник мережі',
		company: 'ТехноМарт',
		image: 'https://streamline-nextjs-template.vercel.app/images/homepage/testimonials/victoria-smith.webp',
		testimonial: 'Комплексний підхід до брендингу 15 торгових точок. Команда справжніх професіоналів з неймовірною увагою до деталей.',
	},
	{
		id: '3',
		name: 'Максим Петров',
		position: 'Генеральний директор',
		company: 'ІТ Системи Про',
		image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
		testimonial: 'Креативні рішення та швидкість реалізації - це те, що нас вразило. Офіс тепер виглядає сучасно та стильно.'
	},
	{
		id: '4',
		name: 'Катерина Сидоренко',
		position: 'Маркетолог',
		company: 'Краса & Здоров\'я',
		image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
		testimonial: 'Лайтбокси привертають увагу клієнтів значно краще за попередню рекламу. Збільшили продажі на 25% за перший місяць.'
	},
	{
		id: '5',
		name: 'Віктор Лисенко',
		position: 'Власник ресторану',
		company: 'Смакота',
		image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp',
		testimonial: 'Вражає швидкість роботи - від ескізу до монтажу всього 3 дні. Якість матеріалів та монтажу на найвищому рівні.'
	}
]

export function Team() {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	const handleSetApi = (api: CarouselApi) => {
		setApi(api)
		if (!api) return

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap())

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap())
		})
	}

	const scrollTo = (index: number) => {
		api?.scrollTo(index)
	}

	return (
		<section className='bg-mint py-16 md:py-28 lg:py-32'>
			<div className='container'>
				{/* Header */}
				<div className='flex flex-col gap-3 md:flex-row mb-8 md:mb-12 lg:mb-20'>
					<h2 className='flex-1 font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl'>
						Нам довіряють
						<br />
						<span className='text-primary'>клієнти-лідери</span>
					</h2>
					<div className='flex flex-1 flex-col items-start gap-3 md:max-w-md md:self-end mt-2'>
						<p className='text-lg font-medium text-gray-700 dark:text-gray-300'>
							Професійна зовнішня реклама будується на довірі, якості та результатах. 
							Ми допомагаємо брендам виділятися та залучати більше клієнтів.
						</p>
						<Button variant='outline' className='group'>
							Переглянути всі кейси
							<ArrowRight className='ml-2 size-4 transition-transform group-hover:translate-x-1' />
						</Button>
					</div>
				</div>

				{/* Testimonials Carousel */}
				<div className='relative w-full'>
					<div className='relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))]'>
						<Carousel 
							className='w-full'
							setApi={handleSetApi}
							opts={{
								align: "start",
								loop: true,
							}}
						>
										<CarouselContent className='-ml-4'>
				{clientTestimonials.map((testimonial, index) => (
					<CarouselItem 
						key={testimonial.id} 
						className='pl-4 basis-4/5 md:basis-1/2 lg:basis-[34%]'
					>
											<TestimonialCard 
						testimonial={testimonial} 
						isActive={index === current}
					/>
					</CarouselItem>
				))}
			</CarouselContent>
						</Carousel>
					</div>

					{/* Custom Navigation */}
					<div className='container'>
						<div className='mt-8 flex items-center justify-between gap-4'>
							{/* Dot Indicators */}
							<div className='flex gap-2'>
								{Array.from({ length: count }).map((_, index) => (
									<button
										key={index}
										className={cn(
                                            'size-4 rounded-full transition-colors cursor-pointer',
											index === current 
												? 'bg-white' 
												: 'bg-white/70 hover:bg-white'
										)}
										onClick={() => scrollTo(index)}
										aria-label={`Перейти до відгуку ${index + 1}`}
									/>
								))}
							</div>

							{/* Navigation Arrows */}
							<div className='flex gap-2'>
								<Button
									variant='ghost'
									size='icon'
									className='rounded-full size-11 bg-background/40 hover:bg-background/60'
									onClick={() => api?.scrollPrev()}
								>
									<ChevronLeft className='size-6' />
									<span className='sr-only'>Попередній слайд</span>
								</Button>
								<Button
									variant='ghost'
									size='icon'
									className='rounded-full size-11 bg-background/40 hover:bg-background/60'
									onClick={() => api?.scrollNext()}
								>
									<ChevronRight className='size-6' />
									<span className='sr-only'>Наступний слайд</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function TestimonialCard({ 
	testimonial, 
	isActive = false
}: { 
	testimonial: ClientTestimonial
	isActive?: boolean
}) {
	return (
		<Card className={`
			rounded-xl h-full overflow-hidden border-[7px] transition-all duration-300
			${isActive 
				? 'border-foreground shadow-sm bg-card text-card-foreground' 
				: 'border-mint shadow-none bg-card text-primary'
			}
		`}>
			<CardHeader className='p-0'>
				<div className={`relative aspect-[4/3.3] w-full transition-all duration-300 ${
					isActive ? 'bg-primary/20' : 'bg-emerald-600/20'
				}`}>
					{/* Green overlay for inactive cards */}
					{!isActive && (
						<div className='absolute inset-0 bg-emerald-600/30 mix-blend-multiply z-10' />
					)}
					<Image
						src={testimonial.image}
						alt={testimonial.name}
						fill
						className={cn(
							'object-cover transition-all duration-300 object-center',
							!isActive ? 'mix-blend-luminosity grayscale-[20%] sepia-[30%] hue-rotate-[60deg] saturate-[1.2]' : '',
							testimonial.imageClassName
						)}
					/>
				</div>
			</CardHeader>
			<CardContent className='p-6'>
				<blockquote className='text-lg leading-7 font-semibold tracking-tight text-balance md:text-xl lg:text-2xl mb-6'>
					{testimonial.testimonial}
				</blockquote>
				<div className='flex flex-col items-start'>
					<div className='font-semibold max-md:text-sm'>{testimonial.name}</div>
					<div className='text-muted-foreground text-xs md:text-sm'>
						{testimonial.position}, {testimonial.company}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}