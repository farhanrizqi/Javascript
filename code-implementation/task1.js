//! Palindrome
const isPalindrome = (text) => {
  if (typeof text === "string") {
    const lowText = text.toLowerCase();
    const revText = lowText.split("").reverse().join("");
    return lowText === revText
      ? "The text is a palindrome"
      : "The text is not a palindrome";
  } else {
    return "input harus string";
  }
};

console.log(isPalindrome("bubur"));

// ! reverse phrase
const reversePhrase = (phrase) => {
  if (typeof phrase !== "string") {
    console.log("input harus berupa string");
  } else {
    const words = phrase.split(" ");
    const revWords = words.reverse();

    //   console.log(...revWords);
    const revPhrase = revWords.join(" ");

    return revPhrase;
  }
};

console.log(reversePhrase("Saya belajar Javascript"));
