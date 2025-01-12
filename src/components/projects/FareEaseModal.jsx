import React from 'react';
import Row from '../modal/Row';
import Box from '../modal/Box';
import Info from '../modal/Info';
import Column from '../modal/Column';
import Image from '../modal/Image';
import Span from '../modal/Span';
import Header from '../modal/Header';
import { motion } from 'motion/react';
import Footer from '../modal/Footer';
import ModalBase from './ModalBase';
import TechStack from '../modal/TechStack';

const FareEaseModal = ({ show }) => {
	return (
		<ModalBase project={'FareEase'} show={show}>
			<Header project={'FareEase'} year={'2023'} />

			<Row>
				<Box>
					<Image project={'FareEase'} name={'Home'} />
				</Box>

				<Box hasBorder={false}>
					<Column isHalf={true}>
						<Info project={'FareEase'} header={'About FareEase'}>
							FareEase is a system aimed at streamlining public bus
							transportation by making payments easier and faster through the of
							QR codes. Each commuter have their own unique QR codes which serve
							as their identification within the system. Through FareEase,
							commuters can manage their transactions and check on their wallet
							balance.
						</Info>

						<Info project={'FareEase'} header={'How It Works'}>
							Commuters simply need to scan their QR codes on the bus scanner
							when they board and again before they get off. These will mark the
							commuter’s origin and destination which determine the trip’s fare.
						</Info>
					</Column>
				</Box>

				<Box>
					<TechStack isBottom={true}>
						<p>Java</p>
						<p>Javascript</p>
						<p>Firebase</p>
						<p>Stripe</p>
					</TechStack>
				</Box>
			</Row>

			<Row>
				<Box>
					<Info project={'FareEase'} header={'Google Maps Integration'}>
						Commuters can use the map to pin their destination location and the
						app will notify them how far they are from the destination or if
						they have arrived. Locations of available buses can also be viewed
						from the map.
					</Info>
				</Box>

				<Span hiddenBorder={'left'}>
					<Image project={'FareEase'} name={'Maps'} />
				</Span>
			</Row>

			<Row>
				<Box />

				<Box hasBorder={false}>
					<Image project={'FareEase'} name={'Stripe'} />
				</Box>

				<Box>
					<Info project={'FareEase'} header={'Stripe Integration'}>
						Through Stripe, commuters can top up their wallets and pay for their
						fares.
					</Info>
				</Box>
			</Row>

			<Row>
				<Span hiddenBorder={'right'}>
					<Image project={'FareEase'} name={'Drivers'} />
				</Span>

				<Box>
					<Info project={'FareEase'} header={'Driver App'}>
						Drivers also play a role in FareEase. They are the owns who manage
						the QR scanner in the bus that handles the commuter’s payments. This
						app for the drivers allow them to monitor the transactions made on
						their respective buses and see how much revenue they’ve made.
					</Info>
				</Box>
			</Row>

			<Row>
				<Box>
					<Info project={'FareEase'} header={'Admin Dashboard'}>
						It also includes an admin dashboard for monitoring and managing the
						system. Admins can use it to adjust pricing and verify driver
						accounts before they start using the app.
					</Info>
				</Box>

				<Span hiddenBorder={'left'}>
					<Image project={'FareEase'} name={'Admin'} />
				</Span>
			</Row>

			<Footer />
		</ModalBase>
	);
};

export default FareEaseModal;
