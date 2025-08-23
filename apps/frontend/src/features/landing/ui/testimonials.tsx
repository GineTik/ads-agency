'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui-kit/avatar'
import { Card, CardContent } from '@/shared/components/ui-kit/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/shared/components/ui-kit/carousel'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
	id: string
	content: string
	clientName: string
	clientPosition: string
	company: string
	avatar: string
	rating: number
	result?: string
}

const testimonials: Testimonial[] = [
	{
		id: '1',
		content: 'Працювали з агентством над білбордами для нашої мережі магазинів. Результат перевершив очікування - збільшення відвідуваності на 40%. Професійний підхід та якісне виконання.',
		clientName: 'Андрій Коваль',
		clientPosition: 'Маркетинг-директор',
		company: 'Світ Продуктів',
		avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
		rating: 5,
		result: '+40% відвідуваності'
	},
	{
		id: '2',
		content: 'Неймовірна команда! Створили нам комплексну систему зовнішньої реклами для 15 торгових точок. Все зроблено вчасно та з високою якістю. Рекомендую всім.',
		clientName: 'Ольга Мельник',
		clientPosition: 'Власник мережі',
		company: 'ТехноМарт',
		avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
		rating: 5,
		result: '15 локацій'
	},
	{
		id: '3',
		content: 'Звернулися для брендингу нового офісу. Команда запропонувала креативні рішення, які ідеально відобразили нашу корпоративну культуру. Клієнти постійно хвалять дизайн.',
		clientName: 'Максим Петров',
		clientPosition: 'Генеральний директор',
		company: 'ІТ Системи Про',
		avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
		rating: 5
	},
	{
		id: '4',
		content: 'Дуже вдячні за якісну роботу з лайтбоксами. Конструкції виглядають сучасно та стильно, а головне - привертають увагу потенційних клієнтів. Збільшили продажі на 25%.',
		clientName: 'Катерина Сидоренко',
		clientPosition: 'Маркетолог',
		company: 'Краса & Здоров\'я',
		avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
		rating: 5,
		result: '+25% продажів'
	},
	{
		id: '5',
		content: 'Потрібно було терміново зробити вивіску для нового ресторану. Команда відпрацювала швидко та професійно - за 3 дні від ескізу до монтажу. Якість матеріалів на висоті.',
		clientName: 'Віктор Лисенко',
		clientPosition: 'Власник ресторану',
		company: 'Смакота',
		avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp',
		rating: 5,
		result: '3 дні реалізації'
	}
]

export function Testimonials() {
	return (
		<section className='py-16 md:py-28 lg:py-32 bg-mint-50'>
			<div className='container'>
				{/* Header */}
				<div className='mb-12 text-center'>
					<h2 className='text-3xl font-semibold leading-[1] tracking-tight text-balance md:text-4xl lg:text-5xl mb-4'>
						Що кажуть наші клієнти
					</h2>
					<p className='text-muted-foreground text-lg font-medium max-w-2xl mx-auto'>
						Більше 500+ успішних проектів та задоволених клієнтів. Ознайомтеся з відгуками 
						про нашу роботу від провідних компаній України.
					</p>
				</div>

				{/* Testimonials Carousel */}
				<Carousel 
					opts={{
						align: "start",
						loop: true,
					}}
					className='w-full max-w-6xl mx-auto'
				>
					<CarouselContent className='-ml-2 md:-ml-4'>
						{testimonials.map((testimonial) => (
							<CarouselItem key={testimonial.id} className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2'>
								<TestimonialCard testimonial={testimonial} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='hidden md:flex' />
					<CarouselNext className='hidden md:flex' />
				</Carousel>

				{/* Statistics */}
				<div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
					<div>
						<div className='text-3xl font-bold mb-2'>500+</div>
						<div className='text-muted-foreground'>Проектів</div>
					</div>
					<div>
						<div className='text-3xl font-bold mb-2'>10</div>
						<div className='text-muted-foreground'>Років досвіду</div>
					</div>
					<div>
						<div className='text-3xl font-bold mb-2'>98%</div>
						<div className='text-muted-foreground'>Задоволених клієнтів</div>
					</div>
					<div>
						<div className='text-3xl font-bold mb-2'>5.0</div>
						<div className='text-muted-foreground'>Середній рейтинг</div>
					</div>
				</div>
			</div>
		</section>
	)
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
	return (
		<Card className='h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300'>
			<CardContent className='p-6 space-y-4'>
				{/* Quote Icon */}
				<Quote className='size-8 text-primary/20' />
				
				{/* Rating */}
				<div className='flex items-center gap-1'>
					{[...Array(5)].map((_, index) => (
						<Star
							key={index}
							className={`size-4 ${
								index < testimonial.rating 
									? 'fill-yellow-400 text-yellow-400' 
									: 'text-gray-300'
							}`}
						/>
					))}
				</div>

				{/* Content */}
				<blockquote className='text-lg leading-relaxed'>
					&ldquo;{testimonial.content}&rdquo;
				</blockquote>

				{/* Result Badge */}
				{testimonial.result && (
					<div className='inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium'>
						{testimonial.result}
					</div>
				)}

				{/* Author */}
				<div className='flex items-center gap-3 pt-4 border-t'>
					<Avatar className='size-12'>
						<AvatarImage src={testimonial.avatar} alt={testimonial.clientName} />
						<AvatarFallback>
							{testimonial.clientName.split(' ').map(n => n[0]).join('')}
						</AvatarFallback>
					</Avatar>
					<div>
						<div className='font-semibold'>{testimonial.clientName}</div>
						<div className='text-sm text-muted-foreground'>
							{testimonial.clientPosition}
						</div>
						<div className='text-sm font-medium text-primary'>
							{testimonial.company}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
