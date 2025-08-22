import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/components/ui-kit/accordion'
import { Button } from '@/shared/components/ui-kit/button'
import { Logo } from '@/shared/components/ui-kit/logo'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/shared/components/ui-kit/navigation-menu'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/shared/components/ui-kit/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { MenuItem, useMenu } from '../hooks/use-menu'

export const Navbar = () => {
	const menu = useMenu()

	return (
		<section className='absolute top-0 left-0 right-0 z-50 py-4'>
			<div className='container mx-auto'>
				<nav className='hidden justify-start lg:flex gap-10'>
					<Logo />
					<div className='flex items-center'>
						<NavigationMenu>
							<NavigationMenuList>
								{menu.map((item) => renderMenuItem(item))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</nav>

				{/* Mobile Menu */}
				<div className='block lg:hidden'>
					<div className='flex items-center justify-between'>
						<Logo />
						<Sheet>
							<SheetTrigger asChild>
								<Button variant='outline' size='icon'>
									<Menu className='size-4' />
								</Button>
							</SheetTrigger>
							<SheetContent className='overflow-y-auto'>
								<SheetHeader>
									<SheetTitle>
										<Logo />
									</SheetTitle>
								</SheetHeader>
								<div className='flex flex-col gap-6 p-4'>
									<Accordion
										type='single'
										collapsible
										className='flex w-full flex-col gap-4'
									>
										{menu.map((item) => renderMobileMenuItem(item))}
									</Accordion>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</section>
	)
}

const renderMenuItem = (item: MenuItem) => {
	if (item.items) {
		return (
			<NavigationMenuItem key={item.title}>
				<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
				<NavigationMenuContent className='bg-popover text-popover-foreground'>
					{item.items.map((subItem) => (
						<NavigationMenuLink key={subItem.title} className='w-80'>
							<SubMenuLink item={subItem} />
						</NavigationMenuLink>
					))}
				</NavigationMenuContent>
			</NavigationMenuItem>
		)
	}

	return (
		<NavigationMenuItem key={item.title}>
			<NavigationMenuLink
				href={item.url}
				className='hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors'
			>
				{item.title}
			</NavigationMenuLink>
		</NavigationMenuItem>
	)
}

const renderMobileMenuItem = (item: MenuItem) => {
	if (item.items) {
		return (
			<AccordionItem key={item.title} value={item.title} className='border-b-0'>
				<AccordionTrigger className='text-md py-0 font-semibold hover:no-underline'>
					{item.title}
				</AccordionTrigger>
				<AccordionContent className='mt-2'>
					{item.items.map((subItem) => (
						<SubMenuLink key={subItem.title} item={subItem} />
					))}
				</AccordionContent>
			</AccordionItem>
		)
	}

	return (
		<Link
			key={item.title}
			href={item.url ?? ''}
			className='text-md font-semibold'
		>
			{item.title}
		</Link>
	)
}

const SubMenuLink = ({ item }: { item: MenuItem }) => {
	return (
		<Link
			className='hover:bg-muted hover:text-accent-foreground p-2'
			href={item.url ?? ''}
		>
			<div className='text-sm font-semibold'>{item.title}</div>
		</Link>
	)
}
