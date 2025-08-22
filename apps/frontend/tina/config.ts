import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	'main'

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: 'media',
			publicFolder: 'public',
		},
	},
	schema: {
		collections: [
			// Projects Collection - для портфоліо
			{
				name: 'project',
				label: 'Projects',
				path: 'src/app/tina/content/projects',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Project Title',
						isTitle: true,
						required: true,
					},
					{
						type: 'string',
						name: 'description',
						label: 'Project Description',
						ui: {
							component: 'textarea',
						},
					},
					{
						type: 'image',
						name: 'featuredImage',
						label: 'Featured Image',
					},
					{
						type: 'object',
						name: 'gallery',
						label: 'Project Gallery',
						list: true,
						fields: [
							{
								type: 'image',
								name: 'image',
								label: 'Gallery Image',
							},
							{
								type: 'string',
								name: 'caption',
								label: 'Image Caption',
							},
						],
					},
					{
						type: 'string',
						name: 'category',
						label: 'Project Category',
						options: [
							'Web Development',
							'Mobile App',
							'UI/UX Design',
							'Branding',
							'E-commerce',
						],
					},
					{
						type: 'object',
						name: 'technologies',
						label: 'Technologies Used',
						list: true,
						fields: [
							{
								type: 'string',
								name: 'name',
								label: 'Technology Name',
							},
						],
					},
					{
						type: 'string',
						name: 'clientName',
						label: 'Client Name',
					},
					{
						type: 'string',
						name: 'projectUrl',
						label: 'Project URL',
					},
					{
						type: 'datetime',
						name: 'completedDate',
						label: 'Completion Date',
					},
					{
						type: 'rich-text',
						name: 'content',
						label: 'Project Details',
						isBody: true,
					},
				],
				ui: {
					router: ({ document }) => `/projects/${document._sys.filename}`,
				},
			},
			// Team Members Collection
			{
				name: 'team',
				label: 'Team Members',
				path: 'src/app/tina/content/team',
				fields: [
					{
						type: 'string',
						name: 'name',
						label: 'Full Name',
						isTitle: true,
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
						name: 'bio',
						label: 'Biography',
						ui: {
							component: 'textarea',
						},
					},
					{
						type: 'image',
						name: 'photo',
						label: 'Profile Photo',
					},
					{
						type: 'object',
						name: 'social',
						label: 'Social Links',
						fields: [
							{
								type: 'string',
								name: 'linkedin',
								label: 'LinkedIn URL',
							},
							{
								type: 'string',
								name: 'twitter',
								label: 'Twitter URL',
							},
							{
								type: 'string',
								name: 'github',
								label: 'GitHub URL',
							},
							{
								type: 'string',
								name: 'website',
								label: 'Personal Website',
							},
						],
					},
					{
						type: 'object',
						name: 'skills',
						label: 'Skills',
						list: true,
						fields: [
							{
								type: 'string',
								name: 'skill',
								label: 'Skill',
							},
						],
					},
				],
			},
			// Testimonials Collection
			{
				name: 'testimonial',
				label: 'Testimonials',
				path: 'src/app/tina/content/testimonials',
				fields: [
					{
						type: 'string',
						name: 'content',
						label: 'Testimonial Content',
						isTitle: true,
						required: true,
						ui: {
							component: 'textarea',
						},
					},
					{
						type: 'string',
						name: 'clientName',
						label: 'Client Name',
						required: true,
					},
					{
						type: 'string',
						name: 'clientPosition',
						label: 'Client Position',
					},
					{
						type: 'string',
						name: 'company',
						label: 'Company',
					},
					{
						type: 'image',
						name: 'clientPhoto',
						label: 'Client Photo',
					},
					{
						type: 'number',
						name: 'rating',
						label: 'Rating (1-5)',
					},
					{
						type: 'reference',
						name: 'relatedProject',
						label: 'Related Project',
						collections: ['project'],
					},
				],
			},
			// Blog Posts Collection
			{
				name: 'post',
				label: 'Blog Posts',
				path: 'src/app/tina/content/posts',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
					},
					{
						type: 'string',
						name: 'excerpt',
						label: 'Excerpt',
						ui: {
							component: 'textarea',
						},
					},
					{
						type: 'image',
						name: 'featuredImage',
						label: 'Featured Image',
					},
					{
						type: 'datetime',
						name: 'publishDate',
						label: 'Publish Date',
					},
					{
						type: 'reference',
						name: 'author',
						label: 'Author',
						collections: ['team'],
					},
					{
						type: 'object',
						name: 'tags',
						label: 'Tags',
						list: true,
						fields: [
							{
								type: 'string',
								name: 'tag',
								label: 'Tag',
							},
						],
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
					},
				],
				ui: {
					router: ({ document }) => `/blog/${document._sys.filename}`,
				},
			},
		],
	},
})
