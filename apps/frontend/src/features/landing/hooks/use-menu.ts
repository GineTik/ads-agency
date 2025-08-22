import { ROUTES } from '@/shared/constants/routes'

export const useMenu = () => {
	const menu = [{ title: 'Пропозиції', url: ROUTES.SERVICE('offers') }]
	return menu
}
