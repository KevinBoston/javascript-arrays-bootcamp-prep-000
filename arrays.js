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
  newArr = [arr, ... elem];
  return newArr;
}
function destructivelyAddElementToEndOfArray (arr, elem) {
  arr[3] = elem;
  return arr;
}
function accessElementInArray (arr, ind) {
  return arr[ind];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
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
