import { ROUTES } from '@/shared/constants/routes'

export type MenuItem = {
	title: string
	url?: string
	items?: MenuItem[]
}

export const useMenu = () => {
	const menu: MenuItem[] = [
		{
			title: 'Пропозиції',
			items: [
				{ title: 'Білборди', url: ROUTES.SERVICE('billboards') },
				{ title: 'Вивіски', url: ROUTES.SERVICE('signage') },
				{ title: 'Банери', url: ROUTES.SERVICE('banners') },
				{ title: 'Лайтбокси', url: ROUTES.SERVICE('lightboxes') },
			],
		},
		{
			title: 'Інтерактивна карта',
			url: ROUTES.MAP,
		},
	]
	return menu
}
