var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray (arr, elem) {
newArr = [elem, ... arr];
return newArr;
}
function destructivelyAddElementToBeginningOfArray (arr, elem) {
  arr.unshift(elem);
  return arr;
}
function addElementToEndOfArray (arr, elem) {
   arr = [arr, ... elem];
  return arr;
} //always having problems...
function destructivelyAddElementToEndOfArray (arr, elem) {
 newArr = arr.push(elem);
  return newArr;
}
function accessElementInArray (arr, ind) {
  return arr[ind];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift(0);
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  arr.slice(1);
  return arr;
}
function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop();
  return arr;
}
function removeElementFromEndOfArray(arr){
  arr.slice(0, (arr.length - 1));
  return arr;
}
