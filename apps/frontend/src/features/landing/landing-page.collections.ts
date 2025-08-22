import type { Collection } from 'tinacms'
import { landingPageTemplate } from './components.configs'

export const landingPageCollection: Collection = {
	name: 'landingPage',
	label: 'Landing Pages',
	path: 'src/app/tina/content/landing-pages',
	fields: [
		{
			type: 'string',
			name: 'title',
			label: 'Page Title',
			isTitle: true,
			required: true,
		},
		{
			type: 'string',
			name: 'slug',
			label: 'URL Slug',
			required: true,
		},
		{
			type: 'string',
			name: 'description',
			label: 'Meta Description',
			ui: {
				component: 'textarea',
			},
		},
		{
			type: 'image',
			name: 'ogImage',
			label: 'Open Graph Image',
		},
		// Використовуємо шаблони для секцій лендінгу
		{
			type: 'object',
			name: 'sections',
			label: 'Page Sections',
			list: true,
			templates: landingPageTemplate.templates,
		},
	],
	ui: {
		router: ({ document }) => `/landing/${document._sys.filename}`,
	},
}
