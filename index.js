function findMinAndRemove(array){
  const min = Math.min(...array);
  const index = array.indexOf(min)
  const newArray = array.splice(index, 1)
  return newArray
}

function selectionSort(array){
  let sorted = [];
  let newMin;
  while(array.length > 0){
    newMin = findMinAndRemove(array)
    sorted.push(newMin);
  }
  return sorted.flat();
}

const findMinAndRemoveSorted = (array) => {
  return array.shift()
}

const merge = (array1, array2) => {
  let sorted = [];
  while (array1.length != 0 && array2.length != 0){
    if(array1[0] < array2[0]){
      sorted.push(findMinAndRemoveSorted(array1))
    } else {
      sorted.push(findMinAndRemoveSorted(array2))
    }
  }
  return sorted.concat(array1).concat(array2);
}

const mergeSort = (array) => {
  const midpoint = array.length / 2;
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint, array.length);
  if(array.length < 2){
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}