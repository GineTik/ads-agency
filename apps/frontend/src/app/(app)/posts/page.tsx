import Link from 'next/link'
import client from '../../../../tina/__generated__/client'

export default async function Page() {
	const { data } = await client.queries.postConnection()

	return (
		<>
			<h1>Posts</h1>
			<div>
				{data.postConnection.edges?.map((post) => (
					<div key={post?.node?._sys.filename} className='m-2'>
						<Link
							href={`/posts/${post?.node?._sys.filename}`}
							className='bg-neutral-800 rounded m-2 p-2'
						>
							{post?.node?.title}
						</Link>
					</div>
				))}
			</div>
		</>
	)
}
