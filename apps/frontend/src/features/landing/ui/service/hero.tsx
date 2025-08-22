import { Button } from '@/shared/components/ui-kit/button'
import Image from 'next/image'

interface About3Props {
	title?: string
	description?: string
	mainImage?: {
		src: string
		alt: string
	}
	secondaryImage?: {
		src: string
		alt: string
	}
	breakout?: {
		src: string
		alt: string
		title?: string
		description?: string
		buttonText?: string
		buttonUrl?: string
	}
	companiesTitle?: string
	companies?: Array<{
		src: string
		alt: string
	}>
	achievementsTitle?: string
	achievementsDescription?: string
	achievements?: Array<{
		label: string
		value: string
	}>
}

const defaultCompanies = [
	{
		src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg',
		alt: 'Клієнт 1',
	},
	{
		src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg',
		alt: 'Клієнт 2',
	},
	{
		src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg',
		alt: 'Клієнт 3',
	},
	{
		src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg',
		alt: 'Клієнт 4',
	},
	{
		src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg',
		alt: 'Клієнт 5',
	},
	{
		src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg',
		alt: 'Клієнт 6',
	},
]

const defaultAchievements = [
	{ label: 'Реалізованих проектів', value: '850+' },
	{ label: 'Задоволених клієнтів', value: '300+' },
	{ label: 'Років досвіду', value: '12+' },
	{ label: 'Міст присутності', value: '25+' },
]

const Hero = ({
	title = 'Фізична реклама',
	description = 'Створюємо ефективну зовнішню рекламу, що збільшує впізнаваність вашого бренду та залучає нових клієнтів. Від концепції до монтажу — ми забезпечуємо повний цикл виробництва рекламних конструкцій.',
	mainImage = {
		src: '/billboard.png',
		alt: 'Білборд з рекламою',
	},
	secondaryImage = {
		src: '/shop-ad.png',
		alt: 'Рекламна вивіска магазину',
	},
	breakout = {
		src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
		alt: 'Іконка агенства',
		title: 'Готові збільшити продажі вашого бізнесу?',
		description:
			'Понад 850 реалізованих проектів від невеликих вивісок до масштабних білбордних кампаній',
		buttonText: "Зв'язатися з нами",
		buttonUrl: '#contact',
	},
	companiesTitle = 'Нам довіряють провідні бренди',
	companies = defaultCompanies,
	achievementsTitle = 'Наші досягнення в цифрах',
	achievementsDescription = 'Ми пишаємося результатами своєї роботи та довірою клієнтів, яку заслужили професійним підходом та якісним виконанням кожного проекту.',
	achievements = defaultAchievements,
}: About3Props = {}) => {
	return (
		<section className='py-32'>
			<div className='container'>
				<div className='mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left'>
					<h1 className='text-5xl font-semibold'>{title}</h1>
					<p className='text-muted-foreground'>{description}</p>
				</div>
				<div className='grid gap-7 lg:grid-cols-3'>
					<Image
						src={mainImage.src}
						alt={mainImage.alt}
						className='size-full max-h-[620px] rounded-xl object-cover lg:col-span-2'
						width={1000}
						height={1000}
					/>
					<div className='flex flex-col gap-7 md:flex-row lg:flex-col'>
						<div className='flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto'>
							<img
								src={breakout.src}
								alt={breakout.alt}
								className='mr-auto h-12'
							/>
							<div>
								<p className='mb-2 text-lg font-semibold'>{breakout.title}</p>
								<p className='text-muted-foreground'>{breakout.description}</p>
							</div>
							<Button variant='outline' className='mr-auto' asChild>
								<a href={breakout.buttonUrl}>{breakout.buttonText}</a>
							</Button>
						</div>
						<img
							src={secondaryImage.src}
							alt={secondaryImage.alt}
							className='grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto'
						/>
					</div>
				</div>
				<div className='py-32'>
					<p className='text-center'>{companiesTitle}</p>
					<div className='mt-8 flex flex-wrap justify-center gap-8'>
						{companies.map((company, idx) => (
							<div className='flex items-center gap-3' key={company.src + idx}>
								<img
									src={company.src}
									alt={company.alt}
									className='h-6 w-auto md:h-8'
								/>
							</div>
						))}
					</div>
				</div>
				<div className='relative overflow-hidden rounded-xl bg-muted p-10 md:p-16'>
					<div className='flex flex-col gap-4 text-center md:text-left'>
						<h2 className='text-4xl font-semibold'>{achievementsTitle}</h2>
						<p className='max-w-xl text-muted-foreground'>
							{achievementsDescription}
						</p>
					</div>
					<div className='mt-10 flex flex-wrap justify-between gap-10 text-center'>
						{achievements.map((item, idx) => (
							<div className='flex flex-col gap-4' key={item.label + idx}>
								<p>{item.label}</p>
								<span className='text-4xl font-semibold md:text-5xl'>
									{item.value}
								</span>
							</div>
						))}
					</div>
					<div className='pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block'></div>
				</div>
			</div>
		</section>
	)
}

export { Hero as About }
