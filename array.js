//Array.from()  создаёт новый экземпляр Array из массивоподобного или итерируемого объекта. 
// let str1 = "some";
// let arr1 = Array.from(str1);
// let obj1 = {
//     num:1,
//     name:"mike"
// }
// let arr2 = Array.from(obj1);

// console.log(arr1);
// console.log(arr2);


//Array.isArray()  возвращает true, если объект является массивом и false, если он массивом не является.
// let str2 = "sidjsdj";
// let obj2 = {
//     name:"djfkdjf",
//     num:1
// }
// let arr3 = ["2",3,{},[3]]
// console.log(Array.isArray(str2))
// console.log(Array.isArray(obj2))
// console.log(Array.isArray(arr3))


// Array.of() создаёт новый экземпляр массива Array из произвольного числа аргументов, вне зависимости от числа или типа аргумента.
// let str3 = "okfdokf"
// let obj3 = {
//     name:'yoiyot',
//     num:5
// }
// let arr4 = ["233",4]
// let arr5 = Array.of(str3,obj3,arr4)
// console.log(arr5)


//array.concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.
// let arr6 = ['sdas',4,{}]
// let arr7 = ["nike",5,{num:6}]
// let arr8 = arr6.concat(arr7)
// console.log(arr8)


//array.copyWithin() копирует последовательность элементов массива внутри него в позицию, начинающуюся по индексу target
// let arr = [1,3,5,7,9]
// console.log(arr.copyWithin(0,1,2))
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 5))


// array.entries() возвращает новый объект итератора массива Array Iterator, содержащий пары ключ / значение для каждого индекса в массиве.
// let arr = [1,2,3]
// let earr =  arr.entries()


//array.every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
// let arr = [1,4,"dsdsdsd"];
// let arr2 = [1,4,5];
// let func = function(a) {
//     if(a.every(elm => typeof elm == 'number' )) {
//         return 'its number array'
//     }
//     return 'its not a number array'
    
// } 
// console.log(func(arr))


//array.fill() заполняет все элементы массива от начального до конечного индексов одним значением.

// let arr = [1,1,1];
// let arr1 = [1,2,3];
// let arr2 = ['mike','jhon','Vadim']
// let newarr = arr.fill(6)
// let sarr = arr1.fill(4,2)
// let garr = arr2.fill('mike',1)
// console.log(newarr);
// console.log(sarr);
// console.log(garr);


//array.find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. 
// let arr = [,2,3,5,7,9,120,13]
// console.log(arr.find(elm => elm >= 10))


//array.flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
// let arr = [1,3,[13],[[12]],[1,2,[34]]]
// let newarr = arr.flat(2)
// console.log(newarr)


//array.join() объединяет все элементы массива (или массивоподобного объекта) в строку.
// let arr = ['sdad','its','some','shit']
// let arr2 = arr.join()

// let arr = [1,2,4,5]

// let p = new Promise((resolve,reject) => {
//     resolve('some')
// })

// let newarr = arr.forEach(ellm => {
//     p.then(value => {
//         console.log(value)
//     })
// })




