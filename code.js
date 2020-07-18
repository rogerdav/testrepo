var globalVariable = 'Alexis';
var index = 0;



function myFunction() {
  let localVariable = 'Karen';
  let localIndex = 0;
  console.log('index', index);
  index++;
  console.log('hello', localVariable);
  console.log('local Index', localIndex);
}



myFunction();
myFunction();