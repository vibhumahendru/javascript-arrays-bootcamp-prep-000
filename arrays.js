var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var m=[];
function addElementToBeginningOfArray(ar1, x){
  m = [x,...ar1]
  return m;
}



function destructivelyAddElementToBeginningOfArray(ar2,y){
  ar2.unshift(y)
  return ar2
}

var ar3 = []
function accessElementInArray(ar3, z){
  return ar3[z]
}

var ar4 = []
function addElementToEndOfArray (ar4, q){
  var add3 = [...ar4,q]
  return add3
}

var ar5 = []
function destructivelyAddElementToEndOfArray (ar5, w){
  ar5.push(w)
  return ar5
}

var remove1 = []
function destructivelyRemoveElementFromBeginningOfArray (remove1){
  remove1.shift()
  return remove1
}

var slice1 =[]
function removeElementFromBeginningOfArray(slice1){
 var newslice = slice1.slice(1)
 return newslice
}

var remove = []
function destructivelyRemoveElementFromEndOfArray(remove){
  remove.pop()
  return remove
}

var remove2 = []
function removeElementFromEndOfArray (remove2){
  var remove3 = remove2.slice(0, remove2.length - 1)
  return remove3
}






