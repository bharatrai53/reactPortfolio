import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
// import Portfolio from './Portfolio';
import Contact from './Contact';
// import Resume from './Resume';

function Home() {
const [activeNavItem, setActiveNavItem] = useState('About Me');

const handleNavItemClick = (item) => {
setActiveNavItem(item);
};

return (
<>
<Header activeNavItem={activeNavItem} onNavItemClick={handleNavItemClick} />
{activeNavItem === 'About Me' && <About />}
{/* {activeNavItem === 'Portfolio' && <Portfolio />} */}
{activeNavItem === 'Contact' && <Contact />}
{/* {activeNavItem === 'Resume' && <Resume />} */}
<Footer />
</>
);
}

export default Home;