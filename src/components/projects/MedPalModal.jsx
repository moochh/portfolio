import React, { forwardRef, useRef } from 'react';
import { motion } from 'motion/react';
import Header from '../modal/Header';
import ModalBase from './ModalBase';
import Footer from '../modal/Footer';
import Info from '../modal/Info';
import Row from '../modal/Row';
import Column from '../modal/Column';
import Box from '../modal/Box';
import Span from '../modal/Span';
import Image from '../modal/Image';
import TechStack from '../modal/TechStack';

const MedPalModal = ({ show }) => {
	return (
		<ModalBase show={show} project={'MedPal'}>
			<Header project={'MedPal'} year={'2024'} />
			<Row>
				<Box>
					<Column>
						<Info project={'MedPal'} header={'About MedPal'}>
							Recognizing the importance of medication in a patient’s
							rehabilitation and recovery, MedPal is dedicated to help patients
							adhere to their medication regiment. This system works with an
							Arduino-powered automatic medicine dispenser and the MedPal apps
							are used to manage and control this IoT device. MedPal helps
							remind patients to take their medicines on time and notifies
							nurses if any dosage is missed.
						</Info>

						<TechStack>
							<p>Java</p>
							<p>Javascript</p>
							<p>Firebase</p>
							<p>C++ (Arduino)</p>
						</TechStack>
					</Column>
				</Box>

				<Box hasBorder={false}>
					<Image project={'MedPal'} name={'Mobile'} />
				</Box>

				<Box></Box>
			</Row>

			<Row>
				<Span hiddenBorder={'right'}>
					<Image project={'MedPal'} name={'Web'} />
				</Span>

				<Box>
					<Info project={'MedPal'} header={'Multi-Platform Compatibility'}>
						MedPal is compatible with Android and desktop devices. Given the
						risks of missing dosages, cross-platform support provides our nurses
						with more options on how they would monitor their patients and makes
						sure they are notified right away.
					</Info>
				</Box>
			</Row>

			<Row>
				<Box />

				<Box hasBorder={false}>
					<Info project={'MedPal'} header={'Schedule Setting'}>
						The multi-compartment automatic medicine dispenser is equipped with
						sound alarms and and LCD to remind patients of their medication and
						display important details. Through the mobile and web apps, nurses
						can set schedules of when the dispenser will should alert the
						patients. Important details could be set such as date and time,
						dosage, and special instructions, if any.
					</Info>
				</Box>

				<Box>
					<Image project={'MedPal'} name={'Set Schedule'} />
				</Box>
			</Row>

			<Row>
				<Box>
					<Info project={'MedPal'} header={'Remote Monitoring'}>
						Using the app, nurses can see if patients have taken their
						medicines, are about to take medicines, or has been running late on
						their schedule without having to visit the patient’s room. This
						allows for a more convenient solution that enables nurses to allot
						their time on other important matters that must be taken care of
						inside the hospital.
					</Info>
				</Box>

				<Span hiddenBorder={'left'}>
					<Image project={'MedPal'} name={'View Schedule'} />
				</Span>
			</Row>

			<Row>
				<Span hiddenBorder={'right'}>
					<Image project={'MedPal'} name={'Refill'} />
				</Span>

				<Box>
					<Info project={'MedPal'} header={'Dispenser Control'}>
						The app can also be used to manually open the compartments of the
						medicine dispenser for refilling. This feature is only available on
						the mobile version.
					</Info>
				</Box>
			</Row>

			<Footer />
		</ModalBase>
	);
};

export default MedPalModal;
