import React from "react";

function DateWindow() {
	const date = new Date();
	const timeConvetion = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const weekend = [
		"일요일",
		"월요일",
		"화요일",
		"수요일",
		"목요일",
		"금요일",
		"토요일",
	];
	const time = date.toLocaleDateString("ko-KR", timeConvetion);
	const weekday = weekend[date.getDay()];
	return (
		<div>
			<strong className="today">{time}</strong>{" "}
			<span className="day_of_week">{weekday}</span>
		</div>
	);
}

export default DateWindow;
