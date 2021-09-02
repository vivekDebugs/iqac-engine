import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'

const ContactPage = () => {
	return (
		<Layout>
			<Helmet>
				<meta charSet='utf-8' />
				<title>IQAC Contact</title>
				<link rel='canonical' href='' />
			</Helmet>
			<h1 className='heading'>IQAC Contact</h1>
			<strong>Director</strong>
			<br />
			Prof. John Doe
			<br />
			Internal Quality Assurance Cell
			<br />
			Room 25, XYZ Floor, Administrative Building
			<br />
			Waterloo University
			<br />
			Phone 12-3456-7893
			<br />
			<br />
			<strong>Personnel</strong>
			<br />
			John Doe
		</Layout>
	)
}

export default ContactPage
