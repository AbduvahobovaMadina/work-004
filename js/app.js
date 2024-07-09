{
    // 1.Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
    function repeatStr (n, s) {
        return s.repeat(n)
      }
    //   console.log(repeatStr(3, "*")); // *** 
}
{
    // 2.You get an array of numbers, return the sum of all of the positives ones.

    function positiveSum(arr) {
        let sum = 0;
      
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 0) {
            sum += arr[i];
          }
        }
      
        return sum;
      }

    //   console.log(positiveSum([1,2,3,4,5]));//15
}
{
    // 3. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
    
    function removeChar(str){
        //You got this!
         return str.slice(1, -1)
       
    }
    // console.log(removeChar('eloquent'));//loquen
}
{
    // 4. Complete the square sum function so that it squares each number passed into it and then sums the results together.
    function squareSum(numbers){
        return  numbers.reduce((sum, num) => sum + num * num, 0);
    }
    // console.log(squareSum([1,2]));// 5
}
{
    // 5.Given an array of integers your solution should find the smallest integer.
    function findSmallestInt(arr) {
        return Math.min( ...arr);
        // arr.sort((a,b) => a - b)
        // return `${arr[0]}`
      }
    //   console.log(findSmallestInt([78,56,232,12,8]));// 8
    //   console.log(findSmallestInt([78,56,232,-12,18]));// -12
}

{
    // 6.Note: This kata is inspired by Convert a Number to a String!. Try that one too.

    const stringToNumber = function(str){
        // put your code here
        return parseInt(str)
      }

    //   console.log(stringToNumber("1234"));//1234
}
{
    // 7.Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
    // var summation = function (num) {
        function summation(num) {
            return num * (num + 1) / 2
          }
    //     let sum = 0
    //     for (let i = 1; i <= num; i++) {
    //         sum += i;
    //     }
    //     return sum;
    //   }
    // console.log(summation(8)); // 36 
}

{
    // 8.
    function countSheeps(sheep) {
        // TODO
       return sheep.filter(qoy => qoy).length 
      }
    //   console.log(countSheeps([undefined,null,false,true, true])); //2
}

{
    // 9.Write a function that removes the spaces from the string, then return the resultant string.
    function noSpace(x){
        let result = "";
        for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            result += x[i];
        }
    }
    return result;
      }

    //   console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));//8j8mBliB8gimjB8B8jlB
}
{
    // 10.Code as fast as you can! You need to double the integer and return it.
    function doubleInteger(i) {
        // i will be an integer. Double it and return it.
        return i * 2;
      }
    //   console.log(doubleInteger(9));//18

}
{
    // 11.Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
    function greet(name){
        //your code here
        return `Hello, ${name} how are you doing today?`
      }
    //   console.log(greet("Madina"));
    //   console.log(greet("Laylo"));
}


{
    // 12.Implement a function which convert the given boolean value into its string representation.
    function booleanToString(b){
        //your code here
        return b.toString()
      }

    //   console.log(booleanToString(true));
}
{
    // 13.Your task is to create a function that does four basic mathematical operations.
    function basicOp(operation, value1, value2){
        //Code
          switch (operation) {
              case '+':
                  return value1 + value2;
              case '-':
                  return value1 - value2;
              case '*':
                  return value1 * value2;
              case '/':
                  if (value2 !== 0) {
                      return value1 / value2;
                  } else {
                      return "Division by zero is not allowed.";
                  }
              default:
                  return "Invalid operator";
          }
      }
// console.log(basicOp("+", 4, 7));//11
}


{
    // 14.Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
    function litres(time) {
        return 0;
      }

      
}
