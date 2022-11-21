const sentence = "this is terribly written sentence";

function readSentence(sentence) {
  if (sentence.endsWith("!" || "." || "," || "?" || "-")) {
    return sentence;
  } else {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }
}

console.log(readSentence(sentence));
