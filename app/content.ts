/* All site copy in one place. Pages and components read from here.

   Voice: plain and descriptive. Describe what the app contains and how a learner uses it,
   and let the reader decide. No slogans, no urgency, no selling lines.

   Accuracy rule: only describe what the app does or is being built to do. Voice narration
   is not live yet, so the copy says "subtitles" and never promises a narrator. The AI tutor
   needs a connection. Subjects and grades follow the curriculum drafts (Grades 10–12,
   Mathematics, Physical Sciences and Life Sciences); confirm before launch. */

export const HERO = {
  eyebrow: "A study app for high-performing learners",
  headline: "QWILO is a study companion for your school subjects.",
  sub: "Short animated lessons, quizzes and an AI tutor, all following the CAPS curriculum.",
  primaryCta: "Get the app",
  secondaryCta: "See how it works",
};

/* The AI tutor, described as it works. */
export const TUTOR = {
  title: "The AI tutor",
  intro: "Ask a question about the lesson you are watching. The answer comes back as a short animation.",
  steps: [
    {
      title: "Ask about the lesson",
      body: "The tutor knows which lesson, topic and grade you are on, so its explanation fits what you are watching.",
    },
    {
      title: "Ask again in another way",
      body: "You can ask the same question as many times as you like, and the tutor will explain it from a different angle.",
    },
    {
      title: "Check with a quiz",
      body: "When you are ready, the quiz for that topic shows what you understand and what still needs work.",
    },
  ],
};

export const STORE_NOTE = "Coming soon to the App Store and Google Play.";

export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Choose your grade and subjects",
    body: "Each term's roadmap lists the topics in the order your class covers them.",
  },
  {
    step: "2",
    title: "Watch a lesson, then the quiz",
    body: "Each topic has short animated lessons with subtitles. A quiz follows, with instant feedback and worked answers.",
  },
  {
    step: "3",
    title: "Check and revise",
    body: "Quiz results show where you stand. Topics that need more work get a Revise button that opens the tutor.",
  },
];

export const FEATURES = [
  {
    icon: "roadmap",
    title: "Term roadmap",
    body: "The chapters of a term in the order they are taught. Each topic can be marked done, in progress or for later.",
  },
  {
    icon: "lesson",
    title: "Animated lessons",
    body: "Diagrams that show how something works. You can play, pause, replay, change the speed, and follow the subtitles.",
  },
  {
    icon: "quiz",
    title: "Topic quizzes",
    body: "Five multiple-choice questions with four options each, at easy, medium or advanced level. The options are shown in a different order each time, and every answer shows its working.",
  },
  {
    icon: "tutor",
    title: "AI tutor",
    body: "A question from inside a lesson. The tutor knows the grade, subject and topic, and can replay the exact scene.",
  },
  {
    icon: "gauge",
    title: "Understanding levels",
    body: "Your level on the CAPS seven-level scale for each topic and chapter. It changes as you practise.",
  },
  {
    icon: "exams",
    title: "Exam preparation",
    body: "The date of the next term test, past papers with memoranda, and quizzes built from the topics that need practice.",
  },
  {
    icon: "community",
    title: "Subject community",
    body: "A community for each grade and subject. Learners ask questions and answer each other, and the QWILO team posts discussions and notices.",
  },
  {
    icon: "progress",
    title: "Progress across devices",
    body: "Your progress is the same on your phone, tablet and laptop.",
  },
];

export const SCREENS = [
  {
    id: "roadmap",
    label: "Term roadmap",
    caption: "The chapters of a term in teaching order, with the status of each topic.",
    src: "/screens/roadmap.png" as string | undefined,
  },
  {
    id: "lesson",
    label: "Lesson player",
    caption: "A lesson with subtitles. Pause, replay or ask the tutor.",
    src: "/screens/lesson.png",
  },
  {
    id: "quiz",
    label: "Topic quiz",
    caption: "Five questions at three levels, with an instant score.",
    src: "/screens/quiz.png",
  },
  {
    id: "exams",
    label: "Exams",
    caption: "The term test date, past papers, and quizzes for the topics that need practice.",
    src: "/screens/exams.png",
  },
];

export const CURRICULUM = {
  intro:
    "QWILO follows the Department of Basic Education's CAPS curriculum and the annual teaching plan for each grade. Content is loaded by the QWILO team, and each topic appears in the term it is taught.",
  grades: [
    { grade: "Grade 10", subjects: ["Mathematics", "Physical Sciences", "Life Sciences"] },
    { grade: "Grade 11", subjects: ["Mathematics", "Physical Sciences", "Life Sciences"] },
    { grade: "Grade 12", subjects: ["Mathematics", "Physical Sciences", "Life Sciences"] },
  ],
  example: {
    title: "Example: Grade 10 Physical Sciences, Waves",
    body: "A transverse wave is one where the particles move at right angles to the direction the wave travels. The lesson shows a single particle moving only up and down as the wave passes.",
  },
};

/* What the community is, in plain terms. */
export const COMMUNITY_POINTS = [
  {
    title: "One community per subject",
    body: "Each grade and subject has its own community, for the learners taking those subjects.",
  },
  {
    title: "Questions and answers",
    body: "Learners post a question, and others answer it. Everything is visible to the community.",
  },
  {
    title: "Posts from the QWILO team",
    body: "Discussions, tips and notices are posted by the QWILO team, and the post shows who wrote it.",
  },
  {
    title: "Notices before tests",
    body: "Notices from the QWILO team can be pinned to the top of a community, and each one ends on a set date.",
  },
];

export const FAQS = [
  {
    q: "Is QWILO free?",
    a: "Downloading the app is free, and so is reading and taking part in the community. The second and third challenge levels, and attaching files to community posts, will need a subscription. Pricing will be published before launch.",
  },
  {
    q: "Which grades and subjects does it cover?",
    a: "Grades 10 to 12 Mathematics, Physical Sciences and Life Sciences, following CAPS. More subjects and grades are added as the content is ready.",
  },
  {
    q: "Can I study without data?",
    a: "On the phone app, a term can be downloaded over Wi-Fi, and its lessons, quizzes and progress then work without data. The AI tutor, new downloads and community posts need a connection. The web version needs a connection for now.",
  },
  {
    q: "How do I sign in?",
    a: "With the Google or Apple account you already use. There is no password to create and no phone number to share.",
  },
  {
    q: "Who can learners talk to?",
    a: "Other learners in the same grade and subject, in the community. Posts there come from the QWILO team.",
  },
  {
    q: "Does QWILO replace the teacher or the textbook?",
    a: "No. QWILO follows the same syllabus as the class, so it is used alongside the teacher and the textbook.",
  },
  {
    q: "What information does QWILO use?",
    a: "Only what the app needs to run lessons, quizzes and the community. The privacy policy has the full details.",
  },
  {
    q: "Which devices will it work on?",
    a: "iPhone and Android phones first, with a web version for phone, tablet and laptop.",
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
