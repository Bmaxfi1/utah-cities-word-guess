//Starting out by making an array of all the words I will use in the game.
var citiesArray = [
  "Alpine",
  "Alta",
  "Altamont",
  "Alton",
  "Amalga",
  "AmericanFork",
  "Aneth",
  "Annabella",
  "Antimony",
  "Aurora",
  "Avon",
  "Ballard",
  "BearRiverCity",
  "Beaver",
  "Benjamin",
  "Benson",
  "Bicknell",
  "BigWater",
  "Blanding",
  "Bluff",
  "Bluffdale",
  "Boulder",
  "Bountiful",
  "BrianHead",
  "BrighamCity",
  "Cannonville",
  "CanyonRim",
  "CastleDale",
  "CastleValley",
  "CedarCity",
  "CedarFort",
  "CedarHills",
  "Centerfield",
  "Centerville",
  "Charleston",
  "Circleville",
  "Clarkston",
  "Clawson",
  "Clearfield",
  "Cleveland",
  "Clinton",
  "Coalville",
  "Corinne",
  "Cornish",
  "CottonwoodHeights",
  "CottonwoodWest",
  "Cove",
  "Daniel",
  "Delta",
  "Deweyville",
  "Draper",
  "Duchesne",
  "Dugway",
  "EagleMountain",
  "EastCarbon",
  "EastMillcreek",
  "Elberta",
  "ElkRidge",
  "Elmo",
  "Elsinore",
  "Elwood",
  "Emery",
  "Enoch",
  "Enterprise",
  "Ephraim",
  "Erda",
  "Escalante",
  "Eureka",
  "Fairview",
  "Farmington",
  "FarrWest",
  "Fayette",
  "Ferron",
  "Fielding",
  "Fillmore",
  "FortDuchesne",
  "FountainGreen",
  "Francis",
  "FruitHeights",
  "Garden",
  "GardenCity",
  "Garland",
  "Genola",
  "Glendale",
  "Glenwood",
  "Goshen",
  "Granite",
  "Grantsville",
  "GreenRiver",
  "Gunnison",
  "Halchita",
  "HallsCrossing",
  "Harrisville",
  "Hatch",
  "Heber",
  "Helper",
  "Henefer",
  "Henrieville",
  "Herriman",
  "Highland",
  "Hildale",
  "Hinckley",
  "Holden",
  "Holladay",
  "Honeyville",
  "Hooper",
  "Howell",
  "Huntington",
  "Huntsville",
  "Hurricane",
  "HydePark",
  "Hyrum",
  "Ivins",
  "Joseph",
  "Junction",
  "Kamas",
  "Kanab",
  "Kanarraville",
  "Kanosh",
  "Kaysville",
  "Kearns",
  "Kingston",
  "Koosharem",
  "LakeShore",
  "Laketown",
  "LaSal",
  "LaVerkin",
  "Layton",
  "Leamington",
  "Leeds",
  "Lehi",
  "Levan",
  "Lewiston",
  "Lindon",
  "LittleCottonwoodCreekValley",
  "Loa",
  "Logan",
  "Lyman",
  "Lynndyl",
  "Maeser",
  "Magna",
  "Manila",
  "Manti",
  "Mantua",
  "Mapleton",
  "Marysvale",
  "Mayfield",
  "Meadow",
  "Mendon",
  "MexicanHat",
  "Midvale",
  "Midway",
  "Milford",
  "Millcreek",
  "Millville",
  "Minersville",
  "Moab",
  "Mona",
  "Monroe",
  "MontezumaCreek",
  "Monticello",
  "Morgan",
  "Moroni",
  "MountOlympus",
  "MountPleasant",
  "Murray",
  "Myton",
  "Naples",
  "NavajoMountain",
  "Neola",
  "Nephi",
  "NewHarmony",
  "Newton",
  "Nibley",
  "NorthLogan",
  "NorthOgden",
  "NorthSaltLake",
  "NorthSnydervilleBasin",
  "OakCity",
  "Oakley",
  "Ogden",
  "Ophir",
  "Oquirrh",
  "Orangeville",
  "Orderville",
  "Orem",
  "Palmyra",
  "Panguitch",
  "Paradise",
  "Paragonah",
  "ParkCity",
  "Parowan",
  "Payson",
  "Perry",
  "Peter",
  "PlainCity",
  "PleasantGrove",
  "PleasantView",
  "Plymouth",
  "Portage",
  "Price",
  "Providence",
  "Provo",
  "Randlett",
  "Randolph",
  "Redmond",
  "Richfield",
  "Richmond",
  "Riverdale",
  "RiverHeights",
  "Riverside",
  "Riverton",
  "Rockville",
  "RockyRidge",
  "Roosevelt",
  "Roy",
  "RushValley",
  "St.George",
  "Salem",
  "Salina",
  "SaltLakeCity",
  "Samak",
  "Sandy",
  "SantaClara",
  "Santaquin",
  "SaratogaSprings",
  "Scipio",
  "Scofield",
  "Sigurd",
  "Smithfield",
  "Snowville",
  "SouthJordan",
  "SouthOgden",
  "SouthSaltLak",
  "SouthSnydervilleBasin",
  "SouthWeber",
  "SouthWillard",
  "SpanishFork",
  "SpanishValley",
  "SpringCity",
  "Springdale",
  "SpringLake",
  "Springville",
  "StansburyPark",
  "Sterling",
  "Stockton",
  "SummitPark",
  "Sunnyside",
  "Sunset",
  "Syracuse",
  "Tabiona",
  "Taylorsville",
  "TimberLakes",
  "Tooele",
  "Toquerville",
  "Torrey",
  "Tremonton",
  "Trenton",
  "Tropic",
  "TselakaiDezza",
  "Uintah",
  "Vernal",
  "Vernon",
  "Vineyard",
  "Virgin",
  "Wales",
  "Wallsburg",
  "Washington",
  "WashingtonTerrace",
  "Wellington",
  "Wellsville",
  "Wendover",
  "WestBountiful",
  "WestHaven",
  "WestJordan",
  "WestMountain",
  "WestPoint",
  "WestValleyCity",
  "WhiteCity",
  "WhiteMesa",
  "Whiterocks",
  "Willard",
  "Woodland",
  "WoodlandHills",
  "Woodruff",
  "WoodsCross",
];

//Assigning variables to html elements
var instructionsEl = document.getElementsByClassName("instructions")[0];
var startButtonEl = document.getElementsByClassName("start-button")[0];
var resetButtonEl = document.getElementsByClassName("reset-button")[0];
var gameSectionEl = document.getElementsByClassName("game-section")[0];
var currentWordEl = document.getElementsByClassName("current-word")[0];

// Game mechanism
var currentWord = "";
var correctGuessedLetters = "";
var wrongGuessedLetters = "";
var blankSlots = "";
var correctLetterLocationArray = [];
var incompleteWord = "";
var updatedBlankSlots = "";
let slotToChange = ""


function replaceAt(index, char) {
  var a = this.split("");
  a[index] = char;
  return a.join("");
}

function initiateGame() {
  instructionsEl.style.display = "none";
  startButtonEl.style.display = "none";
  resetButtonEl.style.display = "flex";
  gameSectionEl.style.display = "flex";

  correctGuessedLetters = "";
  wrongGuessedLetters = "";
  blankSlots = "";
  currentWord = Math.floor(Math.random() * citiesArray.length);
  currentWord = citiesArray[currentWord];
  console.log(currentWord);
  console.log(currentWord.length);

  for (i = 0; i < currentWord.length; i++) {
    blankSlots = blankSlots + "_";
  }
  currentWordEl.textContent = blankSlots;
}

document.onkeyup = function (event) {
  var keyInput = event.key;
  correctLetterLocationArray = [];

  if (correctGuessedLetters.includes(keyInput)) {
    return;
  }
  if (wrongGuessedLetters.includes(keyInput)) {
    return;
  }
  if (currentWord.includes(keyInput)) {
    correctGuessedLetters = correctGuessedLetters + keyInput;
    //this for loop finds where the correct letters are located and puts the index into an array
    for (y = 0; y < currentWord.length; y++) {
      if (keyInput === currentWord[y]) {
        correctLetterLocationArray.push(y)
        console.log(correctLetterLocationArray);
      }
    }
    //this is where the blank slots are changed to letters
    for (v = 0; v < correctLetterLocationArray.length; v++) {
        slotToChange = null
        slotToChange = correctLetterLocationArray[v]
        console.log(slotToChange)

        let x = blankSlots;
        let arr = x.split("");
        arr.splice(slotToChange, 1, keyInput);
        let result = arr.join("");
        blankSlots = result
        currentWordEl.textContent = blankSlots;

    }


    console.log(blankSlots);
  }
};
