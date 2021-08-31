import React from 'react'
import Layout from '../components/layout'

const ReportsPage = () => {
	const data = {
		reports: [
			{
				id: 1,
				item: 'Annual Quality Assurance Report (AQAR) (July 2018 to June 2019)',
			},
			{
				id: 2,
				item: 'Annual Quality Assurance Report (AQAR) (July 2018 to June 2019)',
			},
			{
				id: 3,
				item: 'Annual Quality Assurance Report (AQAR) (July 2018 to June 2019)',
			},
			{
				id: 4,
				item: 'Annual Quality Assurance Report (AQAR) (July 2018 to June 2019)',
			},
			{
				id: 5,
				item: 'Annual Quality Assurance Report (AQAR) (July 2018 to June 2019)',
			},
			{
				id: 6,
				item: 'Annual Quality Assurance Report (AQAR) (July 2018 to June 2019)',
			},
		],
	}
	return (
		<Layout>
			<h1 className='heading'>IQAC Reports</h1>
			<ul>
				{data.reports.map(item => (
					<li className='my-2 hover:text-gray-500 cursor-pointer' key={item.id}>
						{item.item}
					</li>
				))}
			</ul>
		</Layout>
	)
}

export default ReportsPage
