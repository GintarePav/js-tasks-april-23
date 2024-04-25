/*
Parašykite JavaScript programą, kuri sukurtų naują eilutę iš duotos eilutės. Ši programa pašalina pirmąjį ir paskutinį eilutės simbolius, jei pirmasis arba paskutinis simbolis yra 'P'. Grąžinkite originalią eilutę, jei sąlyga nėra patenkinta.
*/

function modifyLine(str) {
  if (str.toLowerCase().includes("p")) {
    let newStr = str;
    if (str[0].toLowerCase() === "p") {
      newStr = newStr.slice(1);
    }
    if (str[str.length - 1].toLowerCase() === "p") {
      newStr = newStr.slice(0, -1);
    }
    return console.log(newStr);
  } else {
    return console.log(str);
  }
}

modifyLine("Pumpkin chip");
modifyLine("Uncle Pipin");
