const htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
};

const basePropertyOf = (object: { [key: string]: string; }) => {
    return function(key: string) {
      return object[key];
    };
}

const reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);
const unescapeHtmlChar = basePropertyOf(htmlUnescapes);

const unescape = (s: string) => {
    return (s && reHasEscapedHtml.test(s))
      ? s.replace(reEscapedHtml, unescapeHtmlChar)
      : s;
}

export default unescape;