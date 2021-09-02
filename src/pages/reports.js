import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

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
			<Helmet>
				<meta charSet='utf-8' />
				<title>IQAC Reports</title>
				<link rel='canonical' href='' />
			</Helmet>
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
