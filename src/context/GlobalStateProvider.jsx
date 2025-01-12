import React, { createContext, useContext, useState, useRef } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
	const [toggled, setToggled] = useState('');
	const [isSkillsDefault, setIsSkillsDefault] = useState(true);
	const [isReadyModal, setIsReadyModal] = useState(false);
	const [showMask, setShowMask] = useState(false);
	const [selectedProject, setSelectedProject] = useState('');
	const [isPageReady, setIsPageReady] = useState(false);
	const [isSideNavVisible, setIsSideNavVisible] = useState(false);

	const modalRefs = {
		FareEaseRef: useRef(null),
		MedPalRef: useRef(null),
		RefurbRef: useRef(null)
	};

	const sectionRefs = {
		AboutRef: useRef(null),
		SkillsRef: useRef(null),
		ProjectsRef: useRef(null),
		ContactRef: useRef(null)
	};

	const [currentSection, setCurrentSection] = useState('About');

	return (
		<GlobalStateContext.Provider
			value={{
				toggled,
				setToggled,
				isSkillsDefault,
				setIsSkillsDefault,
				isReadyModal,
				setIsReadyModal,
				showMask,
				setShowMask,
				selectedProject,
				setSelectedProject,
				modalRefs,
				isPageReady,
				setIsPageReady,
				sectionRefs,
				currentSection,
				setCurrentSection,
				isSideNavVisible,
				setIsSideNavVisible
			}}>
			{children}
		</GlobalStateContext.Provider>
	);
};

// Custom hook to use the context
export const useGlobalState = () => useContext(GlobalStateContext);
