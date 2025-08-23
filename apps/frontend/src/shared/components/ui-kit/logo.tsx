import { BRAND } from '@/shared/constants/brand'
import { ROUTES } from '@/shared/constants/routes'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
	return (
		<Link href={ROUTES.HOME} className='flex items-center gap-2'>
			<Image className='dark:invert' {...BRAND.LOGO} alt={BRAND.NAME} />
			<span className='text-lg font-semibold tracking-tighter'>
				{BRAND.NAME}
			</span>
		</Link>
	)
}
