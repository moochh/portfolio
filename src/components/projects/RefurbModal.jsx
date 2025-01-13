import React from 'react';
import ModalBase from './ModalBase';
import Header from '../modal/Header';
import Box from '../modal/Box';
import Column from '../modal/Column';
import Info from '../modal/Info';
import Span from '../modal/Span';
import Row from '../modal/Row';
import Image from '../modal/Image';
import Footer from '../modal/Footer';
import TechStack from '../modal/TechStack';

const RefurbModal = ({ show }) => {
	return (
		<ModalBase project={'Refurb'} show={show}>
			<Header project={'Refurb'} year={'2024'} />

			<Row>
				<Box>
					<Column>
						<Info project={'Refurb'} header={'About Refurb'}>
							Refurb is an e-commerce website for shopping furnitures. It
							includes a variety of products such as living room, bedroom,
							dining room, bathroom, kitchen, and outdoor products. It also has
							payment gateway integration through PayMongo.
						</Info>

						<TechStack>
							<p>C# Blazor</p>
							<p>Express.js</p>
							<p>PostgreSQL</p>
							<p>Firebase</p>
							<p>PayMongo API</p>
						</TechStack>
					</Column>
				</Box>

				<Span hiddenBorder={'left'}>
					<Image project={'Refurb'} name={'Landing'} />
				</Span>
			</Row>

			<Row>
				<Span hiddenBorder={'right'}>
					<Image project={'Refurb'} name={'Products'} />
				</Span>

				<Box>
					<Info project={'Refurb'} header={'Product Catalog'}>
						Just like any other e-commerce platforms, users can browse furniture
						products with Refurb. It has sorting and filtering capabilities for
						a much easier shopping.
					</Info>
				</Box>
			</Row>

			<Row>
				<Box>
					<Info project={'Refurb'} header={'PayMongo Integration'}>
						Through PayMongo, users can pay for their purchases as they place
						their orders, enabling a seamless shopping experience. Allowed
						payment methods include card, GCash, GrabPay, PayMaya, BPI, and
						UnionBank.
					</Info>
				</Box>

				<Span hiddenBorder={'left'}>
					<Image project={'Refurb'} name={'PayMongo'} />
				</Span>
			</Row>

			<Row>
				<Span hiddenBorder={'right'}>
					<Image project={'Refurb'} name={'Orders'} />
				</Span>

				<Box>
					<Info project={'Refurb'} header={'Order Management'}>
						Refurb also allows users to monitor their past and ongoing orders.
						They can filter their orders based on status (active and completed)
						for easier viewing.
					</Info>
				</Box>
			</Row>

			<Row>
				<Box>
					<Info project={'Refurb'} header={'Admin Dashboard'}>
						It also includes an admin dashboard for managing the products that
						are displayed in the platform. Admins can add, edit, and delete
						products. They can also monitor user orders and transactions.
					</Info>
				</Box>

				<Span hiddenBorder={'left'}>
					<Image project={'Refurb'} name={'Admin'} />
				</Span>
			</Row>

			<Footer />
		</ModalBase>
	);
};

export default RefurbModal;
