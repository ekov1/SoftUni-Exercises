/*
Assign Properties

Write a JS function that composes an object by given properties. 
There will be 3 sets of property-value pairs (a total of 6 elements). 
Assign each value to its respective property of an object and return the object as a result of the function.
The input comes as an array of string elements.

The output should be returned as a value.

Examples

Input
['name', 'Pesho', 'age', '23', 'gender', 'male']
Output
{
  name: 'Pesho',
  age: '23',
  gender: 'male'
}

Input
['ssid', '90127461', 'status', 'admin', 'expires', '600']

Output
{
  ssid: '90127461',
  status: 'admin',
  expires: '600'
}
*/

function assign(arr){
    let name = arr[0];
    let name1 = arr[1];


    let age = arr[2];
    let age1=arr[3];

    let gender = arr[4];
    let gender1 = arr[5];


    console.log({
        [name]: name1,
        [age]: age1,
        [gender]: gender1
    });
}