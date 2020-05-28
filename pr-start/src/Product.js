import React, { useState } from 'react';
import styled from 'styled-components';
import ModelSwitcher from './product/ModelSwitcher';
import ModelVisual from './product/ModelVisual';
import CTA from './assets/module/CTA';
import Siblings from './product/Siblings';

// style
const ProductItem = styled.div`
	display: inline-block;
	vertical-align: top;
	width: 25%;
	min-width: 154px;
	padding: 0 12px;
	//&:nth-child(4n-3) {padding-left:0;}
	//&:nth-child(4n) {padding-right:0;}
	margin-bottom: 30px;
	box-sizing: border-box;
	font-size: 14px;
	line-height: 1.5em;
	color: #333;
	text-align: center;
	word-wrap: break-word;
	word-break: break-word;
	&:nth-child(4n):before {
		content: '';
	}
`;
const UserFreindleyName = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	height: 42px;
	margin-top: 10px;
`;
const ModelDispalyName = styled.div`
	color: #6b6b6b;
	margin-top: 7px;
`;

// JSON
const initialState = {
	bizType: 'b2c',
	b2bText: 'See Retailer for Pricing',
	paperUnit: '$',
	products: [
		{
			id: 1,
			modelId: 'OLED65C9PUA',
			url: '#',
			userFreindleyName:
				'LG SIGNATURE OLED TV R9 - 4K HDR Smart TV - 65" Class(64.5" Diag)',
			modelDisplayName: '86XE3FS-B',
			price: '',
			discount: '',
			promotionText: '',
			btnData: [
				{
					name: 'Add to cart',
					title: '',
				},
				{
					name: 'Where to Buy',
					linkSelf: false,
					linkUrl: 'www.lg.com/uk',
					title: 'Buy for this shop',
				},
			],
			imgData: {
				altText: 'img text...',
				imgPath: {
					desktop:
						'https://www.lg.com/us/images/tvs/md06065216/OLED65C9PUA_350_v1.jpg',
					mobile:
						'https://www.lg.com/us/images/tvs/md06065216/OLED65C9PUA_260_v1.jpg',
				},
			},
			siblingsType: 'size',
			siblings: [
				{
					size: 77,
					name: "77 inch"
				},
				{
					size: 66,
					name: "66 inch"
				},
				{
					size: 55,
					name: "55 inch"
				},
			],
		},
		{
			id: 2,
			modelId: 'OLED65C9PUA',
			url: '#',
			userFreindleyName:
				'LG SIGNATURE OLED TV R9 - 4K HDR Smart TV - 65" Class Class Class Class(64.5" Diag)',
			modelDisplayName: '32XF1E-B',
			price: '3,600.99',
			discount: '2,000.99',
			promotionText: 'OLED TV Deals',
			btnData: [
				{
					name: 'Book online',
					title: 'Learn more',
				},
				{
					name: 'Where to Buy',
					linkSelf: false,
					linkUrl: 'www.lg.com/uk',
					title: 'Buy for this shop',
				},
			],
			imgData: {
				altText: 'img text...',
				imgPath: {
					desktop:
						'https://www.lg.com/us/images/dryers/md07000693/350-01.jpg',
					mobile:
						'https://www.lg.com/us/images/dryers/md07000693/260-01.jpg',
				},
			},
			siblingsType: 'color',
			siblings: [
				{
					color: "steelblue",
					name: 'morocan-blue',
				},
			],
		},
		{
			id: 3,
			modelId: 'OLED65C9PUA',
			url: '#',
			userFreindleyName: '75" LG NanoCell 8K TV - SM99',
			modelDisplayName: 'Seria XF3E',
			price: '3,309.99',
			discount: '1,199.99',
			promotionText: 'Black Friday sales',
			btnData: [
				{
					name: 'Reseller',
					title: 'Learn more',
				},
				{
					name: 'Where to Buy',
					linkSelf: true,
					linkUrl: 'www.lg.com/uk',
					title: 'Buy for this shop',
				},
			],
			imgData: {
				altText: 'img text...',
				imgPath: {
					desktop:
						'https://www.lg.com/us/images/tvs/md06065216/OLED65C9PUA_350_v1.jpg',
					mobile:
						'https://www.lg.com/us/images/tvs/md06065216/OLED65C9PUA_260_v1.jpg',
				},
			},
			siblingsType: 'size',
			siblings: [
				{
					size: 77,
					name: "77 inch"
				},
				{
					size: 66,
					name: "66 inch"
				},
				{
					size: 55,
					name: "55 inch"
				},
			],
		},
		{
			id: 4,
			modelId: 'OLED65C9PUA',
			url: '#',
			userFreindleyName:
				'LG SIGNATURE OLED TV R9 - 4K HDR Smart TV - 65" Class(64.5" Diag)',
			modelDisplayName: 'Seria XF3E',
			price: '3,309.99',
			discount: '3,199.99',
			promotionText: '',
			btnData: [
				{
					name: 'Buy now',
					title: 'Learn more',
				},
				{
					name: 'Where to Buy',
					linkSelf: true,
					linkUrl: 'www.lg.com/uk',
					title: 'Buy for this shop',
				},
			],
			imgData: {
				altText: 'img text...',
				imgPath: {
					desktop:
						'https://www.lg.com/us/images/gnb/tv-au-vid/04_TV_AU_VID_Product_Banner_OLED88Z9PUA.jpg',
					mobile:
						'https://www.lg.com/us/images/gnb/tv-au-vid/04_TV_AU_VID_Product_Banner_OLED88Z9PUA.jpg',
				},
			},
			siblingsType: 'size',
			siblings: [
				{
					size: 77,
					name: "77 inch"
				},
				{
					size: 66,
					name: "66 inch"
				},
				{
					size: 55,
					name: "55 inch"
				},
			],
		},
		{
			id: 5,
			modelId: 'OLED65C9PUA',
			url: '#',
			userFreindleyName: '55" LG NanoCell 4K TV - SM82',
			modelDisplayName: 'Seria XF3E',
			price: '3,309.99',
			discount: '1,199.99',
			promotionText: 'LG TV Disney+ Offer',
			btnData: [
				{
					name: 'Product support',
					title: 'Learn more',
				},
				{
					name: 'Where to Buy',
					linkSelf: false,
					linkUrl: 'www.lg.com/uk',
					title: 'Buy for this shop',
				},
			],
			imgData: {
				altText: 'img text...',
				imgPath: {
					desktop:
						'https://www.lg.com/us/images/tvs/md06065216/OLED65C9PUA_350_v1.jpg',
					mobile:
						'https://www.lg.com/us/images/tvs/md06065216/OLED65C9PUA_260_v1.jpg',
				},
			},
			siblingsType: 'size',
			siblings: [
				{
					size: 77,
					name: "77 inch"
				},
				{
					size: 66,
					name: "66 inch"
				},
				{
					size: 55,
					name: "55 inch"
				},
			],
		},
		{
			id: 6,
			modelId: 'OLED65C9PUA',
			url: '#',
			userFreindleyName: '55" LG NanoCell 4K TV - SM82',
			modelDisplayName: 'Seria XF3E',
			price: '3,309.99',
			discount: '1,199.99',
			promotionText: '',
			btnData: [
				{
					name: 'Add to cart',
					title: '',
				},
				{
					name: 'Find a dealer',
					linkSelf: false,
					linkUrl: 'www.lg.com/uk',
					title: 'Buy for this shop',
				},
			],
			imgData: {
				altText: 'img text...',
				imgPath: {
					desktop:
						'https://www.lg.com/us/images/tvs/md06065216/OLED65C9PUA_350_v1.jpg',
					mobile:
						'https://www.lg.com/us/images/tvs/md06065216/OLED65C9PUA_260_v1.jpg',
				},
			},
			siblingsType: 'size',
			siblings: [
				{
					size: 77,
					name: "77 inch"
				},
				{
					size: 66,
					name: "66 inch"
				},
				{
					size: 55,
					name: "55 inch"
				},
			],
		},
		{
			id: 7,
			modelId: 'OLED65C9PUA',
			url: '#',
			userFreindleyName:
				'LG SIGNATURE OLED TV R9 - 4K HDR Smart TV - 65" Class Class Class Class(64.5" Diag)',
			modelDisplayName: '32XF1E-B',
			price: '3,600.99',
			discount: '2,000.99',
			promotionText: 'OLED TV Deals',
			btnData: [
				{
					name: 'Add to cart',
					title: '',
				},
				{
					name: 'Where to Buy',
					linkSelf: false,
					linkUrl: 'www.lg.com/uk',
					title: 'Buy for this shop',
				},
			],
			imgData: {
				altText: 'img text...',
				imgPath: {
					desktop:
						'https://www.lg.com/us/images/dryers/md07000693/350-01.jpg',
					mobile:
						'https://www.lg.com/us/images/dryers/md07000693/260-01.jpg',
				},
			},
			siblingsType: 'color',
			siblings: [
				{
					color: "steelblue",
					name: 'morocan-blue',
				},
				{
					color: "#fff",
					name: 'white',
				},
				{
					color: "#f4c5d7",
					name: 'pink',
				},
			],
		},
	],
};

// component
function Product() {
	const [parameter, setParameter] = useState(initialState);
	const { bizType, b2bText, paperUnit, products } = parameter;
	return products.map(data => {
		// console.log(data.btnData);
		return (
			<ProductItem key={data.id}>
				<ModelVisual
					imgData={data.imgData}
					size={240}
					url={data.url}
					useTablet={false}
				/>
				<Siblings type={data.siblingsType} siblings={data.siblings} />
				<UserFreindleyName>{data.userFreindleyName}</UserFreindleyName>
				<ModelDispalyName>{data.modelDisplayName}</ModelDispalyName>
				<ModelSwitcher
					bizType={bizType}
					b2bText={b2bText}
					paperUnit={paperUnit}
					priceData={data}
				/>
				<CTA modelId={data.modelId} CTAData={data.btnData} />
			</ProductItem>
		);
	});
}

export default Product;
