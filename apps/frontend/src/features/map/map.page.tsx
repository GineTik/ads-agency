'use client'

import { CONFIG } from '@/shared/constants/config'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef } from 'react'

export function MapPage() {
	const mapContainerRef = useRef<HTMLDivElement>(null)
	const mapRef = useRef<mapboxgl.Map>(null)

	useEffect(() => {
		mapboxgl.accessToken = CONFIG.MAPBOX_ACCESS_TOKEN

		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current ?? '',
			center: [26.9749, 49.4209], // starting position [lng, lat]
			zoom: 9, // starting zoom
			style: 'mapbox://styles/destroer06/cmen8g951015901pja0nr7ymq',
			maxBounds: [
				[22.13, 44.38],
				[40.22, 52.38],
			], // Приблизні координати меж України
		})
	})

	return (
		<div className='px-2 pt-24 h-full flex flex-col'>
			<div className='flex-1 flex gap-2 p-2'>
				<div className='w-[350px] h-full space-y-2'>
					<div>
						<h2>Інтерактивна карта</h2>
						<p className='mt-2 text-muted-foreground'>
							На цій карті ви можете вибрати борд або радіостанцію, подивитись
							статистику та замовити їх
						</p>
					</div>
					<div className='w-full h-[100px] bg-muted rounded-lg'></div>
					<div className='w-full h-[100px] bg-muted rounded-lg'></div>
					<div className='w-full h-[100px] bg-muted rounded-lg'></div>
					<div className='w-full h-[100px] bg-muted rounded-lg'></div>
					<div className='w-full h-[100px] bg-muted rounded-lg'></div>
					<div className='w-full h-[100px] bg-muted rounded-lg'></div>
				</div>

				<div className='flex-1'>
					<div
						ref={mapContainerRef}
						className='map-container w-full h-full rounded-lg'
					/>
				</div>
			</div>
		</div>
	)
}
