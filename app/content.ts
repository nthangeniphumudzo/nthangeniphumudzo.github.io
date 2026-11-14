/* All marketing copy in one place. Pages and components read from here, so the
   wording can be reviewed as a whole and changed without touching layout code.

   Tone rule: say what learners get, not what they are kept away from. No
   lists of things that are not in the app, and no alarming words.

   Accuracy rule: only describe what the app does or is being built to do. Voice
   narration is not live yet (placeholder), so the copy says "subtitles" and never
   promises a narrator. Subjects and grades follow the curriculum drafts (Grades
   10–12, Mathematics, Physical Sciences and Life Sciences); confirm before launch. */

export const HERO = {
  eyebrow: "Built to elevate learning",
  headline: "Bring your imagination back to learning.",
  sub: "QWILO, a tutor in your pocket. Short animations let you picture how each concept works, so every concept makes sense bit by bit.",
  primaryCta: "Get the app",
  secondaryCta: "See how it works",
};

/* The idea behind the app, in three promises. */
export const POSITIONING = {
  title: "One concept at a time",
  intro: "Each lesson builds on the one before it, so ideas connect and stay with you.",
  points: [
    {
      title: "Watch experiments come alive",
      body: "No lab needed. Animated experiments show you what happens, right on your phone.",
    },
    {
      title: "Picture it, then try it",
      body: "Lessons help you picture each idea, and quizzes let you test yourself with the working shown.",
    },
    {
      title: "Learning anywhere",
      body: "Download a term over Wi-Fi and study at home, on the bus or anywhere else, without using data.",
    },
  ],
};

/* The AI tutor promise, in three steps. Highlighted on the home page. */
export const TUTOR = {
  title: "Didn't get it the first time? Ask again.",
  intro: "The AI tutor keeps breaking a concept down until it makes sense, then you check what you know with a quiz.",
  steps: [
    {
      title: "Ask the AI tutor",
      body: "Ask about any concept in the lesson you are on. The tutor explains it again, step by step.",
    },
    {
      title: "Keep going until it clicks",
      body: "Ask again from a different angle, as many times as you need, until you understand the idea.",
    },
    {
      title: "Test yourself",
      body: "When you feel ready, take a quiz in the app to see what you know.",
    },
  ],
};

export const STORE_NOTE = "Coming soon to the App Store and Google Play. Free to download.";

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Pick your grade and subject",
    body: "Choose your grade and subject when you join. Your roadmap follows the CAPS teaching plan for the term, so you always see what your class is covering.",
  },
  {
    step: "2",
    title: "Watch, then check yourself",
    body: "Each topic has short animated lessons with subtitles on by default. Then a quiz with instant feedback and worked answers.",
  },
  {
    step: "3",
    title: "Know where you stand",
    body: "See your understanding on the CAPS seven-level scale for every topic and chapter. Weak topics get a Revise button that opens the AI tutor on that topic.",
  },
];

export const FEATURES = [
  {
    icon: "roadmap",
    title: "Term roadmap",
    body: "Chapters laid out in the order your teacher covers them. Mark topics done, in progress or skipped for now, and watch your term fill in.",
  },
  {
    icon: "lesson",
    title: "Animated lessons",
    body: "Lessons are drawn as clear, interactive diagrams. Play, pause, replay, slow down or speed up, and follow the subtitles as you go.",
  },
  {
    icon: "quiz",
    title: "Topic quizzes",
    body: "Five multiple-choice questions at three levels, shown in a fresh order every time. Every answer comes with its working.",
  },
  {
    icon: "tutor",
    title: "AI tutor",
    body: "Ask a question from inside the lesson you are on. The tutor knows your grade, subject and topic, and can replay the exact scene you need.",
  },
  {
    icon: "gauge",
    title: "Understanding levels",
    body: "See your level on the CAPS seven-level scale for each topic and chapter. It updates as you practise and shows a level once you have answered enough questions.",
  },
  {
    icon: "exams",
    title: "Exam prep",
    body: "Countdown to your next term test, practice papers with memos, and mixed quizzes picked from the topics you need most.",
  },
  {
    icon: "community",
    title: "Learn together",
    body: "A community for every grade and subject. Share questions, swap tips and learn from classmates on the same journey, under posts from the Qwilo team.",
  },
  {
    icon: "progress",
    title: "Progress that follows you",
    body: "Sign in with Google or Apple and your progress goes with you between phone, tablet and laptop.",
  },
];

export const SCREENS = [
  {
    id: "roadmap",
    label: "Term roadmap",
    caption: "Chapters in teaching order, with the status of every topic.",
    src: "/screens/roadmap.png" as string | undefined,
  },
  {
    id: "lesson",
    label: "Lesson player",
    caption: "An animated lesson with subtitles. Pause, replay or ask the tutor.",
    src: "/screens/lesson.png",
  },
  {
    id: "quiz",
    label: "Topic quiz",
    caption: "Five questions at three levels, with an instant score and the next level to try.",
    src: "/screens/quiz.png",
  },
  {
    id: "exams",
    label: "Exams",
    caption: "Term test countdown, practice papers and quizzes built from the topics you need most.",
    src: "/screens/exams.png",
  },
];

export const CURRICULUM = {
  intro:
    "QWILO follows the Department of Basic Education's CAPS curriculum and the annual teaching plan for each grade. Content is loaded by the QWILO team, so a topic appears when it is due in class.",
  grades: [
    { grade: "Grade 10", subjects: ["Mathematics", "Physical Sciences", "Life Sciences"] },
    { grade: "Grade 11", subjects: ["Mathematics", "Physical Sciences", "Life Sciences"] },
    { grade: "Grade 12", subjects: ["Mathematics", "Physical Sciences", "Life Sciences"] },
  ],
  example: {
    title: "Example: Grade 10 Physical Sciences, Waves",
    body: "A transverse wave is one where the particles move at right angles to the direction the wave travels. Watch one particle in the lesson move only up and down, then answer a quiz on the difference between transverse and longitudinal waves.",
  },
};

/* What learners get from the community. Written as benefits. */
export const COMMUNITY_POINTS = [
  {
    title: "A community for your subject",
    body: "Each grade and subject has its own community, so you learn alongside the people taking the same subjects as you.",
  },
  {
    title: "Ask and answer together",
    body: "Post a question, help someone else with theirs, and see how classmates work through the same problem.",
  },
  {
    title: "Posts you can trust",
    body: "Discussions, tips and notices come from the QWILO team, so you always know where the information comes from.",
  },
  {
    title: "Study help before every test",
    body: "Pinned notices and past-paper discussions keep the whole class on track in the lead-up to term tests.",
  },
  {
    title: "Simple sign-in",
    body: "Use the Google or Apple account you already have. There is nothing extra to set up.",
  },
  {
    title: "Progress everywhere",
    body: "Pick up where you left off on your phone, tablet or laptop.",
  },
];

export const FAQS = [
  {
    q: "Is QWILO free?",
    a: "Downloading the app and learning the core content are free. Some extras may need a subscription later. Pricing will be published before launch.",
  },
  {
    q: "Which grades and subjects does it cover?",
    a: "Grades 10 to 12 Mathematics, Physical Sciences and Life Sciences, following CAPS. More subjects and grades are added as the content is ready.",
  },
  {
    q: "Can I study without data?",
    a: "Yes. Download a term over Wi-Fi and your lessons, quizzes and progress work on the phone without data. The AI tutor and posting to the community need a connection.",
  },
  {
    q: "How do I sign in?",
    a: "With the Google or Apple account you already use. You do not need to create a new password or share a phone number.",
  },
  {
    q: "Who can I learn with?",
    a: "Learners in your grade and subject. Everyone in the community is working through the same topics, so you can ask questions and see how others solve them.",
  },
  {
    q: "Who posts in the community?",
    a: "The QWILO team posts discussions, tips and notices. Learners add questions, answers and comments under them.",
  },
  {
    q: "Does QWILO replace my teacher or textbook?",
    a: "No. QWILO is a study companion. It follows the same syllabus as your class, so it works alongside your teacher and textbook.",
  },
  {
    q: "What information does QWILO use?",
    a: "Only what the app needs to run your lessons, quizzes and community. Read the privacy policy for the full details.",
  },
  {
    q: "Which devices will it work on?",
    a: "iPhone and Android phones first, with a web version that works on phone, tablet and laptop.",
  },
];

export const FOOTER_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/child-safety", label: "Learn together" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/community-guidelines", label: "Community guidelines" },
  { href: "/account-deletion", label: "Delete account" },
];
