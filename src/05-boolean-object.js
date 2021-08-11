function sayHello(languageCode) {
  const languageMap = {
    vi: 'Xin chào',
    fr: 'Bonjour',
    cn: 'Nǐn hǎo',
    ja: 'Konnichiwa',
    ko: 'Anyoung haseyo',
  };
  return languageMap[languageCode] || 'Hello';
}

console.log(sayHello('en'));
