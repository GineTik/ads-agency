import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/components/ui-kit/table'
import { TabDescription } from './tab-description'

export function BillboardTab() {
	return (
		<div className='space-y-8'>
			<TabDescription
				description="Великоформатна зовнішня реклама для максимальної видимості вашого
						бренду. Ідеально підходить для розміщення вздовж автомобільних
						доріг, на в'їздах до міста та в місцях з високим трафіком. Наші
						білборди виготовляються з використанням стійких до погодних умов
						матеріалів та забезпечують тривалий термін експлуатації до 5 років."
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
						<TableCell>3×6м, 5×12м, 6×3м</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Матеріал основи</TableCell>
						<TableCell>Оцинкована сталь, алюміній</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Матеріал друку</TableCell>
						<TableCell>Банерна тканина 510 г/м², vinyl</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Тип друку</TableCell>
						<TableCell>Широкоформатний UV-друк</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Роздільна здатність</TableCell>
						<TableCell>1440×1440 dpi</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Стійкість до UV</TableCell>
						<TableCell>До 5 років без вигорання</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Швидкість вітру</TableCell>
						<TableCell>До 120 км/год</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Температурний режим</TableCell>
						<TableCell>-40°C до +60°C</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Підсвічування</TableCell>
						<TableCell>LED-підсвічування (опціонально)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Термін виготовлення</TableCell>
						<TableCell>5-10 робочих днів</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Гарантія</TableCell>
						<TableCell>3 роки на конструкцію, 2 роки на друк</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}
