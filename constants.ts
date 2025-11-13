
import { ContentData } from './types';

export const contentData: ContentData = {
    pages: {
        'status': {
            title: 'Know Your Application Status',
            html: `
                <form class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="acad-year" class="block text-sm font-medium text-gray-700">Academic Year</label>
                            <select id="acad-year" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                                <option value="2025-26">2025-26</option>
                                <option value="2024-25">2024-25</option>
                            </select>
                        </div>
                        <div>
                            <label for="app-id" class="block text-sm font-medium text-gray-700">Application ID</label>
                            <input type="text" id="app-id" placeholder="Enter Application ID" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                        </div>
                        <div>
                            <label for="ssc-type" class="block text-sm font-medium text-gray-700">SSC Pass Type</label>
                            <select id="ssc-type" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                                <option>SSC (Regular)</option><option>CBSE</option><option>ICSE</option>
                            </select>
                        </div>
                        <div>
                            <label for="ssc-year" class="block text-sm font-medium text-gray-700">SSC Year of Pass</label>
                            <input type="number" id="ssc-year" placeholder="e.g., 2020" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                        </div>
                        <div>
                            <label for="ssc-hallticket" class="block text-sm font-medium text-gray-700">SSC Hall Ticket No.</label>
                            <input type="text" id="ssc-hallticket" placeholder="Enter Hall Ticket Number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                        </div>
                        <div>
                            <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input type="date" id="dob" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-brand-accent text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-accent-hover transition-colors">Get Status</button>
                </form>
            `
        },
        'grievance': {
            title: 'Grievance Redressal',
            html: `
                <p class="mb-6 text-gray-600">If you are facing any issues with your application, please submit your grievance here. You can also track your existing grievance.</p>
                <form class="space-y-4">
                    <div>
                        <label for="g-type" class="block text-sm font-medium text-gray-700">Grievance Type</label>
                        <select id="g-type" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                            <option>Application Not Received</option><option>Bank Account Issue / NPCI Mapping</option><option>Incorrect Details Locked</option><option>College Not Listed</option><option>Payment Not Received</option><option>Other</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="g-app-id" class="block text-sm font-medium text-gray-700">Application ID</label>
                            <input type="text" id="g-app-id" placeholder="Enter Application ID" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                        </div>
                        <div>
                            <label for="g-name" class="block text-sm font-medium text-gray-700">Your Name</label>
                            <input type="text" id="g-name" placeholder="Enter your full name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                        </div>
                    </div>
                    <div>
                        <label for="g-desc" class="block text-sm font-medium text-gray-700">Describe your issue</label>
                        <textarea id="g-desc" rows="5" placeholder="Please provide full details, including any error messages." class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-brand-accent text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-accent-hover transition-colors">Submit Grievance</button>
                </form>
            `
        },
        'print-app': {
            title: 'Print Application / Acknowledgement',
            html: `
                <p class="mb-6 text-gray-600">You can print your submitted application or acknowledgement receipt by entering your details below.</p>
                <form class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="acad-year" class="block text-sm font-medium text-gray-700">Academic Year</label>
                            <select id="acad-year" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                                <option value="2025-26">2025-26</option><option value="2024-25">2024-25</option>
                            </select>
                        </div>
                        <div>
                            <label for="app-id" class="block text-sm font-medium text-gray-700">Application ID</label>
                            <input type="text" id="app-id" placeholder="Enter Application ID" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                        </div>
                        <div>
                            <label for="ssc-hallticket" class="block text-sm font-medium text-gray-700">SSC Hall Ticket No.</label>
                            <input type="text" id="ssc-hallticket" placeholder="Enter Hall Ticket Number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                        </div>
                        <div>
                            <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input type="date" id="dob" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary">
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-brand-accent text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-accent-hover transition-colors">Get Application</button>
                </form>
            `
        },
        'guidelines': {
            title: 'Guidelines & FAQs',
            html: `
                <div class="prose max-w-none">
                    <h3 id="about">About Us</h3>
                    <p>The Electronic Payment & Application System of Scholarships (ePASS) is an innovative initiative by the Government of Telangana. Our mission is to provide a seamless, transparent, and efficient system for the disbursement of scholarships to eligible students across various welfare schemes. We aim to empower students by ensuring timely financial assistance for their educational pursuits.</p>
                    
                    <h3 id="howto">How to Apply</h3>
                    <h4>For Fresh Applications:</h4>
                    <ol>
                        <li>Visit the Student Dashboard and click on "Fresh Registration".</li>
                        <li>Enter your Aadhaar, SSC details, and mobile number to create an account.</li>
                        <li>Log in with your new credentials and fill out the detailed application form.</li>
                        <li>Upload clear, scanned copies of all required documents.</li>
                        <li>Verify all details and submit the application. Print the acknowledgement for your records.</li>
                    </ol>

                    <h4>For Renewal Applications:</h4>
                    <ol>
                        <li>Log in to the Student Dashboard using your previous year's application ID.</li>
                        <li>Your basic details will be pre-filled. Verify and update them if necessary.</li>
                        <li>Enter your current academic year details and upload the latest bonafide certificate and marks memo.</li>
                        <li>Submit the renewal application and print the acknowledgement.</li>
                    </ol>

                    <h3 id="faq">Frequently Asked Questions (FAQs)</h3>
                    <dl>
                        <dt>Q: I forgot my password. How can I reset it?</dt>
                        <dd>A: On the login page, click "Forgot Password". You can reset it using your registered mobile number and date of birth.</dd>
                        <dt>Q: What should be the format and size of uploaded documents?</dt>
                        <dd>A: All documents should be in JPEG or PDF format, and each file should be less than 150 KB in size.</dd>
                        <dt>Q: My bank account is not seeding with Aadhaar (NPCI mapping). What should I do?</dt>
                        <dd>A: Please visit your bank branch immediately with a copy of your Aadhaar card and request them to seed your account for DBT payments.</dd>
                    </dl>
                </div>
            `
        },
        'contact': {
            title: 'Contact Us',
            html: `
                <div class="prose max-w-none">
                    <p>For any queries or assistance, please reach out to us through the following channels. We are available from 10:30 AM to 5:00 PM on all government working days.</p>
                    <h3>Helpline Numbers</h3>
                    <ul>
                        <li><strong>General & Post-Matric Scholarships:</strong> 040-23120311</li>
                        <li><strong>Pre-Matric Scholarships:</strong> 040-23120312</li>
                        <li><strong>Kalyana Lakshmi & Shaadi Mubarak:</strong> 040-23120313</li>
                    </ul>
                    <h3>Email Support</h3>
                    <p>For detailed queries, you can email us at: <a href="mailto:help.tsepass@cgg.gov.in">help.tsepass@cgg.gov.in</a>. Please mention your Application ID in the subject line for faster resolution.</p>
                    <h3>Main Office Address</h3>
                    <address>
                        Project Monitoring Unit, ePASS<br>
                        Centre for Good Governance (CGG)<br>
                        Survey No. 91, Gachibowli,<br>
                        Hyderabad - 500032, Telangana.
                    </address>
                </div>
            `
        },
        'sitemap': {
            title: 'Site Map',
            html: `
                <div class="prose max-w-none">
                    <p>Navigate through the ePASS portal using the links below.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ul>
                            <li><strong>Home</strong></li>
                            <li><strong>Student Dashboard</strong></li>
                            <li>
                                <strong>Scholarships</strong>
                                <ul>
                                    <li><a href="#/scheme/post-matric-fresh">Post-Matric Scholarships</a></li>
                                    <li><a href="#/scheme/kalyana-lakshmi">Kalyana Lakshmi</a></li>
                                </ul>
                            </li>
                            <li><strong>Official Login</strong></li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Services & Forms</strong>
                                <ul>
                                    <li><a href="#/page/status">Know Your Application Status</a></li>
                                    <li><a href="#/page/grievance">Grievance Redressal</a></li>
                                    <li><a href="#/page/print-app">Print Application</a></li>
                                </ul>
                            </li>
                            <li>
                                <strong>Information</strong>
                                <ul>
                                    <li><a href="#/page/guidelines">Guidelines & FAQs</a></li>
                                    <li><a href="#/page/contact">Contact Us</a></li>
                                    <li><a href="#/page/awards">Awards</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            `
        },
        'awards': {
            title: 'Awards & Recognition',
            html: `
                <div class="prose max-w-none">
                    <p>The Telangana ePASS portal has been recognized with several prestigious awards for its excellence in e-governance and commitment to digital innovation in public service delivery.</p>
                    <ul class="list-disc space-y-4">
                        <li>
                            <strong>National E-Governance Gold Award - 2023</strong><br>
                            Awarded by the Department of Administrative Reforms and Public Grievances, Govt. of India, for outstanding performance in citizen-centric service delivery.
                        </li>
                        <li>
                            <strong>SKOCH Award for Digital Innovation - 2022</strong><br>
                            Recognized for leveraging technology to create a transparent and efficient scholarship disbursement system.
                        </li>
                        <li>
                            <strong>State Award for Best G2C Portal - 2021</strong><br>
                            Awarded by the Government of Telangana for being the most accessible and user-friendly government-to-citizen portal.
                        </li>
                    </ul>
                </div>
            `
        },
    },
    schemes: {
        'post-matric-fresh': {
            title: 'Post-Matric Fresh Registration (2025-26)',
            subtitle: 'Apply for a new Post-Matric Scholarship.',
            overview: `<h3>About Fresh Applications</h3><p>This application is for students who have *not* received an ePASS scholarship in the previous academic year. This includes students starting a new course (e.g., finished Intermediate, now starting B.Tech) or first-time applicants.</p><p>This is the primary scheme for students pursuing education *after* Class 10 (Post-Matriculation). It provides financial assistance in two forms:</p><ul class="list-disc list-inside space-y-2"><li><strong>Reimbursement of Tuition Fee (RTF):</strong> The portal pays your college tuition fees directly to the college.</li><li><strong>Maintenance Fee (MTF):</strong> A monthly stipend is paid to the student's bank account to cover hostel and mess charges.</li></ul>`,
            eligibility: `<h3>Who is Eligible?</h3><ul class="list-disc list-inside space-y-2"><li>Students who are citizens of Telangana.</li><li>Must belong to SC, ST, BC, EBC, or Disabled categories.</li><li>Parental income must be below ₹2,00,000 (for SC/ST) or ₹1,50,000 (for BC/EBC).</li><li>Must have a minimum of 75% attendance.</li></ul>`,
            documents: `<h3>Documents Required</h3><ul class="list-disc list-inside space-y-2"><li>Latest Passport Size Photo</li><li>Aadhaar Card</li><li>Caste Certificate (from MeeSeva)</li><li>Income Certificate (latest, from MeeSeva)</li><li>Bonafide Certificate from College</li><li>SSC Hall Ticket</li><li>Previous Year's Marksheet</li><li>Bank Passbook (Front page)</li></ul>`,
            howto: `<h3>How to Apply</h3><ol class="list-decimal list-inside space-y-2"><li>Click the "Apply Now / Student Login" button.</li><li>On the login page, register as a new user using your SSC and Aadhaar details.</li><li>Create your profile and log in to the dashboard.</li><li>Fill out the detailed application form with your personal, academic, and bank details.</li><li>Upload clear, scanned copies of all required documents.</li><li>Submit your application and print the acknowledgement.</li></ol>`
        },
        'post-matric-renewal': {
            title: 'Post-Matric Renewal (2025-26)',
            subtitle: 'Renew your existing Post-Matric Scholarship.',
            overview: `<h3>About Renewal Applications</h3><p>This application is for students who have received an ePASS scholarship in the previous academic year and are continuing the same course.</p><p>Renewing your scholarship is a simplified process where your basic details are pre-filled. You only need to provide your current academic year information.</p>`,
            eligibility: `<h3>Who is Eligible?</h3><ul class="list-disc list-inside space-y-2"><li>Students who received a Post-Matric scholarship in the previous year.</li><li>Must have passed the previous year's examination and been promoted to the next year.</li><li>Must be continuing in the same course and college.</li></ul>`,
            documents: `<h3>Documents Required</h3><ul class="list-disc list-inside space-y-2"><li>Previous Year's Marksheet</li><li>Bonafide Certificate for the current academic year</li><li>Bank Passbook (Front page, if changed)</li></ul>`,
            howto: `<h3>How to Apply</h3><ol class="list-decimal list-inside space-y-2"><li>Click the "Apply Now / Student Login" button.</li><li>Log in using your previous year's application ID and date of birth.</li><li>Verify your pre-filled details.</li><li>Enter your current academic details (Year of study, admission number, etc.).</li><li>Upload the required documents for the current year.</li><li>Submit your application and print the renewal acknowledgement.</li></ol>`
        },
        'kalyana-lakshmi': {
            title: 'Kalyana Lakshmi / Shaadi Mubarak',
            subtitle: 'One-time financial assistance for weddings of eligible brides.',
            overview: `<h3>About the Scheme</h3><p>The Kalyana Lakshmi / Shaadi Mubarak scheme provides a one-time financial grant of ₹1,00,116 to the bride's family to help with wedding expenses. This is a flagship welfare initiative by the Government of Telangana to support unmarried girls from SC, ST, BC, EBC and minority communities.</p>`,
            eligibility: `<h3>Who is Eligible?</h3><ul class="list-disc list-inside space-y-2"><li>The bride must be a resident of Telangana.</li><li>Must belong to SC, ST, BC, EBC or Minority communities.</li><li>The bride must be 18 years of age or older at the time of marriage.</li><li>Parental income must be below ₹2,00,000 per annum.</li></ul>`,
            documents: `<h3>Documents Required</h3><ul class="list-disc list-inside space-y-2"><li>Bride and Groom's Aadhaar Cards</li><li>Bride and Groom's SSC Marksheet (for age proof)</li><li>Caste Certificate of the Bride</li><li>Income Certificate of the Bride's family</li><li>Bank Passbook of the Bride (must be a nationalized bank)</li><li>Wedding Card</li></ul>`,
            howto: `<h3>How to Apply</h3><ol class="list-decimal list-inside space-y-2"><li>Applications can be submitted through the ePASS portal or at the nearest MeeSeva center *before* the date of marriage.</li><li>Fill in all details of the bride, groom, and the marriage.</li><li>Upload all required documents.</li><li>The application will be verified by the local Tahsildar.</li><li>Once approved, the amount will be credited to the bride's bank account.</li></ol>`
        },
        'pre-matric': {
            title: 'Pre-Matric Scholarships',
            subtitle: 'For students in Class IX and X from eligible communities.',
            overview: `<h3>About Pre-Matric Scholarships</h3><p>This centrally sponsored scheme is for students in Class 9 and 10. The objective is to support parents of SC/ST/BC children for the education of their wards studying in these classes so that the incidence of drop-out, especially in the transition from the elementary to the secondary stage, is minimized.</p>`,
            eligibility: `<h3>Who is Eligible?</h3><ul class="list-disc list-inside space-y-2"><li>Students must be in Class IX or X in a government or recognized private school.</li><li>Must belong to SC, ST, BC, or Disabled categories.</li><li>Parental income must be below the prescribed limit (e.g., ₹2,50,000 per annum).</li></ul>`,
            documents: `<h3>Documents Required</h3><ul class="list-disc list-inside space-y-2"><li>Aadhaar Card of the student</li><li>Caste Certificate</li><li>Income Certificate</li><li>Bonafide student certificate from school</li><li>Bank account details of the student (joint account with parents is permissible)</li></ul>`,
            howto: `<h3>How to Apply</h3><ol class="list-decimal list-inside space-y-2"><li>Applications are typically submitted through the National Scholarship Portal (NSP) or as per state guidelines.</li><li>The school's headmaster or principal is the nodal officer for verifying applications.</li><li>Consult your school for the exact application procedure for the current year.</li></ol>`
        },
        'overseas-scholarship': {
            title: 'Ambedkar Overseas Vidya Nidhi',
            subtitle: 'Financial aid for higher studies abroad (Masters, Ph.D.).',
            overview: `<h3>About the Scheme</h3><p>The Ambedkar Overseas Vidya Nidhi scheme provides financial assistance of up to ₹20 Lakhs to eligible SC/ST students for pursuing Post Graduate (Masters) or Ph.D. courses in top-ranked foreign universities in countries like the USA, UK, Australia, Canada, etc.</p>`,
            eligibility: `<h3>Who is Eligible?</h3><ul class="list-disc list-inside space-y-2"><li>Must belong to SC or ST community and be a resident of Telangana.</li><li>Family income should be less than ₹6,00,000 per annum.</li><li>Must have secured admission in an accredited foreign university.</li><li>Must hold a valid Passport and Visa.</li></ul>`,
            documents: `<h3>Documents Required</h3><ul class="list-disc list-inside space-y-2"><li>Caste and Income Certificates</li><li>Admission Offer Letter from the Foreign University</li><li>Degree/Provisional Certificates and Marksheets</li><li>Valid Passport & Visa / I-20 Form</li><li>Latest Tax Assessment document of parents/guardians</li></ul>`,
            howto: `<h3>How to Apply</h3><ol class="list-decimal list-inside space-y-2"><li>Notifications are released periodically. Check the ePASS website for the latest notification.</li><li>Submit the online application with all the required documents.</li><li>A state-level selection committee will scrutinize and finalize the candidates.</li><li>Selected candidates will receive the sanctioned amount in installments.</li></ol>`
        },
        'corporate-college': {
            title: 'Corporate College Admission',
            subtitle: 'Admission into top private junior colleges for meritorious students.',
            overview: `<h3>About the Scheme</h3><p>This scheme provides an opportunity for meritorious SC, ST, and BC students who have excelled in their SSC (Class 10) examinations to get admission into top-tier private/corporate Intermediate colleges for a two-year program. The entire cost of tuition and accommodation is borne by the government.</p>`,
            eligibility: `<h3>Who is Eligible?</h3><ul class="list-disc list-inside space-y-2"><li> meritorious students from SC, ST, and BC communities.</li><li>Must have passed the recent SSC Public Examinations with a high GPA.</li><li>Selection is based on the GPA obtained in the SSC exams and reservation quotas.</li></ul>`,
            documents: `<h3>Documents Required</h3><ul class="list-disc list-inside space-y-2"><li>SSC Hall Ticket and Marksheet</li><li>Caste Certificate from MeeSeva</li><li>Income Certificate from MeeSeva</li><li>Aadhaar Card</li></ul>`,
            howto: `<h3>How to Apply</h3><ol class="list-decimal list-inside space-y-2"><li>A notification will be released on the ePASS website soon after the SSC results are announced.</li><li>Eligible students must apply online through the portal.</li><li>Based on merit (GPA) and reservation rules, students will be allotted colleges.</li><li>The selection list will be published online, and students must report to their allotted colleges.</li></ol>`
        }
    }
};