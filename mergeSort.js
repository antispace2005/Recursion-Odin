function mergeSort(arr) {
  if (arr.length == 0) {
    return arr;
  }
  if (arr.length == 1) {
    return arr;
  }
  if (arr.length == 2) {
    if (arr[1] < arr[0]) {
      return [arr[1], arr[0]];
    }
    return arr;
  }
  if (arr.length > 2) {
    let output = [];

    const middleIndex = Math.ceil(arr.length / 2);
    let firstHalf = arr.slice(0, middleIndex);
    let secondHalf = arr.slice(middleIndex);

    firstHalf = mergeSort(firstHalf);

    secondHalf = mergeSort(secondHalf);
    while (firstHalf.length > 0 || secondHalf.length > 0) {
      if (firstHalf.length > 0 && secondHalf.length > 0) {
        if (firstHalf[0] < secondHalf[0]) {
          output.push(firstHalf.shift());
        } else {
          output.push(secondHalf.shift());
        }
      } else if (firstHalf.length > 0) {
        output.push(firstHalf.shift());
      } else {
        output.push(secondHalf.shift());
      }
    }
    return output;
  }
}
