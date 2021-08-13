function getUniqueWords(sentence) {
  if (sentence.length === 0) return [];
  const wordSet = new Set(sentence.split(' ').filter((x) => x !== ''));
  return [...wordSet];
}

console.log(getUniqueWords('frontend    is easy but easy to die')); //--> ['frontend', 'is', 'easy', 'but', 'to', 'die'] (từ tô đậm đã bị remove));
