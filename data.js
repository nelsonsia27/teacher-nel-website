const SITE_NAV = [
  { label: "Home", page: "home", children: [{ label: "About", page: "about" }] },
  { label: "School Activities", page: "school-activities", children: [
    { label: "Winter Camp", page: "winter-camp" },
    { label: "Summer Camp", page: "summer-camp" }
  ] },
  { label: "Teaching Resources", page: "teaching-resources", children: [
    { label: "Presentations", page: "presentations" },
    { label: "Video Lessons", page: "video-lessons" },
    { label: "Worksheets", page: "worksheets" },
    { label: "Games", page: "games" }
  ] },
  { label: "Experiences", page: "experiences" },
  { label: "Bilingual Initiative", page: "bilingual-initiative", children: [
    { label: "Classroom English", page: "classroom-english" },
    { label: "English Reading Corner", page: "english-reading-corner" },
    { label: "English Practice", page: "english-practice" },
    { label: "Monthly Storytelling", page: "monthly-storytelling" }
  ] }
];

const COMMON_PARTNERS = "合作單位：彰化縣國際教育暨英語教學資源中心 · Changhua International Education and English Teaching Resource Center · 彰化縣人師教育協會 (MCC)";

const PAGES = {
  about: {
    title: "About",
    eyebrow: "Welcome",
    summary: "This website shares my experiences, best practices, resources, and daily teaching life as a foreign English teacher in Taiwan.",
    stats: [["3", "Teaching principles"], ["Taiwan", "Classroom context"], ["Open", "Downloadable resources"]],
    sections: [
      { heading: "Welcome to my personal website!", body: [
        "This website is created through the initiative of Changhua International Education and English Teaching Resource Center. It aims to share my experiences and best practices in teaching in Taiwan.",
        "Apart from school activities, you will also see here my experiences in Taiwan. Get a glimpse of my daily routine, hobbies, and trips."
      ] },
      { heading: "My Teaching Philosophy", body: [
        "As a language teacher, my philosophy is grounded in three core principles: play, consistent practice with gradual progression, and a clear connection between classroom learning and the real world.",
        "Learning a language should be enjoyable and relatable. I use games, interactive activities, and creative exercises to help students connect with reading, writing, speaking, and listening in meaningful ways.",
        "Language acquisition is a journey. I design lessons that build on prior knowledge so students feel empowered as they take on increasingly complex tasks.",
        "Language is a tool for communication beyond the classroom, so I integrate practical, real-life applications into my teaching whenever possible."
      ] },
      { heading: "Best Practices", body: [
        "Feel free to download and use my presentations, worksheets, games, and video lessons for your own classes."
      ] }
    ],
    resources: [
      { type: "video", title: "Intro Video", text: "A video embedded on the original About page.", url: "https://www.youtube.com/embed/mKdIfolMNlM" }
    ]
  },
  "school-activities": {
    title: "School Activities",
    eyebrow: "Student work",
    summary: "Videos and activity highlights from classroom celebrations and school-wide English learning moments.",
    stats: [["3", "Mother's Day videos"], ["601-603", "Featured classes"], ["Photos", "Activity memories"]],
    sections: [{ heading: "Mother's Day Videos", body: ["Class 601, Class 602, and Class 603 created Mother's Day video projects."] }],
    resources: [
      { type: "drive", title: "Class 601 Mother's Day", text: "Original Google Drive video.", url: "https://drive.google.com/file/d/106qSYfRw8g-am_a36wcyUfPe94oNwxeJ/preview" },
      { type: "drive", title: "Class 602 Mother's Day", text: "Original Google Drive video.", url: "https://drive.google.com/file/d/1OjV5F2_nnMf30SZzOC91_pQEenbeDd8d/preview" },
      { type: "drive", title: "Class 603 Mother's Day", text: "Original Google Drive video.", url: "https://drive.google.com/file/d/1WNJShPKPtn-QrlA3UiwHgvyJKwPJUGES/preview" }
    ]
  },
  "winter-camp": {
    title: "Winter Camp",
    eyebrow: "School Activities",
    summary: "A compilation of videos and photos from winter camp in January 2025.",
    stats: [["114", "Winter camp"], ["Jan 2025", "Camp month"], ["Arts", "Craft focus"]],
    sections: [{ heading: "Winter Camp 114 - Mixed", body: ["Here's a compilation of videos and photos taken during the winter camp last January 2025. The students enjoyed various activities focused on arts and crafts."] }],
    resources: [{ type: "drive", title: "WinterCamp.mp4", text: "Original winter camp video.", url: "https://drive.google.com/file/d/1vAfggtEoALFajB06WjIVG6KyxG517aJG/preview" }]
  },
  "summer-camp": {
    title: "Summer Camp",
    eyebrow: "School Activities",
    summary: "Summer camp videos from 2nd grade and 4th grade groups.",
    stats: [["113", "Summer camp"], ["G2", "2nd grade"], ["G4", "4th grade"]],
    sections: [{ heading: "Summer Camp 113", body: ["Summer Camp 113 includes 2nd grade and 4th grade video highlights."] }],
    resources: [
      { type: "drive", title: "SummerCampG2.mp4", text: "Summer Camp 113 - 2nd Grade.", url: "https://drive.google.com/file/d/1H46Br0IgJa9gn83nWa0oWougU0i4HU7a/preview" },
      { type: "drive", title: "SUmmerCampG4.mp4", text: "Summer Camp 113 - 4th Grade.", url: "https://drive.google.com/file/d/1Z89he8i6OHkODb7pQuf_mo9h6IcX_H2W/preview" }
    ]
  },
  "teaching-resources": {
    title: "Teaching Resources",
    eyebrow: "Classroom materials",
    summary: "A hub for presentations, video lessons, worksheets, and games used in English classes.",
    stats: [["Canva", "Presentations"], ["Drive", "Downloads"], ["Wordwall", "Games"]],
    sections: [{ heading: "Contents", body: ["Stories, presentations, video lessons, worksheets, games, and other classroom-ready materials."] }],
    resources: [
      { type: "internal", title: "Presentations", text: "Canva presentation links for class use.", url: "#presentations" },
      { type: "internal", title: "Video Lessons", text: "Teacher-created videos for lesson topics.", url: "#video-lessons" },
      { type: "internal", title: "Worksheets", text: "Downloadable worksheets and activity sheets.", url: "#worksheets" },
      { type: "internal", title: "Games", text: "Wordwall activities and classroom game recommendations.", url: "#games" }
    ]
  },
  presentations: {
    title: "Presentations",
    eyebrow: "Teaching Resources",
    summary: "Download and use my Canva presentations. Make a copy first before editing.",
    stats: [["17", "Canva links"], ["Copy", "Before editing"], ["Slides", "Ready to adapt"]],
    sections: [{ heading: "Canva Presentations", body: ["Download and use my Canva presentations from this page. Note: Make sure to make a copy first of a Canva presentation before editing it."] }],
    resources: [
      "DAGH_kp-C_c/FN3kAQq0XDGUb7X5OO9rUQ", "DAGH_m0NR8c/YD5hNo34pjrk1_k1zVQUfg", "DAGH_mXE6O4/QFeXfFrE8YPUIKTX7PRKPg", "DAGH_odiHSY/nt9B4CscSog5rzolZ5BF-w", "DAGH_t8FL2o/A05f3wSLolZJ_NaN48MCfw", "DAGH_uJuDeY/B10hYW3jUzhHE4QvDaiZhw", "DAGH_uwKg7w/4InVL6PLYCWwrTE6ao0E_Q", "DAGH_v1vyF4/OpSDR9SpRopVn_7XInDnPw", "DAGn_UvZiFI/LziryK4jvN0mHpIHA6_nVA"
    ].map((id, i) => ({ type: "canva", title: `Canva Presentation ${i + 1}`, text: "Open the original editable Canva presentation.", url: `https://www.canva.com/design/${id}/edit` }))
  },
  "video-lessons": {
    title: "Video Lessons",
    eyebrow: "Teaching Resources",
    summary: "Video lessons created for classroom topics that students can watch, review, and practice from.",
    stats: [["9", "Lesson topics"], ["Q&A", "Practice checks"], ["Real life", "Useful language"]],
    sections: [{ heading: "Lesson Topics", body: [
      "Schedule: weekly activities and subject-verb agreement.",
      "Asking and Giving Directions: simple questions and directions around town.",
      "Boarding Details: travel questions and answers in real-life context.",
      "Food Groups, School Lunch, Schools Around the World, Describing Things, Buying and Counting, and Sports."
    ] }],
    resources: [
      "Schedule", "Asking and Giving Directions", "Boarding Details (Travelling)", "Food Groups", "School Lunch", "Schools Around the World", "Describing Things", "Buying and Counting", "Sports"
    ].map(title => ({ type: "video", title, text: "Lesson topic from the original Video Lessons page.", url: "https://www.youtube.com/@Teacher_Nel" }))
  },
  worksheets: {
    title: "Worksheets",
    eyebrow: "Teaching Resources",
    summary: "Downloadable worksheets used to implement the lessons shared on the site.",
    stats: [["10", "Downloads"], ["PDF/DOCX", "Formats"], ["Practice", "Lesson support"]],
    sections: [{ heading: "Worksheet Downloads", body: ["To fully implement the lessons shared in this site, you can also download the worksheets I used for some lessons."] }],
    resources: [
      ["Boarding Details", "1-WGoeAuKPKjW8GjxNElWS-X-c5dRYF6Z"], ["Colors", "100DTOZud29-N2uiHCGtduWwEE9ZhN40l"], ["CNY Score Sheet", "12z1IRC4ZZLngjK1PsX3z9iM9fsEZgwAJ"], ["Earth Day Story", "1DCEuqCxDBDmapSSH49V23eLtB3cIC-HU"], ["Mother's Day Card", "1DQvnkl8FWmQ3gyOFwbh6YkrOaaiyNW4A"], ["Directions", "1MJ_LGos-jQ-3f8Na9r6JGS2H99h-dNV3"], ["Prepositions", "1k2A6bsPdPF3TAAgIy45Axd1qbbvnqwkC"], ["Occupations", "1wD90ADpty_d3Ni9KrbFh3Qp1zA4LhFTT"], ["Classroom Contract", "1x20pza5SDugT2jca4AY-r8OknrW8NaSm"], ["Earth Day", "1x6RdKXPiRGaHR06rWZPluzWmHnelNroj"]
    ].map(([title, id]) => ({ type: "download", title, text: "Open or download this worksheet from Google Drive.", url: `https://drive.google.com/file/d/${id}/preview` }))
  },
  games: {
    title: "Games",
    eyebrow: "Teaching Resources",
    summary: "Wordwall games and recommended interactive classroom game websites.",
    stats: [["8", "Wordwall embeds"], ["8", "Recommended sites"], ["Interactive", "Classroom play"]],
    sections: [{ heading: "Game Recommendations", body: ["Feel free to use my Wordwall games for the lessons shared here. You can also see website recommendations for interactive classroom games."] }],
    resources: [
      { type: "wordwall", title: "Wordwall Game 1", text: "Embedded Wordwall activity.", url: "https://wordwall.net/embed/29f978f183934c73841f119dc49d9c3f?themeId=1&templateId=5&fontStackId=0" },
      { type: "wordwall", title: "Wordwall Game 2", text: "Embedded Wordwall activity.", url: "https://wordwall.net/embed/2b09dbf3ade0419188bff52c156e25ab?themeId=21&templateId=5&fontStackId=0" },
      { type: "tool", title: "Tay's Teaching Toolkit", text: "Interactive classroom game recommendation.", url: "https://www.taysteachingtoolkit.com/" },
      { type: "tool", title: "Baamboozle", text: "Interactive classroom game recommendation.", url: "https://www.baamboozle.com/" },
      { type: "tool", title: "Wordwall", text: "Interactive classroom game recommendation.", url: "https://wordwall.net/" },
      { type: "tool", title: "Teach-This", text: "ESL activity resource.", url: "https://www.teach-this.com/" },
      { type: "tool", title: "Toy Theater", text: "Teacher tools and interactive games.", url: "https://toytheater.com/category/teacher-tools/" }
    ]
  },
  experiences: {
    title: "Experiences",
    eyebrow: "Life in Taiwan",
    summary: "A glimpse of daily routine, hobbies, trips, and experiences beyond the classroom.",
    stats: [["Video", "Experience highlight"], ["Taiwan", "Daily life"], ["Personal", "Portfolio moments"]],
    sections: [{ heading: "Experience Video", body: ["The original page includes Gym - Made with Clipchamp_1718785324524.mp4."] }],
    resources: [{ type: "drive", title: "Gym - Made with Clipchamp", text: "Original Google Drive video.", url: "https://drive.google.com/file/d/1dsdSX0tOhTXl4dVb7-gMGAxfcCuulO7f/preview" }]
  },
  "bilingual-initiative": {
    title: "Bilingual Initiative",
    eyebrow: "School-wide English",
    summary: "Bilingual projects created with Changhua International Education and English Teaching Resource Center and MCC.",
    stats: [["4", "Initiatives"], ["Weekly", "School practice"], ["Bilingual", "English + Chinese"]],
    sections: [{ heading: "Initiative Hub", body: [COMMON_PARTNERS] }],
    resources: [
      { type: "internal", title: "Classroom English", text: "Weekly phrases and classroom commands.", url: "#classroom-english" },
      { type: "internal", title: "English Reading Corner", text: "Interactive reading boards.", url: "#english-reading-corner" },
      { type: "internal", title: "English Practice", text: "Mystery Box and Everyday English.", url: "#english-practice" },
      { type: "internal", title: "Monthly Storytelling", text: "Stories with worksheets.", url: "#monthly-storytelling" }
    ]
  },
  "classroom-english": {
    title: "Classroom English",
    eyebrow: "Bilingual Initiative",
    summary: "A bilingual guide for high-frequency classroom commands and praise at Dong-Fang Elementary School.",
    stats: [["Monday", "Assembly intro"], ["Weekly", "Language goal"], ["School-wide", "Shared routines"]],
    sections: [{ heading: "How it Works", body: [
      "Every Monday morning, a featured phrase or set of commands is highlighted and practiced together as a whole school.",
      "Teachers place the guide on classroom walls or whiteboards and substitute usual instructions with official English phrases throughout the week.",
      "Students use icons and Chinese translations to connect English sounds with physical classroom actions."
    ] }, { heading: "Activity Objectives", body: ["Normalize English use, support teachers with clear scripts, and build collective habits across the school."] }],
    resources: []
  },
  "english-reading-corner": {
    title: "English Reading Corner",
    eyebrow: "Bilingual Initiative",
    summary: "An interactive reading hub that changes monthly with stories, facts, and global adventures.",
    stats: [["3", "Feature boards"], ["Monthly", "Updated topics"], ["Global", "Reading themes"]],
    sections: [{ heading: "Read, Explore, and Discover the World!", body: [
      "The reading corner helps students practice English reading comprehension in a fun, visual, and stress-free way.",
      "Boards include Explore the World, Nature News, and Sleepy Trivia with bilingual snippets, clues, and interactive questions."
    ] }],
    resources: []
  },
  "english-practice": {
    title: "English Practice",
    eyebrow: "Bilingual Initiative",
    summary: "Mystery Box and Everyday English activities that build vocabulary, critical thinking, and real-world speaking confidence.",
    stats: [["Mystery Box", "Weekly challenge"], ["Everyday English", "Monthly scenario"], ["4", "Learning pillars"]],
    sections: [{ heading: "Mystery Box", body: [
      "Students read clues, infer the secret object, write their guess in English, and join the reveal for a chance to win Dojo Points."
    ] }, { heading: "Everyday English", body: [
      "A monthly immersion program that bridges classroom grammar and real-life communication through focused social scenarios, QR activities, and phrase practice."
    ] }],
    resources: []
  },
  "monthly-storytelling": {
    title: "Monthly Storytelling",
    eyebrow: "Bilingual Initiative",
    summary: "Stories used during monthly storytelling, paired with simple worksheets to test student understanding.",
    stats: [["4", "Story sets"], ["PDF", "Worksheets"], ["Monthly", "Story practice"]],
    sections: [{ heading: "Story Sets", body: ["The Friendly Ghost by Prarthana Gururaj, Tiny The Christmas Elf by Jade Maitre, The Very Hungry Caterpillar by Eric Carle, and The Best Egg."] }],
    resources: [
      ["The Friendly Ghost Worksheet", "14VmAuurVc5YDE6Cq0Kc6qyRFOfJQzt83"],
      ["Tiny The Christmas Elf Worksheet", "18_VI-FoIq4bVcapPDEVLU2sfgCEJ_BiK"],
      ["The Very Hungry Caterpillar Worksheet", "1LKjVBGX5ec9DnnxHGYKHel8ag6abvOo6"],
      ["The Best Egg Worksheet", "1nX4QhaU0WXEJSyGO89dM4kFi6jAfBWMa"]
    ].map(([title, id]) => ({ type: "download", title, text: "Open or download this storytelling worksheet.", url: `https://drive.google.com/file/d/${id}/preview` }))
  }
};

const GALLERY_IMAGES = [
  "assets/cache-images/cached-001.png",
  "assets/cache-images/cached-002.gif",
  "assets/cache-images/cached-003.jpg",
  "assets/cache-images/cached-004.gif",
  "assets/cache-images/cached-005.gif",
  "assets/cache-images/cached-006.gif"
];
