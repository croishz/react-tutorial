import React from 'react';
import styled, { css } from 'styled-components';
import { colorAsset as _C } from '../styled';

// #d22e63
const btnAnimation = (type, color) => {
	if (type === 'border') {
		return `transition: ${type} 300ms ease, color 300ms ease; &:hover, &:focus { color: ${color}; ${type}-color: ${color}; }`;
	}
	return `transition: ${type} 300ms ease; &:hover, &:focus { ${type}-color: ${color}; }`;
};
const type = props => {
	if (props.as === 'a') {
		return { href: '#' };
	} else if (props.as === '' || props.as === undefined) {
		return { type: 'button' };
	} else {
		return {};
	}
};
const StyledBtn = styled.button.attrs(type)`
	cursor: pointer;
	display: inline-block;
	vertical-align: middle;
	width: ${props => props.blocked && '100%'};
	margin: ${props => (props.blocked ? '0' : '0 5px')};
	min-width: 100px;
	padding: ${props => (props.lg ? '15px 20px 14px' : '11px 20px')};
	box-sizing: border-box;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 13px;
	line-height: 1em;
	font-weight: 600;
	background-color: ${props => (props.isPrimary ? _C.master : _C.gray)};
	color: ${_C.white};
	${props =>
		props.isDisabled &&
		css`
			color: ${_C.gray};
			background-color: ${_C.white};
			border-color: '#333';
		`}
	border:none;
	border-radius: 0.25em;
`;
const PrimaryBtn = styled(StyledBtn)`
	background-color: ${_C.master};
	${btnAnimation('background', '#d22e63')}
`;
const SecondaryBtn = styled(StyledBtn)`
	background-color: ${_C.gray};
	${btnAnimation('background', '#c9c9c9')}
`;
const BorderBtn = styled(StyledBtn)`
	background-color: ${_C.white};
	color: ${props => (props.isPrimary ? _C.master : _C.gray)};
	border-color: ${props => (props.isPrimary ? _C.master : _C.gray)};
	border-style: solid;
	border-width: 1px;
	${btnAnimation('border', '#000')}
`;

export { StyledBtn, PrimaryBtn, SecondaryBtn, BorderBtn };
