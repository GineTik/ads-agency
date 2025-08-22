import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/components/ui-kit/table'
import { TabDescription } from './tab-description'

export function BannerTab() {
	return (
		<div className='space-y-8'>
			<TabDescription
				description='Універсальне рекламне рішення для промоційних акцій, оголошень та
						брендингу. Банери ідеально підходять для швидкого розміщення реклами
						на фасадах будівель, конструкціях та тимчасових локаціях. Легкі у
						транспортуванні та монтажі, стійкі до погодних умов та мають
						відмінне співвідношення ціна-якість.'
			/>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='w-1/3'>Характеристика</TableHead>
						<TableHead>Значення</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className='font-medium'>Стандартні розміри</TableCell>
						<TableCell>1×2м, 2×3м, 3×6м, 4×8м та індивідуальні</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Матеріал</TableCell>
						<TableCell>Банерна тканина PVC 440-680 г/м²</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Структура матеріалу</TableCell>
						<TableCell>Армований поліестер з ПВХ покриттям</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Тип друку</TableCell>
						<TableCell>Сольвентний, екосольвентний, латексний</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Роздільна здатність</TableCell>
						<TableCell>720×720 dpi - 1440×1440 dpi</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Стійкість кольорів</TableCell>
						<TableCell>3-5 років (залежно від умов експлуатації)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Люверси</TableCell>
						<TableCell>12мм, крок 50см по периметру</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Обробка країв</TableCell>
						<TableCell>Проварка або прошивка капроновою ниткою</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Температурний режим</TableCell>
						<TableCell>-30°C до +70°C</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Вогнестійкість</TableCell>
						<TableCell>Самозгасаючий матеріал (за запитом)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Термін виготовлення</TableCell>
						<TableCell>1-3 робочих дні</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Гарантія</TableCell>
						<TableCell>1 рік на друк, 6 місяців на фурнітуру</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}
