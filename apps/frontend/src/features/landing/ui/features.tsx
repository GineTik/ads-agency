import { AirplayIcon, AudioLinesIcon } from 'lucide-react'
import Link from 'next/link'

export function Features() {
	return (
		<section id='feature1' className='py-16 md:py-28 lg:py-32'>
			<div className='container'>
				<div className='flex flex-col gap-3 md:flex-row'>
					<h2 className='flex-1 text-3xl font-semibold leading-[1] tracking-tight text-balance md:text-4xl lg:text-5xl'>
						Наші <br /> рекламні рішення
					</h2>
					<p className='text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end'>
						Комплексний підхід до створення зовнішньої реклами. Від розробки
						концепції до монтажу готових конструкцій. Забезпечуємо максимальну
						ефективність ваших рекламних кампаній.
					</p>
				</div>
				<div className='mt-8 flex gap-5 md:mt-12 lg:mt-20'>
					<FeatureCard
						title='Фізична реклама'
						description='Білборди, банери, вивіски, лайтбокси'
						icon={<AirplayIcon className='size-10' />}
						href='/physical-advertising'
					/>
					<FeatureCard
						title='Брендинг просторів'
						description='Комплексне оформлення торгових точок'
						icon={<AudioLinesIcon className='size-10' />}
						href='/branding'
					/>
				</div>
			</div>
		</section>
	)
}

function FeatureCard({
	title,
	description,
	icon,
	href,
}: {
	title: string
	description: string
	icon: React.ReactNode
	href: string
}) {
	return (
		<Link
			href={href}
			className='from-muted to-mint relative flex [aspect-ratio:3.5/2.6] flex-col justify-between overflow-hidden rounded-[24px] bg-linear-to-b md:[aspect-ratio:3.8/4] max-h-[300px] w-full'
		>
			<div className='p-8 pb-2'>{icon}</div>
			<div className='p-6'>
				<div className='text-4xl font-semibold tracking-tight leading-[1] mb-1'>
					{title}
				</div>
				<div className='text-muted-foreground text-xl font-semibold tracking-tight'>
					{description}
				</div>
			</div>
		</Link>
	)
}
