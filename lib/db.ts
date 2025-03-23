// Book Categories
export const categories = [
  {
    id: "fiction",
    title: "Fiction",
    image: "/categories/fiction.jpg",
    count: 1245,
    slug: "fiction",
    subcategories: [
      { id: "literary-fiction", name: "Literary Fiction" },
      { id: "contemporary-fiction", name: "Contemporary Fiction" },
      { id: "historical-fiction", name: "Historical Fiction" },
      { id: "womens-fiction", name: "Women's Fiction" },
      { id: "short-stories", name: "Short Stories" },
    ],
  },
  {
    id: "mystery",
    title: "Mystery",
    image: "/categories/mystery.jpg",
    count: 867,
    slug: "mystery",
    subcategories: [
      { id: "crime-fiction", name: "Crime Fiction" },
      { id: "detective-stories", name: "Detective Stories" },
      { id: "psychological-thrillers", name: "Psychological Thrillers" },
      { id: "legal-thrillers", name: "Legal Thrillers" },
      { id: "espionage", name: "Espionage" },
    ],
  },
  {
    id: "science-fiction",
    title: "Science Fiction",
    image: "/categories/science-fiction.jpg",
    count: 532,
    slug: "science-fiction",
    subcategories: [
      { id: "space-opera", name: "Space Opera" },
      { id: "dystopian", name: "Dystopian" },
      { id: "cyberpunk", name: "Cyberpunk" },
      { id: "time-travel", name: "Time Travel" },
      { id: "alien-invasion", name: "Alien Invasion" },
    ],
  },
  {
    id: "biography",
    title: "Biography",
    image: "/categories/biography.jpg",
    count: 418,
    slug: "biography",
    subcategories: [
      { id: "memoir", name: "Memoir" },
      { id: "autobiography", name: "Autobiography" },
      { id: "political", name: "Political" },
      { id: "historical", name: "Historical" },
      { id: "literary", name: "Literary" },
    ],
  },
  {
    id: "history",
    title: "History",
    image: "/categories/history.jpg",
    count: 356,
    slug: "history",
    subcategories: [
      { id: "world-history", name: "World History" },
      { id: "american-history", name: "American History" },
      { id: "european-history", name: "European History" },
      { id: "ancient-history", name: "Ancient History" },
      { id: "military-history", name: "Military History" },
    ],
  },
  {
    id: "fantasy",
    title: "Fantasy",
    image: "/categories/fantasy.jpg",
    count: 621,
    slug: "fantasy",
    subcategories: [
      { id: "epic-fantasy", name: "Epic Fantasy" },
      { id: "urban-fantasy", name: "Urban Fantasy" },
      { id: "dark-fantasy", name: "Dark Fantasy" },
      { id: "fairy-tales", name: "Fairy Tales" },
      { id: "mythology", name: "Mythology" },
    ],
  },
  {
    id: "romance",
    title: "Romance",
    image: "/categories/romance.jpg",
    count: 892,
    slug: "romance",
    subcategories: [
      { id: "contemporary-romance", name: "Contemporary Romance" },
      { id: "historical-romance", name: "Historical Romance" },
      { id: "paranormal-romance", name: "Paranormal Romance" },
      { id: "erotic-romance", name: "Erotic Romance" },
      { id: "romantic-suspense", name: "Romantic Suspense" },
    ],
  },
  {
    id: "self-help",
    title: "Self-Help",
    image: "/categories/self-help.jpg",
    count: 475,
    slug: "self-help",
    subcategories: [
      { id: "personal-development", name: "Personal Development" },
      { id: "relationships", name: "Relationships" },
      { id: "spirituality", name: "Spirituality" },
      { id: "mindfulness", name: "Mindfulness" },
      { id: "mental-health", name: "Mental Health" },
    ],
  },
];

// Book Authors
export const authors = [
  {
    id: "jane-austen",
    name: "Jane Austen",
    image: "/authors/jane-austen.jpg",
    bookCount: 6,
    bio: "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century.",
  },
  {
    id: "george-orwell",
    name: "George Orwell",
    image: "/authors/george-orwell.jpg",
    bookCount: 9,
    bio: "Eric Arthur Blair, known by his pen name George Orwell, was an English novelist, essayist, journalist and critic. His work is characterised by lucid prose, social criticism, opposition to totalitarianism, and support of democratic socialism.",
  },
  {
    id: "toni-morrison",
    name: "Toni Morrison",
    image: "/authors/toni-morrison.jpg",
    bookCount: 11,
    bio: "Toni Morrison was an American novelist, essayist, book editor, and college professor. Her first novel, The Bluest Eye, was published in 1970. The critically acclaimed Song of Solomon brought her national attention and won the National Book Critics Circle Award.",
  },
  {
    id: "haruki-murakami",
    name: "Haruki Murakami",
    image: "/authors/haruki-murakami.jpg",
    bookCount: 14,
    bio: "Haruki Murakami is a Japanese writer. His books and stories have been bestsellers in Japan as well as internationally, with his work being translated into 50 languages and selling millions of copies outside his native country.",
  },
  {
    id: "matt-haig",
    name: "Matt Haig",
    image: "/authors/matt-haig.jpg",
    bookCount: 8,
    bio: "Matt Haig is a British author and journalist. He has written both fiction and non-fiction for children and adults, often in the speculative fiction genre.",
  },
  {
    id: "kazuo-ishiguro",
    name: "Kazuo Ishiguro",
    image: "/authors/kazuo-ishiguro.jpg",
    bookCount: 9,
    bio: "Kazuo Ishiguro is a British novelist, screenwriter, and short-story writer. He was born in Nagasaki, Japan, but his family moved to the UK when he was five years old. He is one of the most celebrated contemporary fiction authors in English.",
  },
];

// Complete Books Database
export const books = [
  {
    id: "midnight-library",
    title: "The Midnight Library",
    author: "Matt Haig",
    authorId: "matt-haig",
    coverImage: "/books/the-midnight-library.jpg",
    price: 16.99,
    originalPrice: 24.99,
    isNew: true,
    isBestseller: true,
    rating: 4.7,
    reviewCount: 9876,
    categoryId: "fiction",
    subcategoryId: "literary-fiction",
    publishDate: "2020-08-13",
    pageCount: 304,
    isbn: "9780525559474",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Viking",
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices. Would you have done anything different, if you had the chance to undo your regrets?",
    longDescription:
      "Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?\n\nIn The Midnight Library, Matt Haig's enchanting blockbuster novel, Nora Seed finds herself faced with this decision. Faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place.",
    reviews: [
      {
        id: "review1",
        user: "BookLover",
        rating: 5,
        comment:
          "This book changed how I think about life and opportunities. Beautifully written and deeply moving.",
        date: "2022-06-15",
      },
      {
        id: "review2",
        user: "LiteraryExplorer",
        rating: 4,
        comment:
          "A fascinating concept executed with warmth and insight. Occasionally predictable but overall excellent.",
        date: "2022-03-22",
      },
      {
        id: "review3",
        user: "PageTurner",
        rating: 5,
        comment:
          "I couldn't put this down. Matt Haig has a way of making you reflect on your own life choices while being thoroughly entertained.",
        date: "2022-01-30",
      },
    ],
    professionalReviews: [
      {
        source: "The New York Times",
        quote:
          "A beautiful fable, an It's a Wonderful Life for the modern age.",
        link: "#",
      },
      {
        source: "The Guardian",
        quote: "A celebration of life's possibilities.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: ["speculative fiction", "philosophy", "life choices", "depression"],
  },
  {
    id: "klara-and-the-sun",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    authorId: "kazuo-ishiguro",
    coverImage: "/books/klara-and-the-sun.jpg",
    price: 18.99,
    originalPrice: null,
    isNew: false,
    isBestseller: true,
    rating: 4.5,
    reviewCount: 7564,
    categoryId: "science-fiction",
    subcategoryId: "dystopian",
    publishDate: "2021-03-02",
    pageCount: 320,
    isbn: "9780571364886",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Faber & Faber",
    description:
      "From the bestselling author of Never Let Me Go and The Remains of the Day, a stunning new novel that asks, what does it mean to love?",
    longDescription:
      "From her place in the store, Klara, an Artificial Friend with outstanding observational qualities, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside. She remains hopeful a customer will soon choose her, but when the possibility emerges that her circumstances may change forever, Klara is warned not to invest too much in the promises of humans.\n\nIn Klara and the Sun, Kazuo Ishiguro looks at our rapidly-changing modern world through the eyes of an unforgettable narrator to explore a fundamental question: what does it mean to love?",
    reviews: [
      {
        id: "review1",
        user: "SciFiEnthusiast",
        rating: 5,
        comment:
          "Ishiguro creates such a believable AI perspective, it's haunting and beautiful at the same time.",
        date: "2021-09-14",
      },
      {
        id: "review2",
        user: "BookWorm88",
        rating: 4,
        comment:
          "Not what I expected, but in a good way. A thoughtful exploration of consciousness and love.",
        date: "2021-06-28",
      },
      {
        id: "review3",
        user: "LiteraryTraveler",
        rating: 5,
        comment:
          "A stunning meditation on what makes us human. Ishiguro is a master of subtle emotional storytelling.",
        date: "2021-04-12",
      },
    ],
    professionalReviews: [
      {
        source: "The Washington Post",
        quote:
          "A delicate, haunting story about the fundamental yearning to be loved.",
        link: "#",
      },
      {
        source: "NPR",
        quote:
          "Ishiguro returns to the theme that has made him one of the most beloved authors of our time.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: ["artificial intelligence", "dystopian", "literary fiction"],
  },
  {
    id: "vanishing-half",
    title: "The Vanishing Half",
    author: "Brit Bennett",
    authorId: "brit-bennett",
    coverImage: "/books/vanishing-half.jpg",
    price: 15.99,
    originalPrice: null,
    isNew: false,
    isBestseller: true,
    rating: 4.7,
    reviewCount: 8531,
    categoryId: "fiction",
    subcategoryId: "literary-fiction",
    publishDate: "2020-06-02",
    pageCount: 352,
    isbn: "9780525536291",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Riverhead Books",
    description:
      "The Vignes twin sisters will always be identical. But after growing up together in a small, southern black community and running away at age sixteen, it's not just the shape of their daily lives that is different as adults, it's everything: their families, their communities, their racial identities.",
    longDescription:
      "The Vignes twin sisters will always be identical. But after growing up together in a small, southern black community and running away at age sixteen, it's not just the shape of their daily lives that is different as adults, it's everything: their families, their communities, their racial identities. Many years later, one sister lives with her black daughter in the same southern town she once tried to escape. The other secretly passes for white, and her white husband knows nothing of her past. Still, even separated by so many miles and just as many lies, the fates of the twins remain intertwined. What will happen to the next generation, when their own daughters' storylines intersect?\n\nWeaving together multiple strands and generations of this family, from the Deep South to California, from the 1950s to the 1990s, Brit Bennett produces a story that is at once a riveting, emotional family story and a brilliant exploration of the American history of passing.",
    reviews: [
      {
        id: "review1",
        user: "BookishAdventurer",
        rating: 5,
        comment:
          "One of the most thought-provoking books I've read about identity and belonging.",
        date: "2021-12-03",
      },
      {
        id: "review2",
        user: "NovelisticJourney",
        rating: 5,
        comment:
          "Bennett's writing is exquisite and the character development is masterful.",
        date: "2021-07-18",
      },
      {
        id: "review3",
        user: "LiteraryWanderer",
        rating: 4,
        comment:
          "A complex exploration of race, identity, and family. Couldn't put it down.",
        date: "2020-09-22",
      },
    ],
    professionalReviews: [
      {
        source: "The New York Times",
        quote:
          "Bennett's tone and style recalls James Baldwin and Toni Morrison, but it's uniquely her own.",
        link: "#",
      },
      {
        source: "Entertainment Weekly",
        quote: "Beautifully written, thought-provoking and immersive.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: ["identity", "race", "family saga", "historical fiction"],
  },
  {
    id: "hamnet",
    title: "Hamnet",
    author: "Maggie O'Farrell",
    authorId: "maggie-ofarrell",
    coverImage: "/books/hamnet.jpg",
    price: 14.99,
    originalPrice: 19.99,
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 6789,
    categoryId: "fiction",
    subcategoryId: "historical-fiction",
    publishDate: "2020-03-31",
    pageCount: 384,
    isbn: "9780525657606",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Knopf",
    description:
      "A luminous portrait of a marriage, a shattering evocation of a family ravaged by grief and loss, and a tender and unforgettable re-imagining of a boy whose life has been all but forgotten.",
    longDescription:
      "England, 1580: The Black Death creeps across the land, an ever-present threat, infecting the healthy, the sick, the old and the young alike. The end of days is near, but life always goes on.\n\nA young Latin tutor—penniless and bullied by a violent father—falls in love with an extraordinary, eccentric young woman. Agnes is a wild creature who walks her family's land with a falcon on her glove and is known throughout the countryside for her unusual gifts as a healer, understanding plants and potions better than she does people. Once she settles with her husband on Henley Street in Stratford-upon-Avon, she becomes a fiercely protective mother and a steadfast, centrifugal force in the life of her young husband, whose career on the London stage is just taking off when his beloved young son succumbs to sudden fever.",
    reviews: [
      {
        id: "review1",
        user: "ClassicalReader",
        rating: 5,
        comment:
          "An exquisite reimagining of Shakespeare's family life. The prose is poetic and the emotional depth is stunning.",
        date: "2021-11-05",
      },
      {
        id: "review2",
        user: "HistoricalFictionFan",
        rating: 4,
        comment:
          "O'Farrell brings the 16th century alive with such detail and emotional resonance.",
        date: "2021-05-20",
      },
      {
        id: "review3",
        user: "BookishDreamer",
        rating: 5,
        comment:
          "The way this novel treats grief is unlike anything I've read before. Absolutely heartbreaking and beautiful.",
        date: "2020-12-14",
      },
    ],
    professionalReviews: [
      {
        source: "The Guardian",
        quote:
          "Magnificent... unflinching, written with passion, beauty and occasional anger.",
        link: "#",
      },
      {
        source: "The Times",
        quote: "A thing of shimmering wonder.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: ["Shakespeare", "historical fiction", "family", "grief"],
  },
  {
    id: "cloud-cuckoo-land",
    title: "Cloud Cuckoo Land",
    author: "Anthony Doerr",
    authorId: "anthony-doerr",
    coverImage: "/books/cloud-cuckoo-land.jpg",
    price: 19.99,
    originalPrice: null,
    isNew: true,
    isBestseller: false,
    rating: 4.4,
    reviewCount: 5873,
    categoryId: "fiction",
    subcategoryId: "literary-fiction",
    publishDate: "2021-09-28",
    pageCount: 640,
    isbn: "9781501168418",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Scribner",
    description:
      "From the Pulitzer Prize–winning author of All the Light We Cannot See, a triumph of imagination and compassion, a soaring novel about children on the cusp of adulthood in a broken world, who find resilience, hope, and story.",
    longDescription:
      "Set in Constantinople in the fifteenth century, in a small town in present-day Idaho, and on an interstellar ship decades from now, Anthony Doerr's gorgeously wrought novel is about children on the cusp of adulthood in worlds in peril, who find resilience, hope—and a book. In Cloud Cuckoo Land, Doerr has created a magnificent tapestry of times and places that reflects our vast interconnectedness—with other species, with each other, with those who lived before us, and with those who will be here after we're gone.\n\nDedicated to 'the librarians then, now, and in the years to come,' Cloud Cuckoo Land is a beautiful and redemptive novel about stewardship—of the book, of the Earth, of the human heart.",
    reviews: [
      {
        id: "review1",
        user: "LiteraryAdventurer",
        rating: 5,
        comment:
          "Doerr's storytelling across time and space is nothing short of miraculous. This book is a masterpiece.",
        date: "2022-01-17",
      },
      {
        id: "review2",
        user: "BookishJourney",
        rating: 4,
        comment:
          "Complex and ambitious, but with such heart. The way the stories intertwine is brilliant.",
        date: "2021-12-03",
      },
      {
        id: "review3",
        user: "FictionExplorer",
        rating: 4,
        comment:
          "Sometimes challenging to follow the multiple storylines, but ultimately rewarding and deeply meaningful.",
        date: "2021-10-14",
      },
    ],
    professionalReviews: [
      {
        source: "Kirkus Reviews",
        quote:
          "A welcome celebration of the continuing resonance of books and libraries.",
        link: "#",
      },
      {
        source: "NPR",
        quote:
          "A paean to books and libraries, a multifaceted epic about human connections across time.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: [
      "historical fiction",
      "science fiction",
      "literary fiction",
      "multiple timelines",
    ],
  },
  {
    id: "beautiful-world",
    title: "Beautiful World, Where Are You",
    author: "Sally Rooney",
    authorId: "sally-rooney",
    coverImage: "/books/beautiful-world.jpg",
    price: 17.99,
    originalPrice: null,
    isNew: true,
    isBestseller: false,
    rating: 4.2,
    reviewCount: 4289,
    categoryId: "fiction",
    subcategoryId: "contemporary-fiction",
    publishDate: "2021-09-07",
    pageCount: 368,
    isbn: "9780374602604",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Farrar, Straus and Giroux",
    description:
      "Beautiful World, Where Are You is a new novel by Sally Rooney, the bestselling author of Normal People and Conversations with Friends.",
    longDescription:
      "Alice, a novelist, meets Felix, who works in a warehouse, and asks him if he'd like to travel to Rome with her. In Dublin, her best friend, Eileen, is getting over a break-up and slips back into flirting with Simon, a man she has known since childhood.\n\nAlice, Felix, Eileen, and Simon are still young—but life is catching up with them. They desire each other, they delude each other, they get together, they break apart. They have sex, they worry about sex, they worry about their friendships and the world they live in. Are they standing in the last lighted room before the darkness, bearing witness to something? Will they find a way to believe in a beautiful world?",
    reviews: [
      {
        id: "review1",
        user: "ContemporaryFictionLover",
        rating: 4,
        comment:
          "Rooney's signature style shines through, with nuanced relationships and sharp observations about modern life.",
        date: "2022-02-12",
      },
      {
        id: "review2",
        user: "BookishMillennial",
        rating: 5,
        comment:
          "The email exchanges between characters contain some of the most insightful writing about our current world.",
        date: "2021-11-29",
      },
      {
        id: "review3",
        user: "LiteraryExplorer",
        rating: 3,
        comment:
          "While beautifully written, I found the characters somewhat frustrating. Still worth reading for Rooney's prose.",
        date: "2021-09-25",
      },
    ],
    professionalReviews: [
      {
        source: "The New Yorker",
        quote:
          "Rooney is the rare millennial novelist who has achieved both critical and commercial success.",
        link: "#",
      },
      {
        source: "The Atlantic",
        quote:
          "A novel of capacious intelligence and plenty of page-turning emotional drama.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: [
      "contemporary fiction",
      "relationships",
      "millennial",
      "literary fiction",
    ],
  },
  {
    id: "lincoln-highway",
    title: "The Lincoln Highway",
    author: "Amor Towles",
    authorId: "amor-towles",
    coverImage: "/books/lincoln-highway.jpg",
    price: 18.99,
    originalPrice: null,
    isNew: true,
    isBestseller: false,
    rating: 4.6,
    reviewCount: 6943,
    categoryId: "fiction",
    subcategoryId: "historical-fiction",
    publishDate: "2021-10-05",
    pageCount: 592,
    isbn: "9780735222359",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Viking",
    description:
      "A captivating novel about a road trip across America in the 1950s, about the braided lives of four young people at a crossroads.",
    longDescription:
      "In June, 1954, eighteen-year-old Emmett Watson is driven home to Nebraska by the warden of the juvenile work farm where he has just served fifteen months for involuntary manslaughter. His mother long gone, his father recently deceased, and the family farm foreclosed upon by the bank, Emmett's intention is to pick up his eight-year-old brother, Billy, and head to California where they can start their lives anew. But when the warden drives away, Emmett discovers that two friends from the work farm have hidden themselves in the trunk of the warden's car. Together, they have hatched an altogether different plan for Emmett's future, one that will take them all on a fateful journey in the opposite direction—to the City of New York.\n\nSpanning just ten days and told from multiple points of view, Towles's third novel will satisfy fans of his multi-layered literary styling while providing them an array of new and richly imagined settings, characters, and themes.",
    reviews: [
      {
        id: "review1",
        user: "HistoricalFictionFan",
        rating: 5,
        comment:
          "A masterpiece of storytelling. The characters are unforgettable and the journey is both heartwarming and heartbreaking.",
        date: "2022-03-08",
      },
      {
        id: "review2",
        user: "BookWanderer",
        rating: 4,
        comment:
          "Beautifully crafted with multiple perspectives that weave together perfectly. A road trip novel like no other.",
        date: "2022-01-15",
      },
      {
        id: "review3",
        user: "LiteraryExplorer",
        rating: 5,
        comment:
          "Towles has outdone himself. The characters leap off the page and the 1950s setting is vividly rendered.",
        date: "2021-11-02",
      },
    ],
    professionalReviews: [
      {
        source: "The Washington Post",
        quote: "Absorbing and satisfying, both epic and intimate.",
        link: "#",
      },
      {
        source: "NPR",
        quote: "A multilayered saga of misadventure and opportunity.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: ["1950s", "historical fiction", "adventure", "road trip"],
  },
  {
    id: "crossroads",
    title: "Crossroads",
    author: "Jonathan Franzen",
    authorId: "jonathan-franzen",
    coverImage: "/books/crossroads.jpg",
    price: 20.99,
    originalPrice: null,
    isNew: true,
    isBestseller: false,
    rating: 4.3,
    reviewCount: 3987,
    categoryId: "fiction",
    subcategoryId: "literary-fiction",
    publishDate: "2021-10-05",
    pageCount: 592,
    isbn: "9780374181178",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Farrar, Straus and Giroux",
    description:
      "It's December 23, 1971, and the Hildebrandt family is at a crossroads. The patriarch, Russ, the associate pastor of a suburban Chicago church, is poised to break free from a marriage he finds joyless—unless his brilliant and unstable wife, Marion, breaks free of it first.",
    longDescription:
      "It's December 23, 1971, and the Hildebrandt family is at a crossroads. The patriarch, Russ, the associate pastor of a suburban Chicago church, is poised to break free from a marriage he finds joyless—unless his brilliant and unstable wife, Marion, breaks free of it first. Their eldest child, Clem, is coming home from college afire with moral absolutism, having taken an action that will shatter his father. Clem's sister, Becky, long the social queen of her high-school class, has veered into the era's counterculture, while their younger brother Perry, fed up with selling pot to support his drug habit, has firmly resolved to be a better person. Each of the Hildebrandts seeks a freedom that each of the others threatens to complicate.\n\nJonathan Franzen's novels are celebrated for their unforgettably vivid characters and their keen-eyed take on the complexities of contemporary America. Now, for the first time, in Crossroads, Franzen explores the history of a generation. With characteristic humour and complexity, and with even greater warmth, he conjures a world that feels no less immediate.",
    reviews: [
      {
        id: "review1",
        user: "LiteraryDevotee",
        rating: 5,
        comment:
          "Franzen at his best. The family dynamics are incredibly well-drawn and psychologically astute.",
        date: "2022-02-28",
      },
      {
        id: "review2",
        user: "BookishIntellectual",
        rating: 4,
        comment:
          "A meticulous examination of family, faith, and moral complexity. The characters stay with you.",
        date: "2021-12-15",
      },
      {
        id: "review3",
        user: "FictionConnoisseur",
        rating: 4,
        comment:
          "Franzen's ability to dissect the American family is unparalleled. Each character is deeply flawed yet compelling.",
        date: "2021-10-20",
      },
    ],
    professionalReviews: [
      {
        source: "The New York Times",
        quote:
          "A mellow, marzipan-hued '70s-era heartbreaker. Franzen's most sympathetic novel yet.",
        link: "#",
      },
      {
        source: "The Guardian",
        quote: "His most mature and human work to date.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: ["1970s", "family drama", "religion", "literary fiction"],
  },
  {
    id: "to-kill-a-mockingbird",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    authorId: "harper-lee",
    coverImage: "/books/to-kill-a-mockingbird.jpg",
    price: 12.99,
    originalPrice: null,
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewCount: 12547,
    categoryId: "fiction",
    subcategoryId: "literary-fiction",
    publishDate: "1960-07-11",
    pageCount: 336,
    isbn: "9780061120084",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Harper Perennial Modern Classics",
    description:
      "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
    longDescription:
      "One of the best-loved stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
    reviews: [
      {
        id: "review1",
        user: "ClassicLover",
        rating: 5,
        comment:
          "This book has changed countless lives. The moral courage of Atticus Finch continues to inspire readers of all ages.",
        date: "2021-08-12",
      },
      {
        id: "review2",
        user: "LiteraryScholar",
        rating: 5,
        comment:
          "A perfect novel that addresses issues of race, class, and gender in ways that remain relevant today.",
        date: "2020-06-24",
      },
      {
        id: "review3",
        user: "BookwormTeacher",
        rating: 5,
        comment:
          "I read this every year with my students, and every year I find something new to appreciate.",
        date: "2019-11-30",
      },
    ],
    professionalReviews: [
      {
        source: "The New York Times",
        quote:
          "A first novel of such rare excellence that it will no doubt make a great many readers slow down to relish more fully its simple distinction.",
        link: "#",
      },
      {
        source: "Chicago Tribune",
        quote: "A novel of strong contemporary national significance.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: ["classic", "southern literature", "legal drama", "coming of age"],
  },
  {
    id: "pride-and-prejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    authorId: "jane-austen",
    coverImage: "/books/pride-and-prejudice.jpg",
    price: 9.99,
    originalPrice: null,
    isNew: false,
    isBestseller: true,
    rating: 4.7,
    reviewCount: 10982,
    categoryId: "fiction",
    subcategoryId: "literary-fiction",
    publishDate: "1813-01-28",
    pageCount: 432,
    isbn: "9780141439518",
    formats: ["hardcover", "paperback", "ebook", "audiobook"],
    language: "English",
    publisher: "Penguin Classics",
    description:
      "Few have failed to be charmed by the witty and independent spirit of Elizabeth Bennet in Austen's beloved classic Pride and Prejudice.",
    longDescription:
      "When Elizabeth Bennet first meets eligible bachelor Fitzwilliam Darcy, she thinks him arrogant and conceited; he is indifferent to her good looks and lively mind. When she later discovers that Darcy has involved himself in the troubled relationship between his friend Bingley and her beloved sister Jane, she is determined to dislike him more than ever. In the sparkling comedy of manners that follows, Jane Austen shows us the folly of judging by first impressions and superbly evokes the friendships, gossip and snobberies of provincial middle-class life.",
    reviews: [
      {
        id: "review1",
        user: "AustenFan",
        rating: 5,
        comment:
          "There's a reason this book has endured for centuries. Austen's wit and insight into human nature are unmatched.",
        date: "2022-01-15",
      },
      {
        id: "review2",
        user: "ClassicalReader",
        rating: 5,
        comment:
          "Elizabeth Bennet remains one of literature's most delightful heroines, and her relationship with Darcy is the template for so many romances.",
        date: "2021-06-20",
      },
      {
        id: "review3",
        user: "LiteraryHistorian",
        rating: 4,
        comment:
          "Austen's social commentary is as sharp and relevant now as it was in the 19th century.",
        date: "2020-11-12",
      },
    ],
    professionalReviews: [
      {
        source: "The Guardian",
        quote:
          "The most perfect artist among women, the writer whose books are immortal.",
        link: "#",
      },
      {
        source: "Literary Review",
        quote:
          "The wit of Jane Austen has for partner the perfection of her taste.",
        link: "#",
      },
    ],
    stockStatus: "in-stock",
    tags: ["classic", "romance", "social satire", "regency"],
  },
];

// Testimonials
export const testimonials = [
  {
    id: "testimonial1",
    name: "Sarah Johnson",
    avatar: "/testimonials/testimonial1.jpg",
    rating: 5,
    text: "BookHaven has completely transformed my reading experience. Their curated selection and fast delivery make it my go-to bookstore.",
    date: "October 15, 2023",
  },
  {
    id: "testimonial2",
    name: "Michael Chen",
    avatar: "/testimonials/testimonial2.jpg",
    rating: 4,
    text: "I love the personalized recommendations. They've introduced me to authors I never would have discovered otherwise.",
    date: "September 3, 2023",
  },
  {
    id: "testimonial3",
    name: "Emily Rodriguez",
    avatar: "/testimonials/testimonial3.jpg",
    rating: 5,
    text: "The rare book collection is outstanding. I found a first edition I'd been searching for years!",
    date: "November 20, 2023",
  },
  {
    id: "testimonial4",
    name: "David Wilson",
    avatar: "/testimonials/testimonial4.jpg",
    rating: 5,
    text: "The staff at BookHaven are incredibly knowledgeable and always ready to help. It's like having a personal librarian!",
    date: "December 5, 2023",
  },
];

// Benefits
export const benefits = [
  {
    id: "benefit1",
    title: "Vast Selection",
    description: "Over 10 million titles across every genre imaginable.",
    icon: "BookOpen",
  },
  {
    id: "benefit2",
    title: "Fast Delivery",
    description: "Free shipping on orders over $35 with quick delivery.",
    icon: "Truck",
  },
  {
    id: "benefit3",
    title: "Secure Payment",
    description: "Multiple payment options with secure processing.",
    icon: "CreditCard",
  },
  {
    id: "benefit4",
    title: "24/7 Support",
    description: "Our book experts are always ready to help you.",
    icon: "LifeBuoy",
  },
];

// Staff Picks
export const staffPicks = [
  {
    id: "staff-pick1",
    bookId: "circe",
    staffName: "Emma Thompson",
    staffTitle: "Fiction Department",
    staffAvatar: "/placeholder.svg?height=100&width=100",
    recommendation:
      "This book completely captivated me from the first page. Miller's prose is beautiful and lyrical, and her reimagining of Circe's story gives voice to a fascinating character who has often been relegated to the sidelines of mythology. It's a powerful exploration of femininity, power, and what it means to be immortal yet deeply human.",
  },
];

// Featured Collections
export const featuredCollections = [
  {
    id: "summer-reading",
    title: "Summer Reading List",
    description:
      "Perfect books for beach reading or lazy afternoons in the garden.",
    bookIds: ["midnight-library", "klara-and-the-sun", "vanishing-half"],
  },
  {
    id: "award-winners",
    title: "Award Winners 2021",
    description:
      "Critically acclaimed titles that have received major literary prizes.",
    bookIds: ["hamnet", "vanishing-half", "klara-and-the-sun"],
  },
  {
    id: "classic-literature",
    title: "Essential Classics",
    description: "Timeless works that have shaped literature as we know it.",
    bookIds: ["to-kill-a-mockingbird", "pride-and-prejudice"],
  },
];

// Helper function to get related books
export const getRelatedBooks = (bookId: string, limit = 4) => {
  const book = books.find((b) => b.id === bookId);
  if (!book) return [];

  // Find books in the same category
  return books
    .filter((b) => b.id !== bookId && b.categoryId === book.categoryId)
    .slice(0, limit);
};

// Helper function to get books by category
export const getBooksByCategory = (categoryId: string) => {
  return books.filter((book) => book.categoryId === categoryId);
};

// Helper function to filter books
export type FilterOptions = {
  categoryId?: string;
  subcategoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  search?: string;
  authorId?: string;
  format?: string;
};

export const filterBooks = (options: FilterOptions) => {
  return books.filter((book) => {
    // Category filter
    if (options.categoryId && book.categoryId !== options.categoryId) {
      return false;
    }

    // Subcategory filter
    if (options.subcategoryId && book.subcategoryId !== options.subcategoryId) {
      return false;
    }

    // Price range filter
    if (options.minPrice !== undefined && book.price < options.minPrice) {
      return false;
    }
    if (options.maxPrice !== undefined && book.price > options.maxPrice) {
      return false;
    }

    // New release filter
    if (options.isNew !== undefined && book.isNew !== options.isNew) {
      return false;
    }

    // Bestseller filter
    if (
      options.isBestseller !== undefined &&
      book.isBestseller !== options.isBestseller
    ) {
      return false;
    }

    // Author filter
    if (options.authorId && book.authorId !== options.authorId) {
      return false;
    }

    // Format filter
    if (options.format && !book.formats.includes(options.format)) {
      return false;
    }

    // Search filter
    if (options.search) {
      const searchLower = options.search.toLowerCase();
      return (
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower) ||
        book.description.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });
};

// Sorting options
export type SortOption =
  | "price-asc"
  | "price-desc"
  | "title-asc"
  | "title-desc"
  | "date-desc"
  | "popularity";

type Book = (typeof books)[0];
export const sortBooks = (books: Book[], sortBy: SortOption) => {
  const booksCopy = [...books];

  switch (sortBy) {
    case "price-asc":
      return booksCopy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return booksCopy.sort((a, b) => b.price - a.price);
    case "title-asc":
      return booksCopy.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return booksCopy.sort((a, b) => b.title.localeCompare(a.title));
    case "date-desc":
      return booksCopy.sort(
        (a, b) =>
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );
    case "popularity":
      return booksCopy.sort(
        (a, b) => b.reviewCount * b.rating - a.reviewCount * a.rating
      );
    default:
      return booksCopy;
  }
};
