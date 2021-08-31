import React from 'react'
import Layout from '../components/layout'

const BenefitsPage = () => {
	const data = {
		benefits: [
			{
				id: 1,
				item: 'Ensure heightened level of clarity and focus in institutional functioning towards quality enhancement.',
			},
			{
				id: 2,
				item: 'Ensure internalization of the quality culture',
			},
			{
				id: 3,
				item: 'Ensure enhancement and integration among the various activities of the institution and institutionalize good practices',
			},
			{
				id: 4,
				item: 'Provide a sound basis for decision-making to improve institutional functioning',
			},
			{
				id: 5,
				item: 'Act as a dynamic system for quality changes in JNU',
			},
		],
	}
	return (
		<Layout>
			<h1 className='heading'>IQAC Benefits</h1>
			<ul className='mx-4'>
				{data.benefits.map(item => (
					<li className='my-2 list-decimal' key={item.id}>
						{item.item}
					</li>
				))}
			</ul>
		</Layout>
	)
}

export default BenefitsPage
