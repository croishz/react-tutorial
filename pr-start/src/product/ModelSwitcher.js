import React, { useCallback } from 'react';
import styled from 'styled-components';

// style
const PriceArea = styled.div`
	display: block;
	//padding: 8px 10px;
	//border: 1px solid #cecece;
	margin: 5px 4px;
	font-size: 16px;
	line-height: 1.3em;
`;
const LineAlign = styled.div`
	display: inline-block;
	vertical-align: middle;
	text-align: left;
	&:first-child + & {
		padding-left: 10px;
	}
`;
const Legal = styled.div`
	color: #d22525;
	font-weight: 600;
	margin-top: -2px;
`;
const SellPrice = styled.div`
	font-weight: 600;
`;
const DelPrice = styled.del`
	color: hsl(0, 0%, 50%);
`;
const Promotion = styled.div`
	font-size:0.875em;
	font-weight: 600;
	margin-top: 7px;
`;

// component
function PurchasePrice({ paperUnit, price }) {
	return (
		<SellPrice>
			{price ? paperUnit : ''}
			{price}
		</SellPrice>
	);
}

function PreviousPrice({ paperUnit, price, discountSet }) {
	const { type, protage, margin } = discountSet;
	return (
		<>
			<DelPrice aria-label='Previous price'>{paperUnit + price}</DelPrice>
			<Legal>
				{type === 'MARGIN'
					? 'Save ' + paperUnit + margin
					: protage + '% Off'}
			</Legal>
		</>
	);
}

function ModelSwitcher({ bizType, b2bText, paperUnit, priceData }) {
	const { price, discount, promotionText } = priceData;
	const discountSet = {
		type: 'MARGIN',
		protage: 0,
		margin: 0,
	};

	const priceFilter = value => {
		return parseInt(value.replace(',', ''));
	};

	const priceGapCalculator = useCallback(
		(set) => {
			let naturePrice = priceFilter(price);
			let natureDiscount = priceFilter(discount);
			if (set.type === 'MARGIN') {
				set.margin = (naturePrice - natureDiscount) + '.00';
			} else {
				set.protage = Math.floor(
					(1 - natureDiscount / naturePrice) * 100,
				);
			}
			return set
		},
		[discountSet],
	);

	if (bizType === 'b2b') {
		if (price) {
			return (
				<PriceArea>
					<LineAlign>MRSP</LineAlign>
					<LineAlign>
						<PurchasePrice price={price} paperUnit={paperUnit} />
					</LineAlign>
				</PriceArea>
			);
		}
		return <PriceArea>{b2bText}</PriceArea>;
	} else {
		if (price) {
			return (
				<PriceArea>
					<LineAlign>
						<PurchasePrice price={discount} paperUnit={paperUnit} />
					</LineAlign>
					<LineAlign>
						<PreviousPrice
							price={price}
							paperUnit={paperUnit}
							discountSet={priceGapCalculator(discountSet)}
						/>
					</LineAlign>
					<Promotion>{promotionText}</Promotion>
				</PriceArea>
			);
		} else {
			return null;
		}
	}
}
export default ModelSwitcher;
