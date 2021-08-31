import React from 'react'
import Layout from '../components/layout'

const GoalsPage = () => {
	const data = {
		rules: [
			{
				id: 1,
				rule: 'Development and application of quality benchmarks/parameters for the various academic and administrative activities of the University',
			},
			{
				id: 2,
				rule: 'Facilitating the creation of a learner-centric environment conducive for quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process',
			},
			{
				id: 3,
				rule: 'Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes',
			},
			{
				id: 4,
				rule: 'Dissemination of information on the various quality parameters of higher education',
			},
			{
				id: 5,
				rule: 'Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles',
			},
			{
				id: 6,
				rule: 'Documentation of the various programmes/activities of the University, leading to quality improvement',
			},
			{
				id: 7,
				rule: 'Acting as a nodal agency of the University for coordinating quality-related activities, including adoption and dissemination of best practices',
			},
			{
				id: 8,
				rule: 'Development and maintenance of institutional database through MIS for the purpose of maintaining /enhancing the institutional quality',
			},
			{
				id: 9,
				rule: 'Development of Quality Culture in the University',
			},
			{
				id: 10,
				rule: 'Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC',
			},
			{
				id: 11,
				rule: 'In terms of UGC Regulation 2018, IQAC shall act as the Documentation and Record-Keeping Cell, including assistance in the development of the Academic / Research Score (ARS) proforma using the indicative template separately developed by the UGC.  In order to facilitate the process, all teachers shall submit the duly filled proforma to the IQAC annually.',
			},
		],
	}

	return (
		<Layout>
			<h1 className='heading'>IQAC Goals</h1>
			<p>
				To develop a quality system for conscious, consistent and catalytic
				programmed action to improve the academic and administrative performance
				of the Jawaharlal Nehru University(JNU); To promote measures for
				institutional functioning towards quality enhancement through
				internalization of quality culture and institutionalization of best
				practices.
			</p>
			<h2 className='subHeading'>
				The IQAC shall have the following functions
			</h2>
			<ul className='mx-4'>
				{data.rules.map(item => (
					<li className='my-2 list-decimal' key={item.id}>
						{item.rule}
					</li>
				))}
			</ul>
		</Layout>
	)
}

export default GoalsPage
