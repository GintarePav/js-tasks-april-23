/* "Parašykite JavaScript programą, kuri įvertina studento bendrus taškus įvairiuose egzaminuose ir nustato jo pažymį. Vertinimo kriterijai yra šie:
Jei bendri taškai yra tarp 89 ir 100 (įskaitant), studentas gauna A+ pažymį.
Jei egzaminas pažymimas kaip 'Baigiamasis egzaminas', studentas gaus A+ pažymį tik jei jo bendri taškai yra 90 ar daugiau. Tarkime, kad baigiamasis egzaminas yra pažymimas 'true' kaip antrasis parametras, kitu atveju - tuščias.
Jei studentas pasiekia A+ pažymį, programa turėtų grąžinti 'true', kitu atveju - 'false'." */

const grades = [
  {
    score: 9,
    finalExam: "",
  },
  {
    score: 10,
    finalExam: "",
  },
  {
    score: 8,
    finalExam: "",
  },
  {
    score: 7,
    finalExam: "",
  },
  {
    score: 9,
    finalExam: "",
  },
  {
    score: 5,
    finalExam: "",
  },
  {
    score: 10,
    finalExam: "",
  },
  {
    score: 8,
    finalExam: "",
  },
  {
    score: 9,
    finalExam: "",
  },
  {
    score: 8,
    finalExam: "",
  },
  {
    score: 90,
    finalExam: true,
  },
];

function isAPlus() {
  let regularSum = 0;
  let finalSum = 0;
  for (let i = 0; i < grades.length; i++) {
    let score = grades[i].score;
    if (grades[i].finalExam === "" && score >= 1 && score <= 10) {
      regularSum += score;
    }
    if (grades[i].finalExam === true && score >= 1 && score <= 100) {
      finalSum += score;
    }
  }
  console.log("Is regular exam grade A+?");
  if (regularSum >= 89) {
    console.log("True");
  } else {
    console.log("False");
  }
  console.log("Is final exam grade A+?");
  if ((finalSum >= 89) & (regularSum >= 90)) {
    console.log("True");
  } else {
    console.log("False");
  }
}

isAPlus();
