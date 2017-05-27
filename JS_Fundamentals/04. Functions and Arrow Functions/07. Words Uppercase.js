function wordsFromSentenceToUpperCaseList([str]) {
    var strUpper = str.toUpperCase();

    function extractWords() {
        return strUpper.split(/\W+/);
    }
    var words = extractWords();
    words = words.filter(w => w !== '');

    return words.join(', ');


}