/* There are two arrays with individual values, write a JavaScript program
to compute the sum of each individual index value from the given arrays
and save them to third array */

let mass1 = [5, 7, 13];
let mass2 = [7, 9, 11];
let sum = [];

for ( i = 0; i < mass1.length; i++ )
{
    sum[i] = mass1[i] + mass2[i]
}
console.log(sum);