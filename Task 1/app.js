/* 
Sukurti knygų katalogą, kuriame būtų 12 knygų ir 3 kategorijos.
Knygą turi turėti šias savybes:
ISBN
Leidimo metai
Pavadinimas
Puslapių skaičius
Jeigu knygą išleista šiais metais šalia jos pavadinimo turime išvesti (nauja knyga)
Tai pat turime išvesti bendrą knygų skaičių kategorijoje
Pvz:
Grožinė literatūra (10 knygų):
ISBN : GR1236K
Leidimo metai: 2018 (nauja knyga)
Pavadinimas: Mano mintys debesyse
Puslapių skaičius: 300 
*/

const books = [
  {
    ISBN: "9780735211247",
    "Publication year": 2019,
    Title: "The Wife Between Us",
    "Page number": 352,
    Category: "Mystery",
  },
  {
    ISBN: "9780735224308",
    "Publication year": 2019,
    Title: "The Silent Patient",
    "Page number": 336,
    Category: "Fiction",
  },
  {
    ISBN: "9780735218468",
    "Publication year": 2024,
    Title: "The Night Before",
    "Page number": 320,
    Category: "Mystery",
  },
  {
    ISBN: "9781250170764",
    "Publication year": 2020,
    Title: "The Girl Before",
    "Page number": 352,
    Category: "Mystery",
  },
  {
    ISBN: "9781524763138",
    "Publication year": 2018,
    Title: "Becoming",
    "Page number": 448,
    Category: "Non-fiction",
  },
  {
    ISBN: "9781982102819",
    "Publication year": 2024,
    Title: "Where the Crawdads Sing",
    "Page number": 384,
    Category: "Fiction",
  },
  {
    ISBN: "9780735219090",
    "Publication year": 2020,
    Title: "The Vanishing Half",
    "Page number": 352,
    Category: "Fiction",
  },
  {
    ISBN: "9781982128239",
    "Publication year": 2022,
    Title: "Educated",
    "Page number": 400,
    Category: "Non-fiction",
  },
  {
    ISBN: "9781982110569",
    "Publication year": 2020,
    Title: "Sapiens: A Brief History of Humankind",
    "Page number": 464,
    Category: "Non-fiction",
  },
  {
    ISBN: "9780141988519",
    "Publication year": 2024,
    Title: "21 Lessons for the 21st Century",
    "Page number": 432,
    Category: "Non-fiction",
  },
  {
    ISBN: "9781250154191",
    "Publication year": 2016,
    Title: "The Woman in the Window",
    "Page number": 448,
    Category: "Mystery",
  },
  {
    ISBN: "9780385543767",
    "Publication year": 2021,
    Title: "The Testaments",
    "Page number": 432,
    Category: "Fiction",
  },
];

const fictionStats = [];
const nonFictionStats = [];
const mysteryStats = [];

const bookNums = {
  fiction: 0,
  nonFiction: 0,
  mystery: 0,
};

for (let book of books) {
  const category = book["Category"];
  switch (category) {
    case "Fiction":
      bookNums.fiction += 1;
      fictionStats.push(book);
      break;
    case "Non-fiction":
      bookNums.nonFiction += 1;
      nonFictionStats.push(book);
      break;
    case "Mystery":
      bookNums.mystery += 1;
      mysteryStats.push(book);
      break;
    default:
      break;
  }
}

fictionStats.unshift(`Fiction (${bookNums.fiction} books):`);
nonFictionStats.unshift(`Non-fiction (${bookNums.nonFiction} books):`);
mysteryStats.unshift(`Mystery (${bookNums.mystery} books):`);

function expandCategories(arr) {
  for (let i of arr) {
    if (typeof i === "string") {
      console.log(i);
    }
    if (typeof i === "object") {
      for (let j in i) {
        if (j === "Publication year" && i[j] === 2024) {
          console.log(`${j}: ${i[j]} (new book)`);
        } else if (j === "Category") {
          console.log("");
        } else {
          console.log(`${j}: ${i[j]}`);
        }
      }
    }
  }
}

expandCategories(fictionStats);
expandCategories(nonFictionStats);
expandCategories(mysteryStats);
