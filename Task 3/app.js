/* 
Parašykite JavaScript programą, kuri patikrina, ar duotas skaičius egzistuoja diapazone nuo 40 iki 10000. Pavyzdžiui, 40 egzistuoja tarp 40 ir 4000.
*/

function checkNum(num) {
  if (num >= 40 && num <= 10000) {
    const rangeOptions = [
      {
        start: 40,
        end: 100,
      },
      {
        start: 101,
        end: 1000,
      },
      {
        start: 1001,
        end: 10000,
      },
    ];

    function generateRanges(start, end) {
      const range = [];
      for (let i = start; i <= end; i++) {
        range.push(i);
      }
      return range;
    }

    const rangeTens = generateRanges(
      rangeOptions[0].start,
      rangeOptions[0].end
    );
    const rangeHundreds = generateRanges(
      rangeOptions[1].start,
      rangeOptions[1].end
    );
    const rangeThousands = generateRanges(
      rangeOptions[2].start,
      rangeOptions[2].end
    );

    const roundedDown = (num, dec) => num - (num % dec);
    const maxValue = (roundedDown, maxDec) => roundedDown * maxDec;

    if (rangeTens.includes(num)) {
      console.log(
        `${num} is within range ${roundedDown(num, 10)} and ${maxValue(
          roundedDown(num, 10),
          100
        )}.`
      );
    }
    if (rangeHundreds.includes(num)) {
      console.log(
        `${num} is within range ${roundedDown(num, 100)} and ${maxValue(
          roundedDown(num, 100),
          10
        )}.`
      );
    }
    if (rangeThousands.includes(num)) {
      console.log(
        `${num} is within range ${roundedDown(num, 1000)} and 10000.`
      );
    }
  } else {
    console.log("Number is out of range.");
  }
}

checkNum(6);
checkNum(66);
checkNum(666);
checkNum(6666);
checkNum(66666);
