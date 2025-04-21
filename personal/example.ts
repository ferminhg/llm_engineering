function calculatePrimes(n: number): number[] {
  // Create a boolean array to mark non-prime numbers
  const isPrime: boolean[] = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  // Use Sieve of Eratosthenes algorithm
  for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
          for (let j = i * i; j <= n; j += i) {
              isPrime[j] = false;
          }
      }
  }

  // Collect prime numbers into result array
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
      if (isPrime[i]) {
          primes.push(i);
      }
  }

  return primes;
}

console.log(calculatePrimes(1000000000000));
