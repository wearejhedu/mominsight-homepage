import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const navItems = [
  ['/', '메인'],
  ['/about', '소개'],
  ['/services', '서비스'],
  ['/blog', '칼럼'],
  ['/contact', '상담 신청'],
];

export default function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            모먼사이트 교육 컨설팅
          </NavLink>
          <nav>
            <ul className="nav-list">
              {navItems.map(([to, label]) => (
                <li key={to}>
                  <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <NavLink className="btn btn-sm" to="/contact">
            상담 신청
          </NavLink>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}
