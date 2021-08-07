// please use these constants in your code
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

function getLanguageCodeFromURL(url) {
  url = url.slice(-3).replace('/', ' ').trim();
  for (const lang of SUPPORTED_LANGUAGE_LIST) {
    if (lang === url) return lang;
  }
  return DEFAULT_LANGUAGE;
}

console.log(getLanguageCodeFromURL('google.com'));
console.log(getLanguageCodeFromURL('google.com/en'));
console.log(getLanguageCodeFromURL('google.com/cn'));
console.log(getLanguageCodeFromURL('google.com/vi/'));
console.log(getLanguageCodeFromURL('google.com/abc'));
