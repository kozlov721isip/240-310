//Вложенные функции

//240
/*
№1


*/
// "use strict";
// function test(func1, func2, func3){
//     console.log(func1()+func2()+func3())
// }
// test(function(){return 1}, function(){return 2}, function(){return 3})

//241
/*
№1


*/
// "use strict";
// function test(func1, func2, func3){
//     console.log(func1()+func2()+func3())
// }
// test(
//     function(){return 1;},
//     function(){return 2;},
//     function (){return 3;}
// )

/*
№2


*/
// "use strict";
// function func1(){
//     return 1;
// }
// function func2(){
//     return 2;
// }
// function func3(){
//     return 3;
// }
// function test(func1, func2, func3){
//    console.log(func1()+func2()+func3())
// }
// test(func1, func2, func3)

/*
№3


*/
// "use strict";
// let ret1 = function(){
//     return 1;
// }
// let ret2 = function(){
//     return 2;
// }
// let ret3 = function(){
//     return 3;
// }
// let test = function(func1, func2, func3){
//     console.log(func1()+func2()+func3())
// }
// test(ret1, ret2, ret3)


//242
/*
№1


*/
// "use strict";
// test(function(num) {
// 	return Math.pow(num, 3);
// });

// function test(func) {
// 	console.log(func(3));
// }

/*
№2


*/
// "use strict";
// test(function func(num){
// 	return Math.pow(num, 3);
// });

// function test(func) {
// 	console.log(func(3));
// }

/*
№3


*/
// "use strict";
// let func = function(num){
// 	return Math.pow(num, 3);
// }
// test(func);
// function test(func) {
// 	console.log(func(3));
// }

/*
№4


*/
// "use strict";
// function test(f1, f2){
//     console.log(f1()+f2())
// }
// test(
//     function(){return 2},
//     function(){return 3}
// )

//243
/*
№1


*/
// "use strict";
// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }
// function f1(num){
// 	return Math.pow(num, 2)
// }
// function f2(num){
// 	return Math.pow(num, 3)
// }
// console.log(test(3, f1,  f2))

//244
/*
№1


*/
// "use strict";
// function test(arr, func){
// 	for (let i=0; i<arr.length; i++){
// 		arr[i]=func(arr[i]);
// 	}
// 	return arr;
// }
// let result = test([1, 2, 3], function(num){
// 	return num*num;
// })
// console.log(result)

/*
№2


*/
// "use strict";
// function test(arr, func){
// 	for (let i=0; i<arr.length; i++){
// 		arr[i]=func(arr[i]);
// 	}
// 	return arr;
// }
// let result = test([1, 2, 3], function(num){
// 	return num*num*num;
// })
// console.log(result)

//245
/*
№1


*/
// "use strict";
// function func(num1, num2){
// 	function square(num){
// 		return num*num;
// 	}
// 	function cube(num){
// 		return num*num*num
// 	} 
// 	return square(num1) + cube(num2);
// }
// console.log(func(2,3))

//246
/*
№1


*/
// "use strict";
// function func1(){
// 	return function(){
// 		return 1
// 	}
// }
// function func2(){
// 	return function(){
// 		return 2
// 	}
// }
// console.log(func1()()+func2()())

//251
/*
№1


*/
// "use strict";
// function func(){
// 	return function(){
// 		return function(){
// 			return function(){
// 				return function(){
// 					return '!'
// 				}
// 			}
// 		}
// 	}
// }
// console.log(func()()()()())

//252
/*
№1


*/
// "use strict";
// function func(num1){
// 	return function(num2){
// 		return function(num3){
// 			return num1+num2+num3;
// 		}
// 	}
// }
// console.log(func(2)(3)(4))

/*
№2


*/
// "use strict";
// function func(num1){
// 	let arr=[]
// 	arr.push(num1)
// 	return function(num2){
// 		arr.push(num2)
// 		return function(num3){
// 			arr.push(num3)
// 			return function(num4){
// 				arr.push(num4)
// 				return function(){
// 					return arr
// 				}
// 			}
// 		}
// 	}
// }
// console.log(func(2)(3)(4)(5)())


//253
/*
№1


*/
// "use strict";
// function each(arr, callback){
// 	for(let i=0; i<arr.length; i++){
// 		arr[i]=callback(arr[i])
// 	}
// 	return arr
// }
// console.log(each([1, 2, 3], function (num){
// 	return num*2
// }))

/*
№2


*/
// "use strict";
// function each(arr, callback) {
// 	let result = [];
// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }
// console.log(each(['afc', 'bol', 'cok', 'ljjmod'], function(str){
// 	return str.split('').reverse().join('')
// }))

/*
 №3


*/
// "use strict";
// function each(arr, callback) {
// 	let result = [];
// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }
// console.log(each(['afc', 'bol', 'cok', 'ljjmod'], function(str){
// 	let s=str.split('').reverse().join('')
// 	return s.toUpperCase()[0]+s.substring(1)
// }))

//254
/*
№1



*/
// "use strict";
// function cube(num) {
// 	return num ** 3;
// }
// function each(arr, callback){
// 	for(let i=0; i<arr.length; i++){
// 		arr[i]=callback(arr[i])
// 	}
// 	return arr
// }
// console.log(each([1, 2, 3, 4], cube))

//256
/*
№1


*/
// "use strict";
// function filter(arr, callback) {
// 	let res = [];

// 	for (let elem of arr) {
// 		if ( callback(elem) === true ) {
// 			res.push(elem);
// 		}
// 	}
	
// 	return res;
// }
// let result = filter([1, 2, 3, 4, 5], elem => elem > 0);
// console.log(result)



//Замыкания
/*
№1


*/
// "use strict";
// function test(){
// 	let num=1
// 	return function(){
// 		console.log(num)
// 		num++
// 	}
// }
// let func=test()
// func()
// func()
// func()

/*
№2


*/
// "use strict";
// function test(){
// 	let num=10
// 	return function(){
// 		console.log(num)
// 		num--
// 	}
// }
// let func=test()
// func()
// func()
// func()

/*
№3


*/
// "use strict";
// function test(){
// 	let num=10
// 	return function(){
// 		if(num>=0){
// 			console.log(num)
// 		    num--
// 		}else{
// 			console.log('отсчет окончен')
// 		}
// 	}
// }
// let func=test()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()

//269
/*
№1


*/
// "use strict";
// (function() {
// 	return function(){
// 		return function(){
// 			console.log('!')
// 		}
// 	}
// })()()();

/*
№2



*/
// "use strict";
// (function(num1) {
// 	let sum=0
// 	return function(num2){
// 		console.log(num1+num2)
// 	}
// })(1)(2);

/*
№3


*/
// "use strict";
// (function(num1) {
// 	let sum=0
// 	return function(num2){
// 		return function(num3){
// 			console.log(num1+num2+num3)
// 		}
// 	}
// })(1)(2)(3);

//272
/*
№1


*/
// "use strict";
// let result=(function(){
// 	let num=1;
// 	return function(){
// 		console.log(num)
// 		num++;
// 	}
// }())
// result()
// result()

/*
№2


*/
// "use strict";
// let result=(function(){
// 	let num=1;
// 	return function(){
// 		if(num==6){
// 			num=1;
// 		}else{
// 		    console.log(num)
// 		    num++;
// 		}
// 	}
// }())
// result()
// result()
// result()
// result()
// result()
// result()
// result()
// result()
// result()


//274
/*
№1


*/
// "use strict";
// let func=(arr)=>{
// 	console.log(arr.shift())
// 	if(arr.length!=0) func(arr)
// }
// func([1,2,3])

//275
/*
№1


*/
// "use strict";
// let summ=0
// function func(arr) {
// 	summ+=arr.shift()**2;
	
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// 	return summ
// }

// console.log(func([1, 2, 3, 4, 5]));

//275
/*
№1


*/
// "use strict";
// function getSum(arr) {
// 	let sum = arr.shift()**2;
	
// 	if (arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
	
// 	return sum;
// }

// console.log(getSum([1, 2, 3, 4, 5]));

//276
/*
№1


*/
// "use strict";
// function func(ob){
// 	for(let key in ob){
// 		if(typeof(ob[key])=='object'){
// 			continue
// 		}else{
// 			console.log(ob[key])
// 		}
// 	}
// }
// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})

/*
№2


*/
// "use strict";
// let arrnew=[];
// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			arrnew.push(elem);
// 		}
// 	}
// 	return arrnew
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]))

//278
/*
№1


*/
// "use strict";
// function func(arr){
// 	for (let i=0; i<arr.length; i++){
// 		if(typeof arr[i] == 'object'){
// 			func(arr[i])
// 		}else{
// 			arr[i]**=2
// 		}
// 	}
// 	return arr;
// }
// console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]))


//Перебирающие методы
//279
/*
№1


*/
// "use strict";
// let arrnew=[2, 4, 9, 10].map((elem)=> Math.sqrt(elem))
// console.log(arrnew)

/*
№2


*/
// "use strict";
// console.log([2, 3, 5, 8].map((elem)=>elem+"!"))

/*
№3


*/
// "use strict";
// console.log(["abc", "ert", "fgg"].map((elem)=>elem.split('').reverse().join('')))

/*
№4


*/
// "use strict";
// let arr = ['123', '456', '789'];
// console.log(arr.map((elem)=>elem.split('').map((elem)=>Number(elem))))

/*
№5


*/
// "use strict";
// console.log([1, 6, 9].map((elem, index)=>elem*index))


//280
/*
№1


*/
// "use strict";
// let sum=0;
// [1, 2, 3].forEach((elem)=>{
// 	sum+=elem**2
//      return sum; 
// })
// console.log(sum)

//281
/*
№1


*/
// "use strict";
// console.log([1, -1, 4, 6, -9, -7].filter(elem=>elem>=0))

/*
№2


*/
// "use strict";
// console.log([1, -1, 4, 6, -9, -7].filter(elem=>elem<=0))

/*
№3


*/
// "use strict";
// console.log([1, -1, 40, 6, -9, -7].filter(elem=>elem>0 && elem<10))

/*
№4


*/
// "use strict";
// console.log(['utgo', 'ufiufivvi', 'juvivbio', 'g', 'jvuob'].filter(elem=>elem.length>5))

/*
№5


*/
// "use strict";
// console.log([1, 16, 3, 41, -7].filter((elem, index)=>(elem*index)<30))

/*
№6


*/
// "use strict";
// console.log([1, 2, [3, 4], 5, [6, 7]].filter(elem=>typeof elem !== 'object'))

//282
/*
№1


*/
// "use strict";
// console.log([1, -1, 4, 6, -9, -7].every(elem=>elem>0))

/*
№2


*/
// "use strict";
// console.log([1, 15, 4, 6, -9].every((elem, index)=>elem*index<30))

//283
/*
№1


*/
// "use strict";
// console.log([1, 15, 4, -6, -9].some(elem=>elem>0))

/*
№2


*/
// "use strict";
// console.log([1, 15, 40, -6, -9].some((elem, index)=>elem*index>30))


//Оператор spread
//286
/*
№1


*/
// "use strict";
// let arr = [1, 2, 3, 4, 5];

// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr))

//288
/*
№1


*/
// "use strict";
// let arr = [1, 2, 3, 4, 5]
// console.log(Math.min(...arr));


//Оператор rest
/*
№1


*/
// "use strict";
// function func(...numb){
// 	let sum=0;
// 	let cout=0;
// 	for(let elem of numb){
// 		sum+=elem
// 		cout++
// 	}
// 	return sum/cout;
// }
// console.log(func(1, 2, 3, 4, 5, 10))


//Деструктуризация массивов
//296
/*
№1


*/
// "use strict";
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary]=arr;

//297
/*
№1


*/
// "use strict";
// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let [name, surname, department, position, salary] = func();

//298
/*
№1


*/
// "use strict";
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [, , department, position,]=arr;

//300
/*
№1


*/
// "use strict";
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...info]=arr;

//301
/*
№1


*/
// "use strict";
// let arr = ['John', 'Smit', 'development', 'programmer'];
// let [name, surname, department, position='trainee']=arr;

//304
/*
№1


*/
// "use strict";
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color, width, height} = options;

//305
/*
№1


*/
// "use strict";
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color: c, width: w, height: h}=options;

//306
/*
№1


*/
// "use strict";
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color = 'black', width, height}=options;

//307
/*
№1


*/
// "use strict";
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color: c = 'black', width: w, height: h}=options;

//309
/*
№1


*/
// "use strict";
// function func([name, surname, department, position, salary]) {
// 	console.log(name);
// 	console.log(surname);
// 	console.log(department);
// 	console.log(position);
// 	console.log(salary);
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

/*
№2


*/
// "use strict";
// function func([name, surname, info, ...rest]) {
// 	console.log(name)
// 	console.log(surname)
// 	console.log(info)
// 	console.log(...rest)
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

/*
№3


*/
// "use strict";
// function func([name, surname, department, position = 'джуниор']) {
// 	console.log(name);
// 	console.log(surname);
// 	console.log(department);
// 	console.log(position);
// }

// func( ['John', 'Smit', 'development'] );

/*
№4


*/
// "use strict";
// function func(department, employee, hired) {
// 	let [name, surname]=employee;
// 	console.log(name);
// 	console.log(surname);
// 	let [year, month, day]=hired;
// 	console.log(year);
// 	console.log(month);
// 	console.log(day);
// }

// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

//310
/*
№1


*/
// "use strict";
// function func({color, width, height}) {
// 	console.log(color);
// 	console.log(width);
// 	console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} );

/*
№2


*/
// "use strict";
// function func({color='black', width, height}) {
// 	console.log(color);
// 	console.log(width);
// 	console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} );