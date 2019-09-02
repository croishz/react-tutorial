import React, { useState } from "react";
import styles from "./sample.module.scss";
import classnames from "classnames";

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

// component
function Checkbox({ children }) {
	const [check, setCheck] = useState(false);
	const onCheck = (event) => {
		setCheck(event.target.checked);
		// console.log(event.target.checked);
	}
	const oncheck_byClick = () => {
		setCheck(!check);
		// console.log(check);
	}
	return (
		// no include input
		<div className={classnames(styles.checkbox)}>
			<input type="checkbox" id="checkbox1" checked={check} onChange={onCheck} />
			<FontAwesomeIcon className={classnames(styles.uiElements)} icon={check ? ["fas", "check-square"] : ["far", "square"]} onClick={oncheck_byClick} />
			<label className={classnames(styles.uiElements)} htmlFor="checkbox1" aria-label={children}>{children}</label>
		</div>
	);
}

function ModuleCss() {
	return (
		<>
			<button
				className={classnames(styles.button_box, styles.uiElements)}
			>Button class is, <em>{styles.button_box}</em>
			</button>
			<Checkbox>가입에 동의합니다.</Checkbox>
		</>
	);
}

export default ModuleCss;
