import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/components/ui-kit/table'
import { TabDescription } from './tab-description'

export function LightboxTab() {
	return (
		<div className='space-y-8'>
			<TabDescription
				description='Світлова реклама преміум-класу для максимального привернення уваги у
						темний час доби. Лайтбокси забезпечують рівномірне підсвічування
						рекламного зображення та створюють ефект люксу і професіоналізму.
						Ідеально підходять для торгових центрів, ресторанів, готелів та
						престижних брендів.'
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
						<TableCell>A1, A0, 100×70см, 150×100см, індивідуальні</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Товщина корпусу</TableCell>
						<TableCell>80-120мм (залежно від розміру)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Матеріал корпусу</TableCell>
						<TableCell>Алюмінієвий профіль, пластик ABS</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Тип підсвічування</TableCell>
						<TableCell>LED-стрічка 2835, 5050 або LED-панелі</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Колірна температура</TableCell>
						<TableCell>4000-6500K (денне світло)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Яскравість</TableCell>
						<TableCell>2000-4000 люмен/м²</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>
							Рівномірність освітлення
						</TableCell>
						<TableCell>&gt;85% по всій поверхні</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Матеріал друку</TableCell>
						<TableCell>Транслюцентна плівка, backlit банер</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Споживання енергії</TableCell>
						<TableCell>15-45 Вт/м² (залежно від яскравості)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Захист від вологи</TableCell>
						<TableCell>IP54 (для зовнішніх), IP20 (для внутрішніх)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Термін служби LED</TableCell>
						<TableCell>50 000+ годин роботи</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Термін виготовлення</TableCell>
						<TableCell>5-12 робочих днів</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Гарантія</TableCell>
						<TableCell>3 роки на LED, 2 роки на корпус</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}
