// Variable and Class Declarations

let answers = [];

let bandies = [
  "Abbey",
  "Adam",
  "Aileen",
  "Alaina",
  "Alex Brenton",
  "Alex Campbell",
  "Alex McLean",
  "Alex Schie",
  "Alexa Madrid",
  "Alexie Guay",
  "Alice",
  "Alivia",
  "Amanda Zeglen",
  "Andie Proulx",
  "Andrew Leutwiler",
  "Anna",
  "Anne Cherkowski",
  "Anthony Callin",
  "Anthony Romano",
  "Aria Garceau",
  "Aria Stephan",
  "Ashley",
  "Ashlyn Ham",
  "Audrey",
  "Audrey's MILF",
  "Austin Roden",
  "Avery",
  "Ayrton Martino",
  "B",
  "Baylee Kirwan",
  "Bella",
  "Ben Brown",
  "Ben Kadezabek",
  "Ben Solo",
  "Bill Rutherford",
  "Bill Jeffers",
  "Brady Egan",
  "Brady Parker",
  "Brandon",
  "Brenna",
  "Brian Hurley",
  "Brian Manning",
  "Bridget Stevenson",
  "Brom",
  "Brooke McQuigge",
  "Brooke Niemiec",
  "Cam Doyle",
  "Cam Nelson",
  "Caden Lewandowski",
  "Caitrin Longeran",
  "CAMPO",
  "Carlie",
  "Carlo",
  "Caroline",
  "Carter Rose",
  "Casey Ditzel",
  "Casey Jones",
  "Cassie",
  "Cat",
  "Charlie",
  "Charlie Campbell",
  "Chawgo",
  "Chestnut",
  "Chris Klack",
  "Chris Treutlein",
  "Christian Harvey",
  "Cody Monds",
  "Cole",
  "Colin Patricelli",
  "Colin Whitesell",
  "Colleen",
  "Connor Powell",
  "Corey",
  "Corsner",
  "Cujo",
  "Cynthia",
  "Daimon Gardner",
  "Dale",
  "Dan Bauman",
  "Darcie Lappan",
  "David Vanill",
  "David Facteau",
  "Declan",
  "Devin Mullen",
  "Diego",
  "Dolen",
  "Dominic",
  "Dominique Petrie",
  "Double L",
  "Doug Bohl",
  "Dunckel",
  "Dustyn McFaul",
  "Dylan",
  "Ellis Rickwood",
  "Emily",
  "Emily Wisnewski",
  "Emma Fish",
  "Emma Russell",
  "Emmett Croteau",
  "Emmitt Laramay",
  "Eric Ciccolini",
  "Eric Laferriere",
  "Eric York",
  "Erik Bargholtz",
  "Ethan, Evelyn, and Eric's dad",
  "Ethan Haider",
  "Ethan Laferriere",
  "Evelyn",
  "Florence Lessard",
  "Ford",
  "Gabe Aguilar",,
  "Gabe Burch",
  "Gabe de la Force",
  "Gabriel Vinal",
  "Gabrielle David",
  "Garrett",
  "George Grannis",
  "Gracie",
  "Greasy",
  "Gretchen Branton",
  "Haleigh Dunbar",
  "Haley Winn",
  "Harry",
  "Holly Gruber",
  "Isaac",
  "Isabelle",
  "Jack Flaherty",
  "Jack Jacome",
  "Jack Judson",
  "Jacob Mucitelli",
  "Jacob Schmidt-Svejstrup",
  "Jaden Bogden",
  "Jaidan Fahrny",
  "Jake McNamara",
  "Jam",
  "Jamie Collins",
  "Jason",
  "Jasper",
  "Jeff",
  "Jenna Brockett",
  "Jenna Goodwin",
  "Jesse Burton",
  "Jesse Dykes",
  "Jesse Tucker",
  "JFK",
  "Joe Bushey",
  "Joe Franco",
  "Joe Mama",
  "John",
  "Jonas",
  "Jordan Power",
  "Jordan Robert",
  "Joseph Garrett Schalago",
  "Josh Higgins",
  "Josh Schwartz",
  "Jules",
  "Julia Minotti",
  "Kaelan Taylor",
  "Kami",
  "Kayla Braley",
  "Keira Hurry",
  "Kelly",
  "Kevin",
  "King",
  "Kirstyn McQuigge",
  "Knick",
  "Kristina Schuler",
  "Kronk",
  "Kyle",
  "Laurence Frenette",
  "Leah",
  "Leo",
  "Liam",
  "Lindsey",
  "Lucas Carey",
  "Lucas Lacerda",
  "Lukas Kaeble",
  "Luke Mobley",
  "Luke Santerno",
  "Lyle",
  "MacKenzie McCarthy",
  "Madison",
  "Maggie",
  "Mahogany",
  "Marc Christensen's secretary",
  "Marc Compeau",
  "Marie Dedert",
  "Marissa",
  "Mathieu Gosselin",
  "Matt Desrosiers",
  "Maura",
  "Max",
  "Maylbox",
  "Megan",
  "Michael",
  "Michael Underwood",
  "Michelle Pasiechnyk",
  "Mikaela",
  "Miranda Gaudet",
  "Miriam",
  "Mrs. Tansey",
  "Morgan Helgeson",
  "Nao",
  "Natalie",
  "Nate",
  "Nathan Stoner",
  "Nick Adams",
  "Nick Campoli",
  "Nick Merola",
  "Nicole Gosling",
  "Noah",
  "Noah Beck",
  "Obama",
  "Oliver Moberg",
  "Oliver Queen",
  "Olivia Hanson",
  "Owen",
  "Paige Hull",
  "Pat",
  "Quinton",
  "Rachel",
  "Reagan",
  "Rebecca Morissette",
  "Reid",
  "Rhea Hicks",
  "Rumble",
  "Russell",
  "Ryan King",
  "Ryan McCarthy",
  "Ryan O'Rourke",
  "Ryan Richardson",
  "Ryan Taylor",
  "Salwa",
  "Sam Palmer",
  "Sam Villa",
  "Sara Swiderski",
  "Savannah",
  "Schalago",
  "Seamus",
  "Sena Catterall",
  "Shane",
  "Shelby Laidlaw",
  "Snowflake",
  "Sparrow",
  "Spoons",
  "Stephanie Markowski",
  "Talon Sigurdson",
  "Tanner",
  "Taylor Storey",
  "Ted",
  "the Knight of the Night",
  "Todd",
  "Tom Robinson",
  "Tom Uhl",
  "Tommy",
  "Tommy Pasanen",
  "Tony Brancato",
  "Tony Collins",
  "Treelog",
  "Trey Taylor",
  "Tristan Sarsland",
  "Tyler",
  "Weston",
  "Will",
  "Zac Ware",
  "Zach Tsekos"
];

let calendar = {
  weekdays: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};

let characters = [
  {
    name: "Cade Skywalker",
    image: {
      url: "img/cadeSkywalker.png",
      position: "center"
    },
    affiliation: "Jedi",
    bio: "The great-grandson of Luke Skywalker, <span class=\"character mainCharacter jediMainCharacter\" id=\"cadeSkywalker\">Cade Skywalker</span> survived Darth Krayt's Jedi Purge that killed his father Kol Skywalker, despite being presumed dead. He lived on the run as a bounty hunter for many years, before eventually accepting his role as a Jedi again and killing Krayt."
  },
  {
    name: "Darth Bane",
    image: {
      url: "img/darthBane.png",
      position: "top"
    },
    affiliation: "Sith",
    bio: "Born as <span class=\"character\" id=\"dessel\">Dessel</span>, he grew up mining cortosis before joining the Brotherhood of Darkness as a foot soldier. When his Force-sensitivity was discovered, he was enrolled in the Sith Academy and adopted the name <span class=\"character mainCharacter sithMainCharacter\" id=\"darthBane\">Darth Bane</span>. Realizing that infighting had made the Sith weak, he orchestrated their destruction via the thought bomb ritual and established the Rule of Two with his apprentice Darth Zannah. Bane was eventually killed by Zannah, who continued his lineage with Darth Cognus."
  },
  {
    name: "Darth Caedus",
    image: {
      url: "img/darthCaedus.png",
      position: "top"
    },
    affiliation: "Sith",
    bio: "Born as <span class=\"character\" id=\"jacenSolo\">Jacen Solo</span>, the son of Han Solo and Leia Organa, he was trained as a Jedi by Luke Skywalker and fought in many conflicts, such as the Yuuzhan Vong War where his younger brother Anakin Solo was killed. He also sired a secret daughter named Allana Solo with Tenel Ka Djo. However, Jacen was seduced to the dark side by Lumiya and declared himself <span class=\"character mainCharacter sithMainCharacter\" id=\"darthCaedus\">Darth Caedus</span> after murdering Mara Jade Skywalker. Despite usurping control of the Galactic Alliance, he was killed by his twin sister Jaina Solo."
  },
  {
    name: "Darth Krayt",
    image: {
      url: "img/darthKrayt.png",
      position: "center"
    },
    affiliation: "Sith",
    bio: "Born as <span class=\"character\" id=\"asharadHett\">A'Sharad Hett</span>, the son of Sharad Hett, he was raised as a Tusken Raider until his father was killed by Aurra Sing. Hett was then trained as a Jedi by Ki-Adi-Mundi, fighting in the Clone Wars and surviving the Jedi Purge. After some time as a Tusken Raider that ended when he was driven off of Tatooine by Obi-Wan Kenobi, he was captured by the Yuuzhan Vong. There, Hett was seduced to the dark side by Vergere and declared himself <span class=\"character mainCharacter sithMainCharacter\" id=\"darthKrayt\">Darth Krayt</span>, founding the One Sith. After lying in wait for over one hundred years, the One Sith revealed themselves and brought about another Jedi Purge. Krayt was betrayed and murdered by Darth Wyyrlok III but managed to resurrect himself, only to be killed permanently by Cade Skywalker."
  },
  {
    name: "Darth Malak",
    image: {
      url: "img/darthMalak.png",
      position: "center"
    },
    affiliation: "Sith",
    bio: "As the Jedi <span class=\"character\" id=\"alekSquinquargesimus\">Alek Squinquargesimus</span>, he fought in the Mandalorian Wars along with his friend Revan, against the Jedi Council's orders. Despite being victorious, this led to them discovering the hidden Sith Empire on Dromund Kaas and being twisted to the dark side by the Sith Emperor, becoming Darth Revan and <span class=\"character mainCharacter sithMainCharacter\" id=\"darthMalak\">Darth Malak</span>. Although Malak betrayed and seemingly killed Revan, he was instead brought back to the light side and killed Malak."
  },
  {
    name: "Darth Nihilus",
    image: {
      url: "img/darthNihilus.png",
      position: "top"
    },
    affiliation: "Sith",
    bio: "<span class=\"character mainCharacter sithMainCharacter\" id=\"darthNihilus\">Darth Nihilus</span> was on Malachor V when the Mass Shadow Generator was activated, transforming him into a wound in the Force that had to drain the life essence of other to survive. As part of the Sith Triumvirate with Darth Traya and Darth Sion, he brought about a Jedi Purge, but was killed by a surviving Meetra Surik."
  },
  {
    name: "Darth Plagueis",
    image: {
      url: "img/darthPlagueis.png",
      position: "center"
    },
    affiliation: "Sith",
    bio: "Born as <span class=\"character\" id=\"hegoDamaskIi\">Hego Damask II</span>, his conception was engineered by Darth Tenebrous to create a powerful apprentice. As <span class=\"character mainCharacter sithMainCharacter\" id=\"darthPlagueis\">Darth Plagueis</span>, he eventually killed Tenebrous and took an apprentice of his own with Darth Sidious. However, despite his best attempts to achieve immortality, Sidious killed him in his sleep."
  },
  {
    name: "Jaina Solo Fel",
    image: {
      url: "img/jainaSoloFel.png",
      position: "top"
    },
    affiliation: "Jedi",
    bio: "The daughter of Han Solo and Leia Organa Solo, <span class=\"character mainCharacter jediMainCharacter\" id=\"jainaSoloFel\">Jaina Solo Fel</span> was trained as a Jedi by Mara Jade Skywalker and fought in many conflicts, such as the Yuuzhan Vong War where her younger brother Anakin Solo was killed. When her twin brother Jacen Solo fell to the dark side and became Darth Caedus, Jaina was forced to kill him. She later married Jagged Fel, becoming the empress, and founded the Imperial Knights."
  },
  {
    name: "Karness Muur",
    image: {
      url: "img/karnessMuur.png",
      position: "center"
    },
    affiliation: "Sith",
    bio: "<span class=\"character mainCharacter sithMainCharacter\" id=\"karnessMuur\">Karness Muur</span> was one of the original Jedi Exiles who fought in the Hundred-Year Darkness and later founded the Sith Empire. He was able to survive in the body of Celeste Mourne for over four thousand years via his Muur Talisman, until it was destroyed by Cade Skywalker."
  },
  {
    name: "Kyp Durron",
    image: {
      url: "img/kypDurron.png",
      position: "top"
    },
    affiliation: "Jedi",
    bio: "<span class=\"character mainCharacter jediMainCharacter\" id=\"kypDurron\">Kyp Durron</span> was one of the first Padawans of the New Jedi Order. During this time, he was briefly corrupted by the spirit of Exar Kun, before freeing himself of Kun's influence."
  },
  {
    name: "Mara Jade Skywalker",
    image: {
      url: "img/maraJadeSkywalker.png",
      position: "center"
    },
    affiliation: "Jedi",
    bio: "<span class=\"character mainCharacter jediMainCharacter\" id=\"maraJadeSkywalker\">Mara Jade Skywalker</span> was one of the Emperor's Hands and was tasked with killing Luke Skywalker, although she ended up allying with him and helping him kill Joruus C'baoth. Jade joined the New Jedi Order and married Luke, having a son named Ben Skywalker with him. She was eventually killed by Jacen Solo when he fell to the dark side and became Darth Caedus."
  },
  {
    name: "Marka Ragnos",
    image: {
      url: "img/markaRagnos.png",
      position: "top"
    },
    affiliation: "Sith",
    bio: "<span class=\"character mainCharacter sithMainCharacter\" id=\"markaRagnos\">Marka Ragnos</span> ruled over the Sith Empire for one hundred years during the Golden Age of the Sith, before dying of natural causes. He attempted to resurrect himself over five thousand years later with help from Tavion Axmis and her Disciples of Ragnos, but was thwarted by Jaden Korr."
  },
  {
    name: "Meetra Surik",
    image: {
      url: "img/meetraSurik.png",
      position: "top"
    },
    affiliation: "Jedi",
    bio: "<span class=\"character mainCharacter jediMainCharacter\" id=\"meetraSurik\">Meetra Surik</span> fought in the Mandalorian Wars under Revan and Alek Squinquargesimus, which resulted in her being exiled from the Jedi Order. Surviving the Jedi Purge, she joined Kreia in her quest to destroy the Sith Triumvirate. Although Kreia was eventually revealed to be Darth Traya, Surik completed her mission by killing her, Darth Nihilus, and Darth Sion. She then ventured into the Unknown Regions in search of a missing Revan, freeing him from captivity by the Sith Empire on Dromund Kaas. Revan and Surik attempted to assassinate the Sith Emperor with help from Scourge, only for Scourge to betray and kill her in order to maintain his cover. Surik's spirit later returned to destroy the Emperor once and for all inside the mind of Satele Shan."
  },
  {
    name: "Nomi Sunrider",
    image: {
      url: "img/nomiSunrider.png",
      position: "center"
    },
    affiliation: "Jedi",
    bio: "<span class=\"character mainCharacter jediMainCharacter\" id=\"nomiSunrider\">Nomi Sunrider</span> became the Padawan of Thon after her husband Andur Sunrider was killed by pirates. She helped win the Great Sith War by stripping Ulic Qel-Droma of his Force-sensitivity and trapping Exar Kun's spirit on Yavin IV, eventually becoming the Jedi Grand Master."
  },
  {
    name: "Revan",
    image: {
      url: "img/revan.png",
      position: "center"
    },
    affiliation: "Jedi",
    bio: "<span class=\"character mainCharacter jediMainCharacter\" id=\"revan\">Revan</span> was trained as a Jedi by Kreia and went on to fight in the Mandalorian Wars along with his friend Alek Squinquargesimus, against the Jedi Council's orders. Despite being victorious, this led to them discovering the hidden Sith Empire on Dromund Kaas and being twisted to the dark side by the Sith Emperor, becoming <span class=\"character\" id=\"darthRevan\">Darth Revan</span> and Darth Malak. Although Malak betrayed and seemingly killed Revan, he was actually saved by Bastila Shan and brainwashed into becoming a Jedi again. Revan killed Malak and married Bastila, having a son named Vaner Shan with her. He then left to confront the Emperor again, which resulted in him being captured and imprisoned for three hundred years. After being freed he was seemingly killed again, but instead of dying, was split into light and dark side halves. The dark Revan embarked on a quest to resurrect the recently killed Emperor so he could destroy him permanently, forcing the Jedi and Sith to form an alliance to stop him. Despite merging both his halves and becoming one with the Force, Revan's spirit later returned to destroy the Emperor once and for all inside the mind of Satele Shan."
  },
  {
    name: "Satele Shan",
    image: {
      url: "img/sateleShan.png",
      position: "left"
    },
    affiliation: "Jedi",
    bio: "A descendant of Revan and Bastila Shan, <span class=\"character mainCharacter jediMainCharacter\" id=\"sateleShan\">Satele Shan</span> fought in the Great Galactic War and eventually became the Jedi Grand Master. She was instrumental in the final destruction of the Sith Emperor when he attempted to posses her, only to be vanquished by the spirits of all his enemies."
  },
  {
    name: "Starkiller",
    image: {
      url: "img/starkiller.png",
      position: "center"
    },
    affiliation: "Jedi",
    bio: "Born as <span class=\"character\" id=\"galenMarek\">Galen Marek</span>, the son of Kento Marek, he was taken in by Darth Vader as a toddler after Vader killed his father. Dubbed <span class=\"character mainCharacter jediMainCharacter\" id=\"starkiller\">Starkiller</span>, he spent years hunting down rogue Jedi. After faking Starkiller's death, Vader sent him to assemble a group of rebels that would eventually become the Rebel Alliance to help overthrow Emperor Palpatine. However, Vader ended up betraying Starkiller, who turned to the light side and set out to rescue the rebels. Despite succeeding, he was forced to sacrifice himself in battle against Palpatine in order to save them."
  },
  {
    name: "The Sith Emperor",
    image: {
      url: "img/theSithEmperor.png",
      position: "center"
    },
    affiliation: "Sith",
    bio: "Born as <span class=\"character\" id=\"tenebrae\">Tenebrae</span>, he killed his father Dramath and conquered his homeworld of Medriaas by the age of thirteen, taking on the name <span class=\"character\" id=\"vitiate\">Vitiate</span>. Following the Great Hyperspace War, Vitiate drained the life essence of every living thing on Medriaas in a ritual that granted him immortality. Declaring himself <span class=\"character mainCharacter sithMainCharacter\" id=\"theSithEmperor\">the Sith Emperor</span>, he then led the remnants of the Sith Empire to Dromund Kaas, where they spend over one thousand years rebuilding. When they were discovered by Revan and Alek Squinquargesimus, the Emperor twisted them to the dark side and sent them back to invade the Galactic Republic as Darth Revan and Darth Malak. After another three hundred years, the Empire revealed itself and waged war against the Republic, before suing for peace with the Treaty of Coruscant. The Emperor attempted to perform a ritual that would eradicate all life in the universe, but was seemingly killed by the Hero of Tython with help from Scourge. However, the Emperor's spirit survived and continued to wreak havoc while being hunted by a redeemed Revan. The Emperor later adopted the persona of <span class=\"character\" id=\"valkorion\">Valkorion</span> and waged war against both the Republic and the Sith with his Eternal Empire. He was betrayed and murdered by his son Arcann but survived yet again by containing his spirit in the Outlander, guiding him on his quest to retake the Eternal Throne. Valkorion was finally destroyed once and for all when he attempted to possess Satele Shan and was vanquished by the spirits of all his enemies."
  },
  {
    name: "Thrawn",
    image: {
      url: "img/thrawn.png",
      position: "top"
    },
    affiliation: null,
    bio: "Born as <span class=\"character\" id=\"mitthrawnuruodo\">Mitth'raw'nuruodo</span>, he was exiled by the Chiss Ascendancy due to his unorthodox military tactics. He was later recruited by the Galactic Empire and adopted the name <span class=\"character mainCharacter\" id=\"thrawn\">Thrawn</span>, becoming the first alien grand admiral. After Emperor Palpatine and Darth Vader both died, Thrawn assumed leadership of the Empire and waged war on the New Republic with the help of Joruus C'baoth. However, he ended up being killed by Ruhk when it was revealed that the Empire had been poisoning Honoghr to keep the Noghri subservient to them."
  },
  {
    name: "Tulak Hord",
    image: {
      url: "img/tulakHord.png",
      position: "center"
    },
    affiliation: "Sith",
    bio: "<span class=\"character mainCharacter sithMainCharacter\" id=\"tulakHord\">Tulak Hord</span> was renowned as the greatest warrior of the Sith Empire, conquering over one hundred planets and killing over one thousand Jedi before being betrayed and murdered by Ortan Cela."
  },
  {
    name: "Ulic Qel-Droma",
    image: {
      url: "img/ulicQelDroma.png",
      position: "center"
    },
    affiliation: "Jedi",
    bio: "<span class=\"character mainCharacter jediMainCharacter\" id=\"ulicQelDroma\">Ulic Qel-Droma</span> was trained as a Jedi by Arca Jeth and fought in the Freedon Nadd Uprising. While infiltrating the Krath, he was seduced to the dark side by Aleema Keto. Ulic later became the apprentice of Exar Kun, and together they waged war against the Galactic Republic. However, after killing his brother Cay Qel-Droma and being stripped of his Force-sensitivity by Nomi Sunrider, Ulic returned to the light side and helped defeat Kun. He later trained Nomi's daughter Vima Sunrider, before being killed by Hoggon."
  }
];

let cookies = [
  "almond joy cookies",
  "banana cream cookies",
  "benne wafers",
  "biscotti",
  "butter pecan cookies",
  "butterscotch cookies",
  "carrot cake cookies",
  "cheesecake cookies",
  "cherry almond cookies",
  "chewy ginger molasses cookies",
  "chocolate chip cookies",
  "chocolate-filled lava cookies",
  "chocolate fudge cookies",
  "chocolate turtle cookies",
  "coconut chip cookies",
  "cornflake cookies",
  "cowboy cookies",
  "crescent cookies",
  "crinckle cookies",
  "crunchy peanut butter cookies",
  "fig newtons",
  "fluffy butter cookies",
  "fortune cookies",
  "frosted toffee cookies",
  "gaulettes",
  "gingerbread",
  "gingersnap cookies",
  "grasshopper mint cookies",
  "half-moon cookies",
  "hamantaschen",
  "icebox cookies",
  "jelly thumbprint cookies",
  "key lime cookies",
  "lebkuchen",
  "lemon drop cookies",
  "linzer cookies",
  "lofthouse cookies",
  "M&M cookies",
  "macaroons",
  "madeleines",
  "malted chocolate chunk cookies",
  "meringue",
  "Mexican wedding cookies",
  "milano cookies",
  "mint chocolate chip cookies",
  "no-bake cookies",
  "oatmeal raisin cookies",
  "ooey gui cookies",
  "orange creamsicle cookies",
  "Oreos",
  "peanut butter blossom cookies",
  "peanut butter marshmallow sandwich cookies",
  "pecan cookies",
  "pinwheel cookies",
  "pumpkin spice cookies",
  "red velvet cookies",
  "rugelach cookies",
  "salted caramel cookies",
  "salted honey pistachio cookies",
  "shortbread cookies",
  "s'more cookie cups",
  "snickerdoodles",
  "snowball cookies",
  "spritz cookies",
  "stroopwafels",
  "sugar cookies",
  "tea cakes",
  "thin mints",
  "\"trash\" wafer cookies",
  "white chocolate macadamia nut cookies",
  "white chocolate strawberry cookies",
  "whoopie pies"
]

let foods = [
  {
    item: "2 liters of Dr. Pepper",
    response: "Wow, are you really going to finish all that? I can tell that you ain't no bitch!"
  },
  {
    item: "Anything at Jake's On the Water",
    response: "Best restaurant in Potsdam, if I do say so myself. And be sure to say \"hi\" to its owner, Marc Compeau, the greatest businessman of all time!"
  },
  {
    item: "Burgers flipped by SLU",
    response: "The one thing SLU degrees are actually good for! Maybe you'll see " + sessionStorage.goalieName + " working there?"
  },
  {
    item: "Chat-ar dogs",
    response: "Be sure to give your compliments to the chef! PS: only edible if you're baked off your ass first..."
  },
  {
    item: "Garrett",
    response: "Garrett is a big, beautiful hunk of a man! You might have to fight Liam for the right to eat him, though."
  },
  {
    item: "Kitchen sink soup",
    response: "Mmm, there's nothing better than some dirty, lukewarm water with bits of dinner floating in it! My mama used to make it for me as a child."
  },
  {
    item: "Milk and cookies",
    response: null
  },
  {
    item: "RoBro \"consumables\"",
    response: "BlLeAuRrGgH..."
  },
  {
    item: "Salt from a mine",
    response: "<span id=\"laughter\">Hahahahahahahahahahahaha...<em>HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA!!!!!!</em></span> Salt mines are funny, don't @ me."
  }
];

let keyboard = {
  capslock: false,
  space: false,
  tab: false,
  enter: false,
  escape: false,
  backspace: false,
  delete: false,
  shift: false,
  control: false,
  alt: false,
  meta: false,
  fn: false,
  arrowleft: false,
  arrowright: false,
  arrowup: false,
  arrowdown: false,
  pageup: false,
  pagedown: false,
  home: false,
  end: false
};

let logins = {
  consecutive: [],
  total: []
};

let penalties = [
  {
    offence: "boarding",
    timeout: 2
  },
  {
    offence: "butt-ending",
    timeout: 5
  },
  {
    offence: "charging",
    timeout: 2
  },
  {
    offence: "checking from behind",
    timeout: 5
  },
  {
    offence: "clipping",
    timeout: 5
  },
  {
    offence: "cross-checking",
    timeout: 2
  },
  {
    offence: "decapitation",
    timeout: "ejection"
  },
  {
    offence: "delay of game",
    timeout: 2
  },
  {
    offence: "elbowing",
    timeout: 2
  },
  {
    offence: "fighting",
    timeout: 5
  },
  {
    offence: "headbutting",
    timeout: 5
  },
  {
    offence: "high-sticking",
    timeout: 2
  },
  {
    offence: "holding",
    timeout: 2
  },
  {
    offence: "hooking",
    timeout: 2
  },
  {
    offence: "interference",
    timeout: 2
  },
  {
    offence: "kneeing",
    timeout: 2
  },
  {
    offence: "\"playing hockey\"",
    timeout: 5
  },
  {
    offence: "roughing",
    timeout: 2
  },
  {
    offence: "slashing",
    timeout: 2
  },
  {
    offence: "spearing",
    timeout: 5
  },
  {
    offence: "tripping",
    timeout: 2
  },
  {
    offence: "unsportsmanlike conduct",
    timeout: 2
  }
];

let quotes = [
  {
    line: "...and then I peed on Quinton and I felt a lot better.",
    author: "<b>Eric Laferriere</b>"
  },
  {
    line: "Ahh...yogurt...",
    author: "<b>Jonas</b>"
  },
  {
    line: "Al-Qaeda is a force of nature.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Always go hard at Eben's.",
    author: "<b>Joe Mama</b>"
  },
  {
    line: "Am I supposed to slow down for these turns?",
    author: "<b>Savannah</b>"
  },
  {
    line: "Anyone want to have an orgy, but without the orgy stuff?",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "Are you kidding me? This is the time I shotgun sometimes.",
    author: "<b>Schalago</b> at 8:53 AM on a Monday"
  },
  {
    line: "Are you slut-shaming the stick?",
    author: "<b>Abbey</b>"
  },
  {
    line: "At first I was good, but then I got hungry.",
    author: "<b>Max</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">Aye yo, girl!</span><br><span class=\"quoteLine\" id=\"quoteLine2\">Aye yo, watchu want, boy?</span>",
    author: "<b>Liam</b> and a Pizza Hut server"
  },
  {
    line: "Aye yo, Kami, why don't you throw it back like Eric does?",
    author: "<b>Liam</b>"
  },
  {
    line: "Aye yo, where the little kids at?",
    author: "<b>Corsner</b>"
  },
  {
    line: "Ben has created lifelong trauma around my right hand.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Ben, I enjoyed your horse cock, plow my ass and spread my cheeks.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Bowser just fisted me.",
    author: "<b>Ethan Laferriere</b>"
  },
  {
    line: "Brenna is purple.",
    author: "<b>Brenna</b>"
  },
  {
    line: "Brian edged me before creaming me.",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">Bus, please!</span><br><span class=\"quoteLine\" id=\"quoteLine2\">Everyone is gonna witness me zamboni a taco.</span>",
    author: "<b>Schalago</b> and <b>Aria Stephan</b>"
  },
  {
    line: "Call me a poacher the way I'm hunting these cougars.",
    author: "<b>David Vanill</b>"
  },
  {
    line: "Can I seduce you into another year at Clarkson?",
    author: "<b>B</b> to Cat"
  },
  {
    line: "Can you put my hotdog in my trombone case?",
    author: "<b>Cole</b>"
  },
  {
    line: "Charlie Nash is a dirty boy.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Chestnut is better-looking than me and could fuck me if he wanted to.",
    author: "<b>Charlie</b> (allegedly)"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\"><span class=\"barcode\">Chestnut likes you, doesn't he?</span></span><br><span class=\"quoteLine\" id=\"quoteLine1\"><span class=\"barcode\">No, who told you?</span></span>",
    author: "<span class=\"barcode\"><b>Chestnut</b> making a fool of himself while drunk</span>"
  },
  {
    line: "Chestnut's drunk!",
    author: "the whole band"
  },
  {
    line: "Come over here and nut on my bagel.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Conductors? We're good on freshmen.",
    author: "<b>Joe Mama</b>"
  },
  {
    line: "Corsner, do you want to be 36 months pregnant?",
    author: "<b>Caroline</b>"
  },
  {
    line: "Cuddle Monster is getting his own bed.",
    author: "<b>Schalago</b>"
  },
  {
    line: "Cum on my face! Cum on my tits! Cum in my mouth!",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Declan and I are going to be lactating.",
    author: "<b>Chawgo</b>"
  },
  {
    line: "Desperate people might look at a pine cone and think that's sexy, but I think pine cones are sexy all the time.",
    author: "<b>Garrett</b>"
  },
  {
    line: "Did you ever realize that sex and food are the only two things that we humans do for the survival of our species, but also just for fun?",
    author: "some dude probably tripping on shrooms"
  },
  {
    line: "Do you think Claire's would pierce my penis for me?",
    author: "<b>CAMPO</b>"
  },
  {
    line: "Do you want me to show more leg?",
    author: "<b>Ben Solo</b>"
  },
  {
    line: "Do you want to kill Kami Miller?",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Do you want to see me lick my own wood?",
    author: "<b>Charlie</b>"
  },
  {
    line: "Do you want to see my nip collection?",
    author: "<b>Caroline</b>"
  },
  {
    line: "Domino's can suck my dick for cutting the pizza like this.",
    author: "<b>Gabe Aguilar</b>"
  },
  {
    line: "Don't be surprised if you wake up neutered.",
    author: "<b>Dolen</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">E-brake is working! E-brake is working... Never mind, e-brake is not working!</span><br><span class=\"quoteLine\" id=\"quoteLine2\">Score: snow bank&mdash;1, Kronk&mdash;0.</span>",
    author: "<b>Kronk</b> and <b>Ethan Laferriere</b> as Kronk slides into a snow bank"
  },
  {
    line: "Fat or flat, I blow them all.",
    author: "<b>Savannah</b>"
  },
  {
    line: "First you shit Liam's pants, and then you hit me in the back of the head!",
    author: "<b>Ben Solo</b> to Chestnut"
  },
  {
    line: "Fourteen bucks gets you the comfiest place to put your hand that isn't someone else.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Fuck Marc Christensen!",
    author: "all of Clarkson"
  },
  {
    line: "Gabe, no! Get that thing away from my butt!",
    author: "<b>Adam</b>"
  },
  {
    line: "Garrett made no effort on my pants until you came into the picture.",
    author: "<b>Kami</b>"
  },
  {
    line: "Garrett put condoms on my cereal, and it was never the same.",
    author: "<b>Kami</b>"
  },
  {
    line: "Goalie of the year!",
    author: "<b>Ethan Laferriere</b> to the Yale sieve"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">Good news, the girls are finishing first.</span><br><span class=\"quoteLine\" id=\"quoteLine2\">That's a first.</span>",
    author: "<b>David Vanill</b> and <b>Tom Uhl</b>"
  },
  {
    line: "He's a forward, that means he scores the goals.",
    author: "<b>Caroline</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">He's gonna be bending like I bend Liam.</span><br><span class=\"quoteLine\" id=\"quoteLine2\">I have too many tapes of that already.</span>",
    author: "<b>Garrett</b> and <b>Kronk</b>"
  },
  {
    line: "He's just edging at this point, he keeps beating his stick.",
    author: "<b>Jules</b>"
  },
  {
    line: "He wouldn't be the worst person to suck off...I mean, he wouldn't be the best, either.",
    author: "<b>Chestnut</b> about Troy Lassial"
  },
  {
    line: "Hey band! Liam shit himself!",
    author: "<b>Savannah</b>"
  },
  {
    line: "Hey Liam, if I don't use this condom, do you want it back?",
    author: "<b>Caroline</b>"
  },
  {
    line: "Hey, you have to take your shirt off if this pasty white boy with a treasure trail the size of Montana has to.",
    author: "<b>Colin Patricelli</b>"
  },
  {
    line: "Hookers for life, baby.",
    author: "<b>Eric Laferriere</b>"
  },
  {
    line: "Hooking a minor, that's pretty bad.",
    author: "<b>Jack Flaherty</b>"
  },
  {
    line: "How did you get the butthole and I didn't?",
    author: "<b>Brandon</b>"
  },
  {
    line: "How do I tell her I'm into furries?",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "I always tongue my cream cheese.",
    author: "<b>Ryan McCarthy</b>"
  },
  {
    line: "I am sex! And I can bang whoever the fuck I want!",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I am the Hitler of ants.",
    author: "<b>Liam</b>"
  },
  {
    line: "I could be a good egg to you.",
    author: "a MILF hitting on Chestnut"
  },
  {
    line: "I'd do much worse to a lady's shoe.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I'd guzzle Troy's cum while drunk.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I'd love to put my cum through a Keurig. Fry up all those little baby sperms and then slurp them back up.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I do love me some woolly mammoth sex.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I don't believe in girls pooping...like fundamentally.",
    author: "<b>Garrett</b>"
  },
  {
    line: "I don't know how to convey that I'm not gay, but I love you guys.",
    author: "<b>Joe Mama</b>"
  },
  {
    line: "I don't know what the one in my mouth is doing, though.",
    author: "<b>Brenna</b>"
  },
  {
    line: "I ended up pulling out.",
    author: "<b>David Vanill</b>"
  },
  {
    line: "I feel so much better, I lost like three pounds.",
    author: "<b>Tom Uhl</b> after taking a shit"
  },
  {
    line: "I forgot this side of Moore has a real RA.",
    author: "<b>Chestnut</b> in front of Alex Schie, the RA of Moore 3"
  },
  {
    line: "I gotta have a pretty corpse.",
    author: "<b>Madison</b>"
  },
  {
    line: "I had a dream where I had herpes.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I have a new appreciation for Girl Scouts.",
    author: "<b>Ford</b>"
  },
  {
    line: "I have both brothers in the foursome.",
    author: "<b>Garrett</b>"
  },
  {
    line: "I hit chest just to play tits.",
    author: "<b>Emma Fish</b>"
  },
  {
    line: "I honestly started COVID so I could end the band.",
    author: "<b>Joe Mama</b>"
  },
  {
    line: "I just choked on my own bullshit.",
    author: "<b>Lyle</b>"
  },
  {
    line: "I kicked my leg between his legs, and his thighs were rock solid.",
    author: "<b>Aria Garceau</b>"
  },
  {
    line: "I like it full sized.",
    author: "<b>Lyle</b>"
  },
  {
    line: "I like the wet things, you know what I mean.",
    author: "<b>Brandon</b>"
  },
  {
    line: "I'll be gone, so if he dies it won't be my fault.",
    author: "<b>Charlie</b>"
  },
  {
    line: "I'll cream my pants if Tommy Pasanen is playing toknight.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I'll eat breakfast when I wake up, but I won't wake up for breakfast.",
    author: "a random frat bro at Stewart's"
  },
  {
    line: "I'll laser-eye every goddamn motherfucker who tries to deny me the pleasures of gangbang!",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I'll message Charlie on Bumble and then maybe it will lead to a threesome.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">I love sleep, but I just never get enough of it.</span><br><span class=\"quoteLine\" id=\"quoteLine2\">I have the same relationship with women.</span>",
    author: "<b>Leo</b> and <b>Chestnut</b>"
  },
  {
    line: "I love to kiss girls while they're sleeping.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I'm a fucking furry!",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I'm a screamer.",
    author: "<b>Tony Brancato</b>"
  },
  {
    line: "I'm a slut for mango.",
    author: "<b>Brandon</b>"
  },
  {
    line: "I'm an honorary white girl for the day.",
    author: "<b>Cynthia</b>"
  },
  {
    line: "I'm going to go down to the women's locker room and give them a speech.",
    author: "<b>Jonas</b>"
  },
  {
    line: "I'm going to jerk off on the rape trail.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I'm gonna go to your funeral and nominate Jesse Burton to be next.",
    author: "<b>Declan</b> to John"
  },
  {
    line: "I'm just in the pictures for diversity, honestly.",
    author: "<b>Cynthia</b>"
  },
  {
    line: "I'm just manhandling my baguette.",
    author: "<b>David Vanill</b>"
  },
  {
    line: "I'm just wet enough that it's uncomfortable.",
    author: "<b>Eric Laferriere</b>"
  },
  {
    line: "I'm like Medusa except I only get guys hard.",
    author: "<b>Brandon</b>"
  },
  {
    line: "I'm nearly pregnant.",
    author: "<b>Declan</b>"
  },
  {
    line: "I'm not disappointed, but I'm like a father who's daughter is a cheerleader.",
    author: "<b>Obama</b>"
  },
  {
    line: "I'm not going to lie, that's the sloppiest kiss I've gotten in a while, and the last one I got was from my dog.",
    author: "<b>Joe Mama</b>"
  },
  {
    line: "I'm probably not straight at all.",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "I'm sick and tired of peeing on it when I'm drunk.",
    author: "<b>Caroline</b>"
  },
  {
    line: "I'm so glad I blacked out, I've seen too many dicks.",
    author: "<b>Schalago</b>"
  },
  {
    line: "I'm so used to spitting, it's just natural.",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "I'm sorry, it came out fast.",
    author: "<b>Ryan McCarthy</b>"
  },
  {
    line: "I'm thankful for that big shit I took.",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "I'm the only one out of the three of us who's made out with someone who isn't my sister.",
    author: "<b>Chestnut</b> to Charlie and Ben Solo"
  },
  {
    line: "I mean, if you take your kids to Cheel Arena, that's on you.",
    author: "<b>Lyle</b>"
  },
  {
    line: "I only drink with my left hand because I take shots with my right.",
    author: "<b>Brandon</b>"
  },
  {
    line: "I swear, the only time I'll ever get quoted by Brandon is if it's my obituary.",
    author: "<b>Audrey</b>"
  },
  {
    line: "I thought women were the ones who talked about their feelings.",
    author: "<b>Charlie</b>"
  },
  {
    line: "I, too, was once a girl on prom knight with my legs spread.",
    author: "<b>Jonas</b>"
  },
  {
    line: "I trade underwear all the time with the guys, it's what we do here.",
    author: "<b>Jonas</b>"
  },
  {
    line: "I tried to bang his fourteen-year-old sister once.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I used to prefer women, but then I met Brandon.",
    author: "<b>Jonas</b>"
  },
  {
    line: "I've been touched before.",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "I've done a lot of dirty Girl Scouts in my life, but I've never had the drink.",
    author: "<b>Garrett</b>"
  },
  {
    line: "I've got the <q id=\"quoteLineNested\">not allowed within five hundred feet of a school zone</q> look.",
    author: "<b>Kronk</b>"
  },
  {
    line: "I've had brown Indian food, I've just never had feather Indian food.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I've never really thought about what I have on my persons.",
    author: "<b>Josh Schwartz</b> in front of the border patrol agents"
  },
  {
    line: "I want someone to shit on me.",
    author: "<b>Kami</b>"
  },
  {
    line: "I want to decapitate a girl today.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I was hands deep in this dude's ass, and it got colder the farther I went.",
    author: "<b>Kami</b>"
  },
  {
    line: "I was sexually harassing Liam for the whole knight.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "I was trying to finger a bee.",
    author: "<b>Charlie</b>"
  },
  {
    line: "I went for the blow, but I didn't expect a hand in front of it.",
    author: "<b>Declan</b>"
  },
  {
    line: "I wish I could take on three guys.",
    author: "<b>Brandon</b>"
  },
  {
    line: "I would gently caress Ben, but I would not sleep with him.",
    author: "<b>Max</b>"
  },
  {
    line: "If it is not in the G-spot, it doesn't count.",
    author: "<b>Emma Fish</b>"
  },
  {
    line: "If it stands on two legs, that's good enough for me.",
    author: "<b>Jonas</b>"
  },
  {
    line: "If my shoulder wasn't hurt, I would hit the fattest nae-nae right now.",
    author: "<b>Liam</b>"
  },
  {
    line: "If she asked you to dip it in fun dip, would you?",
    author: "<b>Declan</b>"
  },
  {
    line: "If someone gives me shit, I'm gonna give the shit back.",
    author: "<b>Emma Fish</b>"
  },
  {
    line: "If this bus doesn't have a breeze, it's gonna be a long trip.",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "If Trey Taylor took a shot at me, I'd lose my stick, too.",
    author: "<b>Charlie</b>"
  },
  {
    line: "If you can smell it, you can snort it.",
    author: "<b>Jam</b>"
  },
  {
    line: "If you have six working fingers, that's fine.",
    author: "<b>Brandon</b>"
  },
  {
    line: "If you put Tom in a dress and heels, he'd definitely be better than Vanna White.",
    author: "<b>Kronk</b>"
  },
  {
    line: "If you're in a street fight, and you have cocaine and the other person doesn't, you win.",
    author: "<b>Garrett</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">Is putting pants on really that hard?</span><br><span class=\"quoteLine\" id=\"quoteLine2\">He's crippled!</span>",
    author: "<b>Jonas</b> and <b>Ryan O'Rourke</b>"
  },
  {
    line: "Is she having an orgasm right now?",
    author: "<b>Jonas</b>"
  },
  {
    line: "Is this Charmin? 'Cause this is good shit.",
    author: "<b>Gabe Aguilar</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">Is this how you have sex?</span><br><span class=\"quoteLine\" id=\"quoteLine2\">Rhythm is important, so no.</span>",
    author: "<b>Jonas</b> and <b>Ben Solo</b>"
  },
  {
    line: "Is this <span class=\"normalStyle\">Moana</span> one or two?",
    author: "<b>Declan</b>"
  },
  {
    line: "It has too many holes, you can't blow it, Ryan.",
    author: "<b>David Vanill</b>"
  },
  {
    line: "It'll buff right out.",
    author: "<b>Carlo</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">It's a get to know break.</span><br><span class=\"quoteLine\" id=\"quoteLine2\">Who's break?</span>",
    author: "<b>Joe Mama</b> and <b>Savannah</b>"
  },
  {
    line: "It's always exciting when he takes it off.",
    author: "<b>Caroline</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">It's big, I promise.</span><br><span class=\"quoteLine\" id=\"quoteLine2\">It's the only thing that's big about Tom.</span>",
    author: "<b>Tom Uhl</b> and <b>Ethan Laferriere</b>"
  },
  {
    line: "It's not day drinking if you start in the afternoon.",
    author: "<b>Eric Laferriere</b>"
  },
  {
    line: "It's okay if it's not tight, it shows experience.",
    author: "<b>David Vanill</b>"
  },
  {
    line: "It's okay, I'm a honker, too.",
    author: "<b>Bill Jeffers</b>"
  },
  {
    line: "It's okay, they will still lose the third game of the wild card.",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "It's the only time a girl's used two fingers on me and I haven't liked it.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "It's too dark and I don't want to flash them.",
    author: "<b>Garrett</b>"
  },
  {
    line: "Jeff, where did your clothes go?",
    author: "<b>Kami</b>"
  },
  {
    line: "Just let me slurp.",
    author: "<b>John</b>"
  },
  {
    line: "Kami took all my money for dues.",
    author: "<b>Kronk</b>"
  },
  {
    line: "Kyle took my oral virginity.",
    author: "<b>Ryan O'Rourke</b>"
  },
  {
    line: "Last time you spooned Ben, you threw up on his bed.",
    author: "<b>Chawgo</b>"
  },
  {
    line: "Leave it up to fate.",
    author: "<b>Jeff</b>"
  },
  {
    line: "Lefties are of the devil.",
    author: "<b>Russell</b>"
  },
  {
    line: "Like if my balls weren't sweating, I could just sit in there.",
    author: "<b>Liam</b>"
  },
  {
    line: "Maybe I'm gonna be a big girl and not piss my pants.",
    author: "<b>Kami</b>"
  },
  {
    line: "Michelle's so fab, I don't even like women but I'd marry her if she asked because she deserves the world.",
    author: "<b>B</b>"
  },
  {
    line: "More head is always the answer.",
    author: "<b>John</b>"
  },
  {
    line: "My cousin's name is Fingers.",
    author: "<b>Liam</b>"
  },
  {
    line: "My head is spinning, and that's fine.",
    author: "<b>Ryan McCarthy</b>"
  },
  {
    line: "My sister, you should hook up with her.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Nate's actually pretty good in the bedroom.",
    author: "<b>Schalago</b>"
  },
  {
    line: "Next time I'm drunk, stick your dick in my face and see if I'll bite it off.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Nico Sturm is 6&prime; 3&Prime; and 207 lbs? That is some high quality German engineering right there.",
    author: "<b>Colin Patricelli</b>"
  },
  {
    line: "No! I don't want a shaft down my throat!",
    author: "<b>Ben Solo</b>"
  },
  {
    line: "No one needs to be quivering in this day and age.",
    author: "<b>Quinton</b>"
  },
  {
    line: "Oh, implied banging. I thought you said implied begging.",
    author: "<b>Jonas</b>"
  },
  {
    line: "Oh my God, they have tacos?",
    author: "<b>Emma Fish</b> at a Taco Bell"
  },
  {
    line: "Oh no, my family is trying to set me up with my cousin again.",
    author: "<b>Charlie</b>"
  },
  {
    line: "Oh, that's Corsner. I can be all up in that ass.",
    author: "<b>Savannah</b>"
  },
  {
    line: "Oh, you think you can cheat on my mans like that and still be like <q id=\"quoteLineNested\">Oh, you wanna eat my ass?</q>",
    author: "<b>Savannah</b>"
  },
  {
    line: "One is hammered beyond belief, and the other one is Savannah.",
    author: "<b>Kronk</b> about Chestnut and Savannah"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">One liter of Dr. Pepper or two?</span><br><span class=\"quoteLine\" id=\"quoteLine2\">I'm not a bitch!</span>",
    author: "<b>Alice</b> and <b>Colin Whitesell</b>"
  },
  {
    line: "One of my friends back home has a degree in theater, he's going to do nothing with his life.",
    author: "<b>Corsner</b>"
  },
  {
    line: "<q id=\"quoteLineLine\"><span lang=\"ru-ru\" translate=\"no\" dir=\"ltr\" class=\"russian\">Prochnost</span>!</q><br><cite id=\"quoteLineAuthor\"><b>Oliver Queen</b>.</cite>",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Pulling out makes you flatter.",
    author: "<b>Jack Flaherty</b>"
  },
  {
    line: "Put it in your mouth, David.",
    author: "<b>Emma Fish</b>"
  },
  {
    line: "Quinton, can I knee-touch you?",
    author: "<b>Gabe Burch</b>"
  },
  {
    line: "Ra-cha-cha!",
    author: "<b>Brian Manning</b>"
  },
  {
    line: "Ref's got a dumpy.",
    author: "<b>Eric Laferriere</b>"
  },
  {
    line: "Ryan, why are you laughing at cancer?",
    author: "<b>Emma Fish</b>"
  },
  {
    line: "Savannah, you're blurry as fuck right now, and I have my contacts in.",
    author: "<b>Ethan Laferriere</b>"
  },
  {
    line: "She hits the bass drum lighter than I hit the bottle.",
    author: "<b>Declan</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">Smashing is harder than I thought.</span><br><span class=\"quoteLine\" id=\"quoteLine2\">I'm actually pretty good at it.</span>",
    author: "<b>Tom Uhl</b> and <b>David Vanill</b>"
  },
  {
    line: "So glad Liam won't be my VP next year.",
    author: "<b>Kami</b>"
  },
  {
    line: "So, I didn't throw up after fisting it.",
    author: "<b>David Vanill</b>"
  },
  {
    line: "So women ended Prohibition? Now I'm in favor of women's rights.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Somebody get me his mother's name.",
    author: "<b>Colin Patricelli</b>"
  },
  {
    line: "Spank me!",
    author: "<b>Chestnut</b>"
  },
  {
    line: "Spell \"Haider\": D-A-D-D-Y.",
    author: "<b>Brandon</b>"
  },
  {
    line: "Stop gurgling, just swallow, please.",
    author: "<b>Alex Brenton</b>"
  },
  {
    line: "That's Brom? That man is like a gorilla mixed with a tank that had an affair with an aircraft carrier.",
    author: "<b>Eric Laferriere</b>"
  },
  {
    line: "That's cool, our moms were pregnant at the same time.",
    author: "<b>Ryan McCarthy</b>"
  },
  {
    line: "That's daddy to you, son.",
    author: "<b>Lyle</b>"
  },
  {
    line: "That's dope as fuck!",
    author: "<b>Chestnut</b> (&times;212)"
  },
  {
    line: "That's my donut, bitch!",
    author: "<b>Eric Laferriere</b> to a bee"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">That's so cool, so you're gonna like mechanically engineering things?</span><br><span class=\"quoteLine\" id=\"quoteLine2\">Yeah, like vibrators. You gotta follow your dreams sometimes.</span>",
    author: "<b>Chestnut</b> and <b>Schalago</b>"
  },
  {
    line: "The food here is pretty spicy, I could use some sweet food to follow it up.",
    author: "<b>Marc Christensen</b> to the secretary he knocked up"
  },
  {
    line: "The only issue is that she eats kangaroo meat.",
    author: "<b>Brandon</b>"
  },
  {
    line: "There's only two things I come for: justice and free beer.",
    author: "<b>Kronk</b>"
  },
  {
    line: "They're having sex? I didn't sign up for this! Are they done? It was in a dark room, I didn't know what was going on!",
    author: "<b>Jonas</b>"
  },
  {
    line: "They're not using their hockey correctly, and it's making me sad.",
    author: "<b>Audrey</b>"
  },
  {
    line: "They speak Spanish in Colombia, dipshit!",
    author: "<b>Ryan McCarthy</b> to Chestnut"
  },
  {
    line: "This is kind of liberating...it's liberating...",
    author: "<b>Tom Uhl</b> while naked"
  },
  {
    line: "This is too short to beat effectively.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "This test isn't accurate, it doesn't have anything about pickles on it.",
    author: "<b>Ryan O'Rourke</b>"
  },
  {
    line: "Those are Tom's sex lights.",
    author: "<b>Ryan O'Rourke</b>"
  },
  {
    line: "Tom, it's gotta go on your balls.",
    author: "<b>Jonas</b>"
  },
  {
    line: "Trombones are more expensive than the average freshman.",
    author: "<b>Ryan O'Rourke</b>"
  },
  {
    line: "Two...four...six...eight...yeah, that's at least twenty disappointed dads.",
    author: "<b>Chawgo</b>"
  },
  {
    line: "Watch me sexually assault Walmart over LinkedIn.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "We did this show and tell where you show your penis and tell how long it is.",
    author: "<b>Garrett</b>"
  },
  {
    line: "We just suck it back and swallow it.",
    author: "<b>Quinton</b>"
  },
  {
    line: "We need to know if you have any SLU-like symptoms.",
    author: "<b>Ryan O'Rourke</b>"
  },
  {
    line: "We're fucking virgins!",
    author: "<b>Kyle</b>"
  },
  {
    line: "We're not musicians with an alcohol problem, we're alcoholics with a music problem.",
    author: "<b>Colin Patricelli</b>"
  },
  {
    line: "We slurp them up with joy.",
    author: "<b>Kelly</b>"
  },
  {
    line: "Well, I'm not in Dallas, but I'm still ready to get dicked down.",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "Well, I'm still woozy, but at least I don't have to shit anymore.",
    author: "<b>Tom Uhl</b>"
  },
  {
    line: "What can I do to make you more comfortable, road head?",
    author: "<b>Gabe Burch</b>"
  },
  {
    line: "What did you expect? It was written by a drummer.",
    author: "<b>Alice</b>"
  },
  {
    line: "What's the animal...a pinecone?",
    author: "<b>Schalago</b>"
  },
  {
    line: "<span class=\"quoteLine\" id=\"quoteLine1\">Which one's harder: sucking or blowing?</span><br><span class=\"quoteLine\" id=\"quoteLine2\">Me after you said that.</span>",
    author: "<b>Tom Uhl</b> and <b>Eric Laferriere</b>"
  },
  {
    line: "Why am I already leaking?",
    author: "<b>David Vanill</b>"
  },
  {
    line: "Why is it vibrating?",
    author: "the whole band"
  },
  {
    line: "Woah...that was a bad idea.",
    author: "<b>Tom Uhl</b> after eating an entire box of cinnamon twists"
  },
  {
    line: "Would you rather fight a jellyfish-sized lion or a lion-sized jellyfish?",
    author: "<b>Colin Patricelli</b>"
  },
  {
    line: "You edged me right to the brink, and then you took your hand away.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "You guys are like my pets.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "You know what the Lord said? He said <q id=\"quoteLineNested\">Let there be Busch Light!</q>",
    author: "<b>Liam</b>"
  },
  {
    line: "You know what would be funny? We should put a roofie in Ben's drink before he gets back.",
    author: "<b>Chestnut</b>"
  },
  {
    line: "You look like you suck dick for gas money and then still walk home.",
    author: "some drunk chick at a bar"
  },
  {
    line: "You need one with a condom on it. Safe sex, everybody.",
    author: "<b>Ryan McCarthy</b>"
  },
  {
    line: "You never cheese another man's pasta.",
    author: "<b>Joe Mama</b>"
  },
  {
    line: "You only have one liver, right?",
    author: "<b>Gabe Burch</b>"
  },
  {
    line: "You're like a goat, all I know is that they sneeze.",
    author: "<b>Eric Laferriere</b>"
  },
  {
    line: "You're not practicing safe sex; as a matter of fact, you're not practicing sex at all.",
    author: "<b>John</b>"
  },
  {
    line: "You're the reason we go out to recess late.",
    author: "<b>Aria Garceau</b>"
  },
  {
    line: "You're too old for me, but I'll still touch you.",
    author: "<b>Russell</b>"
  },
  {
    line: "You think I can make myself cry right now? No, I just almost pissed myself.",
    author: "<b>Joe Mama</b>"
  },
  {
    line: "Your big ass keeps breaking the cowbells, that's why.",
    author: "a security guard to Brom"
  },
  {
    line: "Zamboni the McChicken.",
    author: "<b>Jam</b>"
  }
];

let songs = [
  {
    title: "<i>7 Nation Army</i>",
    artist: "the White Stripes",
    image: "img/7NationArmy.png",
    audio: "audio/7NationArmy.mp3",
    duration: 238,
    lyrics: "imGonnaFightEmOffA7NationArmyCouldntHoldMeBackTheyreGonnaRipItOffTakinTheirTimeRightBehindMyBackAndImTalkinToMyselfAtNightBecauseICantForgetBackAndForthThroughMyMindBehindACigaretteAndTheMessageCominFromMyEyesSaysLeaveItAloneDontWannaHearAboutItEverySingleOnesGotAStoryToTellEveryoneKnowsAboutItFromTheQueenOfEnglandToTheHoundsOfHellAndIfICatchItCominBackMyWayImGonnaServeItToYouAndThatAintWhatYouWantToHearButThatsWhatIllDoAndTheFeelinCominFromMyBonesSaysFindAHomeImGoinToWichitaFarFromThisOperaForevermoreImGonnaWorkTheStrawMakeTheSweatDripOutOfEveryPoreAndImBleedinAndImBleedinAndImBleedinRightBeforeTheLordAllTheWordsAreGonnaBleedFromMeAndIWillThinkNoMoreAndTheStainsCominFromMyBloodTellMeGoBackHome"
  },
  {
    title: "<i>25 or 6 to 4</i>",
    artist: "Chicago",
    image: "img/25Or6To4.png",
    audio: "audio/25Or6To4.mp3",
    duration: 299,
    lyrics: "waitingForTheBreakOfDaySearchingForSomethingToSayFlashingLightsAgainstTheSkyGivingUpICloseMyEyesSittingCrossLeggedOnTheFloor25Or6To4StaringBlindlyIntoSpaceGettingUpToSplashMyFaceWantingJustToStayAwakeWonderingHowMuchICanTakeShouldITryToDoSomeMore25Or6To4OhYeahFeelingLikeIOughtToSleepSpinningRoomIsSinkingDeepSearchingForSomethingToSayWaitingForTheBreakOfDay25Or6To425Or6To4Alright"
  },
  {
    title: "<i>Any Way You Want It</i>",
    artist: "Journey",
    image: "img/anyWayYouWantIt.png",
    audio: "audio/anyWayYouWantIt.mp3",
    duration: 202,
    lyrics: "anyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItSheLovesToLaughSheLovesToSingSheLovesEverythingSheLovesToMoveSheLovesToGrooveSheLovesTheLovinThingsOohAllNightAllNightOhEveryNightSoHoldTightHoldTightOohBabyHoldTightOhSheSaidAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItSheSaidAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItIWasAloneINeverKnewWhatGoodLoveCouldDoOohThenWeTouchedThenWeSangAboutTheLovinThingsOohAllNightAllNightOhEveryNightSoHoldTightHoldTightOohBabyHoldTightOhSheSaidAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItISaidAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItSheSaidOhhHoldOnHoldOnHoldOnOhSheSaidAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItSheSaidAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItAnyWayYouWantItThatsTheWayYouNeedItAnyWayYouWantItAnyWayYouWantItThatsTheWayYouNeedIt"
  },
  {
    title: "<i>Apache</i>",
    artist: "the Sugarhill Gang",
    image: "img/apache.png",
    audio: "audio/apache.mp3",
    duration: 249,
    lyrics: "hoHoHoTontoJumpOnItJumpOnItJumpOnItKemosabeJumpOnItJumpOnItJumpOnItCusterJumpOnItJumpOnItJumpOnItApacheJumpOnItJumpOnItWooAHungaHungaAHungaHungaImBigBankIAmTheChiefIGotALotOfRapsButIllBeBriefINeverNeedAHorseILikeToChillSoIDriveUpInMyNewSevilleMyTribeWentDownInTheHallOfFameCauseImTheOneWhoShotJesseJamesPoundForPoundIWillNeverBreakDownBigBankNoSirIDontMessAroundWooHoWooTontoJumpOnItJumpOnItJumpOnItKemosabeJumpOnItJumpOnItJumpOnItCusterJumpOnItJumpOnItJumpOnItApacheJumpOnItJumpOnItWooAHungaHungaAHungaHungaLikeKemosabeOfCourseItsMeImBetterKnownAsTheMasterGAFiringSquadSensedTheDangerWhenTheyreStungByTheRappingRangerHadALittleTalkWithMyMedicineManHeSaidGetThemSquawsFastAsYouCanToAllYouGirlsThatWantToJoinMyTribeJustMoveToMyRhythmAndFeelMyVibePutUpAFussInTheEndYoullAgreeWhenYouComeInsideMyTeepeeAsISaidBeforeYouCouldSenseTheDangerWhenYoureStungByTheRappingRangerWhenSilverAndITakeARouteAllYouSuckersBetterStepAsideIStingSquawsThenIRunAwayHiYoSilverIsWhatISayHoHoWooHitItGangHoHoHoTontoJumpOnItJumpOnItJumpOnItKemosabeJumpOnItJumpOnItJumpOnItCusterJumpOnItJumpOnItJumpOnItApacheJumpOnItJumpOnItWooAHungaHungaAHungaHungaAPowWowJustRockItOutFingerPoppinToTheBreakOfDawnKeepItRockinLikeTheStuffThatWeCallMaizeWhatsThatHotButteredPopcornYouJustHippaHoppaDippaBoppaBangTheBoogieWoogieBetchaWantToBoogieAgainAndYouCanPutMeToTheTestAtYourRequestIRockYouOutOfYourMoccasinKemosabeGotDownTookOffHisMaskHeKickedOffHisShoesAndDidTheMonsterMashTontoCameAlongSawWhatWasHappeninHisHeadBeganToBopAndHisFootStartToClappinGoSlamDunkDoTheJerkAndWithTheMicIsHowMySmokeSignalsWorkTheyWereJamminOffARecordThatSaidItBestNowWhatYouHearIsNotATestWooAHungaHungaAHungaHungaTontoJumpOnItJumpOnItJumpOnItKemosabeJumpOnItJumpOnItJumpOnItCusterJumpOnItJumpOnItJumpOnItApacheJumpOnItJumpOnItWoo"
  },
  {
    title: "<i>Caravan</i>",
    artist: "Duke Ellington, Irving Mills, and Juan Tizol",
    image: "img/caravan.png",
    audio: "audio/caravan.mp3",
    duration: 554,
    lyrics: ""
  },
  {
    title: "<i>Carry On Wayward Son</i>",
    artist: "Kansas",
    image: "img/carryOnWaywardSon.png",
    audio: "audio/carryOnWaywardSon.mp3",
    duration: 323,
    lyrics: "carryOnMyWaywardSonTherellBePeaceWhenYouAreDoneLayYourWearyHeadToRestDontYouCryNoMoreOnceIRoseAboveTheNoiseAndConfusionJustToGetAGlimpseBeyondThisIllusionIWasSoaringEverHigherButIFlewTooHighThoughMyEyesCouldSeeIStillWasABlindManThoughMyMindCouldThinkIStillWasAMadManIHearTheVoicesWhenImDreamingICanHearThemSayCarryOnMyWaywardSonTherellBePeaceWhenYouAreDoneLayYourWearyHeadToRestDontYouCryNoMoreMasqueradingAsAManWithAReasonMyCharadeIsTheEventOfTheSeasonAndIfIClaimToBeAWiseManWellItSurelyMeansThatIDontKnowOnAStormySeaOfMovingEmotionTossedAboutImLikeAShipOnTheOceanISetACourseForWindsOfFortuneButIHearTheVoicesSayCarryOnMyWaywardSonTherellBePeaceWhenYouAreDoneLayYourWearyHeadToRestDontYouCryNoMoreNoCarryOnYouWillAlwaysRememberCarryOnNothingEqualsTheSplendorNowYourLifesNoLongerEmptySurelyHeavenWaitsForYouCarryOnMyWaywardSonTherellBePeaceWhenYouAreDoneLayYourWearyHeadToRestDontYouCryDontYouCryNoMoreNoMore"
  },
  {
    title: "<i>Centerfold</i>",
    artist: "the J. Geils Band",
    image: "img/centerfold.png",
    audio: "audio/centerfold.mp3",
    duration: 218,
    lyrics: "doesSheWalkDoesSheTalkDoesSheComeCompleteMyHomeroomHomeroomAngelAlwaysPulledMeFromMySeatSheWasPureLikeSnowflakesNoOneCouldEverStainTheMemoryOfMyAngelCouldNeverCauseMePainYearsGoByImLookinThroughAGirlyMagazineAndTheresMyHomeroomAngelOnThePagesInBetweenMyBloodRunsColdMyMemoryHasJustBeenSoldMyAngelIsTheCenterfoldAngelIsTheCenterfordMyBloodRunsColdMyMemoryHasJustBeenSoldAngelIsTheCenterfordSlippedMeNotesUnderTheDeskWhileIWasThinkinAboutHerDressIWasShyITurnedAwayBeforeSheCaughtMyEyeIWasShakinInMyShoesWheneverSheFlashedThoseBabyBluesSomethingHadAHoldOnMeWhenAngelPassedCloseByThoseSoftAndFuzzySweatersTooMagicalToTouchTooSeeHerInThatNegligeeIsReallyJustTooMuchMyBloodRunsColdYeahMyMemoryHasJustBeenSoldMyAngelIsTheCenterfoldAngelIsTheCenterfordMyBloodRunsColdMyMemoryHasJustBeenSoldOhYeahAngelIsTheCenterfordNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaItsOkayIUnderstandThisAintNoNeverNeverlandIHopeThatWhenThisIssuesGoneIllSeeYouWhenYourClothesAreOnTakeYourCarYesWeWillWellTakeYourCarAndDriveItWellTakeItToAMotelRoomAndTakeItOffInPrivateAPartOfMeHasJustBeenRippedThePagesFromMyMindAreStrippedOhNoICantDenyItOhYeahIGuessIGottaBuyItMyBloodRunsColdMyMemoryHasJustBeenSoldMyAngelIsTheCenterfoldAngelIsTheCenterfordMyBloodRunsColdMyMemoryHasJustBeenSoldMyAngelIsTheCenterfoldNaNaNaNaNaNaNaNaNaNaNaNaNaAlrightAlrightOneTwoThreeFourNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaMyBloodRunsColdMyMemoryHasJustBeenSoldMyAngelIsTheCenterfoldAngelIsTheCenterfordMyBloodRunsColdOhYeahMyMemoryHasJustBeenSoldAngelIsTheCenterfoldAngelIsTheCenterfordNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa"
  },
  {
    title: "<i>Centuries</i>",
    artist: "Fall Out Boy",
    image: "img/centuries.png",
    audio: "audio/centuries.mp3",
    duration: 266,
    lyrics: "someLegendsAreToldSomeTurnToDustOrToGoldButYouWillRememberMeRememberMeForCenturiesAndJustOneMistakeIsAllItWillTakeWellGoDownInHistoryRememberMeForCenturiesHeyYeahOhHeyHeyYeahRememberMeForCenturiesMummifiedMyTeenageDreamsNoItsNothingWrongWithMeTheKidsAreAllWrongTheStoriesAreOffHeavyMetalBrokeMyHeartComeOnComeOnAndLetMeInTheBruisesOnYourThighsLikeMyFingerprintsAndThisIsSupposedToMatchTheDarknessThatYouFeltINeverMeantForYouToFixYourselfsomeLegendsAreToldSomeTurnToDustOrToGoldButYouWillRememberMeRememberMeForCenturiesAndJustOneMistakeIsAllItWillTakeWellGoDownInHistoryRememberMeForCenturiesHeyYeahOhHeyHeyYeahRememberMeForCenturiesAndICantStopTilTheWholeWorldKnowsMyNameCauseIWasOnlyBornInsideMyDreamsUntilYouDieForMeAsLongAsTheresALightMyShadowsOverYouCauseIAmTheOppositeOfAmnesiaAndYoureACherryBlossomYoureAboutToBloomYouLookSoPrettyButYoureGoneSoSoonsomeLegendsAreToldSomeTurnToDustOrToGoldButYouWillRememberMeRememberMeForCenturiesAndJustOneMistakeIsAllItWillTakeWellGoDownInHistoryRememberMeForCenturiesHeyYeahOhHeyHeyYeahRememberMeForCenturiesWeveBeenHereForeverAndHeresTheFrozenProofICouldScreamForeverWeAreThePoisonedYouthsomeLegendsAreToldSomeTurnToDustOrToGoldButYouWillRememberMeRememberMeForCenturiesAndJustOneMistakeIsAllItWillTakeWellGoDownInHistoryRememberMeForCenturiesHeyYeahOhHeyWellGoDownInHistoryHeyYeahRememberMeForCenturies"
  },
  {
    title: "Clarkson University Alma Mater",
    artist: "Guy Lamson and Robert Smith",
    image: "img/clarksonUniversityAlmaMater.png",
    audio: "audio/clarksonUniversityAlmaMater.mp3",
    duration: 42,
    lyrics: "hearUsClarksonHailToTheeHearUsSingThyPraiseWeCherishDearTheMemoryOfGoldenCollegeDaysThyBannerGreenAndGoldShallStandUntilEternityAlmaMaterStrongAndGrandClarksonHailToThee"
  },
  {
    title: "<i>Come With Me Now</i>",
    artist: "Kongos",
    image: "img/comeWithMeNow.png",
    audio: "audio/comeWithMeNow.mp3",
    duration: 212,
    lyrics: "comeWithMeNowComeWithMeNowWoahComeWithMeNowImGonnaTakeYouDownWoahComeWithMeNowImGonnaShowYouHowWoahComeWithMeNowImGonnaTakeYouDownWoahComeWithMeNowImGonnaShowYouHowAfraidToLoseControlAndCaughtUpInThisWorldIveWastedTimeIveWastedBreathIThinkIveThoughtMyselfToDeathIWasBornWithoutThisFearNowOnlyThisSeemsClearINeedToMoveINeedToFightINeedToLoseMyselfTonightWoahComeWithMeNowImGonnaTakeYouDownWoahComeWithMeNowImGonnaShowYouHowIThinkWithMyHeartAndIllMoveWithMyHeadIOpenMyMouthAndItsSomethingIveReadIStoodAtThisDoorBeforeImToldButAPartOfMeKnowsThatImGrowingTooOldConfusedWhatIThoughtWithSomethingIFeltConfuseWhatIFeelWithSomethingThatsRealITriedToSellMySoulLastNightFunnyHeWouldntEvenTakeABiteFarAwayIHeardHimeSayComeWithMeNowDontDelayIHeardHimeSayComeWithMeNowFarAwayIHeardHimeSayComeWithMeNowDontDelayIHeardHimeSayComeWithMeNowWoahComeWithMeNowImGonnaTakeYouDownWoahComeWithMeNowImGonnaShowYouHowAfraidToLoseControlAndCaughtUpInThisWorldIveWastedTimeIveWastedBreathIThinkIveThoughtMyselfToDeathIWasBornWithoutThisFearNowOnlyThisSeemsClearINeedToMoveINeedToFightINeedToLoseMyselfTonightWoahComeWithMeNowWoahComeWithMeNowImGonnaTakeYouDownWoahComeWithMeNow"
  },
  {
    title: "<i>Conga</i>",
    artist: "the Miami Sound Machine",
    image: "img/conga.png",
    audio: "audio/conga.mp3",
    duration: 255,
    lyrics: "comeOnShakeYourBodyBabyDoTheCongaIKnowYouCantControlYourselfAnyLongerComeOnShakeYourBodyBabyDoTheCongaIKnowYouCantControlYourselfAnyLongerComeOnShakeYourBodyBabyDoTheCongaIKnowYouCantControlYourselfAnyLongerFeelTheRhythmOfTheMusicGettingStrongerDontYouFightItTilYouveTriedItDoTheCongaBeatEverybodyGatherRoundNowLetYourBodyFeelTheHeatDontYouWorryIfYouCantDanceLetTheMusicMoveYourFeetItsTheRhythmOfTheIslandAndLikeASugarcaneSoSweetIfYouWantToDoTheCongaYouveGotToListenToTheBeatComeOnShakeYourBodyBabyDoTheCongaIKnowYouCantControlYourselfAnyLongerFeelTheRhythmOfTheMusicGettingStrongerDontYouFightItTilYouveTriedItDoTheCongaBeatFeelTheFireOfDesireAsYouDanceTheNightAwayCosTonightWereGonnaPartyTilWeSeeTheBreakOfDayBetterGetYourselfTogetherAndHoldOnToWhatYouGotOnceTheMusicHitsYourSystemTheresNoWayYoureGonnaStopComeOnShakeYourBodyBabyDoTheCongaIKnowYouCantControlYourselfAnyLongerFeelTheRhythmOfTheMusicGettingStrongerDontYouFightItTilYouveTriedItDoTheCongaBeatComeOnShakeYourBodyBabyDoTheCongaIKnowYouCantControlYourselfAnyLongerFeelTheRhythmOfTheMusicGettingStrongerDontYouFightItTilYouveTriedItDoTheCongaComeOnShakeYourBodyBabyDoTheCongaIKnowYouCantControlYourselfAnyLongerFeelTheRhythmOfTheMusicGettingStrongerDontYouFightItTilYouveTriedItDoTheCongaBeatComeOnShakeYourBodyBabyDoTheConga"
  },
  {
    title: "<i>Crazy Train</i>",
    artist: "Ozzy Osbourne",
    image: "img/crazyTrain.png",
    audio: "audio/crazyTrain.mp3",
    duration: 226,
    lyrics: "oliveOilHaHaHaHaHaHaHaAyAyAyAyAyAyAyCrazyButThatsHowItGoesMillionsOfPeopleLivingAsFoesMaybeItsNotTooLateToLearnHowToLoveAndForgetHowToHateMentalWoundsNotHealingLifesABitterShameImGoingOffTheRailsOnACrazyTrainImGoingOffTheRailsOnACrazyTrainLetsGoIveListenedToPreachersIveListenedToFoolsIveWatchedAllTheDropoutsWhoMakeTheirOwnRulesOnePersonConditionedToRuleAndControlTheMediaSellsItAndYouLiveTheRollMentalWoundsStillScreamingDrivingMeInsaneImGoingOffTheRailsOnACrazyTrainImGoingOffTheRailsOnACrazyTrainIKnowThatThingsAreGoingWrongForMeYouGottaListenToMyWordsYeahHeirsOfAColdWarThatsWhatWeveBecomeInheritingTroublesImMentallyNumbCrazyIJustCannotBearImLivingWithSomethingThatJustIsntFairMentalWoundsNotHealingWhoAndWhatsToBlameImGoingOffTheRailsOnACrazyTrainImGoingOffTheRailsOnACrazyTrain"
  },
  {
    title: "<i>Cupid Shuffle</i>",
    artist: "Cupid",
    image: "img/cupidShuffle.png",
    audio: "audio/cupidShuffle.mp3",
    duration: 279,
    lyrics: "newCupidTimeForAChangeCupidShuffleCupidShuffleNewStyleDownDownDoYourDanceDoYourDanceWeGotABrandNewDanceDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceNewStyleYeahTheySayImARapperAndISayNoComeOnTheySayWhatYouDoingTrynaDoSomeZydecoIJustLetTheMusicComeFromMySoulSoAllOfMyPeopleCanStayOnTheFloorTheyGotABrandNewDanceYouGottaMoveYourMuscleBrandNewDanceItsCalledTheCupidShuffleItDontMatterIfYoureYoungOrYoureOldHereWeGoWeGoneShowYouHowItGoToTheRightToTheRightToTheRightToTheRightToTheLeftToTheLeftToTheLeftToTheLeftNowKickNowKickNowKickNowKickNowWalkItByYourselfNowWalkItByYourselfLetMeSeeYouDoDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceLetMeSeeYaDoTheCupidDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceComeOnDownDownDoYourDanceDoYourDanceLetMeSeeLetMeSeeYaDoTheCupidDownDownDoYourDanceDoYourDanceDoTheShuffleBabyYeahDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceToTheRightToTheRightToTheRightToTheRightToTheLeftToTheLeftToTheLeftToTheLeftNowKickNowKickNowKickNowKickNowWalkItByYourselfNowWalkItByYourselfToTheRightToTheRightToTheRightToTheRightToTheLeftToTheLeftToTheLeftToTheLeftNowKickNowKickNowKickNowKickNowWalkItByYourselfNowWalkItByYourselfNowYouSeeWhatImTalkingAboutOhIRepresentForTheDirtySouthWhereWereKnownForSwingingOutImGoneShowYouWhatImTalkingAboutDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceALetMeSeeYaDoTheCupidShuffleTheCupidCupidShuffleDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceTheCupidShuffleTheCupidShuffleDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceHereWeGoToTheRightTheRightTheRightTheRightTheRightTheLeftTheLeftTheLeftTheLeftTheLeftNowKickNowKickNowComeOnBabyKickNowWalkItByYourselfwalkItByYourselfNowWalkWitItToTheRightToTheRightToTheRightTheRightTheRightTheLeftToTheLeftToTheLeftTheLeftTheLeftNowKickNowKickNowKickNowKickNowWalkItByYourselfWalkItByYourselfAndDoTheCupidShuffleNowLetMeSeeYouDoTheCupidShuffleNowLetMeSeeYouDoTheItsYaBoyCupidCUPTheITheDMrFatOnTheTrackGotAnotherHittinBeatDownDownDoYourDanceDoYourDanceComeOnComeOnDownDownDoYourDanceDoYourDanceLetMeSeeYouDownDownDoYourDanceDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceDownDownDoYourDanceDoYourDanceWeGotABrandNewDanceDownDownDoYourDanceDoYourDanceWeGotABrandNewSoundDownDownDoYourDanceDoYourDanceWeGotABrandNewFeelDownDownDoYourDanceDoYourDanceWeGotABrandNewStyleYall"
  },
  {
    title: "<i>Everybody Needs Somebody To Love</i>",
    artist: "Bert Berns, Jerry Wexler, and Solomon Burke",
    image: "img/everybodyNeedsSomebodyToLove.png",
    audio: "audio/everybodyNeedsSomebodyToLove.mp3",
    duration: 200,
    lyrics: "everybodyNeedsSomebodyEverybodyNeedsSomebodyToLoveSomeoneToLoveSomeoneToLoveSweetheartToMissSweetheartToMissSugarToKissSugarToKissINeedYouYouYouINeedYouYouYouINeedYouYouYouInTheMorningINeedYouYouYouWhenMySoulsOnFireINeedYouYouYouSometimesIFeelIFeelALittleSadInsideWhenMyBabyMistreatsMeINeverNeverNeverHaveAPlaceToHideINeedYouSometimesIFeelIFeelALittleSadInsideWhenMyBabyMistreatsMeINeverNeverNeverHaveAPlaceToHideINeedYouYouYouINeedYouYouYouINeedYouYouYouINeedYouYouYouINeedYouYouKnowPeopleWhenYouDoFindSomebodyHoldThatWomanHoldThatManLoveHimPleaseHimSqueezeHerPleaseHerHoldSqueezeAndPleaseThatPersonGiveEmAllYourLoveSignifyYourFeelingsWithEveryGentleCaressBecauseItsSoImportantToHaveThatSpecialSomebodyToHoldKissMissSqueezeAndPleaseEverybodyNeedsSomebodyEverybodyNeedsSomebodyToLoveEverybodySomeoneToLoveNeedsSomebodySweetheartToMissEverybodySugarToKissNeedsSomebodyINeedYouYouYouINeedYouYouYouINeedYouYouYouINeedYouYouYouINeedYouYouYouEverybodyINeedYouYouYouNeedsSomebodyINeedYouYouYouEverybodyINeedYouYouYouNeedsSomebodyInTheMorningWhenMySoulsOnFireEverybodyNeedsSomebodyWellThereAintNoOneAroundEverybodyINeedYouYouYouYouNeedsSomebodyINeedYouYouYouYouEverybodyINeedYouYouYouNeedsSomebodyINeedYou"
  },
  {
    title: "<i>Everytime We Touch</i>",
    artist: "Cascada",
    image: "img/everytimeWeTouch.png",
    audio: "audio/everytimeWeTouch.mp3",
    duration: 197,
    lyrics: "iStillHearYourVoiceWhenYouSleepNextToMeIStillFeelYourTouchInMyDreamsForgiveMeMyWeaknessButIDontKnowWhyWithoutYouItsHardToSurviveCauseEverytimeWeTouchIGetThisFeelingAndEverytimeWeKissISwearICouldFlyCantYouFeelMyHeartBeatFastIWantThisToLastNeedYouByMySideCauseEverytimeWeTouchIFeelThisStaticAndEverytimeWeKissIReachForTheSkyCantYouHearMyHeartBeatSlowICantLetYouGoWantYouInMyLifeYourArmsAreMyCastleYourHeartIsMySkyTheyWipeAwayTearsThatICryTheGoodAndTheBadTimesWeveBeenThroughThemAllYouMakeMeRiseWhenIFallCauseEverytimeWeTouchIGetThisFeelingAndEverytimeWeKissISwearICouldFlyCantYouFeelMyHeartBeatFastIWantThisToLastNeedYouByMySideCauseEverytimeWeTouchIFeelThisStaticAndEverytimeWeKissIReachForTheSkyCantYouHearMyHeartBeatSlowICantLetYouGoWantYouInMyLifeCauseEverytimeWeTouchIGetThisFeelingAndEverytimeWeKissISwearICouldFlyCantYouFeelMyHeartBeatFastIWantThisToLastNeedYouByMySide"
  },
  {
    title: "<i>Eye of the Tiger</i>",
    artist: "Survivor",
    image: "img/eyeOfTheTiger.png",
    audio: "audio/eyeOfTheTiger.mp3",
    duration: 244,
    lyrics: "risingUpBackOnTheStreetDidMyTimeTookMyChancesWentTheDistanceNowImBackOnMyFeetJustAManAndHisWillToSurviveSoManyTimesItHappensTooFastYouChangeYourPassionForGloryDontLoseYourGripOnTheDreamsOfThePastYouMustFightJustToKeepThemAliveItsTheEyeOfTheTigerItsTheThrillOfTheFightRisingUpToTheChallengeOfOurRivalAndTheLastKnownSurvivorStalksHisPreyInTheNightAndHesWatchingUsAllWithTheEyeOfTheTigerFaceToFaceOutInTheHeatHangingToughStayingHungryTheyStackTheOddsTilWeTakeToTheStreetForTheKillWithTheSkillToSurviveItsTheEyeOfTheTigerItsTheThrillOfTheFightRisingUpToTheChallengeOfOurRivalAndTheLastKnownSurvivorStalksHisPreyInTheNightAndHesWatchingUsAllWithTheEyeOfTheTigerRisingUpStraightToTheTopHadTheGutsGotTheGloryWentTheDistanceNowImNotGoingToStopJustAManAndHisWillToSurviveItsTheEyeOfTheTigerItsTheThrillOfTheFightRisingUpToTheChallengeOfOurRivalAndTheLastKnownSurvivorStalksHisPreyInTheNightAndHesWatchingUsAllWithTheEyeOfTheTigerTheEyeOfTheTigerTheEyeOfTheTigerTheEyeOfTheTigerTheEyeOfTheTiger"
  },
  {
    title: "<i>Footloose</i> Theme",
    artist: "Dean Pitchford and Kenny Loggins",
    image: "img/footlooseTheme.png",
    audio: "audio/footlooseTheme.mp3",
    duration: 175,
    lyrics: "beenWorkingSoHardImPunchingMyCardEightHoursForWhatOhTellMeWhatIGotIGottenThisFeelingThatTimesJustHoldingMeDownIllHitTheCeilingOrElseIllTearUpThisTownTonightIGottaCutLooseFootlooseKickOffYourSundayShoesPleaseLouisePullMeUpOffMyKneesJackGetBackCmonBeforeWeCrackLoseYourBluesEverybodyCutFootlooseYourePlayingSoCoolObeyingEveryRuleDigWayDownInYourHeartYoureBurningYearningForSomeSomebodyToTellYouThatLifeAintPassingYouByImTryingToTellYouItWillIfYouDontEvenTryYouCanFlyIfYoudOnlyCutLooseFootlooseKickOffYourSundayShoesOohWeeMarieShakeItShakeItForMeWhoaMiloCmonCmonLetsGoLoseYourBluesEverybodyCutFootlooseCutFootlooseOhOhOhOhCutFootlooseOhOhOhOhCutFootlooseWeGotToTurnYouAroundSecondYouPutYourFeetOnTheGroundThirdNowTakeAholdOfYourSoulImTurningItLooseFootlooseKickOffYourSundayShoesPleaseLouisePullMeUpOffMyKneesJackGetBackCmonBeforeWeCrackLoseYourBluesEverybodyCutFootlooseFootlooseFootlooseFootlooseKickOffYourSundayShoesPleaseLouisePullMeUpOffMyKneesJackGetBackCmonBeforeWeCrackLoseYourBluesEverybodyCutEverybodyCutEverybodyCutEverybodyCutEverybodyCutEverybodyCutEverybodyEverybodyCutFootloose"
  },
  {
    title: "<i>Game of Thrones</i> Theme",
    artist: "Ramin Djawadi",
    image: "img/gameOfThronesTheme.png",
    audio: "audio/gameOfThronesTheme.mp3",
    duration: 255,
    lyrics: ""
  },
  {
    title: "<i>Give Up the Funk</i>",
    artist: "Parliament",
    image: "img/giveUpTheFunk.png",
    audio: "audio/giveUpTheFunk.mp3",
    duration: 345,
    lyrics: "tearTheRoofOffWereGonnaTearTheRoofOffTheMotherSuckerTearTheRoofOffTheSuckerTearTheRoofOffWereGonnaTearTheRoofOffTheMotherSuckerTearTheRoofOffTheSuckerTearTheRoofOffWereGonnaTearTheRoofOffTheMotherSuckerTearTheRoofOffTheSuckerTearTheRoofOffWereGonnaTearTheRoofOffTheMotherSuckerTearTheRoofOffTheSuckerYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveTheFunkOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveTheFunkLaLaLaLaLaDooDooDooDooDooDooDooOwwLaLaLaLaLaDooDooDooDooDooDooDooOwwYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkLaLaLaLaLaDooDooDooDooDooDooDooOwwLaLaLaLaLaDooDooDooDooDooDooDooOwwWereGonnaTurnThisMotherOutWereGonnaTurnThisMotherOutYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkLetUsInWellTearThisMotherOutOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkLetUsInWellTearThisMotherOutOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkWeWantTheFunkGiveUpTheFunkWereGonnaTurnThisMotherOutWeNeedTheFunkWeGottaHaveThatFunkWereGonnaTurnThisMotherOutWeWantTheFunkGiveUpTheFunkWereGonnaTurnThisMotherOutWeNeedTheFunkWeGottaHaveThatFunkOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkLetUsInWellTearThisMotherOutOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkLetUsInWellTearThisMotherOutOwwWeWantTheFunkGiveUpTheFunkWeNeedTheFunkWeGottaHaveThatFunkWeWantTheFunkGiveUpTheFunkWeNeedTheFunkWeGottaHaveThatFunkWeWantTheFunkGiveUpTheFunkWeNeedTheFunkWeGottaHaveThatFunkLaLaLaLaLaDooDooDooDooDooDooDooOwwLaLaLaLaLaDooDooDooDooDooDooDooOwwYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundYouveGotARealTypeOfThingGoinDownGettinDownTheresAWholeLotOfRhythmGoinRoundOwwWeWantTheFunkGiveUpTheFunkOwwWeNeedTheFunkWeGottaHaveThatFunkLetUsInWellTearThisMotherOut"
  },
  {
    title: "<i>Gospel John</i>",
    artist: "Maynard Ferguson",
    image: "img/gospelJohn.png",
    audio: "audio/gospelJohn.mp3",
    duration: 365,
    lyrics: ""
  },
  {
    title: "<i>Hawaii 5-O</i> Theme",
    artist: "Morton Stevens",
    image: "img/hawaii5OTheme.png",
    audio: "audio/hawaii5OTheme.mp3",
    duration: 202,
    lyrics: ""
  },
  {
    title: "<i>Hey Pachuco!</i>",
    artist: "Royal Crown Revue",
    image: "img/heyPachuco.png",
    audio: "audio/heyPachuco.mp3",
    duration: 195,
    lyrics: "heyPachucoHeySummerOf43TheMansGunninForMeBlueAndWhiteMeanWarTonightSayDamnMyPrideAndOtherCatsLivinDownEastsideOrMaybeJustMyBrimsTooWideOohMarieYouBetterGrabMyJackAndZipGunForMeAndIllFaceNoShameCauseTonightsTheNightIDieForOurNameWellIdLikeToBeSwinginDancinAndSwinginJustHavinATimeFreeToDoWhateverNowMoreThanEverIveGottaStickWithThatGangOfMineHeyHeyHeyHeyHeyHeyHeyPachuco"
  },
  {
    title: "<i>Holiday</i>",
    artist: "Green Day",
    image: "img/holiday.png",
    audio: "audio/holiday.mp3",
    duration: 234,
    lyrics: "sayHeyChaHearTheSoundOfTheFallingRainComingDownLikeAnArmageddonFlameHeyTheShameTheOnesWhoDiedWithoutANameHearTheDogsHowlingOutOfKeyToAHymnCalledFaithAndMiseryHeyAndBleedTheCompanyLostTheWarTodayAndOhIBegToDreamAndDifferFromTheHollowLiesThisIsTheDawningOfTheRestOfOurLivesWhoaOhWhoaOhOnHolidayHearTheDrumPoundingOutOfTimeAnotherProtesterHasCrossedTheLineHeyToFindTheMoneysOnTheOtherSideCanIGetAnotherAmenAmenTheresAFlagWrappedAroundAScoreOfMenHeyAGagAPlasticBagOnMonumentOhIBegToDreamAndDifferFromTheHollowLiesThisIsTheDawningOfTheRestOfOurLivesWhoaOhWhoaOhOnHolidayHeyThreeFourTheRepresentativeFromCaliforniaHasTheFloorSiegHeilToThePresidentGasmanBombsAwayIsYourPunishmentPulverizeTheEiffelTowersWhoCriticizeYourGovernmentBangBangGoesTheBrokenGlassAndKillAllTheFagsThatDontAgreeTryToFightFireSettingFireIsNotAWayThatsMeantForMeJustCauseHeyHeyHeyHeyJustCauseBecauseWereOutlawsYeahHeyHeyHeyHeyOhIBegToDreamAndDifferFromTheHollowLiesThisIsTheDawningOfTheRestOfOurLivesWhoaOhWhoaOhIBegToDreamAndDifferFromTheHollowLiesThisIsTheDawningOfTheRestOfOurLivesWhoaOhWhoaOhThisIsOurLivesOnHoliday"
  },
  {
    title: "<i>Hooked On a Feeling</i>",
    artist: "Blue Swede",
    image: "img/hookedOnAFeeling.png",
    audio: "audio/hookedOnAFeeling.mp3",
    duration: 167,
    lyrics: "oogaChakaOogaOogaOogaChakaOogaOogaOogaChakaOogaOogaOogaChakaOogaOogaICantStopThisFeelingDeepInsideOfMeGirlYouJustDontRealizeWhatYouDoToMeWhenYouHoldMeInYourArmsSoTightYouLetMeKnowEverythingsAlrightImHookedOnAFeelingImHighOnBelievingThatYoureInLoveWithMeLipsAsSweetAsCandyItsTasteIsOnMyMindGirlYouGotMeThirstyForAnotherCupOfWineGotABugFromYouGirlButIDontNeedNoCureIJustStayAVictimIfICanForSureAllTheGoodLoveWhenWereAllAloneKeepItUpGirlYeahYouTurnMeOnImHookedOnAFeelingImHighOnBelievingThatYoureInLoveWithMeAllTheGoodLoveWhenWereAllAloneKeepItUpGirlYeahYouTurnMeOnImHookedOnAFeelingImHighOnBelievingThatYoureInLoveWithMeImHookedOnAFeelingAndImHighOnBelievingThatYoureInLoveWithMeISaidImHookedOnAFeelingAndImHighOnBelievingThatYoureInLoveWithMeImHookedOnAFeeling"
  },
  {
    title: "<i>I'll Make a Man Out of You</i>",
    artist: "Donny Osmond",
    image: "img/illMakeAManOutOfYou.png",
    audio: "audio/illMakeAManOutOfYou.mp3",
    duration: 202,
    lyrics: "letsGetDownToBusinessToDefeatTheHunsDidTheySendMeDaughtersWhenIAskedForSonsYoureTheSaddestBunchIEverMetButYouCanBetBeforeWereThroughMisterIllMakeAManOutOfYouTranquilAsAForestButOnFireWithinOnceYouFindYourCenterYouAreSureToWinYoureASpinelessPalePatheticLotAndYouHaventGotAClueSomehowIllMakeAManOutOfYouImNeverGonnaCatchMyBreathSayGoodbyeToThoseWhoKnewMeWhyWasIAFoolInSchoolForCuttingGymThisGuysGotThemScaredToDeathHopeHeDoesntSeeRightThroughMeNowIReallyWishThatIKnewHowToSwimWeMustBeSwiftAsTheCoursingRiverBeAManWithAllTheForceOfAGreatTyphoonBeAManWithAllTheStrengthOfARagingFireMysteriousAsTheDarkSideOfTheMoonTimeIsRacingTowardUsTilTheHunsArriveHeedMyEveryOrderAndYouMightSurviveYoureUnsuitedForTheRageOfWarSoPackUpGoHomeYoureThroughHowCouldIMakeAManOutOfYouWeMustBeSwiftAsTheCoursingRiverBeAManWithAllTheForceOfAGreatTyphoonBeAManWithAllTheStrengthOfARagingFireMysteriousAsTheDarkSideOfTheMoonWeMustBeSwiftAsTheCoursingRiverBeAManWithAllTheForceOfAGreatTyphoonBeAManWithAllTheStrengthOfARagingFireMysteriousAsTheDarkSideOfTheMoon"
  },
  {
    title: "<i>I'm Shipping Up to Boston</i>",
    artist: "Dropkick Murphys",
    image: "img/imShippingUpToBoston.png",
    audio: "audio/imShippingUpToBoston.mp3",
    duration: 164,
    lyrics: "imASailorPegAndILostMyLegClimbingUpTheTopSailsILostMyLegImShippingUpToBostonWhoaImShippingUpToBostonWhoaImShippingUpToBostonWhoaImShippingOffToFindMyWoodenLegimASailorPegAndILostMyLegClimbingUpTheTopSailsILostMyLegImShippingUpToBostonWhoaImShippingUpToBostonWhoaImShippingUpToBostonWhoaImShippingOffToFindMyWoodenLeg"
  },
  {
    title: "<i>Indiana Jones</i> Theme",
    artist: "John Williams",
    image: "img/indianaJonesTheme.png",
    audio: "audio/indianaJonesTheme.mp3",
    duration: 325,
    lyrics: ""
  },
  {
    title: "<i>Jailhouse Rock</i>",
    artist: "Jerry Leiber and Mike Stoller",
    image: "img/jailhouseRock.png",
    audio: "audio/jailhouseRock.mp3",
    duration: 200,
    lyrics: "theWardenThrewAPartyInTheCountyJailThePrisonBandWasThereAndTheyBeganToWailTheBandWasJumpinAndTheJointBeganToSwingYouShouldveHeardThoseKnockedOutJailbirdsSingLetsRockEverybodyLetsRockEverybodyInTheWholeCellBlockWasDancinToTheJailhouseRockSpiderMurphyPlayedTheTenorSaxophoneLittleJoeWasBlowinOnTheSlideTromboneTheDrummerBoyFromIllinoisWentCrashBoomBangTheWholeRhythmSectionWasAPurpleGangLetsRockEverybodyLetsRockEverybodyInTheWholeCellBlockWasDancinToTheJailhouseRockNumber47SaidToNumber3YoureTheCutestJailbirdIEverDidSeeISureWouldBeDelightedWithYourCompanyComeOnAndDoTheJailhouseRockWithMeLetsRockEverybodyLetsRockEverybodyInTheWholeCellBlockWasDancinToTheJailhouseRockRockRockSadSackWasSittinOnABlockOfStoneWayOverInTheCornerWeepinAllAloneTheWardenSaidHeyBuddyDontYouBeNoSquareIfYouCantFindAPartnerUseAWoodenChairLetsRockEverybodyLetsRockEverybodyInTheWholeCellBlockWasDancinToTheJailhouseRockShiftyHenrySaidToBugsForHeavensSakeNoOnesLookinNowsTheChanceToMakeABreakBugsyTurnedToShiftyAndHeSaidNixNixIWannaStickAroundAWhileAndGetMyKicksLetsRockEverybodyLetsRockEverybodyInTheWholeCellBlockWasDancinToTheJailhouseRockDancinToTheJailhouseRockDancinToTheJailhouseRockDancinToTheJailhouseRockDancinToTheJailhouseRockDancinToTheJailhouseRock"
  },
  {
    title: "<i>James Bond</i> Theme",
    artist: "Monty Norman",
    image: "img/jamesBondTheme.png",
    audio: "audio/jamesBondTheme.mp3",
    duration: 173,
    lyrics: ""
  },
  {
    title: "<i>Joy to the World</i>",
    artist: "Three Dog Night",
    image: "img/joyToTheWorld.png",
    audio: "audio/joyToTheWorld.mp3",
    duration: 220,
    lyrics: "jeremiahWasABullfrogWasAGoodFriendOfMineINeverUnderstoodASingleWordHeSaidButIHelpedHimADrinkHisWineAndHeAlwaysHadSomeMightyFineWineSinginJoyToTheWorldAllTheBoysAndGirlsNowJoyToTheFishesInTheDeepBlueSeaJoyToYouAndMeAndIfIWereTheKingOfTheWorldTellYouWhatIdDoIdThrowAwayTheCarsAndTheBarsAndTheWarMakeSweetLoveToYouSingItNowJoyToTheWorldAllTheBoysAndGirlsJoyToTheFishesInTheDeepBlueSeaJoyToYouAndMeYouKnowILoveTheLadiesLoveToHaveMyFunImAHighLifeFlyerAndARainbowRiderAStraightShootinSonOfAGunJoyToTheWorldAllTheBoysAndGirlsJoyToTheFishesInTheDeepBlueSeaJoyToYouAndMeJoyToTheWorldAllTheBoysAndGirlsJoyToTheWorldJoyToYouAndMeJoyToTheWorldAllTheBoysAndGirlsJoyToTheFishesInTheDeepBlueSeaJoyToYouAndMeJoyToTheWorldJoyToYouAndMeJoyToTheWorldAllTheBoysAndGirlsNowJoyToTheFishesInTheDeepBlueSeaJoyToYouAndMeJoyToTheWorldAllTheBoysAndGirlsJoyToTheFishesInTheDeepBlueSeaJoyToYouAndMeJoyToTheWorldAllTheBoysAndGirls"
  },
  {
    title: "<i>Killing in the Name</i>",
    artist: "Rage Against the Machine",
    image: "img/killingInTheName.png",
    audio: "audio/killingInTheName.mp3",
    duration: 313,
    lyrics: "killingInTheNameOfSomeOfThoseThatWorkForcesAreTheSameThatBurnCrossesSomeOfThoseThatWorkForcesAreTheSameThatBurnCrossesSomeOfThoseThatWorkForcesAreTheSameThatBurnCrossesSomeOfThoseThatWorkForcesAreTheSameThatBurnCrossesUhKillingInTheNameOfKillingInTheNameOfNowYouDoWhatTheyToldYaNowYouDoWhatTheyToldYaNowYouDoWhatTheyToldYaNowYouDoWhatTheyToldYaAndNowYouDoWhatTheyToldYaAndNowYouDoWhatTheyToldYaAndNowYouDoWhatTheyToldYaAndNowYouDoWhatTheyToldYaAndNowYouDoWhatTheyToldYaAndNowYouDoWhatTheyToldYaButNowYouDoWhatTheyToldYaWellNowYouDoWhatTheyToldYaThoseWhoDiedAreJustifiedForWearingTheBadgeTheyreTheChosenWhitesYouJustifyThoseThatDiedByWearingTheBadgeTheyreTheChosenWhitesThoseWhoDiedAreJustifiedForWearingTheBadgeTheyreTheChosenWhitesYouJustifyThoseThatDiedByWearingTheBadgeTheyreTheChosenWhitesSomeOfThoseThatWorkForcesAreTheSameThatBurnCrossesSomeOfThoseThatWorkForcesAreTheSameThatBurnCrossesSomeOfThoseThatWorkForcesAreTheSameThatBurnCrossesSomeOfThoseThatWorkForcesAreTheSameThatBurnCrossesUhKillingInTheNameOfKillingInTheNameOfNowYouDoWhatTheyToldYaNowYouDoWhatTheyToldYaNowYouDoWhatTheyToldYaNowYouDoWhatTheyToldYaAndNowYouDoWhatTheyToldYaNowYoureUnderControlAndNowYouDoWhatTheyToldYaNowYoureUnderControlAndNowYouDoWhatTheyToldYaNowYoureUnderControlAndNowYouDoWhatTheyToldYaNowYoureUnderControlAndNowYouDoWhatTheyToldYaNowYoureUnderControlAndNowYouDoWhatTheyToldYaNowYoureUnderControlAndNowYouDoWhatTheyToldYaNowYoureUnderControlAndNowYouDoWhatTheyToldYaThoseWhoDiedAreJustifiedForWearingTheBadgeTheyreTheChosenWhitesYouJustifyThoseThatDiedByWearingTheBadgeTheyreTheChosenWhitesThoseWhoDiedAreJustifiedForWearingTheBadgeTheyreTheChosenWhitesYouJustifyThoseThatDiedByWearingTheBadgeTheyreTheChosenWhitesComeOnUghYeahComeOnUghFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeFuckYouIWontDoWhatYouTellMeMotherfuckerUgh"
  },
  {
    title: "<i>Kiss Him Goodbye</i>",
    artist: "Steam",
    image: "img/kissHimGoodbye.png",
    audio: "audio/kissHimGoodbye.mp3",
    duration: 241,
    lyrics: "naNaNaNaNaNaNaNaHeyHeyGoodbyeHellNeverLoveYouTheWayThatILoveYouCauseIfHeDidNoNoHeWouldntMakeYouCryHeMightBeThrillinBabyButAMyLoveMyLoveMyLoveSoDogGoneWillinSoKissHimIWannaSeeYouKissHimWannaSeeYouKissHimGoOnAndKissHimGoodbyeNowNaNaNaNaHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbyeListenToMeNowHesNeverNearYouToComfortAndCheerYouWhenAllThoseSadTearsAreFallinBabyFromYourEyesHeMightBeThrillinBabyButAMyLoveMyLoveMyLoveSoDogGoneWillinSoKissHimIWannaSeeYouKissHimIWannaSeeYouKissHimGoOnAndKissHimGoodbyeNaNaNaNaNaNaNaNaNaNaNaHeyHeyGoodbyeHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbyeHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbyeHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbyeNaNaNaNaNaNaNaNaHeyHeyGoodbye"
  },
  {
    title: "<i>Let's Go Band</i>",
    artist: "Albert Ahronheim and Joe Carl",
    image: "img/letsGoBand.png",
    audio: "audio/letsGoBand.mp3",
    duration: 124,
    lyrics: ""
  },
  {
    title: "<i>Louie, Louie</i>",
    artist: "the Kingsmen",
    image: "img/louieLouie.png",
    audio: "audio/louieLouie.mp3",
    duration: 165,
    lyrics: "louieLouieOhNoMeGottaGoAyeYiYiYiISaidLouieLouieOhBabyMeGottaGoFineLittleGirlWaitsForMeCatchAShipAcrossTheSeaSailThatShipAboutAllAloneNeverKnowIfIMakeItHomeLouieLouieOhNoMeGottaGoAyeYiYiYiISaidLouieLouieOhBabyMeGottaGoThreeNightsAndDaysISailTheSeaThinkOfGirlConstantlyOnThatShipIDreamShesThereISmellTheRoseInHerHairLouieLouieOhNoMeGottaGoAyeYiYiYiISaidLouieLouieOhBabyMeGottaGoOkayLetsGiveItToEmRightNowSeeJamaicaTheMoonAboveItWontBeLongMeSeeMeLoveTakeHerInMyArmsAgainTellHerIllNeverLeaveAgainLouieLouieOhNoMeGottaGoAyeYiYiYiISaidLouieLouieOhBabyMeGottaGoLetsTakeItOnOuttaHereNowLetsGo"
  },
  {
    title: "<i>Mortal Kombat</i> Theme",
    artist: "the Immortals",
    image: "img/mortalKombatTheme.png",
    audio: "audio/mortalKombatTheme.mp3",
    duration: 285,
    lyrics: ""
  },
  {
    title: "Mos Eisley Cantina Song",
    artist: "John Williams",
    image: "img/mosEisleyCantinaSong.png",
    audio: "audio/mosEisleyCantinaSong.mp3",
    duration: 164,
    lyrics: ""
  },
  {
    title: "<i>Mr. Blue Sky</i>",
    artist: "Electric Light Orchestra",
    image: "img/mrBlueSky.png",
    audio: "audio/mrBlueSky.mp3",
    duration: 302,
    lyrics: "sunIsShininInTheSkyThereAintACloudInSightItsStoppedRaininEverybodysInThePlayAndDontYouKnowItsABeautifulNewDayHeyHeyRunninDownTheAvenueSeeHowTheSunShinesBrightlyInTheCityOnTheStreetsWhereOnceWasPityMrBlueSkyIsLivingHereTodayHeyHeyMrBlueSkyPleaseTellUsWhyYouHadToHideAwayForSoLongSoLongWhereDidWeGoWrongMrBlueSkyPleaseTellUsWhyYouHadToHideAwayForSoLongSoLongWhereDidWeGoWrongHeyYouWithThePrettyFaceWelcomeToTheHumanRaceACelebrationMrBlueSkysUpThereWaitinAndTodayIsTheDayWeveWaitedForOhMrBlueSkyPleaseTellUsWhyYouHadToHideAwayForSoLongSoLongWhereDidWeGoWrongHeyThereMrBlueWereSoPleasedToBeWithYouLookAroundSeeWhatYouDoEverybodySmilesAtYouHeyThereMrBlueWereSoPleasedToBeWithYouLookAroundSeeWhatYouDoEverybodySmilesAtYouMrBlueYouDidItRightButSoonComesMrNightCreepinOverNowHisHandIsOnYourShoulderNeverMindIllRememberYouThisIllRememberYouThisWayMrBlueSkyPleaseTellUsWhyYouHadToHideAwayForSoLongSoLongWhereDidWeGoWrongHeyThereMrBlueSkyWereSoPleasedToBeWithYouSkyLookAroundSeeWhatYouDoBlueEverybodySmilesAtYou"
  },
  {
    title: "<i>Mr. Brightside</i>",
    artist: "the Killers",
    image: "img/mrBrightside.png",
    audio: "audio/mrBrightside.mp3",
    duration: 227,
    lyrics: "comingOutOfMyCageAndIveBeenDoingJustFineGottaGottaGetDownBecauseIWantItAllItStartedOutWithAKissHowDidItEndUpLikeThisItWasOnlyAKissItWasOnlyAKissNowImFallingAsleepAndShesCallingACabWhileHesHavingASmokeAndShesTakingADragNowTheyreGoingToBedAndMyStomachIsSickAndItsAllInMyHeadButShesTouchingHisChestNowHeTakesOffHerDressNowLetMeGoAndIJustCantLookItsKillingMeAndTakingControlJealouslyTurningSaintsIntoTheSeaSwimmingThroughSickLullabiesChokingOnYourAlibisButItsJustThePriceIPayDestinyIsCallingMeOpenUpMyEagerEyesCauseImMrBrightsideComingOutOfMyCageAndIveBeenDoingJustFineGottaGottaGetDownBecauseIWantItAllItStartedOutWithAKissHowDidItEndUpLikeThisItWasOnlyAKissItWasOnlyAKissNowImFallingAsleepAndShesCallingACabWhileHesHavingASmokeAndShesTakingADragNowTheyreGoingToBedAndMyStomachIsSickAndItsAllInMyHeadButShesTouchingHisChestNowHeTakesOffHerDressNowLetMeGoAndIJustCantLookItsKillingMeAndTakingControlJealouslyTurningSaintsIntoTheSeaSwimmingThroughSickLullabiesChokingOnYourAlibisButItsJustThePriceIPayDestinyIsCallingMeOpenUpMyEagerEyesCauseImMrBrightsideINeverINeverINeverINever"
  },
  {
    title: "<i>New York, New York</i>",
    artist: "Frank Sinatra",
    image: "img/newYorkNewYork.png",
    audio: "audio/newYorkNewYork.mp3",
    duration: 204,
    lyrics: "startSpreadinTheNewsImLeavinTodayIWantToBeAPartOfItNewYorkNewYorkTheseVagabondShoesAreLongingToStrayRightThroughTheVeryHeartOfItNewYorkNewYorkIWantToWakeUpInACityThatDoesntSleepAndFindImKingOfTheHillTopOfTheHeapTheseLittleTownBluesAreMeltingAwayIllMakeABrandNewStartOfItInOldNewYorkIfICanMakeItThereIllMakeItAnywhereItsUpToYouNewYorkNewYorkNewYorkNewYorkIWantToWakeUpInACityThatNeverSleepsAndFindImANumber1TopOfTheListKingOfTheHillANumber1TheseLittleTownBluesAreMeltingAwayImGonnaMakeABrandNewStartOfItInOldNewYorkAndIfICanMakeItThereImGonnaMakeItAnywhereItsUpToYouNewYorkNewYorkNewYork"
  },
  {
    title: "<i>O Canada</i>",
    artist: "Calixa Lavallee",
    image: "img/oCanada.png",
    audio: "audio/oCanada.mp3",
    duration: 85,
    lyrics: "oCanadaOurHomeAndNativeLandTruePatriotLoveInAllOfUsCommandWithGlowingHeartsWeSeeTheeRiseTheTrueNorthStrongAndFreeFromFarAndWideOCanadaWeStandOnGuardForTheeGodKeepOurLandGloriusAndFreeOCanadaWeStandOnGuardForTheeOCanadaWeStandOnGuardForThee"
  },
  {
    title: "Oompa Loompa Song",
    artist: "Anthony Newley and Walter Scharf",
    image: "img/oompaLoompaSong.png",
    audio: "audio/oompaLoompaSong.mp3",
    duration: 57,
    lyrics: "oompaLoompaDoompetyDooIveGotAPerfectPuzzleForYouOompaLoompaDoompetyDeeIfYouAreWiseYoullListenToMeWhatDoYouGetWhenYouGuzzleDownSweetsEatingAsMuchAsAnElephantEatsWhatAreYouAtGettingTerriblyFatWhatDoYouThinkWillComeOfThatIDontLikeTheLookOfItOompaLoompaDoompetyDaIfYoureNotGreedyYouWillGoFarYouWillLiveInHappinessTooOompaLoompaDoompetyDooDoompetyDoo"
  },
  {
    title: "<i>Peter Gunn</i> Theme",
    artist: "Henry Mancini",
    image: "img/peterGunnTheme.png",
    audio: "audio/peterGunnTheme.mp3",
    duration: 228,
    lyrics: ""
  },
  {
    title: "<i>Pfft! You Were Gone</i>",
    artist: "Susan Heather",
    image: "img/pfftYouWereGone.png",
    audio: "audio/pfftYouWereGone.mp3",
    duration: 169,
    lyrics: "downHereOnTheFarmTheWeatherGetsMessyLayingAroundWithNothinToDoWhenYouWentAwayYouTookMyCowBessieIMissHerDarlinMoreThenIMissYouYouTookOffYourLegYourWigAndYourEyeGlassAndYouShouldHaveSeenTheLookOnMyFaceIWantedToKissYouIWantedToHugYouButYouWereScatteredAllOverThePlaceWhereOhWhereAreYouTonightWhyDidYouLeaveMeHereAllAloneISearchedTheWorldOverAndThoughtIFoundTrueLoveYouMetAnotherAndPfftYouWereGoneIKnowThatYouLovedMeHeresMyWayOfKnowingTheProofsHangingOutRightThereOnTheLineWhenISeeTheSnowAndFeelTheWindBlowingYourNightiesHuggingThemLongJohnsOfMineTheNoisesYouMadeAtOurSupperTableYourHabitsMyDearWereSurelyAbsurdButHowManyTimesDoIHaveToTellYouSoupIsADishToBeSeenAndNotHeardWhereOhWhereAreYouTonightWhyDidYouLeaveMeHereAllAloneISearchedTheWorldOverAndThoughtIFoundTrueLoveYouMetAnotherAndPfftYouWereGoneRememberYouPhonedMeASobbinAndCryinTheDogBitYourMawAndDrugHerAroundYouSaidSheLookedPaleAndThoughtSheWasDyingISaidDontWorryIllBuyANewHoundIHadSixKidsAndYouHadElevenAndWeHadABoyAndTheyGrewLikeFlowersIWishYoudComeBackWithoutYouAintHeavenCauseYourKidsAndMyKidsAreBeatinOursUpWhereOhWhereAreYouTonightWhyDidYouLeaveMeHereAllAloneISearchedTheWorldOverAndThoughtIFoundTrueLoveYouMetAnotherAndPfftYouWereGoneISearchedTheWorldOverAndThoughtIFoundTrueLoveYouMetAnotherAndPfftYouWereGone"
  },
  {
    title: "<i>Pirates of the Caribbean</i> Theme",
    artist: "Klaus Badelt",
    image: "img/piratesOfTheCaribbeanTheme.png",
    audio: "audio/piratesOfTheCaribbeanTheme.mp3",
    duration: 173,
    lyrics: ""
  },
  {
    title: "<i>Poison</i>",
    artist: "Alice Cooper",
    image: "img/poison.png",
    audio: "audio/poison.mp3",
    duration: 268,
    lyrics: "yourCruelDeviceYourBloodLikeIceOneLookCouldKillMyPainYourThrillIWannaLoveYouButIBetterNotTouchDontTouchIWannaHoldYouButMySensesTellMeToStopIWannaKissYouButIWantItTooMuchTooMuchIWannaTasteYouButYourLipsAreVenomousPoisonYourePoisonRunningThroughMyVeinsYourePoisonIDontWantToBreakTheseChainsYourMouthSoHotYourWebImCaughtYourSkinSoWetBlackLaceOnSweatIHearYouCallingAndItsNeedlesAndPinsAndPinsIWannaHurtYouJustToHearYouScreamingMyNameDontWantToTouchYouButYoureUnderMySkinDeepInIWannaKissYouButYourLipsAreVenomousPoisonYourePoisonRunningThroughMyVeinsYourePoisonIDontWantToBreakTheseChainsPoisonOneLookCouldKillMyPainYourThrillIWannaLoveYouButIBetterNotTouchDontTouchIWannaHoldYouButMySensesTellMeToStopIWannaKissYouButIWantItTooMuchTooMuchIWannaTasteYouButYourLipsAreVenomousPoisonYourePoisonRunningThroughMyVeinsYourePoisonIDontWantToBreakTheseChainsPoisonPoisonIWannaLoveYouButIBetterNotTouchDontTouchIWannaHoldYouButMySensesTellMeToStopIWannaKissYouButIWantItTooMuchTooMuchIWannaTasteYouButYourLipsAreVenomousPoisonYeahWellIDontWantToBreakTheseChainsPoisonPoisonRunninDeepInsideMyVeinsBurninDeepInsideMyBrainPoisonPoisoningPoisonIDontWantToBreakTheseChainsPoisonPoisonPoisonIDontWantToBreakTheseChainsPoison"
  },
  {
    title: "<i>Proud Mary</i>",
    artist: "John Fogerty",
    image: "img/proudMary.png",
    audio: "audio/proudMary.mp3",
    duration: 189,
    lyrics: "leftAGoodJobDownInTheCityWorkinForTheManEveryNightAndDayAndINeverLostOneMinuteOfSleepinIWasWorryinBoutTheWayThatThingsMightveBeenBigWheelKeepOnTurninOohTheProudMaryKeepOnBurninAndWereRollinRollinRollinYeahRollinRollinOnTheRiverRollinOnTheRiverCleanedALotOfPlatesInMemphisAndIPumpedALotOfTaneDownInNewOrleansButINeverSawTheGoodSideOfTheCityUntilIHitchedARideOnTheRiverboatQueenYouKnowTheBigWheelKeepOnTurninProudMaryKeepOnBurninAndWereRollinRollinRollinYeahRollinRollinOnTheRiverRollinOnTheRiverSayWereRollinRollinRollinRollinRollinOnTheRiverRollinOnTheRiverOhILeftAGoodJobDownInTheCityWorkinForTheManEveryNightAndDayAndINeverLostOneMinuteOfSleepinIWasWorryinBoutTheWayThatThingsMightveBeenBigWheelKeepOnTurninTurninProudMaryKeepOnBurninBurninRollinYeahRollinAlrightRollinOnTheRiverGoHeadNowRollinOhSayWereRollinYeahRollinOnTheRiverWereUpDoDoDoDoDoDoDoDoDoDoDoAlrightCleanedALotOfPlatesInMemphisAndIPumpedALotOfTaneDownInNewOrleansButINeverSawTheGoodSideOfTheCityTilIHitchedARideOnTheRiverboatQueenBigWheelKeepOnTurninTurninProudMaryKeepOnBurninBurninRollinOhRollinYeahRollinOnTheRiverGoHeadNowSayWereRollinRollinRollinOnTheRiverWereUpDoDoDoDoDoDoDoDoAlrightYeahOohYeahYeahYeahYeahAlrightYeahYeahYeahOohYeahYeahIfYouComeDownToTheRiverNowIBetYouGonnaFindSomePeopleWhoLiveYouDontHaveToWorryIfYouGotNoMoneyThePeopleOnTheRiverAreHappyToGiveBigWheelKeepOnTurninTurninProudMaryKeepOnBurninBurninRollinYeahSayWeRollinYeahRollinOnTheRiverAlrightNowRollinRollinRollinOnTheRiverWereUpDoDoDoDoDoWooAlrightWooAlrightYeahYeahYeahYeahRollinAlrightAlrightNowYeahRollinYeahRollinUhHuhRollinOnTheRiverGiveMeOneMoreTimeRollinYeahRollinWooWeeRollinOnTheRiverRollinOwRollinYeahRollinOnTheRiverRollinYeahRollin"
  },
  {
    title: "<i>Radar Love</i>",
    artist: "Golden Earring",
    image: "img/radarLove.png",
    audio: "audio/radarLove.mp3",
    duration: 386,
    lyrics: "iveBeenDrivinAllNightMyHandsWetOnTheWheelTheresAVoiceInMyHeadThatDrivesMyHeelItsMyBabyyCallinSayinINeedYouHereAndItsAHalfPast4AndImShiftinGearWhenSheIsLonelyAndTheLongingGetsTooMuchSheSendsACableComingInFromAboveDontNeedNoPhoneAtAllWeveGotAThingThatsCalledRadarLoveWeveGotAWaveInTheAirRadarLoveTheRadiosPlayinSomeForgottenSongBrendaLeesComingOnStrongTheRoadHasGotMeHypnotizedAndImSpeedinIntoANudeSunriseWhenIGetLonelyAndImSureIveHadEnoughSheSendsHerComfortComingInFromAboveWeDontNeedNoLetterAtAllWeveGotAThingThatsCalledRadarLoveWeveGotALineInTheSkyRadarLoveNoMoreSpeedImAlmostThereGottaKeepCoolNowGottaTakeCareLastCarToPassHereIGoAndTheLineOfCarsGoDownRealSlowWoahAndTheRadioPlayedThatForgottenSongBrendaLeesComingOnStrongAndTheNewsmanSangHisSameSongOhOneMoreRadarLoverGoneWhenIGetLonelyAndImSureIveHadEnoughSheSendsHerComfortComingInFromAboveWeDontNeedNoLetterAtAllWeveGotAThingThatsCalledRadarLoveWeveGotALineInTheSkyWeveGotAThingThatsCalledRadarLoveWeveGotAThingThatsCalledRadarLove"
  },
  {
    title: "<i>Rocky</i> Theme",
    artist: "Bill Conti",
    image: "img/rockyTheme.png",
    audio: "audio/rockyTheme.mp3",
    duration: 290,
    lyrics: "tryinHardNowItsSoHardNowTryinHardNowFeelinStronNowWontBeLongNowFeelinStrongNowGonnaFlyNowFlyingHighNowGonnaFlyFlyFlyFeelinStronNowWontBeLongNowFeelinStrongNowGonnaFlyNowFlyingHighNowGonnaFlyFlyFly"
  },
  {
    title: "<i>September</i>",
    artist: "Earth, Wind, & Fire",
    image: "img/september.png",
    audio: "audio/september.mp3",
    duration: 215,
    lyrics: "doYouRememberThe21stNightOfSeptemberLoveWasChanginTheMindsOfPretendersWhileChasinTheCloudsAwayOurHeartsWereRinginInTheKeyThatOurSoulsWereSinginAsWeDancedInTheNightRememberHowTheStarsStoleTheNightAwayOhYeahHeyHeyHeyBaDeeYaSayDoYouRememberBaDeeYaDancinInSeptemberBaDeeYaNeverWasACloudyDayBaDuDaBaDuDaBaDuDaBaDuBaDuDaBaDuBaDuDaBaDuBaDuDaBaDuBaDuDaMyThoughtsAreWithYouHoldinHandsWithYourHeartToSeeYouOnlyBlueTalkAndLoveRememberHowWeKnewLoveWasHereToStayNowDecemberFoundTheLoveThatWeSharedInSeptemberOnlyBlueTalkAndLoveRememberTheTrueLoveWeShareTodayHeyHeyHeyBaDeeYaSayDoYouRememberBaDeeYaDancinInSeptemberBaDeeYaNeverWasACloudyDayThereWasABaDeeYaDeeYaDeeYaSayDoYouRememberBaDeeYaDeeYaDeeYaDancinInSeptemberBaDeeYaDeeYaDeeYaGoldenDreamsWereShinyDaysTheBellWasRinginOhOhOurSoulsWereSinginDoYouRememberNeverACloudyDayYowThereWasABaDeeYaDeeYaDeeYaSayDoYouRememberBaDeeYaDeeYaDeeYaDancinInSeptemberBaDeeYaDeeYaDeeYaNeverWasACloudyDayAndWellSayBaDeeYaDeeYaDeeYaSayDoYouRememberBaDeeYaDeeYaDeeYaDancinInSeptemberBaDeeYaDeeYaDeeYaGoldenDreamsWereShinyDaysBaDeeYaDeeYaDeeYaBaDeeYaDeeYaDeeYaBaDeeYaDeeYaDeeYaDeeYaBaDeeYaDeeYaDeeYaBaDeeYaDeeYaDeeYaBaDeeYaDeeYaDeeYaDeeYa"
  },
  {
    title: "<i>Soul Bossa Nova</i>",
    artist: "Quincy Jones",
    image: "img/soulBossaNova.png",
    audio: "audio/soulBossaNova.mp3",
    duration: 166,
    lyrics: "swinging60sHereIComeBabyYeahYeahBabyYeahSwinging60sHereIComeBabyYeahIGotMyMojoWorkinAllTheTime"
  },
  {
    title: "<i>Soul Man</i>",
    artist: "David Porter and Isaac Hayes",
    image: "img/soulMan.png",
    audio: "audio/soulMan.mp3",
    duration: 159,
    lyrics: "comingToYouOnADustyRoadGoodLovingIGotATruckLoadAndWhenYouGetItYouGotSomethingDontWorryCauseImComingImASoulManImASoulManImASoulManComeOnImASoulManAndThatAintAllGotWhatIGotTheHardWayAndIMakeItBetterEachAndEveryDaySoHoneySaidDontYouFretCauseYouAintSeenNothingYetImASoulManImASoulManImASoulManImASoulManOhIWasBroughtUpOnASideStreetYesMaamILearnedHowToLoveBeforeICouldEatIWasEducatedAtWoodstockWhenIStartLovingOhICantStopImASoulManImASoulManImASoulManYeahImASoulManJustGrabTheRopeAndIllPullYouInGiveYouHopeAndBeYourOnlyBoyfriendYeahYeahYeahYeahYeahImTalkingAboutASoulManImASoulManAndYoureASoulManSoulManOhLordSoulManImASoulManAndYoureASoulManAndYoureASoulMan"
  },
  {
    title: "<i>Superman</i> Theme",
    artist: "John Williams",
    image: "img/supermanTheme.png",
    audio: "audio/supermanTheme.mp3",
    duration: 252,
    lyrics: ""
  },
  {
    title: "<i>Sweet Caroline</i>",
    artist: "Neil Diamond",
    image: "img/sweetCaroline.png",
    audio: "audio/sweetCaroline.mp3",
    duration: 203,
    lyrics: "whereItBeganDaDaDaDaICantBeginToKnowingButThenIKnowItsGrowingStrongWasInTheSpringDaDaDaDaAndSpringBecameTheSummerWhodHaveBelievedYoudComeAlongHandsTouchingHandsReachingOutTouchingMeFuckYouSluSweetCarolineFuckYouSluGoodTimesNeverSeemedSoGoodFuckSluFuckSluFuckSluIveBeenInclinedFuckYouSluToBelieveTheyNeverWouldButNowILookAtTheNightDaDaDaDaAndItDontSeemSoLonelyWeFilledItUpWithOnlyTwoAndWhenIHurtDaDaDaDaHurtingRunsOffMyShouldersHowCanIHurtWhenHoldingYouOneTouchingOneReachingOutTouchingMeFuckYouSluSweetCarolineFuckYouSluGoodTimesNeverSeemedSoGoodFuckSluFuckSluFuckSluIveBeenInclinedFuckYouSluToBelieveTheyNeverWouldOhNoNoSweetCarolineFuckYouSluGoodTimesNeverSeemedSoGoodFuckSluFuckSluFuckSluSweetCarolineFuckYouSluIBelieveTheyNeverCouldSweetCarolineFuckYouSluGoodTimesNeverSeemedSoGood"
  },
  {
    title: "<i>Sweet Dreams (Are Made of This)</i>",
    artist: "the Eurythmics",
    image: "img/sweetDreamsAreMadeOfThis.png",
    audio: "audio/sweetDreamsAreMadeOfThis.mp3",
    duration: 213,
    lyrics: "sweetDreamsAreMadeOfThisWhoAmIToDisagreeITravelTheWorldAndTheSevenSeasEverybodysLookingForSomethingSomeOfThemWantToUseYouSomeOfThemWantToGetUsedByYouSomeOfThemWantToAbuseYouSomeOfThemWantToBeAbusedSweetDreamsAreMadeOfThisWhoAmIToDisagreeITravelTheWorldAndTheSevenSeasEverybodysLookingForSomethingHoldYourHeadUpKeepYourHeadUpMovinOnHoldYourHeadUpMovinOnKeepYourHeadUpMovinOnHoldYourHeadUpMovinOnKeepYourHeadUpMovinOnHoldYourHeadUpMovinOnKeepYourHeadUpSomeOfThemWantToUseYouSomeOfThemWantToGetUsedByYouSomeOfThemWantToAbuseYouSomeOfThemWantToBeAbusedSweetDreamsAreMadeOfThisWhoAmIToDisagreeITravelTheWorldAndTheSevenSeasEverybodysLookingForSomethingSweetDreamsAreMadeOfThisWhoAmIToDisagreeITravelTheWorldAndTheSevenSeasEverybodysLookingForSomethingSweetDreamsAreMadeOfThisWhoAmIToDisagreeITravelTheWorldAndTheSevenSeasEverybodysLookingForSomethingSweetDreamsAreMadeOfThisWhoAmIToDisagreeITravelTheWorldAndTheSevenSeasEverybodysLookingForSomethingSweetDreamsAreMadeOfThisWhoAmIToDisagreeITravelTheWorldAndTheSevenSeas"
  },
  {
    title: "<i>Take On Me</i>",
    artist: "A-ha",
    image: "img/takeOnMe.png",
    audio: "audio/takeOnMe.mp3",
    duration: 243,
    lyrics: "wereTalkingAwayIDontKnowWhatImToSayIllSayItAnywayTodayIsAnotherDayToFindYouShyinAwayOhIllBeCominForYourLoveOkayTakeOnMeTakeOnMeTakeMeOnTakeOnMeIllBeGoneInADayOrTwoSoNeedlessToSayImOddsAndEndsButIllBeStumblinAwaySlowlyLearninThatLifeIsOkaySayAfterMeItsNoBetterToBeSafeThanSorryTakeOnMeTakeOnMeTakeMeOnTakeOnMeIllBeGoneInADayOrTwoAllTheThingsThatYouSayYeahIsItLifeOrJustToPlayMyWorriesAwayYoureAllTheThingsIveGotToRememberYoureShyinAwayIllBeCominForYouAnywayTakeOnMeTakeOnMeTakeMeOnTakeOnMeIllBeGoneInADayTakeOnMeTakeOnMeTakeMeOnTakeOnMeIllBeGoneTakeOnMeInADayTakeMeOnTakeOnMeTakeOnMeTakeOnMeTakeMeOnTakeOnMe"
  },
  {
    title: "<i>Tequila</i>",
    artist: "the Champs",
    image: "img/tequila.png",
    audio: "audio/tequila.mp3",
    duration: 133,
    lyrics: "tequila"
  },
  {
    title: "<i>Tetris</i> Theme",
    artist: "Nikolay Nekrasov",
    image: "img/tetrisTheme.png",
    audio: "audio/tetrisTheme.mp3",
    duration: 83,
    lyrics: ""
  },
  {
    title: "<i>The Bare Necessities</i>",
    artist: "Terry Gilkyson",
    image: "img/theBareNecessities.png",
    audio: "audio/theBareNecessities.mp3",
    duration: 291,
    lyrics: "lookForTheBareNecessitiesTheSimpleBareNecessitiesForgetAboutYourWorriesAndYourStrifeIMeanTheBareNecessitiesOldMotherNaturesRecipiesThatBringTheBareNecessitiesOfLifeWhereverIWanderWhereverIRoamICouldntBeFonderOfMyBigHomeTheBeesAreBuzzinInTheTreeToMakeSomeHoneyJustForMeWhenYouLookUnderTheRocksAndPlantsAndTakeAGlanceAtTheFancyAntsThenMaybeTryAFewTheBareNecessitiesOfLifeWillComeToYouTheyllComeToYouLookForTheBareNecessitiesTheSimpleBareNecessitiesForgetAboutYourWorriesAndYourStrifeIMeanTheBareNecessitiesThatsWhyABearCanRestAtEaseWithJustTheBareNecessitiesOfLifeNowWhenYouPickAPawPawOrAPricklyPearAndYouPrickARawPawWellNextTimeBewareDontPickThePricklyPearByThePawWhenYouPickAPearTryToUseTheClawButYouDontNeedToUseTheClawWhenYouPickAPairOfTheBigPawPawHaveIGivenYouAClueTheBareNecessitiesOfLifeWillComeToYouTheyllComeToYouOhManThatsReallyLivinSoJustTryAndRelaxYeahCoolItFallApartInMyBackyardCauseLetMeTellYouSomethingLittleBritchesIfYouActLikeThatBeeActsUhUhYoureWorkingTooHardAndDontSpendYourTimeLookinAroundForSomethingYouWantThatCantBeFoundWhenYouFindOutYouCanLiveWithoutItAndGoAlongNotThinkinAboutItIllTellYouSomethingTrueTheBareNecessitiesOfLifeWillComeToYouLookForTheBareNecessitiesTheSimpleBareNecessitiesForgetAboutYourWorriesAndYourStrifeYeahManIMeanTheBareNecessitiesThatsWhyABearCanRestAtEaseWithJustTheBareNecessitiesOfLifeYeahWithJustTheBareNecessitiesOfLifeYeahMan"
  },
  {
    title: "<i>The Blues Brothers</i> Intro Song",
    artist: "Elmer Bernstein and Ira Newborn",
    image: "img/theBluesBrothersIntroSong.png",
    audio: "audio/theBluesBrothersIntroSong.mp3",
    duration: 122,
    lyrics: ""
  },
  {
    title: "<i>The Final Countdown</i>",
    artist: "Europe",
    image: "img/theFinalCountdown.png",
    audio: "audio/theFinalCountdown.mp3",
    duration: 310,
    lyrics: "wereLeavinTogetherButStillItsFarewellAndMaybeWellComeBackToEarthWhoCanTellIGuessThereIsNoOneToBlameWereLeavingGroundLeavingGroundWillThingsEverBeTheSameAgainItsTheFinalCountdownTheFinalCountdownOhWereHeadinForVenusVenusAndStillWeStandTallCauseMaybeTheyveSeenUsAndWelcomeUsAllYeahWithSoManyLightYearsToGoAndThingsToBeFoundToBeFoundImSureThatWeAllMissHerSoItsTheFinalCountdownTheFinalCountdownTheFinalCountdownFinalCountdownOhOhTheFinalCountdownOhItsTheFinalCountdownWereLeavinTogetherTheFinalCountdownWellAllMissHerSoItsTheFinalCountdownFinalCountdownOhItsTheFinalCountdownYeah"
  },
  {
    title: "<i>The Flintstones</i> Theme",
    artist: "Hoyt Curtin, Joseph Barbera, and William Hanna",
    image: "img/theFlintstonesTheme.png",
    audio: "audio/theFlintstonesTheme.mp3",
    duration: 67,
    lyrics: "yabbaDabbaDooFlintstonesMeetTheFlintstonesTheyreTheModernStoneAgeFamilyFromTheTownOfBedrockTheyreAPageRightOutOfHistoryLetsRideWithTheFamilyDownTheStreetThroughTheCourtesyOfFredsTwoFeetWhenYoureWithTheFlintstonesHaveAYabbaDabbaDooTimeADabbaDooTimeWellHaveAGayOldTimeFlintstonesMeetTheFlintstonesTheyreTheModernStoneAgeFamilyFromTheTownOfBedrockTheyreAPageRightOutOfHistorySomedayMaybeFredWillWinTheFightThenTheCatWillStayOutForTheNightWhenYoureWithTheFlintstonesHaveAYabbaDabbaDooTimeADabbaDooTimeWellHaveAGayOldTime"
  },
  {
    title: "<i>The Hey Song</i>",
    artist: "Gary Glitter",
    image: "img/theHeySong.png",
    audio: "audio/theHeySong.mp3",
    duration: 171,
    lyrics: "heyHeyHeyHeyHeyHeyHeyYouSuckHeyYouSuckHeyYouSuckHeyYouSuckHeyHeyYouSuckHeyYouSuckHeyYouSuckHeyYouSuckHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyYouSuckHeyYouSuckHeyYouSuckHeyYouSuckHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHeyHey"
  },
  {
    title: "<i>The Impression That I Get</i>",
    artist: "the Mighty Mighty Bosstones",
    image: "img/theImpressionThatIGet.png",
    audio: "audio/theImpressionThatIGet.mp3",
    duration: 193,
    lyrics: "haveYouEverBeenCloseToTragedyOrBeenCloseToFolkWhoHaveHaveYouEverFeltAPainSoPowerfulSoHeavyYouCollapseNoWellIveNeverHadToKnockOnWoodButIKnowSomeoneWhoHasWhichMakesMeWonderIfICouldItMakesMeWonderIfIveNeverHadToKnockOnWoodAndImGladIHaventYetBecauseImSureItIsntGoodThatsTheImpressionThatIGetHaveYouEverHadTheOddsStackedUpSoHighYouNeedAStrengthMostDontPossessOrHasItEverComeDownToDoOrDieYouveGotToRiseAboveTheRestNoWellIveNeverHadToKnockOnWoodButIKnowSomeoneWhoHasWhichMakesMeWonderIfICouldItMakesMeWonderIfIveNeverHadToKnockOnWoodAndImGladIHaventYetBecauseImSureItIsntGoodThatsTheImpressionThatIGetImNotACowardIveJustNeverBeenTestedIdLikeToThinkThatIfIWasIWouldPassLookAtTheTestedAndThinkThereButForTheGraceGoIMightBeACowardImAfraidOfWhatIMightFindOutNeverHadToKnockOnWoodButIKnowSomeoneWhoHasWhichMakesMeWonderIfICouldItMakesMeWonderIfIveNeverHadToKnockOnWoodAndImGladIHaventYetBecauseImSureItIsntGoodThatsTheImpressionThatIGetIveNeverHadToButIBetterKnockOnWoodCauseIKnowSomeoneWhoHasWhichMakesMeWonderIfICouldItMakesMeWonderIfIveNeverHadToIdBetterKnockOnWoodCauseImSureItIsntGoodAndImGladIHaventYetThatsTheImpressionThatIGet"
  },
  {
    title: "<i>The Muppets</i> Theme",
    artist: "Jim Henson and Sam Pottle",
    image: "img/theMuppetsTheme.png",
    audio: "audio/theMuppetsTheme.mp3",
    duration: 50,
    lyrics: "itsTimeToPlayTheMusicItsTimeToLightTheLightsItsTimeToMeetTheMuppetsOnTheMuppetShowTonightItsTimeToPutOnMakeupItsTimeToDressUpRightItsTimeToRaiseTheCurtainsOnTheMuppetShowTonightWhyDoWeAlwaysComeHereIGuessWellNeverKnowItsLikeAKindOfTortureToHaveToWatchTheShowToIntroduceOurGuestStarThatsWhatIAmHereToDoSoItReallyMakesMeHappyToIntroduceToYouLadiesAndGentlemenOkayGoSoNowLetsGetItStartedWhyDontWeGetItStartedItsTimeToGetThingsStartedOnTheMostSensationalInspirationalCelebrationalMuppetationalThisIsWhatWeCallTheMuppetShowItsTheMostSensationalInspirationalCelebrationalMuppetationalThisIsWhatWeCallTheMuppetShow"
  },
  {
    title: "<i>The Pink Panther</i> Theme",
    artist: "Henry Mancini",
    image: "img/thePinkPantherTheme.png",
    audio: "audio/thePinkPantherTheme.mp3",
    duration: 184,
    lyrics: ""
  },
  {
    title: "<i>The Race</i>",
    artist: "Yello",
    image: "img/theRace.png",
    audio: "audio/theRace.mp3",
    duration: 222,
    lyrics: "countOnMeImGonnaWinTheRaceCountOnMeImGonnaWinTheRaceRoomDahBeeBoomTheWhipperingDongRoomDahBeeBoomTheWhipperingDongNowShutTheDoorKeepDownToSouthShutTheDoorKeepDownToSouthShutTheDoorKeepDownToSouthNotAnyTrackIsTurningButTheRaceIsInMyHeadImAttackingTheIllusionButTheStoppingDrivesMeMadINeedThisRaceTimeIsRunningOutAndTheIllusionFadesAwayTimeIsRunningOutAnotherDayIsOnItsWayAnotherSunWasShiningAndHeKnewHeWasntGreatHeDidntEverTalkAboutHeKnewHeCouldntWaitINeedThisRaceAreYouEverGonnaPushMeLetMeRunAndLetMeDoINeedItAndImReadyAndIHaventGotAClueNotAnyTrackIsTurningButTheRaceIsInMyHeadImAttackingTheIllusionButTheStoppingDrivesMeMadINeedTheRaceAnotherSunWasShiningAndHeKnewHeWasntGreatHeDidntEverTalkAboutHeKnewHeCouldntWaitINeedThisRaceAreYouEverGonnaPushMeLetMeRunAndLetMeDoINeedItAndImReadyAndIHaventGotAClueAnyTrackIsTurningButTheRaceIsInMyHeadImAttackingTheIllusionButTheStoppingDrivesMeMadINeedTheRaceTimeIsRunningOutAndTheIllusionFadesAwayTimeIsRunningOutAnotherDayIsOnItsWayThisIsTheRaceOnTheFastLaneOfTheStreetImDrivingSometimesSomewhereImArrivingEveryDayAndEveryNightCountOnMeImGonnaWinTheRaceCountOnMeImGonnaWinTheRaceRoomDahBeeBoomTheWhipperingDongRoomDahBeeBoomTheWhipperingDongShutTheDoorKeepDownToSouthShutTheDoorKeepDownToSouthShutTheDoorKeepDownToSouth"
  },
  {
    title: "<i>The S&M Man</i>",
    artist: "the S&M Man himself",
    image: "img/theSMMan.png",
    audio: "audio/theSMMan.mp3",
    duration: 90,
    lyrics: "theSMManTheSMManTheSMManCauseHeMixesItWithLoveAndMakesTheHurtFeelGoodTheHurtFeelGood"
  },
  {
    title: "<i>The Star-Spangled Banner</i>",
    artist: "Francis Scott Key and John Stafford Smith",
    image: "img/theStarSpangledBanner.png",
    audio: "audio/theStarSpangledBanner.mp3",
    duration: 87,
    lyrics: "oSayCanYouSeeByTheDawnsEarlyLightWhatSoProudlyWeHailedAtTheTwilightsLastGleamingWhoseBroadStripesAndBrightStarsThroughThePerilousFightOerTheRampartsWeWatchedWereSoGallantlyStreamingAndTheRocketsRedGlareTheBombsBurstingInAirGaveProofThroughTheNightThatOurFlagWasStillThereOSayDoesThatStarSpangledBannerYetWaveOerTheLandOfTheFreeAndTheHomeOfTheBrave"
  },
  {
    title: "<i>The Stripper</i>",
    artist: "David Rose",
    image: "img/theStripper.png",
    audio: "audio/theStripper.mp3",
    duration: 114,
    lyrics: ""
  },
  {
    title: "<i>Tijuana</i>",
    artist: "God",
    image: "img/tijuana.png",
    audio: "audio/tijuana.mp3",
    duration: 213,
    lyrics: "gangbangOhYesYouDoItsBeenALongTimeSinceShesBeenScrewedWhenSheWasYoungerAndInHerPrimeSheUsedToGangbangAllTheTimeNowThatShesOlderAndTurningGraySheOnlyGangbangsOnceADay"
  },
  {
    title: "<i>Touch Me</i>",
    artist: "the Doors",
    image: "img/touchMe.png",
    audio: "audio/touchMe.mp3",
    duration: 190,
    lyrics: "yeahComeOnComeOnComeOnComeOnNowTouchMeBabeCantYouSeeThatIAmNotAfraidWhatWasThatPromiseThatYouMadeWhyWontYouTellMeWhatSheSaidWhatWasThatPromiseThatYouMadeNowImGoingToLoveYouTilTheHeavensStopTheRainImGoingToLoveTilTheStarsFallFromTheSkyForYouAndIComeOnComeOnComeOnComeOnNowTouchMeBabeCantYouSeeThatIAmNotAfraidWhatWasThatPromiseThatYouMadeWhyWontYouTellMeWhatSheSaidWhatWasThatPromiseThatYouMadeNowImGoingToLoveYouTilTheHeavensStopTheRainImGoingToLoveTilTheStarsFallFromTheSkyForYouAndIImGoingToLoveYouTilTheHeavensStopTheRainImGoingToLoveTilTheStarsFallFromTheSkyForYouAndIStrongerThanDirt"
  },
  {
    title: "<i>Uptown Girl</i>",
    artist: "Billy Joel",
    image: "img/uptownGirl.png",
    audio: "audio/uptownGirl.mp3",
    duration: 199,
    lyrics: "uptownGirlShesBeenLivingInHerUptownWorldIBetShesNeverHadABackstreetGuyIBetHerMommaNeverToldHerWhyImGonnaTryForAnUptownGirlShesBeenLivingInHerWhiteBredWorldAsLongAsAnyoneWithHotBloodCanAndNowShesLookingForADowntownManThatsWhatIAmAndWhenSheKnowsWhatSheWantsFromHerTimeAndWhenSheWakesUpAndMakesUpHerMindShellSeeImNotSoToughJustBecauseImInLoveWithAnUptownGirlYouKnowIveSeenHerInHerUptownWorldShesGettingTiredOfHerHighClassToysAndAllHerPresentsFromHerUptownBoysShesGotAChoiceOhOhOhOhOhOhOhOhOhOhOhOhOhOhOhOhUptownGirlYouKnowICantAffordToBuyHerPearlsButMaybeSomedayWhenMyShipComesInShellUnderstandWhatKindOfGuyIveBeenAndThenIllWinAndWhenShesWalkingShesLookingSoFineAndWhenShesTalkingShellSayThatShesMineShellSayImNotSoToughJustBecauseImInLoveWithAnUptownGirlShesBeenLivingInHerWhiteBredWorldAsLongAsAnyoneWithHotBloodCanAndNowShesLookingForADowntownManThatsWhatIAmOhOhOhOhOhOhOhOhOhOhOhOhOhOhOhOhUptownGirlShesMyUptownGirlYouKnowImInLoveWithAnUptownGirlMyUptownGirlYouKnowImInLoveWithAnUptownGirlMyUptownGirlYouKnowImInLoveWithAnUptownGirlMyUptownGirlYouKnowImInLoveWithAnUptownGirl"
  },
  {
    title: "<i>We Are Number One</i>",
    artist: "Mani Svavarsson",
    image: "img/weAreNumberOne.png",
    audio: "audio/weAreNumberOne.mp3",
    duration: 141,
    lyrics: "heyWeAreNumberOneHeyWeAreNumberOneNowListenCloselyHeresALittleLessonInTrickeryThisIsGoingDownInHistoryIfYouWantToBeAVillainNumberOneYouHaveToChaseASuperheroOnTheRunJustFollowMyMovesAndSneakAroundBeCarefulNotToMakeASoundShhNoDontTouchThatWeAreNumberOneHeyWeAreNumberOneWeAreNumberOneHaHaHaNowLookAtThisNetThatIJustFoundWhenISayGoBeReadyToThrowGoThrowItOnHimNotMeUghLetsTrySomethingElseNowWatchAndLearnHeresTheDealHellSlipAndSlideOnThisBananaPeelHaHaHaWhatAreYouDoingBaBaBiddlyBaBaBaBaBaBaBaBaBaBaBaWeAreNumberOneHeyBaBaBiddlyBaBaBaBaBaBaBaBaBaBaBaWeAreNumberOneBaBaBiddlyBaBaBaBaBaBaBaBaBaBaBaWeAreNumberOneHeyBaBaBiddlyBaBaBaBaBaBaBaBaBaBaBaWeAreNumberOneHeyHey"
  },
  {
    title: "<i>We Will Rock You</i>",
    artist: "Queen",
    image: "img/weWillRockYou.png",
    audio: "audio/weWillRockYou.mp3",
    duration: 134,
    lyrics: "buddyYoureABoyMakeABigNoisePlayingInTheStreetGonnaBeAManSomedayYouGotMudOnYourFaceYouBigDisgraceKickingYourCanAllOverThePlaceSinginWeWillWeWillRockYouWeWillWeWillRockYouBuddyYoureAYoungManHardManShoutingInTheStreetGonnaTakeOnTheWorldSomedayYouGotBloodOnYourFaceYouBigDisgraceWavingYourBannerAllOverThePlaceWeWillWeWillRockYouSingItWeWillWeWillRockYouBuddyYoureAnOldManPoorManPleadingWithYourEyesGonnaMakeYouSomePeaceSomedayYouGotMudOnYourFaceBigDisgraceSomebodyBetterPutYouBackIntoYourPlaceWeWillWeWillRockYouSingItWeWillWeWillRockYouEverybodyWeWillWeWillRockYouHmmWeWillWeWillRockYouAlright"
  },
  {
    title: "<i>When the Saints Go Marching In</i>",
    artist: "Louis Armstrong",
    image: "img/whenTheSaintsGoMarchingIn.png",
    audio: "audio/whenTheSaintsGoMarchingIn.mp3",
    duration: 213,
    lyrics: "ohWhenTheSaintsGoMarchinInOhWhenTheSaintsGoMarchinInLordIWantToBeInThatNumberWhenTheSaintsGoMarchinInAndWhenTheSunBeginsToShineAndWhenTheSunBeginsToShineOhHowIWantToBeInThatNumberWhenTheSunBeginsToShineOhWhenTheTrumpetSoundsItsCallOhWhenTheTrumpetSoundsItsCallLordHowIWantToBeInThatNumberWhenTheTrumpetSoundsItsCallOhWhenTheSaintsGoMarchinInOhWhenTheSaintsGoMarchinInLordIWantToBeInThatNumberWhenTheSaintsGoMarchinIn"
  },
  {
    title: "<i>Y.M.C.A.</i>",
    artist: "Village People",
    image: "img/ymca.png",
    audio: "audio/ymca.mp3",
    duration: 241,
    lyrics: "youngManTheresNoNeedToFeelDownISaidYoungManPickYourselfOffTheGroundISaidYoungManCauseYoureInANewTownTheresNoNeedToBeUnhappyYoungManTheresAPlaceYouCanGoISaidYoungManWhenYoureShortOnYourDoughYouCanStayThereAndImSureYouWillFindManyWaysToHaveAGoodTimeItsFunToStayAtTheYmcaItsFunToStayAtTheYmcaTheyHaveEverythingForYoungMenToEnjoyYouCanHangOutWithAllTheBoysItsFunToStayAtTheYmcaItsFunToStayAtTheYmcaYouCanGetYourselfCleanYouCanHaveAGoodMealYouCanDoWhateverYouFeelYoungManAreYouListeningToMeISaidYoungManWhatDoYouWantToBeISaidYoungManYouCanMakeRealYourDreamsButYouveGotToKnowThisOneThingNoManDoesItAllByHimselfISaidYoungManPutYourPrideOnTheShelfAndJustGoThereToTheYmcaImSureTheyCanHelpYouTodayItsFunToStayAtTheYmcaItsFunToStayAtTheYmcaTheyHaveEverythingForYoungMenToEnjoyYouCanHangOutWithAllTheBoysItsFunToStayAtTheYmcaItsFunToStayAtTheYmcaYouCanGetYourselfCleanYouCanHaveAGoodMealYouCanDoWhateverYouFeelYoungManIWasOnceInYourShoesISaidIWasDownAndOutWithTheBluesIFeltNoManCaredIfIWereAliveIFeltTheWholeWorldWasSoJiveThatsWhenSomeoneCameUpToMeAndSaidYoungManTakeAWalkUpTheStreetTheresAPlaceThereCalledTheYmcaTheyCanStartYouBackOnYourWayItsFunToStayAtTheYmcaItsFunToStayAtTheYmcaTheyHaveEverythingForYoungMenToEnjoyYouCanHangOutWithAllTheBoysYmcaItsFunToStayAtTheYmcaItsFunToStayAtTheYmcaYoungManYoungManTheresNoNeedToFeelDownYoungManYoungManPickYourselfOffTheGroundYmcaJustGoToTheYmcaYoungManYoungManIWasOnceInYourShoesYoungManYoungManIWasOutWithTheBluesYmcaYmcaYmcaYmca"
  },
  {
    title: "<i>Zoot Suit Riot</i>",
    artist: "Cherry Poppin' Daddies",
    image: "img/zootSuitRiot.png",
    audio: "audio/zootSuitRiot.mp3",
    duration: 245,
    lyrics: "whosThatWhisperinInTheTreesItsTwoSailorsAndTheyreOnLeavePipesAndChainsAndSwinginHandsWhosYourDaddyYesIAmFatCatCameToPlayNowYouCantRunFastEnoughYoudBestStayAwayWhenThePushersComeToShoveZootSuitRiotRiotThrowBackABottleOfBeerZootSiutRiotRiotPullACombThroughYourCoalBlackHairZootSuitRiotRiotThrowBackABottleOfBeerZootSiutRiotRiotPullACombThroughYourCoalBlackHairBlowDaddyAWhippedUpJitterbugginBrownEyedManAStrayCatFrontinUpAnEightPieceBandCutMeSammyAndYoullUnderstandInMyVeinsHotMusicRanYouGotMeInASwayAndIWantToSwingYouDownNowYouSailorsKnowWhereYourWomenComeForLoveZootSuitRiotRiotThrowBackABottleOfBeerZootSiutRiotRiotPullACombThroughYourCoalBlackHairYoureInAZootSiutRiotYoureInAZootSiutRiotYoureInAZootSiutRiotOhYouGotMeInASwayAndIWantToSwingYouDownNowYouSailorsKnowWhereYourWomenComeForLoveZootSuitRiotRiotThrowBackABottleOfBeerZootSiutRiotRiotPullACombThroughYourCoalBlackHairZootSuitRiotRiotThrowBackABottleOfBeerZootSiutRiotRiotPullACombThroughYourCoalBlackHairYoureInAZootSiutRiotYoureInAZootSiutRiotYoureInAZootSiutRiot",
  }
];

let sounds = new AudioContext();

class Session {
  constructor() {
    this.totalGuesses = 0;
    this.correctGuesses = "N/A";
    this.correctGuessRate = "N/A";
    this.totalAttempts = "N/A";
    this.attemptsPerSelection = "N/A";
    this.guessedOnFirstAttempt = "N/A";
    this.proficiency = "Noob";
    this.totalLivesLost = 0;
    this.totalCheers = 0;
    this.totalCorrectCheers = "N/A";
    this.totalPoints = 0;
    this.highScore = "N/A";
    this.totalDrinks = 0;
    this.totalIces = "N/A";
    this.icesFinished = "N/A";
    this.iceFinishRate = "N/A";
    this.totalDafCount = 0;
    this.totalVersesSung = 0;
    this.gamesStarted = 1;
    this.gamesFinished = "0 (1 in progress)";
    this.gamesWon = "N/A";
    this.gameWinRate = "N/A";
    this.gameTime = 0;
    this.totalGameTime = 0;
  }
};
let here = new Session();

class User {
  constructor() {
    this.name = "";
    this.year = "";
    this.major = "";
    this.hometown = "";
    this.instrument = "";
    this.socialSecurityNumber = 0;
  }
};
let you = new User();

fetch("data.json")
  .then((response) => (response.json()))
  .then((data) => {
    globalThis.players = data;
    for (var i = 0; i < document.getElementsByClassName("playerStatsCont").length; i++) {
      if (document.getElementsByClassName("playerStatsCont")[i].classList.contains("menStatsCont")) {
        var gender = 1;
      }
      else if (document.getElementsByClassName("playerStatsCont")[i].classList.contains("womenStatsCont")) {
        var gender = 2;
      }
      if (document.getElementsByClassName("playerStatsCont")[i].classList.contains("clarksonStatsCont")) {
        var college = 1;
      }
      else if (document.getElementsByClassName("playerStatsCont")[i].classList.contains("sluStatsCont")) {
        var college = 2;
      }
      if (gender == 1) {
        if (college == 1) {
          if (i == 0) {
            var stats = i;
          }
          else if ((i >= 2) && (i <= 6)) {
            var stats = (i - 1);
          }
          document.getElementsByClassName("playerName")[i].innerHTML = ((globalThis.players).men.clarkson[stats].name).substring(0, ((globalThis.players).men.clarkson[stats].name).search(/\s/sm)) + "<br><b>" + ((globalThis.players).men.clarkson[stats].name).substring(((globalThis.players).men.clarkson[stats].name).search(/\s/sm) + 1) + "</b>";
          document.getElementsByClassName("playerNumber")[i].innerHTML = "#<b>" + (globalThis.players).men.clarkson[stats].number + "</b>";
          document.getElementsByClassName("positionDataCell")[i].innerHTML = (((globalThis.players).men.clarkson[stats].position).charAt(0)).toUpperCase() + ((globalThis.players).men.clarkson[stats].position).substring(1);
          document.getElementsByClassName("hometownDataCell")[i].innerHTML = (globalThis.players).men.clarkson[stats].hometown;
          document.getElementsByClassName("yearDataCell")[i].innerHTML = (((globalThis.players).men.clarkson[stats].year).charAt(0)).toUpperCase() + ((globalThis.players).men.clarkson[stats].year).substring(1);
          document.getElementsByClassName("majorDataCell")[i].innerHTML = (((globalThis.players).men.clarkson[stats].major).charAt(0)).toUpperCase() + ((globalThis.players).men.clarkson[stats].major).substring(1);
          document.getElementsByClassName("heightDataCell")[i].innerHTML = (globalThis.players).men.clarkson[stats].height.feet + "&prime; " + (globalThis.players).men.clarkson[stats].height.inches + "&Prime;";
          document.getElementsByClassName("weightDataCell")[((i == 0) ? (i) : (i - 1))].innerHTML = (globalThis.players).men.clarkson[stats].weight + " lbs";
        }
        else if (college == 2) {
          if ((i >= 12) && (i <= 16)) {
            var stats = (i - 11);
          }
          else if (i == 22) {
            var stats = (i - 22);
          }
          document.getElementsByClassName("playerName")[i].innerHTML = ((globalThis.players).men.slu[stats].name).substring(0, ((globalThis.players).men.slu[stats].name).search(/\s/sm)) + "<br><b>" + ((globalThis.players).men.slu[stats].name).substring(((globalThis.players).men.slu[stats].name).search(/\s/sm) + 1) + "</b>";
          document.getElementsByClassName("playerNumber")[i].innerHTML = "#<b>" + (globalThis.players).men.slu[stats].number + "</b>";
          document.getElementsByClassName("positionDataCell")[i].innerHTML = (((globalThis.players).men.slu[stats].position).charAt(0)).toUpperCase() + ((globalThis.players).men.slu[stats].position).substring(1);
          document.getElementsByClassName("hometownDataCell")[i].innerHTML = (globalThis.players).men.slu[stats].hometown;
          document.getElementsByClassName("yearDataCell")[i].innerHTML = (((globalThis.players).men.slu[stats].year).charAt(0)).toUpperCase() + ((globalThis.players).men.slu[stats].year).substring(1);
          document.getElementsByClassName("majorDataCell")[i].innerHTML = (((globalThis.players).men.slu[stats].major).charAt(0)).toUpperCase() + ((globalThis.players).men.slu[stats].major).substring(1);
          document.getElementsByClassName("heightDataCell")[i].innerHTML = (globalThis.players).men.slu[stats].height.feet + "&prime; " + (globalThis.players).men.slu[stats].height.inches + "&Prime;";
          document.getElementsByClassName("weightDataCell")[((i == 22) ? (i - 11) : (i - 6))].innerHTML = (globalThis.players).men.slu[stats].weight + " lbs";
        }
      }
      else if (gender == 2) {
        if (college == 1) {
          if (i == 1) {
            var stats = (i - 1);
          }
          else if ((i >= 7) && (i <= 11)) {
            var stats = (i - 6);
          }
          document.getElementsByClassName("playerName")[i].innerHTML = ((globalThis.players).women.clarkson[stats].name).substring(0, ((globalThis.players).women.clarkson[stats].name).search(/\s/sm)) + "<br><b>" + ((globalThis.players).women.clarkson[stats].name).substring(((globalThis.players).women.clarkson[stats].name).search(/\s/sm) + 1) + "</b>";
          document.getElementsByClassName("playerNumber")[i].innerHTML = "#<b>" + (globalThis.players).women.clarkson[stats].number + "</b>";
          document.getElementsByClassName("positionDataCell")[i].innerHTML = (((globalThis.players).women.clarkson[stats].position).charAt(0)).toUpperCase() + ((globalThis.players).women.clarkson[stats].position).substring(1);
          document.getElementsByClassName("hometownDataCell")[i].innerHTML = (globalThis.players).women.clarkson[stats].hometown;
          document.getElementsByClassName("yearDataCell")[i].innerHTML = (((globalThis.players).women.clarkson[stats].year).charAt(0)).toUpperCase() + ((globalThis.players).women.clarkson[stats].year).substring(1);
          document.getElementsByClassName("majorDataCell")[i].innerHTML = (((globalThis.players).women.clarkson[stats].major).charAt(0)).toUpperCase() + ((globalThis.players).women.clarkson[stats].major).substring(1);
          document.getElementsByClassName("heightDataCell")[i].innerHTML = (globalThis.players).women.clarkson[stats].height.feet + "&prime; " + (globalThis.players).women.clarkson[stats].height.inches + "&Prime;";
        }
        else if (college == 2) {
          if ((i >= 17) && (i <= 21)) {
            var stats = (i - 16);
          }
          else if (i == 23) {
            var stats = (i - 23);
          }
          document.getElementsByClassName("playerName")[i].innerHTML = ((globalThis.players).women.slu[stats].name).substring(0, ((globalThis.players).women.slu[stats].name).search(/\s/sm)) + "<br><b>" + ((globalThis.players).women.slu[stats].name).substring(((globalThis.players).women.slu[stats].name).search(/\s/sm) + 1) + "</b>";
          document.getElementsByClassName("playerNumber")[i].innerHTML = "#<b>" + (globalThis.players).women.slu[stats].number + "</b>";
          document.getElementsByClassName("positionDataCell")[i].innerHTML = (((globalThis.players).women.slu[stats].position).charAt(0)).toUpperCase() + ((globalThis.players).women.slu[stats].position).substring(1);
          document.getElementsByClassName("hometownDataCell")[i].innerHTML = (globalThis.players).women.slu[stats].hometown;
          document.getElementsByClassName("yearDataCell")[i].innerHTML = (((globalThis.players).women.slu[stats].year).charAt(0)).toUpperCase() + ((globalThis.players).women.slu[stats].year).substring(1);
          document.getElementsByClassName("majorDataCell")[i].innerHTML = (((globalThis.players).women.slu[stats].major).charAt(0)).toUpperCase() + ((globalThis.players).women.slu[stats].major).substring(1);
          document.getElementsByClassName("heightDataCell")[i].innerHTML = (globalThis.players).women.slu[stats].height.feet + "&prime; " + (globalThis.players).women.slu[stats].height.inches + "&Prime;";
        }
      }
    }
  });

// Functions

function newFunction() {
  if (sessionStorage.functionPrime == undefined) {
    if ((sessionStorage.function).match(/event/sm)) {
      document.getElementById("ok").onclick = function(event) {
        eval("gotIt" + sessionStorage.function + "(event)");
        compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
      }
    }
    else {
      document.getElementById("ok").onclick = function() {
        eval("gotIt" + sessionStorage.function + "()");
        compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
      }
    }
  }
  else {
    if ((sessionStorage.functionPrime).match(/event/sm)) {
      document.getElementById("ok").onclick = function(event) {
        eval(sessionStorage.functionPrime + "(event)");
        compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
      }
    }
    else {
      document.getElementById("ok").onclick = function() {
        eval(sessionStorage.functionPrime + "()");
        compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
      }
    }
  }
}

function shortcut(event) {
  if ((event.key).toLowerCase() in keyboard) {
    eval("keyboard." + (event.key).toLowerCase() + " = true");
  }
  eval(sessionStorage.shortcut + "(event)");
}

function shortcutUndo(event) {
  if ((event.key).toLowerCase() in keyboard) {
    eval("keyboard." + (event.key).toLowerCase() + " = false");
  }
  eval(sessionStorage.shortcut + "(event)");
}

function load(event) {
  if (document.body.style.cursor != "auto") {
    for (var i = 0; i < (document.getElementsByClassName("load").length - 1); i++) {
      if (document.getElementsByClassName("load")[i] == event.target) {
        if (sessionStorage.loadIncrementInterval != undefined) {
          clearInterval(sessionStorage.loadIncrementInterval);
          sessionStorage.removeItem("loadIncrementInterval");
        }
        sessionStorage.newLoad = (((i + 1) / document.getElementsByClassName("load").length) * 100);
        if ((sessionStorage.oldLoad == undefined) || ((Math.round(sessionStorage.newLoad * 100) / 100) > (Math.round(sessionStorage.oldLoad * 100) / 100))) {
          if (((Math.round(sessionStorage.newLoad * 100) / 100) > 0) && ((Math.round(sessionStorage.newLoad * 100) / 100) < 100)) {
            document.getElementById("loadingBarPercent").innerHTML = ((((Math.round(sessionStorage.newLoad * 100) / 100) % 1) == 0) ? (((Math.round(sessionStorage.newLoad * 100) / 100) < 10) ? (((Math.round(sessionStorage.newLoad * 100) / 100) + ".").padEnd(4, "0")) : (((Math.round(sessionStorage.newLoad * 100) / 100) + ".").padEnd(5, "0"))) : (((Math.round(sessionStorage.newLoad * 100) / 100) < 10) ? (String(Math.round(sessionStorage.newLoad * 100) / 100).padEnd(4, "0")) : (String(Math.round(sessionStorage.newLoad * 100) / 100).padEnd(5, "0")))) + "%";
            document.getElementById("loadingBar").style.right = (100 - sessionStorage.newLoad) + "%";
            document.getElementById("loadingBar").style.transition = "right 0s ease 0s";
          }
        }
        sessionStorage.oldLoad = sessionStorage.newLoad;
        sessionStorage.loadIncrementInterval = setInterval(loadIncrement.bind(null, sessionStorage.newLoad), 100);
      }
    }
  }
}

function loadIncrement(newLoad) {
  if (document.body.style.cursor != "auto") {
    sessionStorage.newLoad = newLoad;
    if (sessionStorage.newLoad <= 99.86) {
      if (sessionStorage.newLoad <= 98.81) {
        sessionStorage.newLoad = (+sessionStorage.newLoad + (Math.ceil(Math.random() * 69) / 100));
      }
      else if ((sessionStorage.newLoad > 98.81) && (sessionStorage.newLoad <= 99.5)) {
        sessionStorage.newLoad = (+sessionStorage.newLoad + (Math.ceil(Math.random() * 36) / 100));
      }
      else if ((sessionStorage.newLoad > 99.5) && (sessionStorage.newLoad <= 99.86)) {
        sessionStorage.newLoad = (+sessionStorage.newLoad + (Math.ceil(Math.random() * 7) / 100));
      }
      document.getElementById("loadingBarPercent").innerHTML = ((((Math.round(sessionStorage.newLoad * 100) / 100) % 1) == 0) ? (((Math.round(sessionStorage.newLoad * 100) / 100) < 10) ? (((Math.round(sessionStorage.newLoad * 100) / 100) + ".").padEnd(4, "0")) : (((Math.round(sessionStorage.newLoad * 100) / 100) + ".").padEnd(5, "0"))) : (((Math.round(sessionStorage.newLoad * 100) / 100) < 10) ? (String(Math.round(sessionStorage.newLoad * 100) / 100).padEnd(4, "0")) : (String(Math.round(sessionStorage.newLoad * 100) / 100).padEnd(5, "0")))) + "%";
      document.getElementById("loadingBar").style.right = (100 - sessionStorage.newLoad) + "%";
      document.getElementById("loadingBar").style.transition = "right 0s ease 0s";
      sessionStorage.oldLoad = sessionStorage.newLoad;
    }
    else if (sessionStorage.newLoad > 99.86) {
      clearInterval(sessionStorage.loadIncrementInterval);
      sessionStorage.removeItem("loadIncrementInterval");
    }
  }
}

function gameBegins(event) {
  if (localStorage.firstGame == String(true)) {
    localStorage.answers = JSON.stringify(answers);
  }
  else if (localStorage.firstGame == String(false)) {
    localStorage.gamesStarted++;
    if (!((localStorage.gamesFinished).match(/in progress/sm))) {
      localStorage.gamesFinished = localStorage.gamesFinished + " (" + (+localStorage.gamesFinished + 1) + " in progress)";
    }
    answers = JSON.parse(localStorage.answers);
    sessionStorage.clear();
    for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
      if (document.getElementsByTagName("button")[i].classList.contains("disabled")) {
        if (document.getElementsByTagName("button")[i].disabled == false) {
          document.getElementsByTagName("button")[i].disabled = true;
        }
      }
      else {
        if (document.getElementsByTagName("button")[i].disabled == true) {
          document.getElementsByTagName("button")[i].disabled = false;
        }
      }
    }
    for (var i = 0; i < document.getElementsByTagName("select").length; i++) {
      if (document.getElementsByTagName("select")[i].selectedIndex > 0) {
        document.getElementsByTagName("select")[i].selectedIndex = 0;
      }
      if (document.getElementsByTagName("select")[i].classList.contains("disabled")) {
        if (document.getElementsByTagName("select")[i].disabled == false) {
          document.getElementsByTagName("select")[i].disabled = true;
        }
      }
      else {
        if (document.getElementsByTagName("select")[i].disabled == true) {
          document.getElementsByTagName("select")[i].disabled = false;
        }
      }
    }
    for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
      if ((document.getElementsByTagName("input")[i].type == "text") || (document.getElementsByTagName("input")[i].type == "search") || (document.getElementsByTagName("input")[i].type == "url") || (document.getElementsByTagName("input")[i].type == "email") || (document.getElementsByTagName("input")[i].type == "tel") || (document.getElementsByTagName("input")[i].type == "password") || (document.getElementsByTagName("input")[i].type == "number") || (document.getElementsByTagName("input")[i].type == "week") || (document.getElementsByTagName("input")[i].type == "month") || (document.getElementsByTagName("input")[i].type == "time") || (document.getElementsByTagName("input")[i].type == "date") || (document.getElementsByTagName("input")[i].type == "datetime-local") || (document.getElementsByTagName("input")[i].type == "file") || (document.getElementsByTagName("input")[i].type == "color")) {
        if (document.getElementsByTagName("input")[i].value != "") {
          document.getElementsByTagName("input")[i].value = "";
        }
      }
      else if ((document.getElementsByTagName("input")[i].type == "checkbox") || (document.getElementsByTagName("input")[i].type == "radio")) {
        if (document.getElementsByTagName("input")[i].classList.contains("checked")) {
          if (document.getElementsByTagName("input")[i].checked == false) {
            document.getElementsByTagName("input")[i].checked = true;
          }
        }
        else {
          if (document.getElementsByTagName("input")[i].checked == true) {
            document.getElementsByTagName("input")[i].checked = false;
          }
        }
      }
      else if (document.getElementsByTagName("input")[i].type == "range") {
        if (document.getElementsByTagName("input")[i].value != "50") {
          document.getElementsByTagName("input")[i].value = "50";
        }
      }
      if (document.getElementsByTagName("input")[i].classList.contains("disabled")) {
        if (document.getElementsByTagName("input")[i].disabled == false) {
          document.getElementsByTagName("input")[i].disabled = true;
        }
      }
      else {
        if (document.getElementsByTagName("input")[i].disabled == true) {
          document.getElementsByTagName("input")[i].disabled = false;
        }
      }
    }
    for (var i = 0; i < document.getElementsByTagName("video").length; i++) {
      if (document.getElementsByTagName("video")[i].currentTime > 0) {
        document.getElementsByTagName("video")[i].currentTime = 0;
      }
    }
    for (var i = 0; i < document.getElementsByTagName("audio").length; i++) {
      if (document.getElementsByTagName("audio")[i].currentTime > 0) {
        document.getElementsByTagName("audio")[i].currentTime = 0;
      }
    }
  }
  accountUpdate(0, "check");
  remember(event);
  setInterval(rememberGameTime, 1000);
  cookie();
  document.querySelectorAll("*")[Math.floor(Math.random() * document.querySelectorAll("*").length)].onclick = virus;
  document.getElementById("raffle").style.left = Math.ceil(Math.random() * (window.innerWidth - 1)) + "px";
  document.getElementById("raffle").style.top = Math.ceil(Math.random() * (window.innerHeight - 1)) + "px";
  document.getElementById("raffle").style.transition = "all 0s ease 0s";
  document.body.style.cursor = "auto";
  document.getElementById("loading").style.display = "none";
  for (var i = 0; i < document.getElementsByClassName("loadingMessageDot").length; i++) {
    document.getElementsByClassName("loadingMessageDot")[i].style.animation = "none";
  }
  if (sessionStorage.loadIncrementInterval != undefined) {
    clearInterval(sessionStorage.loadIncrementInterval);
    sessionStorage.removeItem("loadIncrementInterval");
  }
  document.getElementById("loadingBarPercent").innerHTML = "100%";
  document.getElementById("loadingBar").style.right = "0";
  document.getElementById("loadingBar").style.transition = "right 0s ease 0s";
  document.getElementById("loadingBarShimmer").style.animation = "none";
  document.getElementById("viewAccountToggle").style.pointerEvents = "auto";
  document.getElementById("viewAccountToggle").tabIndex = "0";
  if ((window.innerHeight <= 600) || (window.innerWidth <= 1200)) {
    document.getElementById("urlButton").tabIndex = "0";
    document.getElementById("mobileButton").tabIndex = "0";
    document.getElementById("mobileImgCont").tabIndex = "0";
    document.onclick = unselectUrl;
  }
  else if ((window.innerHeight > 600) && (window.innerWidth > 1200)) {
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    document.getElementById("conductorCont").style.left = "2em";
    document.getElementById("conductorCont").style.transition = "left 2s ease .5s";
    sessionStorage.emphasizeConductorInterval = setInterval(emphasizeConductor, 30000);
    setTimeout(enableButton, 500);
    document.onclick = collapse;
    document.onkeydown = collapse;
  }
  document.ondblclick = showPassword;
  console.clear();
  if (localStorage.firstGame == String(true)) {
    console.log("Hey, you seem dope as fuck! :)");
  }
  else if (localStorage.firstGame == String(false)) {
    console.log("Welcome back" + ((localStorage.name == undefined) ? ("") : (", " + localStorage.name)) + "!");
  }
}

function cookie() {
  if (document.cookie == "") {
    sessionStorage.cookie = Math.floor(Math.random() * cookies.length);
    let expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);
    document.cookie = "favorite=" + cookies[sessionStorage.cookie] + "; expires=" + String(expiration) + "; path=/";
  }
  for (var i = 0; i < document.getElementsByTagName("meta").length; i++) {
    if ((document.getElementsByTagName("meta")[i].hasAttribute("http-equiv")) && (document.getElementsByTagName("meta")[i].httpEquiv == "access-control-allow-origin")) {
      document.getElementsByTagName("meta")[i].after(document.createElement("meta"));
      document.getElementsByTagName("meta")[i + 1].httpEquiv = "set-cookie";
      document.getElementsByTagName("meta")[i + 1].content = document.cookie;
      break;
    }
  }
}

function collapse(event) {
  if ((event.type == "click") || ((event.type == "keydown") && (event.key == "Escape"))) {
    if (((event.type == "click") && (!(document.elementsFromPoint(event.clientX, event.clientY).includes(document.getElementById("viewAccount"))))) || (event.type == "keydown")) {
      if (document.getElementById("viewAccountToggle").onclick == viewAccountToggleClose) {
        viewAccountToggleClose();
      }
    }
    if (((event.type == "click") && (!(document.elementsFromPoint(event.clientX, event.clientY).includes(document.getElementById("password"))))) || (event.type == "keydown")) {
      if (document.getElementById("password").open == true) {
        hidePassword();
      }
    }
    if (sessionStorage.collapse == "stats") {
      if (((event.type == "click") && ((!(document.elementsFromPoint(event.clientX, event.clientY).some((element) => (element.classList.contains("player"))))) && (!(document.elementsFromPoint(event.clientX, event.clientY).some((element) => (element.classList.contains("playerStatsCont"))))))) || (event.type == "keydown")) {
        for (var i = 0; i < document.getElementsByClassName("playerStatsCont").length; i++) {
          if (document.getElementsByClassName("playerStatsCont")[i].classList.contains("toggledStatsCont")) {
            hideStats((i + 1), "click");
          }
        }
      }
    }
    else if (sessionStorage.collapse == "dedication") {
      if (((event.type == "click") && ((!(document.elementsFromPoint(event.clientX, event.clientY).includes(document.getElementById("nickSchalago")))) && (!(document.elementsFromPoint(event.clientX, event.clientY).includes(document.getElementById("dedicationCont")))))) || (event.type == "keydown")) {
        if (document.getElementById("nickSchalago").onclick == hideDedication) {
          hideDedication();
        }
      }
    }
  }
}

function changeName(event) {
  if ((event.target.innerHTML).match(/Aileen/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Aileen/gsm, "Mars");
  }
  if ((event.target.innerHTML).match(/Chawgo/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Chawgo/gsm, "Sgt. Lord");
  }
  if ((event.target.innerHTML).match(/Chestnut(?!\s2\.0)/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Chestnut(?!\s2\.0)/gsm, "Charlie Day");
  }
  if ((event.target.innerHTML).match(/Chris Treutlein/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<!(((^|(\.|\?|\!)\s+)\(?)|((\.|\,|\;|\:|\?|\!)\s+|\'|\"|\()(\'|\")))Chris Treutlein/gsm, "the Honorable Dr. Mayor Treutlein, Jr.");
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<=(((^|(\.|\?|\!)\s+)\(?)|((\.|\,|\;|\:|\?|\!)\s+|\'|\"|\()(\'|\")))Chris Treutlein/gsm, "The Honorable Dr. Mayor Treutlein, Jr.");
  }
  if ((event.target.innerHTML).match(/Colin Whitesell/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Colin Whitesell/gsm, "Coin");
  }
  if ((event.target.innerHTML).match(/Devin Mullen/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Devin Mullen/gsm, "Kevin Miller");
  }
  if ((event.target.innerHTML).match(/Emma Fish/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Emma Fish/gsm, "Chestnut 2.0");
  }
  if ((event.target.innerHTML).match(/Garrett/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<!(((^|(\.|\?|\!)\s+)\(?)|((\.|\,|\;|\:|\?|\!)\s+|\'|\"|\()(\'|\")))Garrett/gsm, "the whore");
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<=(((^|(\.|\?|\!)\s+)\(?)|((\.|\,|\;|\:|\?|\!)\s+|\'|\"|\()(\'|\")))Garrett/gsm, "The whore");
  }
  if ((event.target.innerHTML).match(/Joe Franco/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Joe Franco/gsm, "Buddy");
  }
  if ((event.target.innerHTML).match(/Kyle/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Kyle/gsm, "Sexy Leader");
  }
  if ((event.target.innerHTML).match(/\bLeo\b/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/\bLeo\b/gsm, "Mr. Hands");
  }
  if ((event.target.innerHTML).match(/MacKenzie McCarthy/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/MacKenzie McCarthy/gsm, "MacKenzie Uhl");
  }
  if ((event.target.innerHTML).match(/Marc Christensen/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Marc Christensen/gsm, "Peter Griffin");
  }
  if ((event.target.innerHTML).match(/Oliver Queen/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<!(((^|(\.|\?|\!)\s+)\(?)|((\.|\,|\;|\:|\?|\!)\s+|\'|\"|\()(\'|\")))Oliver Queen/gsm, "the Arrow");
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<=(((^|(\.|\?|\!)\s+)\(?)|((\.|\,|\;|\:|\?|\!)\s+|\'|\"|\()(\'|\")))Oliver Queen/gsm, "The Arrow");
  }
  if ((event.target.innerHTML).match(/Ryan McCarthy/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Ryan McCarthy/gsm, "SheRyan");
  }
  if ((event.target.innerHTML).match(/Ryan O\'Rourke/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Ryan O\'Rourke/gsm, "ThreeRyan");
  }
  if ((event.target.innerHTML).match(/secretary/gism)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<=^.*(Marc|Christensen).*)secretary(?=.*(Marc|Christensen).*$)/gsm, "mistress");
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<=^.*(Marc|Christensen).*)Secretary(?=.*(Marc|Christensen).*$)/gsm, "Mistress");
  }
  if ((event.target.innerHTML).match(/Weston/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Weston/gsm, "Easton");
  }
}

function changeNameBack(event) {
  if ((event.target.innerHTML).match(/\bMars\b/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/\bMars\b/gsm, "Aileen");
  }
  if ((event.target.innerHTML).match(/Sgt\. Lord/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Sgt\. Lord/gsm, "Chawgo");
  }
  if ((event.target.innerHTML).match(/Charlie Day/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Charlie Day/gsm, "Chestnut");
  }
  if ((event.target.innerHTML).match(/the Honorable Dr\. Mayor Treutlein\, Jr\./gism)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/the Honorable Dr\. Mayor Treutlein\, Jr\./gism, "Chris Treutlein");
  }
  if ((event.target.innerHTML).match(/\bCoin\b/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/\bCoin\b/gsm, "Colin Whitesell");
  }
  if ((event.target.innerHTML).match(/Kevin Miller/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Kevin Miller/gsm, "Devin Mullen");
  }
  if ((event.target.innerHTML).match(/Chestnut 2\.0/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Chestnut 2\.0/gsm, "Emma Fish");
  }
  if ((event.target.innerHTML).match(/the whore/gism)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/the whore/gism, "Garrett");
  }
  if ((event.target.innerHTML).match(/Buddy/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Buddy/gsm, "Joe Franco");
  }
  if ((event.target.innerHTML).match(/Sexy Leader/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Sexy Leader/gsm, "Kyle");
  }
  if ((event.target.innerHTML).match(/Mr\. Hands/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Mr\. Hands/gsm, "Leo");
  }
  if ((event.target.innerHTML).match(/MacKenzie Uhl/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/MacKenzie Uhl/gsm, "MacKenzie McCarthy");
  }
  if ((event.target.innerHTML).match(/Peter Griffin/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Peter Griffin/gsm, "Marc Christensen");
  }
  if ((event.target.innerHTML).match(/the Arrow(?!\skey)/gism)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/the Arrow(?!\skey)/gism, "Oliver Queen");
  }
  if ((event.target.innerHTML).match(/SheRyan/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/SheRyan/gsm, "Ryan McCarthy");
  }
  if ((event.target.innerHTML).match(/ThreeRyan/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/ThreeRyan/gsm, "Ryan O'Rourke");
  }
  if ((event.target.innerHTML).match(/mistress/gism)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<=^.*(Marc|Christensen).*)mistress(?=.*(Marc|Christensen).*$)/gsm, "secretary");
    event.target.innerHTML = (event.target.innerHTML).replace(/(?<=^.*(Marc|Christensen).*)Mistress(?=.*(Marc|Christensen).*$)/gsm, "Secretary");
  }
  if ((event.target.innerHTML).match(/Easton/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/Easton/gsm, "Weston");
  }
}

function compileSound(type, frequencyArray, gainArray, duration) {
  var effect = sounds.createOscillator();
  var volume = sounds.createGain();
  effect.connect(volume);
  volume.connect(sounds.destination);
  var frequencyObject = {
    transition: frequencyArray[0],
    value: {
      start: frequencyArray[1],
      end: frequencyArray[2]
    },
    duration: frequencyArray[3]
  };
  var gainObject = {
    transition: gainArray[0],
    value: {
      start: gainArray[1],
      end: gainArray[2]
    },
    duration: gainArray[3]
  };
  startSound(effect, type, frequencyObject, volume, gainObject);
  setTimeout(endSound.bind(null, effect), (duration * 1000));
}

function startSound(effect, type, frequency, volume, gain) {
  effect.type = type;
  if (frequency.transition == "none") {
    effect.frequency.setValueAtTime(frequency.value.start, sounds.currentTime);
  }
  else {
    if (frequency.transition == "linear") {
      effect.frequency.setValueAtTime(frequency.value.start, sounds.currentTime);
      effect.frequency.linearRampToValueAtTime(frequency.value.end, (sounds.currentTime + frequency.duration));
    }
    else if (frequency.transition == "exponential") {
      effect.frequency.setValueAtTime(frequency.value.start, sounds.currentTime);
      effect.frequency.exponentialRampToValueAtTime(frequency.value.end, (sounds.currentTime + frequency.duration));
    }
  }
  if (gain.transition == "none") {
    volume.gain.setValueAtTime(gain.value.start, sounds.currentTime);
  }
  else {
    if (gain.transition == "linear") {
      volume.gain.setValueAtTime(gain.value.start, sounds.currentTime);
      volume.gain.linearRampToValueAtTime(gain.value.end, (sounds.currentTime + gain.duration));
    }
    else if (gain.transition == "exponential") {
      volume.gain.setValueAtTime(gain.value.start, sounds.currentTime);
      volume.gain.exponentialRampToValueAtTime(gain.value.end, (sounds.currentTime + gain.duration));
    }
  }
  effect.start();
}

function endSound(effect) {
  effect.stop();
}

function emphasizeConductor() {
  document.getElementById("conductorCont").style.animation = "emphasizeCont 1.5s ease 0s 1 forwards";
  setTimeout(() => (
    document.getElementById("conductorCont").style.animation = "none"
  ), 1500);
}

function enableButton() {
  document.getElementById("ok").style.transition = "opacity 0s ease 0s, transform .1s ease 0s";
  document.getElementById("ok").tabIndex = "0";
  document.getElementById("ok").ariaLabel = "Keep clicking here to move the game forward";
  document.getElementById("ok").disabled = false;
  document.getElementById("ok").focus();
  startButton();
}

function disableButton() {
  document.getElementById("ok").style.transition = "opacity 0s ease 0s, transform .1s ease 0s";
  document.getElementById("ok").tabIndex = "-1";
  document.getElementById("ok").ariaLabel = "This button is currently disabled, you need to do something first before you can move forward";
  document.getElementById("ok").disabled = true;
  document.getElementById("ok").blur();
  endButton();
}

function startButton() {
  sessionStorage.emphasizeButtonInterval = setInterval(emphasizeButton, 60000);
}

function endButton() {
  clearInterval(sessionStorage.emphasizeButtonInterval);
  sessionStorage.removeItem("emphasizeButtonInterval");
}

function emphasizeButton() {
  if (document.getElementById("ok").disabled == false) {
    document.getElementById("okShimmer").style.animation = "okShimmer 1s ease 0s 1 backwards";
    setTimeout(() => (
      document.getElementById("okShimmer").style.animation = "none"
    ), 1000);
  }
}

function resizeConductor() {
  document.getElementById("okSpacer").style.height = "calc(5.2em + " + document.getElementById("conductorTalkCont").scrollTop + "px)";
  document.getElementById("okSpacer").style.transition = "height 0s ease 0s";
}

function pillow() {
  if (sessionStorage.backup == undefined) {
    sessionStorage.backup = document.getElementById("conductorTalk").innerHTML;
    document.getElementById("conductorTalk").innerHTML = "That's weird, I just turned into a pillow. I bet you really want to \"mmm\" me now...";
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    console.log("Charlie was SOOO drunk when he said that");
  }
  document.getElementById("conductor").title = "Mmm...";
  document.getElementById("conductor").style.background = "url(\"img/pillow.png\") center / cover";
  document.getElementById("conductor").onclick = pillowUndo;
}

function pillowUndo() {
  if (sessionStorage.backup != "") {
    if (sessionStorage.backup == "Oh, you're here? I'll drink to that! What, were you expecting some other kind of \"milk and cookies\"? That's pep band for you! Now let's get drunk!") {
      document.getElementById("conductorTalk").innerHTML = "Oh, you're here? I'll drink to that!";
    }
    else {
      document.getElementById("conductorTalk").innerHTML = sessionStorage.backup;
    }
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    sessionStorage.backup = "";
  }
  document.getElementById("conductor").title = "Joe DeSena, Conductor";
  document.getElementById("conductor").style.background = "url(\"img/joeDesenaBG.png\") center / cover";
  document.getElementById("conductor").onclick = pillow;
}

function gotIt1() {
  document.getElementById("conductorTalk").innerHTML = "Great! Now why don't you check the Discord to see what's going on toknight?";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  clearInterval(sessionStorage.emphasizeConductorInterval);
  sessionStorage.removeItem("emphasizeConductorInterval");
  let time = new Date();
  document.getElementById("discordDate").datetime = time.getFullYear() + "-" + String(time.getMonth() + 1).padStart(2, "0") + "-" + String(time.getDate()).padStart(2, "0") + "T11:38:52.616" + ((time.getTimezoneOffset() == 0) ? ("Z") : (((time.getTimezoneOffset() > 0) ? ("-" + String(time.getTimezoneOffset() / 60).padStart(2, "0")) : ("+" + String(time.getTimezoneOffset() / -60).padStart(2, "0"))) + ":00"));
  document.getElementById("discordLogo").style.bottom = "2em";
  document.getElementById("discordLogo").style.transition = "bottom 1s ease 0s";
  document.getElementById("discordLogo").tabIndex = "0";
}

function openDiscord() {
  document.getElementById("discordLogo").style.boxShadow = "0 0 .5em .5em var(--discordBlue)";
  document.getElementById("discordLogo").style.transition = "bottom 1s ease 0s, box-shadow .25s ease 0s";
  document.getElementById("discordLogo").ariaLabel = "Close the Discord server";
  document.getElementById("discordLogo").onclick = closeDiscord;
  document.getElementById("discord").style.bottom = "40%";
  document.getElementById("discord").style.transform = "scale(1)";
  document.getElementById("discord").style.transition = "all .5s ease 0s";
  document.getElementById("discord").tabIndex = "0";
  if (document.getElementById("ok").onclick != gotIt2) {
    document.getElementById("discordNotification").style.transform = "scale(0)";
    document.getElementById("discordNotification").style.transition = "transform .1s ease 0s";
    enableButton();
    document.getElementById("ok").onclick = function() {
      gotIt2();
      compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
    };
  }
}

function closeDiscord() {
  document.getElementById("discord").style.bottom = "-9%";
  document.getElementById("discord").style.transform = "scale(0)";
  document.getElementById("discord").style.transition = "all .5s ease 0s";
  document.getElementById("discord").tabIndex = "-1";
  document.getElementById("discord").blur();
  document.getElementById("discordLogo").style.boxShadow = "none";
  document.getElementById("discordLogo").style.transition = "bottom 1s ease 0s, box-shadow .25s ease .25s";
  document.getElementById("discordLogo").ariaLabel = "Open the Discord server";
  document.getElementById("discordLogo").onclick = openDiscord;
}

function gotIt2() {
  document.getElementById("conductorTalk").innerHTML = "Do you want to go to the men's game or the women's game?";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  document.getElementById("discordLogo").style.bottom = "-6em";
  if (document.getElementById("discordLogo").onclick == openDiscord) {
    document.getElementById("discordLogo").style.transition = "bottom .5s ease 0s";
  }
  else if (document.getElementById("discordLogo").onclick == closeDiscord) {
    closeDiscord();
    document.getElementById("discordLogo").style.transition = "bottom .5s ease .5s, box-shadow .25s ease .25s";
  }
  document.getElementById("discordLogo").style.pointerEvents = "none";
  document.getElementById("discordLogo").tabIndex = "-1";
  document.getElementById("discordLogo").blur();
  for (var i = 0; i < document.getElementsByClassName("genderCont").length; i++) {
    if (i == 0) {
      document.getElementById("menCont").style.left = "25%";
      if (document.getElementById("discordLogo").onclick == openDiscord) {
        document.getElementById("menCont").style.transition = "left 2s ease .5s";
        setTimeout(() => (
          document.getElementById("menCont").tabIndex = "0"
        ), 500);
      }
      else if (document.getElementById("discordLogo").onclick == closeDiscord) {
        document.getElementById("menCont").style.transition = "left 2s ease 1s";
        setTimeout(() => (
          document.getElementById("menCont").tabIndex = "0"
        ), 1000);
      }
    }
    else if (i == 1) {
      document.getElementById("womenCont").style.right = "25%";
      if (document.getElementById("discordLogo").onclick == openDiscord) {
        document.getElementById("womenCont").style.transition = "right 2s ease .5s";
        setTimeout(() => (
          document.getElementById("womenCont").tabIndex = "0"
        ), 500);
      }
      else if (document.getElementById("discordLogo").onclick == closeDiscord) {
        document.getElementById("womenCont").style.transition = "right 2s ease 1s";
        setTimeout(() => (
          document.getElementById("womenCont").tabIndex = "0"
        ), 1000);
      }
    }
  }
}

function selectGender(gender) {
  sessionStorage.gender = gender;
  for (var i = 0; i < document.getElementsByClassName("genderCont").length; i++) {
    if (i == (sessionStorage.gender - 1)) {
      document.getElementsByClassName("genderCont")[i].style.transform = "scale(1.1)";
      document.getElementsByClassName("gender")[i].style.boxShadow = "0 0 .5em .5em var(--clarksonGold)";
      document.getElementsByClassName("gender")[i].style.transition = "box-shadow .25s ease 0s";
      document.getElementsByClassName("genderLabel")[i].style.boxShadow = "0 0 .5em .5em var(--clarksonGold)";
      document.getElementsByClassName("genderLabel")[i].style.transition = "box-shadow .25s ease 0s";
    }
    else {
      document.getElementsByClassName("genderCont")[i].style.transform = "scale(1)";
      document.getElementsByClassName("gender")[i].style.boxShadow = "none";
      document.getElementsByClassName("gender")[i].style.transition = "box-shadow .25s ease 0s";
      document.getElementsByClassName("genderLabel")[i].style.boxShadow = "none";
      document.getElementsByClassName("genderLabel")[i].style.transition = "box-shadow .25s ease 0s";
    }
    if (i == 0) {
      if (document.getElementById("discordLogo").onclick == openDiscord) {
        document.getElementById("menCont").style.transition = "left 2s ease .5s, transform .25s ease 0s";
      }
      else if (document.getElementById("discordLogo").onclick == closeDiscord) {
        document.getElementById("menCont").style.transition = "left 2s ease 1s, transform .25s ease 0s";
      }
    }
    else if (i == 1) {
      if (document.getElementById("discordLogo").onclick == openDiscord) {
        document.getElementById("womenCont").style.transition = "right 2s ease .5s, transform .25s ease 0s";
      }
      else if (document.getElementById("discordLogo").onclick == closeDiscord) {
        document.getElementById("womenCont").style.transition = "right 2s ease 1s, transform .25s ease 0s";
      }
    }
  }
  if (document.getElementById("ok").disabled == true) {
    enableButton();
    document.getElementById("ok").onclick = function() {
      gotIt3();
      compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
    };
  }
}

function gotIt3() {
  document.getElementById("conductorTalk").innerHTML = "Good choice! But first, we have to drive to Crappleton Arena at SLU. Can I count on you to take some people?";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  for (var i = 0; i < document.getElementsByClassName("genderCont").length; i++) {
    if (i == 0) {
      if (i == (sessionStorage.gender - 1)) {
        document.getElementById("menCont").style.bottom = "105%";
        if (document.getElementById("discordLogo").onclick == openDiscord) {
          document.getElementById("menCont").style.transition = "left 2s ease .5s, bottom 1s ease .25s";
        }
        else if (document.getElementById("discordLogo").onclick == closeDiscord) {
          document.getElementById("menCont").style.transition = "left 2s ease 1s, bottom 1s ease .25s";
        }
      }
      else {
        document.getElementById("menCont").style.transform = "scale(0)";
        if (document.getElementById("discordLogo").onclick == openDiscord) {
          document.getElementById("menCont").style.transition = "left 2s ease .5s, transform .5s ease 0s";
        }
        else if (document.getElementById("discordLogo").onclick == closeDiscord) {
          document.getElementById("menCont").style.transition = "left 2s ease 1s, transform .5s ease 0s";
        }
      }
      document.getElementById("menCont").style.pointerEvents = "none";
      document.getElementById("menCont").tabIndex = "-1";
      document.getElementById("menCont").blur();
    }
    else if (i == 1) {
      if (i == (sessionStorage.gender - 1)) {
        document.getElementById("womenCont").style.bottom = "-51%";
        if (document.getElementById("discordLogo").onclick == openDiscord) {
          document.getElementById("womenCont").style.transition = "right 2s ease .5s, bottom 1s ease .25s";
        }
        else if (document.getElementById("discordLogo").onclick == closeDiscord) {
          document.getElementById("womenCont").style.transition = "right 2s ease 1s, bottom 1s ease .25s";
        }
      }
      else {
        document.getElementById("womenCont").style.transform = "scale(0)";
        if (document.getElementById("discordLogo").onclick == openDiscord) {
          document.getElementById("womenCont").style.transition = "right 2s ease .5s, transform .5s ease 0s";
        }
        else if (document.getElementById("discordLogo").onclick == closeDiscord) {
          document.getElementById("womenCont").style.transition = "right 2s ease 1s, transform .5s ease 0s";
        }
      }
      document.getElementById("womenCont").style.pointerEvents = "none";
      document.getElementById("womenCont").tabIndex = "-1";
      document.getElementById("womenCont").blur();
    }
  }
  if (sessionStorage.gender == 1) {
    sessionStorage.goalieName = ((globalThis.players).men.slu[0].name).substring(((globalThis.players).men.slu[0].name).search(/\s/sm) + 1);
    for (var i = 0; i < document.getElementsByClassName("menPlayer").length; i++) {
      document.getElementsByClassName("menPlayer")[i].style.display = "block";
    }
    for (var i = 0; i < document.getElementsByClassName("menStatsCont").length; i++) {
      document.getElementsByClassName("menStatsCont")[i].style.display = "block";
    }
    for (var i = 0; i < document.getElementsByClassName("clarksonCage").length; i++) {
      document.getElementsByClassName("clarksonCage")[i].alt = (globalThis.players).men.clarkson[i + 1].name + "'s penalty cage";
    }
    for (var i = 0; i < document.getElementsByClassName("sluCage").length; i++) {
      document.getElementsByClassName("sluCage")[i].alt = (globalThis.players).men.slu[i + 1].name + "'s penalty cage";
    }
    document.getElementById("roast").innerHTML = "got a girl";
    document.getElementById("swallow").style.display = "inline";
    document.getElementById("verb").innerHTML = "paid";
    for (var i = 0; i < document.getElementsByClassName("maleCheer").length; i++) {
      document.getElementsByClassName("maleCheer")[i].style.display = "list-item";
    }
    for (var i = 0; i < document.getElementsByClassName("maleLine").length; i++) {
      document.getElementsByClassName("maleLine")[i].style.display = "block";
    }
    console.log("Can't wait to get all turned on watching those hot, hunky men play...");
  }
  else if (sessionStorage.gender == 2) {
    sessionStorage.goalieName = ((globalThis.players).women.slu[0].name).substring(0, ((globalThis.players).women.slu[0].name).search(/\s/sm));
    for (var i = 0; i < document.getElementsByClassName("womenPlayer").length; i++) {
      document.getElementsByClassName("womenPlayer")[i].style.display = "block";
    }
    for (var i = 0; i < document.getElementsByClassName("womenStatsCont").length; i++) {
      document.getElementsByClassName("womenStatsCont")[i].style.display = "block";
    }
    for (var i = 0; i < document.getElementsByClassName("clarksonCage").length; i++) {
      document.getElementsByClassName("clarksonCage")[i].alt = (globalThis.players).women.clarkson[i + 1].name + "'s penalty cage";
    }
    for (var i = 0; i < document.getElementsByClassName("sluCage").length; i++) {
      document.getElementsByClassName("sluCage")[i].alt = (globalThis.players).women.slu[i + 1].name + "'s penalty cage";
    }
    document.getElementById("roast").innerHTML = "wanted a boy";
    document.getElementById("verb").innerHTML = "sucked";
    for (var i = 0; i < document.getElementsByClassName("femaleCheer").length; i++) {
      document.getElementsByClassName("femaleCheer")[i].style.display = "list-item";
    }
    for (var i = 0; i < document.getElementsByClassName("femaleLine").length; i++) {
      document.getElementsByClassName("femaleLine")[i].style.display = "block";
    }
    console.log("Let's hear it for Michelle Pasiechnyk, GOALIE OF THE YEAR!!!");
  }
  for (var i = 0; i < document.getElementsByClassName("goalieName").length; i++) {
    document.getElementsByClassName("goalieName")[i].innerHTML = sessionStorage.goalieName;
  }
  pronoun();
  document.getElementById("knightmobile").style.left = "13%";
  document.getElementById("knightmobile").style.transition = "left 2s ease 1.25s";
  setTimeout(() => (
    document.getElementById("knightmobile").tabIndex = "0"
  ), 1250);
  setTimeout(enableButton, 3250);
  document.getElementById("ok").onclick = function() {
    gotIt4();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
}

function pronoun() {
  if (sessionStorage.gender == 1) {
    for (var i = 0; i < document.getElementsByClassName("pronoun").length; i++) {
      if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/\bthey\b/gism)) {
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bthey\b/gsm, "he");
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bThey\b/gsm, "He");
        if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/(?<=\bhe\b)\'re/gism)) {
          document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/(?<=\bhe\b)\'re/gism, "'s");
        }
      }
      else if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/\bthem\b/gism)) {
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bthem\b/gsm, "him");
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bThem\b/gsm, "Him");
      }
      else if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/\btheir\b|\btheirs\b/gism)) {
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\btheir\b|\btheirs\b/gsm, "his");
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bTheir\b|\bTheirs\b/gsm, "His");
      }
      else if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/\bthemself\b|\btheirself\b/gism)) {
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bthemself\b|\btheirself\b/gsm, "himself");
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bThemself\b|\bTheirself\b/gsm, "Himself");
      }
    }
  }
  else if (sessionStorage.gender == 2) {
    for (var i = 0; i < document.getElementsByClassName("pronoun").length; i++) {
      if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/\bthey\b/gism)) {
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bthey\b/gsm, "she");
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bThey\b/gsm, "She");
        if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/(?<=\bshe\b)\'re/gism)) {
          document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/(?<=\bshe\b)\'re/gism, "'s");
        }
      }
      else if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/\bthem\b|\btheir\b/gism)) {
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bthem\b|\btheir\b/gsm, "her");
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bThem\b|\bTheir\b/gsm, "Her");
      }
      else if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/\btheirs\b/gism)) {
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\btheirs\b/gsm, "hers");
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bTheirs\b/gsm, "Hers");
      }
      else if ((document.getElementsByClassName("pronoun")[i].innerHTML).match(/\bthemself\b|\btheirself\b/gism)) {
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bthemself\b|\btheirself\b/gsm, "herself");
        document.getElementsByClassName("pronoun")[i].innerHTML = (document.getElementsByClassName("pronoun")[i].innerHTML).replace(/\bThemself\b|\bTheirself\b/gsm, "Herself");
      }
    }
  }
}

function gotIt4() {
  document.getElementById("conductorTalk").innerHTML = "Thanks for your help! Just use the arrow keys on your computer (<span id=\"arrowKeys\"><kbd class=\"arrowKeyCont\" id=\"rightArrowKeyCont\"><span class=\"arrowKey\" id=\"rightArrowKey\"></span></kbd>, <kbd class=\"arrowKeyCont\" id=\"upArrowKeyCont\"><span class=\"arrowKey\" id=\"upArrowKey\"></span></kbd></span>) to make the KnightMobile go in the direction you want it to.";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  document.getElementById("map").style.visibility = "visible";
  document.getElementById("map").style.opacity = "100%";
  document.getElementById("map").style.transition = "all 1s ease 0s";
  document.getElementById("map").tabIndex = "0";
  document.getElementById("knightmobile").style.bottom = "35%";
  document.getElementById("knightmobile").style.transform = "scale(1)";
  document.getElementById("knightmobile").style.transition = "all .5s ease .5s";
  sessionStorage.arrowBlinkInterval = setInterval(arrowBlink, 60000);
  setTimeout(() => (
    document.onkeydown = startDrive
  ), 1000);
  console.log("This car can fit 6 people plus a tree, don't ask how we know");
}

function arrowBlink() {
  if (document.getElementById("knightmobile").style.left == "13%") {
    rightArrowBlink();
  }
  else if ((document.getElementById("knightmobile").style.left == "83%") && (document.getElementById("knightmobile").style.bottom == "35%")) {
    upArrowBlink();
  }
}

function rightArrowBlink() {
  document.getElementById("rightArrowIcon").style.animation = "arrowBlink 2s ease 0s 2 forwards";
  setTimeout(() => (
    document.getElementById("rightArrowIcon").style.animation = "none"
  ), 4000);
}

function upArrowBlink() {
  document.getElementById("upArrowIcon").style.animation = "arrowBlink 2s ease 0s 2 forwards";
  setTimeout(() => (
    document.getElementById("upArrowIcon").style.animation = "none"
  ), 4000);
}

function startDrive(event) {
  if (event.key == "ArrowRight") {
    if (document.getElementById("knightmobile").style.left == "13%") {
      driveForward();
    }
    else if (document.getElementById("knightmobile").style.left == "83%") {
      if (document.getElementById("knightmobile").style.bottom == "35%") {
        globalThis.driveForwardCurrent = Date.now();
        if ((globalThis.driveForwardCurrent - globalThis.driveForwardStart) > 5000) {
          clearInterval(sessionStorage.arrowBlinkInterval);
          sessionStorage.removeItem("arrowBlinkInterval");
          arrowBlink();
          sessionStorage.arrowBlinkInterval = setInterval(arrowBlink, 60000);
        }
      }
    }
  }
  else if (event.key == "ArrowUp") {
    if (document.getElementById("knightmobile").style.bottom == "35%") {
      driveUp();
    }
    else if (document.getElementById("knightmobile").style.bottom == "81%") {
      if (document.getElementById("knightmobile").style.left == "13%") {
        globalThis.driveUpCurrent = Date.now();
        if ((globalThis.driveUpCurrent - globalThis.driveUpStart) > 2500) {
          clearInterval(sessionStorage.arrowBlinkInterval);
          sessionStorage.removeItem("arrowBlinkInterval");
          arrowBlink();
          sessionStorage.arrowBlinkInterval = setInterval(arrowBlink, 60000);
        }
      }
    }
  }
}

function driveForward() {
  globalThis.driveForwardStart = Date.now();
  document.getElementById("knightmobile").style.left = "83%";
  document.getElementById("knightmobile").style.transition = "left 0s ease 5s, bottom 0s ease 2.5s";
  if (document.getElementById("knightmobile").style.animation == "") {
    document.getElementById("knightmobile").style.animation = "driveForward 5s ease 0s 1 forwards";
  }
  else {
    document.getElementById("knightmobile").style.animation = "driveForward 5s ease 0s 1 forwards, driveUp 2.5s ease 0s 1 forwards";
  }
  clearInterval(sessionStorage.arrowBlinkInterval);
  sessionStorage.removeItem("arrowBlinkInterval");
  for (var i = 0; i < document.getElementsByClassName("arrowIcon").length; i++) {
    if ((document.getElementsByClassName("arrowIcon")[i].style.animation != "") && (document.getElementsByClassName("arrowIcon")[i].style.animation != "none")) {
      document.getElementsByClassName("arrowIcon")[i].style.animation = "none";
    }
    if (i == 1) {
      document.getElementById("upArrowIcon").style.left = "85%";
      document.getElementById("upArrowIcon").style.transition = "left 0s ease 0s";
    }
  }
  if (document.getElementById("knightmobile").style.bottom == "35%") {
    sessionStorage.arrowBlinkInterval = setInterval(arrowBlink, 60000);
  }
  else if (document.getElementById("knightmobile").style.bottom == "81%") {
    setTimeout(endDrive, 5000);
  }
  compileSound("sawtooth", ["linear", 5, 15, 5], ["linear", .25, .75, 5], 5);
}

function driveUp() {
  globalThis.driveUpStart = Date.now();
  document.getElementById("knightmobile").style.bottom = "81%";
  document.getElementById("knightmobile").style.transition = "left 0s ease 5s, bottom 0s ease 2.5s";
  if (document.getElementById("knightmobile").style.animation == "") {
    document.getElementById("knightmobile").style.animation = "driveUp 2.5s ease 0s 1 forwards";
  }
  else {
    document.getElementById("knightmobile").style.animation = "driveForward 5s ease 0s 1 forwards, driveUp 2.5s ease 0s 1 forwards";
  }
  clearInterval(sessionStorage.arrowBlinkInterval);
  sessionStorage.removeItem("arrowBlinkInterval");
  for (var i = 0; i < document.getElementsByClassName("arrowIcon").length; i++) {
    if ((document.getElementsByClassName("arrowIcon")[i].style.animation != "") && (document.getElementsByClassName("arrowIcon")[i].style.animation != "none")) {
      document.getElementsByClassName("arrowIcon")[i].style.animation = "none";
    }
    if (i == 0) {
      document.getElementById("rightArrowIcon").style.bottom = "70%";
      document.getElementById("rightArrowIcon").style.transition = "bottom 0s ease 0s";
    }
  }
  if (document.getElementById("knightmobile").style.left == "13%") {
    sessionStorage.arrowBlinkInterval = setInterval(arrowBlink, 60000);
  }
  else if (document.getElementById("knightmobile").style.left == "83%") {
    setTimeout(endDrive, (((globalThis.driveUpStart - globalThis.driveForwardStart) < 2500) ? (5000 - ((globalThis.driveUpStart - globalThis.driveForwardStart))) : (2500)));
  }
  compileSound("sawtooth", ["linear", 15, 5, 2.5], ["linear", .75, .25, 2.5], 2.5);
}

function endDrive() {
  document.getElementById("knightmobile").style.animation = "none";
  document.onkeydown = collapse;
  enableButton();
  document.getElementById("ok").onclick = function() {
    gotIt5();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
}

function gotIt5() {
  document.getElementById("conductorTalk").innerHTML = "Welcome to SLU! Ugly, isn't it? I hope you're ready to kick some SLUzer ass!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  document.getElementById("knightmobile").style.left = "100%";
  document.getElementById("knightmobile").style.transition = "left 1s ease 0s";
  document.getElementById("knightmobile").tabIndex = "-1";
  document.getElementById("knightmobile").blur();
  document.getElementById("map").style.transform = "scale(0)";
  document.getElementById("map").style.transition = "transform 1s ease .5s";
  document.getElementById("map").tabIndex = "-1";
  document.getElementById("map").blur();
  document.getElementById("crappleton").style.transform = "scale(1)";
  document.getElementById("crappleton").style.transition = "transform 1s ease .5s";
  setTimeout(() => (
    document.getElementById("crappleton").tabIndex = "0"
  ), 500);
  setTimeout(enableButton, 1500);
  document.getElementById("ok").onclick = function(event) {
    gotIt6(event);
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
}

function gotIt6(event) {
  document.getElementById("conductorTalk").innerHTML = "Let the game begin! Just watch what's going on and select the right songs to do at each point. If you mess up six times, it's game over! And don't forget to click on the cheer list to the left to get points, they'll come in handy later on. Good luck!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  document.getElementById("crappleton").style.bottom = "100%";
  document.getElementById("crappleton").style.transition = "bottom 1s ease 0s";
  document.getElementById("crappleton").tabIndex = "-1";
  document.getElementById("crappleton").blur();
  if (sessionStorage.gender == 1) {
    for (var i = 0; i < document.getElementsByClassName("menGoalie").length; i++) {
      document.getElementsByClassName("menGoalie")[i].style.visibility = "visible";
      document.getElementsByClassName("menGoalie")[i].style.opacity = "100%";
      document.getElementsByClassName("menGoalie")[i].style.transition = "all 0s ease 1s";
      const activate = (x) => {
        setTimeout(() => (
          document.getElementsByClassName("menGoalie")[x].style.pointerEvents = "auto"
        ), 3000);
        setTimeout(() => (
          document.getElementsByClassName("menGoalie")[x].tabIndex = "0"
        ), 3000);
      }
      activate(i);
    }
  }
  else if (sessionStorage.gender == 2) {
    for (var i = 0; i < document.getElementsByClassName("womenGoalie").length; i++) {
      document.getElementsByClassName("womenGoalie")[i].style.visibility = "visible";
      document.getElementsByClassName("womenGoalie")[i].style.opacity = "100%";
      document.getElementsByClassName("womenGoalie")[i].style.transition = "all 0s ease 1s";
      const activate = (x) => {
        setTimeout(() => (
          document.getElementsByClassName("womenGoalie")[x].style.pointerEvents = "auto"
        ), 3000);
        setTimeout(() => (
          document.getElementsByClassName("womenGoalie")[x].tabIndex = "0"
        ), 3000);
      }
      activate(i);
    }
  }
  sessionStorage.clarksonTimeout = 0;
  sessionStorage.sluTimeout = 0;
  document.getElementById("rink").style.left = "25%";
  document.getElementById("rink").style.right = "5%";
  document.getElementById("rink").style.transform = "scale(1)";
  document.getElementById("rink").style.transition = "all 0s ease 3s";
  document.getElementById("rink").style.animation = "expand 2s ease 1s 1 forwards";
  setTimeout(() => (
    document.getElementById("rink").style.animation = "none"
  ), 3000);
  setTimeout(() => (
    document.getElementById("rink").tabIndex = "0"
  ), 1000);
  sessionStorage.period = 1;
  document.getElementById("scoreboardPeriod").innerHTML = sessionStorage.period;
  sessionStorage.clarksonScore = 0;
  document.getElementById("scoreboardClarksonScore").innerHTML = sessionStorage.clarksonScore;
  sessionStorage.sluScore = 0;
  document.getElementById("scoreboardSluScore").innerHTML = sessionStorage.sluScore;
  sessionStorage.points = 0;
  sessionStorage.oldHighScore = localStorage.highScore;
  document.getElementById("cheerScore").innerHTML = sessionStorage.points;
  remember(event);
  sessionStorage.tijuana = 10;
  document.getElementById("goals").innerHTML = sessionStorage.tijuana;
  let day = new Date();
  document.getElementById("day").innerHTML = calendar.weekdays[day.getDay()];
  if (document.getElementById("cheers").scrollHeight > document.getElementById("cheers").offsetHeight) {
    document.getElementById("backToTop").style.display = "flex";
    document.getElementById("backToTop").style.flexDirection = "row";
    document.getElementById("backToTop").style.justifyContent = "center";
    document.getElementById("backToTop").style.alignItems = "center";
    setTimeout(() => (
      document.getElementById("cheers").tabIndex = "0"
    ), 2000);
    if (document.getElementById("cheers").scrollTop > 0) {
      document.getElementById("cheers").scrollTop = 0;
    }
  }
  for (var i = 0; i < document.getElementsByClassName("gameActivity").length; i++) {
    document.getElementsByClassName("gameActivity")[i].style.transform = "scale(1)";
    document.getElementsByClassName("gameActivity")[i].style.transition = "transform 0s ease 2s";
    const activate = (x) => {
      setTimeout(() => (
        document.getElementsByClassName("gameActivity")[x].tabIndex = "0"
      ), 2000);
    }
    activate(i);
  }
  document.getElementById("gameActivities").style.visibility = "visible";
  document.getElementById("gameActivities").style.left = "5%";
  document.getElementById("gameActivities").style.right = "80%";
  document.getElementById("gameActivities").style.opacity = "100%";
  document.getElementById("gameActivities").style.transition = "visibility 0s ease 2s, left 1s ease 2s, right 1s ease 2s, opacity 0s ease 2s";
  document.getElementById("raffle").style.display = "block";
  for (var i = 0; i < document.getElementsByClassName("lifeCont").length; i++) {
    var transitionDelay = ((i / 2) + 3);
    document.getElementsByClassName("lifeCont")[i].style.top = "0";
    document.getElementsByClassName("lifeCont")[i].style.transition = "top 1s ease " + transitionDelay + "s";
    const activate = (x, y) => {
      setTimeout(() => (
        document.getElementsByClassName("lifeCont")[x].style.pointerEvents = "auto"
      ), y);
      setTimeout(() => (
        document.getElementsByClassName("lifeCont")[x].tabIndex = "0"
      ), y);
    }
    activate(i, (transitionDelay * 1000));
  }
  document.getElementById("lives").style.visibility = "visible";
  document.getElementById("lives").style.opacity = "100%";
  document.getElementById("lives").style.transition = "all 0s ease 3s";
  sessionStorage.lives = 6;
  sessionStorage.redo = 0;
  sessionStorage.collapse = "stats";
  sessionStorage.selection = 1;
  setTimeout(enableButton, 6500);
  document.getElementById("ok").onclick = function() {
    gotIt7();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  console.log("You should click on the Ryan life, it'll be dope as fuck");
}

function speedrun(stage) {
  sessionStorage.stage = stage;
  if (sessionStorage.stage <= 1) {
    for (var i = 0; i < document.getElementsByClassName("lifeCont").length; i++) {
      if (i != 5) {
        if ((i == 1) && (sessionStorage.stage == 1)) {
          document.getElementById("freshmanRepresentativeLifeCont").onclick = speedrun.bind(null, 2);
        }
        else {
          document.getElementsByClassName("lifeCont")[i].onclick = speedrun.bind(null, 0);
        }
        if (i == 1) {
          if (!(document.getElementById("publishedPaper").hasAttribute("href"))) {
            if (sessionStorage.lives < 2) {
              document.getElementById("publishedPaper").href = "https://www.nytimes.com/1986/09/05/nyregion/rape-and-murder-scar-innocence-of-potsdam.html";
            }
            else if (sessionStorage.lives >= 2) {
              document.getElementById("publishedPaper").href = "https://www.mdpi.com/1424-8220/22/9/3163/htm";
            }
          }
        }
      }
    }
  }
  else if ((sessionStorage.stage > 1) && (sessionStorage.stage < 6)) {
    if (sessionStorage.stage == 2) {
      document.getElementById("freshmanRepresentativeLifeCont").onclick = speedrun.bind(null, 0);
      document.getElementById("businessManagerLifeCont").onclick = speedrun.bind(null, 3);
    }
    else if (sessionStorage.stage == 3) {
      document.getElementById("businessManagerLifeCont").onclick = speedrun.bind(null, 0);
      document.getElementById("vicePresidentLifeCont").onclick = speedrun.bind(null, 4);
    }
    else if (sessionStorage.stage == 4) {
      document.getElementById("vicePresidentLifeCont").onclick = speedrun.bind(null, 0);
      document.getElementById("historianLifeCont").onclick = speedrun.bind(null, 5);
    }
    else if (sessionStorage.stage == 5) {
      document.getElementById("historianLifeCont").onclick = speedrun.bind(null, 0);
      document.getElementById("socialMediaChairLifeCont").onclick = speedrun.bind(null, 6);
      document.getElementById("publishedPaper").removeAttribute("href");
    }
  }
  else if (sessionStorage.stage == 6) {
    for (var i = 0; i < document.getElementsByClassName("lifeCont").length; i++) {
      document.getElementsByClassName("lifeCont")[i].style.pointerEvents = "none";
    }
    for (var i = 0; i < document.getElementsByClassName("playerStatsCont").length; i++) {
      if (document.getElementsByClassName("playerStatsCont")[i].classList.contains("toggledStatsCont")) {
        hideStats((i + 1), "click");
      }
    }
    for (var i = 0; i < document.getElementsByClassName("disappearInt").length; i++) {
      if (document.getElementsByClassName("disappearInt")[i].style.visibility == "visible") {
        document.getElementsByClassName("disappearInt")[i].style.visibility = "hidden";
        document.getElementsByClassName("disappearInt")[i].style.opacity = "0%";
        document.getElementsByClassName("disappearInt")[i].style.transition = "all .25s ease 0s";
        if (document.getElementsByClassName("disappearInt")[i].tabIndex == "0") {
          document.getElementsByClassName("disappearInt")[i].tabIndex = "-1";
          document.getElementsByClassName("disappearInt")[i].blur();
        }
      }
    }
    gotIt24();
    console.log("Skipping 90% of the game I see, LAME!");
  }
}

function openSelection() {
  disableButton();
  document.getElementById("conductorCont").tabIndex = "-1";
  document.getElementById("conductorCont").blur();
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    document.getElementById("conductorTalkCont").tabIndex = "-1";
    document.getElementById("conductorTalkCont").blur();
  }
  document.getElementById("viewAccountToggle").style.pointerEvents = "none";
  document.getElementById("viewAccountToggle").tabIndex = "-1";
  document.getElementById("viewAccountToggle").blur();
  var options = [];
  if (sessionStorage.selection == 1) {
    options.push(sessionStorage.songPrime);
    sessionStorage.correct = Math.ceil(Math.random() * document.getElementsByClassName("choice").length);
    for (var i = 0; i < document.getElementsByClassName("choice").length; i++) {
      if ((i + 1) == sessionStorage.correct) {
        document.getElementsByClassName("choice")[i].innerHTML = songs[sessionStorage.songPrime].title;
      }
      else {
        eval("sessionStorage.song" + (i + 1) + " = Math.floor(Math.random() * songs.length)");
        while (options.includes(eval("sessionStorage.song" + (i + 1)))) {
          eval("sessionStorage.song" + (i + 1) + "++");
          if (eval("sessionStorage.song" + (i + 1)) == songs.length) {
            eval("sessionStorage.song" + (i + 1) + " = 0");
          }
        }
        options.push(eval("sessionStorage.song" + (i + 1)));
        document.getElementsByClassName("choice")[i].innerHTML = songs[eval("sessionStorage.song" + (i + 1))].title;
      }
    }
    sessionStorage.attempts = 0;
  }
  else if (sessionStorage.selection == 2) {
    sessionStorage.foodPrime = 5;
    options.push(sessionStorage.foodPrime);
    sessionStorage.correct = Math.ceil(Math.random() * document.getElementsByClassName("choice").length);
    for (var i = 0; i < document.getElementsByClassName("choice").length; i++) {
      if ((i + 1) == sessionStorage.correct) {
        document.getElementsByClassName("choice")[i].innerHTML = foods[sessionStorage.foodPrime].item;
      }
      else {
        eval("sessionStorage.food" + (i + 1) + " = Math.floor(Math.random() * foods.length)");
        while (options.includes(eval("sessionStorage.food" + (i + 1)))) {
          eval("sessionStorage.food" + (i + 1) + "++");
          if (eval("sessionStorage.food" + (i + 1)) == foods.length) {
            eval("sessionStorage.food" + (i + 1) + " = 0");
          }
        }
        options.push(eval("sessionStorage.food" + (i + 1)));
        document.getElementsByClassName("choice")[i].innerHTML = foods[eval("sessionStorage.food" + (i + 1))].item;
      }
    }
  }
  for (var i = 0; i < document.getElementsByClassName("choice").length; i++) {
    document.getElementsByClassName("choice")[i].tabIndex = "0";
  }
  if (sessionStorage.answer != undefined) {
    for (var i = 0; i < document.getElementsByClassName("choice").length; i++) {
      document.getElementsByClassName("choice")[i].style.visibility = "visible";
      document.getElementsByClassName("choice")[i].style.opacity = "100%";
      document.getElementsByClassName("choice")[i].style.transition = "all 0s ease 0s";
      document.getElementsByClassName("choice")[i].style.pointerEvents = "auto";
      if ((i + 1) == sessionStorage.answer) {
        document.getElementsByClassName("choice")[i].style.boxShadow = ".25em .25em 1em 0 var(--gray)";
        document.getElementsByClassName("choice")[i].style.transform = "scale(1)";
        document.getElementsByClassName("choice")[i].style.animation = "none";
      }
    }
    document.getElementById("choose").style.visibility = "visible";
    document.getElementById("choose").style.opacity = "100%";
    document.getElementById("choose").style.transition = "visibility 0s ease 0s, opacity 0s ease 0s, transform .1s ease 0s";
  }
  document.getElementById("choicesCont").style.visibility = "visible";
  document.getElementById("choicesCont").style.opacity = "100%";
  document.getElementById("choicesCont").style.transition = "all 0s ease 0s";
  document.getElementById("choicesContCont").style.visibility = "visible";
  document.getElementById("choicesContCont").style.opacity = "100%";
  document.getElementById("choicesContCont").style.transition = "all 0s ease 0s";
  document.getElementById("choicesContCont").tabIndex = "0";
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.opacity = "100%";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
  document.getElementById("cover").tabIndex = "0";
}

function selectAnswer(answer, event) {
  sessionStorage.answer = answer;
  if (document.getElementById("choose").disabled == true) {
    document.getElementById("choose").style.transition = "opacity 0s ease 0s, transform .1s ease 0s";
    document.getElementById("choose").tabIndex = "0";
    document.getElementById("choose").disabled = false;
  }
  for (var i = 0; i < document.getElementsByClassName("choice").length; i++) {
    if (sessionStorage.selection == 1) {
      if ((sessionStorage.answer == (i + 1)) && (eval("sessionStorage.song" + (i + 1)) == 69)) {
        sessionStorage.override = sessionStorage.answer;
      }
    }
    if ((i + 1) == sessionStorage.answer) {
      document.getElementsByClassName("choice")[i].style.boxShadow = "0 0 .5em .25em var(--clarksonGold)";
      document.getElementsByClassName("choice")[i].style.transform = "scale(1.1)";
      document.getElementsByClassName("choice")[i].style.transition = "all .25s ease 0s";
    }
    else {
      document.getElementsByClassName("choice")[i].style.boxShadow = ".25em .25em 1em 0 var(--gray)";
      document.getElementsByClassName("choice")[i].style.transform = "scale(1)";
      document.getElementsByClassName("choice")[i].style.transition = "all .25s ease 0s";
    }
  }
  if (sessionStorage.selection == 1) {
    const compress = new function() {
      this.setValue = function(x) {
        this.value = x;
      }
      this.getValue = function() {
        if ((this.value).match(/Tijuana|Gangbang Song/sm)) {
          if ((this.value).match(/Gangbang Song/sm)) {
            this.value = (this.value).replace(/Gangbang Song/sm, "Tijuana");
          }
          if ((this.value).match(/<br>(with lyrics!)/sm)) {
            this.value = (this.value).replace(/<br>(with lyrics!)/sm, "");
          }
        }
        var camelCase = ((((((((this.value).replace(/\<\/*(b|strong|i|em|u|s|br)\>/gism, "")).replace(/\.|\,|\'|\"|\`|\~|\-|\_|\+|\*|\^|\%|\=|\>|\<|\&|\#|\$|\@|\;|\:|\?|\!|\/|\\|\||\(|\)|\[|\]|\{|\}|\s+/gsm, " ")).toLowerCase()).split(" ")).map((word) => ((word.charAt(0)).toUpperCase() + word.substring(1)))).join("")).charAt(0)).toLowerCase() + (((((((this.value).replace(/\<\/*(b|strong|i|em|u|s|br)\>/gism, "")).replace(/\.|\,|\'|\"|\`|\~|\-|\_|\+|\*|\^|\%|\=|\>|\<|\&|\#|\$|\@|\;|\:|\?|\!|\/|\\|\||\(|\)|\[|\]|\{|\}|\s+/gsm, " ")).toLowerCase()).split(" ")).map((word) => ((word.charAt(0)).toUpperCase() + word.substring(1)))).join("")).substring(1);
        return camelCase;
      }
    }
    compress.setValue(document.getElementById("choice" + sessionStorage.answer).innerHTML);
    document.getElementById("choose").value = compress.getValue();
    sessionStorage.attempts++;
    if (localStorage.totalAttempts == "N/A") {
      localStorage.totalAttempts = 1;
    }
    else {
      localStorage.totalAttempts++;
    }
    remember(event);
  }
}

function chooseAnswer(event) {
  event.preventDefault();
  for (var i = 0; i < document.getElementsByClassName("choice").length; i++) {
    if ((i + 1) != sessionStorage.answer) {
      document.getElementsByClassName("choice")[i].style.visibility = "hidden";
      document.getElementsByClassName("choice")[i].style.opacity = "0%";
      document.getElementsByClassName("choice")[i].style.transition = "all 1s ease 0s";
      document.getElementsByClassName("choice")[i].style.pointerEvents = "none";
      document.getElementsByClassName("choice")[i].tabIndex = "-1";
      document.getElementsByClassName("choice")[i].blur();
    }
  }
  document.getElementById("choose").style.visibility = "hidden";
  document.getElementById("choose").style.opacity = "0%";
  document.getElementById("choose").style.transition = "visibility 1s ease 0s, opacity 1s ease 0s, transform .1s ease 0s";
  document.getElementById("choose").tabIndex = "-1";
  document.getElementById("choose").disabled = true;
  document.getElementById("choose").blur();
  if (sessionStorage.selection == 1) {
    if (sessionStorage.override != undefined) {
      sessionStorage.correct = sessionStorage.answer;
      sessionStorage.removeItem("override");
    }
    if (sessionStorage.answer == sessionStorage.correct) {
      sessionStorage.accurate = true;
      document.getElementById("answer").innerHTML = "CORRECT!";
      document.getElementById("answer").style.color = "var(--clarksonGreen)";
      setTimeout(closeSelection.bind(null, event), 3250);
      if (localStorage.correctGuesses == "N/A") {
        localStorage.correctGuesses = 1;
      }
      else {
        localStorage.correctGuesses++;
      }
      setTimeout(compileSound.bind(null, "triangle", ["exponential", 540, 590, .25], ["exponential", .75, 1, .25], .25), 1500);
    }
    else {
      sessionStorage.accurate = false;
      document.getElementById("answer").innerHTML = "INCORRECT!";
      document.getElementById("answer").style.color = "var(--sluRed)";
      setTimeout(correctAnswer.bind(null, event), 3250);
      if (localStorage.correctGuesses == "N/A") {
        localStorage.correctGuesses = 0;
      }
      setTimeout(compileSound.bind(null, "sawtooth", ["exponential", 165, 115, .25], ["none", 1, null, 0], .25), 1500);
      console.error("F");
    }
    document.getElementById("answer").style.visibility = "visible";
    document.getElementById("answer").style.opacity = "100%";
    document.getElementById("answer").style.transition = "all 0s ease 1.5s";
    document.getElementById("answerCont").style.visibility = "visible";
    document.getElementById("answerCont").style.opacity = "100%";
    document.getElementById("answerCont").style.transition = "all .25s ease 1.5s";
    document.getElementById("choice" + sessionStorage.answer).style.animation = "fadeOut 1s ease 1.5s 1 forwards";
    document.getElementById("choice" + sessionStorage.answer).style.pointerEvents = "none";
    document.getElementById("choice" + sessionStorage.answer).tabIndex = "-1";
    document.getElementById("choice" + sessionStorage.answer).blur();
    document.getElementById("choicesCont").style.visibility = "hidden";
    document.getElementById("choicesCont").style.opacity = "0%";
    document.getElementById("choicesCont").style.transition = "all 0s ease 2.5s";
    answers.push(document.getElementById("choose").value);
    localStorage.answers = JSON.stringify(answers);
    var occurrences = [];
    for (var i = 0; i < answers.length; i++) {
      occurrences.push((answers.filter((song) => (song == answers[i]))).length);
    }
    localStorage.commonAnswer = answers[occurrences.indexOf(Math.max.apply(Math, occurrences))];
    document.getElementById("choose").value = "";
    const round = new function() {
      this.setValue = function(x) {
        this.value = x;
      }
      this.getValue = function() {
        if (String(Math.floor(this.value)).match(/10|20|25|30|40|50|60|70|75|80|90/sm)) {
          var benchmark = Math.floor(this.value);
        }
        else if (String(Math.ceil(this.value)).match(/10|20|25|30|40|50|60|70|75|80|90/sm)) {
          var benchmark = Math.ceil(this.value);
        }
        else {
          var benchmark = this.value;
        }
        var decimals = (Math.round(benchmark * 100) / 100);
        return decimals;
      }
    }
    localStorage.totalGuesses++;
    localStorage.correctGuessRate = ((localStorage.correctGuesses / localStorage.totalGuesses) * 100);
    round.setValue(localStorage.correctGuessRate);
    localStorage.correctGuessRate = round.getValue() + "%";
    localStorage.attemptsPerSelection = (localStorage.totalAttempts / localStorage.totalGuesses);
    round.setValue(localStorage.attemptsPerSelection);
    localStorage.attemptsPerSelection = round.getValue();
    if ((sessionStorage.accurate == String(true)) && (sessionStorage.attempts == 1)) {
      if (localStorage.guessedOnFirstAttempt == "N/A") {
        localStorage.guessedOnFirstAttempt = 100;
      }
      else {
        localStorage.guessedOnFirstAttempt = (((+(((localStorage.guessedOnFirstAttempt).replace(/\%/sm, "") / 100) * (localStorage.totalGuesses - 1)) + 1) / localStorage.totalGuesses) * 100);
      }
    }
    else {
      if (localStorage.guessedOnFirstAttempt == "N/A") {
        localStorage.guessedOnFirstAttempt = 0;
      }
      else {
        localStorage.guessedOnFirstAttempt = (((((localStorage.guessedOnFirstAttempt).replace(/\%/sm, "") / 100) * (localStorage.totalGuesses - 1)) / localStorage.totalGuesses) * 100);
      }
    }
    round.setValue(localStorage.guessedOnFirstAttempt);
    localStorage.guessedOnFirstAttempt = round.getValue() + "%";
    if ((localStorage.correctGuessRate).replace(/\%/sm, "") == 0) {
      localStorage.proficiency = "Ignoramus";
    }
    else if (((localStorage.correctGuessRate).replace(/\%/sm, "") > 0) && ((localStorage.correctGuessRate).replace(/\%/sm, "") < 40)) {
      localStorage.proficiency = "Moron";
    }
    else if (((localStorage.correctGuessRate).replace(/\%/sm, "") >= 40) && ((localStorage.correctGuessRate).replace(/\%/sm, "") < 70)) {
      localStorage.proficiency = "Amateur";
    }
    else if (((localStorage.correctGuessRate).replace(/\%/sm, "") >= 70) && ((localStorage.correctGuessRate).replace(/\%/sm, "") < 90)) {
      localStorage.proficiency = "Expert";
    }
    else if ((localStorage.correctGuessRate).replace(/\%/sm, "") == 100) {
      localStorage.proficiency = "GOAT";
    }
    remember(event);
  }
  else if (sessionStorage.selection == 2) {
    document.getElementById("choicesCont").style.visibility = "hidden";
    document.getElementById("choicesCont").style.opacity = "0%";
    document.getElementById("choicesCont").style.transition = "all .25s ease 1.5s";
    setTimeout(closeSelection.bind(null, event), 1500);
  }
}

function correctAnswer(event) {
  document.getElementById("answer").style.visibility = "hidden";
  document.getElementById("answer").style.opacity = "0%";
  document.getElementById("answer").style.transition = "all .25s ease 0s";
  document.getElementById("correctAnswerPrompt").style.visibility = "visible";
  document.getElementById("correctAnswerPrompt").style.opacity = "100%";
  document.getElementById("correctAnswerPrompt").style.transition = "all .25s ease .25s";
  document.getElementById("correctAnswer").innerHTML = songs[sessionStorage.songPrime].title;
  document.getElementById("correctAnswer").style.visibility = "visible";
  document.getElementById("correctAnswer").style.opacity = "100%";
  document.getElementById("correctAnswer").style.transition = "all .25s ease 1s";
  document.getElementById("correctAnswerCont").style.visibility = "visible";
  document.getElementById("correctAnswerCont").style.opacity = "100%";
  document.getElementById("correctAnswerCont").style.transition = "all 0s ease .25s";
  setTimeout(closeSelection.bind(null, event), 2250);
}

function closeSelection(event) {
  if (sessionStorage.selection == 1) {
    document.getElementById("answerCont").style.visibility = "hidden";
    document.getElementById("answerCont").style.opacity = "0%";
    document.getElementById("answerCont").style.transition = "all .25s ease 0s";
    if (sessionStorage.accurate == String(true)) {
      document.getElementById("answer").style.visibility = "hidden";
      document.getElementById("answer").style.opacity = "0%";
      document.getElementById("answer").style.transition = "all 0s ease .25s";
      if ((sessionStorage.period == "OT") && (((sessionStorage.goal == 1) && (sessionStorage.clarksonScore == 1)) || ((sessionStorage.goal == 2) && (sessionStorage.sluScore == 1)))) {
        if ((sessionStorage.goal == 1) && (sessionStorage.clarksonScore == 1)) {
          setTimeout(win, 750);
        }
        else if ((sessionStorage.goal == 2) && (sessionStorage.sluScore == 1)) {
          setTimeout(lose, 750);
        }
      }
      else if ((sessionStorage.goal == 1) && (sessionStorage.clarksonScore == 10)) {
        document.getElementById("troyLassialTalk").innerHTML = "A public hockey game is no place to sing those disgusting, vulgar lyrics! There are children in attendance! You're disgracing the Clarkson name! That's it, I'm taking one of your lives away and ejecting you from Appleton Arena!";
        setTimeout(troyLassialEntrance, 250);
      }
      else {
        setTimeout(enableButton, 500);
      }
    }
    else {
      document.getElementById("correctAnswerCont").style.visibility = "hidden";
      document.getElementById("correctAnswerCont").style.opacity = "0%";
      document.getElementById("correctAnswerCont").style.transition = "all 0s ease .25s";
      document.getElementById("correctAnswerPrompt").style.visibility = "hidden";
      document.getElementById("correctAnswerPrompt").style.opacity = "0%";
      document.getElementById("correctAnswerPrompt").style.transition = "all 0s ease .25s";
      document.getElementById("correctAnswer").style.visibility = "hidden";
      document.getElementById("correctAnswer").style.opacity = "0%";
      document.getElementById("correctAnswer").style.transition = "all 0s ease .25s";
      if (sessionStorage.lives > 1) {
        if (((sessionStorage.period == "OT") && (((sessionStorage.goal == 1) && (sessionStorage.clarksonScore == 1)) || ((sessionStorage.goal == 2) && (sessionStorage.sluScore == 1)))) || ((sessionStorage.goal = 1) && (sessionStorage.clarksonScore == 10))) {
          if ((sessionStorage.goal == 1) && ((sessionStorage.clarksonScore == 1) || (sessionStorage.clarksonScore == 10))) {
            setTimeout(win, 1000);
          }
          else if ((sessionStorage.goal == 2) && (sessionStorage.sluScore == 1)) {
            setTimeout(lose, 1000);
          }
        }
        else {
          setTimeout(enableButton, 1000);
        }
      }
      setTimeout(loseLife.bind(null, event), 750);
    }
    if (songs[69].title == "<i>Tijuana</i><br>(with lyrics!)") {
      setTimeout(() => (
        songs[69].title = "<i>Tijuana</i>"
      ), 500);
    }
    newFunction();
  }
  else if (sessionStorage.selection == 2) {
    document.getElementById("choice" + sessionStorage.answer).style.visibility = "hidden";
    document.getElementById("choice" + sessionStorage.answer).style.opacity = "0%";
    document.getElementById("choice" + sessionStorage.answer).style.transition = "all .25s ease 0s";
    document.getElementById("choice" + sessionStorage.answer).style.pointerEvents = "none";
    document.getElementById("choice" + sessionStorage.answer).tabIndex = "-1";
    document.getElementById("choice" + sessionStorage.answer).blur();
    if (sessionStorage.accurate == String(true)) {
      setTimeout(gotIt26, 750);
    }
    else {
      setTimeout(goodbye, 750);
    }
    setTimeout(enableButton, 750);
  }
  document.getElementById("cover").style.visibility = "hidden";
  document.getElementById("cover").style.opacity = "0%";
  document.getElementById("cover").style.transition = "all .25s ease .25s";
  document.getElementById("cover").tabIndex = "-1";
  document.getElementById("cover").blur();
  document.getElementById("choicesContCont").style.visibility = "hidden";
  document.getElementById("choicesContCont").style.opacity = "0%";
  document.getElementById("choicesContCont").style.transition = "all 0s ease .5s";
  document.getElementById("choicesContCont").tabIndex = "-1";
  document.getElementById("choicesContCont").blur();
  setTimeout(() => (
    document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
  ), 500);
  setTimeout(() => (
    document.getElementById("viewAccountToggle").tabIndex = "0"
  ), 500);
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    setTimeout(() => (
      document.getElementById("conductorTalkCont").tabIndex = "0"
    ), 500);
  }
  setTimeout(() => (
    document.getElementById("conductorCont").tabIndex = "0"
  ), 500);
}

function changeSong(event) {
  if (event.target.innerHTML == "<i>Tijuana</i>") {
    event.target.innerHTML = "Gangbang Song";
  }
  else if (event.target.innerHTML == "<i>Tijuana</i><br>(with lyrics!)") {
    event.target.innerHTML = "Gangbang Song<br>(with lyrics!)";
  }
}

function changeSongBack(event) {
  if (event.target.innerHTML == "Gangbang Song") {
    event.target.innerHTML = "<i>Tijuana</i>";
  }
  else if (event.target.innerHTML == "Gangbang Song<br>(with lyrics!)") {
    event.target.innerHTML = "<i>Tijuana</i><br>(with lyrics!)";
  }
}

function loseLife(event) {
  sessionStorage.lives--;
  localStorage.totalLivesLost++;
  remember(event);
  if (sessionStorage.lives == 5) {
    if ((((sessionStorage.goal == 2) || (sessionStorage.clarksonScore < 10)) || (sessionStorage.won != undefined)) && ((sessionStorage.functionPrime != "win") && (sessionStorage.functionPrime != "lose"))) {
      document.getElementById("conductorTalk").innerHTML = "Oh no, you just killed Caroline! Maybe now I'll be able to get elecetd president next year...";
      if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
        if (document.getElementById("conductorTalkCont").scrollTop > 0) {
          document.getElementById("conductorTalkCont").scrollTop = 0;
        }
      }
      if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
        sessionStorage.backup = "";
      }
    }
    document.getElementById("presidentLife").style.opacity = "50%";
    document.getElementById("presidentLife").style.transition = "opacity .25s ease 0s";
    document.getElementById("presidentDie").style.visibility = "visible";
    document.getElementById("presidentDie").style.opacity = "100%";
    document.getElementById("presidentDie").style.transition = "all .25s ease 0s";
    console.group("Caroline: Shit! " + ((localStorage.name == undefined) ? ("This guy") : (localStorage.name)) + " killed me!");
    console.log("Kami: Oh no!");
    console.log("Liam: Haha, now I'm in control of the band!");
    console.log("Kami: Liam!");
    console.log("Caroline: 1, 2, 3...FUCK THAT GUY!");
    console.log("Liam: Laugh while you still can...");
    console.log("Corsner: Oh dear...");
    console.groupEnd();
  }
  else if (sessionStorage.lives == 4) {
    if ((((sessionStorage.goal == 2) || (sessionStorage.clarksonScore < 10)) || (sessionStorage.won != undefined)) && ((sessionStorage.functionPrime != "win") && (sessionStorage.functionPrime != "lose"))) {
      document.getElementById("conductorTalk").innerHTML = "And now it's Liam! Gotta be careful with your lives there!";
      if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
        if (document.getElementById("conductorTalkCont").scrollTop > 0) {
          document.getElementById("conductorTalkCont").scrollTop = 0;
        }
      }
      if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
        sessionStorage.backup = "";
      }
    }
    document.getElementById("vicePresidentLife").style.opacity = "50%";
    document.getElementById("vicePresidentLife").style.transition = "opacity .25s ease 0s";
    document.getElementById("vicePresidentDie").style.visibility = "visible";
    document.getElementById("vicePresidentDie").style.opacity = "100%";
    document.getElementById("vicePresidentDie").style.transition = "all .25s ease 0s";
    console.group("Liam: NOOO!!! My reign was so short-lived...");
    console.log("Ryan: Serves you right, Liam!");
    console.log("Liam: Please...give me a kiss goodbye before I'm gone...");
    console.log("Kami: Of course, baby! Anything for you!");
    console.log("Liam: Umm... Actually I meant from Garrett...");
    console.log("Kami: What?!");
    console.log("Garrett: Of course, hot stuff!");
    console.log("Kami: Oh, you know what, I don't even care! We're breaking up!");
    console.log("Garrett: Don't worry, Kami, I'll take good care of him...");
    console.groupEnd();
  }
  else if (sessionStorage.lives == 3) {
    if ((((sessionStorage.goal == 2) || (sessionStorage.clarksonScore < 10)) || (sessionStorage.won != undefined)) && ((sessionStorage.functionPrime != "win") && (sessionStorage.functionPrime != "lose"))) {
      document.getElementById("conductorTalk").innerHTML = "Eh, good riddance to Kami. I would have been a better boyfriend to Liam anyway.";
      if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
        if (document.getElementById("conductorTalkCont").scrollTop > 0) {
          document.getElementById("conductorTalkCont").scrollTop = 0;
        }
      }
      if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
        sessionStorage.backup = "";
      }
    }
    document.getElementById("businessManagerLife").style.opacity = "50%";
    document.getElementById("businessManagerLife").style.transition = "opacity .25s ease 0s";
    document.getElementById("businessManagerDie").style.visibility = "visible";
    document.getElementById("businessManagerDie").style.opacity = "100%";
    document.getElementById("businessManagerDie").style.transition = "all .25s ease 0s";
    console.group("Kami: Not me, too!");
    console.log("Ryan: Kami! Don't go!");
    console.log("Kami: I'm so sorry, Ryan! I'll miss you!");
    console.log("Garrett: Lucky... Will you say \"hi\" to Liam for me?");
    console.log("Kami: Yes, of course!");
    console.log("Garrett: And will you give him another kiss for me?");
    console.log("Kami: Umm...sure...");
    console.groupEnd();
  }
  else if (sessionStorage.lives == 2) {
    if ((((sessionStorage.goal == 2) || (sessionStorage.clarksonScore < 10)) || (sessionStorage.won != undefined)) && ((sessionStorage.functionPrime != "win") && (sessionStorage.functionPrime != "lose"))) {
      document.getElementById("conductorTalk").innerHTML = "Not Mario&mdash;whoops, I mean Garrett. Forgot we weren't in high dive for a sec!";
      if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
        if (document.getElementById("conductorTalkCont").scrollTop > 0) {
          document.getElementById("conductorTalkCont").scrollTop = 0;
        }
      }
      if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
        sessionStorage.backup = "";
      }
    }
    document.getElementById("historianLife").style.opacity = "50%";
    document.getElementById("historianLife").style.transition = "opacity .25s ease 0s";
    document.getElementById("historianDie").style.visibility = "visible";
    document.getElementById("historianDie").style.opacity = "100%";
    document.getElementById("historianDie").style.transition = "all .25s ease 0s";
    console.group("Garrett: Yes! I'll finally get to see Liam again!");
    console.log("Corsner: You're way to excited about dying, man");
    console.log("Garrett: I'm coming, Liam! I'll give you another kiss!");
    console.log("Ryan: Well...I guess it's just you and me, Corsner...");
    console.log("Corsner: Yeah, lucky us");
    console.groupEnd();
  }
  else if (sessionStorage.lives == 1) {
    if ((((sessionStorage.goal == 2) || (sessionStorage.clarksonScore < 10)) || (sessionStorage.won != undefined)) && ((sessionStorage.functionPrime != "win") && (sessionStorage.functionPrime != "lose"))) {
      document.getElementById("conductorTalk").innerHTML = "And Ryan too! Better be careful, you only have one more life to go...";
      if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
        if (document.getElementById("conductorTalkCont").scrollTop > 0) {
          document.getElementById("conductorTalkCont").scrollTop = 0;
        }
      }
      if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
        sessionStorage.backup = "";
      }
    }
    document.getElementById("socialMediaChairLife").style.opacity = "50%";
    document.getElementById("socialMediaChairLife").style.transition = "opacity .25s ease 0s";
    document.getElementById("socialMediaChairDie").style.visibility = "visible";
    document.getElementById("socialMediaChairDie").style.opacity = "100%";
    document.getElementById("socialMediaChairDie").style.transition = "all .25s ease 0s";
    document.getElementById("publishedPaper").href = "https://www.nytimes.com/1986/09/05/nyregion/rape-and-murder-scar-innocence-of-potsdam.html";
    document.getElementById("publishedPaper").style.borderRadius = "0";
    console.group("Ryan: Oh, come on! " + ((localStorage.name == undefined) ? ("This guy") : (localStorage.name)) + " sucks, how many more times are they gonna mess up?");
    console.log("Corsner: Ryan! Don't leave me!");
    console.log("Ryan: You're in charge of the band now, Corsner. You must carry on!");
    console.log("Corsner: How? I'm just the floozy!");
    console.log("Ryan: Lead the band to greatness! Make sure it lasts for at least thousand generations!");
    console.log("Corsner: I'll make you proud Ryan!");
    console.log("Ryan: I know you will! Goodbye now...");
    console.log("Corsner: And then, there was one...");
    console.groupEnd();
  }
  else if (sessionStorage.lives == 0) {
    document.getElementById("freshmanRepresentativeLife").style.opacity = "50%";
    document.getElementById("freshmanRepresentativeLife").style.transition = "opacity .25s ease 0s";
    document.getElementById("freshmanRepresentativeDie").style.visibility = "visible";
    document.getElementById("freshmanRepresentativeDie").style.opacity = "100%";
    document.getElementById("freshmanRepresentativeDie").style.transition = "all .25s ease 0s";
    document.getElementById("cheersCover").style.visibility = "visible";
    document.getElementById("cheersCover").style.opacity = "75%";
    document.getElementById("cheersCover").style.transition = "all .25s ease .25s";
    document.getElementById("cheers").style.overflowY = "hidden";
    setTimeout(die, 250);
    console.group("Corsner: My time has come...");
    console.groupEnd();
  }
  compileSound("sawtooth", ["exponential", 115, 65, .25], ["none", 1, null, 0], .25);
}

function die() {
  if (sessionStorage.redo == 0) {
    document.getElementById("troyLassialTalk").innerHTML = "Well would you look at that, you messed up six different times. You are the worst conductor I've ever seen! Kindly leave Crappleton&mdash;I mean Appleton Arena before you embarrass Clarkson any further!";
  }
  else if (sessionStorage.redo == 1) {
    document.getElementById("troyLassialTalk").innerHTML = "What a shame, you screwed it up again. You're the biggest disappointment Clarkson's ever seen since Dan Stec! No buying your way out of it with points this time! Good day.";
  }
  troyLassialEntrance();
}

function newLife() {
  document.getElementById("conductorTalk").innerHTML = "Woah, hold on there! It turn out you've got enough points saved up from those cheers to buy one of your lives back. You don't have to stop playing just yet!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  enableButton();
  document.getElementById("ok").onclick = function(event) {
    acceptLife(event);
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
}

function acceptLife(event) {
  document.getElementById("conductorTalk").innerHTML = "That's the spirit! Now be sure to finish the game this time, we're counting on you!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  sessionStorage.points = (sessionStorage.points - 30);
  localStorage.totalPoints = (localStorage.totalPoints - 30);
  document.getElementById("cheerScore").innerHTML = sessionStorage.points;
  remember(event);
  sessionStorage.lives++;
  document.getElementById("freshmanRepresentativeLife").style.opacity = "100%";
  document.getElementById("freshmanRepresentativeLife").style.transition = "opacity .25s ease 0s";
  document.getElementById("freshmanRepresentativeDie").style.visibility = "hidden";
  document.getElementById("freshmanRepresentativeDie").style.opacity = "0%";
  document.getElementById("freshmanRepresentativeDie").style.transition = "all .25s ease 0s";
  sessionStorage.redo++;
  document.getElementById("cheersCover").style.visibility = "hidden";
  document.getElementById("cheersCover").style.opacity = "0%";
  document.getElementById("cheersCover").style.transition = "all .25s ease 0s";
  document.getElementById("cheers").style.overflowY = "auto";
  newFunction();
  compileSound("triangle", ["exponential", 540, 590, .25], ["exponential", .75, 1, .25], .25);
}

function awayFromTop() {
  if (document.getElementById("cheers").scrollTop == 0) {
    document.getElementById("backToTop").style.visibility = "hidden";
    document.getElementById("backToTop").style.opacity = "0%";
    document.getElementById("backToTop").style.transition = "all 0s ease 0s";
    document.getElementById("backToTop").style.pointerEvents = "none";
    document.getElementById("backToTop").tabIndex = "-1";
    document.getElementById("backToTop").blur();
  }
  else if (document.getElementById("cheers").scrollTop > 0) {
    document.getElementById("backToTop").style.visibility = "visible";
    document.getElementById("backToTop").style.opacity = (document.getElementById("cheers").scrollTop / 25);
    document.getElementById("backToTop").style.transition = "all 0s ease 0s";
    document.getElementById("backToTop").style.pointerEvents = "auto";
    document.getElementById("backToTop").tabIndex = "0";
  }
}

function backToTop(event) {
  event.preventDefault();
  document.getElementById("cheers").scrollTop = 0;
}

function changeCheer(element) {
  if (document.getElementById("cheerMessage" + element).innerHTML == "Boat...ship!") {
    document.getElementById("cheerMessage" + element).innerHTML = "Bullshit!";
  }
  else if (document.getElementById("cheerMessage" + element).innerHTML == "I'm blind, I'm deaf, I wanna be a ref!") {
    document.getElementById("cheerMessage" + element).innerHTML = "I'm blind, I'm deaf, my name is Collin Reff!";
  }
  else if (document.getElementById("cheerMessage" + element).innerHTML == ("Ra ra ree! Hit <span class=\"pronoun pronounThem pronounLower\">" + ((sessionStorage.gender == 1) ? ("him") : ("her")) + "</span> in the knee! Ra ra rass! Hit <span class=\"pronoun pronounThem pronounLower\">" + ((sessionStorage.gender == 1) ? ("him") : ("her")) + "</span> in the other knee!")) {
    document.getElementById("cheerMessage" + element).innerHTML = "Ra ra ree! Hit it with your knee! Ra ra roar! Break the damn door!";
  }
  else if (document.getElementById("cheerMessage" + element).innerHTML == "Suck flu!") {
    document.getElementById("cheerMessage" + element).innerHTML = "Fuck SLU!";
  }
}

function changeCheerBack(element) {
  if (document.getElementById("cheerMessage" + element).innerHTML == "Bullshit!") {
    document.getElementById("cheerMessage" + element).innerHTML = "Boat...ship!";
  }
  else if (document.getElementById("cheerMessage" + element).innerHTML == "I'm blind, I'm deaf, my name is Collin Reff!") {
    document.getElementById("cheerMessage" + element).innerHTML = "I'm blind, I'm deaf, I wanna be a ref!";
  }
  else if (document.getElementById("cheerMessage" + element).innerHTML == "Ra ra ree! Hit it with your knee! Ra ra roar! Break the damn door!") {
    document.getElementById("cheerMessage" + element).innerHTML = "Ra ra ree! Hit <span class=\"pronoun pronounThem pronounLower\">" + ((sessionStorage.gender == 1) ? ("him") : ("her")) + "</span> in the knee! Ra ra rass! Hit <span class=\"pronoun pronounThem pronounLower\">" + ((sessionStorage.gender == 1) ? ("him") : ("her")) + "</span> in the other knee!";
  }
  else if (document.getElementById("cheerMessage" + element).innerHTML == "Fuck SLU!") {
    document.getElementById("cheerMessage" + element).innerHTML = "Suck flu!";
  }
}

function enableCheers(enableClassLists, enableStyles) {
  for (var i = 0; i < enableClassLists.length; i++) {
    for (var j = 0; j < document.getElementsByClassName("cheer").length; j++) {
      if (document.getElementsByClassName("cheer")[j].classList.contains("unusedCheer")) {
        if (eval(enableClassLists[i])) {
          if (document.getElementsByClassName("cheerMessage")[j].innerHTML == "Bend over!") {
            document.getElementsByClassName("cheer")[j].classList.replace("incorrectCheer", "semiCorrectCheer");
            document.getElementsByClassName("cheerMessage")[j].classList.replace("incorrectCheerMessage", "semiCorrectCheerMessage");
            document.getElementsByClassName("cheerCover")[j].classList.replace("incorrectCheerCover", "semiCorrectCheerCover");
          }
          else {
            document.getElementsByClassName("cheer")[j].classList.replace("incorrectCheer", "correctCheer");
            document.getElementsByClassName("cheerMessage")[j].classList.replace("incorrectCheerMessage", "correctCheerMessage");
            document.getElementsByClassName("cheerCover")[j].classList.replace("incorrectCheerCover", "correctCheerCover");
          }
        }
      }
    }
  }
  for (var i = 0; i < enableStyles.length; i++) {
    for (var j = 0; j < document.getElementsByClassName("cheerCover").length; j++) {
      if (document.getElementsByClassName("cheerCover")[j].classList.contains("unusedCheerCover")) {
        if (eval(enableStyles[i])) {
          document.getElementsByClassName("cheerCover")[j].style.display = "block";
        }
      }
    }
  }
}

function disableCheers(disableClassLists, disableStyles) {
  for (var i = 0; i < disableClassLists.length; i++) {
    for (var j = 0; j < document.getElementsByClassName("cheer").length; j++) {
      if (document.getElementsByClassName("cheer")[j].classList.contains("unusedCheer")) {
        if (eval(disableClassLists[i])) {
          if (document.getElementsByClassName("cheerMessage")[j].innerHTML == "Bend over!") {
            document.getElementsByClassName("cheer")[j].classList.replace("semiCorrectCheer", "incorrectCheer");
            document.getElementsByClassName("cheerMessage")[j].classList.replace("semiCorrectCheerMessage", "incorrectCheerMessage");
            document.getElementsByClassName("cheerCover")[j].classList.replace("semiCorrectCheerCover", "incorrectCheerCover");
          }
          else {
            document.getElementsByClassName("cheer")[j].classList.replace("correctCheer", "incorrectCheer");
            document.getElementsByClassName("cheerMessage")[j].classList.replace("correctCheerMessage", "incorrectCheerMessage");
            document.getElementsByClassName("cheerCover")[j].classList.replace("correctCheerCover", "incorrectCheerCover");
          }
        }
      }
    }
  }
  for (var i = 0; i < disableStyles.length; i++) {
    for (var j = 0; j < document.getElementsByClassName("cheerCover").length; j++) {
      if (document.getElementsByClassName("cheerCover")[j].classList.contains("unusedCheerCover")) {
        if (eval(disableStyles[i])) {
          document.getElementsByClassName("cheerCover")[j].style.display = "none";
        }
      }
    }
  }
}

function cheer(cheer, pointsIncrement, event) {
  sessionStorage.cheer = cheer;
  sessionStorage.pointsIncrement = pointsIncrement;
  if ((document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Bend over!") && (sessionStorage.bend < 5)) {
    sessionStorage.bend++;
    sessionStorage.yell++;
    compileSound("sine", ["none", 240, null, 0], ["none", .5, null, 0], .25);
  }
  else {
    if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Bend over!") {
      if (sessionStorage.yell == 1) {
        document.getElementById("conductorTalk").innerHTML = ((sessionStorage.gender == 1) ? ("He's") : ("She's")) + " too easy!";
      }
      else if ((sessionStorage.yell > 1) && (sessionStorage.yell < 5)) {
        document.getElementById("conductorTalk").innerHTML = ((sessionStorage.gender == 1) ? ("He") : ("She")) + " does it on command!";
      }
      else if (sessionStorage.yell == 5) {
        document.getElementById("conductorTalk").innerHTML = ((sessionStorage.gender == 1) ? ("He's") : ("She's")) + " playing hard to get!";
      }
    }
    else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Give me a \"beer\"!") {
      document.getElementById("conductorTalk").innerHTML = "Beer! Now let's get drunk, hey!";
    }
    else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "I disagree!") {
      document.getElementById("conductorTalk").innerHTML = "I also disagree!";
    }
    else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "It's all your fault, sieve!") {
      document.getElementById("conductorTalk").innerHTML = sessionStorage.goalieName + "...sieve! SIEVE, SIEVE, SIEVE, SIEVE, SIEVE, SIEVE, SIEVE, SIEVE!";
    }
    else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Let's go...Clarkson! Let's go...techers!") {
      document.getElementById("conductorTalk").innerHTML = "Let's go...Knights!";
    }
    else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Ra ra ree! Hit it with your knee! Ra ra roar! Break the damn door!") {
      document.getElementById("conductorTalk").innerHTML = "Ra ra race! Hit " + ((sessionStorage.gender == 1) ? ("him") : ("her")) + " in the face!";
    }
    else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Fuck SLU!") {
      document.getElementById("conductorTalk").innerHTML = "More like fuck SLU! Wait, no, you didn't hear me say that...";
    }
    else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == ("We miss you, <span class=\"goalieName\">" + sessionStorage.goalieName + "</span>! But not enough to call!")) {
      document.getElementById("conductorTalk").innerHTML = "My " + sessionStorage.goalieName + " lies over the ocean! My " + sessionStorage.goalieName + " lies over the sea!";
    }
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
      sessionStorage.backup = "";
    }
    document.getElementById("cheer" + sessionStorage.cheer).classList.replace("unusedCheer", "usedCheer");
    document.getElementById("cheer" + sessionStorage.cheer).style.color = "var(--white)";
    document.getElementById("cheer" + sessionStorage.cheer).style.transition = "all 0s ease 0s";
    document.getElementById("cheer" + sessionStorage.cheer).style.pointerEvents = "none";
    document.getElementById("cheerMessage" + sessionStorage.cheer).classList.replace("unusedCheerMessage", "usedCheerMessage");
    document.getElementById("cheerCover" + sessionStorage.cheer).classList.replace("unusedCheerCover", "usedCheerCover");
    if (document.getElementById("cheer" + sessionStorage.cheer).classList.contains("correctCheer")) {
      correctCheer();
    }
    else if (document.getElementById("cheer" + sessionStorage.cheer).classList.contains("semiCorrectCheer")) {
      semiCorrectCheer();
    }
    else if (document.getElementById("cheer" + sessionStorage.cheer).classList.contains("incorrectCheer")) {
      incorrectCheer();
    }
  }
  localStorage.totalCheers++;
  remember(event);
  if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Halftime!") {
    console.log("This one's for you, Jonas!");
  }
  else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "We hate SLU, we hate SLU, we hate SLU, and so do you!") {
    console.log("Don't you dare start that now, Liam!");
  }
}

function correctCheer() {
  document.getElementById("cheer" + sessionStorage.cheer).style.background = "var(--clarksonGreen)";
  document.getElementById("cheer" + sessionStorage.cheer).style.borderBottom = ".05em solid var(--clarksonGreen)";
  document.getElementById("cheerMessage" + sessionStorage.cheer).style.animation = "selectCheer .5s ease 0s 1 forwards";
  setTimeout(() => (
    document.getElementById("cheerMessage" + sessionStorage.cheer).style.animation = "none"
  ), 500);
  if (localStorage.totalCorrectCheers == "N/A") {
    localStorage.totalCorrectCheers = 1;
  }
  else {
    localStorage.totalCorrectCheers++;
  }
  for (var i = 1; i <= sessionStorage.pointsIncrement; i++) {
    sessionStorage.points++;
    localStorage.totalPoints++;
  }
  if ((localStorage.highScore == "N/A") || ((((sessionStorage.points).length == (localStorage.highScore).length) && (sessionStorage.points > localStorage.highScore)) || ((sessionStorage.points).length > (localStorage.highScore).length))) {
    localStorage.highScore = sessionStorage.points;
  }
  document.getElementById("cheerScore").innerHTML = sessionStorage.points;
  if (sessionStorage.points == 36) {
    document.getElementById("conductorTalk").innerHTML = "dIrTy SeX?!?!";
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
      sessionStorage.backup = "";
    }
  }
  compileSound("triangle", ["exponential", 540, 590, .25], ["exponential", .75, 1, .25], .25);
}

function semiCorrectCheer() {
  if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Bend over!") {
    if (sessionStorage.gender == 1) {
      document.getElementById("cheer" + sessionStorage.cheer).classList.replace("semiCorrectCheer", "correctCheer");
      document.getElementById("cheer" + sessionStorage.cheer).style.background = "var(--clarksonGreen)";
      document.getElementById("cheer" + sessionStorage.cheer).style.borderBottom = ".05em solid var(--clarksonGreen)";
      document.getElementById("cheerMessage" + sessionStorage.cheer).classList.replace("semiCorrectCheerMessage", "correctCheerMessage");
      document.getElementById("cheerMessage" + sessionStorage.cheer).style.animation = "selectCheer .5s ease 0s 1 forwards";
      setTimeout(() => (
        document.getElementById("cheerMessage" + sessionStorage.cheer).style.animation = "none"
      ), 500);
      document.getElementById("cheerCover" + sessionStorage.cheer).classList.replace("semiCorrectCheerCover", "correctCheerCover");
      document.getElementById("danielAllin").style.animation = "bendOver 1.25s ease 0s 1 forwards";
      setTimeout(() => (
        document.getElementById("danielAllin").style.animation = "none"
      ), 1250);
      if (localStorage.totalCorrectCheers == "N/A") {
        localStorage.totalCorrectCheers = 1;
      }
      else {
        localStorage.totalCorrectCheers++;
      }
      for (var i = 1; i <= sessionStorage.pointsIncrement; i++) {
        sessionStorage.points++;
        localStorage.totalPoints++;
      }
      if ((localStorage.highScore == "N/A") || ((((sessionStorage.points).length == (localStorage.highScore).length) && (sessionStorage.points > localStorage.highScore)) || ((sessionStorage.points).length > (localStorage.highScore).length))) {
        localStorage.highScore = sessionStorage.points;
      }
      document.getElementById("cheerScore").innerHTML = sessionStorage.points;
      if (sessionStorage.points == 36) {
        document.getElementById("conductorTalk").innerHTML = "dIrTy SeX?!?!";
        if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
          if (document.getElementById("conductorTalkCont").scrollTop > 0) {
            document.getElementById("conductorTalkCont").scrollTop = 0;
          }
        }
        if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
          sessionStorage.backup = "";
        }
      }
      compileSound("triangle", ["exponential", 540, 590, .25], ["exponential", .75, 1, .25], .25);
    }
    else if (sessionStorage.gender == 2) {
      document.getElementById("cheer" + sessionStorage.cheer).classList.replace("semiCorrectCheer", "incorrectCheer");
      document.getElementById("cheer" + sessionStorage.cheer).style.background = "var(--sluRed)";
      document.getElementById("cheer" + sessionStorage.cheer).style.borderBottom = ".05em solid var(--sluRed)";
      document.getElementById("cheerMessage" + sessionStorage.cheer).classList.replace("semiCorrectCheerMessage", "incorrectCheerMessage");
      document.getElementById("cheerCover" + sessionStorage.cheer).classList.replace("semiCorrectCheerCover", "incorrectCheerCover");
      if (localStorage.totalCorrectCheers == "N/A") {
        localStorage.totalCorrectCheers = 0;
      }
      document.getElementById("hopeCrisafi").style.animation = "bendOver 1.25s ease 0s 1 forwards";
      setTimeout(() => (
        document.getElementById("hopeCrisafi").style.animation = "none"
      ), 1250);
      document.getElementById("troyLassialTalk").innerHTML = "Woah, you can't yell at a bunch of college girls to bend over! I'm afraid I'm going to have to write you up for a Title 69 sexual harassment violation, and take one of your lives away.";
      setTimeout(troyLassialEntrance, 1250);
      compileSound("sawtooth", ["exponential", 140, 90, .25], ["none", 1, null, 0], .25);
    }
  }
}

function incorrectCheer() {
  document.getElementById("cheer" + sessionStorage.cheer).style.background = "var(--sluRed)";
  document.getElementById("cheer" + sessionStorage.cheer).style.borderBottom = ".05em solid var(--sluRed)";
  if (localStorage.totalCorrectCheers == "N/A") {
    localStorage.totalCorrectCheers = 0;
  }
  if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Bullshit!") {
    document.getElementById("troyLassialTalk").innerHTML = "It's funny, that sounded an awful lot like the \"bullshit\" word. Maybe that was intentional of you? I suppose that technically, you've done nothing wrong. I'll be watching you like a hawk, though, so beware!";
  }
  else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Halftime!") {
    if (sessionStorage.period == 1) {
      document.getElementById("troyLassialTalk").innerHTML = "Halftime? Are you kidding? There's no halftime in hockey, just three periods with breaks in between. The real \"halftime\" isn't for another half a period. For your appalling ignorance, I'm going to take away one of your lives.";
    }
    else if (sessionStorage.period == 2) {
      document.getElementById("troyLassialTalk").innerHTML = "Halftime? Are you kidding? There's no halftime in hockey, just three periods with breaks in between. The real \"halftime\" already went by. For your appalling ignorance, I'm going to take away one of your lives.";
    }
  }
  else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Santa isn't real!") {
    document.getElementById("troyLassialTalk").innerHTML = "How dare you say that! Congratulations, you've just ruined the magic of Christmas for an innocent SLU child! Not only will you have to write a formal apology letter to her, but I'll be taking one of your lives away.";
    document.getElementById("troyLassial").style.display = "none";
    document.getElementById("troyLassialSanta").style.display = "inline-block";
  }
  else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Sexy goalie!") {
    document.getElementById("troyLassialTalk").innerHTML = "Excuse me, this is a women's game! Calling our goalie \"sexy\" is dehumanizing and misogynistic! As punishment for your appalling microaggression, I'll be taking one of your lives away.";
  }
  else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "Fuck SLU!") {
    document.getElementById("troyLassialTalk").innerHTML = "Suck flu? What on Earth does that mean? Are you sure you weren't trying to say something else? Unfortunately, I can't eject you just for wanting to suck the flu. But please reconsider how you are representing Clarkson.";
  }
  else if (document.getElementById("cheerMessage" + sessionStorage.cheer).innerHTML == "You're a hooker!") {
    document.getElementById("troyLassialTalk").innerHTML = "Did I just hear you call " + (globalThis.players).women.slu[sessionStorage.offender].name + " a hooker? What made you think that was acceptable? I am outraged by this sexist language! Maybe you'll learn your lesson after I take one of your lives away.";
  }
  troyLassialEntrance();
  compileSound("sawtooth", ["exponential", 140, 90, .25], ["none", 1, null, 0], .25);
}

function raffle(event) {
  document.getElementById("conductorTalk").innerHTML = "Congrats, you just won the puck raffle! Here's 1000 extra points as your prize! If only you could use these imaginary points to pay off the thousands of dollars of student debt that Clarkson's giving you...";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  document.getElementById("raffle").style.display = "none";
  globalThis.i = 0;
  sessionStorage.raffleIncrementInterval = setInterval(raffleIncrement.bind(null, event), 10);
  console.log("Congrats, you're now a thousandaire!");
}

function raffleIncrement(event) {
  sessionStorage.points++
  localStorage.totalPoints++;
  if ((localStorage.highScore == "N/A") || ((((sessionStorage.points).length == (localStorage.highScore).length) && (sessionStorage.points > localStorage.highScore)) || ((sessionStorage.points).length > (localStorage.highScore).length))) {
    localStorage.highScore = sessionStorage.points;
  }
  document.getElementById("cheerScore").innerHTML = sessionStorage.points;
  remember(event);
  globalThis.i++;
  if (globalThis.i == 1000) {
    clearInterval(sessionStorage.raffleIncrementInterval);
    sessionStorage.removeItem("raffleIncrementInterval");
    enableButton();
  }
  compileSound("triangle", ["none", 590, null, 0], ["none", 1, null, 0], .1);
}

function troyLassialEntrance() {
  disableButton();
  document.getElementById("conductorCont").tabIndex = "-1";
  document.getElementById("conductorCont").blur();
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    document.getElementById("conductorTalkCont").tabIndex = "-1";
    document.getElementById("conductorTalkCont").blur();
  }
  document.getElementById("viewAccountToggle").style.pointerEvents = "none";
  document.getElementById("viewAccountToggle").tabIndex = "-1";
  document.getElementById("viewAccountToggle").blur();
  document.getElementById("troyLassialButton").tabIndex = "0";
  document.getElementById("troyLassialCont").style.transform = "scale(1)";
  document.getElementById("troyLassialCont").style.transition = "transform .5s ease 0s";
  document.getElementById("troyLassialCont").tabIndex = "0";
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.opacity = "100%";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
  document.getElementById("cover").tabIndex = "0";
  console.log("FUCK YOU TROY!!!");
}

function troyLassialExit(event) {
  if (sessionStorage.lives == 0) {
    if (((sessionStorage.points >= 30) && (sessionStorage.redo == 0)) && (sessionStorage.drinks == undefined)) {
      document.getElementById("cover").style.visibility = "hidden";
      document.getElementById("cover").style.opacity = "0%";
      document.getElementById("cover").style.transition = "all .25s ease .25s";
      document.getElementById("cover").tabIndex = "-1";
      document.getElementById("cover").blur();
      document.getElementById("troyLassialCont").style.transform = "scale(0)";
      document.getElementById("troyLassialCont").style.transition = "transform .5s ease 0s";
      document.getElementById("troyLassialCont").tabIndex = "-1";
      document.getElementById("troyLassialCont").blur();
      document.getElementById("troyLassialButton").tabIndex = "-1";
      document.getElementById("troyLassialButton").blur();
      setTimeout(newLife, 750);
      setTimeout(() => (
        document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
      ), 500);
      setTimeout(() => (
        document.getElementById("viewAccountToggle").tabIndex = "0"
      ), 500);
      if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
        setTimeout(() => (
          document.getElementById("conductorTalkCont").tabIndex = "0"
        ), 500);
      }
      setTimeout(() => (
        document.getElementById("conductorCont").tabIndex = "0"
      ), 500);
      setTimeout(enableButton, 750);
    }
    else {
      document.getElementById("troyLassialCont").style.visibility = "hidden";
      document.getElementById("troyLassialCont").style.opacity = "0%";
      document.getElementById("troyLassialCont").style.transition = "all .25s ease 0s";
      document.getElementById("troyLassialCont").tabIndex = "-1";
      document.getElementById("troyLassialCont").blur();
      document.getElementById("troyLassialButton").tabIndex = "-1";
      document.getElementById("troyLassialButton").blur();
      document.getElementById("gameOverHeading").style.color = "var(--sluRed)";
      document.getElementById("gameOverHeading").style.transition = "color 0s ease 0s";
      gameOver(event);
      if (sessionStorage.drinks >= 53) {
        console.log("Congrats, you're a true alcoholic now!");
      }
    }
  }
  else if (sessionStorage.lives > 0) {
    document.getElementById("cover").style.visibility = "hidden";
    document.getElementById("cover").style.opacity = "0%";
    document.getElementById("cover").style.transition = "all .25s ease .25s";
    document.getElementById("cover").tabIndex = "-1";
    document.getElementById("cover").blur();
    document.getElementById("troyLassialCont").style.transform = "scale(0)";
    document.getElementById("troyLassialCont").style.transition = "transform .5s ease 0s";
    document.getElementById("troyLassialCont").tabIndex = "-1";
    document.getElementById("troyLassialCont").blur();
    document.getElementById("troyLassialButton").tabIndex = "-1";
    document.getElementById("troyLassialButton").blur();
    if ((document.getElementById("troyLassialTalk").innerHTML == "It's funny, that sounded an awful lot like the \"bullshit\" word. Maybe that was intentional of you? I suppose that technically, you've done nothing wrong. I'll be watching you like a hawk, though, so beware!") || (document.getElementById("troyLassialTalk").innerHTML == "Suck flu? What on Earth does that mean? Are you sure you weren't trying to say something else? Unfortunately, I can't eject you just for wanting to suck the flu. But please reconsider how you are representing Clarkson.")) {
      document.getElementById("cheer" + sessionStorage.cheer).classList.replace("incorrectCheer", "correctCheer");
      document.getElementById("cheer" + sessionStorage.cheer).style.background = "var(--clarksonGreen)";
      document.getElementById("cheer" + sessionStorage.cheer).style.borderBottom = ".05em solid var(--clarksonGreen)";
      document.getElementById("cheer" + sessionStorage.cheer).style.transition = "all 0s ease .75s";
      document.getElementById("cheerMessage" + sessionStorage.cheer).classList.replace("incorrectCheerMessage", "correctCheerMessage");
      document.getElementById("cheerMessage" + sessionStorage.cheer).style.animation = "selectCheer .5s ease .75s 1 forwards";
      setTimeout(() => (
        document.getElementById("cheerMessage" + sessionStorage.cheer).style.animation = "none"
      ), 1250);
      document.getElementById("cheerCover" + sessionStorage.cheer).classList.replace("incorrectCheerCover", "correctCheerCover");
      localStorage.totalCorrectCheers++;
      for (var i = 1; i <= sessionStorage.pointsIncrement; i++) {
        sessionStorage.points++;
        localStorage.totalPoints++;
      }
      if ((localStorage.highScore == "N/A") || ((((sessionStorage.points).length == (localStorage.highScore).length) && (sessionStorage.points > localStorage.highScore)) || ((sessionStorage.points).length > (localStorage.highScore).length))) {
        localStorage.highScore = sessionStorage.points;
      }
      setTimeout(() => (
        document.getElementById("cheerScore").innerHTML = sessionStorage.points
      ), 750);
      remember(event);
      if (sessionStorage.points == 36) {
        setTimeout(() => (
          document.getElementById("conductorTalk").innerHTML = "dIrTy SeX?!?!"
        ), 750);
        if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
          if (document.getElementById("conductorTalkCont").scrollTop > 0) {
            document.getElementById("conductorTalkCont").scrollTop = 0;
          }
        }
        if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
          sessionStorage.backup = "";
        }
      }
      setTimeout(enableButton, 750);
      compileSound("triangle", ["exponential", 540, 590, .25], ["exponential", .75, 1, .25], .25);
    }
    else {
      if (document.getElementById("troyLassialTalk").innerHTML == "How dare you say that! Congratulations, you've just ruined the magic of Christmas for an innocent SLU child! Not only will you have to write a formal apology letter to her, but I'll be taking one of your lives away.") {
        setTimeout(() => (
          document.getElementById("troyLassial").style.display = "inline-block"
        ), 500);
        setTimeout(() => (
          document.getElementById("troyLassialSanta").style.display = "none"
        ), 500);
        if (sessionStorage.lives > 1) {
          setTimeout(enableButton, 1000);
        }
      }
      else if (document.getElementById("troyLassialTalk").innerHTML == "A public hockey game is no place to sing those disgusting, vulgar lyrics! There are children in attendance! You're disgracing the Clarkson name! That's it, I'm taking one of your lives away and ejecting you from Appleton Arena!") {
        if (sessionStorage.lives > 1) {
          setTimeout(win, 1000);
        }
      }
      setTimeout(loseLife.bind(null, event), 750);
    }
    setTimeout(() => (
      document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
    ), 500);
    setTimeout(() => (
      document.getElementById("viewAccountToggle").tabIndex = "0"
    ), 500);
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      setTimeout(() => (
        document.getElementById("conductorTalkCont").tabIndex = "0"
      ), 500);
    }
    setTimeout(() => (
      document.getElementById("conductorCont").tabIndex = "0"
    ), 500);
  }
}

function gotIt7() {
  document.getElementById("conductorTalk").innerHTML = "Clarkson's mascot, the Golden Knight, has come out to say \"hi\"! Wave to him! What song do you think we should play now?";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  document.getElementById("goldenKnight").style.visibility = "visible";
  document.getElementById("goldenKnight").style.left = "52%";
  document.getElementById("goldenKnight").style.opacity = "100%";
  document.getElementById("goldenKnight").style.transition = "visibility .25s ease .25s, left 0s ease 6.5s, opacity .25s ease .25s";
  document.getElementById("goldenKnight").style.animation = "goldenKnightLap 6s ease .5s 1 forwards";
  setTimeout(() => (
    document.getElementById("goldenKnight").style.animation = "none"
  ), 6500);
  sessionStorage.songPrime = 41;
  setTimeout(enableButton, 6250);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 8;
}

function gotIt8() {
  document.getElementById("conductorTalk").innerHTML = "Look, the zebras&mdash;I mean refs&mdash;are coming out on the ice! Let's hope they haven't been paid off by SLU.";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var enableClassLists = [
    "j == 61"
  ];
  var enableStyles = [
    "j == 61"
  ];
  enableCheers(enableClassLists, enableStyles);
  document.getElementById("goldenKnight").style.visibility = "hidden";
  document.getElementById("goldenKnight").style.opacity = "0%";
  document.getElementById("goldenKnight").style.transition = "all .25s ease 0s";
  for (var i = 0; i < document.getElementsByClassName("zebra").length; i++) {
    var animationName = (i + 1);
    document.getElementsByClassName("zebra")[i].style.visibility = "visible";
    document.getElementsByClassName("zebra")[i].style.opacity = "100%";
    if (i == 0) {
      document.getElementById("zebra1").style.left = "52%";
      document.getElementById("zebra1").style.transition = "visibility .25s ease .25s, left 0s ease 6.5s, opacity .25s ease .25s";
    }
    else if (i == 1) {
      document.getElementById("zebra2").style.right = "52%";
      document.getElementById("zebra2").style.transition = "visibility .25s ease .25s, right 0s ease 6.5s, opacity .25s ease .25s";
    }
    document.getElementsByClassName("zebra")[i].style.animation = "zebra" + animationName + "Lap 6s ease .5s 1 forwards";
    const reset = (x) => {
      setTimeout(() => (
        document.getElementsByClassName("zebra")[x].style.animation = "none"
      ), 6500);
    }
    reset(i);
  }
  sessionStorage.songPrime = 40;
  setTimeout(enableButton, 6500);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 9;
}

function gotIt9() {
  document.getElementById("conductorTalk").innerHTML = "Put your hands together for our dope as fuck hockey team! These guys kick ass! SLU doesn't stand a chance!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var disableClassLists = [
    "j == 61"
  ];
  var disableStyles = [
    "j == 61"
  ];
  disableCheers(disableClassLists, disableStyles);
  for (var i = 0; i < document.getElementsByClassName("zebra").length; i++) {
    document.getElementsByClassName("zebra")[i].style.visibility = "hidden";
    document.getElementsByClassName("zebra")[i].style.opacity = "0%";
    document.getElementsByClassName("zebra")[i].style.transition = "all .25s ease 0s";
  }
  if (sessionStorage.gender == 1) {
    for (var i = 0; i < document.getElementsByClassName("clarksonMenPlayer").length; i++) {
      if (i > 0) {
        document.getElementsByClassName("clarksonMenPlayer")[i].style.visibility = "visible";
        if (i == 1) {
          document.getElementById("alexCampbell").style.left = "-10%";
          document.getElementById("alexCampbell").style.bottom = "68%";
        }
        else if (i == 2) {
          document.getElementById("chrisKlack").style.left = "-10%";
          document.getElementById("chrisKlack").style.bottom = "18%";
        }
        else if (i == 3) {
          document.getElementById("dustynMcfaul").style.left = "75%";
          document.getElementById("dustynMcfaul").style.bottom = "5%";
        }
        else if (i == 4) {
          document.getElementById("jackJacome").style.left = "75%";
          document.getElementById("jackJacome").style.bottom = "43%";
        }
        else if (i == 5) {
          document.getElementById("zachTsekos").style.left = "75%";
          document.getElementById("zachTsekos").style.bottom = "80%";
        }
        document.getElementsByClassName("clarksonMenPlayer")[i].style.opacity = "100%";
        document.getElementsByClassName("clarksonMenPlayer")[i].style.transition = "visibility .25s ease .25s, left 2s ease .5s, bottom 2s ease .5s, opacity .25s ease .25s";
        const activate = (x) => {
          setTimeout(() => (
            document.getElementsByClassName("clarksonMenPlayer")[x].style.pointerEvents = "auto"
          ), 2500);
          setTimeout(() => (
            document.getElementsByClassName("clarksonMenPlayer")[x].tabIndex = "0"
          ), 2500);
        }
        activate(i);
      }
    }
  }
  else if (sessionStorage.gender == 2) {
    for (var i = 0; i < document.getElementsByClassName("clarksonWomenPlayer").length; i++) {
      if (i > 0) {
        document.getElementsByClassName("clarksonWomenPlayer")[i].style.visibility = "visible";
        if (i == 1) {
          document.getElementById("anneCherkowski").style.left = "-10%";
          document.getElementById("anneCherkowski").style.bottom = "68%";
        }
        else if (i == 2) {
          document.getElementById("brookeMcQuigge").style.left = "-10%";
          document.getElementById("brookeMcQuigge").style.bottom = "18%";
        }
        else if (i == 3) {
          document.getElementById("gabrielleDavid").style.left = "75%";
          document.getElementById("gabrielleDavid").style.bottom = "5%";
        }
        else if (i == 4) {
          document.getElementById("haleyWinn").style.left = "75%";
          document.getElementById("haleyWinn").style.bottom = "43%";
        }
        else if (i == 5) {
          document.getElementById("jennaGoodwin").style.left = "75%";
          document.getElementById("jennaGoodwin").style.bottom = "80%";
        }
        document.getElementsByClassName("clarksonWomenPlayer")[i].style.opacity = "100%";
        document.getElementsByClassName("clarksonWomenPlayer")[i].style.transition = "visibility .25s ease .25s, left 2s ease .5s, bottom 2s ease .5s, opacity .25s ease .25s";
        const activate = (x) => {
          setTimeout(() => (
            document.getElementsByClassName("clarksonWomenPlayer")[x].style.pointerEvents = "auto"
          ), 2500);
          setTimeout(() => (
            document.getElementsByClassName("clarksonWomenPlayer")[x].tabIndex = "0"
          ), 2500);
        }
        activate(i);
      }
    }
  }
  sessionStorage.songPrime = 58;
  setTimeout(enableButton, 2500);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 10;
}

function gotIt10() {
  document.getElementById("conductorTalk").innerHTML = "And now the Saints come skating in! You're supposed to say \"<em>BOOOOOO</em>\"!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var enableClassLists = [
    "j == 39"
  ];
  var enableStyles = [
    "j == 39"
  ];
  enableCheers(enableClassLists, enableStyles);
  if (sessionStorage.gender == 1) {
    for (var i = 0; i < document.getElementsByClassName("sluMenPlayer").length; i++) {
      if (i < 5) {
        document.getElementsByClassName("sluMenPlayer")[i].style.visibility = "visible";
        if (i == 0) {
          document.getElementById("ashtonFry").style.right = "-10%";
          document.getElementById("ashtonFry").style.bottom = "68%";
        }
        else if (i == 1) {
          document.getElementById("cameronBuhl").style.right = "-10%";
          document.getElementById("cameronBuhl").style.bottom = "18%";
        }
        else if (i == 2) {
          document.getElementById("davidJankowski").style.right = "75%";
          document.getElementById("davidJankowski").style.bottom = "5%";
        }
        else if (i == 3) {
          document.getElementById("nicholasTrela").style.right = "75%";
          document.getElementById("nicholasTrela").style.bottom = "43%";
        }
        else if (i == 4) {
          document.getElementById("tuckerMcintosh").style.right = "75%";
          document.getElementById("tuckerMcintosh").style.bottom = "80%";
        }
        document.getElementsByClassName("sluMenPlayer")[i].style.opacity = "100%";
        document.getElementsByClassName("sluMenPlayer")[i].style.transition = "visibility .25s ease .25s, right 2s ease .5s, bottom 2s ease .5s, opacity .25s ease .25s";
        const activate = (x) => {
          setTimeout(() => (
            document.getElementsByClassName("sluMenPlayer")[x].style.pointerEvents = "auto"
          ), 2500);
          setTimeout(() => (
            document.getElementsByClassName("sluMenPlayer")[x].tabIndex = "0"
          ), 2500);
        }
        activate(i);
      }
    }
  }
  else if (sessionStorage.gender == 2) {
    for (var i = 0; i < document.getElementsByClassName("sluWomenPlayer").length; i++) {
      if (i < 5) {
        document.getElementsByClassName("sluWomenPlayer")[i].style.visibility = "visible";
        if (i == 0) {
          document.getElementById("alyMcleod").style.right = "-10%";
          document.getElementById("alyMcleod").style.bottom = "68%";
        }
        else if (i == 1) {
          document.getElementById("brittneyGout").style.right = "-10%";
          document.getElementById("brittneyGout").style.bottom = "18%";
        }
        else if (i == 2) {
          document.getElementById("gabiJones").style.right = "75%";
          document.getElementById("gabiJones").style.bottom = "5%";
        }
        else if (i == 3) {
          document.getElementById("hillarySterling").style.right = "75%";
          document.getElementById("hillarySterling").style.bottom = "43%";
        }
        else if (i == 4) {
          document.getElementById("kristinaBahl").style.right = "75%";
          document.getElementById("kristinaBahl").style.bottom = "80%";
        }
        document.getElementsByClassName("sluWomenPlayer")[i].style.opacity = "100%";
        document.getElementsByClassName("sluWomenPlayer")[i].style.transition = "visibility .25s ease .25s, right 2s ease .5s, bottom 2s ease .5s, opacity .25s ease .25s";
        const activate = (x) => {
          setTimeout(() => (
            document.getElementsByClassName("sluWomenPlayer")[x].style.pointerEvents = "auto"
          ), 2500);
          setTimeout(() => (
            document.getElementsByClassName("sluWomenPlayer")[x].tabIndex = "0"
          ), 2500);
        }
        activate(i);
      }
    }
  }
  sessionStorage.songPrime = 74;
  setTimeout(enableButton, 2500);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 11;
}

function toggleStats(newStats, method) {
  sessionStorage.newStats = newStats;
  if (document.getElementsByClassName("playerStatsCont")[sessionStorage.newStats - 1].classList.contains("toggledStatsCont")) {
    hideStats(sessionStorage.newStats, method);
  }
  else if (document.getElementsByClassName("playerStatsCont")[sessionStorage.newStats - 1].classList.contains("unToggledStatsCont")) {
    if (sessionStorage.oldStats != undefined) {
      hideStats(sessionStorage.oldStats, method);
    }
    showStats(sessionStorage.newStats, method);
  }
  sessionStorage.oldStats = sessionStorage.newStats;
}

function showStats(stats, method) {
  sessionStorage.stats = stats;
  if ((method == "click") || ((method == "enter") && (document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].classList.contains("unToggledStatsCont")))) {
    document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].classList.replace("hiddenStatsCont", "shownStatsCont");
    if (method == "click") {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].classList.replace("unToggledStatsCont", "toggledStatsCont");
    }
    document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.zIndex = "4";
    if ((sessionStorage.stats == 1) || (sessionStorage.stats == 2)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.left = "12%";
    }
    else if ((sessionStorage.stats == 3) || (sessionStorage.stats == 8) || (sessionStorage.stats == 13) || (sessionStorage.stats == 18)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.top = "34%";
    }
    else if ((sessionStorage.stats == 4) || (sessionStorage.stats == 9) || (sessionStorage.stats == 14) || (sessionStorage.stats == 19)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.bottom = "34%";
    }
    else if ((sessionStorage.stats == 5) || (sessionStorage.stats == 10) || (sessionStorage.stats == 15) || (sessionStorage.stats == 20)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.bottom = "21%";
    }
    else if ((sessionStorage.stats == 6) || (sessionStorage.stats == 11)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.right = "57%";
    }
    else if ((sessionStorage.stats == 7) || (sessionStorage.stats == 12) || (sessionStorage.stats == 17) || (sessionStorage.stats == 22)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.top = "22%";
    }
    else if ((sessionStorage.stats == 16) || (sessionStorage.stats == 21)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.left = "57%";
    }
    else if ((sessionStorage.stats == 23) || (sessionStorage.stats == 24)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.right = "12%";
    }
    if ((sessionStorage.period == 1) || (sessionStorage.period == 3)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.transform = "scale(1)";
    }
    else if ((sessionStorage.period == 2) || (sessionStorage.period == "OT")) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.transform = "scaleX(-1) scaleY(1)";
    }
    document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.transition = "all .25s ease 0s";
    setTimeout(() => (
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.pointerEvents = "auto"
    ), 250);
  }
}

function hideStats(stats, method) {
  sessionStorage.stats = stats;
  if ((method == "click") || ((method == "leave") && (document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].classList.contains("unToggledStatsCont")))) {
    document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].classList.replace("shownStatsCont", "hiddenStatsCont")
    if (method == "click") {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].classList.replace("toggledStatsCont", "unToggledStatsCont")
    }
    setTimeout(() => (
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.zIndex = "3"
    ), 250);
    if ((sessionStorage.stats == 1) || (sessionStorage.stats == 2)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.left = "-4%";
    }
    else if ((sessionStorage.stats == 3) || (sessionStorage.stats == 8) || (sessionStorage.stats == 13) || (sessionStorage.stats == 18)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.top = "1%";
    }
    else if ((sessionStorage.stats == 4) || (sessionStorage.stats == 9) || (sessionStorage.stats == 14) || (sessionStorage.stats == 19)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.bottom = "-3%";
    }
    else if ((sessionStorage.stats == 5) || (sessionStorage.stats == 10) || (sessionStorage.stats == 15) || (sessionStorage.stats == 20)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.bottom = "-17%";
    }
    else if ((sessionStorage.stats == 6) || (sessionStorage.stats == 11)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.right = "41%";
    }
    else if ((sessionStorage.stats == 7) || (sessionStorage.stats == 12) || (sessionStorage.stats == 17) || (sessionStorage.stats == 22)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.top = "-13%";
    }
    else if ((sessionStorage.stats == 16) || (sessionStorage.stats == 21)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.left = "41%";
    }
    else if ((sessionStorage.stats == 23) || (sessionStorage.stats == 24)) {
      document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.right = "-4%";
    }
    document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.transform = "scale(0)";
    document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.transition = "all .25s ease 0s";
    document.getElementsByClassName("playerStatsCont")[sessionStorage.stats - 1].style.pointerEvents = "none";
  }
}

function gotIt11() {
  document.getElementById("conductorTalk").innerHTML = "The ROTC Color Guard is bringing out the American flag now. No cowbell for this part, Chestnut!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  var disableClassLists = [
    "j == 39"
  ];
  var disableStyles = [
    "j == 39"
  ];
  disableCheers(disableClassLists, disableStyles);
  document.getElementById("flagCont").style.visibility = "visible";
  document.getElementById("flagCont").style.opacity = "100%";
  document.getElementById("flagCont").style.transition = "all .25s ease 0s";
  sessionStorage.songPrime = 67;
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 12;
  console.log("Hey... That hurts, man...");
}

function gotIt12() {
  document.getElementById("conductorTalk").innerHTML = "The pregame's over, time for the real game to begin! This is going to be fun! Watch as they do the puck drop.";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var enableClassLists = [
    "j == 0",
    "j == 17",
    "j == 22",
    "j == 30",
    "j == 31",
    "(j == 34) && (sessionStorage.gender == 1)",
    "j == 50",
    "j == 55"
  ];
  var enableStyles = [
    "j == 0",
    "j == 17",
    "j == 22",
    "j == 30",
    "j == 31",
    "j == 34",
    "j == 41",
    "j == 50",
    "j == 55"
  ];
  enableCheers(enableClassLists, enableStyles);
  if (sessionStorage.points == 0) {
    document.getElementById("cheersContContCont").style.animation = "emphasizeCont 1.5s ease 0s 1 forwards";
    setTimeout(() => (
      document.getElementById("cheersContContCont").style.animation = "none"
    ), 1500);
  }
  document.getElementById("flagCont").style.visibility = "hidden";
  document.getElementById("flagCont").style.opacity = "0%";
  document.getElementById("flagCont").style.transition = "all .25s ease 0s";
  document.getElementById("puck").style.visibility = "visible";
  document.getElementById("puck").style.top = "50%";
  document.getElementById("puck").style.opacity = "100%";
  document.getElementById("puck").style.transition = "visibility .25s ease .25s, top 1s ease 1s, opacity .25s ease .25s";
  sessionStorage.position = 5;
  sessionStorage.scorer = 4;
  sessionStorage.songPrime = 61;
  setTimeout(enableButton, 2000);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 13;
}

function gotIt13() {
  document.getElementById("conductorTalk").innerHTML = "Look at them go! Let's play something to hype up the crowd!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var disableClassLists = [
    "j == 17"
  ];
  var disableStyles = [
    "j == 17"
  ];
  disableCheers(disableClassLists, disableStyles);
  sessionStorage.order = Math.ceil(Math.random() * 4);
  sequence(sessionStorage.order);
  document.getElementById("goalMessages").style.visibility = "visible";
  document.getElementById("goalMessages").style.opacity = "100%";
  document.getElementById("goalMessages").style.transition = "all 0s ease 0s";
  sessionStorage.songPrime = 34;
  setTimeout(enableButton, 2750);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 14;
  sessionStorage.functionPrime = "gamePlay";
}

function puck(position) {
  sessionStorage.position = position;
  if ((sessionStorage.goalieGoal != undefined) && (sessionStorage.goalieGoal == 1)) {
    if ((sessionStorage.position == 1) || (sessionStorage.position == 9)) {
      sessionStorage.scorer = 0;
    }
  }
  else if ((sessionStorage.goalieGoal == undefined) || (sessionStorage.goalieGoal > 1)) {
    if ((sessionStorage.position > 1) && (sessionStorage.position < 9)) {
      sessionStorage.scorer = (((sessionStorage.position == 7) || (sessionStorage.position == 8)) ? (sessionStorage.position - 6) : ((sessionStorage.position == 6) ? (sessionStorage.position - 3) : ((sessionStorage.position == 4) ? (+sessionStorage.position + 1) : (sessionStorage.position - 1))));
    }
  }
  if (sessionStorage.position == 1) {
    document.getElementById("puck").style.left = "6.25%";
  }
  else if ((sessionStorage.position == 2) || (sessionStorage.position == 3)) {
    document.getElementById("puck").style.left = "32.5%";
  }
  else if ((sessionStorage.position == 4) || (sessionStorage.position == 5) || (sessionStorage.position == 6)) {
    document.getElementById("puck").style.left = "calc(50% - .5em)";
  }
  else if ((sessionStorage.position == 7) || (sessionStorage.position == 8)) {
    document.getElementById("puck").style.left = "66%";
  }
  else if (sessionStorage.position == 9) {
    document.getElementById("puck").style.left = "92.25%";
  }
  if ((sessionStorage.position == 1) || (sessionStorage.position == 9)) {
    document.getElementById("puck").style.top = "42%";
  }
  else if ((sessionStorage.position == 2) || (sessionStorage.position == 7)) {
    document.getElementById("puck").style.top = "27%";
  }
  else if ((sessionStorage.position == 3) || (sessionStorage.position == 8)) {
    document.getElementById("puck").style.top = "77%";
  }
  else if (sessionStorage.position == 4) {
    document.getElementById("puck").style.top = "15%";
  }
  else if (sessionStorage.position == 5) {
    document.getElementById("puck").style.top = "52%";
  }
  else if (sessionStorage.position == 6) {
    document.getElementById("puck").style.top = "90%";
  }
}

function sequence(order) {
  sessionStorage.order = order;
  if (sessionStorage.order == 1) {
    puck(4);
    setTimeout(puck.bind(null, 3), 750);
    setTimeout(puck.bind(null, 6), 1500);
    setTimeout(puck.bind(null, 2), 2250);
  }
  else if (sessionStorage.order == 2) {
    puck(6);
    setTimeout(puck.bind(null, 2), 750);
    setTimeout(puck.bind(null, 4), 1500);
    setTimeout(puck.bind(null, 3), 2250);
  }
  else if (sessionStorage.order == 3) {
    puck(2);
    setTimeout(puck.bind(null, 6), 750);
    setTimeout(puck.bind(null, 3), 1500);
    setTimeout(puck.bind(null, 4), 2250);
  }
  else if (sessionStorage.order == 4) {
    puck(3);
    setTimeout(puck.bind(null, 4), 750);
    setTimeout(puck.bind(null, 2), 1500);
    setTimeout(puck.bind(null, 6), 2250);
  }
  document.getElementById("puck").style.transition = "all .5s ease 0s";
}

function gamePlay() {
  var disableClassLists = [
    "(j == 17) && ((sessionStorage.period > 1) || (sessionStorage.period == \"OT\"))",
    "(j == 53) && (sessionStorage.period == 3)"
  ];
  var disableStyles = [
    "(j == 17) && ((sessionStorage.period > 1) || (sessionStorage.period == \"OT\"))",
    "(j == 53) && (sessionStorage.period == 3)"
  ];
  disableCheers(disableClassLists, disableStyles);
  sessionStorage.turns = Math.ceil(Math.random() * 4);
  sessionStorage.action = 0;
  action();
  sessionStorage.functionPrime = "action";
}

function action() {
  var disableClassLists = [
    "(j == 0) && (sessionStorage.tijuana == 0)",
    "(j == 2) && ((sessionStorage.action > 1) && (sessionStorage.goal == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\")))",
    "(j == 5) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 8) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 12) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 14) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.sluTimeout == 2))",
    "(j == 19) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 20) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 21) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 23) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.sluTimeout != \"ejection\"))",
    "(j == 25) && ((sessionStorage.action > 1) && (sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 26) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 35) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 36) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 38) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 44) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 45) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 46) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 47) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 48) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 54) && ((sessionStorage.penalty == 2) && (sessionStorage.team == 2))",
    "(j == 56) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 57) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.offence == 12) && (sessionStorage.gender == 1))",
    "(j == 58) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 59) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))"
  ];
  var disableStyles = [
    "(j == 0) && (sessionStorage.tijuana == 0)",
    "(j == 2) && ((sessionStorage.action > 1) && (sessionStorage.goal == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\")))",
    "(j == 4) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 5) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 8) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 12) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 14) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.sluTimeout == 2))",
    "(j == 19) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 20) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 21) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 23) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.sluTimeout != \"ejection\"))",
    "(j == 25) && ((sessionStorage.action > 1) && (sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 26) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 35) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 36) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 38) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 44) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 45) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 46) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 47) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 48) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 54) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2))",
    "(j == 56) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 57) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.offence == 12) && (sessionStorage.gender == 1))",
    "(j == 58) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))",
    "(j == 59) && ((sessionStorage.action > 1) && (sessionStorage.goal == 1))"
  ];
  disableCheers(disableClassLists, disableStyles);
  sessionStorage.penalty = Math.ceil(Math.random() * 10);
  if ((sessionStorage.penalty == 1) && ((sessionStorage.clarksonTimeout == 0) || (sessionStorage.sluTimeout == 0))) {
    penalty();
  }
  else {
    disableButton();
    sessionStorage.action++;
    if (sessionStorage.action == sessionStorage.turns) {
      sessionStorage.removeItem("functionPrime");
    }
    if ((sessionStorage.clarksonTimeout == 0) && ((sessionStorage.sluTimeout > 0) || (sessionStorage.sluTimeout == "ejection"))) {
      sessionStorage.goal = Math.ceil(Math.random() * 3);
      if (sessionStorage.goal < 3) {
        sessionStorage.goal = 1;
      }
      else if (sessionStorage.goal == 3) {
        sessionStorage.goal = 2;
      }
    }
    else if (((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == "ejection")) && (sessionStorage.sluTimeout == 0)) {
      sessionStorage.goal = Math.ceil(Math.random() * 3);
      if (sessionStorage.goal == 1) {
        sessionStorage.goal = 1;
      }
      else if (sessionStorage.goal > 1) {
        sessionStorage.goal = 2;
      }
    }
    else {
      sessionStorage.goal = Math.ceil(Math.random() * 2);
    }
    sessionStorage.goalieGoal = Math.ceil(Math.random() * 100);
    if (sessionStorage.goalieGoal > 1) {
      sessionStorage.block = Math.ceil(Math.random() * 5);
    }
    if (sessionStorage.goal == 1) {
      if (((sessionStorage.clarksonScore == 0) || ((sessionStorage.clarksonScore == 4) && (sessionStorage.sluScore == 0)) || (sessionStorage.clarksonScore == 9)) && (sessionStorage.block != 1)) {
        if ((sessionStorage.clarksonScore == 0) || (sessionStorage.clarksonScore == 9)) {
          sessionStorage.songPrime = 69;
        }
        else if ((sessionStorage.clarksonScore == 4) && (sessionStorage.sluScore == 0)) {
          sessionStorage.songPrime = 20;
        }
        document.getElementById("ok").onclick = function() {
          openSelection();
          compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
        };
      }
      else {
        newFunction();
      }
    }
    else if (sessionStorage.goal == 2) {
      if ((sessionStorage.sluScore == 0) && (sessionStorage.block != 1)) {
        sessionStorage.songPrime = 32;
        document.getElementById("ok").onclick = function() {
          openSelection();
          compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
        };
      }
      else {
        newFunction();
      }
    }
    goal();
  }
}

function goal() {
  if ((sessionStorage.block == 1) && (sessionStorage.goalieGoal > 1)) {
    block();
  }
  else {
    if (sessionStorage.goal == 1) {
      sessionStorage.clarksonScore++;
      if (sessionStorage.tijuana > 0) {
        sessionStorage.tijuana--;
      }
      if (sessionStorage.goalieGoal == 1) {
        if (sessionStorage.position == 1) {
          shoot();
          setTimeout(celebrate, 1000);
          if (sessionStorage.clarksonScore == 10) {
            setTimeout(enableButton, 7000);
          }
          else {
            if ((sessionStorage.period == "OT") && (sessionStorage.clarksonScore != 1)) {
              setTimeout(win, 3500);
            }
            else {
              setTimeout(enableButton, 3500);
            }
          }
        }
        else if ((sessionStorage.position == 2) || (sessionStorage.position == 3)) {
          pass();
          setTimeout(pass, 750);
          setTimeout(puck.bind(null, 1), 1250);
          if (sessionStorage.gender == 1) {
            document.getElementById("ethanHaider").style.animation = "block .625s ease 1.6875s 1 forwards";
            setTimeout(() => (
              document.getElementById("ethanHaider").style.animation = "none"
            ), 2312.5);
          }
          else if (sessionStorage.gender == 2) {
            document.getElementById("michellePasiechnyk").style.animation = "block .625s ease 1.6875s 1 forwards";
            setTimeout(() => (
              document.getElementById("michellePasiechnyk").style.animation = "none"
            ), 2312.5);
          }
          setTimeout(shoot, 2000);
          setTimeout(celebrate, 3000);
          if (sessionStorage.clarksonScore == 10) {
            setTimeout(enableButton, 9000);
          }
          else {
            if ((sessionStorage.period == "OT") && (sessionStorage.clarksonScore != 1)) {
              setTimeout(win, 5500);
            }
            else {
              setTimeout(enableButton, 5500);
            }
          }
        }
        else if ((sessionStorage.position >= 4) && (sessionStorage.position <= 8)) {
          pass();
          setTimeout(puck.bind(null, 1), 500);
          if (sessionStorage.gender == 1) {
            document.getElementById("ethanHaider").style.animation = "block .625s ease .9375s 1 forwards";
            setTimeout(() => (
              document.getElementById("ethanHaider").style.animation = "none"
            ), 1562.5);
          }
          else if (sessionStorage.gender == 2) {
            document.getElementById("michellePasiechnyk").style.animation = "block .625s ease .9375s 1 forwards";
            setTimeout(() => (
              document.getElementById("michellePasiechnyk").style.animation = "none"
            ), 1562.5);
          }
          setTimeout(shoot, 1250);
          setTimeout(celebrate, 2250);
          if (sessionStorage.clarksonScore == 10) {
            setTimeout(enableButton, 8250);
          }
          else {
            if ((sessionStorage.period == "OT") && (sessionStorage.clarksonScore != 1)) {
              setTimeout(win, 4750);
            }
            else {
              setTimeout(enableButton, 4750);
            }
          }
        }
        else if (((sessionStorage.clarksonCage != undefined) && (((sessionStorage.position == 4) && ((sessionStorage.clarksonCage - sessionStorage.position) == 1)) || ((sessionStorage.position == 6) && ((sessionStorage.position - sessionStorage.clarksonCage) == 3)) || (((sessionStorage.position != 4) && (sessionStorage.position != 6)) && ((sessionStorage.position - sessionStorage.clarksonCage) == 1)))) || (sessionStorage.position == 9)) {
          puckFadeOut();
          setTimeout(move, 250);
          setTimeout(puckFadeIn, 500);
          setTimeout(pass, 750);
          setTimeout(puck.bind(null, 1), 1250);
          if (sessionStorage.gender == 1) {
            document.getElementById("ethanHaider").style.animation = "block .625s ease 1.6875s 1 forwards";
            setTimeout(() => (
              document.getElementById("ethanHaider").style.animation = "none"
            ), 2312.5);
          }
          else if (sessionStorage.gender == 2) {
            document.getElementById("michellePasiechnyk").style.animation = "block .625s ease 1.6875s 1 forwards";
            setTimeout(() => (
              document.getElementById("michellePasiechnyk").style.animation = "none"
            ), 2312.5);
          }
          setTimeout(shoot, 2000);
          setTimeout(celebrate, 3000);
          if (sessionStorage.clarksonScore == 10) {
            setTimeout(enableButton, 9000);
          }
          else {
            if ((sessionStorage.period == "OT") && (sessionStorage.clarksonScore != 1)) {
              setTimeout(win, 5500);
            }
            else {
              setTimeout(enableButton, 5500);
            }
          }
        }
      }
      else if (sessionStorage.goalieGoal > 1) {
        if ((sessionStorage.position == 1) || ((sessionStorage.clarksonCage != undefined) && (((sessionStorage.position == 4) && ((sessionStorage.clarksonCage - sessionStorage.position) == 1)) || ((sessionStorage.position == 6) && ((sessionStorage.position - sessionStorage.clarksonCage) == 3)) || (((sessionStorage.position != 4) && (sessionStorage.position != 6)) && ((sessionStorage.position - sessionStorage.clarksonCage) == 1)))) || (sessionStorage.position == 9)) {
          puckFadeOut();
          setTimeout(move, 250);
          setTimeout(puckFadeIn, 500);
          setTimeout(pass, 750);
          setTimeout(shoot, 1250);
          setTimeout(celebrate, 2250);
          if (sessionStorage.clarksonScore == 10) {
            setTimeout(enableButton, 8250);
          }
          else {
            if ((sessionStorage.period == "OT") && (sessionStorage.clarksonScore != 1)) {
              setTimeout(win, 4750);
            }
            else {
              setTimeout(enableButton, 4750);
            }
          }
        }
        else if ((sessionStorage.position >= 2) && (sessionStorage.position <= 6)) {
          pass();
          setTimeout(shoot, 500);
          setTimeout(celebrate, 1500);
          if (sessionStorage.clarksonScore == 10) {
            setTimeout(enableButton, 7500);
          }
          else {
            if ((sessionStorage.period == "OT") && (sessionStorage.clarksonScore != 1)) {
              setTimeout(win, 4000);
            }
            else {
              setTimeout(enableButton, 4000);
            }
          }
        }
        else if ((sessionStorage.position == 7) || (sessionStorage.position == 8)) {
          pass();
          setTimeout(pass, 750);
          setTimeout(shoot, 1250);
          setTimeout(celebrate, 1250);
          if (sessionStorage.clarksonScore == 10) {
            setTimeout(enableButton, 7250);
          }
          else {
            if ((sessionStorage.period == "OT") && (sessionStorage.clarksonScore != 1)) {
              setTimeout(win, 3750);
            }
            else {
              setTimeout(enableButton, 3750);
            }
          }
        }
      }
    }
    else if (sessionStorage.goal == 2) {
      sessionStorage.sluScore++;
      if (sessionStorage.goalieGoal == 1) {
        if ((sessionStorage.position >= 2) && (sessionStorage.position <= 6)) {
          pass();
          setTimeout(puck.bind(null, 9), 500);
          if (sessionStorage.gender == 1) {
            document.getElementById("danielAllin").style.animation = "block .625s ease .9375s 1 forwards";
            setTimeout(() => (
              document.getElementById("danielAllin").style.animation = "none"
            ), 1562.5);
          }
          else if (sessionStorage.gender == 2) {
            document.getElementById("hopeCrisafi").style.animation = "block .625s ease .9375s 1 forwards";
            setTimeout(() => (
              document.getElementById("hopeCrisafi").style.animation = "none"
            ), 1562.5);
          }
          setTimeout(shoot, 1250);
          setTimeout(celebrate, 2250);
          if ((sessionStorage.period == "OT") && (sessionStorage.sluScore != 1)) {
            setTimeout(lose, 5250);
          }
          else {
            setTimeout(enableButton, 5250);
          }
        }
        else if ((sessionStorage.position == 1) || ((sessionStorage.clarksonCage != undefined) && (((sessionStorage.position == 4) && ((sessionStorage.clarksonCage - sessionStorage.position) == 1)) || ((sessionStorage.position == 6) && ((sessionStorage.position - sessionStorage.clarksonCage) == 3)) || (((sessionStorage.position != 4) && (sessionStorage.position != 6)) && ((sessionStorage.position - sessionStorage.clarksonCage) == 1))))) {
          puckFadeOut();
          setTimeout(move, 250);
          setTimeout(puckFadeIn, 500);
          setTimeout(pass, 750);
          setTimeout(puck.bind(null, 9), 1250);
          if (sessionStorage.gender == 1) {
            document.getElementById("danielAllin").style.animation = "block .625s ease 1.6875s 1 forwards";
            setTimeout(() => (
              document.getElementById("danielAllin").style.animation = "none"
            ), 2312.5);
          }
          else if (sessionStorage.gender == 2) {
            document.getElementById("hopeCrisafi").style.animation = "block .625s ease 1.6875s 1 forwards";
            setTimeout(() => (
              document.getElementById("hopeCrisafi").style.animation = "none"
            ), 2312.5);
          }
          setTimeout(shoot, 2000);
          setTimeout(celebrate, 3000);
          if ((sessionStorage.period == "OT") && (sessionStorage.sluScore != 1)) {
            setTimeout(lose, 6000);
          }
          else {
            setTimeout(enableButton, 6000);
          }
        }
        else if ((sessionStorage.position == 7) || (sessionStorage.position == 8)) {
          pass();
          setTimeout(pass, 750);
          setTimeout(puck.bind(null, 9), 1250);
          if (sessionStorage.gender == 1) {
            document.getElementById("danielAllin").style.animation = "block .625s ease 1.6875s 1 forwards";
            setTimeout(() => (
              document.getElementById("danielAllin").style.animation = "none"
            ), 2312.5);
          }
          else if (sessionStorage.gender == 2) {
            document.getElementById("hopeCrisafi").style.animation = "block .625s ease 1.6875s 1 forwards";
            setTimeout(() => (
              document.getElementById("hopeCrisafi").style.animation = "none"
            ), 2312.5);
          }
          setTimeout(shoot, 2000);
          setTimeout(celebrate, 3000);
          if ((sessionStorage.period == "OT") && (sessionStorage.sluScore != 1)) {
            setTimeout(lose, 6000);
          }
          else {
            setTimeout(enableButton, 6000);
          }
        }
        else if (sessionStorage.position == 9) {
          shoot();
          setTimeout(celebrate, 1000);
          if ((sessionStorage.period == "OT") && (sessionStorage.sluScore != 1)) {
            setTimeout(lose, 4000);
          }
          else {
            setTimeout(enableButton, 4000);
          }
        }
      }
      else if (sessionStorage.goalieGoal > 1) {
        if ((sessionStorage.position == 1) || ((sessionStorage.sluCage != undefined) && (((sessionStorage.position == 4) && ((sessionStorage.sluCage - sessionStorage.position) == 6)) || ((sessionStorage.position == 5) && ((sessionStorage.sluCage - sessionStorage.position) == 4)) || ((sessionStorage.position == 6) && ((sessionStorage.sluCage - sessionStorage.position) == 2)) || (((sessionStorage.position > 6) && (sessionStorage.position <= 8)) && ((sessionStorage.position - sessionStorage.sluCage) == 1)))) || (sessionStorage.position == 9)) {
          puckFadeOut();
          setTimeout(move, 250);
          setTimeout(puckFadeIn, 500);
          setTimeout(pass, 750);
          setTimeout(shoot, 1250);
          setTimeout(celebrate, 2250);
          if ((sessionStorage.period == "OT") && (sessionStorage.sluScore != 1)) {
            setTimeout(lose, 5250);
          }
          else {
            setTimeout(enableButton, 5250);
          }
        }
        else if ((sessionStorage.position == 2) || (sessionStorage.position == 3)) {
          pass();
          setTimeout(pass, 750);
          setTimeout(shoot, 1250);
          setTimeout(celebrate, 2250);
          if ((sessionStorage.period == "OT") && (sessionStorage.sluScore != 1)) {
            setTimeout(lose, 5250);
          }
          else {
            setTimeout(enableButton, 5250);
          }
        }
        else if ((sessionStorage.position >= 4) && (sessionStorage.position <= 8)) {
          pass();
          setTimeout(shoot, 500);
          setTimeout(celebrate, 1500);
          if ((sessionStorage.period == "OT") && (sessionStorage.sluScore != 1)) {
            setTimeout(lose, 4500);
          }
          else {
            setTimeout(enableButton, 4500);
          }
        }
      }
    }
  }
}

function puckFadeOut() {
  document.getElementById("puck").style.visibility = "hidden";
  document.getElementById("puck").style.opacity = "0%";
  document.getElementById("puck").style.transition = "all .25s ease 0s";
}

function puckFadeIn() {
  document.getElementById("puck").style.visibility = "visible";
  document.getElementById("puck").style.opacity = "100%";
  document.getElementById("puck").style.transition = "all .25s ease 0s";
}

function move() {
  const shuffle = () => {
    var collection = [];
    for (var i = 1; i <= 5; i++) {
      if (sessionStorage.gender == 1) {
        if (sessionStorage.goal == 1) {
          var occurrences = (((globalThis.players).men.clarkson[i].goals.season - (globalThis.players).men.clarkson[i].goals.game) * ((globalThis.players).men.clarkson[i].goals.game + 1));
        }
        else if (sessionStorage.goal == 2) {
          var occurrences = (((globalThis.players).men.slu[i].goals.season - (globalThis.players).men.slu[i].goals.game) * ((globalThis.players).men.slu[i].goals.game + 1));
        }
      }
      else if (sessionStorage.gender == 2) {
        if (sessionStorage.goal == 1) {
          var occurrences = (((globalThis.players).women.clarkson[i].goals.season - (globalThis.players).women.clarkson[i].goals.game) * ((globalThis.players).women.clarkson[i].goals.game + 1));
        }
        else if (sessionStorage.goal == 2) {
          var occurrences = (((globalThis.players).women.slu[i].goals.season - (globalThis.players).women.slu[i].goals.game) * ((globalThis.players).women.slu[i].goals.game + 1));
        }
      }
      for (var j = 0; j < occurrences; j++) {
        collection.push(i);
      }
    }
    var move = Math.floor(Math.random() * collection.length);
    return collection[move];
  }
  sessionStorage.newMove = shuffle();
  if (sessionStorage.goal == 1) {
    while ((sessionStorage.newMove == sessionStorage.scorer) || ((sessionStorage.oldMove != undefined) && (sessionStorage.newMove == sessionStorage.oldMove)) || ((sessionStorage.oldPass != undefined) && (sessionStorage.newMove == sessionStorage.oldPass)) || ((sessionStorage.clarksonCage != undefined) && (sessionStorage.newMove == sessionStorage.clarksonCage))) {
      sessionStorage.newMove++;
      if (sessionStorage.newMove > 5) {
        sessionStorage.newMove = 1;
      }
    }
    eval("puck(" + ((sessionStorage.newMove == 3) ? (+sessionStorage.newMove + 3) : ((sessionStorage.newMove == 5) ? (sessionStorage.newMove - 1) : (+sessionStorage.newMove + 1))) + ")");
  }
  else if (sessionStorage.goal == 2) {
    while ((sessionStorage.newMove == sessionStorage.scorer) || ((sessionStorage.oldMove != undefined) && (sessionStorage.newMove == sessionStorage.oldMove)) || ((sessionStorage.oldPass != undefined) && (sessionStorage.newMove == sessionStorage.oldPass)) || ((sessionStorage.sluCage != undefined) && ((+sessionStorage.newMove + 5) == sessionStorage.sluCage))) {
      sessionStorage.newMove++;
      if (sessionStorage.newMove > 5) {
        sessionStorage.newMove = 1;
      }
    }
    eval("puck(" + ((sessionStorage.newMove == 1) ? (+sessionStorage.newMove + 6) : ((sessionStorage.newMove == 2) ? (+sessionStorage.newMove + 4) : ((sessionStorage.newMove == 3) ? (+sessionStorage.newMove + 3) : ((sessionStorage.newMove == 4) ? (+sessionStorage.newMove + 1) : (sessionStorage.newMove - 1))))) + ")");
  }
  document.getElementById("puck").style.transition = "all .25s ease 0s";
  sessionStorage.oldMove = sessionStorage.newMove;
}

function pass() {
  const shuffle = () => {
    var collection = [];
    for (var i = 1; i <= 5; i++) {
      if (sessionStorage.gender == 1) {
        if (sessionStorage.goal == 1) {
          var occurrences = (((globalThis.players).men.clarkson[i].goals.season - (globalThis.players).men.clarkson[i].goals.game) * ((globalThis.players).men.clarkson[i].goals.game + 1));
        }
        else if (sessionStorage.goal == 2) {
          var occurrences = (((globalThis.players).men.slu[i].goals.season - (globalThis.players).men.slu[i].goals.game) * ((globalThis.players).men.slu[i].goals.game + 1));
        }
      }
      else if (sessionStorage.gender == 2) {
        if (sessionStorage.goal == 1) {
          var occurrences = (((globalThis.players).women.clarkson[i].goals.season - (globalThis.players).women.clarkson[i].goals.game) * ((globalThis.players).women.clarkson[i].goals.game + 1));
        }
        else if (sessionStorage.goal == 2) {
          var occurrences = (((globalThis.players).women.slu[i].goals.season - (globalThis.players).women.slu[i].goals.game) * ((globalThis.players).women.slu[i].goals.game + 1));
        }
      }
      for (var j = 0; j < occurrences; j++) {
        collection.push(i);
      }
    }
    var pass = Math.floor(Math.random() * collection.length);
    return collection[pass];
  }
  sessionStorage.newPass = shuffle();
  if (sessionStorage.goal == 1) {
    while ((sessionStorage.newPass == sessionStorage.scorer) || ((sessionStorage.oldPass != undefined) && (sessionStorage.newPass == sessionStorage.oldPass)) || ((sessionStorage.oldMove != undefined) && (sessionStorage.newPass == sessionStorage.oldMove)) || ((sessionStorage.clarksonCage != undefined) && (sessionStorage.newPass == sessionStorage.clarksonCage))) {
      sessionStorage.newPass++;
      if (sessionStorage.newPass > 5) {
        sessionStorage.newPass = 1;
      }
    }
    sessionStorage.assister = sessionStorage.scorer;
    if (sessionStorage.goalieGoal == 1) {
      eval("puck(" + ((sessionStorage.newPass == 1) ? (+sessionStorage.newPass + 6) : ((sessionStorage.newPass == 2) ? (+sessionStorage.newPass + 4) : ((sessionStorage.newPass == 3) ? (+sessionStorage.newPass + 3) : ((sessionStorage.newPass == 4) ? (+sessionStorage.newPass + 1) : (sessionStorage.newPass - 1))))) + ")");
    }
    else if (sessionStorage.goalieGoal > 1) {
      eval("puck(" + ((sessionStorage.newPass == 3) ? (+sessionStorage.newPass + 3) : ((sessionStorage.newPass == 5) ? (sessionStorage.newPass - 1) : (+sessionStorage.newPass + 1))) + ")");
    }
  }
  else if (sessionStorage.goal == 2) {
    while ((sessionStorage.newPass == sessionStorage.scorer) || ((sessionStorage.oldPass != undefined) && (sessionStorage.newPass == sessionStorage.oldPass)) || ((sessionStorage.oldMove != undefined) && (sessionStorage.newPass == sessionStorage.oldMove)) || ((sessionStorage.sluCage != undefined) && ((+sessionStorage.newPass + 5) == sessionStorage.sluCage))) {
      sessionStorage.newPass++;
      if (sessionStorage.newPass > 5) {
        sessionStorage.newPass = 1;
      }
    }
    sessionStorage.assister = sessionStorage.scorer;
    if (sessionStorage.goalieGoal == 1) {
      eval("puck(" + ((sessionStorage.newPass == 3) ? (+sessionStorage.newPass + 3) : ((sessionStorage.newPass == 5) ? (sessionStorage.newPass - 1) : (+sessionStorage.newPass + 1))) + ")");
    }
    else if (sessionStorage.goalieGoal > 1) {
      eval("puck(" + ((sessionStorage.newPass == 1) ? (+sessionStorage.newPass + 6) : ((sessionStorage.newPass == 2) ? (+sessionStorage.newPass + 4) : ((sessionStorage.newPass == 3) ? (+sessionStorage.newPass + 3) : ((sessionStorage.newPass == 4) ? (+sessionStorage.newPass + 1) : (sessionStorage.newPass - 1))))) + ")");
    }
  }
  if ((sessionStorage.block == 1) && ((sessionStorage.position == 1) || (sessionStorage.position == 9))) {
    document.getElementById("puck").style.transition = "all 1s ease 0s";
  }
  else {
    document.getElementById("puck").style.transition = "all .5s ease 0s";
  }
  sessionStorage.oldPass = sessionStorage.newPass;
}

function shoot() {
  if (sessionStorage.goal == 1) {
    puck(9);
    compileSound("square", ["exponential", 740, 790, 1], ["exponential", .01, .05, 1], 1);
  }
  else if (sessionStorage.goal == 2) {
    puck(1);
    compileSound("square", ["exponential", 740, 690, 1], ["exponential", .01, .05, 1], 1);
  }
  document.getElementById("puck").style.transition = "all 1s ease 0s";
}

function block() {
  if (sessionStorage.goal == 1) {
    if ((sessionStorage.position == 1) || ((sessionStorage.clarksonCage != undefined) && (((sessionStorage.position == 4) && ((sessionStorage.clarksonCage - sessionStorage.position) == 1)) || ((sessionStorage.position == 6) && ((sessionStorage.position - sessionStorage.clarksonCage) == 3)) || (((sessionStorage.position != 4) && (sessionStorage.position != 6)) && ((sessionStorage.position - sessionStorage.clarksonCage) == 1)))) || (sessionStorage.position == 9)) {
      setTimeout(() => (
        document.getElementById("conductorTalk").innerHTML = "Well, I guess even a SLUzer sieve gets lucky sometimes. Doesn't change how ugly " + sessionStorage.goalieName + " is!"
      ), 1500);
      puckFadeOut();
      setTimeout(move, 250);
      setTimeout(puckFadeIn, 500);
      setTimeout(pass, 750);
      setTimeout(shoot, 1250);
      if (sessionStorage.gender == 1) {
        document.getElementById("danielAllin").style.animation = "block .625s ease 1.6875s 1 forwards";
        setTimeout(() => (
          document.getElementById("danielAllin").style.animation = "none"
        ), 2312.5);
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("hopeCrisafi").style.animation = "block .625s ease 1.6875s 1 forwards";
        setTimeout(() => (
          document.getElementById("hopeCrisafi").style.animation = "none"
        ), 2312.5);
      }
      setTimeout(pass, 2000);
      setTimeout(enableButton, 3000);
    }
    else if ((sessionStorage.position >= 2) && (sessionStorage.position <= 6)) {
      setTimeout(() => (
        document.getElementById("conductorTalk").innerHTML = "Well, I guess even a SLUzer sieve gets lucky sometimes. Doesn't change how ugly " + sessionStorage.goalieName + " is!"
      ), 750);
      pass();
      setTimeout(shoot, 500);
      if (sessionStorage.gender == 1) {
        document.getElementById("danielAllin").style.animation = "block .625s ease .9375s 1 forwards";
        setTimeout(() => (
          document.getElementById("danielAllin").style.animation = "none"
        ), 1562.5);
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("hopeCrisafi").style.animation = "block .625s ease .9375s 1 forwards";
        setTimeout(() => (
          document.getElementById("hopeCrisafi").style.animation = "none"
        ), 1562.5);
      }
      setTimeout(pass, 1250);
      setTimeout(enableButton, 2250);
    }
    else if ((sessionStorage.position == 7) || (sessionStorage.position == 8)) {
      setTimeout(() => (
        document.getElementById("conductorTalk").innerHTML = "Well, I guess even a SLUzer sieve gets lucky sometimes. Doesn't change how ugly " + sessionStorage.goalieName + " is!"
      ), 1500);
      pass();
      setTimeout(pass, 750);
      setTimeout(shoot, 1250);
      if (sessionStorage.gender == 1) {
        document.getElementById("danielAllin").style.animation = "block .625s ease 1.6875s 1 forwards";
        setTimeout(() => (
          document.getElementById("danielAllin").style.animation = "none"
        ), 2312.5);
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("hopeCrisafi").style.animation = "block .625s ease 1.6875s 1 forwards";
        setTimeout(() => (
          document.getElementById("hopeCrisafi").style.animation = "none"
        ), 2312.5);
      }
      setTimeout(pass, 2000);
      setTimeout(enableButton, 3000);
    }
    var enableClassLists = [
      "j == 44"
    ];
    var enableStyles = [
      "j == 44"
    ];
    enableCheers(enableClassLists, enableStyles);
  }
  else if (sessionStorage.goal == 2) {
    if ((sessionStorage.position == 1) || ((sessionStorage.sluCage != undefined) && (((sessionStorage.position == 4) && ((sessionStorage.sluCage - sessionStorage.position) == 6)) || ((sessionStorage.position == 5) && ((sessionStorage.sluCage - sessionStorage.position) == 4)) || ((sessionStorage.position == 6) && ((sessionStorage.sluCage - sessionStorage.position) == 2)) || (((sessionStorage.position > 6) && (sessionStorage.position <= 8)) && ((sessionStorage.position - sessionStorage.sluCage) == 1)))) || (sessionStorage.position == 9)) {
      setTimeout(() => (
        document.getElementById("conductorTalk").innerHTML = "That's our goalie! SLU hasn't got anything on us!"
      ), 1500);
      puckFadeOut();
      setTimeout(move, 250);
      setTimeout(puckFadeIn, 500);
      setTimeout(pass, 750);
      setTimeout(shoot, 1250);
      if (sessionStorage.gender == 1) {
        document.getElementById("ethanHaider").style.animation = "block .625s ease 1.6875s 1 forwards";
        setTimeout(() => (
          document.getElementById("ethanHaider").style.animation = "none"
        ), 2312.5);
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("michellePasiechnyk").style.animation = "block .625s ease 1.6875s 1 forwards";
        setTimeout(() => (
          document.getElementById("michellePasiechnyk").style.animation = "none"
        ), 2312.5);
      }
      setTimeout(pass, 2000);
      setTimeout(enableButton, 3000);
    }
    else if ((sessionStorage.position == 2) || (sessionStorage.position == 3)) {
      setTimeout(() => (
        document.getElementById("conductorTalk").innerHTML = "That's our goalie! SLU hasn't got anything on us!"
      ), 1500);
      pass();
      setTimeout(pass, 750);
      setTimeout(shoot, 1250);
      if (sessionStorage.gender == 1) {
        document.getElementById("ethanHaider").style.animation = "block .625s ease 1.6875s 1 forwards";
        setTimeout(() => (
          document.getElementById("ethanHaider").style.animation = "none"
        ), 2312.5);
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("michellePasiechnyk").style.animation = "block .625s ease 1.6875s 1 forwards";
        setTimeout(() => (
          document.getElementById("michellePasiechnyk").style.animation = "none"
        ), 2312.5);
      }
      setTimeout(pass, 2000);
      setTimeout(enableButton, 3000);
    }
    else if ((sessionStorage.position >= 4) && (sessionStorage.position <= 8)) {
      setTimeout(() => (
        document.getElementById("conductorTalk").innerHTML = "That's our goalie! SLU hasn't got anything on us!"
      ), 750);
      pass();
      setTimeout(shoot, 500);
      if (sessionStorage.gender == 1) {
        document.getElementById("ethanHaider").style.animation = "block .625s ease .9375s 1 forwards";
        setTimeout(() => (
          document.getElementById("ethanHaider").style.animation = "none"
        ), 1562.5);
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("michellePasiechnyk").style.animation = "block .625s ease .9375s 1 forwards";
        setTimeout(() => (
          document.getElementById("michellePasiechnyk").style.animation = "none"
        ), 1562.5);
      }
      setTimeout(pass, 1250);
      setTimeout(enableButton, 2250);
    }
    var enableClassLists = [
      "j == 25"
    ];
    var enableStyles = [
      "j == 25"
    ];
    enableCheers(enableClassLists, enableStyles);
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  if ((sessionStorage.clarksonTimeout > 0) && (sessionStorage.clarksonTimeout != "ejection")) {
    sessionStorage.clarksonTimeout--;
    if (sessionStorage.clarksonTimeout == 0) {
      var disableClassLists = [
        "j == 10"
      ];
      var disableStyles = [
        "j == 10"
      ];
      disableCheers(disableClassLists, disableStyles);
      document.getElementById("offenderName").innerHTML = "our Golden Knights";
      document.getElementById("cage" + sessionStorage.clarksonCage).style.visibility = "hidden";
      document.getElementById("cage" + sessionStorage.clarksonCage).style.opacity = "0%";
      document.getElementById("cage" + sessionStorage.clarksonCage).style.transition = "all .25s ease 0s";
      sessionStorage.removeItem("clarksonCage");
    }
  }
  if ((sessionStorage.sluTimeout > 0) && (sessionStorage.sluTimeout != "ejection")) {
    sessionStorage.sluTimeout--;
    if (sessionStorage.sluTimeout == 0) {
      document.getElementById("cage" + sessionStorage.sluCage).style.visibility = "hidden";
      document.getElementById("cage" + sessionStorage.sluCage).style.opacity = "0%";
      document.getElementById("cage" + sessionStorage.sluCage).style.transition = "all .25s ease 0s";
      sessionStorage.removeItem("sluCage");
    }
  }
}

function celebrate() {
  const numToWord = new function() {
    this.setValue = function(x) {
      this.value = x;
    }
    this.getValue = function() {
      var num = {
        1: "first",
        2: "second",
        3: "third",
        4: "fourth",
        5: "fifth",
        6: "sixth",
        7: "seventh",
        8: "eighth",
        9: "ninth",
        10: "tenth",
        11: "eleventh",
        12: "twelfth",
        13: "thirteenth",
        14: "fourteenth",
        15: "fifteenth",
        16: "sixteenth",
        17: "seventeenth",
        18: "eighteenth",
        19: "nineteenth",
        20: "twentieth",
      };
      var word = String(this.value).replace(/1\b|2\b|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20/gsm, function(x) {
        return num[x];
      });
      return word;
    }
  }
  if (sessionStorage.goal == 1) {
    if (sessionStorage.gender == 1) {
      if ((sessionStorage.goalieGoal == 1) && (((globalThis.players).men.clarkson[sessionStorage.scorer].goals.season == null) && ((globalThis.players).men.clarkson[sessionStorage.scorer].goals.game == null))) {
        (globalThis.players).men.clarkson[sessionStorage.scorer].goals.season = 1;
        (globalThis.players).men.clarkson[sessionStorage.scorer].goals.game = 1;
      }
      else {
        (globalThis.players).men.clarkson[sessionStorage.scorer].goals.season++;
        (globalThis.players).men.clarkson[sessionStorage.scorer].goals.game++;
      }
    }
    else if (sessionStorage.gender == 2) {
      if ((sessionStorage.goalieGoal == 1) && (((globalThis.players).women.clarkson[sessionStorage.scorer].goals.season == null) && ((globalThis.players).women.clarkson[sessionStorage.scorer].goals.game == null))) {
        (globalThis.players).women.clarkson[sessionStorage.scorer].goals.season = 1;
        (globalThis.players).women.clarkson[sessionStorage.scorer].goals.game = 1;
      }
      else {
        (globalThis.players).women.clarkson[sessionStorage.scorer].goals.season++;
        (globalThis.players).women.clarkson[sessionStorage.scorer].goals.game++;
      }
    }
    if (sessionStorage.clarksonScore < 10) {
      if ((sessionStorage.period != "OT") || (sessionStorage.clarksonScore == 1)) {
        if (sessionStorage.goalieGoal == 1) {
          if (sessionStorage.gender == 1) {
            document.getElementById("conductorTalk").innerHTML = "Let's fucking go! It's a goalie goal scored by our very own <strong>number 47</strong>, <span class=\"playerInline clarksonPlayerInline menPlayerInline clarksonMenPlayerInline goalieInline clarksonScorer menScorer clarksonMenScorer goalieScorer\" id=\"scorer\"><strong>Ethan Haider</strong></span>!";
          }
          else if (sessionStorage.gender == 2) {
            document.getElementById("conductorTalk").innerHTML = "Let's fucking go! It's a goalie goal scored by our very own <strong>number 30</strong>, <span class=\"playerInline clarksonPlayerInline womenPlayerInline clarksonWomenPlayerInline goalieInline clarksonScorer womenScorer clarksonWomenScorer goalieScorer\" id=\"scorer\"><strong>Michelle Pasiechnyk!</strong></span>!";
          }
        }
        else if (sessionStorage.goalieGoal > 1) {
          if (sessionStorage.gender == 1) {
            numToWord.setValue((globalThis.players).men.clarkson[sessionStorage.scorer].goals.season);
            sessionStorage.season = numToWord.getValue();
            numToWord.setValue((globalThis.players).men.clarkson[sessionStorage.scorer].goals.game);
            sessionStorage.game = numToWord.getValue();
            document.getElementById("conductorTalk").innerHTML = "Woohoo, it's a <strong>Golden Knight goal</strong>! For his " + sessionStorage.season + " of the season and " + sessionStorage.game + " of the game, scored by <strong>number " + (globalThis.players).men.clarkson[sessionStorage.scorer].number + "</strong>, <span class=\"playerInline clarksonPlayerInline menPlayerInline clarksonMenPlayerInline clarksonScorer menScorer clarksonMenScorer\" id=\"scorer\"><strong>" + (globalThis.players).men.clarkson[sessionStorage.scorer].name + "</strong></span>! Assisted by <strong>number " + (globalThis.players).men.clarkson[sessionStorage.assister].number + "</strong>, <span class=\"playerInline clarksonPlayerInline menPlayerInline clarksonMenPlayerInline clarksonAssister menAssister clarksonMenAssister\" id=\"assister\"><strong>" + (globalThis.players).men.clarkson[sessionStorage.assister].name + "</strong></span>!";
          }
          else if (sessionStorage.gender == 2) {
            numToWord.setValue((globalThis.players).women.clarkson[sessionStorage.scorer].goals.season);
            sessionStorage.season = numToWord.getValue();
            numToWord.setValue((globalThis.players).women.clarkson[sessionStorage.scorer].goals.game);
            sessionStorage.game = numToWord.getValue();
            document.getElementById("conductorTalk").innerHTML = "Woohoo, it's a <strong>Golden Knight goal</strong>! For her " + sessionStorage.season + " of the season and " + sessionStorage.game + " of the game, scored by <strong>number " + (globalThis.players).women.clarkson[sessionStorage.scorer].number + "</strong>, <span class=\"playerInline clarksonPlayerInline womenPlayerInline clarksonWomenPlayerInline clarksonScorer womenScorer clarksonWomenScorer\" id=\"scorer\"><strong>" + (globalThis.players).women.clarkson[sessionStorage.scorer].name + "</strong></span>! Assisted by <strong>number " + (globalThis.players).women.clarkson[sessionStorage.assister].number + "</strong>, <span class=\"playerInline clarksonPlayerInline womenPlayerInline clarksonWomenPlayerInline clarksonAssister womenAssister clarksonWomenAssister\" id=\"assister\"><strong>" + (globalThis.players).women.clarkson[sessionStorage.assister].name + "</strong></span>!";
          }
        }
      }
      document.getElementById("clarksonGoalMessage").style.animation = "clarksonGoalMessage 2.5s ease 0s 1 forwards";
      setTimeout(() => (
        document.getElementById("clarksonGoalMessage").style.animation = "none"
      ), 2500);
    }
    else if (sessionStorage.clarksonScore == 10) {
      tijuana();
    }
    document.getElementById("scoreboardClarksonScore").innerHTML = sessionStorage.clarksonScore;
    document.getElementById("cheerMessage1").innerHTML = "<span id=\"goals\">" + sessionStorage.tijuana + "</span> more " + ((sessionStorage.tijuana == 1) ? ("goal!") : ("goals!"));
    var enableClassLists = [
      "j == 8",
      "j == 21",
      "j == 35",
      "j == 36",
      "(j == 40) && ((sessionStorage.period == 3) && (sessionStorage.clarksonScore > sessionStorage.sluScore))",
      "j == 58",
      "j == 59"
    ];
    var enableStyles = [
      "j == 8",
      "j == 21",
      "j == 35",
      "j == 36",
      "(j == 40) && ((sessionStorage.period == 3) && (sessionStorage.clarksonScore > sessionStorage.sluScore))",
      "j == 58",
      "j == 59"
    ];
    enableCheers(enableClassLists, enableStyles);
    for (var i = 0; i < (sessionStorage.clarksonScore * 8); i++) {
      setTimeout(compileSound.bind(null, "triangle", ["none", 590, null, 0], ["none", 1, null, 0], .1), (i * 100));
    }
  }
  else if (sessionStorage.goal == 2) {
    if (sessionStorage.gender == 1) {
      if ((sessionStorage.goalieGoal == 1) && (((globalThis.players).men.slu[sessionStorage.scorer].goals.season == null) && ((globalThis.players).men.slu[sessionStorage.scorer].goals.game == null))) {
        (globalThis.players).men.slu[sessionStorage.scorer].goals.season = 1;
        (globalThis.players).men.slu[sessionStorage.scorer].goals.game = 1;
      }
      else {
        (globalThis.players).men.slu[sessionStorage.scorer].goals.season++;
        (globalThis.players).men.slu[sessionStorage.scorer].goals.game++;
      }
    }
    else if (sessionStorage.gender == 2) {
      if ((sessionStorage.goalieGoal == 1) && (((globalThis.players).women.slu[sessionStorage.scorer].goals.season == null) && ((globalThis.players).women.slu[sessionStorage.scorer].goals.game == null))) {
        (globalThis.players).women.slu[sessionStorage.scorer].goals.season = 1;
        (globalThis.players).women.slu[sessionStorage.scorer].goals.game = 1;
      }
      else {
        (globalThis.players).women.slu[sessionStorage.scorer].goals.season++;
        (globalThis.players).women.slu[sessionStorage.scorer].goals.game++;
      }
    }
    if ((sessionStorage.period != "OT") || (sessionStorage.sluScore == 1)) {
      if (sessionStorage.goalieGoal == 1) {
        if (sessionStorage.gender == 1) {
          document.getElementById("conductorTalk").innerHTML = "Oh shit! It's a goalie goal scored by the ugly SLU sieve himself, <strong>number 1</strong>, <span class=\"playerInline sluPlayerInline menPlayerInline sluMenPlayerInline goalieInline sluScorer menScorer sluMenScorer goalieScorer\" id=\"scorer\"><strong>Daniel Allin</strong></span>!";
        }
        else if (sessionStorage.gender == 2) {
          document.getElementById("conductorTalk").innerHTML = "Oh shit! It's a goalie goal scored by the slut SLU sieve herself, <strong>number 30</strong>, <span class=\"playerInline sluPlayerInline womenPlayerInline sluWomenPlayerInline goalieInline sluScorer womenScorer sluWomenScorer goalieScorer\" id=\"scorer\"><strong>Hope Crisafi</strong></span>!";
        }
      }
      else if (sessionStorage.goalieGoal > 1) {
        if (sessionStorage.gender == 1) {
          numToWord.setValue((globalThis.players).men.slu[sessionStorage.scorer].goals.season);
          sessionStorage.season = numToWord.getValue();
          numToWord.setValue((globalThis.players).men.slu[sessionStorage.scorer].goals.game);
          sessionStorage.game = numToWord.getValue();
          document.getElementById("conductorTalk").innerHTML = "Oh no, it's a <strong>Saints goal</strong>! For his " + sessionStorage.season + " of the season and " + sessionStorage.game + " of the game, scored by <strong>number " + (globalThis.players).men.slu[sessionStorage.scorer].number + "</strong>, <span class=\"playerInline sluPlayerInline menPlayerInline sluMenPlayerInline sluScorer menScorer sluMenScorer\" id=\"scorer\"><strong>" + (globalThis.players).men.slu[sessionStorage.scorer].name + "</strong></span>! Assisted by <strong>number " + (globalThis.players).men.slu[sessionStorage.assister].number + "</strong>, <span class=\"playerInline sluPlayerInline menPlayerInline sluMenPlayerInline sluAssister menAssister sluMenAssister\" id=\"assister\"><strong>" + (globalThis.players).men.slu[sessionStorage.assister].name + "</strong></span>!";
        }
        else if (sessionStorage.gender == 2) {
          numToWord.setValue((globalThis.players).women.slu[sessionStorage.scorer].goals.season);
          sessionStorage.season = numToWord.getValue();
          numToWord.setValue((globalThis.players).women.slu[sessionStorage.scorer].goals.game);
          sessionStorage.game = numToWord.getValue();
          document.getElementById("conductorTalk").innerHTML = "Oh no, it's a <strong>Saints goal</strong>! For her " + sessionStorage.season + " of the season and " + sessionStorage.game + " of the game, scored by <strong>number " + (globalThis.players).women.slu[sessionStorage.scorer].number + "</strong>, <span class=\"playerInline sluPlayerInline womenPlayerInline sluWomenPlayerInline sluScorer womenScorer sluWomenScorer\" id=\"scorer\"><strong>" + (globalThis.players).women.slu[sessionStorage.scorer].name + "</strong></span>! Assisted by <strong>number " + (globalThis.players).women.slu[sessionStorage.assister].number + "</strong>, <span class=\"playerInline sluPlayerInline womenPlayerInline sluWomenPlayerInline sluAssister womenAssister sluWomenAssister\" id=\"assister\"><strong>" + (globalThis.players).women.slu[sessionStorage.assister].name + "</strong></span>!";
        }
      }
    }
    document.getElementById("sluGoalMessage").style.animation = "sluGoalMessage 3s ease 0s 1 backwards";
    setTimeout(() => (
      document.getElementById("sluGoalMessage").style.animation = "none"
    ), 3000);
    document.getElementById("scoreboardSluScore").innerHTML = sessionStorage.sluScore;
    var disableClassLists = [
      "(j == 22) && (sessionStorage.sluScore == 1)",
      "(j == 40) && ((sessionStorage.period == 3) && (sessionStorage.clarksonScore <= sessionStorage.sluScore))"
    ];
    var disableStyles = [
      "(j == 22) && (sessionStorage.sluScore == 1)",
      "(j == 40) && ((sessionStorage.period == 3) && (sessionStorage.clarksonScore <= sessionStorage.sluScore))"
    ];
    disableCheers(disableClassLists, disableStyles);
    var enableClassLists = [
      "(j == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\"))",
      "j == 56"
    ];
    var enableStyles = [
      "(j == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\"))",
      "j == 56"
    ];
    enableCheers(enableClassLists, enableStyles);
    compileSound("sawtooth", ["exponential", 90, 140, 1], ["exponential", .75, .9, 1], 1);
    setTimeout(compileSound.bind(null, "sawtooth", ["exponential", 140, 40, 1], ["exponential", .9, 1, 1], 1), 1250);
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  if ((sessionStorage.clarksonTimeout > 0) && (sessionStorage.clarksonTimeout != "ejection")) {
    sessionStorage.clarksonTimeout--;
    if (sessionStorage.clarksonTimeout == 0) {
      var disableClassLists = [
        "j == 10"
      ];
      var disableStyles = [
        "j == 10"
      ];
      disableCheers(disableClassLists, disableStyles);
      document.getElementById("offenderName").innerHTML = "our Golden Knights";
      document.getElementById("cage" + sessionStorage.clarksonCage).style.visibility = "hidden";
      document.getElementById("cage" + sessionStorage.clarksonCage).style.opacity = "0%";
      document.getElementById("cage" + sessionStorage.clarksonCage).style.transition = "all .25s ease 0s";
      sessionStorage.removeItem("clarksonCage");
    }
  }
  if ((sessionStorage.sluTimeout > 0) && (sessionStorage.sluTimeout != "ejection")) {
    sessionStorage.sluTimeout--;
    if (sessionStorage.sluTimeout == 0) {
      document.getElementById("cage" + sessionStorage.sluCage).style.visibility = "hidden";
      document.getElementById("cage" + sessionStorage.sluCage).style.opacity = "0%";
      document.getElementById("cage" + sessionStorage.sluCage).style.transition = "all .25s ease 0s";
      sessionStorage.removeItem("sluCage");
    }
  }
}

function tijuana() {
  if (sessionStorage.goalieGoal == 1) {
    if (sessionStorage.gender == 1) {
      document.getElementById("conductorTalk").innerHTML = "Wow, would you look at that, we hit <i>Tijuana</i> with a goalie goal by Ethan Haider! Even by SLU standards, these guys suck! Now let's get ourselves kicked out of Crappleton Arena!";
    }
    else if (sessionStorage.gender == 2) {
      document.getElementById("conductorTalk").innerHTML = "Wow, would you look at that, we hit <i>Tijuana</i> with a goalie goal by Michelle Pasiechnyk! Even by SLU standards, these guys suck! Now let's get ourselves kicked out of Crappleton Arena!";
    }
  }
  else if (sessionStorage.goalieGoal > 1) {
    document.getElementById("conductorTalk").innerHTML = "Wow, would you look at that, we hit <i>Tijuana</i>! Even by SLU standards, these guys suck! Now let's get ourselves kicked out of Crappleton Arena!";
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  for (var i = 0; i < document.getElementsByClassName("plane").length; i++) {
    document.getElementsByClassName("plane")[i].style.left = "100%";
    document.getElementsByClassName("plane")[i].style.transition = "left 3s ease " + i + "s";
  }
  document.getElementById("planePrimeCont").style.left = "100%";
  document.getElementById("planePrimeCont").style.transition = "left 0s ease 5.5s";
  document.getElementById("planePrimeCont").style.animation = "fly 5s linear .5s 1 forwards";
  setTimeout(() => (
    document.getElementById("planePrimeCont").style.animation = "none"
  ), 5500);
  songs[69].title = "<i>Tijuana</i><br>(with lyrics!)";
  console.log("AT THE GANGBANG, OH YES, YOU DO! IT'S BEEN A LONG TIME SINCE SHE'S BEEN SCREWED! WHEN SHE WAS YOUNGER, AND IN HER PRIME, SHE USED TO GANGBANG ALL THE TIMEEE... NOW THAT SHE'S OLDER, AND TURNING GRAY, SHE ONLY GANGBANGS ONCE A DAYYY... KNOCK, KNOCK...");
}

function penalty() {
  const numToWord = new function() {
    this.setValue = function(x) {
      this.value = x;
    }
    this.getValue = function() {
      var num = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten"
      };
      var word = String(this.value).replace(/1\b|2|3|4|5|6|7|8|9|10/sm, function(x) {
        return num[x];
      });
      return word;
    }
  }
  if ((sessionStorage.clarksonTimeout == 0) && (sessionStorage.sluTimeout == 0)) {
    sessionStorage.team = Math.ceil(Math.random() * 2);
  }
  else if ((sessionStorage.clarksonTimeout == 0) && ((sessionStorage.sluTimeout > 0) || (sessionStorage.sluTimeout == "ejection"))) {
    sessionStorage.team = 1;
  }
  else if (((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == "ejection")) && (sessionStorage.sluTimeout == 0)) {
    sessionStorage.team = 2;
  }
  sessionStorage.offender = Math.ceil(Math.random() * 5);
  sessionStorage.offence = Math.floor(Math.random() * penalties.length);
  if (sessionStorage.team == 1) {
    sessionStorage.clarksonTimeout = penalties[sessionStorage.offence].timeout;
    if (sessionStorage.clarksonTimeout == "ejection") {
      if (sessionStorage.gender == 1) {
        document.getElementById("conductorTalk").innerHTML = "Holy shit, Clarkson player <strong>number " + (globalThis.players).men.clarkson[sessionStorage.offender].number + "</strong>, <span class=\"playerInline clarksonPlayerInline menPlayerInline clarksonMenPlayerInline clarksonOffender menOffender clarksonMenOffender\" id=\"offender\"><strong>" + (globalThis.players).men.clarkson[sessionStorage.offender].name + "</strong></span>, just got ejected from the game for decapitation!";
        document.getElementById("offenderName").innerHTML = (globalThis.players).men.clarkson[sessionStorage.offender].name;
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("conductorTalk").innerHTML = "Holy shit, Clarkson player <strong>number " + (globalThis.players).women.clarkson[sessionStorage.offender].number + "</strong>, <span class=\"playerInline clarksonPlayerInline womenPlayerInline clarksonWomenPlayerInline clarksonOffender womenOffender clarksonWomenOffender\" id=\"offender\"><strong>" + (globalThis.players).women.clarkson[sessionStorage.offender].name + "</strong></span>, just got ejected from the game for decapitation!";
        document.getElementById("offenderName").innerHTML = (globalThis.players).women.clarkson[sessionStorage.offender].name;
      }
    }
    else {
      numToWord.setValue(sessionStorage.clarksonTimeout);
      if (sessionStorage.gender == 1) {
        document.getElementById("conductorTalk").innerHTML = "It's a <strong>" + numToWord.getValue() + " minute penalty</strong> for Clarkson player <strong>number " + (globalThis.players).men.clarkson[sessionStorage.offender].number + "</strong>, <span class=\"playerInline clarksonPlayerInline menPlayerInline clarksonMenPlayerInline clarksonOffender menOffender clarksonMenOffender\" id=\"offender\"><strong>" + (globalThis.players).men.clarkson[sessionStorage.offender].name + "</strong></span>, for " + penalties[sessionStorage.offence].offence + "!";
        document.getElementById("offenderName").innerHTML = (globalThis.players).men.clarkson[sessionStorage.offender].name;
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("conductorTalk").innerHTML = "It's a <strong>" + numToWord.getValue() + " minute penalty</strong> for Clarkson player <strong>number " + (globalThis.players).women.clarkson[sessionStorage.offender].number + "</strong>, <span class=\"playerInline clarksonPlayerInline womenPlayerInline clarksonWomenPlayerInline clarksonOffender womenOffender clarksonWomenOffender\" id=\"offender\"><strong>" + (globalThis.players).women.clarkson[sessionStorage.offender].name + "</strong></span>, for " + penalties[sessionStorage.offence].offence + "!";
        document.getElementById("offenderName").innerHTML = (globalThis.players).women.clarkson[sessionStorage.offender].name;
      }
    }
    var enableClassLists = [
      "j == 5",
      "j == 10",
      "j == 12",
      "j == 19",
      "j == 20",
      "j == 26",
      "j == 38",
      "j == 45",
      "j == 46",
      "j == 47",
      "j == 48"
    ];
    var enableStyles = [
      "j == 4",
      "j == 5",
      "j == 10",
      "j == 12",
      "j == 19",
      "j == 20",
      "j == 26",
      "j == 38",
      "j == 45",
      "j == 46",
      "j == 47",
      "j == 48"
    ];
    enableCheers(enableClassLists, enableStyles);
    sessionStorage.clarksonCage = sessionStorage.offender;
    document.getElementById("cage" + sessionStorage.clarksonCage).style.visibility = "visible";
    document.getElementById("cage" + sessionStorage.clarksonCage).style.opacity = "100%";
    document.getElementById("cage" + sessionStorage.clarksonCage).style.transition = "all .25s ease 0s";
    if ((sessionStorage.sluTimeout > 0) && (sessionStorage.sluTimeout != "ejection")) {
      sessionStorage.sluTimeout--;
      if (sessionStorage.sluTimeout == 0) {
        document.getElementById("cage" + sessionStorage.sluCage).style.visibility = "hidden";
        document.getElementById("cage" + sessionStorage.sluCage).style.opacity = "0%";
        document.getElementById("cage" + sessionStorage.sluCage).style.transition = "all .25s ease 0s";
        sessionStorage.removeItem("sluCage");
      }
    }
  }
  else if (sessionStorage.team == 2) {
    sessionStorage.sluTimeout = penalties[sessionStorage.offence].timeout;
    if (sessionStorage.sluTimeout == "ejection") {
      if (sessionStorage.gender == 1) {
        document.getElementById("conductorTalk").innerHTML = "Holy shit, SLU player <strong>number " + (globalThis.players).men.slu[sessionStorage.offender].number + "</strong>, <span class=\"playerInline sluPlayerInline menPlayerInline sluMenPlayerInline sluOffender menOffender sluMenOffender\" id=\"offender\"><strong>" + (globalThis.players).men.slu[sessionStorage.offender].name + "</strong></span>, just got ejected from the game for decapitation!";
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("conductorTalk").innerHTML = "Holy shit, SLU player <strong>number " + (globalThis.players).women.slu[sessionStorage.offender].number + "</strong>, <span class=\"playerInline sluPlayerInline womenPlayerInline sluWomenPlayerInline sluOffender womenOffender sluWomenOffender\" id=\"offender\"><strong>" + (globalThis.players).women.slu[sessionStorage.offender].name + "</strong></span>, just got ejected from the game for decapitation!";
      }
    }
    else {
      numToWord.setValue(sessionStorage.sluTimeout);
      if (sessionStorage.gender == 1) {
        document.getElementById("conductorTalk").innerHTML = "It's a <strong>" + numToWord.getValue() + " minute penalty</strong> for SLU player <strong>number " + (globalThis.players).men.slu[sessionStorage.offender].number + "</strong>, <span class=\"playerInline sluPlayerInline menPlayerInline sluMenPlayerInline sluOffender menOffender sluMenOffender\" id=\"offender\"><strong>" + (globalThis.players).men.slu[sessionStorage.offender].name + "</strong></span>, for " + penalties[sessionStorage.offence].offence + "!";
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("conductorTalk").innerHTML = "It's a <strong>" + numToWord.getValue() + " minute penalty</strong> for SLU player <strong>number " + (globalThis.players).women.slu[sessionStorage.offender].number + "</strong>, <span class=\"playerInline sluPlayerInline womenPlayerInline sluWomenPlayerInline sluOffender womenOffender sluWomenOffender\" id=\"offender\"><strong>" + (globalThis.players).women.slu[sessionStorage.offender].name + "</strong></span>, for " + penalties[sessionStorage.offence].offence + "!";
      }
    }
    var enableClassLists = [
      "(j == 14) && (sessionStorage.sluTimeout == 2)",
      "(j == 23) && (sessionStorage.sluTimeout =! \"ejection\")",
      "j == 54",
      "(j == 57) && (sessionStorage.offence == 12) && (sessionStorage.gender == 1)"
    ];
    var enableStyles = [
      "(j == 14) && (sessionStorage.sluTimeout == 2)",
      "(j == 23) && (sessionStorage.sluTimeout =! \"ejection\")",
      "j == 54",
      "(j == 57) && (sessionStorage.offence == 12)"
    ];
    enableCheers(enableClassLists, enableStyles);
    sessionStorage.sluCage = (+sessionStorage.offender + 5);
    document.getElementById("cage" + sessionStorage.sluCage).style.visibility = "visible";
    document.getElementById("cage" + sessionStorage.sluCage).style.opacity = "100%";
    document.getElementById("cage" + sessionStorage.sluCage).style.transition = "all .25s ease 0s";
    if ((sessionStorage.clarksonTimeout > 0) && (sessionStorage.clarksonTimeout != "ejection")) {
      sessionStorage.clarksonTimeout--;
      if (sessionStorage.clarksonTimeout == 0) {
        var disableClassLists = [
          "j == 10"
        ];
        var disableStyles = [
          "j == 10"
        ];
        disableCheers(disableClassLists, disableStyles);
        document.getElementById("offenderName").innerHTML = "our Golden Knights";
        document.getElementById("cage" + sessionStorage.clarksonCage).style.visibility = "hidden";
        document.getElementById("cage" + sessionStorage.clarksonCage).style.opacity = "0%";
        document.getElementById("cage" + sessionStorage.clarksonCage).style.transition = "all .25s ease 0s";
        sessionStorage.removeItem("clarksonCage");
      }
    }
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  sessionStorage.songPrime = 27;
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
}

function gotIt14() {
  if (sessionStorage.clarksonScore < sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "There's one minute remaining in the first period of play! I sure hope the next one goes better for us!";
  }
  else if (sessionStorage.clarksonScore == sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "There's one minute remaining in the first period of play! Don't worry, we'll break this tie in the next one!";
  }
  else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "There's one minute remaining in the first period of play! Let's hope our good luck carries over to the next one!";
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  var disableClassLists = [
    "(j == 2) && ((sessionStorage.goal == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\")))",
    "(j == 8) && (sessionStorage.goal == 1)",
    "(j == 21) && (sessionStorage.goal == 1)",
    "(j == 25) && ((sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 35) && (sessionStorage.goal == 1)",
    "(j == 36) && (sessionStorage.goal == 1)",
    "(j == 44) && ((sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 56) && (sessionStorage.goal == 1)",
    "(j == 58) && (sessionStorage.goal == 1)",
    "(j == 59) && (sessionStorage.goal == 1)"
  ];
  var disableStyles = [
    "(j == 2) && ((sessionStorage.goal == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\")))",
    "(j == 8) && (sessionStorage.goal == 1)",
    "(j == 21) && (sessionStorage.goal == 1)",
    "(j == 25) && ((sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 35) && (sessionStorage.goal == 1)",
    "(j == 36) && (sessionStorage.goal == 1)",
    "(j == 44) && ((sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 56) && (sessionStorage.goal == 1)",
    "(j == 58) && (sessionStorage.goal == 1)",
    "(j == 59) && (sessionStorage.goal == 1)"
  ];
  disableCheers(disableClassLists, disableStyles);
  var enableClassLists = [
    "j == 28"
  ];
  var enableStyles = [
    "j == 28"
  ];
  enableCheers(enableClassLists, enableStyles);
  if (sessionStorage.points == 0) {
    document.getElementById("cheersContContCont").style.animation = "emphasizeCont 1.5s ease 0s 1 forwards";
    setTimeout(() => (
      document.getElementById("cheersContContCont").style.animation = "none"
    ), 1500);
  }
  document.getElementById("puck").style.visibility = "hidden";
  document.getElementById("puck").style.left = "calc(50% - .5em)";
  document.getElementById("puck").style.top = "0";
  document.getElementById("puck").style.opacity = "0%";
  document.getElementById("puck").style.transition = "visibility .25s ease 0s, left 0s ease .25s, top 0s ease .25s, opacity .25s ease 0s";
  document.getElementById("goalMessages").style.visibility = "hidden";
  document.getElementById("goalMessages").style.opacity = "0%";
  document.getElementById("goalMessages").style.transition = "all 0s ease 0s";
  sessionStorage.songPrime = 58;
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 15;
}

function gotIt15() {
  document.getElementById("conductorTalk").innerHTML = "Now Clarkson's president, Tony Collins (not Marc Christensen!), is coming out on the ice! Everyone, take your hats off and show some respect. This man makes $1.7 million a year!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var disableClassLists = [
    "j == 0",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 28",
    "j == 30",
    "j == 31",
    "(j == 34) && (sessionStorage.gender == 1)",
    "j == 41",
    "j == 50",
    "j == 55"
  ];
  var disableStyles = [
    "j == 0",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 28",
    "j == 30",
    "j == 31",
    "j == 34",
    "j == 41",
    "j == 50",
    "j == 55"
  ];
  disableCheers(disableClassLists, disableStyles);
  var enableClassLists = [
    "j == 43"
  ];
  var enableStyles = [
    "j == 15",
    "j == 43"
  ];
  enableCheers(enableClassLists, enableStyles);
  document.getElementById("tonyCollins").style.visibility = "visible";
  document.getElementById("tonyCollins").style.left = "20%";
  document.getElementById("tonyCollins").style.opacity = "100%";
  document.getElementById("tonyCollins").style.transition = "visibility .25s ease 0s, left 2s ease .25s, opacity .25s ease 0s";
  sessionStorage.songPrime = 8;
  setTimeout(enableButton, 2250);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 16;
}

function gotIt16() {
  if (sessionStorage.clarksonScore < sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "The puck is now getting dropped for the second period! There's still enough time for us to turn the tide of this game!";
  }
  else if (sessionStorage.clarksonScore == sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "The puck is now getting dropped for the second period! Just watch, SLU won't even know what hit them!";
  }
  else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "The puck is now getting dropped for the second period! Clearly SLU doesn't know when to quit!";
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var disableClassLists = [
    "j == 43"
  ];
  var disableStyles = [
    "j == 43"
  ];
  disableCheers(disableClassLists, disableStyles);
  var enableClassLists = [
    "j == 0",
    "(j == 1) && (sessionStorage.gender == 1)",
    "j == 3",
    "j == 15",
    "j == 17",
    "(j == 18) && (sessionStorage.gender == 2)",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 30",
    "j == 31",
    "(j == 34) && (sessionStorage.gender == 1)",
    "j == 41",
    "j == 50",
    "j == 55"
  ];
  var enableStyles = [
    "j == 0",
    "(j == 1) && (sessionStorage.gender == 1)",
    "j == 3",
    "j == 17",
    "(j == 18) && (sessionStorage.gender == 2)",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 30",
    "j == 31",
    "j == 34",
    "j == 41",
    "j == 50",
    "j == 55"
  ];
  enableCheers(enableClassLists, enableStyles);
  sessionStorage.bend = Math.floor(Math.random() * 5);
  sessionStorage.yell = 0;
  if (sessionStorage.points == 0) {
    document.getElementById("cheersContContCont").style.animation = "emphasizeCont 1.5s ease 0s 1 forwards";
    setTimeout(() => (
      document.getElementById("cheersContContCont").style.animation = "none"
    ), 1500);
  }
  document.getElementById("tonyCollins").style.visibility = "hidden";
  document.getElementById("tonyCollins").style.opacity = "0%";
  document.getElementById("tonyCollins").style.transition = "all .25s ease 0s";
  sessionStorage.period++;
  document.getElementById("scoreboardPeriod").innerHTML = sessionStorage.period;
  for (var i = 0; i < document.getElementsByClassName("flip").length; i++) {
    document.getElementById("sluVictoryMessageCont").style.gridColumnStart = "2";
    document.getElementById("clarksonVictoryMessageCont").style.gridColumnStart = "1";
    if ((document.getElementsByClassName("flip")[i].classList.contains("playerStatsCont")) && (document.getElementsByClassName("flip")[i].classList.contains("unToggledStatsCont"))) {
      document.getElementsByClassName("flip")[i].style.transform = "scale(0)";
    }
    else {
      document.getElementsByClassName("flip")[i].style.transform = "scaleX(-1)";
    }
    if (document.getElementsByClassName("flip")[i] == document.getElementById("rink")) {
      document.getElementById("rink").style.transition = "transform 1s ease .25s";
    }
    else {
      document.getElementsByClassName("flip")[i].style.transition = "transform 0s ease .625s";
    }
  }
  document.getElementById("goalMessages").style.visibility = "visible";
  document.getElementById("goalMessages").style.opacity = "100%";
  document.getElementById("goalMessages").style.transition = "visibility 0s ease 0s, opacity 0s ease 0s, transform 0s ease .625s";
  document.getElementById("puck").style.visibility = "visible";
  document.getElementById("puck").style.top = "50%";
  document.getElementById("puck").style.opacity = "100%";
  document.getElementById("puck").style.transition = "visibility .25s ease 1.75s, top 1s ease 2.5s, opacity .25s ease 1.75s";
  sessionStorage.position = 5;
  sessionStorage.scorer = 4;
  sessionStorage.songPrime = 61;
  setTimeout(enableButton, 3500);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 17;
  sessionStorage.functionPrime = "gamePlay";
}

function gotIt17() {
  if (sessionStorage.clarksonScore < sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "There's one minute remaining in the second period of play! I guess SLU forgot they're supposed to suck!";
  }
  else if (sessionStorage.clarksonScore == sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "There's one minute remaining in the second period of play! This tie won't last, I promise you!";
  }
  else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "There's one minute remaining in the second period of play! Good to see we're ahead of SLU!";
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  var disableClassLists = [
    "(j == 2) && ((sessionStorage.goal == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\")))",
    "(j == 8) && (sessionStorage.goal == 1)",
    "(j == 21) && (sessionStorage.goal == 1)",
    "(j == 25) && ((sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 35) && (sessionStorage.goal == 1)",
    "(j == 36) && (sessionStorage.goal == 1)",
    "(j == 44) && ((sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 56) && (sessionStorage.goal == 1)",
    "(j == 58) && (sessionStorage.goal == 1)",
    "(j == 59) && (sessionStorage.goal == 1)"
  ];
  var disableStyles = [
    "(j == 2) && ((sessionStorage.goal == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\")))",
    "(j == 8) && (sessionStorage.goal == 1)",
    "(j == 21) && (sessionStorage.goal == 1)",
    "(j == 25) && ((sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 35) && (sessionStorage.goal == 1)",
    "(j == 36) && (sessionStorage.goal == 1)",
    "(j == 44) && ((sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 56) && (sessionStorage.goal == 1)",
    "(j == 58) && (sessionStorage.goal == 1)",
    "(j == 59) && (sessionStorage.goal == 1)"
  ];
  disableCheers(disableClassLists, disableStyles);
  var enableClassLists = [
    "j == 28"
  ];
  var enableStyles = [
    "j == 28"
  ];
  enableCheers(enableClassLists, enableStyles);
  if (sessionStorage.points == 0) {
    document.getElementById("cheersContContCont").style.animation = "emphasizeCont 1.5s ease 0s 1 forwards";
    setTimeout(() => (
      document.getElementById("cheersContContCont").style.animation = "none"
    ), 1500);
  }
  document.getElementById("puck").style.visibility = "hidden";
  document.getElementById("puck").style.left = "calc(50% - .5em)";
  document.getElementById("puck").style.top = "0";
  document.getElementById("puck").style.opacity = "0%";
  document.getElementById("puck").style.transition = "visibility .25s ease 0s, left 0s ease .25s, top 0s ease .25s, opacity .25s ease 0s";
  document.getElementById("goalMessages").style.visibility = "hidden";
  document.getElementById("goalMessages").style.opacity = "0%";
  document.getElementById("goalMessages").style.transition = "all 0s ease 0s";
  sessionStorage.songPrime = 58;
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 18;
}

function gotIt18() {
  document.getElementById("conductorTalk").innerHTML = "I think I hear <i>Everytime We Touch</i> playing over the loudspeakers! What are you doing sitting on your ass playing a video game? Get up and dance to this! Or skip it, I guess, if you're not dope as fuck.";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  var disableClassLists = [
    "j == 0",
    "(j == 1) && (sessionStorage.gender == 1)",
    "j == 3",
    "j == 15",
    "(j == 18) && (sessionStorage.gender == 2)",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 28",
    "j == 30",
    "j == 31",
    "j == 41",
    "j == 50",
    "j == 55"
  ];
  var disableStyles = [
    "j == 0",
    "(j == 1) && (sessionStorage.gender == 1)",
    "j == 3",
    "(j == 18) && (sessionStorage.gender == 2)",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 28",
    "j == 30",
    "j == 31",
    "j == 41",
    "j == 50",
    "j == 55"
  ];
  disableCheers(disableClassLists, disableStyles);
  sessionStorage.youtube = 14;
  document.getElementById("ok").onclick = function() {
    openYoutubeSong();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  if (sessionStorage.points < 20) {
    sessionStorage.function = 20;
  }
  else if (sessionStorage.points >= 20) {
    sessionStorage.function = 19;
  }
  microphone();
  console.log("Stop playing League of Legends and dance to this, Ben!");
}

function microphone() {
  navigator.mediaDevices.getUserMedia({audio: true})
    .then(() => {
      setTimeout(() => (
        alert("Make sure your computer is unmuted for this next part.")
      ), 100);
    })
    .catch(() => {
      setTimeout(() => (
        alert("Are you sure? You won't get the full experience if you do not allow access to your microphone.")
      ), 100);
    });
}

function gotIt19() {
  document.getElementById("conductorTalk").innerHTML = "Now it's <i>Sweet Caroline</i>! Feel free to sing along, this song is catchy! And if you really want to piss SLU off, press the button to put \"fuck SLU\" in the lyrics. Just be careful Troy Lassial doesn't hear that!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  sessionStorage.youtube = 52;
  document.getElementById("ok").onclick = function() {
    openYoutubeSong();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 20;
  console.log("So glad you found this hidden level!");
}

function openYoutubeSong() {
  if (songs[sessionStorage.youtube].duration < 3600) {
    disableButton();
    document.getElementById("conductorCont").tabIndex = "-1";
    document.getElementById("conductorCont").blur();
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      document.getElementById("conductorTalkCont").tabIndex = "-1";
      document.getElementById("conductorTalkCont").blur();
    }
    document.getElementById("viewAccountToggle").style.pointerEvents = "none";
    document.getElementById("viewAccountToggle").tabIndex = "-1";
    document.getElementById("viewAccountToggle").blur();
    if (document.getElementById("viewAccountToggle").onclick == viewAccountToggleClose) {
      viewAccountToggleClose();
    }
    if (document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime > 0) {
      document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime = 0;
    }
    document.getElementById("youtubeTitle").innerHTML = (songs[sessionStorage.youtube].title).replace(/\<\/*(b|strong|i|em|u|s|br)\>/gism, "");
    document.getElementById("youtubeTitle").title = (songs[sessionStorage.youtube].title).replace(/\<\/*(b|strong|i|em|u|s|br)\>/gism, "") + " by " + songs[sessionStorage.youtube].artist;
    document.getElementById("youtubeSongs").style.background = "url(\"" + songs[sessionStorage.youtube].image + "\") center / cover";
    document.getElementById("youtubeSongs").style.pointerEvents = "auto";
    document.getElementById("youtubeSongs").tabIndex = "0";
    sessionStorage.progress = 100;
    document.getElementById("youtubeDuration").style.right = sessionStorage.progress + "%";
    document.getElementById("youtubeDuration").style.transition = "right 0s linear 0s";
    sessionStorage.duration = songs[sessionStorage.youtube].duration;
    sessionStorage.durationDecrement = (100 / sessionStorage.duration);
    document.getElementById("youtubePlayPauseButton").style.pointerEvents = "auto";
    document.getElementById("youtubePlayPauseButton").tabIndex = "0";
    sessionStorage.countingTime = "00:00";
    document.getElementById("youtubeCountingTime").innerHTML = "<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeMinutes\" aria-label=\"Enter the minutes of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\" contenteditable>" + (sessionStorage.countingTime).substring(0, 2) + "</span>:<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeSeconds\" aria-label=\"Enter the seconds of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\" contenteditable>" + (sessionStorage.countingTime).substring(3) + "</span>";
    document.getElementById("youtubeCountingTime").datetime = "PT0M0S";
    sessionStorage.fullTime = String(Math.floor(sessionStorage.duration / 60)).padStart(2, "0") + ":" + String(sessionStorage.duration % 60).padStart(2, "0");
    document.getElementById("youtubeFullTime").innerHTML = sessionStorage.fullTime;
    document.getElementById("youtubeFullTime").datetime = "PT" + ((sessionStorage.fullTime).substring(0, 2)).replace(/(?<=^)0/sm, "") + "M" + ((sessionStorage.fullTime).substring(3)).replace(/(?<=^)0/sm, "") + "S";
    document.getElementById("youtubeTimer").title = "Has not started";
    document.getElementById("youtubeRestart").style.pointerEvents = "auto";
    document.getElementById("youtubeRestart").tabIndex = "0";
    document.getElementById("youtubeSkip").style.pointerEvents = "auto";
    document.getElementById("youtubeSkip").tabIndex = "0";
    document.getElementById("youtubeToolbar").tabIndex = "0";
    document.getElementById("youtubeExit").style.pointerEvents = "auto";
    document.getElementById("youtubeExit").tabIndex = "0";
    if (sessionStorage.youtube == 14) {
      document.getElementById("danceInstructions").style.visibility = "visible";
      document.getElementById("danceInstructions").style.opacity = "100%";
      document.getElementById("danceInstructions").style.transition = "all 0s ease 0s";
    }
    else if (sessionStorage.youtube == 52) {
      document.getElementById("fuckSluButton").tabIndex = "0";
      document.getElementById("fuckSluButtonCont").style.visibility = "visible";
      document.getElementById("fuckSluButtonCont").style.opacity = "100%";
      document.getElementById("fuckSluButtonCont").style.transition = "all 0s ease 0s";
      sessionStorage.fuckSlu = 0;
    }
    document.getElementById("youtubeSongsContCont").style.transform = "scale(1)";
    document.getElementById("youtubeSongsContCont").style.transition = "transform .5s ease 0s";
    document.getElementById("youtubeSongsContCont").tabIndex = "0";
    document.getElementById("cover").style.visibility = "visible";
    document.getElementById("cover").style.opacity = "100%";
    document.getElementById("cover").style.transition = "all .25s ease 0s";
    document.getElementById("cover").tabIndex = "0";
    sessionStorage.scope = "document";
    document.onclick = youtubeControls;
    document.ondblclick = null;
    document.onkeydown = shortcut;
    document.onkeyup = shortcutUndo;
    sessionStorage.shortcut = "youtubeControls";
    document.getElementsByClassName("audio")[sessionStorage.youtube].onended = closeYoutubeSong;
  }
  else if (songs[sessionStorage.youtube].duration >= 3600) {
    error();
  }
}

function error() {
  let duration = new RangeError("YouTube song " + (songs[sessionStorage.youtube].title).replace(/\<\/*(b|strong|i|em|u|s|br)\>/gism, "") + " duration of " + Math.floor(songs[sessionStorage.youtube].duration / 3600) + ((Math.floor(songs[sessionStorage.youtube].duration / 3600) == 1) ? (" hour, ") : (" hours, ")) + Math.floor((songs[sessionStorage.youtube].duration % 3600) / 60) + ((Math.floor((songs[sessionStorage.youtube].duration % 3600) / 60) == 1) ? (" minute, ") : (" minutes, ")) + Math.floor((songs[sessionStorage.youtube].duration % 3600) % 60) + ((Math.floor((songs[sessionStorage.youtube].duration % 3600) % 60) == 1) ? (" second") : (" seconds")) + " is greater than the 1 hour max limit.");
  duration.fileName = "https://chastantshontz.github.io/dope-as-fuck/page.js";
  duration.lineNumber = ((duration.lineNumber == undefined) ? (null) : (duration.lineNumber - 5));
  duration.columnNumber = ((duration.lineNumber == undefined) ? (null) : (5));
  duration.options = {
    cause: {
      function: openYoutubeSong,
      code: "\telse if (songs[sessionStorage.youtube].duration >= 3600) {\n\t\terror();\n\t}",
      value: songs[sessionStorage.youtube].duration,
      fileName: duration.fileName,
      lineNumber: duration.lineNumber,
      columnNumber: duration.columnNumber
    }
  };
  throw duration;
}

function youtubeControls(event) {
  if (event.type == "click") {
    if (!(document.activeElement.classList.contains("youtubeCountingTimeUnits"))) {
      youtubeRestore();
    }
  }
  else if (event.type == "keydown") {
    if (sessionStorage.scope == "editor") {
      if ((event.key == "Tab") || (event.key == "Enter")) {
        if ((event.key == "Enter") || ((event.key == "Tab") && ((event.target == document.getElementById("youtubeCountingTimeSeconds")) || (keyboard.shift == false)))) {
          event.preventDefault();
        }
        if (event.target == document.getElementById("youtubeCountingTimeMinutes")) {
          if (keyboard.shift == false) {
            document.getElementById("youtubeCountingTimeSeconds").focus();
          }
        }
        else if (event.target == document.getElementById("youtubeCountingTimeSeconds")) {
          if (keyboard.shift == true) {
            document.getElementById("youtubeCountingTimeMinutes").focus();
          }
          else if (keyboard.shift == false) {
            youtubeSet(event);
          }
        }
      }
      else if (event.key == "Escape") {
        youtubeRestore();
      }
    }
    else {
      if (event.key == " ") {
        var method = "space";
        if (document.getElementsByClassName("audio")[sessionStorage.youtube].paused == true) {
          youtubePlay(method, event);
        }
        else if (document.getElementsByClassName("audio")[sessionStorage.youtube].paused == false) {
          youtubePause(method, event);
        }
      }
      else if (event.key == "Escape") {
        document.getElementById("youtubeExit").style.animation = "youtubeExit .5s ease 0s 1 forwards";
        setTimeout(() => (
          document.getElementById("youtubeExit").style.animation = "none"
        ), 500);
        closeYoutubeSong(event);
      }
      else if (event.key == "Backspace") {
        youtubeRestart(event);
      }
      else if ((event.key == "ArrowLeft") || (event.key == "ArrowRight") || (event.key == "PageUp") || (event.key == "PageDown") || (event.key == "Home") || (event.key == "End")) {
        youtubeJump(event);
      }
    }
  }
}

function showCursor() {
  if (sessionStorage.hideCursorTimeout != undefined) {
    clearTimeout(sessionStorage.hideCursorTimeout);
    sessionStorage.removeItem("hideCursorTimeout");
  }
  document.getElementById("youtubeSongs").style.cursor = "auto";
  sessionStorage.hideCursorTimeout = setTimeout(hideCursor, 5000);
}

function hideCursor() {
  document.getElementById("youtubeSongs").style.cursor = "none";
}

function emphasizeYoutubePlayPause() {
  sessionStorage.scope = "player";
  document.getElementById("youtubePlayPauseIcon").style.opacity = "90%";
  document.getElementById("youtubePlayPauseIcon").style.transition = "opacity 0s ease 0s";
}

function deEmphasizeYoutubePlayPause() {
  sessionStorage.scope = "document";
  document.getElementById("youtubePlayPauseIcon").style.opacity = "100%";
  document.getElementById("youtubePlayPauseIcon").style.transition = "opacity 0s ease 0s";
}

function youtubeToggle(method, event) {
  if (document.getElementsByClassName("audio")[sessionStorage.youtube].paused == true) {
    youtubePlay(method, event);
  }
  else if (document.getElementsByClassName("audio")[sessionStorage.youtube].paused == false) {
    youtubePause(method, event);
  }
}

function youtubePlay(method, event) {
  if ((method != "click") || (!(document.elementsFromPoint(event.clientX, event.clientY).includes(document.getElementById("youtubeTitle"))))) {
    document.getElementsByClassName("audio")[sessionStorage.youtube].play();
    if (method == "seek") {
      youtubeTimer();
    }
    else {
      document.getElementById("youtubeSongs").onmouseenter = null;
      document.getElementById("youtubeSongs").onmouseleave = null;
      document.getElementById("youtubePlayPauseIconShape").style.clipPath = "polygon(0% 0%, 100% 50%, 0% 100%, 0% 0%)";
      document.getElementById("youtubePlayPauseIconShape").style.background = "rgba(68, 68, 68, 50%)";
      document.getElementById("youtubePlayPauseIconShape").style.border = "none";
      document.getElementById("youtubePlayPauseIconShape").style.transition = "all 0s ease 0s";
      document.getElementById("youtubePlayPauseIcon").style.visibility = "hidden";
      document.getElementById("youtubePlayPauseIcon").style.opacity = "0%";
      document.getElementById("youtubePlayPauseIcon").style.transform = "scale(1.25)";
      document.getElementById("youtubePlayPauseIcon").style.transition = "all .5s ease 0s";
      document.getElementById("youtubeSongs").ariaLabel = "Pause the YouTube song";
      document.getElementById("youtubePlayPauseButtonShape").style.clipPath = "none";
      document.getElementById("youtubePlayPauseButtonShape").style.background = "transparent";
      document.getElementById("youtubePlayPauseButtonShape").style.borderLeft = ".5em solid var(--youtubeDarkGray)";
      document.getElementById("youtubePlayPauseButtonShape").style.borderRight = ".5em solid var(--youtubeDarkGray)";
      document.getElementById("youtubePlayPauseButtonShape").style.transition = "all 0s ease 0s";
      document.getElementById("youtubePlayPauseButton").title = "Pause (space)";
      document.getElementById("youtubePlayPauseButton").ariaLabel = "Pause the YouTube song";
      if (method == "click") {
        document.getElementById("youtubePlayPauseButton").blur();
      }
      document.getElementById("youtubeTimer").title = (document.getElementById("youtubeTimer").title).replace(/paused/sm, "playing");
      if (sessionStorage.youtube == 52) {
        document.getElementById("fuckSluButton").tabIndex = "0";
        document.getElementById("fuckSluButton").disabled = false;
        if ((method == "click") || (method == "space")) {
          if (document.getElementById("fuckSluMessage").style.animationPlayState == "paused") {
            document.getElementById("fuckSluMessage").style.setProperty("visibility", "hidden", "important");
            document.getElementById("fuckSluMessage").style.setProperty("opacity", "0", "important");
            document.getElementById("fuckSluMessage").style.setProperty("transition", "all .25s ease 0s", "important");
            setTimeout(() => (
              document.getElementById("fuckSluMessage").style.visibility = "hidden"
            ), 250);
            setTimeout(() => (
              document.getElementById("fuckSluMessage").style.opacity = "0%"
            ), 250);
            setTimeout(() => (
              document.getElementById("fuckSluMessage").style.transition = "all 0s ease 0s"
            ), 250);
            setTimeout(() => (
              document.getElementById("fuckSluMessage").style.animation = "none"
            ), 250);
          }
        }
      }
      setTimeout(() => (
        document.getElementById("youtubeSongs").onmouseenter = emphasizeYoutubePlayPause
      ), 500);
      setTimeout(() => (
        document.getElementById("youtubeSongs").onmouseleave = deEmphasizeYoutubePlayPause
      ), 500);
    }
    sessionStorage.youtubeTimerInterval = setInterval(youtubeTimer, 1000);
    sessionStorage.durationInterval = setInterval(youtubeDuration, 1000);
  }
}

function youtubePause(method, event) {
  if ((method != "click") || ((method == "click") && (!(document.elementsFromPoint(event.clientX, event.clientY).includes(document.getElementById("youtubeTitle")))))) {
    clearInterval(sessionStorage.youtubeTimerInterval);
    sessionStorage.removeItem("youtubeTimerInterval");
    clearInterval(sessionStorage.durationInterval);
    sessionStorage.removeItem("durationInterval");
    document.getElementsByClassName("audio")[sessionStorage.youtube].pause();
    if (method != "seek") {
      document.getElementById("youtubeSongs").onmouseenter = null;
      document.getElementById("youtubeSongs").onmouseleave = null;
      if ((method == "click") || (method == "space")) {
        document.getElementById("youtubePlayPauseIconShape").style.clipPath = "none";
        document.getElementById("youtubePlayPauseIconShape").style.background = "transparent";
        document.getElementById("youtubePlayPauseIconShape").style.borderLeft = "2em solid rgba(68, 68, 68, 50%)";
        document.getElementById("youtubePlayPauseIconShape").style.borderRight = "2em solid rgba(68, 68, 68, 50%)";
        document.getElementById("youtubePlayPauseIconShape").style.transition = "all 0s ease 0s";
        document.getElementById("youtubePlayPauseIcon").style.visibility = "visible";
        if (sessionStorage.scope == "player") {
          document.getElementById("youtubePlayPauseIcon").style.opacity = "90%";
        }
        else if (sessionStorage.scope == "document") {
          document.getElementById("youtubePlayPauseIcon").style.opacity = "100%";
        }
        document.getElementById("youtubePlayPauseIcon").style.transform = "scale(1)";
        document.getElementById("youtubePlayPauseIcon").style.transition = "all .5s ease 0s";
      }
      else if ((method == "restart") || (method == "exit")) {
        document.getElementById("youtubePlayPauseIconShape").style.clipPath = "polygon(0% 0%, 100% 50%, 0% 100%, 0% 0%)";
        document.getElementById("youtubePlayPauseIconShape").style.background = "rgba(68, 68, 68, 50%)";
        document.getElementById("youtubePlayPauseIconShape").style.border = "none";
        if (method == "restart") {
          document.getElementById("youtubePlayPauseIconShape").style.transition = "all .5s ease 0s";
        }
        else if (method == "exit") {
          document.getElementById("youtubePlayPauseIconShape").style.transition = "all 0s ease .5s";
        }
        if (document.getElementById("youtubePlayPauseIcon").style.visibility == "hidden") {
          document.getElementById("youtubePlayPauseIcon").style.visibility = "visible";
          document.getElementById("youtubePlayPauseIcon").style.opacity = "100%";
          document.getElementById("youtubePlayPauseIcon").style.transform = "scale(1)";
          if (method == "restart") {
            document.getElementById("youtubePlayPauseIcon").style.transition = "all .5s ease 0s";
          }
          else if (method == "exit") {
            document.getElementById("youtubePlayPauseIcon").style.transition = "all 0s ease .5s";
          }
        }
      }
      document.getElementById("youtubeSongs").ariaLabel = "Play the YouTube song";
      document.getElementById("youtubePlayPauseButtonShape").style.clipPath = "polygon(0% 0%, 100% 50%, 0% 100%, 0% 0%)";
      document.getElementById("youtubePlayPauseButtonShape").style.background = "var(--youtubeDarkGray)";
      document.getElementById("youtubePlayPauseButtonShape").style.border = "none";
      document.getElementById("youtubePlayPauseButtonShape").style.transition = "all 0s ease 0s";
      document.getElementById("youtubePlayPauseButton").title = "Play (space)";
      document.getElementById("youtubePlayPauseButton").ariaLabel = "Play the YouTube song";
      if (method == "click") {
        document.getElementById("youtubePlayPauseButton").blur();
      }
      if (method != "overflow") {
        document.getElementById("youtubeTimer").title = (document.getElementById("youtubeTimer").title).replace(/playing/sm, "paused");
      }
      if (sessionStorage.youtube == 52) {
        document.getElementById("fuckSluButton").tabIndex = "-1";
        document.getElementById("fuckSluButton").disabled = true;
        document.getElementById("fuckSluButton").blur();
        if ((method == "click") || (method == "space")) {
          if ((document.getElementById("fuckSluMessage").style.animation != "") && (document.getElementById("fuckSluMessage").style.animation != "none")) {
            document.getElementById("fuckSluMessage").style.animationPlayState = "paused";
          }
        }
      }
      setTimeout(() => (
        document.getElementById("youtubeSongs").onmouseenter = emphasizeYoutubePlayPause
      ), 500);
      setTimeout(() => (
        document.getElementById("youtubeSongs").onmouseleave = deEmphasizeYoutubePlayPause
      ), 500);
    }
  }
}

function youtubeTimer() {
  if (!(document.activeElement.classList.contains("youtubeCountingTimeUnits"))) {
    sessionStorage.countingTime = String(Math.floor(document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime / 60)).padStart(2, "0") + ":" + String(Math.floor(document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime) % 60).padStart(2, "0");
    document.getElementById("youtubeCountingTime").innerHTML = "<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeMinutes\" aria-label=\"Enter the minutes of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\" contenteditable>" + (sessionStorage.countingTime).substring(0, 2) + "</span>:<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeSeconds\" aria-label=\"Enter the seconds of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\" contenteditable>" + (sessionStorage.countingTime).substring(3) + "</span>";
    document.getElementById("youtubeCountingTime").datetime = "PT" + ((sessionStorage.countingTime).substring(0, 2)).replace(/(?<=^)0/sm, "") + "M" + ((sessionStorage.countingTime).substring(3)).replace(/(?<=^)0/sm, "") + "S";
    if (document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime == 0) {
      document.getElementById("youtubeTimer").title = "Has not started";
    }
    else if ((document.getElementsByClassName("audio")[sessionStorage.youtube].ended == true) || (document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime == sessionStorage.duration)) {
      document.getElementById("youtubeTimer").title = "Has ended";
    }
    else {
      document.getElementById("youtubeTimer").title = ((sessionStorage.countingTime).substring(0, 2)).replace(/(?<=^)0/sm, "") + ((((sessionStorage.countingTime).substring(0, 2)).replace(/(?<=^)0/sm, "") == 1) ? (" minute, ") : (" minutes, ")) + ((sessionStorage.countingTime).substring(3)).replace(/(?<=^)0/sm, "") + ((((sessionStorage.countingTime).substring(3)).replace(/(?<=^)0/sm, "") == 1) ? (" second ") : (" seconds ")) + "out of " + ((sessionStorage.fullTime).substring(0, 2)).replace(/(?<=^)0/sm, "") + ((((sessionStorage.fullTime).substring(0, 2)).replace(/(?<=^)0/sm, "") == 1) ? (" minute, ") : (" minutes, ")) + ((sessionStorage.fullTime).substring(3)).replace(/(?<=^)0/sm, "") + ((((sessionStorage.fullTime).substring(3)).replace(/(?<=^)0/sm, "") == 1) ? (" second ") : (" seconds ")) + "| playing";
    }
  }
  if (sessionStorage.youtube == 14) {
    dance();
  }
}

function arriveEditor(event) {
  let editor = new Range();
  editor.selectNodeContents(event.target);
  document.getSelection().removeAllRanges();
  document.getSelection().addRange(editor);
  if (sessionStorage.scopeTimeout != undefined) {
    clearTimeout(sessionStorage.scopeTimeout);
    sessionStorage.removeItem("scopeTimeout");
  }
  sessionStorage.scope = "editor";
}

function leaveEditor(event) {
  let editor = new Range();
  editor.selectNodeContents(event.target);
  document.getSelection().removeAllRanges();
  sessionStorage.scopeTimeout = setTimeout(() => (
    sessionStorage.scope = "document"
  ), 250);
}

function youtubeEdit(event) {
  if ((event.target.innerHTML).match(/\<br\>/gism)) {
    if ((event.target.innerHTML).match(/(?<=^)\<br\>(?=$)/ism)) {
      event.target.innerHTML = (event.target.innerHTML).replace(/(?<=^)\<br\>(?=$)/ism, "*");
    }
    else if ((event.target.innerHTML).match(/(?<!^)\<br\>(?!$)/gism)) {
      event.target.innerHTML = (event.target.innerHTML).replace(/(?<!^)\<br\>(?!$)/gism, "");
    }
  }
  if ((event.target.innerHTML).match(/[a-zA-Z]|\.|\,|\'|\"|\`|\~|\`|\_|\+|\^|\%|\=|\>|\<|\&|\#|\$|\@|\;|\:|\?|\!|\/|\\|\||\(|\)|\[|\]|\{|\}|\s+|\n+|\r+|\t+|\v+|\f+/gsm)) {
    event.target.innerHTML = (event.target.innerHTML).replace(/[a-zA-Z]|\.|\,|\'|\"|\`|\~|\`|\_|\+|\^|\%|\=|\>|\<|\&|\#|\$|\@|\;|\:|\?|\!|\/|\\|\||\(|\)|\[|\]|\{|\}|\s+|\n+|\r+|\t+|\v+|\f+/gsm, "");
  }
  if ((event.target.innerHTML).length > 2) {
    event.target.innerHTML = (event.target.innerHTML).substring(0, 2);
  }
  if ((event.target.innerHTML == "") || (((event.target.innerHTML).length == 1) && (event.target.innerHTML == "*"))) {
    if (sessionStorage.oldCaret == undefined) {
      sessionStorage.oldCaret = 1;
    }
    sessionStorage.newCaret = 0;
    event.target.innerHTML = ((event.target.innerHTML).replace(/\*/sm, "0")).padStart(2, "0");
  }
  else if (((event.target.innerHTML).length == 1) && (event.target.innerHTML != "*")) {
    if (sessionStorage.oldCaret == undefined) {
      sessionStorage.oldCaret = 2;
    }
    sessionStorage.newCaret = 1;
  }
  else if ((event.target.innerHTML).length > 1) {
    if (sessionStorage.oldCaret == undefined) {
      sessionStorage.oldCaret = ((event.target.innerHTML).length - 1);
    }
    sessionStorage.newCaret = (event.target.innerHTML).length;
  }
  let caret = new Range();
  caret.setStart(event.target.childNodes[0], sessionStorage.newCaret);
  caret.collapse(true);
  document.getSelection().removeAllRanges();
  document.getSelection().addRange(caret);
  sessionStorage.oldCaret = sessionStorage.newCaret;
}

function youtubeSet(event) {
  for (var i = 0; i < document.getElementsByClassName("youtubeCountingTimeUnits").length; i++) {
    document.getElementsByClassName("youtubeCountingTimeUnits")[i].blur();
    if ((document.getElementsByClassName("youtubeCountingTimeUnits")[i].innerHTML).length < 2) {
      document.getElementsByClassName("youtubeCountingTimeUnits")[i].innerHTML = (document.getElementsByClassName("youtubeCountingTimeUnits")[i].innerHTML).padStart(2, "0");
    }
    document.getElementsByClassName("youtubeCountingTimeUnits")[i].style.animation = "set .25s ease 0s 1 forwards";
    const reset = (x) => {
      setTimeout(() => (
        document.getElementsByClassName("youtubeCountingTimeUnits")[x].style.animation = "none"
      ), 250);
    }
    reset(i);
  }
  setTimeout(youtubeJump.bind(null, event), 250);
}

function youtubeRestore() {
  for (var i = 0; i < document.getElementsByClassName("youtubeCountingTimeUnits").length; i++) {
    document.getElementsByClassName("youtubeCountingTimeUnits")[i].blur();
    if ((document.getElementsByClassName("youtubeCountingTimeUnits")[i].innerHTML).length < 2) {
      document.getElementsByClassName("youtubeCountingTimeUnits")[i].innerHTML = (document.getElementsByClassName("youtubeCountingTimeUnits")[i].innerHTML).padStart(2, "0");
    }
  }
  setTimeout(youtubeTimer, 250);
}

function emphasizeYoutubeDuration() {
  document.getElementById("youtubeDurationCont").style.top = "-.95em";
  document.getElementById("youtubeDurationCont").style.height = "1em";
  document.getElementById("youtubeDurationCont").style.transition = "all .25s ease 0s";
}

function unemphasizeYoutubeDuration() {
  document.getElementById("youtubeDurationCont").style.top = "-.15em";
  document.getElementById("youtubeDurationCont").style.height = ".2em";
  document.getElementById("youtubeDurationCont").style.transition = "all .25s ease 0s";
}

function youtubeDuration() {
  sessionStorage.progress = (sessionStorage.progress - sessionStorage.durationDecrement);
  document.getElementById("youtubeDuration").style.right = sessionStorage.progress + "%";
  document.getElementById("youtubeDuration").style.transition = "right 1s linear 0s";
}

function pressMouse(event) {
  sessionStorage.mousePressed = true;
  youtubeJump(event);
  document.getElementById("youtubeSeek").style.zIndex = "0";
  document.getElementById("youtubeSeek").style.background = "var(--youtubeLightGray)";
  document.getElementById("youtubeSeek").style.transition = "background 0s ease 0s";
  document.getElementById("youtubeDuration").style.zIndex = "1";
}

function liftMouse(event) {
  sessionStorage.mousePressed = false;
  if (sessionStorage.youtubePlayTimeout != undefined) {
    clearTimeout(sessionStorage.youtubePlayTimeout);
    sessionStorage.removeItem("youtubePlayTimeout");
    youtubePlay("seek", event);
  }
}

function youtubeSeek() {
  document.getElementById("youtubeSeek").style.display = "block";
}

function youtubeUnseek() {
  document.getElementById("youtubeSeek").style.display = "none";
  document.getElementById("youtubeSeek").style.right = "100%";
  document.getElementById("youtubeSeek").style.transition = "right 0s ease 0s";
}

function youtubeJump(event) {
  if (sessionStorage.mousePressed == undefined) {
    sessionStorage.mousePressed = false;
  }
  sessionStorage.progressSeek = (100 - (((event.clientX - event.target.getBoundingClientRect().left) / (event.target.getBoundingClientRect().right - event.target.getBoundingClientRect().left)) * 100));
  document.getElementById("youtubeSeek").style.right = sessionStorage.progressSeek + "%";
  if ((sessionStorage.progress < sessionStorage.progressSeek) && (sessionStorage.progress != 100)) {
    if (sessionStorage.mousePressed == String(false)) {
      document.getElementById("youtubeSeek").style.zIndex = "1";
      document.getElementById("youtubeSeek").style.background = "var(--youtubeDarkRed)";
      document.getElementById("youtubeDuration").style.zIndex = "0";
    }
  }
  else if ((sessionStorage.progress >= sessionStorage.progressSeek) || (sessionStorage.progress == 100)) {
    document.getElementById("youtubeSeek").style.zIndex = "0";
    document.getElementById("youtubeSeek").style.background = "var(--youtubeLightGray)";
    document.getElementById("youtubeDuration").style.zIndex = "1";
  }
  document.getElementById("youtubeSeek").style.transition = "all 0s ease 0s";
  if ((event.type == "mousedown") || (event.type == "mousemove")) {
    sessionStorage.seekTime = String(Math.floor((((event.clientX - event.target.getBoundingClientRect().left) / (event.target.getBoundingClientRect().right - event.target.getBoundingClientRect().left)) * sessionStorage.duration) / 60)).padStart(2, "0") + ":" + String(Math.floor((((event.clientX - event.target.getBoundingClientRect().left) / (event.target.getBoundingClientRect().right - event.target.getBoundingClientRect().left)) * sessionStorage.duration) % 60)).padStart(2, "0");
    if (sessionStorage.mousePressed == String(true)) {
      sessionStorage.progress = (100 - (((event.clientX - event.target.getBoundingClientRect().left) / (event.target.getBoundingClientRect().right - event.target.getBoundingClientRect().left)) * 100));
    }
  }
  else if (event.type == "keydown") {
    if ((event.key == "Tab") || (event.key == "Enter")) {
      if ((document.getElementById("youtubeCountingTimeMinutes").innerHTML > (sessionStorage.fullTime).substring(0, 2)) || ((document.getElementById("youtubeCountingTimeMinutes").innerHTML == (sessionStorage.fullTime).substring(0, 2)) && (document.getElementById("youtubeCountingTimeSeconds").innerHTML > (sessionStorage.fullTime).substring(3)))) {
        sessionStorage.seekTime = sessionStorage.fullTime;
      }
      else {
        sessionStorage.seekTime = String(Math.floor((+document.getElementById("youtubeCountingTimeSeconds").innerHTML + (document.getElementById("youtubeCountingTimeMinutes").innerHTML * 60)) / 60)).padStart(2, "0") + ":" + String((+document.getElementById("youtubeCountingTimeSeconds").innerHTML + (document.getElementById("youtubeCountingTimeMinutes").innerHTML * 60)) % 60).padStart(2, "0");
      }
      sessionStorage.progress = (100 - (((+document.getElementById("youtubeCountingTimeSeconds").innerHTML + (document.getElementById("youtubeCountingTimeMinutes").innerHTML * 60)) / sessionStorage.duration) * 100));
    }
    else if ((event.key == "ArrowLeft") || (event.key == "ArrowRight")) {
      if (event.key == "ArrowLeft") {
        if ((sessionStorage.countingTime).substring(3) < 5) {
          if ((sessionStorage.countingTime).substring(0, 2) == "00") {
            sessionStorage.seekTime = "00:00";
          }
          else {
            sessionStorage.seekTime = String((sessionStorage.countingTime).substring(0, 2)).padStart(2, "0") + ":" + (60 - Math.abs((sessionStorage.countingTime).substring(3) - 5));
          }
        }
        else if ((sessionStorage.countingTime).substring(3) >= 5) {
          sessionStorage.seekTime = (sessionStorage.countingTime).substring(0, 3) + String((sessionStorage.countingTime).substring(3) - 5).padStart(2, "0");
        }
        sessionStorage.progress = (+sessionStorage.progress + (sessionStorage.durationDecrement * 5));
      }
      else if (event.key == "ArrowRight") {
        if (((sessionStorage.countingTime).substring(3) >= 55) || (((sessionStorage.countingTime).substring(3) >= ((sessionStorage.fullTime).substring(3) - 5)) && ((sessionStorage.fullTime).substring(3) != "00") && ((sessionStorage.countingTime).substring(0, 2) == (sessionStorage.fullTime).substring(0, 2)))) {
          if (((sessionStorage.countingTime).substring(3) >= 55) && ((((sessionStorage.fullTime).substring(3) < 5) && ((sessionStorage.countingTime).substring(0, 2) == ((sessionStorage.fullTime).substring(0, 2) - 1))) || (((sessionStorage.fullTime).substring(3) >= 55) && ((sessionStorage.countingTime).substring(0, 2) == (sessionStorage.fullTime).substring(0, 2))))) {
            sessionStorage.seekTime = sessionStorage.fullTime;
          }
          else {
            sessionStorage.seekTime = String((sessionStorage.countingTime).substring(0, 2)).padStart(2, "0") + ":" + String(5 - (60 - (sessionStorage.countingTime).substring(3))).padStart(2, "0");
          }
        }
        else {
          sessionStorage.seekTime = (sessionStorage.countingTime).substring(0, 3) + String(+(sessionStorage.countingTime).substring(3) + 5).padStart(2, "0");
        }
        sessionStorage.progress = (sessionStorage.progress - (sessionStorage.durationDecrement * 5));
      }
    }
    else if ((event.key == "PageUp") || (event.key == "PageDown")) {
      if (event.key == "PageUp") {
        if ((sessionStorage.seekTime).substring(0, 2) == "00") {
          sessionStorage.seekTime = "00:00";
        }
        else {
          sessionStorage.seekTime = String((sessionStorage.countingTime).substring(0, 2) - 1).padStart(2, "0") + (sessionStorage.countingTime).substring(2);
        }
        sessionStorage.progress = (+sessionStorage.progress + (sessionStorage.durationDecrement * 60));
      }
      else if (event.key == "PageDown") {
        if ((sessionStorage.seekTime).substring(0, 2) == (sessionStorage.fullTime).substring(0, 2)) {
          sessionStorage.seekTime = sessionStorage.fullTime;
        }
        else {
          sessionStorage.seekTime = String(+(sessionStorage.countingTime).substring(0, 2) + 1).padStart(2, "0") + (sessionStorage.countingTime).substring(2);
        }
        sessionStorage.progress = (sessionStorage.progress - (sessionStorage.durationDecrement * 60));
      }
    }
    else if ((event.key == "Home") || (event.key == "End")) {
      if (event.key == "Home") {
        sessionStorage.seekTime = "00:00";
        sessionStorage.progress = 100;
      }
      else if (event.key == "End") {
        sessionStorage.seekTime = sessionStorage.fullTime;
        sessionStorage.progress = 0;
      }
    }
  }
  if ((event.type != "mousemove") || ((event.type == "mousemove") && (sessionStorage.mousePressed == String(true)))) {
    if (sessionStorage.progress <= 0) {
      if (sessionStorage.progress < 0) {
        sessionStorage.progress = 0;
      }
      youtubePause("overflow", event);
    }
    else {
      if (sessionStorage.progress > 100) {
        sessionStorage.progress = 100;
      }
      if (document.getElementsByClassName("audio")[sessionStorage.youtube].paused == false) {
        youtubePause("seek", event);
        if (sessionStorage.youtubePlayTimeout != undefined) {
          clearTimeout(sessionStorage.youtubePlayTimeout);
          sessionStorage.removeItem("youtubePlayTimeout");
        }
        sessionStorage.youtubePlayTimeout = setTimeout(youtubePlay, 100);
      }
    }
    document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime = (sessionStorage.duration * ((100 - sessionStorage.progress) / 100));
    document.getElementById("youtubeDuration").style.right = sessionStorage.progress + "%";
    document.getElementById("youtubeDuration").style.transition = "right 0s linear 0s";
    sessionStorage.countingTime = sessionStorage.seekTime;
    document.getElementById("youtubeCountingTime").innerHTML = "<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeMinutes\" aria-label=\"Enter the minutes of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\" contenteditable>" + (sessionStorage.countingTime).substring(0, 2) + "</span>:<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeSeconds\" aria-label=\"Enter the seconds of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\" contenteditable>" + (sessionStorage.countingTime).substring(3) + "</span>";
    document.getElementById("youtubeCountingTime").datetime = "PT" + ((sessionStorage.countingTime).substring(0, 2)).replace(/(?<=^)0/sm, "") + "M" + ((sessionStorage.countingTime).substring(3)).replace(/(?<=^)0/sm, "") + "S";
    if (document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime == 0) {
      document.getElementById("youtubeTimer").title = "Has not started";
    }
    else if ((document.getElementsByClassName("audio")[sessionStorage.youtube].ended == true) || (document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime == sessionStorage.duration)) {
      document.getElementById("youtubeTimer").title = "Has ended";
    }
    else {
      document.getElementById("youtubeTimer").title = ((sessionStorage.countingTime).substring(0, 2)).replace(/(?<=^)0/sm, "") + ((((sessionStorage.countingTime).substring(0, 2)).replace(/(?<=^)0/sm, "") == 1) ? (" minute, ") : (" minutes, ")) + ((sessionStorage.countingTime).substring(3)).replace(/(?<=^)0/sm, "") + ((((sessionStorage.countingTime).substring(3)).replace(/(?<=^)0/sm, "") == 1) ? (" second ") : (" seconds ")) + "out of " + ((sessionStorage.fullTime).substring(0, 2)).replace(/(?<=^)0/sm, "") + ((((sessionStorage.fullTime).substring(0, 2)).replace(/(?<=^)0/sm, "") == 1) ? (" minute, ") : (" minutes, ")) + ((sessionStorage.fullTime).substring(3)).replace(/(?<=^)0/sm, "") + ((((sessionStorage.fullTime).substring(3)).replace(/(?<=^)0/sm, "") == 1) ? (" second ") : (" seconds ")) + "| " + ((document.getElementsByClassName("audio")[sessionStorage.youtube].paused == true) ? ("paused") : ("playing"));
    }
  }
  document.getElementById("youtubeDurationCont").title = sessionStorage.seekTime;
}

function youtubeRestart(event) {
  if (document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime > 0) {
    youtubePause("restart", event);
    document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime = 0;
    document.getElementById("youtubeSongs").style.pointerEvents = "none";
    var transitionDuration = ((100 - (document.getElementById("youtubeDuration").style.right).replace(/\%/sm, "")) / 100);
    sessionStorage.progress = 100;
    document.getElementById("youtubeDuration").style.right = "100%";
    document.getElementById("youtubeDuration").style.transition = "right " + transitionDuration + "s linear 0s";
    document.getElementById("youtubePlayPauseButton").style.pointerEvents = "none";
    sessionStorage.countingTime = "00:00";
    document.getElementById("youtubeCountingTime").innerHTML = "<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeMinutes\" aria-label=\"Enter the minutes of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\" contenteditable>" + (sessionStorage.countingTime).substring(0, 2) + "</span>:<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeSeconds\" aria-label=\"Enter the seconds of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\" contenteditable>" + (sessionStorage.countingTime).substring(3) + "</span>";
    document.getElementById("youtubeCountingTime").datetime = "PT0M0S";
    document.getElementById("youtubeTimer").title = "Has not started";
    document.getElementById("youtubeRestart").blur();
    const reset = (x) => {
      setTimeout(() => (
        document.getElementById("youtubeSongs").style.pointerEvents = "auto"
      ), (x * 1000));
      setTimeout(() => (
        document.getElementById("youtubePlayPauseButton").style.pointerEvents = "auto"
      ), (x * 1000));
    }
    reset(transitionDuration);
  }
}

function dance() {
  for (var i = 0; i <= sessionStorage.duration; i++) {
    if (Math.floor(document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime) == i) {
      if (String(i).match(/\b(29|42|125|138|178)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Up to the left!";
      }
      else if (String(i).match(/\b(30|43|126|139|179)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Up to the right!";
      }
      else if (String(i).match(/\b(31|44|127|140|180)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Down to the left!";
      }
      else if (String(i).match(/\b(32|45|128|141|181)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Down to the right!";
      }
      else if (String(i).match(/\b(33|46|129|142|182)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Thriller!";
      }
      else if (String(i).match(/\b(34|47|130|143|183)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Another thriller!";
      }
      else if (String(i).match(/\b(35|48|131|144|184)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Roll...up!";
      }
      else if (String(i).match(/\b(36|49|132|145|185)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Back!";
      }
      else if (String(i).match(/\b(37|50|133|146|186)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Forward!";
      }
      else if (String(i).match(/\b(38|51|134|147|187)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Back (again)!";
      }
      else if (String(i).match(/\b(39|52|135|148|188)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Forward (again)!";
      }
      else if (String(i).match(/\b(40|53|136|149|189)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "Turn...around!";
      }
      else if (String(i).match(/\b(55|151|193)\b/sm)) {
        document.getElementById("danceInstructions").innerHTML = "";
      }
    }
  }
}

function fuckSlu(event) {
  document.getElementById("fuckSluButton").blur();
  sessionStorage.fuckSlu++;
  if (sessionStorage.fuckSlu < 10) {
    document.getElementById("fuckSluMessage").style.animation = "fuckSlu .5s ease 0s 1 forwards";
    const reset = () => {
      if ((document.getElementsByClassName("audio")[sessionStorage.youtube].paused == false) || (document.getElementsByClassName("audio")[sessionStorage.youtube].currentTime == 0)) {
        document.getElementById("fuckSluMessage").style.animation = "none";
      }
    }
    setTimeout(reset, 500);
    if (sessionStorage.fuckSlu == 1) {
      console.log("Sweeeeeet Carolineeeeee...FUCK YOU SLU!!!");
    }
    else if (sessionStorage.fuckSlu > 1) {
      console.log("FUCK SLU!");
    }
  }
  else if (sessionStorage.fuckSlu == 10) {
    closeYoutubeSong(event);
    document.getElementById("troyLassialTalk").innerHTML = "You know, it's not very sportsmanlike to use vulgar language to demean the other team like this. I'm afraid I'm going to have to ban <i>Sweet Caroline</i> to make sure this doesn't happen again. Oh, and you lose a life, too.";
    troyLassialEntrance();
    compileSound("sawtooth", ["exponential", 140, 90, .25], ["none", 1, null, 0], .25);
  }
}

function closeYoutubeSong(event) {
  document.getElementsByClassName("audio")[sessionStorage.youtube].onended = null;
  sessionStorage.removeItem("scope");
  youtubePause("exit", event);
  if ((sessionStorage.youtube != 52) || (sessionStorage.fuckSlu < 10)) {
    document.getElementById("cover").style.visibility = "hidden";
    document.getElementById("cover").style.opacity = "0%";
    document.getElementById("cover").style.transition = "all .25s ease .25s";
    document.getElementById("cover").tabIndex = "-1";
    document.getElementById("cover").blur();
  }
  document.getElementById("youtubeSongsContCont").style.transform = "scale(0)";
  document.getElementById("youtubeSongsContCont").style.transition = "transform .5s ease 0s";
  document.getElementById("youtubeSongsContCont").tabIndex = "-1";
  document.getElementById("youtubeSongsContCont").blur();
  document.getElementById("youtubeSongs").style.pointerEvents = "none";
  document.getElementById("youtubeSongs").tabIndex = "-1";
  document.getElementById("youtubeSongs").blur();
  document.getElementById("youtubeToolbar").tabIndex = "-1";
  document.getElementById("youtubeToolbar").blur();
  document.getElementById("youtubePlayPauseButton").style.pointerEvents = "none";
  document.getElementById("youtubePlayPauseButton").tabIndex = "-1";
  document.getElementById("youtubePlayPauseButton").blur();
  document.getElementById("youtubeCountingTime").innerHTML = "<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeMinutes\" aria-label=\"Enter the minutes of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\">" + (sessionStorage.countingTime).substring(0, 2) + "</span>:<span class=\"youtubeCountingTimeUnits\" id=\"youtubeCountingTimeSeconds\" aria-label=\"Enter the seconds of the timestamp that you want to jump to\" onkeydown=\"youtubeControls(event)\" onfocus=\"arriveEditor(event)\" onblur=\"leaveEditor(event)\" oninput=\"youtubeEdit(event)\">" + (sessionStorage.countingTime).substring(3) + "</span>";
  document.getElementById("youtubeRestart").style.pointerEvents = "none";
  document.getElementById("youtubeRestart").tabIndex = "-1";
  document.getElementById("youtubeRestart").blur();
  document.getElementById("youtubeSkip").style.pointerEvents = "none";
  document.getElementById("youtubeSkip").tabIndex = "-1";
  document.getElementById("youtubeSkip").blur();
  document.getElementById("youtubeExit").style.pointerEvents = "none";
  document.getElementById("youtubeExit").tabIndex = "-1";
  document.getElementById("youtubeExit").blur();
  if (sessionStorage.youtube == 14) {
    document.getElementById("danceInstructions").style.visibility = "hidden";
    document.getElementById("danceInstructions").style.opacity = "0%";
    document.getElementById("danceInstructions").style.transition = "all 0s ease .5s";
  }
  else if (sessionStorage.youtube == 52) {
    document.getElementById("fuckSluButtonCont").style.visibility = "hidden";
    document.getElementById("fuckSluButtonCont").style.opacity = "0%";
    document.getElementById("fuckSluButtonCont").style.transition = "all 0s ease .5s";
    document.getElementById("fuckSluButton").tabIndex = "-1";
    document.getElementById("fuckSluButton").blur();
  }
  document.onclick = collapse;
  document.ondblclick = showPassword;
  document.onkeydown = collapse;
  document.onkeyup = null;
  sessionStorage.removeItem("shortcut");
  Object.keys(keyboard).forEach((key) => {
    if (keyboard[key] == true) {
      keyboard[key] = false;
    }
  });
  setTimeout(() => (
    document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
  ), 500);
  setTimeout(() => (
    document.getElementById("viewAccountToggle").tabIndex = "0"
  ), 500);
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    setTimeout(() => (
      document.getElementById("conductorTalkCont").tabIndex = "0"
    ), 500);
  }
  setTimeout(() => (
    document.getElementById("conductorCont").tabIndex = "0"
  ), 500);
  setTimeout(enableButton, 500);
  newFunction();
}

function gotIt20() {
  if (sessionStorage.clarksonScore < sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "The puck is now getting dropped for the third period! There's still time to turn this game around!";
  }
  else if (sessionStorage.clarksonScore == sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "The puck is now getting dropped for the third period! This is it, we've got to make it count!";
  }
  else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "The puck is now getting dropped for the third period! Let's see how badly we can crush those SLUzers!";
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var disableClassLists = [
    "false"
  ];
  var disableStyles = [
    "j == 15"
  ];
  disableCheers(disableClassLists, disableStyles);
  var enableClassLists = [
    "j == 0",
    "j == 17",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 30",
    "j == 31",
    "(j == 34) && (sessionStorage.gender == 1)",
    "j == 41",
    "j == 50",
    "j == 53",
    "j == 55"
  ];
  var enableStyles = [
    "j == 0",
    "j == 17",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 30",
    "j == 31",
    "j == 34",
    "j == 41",
    "j == 50",
    "j == 53",
    "j == 55"
  ];
  enableCheers(enableClassLists, enableStyles);
  sessionStorage.period++;
  document.getElementById("scoreboardPeriod").innerHTML = sessionStorage.period;
  for (var i = 0; i < document.getElementsByClassName("flip").length; i++) {
    document.getElementById("sluVictoryMessageCont").style.gridColumnStart = "1";
    document.getElementById("clarksonVictoryMessageCont").style.gridColumnStart = "2";
    if ((document.getElementsByClassName("flip")[i].classList.contains("playerStatsCont")) && (document.getElementsByClassName("flip")[i].classList.contains("unToggledStatsCont"))) {
      document.getElementsByClassName("flip")[i].style.transform = "scale(0)";
    }
    else {
      document.getElementsByClassName("flip")[i].style.transform = "scaleX(1)";
    }
    if (document.getElementsByClassName("flip")[i] == document.getElementById("rink")) {
      document.getElementById("rink").style.transition = "transform 1s ease 0s";
    }
    else {
      document.getElementsByClassName("flip")[i].style.transition = "transform 0s ease .5s";
    }
  }
  document.getElementById("goalMessages").style.visibility = "visible";
  document.getElementById("goalMessages").style.opacity = "100%";
  document.getElementById("goalMessages").style.transition = "visibility 0s ease 0s, opacity 0s ease 0s, transform 0s ease .5s";
  document.getElementById("puck").style.visibility = "visible";
  document.getElementById("puck").style.top = "50%";
  document.getElementById("puck").style.opacity = "100%";
  document.getElementById("puck").style.transition = "visibility .25s ease 1.5s, top 1s ease 2.25s, opacity .25s ease 1.5s";
  sessionStorage.position = 5;
  sessionStorage.scorer = 4;
  sessionStorage.songPrime = 61;
  setTimeout(enableButton, 3500);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 21;
  sessionStorage.functionPrime = "gamePlay";
}

function gotIt21() {
  if (sessionStorage.clarksonScore < sessionStorage.sluScore) {
    sessionStorage.won = false;
    lose();
  }
  else if (sessionStorage.clarksonScore == sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "It's a tied game! Looks like we'll be going into overtime to settle this once and for all!";
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
      sessionStorage.backup = "";
    }
    disableButton();
    sessionStorage.period = "OT";
    document.getElementById("scoreboardPeriod").innerHTML = sessionStorage.period;
    for (var i = 0; i < document.getElementsByClassName("flip").length; i++) {
      document.getElementById("sluVictoryMessageCont").style.gridColumnStart = "2";
      document.getElementById("clarksonVictoryMessageCont").style.gridColumnStart = "1";
      if ((document.getElementsByClassName("flip")[i].classList.contains("playerStatsCont")) && (document.getElementsByClassName("flip")[i].classList.contains("unToggledStatsCont"))) {
        document.getElementsByClassName("flip")[i].style.transform = "scale(0)";
      }
      else {
        document.getElementsByClassName("flip")[i].style.transform = "scaleX(-1)";
      }
      if (document.getElementsByClassName("flip")[i] == document.getElementById("rink")) {
        document.getElementById("rink").style.transition = "transform 1s ease 0s";
      }
      else {
        document.getElementsByClassName("flip")[i].style.transition = "transform 0s ease .5s";
      }
    }
    setTimeout(enableButton, 1000);
    document.getElementById("ok").onclick = function() {
      overtime();
      compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
    };
    sessionStorage.functionPrime = "overtime";
    console.log("Time to pull another Chokenell victory out of our asses!");
  }
  else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
    sessionStorage.won = true;
    win();
  }
  var disableClassLists = [
    "(j == 2) && ((sessionStorage.goal == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\")))",
    "(j == 8) && (sessionStorage.goal == 1)",
    "(j == 21) && (sessionStorage.goal == 1)",
    "(j == 25) && ((sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 35) && (sessionStorage.goal == 1)",
    "(j == 36) && (sessionStorage.goal == 1)",
    "(j == 44) && ((sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 56) && (sessionStorage.goal == 1)",
    "(j == 58) && (sessionStorage.goal == 1)",
    "(j == 59) && (sessionStorage.goal == 1)"
  ];
  var disableStyles = [
    "(j == 2) && ((sessionStorage.goal == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\")))",
    "(j == 8) && (sessionStorage.goal == 1)",
    "(j == 21) && (sessionStorage.goal == 1)",
    "(j == 25) && ((sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 35) && (sessionStorage.goal == 1)",
    "(j == 36) && (sessionStorage.goal == 1)",
    "(j == 44) && ((sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 56) && (sessionStorage.goal == 1)",
    "(j == 58) && (sessionStorage.goal == 1)",
    "(j == 59) && (sessionStorage.goal == 1)"
  ];
  disableCheers(disableClassLists, disableStyles);
}

function overtime() {
  var disableClassLists = [
    "(j == 5) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 12) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 14) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.sluTimeout == 2))",
    "(j == 19) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 20) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 23) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.sluTimeout != \"ejection\"))",
    "(j == 25) && ((sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 26) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 38) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 44) && ((sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 45) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 46) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 47) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 48) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 54) && ((sessionStorage.penalty == 2) && (sessionStorage.team == 2))",
    "(j == 57) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.offence == 12) && (sessionStorage.gender == 1))",
  ];
  var disableStyles = [
    "(j == 4) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 5) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 12) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 14) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.sluTimeout == 2))",
    "(j == 19) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 20) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 23) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.sluTimeout != \"ejection\"))",
    "(j == 25) && ((sessionStorage.goal == 2) && (sessionStorage.block == 1))",
    "(j == 26) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 38) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 44) && ((sessionStorage.goal == 1) && (sessionStorage.block == 1))",
    "(j == 45) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 46) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 47) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 48) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 1))",
    "(j == 54) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2))",
    "(j == 57) && ((sessionStorage.penalty == 1) && (sessionStorage.team == 2) && (sessionStorage.offence == 12) && (sessionStorage.gender == 1))",
  ];
  disableCheers(disableClassLists, disableStyles);
  sessionStorage.penalty = Math.ceil(Math.random() * 10);
  if ((sessionStorage.penalty == 1) && ((sessionStorage.clarksonTimeout == 0) || (sessionStorage.sluTimeout == 0))) {
    penalty();
  }
  else {
    disableButton();
    if ((sessionStorage.clarksonTimeout == 0) && ((sessionStorage.sluTimeout > 0) || (sessionStorage.sluTimeout == "ejection"))) {
      sessionStorage.goal = Math.ceil(Math.random() * 3);
      if (sessionStorage.goal < 3) {
        sessionStorage.goal = 1;
      }
      else if (sessionStorage.goal == 3) {
        sessionStorage.goal = 2;
      }
    }
    else if (((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == "ejection")) && (sessionStorage.sluTimeout == 0)) {
      sessionStorage.goal = Math.ceil(Math.random() * 3);
      if (sessionStorage.goal == 1) {
        sessionStorage.goal = 1;
      }
      else if (sessionStorage.goal > 1) {
        sessionStorage.goal = 2;
      }
    }
    else {
      sessionStorage.goal = Math.ceil(Math.random() * 2);
    }
    sessionStorage.goalieGoal = Math.ceil(Math.random() * 100);
    if (sessionStorage.goalieGoal > 1) {
      sessionStorage.block = Math.ceil(Math.random() * 5);
    }
    if (sessionStorage.block != 1) {
      if (sessionStorage.goal == 1) {
        if ((sessionStorage.clarksonScore == 0) || (sessionStorage.clarksonScore == 9)) {
          sessionStorage.songPrime = 69;
          document.getElementById("ok").onclick = function() {
            openSelection();
            compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
          };
          sessionStorage.functionPrime = "win";
        }
        else {
          document.getElementById("ok").onclick = function() {
            win();
            compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
          };
        }
      }
      else if (sessionStorage.goal == 2) {
        if (sessionStorage.sluScore == 0) {
          sessionStorage.songPrime = 32;
          document.getElementById("ok").onclick = function() {
            openSelection();
            compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
          };
          sessionStorage.functionPrime = "lose";
        }
        else {
          document.getElementById("ok").onclick = function() {
            lose();
            compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
          };
        }
      }
    }
    goal();
  }
}

function win() {
  if (sessionStorage.clarksonScore < 10) {
    if (sessionStorage.goalieGoal == 1) {
      if (sessionStorage.gender == 1) {
        document.getElementById("conductorTalk").innerHTML = "And with a goalie goal by Ethan Haider, it's a Golden Knight victory! I guess SLU really does still suck!";
      }
      else if (sessionStorage.gender == 2) {
        document.getElementById("conductorTalk").innerHTML = "And with a goalie goal by Michelle Pasiechnyk, it's a Golden Knight victory! I guess SLU really does still suck!";
      }
    }
    else if (sessionStorage.goalieGoal > 1) {
      document.getElementById("conductorTalk").innerHTML = "And that's a Golden Knight victory! I guess SLU really does still suck!";
    }
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  sessionStorage.removeItem("functionPrime");
  var disableClassLists = [
    "j == 0",
    "j == 8",
    "j == 21",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 30",
    "j == 31",
    "(j == 34) && (sessionStorage.gender == 1)",
    "j == 35",
    "j == 36",
    "j == 40",
    "j == 41",
    "j == 50",
    "j == 55",
    "j == 58",
    "j == 59"
  ];
  var disableStyles = [
    "j == 0",
    "j == 8",
    "j == 21",
    "(j == 22) && (sessionStorage.sluScore == 0)",
    "j == 30",
    "j == 31",
    "j == 34",
    "j == 35",
    "j == 36",
    "j == 40",
    "j == 41",
    "j == 50",
    "j == 55",
    "j == 58",
    "j == 59"
  ];
  disableCheers(disableClassLists, disableStyles);
  var enableClassLists = [
    "j == 27"
  ];
  var enableStyles = [
    "j == 27"
  ];
  enableCheers(enableClassLists, enableStyles);
  document.getElementById("goalMessages").style.visibility = "hidden";
  document.getElementById("goalMessages").style.opacity = "0%";
  document.getElementById("goalMessages").style.transition = "all 0s ease 0s";
  if ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == "ejection")) {
    var disableClassLists = [
      "j == 10"
    ];
    var disableStyles = [
      "j == 10"
    ];
    disableCheers(disableClassLists, disableStyles);
    document.getElementById("offenderName").innerHTML = "our Golden Knights";
    document.getElementById("cage" + sessionStorage.clarksonCage).style.visibility = "hidden";
    document.getElementById("cage" + sessionStorage.clarksonCage).style.opacity = "0%";
    document.getElementById("cage" + sessionStorage.clarksonCage).style.transition = "all .25s ease 0s";
    sessionStorage.removeItem("clarksonCage");
  }
  if ((sessionStorage.sluTimeout > 0) || (sessionStorage.sluTimeout == "ejection")) {
    document.getElementById("cage" + sessionStorage.sluCage).style.visibility = "hidden";
    document.getElementById("cage" + sessionStorage.sluCage).style.opacity = "0%";
    document.getElementById("cage" + sessionStorage.sluCage).style.transition = "all .25s ease 0s";
    sessionStorage.removeItem("sluCage");
  }
  document.getElementById("puck").style.visibility = "hidden";
  document.getElementById("puck").style.opacity = "0%";
  document.getElementById("puck").style.transition = "all .25s ease 0s";
  if (sessionStorage.gender == 1) {
    for (var i = 0; i < document.getElementsByClassName("menStatsCont").length; i++) {
      if (document.getElementsByClassName("menStatsCont")[i].classList.contains("toggledStatsCont")) {
        hideStats((i + 1), "click");
      }
    }
    for (var i = 0; i < document.getElementsByClassName("sluMenPlayer").length; i++) {
      document.getElementsByClassName("sluMenPlayer")[i].style.visibility = "hidden";
      document.getElementsByClassName("sluMenPlayer")[i].style.opacity = "0%";
      document.getElementsByClassName("sluMenPlayer")[i].style.transition = "all 1s ease 0s";
      document.getElementsByClassName("sluMenPlayer")[i].tabIndex = "-1";
      document.getElementsByClassName("sluMenPlayer")[i].blur();
    }
    for (var i = 0; i < document.getElementsByClassName("clarksonMenPlayer").length; i++) {
      document.getElementsByClassName("clarksonMenPlayer")[i].style.transform = "scale(1.5)";
      document.getElementsByClassName("clarksonMenPlayer")[i].style.pointerEvents = "none";
      if (i == 0) {
        document.getElementById("ethanHaider").style.borderBottomRightRadius = ".8em";
        document.getElementById("ethanHaider").style.transition = "all 1s ease 0s";
      }
      else if (i > 0) {
        document.getElementsByClassName("clarksonMenPlayer")[i].style.transition = "transform 1s ease 0s";
      }
    }
  }
  else if (sessionStorage.gender == 2) {
    for (var i = 0; i < document.getElementsByClassName("womenStatsCont").length; i++) {
      if (document.getElementsByClassName("womenStatsCont")[i].classList.contains("toggledStatsCont")) {
        hideStats((i + 1), "click");
      }
    }
    for (var i = 0; i < document.getElementsByClassName("sluWomenPlayer").length; i++) {
      document.getElementsByClassName("sluWomenPlayer")[i].style.visibility = "hidden";
      document.getElementsByClassName("sluWomenPlayer")[i].style.opacity = "0%";
      document.getElementsByClassName("sluWomenPlayer")[i].style.transition = "all 1s ease 0s";
      document.getElementsByClassName("sluWomenPlayer")[i].tabIndex = "-1";
      document.getElementsByClassName("sluWomenPlayer")[i].blur();
    }
    for (var i = 0; i < document.getElementsByClassName("clarksonWomenPlayer").length; i++) {
      document.getElementsByClassName("clarksonWomenPlayer")[i].style.transform = "scale(1.5)";
      document.getElementsByClassName("clarksonWomenPlayer")[i].style.pointerEvents = "none";
      if (i == 0) {
        document.getElementById("michellePasiechnyk").style.borderBottomRightRadius = ".8em";
        document.getElementById("michellePasiechnyk").style.transition = "all 1s ease 0s";
      }
      else if (i > 0) {
        document.getElementsByClassName("clarksonWomenPlayer")[i].style.transition = "transform 1s ease 0s";
      }
    }
  }
  document.getElementById("clarksonVictoryMessageCont").style.visibility = "visible";
  document.getElementById("clarksonVictoryMessageCont").style.opacity = "100%";
  document.getElementById("clarksonVictoryMessageCont").style.transition = "all 0s ease 1s";
  document.getElementById("victoryMessages").style.visibility = "visible";
  document.getElementById("victoryMessages").style.opacity = "100%";
  document.getElementById("victoryMessages").style.transition = "all 0s ease 1s";
  document.getElementById("golden").style.visibility = "visible";
  document.getElementById("golden").style.opacity = "100%";
  document.getElementById("golden").style.transition = "all .25s ease 1s";
  document.getElementById("knight").style.visibility = "visible";
  document.getElementById("knight").style.opacity = "100%";
  document.getElementById("knight").style.transition = "all .25s ease 1.75s";
  document.getElementById("victoryClarkson").style.visibility = "visible";
  document.getElementById("victoryClarkson").style.opacity = "100%";
  document.getElementById("victoryClarkson").style.transition = "all .25s ease 2.5s";
  setTimeout(enableButton, 2750);
  document.getElementById("ok").onclick = function() {
    gotIt22();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
}

function lose() {
  if (sessionStorage.goalieGoal == 1) {
    if (sessionStorage.gender == 1) {
      document.getElementById("conductorTalk").innerHTML = "Oh no, we lost with a goalie goal by Daniel Allin! How'd this happen? The game must have been rigged!";
    }
    else if (sessionStorage.gender == 2) {
      document.getElementById("conductorTalk").innerHTML = "Oh no, we lost with a goalie goal by Hope Crisafi! How'd this happen? The game must have been rigged!";
    }
  }
  else if (sessionStorage.goalieGoal > 1) {
    document.getElementById("conductorTalk").innerHTML = "Oh no, we lost! How'd this happen? The game must have been rigged!";
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  sessionStorage.removeItem("functionPrime");
  var disableClassLists = [
    "j == 0",
    "(j == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\"))",
    "j == 30",
    "j == 31",
    "(j == 34) && (sessionStorage.gender == 1)",
    "j == 41",
    "j == 50",
    "j == 55",
    "j == 56",
  ];
  var disableStyles = [
    "j == 0",
    "(j == 2) && ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == \"ejection\"))",
    "j == 30",
    "j == 31",
    "j == 34",
    "j == 41",
    "j == 50",
    "j == 55",
    "j == 56",
  ];
  disableCheers(disableClassLists, disableStyles);
  document.getElementById("goalMessages").style.visibility = "hidden";
  document.getElementById("goalMessages").style.opacity = "0%";
  document.getElementById("goalMessages").style.transition = "all 0s ease 0s";
  if ((sessionStorage.clarksonTimeout > 0) || (sessionStorage.clarksonTimeout == "ejection")) {
    var disableClassLists = [
      "j == 10"
    ];
    var disableStyles = [
      "j == 10"
    ];
    disableCheers(disableClassLists, disableStyles);
    document.getElementById("offenderName").innerHTML = "our Golden Knights";
    document.getElementById("cage" + sessionStorage.clarksonCage).style.visibility = "hidden";
    document.getElementById("cage" + sessionStorage.clarksonCage).style.opacity = "0%";
    document.getElementById("cage" + sessionStorage.clarksonCage).style.transition = "all .25s ease 0s";
    sessionStorage.removeItem("clarksonCage");
  }
  if ((sessionStorage.sluTimeout > 0) || (sessionStorage.sluTimeout == "ejection")) {
    document.getElementById("cage" + sessionStorage.sluCage).style.visibility = "hidden";
    document.getElementById("cage" + sessionStorage.sluCage).style.opacity = "0%";
    document.getElementById("cage" + sessionStorage.sluCage).style.transition = "all .25s ease 0s";
    sessionStorage.removeItem("sluCage");
  }
  document.getElementById("puck").style.visibility = "hidden";
  document.getElementById("puck").style.opacity = "0%";
  document.getElementById("puck").style.transition = "all .25s ease 0s";
  if (sessionStorage.gender == 1) {
    for (var i = 0; i < document.getElementsByClassName("menStatsCont").length; i++) {
      if (document.getElementsByClassName("menStatsCont")[i].classList.contains("toggledStatsCont")) {
        hideStats((i + 1), "click");
      }
    }
    for (var i = 0; i < document.getElementsByClassName("clarksonMenPlayer").length; i++) {
      document.getElementsByClassName("clarksonMenPlayer")[i].style.visibility = "hidden";
      document.getElementsByClassName("clarksonMenPlayer")[i].style.opacity = "0%";
      document.getElementsByClassName("clarksonMenPlayer")[i].style.transition = "all 1s ease 0s";
      document.getElementsByClassName("clarksonMenPlayer")[i].tabIndex = "-1";
      document.getElementsByClassName("clarksonMenPlayer")[i].blur();
    }
    for (var i = 0; i < document.getElementsByClassName("sluMenPlayer").length; i++) {
      document.getElementsByClassName("sluMenPlayer")[i].style.transform = "scale(1.5)";
      document.getElementsByClassName("sluMenPlayer")[i].style.pointerEvents = "none";
      if (i == 5) {
        document.getElementById("danielAllin").style.borderBottomLeftRadius = ".8em";
        document.getElementById("danielAllin").style.transition = "all 1s ease 0s";
      }
      else if (i < 5) {
        document.getElementsByClassName("sluMenPlayer")[i].style.transition = "transform 1s ease 0s";
      }
    }
  }
  else if (sessionStorage.gender == 2) {
    for (var i = 0; i < document.getElementsByClassName("womenStatsCont").length; i++) {
      if (document.getElementsByClassName("womenStatsCont")[i].classList.contains("toggledStatsCont")) {
        hideStats((i + 1), "click");
      }
    }
    for (var i = 0; i < document.getElementsByClassName("clarksonWomenPlayer").length; i++) {
      document.getElementsByClassName("clarksonWomenPlayer")[i].style.visibility = "hidden";
      document.getElementsByClassName("clarksonWomenPlayer")[i].style.opacity = "0%";
      document.getElementsByClassName("clarksonWomenPlayer")[i].style.transition = "all 1s ease 0s";
      document.getElementsByClassName("clarksonWomenPlayer")[i].tabIndex = "-1";
      document.getElementsByClassName("clarksonWomenPlayer")[i].blur();
    }
    for (var i = 0; i < document.getElementsByClassName("sluWomenPlayer").length; i++) {
      document.getElementsByClassName("sluWomenPlayer")[i].style.transform = "scale(1.5)";
      document.getElementsByClassName("sluWomenPlayer")[i].style.pointerEvents = "none";
      if (i == 5) {
        document.getElementById("hopeCrisafi").style.borderBottomLeftRadius = ".8em";
        document.getElementById("hopeCrisafi").style.transition = "all 1s ease 0s";
      }
      else if (i < 5) {
        document.getElementsByClassName("sluWomenPlayer")[i].style.transition = "transform 1s ease 0s";
      }
    }
  }
  document.getElementById("sluVictoryMessageCont").style.visibility = "visible";
  document.getElementById("sluVictoryMessageCont").style.opacity = "100%";
  document.getElementById("sluVictoryMessageCont").style.transition = "all 0s ease 1s";
  document.getElementById("victoryMessages").style.visibility = "visible";
  document.getElementById("victoryMessages").style.opacity = "100%";
  document.getElementById("victoryMessages").style.transition = "all .25s ease 1s";
  document.getElementById("saints").style.transform = "rotate(20deg)";
  document.getElementById("saints").style.transition = "transform 0s ease 4s";
  document.getElementById("saints").style.animation = "saintsHang .25s ease 3.75s 1 forwards";
  setTimeout(() => (
    document.getElementById("saints").style.animation = "none"
  ), 4000);
  document.getElementById("victorySlu").style.transform = "rotate(80deg)";
  document.getElementById("victorySlu").style.transition = "transform 0s ease 4s";
  document.getElementById("victorySlu").style.animation = "victoryHang 1.75s ease 2.25s 1 forwards";
  setTimeout(() => (
    document.getElementById("victorySlu").style.animation = "victoryFlicker 10s ease 0s infinite forwards"
  ), 4000);
  setTimeout(enableButton, 4000);
  document.getElementById("ok").onclick = function() {
    gotIt23();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
}

function gotIt22() {
  document.getElementById("conductorTalk").innerHTML = "Goodbye, SLUzers, you won't be missed! Let's mock them as they go!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  document.getElementById("victoryMessages").style.visibility = "hidden";
  document.getElementById("victoryMessages").style.opacity = "0%";
  document.getElementById("victoryMessages").style.transition = "all .25s ease 0s";
  document.getElementById("clarksonVictoryMessageCont").style.visibility = "hidden";
  document.getElementById("clarksonVictoryMessageCont").style.opacity = "0%";
  document.getElementById("clarksonVictoryMessageCont").style.transition = "all 0s ease .25s";
  document.getElementById("golden").style.visibility = "hidden";
  document.getElementById("golden").style.opacity = "0%";
  document.getElementById("golden").style.transition = "all 0s ease .25s";
  document.getElementById("knight").style.visibility = "hidden";
  document.getElementById("knight").style.opacity = "0%";
  document.getElementById("knight").style.transition = "all 0s ease .25s";
  document.getElementById("victoryClarkson").style.visibility = "hidden";
  document.getElementById("victoryClarkson").style.opacity = "0%";
  document.getElementById("victoryClarkson").style.transition = "all 0s ease .25s";
  document.getElementById("handCont").style.visibility = "visible";
  document.getElementById("handCont").style.opacity = "100%";
  document.getElementById("handCont").style.transition = "all .25s ease .25s";
  document.getElementById("hand").style.transform = "rotate(30deg)";
  document.getElementById("hand").style.transition = "transform .5s ease .75s";
  document.getElementById("hand").style.animation = "wave 2.5s ease 1.25s infinite forwards";
  sessionStorage.songPrime = 31;
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 23;
}

function gotIt23() {
  document.getElementById("conductorTalk").innerHTML = "How about one last song to end the knight on a high note? I'll give you a hint: Troy Lassial wouldn't approve!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var enableClassLists = [
    "j == 13"
  ];
  var enableStyles = [
    "j == 13"
  ];
  enableCheers(enableClassLists, enableStyles);
  if (sessionStorage.clarksonScore < sessionStorage.sluScore) {
    document.getElementById("victoryMessages").style.visibility = "hidden";
    document.getElementById("victoryMessages").style.opacity = "0%";
    document.getElementById("victoryMessages").style.transition = "all .25s ease 0s";
    document.getElementById("sluVictoryMessageCont").style.visibility = "hidden";
    document.getElementById("sluVictoryMessageCont").style.opacity = "0%";
    document.getElementById("sluVictoryMessageCont").style.transition = "all 0s ease .25s";
    if (sessionStorage.gender == 1) {
      for (var i = 0; i < document.getElementsByClassName("sluMenPlayer").length; i++) {
        if (i == 5) {
          var animationName = 1;
          var animationDuration = 6.5;
          var animationDelay = (((i - 5) / 2) + .25);
        }
        else {
          var animationName = (i + 2);
          if (i < 2) {
            var animationDuration = 6.75;
          }
          else if ((i >= 2) && (i < 5)) {
            var animationDuration = 7.25;
          }
          var animationDelay = (((i + 1) / 2) + .25);
        }
        var transitionDelay = (animationDuration + animationDelay);
        document.getElementsByClassName("sluMenPlayer")[i].style.visibility = "hidden";
        if (i == 5) {
          document.getElementById("danielAllin").style.left = "2em";
          document.getElementById("danielAllin").style.bottom = "0";
        }
        else if (i < 5) {
          document.getElementsByClassName("sluMenPlayer")[i].style.right = "-18em";
          document.getElementsByClassName("sluMenPlayer")[i].style.bottom = "12em";
        }
        document.getElementsByClassName("sluMenPlayer")[i].style.opacity = "0%";
        document.getElementsByClassName("sluMenPlayer")[i].style.transition = "all 0s ease " + transitionDelay + "s";
        document.getElementsByClassName("sluMenPlayer")[i].style.animation = "sluPlayer" + animationName + "Exit " + animationDuration + "s linear " + animationDelay + "s 1 forwards";
        const reset = (x, y) => {
          setTimeout(() => (
            document.getElementsByClassName("sluMenPlayer")[x].style.animation = "none"
          ), y);
          setTimeout(() => (
            document.getElementsByClassName("sluMenPlayer")[x].tabIndex = "-1"
          ), y);
          setTimeout(() => (
            document.getElementsByClassName("sluMenPlayer")[x].blur()
          ), y);
        }
        reset(i, (transitionDelay * 1000));
      }
    }
    else if (sessionStorage.gender == 2) {
      for (var i = 0; i < document.getElementsByClassName("sluWomenPlayer").length; i++) {
        if (i == 5) {
          var animationName = 1;
          var animationDuration = 6.5;
          var animationDelay = (((i - 5) / 2) + .25);
        }
        else {
          var animationName = (i + 2);
          if (i < 2) {
            var animationDuration = 6.75;
          }
          else if ((i >= 2) && (i < 5)) {
            var animationDuration = 7.25;
          }
          var animationDelay = (((i + 1) / 2) + .25);
        }
        var transitionDelay = (animationDuration + animationDelay);
        document.getElementsByClassName("sluWomenPlayer")[i].style.visibility = "hidden";
        if (i == 5) {
          document.getElementById("hopeCrisafi").style.left = "2em";
          document.getElementById("hopeCrisafi").style.bottom = "0";
        }
        else if (i < 5) {
          document.getElementsByClassName("sluWomenPlayer")[i].style.right = "-18em";
          document.getElementsByClassName("sluWomenPlayer")[i].style.bottom = "12em";
        }
        document.getElementsByClassName("sluWomenPlayer")[i].style.opacity = "0%";
        document.getElementsByClassName("sluWomenPlayer")[i].style.transition = "all 0s ease " + transitionDelay + "s";
        document.getElementsByClassName("sluWomenPlayer")[i].style.animation = "sluPlayer" + animationName + "Exit " + animationDuration + "s linear " + animationDelay + "s 1 forwards";
        const reset = (x, y) => {
          setTimeout(() => (
            document.getElementsByClassName("sluWomenPlayer")[x].style.animation = "none"
          ), y);
          setTimeout(() => (
            document.getElementsByClassName("sluWomenPlayer")[x].tabIndex = "-1"
          ), y);
          setTimeout(() => (
            document.getElementsByClassName("sluWomenPlayer")[x].blur()
          ), y);
        }
        reset(i, (transitionDelay * 1000));
      }
    }
  }
  else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
    document.getElementById("handCont").style.visibility = "hidden";
    document.getElementById("handCont").style.opacity = "0%";
    document.getElementById("handCont").style.transition = "all .25s ease 0s";
    if (sessionStorage.gender == 1) {
      for (var i = 0; i < document.getElementsByClassName("clarksonMenPlayer").length; i++) {
        var animationName = (i + 1);
        if (i == 0) {
          var animationDuration = 6.5;
        }
        else if ((i >= 1) && (i < 3)) {
          var animationDuration = 6.75;
        }
        else if ((i >= 3) && (i < 6)) {
          var animationDuration = 7.25;
        }
        var animationDelay = ((i / 2) + .25);
        var transitionDelay = (animationDuration + animationDelay);
        document.getElementsByClassName("clarksonMenPlayer")[i].style.visibility = "hidden";
        if (i == 0) {
          document.getElementById("ethanHaider").style.right = "2em";
          document.getElementById("ethanHaider").style.bottom = "0";
        }
        else if (i > 0) {
          document.getElementsByClassName("clarksonMenPlayer")[i].style.left = "-18em";
          document.getElementsByClassName("clarksonMenPlayer")[i].style.bottom = "12em";
        }
        document.getElementsByClassName("clarksonMenPlayer")[i].style.opacity = "0%";
        document.getElementsByClassName("clarksonMenPlayer")[i].style.transition = "all 0s ease " + transitionDelay + "s";
        document.getElementsByClassName("clarksonMenPlayer")[i].style.animation = "clarksonPlayer" + animationName + "Exit " + animationDuration + "s linear " + animationDelay + "s 1 forwards";
        const reset = (x, y) => {
          setTimeout(() => (
            document.getElementsByClassName("clarksonMenPlayer")[x].style.animation = "none"
          ), y);
          setTimeout(() => (
            document.getElementsByClassName("clarksonMenPlayer")[x].tabIndex = "-1"
          ), y);
          setTimeout(() => (
            document.getElementsByClassName("clarksonMenPlayer")[x].blur()
          ), y);
        }
        reset(i, (transitionDelay * 1000));
      }
    }
    else if (sessionStorage.gender == 2) {
      for (var i = 0; i < document.getElementsByClassName("clarksonWomenPlayer").length; i++) {
        var animationName = (i + 1);
        if (i == 0) {
          var animationDuration = 6.5;
        }
        else if ((i >= 1) && (i < 3)) {
          var animationDuration = 6.75;
        }
        else if ((i >= 3) && (i < 6)) {
          var animationDuration = 7.25;
        }
        var animationDelay = ((i / 2) + .25);
        var transitionDelay = (animationDuration + animationDelay);
        document.getElementsByClassName("clarksonWomenPlayer")[i].style.visibility = "hidden";
        if (i == 0) {
          document.getElementById("michellePasiechnyk").style.right = "2em";
          document.getElementById("michellePasiechnyk").style.bottom = "0";
        }
        else if (i > 0) {
          document.getElementsByClassName("clarksonWomenPlayer")[i].style.left = "-18em";
          document.getElementsByClassName("clarksonWomenPlayer")[i].style.bottom = "12em";
        }
        document.getElementsByClassName("clarksonWomenPlayer")[i].style.opacity = "0%";
        document.getElementsByClassName("clarksonWomenPlayer")[i].style.transition = "all 0s ease " + transitionDelay + "s";
        document.getElementsByClassName("clarksonWomenPlayer")[i].style.animation = "clarksonPlayer" + animationName + "Exit " + animationDuration + "s linear " + animationDelay + "s 1 forwards";
        const reset = (x, y) => {
          setTimeout(() => (
            document.getElementsByClassName("clarksonWomenPlayer")[x].style.animation = "none"
          ), y);
          setTimeout(() => (
            document.getElementsByClassName("clarksonWomenPlayer")[x].tabIndex = "-1"
          ), y);
          setTimeout(() => (
            document.getElementsByClassName("clarksonWomenPlayer")[x].blur()
          ), y);
        }
        reset(i, (transitionDelay * 1000));
      }
    }
  }
  sessionStorage.songPrime = 55;
  setTimeout(enableButton, 9750);
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.function = 24;
  console.log("I missed tequila!");
}

function gotIt24() {
  if ((sessionStorage.lives >= 1) && (sessionStorage.lives < 3)) {
    document.getElementById("conductorTalk").innerHTML = "Looks like you made it, although not without your fair share of screw ups. We've still got a lot of work to do if you're going to be a conductor.";
    document.getElementById("congrats").innerHTML = "Nice Job!"
  }
  else if ((sessionStorage.lives >= 3) && (sessionStorage.lives < 6)) {
    document.getElementById("conductorTalk").innerHTML = "Not bad, not bad at all! I'm glad you were here to fill in for me while I was taking care of my sick mama. We'll make a fine conductor out of you yet!";
    document.getElementById("congrats").innerHTML = "Good Job!"
  }
  else if (sessionStorage.lives == 6) {
    if (sessionStorage.clarksonScore < sessionStorage.sluScore) {
      document.getElementById("conductorTalk").innerHTML = "Absolutely terrific! You're the best damn conductor I've ever seen! Our hockey team might have lost the game, but you won the knight!";
    }
    else if (sessionStorage.clarksonScore == sessionStorage.sluScore) {
      document.getElementById("conductorTalk").innerHTML = "Absolutely terrific! You're the best damn conductor I've ever seen!";
    }
    else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
      document.getElementById("conductorTalk").innerHTML = "Absolutely terrific! You're the best damn conductor I've ever seen! Toknight was a win for Clarkson both on the ice and off!";
    }
    document.getElementById("congrats").innerHTML = "Great Job!"
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  var disableClassLists = [
    "j == 13",
    "(j == 27) && (sessionStorage.clarksonScore > sessionStorage.sluScore)"
  ];
  var disableStyles = [
    "j == 13",
    "(j == 27) && (sessionStorage.clarksonScore > sessionStorage.sluScore)"
  ];
  disableCheers(disableClassLists, disableStyles);
  for (var i = 0; i < document.getElementsByClassName("disappearExt").length; i++) {
    document.getElementsByClassName("disappearExt")[i].style.visibility = "hidden";
    document.getElementsByClassName("disappearExt")[i].style.opacity = "0%";
    document.getElementsByClassName("disappearExt")[i].style.transition = "all 1s ease 0s";
  }
  document.getElementById("scoreboard").tabIndex = "-1";
  document.getElementById("scoreboard").blur();
  document.getElementById("cheersContContCont").tabIndex = "-1";
  document.getElementById("cheersContContCont").blur();
  if (document.getElementById("cheers").scrollHeight > document.getElementById("cheers").offsetHeight) {
    if (document.getElementById("cheers").scrollTop > 0) {
      document.getElementById("backToTop").style.pointerEvents = "none";
      document.getElementById("backToTop").tabIndex = "-1";
    }
    document.getElementById("backToTop").blur();
    document.getElementById("cheers").tabIndex = "-1";
    document.getElementById("cheers").blur();
  }
  for (var i = 0; i < document.getElementsByClassName("lifeCont").length; i++) {
    document.getElementsByClassName("lifeCont")[i].tabIndex = "-1";
    document.getElementsByClassName("lifeCont")[i].blur();
  }
  document.getElementById("raffle").style.display = "none";
  for (var i = 0; i < document.getElementsByClassName("bandie").length; i++) {
    if ((document.getElementsByClassName("bandie")[i] == document.getElementById("knightguard")) || (document.getElementsByClassName("bandie")[i] == document.getElementById("benVincens")) || (document.getElementsByClassName("bandie")[i] == document.getElementById("benSolo"))) {
      if ((document.getElementsByClassName("bandie")[i] == document.getElementById("knightguard")) || (document.getElementsByClassName("bandie")[i] == document.getElementById("benVincens"))) {
        var transitionDelay = ((i / 10) + 1.6);
      }
      else if (document.getElementsByClassName("bandie")[i] == document.getElementById("benSolo")) {
        var transitionDelay = ((i / 10) + 1.75);
      }
    }
    else {
      var transitionDelay = ((i / 10) + 1.5);
    }
    document.getElementsByClassName("bandie")[i].style.visibility = "visible";
    if (document.getElementsByClassName("bandie")[i] == document.getElementById("benSolo")) {
      document.getElementById("benSolo").style.opacity = "0%";
      document.getElementById("benSolo").style.transition = "visibility 0s ease " + transitionDelay + "s, opacity 0s ease 0s";
    }
    else {
      if ((document.getElementsByClassName("bandie")[i] == document.getElementById("carolineMoreau")) && (sessionStorage.lives < 6)) {
        document.getElementById("carolineMoreau").style.opacity = "25%";
      }
      else if ((document.getElementsByClassName("bandie")[i] == document.getElementById("liamDurkin")) && (sessionStorage.lives < 5)) {
        document.getElementById("liamDurkin").style.opacity = "25%";
      }
      else if ((document.getElementsByClassName("bandie")[i] == document.getElementById("kamiMiller")) && (sessionStorage.lives < 4)) {
        document.getElementById("kamiMiller").style.opacity = "25%";
      }
      else if ((document.getElementsByClassName("bandie")[i] == document.getElementById("garrettWillard")) && (sessionStorage.lives < 3)) {
        document.getElementById("garrettWillard").style.opacity = "25%";
      }
      else if ((document.getElementsByClassName("bandie")[i] == document.getElementById("ryanMccarthy")) && (sessionStorage.lives < 2)) {
        document.getElementById("ryanMccarthy").style.opacity = "25%";
        document.getElementById("ryanMccarthyLink").href = "https://www.nytimes.com/1986/09/05/nyregion/rape-and-murder-scar-innocence-of-potsdam.html";
      }
      else {
        document.getElementsByClassName("bandie")[i].style.opacity = "100%";
      }
      document.getElementsByClassName("bandie")[i].style.transition = "all .25s ease " + transitionDelay + "s";
    }
  }
  for (var i = 0; i < document.getElementsByClassName("bandieCont").length; i++) {
    document.getElementsByClassName("bandieCont")[i].style.visibility = "visible";
    document.getElementsByClassName("bandieCont")[i].style.opacity = "100%";
    for (var j = 0; j < document.getElementsByClassName("bandieCont")[i].children.length; j++) {
      if (document.getElementsByClassName("bandieCont")[i].children[j].classList.contains("bandie")) {
        document.getElementsByClassName("bandieCont")[i].style.transition = (document.getElementsByClassName("bandieCont")[i].children[j].style.transition).replace(/\.25s/sm, "0s");
      }
    }
  }
  document.getElementById("bandiesCont").style.visibility = "visible";
  document.getElementById("bandiesCont").style.opacity = "100%";
  document.getElementById("bandiesCont").style.transition = "all 0s ease 1.5s";
  document.getElementById("congrats").style.visibility = "visible";
  document.getElementById("congrats").style.opacity = "100%";
  document.getElementById("congrats").style.transition = "all .25s ease 3.7s";
  document.getElementById("rink").style.left = "2.5%";
  document.getElementById("rink").style.right = "2.5%";
  document.getElementById("rink").style.transition = "left 1s ease 0s, right 1s ease 0s, transform 0s ease .25s";
  sessionStorage.collapse = "dedication";
  setTimeout(enableButton, 5950);
  document.getElementById("ok").onclick = function() {
    gotIt25();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  console.log("Go on, click the pic of Chast & Chaz, I dare you");
}

function openPoem() {
  disableButton();
  document.getElementById("conductorCont").tabIndex = "-1";
  document.getElementById("conductorCont").blur();
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    document.getElementById("conductorTalkCont").tabIndex = "-1";
    document.getElementById("conductorTalkCont").blur();
  }
  document.getElementById("viewAccountToggle").style.pointerEvents = "none";
  document.getElementById("viewAccountToggle").tabIndex = "-1";
  document.getElementById("viewAccountToggle").blur();
  if (document.getElementById("viewAccountToggle").onclick == viewAccountToggleClose) {
    viewAccountToggleClose();
  }
  if (document.getElementById("poemTextCont").scrollHeight > document.getElementById("poemTextCont").offsetHeight) {
    document.getElementById("poemTextCont").tabIndex = "0";
    if (document.getElementById("poemTextCont").scrollTop > 0) {
      document.getElementById("poemTextCont").scrollTop = 0;
    }
  }
  document.getElementById("poemExit").tabIndex = "0";
  document.getElementById("poem").style.visibility = "visible";
  document.getElementById("poem").style.opacity = "100%";
  document.getElementById("poem").style.transition = "all 0s ease 0s";
  document.getElementById("poem").tabIndex = "0";
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.opacity = "100%";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
  document.getElementById("cover").tabIndex = "0";
  document.onclick = null;
  document.ondblclick = null;
  document.onkeydown = shortcut;
  document.onkeyup = shortcutUndo;
  sessionStorage.shortcut = "closePoem";
  console.log("Try not to cry to this...");
}

function closePoem(event) {
  if ((event.type == "click") || ((event.type == "keydown") && (event.key == "Escape"))) {
    document.getElementById("cover").style.visibility = "hidden";
    document.getElementById("cover").style.opacity = "0%";
    document.getElementById("cover").style.transition = "all .25s ease 0s";
    document.getElementById("cover").tabIndex = "-1";
    document.getElementById("cover").blur();
    document.getElementById("poem").style.visibility = "hidden";
    document.getElementById("poem").style.opacity = "0%";
    document.getElementById("poem").style.transition = "all 0s ease .25s";
    document.getElementById("poem").tabIndex = "-1";
    document.getElementById("poem").blur();
    if (document.getElementById("poemTextCont").scrollHeight > document.getElementById("poemTextCont").offsetHeight) {
      document.getElementById("poemTextCont").tabIndex = "-1";
      document.getElementById("poemTextCont").blur();
    }
    if (event.type == "keydown") {
      document.getElementById("poemExit").style.animation = "buttonExit .25s ease 0s 1 forwards";
      setTimeout(() => (
        document.getElementById("poemExit").style.animation = "none"
      ), 250);
    }
    document.getElementById("poemExit").tabIndex = "-1";
    document.getElementById("poemExit").blur();
    document.onclick = collapse;
    document.ondblclick = showPassword;
    document.onkeydown = collapse;
    document.onkeyup = null;
    sessionStorage.removeItem("shortcut");
    Object.keys(keyboard).forEach((key) => {
      if (keyboard[key] == true) {
        keyboard[key] = false;
      }
    });
    setTimeout(() => (
      document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
    ), 250);
    setTimeout(() => (
      document.getElementById("viewAccountToggle").tabIndex = "0"
    ), 250);
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      setTimeout(() => (
        document.getElementById("conductorTalkCont").tabIndex = "0"
      ), 500);
    }
    setTimeout(() => (
      document.getElementById("conductorCont").tabIndex = "0"
    ), 250);
    setTimeout(enableButton, 250);
  }
}

function showDedication() {
  document.getElementById("dedicationCont").style.left = "25em";
  document.getElementById("dedicationCont").style.transform = "scale(1)";
  document.getElementById("dedicationCont").style.transition = "all .25s ease 0s";
  setTimeout(() => (
    document.getElementById("dedicationCont").style.pointerEvents = "auto"
  ), 250);
  document.getElementById("nickSchalago").onclick = hideDedication;
}

function hideDedication() {
  document.getElementById("dedicationCont").style.left = "10em";
  document.getElementById("dedicationCont").style.transform = "scale(0)";
  document.getElementById("dedicationCont").style.transition = "all .25s ease 0s";
  document.getElementById("dedicationCont").style.pointerEvents = "none";
  document.getElementById("nickSchalago").onclick = showDedication;
}

function showKnightguardBusinessCard() {
  document.getElementById("knightguardBusinessCard").style.bottom = "8em";
  document.getElementById("knightguardBusinessCard").style.transform = "scale(1)";
  document.getElementById("knightguardBusinessCard").style.transition = "all .25s ease 0s";
}

function hideKnightguardBusinessCard() {
  document.getElementById("knightguardBusinessCard").style.bottom = "0";
  document.getElementById("knightguardBusinessCard").style.transform = "scale(0)";
  document.getElementById("knightguardBusinessCard").style.transition = "all .25s ease 0s";
}

function clickLink(element) {
  document.getElementById(element).click();
}

function gotIt25() {
  document.getElementById("conductorTalk").innerHTML = "Just one more question before you go on your way: what's your favorite food to follow a hockey game with?";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  document.getElementById("ok").onclick = function() {
    openSelection();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  sessionStorage.selection = 2;
  console.log("Milk and cookies is the only right answer");
}

function goodbye() {
  document.getElementById("conductorTalk").innerHTML = foods[eval("sessionStorage.food" + sessionStorage.answer)].response;
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  document.getElementById("gameOverHeading").style.color = "var(--clarksonGreen)";
  document.getElementById("gameOverHeading").style.transition = "color 0s ease 0s";
  document.getElementById("ok").onclick = function(event) {
    gameOver(event);
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
}

function gotIt26() {
  if (sessionStorage.clarksonScore < sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "Excellent choice! As it happens, we're having some \"milk and cookies\" at King's house toknight to help us forget about our loss. Come join us!";
  }
  else if (sessionStorage.clarksonScore == sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "Excellent choice! As it happens, we're having some \"milk and cookies\" at King's house toknight. Come join us!";
  }
  else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
    document.getElementById("conductorTalk").innerHTML = "Excellent choice! As it happens, we're having some \"milk and cookies\" at King's house toknight to celebrate the big win. Come join us!";
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  document.getElementById("ok").onclick = function() {
    firewall();
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
  console.log("You have chosen...wisely");
}

function firewall() {
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.opacity = "100%";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
  document.getElementById("cover").tabIndex = "0";
  for (var i = 0; i < document.getElementsByClassName("confirmButton").length; i++) {
    document.getElementsByClassName("confirmButton")[i].tabIndex = "0";
  }
  document.getElementById("confirm").tabIndex = "0";
  setTimeout(() => (
    document.getElementById("confirm").open = true
  ), 250);
  console.log("Also included in the terms of service is Chestnut gets to fuck you in the ass anytime he wants");
}

function acceptTerms(event) {
  event.preventDefault();
  document.getElementById("confirm").tabIndex = "-1";
  document.getElementById("confirm").open = false;
  document.getElementById("confirm").blur();
  for (var i = 0; i < document.getElementsByClassName("confirmButton").length; i++) {
    document.getElementsByClassName("confirmButton")[i].tabIndex = "-1";
    document.getElementsByClassName("confirmButton")[i].blur();
  }
  document.getElementById("cover").style.visibility = "hidden";
  document.getElementById("cover").style.opacity = "0%";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
  document.getElementById("cover").tabIndex = "-1";
  document.getElementById("cover").blur();
  setTimeout(gotIt27, 500);
}

function declineTerms(event) {
  event.preventDefault();
  setTimeout(() => (
    document.getElementById("conductorTalk").innerHTML = "That's okay, milk and cookies isn't for everyone. Go home and get some rest. I'll see you at practice on Tuesday!"
  ), 500);
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  document.getElementById("confirm").open = false;
  document.getElementById("confirm").tabIndex = "-1";
  document.getElementById("confirm").blur();
  for (var i = 0; i < document.getElementsByClassName("confirmButton").length; i++) {
    document.getElementsByClassName("confirmButton")[i].tabIndex = "-1";
    document.getElementsByClassName("confirmButton")[i].blur();
  }
  document.getElementById("cover").style.visibility = "hidden";
  document.getElementById("cover").style.opacity = "0%";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
  document.getElementById("cover").tabIndex = "-1";
  document.getElementById("cover").blur();
  document.getElementById("gameOverHeading").style.color = "var(--clarksonGreen)";
  document.getElementById("gameOverHeading").style.transition = "color 0s ease 0s";
  document.getElementById("ok").onclick = function(event) {
    gameOver(event);
    compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
  };
}

function gotIt27() {
  document.getElementById("conductorTalk").innerHTML = "Oh, you're here? I'll drink to that! What, were you expecting some other kind of \"milk and cookies\"? That's pep band for you! Now let's get drunk!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  disableButton();
  sessionStorage.removeItem("collapse");
  document.getElementById("rink").style.bottom = "100%";
  document.getElementById("rink").style.transition = "bottom 1s ease 0s";
  document.getElementById("rink").tabIndex = "-1";
  document.getElementById("rink").blur();
  sessionStorage.level = 1;
  document.getElementById("house").style.filter = "brightness(10%)";
  document.getElementById("house").style.transition = "filter 900s ease 0s";
  document.getElementById("houseCont").style.top = "10%";
  document.getElementById("houseCont").style.transition = "top 1s ease 0s";
  document.getElementById("houseCont").tabIndex = "0";
  globalThis.knightStart = Date.now();
  setTimeout(() => (
    document.getElementById("drinkingSongChoices").tabIndex = "0"
  ), 500);
  setTimeout(() => (
    document.getElementById("tijuanaButton").tabIndex = "0"
  ), 500);
  document.getElementById("drinkingSongsContContCont").style.right = "65%";
  document.getElementById("drinkingSongsContContCont").style.transition = "right 1s ease .5s";
  setTimeout(() => (
    document.getElementById("drinkingSongsContContCont").tabIndex = "0"
  ), 500);
  sessionStorage.singing = 1;
  for (var i = 0; i < document.getElementsByClassName("drinkingSongChoice").length; i++) {
    eval("sessionStorage." + document.getElementsByClassName("drinkingSongChoice")[i].value + "Chorus = 0");
    eval("sessionStorage." + document.getElementsByClassName("drinkingSongChoice")[i].value + "Line = 0");
  }
  sessionStorage.dafCount = 0;
  document.getElementById("dafCounterNum").innerHTML = sessionStorage.dafCount;
  setTimeout(() => (
    document.getElementById("dafCounterButton").tabIndex = "0"
  ), 1500);
  setTimeout(() => (
    document.getElementById("dafCounterCont").tabIndex = "0"
  ), 1500);
  sessionStorage.dafCountIncrement = 1;
  setTimeout(() => (
    document.getElementById("speakerSongs").tabIndex = "0"
  ), 2000);
  for (var i = 0; i < document.getElementsByClassName("audio").length; i++) {
    document.getElementsByClassName("audio")[i].onended = speakerNewSong;
  }
  if (sessionStorage.clarksonScore <= sessionStorage.sluScore) {
    sessionStorage.beer = 1;
  }
  else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
    sessionStorage.beer = 2;
  }
  if (sessionStorage.beer == 1) {
    document.getElementById("busch").style.display = "inline-block";
    setTimeout(() => (
      document.getElementById("busch").tabIndex = "0"
    ), 2500);
  }
  else if (sessionStorage.beer == 2) {
    document.getElementById("bapple").style.display = "inline-block";
    setTimeout(() => (
      document.getElementById("bapple").tabIndex = "0"
    ), 2500);
  }
  sessionStorage.drinks = 0;
  sessionStorage.emphasizeBeerInterval = setInterval(emphasizeBeer, 60000);
  sessionStorage.iceDecrement = 10;
  for (var i = 0; i < document.getElementsByClassName("partyActivity").length; i++) {
    document.getElementsByClassName("partyActivity")[i].style.visibility = "visible";
    document.getElementsByClassName("partyActivity")[i].style.opacity = "100%";
    document.getElementsByClassName("partyActivity")[i].style.transition = "all .25s ease " + ((i * .5) + 1.5) + "s";
  }
  document.getElementById("partyActivities").style.visibility = "visible";
  document.getElementById("partyActivities").style.opacity = "100%";
  document.getElementById("partyActivities").style.transition = "all 0s ease 1.5s";
  for (var i = 0; i < document.getElementsByClassName("socialMedia").length; i++) {
    var transitionDelay = ((i * .25) + 2.75);
    document.getElementsByClassName("socialMedia")[i].style.visibility = "visible";
    document.getElementsByClassName("socialMedia")[i].style.opacity = "100%";
    document.getElementsByClassName("socialMedia")[i].style.transition = "all .25s ease " + transitionDelay + "s";
    const activate = (x, y) => {
      setTimeout(() => (
        document.getElementsByClassName("socialMedia")[x].tabIndex = "0"
      ), y);
    }
    activate(i, (transitionDelay * 1000));
  }
  document.getElementById("socialMedias").style.visibility = "visible";
  document.getElementById("socialMedias").style.opacity = "100%";
  document.getElementById("socialMedias").style.transition = "all 0s ease 2.75s";
  sessionStorage.promo = 0;
  if (sessionStorage.clarksonScore <= sessionStorage.sluScore) {
    document.getElementById("drumstick").style.display = "inline-block";
    document.getElementById("drumstick").style.animation = "drum 1s ease-in 4s infinite forwards";
  }
  else if (sessionStorage.clarksonScore > sessionStorage.sluScore) {
    document.getElementById("spatula").style.display = "inline-block";
    document.getElementById("spatula").style.animation = "drum 1s ease-in 4s infinite forwards";
  }
  setTimeout(() => (
    document.getElementById("websiteLink").tabIndex = "0"
  ), 4000);
  document.getElementById("websiteCont").style.animation = "loop 30s linear 4s infinite forwards";
  setTimeout(cuntEmpireEntrance, 600000);
  console.log("Oh, you're here? I'll drink to that!");
}

function social(element, event) {
  if ((document.getElementById(element).innerHTML).match(/\bhead/gism)) {
    sessionStorage.bandie = Math.floor(Math.random() * bandies.length);
    if (bandies[sessionStorage.bandie] == "Joe Mama") {
      document.getElementById("conductorTalk").innerHTML = "Social! Around the head! Who said \"head\"? I'll take some of that! (From myself...)";
    }
    else {
      document.getElementById("conductorTalk").innerHTML = "Social! Around the head! Who said \"head\"? I'll take some of that! (From " + bandies[sessionStorage.bandie] + "!)";
    }
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
      sessionStorage.backup = "";
    }
    if (sessionStorage.beer == 1) {
      document.getElementById("busch").style.animation = "emphasizeBeer 1.5s ease 0s 1 forwards";
      setTimeout(() => (
        document.getElementById("busch").style.animation = "none"
      ), 1500);
    }
    else if (sessionStorage.beer == 2) {
      document.getElementById("bapple").style.animation = "emphasizeBeer 1.5s ease 0s 1 forwards";
      setTimeout(() => (
        document.getElementById("bapple").style.animation = "none"
      ), 1500);
    }
    sessionStorage.drinksIncrement = 3;
    drunk(sessionStorage.drinksIncrement, event);
    console.log("I'll take some head...from HER! (if ya know ya know)");
  }
  else {
    if ((document.getElementById("conductorTalk").innerHTML != "Oh, you're here? I'll drink to that!") && (document.getElementById("conductorTalk").innerHTML != "Oh, you're here? I'll drink to that! What, were you expecting some other kind of \"milk and cookies\"? That's pep band for you! Now let's get drunk!")) {
      document.getElementById("conductorTalk").innerHTML = "Oh, you're here? I'll drink to that!";
      if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
        if (document.getElementById("conductorTalkCont").scrollTop > 0) {
          document.getElementById("conductorTalkCont").scrollTop = 0;
        }
      }
      if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
        sessionStorage.backup = "";
      }
    }
  }
}

function selectDrinkingSong() {
  sessionStorage.singing = (document.getElementById("drinkingSongChoices").selectedIndex + 1);
  if (sessionStorage.singing == 2) {
    if (sessionStorage.theSMManChorus > 0) {
      if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take a sunrise?") {
        document.getElementById("theSMManWord2").innerHTML = "S&M ";
        document.getElementById("theSMManWord3").innerHTML = "Man, ";
        document.getElementById("theSMManWord5").innerHTML = "S&M ";
        document.getElementById("theSMManWord6").innerHTML = "Man, ";
        document.getElementById("theSMManWord8").innerHTML = "S&M ";
        document.getElementById("theSMManWord9").innerHTML = "Man, ";
        document.getElementById("theSMManWord19").innerHTML = "hurt ";
        document.getElementById("theSMManWord20").innerHTML = "feel ";
        document.getElementById("theSMManWord23").innerHTML = "hurt ";
        document.getElementById("theSMManWord24").innerHTML = "feel ";
        document.getElementById("theSMManCont").style.background = "url(\"img/theSMMan.png\") center / cover";
      }
    }
  }
  for (var i = 0; i < document.getElementsByClassName("drinkingSongCont").length; i++) {
    if (i == (4 - sessionStorage.singing)) {
      document.getElementsByClassName("drinkingSongCont")[i].style.zIndex = "1";
      document.getElementsByClassName("drinkingSongCont")[i].style.visibility = "visible";
      document.getElementsByClassName("drinkingSongCont")[i].style.opacity = "100%";
      document.getElementsByClassName("drinkingSongCont")[i].style.transition = "all .25s ease 0s";
      if (eval("sessionStorage." + document.getElementsByClassName("drinkingSongChoice")[4 - (i + 1)].value + "Chorus") == 0) {
        document.getElementsByClassName("drinkingSongButton")[i].tabIndex = "0";
      }
      else if (eval("sessionStorage." + document.getElementsByClassName("drinkingSongChoice")[4 - (i + 1)].value + "Chorus") > 0) {
        document.getElementsByClassName("drinkingSongVerses")[i].tabIndex = "0";
      }
    }
    else {
      document.getElementsByClassName("drinkingSongCont")[i].style.zIndex = "0";
      document.getElementsByClassName("drinkingSongCont")[i].style.visibility = "hidden";
      document.getElementsByClassName("drinkingSongCont")[i].style.opacity = "0%";
      document.getElementsByClassName("drinkingSongCont")[i].style.transition = "all .25s ease 0s";
      if (eval("sessionStorage." + document.getElementsByClassName("drinkingSongChoice")[4 - (i + 1)].value + "Chorus") == 0) {
        document.getElementsByClassName("drinkingSongButton")[i].tabIndex = "-1";
        document.getElementsByClassName("drinkingSongButton")[i].blur();
      }
      else if (eval("sessionStorage." + document.getElementsByClassName("drinkingSongChoice")[4 - (i + 1)].value + "Chorus") > 0) {
        document.getElementsByClassName("drinkingSongVerses")[i].tabIndex = "-1";
        document.getElementsByClassName("drinkingSongVerses")[i].blur();
      }
    }
  }
}

function drinkingSongSetup() {
  if ((document.getElementById("conductorTalk").innerHTML != "Oh, you're here? I'll drink to that!") && (document.getElementById("conductorTalk").innerHTML != "Oh, you're here? I'll drink to that! What, were you expecting some other kind of \"milk and cookies\"? That's pep band for you! Now let's get drunk!")) {
    document.getElementById("conductorTalk").innerHTML = "Oh, you're here? I'll drink to that!";
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
      sessionStorage.backup = "";
    }
  }
  if (document.getElementById("conductor").onclick == null) {
    document.getElementById("conductor").title = "Joe DeSena, Conductor";
    document.getElementById("conductor").style.background = "url(\"img/joeDesenaBG.png\") center / cover";
    document.getElementById("conductor").onclick = pillow;
  }
  document.getElementById("viewAccountToggle").style.pointerEvents = "auto";
  document.getElementById("viewAccountToggle").tabIndex = "0";
  document.getElementById("drinkingSongChoices").style.transition = "opacity 0s ease 0s";
  document.getElementById("drinkingSongChoices").tabIndex = "0";
  document.getElementById("drinkingSongChoices").disabled = false;
  if ((document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").querySelectorAll(":disabled")).length == (document.getElementsByClassName(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verse").length - 1)) {
    document.getElementById("drinkingSongChoice" + sessionStorage.singing).style.transition = "opacity 0s ease 0s";
    document.getElementById("drinkingSongChoice" + sessionStorage.singing).disabled = true;
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").style.transition = "opacity 0s ease 0s";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").tabIndex = "-1";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").disabled = true;
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").blur();
    if ((sessionStorage.singing == 1) || (sessionStorage.singing == 4)) {
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").style.transition = "opacity 0s ease 0s";
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").disabled = true;
    }
    else if ((sessionStorage.singing == 2) || (sessionStorage.singing == 3)) {
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").style.transition = "opacity 0s ease 0s";
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").disabled = true;
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").style.transition = "opacity 0s ease 0s";
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").disabled = true;
    }
  }
  if (eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Chorus") == 0) {
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Button").style.visibility = "hidden";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Button").style.opacity = "0%";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Button").style.transition = "visibility .25s ease 0s, opacity .25s ease 0s, transform .1s ease 0s";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "LinesContCont").style.visibility = "visible";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "LinesContCont").style.opacity = "100%";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "LinesContCont").style.transition = "all .25s ease .25s";
    if (sessionStorage.singing == 1) {
      console.log("My favorite part of the knight!");
    }
    else if (sessionStorage.singing == 3) {
      console.log("Suck on that, Mom!");
    }
  }
  else if (eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Chorus") > 0) {
    if ((sessionStorage.singing == 1) || (sessionStorage.singing == 2)) {
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Cont").style.cursor = "auto";
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Song").style.visibility = "hidden";
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Song").style.opacity = "0%";
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Song").style.transition = "all .25s ease 0s";
      for (var i = 0; i < document.getElementsByClassName(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Word").length; i++) {
        document.getElementsByClassName(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Word")[i].style.visibility = "hidden";
        document.getElementsByClassName(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Word")[i].style.transition = "visibility 0s ease .25s";
      }
      if (sessionStorage.singing == 1) {
        document.getElementById("tijuanaLyrics").innerHTML = "Knock, knock!";
      }
      else if (sessionStorage.singing == 2) {
        document.getElementById("theSMManLyrics").innerHTML = "Who can...?";
        document.getElementById("theSMManLyrics").style.fontSize = "2em";
        document.getElementById("theSMManLyrics").style.transition = "font-size 0s ease 0s";
      }
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "LinesContCont").style.visibility = "visible";
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "LinesContCont").style.opacity = "100%";
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "LinesContCont").style.transition = "all .25s ease 0s";
    }
  }
  if (sessionStorage.singing == 2) {
    if (sessionStorage.theSMManChorus > 0) {
      if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take a landlord?") {
        for (var i = 0; i < document.getElementsByClassName("theSMManVerse").length; i++) {
          if (document.getElementsByClassName("theSMManVerse")[i].innerHTML == "...take Shane?") {
            document.getElementsByClassName("theSMManVerse")[i].style.display = "block";
            document.getElementsByClassName("theSMManFirstResponse")[i].style.display = "block";
            document.getElementsByClassName("theSMManSecondResponse")[i].style.display = "block";
          }
        }
      }
      else if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take Shane?") {
        document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).style.display = "none";
        document.getElementById("theSMManFirstResponse" + sessionStorage.theSMManLine).style.display = "none";
        document.getElementById("theSMManSecondResponse" + sessionStorage.theSMManLine).style.display = "none";
      }
    }
  }
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").style.visibility = "visible";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").style.opacity = "100%";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").style.transition = "all 0s ease .25s";
  if (document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").selectedIndex > 0) {
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").selectedIndex = 0;
  }
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").tabIndex = "0";
}

function drinkingSongVerse(event) {
  if (document.getElementById("conductor").onclick == null) {
    document.getElementById("conductor").title = "Joe DeSena, Conductor";
    document.getElementById("conductor").style.background = "url(\"img/joeDesenaBG.png\") center / cover";
    document.getElementById("conductor").onclick = pillow;
  }
  document.getElementById("viewAccountToggle").style.pointerEvents = "none";
  document.getElementById("viewAccountToggle").tabIndex = "-1";
  document.getElementById("viewAccountToggle").blur();
  document.getElementById("drinkingSongChoices").style.transition = "opacity 0s ease 0s";
  document.getElementById("drinkingSongChoices").tabIndex = "-1";
  document.getElementById("drinkingSongChoices").disabled = true;
  document.getElementById("drinkingSongChoices").blur();
  eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line = document.getElementById(\"" + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses\").selectedIndex");
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).classList.replace("drinkingSongUnusedLine", "drinkingSongUsedLine");
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).style.transition = "opacity 0s ease 0s";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).disabled = true;
  social(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line"), event);
  if (sessionStorage.singing == 2) {
    if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML != "...take Shane?") {
      for (var i = 0; i < document.getElementsByClassName("theSMManVerse").length; i++) {
        if (document.getElementsByClassName("theSMManVerse")[i].innerHTML == "...take Shane?") {
          document.getElementsByClassName("theSMManVerse")[i].style.display = "none";
          document.getElementsByClassName("theSMManFirstResponse")[i].style.display = "none";
          document.getElementsByClassName("theSMManSecondResponse")[i].style.display = "none";
        }
      }
    }
  }
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").style.visibility = "hidden";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").style.opacity = "0%";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").style.transition = "all .25s ease 0s";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").tabIndex = "-1";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Verses").blur();
  if ((sessionStorage.singing == 1) || (sessionStorage.singing == 4)) {
    if (sessionStorage.singing == 1) {
      document.getElementById("tijuanaLyrics").innerHTML = document.getElementById("tijuanaVerse" + sessionStorage.tijuanaLine).innerHTML + " who?";
      document.getElementById("tijuanaResponseDefault").innerHTML = document.getElementById("tijuanaVerse" + sessionStorage.tijuanaLine).innerHTML + " who?";
    }
    else if (sessionStorage.singing == 4) {
      document.getElementById("weLikeItHereResponseDefault").innerHTML = (document.getElementById("weLikeItHereVerse" + sessionStorage.weLikeItHereLine).innerHTML).replace(/\!/sm, "") + "...";
    }
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Response" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).style.transition = "opacity 0s ease 0s";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Response" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).disabled = false;
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").style.visibility = "visible";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").style.opacity = "100%";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").style.transition = "all .25s ease 0s";
    if (document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").selectedIndex > 0) {
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").selectedIndex = 0;
    }
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").tabIndex = "0";
  }
  else if ((sessionStorage.singing == 2) || (sessionStorage.singing == 3)) {
    if (sessionStorage.singing == 2) {
      document.getElementById("theSMManLyrics").innerHTML = "Who can " + (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML).replace(/\.{3}/sm, "");
      document.getElementById("theSMManLyrics").style.fontSize = "1.5em";
      document.getElementById("theSMManLyrics").style.transition = "font-size 0s ease 0s";
    }
    else if (sessionStorage.singing == 3) {
      document.getElementById("highAboveCayugasWatersFirstResponseDefault").innerHTML = (document.getElementById("highAboveCayugasWatersVerse" + sessionStorage.highAboveCayugasWatersLine).innerHTML).replace(/\!/sm, "") + "...";
    }
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).style.transition = "opacity 0s ease 0s";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).disabled = false;
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").style.visibility = "visible";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").style.opacity = "100%";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").style.transition = "all .25s ease 0s";
    if (document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").selectedIndex > 0) {
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").selectedIndex = 0;
    }
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").tabIndex = "0";
  }
}

function drinkingSongFirstResponse(event) {
  if (document.getElementById("conductor").onclick == null) {
    document.getElementById("conductor").title = "Joe DeSena, Conductor";
    document.getElementById("conductor").style.background = "url(\"img/joeDesenaBG.png\") center / cover";
    document.getElementById("conductor").onclick = pillow;
  }
  if ((sessionStorage.singing == 1) || (sessionStorage.singing == 4)) {
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Response" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).classList.replace("drinkingSongUnusedLine", "drinkingSongUsedLine");
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Response" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).style.transition = "opacity 0s ease 0s";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Response" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).disabled = true;
    social(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Response" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line"), event);
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").style.visibility = "hidden";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").style.opacity = "0%";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").style.transition = "all 0s ease .25s";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").tabIndex = "-1";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Responses").blur();
    if ((sessionStorage.singing == 1) && ((document.getElementById("tijuanaVerse" + sessionStorage.tijuanaLine).innerHTML == "The S&amp;M Man") && (document.getElementById("drinkingSongChoice2").disabled == false))) {
      document.getElementById("drinkingSongChoices").selectedIndex = 1;
      selectDrinkingSong();
      sessionStorage.tijuanaChorus++;
      drinkingSongSetup();
      setTimeout(() => (
        document.getElementById("tijuanaLyrics").innerHTML = "Knock, knock!"
      ), 250);
      document.getElementById("tijuanaVerses").style.visibility = "visible";
      document.getElementById("tijuanaVerses").style.opacity = "100%";
      document.getElementById("tijuanaVerses").style.transition = "all 0s ease .25s";
      document.getElementById("tijuanaVerses").selectedIndex = 0;
      document.getElementById("tijuanaVerses").tabIndex = "0";
    }
    else {
      if (sessionStorage.singing == 1) {
        document.getElementById("tijuanaLinesContCont").style.visibility = "hidden";
        document.getElementById("tijuanaLinesContCont").style.opacity = "0%";
        document.getElementById("tijuanaLinesContCont").style.transition = "all .25s ease 0s";
        document.getElementById("tijuanaCont").style.cursor = "wait";
        document.getElementById("tijuanaSong").style.visibility = "visible";
        document.getElementById("tijuanaSong").style.opacity = "100%";
        document.getElementById("tijuanaSong").style.transition = "all 0s ease .25s";
        for (var i = 0; i < document.getElementsByClassName("tijuanaWord").length; i++) {
          var transitionDelay = (i / 4);
          document.getElementsByClassName("tijuanaWord")[i].style.visibility = "visible";
          document.getElementsByClassName("tijuanaWord")[i].style.transition = "visibility 0s ease " + transitionDelay + "s";
        }
        sessionStorage.tijuanaChorus++;
        setTimeout(drinkingSongSetup, 11500);
        if (document.getElementById("tijuanaVerse" + sessionStorage.tijuanaLine).innerHTML == "Aileen") {
          console.log("I bet Ben would just love to Ai-leen a certain someone over the couch...");
        }
        else if (document.getElementById("tijuanaVerse" + sessionStorage.tijuanaLine).innerHTML == "Business majors") {
          console.log("Unlike COMM majors, who are never useful");
        }
        else if (document.getElementById("tijuanaVerse" + sessionStorage.tijuanaLine).innerHTML == "Extinct") {
          console.log("Just like Ben and Chawgo's room after Devin...clapped some cheeks");
        }
        else if (document.getElementById("tijuanaVerse" + sessionStorage.tijuanaLine).innerHTML == "Miriam Wachtoumi") {
          console.log("What a fucking hottie!");
        }
        else if (document.getElementById("tijuanaVerse" + sessionStorage.tijuanaLine).innerHTML == "Oswald") {
          console.log("I'm sure it was Ethan's hair");
        }
      }
      else if (sessionStorage.singing == 4) {
        sessionStorage.weLikeItHereChorus++;
        drinkingSongSetup();
      }
    }
    localStorage.totalVersesSung++;
    remember(event);
  }
  else if ((sessionStorage.singing == 2) || (sessionStorage.singing == 3)) {
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).classList.replace("drinkingSongUnusedLine", "drinkingSongUsedLine");
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).style.transition = "opacity 0s ease 0s";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).disabled = true;
    social(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line"), event);
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").style.visibility = "hidden";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").style.opacity = "0%";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").style.transition = "all 0s ease .25s";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").tabIndex = "-1";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "FirstResponses").blur();
    if (sessionStorage.singing == 2) {
      document.getElementById("theSMManLyrics").innerHTML = document.getElementById("theSMManFirstResponse" + sessionStorage.theSMManLine).innerHTML;
      document.getElementById("theSMManLyrics").style.fontSize = "1.5em";
      document.getElementById("theSMManLyrics").style.transition = "font-size 0s ease 0s";
    }
    else if (sessionStorage.singing == 3) {
      document.getElementById("highAboveCayugasWatersSecondResponseDefault").innerHTML = (document.getElementById("highAboveCayugasWatersFirstResponse" + sessionStorage.highAboveCayugasWatersLine).innerHTML).replace(/\!/sm, "") + "...";
    }
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).style.transition = "opacity 0s ease 0s";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).disabled = false;
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").style.visibility = "visible";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").style.opacity = "100%";
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").style.transition = "all .25s ease 0s";
    if (document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").selectedIndex > 0) {
      document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").selectedIndex = 0;
    }
    document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").tabIndex = "0";
  }
}

function drinkingSongSecondResponse(event) {
  if (document.getElementById("conductor").onclick == null) {
    document.getElementById("conductor").title = "Joe DeSena, Conductor";
    document.getElementById("conductor").style.background = "url(\"img/joeDesenaBG.png\") center / cover";
    document.getElementById("conductor").onclick = pillow;
  }
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).classList.replace("drinkingSongUnusedLine", "drinkingSongUsedLine");
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).style.transition = "opacity 0s ease 0s";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line")).disabled = true;
  social(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponse" + eval("sessionStorage." + document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "Line"), event);
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").style.visibility = "hidden";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").style.opacity = "0%";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").style.transition = "all 0s ease .25s";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").tabIndex = "-1";
  document.getElementById(document.getElementById("drinkingSongChoice" + sessionStorage.singing).value + "SecondResponses").blur();
  if ((sessionStorage.singing == 2) && (((document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take a gangbang?") && (document.getElementById("drinkingSongChoice1").disabled == false)) || ((document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take Cornell?") && (document.getElementById("drinkingSongChoice3").disabled == false)))) {
    if ((document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take a gangbang?") && (document.getElementById("drinkingSongChoice1").disabled == false)) {
      document.getElementById("drinkingSongChoices").selectedIndex = 0;
      selectDrinkingSong();
      if (sessionStorage.tijuanaChorus == 0) {
        document.getElementById("tijuanaButton").style.visibility = "hidden";
        document.getElementById("tijuanaButton").style.opacity = "0%";
        document.getElementById("tijuanaButton").style.transition = "visibility 0s ease 0s, opacity 0s ease 0s, transform .1s ease 0s";
        console.log("My favorite part of the knight!");
      }
      document.getElementById("tijuanaLinesContCont").style.visibility = "hidden";
      document.getElementById("tijuanaLinesContCont").style.opacity = "0%";
      document.getElementById("tijuanaLinesContCont").style.transition = "all 0s ease 0s";
      document.getElementById("tijuanaCont").style.cursor = "wait";
      document.getElementById("tijuanaSong").style.visibility = "visible";
      document.getElementById("tijuanaSong").style.opacity = "100%";
      document.getElementById("tijuanaSong").style.transition = "all 0s ease .25s";
      for (var i = 0; i < document.getElementsByClassName("tijuanaWord").length; i++) {
        var transitionDelay = (i / 4);
        document.getElementsByClassName("tijuanaWord")[i].style.visibility = "visible";
        document.getElementsByClassName("tijuanaWord")[i].style.transition = "visibility 0s ease " + transitionDelay + "s";
      }
      sessionStorage.theSMManChorus++;
      sessionStorage.tijuanaChorus++;
      localStorage.totalVersesSung++;
      setTimeout(drinkingSongSetup, 11500);
    }
    else if ((document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take Cornell?") && (document.getElementById("drinkingSongChoice3").disabled == false)) {
      document.getElementById("drinkingSongChoices").selectedIndex = 2;
      selectDrinkingSong();
      sessionStorage.theSMManChorus++;
      drinkingSongSetup();
    }
    setTimeout(() => (
      document.getElementById("theSMManLyrics").innerHTML = "Who can...?"
    ), 250);
    document.getElementById("theSMManLyrics").style.fontSize = "2em";
    document.getElementById("theSMManLyrics").style.transition = "font-size 0s ease .25s";
    document.getElementById("theSMManVerses").style.visibility = "visible";
    document.getElementById("theSMManVerses").style.opacity = "100%";
    document.getElementById("theSMManVerses").style.transition = "all 0s ease .25s";
    document.getElementById("theSMManVerses").selectedIndex = 0;
    document.getElementById("theSMManVerses").tabIndex = "0";
  }
  else {
    if (sessionStorage.singing == 2) {
      document.getElementById("theSMManLinesContCont").style.visibility = "hidden";
      document.getElementById("theSMManLinesContCont").style.opacity = "0%";
      document.getElementById("theSMManLinesContCont").style.transition = "all .25s ease 0s";
      document.getElementById("theSMManCont").style.cursor = "wait";
      document.getElementById("theSMManSong").style.visibility = "visible";
      document.getElementById("theSMManSong").style.opacity = "100%";
      document.getElementById("theSMManSong").style.transition = "all 0s ease .25s";
      for (var i = 0; i < document.getElementsByClassName("theSMManWord").length; i++) {
        var transitionDelay = (i / 4);
        document.getElementsByClassName("theSMManWord")[i].style.visibility = "visible";
        document.getElementsByClassName("theSMManWord")[i].style.transition = "visibility 0s ease " + transitionDelay + "s";
      }
      sessionStorage.theSMManChorus++;
      setTimeout(drinkingSongSetup, 7250);
      if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take a bishop?") {
        console.log("Ben, you're fucking sick for this!");
      }
      else if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take Chestnut again?") {
        console.log("OUCH!");
      }
      else if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take my roommate?") {
        console.log("I can, and it sure felt good!");
      }
      else if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take Shane?") {
        console.log("I really hope Chawgo never finds this feature...");
      }
      else if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take Tony Collins?") {
        console.log("Still proud of coming up with this one");
      }
    }
    else if (sessionStorage.singing == 3) {
      sessionStorage.highAboveCayugasWatersChorus++;
      drinkingSongSetup();
    }
  }
  if (sessionStorage.singing == 2) {
    if (document.getElementById("theSMManVerse" + sessionStorage.theSMManLine).innerHTML == "...take a sunrise?") {
      document.getElementById("theSMManWord2").innerHTML = "Candyman ";
      document.getElementById("theSMManWord3").innerHTML = "can, ";
      document.getElementById("theSMManWord5").innerHTML = "Candyman ";
      document.getElementById("theSMManWord6").innerHTML = "can, ";
      document.getElementById("theSMManWord8").innerHTML = "Candyman ";
      document.getElementById("theSMManWord9").innerHTML = "can, ";
      document.getElementById("theSMManWord19").innerHTML = "world ";
      document.getElementById("theSMManWord20").innerHTML = "taste ";
      document.getElementById("theSMManWord23").innerHTML = "world ";
      document.getElementById("theSMManWord24").innerHTML = "taste ";
      document.getElementById("theSMManCont").style.background = "url(\"img/chocolateFactory.png\") center / cover";
    }
    else {
      document.getElementById("theSMManWord2").innerHTML = "S&M ";
      document.getElementById("theSMManWord3").innerHTML = "Man, ";
      document.getElementById("theSMManWord5").innerHTML = "S&M ";
      document.getElementById("theSMManWord6").innerHTML = "Man, ";
      document.getElementById("theSMManWord8").innerHTML = "S&M ";
      document.getElementById("theSMManWord9").innerHTML = "Man, ";
      document.getElementById("theSMManWord19").innerHTML = "hurt ";
      document.getElementById("theSMManWord20").innerHTML = "feel ";
      document.getElementById("theSMManWord23").innerHTML = "hurt ";
      document.getElementById("theSMManWord24").innerHTML = "feel ";
      setTimeout(() => (
        document.getElementById("theSMManCont").style.background = "url(\"img/theSMMan.png\") center / cover"
      ), 250);
    }
  }
  localStorage.totalVersesSung++;
  remember(event);
}

function dafCounterCount(event) {
  sessionStorage.dafCount = (+sessionStorage.dafCount + +sessionStorage.dafCountIncrement);
  localStorage.totalDafCount = (+localStorage.totalDafCount + +sessionStorage.dafCountIncrement);
  remember(event);
  if (sessionStorage.dafCount < 212) {
    if (sessionStorage.dafCount == 1) {
      document.getElementById("conductorTalk").innerHTML = "That's dope as fuck!";
      if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
        if (document.getElementById("conductorTalkCont").scrollTop > 0) {
          document.getElementById("conductorTalkCont").scrollTop = 0;
        }
      }
      if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
        sessionStorage.backup = "";
      }
      console.log("Dope as fuck! Because that's the name of this game, get it?");
    }
    else {
      if (document.getElementById("conductorTalk").innerHTML != "Oh, you're here? I'll drink to that!") {
        document.getElementById("conductorTalk").innerHTML = "Oh, you're here? I'll drink to that!";
        if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
          if (document.getElementById("conductorTalkCont").scrollTop > 0) {
            document.getElementById("conductorTalkCont").scrollTop = 0;
          }
        }
        if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
          sessionStorage.backup = "";
        }
      }
      console.log("DAF");
    }
    document.getElementById("dafCounterNum").innerHTML = sessionStorage.dafCount;
  }
  else if (sessionStorage.dafCount >= 212) {
    dafCounterError();
  }
  if (document.getElementById("conductor").onclick == null) {
    document.getElementById("conductor").title = "Joe DeSena, Conductor";
    document.getElementById("conductor").style.background = "url(\"img/joeDesenaBG.png\") center / cover";
    document.getElementById("conductor").onclick = pillow;
  }
}

function dafCounterError() {
  document.getElementById("conductorTalk").innerHTML = "Holy shit, you broke the DAF counter! You could give Chestnut a run for his money!";
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  document.getElementById("dafCounterButton").style.transition = "opacity 0s ease 0s, transform .1s ease 0s";
  document.getElementById("dafCounterButton").tabIndex = "-1";
  document.getElementById("dafCounterButton").disabled = true;
  document.getElementById("dafCounterButton").blur();
  document.getElementById("dafCounterNum").innerHTML = "@#$%&";
  document.getElementById("dafCounterError").style.visibility = "visible";
  document.getElementById("dafCounterError").style.opacity = "100%";
  document.getElementById("dafCounterError").style.transition = "all 0s ease 0s";
  compileSound("sawtooth", ["exponential", 140, 90, .25], ["none", 1, null, 0], .25);
}

function speakerPlay() {
  if (sessionStorage.oldSong == undefined) {
    document.getElementById("speakerSongDefault").style.display = "none";
  }
  if (sessionStorage.newSong == undefined) {
    sessionStorage.newSong = document.getElementById("speakerSongs").value;
  }
  else {
    if (document.getElementById(sessionStorage.newSong).ended == true) {
      sessionStorage.newSong = document.getElementById("speakerSong" + sessionStorage.randomSong).value;
      document.getElementById("speakerSongs").selectedIndex = sessionStorage.randomSong;
    }
    else if (document.getElementById(sessionStorage.newSong).ended == false) {
      sessionStorage.newSong = document.getElementById("speakerSongs").value;
    }
  }
  for (var i = 1; i < document.getElementsByClassName("speakerSong").length; i++) {
    if (i == document.getElementById("speakerSongs").selectedIndex) {
      document.getElementsByClassName("speakerSong")[i].style.fontWeight = "bold";
    }
    else {
      document.getElementsByClassName("speakerSong")[i].style.fontWeight = "normal";
    }
    document.getElementsByClassName("speakerSong")[i].style.transition = "font-weight 0s ease 0s";
  }
  if ((sessionStorage.oldSong != undefined) && (sessionStorage.newSong != sessionStorage.oldSong)) {
    speakerPause();
    if (document.getElementById(sessionStorage.newSong).currentTime > 0) {
      document.getElementById(sessionStorage.newSong).currentTime = 0;
    }
  }
  document.getElementById(sessionStorage.newSong).play();
  sessionStorage.oldSong = sessionStorage.newSong;
  document.getElementById("speaker").style.animation = "vibrate 5s ease 0s infinite forwards";
  for (var i = 0; i < document.getElementsByClassName("speakerControl").length; i++) {
    if (i == 0) {
      document.getElementById("speakerPlay").style.transition = "opacity 0s ease 0s";
      document.getElementById("speakerPlay").tabIndex = "-1";
      document.getElementById("speakerPlay").disabled = true;
      document.getElementById("speakerPlay").blur();
    }
    else if (i == 1) {
      document.getElementById("speakerPause").style.transition = "opacity 0s ease 0s";
      document.getElementById("speakerPause").tabIndex = "0";
      document.getElementById("speakerPause").disabled = false;
    }
  }
}

function speakerPause() {
  if (sessionStorage.oldSong != undefined) {
    document.getElementById(sessionStorage.oldSong).pause();
    document.getElementById("speaker").style.animation = "none";
    for (var i = 0; i < document.getElementsByClassName("speakerControl").length; i++) {
      if (i == 0) {
        document.getElementById("speakerPlay").style.transition = "opacity 0s ease 0s";
        document.getElementById("speakerPlay").tabIndex = "0";
        document.getElementById("speakerPlay").disabled = false;
      }
      else if (i == 1) {
        document.getElementById("speakerPause").style.transition = "opacity 0s ease 0s";
        document.getElementById("speakerPause").tabIndex = "-1";
        document.getElementById("speakerPause").disabled = true;
        document.getElementById("speakerPause").blur();
      }
    }
  }
}

function speakerNewSong() {
  sessionStorage.randomSong = Math.ceil(Math.random() * songs.length);
  if (sessionStorage.randomSong == sessionStorage.oldSong) {
    sessionStorage.randomSong++;
    if (sessionStorage.randomSong > songs.length) {
      sessionStorage.randomSong = 1;
    }
  }
  speakerPlay();
}

function emphasizeBeer() {
  if (sessionStorage.beer == 1) {
    document.getElementById("busch").style.animation = "emphasizeBeer 1.5s ease 0s 1 forwards";
    setTimeout(() => (
      document.getElementById("busch").style.animation = "none"
    ), 1500);
  }
  else if (sessionStorage.beer == 2) {
    document.getElementById("bapple").style.animation = "emphasizeBeer 1.5s ease 0s 1 forwards";
    setTimeout(() => (
      document.getElementById("bapple").style.animation = "none"
    ), 1500);
  }
}

function drinkBeer(event) {
  if (sessionStorage.drinks == 0) {
    clearInterval(sessionStorage.emphasizeBeerInterval);
    sessionStorage.removeItem("emphasizeBeerInterval");
    document.getElementById("conductorTalk").innerHTML = "<span lang=\"ru-ru\" translate=\"no\" dir=\"ltr\" class=\"russian\">Prochnost</span>! It's Russian for \"strength\"!";
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
      sessionStorage.backup = "";
    }
    document.getElementById("conductor").title = "Prochnost (it's Russian for \"strength\")";
    document.getElementById("conductor").style.background = "url(\"img/prochnost.gif\") center / cover";
    document.getElementById("conductor").onclick = null;
    sessionStorage.drinksIncrement = 1;
    drunk(sessionStorage.drinksIncrement, event);
    console.log("Eto chertovski kruto!");
  }
  else if (sessionStorage.drinks > 0) {
    sessionStorage.ice = Math.ceil(Math.random() * 20);
    if (sessionStorage.ice == 1) {
      if (sessionStorage.beer == 1) {
        document.getElementById("busch").style.transform = "scale(1.1)";
        document.getElementById("busch").style.transition = "transform .25s ease 0s";
        document.getElementById("busch").style.pointerEvents = "none";
      }
      else if (sessionStorage.beer == 2) {
        document.getElementById("bapple").style.transform = "scale(1.1)";
        document.getElementById("bapple").style.transition = "transform .25s ease 0s";
        document.getElementById("bapple").style.pointerEvents = "none";
      }
      document.getElementById("cover").style.background = "transparent";
      document.getElementById("cover").style.transition = "background 0s ease 0s";
      setTimeout(singIce.bind(null, event), 250);
    }
    else if (sessionStorage.ice > 1) {
      if (document.getElementById("conductorTalk").innerHTML != "Oh, you're here? I'll drink to that!") {
        document.getElementById("conductorTalk").innerHTML = "Oh, you're here? I'll drink to that!";
        if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
          if (document.getElementById("conductorTalkCont").scrollTop > 0) {
            document.getElementById("conductorTalkCont").scrollTop = 0;
          }
        }
        if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
          sessionStorage.backup = "";
        }
      }
      if (document.getElementById("conductor").onclick == null) {
        document.getElementById("conductor").title = "Joe DeSena, Conductor";
        document.getElementById("conductor").style.background = "url(\"img/joeDesenaBG.png\") center / cover";
        document.getElementById("conductor").onclick = pillow;
      }
      sessionStorage.drinksIncrement = 1;
      drunk(sessionStorage.drinksIncrement, event);
    }
  }
}

function singIce(event) {
  sessionStorage.bandie = Math.floor(Math.random() * bandies.length);
  if (bandies[sessionStorage.bandie] == "Joe Mama") {
    document.getElementById("conductorTalk").innerHTML = "Oh no! You've just been iced by me! Better hurry up and finish it in 8, or you'll be a bitch!";
  }
  else {
    document.getElementById("conductorTalk").innerHTML = "Oh no! You've just been iced by " + bandies[sessionStorage.bandie] + "! Better hurry up and finish it in 8, or you'll be a bitch!";
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  if (document.getElementById("conductor").onclick == null) {
    document.getElementById("conductor").title = "Joe DeSena, Conductor";
    document.getElementById("conductor").style.background = "url(\"img/joeDesenaBG.png\") center / cover";
    document.getElementById("conductor").onclick = pillow;
  }
  document.getElementById("conductorCont").style.zIndex = "92";
  document.getElementById("viewAccountToggle").style.pointerEvents = "none";
  document.getElementById("viewAccountToggle").tabIndex = "-1";
  document.getElementById("viewAccountToggle").blur();
  sessionStorage.finish = 100;
  sessionStorage.removeItem("countdown");
  sessionStorage.removeItem("bitch");
  document.getElementById("iceButton").tabIndex = "0";
  document.getElementById("iceButtonCont").style.visibility = "visible";
  document.getElementById("iceButtonCont").style.opacity = "100%";
  document.getElementById("iceButtonCont").style.transition = "all .25s ease .75s";
  var transformValue = ((sessionStorage.level - 1) * 9);
  document.getElementById("iceContContCont").style.visibility = "visible";
  document.getElementById("iceContContCont").style.left = "35%";
  document.getElementById("iceContContCont").style.right = "35%";
  document.getElementById("iceContContCont").style.top = "10%";
  document.getElementById("iceContContCont").style.bottom = "30%";
  document.getElementById("iceContContCont").style.background = "var(--white)";
  document.getElementById("iceContContCont").style.opacity = "100%";
  document.getElementById("iceContContCont").style.border = ".05em solid var(--clarksonGreen)";
  document.getElementById("iceContContCont").style.transform = "skew(" + (Math.ceil(Math.random() * transformValue) * ((Math.round(Math.random())) ? (1) : (-1))) + "deg) scale(1)";
  document.getElementById("iceContContCont").style.transition = "visibility 0s ease 0s, left 1s ease 0s, right 1s ease 0s, top 1s ease 0s, bottom 1s ease 0s, background .25s ease .75s, opacity 0s ease 0s, border .25s ease .75s, transform 1s ease 0s";
  document.getElementById("iceContContCont").tabIndex = "0";
  document.getElementById("cover").style.zIndex = "91";
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.background = "rgba(153, 153, 153, 75%)";
  document.getElementById("cover").style.opacity = "100%";
  document.getElementById("cover").style.transition = "visibility 0s ease 0s, background .25s ease .75s, opacity 0s ease 0s";
  document.getElementById("cover").tabIndex = "0";
  document.getElementById("iceSong").style.visibility = "visible";
  document.getElementById("iceSong").style.opacity = "100%";
  document.getElementById("iceSong").style.transition = "all 0s ease 1.5s";
  for (var i = 0; i < document.getElementsByClassName("iceWord").length; i++) {
    var transitionDelay = ((i / 4) + 1.25);
    document.getElementsByClassName("iceWord")[i].style.visibility = "visible";
    document.getElementsByClassName("iceWord")[i].style.transition = "visibility 0s ease " + transitionDelay + "s";
  }
  sessionStorage.countdownIceTimeout = setTimeout(countdownIce.bind(null, event), 6750);
  console.log("Weeeeeeeee...");
}

function countdownIce(event) {
  document.getElementById("iceSong").style.visibility = "hidden";
  document.getElementById("iceSong").style.opacity = "0%";
  document.getElementById("iceSong").style.transition = "all .25s ease 0s";
  for (var i = 0; i < document.getElementsByClassName("iceWord").length; i++) {
    document.getElementsByClassName("iceWord")[i].style.visibility = "hidden";
    document.getElementsByClassName("iceWord")[i].style.transition = "visibility 0s ease .25s";
  }
  sessionStorage.countdown = 8;
  document.getElementById("iceCounter").innerHTML = sessionStorage.countdown;
  document.getElementById("iceCounter").style.visibility = "visible";
  document.getElementById("iceCounter").style.opacity = "100%";
  document.getElementById("iceCounter").style.color = "var(--clarksonGreen)";
  document.getElementById("iceCounter").style.fontSize = "5em";
  document.getElementById("iceCounter").style.transition = "visibility .25s ease 0s, opacity .25s ease 0s, color 0s ease 0s, font-size 0s ease 0s";
  sessionStorage.iceCounterInterval = setInterval(iceCounter.bind(null, event), 1000);
}

function iceCounter(event) {
  sessionStorage.countdown--;
  if (sessionStorage.countdown == 0) {
    clearInterval(sessionStorage.iceCounterInterval);
    sessionStorage.removeItem("iceCounterInterval");
    document.getElementById("iceCounter").innerHTML = "Bitch!";
    document.getElementById("iceCounter").style.color = "var(--sluRed)";
    document.getElementById("iceCounter").style.fontSize = "2em";
    document.getElementById("iceCounter").style.transition = "all 0s ease 0s";
    document.getElementById("iceCounter").style.animation = "bitch 1s ease 0s 10 forwards";
    sessionStorage.bitch = 0;
    sessionStorage.bitchIceInterval = setInterval(bitchIce.bind(null, event), 1000);
    setTimeout(compileSound.bind(null, "sawtooth", ["exponential", (140 + (5 * (10 - (+sessionStorage.bitch + 1)))), (90 + (5 * (10 - (+sessionStorage.bitch + 1)))), .5], ["none", ((+sessionStorage.bitch + 1) * .1), null, 0], .5), 250);
    console.warn("Hurry up...");
  }
  else if (sessionStorage.countdown > 0) {
    if (sessionStorage.countdown == 5) {
      document.getElementById("iceCounter").innerHTML = "BIZ";
      document.getElementById("iceCounter").style.color = "#434E42";
    }
    else if (sessionStorage.countdown == 7) {
      document.getElementById("iceCounter").innerHTML = "BUZ";
      document.getElementById("iceCounter").style.color = "#164E42";
    }
    else {
      document.getElementById("iceCounter").innerHTML = sessionStorage.countdown;
      if (sessionStorage.countdown == 1) {
        document.getElementById("iceCounter").style.color = "#9D4E42";
      }
      else if (sessionStorage.countdown == 2) {
        document.getElementById("iceCounter").style.color = "#874E42";
      }
      else if (sessionStorage.countdown == 3) {
        document.getElementById("iceCounter").style.color = "#704E42";
      }
      else if (sessionStorage.countdown == 4) {
        document.getElementById("iceCounter").style.color = "#5A4E42";
      }
      else if (sessionStorage.countdown == 6) {
        document.getElementById("iceCounter").style.color = "#2D4E42";
      }
    }
    document.getElementById("iceCounter").style.transition = "color 0s ease 0s";
  }
}

function bitchIce(event) {
  sessionStorage.bitch++;
  if (sessionStorage.bitch < 10) {
    setTimeout(compileSound.bind(null, "sawtooth", ["exponential", (140 + (5 * (10 - (+sessionStorage.bitch + 1)))), (90 + (5 * (10 - (+sessionStorage.bitch + 1)))), .5], ["none", ((+sessionStorage.bitch + 1) * .1), null, 0], .5), 250);
    if (sessionStorage.bitch < 6) {
      console.warn("Why are we waiting, we could be masturbating...?");
    }
    else if ((sessionStorage.bitch >= 6) && (sessionStorage.bitch < 10)) {
      console.warn("Still better than Tom!");
    }
  }
  else if (sessionStorage.bitch == 10) {
    clearInterval(sessionStorage.bitchIceInterval);
    sessionStorage.removeItem("bitchIceInterval");
    for (var i = 0; i < 3; i++) {
      sessionStorage.drinks++;
      localStorage.totalDrinks++;
    }
    document.getElementById("conductorCont").style.zIndex = "93";
    document.getElementById("conductorCont").style.filter = "blur(0)";
    document.getElementById("conductorCont").style.transform = "skew(0)";
    document.getElementById("conductorCont").style.transition = "all 0s ease 0s";
    document.getElementById("conductorName").style.fontFamily = "\"Russo One\", fantasy";
    document.getElementById("ok").style.fontFamily = "\"Archivo Black\", \"Roboto\", \"Arial\", sans-serif";
    document.getElementById("conductorTalk").innerHTML = "Woah, it looks like you've had a little too much to drink toknight. I think it's time to call it a knight and sleep off the alcohol. You'll wake up tomorrow with one nasty hangover!";
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
      sessionStorage.backup = "";
    }
    document.getElementById("conductorTalk").style.fontFamily = "\"Merriweather\", \"Times New Roman\", serif";
    document.getElementById("iceCounter").style.animation = "none";
    document.getElementById("iceButtonCont").style.background = "var(--white)";
    document.getElementById("iceButtonCont").style.transition = "background 0s ease 0s";
    document.getElementById("iceButton").style.transition = "opacity 0s ease 0s, transform .1s ease 0s";
    document.getElementById("iceButton").tabIndex = "-1";
    document.getElementById("iceButton").disabled = true;
    document.getElementById("iceButton").blur();
    document.getElementById("triangleFaceCont").style.zIndex = "92";
    speakerPause();
    sessionStorage.lives = 0;
    enableButton();
    document.getElementById("ok").onclick = function(event) {
      failIce(event);
      compileSound("sine", ["exponential", 430, 450, .1], ["exponential", .75, 1, .1], .1);
    };
    const round = new function() {
      this.setValue = function(x) {
        this.value = x;
      }
      this.getValue = function() {
        if (String(Math.floor(this.value)).match(/10|20|25|30|40|50|60|70|75|80|90/sm)) {
          var benchmark = Math.floor(this.value);
        }
        else if (String(Math.ceil(this.value)).match(/10|20|25|30|40|50|60|70|75|80|90/sm)) {
          var benchmark = Math.ceil(this.value);
        }
        else {
          var benchmark = this.value;
        }
        var decimals = (Math.round(benchmark * 100) / 100);
        return decimals;
      }
    }
    if (localStorage.totalIces == "N/A") {
      localStorage.totalIces = 1;
      localStorage.icesFinished = 0;
    }
    else {
      localStorage.totalIces++;
    }
    localStorage.iceFinishRate = ((localStorage.icesFinished / localStorage.totalIces) * 100);
    round.setValue(localStorage.iceFinishRate);
    localStorage.iceFinishRate = round.getValue() + "%";
    remember(event);
    console.error("Worse than Tom!");
  }
}

function failIce(event) {
  document.getElementById("conductorCont").style.zIndex = "92";
  document.getElementById("cover").style.zIndex = "93";
  document.getElementById("iceContContCont").style.visibility = "hidden";
  document.getElementById("iceContContCont").style.opacity = "0%";
  document.getElementById("iceContContCont").style.transition = "all .25s ease 0s";
  document.getElementById("iceContContCont").tabIndex = "-1";
  document.getElementById("iceContContCont").blur();
  document.getElementById("iceButton").tabIndex = "-1";
  document.getElementById("iceButton").blur();
  document.getElementById("triangleFaceCont").style.zIndex = "91";
  if (sessionStorage.beer == 1) {
    document.getElementById("busch").style.transform = "scale(1)";
    document.getElementById("busch").style.transition = "transform .25s ease 0s";
  }
  else if (sessionStorage.beer == 2) {
    document.getElementById("bapple").style.transform = "scale(1)";
    document.getElementById("bapple").style.transition = "transform .25s ease 0s";
  }
  document.getElementById("gameOverHeading").style.color = "var(--sluRed)";
  document.getElementById("gameOverHeading").style.transition = "color 0s ease 0s";
  gameOver(event);
}

function drinkIce(event) {
  sessionStorage.finish = (sessionStorage.finish - sessionStorage.iceDecrement);
  document.getElementById("iceCover").style.bottom = sessionStorage.finish + "%";
  document.getElementById("iceCover").style.transition = "bottom .25s ease 0s";
  if (sessionStorage.finish <= 0) {
    sessionStorage.finish = 0;
    finishIce(event);
  }
}

function finishIce(event) {
  if ((sessionStorage.countdown == undefined) && (sessionStorage.bitch == undefined)) {
    clearTimeout(sessionStorage.countdownIceTimeout);
    sessionStorage.removeItem("countdownIceTimeout");
    document.getElementById("conductorTalk").innerHTML = "Would you look at that, you finished before we even started counting! You're not the hero that pep band deserves, but the one that we need!";
  }
  else if ((sessionStorage.countdown != undefined) && (sessionStorage.bitch == undefined)) {
    clearInterval(sessionStorage.iceCounterInterval);
    sessionStorage.removeItem("iceCounterInterval");
    if (sessionStorage.countdown >= 3) {
      document.getElementById("conductorTalk").innerHTML = "Great job! You finished that nice and quick!";
    }
    else if (sessionStorage.countdown < 3) {
      document.getElementById("conductorTalk").innerHTML = "Finished it just in the nick of time! At least you're not a bitch.";
    }
  }
  else if ((sessionStorage.countdown != undefined) && (sessionStorage.bitch != undefined)) {
    clearInterval(sessionStorage.bitchIceInterval);
    sessionStorage.removeItem("bitchIceInterval");
    document.getElementById("conductorTalk").innerHTML = "Well, well, well, if it isn't the little bitch. You should be ashamed of yourself!";
  }
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    if (document.getElementById("conductorTalkCont").scrollTop > 0) {
      document.getElementById("conductorTalkCont").scrollTop = 0;
    }
  }
  if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
    sessionStorage.backup = "";
  }
  document.getElementById("conductorCont").style.zIndex = "91";
  document.getElementById("cover").style.zIndex = "92";
  if (sessionStorage.drinks < 50) {
    document.getElementById("cover").style.visibility = "hidden";
    document.getElementById("cover").style.opacity = "0%";
    document.getElementById("cover").style.transition = "all .25s ease 0s";
    document.getElementById("cover").tabIndex = "-1";
    document.getElementById("cover").blur();
  }
  var transformValue = ((sessionStorage.level - 1) * 9);
  document.getElementById("iceContContCont").style.visibility = "hidden";
  document.getElementById("iceContContCont").style.left = "16%";
  document.getElementById("iceContContCont").style.right = "54%";
  document.getElementById("iceContContCont").style.top = "30%";
  document.getElementById("iceContContCont").style.bottom = "10%";
  document.getElementById("iceContContCont").style.background = "transparent";
  document.getElementById("iceContContCont").style.opacity = "0%";
  document.getElementById("iceContContCont").style.border = ".05em solid transparent";
  document.getElementById("iceContContCont").style.transform = "skew(" + (Math.ceil(Math.random() * transformValue) * ((Math.round(Math.random())) ? (1) : (-1))) + "deg) scale(0)";
  document.getElementById("iceContContCont").style.transition = "visibility .25s ease 0s, left 0s ease .25s, right 0s ease .25s, top 0s ease .25s, bottom 0s ease .25s, background 0s ease .25s, opacity .25s ease 0s, border 0s ease .25s, transform 0s ease .25s";
  document.getElementById("iceContContCont").tabIndex = "-1";
  document.getElementById("iceContContCont").blur();
  document.getElementById("iceCover").style.bottom = "100%";
  document.getElementById("iceCover").style.transition = "bottom 0s ease .25s";
  document.getElementById("iceButton").tabIndex = "-1";
  document.getElementById("iceButton").blur();
  document.getElementById("iceButtonCont").style.visibility = "hidden";
  document.getElementById("iceButtonCont").style.opacity = "0%";
  document.getElementById("iceButtonCont").style.transition = "all 0s ease .25s";
  document.getElementById("iceSong").style.visibility = "hidden";
  document.getElementById("iceSong").style.opacity = "0%";
  document.getElementById("iceSong").style.transition = "all 0s ease .25s";
  for (var i = 0; i < document.getElementsByClassName("iceWord").length; i++) {
    document.getElementsByClassName("iceWord")[i].style.visibility = "hidden";
    document.getElementsByClassName("iceWord")[i].style.transition = "visibility 0s ease .25s";
  }
  document.getElementById("iceCounter").style.visibility = "hidden";
  document.getElementById("iceCounter").style.opacity = "0%";
  document.getElementById("iceCounter").style.transition = "all 0s ease .25s";
  document.getElementById("iceCounter").style.animation = "none";
  if (sessionStorage.beer == 1) {
    document.getElementById("busch").style.transform = "scale(1)";
    document.getElementById("busch").style.transition = "transform .25s ease 0s";
    document.getElementById("busch").style.pointerEvents = "auto";
  }
  else if (sessionStorage.beer == 2) {
    document.getElementById("bapple").style.transform = "scale(1)";
    document.getElementById("bapple").style.transition = "transform .25s ease 0s";
    document.getElementById("bapple").style.pointerEvents = "auto";
  }
  sessionStorage.drinksIncrement = 3;
  drunk(sessionStorage.drinksIncrement, event);
  setTimeout(() => (
    document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
  ), 250);
  setTimeout(() => (
    document.getElementById("viewAccountToggle").tabIndex = "0"
  ), 250);
  const round = new function() {
    this.setValue = function(x) {
      this.value = x;
    }
    this.getValue = function() {
      if (String(Math.floor(this.value)).match(/10|20|25|30|40|50|60|70|75|80|90/sm)) {
        var benchmark = Math.floor(this.value);
      }
      else if (String(Math.ceil(this.value)).match(/10|20|25|30|40|50|60|70|75|80|90/sm)) {
        var benchmark = Math.ceil(this.value);
      }
      else {
        var benchmark = this.value;
      }
      var decimals = (Math.round(benchmark * 100) / 100);
      return decimals;
    }
  }
  if (localStorage.totalIces == "N/A") {
    localStorage.totalIces = 1;
    localStorage.icesFinished = 1;
  }
  else {
    localStorage.totalIces++;
    localStorage.icesFinished++;
  }
  localStorage.iceFinishRate = ((localStorage.icesFinished / localStorage.totalIces) * 100);
  round.setValue(localStorage.iceFinishRate);
  localStorage.iceFinishRate = round.getValue() + "%";
  remember(event);
}

function drunk(drinksIncrement, event) {
  sessionStorage.drinksIncrement = drinksIncrement;
  for (var i = 1; i <= sessionStorage.drinksIncrement; i++) {
    sessionStorage.drinks++;
    localStorage.totalDrinks++
  }
  remember(event);
  if ((sessionStorage.drinks >= 9) && (sessionStorage.drinks < 53)) {
    if ((sessionStorage.drinks >= 9) && (sessionStorage.drinks < 18)) {
      sessionStorage.level = 2;
      sessionStorage.dafCountIncrement = 2;
      sessionStorage.iceDecrement = 9;
      for (var i = 0; i < document.getElementsByClassName("drunkText").length; i++) {
        document.getElementsByClassName("drunkText")[i].style.fontFamily = "\"Slackey\", fantasy";
      }
      document.getElementById("triangleFaceCont").style.opacity = "25%";
      document.getElementById("triangleFaceCont").style.transition = "opacity 0s ease 0s";
      document.getElementById("websiteCont").style.setProperty("--leftValue", "-38em");
    }
    else if ((sessionStorage.drinks >= 18) && (sessionStorage.drinks < 27)) {
      sessionStorage.level = 3;
      sessionStorage.dafCountIncrement = 3;
      sessionStorage.iceDecrement = 8;
      document.getElementById("triangleFaceCont").style.opacity = "33%";
      document.getElementById("triangleFaceCont").style.transition = "opacity 0s ease 0s";
    }
    else if ((sessionStorage.drinks >= 27) && (sessionStorage.drinks < 36)) {
      sessionStorage.level = 4;
      sessionStorage.dafCountIncrement = 5;
      sessionStorage.iceDecrement = 5;
      document.getElementById("triangleFaceCont").style.opacity = "50%";
      document.getElementById("triangleFaceCont").style.transition = "opacity 0s ease 0s";
    }
    else if ((sessionStorage.drinks >= 36) && (sessionStorage.drinks < 45)) {
      sessionStorage.level = 5;
      sessionStorage.dafCountIncrement = 8;
      sessionStorage.iceDecrement = 3;
      document.getElementById("triangleFaceCont").style.opacity = "67%";
      document.getElementById("triangleFaceCont").style.transition = "opacity 0s ease 0s";
    }
    else if ((sessionStorage.drinks >= 45) && (sessionStorage.drinks < 53)) {
      sessionStorage.level = 6;
      sessionStorage.dafCountIncrement = 10;
      sessionStorage.iceDecrement = 1;
      if (document.getElementById("conductor").onclick == pillow) {
        if (sessionStorage.backup == undefined) {
          document.getElementById("conductorTalk").innerHTML = "That's weird, I just turned into a pillow. I bet you really want to \"mmm\" me now...";
          if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
            if (document.getElementById("conductorTalkCont").scrollTop > 0) {
              document.getElementById("conductorTalkCont").scrollTop = 0;
            }
          }
        }
        else {
          if ((sessionStorage.backup != undefined) && (sessionStorage.backup != "")) {
            sessionStorage.backup = "";
          }
        }
        document.getElementById("conductor").title = "Mmm...";
        document.getElementById("conductor").style.background = "url(\"img/pillow.png\") center / cover";
      }
      document.getElementById("conductor").onclick = null;
      document.getElementById("triangleFaceCont").style.opacity = "75%";
      document.getElementById("triangleFaceCont").style.transition = "opacity 0s ease 0s";
      for (var i = 1; i < document.getElementsByClassName("speakerSong").length; i++) {
        document.getElementsByClassName("speakerSong")[i].innerHTML = "Tijuana";
        document.getElementsByClassName("speakerSong")[i].value = "tijuana";
      }
      document.getElementById("websiteLink").href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    var filterValue = ((sessionStorage.level - 1) * .1);
    var transformValue = ((sessionStorage.level - 1) * 9);
    var transitionDuration = ((sessionStorage.level - 1) * .25);
    for (var i = 0; i < document.getElementsByClassName("drunkCont").length; i++) {
      document.getElementsByClassName("drunkCont")[i].style.filter = "blur(" + filterValue + "em)";
      if ((document.getElementsByClassName("drunkCont")[i] == document.getElementById("promoCont")) || (document.getElementsByClassName("drunkCont")[i] == document.getElementById("iceContContCont"))) {
        document.getElementsByClassName("drunkCont")[i].style.transform = "skew(" + (Math.ceil(Math.random() * transformValue) * ((Math.round(Math.random())) ? (1) : (-1))) + "deg) scale(0)";
      }
      else {
        document.getElementsByClassName("drunkCont")[i].style.transform = "skew(" + (Math.ceil(Math.random() * transformValue) * ((Math.round(Math.random())) ? (1) : (-1))) + "deg)";
      }
      document.getElementsByClassName("drunkCont")[i].style.transition = "all " + transitionDuration + "s ease 0s";
    }
  }
  else if (sessionStorage.drinks >= 53) {
    sessionStorage.level = 7;
    document.getElementById("conductorCont").style.zIndex = "92";
    document.getElementById("cover").style.zIndex = "93";
    document.getElementById("triangleFaceCont").style.zIndex = "91";
    document.getElementById("triangleFaceCont").style.opacity = "100%";
    document.getElementById("triangleFaceCont").style.transition = "opacity 0s ease 0s";
    if (sessionStorage.beer == 1) {
      document.getElementById("busch").style.pointerEvents = "none";
    }
    else if (sessionStorage.beer == 2) {
      document.getElementById("bapple").style.pointerEvents = "none";
    }
    speakerPause();
    sessionStorage.lives = 0;
    document.getElementById("troyLassialTalk").innerHTML = "It seems last knight you blacked out from excessive alcohol comsumption and had to be taken to the hospital. To ensure this doesn't happen again, I'm going to have to ban you from playing this game anymore.";
    troyLassialEntrance();
    compileSound("sawtooth", ["exponential", 90, 140, 1], ["exponential", .75, .9, 1], 1);
    setTimeout(compileSound.bind(null, "sawtooth", ["exponential", 140, 40, 1], ["exponential", .9, 1, 1], 1), 1250);
  }
}

function openPromo() {
  document.getElementById("conductorCont").tabIndex = "-1";
  document.getElementById("conductorCont").blur();
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    document.getElementById("conductorTalkCont").tabIndex = "-1";
    document.getElementById("conductorTalkCont").blur();
  }
  document.getElementById("viewAccountToggle").style.pointerEvents = "none";
  document.getElementById("viewAccountToggle").tabIndex = "-1";
  document.getElementById("viewAccountToggle").blur();
  if (document.getElementById("viewAccountToggle").onclick == viewAccountToggleClose) {
    viewAccountToggleClose();
  }
  document.getElementById("promoTitle").tabIndex = "0";
  document.getElementById("promoExit").tabIndex = "0";
  var transformValue = ((sessionStorage.level - 1) * 9);
  document.getElementById("promoCont").style.transform = "skew(" + (Math.ceil(Math.random() * transformValue) * ((Math.round(Math.random())) ? (1) : (-1))) + "deg) scale(1)";
  document.getElementById("promoCont").style.transition = "transform .5s ease 0s";
  document.getElementById("promoCont").tabIndex = "0";
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.opacity = "100%";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
  document.getElementById("cover").tabIndex = "0";
  document.onclick = null;
  document.ondblclick = null;
  document.onkeydown = shortcut;
  document.onkeyup = shortcutUndo;
  sessionStorage.shortcut = "promoControls";
  console.log("Wow, Joe's a baby there");
}

function showPromoControls() {
  if ((sessionStorage.promo == 1) || (document.getElementById("promo").currentTime > 0)) {
    document.getElementById("promoTitle").style.visibility = "visible";
    document.getElementById("promoTitle").style.opacity = "100%";
    document.getElementById("promoTitle").style.transition = "all .25s ease 0s";
    document.getElementById("promoExit").style.visibility = "visible";
    document.getElementById("promoExit").style.opacity = "100%";
    document.getElementById("promoExit").style.transition = "all .25s ease 0s";
  }
}

function hidePromoControls() {
  if ((sessionStorage.promo == 1) || (document.getElementById("promo").currentTime > 0)) {
    document.getElementById("promoTitle").style.visibility = "hidden";
    document.getElementById("promoTitle").style.opacity = "0%";
    document.getElementById("promoTitle").style.transition = "all .25s ease 0s";
    document.getElementById("promoExit").style.visibility = "hidden";
    document.getElementById("promoExit").style.opacity = "0%";
    document.getElementById("promoExit").style.transition = "all .25s ease 0s";
  }
}

function promoControls(event) {
  if (((document.fullscreenElement == document.getElementById("promo")) && (event.type == "ended")) || ((document.fullscreenElement != document.getElementById("promo")) && ((event.type == "click") || ((event.type == "keydown") && (event.key == "Escape")) || (event.type == "ended")))) {
    closePromo(event);
  }
  else {
    if (event.type == "keydown") {
      if ((event.key).toLowerCase() == "c") {
        if (document.getElementById("promo").textTracks[0].mode == "showing") {
          hideCaptions();
        }
        else if (document.getElementById("promo").textTracks[0].mode == "hidden") {
          showCaptions();
        }
      }
      else if ((event.key).toLowerCase() == "f") {
        if (document.fullscreenElement == document.getElementById("promo")) {
          document.exitFullscreen();
        }
        else {
          document.getElementById("promo").requestFullscreen();
        }
      }
      else if ((event.key).toLowerCase() == "m") {
        if (document.getElementById("promo").muted == true) {
          promoUnmute();
        }
        else if (document.getElementById("promo").muted == false) {
          promoMute();
        }
      }
      else if ((event.key == "ArrowUp") || (event.key == "ArrowDown")) {
        if (event.key == "ArrowUp") {
          promoVolumeIncrease();
        }
        else if (event.key == "ArrowDown") {
          promoVolumeDecrease();
        }
      }
    }
  }
}

function promoMute() {
  document.getElementById("promo").muted = true;
}

function promoUnmute() {
  document.getElementById("promo").muted = false;
}

function promoVolumeIncrease() {
  if (document.getElementById("promo").muted == true) {
    promoUnmute();
  }
  document.getElementById("promo").volume = document.getElementById("promo").volume + .05;
  if (document.getElementById("promo").volume > 1) {
    document.getElementById("promo").volume = 1;
  }
}

function promoVolumeDecrease() {
  document.getElementById("promo").volume = document.getElementById("promo").volume - .05;
  if (document.getElementById("promo").volume < 0) {
    document.getElementById("promo").volume = 0;
  }
}

function showCaptions() {
  document.getElementById("promo").textTracks[0].mode = "showing";
}

function hideCaptions() {
  document.getElementById("promo").textTracks[0].mode = "hidden";
}

function fullscreenEnter() {
  document.getElementById("promo").classList.replace("smallScreenPromo", "fullscreenPromo");
  document.getElementById("promo").onfullscreenchange = fullscreenExit;
}

function fullscreenExit() {
  document.getElementById("promo").classList.replace("fullscreenPromo", "smallScreenPromo");
  document.getElementById("promo").onfullscreenchange = fullscreenEnter;
}

function closePromo(event) {
  document.getElementById("promo").pause();
  document.getElementById("cover").style.visibility = "hidden";
  document.getElementById("cover").style.opacity = "0%";
  document.getElementById("cover").tabIndex = "-1";
  document.getElementById("cover").blur();
  var transformValue = ((sessionStorage.level - 1) * 9);
  document.getElementById("promoCont").style.transform = "skew(" + (Math.ceil(Math.random() * transformValue) * ((Math.round(Math.random())) ? (1) : (-1))) + "deg) scale(0)";
  document.getElementById("promoCont").tabIndex = "-1";
  document.getElementById("promoCont").blur();
  document.getElementById("promoTitle").tabIndex = "-1";
  document.getElementById("promoTitle").blur();
  document.getElementById("promoExit").tabIndex = "-1";
  document.getElementById("promoExit").blur();
  if ((sessionStorage.promo == 0) && (document.getElementById("promo").currentTime > 0)) {
    sessionStorage.promo++;
  }
  document.onclick = collapse;
  document.ondblclick = showPassword;
  document.onkeydown = collapse;
  document.onkeyup = null;
  sessionStorage.removeItem("shortcut");
  Object.keys(keyboard).forEach((key) => {
    if (keyboard[key] == true) {
      keyboard[key] = false;
    }
  });
  if ((document.fullscreenElement == document.getElementById("promo")) && (event.type == "ended")) {
    document.exitFullscreen();
    document.getElementById("cover").style.transition = "all .25s ease .75s";
    document.getElementById("promoCont").style.transition = "transform .5s ease .5s";
    document.getElementById("promoExit").style.animation = "promoExit .5s ease .5s 1 forwards";
    setTimeout(() => (
      document.getElementById("promoExit").style.animation = "none"
    ), 1000);
    if (document.getElementById("promo").ended == true) {
      setTimeout(() => (
        document.getElementById("promo").currentTime = 0
      ), 1000);
      setTimeout(showPromoControls, 1000);
    }
    setTimeout(() => (
      document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
    ), 1000);
    setTimeout(() => (
      document.getElementById("viewAccountToggle").tabIndex = "0"
    ), 1000);
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      setTimeout(() => (
        document.getElementById("conductorTalkCont").tabIndex = "0"
      ), 1000);
    }
    setTimeout(() => (
      document.getElementById("conductorCont").tabIndex = "0"
    ), 1000);
  }
  else if ((document.fullscreenElement != document.getElementById("promo")) && ((event.type == "click") || ((event.type == "keydown") && (event.key == "Escape")) || (event.type == "ended"))) {
    document.getElementById("cover").style.transition = "all .25s ease .25s";
    document.getElementById("promoCont").style.transition = "transform .5s ease 0s";
    document.getElementById("promoExit").style.animation = "promoExit .5s ease 0s 1 forwards";
    setTimeout(() => (
      document.getElementById("promoExit").style.animation = "none"
    ), 500);
    if (document.getElementById("promo").ended == true) {
      setTimeout(() => (
        document.getElementById("promo").currentTime = 0
      ), 500);
      setTimeout(showPromoControls, 500);
    }
    setTimeout(() => (
      document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
    ), 500);
    setTimeout(() => (
      document.getElementById("viewAccountToggle").tabIndex = "0"
    ), 500);
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      setTimeout(() => (
        document.getElementById("conductorTalkCont").tabIndex = "0"
      ), 500);
    }
    setTimeout(() => (
      document.getElementById("conductorCont").tabIndex = "0"
    ), 500);
  }
}

function cuntEmpireEntrance() {
  document.getElementById("cuntEmpireLink").tabIndex = "0";
  document.getElementById("cuntEmpireHeadingLink").tabIndex = "0";
  document.getElementById("cuntEmpireAdvertisementLink").tabIndex = "0";
  document.getElementById("cuntEmpireContContCont").style.top = "1em";
  document.getElementById("cuntEmpireContContCont").style.transition = "top 1s ease 0s";
  console.log("My cock is even bigger than my charisma, it'll tear a whole in the space-time continuum!");
}

function cuntEmpireUncover() {
  document.getElementById("cuntEmpireCover").style.display = "none";
}

function cuntEmpireExit() {
  document.getElementById("cuntEmpireContContCont").style.top = "-10em";
  document.getElementById("cuntEmpireContContCont").style.transition = "top 1s ease 0s";
  document.getElementById("cuntEmpireLink").tabIndex = "-1";
  document.getElementById("cuntEmpireLink").blur();
  document.getElementById("cuntEmpireHeadingLink").tabIndex = "-1";
  document.getElementById("cuntEmpireHeadingLink").blur();
  document.getElementById("cuntEmpireAdvertisementLink").tabIndex = "-1";
  document.getElementById("cuntEmpireAdvertisementLink").blur();
  setTimeout(cuntEmpireEntrance, 600000);
  console.log("Not horny enough? Maybe later...");
}

function viewAccountToggleOpen() {
  document.getElementById("viewAccountToggleShape").style.transform = "rotate(90deg)";
  document.getElementById("viewAccountToggleShape").style.transition = "transform .25s ease 0s";
  document.getElementById("viewAccountToggle").ariaLabel = "Close the side panel";
  document.getElementById("viewAccountToggle").onclick = viewAccountToggleClose;
  document.getElementById("viewAccountButton").style.pointerEvents = "auto";
  document.getElementById("viewAccountButton").tabIndex = "0";
  document.getElementById("viewAccount").style.right = ".2em";
  document.getElementById("viewAccount").style.transition = "right 1s ease 0s";
}

function viewAccountToggleClose() {
  document.getElementById("viewAccountToggleShape").style.transform = "rotate(0)";
  document.getElementById("viewAccountToggleShape").style.transition = "transform .25s ease 0s";
  document.getElementById("viewAccountToggle").ariaLabel = "Open the side panel to view your account";
  document.getElementById("viewAccountToggle").onclick = viewAccountToggleOpen;
  document.getElementById("viewAccount").style.right = "-10.2em";
  document.getElementById("viewAccount").style.transition = "right 1s ease 0s";
  document.getElementById("viewAccountButton").style.pointerEvents = "none";
  document.getElementById("viewAccountButton").tabIndex = "-1";
  document.getElementById("viewAccountButton").blur();
}

function openAccount(event) {
  if (document.getElementById("ok").disabled == true) {
    sessionStorage.button = "disabled";
  }
  else if (document.getElementById("ok").disabled == false) {
    sessionStorage.button = "enabled";
    disableButton();
  }
  document.getElementById("conductorCont").tabIndex = "-1";
  document.getElementById("conductorCont").blur();
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    document.getElementById("conductorTalkCont").tabIndex = "-1";
    document.getElementById("conductorTalkCont").blur();
  }
  document.getElementById("viewAccountToggle").style.pointerEvents = "none";
  document.getElementById("viewAccountToggle").tabIndex = "-1";
  document.getElementById("viewAccountToggle").blur();
  document.getElementById("viewAccountButton").style.pointerEvents = "none";
  document.getElementById("viewAccountButton").tabIndex = "-1";
  document.getElementById("viewAccountButton").blur();
  accountUpdate(0, "check");
  remember(event);
  for (var i = 0; i < document.getElementsByClassName("infoInput").length; i++) {
    document.getElementsByClassName("infoInput")[i].tabIndex = "0";
  }
  var fields = [];
  for (var i = 0; i < document.getElementsByClassName("infoInput").length; i++) {
    if (eval("localStorage." + document.getElementsByClassName("infoInput")[i].name) == undefined) {
      fields.push(document.getElementsByClassName("infoInput")[i].name);
    }
  }
  if (fields.length == 0) {
    setTimeout(() => (
      document.getElementById("nameInput").focus()
    ), 250);
  }
  else if (fields.length > 0) {
    for (var i = 0; i < document.getElementsByClassName("infoInput").length; i++) {
      if (fields.includes(document.getElementsByClassName("infoInput")[i].name)) {
        setTimeout(() => (
          document.getElementsByClassName("infoInput")[i].focus()
        ), 250);
        break;
      }
    }
  }
  if (document.getElementById("infoDataMemoryCont").scrollHeight > document.getElementById("infoDataMemoryCont").offsetHeight) {
    document.getElementById("infoDataMemoryCont").tabIndex = "0";
    if (document.getElementById("infoDataMemoryCont").scrollTop > 0) {
      document.getElementById("infoDataMemoryCont").scrollTop = 0;
    }
  }
  document.getElementById("accountExit").tabIndex = "0";
  document.getElementById("account").style.visibility = "visible";
  document.getElementById("account").style.opacity = "100%";
  document.getElementById("account").style.transition = "all 0s ease 0s";
  document.getElementById("account").tabIndex = "0";
  document.getElementById("cover").style.zIndex = "93";
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.background = "rgba(153, 153, 153, 95%)";
  document.getElementById("cover").style.opacity = "100%";
  document.getElementById("cover").style.transition = "visibility .25s ease 0s, background 0s ease 0s, opacity .25s ease 0s";
  document.getElementById("cover").tabIndex = "0";
  if (sessionStorage.drinks != undefined) {
    document.getElementById("triangleFaceCont").style.zIndex = "92";
  }
  sessionStorage.scope = "input";
  document.onclick = null;
  document.ondblclick = null;
  document.onkeydown = shortcut;
  document.onkeyup = shortcutUndo;
  sessionStorage.shortcut = "accountControls";
}

function accountControls(event) {
  if (keyboard.enter == true) {
    if (keyboard.shift == true) {
      if ((((navigator.userAgent == undefined) || ((navigator.userAgent).match(/Windows/sm))) && (keyboard.control == true)) || (((navigator.userAgent).match(/Macintosh/sm)) && (keyboard.meta == true))) {
        accountRemove(0, event);
      }
      else if ((((navigator.userAgent == undefined) || ((navigator.userAgent).match(/Windows/sm))) && (keyboard.control == false)) || (((navigator.userAgent).match(/Macintosh/sm)) && (keyboard.meta == false))) {
        if (sessionStorage.scope == "input") {
          accountRemove(sessionStorage.field, event);
        }
        else if (sessionStorage.scope == "document") {
          accountMessageEntrance();
        }
      }
    }
    else if (keyboard.shift == false) {
      if (sessionStorage.scope == "document") {
        accountMessageEntrance();
      }
    }
  }
  if ((event.key).match(/\b[1-9]\b/sm)) {
    if (sessionStorage.scope == "document") {
      if (event.key <= document.getElementsByClassName("infoInput").length) {
        event.preventDefault();
        document.getElementsByClassName("infoInput")[event.key - 1].focus();
      }
      else if (event.key > document.getElementsByClassName("infoInput").length) {
        accountMessageEntrance();
      }
    }
  }
  else if (event.key == "/") {
    if (sessionStorage.scope == "document") {
      event.preventDefault();
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].focus();
    }
  }
  else if (event.key == "Escape") {
    if (sessionStorage.scope == "document") {
      document.getElementById("accountExit").style.animation = "buttonExit .25s ease 0s 1 forwards";
      setTimeout(() => (
        document.getElementById("accountExit").style.animation = "none"
      ), 250);
      closeAccount();
    }
  }
  else if ((event.key).match(/\b[a-zA-Z]\b|\b0\b|\.|\,|\'|\"|\`|\~|\-|\_|\+|\*|\^|\%|\=|\>|\<|\&|\#|\$|\@|\;|\:|\?|\!|\\|\||\(|\)|\[|\]|\{|\}|\s|Backspace|Delete/sm)) {
    if ((keyboard.control == false) && (keyboard.alt == false) && (keyboard.meta == false) && (keyboard.fn == false)) {
      if (sessionStorage.scope == "document") {
        accountMessageEntrance();
      }
    }
  }
}

function accountMessageEntrance() {
  if (sessionStorage.accountMessageExitTimeout != undefined) {
    clearTimeout(sessionStorage.accountMessageExitTimeout);
    sessionStorage.removeItem("accountMessageExitTimeout");
  }
  if (sessionStorage.accountMessageExitDisplayTimeout != undefined) {
    clearTimeout(sessionStorage.accountMessageExitDisplayTimeout);
    sessionStorage.removeItem("accountMessageExitDisplayTimeout");
  }
  document.getElementById("accountMessage").style.display = "block";
  document.getElementById("accountMessage").style.opacity = "100%";
  document.getElementById("accountMessage").style.transition = "opacity 0s ease 0s";
  sessionStorage.accountMessageExitTimeout = setTimeout(accountMessageExit, 5000);
}

function accountMessageExit() {
  sessionStorage.accountMessageExitDisplayTimeout = setTimeout(() => (
    document.getElementById("accountMessage").style.display = "none"
  ), 2000);
  document.getElementById("accountMessage").style.opacity = "0%";
  document.getElementById("accountMessage").style.transition = "opacity 2s ease 0s";
}

function arriveInput(field) {
  sessionStorage.field = field;
  if (sessionStorage.scopeTimeout != undefined) {
    clearTimeout(sessionStorage.scopeTimeout);
    sessionStorage.removeItem("scopeTimeout");
  }
  sessionStorage.scope = "input";
}

function leaveInput(field) {
  sessionStorage.field = field;
  if ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value).match(/^\s+$/gsm)) {
    document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value = "";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].value = document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value;
  }
  if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value == "") {
    if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.contains("invalidInfoInput")) {
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.replace("invalidInfoInput", "validInfoInput");
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.accentColor = "var(--clarksonGreen)";
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.setProperty("border", ".1em solid var(--darkGray)", "important");
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.transition = "all 0s ease 0s";
      document.getElementsByClassName("invalidInfoMessage")[sessionStorage.field - 1].style.display = "none";
    }
  }
  sessionStorage.scopeTimeout = setTimeout(() => (
    sessionStorage.scope = "document"
  ), 250);
}

function accountTyping(field) {
  sessionStorage.field = field;
  document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].value = document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value;
  if ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value != "") && (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].checkValidity())) {
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.background = "var(--darkGray)";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.color = "var(--lightGray)";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.transition = "all 0s ease 0s";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].tabIndex = "0";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].disabled = false;
  }
  else {
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.background = "var(--lightGray)";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.color = "var(--darkGray)";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.transition = "all 0s ease 0s";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].tabIndex = "-1";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].disabled = true;
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].blur();
  }
  if ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value == "") || ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value != "") && (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].checkValidity()))) {
    if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.contains("invalidInfoInput")) {
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.replace("invalidInfoInput", "validInfoInput");
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.accentColor = "var(--clarksonGreen)";
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.setProperty("border", ".1em solid var(--darkGray)", "important");
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.transition = "all 0s ease 0s";
      document.getElementsByClassName("invalidInfoMessage")[sessionStorage.field - 1].style.display = "none";
    }
  }
}

function accountProcess(field, event) {
  sessionStorage.field = field;
  if ((event.type == "click") || ((event.type == "keydown") && ((event.key == "Enter") && (keyboard.shift == false)))) {
    if (event.type == "click") {
      event.preventDefault();
    }
    accountStore(sessionStorage.field);
  }
  else if ((event.type == "keydown") && (event.key == "Escape")) {
    document.getElementsByClassName("infoInput")[sessionStorage.field - 1].blur();
  }
}

function accountStore(field) {
  sessionStorage.field = field;
  if ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value).match(/(?<=^)\s+|\s+(?=$)/gsm)) {
    document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value = (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value).trim();
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].value = document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value;
  }
  if ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value != "") && (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].checkValidity())) {
    if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "socialSecurityNumber") {
      if ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value).length < 9) {
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value = (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value).padStart(9, "0");
      }
      localStorage.socialSecurityNumber = (document.getElementById("socialSecurityNumberInput").value).substring(0, 3) + "-" + (document.getElementById("socialSecurityNumberInput").value).substring(3, 5) + "-" + (document.getElementById("socialSecurityNumberInput").value).substring(5);
    }
    else {
      eval("localStorage." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name + " = document.getElementsByClassName(\"infoInput\")[sessionStorage.field - 1].value");
    }
    document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value = "";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].value = document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value;
    document.getElementsByClassName("infoInput")[sessionStorage.field - 1].placeholder = eval("localStorage." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name);
    if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.contains("invalidInfoInput")) {
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.replace("invalidInfoInput", "validInfoInput");
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.accentColor = "var(--clarksonGreen)";
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.setProperty("border", ".1em solid var(--darkGray)", "important");
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.transition = "all 0s ease 0s";
      document.getElementsByClassName("invalidInfoMessage")[sessionStorage.field - 1].style.display = "none";
    }
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.background = "var(--lightGray)";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.color = "var(--darkGray)";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.transition = "all 0s ease 0s";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].tabIndex = "-1";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].disabled = true;
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].blur();
    accountUpdate(sessionStorage.field, "store");
    if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "name") {
      if ((localStorage.name).match(/chestnut/ism)) {
        console.log("Oh, I'm here?");
      }
      else if ((localStorage.name).match(/charl(ie|es)/ism)) {
        console.log(localStorage.name + " has kind of a sexy ring to it...");
      }
      else if ((localStorage.name).match(/\bben/ism)) {
        console.log("Eww, " + localStorage.name + " is an awful name!");
      }
      else if ((localStorage.name).match(/ch(aw)?awgo/ism)) {
        console.log("Many moons, " + localStorage.name + ", my redskin!");
      }
      else if ((localStorage.name).match(/ryan/ism)) {
        console.log(localStorage.name + " sounds like a boy's name, if you're a chick your parents hated you");
      }
      else if ((localStorage.name).match(/schalago/ism)) {
        console.log(localStorage.name + ", that sounds dope as fuck!");
      }
      else if ((localStorage.name).match(/\bjoe\b|joseph/ism)) {
        console.log("I see you're named " + localStorage.name + ", quite like the conductor in this game...");
      }
      else if ((localStorage.name).match(/(isa)?bella/ism)) {
        console.log("No, who told you, " + localStorage.name + "?");
      }
      else if ((localStorage.name).match(/co(l)?in/ism)) {
        console.log("If " + localStorage.name + " is code for Colin Whitesell, we all miss you, bro!");
      }
      else {
        console.log(localStorage.name + ", that's a nice name!");
      }
    }
    else if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "year") {
      if ((localStorage.year).match(/school/ism)) {
        console.log("Eww, children, gross...");
      }
      else if ((localStorage.year).match(/grad|alum/ism)) {
        console.log("Damn, you're old!");
      }
    }
    else if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "major") {
      if ((localStorage.major).match(/(\bcomm|\bc\,?\s*m\,?\s*(and|\&)?\s*d\b)|(digital arts|\bd\s*a(\s*(and|\&)?\s*s)?\b)|humanities|(\blit\b|literature)|history|social|(politic|poly.?sci)|anthropology|liberal/ism)) {
        console.log("Hahaha, no you're not");
      }
      else if ((localStorage.major).match(/business|(engineering\s*(and|\&)?\s*management|\be\s*(and|\&)?\s*m\b)|(innovation\s*(and|\&)?\s*entrepreneurship|\bi\s*(and|\&)?\s*e\b)|supply chain|econ|financ|bank|account/ism)) {
        console.log("Well then you're totally useless");
      }
      else if ((localStorage.major).match(/civ(il|.e)/ism)) {
        console.log("Aka a pretend-gineer");
      }
      else if ((localStorage.major).match(/\bbio/ism)) {
        console.log("Nice to finally see a female here!");
      }
      else if ((localStorage.major).match(/mech/ism)) {
        console.log("Basic bitch");
      }
      else if ((localStorage.major).match(/aero/ism)) {
        console.log("A bird can do everything you can without a degree");
      }
      else if ((localStorage.major).match(/sex|drugs/ism)) {
        console.log("You're more than welcome to...study with me...");
      }
    }
    else if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "hometown") {
      if ((localStorage.hometown).match(/potsdam/ism)) {
        console.log("Fucking HEY, I like it there!");
      }
      else if ((localStorage.hometown).match(/canton/ism)) {
        console.log("Sounds like a SLUzer to me");
      }
      else if ((localStorage.hometown).match(/saratoga|greenwich/ism)) {
        console.log("I'm from " + localStorage.hometown + " too, small world");
      }
      else if ((localStorage.hometown).match(/ithaca/ism)) {
        console.log("Jump for joy, Cornell!");
      }
      else if ((localStorage.hometown).match(/new haven/ism)) {
        console.log("Eww, so that's why you smell");
      }
      else if ((localStorage.hometown).match(/los angeles|\bla\b/ism)) {
        console.log("Lucky...");
      }
      else if ((localStorage.hometown).match(/toronto/ism)) {
        console.log("Toronto, eh?");
      }
      else if ((localStorage.hometown).match(/rochester|buffalo/ism)) {
        console.log("Josh Allen is honestly overrated");
      }
      else if ((localStorage.hometown).match(/\bdover\b/ism)) {
        console.log("Ben-" + localStorage.hometown + "!");
      }
      else if ((localStorage.hometown).match(/(atlantic|jersey) city|newark|trenton/ism)) {
        console.log("Pump our gas!");
      }
      else if ((localStorage.hometown).match(/amherst|boston|cambridge|peabody|(salem|springfield).+(\bmass|\bma\b)|worcester/ism)) {
        console.log("Mass-hole!");
      }
      else if ((localStorage.hometown).match(/fort lauderdale|jacksonville|miami|orlando|sarasota|s.*t\.? augustine|tallahassee|tampa/ism)) {
        console.log("Don't you have some women to assault with a cheeseburger or something?");
      }
      else if ((localStorage.hometown).match(/auburn|birmingham|montgomery/ism)) {
        console.log("Sweeeet homeee Alabama...");
      }
      else if ((localStorage.hometown).match(/bismarck|fargo/ism)) {
        console.log("So North Dakota really does exist?");
      }
      else if ((localStorage.hometown).match(/tijuana/ism)) {
        console.log("Tijuana go to the...");
      }
      else if ((localStorage.hometown).match(/juneau|anchorage|honolulu|(mexico|ho chi minh) city|bogota|lima|rio de janeiro|sao paulo|santiago|buenos aires|casablanca|cairo|alexandria|lagos|kinshasa|nairobi|luanda|johannesburg|cape town|dublin|glasgow|manchester|liverpool|london|lisbon|madrid|barcelona|paris|brussels|amsterdam|hamburg|berlin|frankfurt|munich|copenhagen|geneva|zurich|vienna|prague|budapest|venice|florence|rome|naples|vatican|stockholm|petersburg|moscow|istanbul|jerusalem|baghdad|abu dhabi|tehran|karachi|beijing|tianjin|shanghai|wuhan|chongqing|guangzhou|hong kong|pyongyang|seoul|tokyo|yokohama|delhi|mumbai|dhaka|bangkok|singapore|jakarta|manila|melbourne|sydney/ism)) {
        console.log("Wow, you're a long way from home!");
      }
      else if ((localStorage.hometown).match(/atlantis/ism)) {
        console.log("Hi, Aquaman!");
      }
      else if ((localStorage.hometown).match(/star(ling)? city/ism)) {
        console.log("Let me guess, I've failed " + localStorage.hometown + "?");
      }
    }
    else if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "instrument") {
      if ((localStorage.instrument).match(/bell/ism)) {
        console.log("I've got a fever, and the only prescription is more " + (localStorage.instrument).toLowerCase() + "!");
      }
      else if ((localStorage.instrument).match(/kazoo/ism)) {
        console.log("You're evil, I love it!");
      }
      else if ((localStorage.instrument).match(/violin/ism)) {
        console.log("Just like me back in high school");
      }
      else if ((localStorage.instrument).match(/clarinet/ism)) {
        console.log("You should fill out the form to get a new Reid");
      }
      else if ((localStorage.instrument).match(/trombone/ism)) {
        console.log("Is that a tromboner in your pants, or are you just happy to see me?");
      }
      else if ((localStorage.instrument).match(/clap/ism)) {
        console.log("The real hero right here!");
      }
    }
    else if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "socialSecurityNumber") {
      console.log("Be right back, just gonna open a line of credit with the Social Security number " + localStorage.socialSecurityNumber + ", MUAHAHA...");
    }
    if (sessionStorage.field < document.getElementsByClassName("infoInput").length) {
      sessionStorage.field++;
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].focus();
    }
    else if (sessionStorage.field == document.getElementsByClassName("infoInput").length) {
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].blur();
      sessionStorage.field = 1;
    }
    compileSound("sine", ["exponential", 440, 490, .25], ["exponential", .75, 1, .25], .25);
  }
  else {
    if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value == "") {
      if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.contains("invalidInfoInput")) {
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.replace("invalidInfoInput", "validInfoInput");
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.accentColor = "var(--clarksonGreen)";
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.setProperty("border", ".1em solid var(--darkGray)", "important");
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.transition = "all 0s ease 0s";
        document.getElementsByClassName("invalidInfoMessage")[sessionStorage.field - 1].style.display = "none";
      }
    }
    else {
      if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.contains("invalidInfoInput")) {
        document.getElementsByClassName("invalidInfoMessage")[sessionStorage.field - 1].style.animation = "invalidBlink .375s ease 0s 1 forwards";
        setTimeout(() => (
          document.getElementsByClassName("invalidInfoMessage")[sessionStorage.field - 1].style.animation = "none"
        ), 375);
      }
      else {
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.replace("validInfoInput", "invalidInfoInput");
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.accentColor = "var(--errorRed)";
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.setProperty("border", ".2em solid var(--errorRed)", "important");
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].style.transition = "all 0s ease 0s";
        document.getElementsByClassName("invalidInfoMessage")[sessionStorage.field - 1].style.display = "block";
      }
    }
    compileSound("sawtooth", ["exponential", 440, 390, .25], ["none", 1, null, 0], .25);
  }
}

function accountRemove(field, event) {
  sessionStorage.field = field;
  if (event.type == "click") {
    event.preventDefault();
  }
  if (sessionStorage.field == 0) {
    for (var i = 0; i < document.getElementsByClassName("infoInput").length; i++) {
      localStorage.removeItem(document.getElementsByClassName("infoInput")[i].name);
      document.getElementsByClassName("infoInput")[i].value = "";
      document.getElementsByClassName("enterInfoButton")[i].value = document.getElementsByClassName("infoInput")[i].value;
      if (document.getElementsByClassName("infoInput")[i].name == "socialSecurityNumber") {
        document.getElementById("socialSecurityNumberInput").placeholder = "No spaces (ex. 123456789)";
      }
      else {
        document.getElementsByClassName("infoInput")[i].placeholder = ((document.getElementsByClassName("infoInput")[i].name).charAt(0)).toUpperCase() + (document.getElementsByClassName("infoInput")[i].name).substring(1) + "...";
      }
    }
    for (var i = 0; i < document.getElementsByClassName("enterInfoButton").length; i++) {
      document.getElementsByClassName("enterInfoButton")[i].style.background = "var(--lightGray)";
      document.getElementsByClassName("enterInfoButton")[i].style.color = "var(--darkGray)";
      document.getElementsByClassName("enterInfoButton")[i].style.transition = "all 0s ease 0s";
      document.getElementsByClassName("enterInfoButton")[i].tabIndex = "-1";
      document.getElementsByClassName("enterInfoButton")[i].disabled = true;
      document.getElementsByClassName("enterInfoButton")[i].blur();
    }
  }
  else if (sessionStorage.field > 0) {
    localStorage.removeItem(document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name);
    document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value = "";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].value = document.getElementsByClassName("infoInput")[sessionStorage.field - 1].value;
    if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "socialSecurityNumber") {
      document.getElementById("socialSecurityNumberInput").placeholder = "No spaces (ex. 123456789)";
    }
    else {
      document.getElementsByClassName("infoInput")[sessionStorage.field - 1].placeholder = ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name).charAt(0)).toUpperCase() + (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name).substring(1) + "...";
    }
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.background = "var(--lightGray)";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.color = "var(--darkGray)";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].style.transition = "all 0s ease 0s";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].tabIndex = "-1";
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].disabled = true;
    document.getElementsByClassName("enterInfoButton")[sessionStorage.field - 1].blur();
  }
  accountUpdate(sessionStorage.field, "remove");
  if ((sessionStorage.field == 0) || (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "name")) {
    console.log("I guess I'll just have to call you [player] now!");
  }
  if (sessionStorage.field == 0) {
    for (var i = 0; i < document.getElementsByClassName("infoInput").length; i++) {
      document.getElementsByClassName("infoInput")[i].blur();
    }
  }
  compileSound("sine", ["exponential", 440, 390, .25], ["none", 1, null, 0], .25);
}

function accountUpdate(field, method) {
  sessionStorage.field = field;
  if (sessionStorage.field == 0) {
    for (var i = 0; i < document.getElementsByClassName("infoInput").length; i++) {
      if (eval("localStorage." + document.getElementsByClassName("infoInput")[i].name) == undefined) {
        if (((document.getElementsByClassName("infoInput")[i].name == "socialSecurityNumber") && ((String(you.socialSecurityNumber)).replace(/\-/gsm, "") > 0)) || ((document.getElementsByClassName("infoInput")[i].name != "socialSecurityNumber") && (eval("you." + document.getElementsByClassName("infoInput")[i].name) != ""))) {
          if (document.getElementsByClassName("infoInput")[i].name == "socialSecurityNumber") {
            you.socialSecurityNumber = 0;
          }
          else {
            eval("you." + document.getElementsByClassName("infoInput")[i].name + " = \"\"");
          }
          document.getElementsByClassName("clearInfoButton")[i + 1].style.display = "none";
          document.getElementsByClassName("clearInfoButton")[i + 1].tabIndex = "-1";
          document.getElementsByClassName("clearInfoButton")[i + 1].blur();
          if (document.getElementsByClassName("infoInput")[i].name == "socialSecurityNumber") {
            document.getElementById("socialSecurityNumberInput").placeholder = "No spaces (ex. 123456789)";
          }
          else {
            document.getElementsByClassName("infoInput")[i].placeholder = ((document.getElementsByClassName("infoInput")[i].name).charAt(0)).toUpperCase() + (document.getElementsByClassName("infoInput")[i].name).substring(1) + "...";
          }
          document.getElementsByClassName("infoInput")[i].classList.replace("definedInfoInput", "undefinedInfoInput");
          document.getElementsByClassName("dataOutput")[i].innerHTML = "";
          document.getElementsByClassName("dataOutput")[i].value = document.getElementsByClassName("dataOutput")[i].innerHTML;
          document.getElementsByClassName("dataRow")[i + 1].style.display = "none";
          if (document.getElementsByClassName("infoInput")[i].name == "name") {
            for (var j = 0; j < document.getElementsByClassName("username").length; j++) {
              if (document.getElementsByClassName("username")[j].classList.contains("usernamePlayer")) {
                if (document.getElementsByClassName("username")[j].classList.contains("usernameLower")) {
                  document.getElementsByClassName("username")[j].innerHTML = "player";
                }
                else if (document.getElementsByClassName("username")[j].classList.contains("usernameUpper")) {
                  document.getElementsByClassName("username")[j].innerHTML = "Player";
                }
              }
              else if (document.getElementsByClassName("username")[j].classList.contains("usernameThisGuy")) {
                if (document.getElementsByClassName("username")[j].classList.contains("usernameLower")) {
                  document.getElementsByClassName("username")[j].innerHTML = "this guy";
                }
                else if (document.getElementsByClassName("username")[j].classList.contains("usernameUpper")) {
                  document.getElementsByClassName("username")[j].innerHTML = "This guy";
                }
              }
            }
          }
          else if (document.getElementsByClassName("infoInput")[i].name == "year") {
            for (var j = 0; j < document.getElementsByClassName("agedLine").length; j++) {
              document.getElementsByClassName("agedLine")[j].style.display = "none";
            }
          }
        }
      }
      else {
        if (eval("you." + document.getElementsByClassName("infoInput")[i].name) != eval("localStorage." + document.getElementsByClassName("infoInput")[i].name)) {
          eval("you." + document.getElementsByClassName("infoInput")[i].name + " = localStorage." + document.getElementsByClassName("infoInput")[i].name);
          document.getElementsByClassName("clearInfoButton")[i + 1].style.display = "inline-block";
          if (document.getElementById("account").style.visibility == "visible") {
            document.getElementsByClassName("clearInfoButton")[i + 1].tabIndex = "0";
          }
          document.getElementsByClassName("infoInput")[i].placeholder = eval("localStorage." + document.getElementsByClassName("infoInput")[i].name);
          document.getElementsByClassName("infoInput")[i].classList.replace("undefinedInfoInput", "definedInfoInput");
          document.getElementsByClassName("dataOutput")[i].innerHTML = eval("localStorage." + document.getElementsByClassName("infoInput")[i].name);
          document.getElementsByClassName("dataOutput")[i].value = document.getElementsByClassName("dataOutput")[i].innerHTML;
          document.getElementsByClassName("dataRow")[i + 1].style.display = "table-row";
          if (document.getElementsByClassName("infoInput")[i].name == "name") {
            for (var j = 0; j < document.getElementsByClassName("username").length; j++) {
              document.getElementsByClassName("username")[j].innerHTML = localStorage.name;
            }
          }
          else if (document.getElementsByClassName("infoInput")[i].name == "year") {
            for (var j = 0; j < document.getElementsByClassName("agedLine").length; j++) {
              if (((localStorage.year).match(/school|(fresh|first.?year)/ism)) || ((localStorage.year).match(/senior|grad|alum/ism))) {
                if ((localStorage.year).match(/school|(fresh|first.?year)/ism)) {
                  if (document.getElementsByClassName("agedLine")[j].classList.contains("youngLine")) {
                    document.getElementsByClassName("agedLine")[j].style.display = "block";
                  }
                  else if (document.getElementsByClassName("agedLine")[j].classList.contains("oldLine")) {
                    document.getElementsByClassName("agedLine")[j].style.display = "none";
                  }
                }
                else if ((localStorage.year).match(/senior|grad|alum/ism)) {
                  if (document.getElementsByClassName("agedLine")[j].classList.contains("youngLine")) {
                    document.getElementsByClassName("agedLine")[j].style.display = "none";
                  }
                  else if (document.getElementsByClassName("agedLine")[j].classList.contains("oldLine")) {
                    document.getElementsByClassName("agedLine")[j].style.display = "block";
                  }
                }
              }
              else {
                document.getElementsByClassName("agedLine")[j].style.display = "none";
              }
            }
          }
        }
      }
    }
    if (document.getElementsByClassName("definedInfoInput").length == 0) {
      document.getElementById("accountSubheading").innerHTML = "Start filling out the fields below to add your personal info to your account";
      document.getElementById("accountInstructions").style.marginBottom = "0";
      document.getElementById("accountInstructions").style.transition = "margin-bottom 0s ease 0s";
      document.getElementById("accountInstruction2").style.display = "none";
      document.getElementById("clearAll").style.display = "none";
      document.getElementById("clearAll").tabIndex = "-1";
      document.getElementById("clearAll").blur();
      document.getElementById("data").style.display = "none";
    }
    else if (document.getElementsByClassName("definedInfoInput").length > 0) {
      document.getElementById("accountSubheading").innerHTML = "Keep filling out these fields to update your account";
      document.getElementById("accountInstructions").style.marginBottom = "1em";
      document.getElementById("accountInstructions").style.transition = "margin-bottom 0s ease 0s";
      document.getElementById("accountInstruction2").style.display = "block";
      document.getElementById("clearAll").style.display = "inline-block";
      document.getElementById("clearAll").tabIndex = "0";
      document.getElementById("data").style.display = "table";
    }
    if (document.getElementsByClassName("definedInfoInput").length < document.getElementsByClassName("infoInput").length) {
      document.getElementById("accountSubheading").style.display = "block";
      document.getElementById("accountInstruction1").style.display = "block";
    }
    else if (document.getElementsByClassName("definedInfoInput").length == document.getElementsByClassName("infoInput").length) {
      document.getElementById("accountSubheading").style.display = "none";
      document.getElementById("accountInstruction1").style.display = "none";
    }
  }
  else if (sessionStorage.field > 0) {
    if (method == "store") {
      if (eval("you." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name) != eval("localStorage." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name)) {
        eval("you." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name + " = localStorage." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name);
        document.getElementsByClassName("clearInfoButton")[sessionStorage.field].style.display = "inline-block";
        if (document.getElementById("account").style.visibility == "visible") {
          document.getElementsByClassName("clearInfoButton")[sessionStorage.field].tabIndex = "0";
        }
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].placeholder = eval("localStorage." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name);
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.replace("undefinedInfoInput", "definedInfoInput");
        document.getElementsByClassName("dataOutput")[sessionStorage.field - 1].innerHTML = eval("localStorage." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name);
        document.getElementsByClassName("dataOutput")[sessionStorage.field - 1].value = document.getElementsByClassName("dataOutput")[sessionStorage.field - 1].innerHTML;
        document.getElementsByClassName("dataRow")[sessionStorage.field].style.display = "table-row";
        if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "name") {
          for (var i = 0; i < document.getElementsByClassName("username").length; i++) {
            document.getElementsByClassName("username")[i].innerHTML = localStorage.name;
          }
        }
        else if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "year") {
          for (var i = 0; i < document.getElementsByClassName("agedLine").length; i++) {
            if (((localStorage.year).match(/school|(fresh|first.?year)/ism)) || ((localStorage.year).match(/senior|grad|alum/ism))) {
              if ((localStorage.year).match(/school|(fresh|first.?year)/ism)) {
                if (document.getElementsByClassName("agedLine")[i].classList.contains("youngLine")) {
                  document.getElementsByClassName("agedLine")[i].style.display = "block";
                }
                else if (document.getElementsByClassName("agedLine")[i].classList.contains("oldLine")) {
                  document.getElementsByClassName("agedLine")[i].style.display = "none";
                }
              }
              else if ((localStorage.year).match(/senior|grad|alum/ism)) {
                if (document.getElementsByClassName("agedLine")[i].classList.contains("youngLine")) {
                  document.getElementsByClassName("agedLine")[i].style.display = "none";
                }
                else if (document.getElementsByClassName("agedLine")[i].classList.contains("oldLine")) {
                  document.getElementsByClassName("agedLine")[i].style.display = "block";
                }
              }
            }
            else {
              document.getElementsByClassName("agedLine")[i].style.display = "none";
            }
          }
        }
        if (document.getElementsByClassName("definedInfoInput").length > 0) {
          document.getElementById("accountSubheading").innerHTML = "Keep filling out these fields to update your account";
          document.getElementById("accountInstructions").style.marginBottom = "1em";
          document.getElementById("accountInstructions").style.transition = "margin-bottom 0s ease 0s";
          document.getElementById("accountInstruction2").style.display = "block";
          document.getElementById("clearAll").style.display = "inline-block";
          document.getElementById("clearAll").tabIndex = "0";
          document.getElementById("data").style.display = "table";
        }
        if (document.getElementsByClassName("definedInfoInput").length == document.getElementsByClassName("infoInput").length) {
          document.getElementById("accountSubheading").style.display = "none";
          document.getElementById("accountInstruction1").style.display = "none";
        }
      }
    }
    else if (method == "remove") {
      if (((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "socialSecurityNumber") && ((String(you.socialSecurityNumber)).replace(/\-/gsm, "") > 0)) || ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name != "socialSecurityNumber") && (eval("you." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name) != ""))) {
        if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "socialSecurityNumber") {
          you.socialSecurityNumber = 0;
        }
        else {
          eval("you." + document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name + " = \"\"");
        }
        document.getElementsByClassName("clearInfoButton")[sessionStorage.field].style.display = "none";
        document.getElementsByClassName("clearInfoButton")[sessionStorage.field].tabIndex = "-1";
        document.getElementsByClassName("clearInfoButton")[sessionStorage.field].blur();
        if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "socialSecurityNumber") {
          document.getElementById("socialSecurityNumberInput").placeholder = "No spaces (ex. 123456789)";
        }
        else {
          document.getElementsByClassName("infoInput")[sessionStorage.field - 1].placeholder = ((document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name).charAt(0)).toUpperCase() + (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name).substring(1) + "...";
        }
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].classList.replace("definedInfoInput", "undefinedInfoInput");
        document.getElementsByClassName("dataOutput")[sessionStorage.field - 1].innerHTML = "";
        document.getElementsByClassName("dataOutput")[sessionStorage.field - 1].value = document.getElementsByClassName("dataOutput")[sessionStorage.field - 1].innerHTML;
        document.getElementsByClassName("dataRow")[sessionStorage.field].style.display = "none";
        if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "name") {
          for (var i = 0; i < document.getElementsByClassName("username").length; i++) {
            if (document.getElementsByClassName("username")[i].classList.contains("usernamePlayer")) {
              if (document.getElementsByClassName("username")[i].classList.contains("usernameLower")) {
                document.getElementsByClassName("username")[i].innerHTML = "player";
              }
              else if (document.getElementsByClassName("username")[i].classList.contains("usernameUpper")) {
                document.getElementsByClassName("username")[i].innerHTML = "Player";
              }
            }
            else if (document.getElementsByClassName("username")[i].classList.contains("usernameThisGuy")) {
              if (document.getElementsByClassName("username")[i].classList.contains("usernameLower")) {
                document.getElementsByClassName("username")[i].innerHTML = "this guy";
              }
              else if (document.getElementsByClassName("username")[i].classList.contains("usernameUpper")) {
                document.getElementsByClassName("username")[i].innerHTML = "This guy";
              }
            }
          }
        }
        else if (document.getElementsByClassName("infoInput")[sessionStorage.field - 1].name == "year") {
          for (var i = 0; i < document.getElementsByClassName("agedLine").length; i++) {
            document.getElementsByClassName("agedLine")[i].style.display = "none";
          }
        }
        if (document.getElementsByClassName("definedInfoInput").length == 0) {
          document.getElementById("accountSubheading").innerHTML = "Start filling out the fields below to add your personal info to your account";
          document.getElementById("accountInstructions").style.marginBottom = "0";
          document.getElementById("accountInstructions").style.transition = "margin-bottom 0s ease 0s";
          document.getElementById("accountInstruction2").style.display = "none";
          document.getElementById("clearAll").style.display = "none";
          document.getElementById("clearAll").tabIndex = "-1";
          document.getElementById("clearAll").blur();
          document.getElementById("data").style.display = "none";
        }
        if (document.getElementsByClassName("definedInfoInput").length < document.getElementsByClassName("infoInput").length) {
          document.getElementById("accountSubheading").style.display = "block";
          document.getElementById("accountInstruction1").style.display = "block";
        }
      }
    }
  }
}

function remember(event) {
  if ((localStorage.firstGame == String(true)) && (event.type == "load")) {
    for (var i = 0; i < document.getElementsByClassName("memoryOutput").length; i++) {
      eval("localStorage." + document.getElementsByClassName("memoryOutput")[i].name + " = here." + document.getElementsByClassName("memoryOutput")[i].name);
    }
  }
  else {
    for (var i = 0; i < document.getElementsByClassName("memoryOutput").length; i++) {
      if ((document.getElementsByClassName("memoryOutput")[i].name == "gameTime") || (document.getElementsByClassName("memoryOutput")[i].name == "totalGameTime")) {
        if (event.type == "load") {
          if (document.getElementsByClassName("memoryOutput")[i].name == "gameTime") {
            localStorage.gameTime = here.gameTime;
          }
          else if (document.getElementsByClassName("memoryOutput")[i].name == "totalGameTime") {
            here.totalGameTime = localStorage.totalGameTime;
            document.getElementById("memoryTotalGameTimeData").innerHTML = localStorage.totalGameTime;
          }
        }
      }
      else {
        if (eval("here." + document.getElementsByClassName("memoryOutput")[i].name) != eval("localStorage." + document.getElementsByClassName("memoryOutput")[i].name)) {
          eval("here." + document.getElementsByClassName("memoryOutput")[i].name + " = localStorage." + document.getElementsByClassName("memoryOutput")[i].name);
          document.getElementsByClassName("memoryOutput")[i].innerHTML = eval("localStorage." + document.getElementsByClassName("memoryOutput")[i].name);
          document.getElementsByClassName("memoryOutput")[i].value = document.getElementsByClassName("memoryOutput")[i].innerHTML;
        }
      }
    }
  }
}

function rememberGameTime() {
  localStorage.gameTime = Math.floor(performance.now() / 1000);
  here.gameTime = localStorage.gameTime;
  document.getElementById("memoryGameTimeData").innerHTML = ((localStorage.gameTime < 3600) ? ("") : (Math.floor(localStorage.gameTime / 3600) + ":" + (((localStorage.gameTime % 3600) < 600) ? ("0") : ("")))) + ((localStorage.gameTime < 60) ? ("") : (Math.floor((localStorage.gameTime % 3600) / 60) + ":" + ((((localStorage.gameTime % 3600) % 60) < 10) ? ("0") : ("")))) + ((localStorage.gameTime % 3600) % 60);
  if (localStorage.firstGame == String(true)) {
    localStorage.totalGameTime = localStorage.gameTime;
  }
  else if (localStorage.firstGame == String(false)) {
    localStorage.totalGameTime++;
  }
  here.totalGameTime = localStorage.totalGameTime;
  document.getElementById("memoryTotalGameTimeData").innerHTML = ((localStorage.totalGameTime < 3600) ? ("") : (Math.floor(localStorage.totalGameTime / 3600) + ":" + (((localStorage.totalGameTime % 3600) < 600) ? ("0") : ("")))) + ((localStorage.totalGameTime < 60) ? ("") : (Math.floor((localStorage.totalGameTime % 3600) / 60) + ":" + ((((localStorage.totalGameTime % 3600) % 60) < 10) ? ("0") : ("")))) + ((localStorage.totalGameTime % 3600) % 60);
}

function showMemory() {
  document.getElementById("memoryToggle").innerHTML = "Hide Stats"
  document.getElementById("memoryToggle").ariaLabel = "Hide the stats";
  document.getElementById("memoryToggle").onclick = hideMemory;
}

function hideMemory() {
  document.getElementById("memoryToggle").innerHTML = "Show Hidden Stats";
  document.getElementById("memoryToggle").ariaLabel = "Show the hidden stats";
  document.getElementById("memoryToggle").onclick = showMemory;
}

function closeAccount() {
  sessionStorage.removeItem("scope");
  document.getElementById("cover").style.zIndex = "92";
  document.getElementById("cover").style.visibility = "hidden";
  document.getElementById("cover").style.background = "rgba(153, 153, 153, 75%)";
  document.getElementById("cover").style.opacity = "0%";
  document.getElementById("cover").style.transition = "visibility .25s ease 0s, background 0s ease .25s, opacity .25s ease 0s";
  document.getElementById("cover").tabIndex = "-1";
  document.getElementById("cover").blur();
  document.getElementById("account").style.visibility = "hidden";
  document.getElementById("account").style.opacity = "0%";
  document.getElementById("account").style.transition = "all 0s ease .25s";
  document.getElementById("account").tabIndex = "-1";
  document.getElementById("account").blur();
  if (document.getElementById("infoDataMemoryCont").scrollHeight > document.getElementById("infoDataMemoryCont").offsetHeight) {
    document.getElementById("infoDataMemoryCont").tabIndex = "-1";
    document.getElementById("infoDataMemoryCont").blur();
  }
  for (var i = 0; i < document.getElementsByClassName("infoButton").length; i++) {
    if (document.getElementsByClassName("infoButton")[i].classList.contains("enterInfoButton")) {
      document.getElementsByClassName("infoButton")[i].style.background = "var(--lightGray)";
      document.getElementsByClassName("infoButton")[i].style.color = "var(--darkGray)";
      document.getElementsByClassName("infoButton")[i].style.transition = "all 0s ease 0s";
      document.getElementsByClassName("infoButton")[i].disabled = true;
    }
    document.getElementsByClassName("infoButton")[i].tabIndex = "-1";
    document.getElementsByClassName("infoButton")[i].blur();
  }
  for (var i = 0; i < document.getElementsByClassName("infoInput").length; i++) {
    document.getElementsByClassName("infoInput")[i].value = "";
    document.getElementsByClassName("enterInfoButton")[i].value = document.getElementsByClassName("infoInput")[i].value;
    document.getElementsByClassName("infoInput")[i].tabIndex = "-1";
    document.getElementsByClassName("infoInput")[i].blur();
  }
  if (document.getElementById("memoryCont").open == true) {
    setTimeout(() => (
      document.getElementById("memoryCont").open = false
    ), 250);
  }
  document.getElementById("accountExit").tabIndex = "-1";
  document.getElementById("accountExit").blur();
  if (sessionStorage.drinks != undefined) {
    document.getElementById("triangleFaceCont").style.zIndex = "93";
  }
  document.onclick = collapse;
  document.ondblclick = showPassword;
  if ((document.getElementById("knightmobile").style.left == "13%") || (document.getElementById("knightmobile").style.bottom == "35%")) {
    document.onkeydown = startDrive;
  }
  else {
    document.onkeydown = collapse;
  }
  document.onkeyup = null;
  sessionStorage.removeItem("shortcut");
  Object.keys(keyboard).forEach((key) => {
    if (keyboard[key] == true) {
      keyboard[key] = false;
    }
  });
  setTimeout(() => (
    document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
  ), 250);
  setTimeout(() => (
    document.getElementById("viewAccountToggle").tabIndex = "0"
  ), 250);
  setTimeout(viewAccountToggleClose, 250);
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    setTimeout(() => (
      document.getElementById("conductorTalkCont").tabIndex = "0"
    ), 500);
  }
  setTimeout(() => (
    document.getElementById("conductorCont").tabIndex = "0"
  ), 250);
  if (sessionStorage.button == "enabled") {
    setTimeout(enableButton, 250);
  }
}

function gameOver(event) {
  disableButton();
  document.getElementById("conductorCont").tabIndex = "-1";
  document.getElementById("conductorCont").blur();
  if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
    document.getElementById("conductorTalkCont").tabIndex = "-1";
    document.getElementById("conductorTalkCont").blur();
  }
  document.getElementById("viewAccountToggle").style.pointerEvents = "none";
  document.getElementById("viewAccountToggle").tabIndex = "-1";
  document.getElementById("viewAccountToggle").blur();
  for (var i = 0; i < document.getElementsByClassName("audio").length; i++) {
    document.getElementsByClassName("audio")[i].onended = null;
  }
  if (sessionStorage.points == 36) {
    document.getElementById("gameOverYourScoreNum").innerHTML = "dIrTy SeX?!?!";
  }
  else {
    document.getElementById("gameOverYourScoreNum").innerHTML = sessionStorage.points;
  }
  if (localStorage.totalPoints > 0) {
    if ((sessionStorage.oldHighScore == "N/A") || ((((localStorage.highScore).length == (sessionStorage.oldHighScore).length) && (localStorage.highScore > sessionStorage.oldHighScore)) || ((localStorage.highScore).length > (sessionStorage.oldHighScore).length))) {
      document.getElementById("gameOverNewHighScore").style.display = "block";
    }
    else {
      document.getElementById("gameOverHighScoreNum").innerHTML = localStorage.highScore;
      document.getElementById("gameOverHighScore").style.display = "block";
    }
    document.getElementById("gameOverHighScores").style.display = "block";
  }
  sessionStorage.quote = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteLine").innerHTML = quotes[sessionStorage.quote].line;
  document.getElementById("quoteLine").cite = (quotes[sessionStorage.quote].author).replace(/\<\/*(b|strong|i|em|u|s|br)\>/gism, "");
  document.getElementById("quoteAuthor").innerHTML = quotes[sessionStorage.quote].author;
  if (quotes[sessionStorage.quote].line == "<q id=\"quoteLineLine\"><span lang=\"ru-ru\" translate=\"no\" dir=\"ltr\" class=\"russian\">Prochnost</span>!</q><br><cite id=\"quoteLineAuthor\"><b>Oliver Queen</b>.</cite>") {
    document.getElementById("quoteAuthor").style.marginLeft = "48px";
  }
  else {
    document.getElementById("quoteAuthor").style.marginLeft = "24px";
  }
  document.getElementById("quoteAuthor").style.transition = "margin-left 0s ease 0s";
  document.getElementById("playAgain").tabIndex = "0";
  document.getElementById("gameOver").style.visibility = "visible";
  document.getElementById("gameOver").style.opacity = "100%";
  document.getElementById("gameOver").style.transition = "all 0s ease 0s";
  document.getElementById("gameOver").tabIndex = "0";
  document.getElementById("cover").style.visibility = "visible";
  document.getElementById("cover").style.opacity = "100%";
  document.getElementById("cover").style.transition = "all .25s ease 0s";
  document.getElementById("cover").tabIndex = "0";
  document.getElementById("screensavers").style.visibility = "visible";
  document.getElementById("screensavers").style.opacity = "100%";
  document.getElementById("screensavers").style.transition = "all .25s ease 0s";
  audioNewSong();
  if ((sessionStorage.lives == 0) && (sessionStorage.drinks == undefined)) {
    if (localStorage.gamesWon == "N/A") {
      localStorage.gamesWon = 0;
    }
    console.error("Hey, " + ((localStorage.name == undefined) ? ("") : (localStorage.name + ", ")) + "you suck! :(");
  }
  else {
    if (localStorage.gamesWon == "N/A") {
      localStorage.gamesWon = 1;
    }
    else {
      localStorage.gamesWon++;
    }
    console.log("Great job" + ((localStorage.name == undefined) ? ("") : (", " + localStorage.name)) + "!");
  }
  const round = new function() {
    this.setValue = function(x) {
      this.value = x;
    }
    this.getValue = function() {
      if (String(Math.floor(this.value)).match(/10|20|25|30|40|50|60|70|75|80|90/sm)) {
        var benchmark = Math.floor(this.value);
      }
      else if (String(Math.ceil(this.value)).match(/10|20|25|30|40|50|60|70|75|80|90/sm)) {
        var benchmark = Math.ceil(this.value);
      }
      else {
        var benchmark = this.value;
      }
      var decimals = (Math.round(benchmark * 100) / 100);
      return decimals;
    }
  }
  localStorage.gamesFinished = (+(localStorage.gamesFinished).substring(0, (localStorage.gamesFinished).search(/\s/sm)) + 1);
  if (localStorage.gamesFinished == 1) {
    console.log("Congrats on finishing your first game!");
  }
  localStorage.gameWinRate = ((localStorage.gamesWon / localStorage.gamesFinished) * 100);
  round.setValue(localStorage.gameWinRate);
  localStorage.gameWinRate = round.getValue() + "%";
  remember(event);
  console.table(here);
}

function audioNewSong() {
  if ((sessionStorage.oldAudio != undefined) && (sessionStorage.oldAudio < document.getElementsByClassName("audio").length)) {
    document.getElementsByClassName("audio")[sessionStorage.oldAudio].onended = null;
  }
  sessionStorage.newAudio = Math.floor(Math.random() * (document.getElementsByClassName("audio").length + 1));
  if (sessionStorage.oldAudio != undefined) {
    while (sessionStorage.newAudio == sessionStorage.oldAudio) {
      sessionStorage.newAudio++;
      if (sessionStorage.newAudio > document.getElementsByClassName("audio").length) {
        sessionStorage.newAudio = 0;
      }
    }
  }
  if (sessionStorage.newAudio < document.getElementsByClassName("audio").length) {
    if ((sessionStorage.oldAudio != undefined) && (sessionStorage.oldAudio == document.getElementsByClassName("audio").length)) {
      document.body.style.background = "fixed url(\"img/pepBand.png\") center / cover";
      document.getElementById("rap").style.display = "none";
    }
    document.getElementById("dancing").style.display = "inline-block";
    if (document.getElementById("dancing").currentTime > 0) {
      document.getElementById("dancing").currentTime = 0;
    }
    document.getElementById("dancing").play();
    if (document.getElementsByClassName("audio")[sessionStorage.newAudio].currentTime > 0) {
      document.getElementsByClassName("audio")[sessionStorage.newAudio].currentTime = 0;
    }
    document.getElementsByClassName("audio")[sessionStorage.newAudio].play();
    document.getElementsByClassName("audio")[sessionStorage.newAudio].onended = audioNewSong;
  }
  else if (sessionStorage.newAudio == document.getElementsByClassName("audio").length) {
    document.body.style.background = "fixed url(\"img/rap.png\") center / cover";
    document.getElementById("dancing").style.display = "none";
    document.getElementById("dancing").pause();
    document.getElementById("rap").style.display = "inline-block";
    if (document.getElementById("rap").currentTime > 0) {
      document.getElementById("rap").currentTime = 0;
    }
    document.getElementById("rap").play();
  }
  sessionStorage.oldAudio = sessionStorage.newAudio;
}

function warning(element) {
  if ((element == "") || ((element != "") && ((document.getElementById(element).tagName != "a") && (element != "playAgain")))) {
    return "Woah there, are you sure you want to do that? If you leave this page now, all your progress in this game will be lost!";
  }
}

function playAgain(event) {
  event.preventDefault();
  compileSound("sawtooth", ["exponential", 240, 540, .5], ["exponential", .5, 1, .5], .5);
  console.log("Yay! See you as soon as this page refreshes!");
  location.reload();
}

function forceQuit() {
  localStorage.clear();
  document.body.onbeforeunload = null;
  window.close();
}

function gameComplete() {
  if (localStorage.firstGame == String(true)) {
    localStorage.firstGame = false;
  }
}

function showPassword(event) {
  if (document.elementsFromPoint(event.clientX, event.clientY).length == 3) {
    disableButton();
    document.getElementById("conductorCont").tabIndex = "-1";
    document.getElementById("conductorCont").blur();
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      document.getElementById("conductorTalkCont").tabIndex = "-1";
      document.getElementById("conductorTalkCont").blur();
    }
    document.getElementById("viewAccountToggle").style.pointerEvents = "none";
    document.getElementById("viewAccountToggle").tabIndex = "-1";
    document.getElementById("viewAccountToggle").blur();
    if (document.getElementById("viewAccountToggle").onclick == viewAccountToggleClose) {
      viewAccountToggleClose();
    }
    if (sessionStorage.passwordTimerInterval == undefined) {
      document.getElementById("passwordInput").tabIndex = "0";
      if (document.getElementById("passwordInput").disabled == true) {
        document.getElementById("passwordInput").placeholder = "Password...";
        document.getElementById("passwordInput").disabled = false;
      }
      setTimeout(() => (
        document.getElementById("passwordInput").focus()
      ), 100);
    }
    document.getElementById("password").tabIndex = "0";
    document.getElementById("password").open = true;
    document.ondblclick = null;
    if (document.onkeydown == startDrive) {
      document.onkeydown = collapse;
    }
  }
}

function passwordTyping() {
  document.getElementById("enterPassword").value = document.getElementById("passwordInput").value;
  if (document.getElementById("passwordInput").value == "") {
    document.getElementById("enterPassword").tabIndex = "-1";
    document.getElementById("enterPassword").disabled = true;
    document.getElementById("enterPassword").blur();
  }
  else {
    document.getElementById("enterPassword").tabIndex = "0";
    document.getElementById("enterPassword").disabled = false;
  }
}

function passwordProcess(event) {
  if ((event.type == "keydown") && (event.key == " ")) {
    event.preventDefault();
  }
  if ((event.type == "click") || ((event.type == "keydown") && (event.key == "Enter"))) {
    if (event.type == "click") {
      event.preventDefault();
    }
    passwordStore();
  }
  else if ((event.type == "keydown") && (event.key == "Escape")) {
    document.getElementById("passwordInput").blur();
  }
}

function passwordStore() {
  const encryption = Function(document.getElementById("secretTemplate").content.getElementById("inlineScript").textContent);
  if ((document.getElementById("passwordInput").value).match(/(?<=^)\s+|\s+(?=$)/gsm)) {
    document.getElementById("passwordInput").value = (document.getElementById("passwordInput").value).trim();
    document.getElementById("enterPassword").value = document.getElementById("passwordInput").value;
  }
  if (document.getElementById("passwordInput").value == encryption()) {
    if ((logins.total).length > 0) {
      logins.total = [];
    }
    document.onclick = null;
    document.onkeydown = null;
    document.getElementById("passwordInput").placeholder = "";
    document.getElementById("passwordInput").tabIndex = "-1";
    document.getElementById("passwordInput").disabled = true;
    document.getElementById("passwordInput").blur();
    document.getElementById("passwordMessage").innerHTML = "Correct!";
    document.getElementById("passwordMessage").style.color = "var(--buttonGreen)";
    document.getElementById("passwordMessage").style.fontSize = "2em";
    if (document.getElementById("passwordMessage").style.visibility == "visible") {
      setTimeout(createSecret, 500);
    }
    else {
      setTimeout(createSecret, 750);
    }
  }
  else {
    (logins.consecutive).push(document.getElementById("passwordInput").value);
    (logins.total).push(document.getElementById("passwordInput").value);
    if (((logins.consecutive).indexOf(document.getElementById("passwordInput").value, ((logins.consecutive).indexOf(document.getElementById("passwordInput").value) + 1)) > -1) || (((logins.consecutive).length == 3) || ((logins.total).length == 5))) {
      document.onclick = null;
      document.onkeydown = null;
      document.getElementById("passwordInput").tabIndex = "-1";
      document.getElementById("passwordInput").disabled = true;
      document.getElementById("passwordInput").blur();
      if ((logins.consecutive).indexOf(document.getElementById("passwordInput").value, ((logins.consecutive).indexOf(document.getElementById("passwordInput").value) + 1)) > -1) {
        document.getElementById("passwordMessage").innerHTML = "Repeated entry";
      }
      else if (((logins.consecutive).length == 3) || ((logins.total).length == 5)) {
        document.getElementById("passwordMessage").innerHTML = "Max attempts reached";
      }
      document.getElementById("passwordMessage").style.fontSize = "1.5em";
      if (document.getElementById("passwordMessage").style.visibility == "visible") {
        setTimeout(passwordLock, 500);
      }
      else {
        setTimeout(passwordLock, 750);
      }
    }
    else {
      document.getElementById("passwordMessage").innerHTML = "Incorrect!";
      document.getElementById("passwordMessage").style.fontSize = "2em";
    }
    document.getElementById("passwordMessage").style.color = "var(--errorRed)";
  }
  if (document.getElementById("passwordMessage").style.visibility == "visible") {
    document.getElementById("passwordMessage").style.animation = "emphasizeMessage .5s ease 0s 1 forwards";
    setTimeout(() => (
      document.getElementById("passwordMessage").style.animation = "none"
    ), 500);
  }
  else {
    document.getElementById("passwordInputCont").style.marginBottom = "1em";
    document.getElementById("passwordInputCont").style.transition = "margin-bottom 0s ease 0s";
    document.getElementById("passwordMessage").style.visibility = "visible";
    document.getElementById("passwordMessage").style.opacity = "100%";
    document.getElementById("passwordMessage").style.height = "auto";
    document.getElementById("passwordMessage").style.transition = "visibility .25s ease 0s, opacity .25s ease 0s, height 0s ease 0s";
    document.getElementById("passwordMessage").style.animation = "emphasizeMessage .5s ease .25s 1 forwards";
    setTimeout(() => (
      document.getElementById("passwordMessage").style.animation = "none"
    ), 750);
  }
  document.getElementById("passwordInput").value = "";
  document.getElementById("enterPassword").value = document.getElementById("passwordInput").value;
  document.getElementById("enterPassword").tabIndex = "-1";
  document.getElementById("enterPassword").disabled = true;
  document.getElementById("enterPassword").blur();
}

function passwordLock() {
  document.getElementById("passwordMessage").innerHTML = "Try again in:<br><time id=\"passwordMessageTimer\"></time>";
  document.getElementById("passwordMessage").style.fontSize = "1.1em";
  globalThis.unlockStart = Date.now();
  sessionStorage.unlock = "10:00";
  document.getElementById("passwordMessageTimer").innerHTML = sessionStorage.unlock;
  document.getElementById("passwordMessageTimer").datetime = "PT10M0S";
  sessionStorage.passwordTimerInterval = setInterval(passwordTimer, 1000);
  setTimeout(passwordUnlock, 601000);
  document.onclick = collapse;
  document.onkeydown = collapse;
  sessionStorage.hidePasswordTimeout = setTimeout(hidePassword, 6000);
}

function passwordTimer() {
  globalThis.unlockCurrent = Date.now();
  sessionStorage.unlock = String(Math.floor(((601000 - (globalThis.unlockCurrent - globalThis.unlockStart)) / 1000) / 60)).padStart(2, "0") + ":" + String(Math.floor(((601000 - (globalThis.unlockCurrent - globalThis.unlockStart)) / 1000)) % 60).padStart(2, "0");
  document.getElementById("passwordMessageTimer").innerHTML = sessionStorage.unlock;
  document.getElementById("passwordMessageTimer").datetime = "PT" + ((sessionStorage.unlock).substring(0, 2)).replace(/(?<=^)0/sm, "") + "M" + ((sessionStorage.unlock).substring(3)).replace(/(?<=^)0/sm, "") + "S";
}

function passwordUnlock() {
  clearInterval(sessionStorage.passwordTimerInterval);
  sessionStorage.removeItem("passwordTimerInterval");
  logins.total = [];
  document.getElementById("passwordInputCont").style.marginBottom = "0";
  document.getElementById("passwordInputCont").style.transition = "margin-bottom 0s ease 0s";
  if (document.getElementById("password").open == true) {
    document.getElementById("passwordInput").tabIndex = "0";
    if (document.getElementById("passwordInput").disabled == true) {
      document.getElementById("passwordInput").placeholder = "Password...";
      document.getElementById("passwordInput").disabled = false;
    }
    setTimeout(() => (
      document.getElementById("passwordInput").focus()
    ), 100);
  }
  document.getElementById("passwordMessage").style.visibility = "hidden";
  document.getElementById("passwordMessage").style.opacity = "0%";
  document.getElementById("passwordMessage").style.height = "0";
  document.getElementById("passwordMessage").style.transition = "all 0s ease 0s";
}

function hidePassword() {
  if (sessionStorage.hidePasswordTimeout != undefined) {
    clearTimeout(sessionStorage.hidePasswordTimeout);
    sessionStorage.removeItem("hidePasswordTimeout");
  }
  document.getElementById("password").open = false;
  document.getElementById("password").tabIndex = "-1";
  document.getElementById("password").blur();
  if (document.getElementById("passwordInput").value != "") {
    document.getElementById("passwordInput").value = "";
    document.getElementById("enterPassword").value = document.getElementById("passwordInput").value;
    document.getElementById("enterPassword").tabIndex = "-1";
    document.getElementById("enterPassword").disabled = true;
    document.getElementById("enterPassword").blur();
  }
  if (sessionStorage.passwordTimerInterval == undefined) {
    document.getElementById("passwordInput").tabIndex = "-1";
    document.getElementById("passwordInput").blur();
  }
  if (sessionStorage.passwordTimerInterval == undefined) {
    if (document.getElementById("passwordMessage").style.visibility == "visible") {
      document.getElementById("passwordInputCont").style.marginBottom = "0";
      document.getElementById("passwordInputCont").style.transition = "margin-bottom 0s ease 0s";
      document.getElementById("passwordMessage").style.visibility = "hidden";
      document.getElementById("passwordMessage").style.opacity = "0%";
      document.getElementById("passwordMessage").style.height = "0";
      document.getElementById("passwordMessage").style.transition = "all 0s ease 0s";
    }
  }
  if ((logins.consecutive).length > 0) {
    logins.consecutive = [];
  }
  if (document.onkeydown == collapse) {
    setTimeout(() => (
      document.ondblclick = showPassword
    ), 250);
    if ((document.getElementById("knightmobile").style.left == "13%") || (document.getElementById("knightmobile").style.bottom == "35%")) {
      document.onkeydown = startDrive;
    }
  }
  if (document.getElementById("secret") == undefined) {
    document.getElementById("viewAccountToggle").style.pointerEvents = "auto";
    document.getElementById("viewAccountToggle").tabIndex = "0";
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      document.getElementById("conductorTalkCont").tabIndex = "0";
    }
    document.getElementById("conductorCont").tabIndex = "0";
    enableButton();
  }
}

function createSecret() {
  document.getElementById("secretTemplate").after(document.getElementById("secretTemplate").content.getElementById("secret").cloneNode(true));
  showSecret();
}

function showSecret() {
  hidePassword();
  for (var i = 0; i < document.getElementsByClassName("secretAuthorHeart").length; i++) {
    var animationDelay = ((Math.round((i * (1 / 3)) * 100) / 100) + .25);
    document.getElementsByClassName("secretAuthorHeart")[i].style.animation = "pulse 1s ease " + animationDelay + "s infinite forwards";
  }
  if (document.getElementById("secretMessageContContCont").scrollHeight > document.getElementById("secretMessageContContCont").offsetHeight) {
    document.getElementById("secretMessageContContCont").tabIndex = "0";
    if (document.getElementById("secretMessageContContCont").scrollTop > 0) {
      document.getElementById("secretMessageContContCont").scrollTop = 0;
    }
  }
  document.getElementById("secretExit").tabIndex = "0";
  document.getElementById("secretModal").style.visibility = "visible";
  document.getElementById("secretModal").style.opacity = "100%";
  document.getElementById("secretModal").style.transition = "all 0s ease .25s";
  document.getElementById("secretModal").tabIndex = "0";
  document.getElementById("secret").style.visibility = "visible";
  document.getElementById("secret").style.opacity = "100%";
  document.getElementById("secret").style.transition = "all .25s ease .25s";
  document.getElementById("secret").tabIndex = "0";
  if (document.getElementById("theOneThatGotAway").currentTime > 0) {
    document.getElementById("theOneThatGotAway").currentTime = 0;
  }
  document.getElementById("theOneThatGotAway").play();
  document.onkeydown = shortcut;
  document.onkeyup = shortcutUndo;
  sessionStorage.shortcut = "hideSecret";
  console.group("Alison Isko, you're freaking gorgeous! You're the prettiest girl from Bard College");
  console.log("Thanks, I try");
  console.log("God, we get it! You're smart, and fun, and hella pretty. C'mon, what about you isn't perfect?");
  console.log("You never know, I might be perfect. Also thanks! That's very nice of you");
  console.log("Listen, can I be honest for a sec? I just want to say that I really enjoy talking to you, and I wish we got to spend more time together at Bard College. I guess what I'm saying is I really like you. I don't mean to make you uncomfortable, I just wanted to let you know so I wouldn't have any regrets later");
  console.log("No, it's fine! I don't feel uncomfortable at all. You're such a nice person and I really enjoy talking to you as well! I'm glad you said that because I actually really like you too");
  console.log("You're the best, you know that, right? You're the most special girl in the world to me");
  console.groupEnd();
}

function hideSecret(event) {
  if ((event.type == "click") || ((event.type == "keydown") && (event.key == "Escape"))) {
    document.getElementById("theOneThatGotAway").pause();
    document.getElementById("secret").style.visibility = "hidden";
    document.getElementById("secret").style.opacity = "0%";
    document.getElementById("secret").style.transition = "all .25s ease 0s";
    document.getElementById("secret").tabIndex = "-1";
    document.getElementById("secret").blur();
    document.getElementById("secretModal").style.visibility = "hidden";
    document.getElementById("secretModal").style.opacity = "0%";
    document.getElementById("secretModal").style.transition = "all 0s ease .25s";
    document.getElementById("secretModal").tabIndex = "-1";
    document.getElementById("secretModal").blur();
    if (document.getElementById("secretMessageContContCont").scrollHeight > document.getElementById("secretMessageContContCont").offsetHeight) {
      document.getElementById("secretMessageContContCont").tabIndex = "-1";
      document.getElementById("secretMessageContContCont").blur();
    }
    for (var i = 0; i < document.getElementsByClassName("secretAuthorHeart").length; i++) {
      document.getElementsByClassName("secretAuthorHeart")[i].style.animation = "none";
    }
    if (event.type == "keydown") {
      document.getElementById("secretExit").style.animation = "secretExit .25s ease 0s 1 forwards";
      setTimeout(() => (
        document.getElementById("secretExit").style.animation = "none"
      ), 250);
    }
    document.getElementById("secretExit").tabIndex = "-1";
    document.getElementById("secretExit").blur();
    setTimeout(destroySecret, 250);
    document.onclick = collapse;
    document.ondblclick = showPassword;
    if ((document.getElementById("knightmobile").style.left == "13%") || (document.getElementById("knightmobile").style.bottom == "35%")) {
      document.onkeydown = startDrive;
    }
    else {
      document.onkeydown = collapse;
    }
    document.onkeyup = null;
    sessionStorage.removeItem("shortcut");
    setTimeout(() => (
      document.getElementById("viewAccountToggle").style.pointerEvents = "auto"
    ), 250);
    setTimeout(() => (
      document.getElementById("viewAccountToggle").tabIndex = "0"
    ), 250);
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      setTimeout(() => (
        document.getElementById("conductorTalkCont").tabIndex = "0"
      ), 500);
    }
    setTimeout(() => (
      document.getElementById("conductorCont").tabIndex = "0"
    ), 250);
    setTimeout(enableButton, 250);
    console.clear();
  }
}

function destroySecret() {
  document.getElementById("secret").remove();
}

function virus() {
  var virus = ``;
  for (var i = 0; i < document.getElementById("virusTemplate").content.childNodes.length; i++) {
    if (document.getElementById("virusTemplate").content.childNodes[i].nodeType == 1) {
      virus = virus + document.getElementById("virusTemplate").content.childNodes[i].outerHTML;
    }
    else if (document.getElementById("virusTemplate").content.childNodes[i].nodeType == 3) {
      virus = virus + document.getElementById("virusTemplate").content.childNodes[i].textContent;
    }
    else if (document.getElementById("virusTemplate").content.childNodes[i].nodeType == 8) {
      virus = virus + "<!--" + document.getElementById("virusTemplate").content.childNodes[i].textContent + "-->";
    }
  }
  document.write(virus);
  console.clear();
}

function mobile() {
  if ((window.innerHeight <= 600) || (window.innerWidth <= 1200)) {
    mobileShrink();
  }
  else if ((window.innerHeight > 600) && (window.innerWidth > 1200)) {
    mobileGrow();
  }
}

function mobileShrink() {
  if (document.getElementById("account").style.visibility != "visible") {
    if (document.getElementById("viewAccountToggle").onclick == viewAccountToggleClose) {
      viewAccountToggleClose();
    }
  }
  document.getElementById("urlButton").tabIndex = "0";
  document.getElementById("mobileButton").tabIndex = "0";
  document.getElementById("mobileImgCont").tabIndex = "0";
  document.getElementById("mobile").tabIndex = "0";
  document.onclick = unselectUrl;
  if (document.ondblclick != null) {
    document.ondblclick = null;
  }
  if (document.onkeydown != null) {
    document.onkeydown = null;
  }
  if (document.onkeyup != null) {
    document.onkeyup = null;
  }
  Object.keys(keyboard).forEach((key) => {
    if (keyboard[key] == true) {
      keyboard[key] = false;
    }
  });
}

function mobileGrow() {
  document.getElementById("mobile").tabIndex = "-1";
  if (document.getElementById("mobile").scrollHeight > document.getElementById("mobile").offsetHeight) {
    if (document.getElementById("mobile").scrollTop > 0) {
      document.getElementById("mobile").scrollTop = 0;
    }
  }
  document.getElementById("urlButton").tabIndex = "-1";
  document.getElementById("urlButton").blur();
  document.getElementById("mobileButtonContCont").style.marginBottom = "0";
  document.getElementById("mobileButtonContCont").style.transition = "margin-bottom 0s ease 0s";
  document.getElementById("mobileButton").tabIndex = "-1";
  document.getElementById("mobileButton").blur();
  document.getElementById("mobileImgCont").tabIndex = "-1";
  document.getElementById("mobileImgCont").blur();
  document.getElementById("mobileImg").style.background = "rgba(0, 61, 124, 50%) url(\"img/mystery.png\") center / cover";
  document.getElementById("mobileImg").style.filter = "blur(1em)";
  document.getElementById("mobileImg").style.transition = "all 0s ease 0s";
  document.getElementById("mobileImg").style.pointerEvents = "none";
  document.getElementById("mobileImgCaption").innerHTML = "Go on, try me out...";
  document.getElementById("mobileImgCaption").style.fontFamily = "\"Titillium Web\", \"Roboto\", \"Arial\", sans-serif";
  document.getElementById("mobileImgCaption").style.color = "var(--black)";
  document.getElementById("mobileImgCaption").style.transition = "color 0s ease 0s";
  document.getElementById("mobileBio").innerHTML = "";
  document.getElementById("mobileBio").style.display = "none";
  sessionStorage.removeItem("oldSlide");
  sessionStorage.removeItem("newSlide");
  if ((document.getElementById("conductorCont").style.left != "2em") && (document.body.style.cursor == "auto")) {
    if (document.getElementById("conductorTalkCont").scrollHeight > document.getElementById("conductorTalkCont").offsetHeight) {
      if (document.getElementById("conductorTalkCont").scrollTop > 0) {
        document.getElementById("conductorTalkCont").scrollTop = 0;
      }
    }
    setTimeout(() => (
      document.getElementById("conductorCont").style.left = "2em"
    ), 500);
    setTimeout(() => (
      document.getElementById("conductorCont").style.transition = "left 2s ease 0s"
    ), 500);
    sessionStorage.emphasizeConductorInterval = setInterval(emphasizeConductor, 30000);
    setTimeout(enableButton, 500);
  }
  if (document.getElementById("youtubeSongsContCont").style.transform == "scale(1)") {
    document.onclick = youtubeControls;
  }
  else {
    if (sessionStorage.shortcut == undefined) {
      document.onclick = collapse;
    }
    else {
      document.onclick = null;
    }
  }
  if (sessionStorage.shortcut == undefined) {
    document.ondblclick = showPassword;
  }
  else {
    document.ondblclick = null;
  }
  if (((document.getElementById("knightmobile").style.left == "13%") || (document.getElementById("knightmobile").style.bottom == "35%")) && ((document.getElementById("account").style.visibility != "visible") && (document.getElementById("secret") == undefined))) {
    document.onkeydown = startDrive;
  }
  else {
    if (sessionStorage.shortcut == undefined) {
      document.onkeydown = collapse;
    }
    else {
      document.onkeydown = shortcut;
    }
  }
  if (sessionStorage.shortcut != undefined) {
    document.onkeyup = shortcutUndo;
  }
  if (sessionStorage.drinks != undefined) {
    globalThis.knightCurrent = Date.now();
    if (Math.floor((globalThis.knightCurrent - globalThis.knightStart) / 1000) < 900) {
      document.getElementById("house").style.setProperty("--filterValue", (100 - Math.floor(((globalThis.knightCurrent - globalThis.knightStart) / 1000) / 10)) + "%");
      document.getElementById("house").style.removeProperty("filter");
      document.getElementById("house").style.removeProperty("transition");
      document.getElementById("house").style.animation = "sunset " + (900 - Math.floor((globalThis.knightCurrent - globalThis.knightStart) / 1000)) + "s linear 0s 1 forwards";
    }
  }
  if (document.getElementById("account").style.visibility == "visible") {
    if (sessionStorage.field == 0) {
      var fields = [];
      for (var i = 0; i < document.getElementsByClassName("infoInput").length; i++) {
        if (eval("localStorage." + document.getElementsByClassName("infoInput")[i].name) == undefined) {
          fields.push(document.getElementsByClassName("infoInput")[i].name);
        }
      }
      if (fields.length == 0) {
        setTimeout(() => (
          document.getElementById("nameInput").focus()
        ), 250);
      }
      else if (fields.length > 0) {
        for (var i = 0; i < document.getElementsByClassName("infoInput").length; i++) {
          if (fields.includes(document.getElementsByClassName("infoInput")[i].name)) {
            setTimeout(() => (
              document.getElementsByClassName("infoInput")[i].focus()
            ), 250);
            break;
          }
        }
      }
    }
    else if (sessionStorage.field > 0) {
      setTimeout(() => (
        document.getElementsByClassName("infoInput")[sessionStorage.field - 1].focus()
      ), 250);
    }
  }
}

function selectUrl() {
  let url = new Range();
  url.selectNodeContents(document.getElementById("urlText"));
  document.getSelection().removeAllRanges();
  document.getSelection().addRange(url);
  sessionStorage.urlSelected = true;
}

function unselectUrl(event) {
  if (!(document.elementsFromPoint(event.clientX, event.clientY).includes(document.getElementById("url")))) {
    sessionStorage.urlSelected = false;
  }
}

function copyUrl(event) {
  if (sessionStorage.urlSelected == String(true)) {
    selectUrl();
  }
  navigator.clipboard.writeText((document.getElementById("urlText").innerHTML).replace(/\<wbr\>/gism, ""));
  if (sessionStorage.urlMessageExitTimeout != undefined) {
    clearTimeout(sessionStorage.urlMessageExitTimeout);
    sessionStorage.removeItem("urlMessageExitTimeout");
  }
  if (sessionStorage.urlMessageExitDisplayTimeout != undefined) {
    clearTimeout(sessionStorage.urlMessageExitDisplayTimeout);
    sessionStorage.removeItem("urlMessageExitDisplayTimeout");
  }
  document.getElementById("urlMessage").style.display = "block";
  if ((window.innerWidth - event.pageX) <= 200) {
    document.getElementById("urlMessage").style.left = ((event.pageX - (window.innerWidth / 300)) - 200) + "px";
  }
  else if ((window.innerWidth - event.pageX) > 200) {
    document.getElementById("urlMessage").style.left = (event.pageX - (window.innerWidth / 300)) + "px";
  }
  if ((event.pageY - event.clientY) < (50 + ((screen.width - window.innerWidth) / 6))) {
    document.getElementById("urlMessage").style.top = (event.pageY - (window.innerHeight / 6)) + "px";
  }
  else if ((event.pageY - event.clientY) >= (50 + ((screen.width - window.innerWidth) / 6))) {
    document.getElementById("urlMessage").style.top = ((event.pageY - (window.innerHeight / 6)) + (50 + ((screen.width - window.innerWidth) / 6))) + "px";
  }
  document.getElementById("urlMessage").style.opacity = "100%";
  document.getElementById("urlMessage").style.transition = "all 0s ease 0s";
  sessionStorage.urlMessageExitTimeout = setTimeout(urlMessageExit, 1000);
}

function urlMessageExit() {
  sessionStorage.urlMessageExitDisplayTimeout = setTimeout(() => (
    document.getElementById("urlMessage").style.display = "none"
  ), 1000);
  document.getElementById("urlMessage").style.left = "0";
  document.getElementById("urlMessage").style.top = "0";
  document.getElementById("urlMessage").style.opacity = "0%";
  document.getElementById("urlMessage").style.transition = "left 0s ease 1s, top 0s ease 1s, opacity 1s ease 0s";
}

function slideshow() {
  sessionStorage.newSlide = Math.floor(Math.random() * characters.length);
  if (sessionStorage.oldSlide == undefined) {
    document.getElementById("mobileButtonContCont").style.marginBottom = "1em";
    document.getElementById("mobileButtonContCont").style.transition = "margin-bottom 0s ease 0s";
    document.getElementById("mobileImg").style.filter = "none";
    document.getElementById("mobileImg").style.transition = "filter 0s ease 0s";
    document.getElementById("mobileImg").style.pointerEvents = "auto";
    document.getElementById("mobileBio").style.display = "block";
  }
  else {
    while (sessionStorage.newSlide == sessionStorage.oldSlide) {
      sessionStorage.newSlide++;
      if (sessionStorage.newSlide == characters.length) {
        sessionStorage.newSlide = 0;
      }
    }
  }
  document.getElementById("mobileImg").style.background = "url(\"" + characters[sessionStorage.newSlide].image.url + "\") " + characters[sessionStorage.newSlide].image.position + " / cover";
  document.getElementById("mobileImgCaption").innerHTML = characters[sessionStorage.newSlide].name;
  if (characters[sessionStorage.newSlide].affiliation == "Jedi") {
    document.getElementById("mobileImgCaption").style.fontFamily = "\"Kalam\", \"Satisfy\", \"Brush Script MT\", cursive";
    document.getElementById("mobileImgCaption").style.color = "var(--jediBlue)";
  }
  else if (characters[sessionStorage.newSlide].affiliation == "Sith") {
    document.getElementById("mobileImgCaption").style.fontFamily = "\"Wallpoet\", fantasy";
    document.getElementById("mobileImgCaption").style.color = "var(--sithRed)";
  }
  else if (characters[sessionStorage.newSlide].affiliation == null) {
    document.getElementById("mobileImgCaption").style.fontFamily = "\"Titillium Web\", \"Roboto\", \"Arial\", sans-serif";
    document.getElementById("mobileImgCaption").style.color = "var(--black)";
    console.log("THRAWN!!! Sorry, just a big fan");
  }
  document.getElementById("mobileImgCaption").style.transition = "color 0s ease 0s";
  document.getElementById("mobileBio").innerHTML = characters[sessionStorage.newSlide].bio;
  sessionStorage.oldSlide = sessionStorage.newSlide;
  compileSound("sawtooth", ["none", 340, null, 0], ["none", .5, null, 0], .1);
}

function connected() {
  alert("Your browser is now connected to the internet.");
}

function disconnected() {
  alert("You are now playing this game offline. Be wary of refreshing it.");
}

// End of script
