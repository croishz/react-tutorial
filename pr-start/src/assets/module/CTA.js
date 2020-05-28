import React from 'react';
import styled from 'styled-components';
import {
	StyledBtn as DefaultBtn,
	PrimaryBtn,
	SecondaryBtn,
	BorderBtn,
} from './Button';

const ButtonArea = styled.div`
	margin-top: 20px;
	button + button,
	button + a,
	a + a,
	a + button {
		margin-top: 10px;
	}
`;

function CTA({ CTAData, modelId }) {
	const [btnSet1, btnSet2] = CTAData;
	return (
		<ButtonArea>
			{CTAData.map(idx => {
				if (idx === 0) {
				}
				if (idx === 1) {
				}
			})}
			<PrimaryBtn
				data-model-id={modelId}
				title={btnSet1.title}
				children={btnSet1.name}
				blocked
				isPrimary
			/>
			<BorderBtn
				as='a'
				role='button'
				href={btnSet2.linkUrl}
				target={btnSet2.linkSelf ? '_self' : '_blank'}
				data-model-id={modelId}
				title={btnSet2.title}
				children={btnSet2.name}
				blocked
			/>
		</ButtonArea>
	);
}

export default CTA;
