import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/components/ui-kit/table'
import { TabDescription } from './tab-description'

export function SignageTab() {
	return (
		<div className='space-y-8'>
			<TabDescription
				description="Ефективне рішення для ідентифікації вашого бізнесу та залучення
						клієнтів. Наші вивіски підходять для магазинів, ресторанів, офісів
						та інших комерційних об'єктів. Виготовляємо з різноманітних
						матеріалів від пластику до металу, з можливістю внутрішнього або
						зовнішнього підсвічування."
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
						<TableCell className='font-medium'>Типові розміри</TableCell>
						<TableCell>50×50см - 3×2м (індивідуальні розміри)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Матеріали основи</TableCell>
						<TableCell>Акрил, композит, нержавіюча сталь, алюміній</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Товщина матеріалу</TableCell>
						<TableCell>3-10мм (залежно від матеріалу)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Тип виготовлення</TableCell>
						<TableCell>Лазерна різка, фрезерування, гравірування</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Друк</TableCell>
						<TableCell>UV-друк, плотерна різка, аплікація</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Підсвічування</TableCell>
						<TableCell>LED-стрічка, неон, точкові світильники</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Кріплення</TableCell>
						<TableCell>Настінне, підвісне, на стійках</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Захист від вологи</TableCell>
						<TableCell>IP65 (для зовнішніх вивісок)</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Термін служби</TableCell>
						<TableCell>
							10-15 років (внутрішні), 7-10 років (зовнішні)
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Термін виготовлення</TableCell>
						<TableCell>3-7 робочих днів</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>Гарантія</TableCell>
						<TableCell>2 роки на матеріал, 1 рік на підсвічування</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}
