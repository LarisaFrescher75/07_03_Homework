function mostFrequent(arr) {
  const frequent = {};
  let maxFrequent = 0;
  let mostFrequentEl = null;

  for (const element of arr) {
    frequent[element] = (frequent[element] || 0) + 1;
    if (frequent[element] > maxFrequent) {
      maxFrequent = frequent[element];
      mostFrequentEl = element;
    }
  }
  return mostFrequentEl;
}
console.log(mostFrequent([1, 7, 5, 7, 7, 7, 10]));
