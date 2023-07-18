console.log('Connected and ready!');

function printEven(until) {
  let arr = [];
  for (let i = 0; i < until + 1; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  console.log('Even Numbers: ' + arr);
}

printEven(20);

function printFibonacci(until) {
  let num1 = 0;
  let num2 = 1;
  let arr = [0, 1];
  for (let i = 0; i < until; i++) {
    let next = num1 + num2;
    num1 = num2;
    num2 = next;
    arr.push(next);
  }
  console.log('Fibonacci: ' + arr);
}

printFibonacci(10);

function arrayAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log('Array Average: ' + total / arr.length);
}

arrayAverage([1, 2, 3, 4, 5, 6]);

// The spread (...) syntax allows an iterable, such as an array or string,
// to be expanded in places where zero or more arguments
// (for function calls) or elements (for array literals) are expected.

function printMax(arr) {
  console.log('Array Max: ' + Math.max(...arr));
}

printMax([1, 2, 4, 55]);

function printMin(arr) {
  console.log('Array Min: ' + Math.min(...arr));
}

printMin([1, 2, 4, 55]);

function numberOfVowels(word) {
  let arr = Array.from(word);
  let arr2 = arr.filter((x) => 'aeiou'.includes(x));
  console.log('Number of Vowels: ' + arr2.length);
}

numberOfVowels('Cameron');

function addTwoNumbers(num1, num2) {
  let answer = num1 + num2;
  console.log('Addition of Two numbers: ' + answer);
}

addTwoNumbers(2, 16);

function multiplyTwoNumbers(num1, num2) {
  let answer = num1 * num2;
  console.log('Sum of Two numbers: ' + answer);
}

multiplyTwoNumbers(2, 16);

function getPostalCode(city) {
  switch (city) {
    case 'johannesburg':
      console.log('Postal Code: ' + 1501);
      break;
    case 'cape town':
      console.log('Postal Code: ' + 2113);
      break;
    default:
      console.log('No matching cities');
      break;
  }
}

getPostalCode('cape town');

function sortAlphabetically(arr) {
  let arr2 = arr.sort((a, b) => a.localeCompare(b));
  console.log('Alphabetized List: ' + arr2);
}

sortAlphabetically(['cam', 'ben', 'jess']);

function sortNumbers(arr, direction) {
  if (direction == 'ASC') {
    let arr2 = arr.sort((a, b) => a - b);
    console.log('Ascending List: ' + arr2);
  } else {
    let arr2 = arr.sort((a, b) => b - a);
    console.log('Descending List: ' + arr2);
  }
}

sortNumbers([1, 0, 3, 6, 7, 4, 2], 'ASC');
sortNumbers([1, 0, 3, 6, 7, 4, 2], 'DESC');

function reverseNumber(number) {
  let stringNumber = number.toString();
  let reversed = stringNumber.split('').reverse().join('');
  console.log('Reversed Number: ' + Number(reversed));
}

reverseNumber(1234);

function capitalizeSentence(sentence) {
  let arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  let capitalisedSentence = '';
  for (let i = 0; i < arr.length; i++) {
    capitalisedSentence += ' ' + arr[i];
  }
  console.log('Capitalised sentence: ' + capitalisedSentence);
}

capitalizeSentence('hello this is a sentence');

function returnOccurances(word, letter) {
  let total = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
      total += 1;
    }
  }
  console.log(`${letter} occurs ${total} times`);
}

returnOccurances('because', 'e');

function filterWord(arr, word) {
  let filteredArr = arr.filter((x) => x !== word);
  console.log('Filtered Array: ', filteredArr);
}

filterWord(['hey', 'hello', 'hi'], 'hi');

function filterNumber(arr, number) {
  let filteredArr = arr.filter((x) => x !== number);
  console.log('Filtered Array: ', filteredArr);
}

filterWord([1, 2, 3, 56, 10], 10);

function filterById(arr, id) {
  let filteredArr = arr.filter((x) => x.id !== id);
  console.log('Filtered Array: ', filteredArr);
}

let objArr = [
  {
    id: 0,
    name: 'Cam',
  },
  {
    id: 1,
    name: 'Jess',
  },
  {
    id: 2,
    name: 'Michelle',
  },
];

filterById(objArr, 1);

function returnById(arr, id) {
  let foundItem = arr.find((x) => x.id === id);
  console.log('Found item: ', foundItem);
}

returnById(objArr, 1);

function printDate() {
  let now = new Date();
  day = now.getDay();
  month = now.getMonth();
  year = now.getFullYear();
  console.log(
    'Todays Date: ' + now.getUTCDate() + '/' + (month + 1) + '/' + year
  );
}

printDate();

let objArr2 = [
  {
    id: 0,
    name: 'Cam',
    goals: 23,
  },
  {
    id: 1,
    name: 'Jess',
    goals: 4,
  },
  {
    id: 2,
    name: 'Michelle',
    goals: 33,
  },
];

function filterByValueTen(arr, id) {
  let filteredArr = arr.filter((x) => x.goals > id);
  console.log('Filtered Array: ', filteredArr);
}

filterByValueTen(objArr2, 10);
