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

	return (
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
	);
}

export default App;
