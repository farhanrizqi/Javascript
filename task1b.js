// ! nomor 2
const scoreAverage = (indo, eng, math, ipa) => {
  if (
    typeof indo === "number" &&
    typeof eng === "number" &&
    typeof math === "number" &&
    typeof ipa === "number"
  ) {
    let scoreAvg = (indo + eng + math + ipa) / 4;
    if (scoreAvg >= 90) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = A");
    } else if (scoreAvg >= 80 && scoreAvg <= 89) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = B");
    } else if (scoreAvg >= 70 && scoreAvg <= 79) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = C");
    } else if (scoreAvg >= 60 && scoreAvg <= 69) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = D");
    } else if (scoreAvg <= 59) {
      console.log(`Your score Average: ${scoreAvg}`);
      console.log("Grade = E");
    } else {
      console.log("Sorry your grade is unknown. Please contact your teacher");
    }
  } else {
    console.log("Please enter all the scores");
  }
};
const mtk = 80;
const bahasaIndonesia = "70";
const bahasaInggris = 50;
const ipa = 69;

scoreAverage(mtk, bahasaIndonesia, bahasaInggris, ipa);
