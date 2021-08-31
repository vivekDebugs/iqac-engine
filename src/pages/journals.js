import React from 'react'
import Layout from '../components/layout'

const JournalsPage = () => {
	const data = {
		states: [
			'Chandigarh',
			'Hariyana',
			'Himachal Pradesh',
			'Jammu & Kashmir',
			'Punjab',
			'Rajasthan',
			'Uttar Pradesh',
		],
	}
	return (
		<Layout>
			<h1 className='heading'>UGC Journals</h1>
			<h2 className='subHeading'>Application processed for following states</h2>
			<ul>
				{data.states.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<h2 className='subHeading'>Disclaimer</h2>
			<p>
				This is the official website of University Grants Commission’s (UGC)
				Consortium for Academic and Research Ethics (CARE): Reference List of
				Quality Journals. This website is designed and developed by UGC Cell for
				Journal Analysis of the SavitribaiPhule Pune University solely for The
				University Grants Commission having its Office at Bahadur Shah Zafar
				Marg, New Delhi-110002. This site displays all the information about the
				CARE: Reference List of Quality Journals. The journals included in the
				CARE List will be continuously reviewed by the UGC Cell for Journal
				Analysis established in the SavitribaiPhule Pune University, Pune,
				Maharashtra. The inclusion of the journal in the List depends on the
				analysis of related information defined by criteria developed by CARE.
				All the information about the University Grants Commission and its
				policies, programmes, rules, regulations on the web site is on "as is"
				basis without guarantees or warranties of any kind, express or implied.
				The information available on this website may subject to change without
				prior notice. Visitors to the site are advised to contact the office of
				the University Grants Commission for up to date information on any
				matter concerned with policies, programmes, rules, regulations of the
				University Grants Commission. While every effort is being made to update
				the information periodically, the CARE does not undertake any
				responsibility that the site reflects the updated information on any
				matter at any point of time. All the contents of this Site are only for
				general information or use by the public with the intention of creating
				awareness and improving quality of scholarly publications. They do not
				constitute advice and should not be relied upon in making (or refraining
				from making) any decision. The University Grants Commission hereby
				excludes any warranty, express or implied, as to the quality, accuracy,
				timeliness, completeness, performance, fitness for any particular
				purpose of the Site or any of its contents, including (but not limited
				to) any financial tools contained within the Site. The University Grants
				Commission hereby disclaims any and all liability to any individual /
				organization/ person for any loss or damage caused to them due to any
				use of or for any action taken on the basis of the general information
				available on the website which may be due to omission, clerical errors
				or for any other reason whatsoever. While all efforts have been taken to
				make this website as authentic as possible, please refer to the print
				versions, notified Gazette copies of Acts/Rules/Regulations for
				authentic version or for use before the University Grants Commission or
				any other authority. The University Grants Commission will not be
				responsible for any loss or damage to any person/ entity caused by any
				shortcoming, defect or inaccuracy inadvertently or otherwise crept in
				this website. The University Grants Commission will not be liable for
				any damages (including, without limitation, damages for loss of business
				projects, or loss of profits) arising in contract, tort or otherwise
				from the use of or inability to use the Site, or any of its contents, or
				from any action taken (or refrained from being taken) as a result of
				using the Site or any such contents. The University Grants Commission
				takes care to adhere the professional security standards but makes no
				warranty that the contents of the Site are free from infection by
				viruses or anything else which has contaminating or destructive
				properties. Users are not permitted to change, modify or prepare
				derivative works from the content of this site. All information provided
				in official site ofhttp://ugccare.unipune.ac.in hosted by
				SavitribaiPhule Pune University is provided for information purposes
				only and does not constitute a legal contract between the
				SavitribaiPhule Pune University and any person or entity unless
				otherwise specified. Information on official Institute websites is
				subject to change without prior notice. Although all efforts have been
				made to make the information on the website as accurate as possible, by
				PUN web division, SavitribaiPhule Pune University, CARE and its
				operational offices/officers, CPE-Pune makes no guarantees of any kind.
				In no circumstances, to the fullest extent permitted by law, shall the
				SavitribaiPhule Pune University nor or any of its officers/employees,
				CARE and its operational offices/officers, CPE-Pune be liable for any
				loss, additional costs or damage arising as a result of any use of this
				website or the information, content, or services. Relevant Officials of
				administrative sections and academic departments in SavitribaiPhule Pune
				University may be consulted for accurate information. Any discrepancy
				may be brought to the notice of the University Grants Commission at
				webmaster@ugc.ac.in
			</p>
		</Layout>
	)
}

export default JournalsPage
