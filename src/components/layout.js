import React from 'react'
import { Link } from 'gatsby'

function Layout({ children }) {
	return (
		<div className='max-w-3xl mx-auto px-4'>
			<header className='sticky top-0 z-100 bg-gray-50'>
				<h1 className='p-4 mb-2 text-2xl font-bold text-gray-800 text-center'>
					<Link to='/'>IQAC Cell - ABC</Link>
				</h1>
				<nav className='flex items-center justify-around flex-wrap max-w-lg mx-auto'>
					<Link
						to='/members'
						className='nav-list-items'
						activeClassName='activeLink'
					>
						Members
					</Link>
					<Link
						to='/goals'
						className='nav-list-items'
						activeClassName='activeLink'
					>
						Goals
					</Link>
					<Link
						to='/journals'
						className='nav-list-items'
						activeClassName='activeLink'
					>
						Journal
					</Link>
					<Link
						to='/benefits'
						className='nav-list-items'
						activeClassName='activeLink'
					>
						Benefits
					</Link>
					<Link
						to='/reports'
						className='nav-list-items'
						activeClassName='activeLink'
					>
						Reports
					</Link>
					<Link
						to='/contact'
						className='nav-list-items'
						activeClassName='activeLink'
					>
						Contact
					</Link>
				</nav>
			</header>
			{children}
			<footer className='my-10'>
				<hr className='bg-gray-200' />
			</footer>
		</div>
	)
}

export default Layout
