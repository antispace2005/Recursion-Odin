function fibs(n, arr = []) {
  const len = arr.length;

  if (n == 0) {
    return arr;
  }
  if (len == 0) {
    return fibs(n - 1, [0]);
  } else if (len == 1) {
    return fibs(n - 1, [0, 1]);
  }
  arr.push(arr[len - 1] + arr[len - 2]);
  return fibs(n - 1, arr);
}

console.log(fibs(8));
