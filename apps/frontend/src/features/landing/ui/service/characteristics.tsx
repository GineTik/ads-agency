import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui-kit/tabs'
import {
	BannerTab,
	BillboardTab,
	LightboxTab,
	SignageTab,
} from './characteristics-tabs'

export function Characteristics() {
	return (
		<section className='py-16 md:py-24 lg:py-32 bg-muted'>
			<div className='container'>
				<div className='mb-12 text-center'>
					<h2 className='text-xl font-bold tracking-tight md:text-4xl lg:text-5xl'>
						Технічні характеристики
					</h2>
				</div>

				<Tabs defaultValue='billboard' className='w-full'>
					<TabsList className='grid w-full grid-cols-4 bg-black/5'>
						<TabsTrigger value='billboard'>Білборди</TabsTrigger>
						<TabsTrigger value='signage'>Вивіски</TabsTrigger>
						<TabsTrigger value='banner'>Банери</TabsTrigger>
						<TabsTrigger value='lightbox'>Лайтбокси</TabsTrigger>
					</TabsList>

					<TabsContent value='billboard' className='mt-8'>
						<BillboardTab />
					</TabsContent>

					<TabsContent value='signage' className='mt-8'>
						<SignageTab />
					</TabsContent>

					<TabsContent value='banner' className='mt-8'>
						<BannerTab />
					</TabsContent>

					<TabsContent value='lightbox' className='mt-8'>
						<LightboxTab />
					</TabsContent>
				</Tabs>
			</div>
		</section>
	)
}
