import { useEffect, useState } from 'react';
import './style/style.css';
import Divider from './components/Divider';
import Skill1 from './components/Skill1';
import Skill2 from './components/Skill2';
import Skill3 from './components/Skill3';
import ContactCard from './components/ContactCard';
import Projects from './components/sections/Projects';
import FareEaseModal from './components/projects/FareEaseModal';
import Mask from './components/modal/Mask';
import { useGlobalState } from './context/GlobalStateProvider';
import Landing from './components/sections/Landing';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import MedPalModal from './components/projects/MedPalModal';
import RefurbModal from './components/projects/RefurbModal';
import Nav from './components/sections/Nav';
import SideNav from './components/sections/SideNav';
import MobileView from './components/sections/MobileView';

function App() {
	const [toggled, setToggled] = useState('');
	const { setIsReadyModal } = useGlobalState();
	const { showMask, setShowMask } = useGlobalState();
	const { selectedProject } = useGlobalState();
	const { isPageReady, setIsPageReady } = useGlobalState();

	const toggleCallback = (skill) => {
		setToggled(skill);
	};

	const handleModalClick = (show) => {
		setShowMask(show);

		setTimeout(() => {
			setIsReadyModal(true);
		}, 1000);
	};

	//> Force scroll to top on page load
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' });
	}, []);

	//> Disable/Re-enable scrolling
	useEffect(() => {
		// Function to prevent scrolling
		const preventScroll = (e) => {
			e.preventDefault();
			e.stopPropagation();
		};

		// Add event listeners to disable scrolling
		window.addEventListener('wheel', preventScroll, { passive: false });
		window.addEventListener('touchmove', preventScroll, { passive: false });
		window.addEventListener('keydown', preventScroll, { passive: false });

		// Re-enable scroll after 3 seconds
		const timer = setTimeout(() => {
			// Remove event listeners to re-enable scroll
			window.removeEventListener('wheel', preventScroll);
			window.removeEventListener('touchmove', preventScroll);
			window.removeEventListener('keydown', preventScroll);

			setIsPageReady(true);
		}, 3000);

		// Cleanup function to remove listeners when the component unmounts
		return () => {
			clearTimeout(timer);
			window.removeEventListener('wheel', preventScroll);
			window.removeEventListener('touchmove', preventScroll);
			window.removeEventListener('keydown', preventScroll);
		};
	}, []);

	return (
		<>
			<MobileView />

			<div className="main">
				<Landing />

				<Nav />

				<About />
				<Skills />

				<Projects onClick={handleModalClick} />
				<FareEaseModal show={showMask && selectedProject === 'FareEase'} />
				<MedPalModal show={showMask && selectedProject === 'MedPal'} />
				<RefurbModal show={showMask && selectedProject === 'Refurb'} />

				<Mask show={showMask} />

				<Contact />
				<Footer />

				<SideNav />
			</div>
		</>
	);
}

export default App;
