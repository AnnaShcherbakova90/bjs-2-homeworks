"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let x1;
	let x2;
	let disc = Math.pow(b, 2) - 4 * a * c

	if (disc < 0) {
		return arr;
	}

	if (disc == 0) {
		x1 = -b / (2 * a);
		arr.push(x1);
		return arr;
	}

	if (disc > 0) {
		x1 = (-b + Math.sqrt(disc)) / (2 * a);
		x2 = (-b - Math.sqrt(disc)) / (2 * a);

		arr.push(x1);
		arr.push(x2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	if (!checkAndConvert(percent) &&
		!checkAndConvert(contribution) &&
		!checkAndConvert(amount) &&
		!checkAndConvert(countMonths)) {
		return false;
	}

	let percentMonth = percent / 12 / 100;
	let borrowAmount = amount - contribution;
	let monthPayment = borrowAmount * (percentMonth + (percentMonth / ((Math.pow((1 + percentMonth), countMonths)) - 1)));
	let debtAmount = (monthPayment * countMonths).toFixed(2);

	return Number(debtAmount);

	function checkAndConvert(arg) {
		if (arg.isNaN) {
			if (typeof arg == "string") {
				return Number(arg);
			}
			return false;
		}
		return arg;
	}

}