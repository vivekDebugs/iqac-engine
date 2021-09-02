import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

const MembersPage = () => {
	const data = {
		members: [
			{
				id: 1,
				name: 'John Doe',
				position: 'Chairman',
			},
			{
				id: 2,
				name: 'John Doe',
				position: 'Member',
			},
			{
				id: 3,
				name: 'John Doe',
				position: 'Chairman',
			},
			{
				id: 4,
				name: 'John Doe',
				position: 'Member Secretary',
			},
			{
				id: 5,
				name: 'John Doe',
				position: 'Member',
			},
			{
				id: 6,
				name: 'John Doe',
				position: 'Member',
			},
			{
				id: 8,
				name: 'John Doe',
				position: 'Member',
			},
		],
	}
	return (
		<Layout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>IQAC Members</title>
				<link rel='canonical' href='' />
			</Helmet>
			<h1 className='heading'>IQAC Members</h1>
			<strong>
				IQAC members for a period of two years with effect from 26/11/2020
			</strong>
			<table className='my-4'>
				<thead>
					<tr>
						<th className='th-table'>Sl No</th>
						<th className='th-table'>Name</th>
						<th className='th-table'>Position</th>
					</tr>
				</thead>
				<tbody>
					{data.members.map(item => (
						<tr key={item.id}>
							<td className='td-table'>{item.id}</td>
							<td className='td-table'>{item.name}</td>
							<td className='td-table'>{item.position}</td>
						</tr>
					))}
				</tbody>
			</table>
			<strong>Core members</strong>
			<ul className='my-2'>
				<li>John Doe</li>
				<li>John Doe</li>
				<li>John Doe</li>
			</ul>
		</Layout>
	)
}

export default MembersPage
