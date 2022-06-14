const findSum = function (array) {
	return array.reduce((previous, current) => previous + current);
};

const findFrequency = function (array) {
	let obj = array.reduce((prev, curr) => {
		return prev[curr] ? prev[curr]++ : (prev[curr] = 1), prev;
	}, {});

	let max = Object.keys(obj).find(
		(key) => obj[key] === Math.max(...Object.values(obj))
	);
	let min = Object.keys(obj).find(
		(key) => obj[key] === Math.min(...Object.values(obj))
	);

	return { most: max, least: min };
};

const isPalindrome = function (str) {
	return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
};

const largestPair = function (arr) {
	let product = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] * arr[i - 1] > product) {
			product = arr[i] * arr[i - 1];
		}
	}
	return product;
};

const removeParenth = function (str) {
	let str1 = str.slice(0, str.indexOf("("));
	let str2 = str.slice(str.indexOf(")") + 1, str[-1]);

	return str1.concat(str2);
};

const scoreScrabble = function (str) {
	letterScore = {
		a: 1,
		b: 3,
		c: 3,
		d: 2,
		e: 1,
		f: 4,
		g: 2,
		h: 4,
		i: 1,
		j: 8,
		k: 5,
		l: 1,
		m: 3,
		n: 1,
		o: 1,
		p: 3,
		q: 10,
		r: 1,
		s: 1,
		t: 1,
		u: 1,
		v: 4,
		w: 4,
		x: 8,
		y: 4,
		z: 10,
	};
	let arr = str.split("");
	let answer = arr.reduce((acc, element) => {
		for (letter in letterScore) {
			if (element === letter) {
				return (acc += letterScore[letter]);
			}
		}
	}, 0);
	return answer;
};

// console.log(findFrequency(["a", "b", "c", "a", "b", "c", "a", "a", "d"]));
// console.log(isPalindrome("canal")); // false
// console.log(isPalindrome("Ana")); // true
// console.log(largestPair([5, 1, 2, 3, 1, 4])); // 6
// console.log(largestPair([9, 5, 10, 2, 24, -1, -48])); // 50
// console.log(removeParenth("ido(not)liketocode")); // 'idoliketocode'
// console.log(scoreScrabble("hello")); // 8
// console.log(scoreScrabble("quiet")); // 14
