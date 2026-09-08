// ============================================================
// ACADEMIC EXCHANGE FORUM — content file
// ============================================================
// To add new material: copy one of the { ... } blocks below,
// paste it inside the right category's array, fill in your
// details, and save. Then re-upload / push this file.
//
// category must be one of: "weekly", "notes", "exercises", "past"
// date format: "MMM D, YYYY"  e.g. "Sep 5, 2026"
// link is optional — paste a Google Drive / WhatsApp / PDF link
//
// To add an interactive quiz under Exercises: add a quiz object
// to QUIZZES below, then add an exercises entry with a matching
// "quizId" instead of (or alongside) a link.
// ============================================================

const MATERIALS = {

  weekly: [
    {
      title: "Example: Elasticity practice quiz",
      course: "BCPC118",
      week: "Week 4",
      date: "Sep 5, 2026",
      desc: "10 questions on price and income elasticity, worked answers included.",
      link: ""
    }
  ],

  notes: [
    {
      title: "BCPC 305 — Principles of Leadership: Course Overview & Study Guide",
      course: "BCPC305",
      week: "",
      date: "Sep 8, 2026",
      desc: "Full syllabus explained — objectives, all 12 weeks, assessment breakdown, and reading list.",
      link: "https://asare984.github.io/BCPC305_Course_Overview_AEF.pdf"
    },
    {
      title: "BCPC 305 — Week 1: Foundations of Leadership (Simplified)",
      course: "BCPC305",
      week: "Week 1",
      date: "Sep 8, 2026",
      desc: "The Week 1 lecture rewritten in plain language, with a short written test after each section.",
      link: "https://asare984.github.io/BCPC305_Week1_Foundations_AEF.pdf"
    },
    {
      title: "Example: Business Statistics — simplified guide",
      course: "BCPC112",
      week: "Regression & correlation",
      date: "Sep 5, 2026",
      desc: "Rebranded, simplified version of the lecture slides.",
      link: ""
    }
  ],

  exercises: [
    {
      title: "Week 1 — Foundations of Leadership: Interactive Quiz",
      course: "BCPC305",
      week: "Week 1",
      date: "Sep 8, 2026",
      desc: "10 multiple-choice questions covering the whole of Week 1, with instant feedback after each answer.",
      link: "",
      quizId: "week1-foundations"
    },
    {
      title: "Example: Referencing & plagiarism IA pack",
      course: "BGEC106",
      week: "",
      date: "Sep 5, 2026",
      desc: "Practice questions with model answers.",
      link: ""
    }
  ],

  past: [
    {
      title: "Example: BCPC118 trial paper — full solutions",
      course: "BCPC118",
      week: "Sem 1 Trial",
      date: "Sep 5, 2026",
      desc: "16-question trial paper covering demand/supply, elasticity, and cost curves, fully worked.",
      link: ""
    }
  ]

};

// ============================================================
// Interactive quizzes — shown under Exercises when an entry
// has a matching "quizId".
// ============================================================
const QUIZZES = {

  "week1-foundations": {
    title: "Week 1 — Foundations of Leadership",
    questions: [
      {
        q: "Northouse's (2004) definition shifted the focus of leadership from \"personality\" to what?",
        options: ["Position", "Process", "Power", "Profit"],
        correct: 1,
        explain: "Northouse reframed leadership as a process of interaction between leader and followers, not just a set of personal traits."
      },
      {
        q: "Which of these is NOT one of Northouse's (2001) four common elements of leadership?",
        options: ["Process", "Influence", "Profit", "Goal attainment"],
        correct: 2,
        explain: "The four are process, influence, group context, and goal attainment — profit isn't one of them."
      },
      {
        q: "Which statement about leadership influence is correct?",
        options: [
          "It only flows from the leader to the followers",
          "It is multidirectional — followers also influence leaders",
          "It only exists in formal organisations",
          "It requires a job title"
        ],
        correct: 1,
        explain: "Leadership is a two-way interaction; followers shape and influence leaders too, not just the reverse."
      },
      {
        q: "Personal (Individual) level leadership is mainly about:",
        options: [
          "Directing a large organisation",
          "Leading through personal example and self-discipline",
          "Mobilising global resources",
          "Managing several departments"
        ],
        correct: 1,
        explain: "At the personal level, your influence comes from the example you set through your own behaviour and discipline."
      },
      {
        q: "Which four competencies are required at the Organisational (Managerial) level?",
        options: [
          "Technical, Social, Conceptual, Spiritual",
          "Financial, Legal, Political, Social",
          "Strategic, Tactical, Operational, Financial",
          "Technical only"
        ],
        correct: 0,
        explain: "The slides list Technical, Social, Conceptual, and Spiritual competence as needed to harmonise a whole organisation's performance."
      },
      {
        q: "A leader who mobilises global resources to create long-term value for society is operating at which level?",
        options: ["Group", "Personal", "Organisational", "Strategic"],
        correct: 3,
        explain: "This describes Strategic leadership — it transcends time and place, leaving lasting impact."
      },
      {
        q: "Which of these is a function of leadership, not management?",
        options: ["Administer", "Maintain control", "Inspire a shared vision", "Accept the status quo"],
        correct: 2,
        explain: "Inspiring a shared vision is a leadership function; the others describe typical managerial behaviour."
      },
      {
        q: "\"Management is doing things right; leadership is doing the right things.\" This distinguishes:",
        options: ["Efficiency vs. effectiveness", "Power vs. authority", "Position vs. persuasion", "Profit vs. purpose"],
        correct: 0,
        explain: "Management = efficiency (doing things right). Leadership = effectiveness (doing the right things)."
      },
      {
        q: "Managers, according to the slides, tend to ask:",
        options: ["What and why?", "How and when?", "Why not?", "Who and where?"],
        correct: 1,
        explain: "Managers tend to ask \"how and when,\" focused on execution — leaders ask \"what and why,\" focused on direction."
      },
      {
        q: "Which behaviour is typical of a leader, not a manager?",
        options: ["Maintain control", "Imitate", "Challenge the status quo", "Accept the status quo"],
        correct: 2,
        explain: "Leaders challenge the status quo and originate change; managers tend to maintain and imitate what already works."
      }
    ]
  }

};
