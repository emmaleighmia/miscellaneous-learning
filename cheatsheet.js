// basic types
var string = "text";
var number = 1;
var trueOrFalse = true;

// still basic, but more complex
var array = [];
var object {};

// there are also some strange Non values. You can basically treat them the same
var nothing = null;
var alsoNothing = undefined;

// objects and arrays have values of any of the other types
var arrayOfNumbers = [1,2,3];
var objectWithNumbers = { one: 1, two: 2, three: 3}

// you access the elements of arrays by the blocky characters and an index
arrayOfNumbers[0] // is the first item in `arrayOfNumbers`
arrayOfNumbers[1] // is the second item

// access object sub items via dot notation
objectWithNumbers.one // is `1`, etc

// if you access a key or index of an array or object that doesnt exist, you get `undefined`
objectWithNumbers.notThere // is undefined
arrayOfNumbers[10] // is undefined

// they can even have themselves inside each other, ad infinitum
[{
	subarray: [
		[1,2,3],
		[1,2,3]
	]
}]

// and then there are functions. Functions take variable arguments and return a single value, 
// they are basically transformations of input to output

function squared(number) {
	return number * number;
}

// functions ARE ALSO VALUES! i.e. you can store them in variables, return them from functions, and store them inside objects or arrays


// 

