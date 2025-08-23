import { Button } from '@/shared/components/ui-kit/button'

type TabDescriptionProps = {
	description: string
}

export function TabDescription({ description }: TabDescriptionProps) {
	return (
		<div className='flex flex-col md:flex-row gap-4 md:items-center justify-between'>
			<p className='text-muted-foreground text-md leading-relaxed text-justify md:w-3/4 px-2 md:p-0'>
				{description}
			</p>
			<div className='flex-shrink-0'>
				<Button size='lg' className='w-full md:w-auto'>
					Зв&apos;язатися з нами
				</Button>
			</div>
		</div>
	)
}
