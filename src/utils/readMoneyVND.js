import { ones } from "./constants";

const readTriple = (num) => {
	let hundred = Math.floor(num / 100);
	let ten = Math.floor((num % 100) / 10);
	let unit = num % 10;
	let result = "";

	if (hundred !== 0) {
		result += `${ones[hundred]} trăm`;
	}

	if (ten !== 0 && ten !== 1) {
		result += ` ${ones[ten]} mươi`;
		if (unit === 1) result += " mốt";
		else if (unit === 5) result += " lăm";
		else if (unit !== 0) result += ` ${ones[unit]}`;
	} else if (ten === 1) {
		result += " mười";
		if (unit === 5) result += " lăm";
		else if (unit !== 0) result += ` ${ones[unit]}`;
	} else if (ten === 0 && unit !== 0) {
		result += ` ${ones[unit]}`;
	}

	return result.trim();
};

export const readMoneyVND = (number) => {
	number = parseInt(number);
	if (number === 0) return "Không đồng";

	const units = ["", "nghìn", "triệu", "tỷ"];
	let result = "";
	let i = 0;

	while (number > 0) {
		const part = number % 1000;
		if (part !== 0) {
			let partStr = readTriple(part);
			if (units[i]) partStr += ` ${units[i]}`;
			result = `${partStr} ${result}`.trim();
		}
		number = Math.floor(number / 1000);
		i++;
	}

	result = result.charAt(0).toUpperCase() + result.slice(1);
	return `${result} đồng`;
};

export default readMoneyVND;
