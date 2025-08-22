import type { TinaField } from 'tinacms'

// Hero Section
export const heroComponent: TinaField = {
	type: 'object',
	name: 'hero',
	label: 'Hero Section',
	fields: [
		{
			type: 'string',
			name: 'title',
			label: 'Main Title',
			required: true,
		},
		{
			type: 'string',
			name: 'subtitle',
			label: 'Subtitle',
			ui: {
				component: 'textarea',
			},
		},
		{
			type: 'object',
			name: 'advantages',
			label: 'Advantages',
			fields: [
				{
					type: 'string',
					name: 'title',
					label: 'Advantages Title',
				},
				{
					type: 'string',
					name: 'description',
					label: 'Advantages Description',
					ui: {
						component: 'textarea',
					},
				},
			],
		},
		{
			type: 'object',
			name: 'buttons',
			label: 'Action Buttons',
			list: true,
			fields: [
				{
					type: 'string',
					name: 'text',
					label: 'Button Text',
					required: true,
				},
				{
					type: 'string',
					name: 'url',
					label: 'Button URL',
				},
				{
					type: 'string',
					name: 'variant',
					label: 'Button Style',
					options: ['primary', 'secondary', 'outline'],
				},
			],
		},
		{
			type: 'object',
			name: 'carousel',
			label: 'Image Carousel',
			fields: [
				{
					type: 'object',
					name: 'images',
					label: 'Carousel Images',
					list: true,
					fields: [
						{
							type: 'image',
							name: 'image',
							label: 'Image',
							required: true,
						},
						{
							type: 'string',
							name: 'alt',
							label: 'Alt Text',
						},
						{
							type: 'string',
							name: 'caption',
							label: 'Caption',
						},
					],
				},
			],
		},
	],
}

// Companies Section
export const companiesComponent: TinaField = {
	type: 'object',
	name: 'companies',
	label: 'Companies Section',
	fields: [
		{
			type: 'string',
			name: 'title',
			label: 'Section Title',
			required: true,
		},
		{
			type: 'string',
			name: 'subtitle',
			label: 'Section Subtitle',
			ui: {
				component: 'textarea',
			},
		},
		{
			type: 'object',
			name: 'companyLogos',
			label: 'Company Logos',
			list: true,
			fields: [
				{
					type: 'image',
					name: 'logo',
					label: 'Company Logo',
					required: true,
				},
				{
					type: 'string',
					name: 'companyName',
					label: 'Company Name',
					required: true,
				},
				{
					type: 'string',
					name: 'websiteUrl',
					label: 'Website URL',
				},
			],
		},
	],
}

// Features Section
export const featuresComponent: TinaField = {
	type: 'object',
	name: 'features',
	label: 'Features Section',
	fields: [
		{
			type: 'string',
			name: 'title',
			label: 'Section Title',
			required: true,
		},
		{
			type: 'string',
			name: 'description',
			label: 'Section Description',
			ui: {
				component: 'textarea',
			},
		},
		{
			type: 'object',
			name: 'featureBlocks',
			label: 'Feature Blocks',
			list: true,
			fields: [
				{
					type: 'string',
					name: 'title',
					label: 'Feature Title',
					required: true,
				},
				{
					type: 'string',
					name: 'description',
					label: 'Feature Description',
					ui: {
						component: 'textarea',
					},
				},
				{
					type: 'image',
					name: 'icon',
					label: 'Feature Icon',
				},
				{
					type: 'string',
					name: 'iconName',
					label: 'Lucide Icon Name',
					description: 'Alternatively, specify a Lucide React icon name',
				},
			],
		},
	],
}

// Advantages Section
export const advantagesComponent: TinaField = {
	type: 'object',
	name: 'advantages',
	label: 'Advantages Section',
	fields: [
		{
			type: 'string',
			name: 'title',
			label: 'Section Title',
			required: true,
		},
		{
			type: 'object',
			name: 'advantageBlocks',
			label: 'Advantage Blocks',
			list: true,
			fields: [
				{
					type: 'string',
					name: 'title',
					label: 'Advantage Title',
					required: true,
				},
				{
					type: 'string',
					name: 'subtitle',
					label: 'Advantage Subtitle',
					ui: {
						component: 'textarea',
					},
				},
				{
					type: 'image',
					name: 'image',
					label: 'Advantage Image',
				},
			],
		},
	],
}

// Trusted By Section
export const trustedByComponent: TinaField = {
	type: 'object',
	name: 'trustedBy',
	label: 'Trusted By Section',
	fields: [
		{
			type: 'string',
			name: 'title',
			label: 'Section Title',
			required: true,
		},
		{
			type: 'string',
			name: 'description',
			label: 'Section Description',
			ui: {
				component: 'textarea',
			},
		},
		{
			type: 'object',
			name: 'button',
			label: 'Action Button',
			fields: [
				{
					type: 'string',
					name: 'text',
					label: 'Button Text',
				},
				{
					type: 'string',
					name: 'url',
					label: 'Button URL',
				},
				{
					type: 'string',
					name: 'variant',
					label: 'Button Style',
					options: ['primary', 'secondary', 'outline'],
				},
			],
		},
		{
			type: 'object',
			name: 'testimonialBlocks',
			label: 'Testimonial Blocks',
			list: true,
			fields: [
				{
					type: 'image',
					name: 'image',
					label: 'Person Image',
				},
				{
					type: 'string',
					name: 'quote',
					label: 'Testimonial Quote',
					required: true,
					ui: {
						component: 'textarea',
					},
				},
				{
					type: 'string',
					name: 'fullName',
					label: 'Full Name',
					required: true,
				},
				{
					type: 'string',
					name: 'position',
					label: 'Position',
					required: true,
				},
				{
					type: 'string',
					name: 'company',
					label: 'Company',
				},
			],
		},
	],
}

// Call to Action Section
export const callToActionComponent: TinaField = {
	type: 'object',
	name: 'callToAction',
	label: 'Call to Action Section',
	fields: [
		{
			type: 'string',
			name: 'title',
			label: 'CTA Title',
			required: true,
		},
		{
			type: 'string',
			name: 'description',
			label: 'CTA Description',
			ui: {
				component: 'textarea',
			},
		},
		{
			type: 'object',
			name: 'buttons',
			label: 'Action Buttons',
			list: true,
			fields: [
				{
					type: 'string',
					name: 'text',
					label: 'Button Text',
					required: true,
				},
				{
					type: 'string',
					name: 'url',
					label: 'Button URL',
				},
				{
					type: 'string',
					name: 'variant',
					label: 'Button Style',
					options: ['primary', 'secondary', 'outline'],
				},
			],
		},
		{
			type: 'image',
			name: 'backgroundImage',
			label: 'Background Image',
		},
	],
}

// FAQ Section
export const faqComponent: TinaField = {
	type: 'object',
	name: 'faq',
	label: 'FAQ Section',
	fields: [
		{
			type: 'string',
			name: 'title',
			label: 'Section Title',
			required: true,
		},
		{
			type: 'string',
			name: 'description',
			label: 'Section Description',
			ui: {
				component: 'textarea',
			},
		},
		{
			type: 'object',
			name: 'questions',
			label: 'FAQ Questions',
			list: true,
			fields: [
				{
					type: 'string',
					name: 'question',
					label: 'Question',
					required: true,
				},
				{
					type: 'rich-text',
					name: 'answer',
					label: 'Answer',
					required: true,
				},
			],
		},
	],
}

// Consolidated export for all landing page components
export const landingPageComponents = [
	heroComponent,
	companiesComponent,
	featuresComponent,
	advantagesComponent,
	trustedByComponent,
	callToActionComponent,
	faqComponent,
]

// Alternative template-based approach
export const landingPageTemplate = {
	type: 'object',
	name: 'landingPage',
	label: 'Landing Page',
	list: true,
	templates: [
		{
			name: 'hero',
			label: 'Hero Section',
			fields: heroComponent.fields,
		},
		{
			name: 'companies',
			label: 'Companies Section',
			fields: companiesComponent.fields,
		},
		{
			name: 'features',
			label: 'Features Section',
			fields: featuresComponent.fields,
		},
		{
			name: 'advantages',
			label: 'Advantages Section',
			fields: advantagesComponent.fields,
		},
		{
			name: 'trustedBy',
			label: 'Trusted By Section',
			fields: trustedByComponent.fields,
		},
		{
			name: 'callToAction',
			label: 'Call to Action Section',
			fields: callToActionComponent.fields,
		},
		{
			name: 'faq',
			label: 'FAQ Section',
			fields: faqComponent.fields,
		},
	],
}
