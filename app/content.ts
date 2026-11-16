/* All marketing copy in one place. Pages and components read from here, so the
   wording can be reviewed as a whole and changed without touching layout code.

   Voice: warm, confident and direct. Speak to the learner and to the parent or sibling
   who wants them to succeed. Lead with the feeling of understanding and the sense of
   progress, never with fear or with what a learner is missing.

   Accuracy rule: only claim what the app does or is being built to do. Voice narration is
   not live yet, so the copy says "subtitles" and never promises a narrator. The AI tutor
   needs a connection. Subjects and grades follow the curriculum drafts (Grades 10–12,
   Mathematics, Physical Sciences and Life Sciences); confirm before launch. */

export const HERO = {
  eyebrow: "A study companion for high school learners",
  headline: "The subject that felt hard? Let it click.",
  sub: "QWILO turns your school subjects into lessons you can see. Watch each idea unfold, ask a tutor to explain it again, and check what you know. Built for the learner who wants to understand, not just pass.",
  primaryCta: "Get the app",
  secondaryCta: "See how it works",
};

/* The idea behind the app, in three promises. */
export const POSITIONING = {
  title: "Understanding, one step at a time",
  intro: "Every lesson builds on the one before it, so each idea connects and stays with you, and every step forward feels earned.",
  points: [
    {
      title: "See it happen",
      body: "Animated experiments and diagrams show you what happens and why, right on the phone you already carry.",
    },
    {
      title: "Confidence that grows",
      body: "Quizzes show your working and your progress, so you always know what you have mastered and what is next.",
    },
    {
      title: "Study anywhere",
      body: "Download a term over Wi-Fi and study at home, on the bus or anywhere else, with lessons that work without data.",
    },
  ],
};

/* The AI tutor promise, in three steps. Highlighted on the home page. */
export const TUTOR = {
  title: "Stuck? Ask again, as often as you need.",
  intro: "Your AI tutor explains an idea again, in a new way, for as long as it takes. There is no judgement and no rush, only the next step to understanding.",
  steps: [
    {
      title: "Ask anything",
      body: "Ask about any idea in the lesson you are on. The tutor knows your grade, subject and topic, and explains it step by step.",
    },
    {
      title: "Hear it another way",
      body: "Ask from a different angle, as many times as you need, until the idea clicks and you can explain it in your own words.",
    },
    {
      title: "Prove it to yourself",
      body: "When you feel ready, take a quiz in the app and see how far you have come.",
    },
  ],
};

export const STORE_NOTE = "Coming soon to the App Store and Google Play. Free to download.";

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Choose the grade and subjects",
    body: "Pick your grade and your subjects. The roadmap follows the CAPS teaching plan for each term, so you always know exactly what your class is covering.",
  },
  {
    step: "2",
    title: "Watch the idea come alive",
    body: "Each topic opens with short animated lessons and subtitles on by default. Then a quiz with instant feedback and worked answers.",
  },
  {
    step: "3",
    title: "See the progress you are making",
    body: "Track your understanding on the CAPS seven-level scale for every topic and chapter. Anything that needs more attention gets a Revise button that opens the AI tutor on that topic.",
  },
];

export const FEATURES = [
  {
    icon: "roadmap",
    title: "Term roadmap",
    body: "Every chapter in the order your teacher covers it. Mark topics done, in progress or for later, and watch the term come together.",
  },
  {
    icon: "lesson",
    title: "Animated lessons",
    body: "Clear, interactive diagrams that show how things work. Play, pause, replay, slow down or speed up, and follow the subtitles as you go.",
  },
  {
    icon: "quiz",
    title: "Topic quizzes",
    body: "Five multiple-choice questions at three levels, in a fresh order every time, with the working shown for every answer.",
  },
  {
    icon: "tutor",
    title: "AI tutor",
    body: "Ask a question from inside the lesson you are on. The tutor knows your grade, subject and topic, and can replay the exact scene you need.",
  },
  {
    icon: "gauge",
    title: "Understanding levels",
    body: "See your level on the CAPS seven-level scale for each topic and chapter. Watch it grow as you practise.",
  },
  {
    icon: "exams",
    title: "Exam prep",
    body: "A countdown to the next term test, past papers with memoranda, and mixed quizzes built from the topics that need the most practice.",
  },
  {
    icon: "community",
    title: "Learn together",
    body: "A community for each grade and subject. Share questions, swap tips and learn alongside classmates on the same journey, with posts from the QWILO team.",
  },
  {
    icon: "progress",
    title: "Progress that follows you",
    body: "Sign in with Google or Apple, and the progress goes with you from phone to tablet to laptop.",
  },
];

export const SCREENS = [
  {
    id: "roadmap",
    label: "Term roadmap",
    caption: "Every chapter in teaching order, with the status of each topic.",
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
    caption: "Five questions at three levels, an instant score and the next level to aim for.",
    src: "/screens/quiz.png",
  },
  {
    id: "exams",
    label: "Exams",
    caption: "A term test countdown, past papers and quizzes built from the topics that need the most practice.",
    src: "/screens/exams.png",
  },
];

export const CURRICULUM = {
  intro:
    "QWILO follows the Department of Basic Education's CAPS curriculum and the annual teaching plan for each grade. What your child studies here matches what they are learning in class this term.",
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
    body: "Each grade and subject has its own community, so you learn alongside the classmates taking the same subjects.",
  },
  {
    title: "Ask, answer and grow together",
    body: "Post a question, help someone with theirs, and see how others work through the same problem.",
  },
  {
    title: "Posts you can trust",
    body: "Discussions, tips and notices come from the QWILO team, so the information is always clear about where it comes from.",
  },
  {
    title: "Ready for every test",
    body: "Pinned notices and past-paper discussions keep the whole class prepared in the lead-up to term tests.",
  },
  {
    title: "Simple sign-in",
    body: "Use the Google or Apple account you already have. There is nothing extra to set up.",
  },
  {
    title: "Progress everywhere",
    body: "Pick up exactly where you left off on your phone, tablet or laptop.",
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
    a: "With the Google or Apple account you already use. There is no new password to create and no phone number to share.",
  },
  {
    q: "Who can my child learn with?",
    a: "Other learners in the same grade and subject. Everyone in the community is working through the same topics, so questions are answered by people on the same journey.",
  },
  {
    q: "Who posts in the community?",
    a: "The QWILO team posts discussions, tips and notices. Learners add questions, answers and comments under them.",
  },
  {
    q: "Does QWILO replace the teacher or the textbook?",
    a: "No. QWILO is a study companion. It follows the same syllabus as the class, so it works alongside the teacher and the textbook.",
  },
  {
    q: "What information does QWILO use?",
    a: "Only what the app needs to run lessons, quizzes and the community. Read the privacy policy for the full details.",
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
