////// 2.1 

////////// 1
// let str = '10110'

// for (let i = 0; i < str.length; i++)
// {
//    if (str[i] == '0'){
//     console.log(i)
//     break;
//    }
// }

////////// 2
// for (let i = 0; i < 1000; i++){
//     if (i >= 10){
//         str_i = String(i)
//         if (Number(str_i[0]) + Number(str_i[1]) == 5){
//             console.log(i)
//         }
//     }
// }


/////////// 3
// let n = 1
// let array = [1, 2, 1, 3]

// for (let i = 0; i < array.length-1; i++){
//     if (array[i] == n){
//         array.splice(i, 1)
//     }
// }
// console.log(array)


////////// 4
// let array = [1, 2, 3, 4, 5, 6]
// let sum = 0

// for (let i = 0; i < array.length/2; i++){
//     sum += array[i]
// }

// console.log(sum)

///////// 2.2 Andriyanov //////////

//////// 1
// let array = [-1, -2, 0, 1, 2];
// let sum = 0;

// for (let i = 0; i < array.length; i++){
//     if (array[i] < 0){
//         sum += 1
//     }
// }

// console.log(sum)

//////// 2
// let array = [-2, -1, 0, 1, 2]
// let result = []

// for (let i = 0; i < array.length; i++){
//     if (array[i] >= 0){
//         result.push(array[i])
//     }
// }

// console.log(result)

////// 3
// let str = '12345';
// let new_str = str.slice(0, -2) + str.slice(-1)
// console.log(new_str)

////// 4
// let array = [1, 2, 3, 4 ,5, 6]
// let sum1 = 0, sum2 = 0;

// for (let i = 0; i < array.length/2; i++){
//     sum1 += array[i]
//     sum2 += array[i+3]
// }

// console.log(sum1 / sum2)

/////////// 2.3 Andriyanov //////////

//// 1
// let word1 = 'abc', word2 = 'cba';
// let letter_last = word1.slice(-1)
// let letter_first = word2.slice(0, 1)

// if (letter_last == letter_first){
//     console.log('True')
// } else {
//     console.log('Flase')
// }

////// 2
// let str = ('101010'), num = 0, index;

// for (let i = 0; i < str.length; i++){
//     if (str[i] == '0'){
//         num += 1
//         if (num = 3){
//             index = i
//         }
//     }
// }

// console.log(index)

////// 3
// let str = '12,34,56', sum = 0;
// let array = str.split(',')

// for (let i = 0; i < array.length; i++){
//     sum += Number(array[i])
// }

// console.log(sum)

// ////// 4
// let str = '2025-12-31', obj = {}
// let array = str.split('-')


// obj['year'] = array[0]
// obj['month'] = array[1]
// obj['day'] = array[2]

// console.log(obj)

////////// 2.4 Andriyanov //////////

////// 1
// let str = String(+"fd1kri2".replace(/\D+/g,""))
// console.log(str[0])

////// 2
// let user = {
//     name: "User",
//     age: "17"
// }

// let array_keys = Object.keys(user)
// let array_values = Object.values(user)

// console.log(array_keys)
// console.log(array_values)

////// 3
// let num = 123456, sum = 0;
// let str_num = String(num);
// for (let i = 0; i < str_num.length; i++){
//     if (Number(str_num[i]) % 2 == 0){
//         sum += 1
//     }
// }

// console.log(sum)

////// 4
// let str = 'abcde', new_str = '';
// for (let i = 0; i < str.length; i++){
//     if (i % 2 == 0){
//         new_str += str[i].toUpperCase()
//     } else {
//         new_str += str[i]
//     }
// }

// console.log(new_str)

////// 5
// let str = 'aaa bbb ccc', array_str, new_str = '';
// array_str = str.split(' ')

// for (let i = 0; i < array_str.length; i++){
//      new_str += array_str[i][0].toUpperCase() + array_str[i].slice(1) + " ";
// }

// console.log(new_str)

////////// 2.5 Andriyanov //////////

////// 1
// let str = '023m0df0dfg0', array_null = [];
// for (let i = 0; i < str.length; i++){
//     if (str[i] == '0'){
//         array_null.push(i)
//     }
// }

// console.log(array_null)

////// 2
// let str = 'abcdefg', new_str = '';
// for (let i = 1; i < str.length+1; i++){
    
//     if (i % 3 != 0){
//         new_str += str[i-1]
//     }
// }

// console.log(new_str)

////// 3
// let array = [1, 2, 3, 4, 5, 6], sum1 = 0; sum2 = 0;

// for (let i = 1; i < array.length + 1; i++){
//     if (i % 2 == 0){
//         sum1 += array[i-1]
//     } else {
//         sum2 += array[i-1]
//     }
// }

// console.log(sum1 / sum2)

//////////// 2.6 Andriyanov //////////

////// 1

// let str = "1n4m6v7", array_num = [], array_index = [];
// array_num = String(+str.replace(/\D+/g,"")).split('')

// for (let i = 0; i < str.length; i++){
//     if (str[i] == array_num[0]){
//         array_index.push(i)
//         array_num.shift()
//     }
// }

// console.log(array_index)

////// 2

// let array = [123, 456, 789], array_new = [];
// for (let i = 0; i < array.length; i++){
//     let str = String(array[i])
//     array_new.push(Number(str.split("").reverse().join("")))
// }
// console.log(array_new)

////// 3
// let str = '1234567', str_new = [], str_last = []

// for (let i = str.length-1; i >= 0; i-=3)
// {   
//     let str_item = '';

//     str_item += str[i]

//     if (str[i-1] >= 0) {
//         str_item += str[i-1]
//     }

//     if (str[i-2] >= 0) {
//         str_item += str[i-2]
//     }

//     str_new.push(str_item)
// }

// let temporary = ''

// for (let i = 0; i < str_new.length; i++){
//     for (let j = str_new[i].length-1; j >= 0 ; j--){
        
//         temporary += str_new[i][j]
//     }
//     if (i < str_new.length-1){
//         temporary += ' '
//     }
// }

// str_last = temporary

// console.log(temporary.split(' ').reverse().join(' '))

////// 4
// let str = 'AbCdE', str_new = '';
// for (let i = 0; i < str.length; i++){
//     if (str[i] === str[i].toUpperCase()){
//         str_new += str[i].toLowerCase()
//     } else {
//         str_new += str[i].toUpperCase()
//     }
// }

// console.log(str_new)

////// 5
// let array = [1, 2, 3, 4, 5, 6], array_new = [];

// for(let i = 0; i < array.length; i+=2){
//     array_new.push(Number(String(array[i]) + String(array[i+1])))
// }

// console.log(array_new)

////// 6
// let str = 'aaa bbb ccc eee fff', str_array = str.split(' '), str_new = '';

// for (let i = 1; i < str_array.length+1; i++){
//     if (i % 2 == 0){
//         let temporary = '';
//         for (let j = 0; j < str_array[i].length; j++){
//             if (j == 0){
//                 temporary += str_array[i-1][j].toUpperCase()
//             } else {
//                 temporary += str_array[i-1][j]
//             }
//         }

//         str_new += temporary + ' '

//     } else {
//         str_new += str_array[i-1] + ' '
//     }
// }

// console.log(str_new)

////////// 2.7 Andriyanov //////////

////// 1
// let str = 'a bc def ghij', str_array = str.split(' '), str_new = '';

// for (let i = 0; i < str_array.length; i++){
//     if (str_array[i].length <= 3) {
//         str_new += str_array[i].toUpperCase() + " "
//     } else {
//         str_new += str_array[i] + " "
//     }
// }

// console.log(str_new)

////// 2
// function check_register(string) {
//     if (string == string.toUpperCase()) {
//         return 'Верхний регистор'
//     } else {
//         return 'Нижний регистор'
//     }
// }

// let str1 = 'a'; str2 = 'A';
// console.log(check_register(str1))
// console.log(check_register(str2))

////// 3
// let num = 123789, num_array = String(num).split(''), num_str = '';

// for (let i = 0; i < num_array.length; i++){
//     if (num_array[i] % 2 == 0){
//         num_str += num_array[i]
//     }
// }

// console.log(Number(num_str))

/////////// 2.8 Andriyanov //////////

////// 1
// let str = 'AAaa', str_array = str.split(''), sum = 0;
// for(let i = 0; i < str_array.length; i++) {
//     if (str_array[i] == str_array[i].toUpperCase()) {
//         sum += 1;
//     }
// }

// if (sum <= 2) {
//     console.log('True')
// } else {
//     console.log('False')
// }


////// 2
// let str = '1 22 333 4444 22 5555 1', str_array = str.split(' ');
// let str_new = '';

// for (let i = 0; i < str_array.length; i++) {
//     if (str_array[i].length < 4) {
//         str_new += str_array[i] + ' '
//     }
// }

// console.log(str_new)

// ////// 3
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// let arr_new = [];

// for (let i = 0; i < 2; i++){
//     arr_new.push(arr1[i])
// }

// for (let i = 0; i < 3; i++){
//     arr_new.push(arr2[i])
// }

// arr_new.push(arr1[2])

// console.log(arr_new)

////////// 2.9 Andriyanov //////////

////// 1
// let num = 123456, num_array = String(num).split('');
// let array_new = [], sum = 0;

// for (let i = 0; i < num_array.length; i+=2){
//     array_new.push(num_array[i] + num_array[i+1])
// }

// for (let i = 0; i < array_new.length; i++) {
//     sum += Number(array_new[i])
// }

// console.log(sum)

////// 2
// let array = [1, 2, 3, 4, 5];

// console.log(array.reverse())

////////// 2.10 Andriyanov //////////

////// 1
// function check_letters(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (/[a-zA-Z]/.test(str[i])) {
//             count += 1;

//             if (count > 3) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(check_letters('123asb'))
// console.log(check_letters('123asaa'))

////// 2
// let num = 12345, num_array = String(num).split('');
// let index = 0;

// for (let i = num_array.length; i >= 0; i--){
//     if (Number(num_array[i]) % 2 == 0) {
//         index = Number(num_array[i-1])
//         break;
//     }
// }

// console.log(index)

////// 3
// let str = 'abcde abcde abcde', str_array = str.split(' ');
// let str_new = '';

// for (let i = 0; i < str_array.length; i++) {
//     for (let j = 0; j < str_array[i].length; j++) {
//         if (j == 0) {
//             str_new += '!'
//         } else {
//             str_new += str_array[i][j]
//         }
//     }

//     if (i < 2) {
//         str_new += ' '
//     }
// }

// console.log(str_new)

////// 4
// let array = [1, 2, 3, 3, 4, 5], result = false, quantity = 0;

// for (let i = 0; i < array.length; i++)
// {   
//     quantity = 0;

//     for (let j = 0; j < array.length; j++)
//     {   
//         if (array[i] === array[j])
//         {
//             quantity += 1;
//         } 

//         if (quantity > 1) {
//             result = true 
//             break;  
//         }
//     }
// }

// console.log(result)