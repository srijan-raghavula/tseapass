
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HashRouter, Routes, Route, Link, NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { contentData } from './constants';
import type { PageContent, SchemeContent } from './types';

// --- ICONS (as simple functional components) ---

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const UserShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><circle cx="12" cy="10" r="3"></circle><path d="M12 10v10"></path></svg>
);

const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#14b8a6', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#0d9488', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        <rect x="0" y="0" width="500" height="400" rx="20" fill="#fff" />
        <circle cx="100" cy="100" r="40" fill="url(#grad1)" opacity="0.3"/>
        <circle cx="420" cy="300" r="60" fill="url(#grad2)" opacity="0.3"/>
        <circle cx="250" cy="350" r="25" fill="url(#grad1)" opacity="0.2"/>
        <circle cx="450" cy="80" r="20" fill="url(#grad2)" opacity="0.2"/>
        <rect x="100" y="100" width="300" height="200" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="2" />
        <text x="250" y="215" fontFamily="Inter, sans-serif" fontSize="48" fontWeight="bold" textAnchor="middle" fill="#0d9488">ePASS</text>
        <text x="250" y="245" fontFamily="Inter, sans-serif" fontSize="16" textAnchor="middle" fill="#64748b">Govt. of Telangana</text>
    </svg>
);

// --- REUSABLE COMPONENTS ---

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="animate-fade-in">{children}</div>
);

const Magnifier: React.FC = () => {
    const [zoomLevel, setZoomLevel] = useState(100);

    useEffect(() => {
        const root = document.documentElement;
        root.style.fontSize = `${zoomLevel}%`;
    }, [zoomLevel]);

    const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setZoomLevel(parseInt(e.target.value));
    };

    return (
        <div className="flex items-center gap-2">
            <SearchIcon className="text-gray-600" />
            <input 
                type="range" 
                min="80" 
                max="140" 
                value={zoomLevel} 
                onChange={handleZoomChange}
                className="w-24 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
        </div>
    );
};

// --- LAYOUT COMPONENTS ---

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setOpenDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const navLinkClass = "font-semibold text-brand-dark hover:text-brand-primary transition-colors";
  const activeNavLinkClass = "text-brand-primary";

  const scholarships = contentData.schemes;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://telangana.gov.in/Style%20Library/GoT/img/logo.png" alt="Telangana Logo" className="h-12" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-brand-primary">TS ePASS</span>
              <span className="text-xs text-gray-500 hidden sm:block">Electronic Payment & Application System</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-4">
              <nav ref={navRef} className="flex items-center gap-6 text-sm">
                  <NavLink to="/" className={({ isActive }) => `${navLinkClass} ${isActive ? activeNavLinkClass : ''}`}>Home</NavLink>
                  
                  <div className="relative">
                      <button onClick={() => toggleDropdown('scholarships')} className={`${navLinkClass} flex items-center gap-1`}>
                          Scholarships <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'scholarships' ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`absolute top-full mt-2 w-72 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${openDropdown === 'scholarships' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                          {Object.keys(scholarships).map(key => (
                              <Link key={key} to={`/scheme/${key}`} onClick={() => setOpenDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-light hover:text-brand-primary">{scholarships[key as keyof typeof scholarships].title.split('(')[0]}</Link>
                          ))}
                      </div>
                  </div>
                  
                  <NavLink to="/page/guidelines" className={({ isActive }) => `${navLinkClass} ${isActive ? activeNavLinkClass : ''}`}>Guidelines</NavLink>
                  <NavLink to="/page/contact" className={({ isActive }) => `${navLinkClass} ${isActive ? activeNavLinkClass : ''}`}>Contact</NavLink>
                  
                  <div className="relative">
                       <button onClick={() => toggleDropdown('forms')} className={`${navLinkClass} flex items-center gap-1`}>
                          Forms <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'forms' ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`absolute top-full mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${openDropdown === 'forms' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                          {Object.keys(contentData.pages).filter(k => !['guidelines','contact','sitemap','awards'].includes(k)).map(key => (
                              <Link key={key} to={`/page/${key}`} onClick={() => setOpenDropdown(null)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-light hover:text-brand-primary">{contentData.pages[key].title}</Link>
                          ))}
                      </div>
                  </div>

              </nav>
              <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                  <Magnifier />
                   <Link to="/admin-login" className="text-sm font-semibold text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-1">
                      <UserShieldIcon className="w-5 h-5"/>
                      Official Login
                   </Link>
              </div>
          </div>
          
           <div className="flex items-center gap-4">
              <Link to="/dashboard" className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm shadow-sm hidden sm:block">
                  Student Dashboard
              </Link>
              <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="flex flex-col px-4 pt-2 pb-4 space-y-2 border-t border-gray-200">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${navLinkClass} py-2 ${isActive ? activeNavLinkClass : ''}`}>Home</NavLink>
            <div className="py-2">
                <button onClick={() => toggleDropdown('scholarships-mobile')} className={`${navLinkClass} w-full flex justify-between items-center`}>
                    Scholarships <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'scholarships-mobile' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`pl-4 overflow-hidden transition-all duration-300 ${openDropdown === 'scholarships-mobile' ? 'max-h-96' : 'max-h-0'}`}>
                    {Object.keys(scholarships).map(key => (
                        <Link key={key} to={`/scheme/${key}`} onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }} className="block py-2 text-sm text-gray-700 hover:text-brand-primary">{scholarships[key as keyof typeof scholarships].title.split('(')[0]}</Link>
                    ))}
                </div>
            </div>
            <NavLink to="/page/guidelines" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${navLinkClass} py-2 ${isActive ? activeNavLinkClass : ''}`}>Guidelines</NavLink>
             <div className="py-2">
                <button onClick={() => toggleDropdown('forms-mobile')} className={`${navLinkClass} w-full flex justify-between items-center`}>
                    Forms <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'forms-mobile' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`pl-4 overflow-hidden transition-all duration-300 ${openDropdown === 'forms-mobile' ? 'max-h-96' : 'max-h-0'}`}>
                    {Object.keys(contentData.pages).filter(k => !['guidelines','contact','sitemap','awards'].includes(k)).map(key => (
                        <Link key={key} to={`/page/${key}`} onClick={() => { setIsMenuOpen(false); setOpenDropdown(null); }} className="block py-2 text-sm text-gray-700 hover:text-brand-primary">{contentData.pages[key].title}</Link>
                    ))}
                </div>
            </div>
            <NavLink to="/page/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `${navLinkClass} py-2 ${isActive ? activeNavLinkClass : ''}`}>Contact</NavLink>
            <div className="border-t my-2"></div>
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center justify-center sm:hidden w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-2.5 px-4 rounded-lg transition-colors text-sm shadow-sm mt-2">
                Student Dashboard
            </Link>
            <Link to="/admin-login" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-semibold text-gray-600 hover:text-brand-primary transition-colors flex items-center justify-center gap-1">
                <UserShieldIcon className="w-5 h-5"/> Official Login
            </Link>
            <div className="pt-2 flex justify-center">
                <Magnifier />
            </div>
        </div>
      </div>
    </header>
  );
};


const Footer: React.FC = () => (
    <footer className="bg-brand-dark text-gray-300 mt-auto">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h4 className="font-display font-bold text-white mb-4">About ePASS</h4>
                    <p className="text-sm text-gray-400">The Electronic Payment & Application System of Scholarships (ePASS) is an initiative of the Telangana Government to ensure faster and transparent disbursement of scholarships.</p>
                </div>
                <div>
                    <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/page/guidelines#about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/page/guidelines#faq" className="hover:text-white transition-colors">FAQs</Link></li>
                        <li><Link to="/page/sitemap" className="hover:text-white transition-colors">Site Map</Link></li>
                        <li><Link to="/page/awards" className="hover:text-white transition-colors">Awards</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-display font-bold text-white mb-4">Related Websites</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="https://www.telangana.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telangana State Portal</a></li>
                        <li><a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">National Scholarship Portal</a></li>
                        <li><a href="https://www.cgg.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Centre for Good Governance</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-display font-bold text-white mb-4">Contact Us</h4>
                    <div className="text-sm space-y-2 text-gray-400">
                        <p><strong>Post-Matric:</strong> 040-23120311</p>
                        <p><strong>Pre-Matric:</strong> 040-23120312</p>
                        <p>(10:30 AM to 5 PM on working days)</p>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Government of Telangana. All rights reserved.</p>
                <p>Designed and Developed by the Centre for Good Governance (CGG).</p>
            </div>
        </div>
    </footer>
);

const FlashNews: React.FC = () => (
    <div className="bg-brand-dark text-white py-3 overflow-hidden">
        <div className="container mx-auto px-4 flex items-center">
            <span className="font-bold text-brand-accent flex-shrink-0 pr-4">Flash News</span>
            <div className="flex-grow overflow-hidden relative h-6">
                <div className="absolute animate-ticker-scroll whitespace-nowrap">
                    <span className="mx-8">Registrations for Post-Matric Scholarships 2025-26 are now open.</span>
                    <span className="mx-8">For Biometric Aadhar Authentication please visit your nearest Mee Seva Centre.</span>
                    <span className="mx-8">Kalyana Lakshmi applications are being processed for the current quarter.</span>
                </div>
            </div>
        </div>
    </div>
);


const MainLayout: React.FC = () => (
    <div className="flex flex-col min-h-screen bg-brand-base text-brand-dark">
        <Header />
        <FlashNews />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
    </div>
);

// --- PAGE COMPONENTS ---

const HomePage: React.FC = () => (
  <AnimatedPage>
    <div className="bg-brand-light relative overflow-hidden">
      <div className="blob-container">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
      </div>
      <div className="container mx-auto px-4 pt-16 pb-20 text-center lg:text-left relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-brand-primary">Telangana ePASS Scholarship Portal</h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">One unified portal for all your scholarship and welfare scheme applications. Log in to your dashboard to get started.</p>
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <Link to="/dashboard" className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg">Student Dashboard</Link>
              <Link to="/page/guidelines" className="inline-flex items-center bg-white hover:bg-gray-100 text-brand-primary font-bold py-3 px-6 rounded-lg transition-colors border-2 border-brand-primary">How to Apply</Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroIllustration className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
    <section className="py-20 bg-brand-base">
        <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-center text-brand-primary">Services & Schemes</h2>
            <p className="text-center text-gray-600 mt-2 mb-12 max-w-2xl mx-auto">Find all the services and welfare schemes available on the portal.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.keys(contentData.schemes).map((key, index) => (
                    <Link to={`/scheme/${key}`} key={key} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up group" style={{ animationDelay: `${index * 100}ms` }}>
                         <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                               <h4 className="font-display font-bold text-brand-dark mb-2">{contentData.schemes[key as keyof typeof contentData.schemes].title.split('(')[0]}</h4>
                               <p className="text-sm text-gray-500">{contentData.schemes[key as keyof typeof contentData.schemes].subtitle}</p>
                            </div>
                            <ChevronRightIcon className="w-6 h-6 text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-secondary flex-shrink-0" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  </AnimatedPage>
);

const DashboardPage: React.FC = () => (
    <AnimatedPage>
        <div className="container mx-auto px-4 py-12">
            <h1 className="font-display text-3xl font-bold text-brand-primary mb-8">My Dashboard</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Status Card */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                    <h3 className="font-bold text-xl text-brand-dark mb-4">Your 2025-26 Application Status</h3>
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
                        <p className="font-bold text-amber-800">Pending at College Officer</p>
                        <p className="text-sm text-amber-700">Your application (ID: 2025001234) is awaiting verification.</p>
                    </div>
                    {/* Visual Tracker */}
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4 text-green-600"><div className="w-5 h-5 bg-green-500 rounded-full"></div>Application Submitted</li>
                        <li className="flex items-center gap-4 text-amber-600 font-bold"><div className="w-5 h-5 bg-amber-500 rounded-full animate-pulse"></div>College Verification</li>
                        <li className="flex items-center gap-4 text-gray-400"><div className="w-5 h-5 bg-gray-300 rounded-full"></div>District Officer Approval</li>
                        <li className="flex items-center gap-4 text-gray-400"><div className="w-5 h-5 bg-gray-300 rounded-full"></div>Treasury Disbursement</li>
                        <li className="flex items-center gap-4 text-gray-400"><div className="w-5 h-5 bg-gray-300 rounded-full"></div>Amount Credited</li>
                    </ul>
                </div>
                {/* Actions & Profile */}
                <div className="space-y-8">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="font-bold text-xl text-brand-dark mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <Link to="/page/print-app" className="block w-full text-center bg-brand-secondary hover:bg-brand-primary text-white font-semibold py-2.5 px-4 rounded-lg transition-colors">Print Application</Link>
                            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2.5 px-4 rounded-lg transition-colors">Upload Documents</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="font-bold text-xl text-brand-dark mb-4">My Profile</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                           <p><strong>Aadhaar:</strong> XXXX XXXX 1234</p>
                           <p><strong>Bank:</strong> State Bank of India</p>
                           <p><strong>Mobile:</strong> +91 XXXXX-43210</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedPage>
);

const GenericPage: React.FC = () => {
    const { pageId } = useParams<{ pageId: string }>();
    const content = pageId ? contentData.pages[pageId] : null;

    if (!content) {
        return <NotFoundPage />;
    }

    return (
        <AnimatedPage>
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                    <h1 className="font-display text-3xl font-bold text-brand-primary text-center mb-6">{content.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content.html }} />
                </div>
            </div>
        </AnimatedPage>
    );
};

const SchemeDetailsPage: React.FC = () => {
    const { schemeId } = useParams<{ schemeId: string }>();
    const [activeTab, setActiveTab] = useState('overview');
    const content = schemeId ? contentData.schemes[schemeId] : null;

    useEffect(() => {
        setActiveTab('overview');
    }, [schemeId]);

    if (!content) {
        return <NotFoundPage />;
    }
    
    const tabs = ['overview', 'eligibility', 'documents', 'howto'];

    return (
        <AnimatedPage>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <h1 className="font-display text-4xl font-bold text-brand-primary">{content.title}</h1>
                    <p className="text-lg text-gray-600 mt-2">{content.subtitle}</p>
                     <Link to="/dashboard" className="mt-6 inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg">Apply Now / Student Login</Link>
                </div>
                
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-4 px-4 overflow-x-auto" aria-label="Tabs">
                           {tabs.map(tab => (
                             <button key={tab} onClick={() => setActiveTab(tab)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize ${activeTab === tab ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                                 {tab}
                             </button>
                           ))}
                        </nav>
                    </div>
                    <div className="p-8 prose max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: content[activeTab as keyof SchemeContent] }} />
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

const AdminLoginPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('college');
    return (
         <AnimatedPage>
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
                    <h1 className="font-display text-2xl font-bold text-brand-primary text-center mb-2">Official & Administrative Login</h1>
                    <p className="text-center text-gray-500 text-sm mb-6">For authorized college, district, and department officials only.</p>
                     <div className="border-b border-gray-200 mb-6">
                        <nav className="-mb-px flex justify-center space-x-4" aria-label="Tabs">
                            <button onClick={() => setActiveTab('college')} className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm ${activeTab === 'college' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>College</button>
                            <button onClick={() => setActiveTab('district')} className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm ${activeTab === 'district' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>District</button>
                            <button onClick={() => setActiveTab('department')} className={`whitespace-nowrap py-3 px-4 border-b-2 font-medium text-sm ${activeTab === 'department' ? 'border-brand-primary text-brand-primary' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>Department</button>
                        </nav>
                    </div>
                    <form className="space-y-4">
                        {activeTab === 'college' && <label className="block text-sm font-medium text-gray-700">Username (College Code)</label>}
                        {activeTab !== 'college' && <label className="block text-sm font-medium text-gray-700">Username</label>}
                        <input type="text" placeholder="Enter username" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary" />
                        <label className="block text-sm font-medium text-gray-700 pt-2">Password</label>
                        <input type="password" placeholder="Enter password" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-secondary focus:ring-brand-secondary" />
                        <button type="submit" className="w-full !mt-6 bg-brand-accent text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-accent-hover transition-colors">Login</button>
                    </form>
                </div>
            </div>
        </AnimatedPage>
    );
};


const NotFoundPage: React.FC = () => (
    <div className="text-center py-20">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block bg-brand-primary text-white font-bold py-2 px-4 rounded">Go Home</Link>
    </div>
);


const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- ROOT APP COMPONENT ---

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="page/:pageId" element={<GenericPage />} />
          <Route path="scheme/:schemeId" element={<SchemeDetailsPage />} />
          <Route path="admin-login" element={<AdminLoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;