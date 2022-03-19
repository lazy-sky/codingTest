// 에라토스테네스의 체를 이용해 1부터 n까지의 수 중에서 소수의 개수를 반환
function getPrimeNumbersCount(n) {
  const arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter((e) => e).length;
}

console.log(getPrimeNumbersCount(3));
console.log(getPrimeNumbersCount(4));
console.log(getPrimeNumbersCount(10));

// 소수 판별
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(4));
