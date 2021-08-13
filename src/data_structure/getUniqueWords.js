function getUniqueWords(sentence) {
  if (typeof sentence !== 'string') return [];
  if (sentence.length === 0) return [];
  const wordSet = new Set(sentence.split(' ').filter((x) => x !== ''));
  return [...wordSet];
}

console.log(getUniqueWords('frontend    is easy but easy to die'));
//--> ['frontend', 'is', 'easy', 'but', 'to', 'die'];

module.exports = getUniqueWords;
