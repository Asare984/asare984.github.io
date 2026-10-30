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
// To add a quiz: add it to QUIZZES below, then list it under the
// right course in COURSES so it shows up in the Quizzes tab,
// grouped week by week.
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
      title: "BCPC 305 — Week 2: Theories of Leadership (Simplified)",
      course: "BCPC305",
      week: "Week 2",
      date: "Oct 11, 2026",
      desc: "Great Man, Trait, Managerial Grid, Pygmalion and Golem theories in plain language, with self-check questions.",
      link: "https://asare984.github.io/bcpc305-notes.html#week-2"
    },
    {
      title: "BCPC 305 — Week 3: Contingency Theories (Simplified)",
      course: "BCPC305",
      week: "Week 3",
      date: "Oct 11, 2026",
      desc: "Fiedler, Hersey and Blanchard, and Path-Goal explained step by step, with tables and examples.",
      link: "https://asare984.github.io/bcpc305-notes.html#week-3"
    },
    {
      title: "BCPC 305 — Week 4: Leadership in Practice and Governance (Simplified)",
      course: "BCPC305",
      week: "Week 4",
      date: "Oct 11, 2026",
      desc: "The five practices of exemplary leaders, organisational culture, social responsibility and leadership in governance.",
      link: "https://asare984.github.io/bcpc305-notes.html#week-4"
    },
    {
      title: "BCPC 305 — Week 5: Trust and Power in Leadership (Simplified)",
      course: "BCPC305",
      week: "Week 5",
      date: "Oct 11, 2026",
      desc: "How trust is built and lost, and the seven types of power, with self-check questions.",
      link: "https://asare984.github.io/bcpc305-notes.html#week-5"
    },
    {
      title: "BCPC 305 — Week 6: Traditional Leadership (Simplified)",
      course: "BCPC305",
      week: "Week 6",
      date: "Oct 11, 2026",
      desc: "Chieftaincy in Ghana: history, the 1992 Constitution articles, roles of chiefs and the modern debate.",
      link: "https://asare984.github.io/bcpc305-notes.html#week-6"
    },
    {
      title: "BCPC 305 — Week 7: Leadership Styles and Skills (Simplified)",
      course: "BCPC305",
      week: "Week 7",
      date: "Oct 11, 2026",
      desc: "Authoritarian, democratic, laissez-faire, transformational and transactional styles, plus the four groups of leadership skills.",
      link: "https://asare984.github.io/bcpc305-notes.html#week-7"
    },
    {
      title: "BCPC 305 — Week 9: Decision-Making Models and Styles (Simplified)",
      course: "BCPC305",
      week: "Week 9",
      date: "Oct 11, 2026",
      desc: "Cognitive Resource Model, Vroom and Yetton's A1 to G2 styles, and rational versus incremental decisions.",
      link: "https://asare984.github.io/bcpc305-notes.html#week-9"
    },
    {
      title: "BCPC 305 — Week 10: Leading Teams, Groups and Crisis (Simplified)",
      course: "BCPC305",
      week: "Week 10",
      date: "Oct 11, 2026",
      desc: "Group versus team, the five stages of group development, social loafing, groupthink and leading in a crisis.",
      link: "https://asare984.github.io/bcpc305-notes.html#week-10"
    },
    {
      title: "BCPC 305 — Week 11: Ethical Leadership and Values (Simplified)",
      course: "BCPC305",
      week: "Week 11",
      date: "Oct 11, 2026",
      desc: "Ethics, morality and values, Northouse's five principles of ethical leadership, and who enforces accountability in Ghana.",
      link: "https://asare984.github.io/bcpc305-notes.html#week-11"
    },
    ],


  

  exercises: [
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
// Courses — powers the "Quizzes" tab. Tap a course to see all
// its quizzes listed week by week, in order.
// ============================================================
const COURSES = {

  "BCPC305": {
    name: "Principles of Leadership",
    quizzes: [
      { week: "Week 1", title: "Foundations of Leadership", quizId: "week1-foundations" },
      { week: "Week 2", title: "Theories of Leadership", quizId: "week2-theories" },
      { week: "Week 3", title: "Contingency Theories of Leadership", quizId: "week3-contingency" },
      { week: "Week 4", title: "Leadership in Practice & Governance", quizId: "week4-governance" },
      { week: "Week 5", title: "Trust and Power in Leadership", quizId: "week5-trust-power" },
      { week: "Week 6", title: "Traditional Leadership", quizId: "week6-traditional" },
      { week: "Week 7", title: "Leadership Styles and Skills", quizId: "week7-styles-skills" },
      { week: "Week 9", title: "Decision-Making Models and Styles", quizId: "week9-decision-making" },
      { week: "Week 10", title: "Leading Teams and Crisis Management", quizId: "week10-teams-crisis" },
      { week: "Week 11", title: "Ethical Leadership and Values", quizId: "week11-ethics" }
    ]
  }

};

// ============================================================
// Interactive quizzes — grouped week by week under Quizzes,
// via the COURSES object above.
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
  },

  "week2-theories": {
    title: "Week 2 — Theories of Leadership",
    questions: [
      {
        q: "According to the Great Man Theory, leaders are:",
        options: [
          "Made entirely through training",
          "Born with natural leadership abilities",
          "Selected by committee vote",
          "Purely a product of their environment"
        ],
        correct: 1,
        explain: "The Great Man Theory holds that leadership ability is innate — leaders are born, not made."
      },
      {
        q: "Which researcher's 1948 study found no consistent set of traits that separated leaders from non-leaders across situations?",
        options: ["Stogdill", "Zaccaro", "Kirkpatrick", "Mann"],
        correct: 0,
        explain: "Stogdill (1948) is one of the classic criticisms of Trait Theory — he found trait consistency didn't hold across different situations."
      },
      {
        q: "In the Managerial Grid, a leader scoring (9,1) — high concern for production, low concern for people — is using which style?",
        options: ["Country Club Management", "Impoverished Management", "Task / Authority-Compliance Management", "Team Management"],
        correct: 2,
        explain: "(9,1) is the \"Produce or Perish\" style — authoritarian, output-focused, low regard for people's needs."
      },
      {
        q: "Which Managerial Grid style is considered the most effective, balancing high concern for both people and production?",
        options: ["Middle-of-the-Road (5,5)", "Sound / Team Management (9,9)", "Country Club (1,9)", "Impoverished (1,1)"],
        correct: 1,
        explain: "(9,9) Team Management is the ideal style — high concern for people AND production, driving both morale and performance."
      },
      {
        q: "The Pygmalion Effect describes a situation where:",
        options: [
          "Low expectations lead to poor performance",
          "High expectations lead to improved performance",
          "Leaders are born, not made",
          "People and production concerns are balanced"
        ],
        correct: 1,
        explain: "The Pygmalion Effect is the self-fulfilling prophecy where believing in someone's potential actually helps them perform better."
      },
      {
        q: "The Golem Effect is best described as:",
        options: [
          "The self-fulfilling prophecy of high expectations improving performance",
          "The opposite of the Pygmalion Effect — low expectations leading to poor performance",
          "A leadership style based on production concern",
          "A theory about traits"
        ],
        correct: 1,
        explain: "The Golem Effect is the negative mirror of the Pygmalion Effect: doubting someone's ability tends to make them perform worse."
      },
      {
        q: "Which two dimensions does the Managerial Grid measure?",
        options: ["Intelligence and confidence", "Concern for people and concern for production", "Trust and power", "Vision and resources"],
        correct: 1,
        explain: "The grid plots leaders on two axes: concern for people (Y) and concern for production (X), each from 1 (low) to 9 (high)."
      },
      {
        q: "Country Club Management (1,9) leaders prioritise:",
        options: [
          "Output over relationships",
          "Employee comfort and relationships over production",
          "An equal balance of both",
          "Neither people nor production"
        ],
        correct: 1,
        explain: "Country Club Management creates a friendly, low-pressure environment, but often at the cost of productivity."
      },
      {
        q: "Which of these is a genuine criticism of Trait Theory raised in the lecture?",
        options: [
          "It focuses too much on situational factors",
          "No universally accepted set of traits defines all effective leaders",
          "It ignores personality entirely",
          "It only applies to military leadership"
        ],
        correct: 1,
        explain: "A core criticism is that despite decades of research, no single, universal list of \"leadership traits\" has ever been agreed on."
      },
      {
        q: "Who developed the Managerial Grid (Leadership Grid) model?",
        options: ["Robert Blake and Jane Mouton", "Stogdill and Mann", "Kirkpatrick and Locke", "Zaccaro and Kemp"],
        correct: 0,
        explain: "Blake and Mouton developed the model in 1964, later revised and renamed the Leadership Grid."
      }
    ]
  },

  "week3-contingency": {
    title: "Week 3 — Contingency Theories of Leadership",
    questions: [
      {
        q: "Fiedler's theory holds that a leader's style is:",
        options: ["Flexible and easily changed", "Fixed, and measured using the Least-Preferred Co-worker (LPC) scale", "Determined entirely by follower maturity", "Based on the five practices of exemplary leadership"],
        correct: 1,
        explain: "Fiedler assumed leadership style is fixed — if it doesn't fit the situation, you change the leader, not the style."
      },
      {
        q: "A high LPC score in Fiedler's model indicates a leader is:",
        options: ["Task-oriented", "Relationship-oriented", "Autocratic", "Delegating"],
        correct: 1,
        explain: "High LPC leaders describe even difficult co-workers positively — they're relationship-oriented."
      },
      {
        q: "According to Fiedler, task-oriented (low LPC) leaders perform best in:",
        options: ["Only moderately favourable situations", "Very favourable or very unfavourable situations", "Situations with high follower maturity only", "Situations requiring pure delegation"],
        correct: 1,
        explain: "Task-oriented leaders excel at the extremes; relationship-oriented leaders do best in the moderate middle ground."
      },
      {
        q: "In Hersey and Blanchard's model, a follower who is \"unable but willing\" (D2) should be led with which style?",
        options: ["S1 Telling", "S2 Selling", "S3 Participating", "S4 Delegating"],
        correct: 1,
        explain: "D2 followers need direction plus encouragement — that's S2 (Selling/Coaching)."
      },
      {
        q: "Which leadership style fits a highly competent, highly committed follower (D4) in Hersey-Blanchard's model?",
        options: ["Telling", "Selling", "Participating", "Delegating"],
        correct: 3,
        explain: "D4 followers are able and willing — the leader can delegate and step back."
      },
      {
        q: "Path-Goal Theory was built on which motivational theory?",
        options: ["Trait Theory", "Expectancy Theory", "Great Man Theory", "Managerial Grid"],
        correct: 1,
        explain: "Path-Goal Theory (House, 1971) is grounded in Expectancy Theory — effort leads to performance leads to reward."
      },
      {
        q: "Which Path-Goal leadership style involves setting challenging goals and expecting high performance?",
        options: ["Directive", "Supportive", "Participative", "Achievement-oriented"],
        correct: 3,
        explain: "Achievement-oriented leaders set challenging goals and show confidence in followers' ability to reach them."
      },
      {
        q: "A follower with an internal locus of control (believes their own effort determines outcomes) tends to prefer which style, per Path-Goal Theory?",
        options: ["Directive", "Participative", "Supportive only", "Autocratic"],
        correct: 1,
        explain: "Internal-locus followers want a say in decisions — they prefer participative leadership."
      },
      {
        q: "Which limitation is shared across Fiedler's, Hersey-Blanchard's, and Path-Goal theories, according to the lecture?",
        options: ["They are too simple to apply", "They involve many variables that are difficult to apply or measure consistently", "They ignore the leader entirely", "They only apply to the military"],
        correct: 1,
        explain: "All three contingency models face criticism for complexity and difficulty in consistent real-world measurement."
      },
      {
        q: "What is the central idea shared by all three contingency theories covered in Week 3?",
        options: ["Leaders are born, not made", "There is no one best leadership style — effectiveness depends on the situation", "All leaders should be delegative", "Leadership style should never change"],
        correct: 1,
        explain: "Contingency theory's core claim: leadership effectiveness depends on matching style to the situation, not one universal \"best\" style."
      }
    ]
  },

  "week4-governance": {
    title: "Week 4 — Leadership in Practice & Governance",
    questions: [
      {
        q: "According to Kouzes and Posner's \"The Leadership Challenge,\" effective leadership is best understood through:",
        options: ["Personality traits", "Observable behaviours and practices", "Formal job titles", "Family background"],
        correct: 1,
        explain: "Kouzes and Posner's research focused on consistent patterns of observable behaviour, not personality."
      },
      {
        q: "Which of these is NOT one of the \"5 Practices of Exemplary Leadership\"?",
        options: ["Model the Way", "Inspire a Shared Vision", "Maximise Profit", "Encourage the Heart"],
        correct: 2,
        explain: "The five practices are Model the Way, Inspire a Shared Vision, Challenge the Process, Enable Others to Act, and Encourage the Heart — profit isn't one of them."
      },
      {
        q: "\"Challenge the Process\" as a leadership practice mainly involves:",
        options: ["Avoiding risk entirely", "Searching for opportunities to change the status quo and innovate", "Delegating all decisions", "Maintaining existing procedures"],
        correct: 1,
        explain: "Leaders who challenge the process actively look for ways to improve the organisation, taking risks along the way."
      },
      {
        q: "Which leadership development area involves managing one's own emotions and empathising with others?",
        options: ["Strategic thinking", "Emotional intelligence (EQ)", "Conflict resolution", "Decision-making"],
        correct: 1,
        explain: "Emotional intelligence is specifically about understanding and managing emotions — your own and others'."
      },
      {
        q: "In governance, \"Ensures Accountability\" as a leadership principle means:",
        options: ["Leaders avoid public scrutiny", "Leaders hold themselves and their teams responsible, building public trust", "Leaders centralise all decision-making", "Leaders ignore citizen feedback"],
        correct: 1,
        explain: "Accountability is about leaders taking responsibility for outcomes, which builds legitimacy and public trust."
      },
      {
        q: "Which organisational culture type emphasises teamwork, collaboration, and open communication?",
        options: ["Hierarchical culture", "Collegial culture", "Results-oriented culture", "Customer-centric culture"],
        correct: 1,
        explain: "Collegial culture is specifically defined around teamwork and open collaboration."
      },
      {
        q: "According to the lecture, ineffective leadership in governance can lead to:",
        options: ["Increased citizen participation", "Political stability", "Corruption and policy failure", "Stronger rule of law"],
        correct: 2,
        explain: "Poor leadership breaks down accountability and ethics, leading to corruption, instability, and wasted resources."
      },
      {
        q: "\"Encourages Participation\" in governance refers to:",
        options: ["Excluding citizens from decision-making", "Creating inclusive decision-making processes that empower citizens", "Centralising power in one leader", "Reducing transparency"],
        correct: 1,
        explain: "Participation strengthens democracy by involving citizens and civil society in decisions that affect them."
      },
      {
        q: "Corporate Social Responsibility (CSR) is an example of which aspect of leadership and social responsibility?",
        options: ["Ethical decision-making only", "Formal programmes focused on education, healthcare, and social issues", "Regulatory compliance only", "Sustainability only"],
        correct: 1,
        explain: "CSR programmes are the formal, organised initiatives companies run to address social issues like education and healthcare."
      },
      {
        q: "Which organisational culture type prioritises measurable outcomes and specific goals, often involving competition?",
        options: ["Clan culture", "Entrepreneurial culture", "Results-oriented culture", "Hierarchical culture"],
        correct: 2,
        explain: "Results-oriented culture is defined by its focus on achieving specific, measurable targets."
      }
    ]
  },

  "week5-trust-power": {
    title: "Week 5 — Trust and Power in Leadership",
    questions: [
      {
        q: "According to Mayer et al. (1995), trust is best described as:",
        options: ["A legal contract between parties", "An emotional and psychological belief in the goodness, strength, or truth of another", "A type of formal authority", "A financial arrangement"],
        correct: 1,
        explain: "Mayer et al. frame trust as an emotional/psychological state of firm belief in another person or thing."
      },
      {
        q: "Which of these is NOT listed among the \"Dimensions of Trust\"?",
        options: ["Integrity", "Competence", "Profitability", "Consistency"],
        correct: 2,
        explain: "The dimensions listed are Integrity, Competence, Consistency, Loyalty, and Openness — not profitability."
      },
      {
        q: "\"Benevolence\" as a type of trust refers to:",
        options: ["Trust based purely on skills and ability", "Trust in someone who has good intentions towards you", "Trust based on moral uprightness alone", "Trust based on job title"],
        correct: 1,
        explain: "Benevolent trust is about believing someone has your best interests at heart, not just being skilled."
      },
      {
        q: "According to the lecture, what is a common leadership mistake regarding trust?",
        options: ["Assuming that titles automatically grant trust", "Being too transparent", "Delegating too much", "Communicating too often"],
        correct: 0,
        explain: "Trust must be earned through consistent, trustworthy behaviour — it doesn't come automatically with a title."
      },
      {
        q: "Which of the following is identified as a factor that undermines trust in leadership?",
        options: ["Transparency", "Self-orientation — prioritising self-interest over the team", "Consistency", "Accountability"],
        correct: 1,
        explain: "Self-orientation damages trust; transparency, consistency, and accountability all build it."
      },
      {
        q: "According to French and Raven (1959), which of these is one of the original five types of power?",
        options: ["Connection power", "Information power", "Referent power", "Network power"],
        correct: 2,
        explain: "French and Raven's original five are Legitimate, Reward, Coercive, Expert, and Referent."
      },
      {
        q: "Which two types of power did Hershey and Blanchard (1982) add to French and Raven's original five?",
        options: ["Legitimate and Reward", "Connection and Information", "Coercive and Expert", "Referent and Legitimate"],
        correct: 1,
        explain: "Hershey and Blanchard extended the model with Connection power and Information power."
      },
      {
        q: "\"Legitimate power\" is best described as:",
        options: ["Power based on personal charisma", "Power derived from a person's formal position in an organisation", "Power based on punishing others", "Power based on knowledge and expertise"],
        correct: 1,
        explain: "Legitimate (formal) power comes directly from one's position or title within the organisation."
      },
      {
        q: "Which type of power comes from an individual's specialised knowledge or expertise?",
        options: ["Reward power", "Expert power", "Coercive power", "Connection power"],
        correct: 1,
        explain: "Expert power is personal to the individual — it comes from valued knowledge or skill, not position."
      },
      {
        q: "Coercive power is best described as:",
        options: ["The ability to reward desirable behaviour", "The ability to sanction or punish undesirable behaviour", "Power based on admiration and charisma", "Power based on access to information"],
        correct: 1,
        explain: "Coercive power is the opposite of reward power — it's based on the ability to punish."
      }
    ]
  },

  "week6-traditional": {
    title: "Week 6 — Traditional Leadership",
    questions: [
      {
        q: "According to the 1992 Constitution (Article 277), a traditional leader/chief is someone who:",
        options: ["Is elected through a national political election", "Hails from the appropriate family/lineage and is validly nominated, elected, and enstooled/enskinned/installed under customary law", "Is appointed directly by Parliament", "Must hold a university degree"],
        correct: 1,
        explain: "Article 277 ties chieftaincy to lineage and customary nomination/installation processes, not political election."
      },
      {
        q: "Which institution is in charge of traditional matters and chieftaincy issues in Ghana?",
        options: ["The Electoral Commission", "The National House of Chiefs (NHC)", "The Judicial Service", "The Ministry of Education"],
        correct: 1,
        explain: "The NHC is the dedicated institution overseeing chieftaincy and traditional matters nationally."
      },
      {
        q: "Before colonialism, Ghana had two main forms of traditional authority. What were they?",
        options: ["Monarchy and Republic", "Centralised authority and decentralised (acephalous) systems", "Military and Civilian rule", "Federal and Unitary systems"],
        correct: 1,
        explain: "One system was centralised under a King/Paramount Chief; the other was decentralised, with family heads as the authority."
      },
      {
        q: "Which Article of the 1992 Constitution recognises the institution of chieftaincy as established by customary law?",
        options: ["Article 270", "Article 1", "Article 275", "Article 284"],
        correct: 0,
        explain: "Article 270 formally recognises chieftaincy and traditional councils under customary law."
      },
      {
        q: "According to Article 275, a person is disqualified from being a Chief if they:",
        options: ["Are over 60 years old", "Have been convicted for high treason, fraud, dishonesty, or immorality", "Have a university education", "Live outside Ghana"],
        correct: 1,
        explain: "Article 275 disqualifies anyone convicted of serious crimes involving state security, fraud, dishonesty, or immorality."
      },
      {
        q: "Chiefs in Ghana are prohibited from:",
        options: ["Adjudicating land disputes", "Taking part in active party politics", "Sitting on the Council of State", "Advising the President"],
        correct: 1,
        explain: "Chiefs must resign their stool/skin to contest elections and cannot take part in active party politics."
      },
      {
        q: "What roles have Chiefs historically played in Ghana, per Chapter 22 of the 1992 Constitution?",
        options: ["Political and Social only", "Political, Social, Military, and Judicial", "Only ceremonial roles", "Only military roles"],
        correct: 1,
        explain: "Chiefs' roles expanded to include Judicial duties once the British recognised their competence — alongside Political, Social, and Military roles."
      },
      {
        q: "The Judicial Committee of the National House of Chiefs is assisted by:",
        options: ["A medical doctor", "A lawyer, on the recommendation of the Attorney-General", "A foreign diplomat", "The President directly"],
        correct: 1,
        explain: "A lawyer, recommended by the Attorney-General, assists the Judicial Committee in handling chieftaincy matters."
      },
      {
        q: "Which of these is listed as a modern form of chieftaincy under \"Chieftaincy Today\"?",
        options: ["Development Chiefs", "Colonial Chiefs", "Royal Chiefs", "Constitutional Chiefs"],
        correct: 0,
        explain: "\"Development Chiefs,\" alongside Youth Chiefs, Non-titled Chiefs, and Migrant Chiefs, are listed as newer forms of chieftaincy."
      },
      {
        q: "Who is required to maintain \"The National Register of Chiefs\" under the Chieftaincy Act (1971, Act 370)?",
        options: ["The Electoral Commission", "The National House of Chiefs", "The Attorney-General", "The Ministry of Finance"],
        correct: 1,
        explain: "Act 370 requires the National House of Chiefs to maintain this official register."
      }
    ]
  },

  "week7-styles-skills": {
    title: "Week 7 — Leadership Styles and Skills",
    questions: [
      {
        q: "According to Kurt Lewin's research, which leadership style was found to be most effective overall?",
        options: ["Authoritarian", "Participative (Democratic)", "Laissez-faire", "Transactional"],
        correct: 1,
        explain: "Lewin found participative/democratic leadership to be the most effective of the three classic styles he studied."
      },
      {
        q: "Laissez-faire (delegative) leadership is best described as:",
        options: ["Leaders provide little or no guidance, leaving decisions to the group", "Leaders make all decisions independently", "Leaders reward and punish based on performance", "Leaders focus only on production"],
        correct: 0,
        explain: "Laissez-faire leaders step back almost entirely, offering minimal guidance and leaving decisions to the group."
      },
      {
        q: "Which of these is NOT one of Bass's (1985) four elements of Transformational Leadership?",
        options: ["Idealised influence", "Inspirational motivation", "Contingent reward", "Individual consideration"],
        correct: 2,
        explain: "Contingent reward belongs to Transactional Leadership, not Transformational Leadership."
      },
      {
        q: "Transactional leadership is best described as:",
        options: ["An exchange between leader and follower where each derives something of value", "A style focused purely on inspiring a long-term vision", "A style where the leader has no involvement in decisions", "A style based solely on personal charisma"],
        correct: 0,
        explain: "Transactional leadership is a quid pro quo — a contractual exchange between leader and follower."
      },
      {
        q: "\"Management by exception (active)\" refers to:",
        options: ["Leaders granting followers full independence", "Leaders adopting a micromanagement approach to handling followers", "Leaders ignoring performance issues entirely", "Leaders rewarding followers regardless of performance"],
        correct: 1,
        explain: "Active management by exception means the leader closely monitors and intervenes — a micromanagement style."
      },
      {
        q: "Which skill category includes \"problem analysis\" and \"judgment\"?",
        options: ["Interpersonal Skills", "Administrative Skills", "Communication Skills", "Related Skills"],
        correct: 1,
        explain: "Problem analysis and judgment fall under Administrative Skills."
      },
      {
        q: "\"Coaching\" and \"Sensitivity\" are examples of which skill category for leaders?",
        options: ["Administrative Skills", "Interpersonal Skills", "Communication Skills", "Technical Skills"],
        correct: 1,
        explain: "Coaching and sensitivity to others' needs are Interpersonal Skills."
      },
      {
        q: "Which of these is a communication skill mentioned in the lecture?",
        options: ["Judgment", "Nonverbal communication (body language)", "Coaching", "Stress tolerance"],
        correct: 1,
        explain: "Nonverbal communication (kinesics/body language) is one of the four communication skills listed."
      },
      {
        q: "Authoritarian leadership is best applied in situations where:",
        options: ["There is plenty of time for group decision-making", "There is little time for decision-making, or the leader is the most knowledgeable member", "Followers are highly experienced experts", "Creativity is the top priority"],
        correct: 1,
        explain: "Authoritarian leadership suits time-pressured situations or where the leader has the most relevant knowledge."
      },
      {
        q: "According to the lecture, which style produced the LEAST productive outcomes among followers (based on research with children)?",
        options: ["Authoritarian", "Democratic", "Laissez-faire", "Transformational"],
        correct: 2,
        explain: "Lewin's research found laissez-faire (delegative) leadership produced the least productive group of the three."
      }
    ]
  },

  "week9-decision-making": {
    title: "Week 9 — Decision-Making Models and Styles",
    questions: [
      {
        q: "The Cognitive Resource Model was developed by:",
        options: ["Vroom and Yetton", "Fiedler and Garcia", "Hersey and Blanchard", "House"],
        correct: 1,
        explain: "Fiedler and Garcia (1987) developed the Cognitive Resource Model, focused on intelligence, experience, and stress."
      },
      {
        q: "According to the Cognitive Resource Model, under HIGH stress, which factor is positively related to a leader's success?",
        options: ["Intelligence", "Experience", "Charisma", "Position power"],
        correct: 1,
        explain: "Under high stress, a leader's experience — not raw intelligence — is positively related to success."
      },
      {
        q: "Under LOW stress, according to the same model, which factor contributes most to a leader's success?",
        options: ["Experience", "Intelligence", "Position power", "Referent power"],
        correct: 1,
        explain: "In low-stress situations, leaders' intelligence contributes to success; under high stress this relationship breaks down."
      },
      {
        q: "The Vroom and Yetton Normative Decision Model focuses mainly on:",
        options: ["How much input subordinates should have in decision-making", "How to measure a leader's LPC score", "The five practices of exemplary leadership", "Follower maturity levels"],
        correct: 0,
        explain: "The model profiles factors that determine the right level of subordinate participation in decisions."
      },
      {
        q: "In the Rational Decision Model, leaders should choose alternatives that:",
        options: ["Are the easiest to implement", "Produce the greatest benefit over cost", "Require no analysis", "Avoid stakeholder input"],
        correct: 1,
        explain: "Rational decision-making weighs costs and benefits, selecting the alternative with the best benefit-to-cost outcome."
      },
      {
        q: "The Incremental Decision Model is best described as:",
        options: ["A full cost-benefit analysis of every possible alternative", "Fine-tuning existing programmes with only a limited set of alternatives considered", "A purely autocratic decision style", "A model exclusively for crisis situations"],
        correct: 1,
        explain: "Incrementalism means only a limited set of alternatives are considered — it's about fine-tuning, not full analysis."
      },
      {
        q: "In Vroom and Yetton's decision-making strategies, \"G2\" refers to:",
        options: ["The leader decides alone using available information", "The leader consults subordinates individually but decides alone", "The leader shares the problem with subordinates in a group and invites full participation", "The leader ignores subordinate input entirely"],
        correct: 2,
        explain: "G2 (Group) means the leader shares the problem with the group and lets them participate fully in the decision."
      },
      {
        q: "\"Decision acceptance\" in the Vroom-Yetton model means:",
        options: ["The decision is objectively the best possible choice", "Followers accept the decision as their own rather than merely complying", "The decision was made quickly", "The decision required no consultation"],
        correct: 1,
        explain: "Decision acceptance is about followers genuinely owning the decision, not just going along with it."
      },
      {
        q: "Which factor is NOT listed as affecting decision-making in the lecture?",
        options: ["Time or speed", "Number of people involved", "Astrological sign", "Stress"],
        correct: 2,
        explain: "The factors listed are time, task structure, number and calibre of people, subject matter, interests, experience, and stress."
      },
      {
        q: "According to the Cognitive Resource Model, for simple tasks, a leader's intelligence and experience are:",
        options: ["The most critical factors", "Largely irrelevant", "Only relevant under low stress", "Only relevant under high stress"],
        correct: 1,
        explain: "For simple tasks, the model holds that a leader's intelligence and experience don't matter much either way."
      }
    ]
  },

  "week10-teams-crisis": {
    title: "Week 10 — Leading Teams and Crisis Management",
    questions: [
      {
        q: "What is the key difference between a \"group\" and a \"team,\" according to the lecture?",
        options: ["Groups are always larger than teams", "A team is a small group with complementary skills holding mutual accountability for common goals; a group simply shares norms and identity", "Groups always outperform teams", "There is no real difference"],
        correct: 1,
        explain: "Teams add complementary skills and mutual accountability on top of what defines a basic group."
      },
      {
        q: "Which of these is an example of a \"Command Group\"?",
        options: ["A group of friends meeting for lunch", "Individuals reporting directly to a manager", "A group formed around a shared hobby", "A temporary task force"],
        correct: 1,
        explain: "Command groups are formal groups made up of people reporting directly to a manager."
      },
      {
        q: "\"Groupthink\" refers to:",
        options: ["A leadership style", "A psychological phenomenon where desire for harmony leads to poor, irrational decisions", "A type of formal power", "A stage of team development"],
        correct: 1,
        explain: "Groupthink happens when the desire for consensus overrides realistic evaluation of alternatives."
      },
      {
        q: "According to the lecture, which group size tends to perform better overall?",
        options: ["Groups of 20 or more", "Groups of 7 or 9", "Groups of exactly 2", "Groups of even numbers only"],
        correct: 1,
        explain: "The lecture notes odd-numbered groups do better than even ones, and groups of 7 or 9 perform best overall."
      },
      {
        q: "\"Social loafing\" describes:",
        options: ["Increased individual effort in a group setting", "The tendency for individuals to exert less effort when working collectively than individually", "A stage of team development", "A type of leadership power"],
        correct: 1,
        explain: "Social loafing is people putting in less effort as part of a group than they would working alone."
      },
      {
        q: "In the five stages of group development, which stage is characterised by intragroup conflict over roles?",
        options: ["Forming", "Storming", "Norming", "Performing"],
        correct: 1,
        explain: "Storming is the conflict stage, where competition over roles and objectives plays out."
      },
      {
        q: "During the \"Performing\" stage of team development, a group is:",
        options: ["Still uncertain and anxious", "Experiencing high conflict", "Fully functional, trusting, and focused on the task", "Disbanding and wrapping up activities"],
        correct: 2,
        explain: "Performing is the stage where the team is fully functional, trusts each other, and gets on with the real work."
      },
      {
        q: "Which is a recommended strategy for managing a virtual team?",
        options: ["Avoid face-to-face contact entirely", "Establish regular times for interaction and set firm communication rules", "Provide feedback only once per year", "Discourage informal conversations between members"],
        correct: 1,
        explain: "The lecture recommends regular interaction, firm communication rules, and consistent feedback for virtual teams."
      },
      {
        q: "According to the lecture, which of these is a common reason teams fail?",
        options: ["Too much trust among members", "Vague or conflicting team assignments", "Excessive team skills training", "Overly realistic expectations"],
        correct: 1,
        explain: "Vague or conflicting assignments are listed among management's mistakes that cause teams to fail."
      },
      {
        q: "Which of the following is a key action for leading effectively during a crisis?",
        options: ["Avoid communicating until the crisis passes", "Communicate openly and often, and be visible", "Hide uncertainty from the team", "Maintain complete silence on company culture"],
        correct: 1,
        explain: "The lecture lists open, frequent communication and visibility as essential for leading through a crisis."
      }
    ]
  },

  "week11-ethics": {
    title: "Week 11 — Ethical Leadership and Values",
    questions: [
      {
        q: "According to Northouse, how many principles of ethical leadership are identified?",
        options: ["3", "4", "5", "7"],
        correct: 2,
        explain: "Northouse identifies 5 principles: Respect, Serve, Justice, Honesty, and Community."
      },
      {
        q: "\"Ethical Leaders Respect Others\" means leaders should:",
        options: ["Treat followers purely as means to organisational goals", "Give credence to others' ideas, listen closely, and value individual differences", "Ignore opposing views", "Prioritise only their own goals"],
        correct: 1,
        explain: "Respect means genuinely valuing others as individuals, not just as means to an end."
      },
      {
        q: "Which principle involves leaders acting as a \"steward\" of the organisation's vision, not being self-centred?",
        options: ["Ethical Leaders are Just", "Ethical Leaders Serve Others", "Ethical Leaders are Honest", "Ethical Leaders Build Community"],
        correct: 1,
        explain: "\"Serve Others\" is about being a steward of the shared vision rather than centering yourself."
      },
      {
        q: "\"Ethical Leaders are Just\" primarily concerns:",
        options: ["Being honest at all costs", "Placing fairness and impartiality at the centre of decision-making", "Building community consensus", "Personal charisma"],
        correct: 1,
        explain: "Justice is about impartiality — treating people fairly unless a situation genuinely calls for different treatment."
      },
      {
        q: "According to the lecture, being honest as an ethical leader involves:",
        options: ["Always telling the complete truth regardless of consequences", "Being open with others while balancing sensitivity to their feelings", "Never sharing information", "Avoiding all difficult conversations"],
        correct: 1,
        explain: "Honesty requires balance — being open and authentic while remaining sensitive to how the truth affects others."
      },
      {
        q: "The word \"ethic\" originates from the Greek word \"ethos,\" meaning:",
        options: ["Law and order", "Character, custom, or accepted moral behaviour", "Power and authority", "Profit and loss"],
        correct: 1,
        explain: "\"Ethos\" refers to character, custom, or a widely accepted set of moral behaviours."
      },
      {
        q: "What is the key difference between ethics and morality, as explained in the lecture?",
        options: ["They are entirely unrelated concepts", "Ethics is the branch of philosophy that studies morality; morality refers to the rules guiding conduct", "Morality is a legal term; ethics is not", "Ethics only applies to leaders"],
        correct: 1,
        explain: "Ethics is the philosophical study of morality — the rules and principles that guide right and wrong conduct."
      },
      {
        q: "Which of these is one of the \"three rules\" (Hojnacki, 2004) suggested for tougher ethical decisions?",
        options: ["The Rule of Private Gain", "The Rule of Majority Vote", "The Rule of Seniority", "The Rule of Profit Maximisation"],
        correct: 0,
        explain: "The Rule of Private Gain asks whether you alone are benefiting at someone else's expense — a red flag if so."
      },
      {
        q: "Which institution is NOT listed among Ghana's ethics/accountability enforcement bodies in the lecture?",
        options: ["CHRAJ", "EOCO", "Auditor-General", "National House of Chiefs"],
        correct: 3,
        explain: "The National House of Chiefs handles traditional/chieftaincy matters, not ethics enforcement — CHRAJ, EOCO, and the Auditor-General do."
      },
      {
        q: "\"Ethical Leaders Build Community\" emphasises that:",
        options: ["Leaders should impose their will on followers", "Leaders and followers should search for goals compatible with everyone, not just the leader's own agenda", "Community involvement is irrelevant to ethics", "Only the leader's goals matter"],
        correct: 1,
        explain: "Building community means leaders can't just impose their will — they must find goals that work for the whole group."
      }
    ]
  }};MATERIALS.notes = MATERIALS.notes.filter(function (n) {
  return !/Week (1|2|3|4|5|6|7|9|10|11):/.test(n.title) && !/All Notes/.test(n.title);
});
MATERIALS.notes.unshift({
  title: "BCPC 305 — Principles of Leadership: All Notes (Weeks 1 to 11)",
  course: "BCPC305",
  week: "All weeks",
  date: "Oct 11, 2026",
  desc: "Tap to open the simplified notes for every week, with self-check questions.",
  link: "https://asare984.github.io/bcpc305-notes.html"
});
MATERIALS.exercises = MATERIALS.exercises.filter(function (e) {
  return !/Essay Questions/.test(e.title);
});
MATERIALS.exercises.unshift({
  title: "BCPC 305 — Essay Questions (Weeks 1 to 11)",
  course: "BCPC305",
  week: "All weeks",
  date: "Oct 12, 2026",
  desc: "Exam-style essay questions for every week, with an outline of what a good answer includes.",
  link: "https://asare984.github.io/bcpc305-essay-questions.html"
});

// ============================================================
// BCPC203 — Introduction to Business Finance (quizzes)
// ============================================================
COURSES["BCPC203"] = {
  name: "Introduction to Business Finance",
  quizzes: [
  {
    "week": "Week 1",
    "title": "Overview of Business Finance",
    "quizId": "bcpc203-q1"
  },
  {
    "week": "Week 2",
    "title": "Introduction to Financial Markets",
    "quizId": "bcpc203-q2"
  },
  {
    "week": "Week 3",
    "title": "Sources of Finance",
    "quizId": "bcpc203-q3"
  },
  {
    "week": "Week 4",
    "title": "Introduction to Capital Structure",
    "quizId": "bcpc203-q4"
  },
  {
    "week": "Week 5",
    "title": "Introduction to Financial Statement Analysis",
    "quizId": "bcpc203-q5"
  },
  {
    "week": "Week 6",
    "title": "Time Value of Money",
    "quizId": "bcpc203-q6"
  },
  {
    "week": "Week 7",
    "title": "Introduction to Investment Decisions",
    "quizId": "bcpc203-q7"
  },
  {
    "week": "Weeks 8-9",
    "title": "Introduction to Risk and Return",
    "quizId": "bcpc203-q8"
  },
  {
    "week": "Week 10",
    "title": "Cost of Sources of Capital and WACC",
    "quizId": "bcpc203-q9"
  },
  {
    "week": "Week 11",
    "title": "Introduction to Dividend Policy",
    "quizId": "bcpc203-q10"
  }
]
};
Object.assign(QUIZZES, {
  "bcpc203-q1": {
    "title": "Week 1 — Overview of Business Finance",
    "questions": [
      {
        "q": "Which of these is NOT one of the four basic decision areas of business finance?",
        "options": [
          "Financing decision",
          "Investment decision",
          "Dividend policy decision",
          "Marketing mix decision"
        ],
        "correct": 3,
        "explain": "The four areas are investment, financing, dividend policy and working capital management decisions."
      },
      {
        "q": "Which decision is about the types, numbers and composition of assets a firm should acquire to create value?",
        "options": [
          "Dividend policy decision",
          "Working capital decision",
          "Investment decision",
          "Financing decision"
        ],
        "correct": 2,
        "explain": "The investment decision is the most important for value creation; it determines what assets the firm invests in."
      },
      {
        "q": "The financing decision is also referred to as the:",
        "options": [
          "Investment appraisal decision",
          "Capital structure decision",
          "Dividend decision",
          "Working capital decision"
        ],
        "correct": 1,
        "explain": "It is about where and how funds are sourced: equity, debt or a mix of both."
      },
      {
        "q": "Which is universally accepted as the goal of the firm?",
        "options": [
          "Sales maximization",
          "Wealth (value) maximization",
          "Cost minimization",
          "Profit maximization"
        ],
        "correct": 1,
        "explain": "Wealth maximization (also called value or net present worth maximization) is the goal of the firm."
      },
      {
        "q": "Which is a drawback of profit maximization as a goal?",
        "options": [
          "It is based purely on cash flows",
          "It fully accounts for risk",
          "It ignores the time value of money",
          "It focuses on long-term value"
        ],
        "correct": 2,
        "explain": "Profit maximization is vague, short term, ignores risk and the time value of money, and has no bearing on cash flows."
      },
      {
        "q": "A key limitation of a sole proprietorship is that:",
        "options": [
          "The owner has unlimited personal liability for business debts",
          "It faces heavy government regulation",
          "Ownership is easily transferred",
          "It has an unlimited life"
        ],
        "correct": 0,
        "explain": "Losses can exceed the proprietor's investment, and the business's life is limited to the life of the owner."
      },
      {
        "q": "Which is an advantage of a corporation?",
        "options": [
          "It is the cheapest and simplest to set up",
          "Limited liability for its owners",
          "Corporate earnings avoid double taxation",
          "Its life ends with the death of the owner"
        ],
        "correct": 1,
        "explain": "Corporations offer unlimited life, easy transfer of ownership and limited liability. Double taxation and complex set-up are disadvantages."
      },
      {
        "q": "The principal-agent problem is a conflict of interest between:",
        "options": [
          "Lenders and customers",
          "Shareholders (principals) and managers (agents)",
          "Employees and government",
          "Auditors and bankers"
        ],
        "correct": 1,
        "explain": "Shareholders own the firm but managers control it, and their goals may differ."
      },
      {
        "q": "Which of these is a managerial incentive used to align managers' interests with shareholders'?",
        "options": [
          "Removing the board of directors",
          "Reducing information given to shareholders",
          "Stock options",
          "Increasing managers' perks"
        ],
        "correct": 2,
        "explain": "Bonuses, shares and stock options tie managers' rewards to shareholder wealth."
      }
    ]
  },
  "bcpc203-q2": {
    "title": "Week 2 — Introduction to Financial Markets",
    "questions": [
      {
        "q": "A financial intermediary is an institution that:",
        "options": [
          "Sets government interest rates",
          "Links lenders with borrowers by taking deposits and re-lending them",
          "Only trades foreign currencies",
          "Audits listed companies"
        ],
        "correct": 1,
        "explain": "Examples include commercial banks, building societies and pension funds."
      },
      {
        "q": "The primary market is where:",
        "options": [
          "Only treasury bills are traded",
          "Existing shares are traded between investors",
          "Only currencies are exchanged",
          "New or fresh issues of shares and bonds are sold to raise finance"
        ],
        "correct": 3,
        "explain": "The primary market enables organisations to raise new finance."
      },
      {
        "q": "The main role of the secondary market is to:",
        "options": [
          "Let existing investors sell their investments",
          "Issue new bonds",
          "Set the policy rate",
          "Raise new capital for firms"
        ],
        "correct": 0,
        "explain": "Secondary markets handle subsequent trading of securities already issued."
      },
      {
        "q": "Which is a money market instrument?",
        "options": [
          "Debentures",
          "Ordinary shares",
          "Corporate bonds",
          "Treasury bills"
        ],
        "correct": 3,
        "explain": "Money markets trade short-term instruments such as treasury bills; shares and corporate bonds belong to the capital market."
      },
      {
        "q": "Commercial paper is best described as:",
        "options": [
          "An unsecured promissory note with a fixed maturity issued by large firms",
          "A long-term secured loan",
          "A government bond",
          "A share in company ownership"
        ],
        "correct": 0,
        "explain": "It is used by large firms to obtain short-term funds."
      },
      {
        "q": "Buying a security cheaply in one market and simultaneously selling it in another to make a risk-free profit is called:",
        "options": [
          "Arbitrage",
          "Hedging",
          "Underwriting",
          "Diversification"
        ],
        "correct": 0,
        "explain": "That is arbitrage profit, one of the functions of financial markets."
      },
      {
        "q": "In weak-form efficiency, prices reflect:",
        "options": [
          "All public information",
          "All public and private information",
          "No information at all",
          "Information in past prices, so prices follow a random walk"
        ],
        "correct": 3,
        "explain": "Under weak form, studying past returns cannot give consistently superior profits."
      },
      {
        "q": "Under semi-strong efficiency, share prices adjust immediately to:",
        "options": [
          "Past prices only",
          "Nothing, prices adjust slowly",
          "Only insider information",
          "All public information, such as earnings announcements"
        ],
        "correct": 3,
        "explain": "Semi-strong prices reflect past prices and all other public information."
      },
      {
        "q": "In which form of efficiency would no investment manager consistently beat the market, even with painstaking analysis?",
        "options": [
          "Weak form",
          "None of them",
          "Semi-strong form",
          "Strong form"
        ],
        "correct": 3,
        "explain": "Strong form prices reflect all information that can be acquired by painstaking analysis."
      }
    ]
  },
  "bcpc203-q3": {
    "title": "Week 3 — Sources of Finance",
    "questions": [
      {
        "q": "A key feature of an overdraft is that:",
        "options": [
          "It is repayable only after 10 years",
          "It must be secured by shares",
          "Interest is paid on the full limit at all times",
          "Interest is paid only when the account is overdrawn"
        ],
        "correct": 3,
        "explain": "Overdrafts are flexible, and technically repayable on demand."
      },
      {
        "q": "Trade credit typically has payment terms of:",
        "options": [
          "30 to 90 days",
          "Same-day payment",
          "1 to 5 years",
          "10 to 20 years"
        ],
        "correct": 0,
        "explain": "Trade credit is effectively an interest-free short-term loan, but early-payment discounts may be lost."
      },
      {
        "q": "In a lease, the lessor:",
        "options": [
          "Gets possession and use of the asset",
          "Retains ownership of the asset",
          "Pays the rentals",
          "Becomes the owner after the first rental"
        ],
        "correct": 1,
        "explain": "The lessee has possession and use of the asset in return for specified rentals."
      },
      {
        "q": "In a sale and lease back, a company:",
        "options": [
          "Issues new shares to the public",
          "Buys property from a bank",
          "Converts debt into shares",
          "Sells property it owns for immediate cash and rents it back"
        ],
        "correct": 3,
        "explain": "Buyers are often insurance companies or pension funds, with rent reviews every few years."
      },
      {
        "q": "A debenture is:",
        "options": [
          "An overdraft facility",
          "A rights issue",
          "A share in company ownership",
          "A loan note acknowledging a debt, with provisions for interest and repayment of capital"
        ],
        "correct": 3,
        "explain": "Debentures and bonds are long-term debt finance."
      },
      {
        "q": "Venture capital is:",
        "options": [
          "Capital raised from a rights issue",
          "A government grant",
          "Risk capital provided in return for an equity stake in private companies",
          "A secured bank overdraft"
        ],
        "correct": 2,
        "explain": "It may fund start-ups, business development, management buyouts or help an owner realise an investment."
      },
      {
        "q": "Ordinary shareholders are described as the ultimate bearers of risk because:",
        "options": [
          "They receive fixed interest",
          "They rank at the bottom of the creditor hierarchy in a liquidation",
          "They have no voting rights",
          "They are paid before debenture holders"
        ],
        "correct": 1,
        "explain": "They are paid last if the company is liquidated."
      },
      {
        "q": "Compared with an IPO, a placing is generally:",
        "options": [
          "Subject to more disclosure",
          "Cheaper and quicker",
          "Open to the whole public",
          "More expensive and slower"
        ],
        "correct": 1,
        "explain": "Placings are cheaper, quicker and involve less disclosure, but most shares go to a few institutions."
      },
      {
        "q": "A rights issue is an offer of new shares to:",
        "options": [
          "Existing shareholders, usually at a price below the market price",
          "The general public only",
          "Employees only",
          "Bondholders only"
        ],
        "correct": 0,
        "explain": "The discount makes the shares attractive, and relative voting rights are unaffected if all take up their rights."
      },
      {
        "q": "With a Stock Exchange introduction:",
        "options": [
          "The company borrows from the exchange",
          "New shares are sold to the public",
          "No shares are made available, but a quotation is granted",
          "Shares are placed with institutions"
        ],
        "correct": 2,
        "explain": "It only applies where shares in a large company are already widely held."
      }
    ]
  },
  "bcpc203-q4": {
    "title": "Week 4 — Introduction to Capital Structure",
    "questions": [
      {
        "q": "Gearing (leverage) is:",
        "options": [
          "The ratio of sales to assets",
          "The amount of cash held",
          "The amount of debt finance a company uses relative to its equity finance",
          "The ratio of profit to sales"
        ],
        "correct": 2,
        "explain": "A highly geared company carries high fixed interest charges, so earnings to equity vary more."
      },
      {
        "q": "Firm B has ordinary shares of GH¢6,000,000 and 8% bonds of GH¢9,000,000. Its debt/equity gearing is:",
        "options": [
          "67%, lowly geared",
          "150%, highly geared",
          "100%, neutrally geared",
          "15%, lowly geared"
        ],
        "correct": 1,
        "explain": "9,000,000 / 6,000,000 = 1.5 = 150%. Over 100% means highly geared."
      },
      {
        "q": "Firm C has ordinary shares of GH¢5,000,000 and bonds of GH¢5,000,000. It is:",
        "options": [
          "Lowly geared",
          "Neutrally geared",
          "Ungeared",
          "Highly geared"
        ],
        "correct": 1,
        "explain": "5,000,000 / 5,000,000 = 100%, exactly one, so neutrally geared."
      },
      {
        "q": "According to Modigliani and Miller (no tax), a firm's capital structure:",
        "options": [
          "Only matters for small firms",
          "Always lowers firm value",
          "Has no impact on its value or WACC",
          "Always raises firm value"
        ],
        "correct": 2,
        "explain": "With perfect markets and no tax, whether a firm is levered or unlevered is irrelevant."
      },
      {
        "q": "Which is NOT an assumption of M&M's theory without tax?",
        "options": [
          "100% dividend payout",
          "Firms pay corporate tax of 25%",
          "No transaction costs",
          "No corporate tax"
        ],
        "correct": 1,
        "explain": "The no-tax version assumes no corporate tax, no transaction costs, a 100% payout and unrestricted borrowing by investors."
      },
      {
        "q": "M&M adjusted for tax (1963) says:",
        "options": [
          "Debt has no effect on WACC",
          "Tax relief on interest is ignored",
          "WACC rises with every unit of debt",
          "The tax shield on interest lowers WACC, which keeps falling as gearing rises"
        ],
        "correct": 3,
        "explain": "The savings from tax relief on debt interest are the tax shield."
      },
      {
        "q": "The traditional view suggests that WACC:",
        "options": [
          "Rises steadily from zero debt",
          "Is constant at all gearing levels",
          "Falls continuously to 100% debt",
          "Falls at first as debt increases, then rises as the cost of equity (and debt) climbs"
        ],
        "correct": 3,
        "explain": "The optimum gearing is where WACC is at its minimum, though the theory does not give the exact ratio."
      },
      {
        "q": "The trade-off theory says that:",
        "options": [
          "Gearing has no effect on risk",
          "Equity is always cheaper",
          "Debt is always free",
          "The tax advantage of debt is offset by bankruptcy and financial distress costs"
        ],
        "correct": 3,
        "explain": "Levered firms face both costs and benefits."
      },
      {
        "q": "According to the pecking order theory, a profitable firm prefers to raise finance:",
        "options": [
          "First from debt, then retained earnings",
          "First from equity, then debt",
          "Only from new shares",
          "First from retained earnings, then debt, then equity"
        ],
        "correct": 3,
        "explain": "Internal funds are cheapest; if external funds are needed, debt is preferred to equity."
      }
    ]
  },
  "bcpc203-q5": {
    "title": "Week 5 — Introduction to Financial Statement Analysis",
    "questions": [
      {
        "q": "In common-size statements, balance sheet items are shown as a percentage of ____ and income statement items as a percentage of ____.",
        "options": [
          "equity; profit",
          "total assets; sales",
          "liabilities; expenses",
          "sales; total assets"
        ],
        "correct": 1,
        "explain": "Standardising lets firms of different sizes and currencies be compared."
      },
      {
        "q": "Which group of ratios does the current ratio belong to?",
        "options": [
          "Profitability ratios",
          "Long-term solvency ratios",
          "Short-term solvency (liquidity) ratios",
          "Market value ratios"
        ],
        "correct": 2,
        "explain": "The five categories are liquidity, leverage, asset management, profitability and market value ratios."
      },
      {
        "q": "Madina Corporation has current assets of GH¢700,000 and current liabilities of GH¢300,000. Its current ratio is:",
        "options": [
          "0.43 times",
          "2.33 times",
          "1.33 times",
          "3.00 times"
        ],
        "correct": 1,
        "explain": "700 / 300 = 2.33."
      },
      {
        "q": "Madina's inventories are GH¢300,000. Its quick (acid-test) ratio is:",
        "options": [
          "2.33 times",
          "1.33 times",
          "0.67 times",
          "0.43 times"
        ],
        "correct": 1,
        "explain": "(700 - 300) / 300 = 1.33. Inventory is removed because it is often the least liquid current asset."
      },
      {
        "q": "Madina's EBIT is GH¢270,000 and total interest expense is GH¢70,000. Times interest earned is about:",
        "options": [
          "4.50 times",
          "0.26 times",
          "2.70 times",
          "3.86 times"
        ],
        "correct": 3,
        "explain": "270 / 70 = 3.86 times."
      },
      {
        "q": "A firm has a total debt ratio of 0.36. Its debt-equity ratio is about:",
        "options": [
          "0.56 times",
          "0.64 times",
          "0.36 times",
          "1.56 times"
        ],
        "correct": 0,
        "explain": "0.36 / 0.64 = 0.56. The equity multiplier = 1 + D/E = 1.56."
      },
      {
        "q": "If inventory turnover is 4 times, days' sales in inventory is:",
        "options": [
          "365 days",
          "4 days",
          "14.6 days",
          "91.25 days"
        ],
        "correct": 3,
        "explain": "365 / 4 = 91.25 days."
      },
      {
        "q": "If ROE exceeds ROA, this reflects:",
        "options": [
          "High dividends",
          "Poor inventory control",
          "The firm's use of debt",
          "Low profit margins"
        ],
        "correct": 2,
        "explain": "Debt financing magnifies the return to equity holders."
      },
      {
        "q": "Madina's net income is GH¢120,000 and total equity is GH¢1,076,000. Its return on equity is about:",
        "options": [
          "12.00%",
          "9.00%",
          "4.00%",
          "11.15%"
        ],
        "correct": 3,
        "explain": "120 / 1,076 = 11.15%."
      },
      {
        "q": "Madina's EPS is GH¢0.60 (net income GH¢120,000 over 200,000 shares) and the share price is GH¢5.25. Its P/E ratio is:",
        "options": [
          "6.00 times",
          "10.50 times",
          "0.11 times",
          "8.75 times"
        ],
        "correct": 3,
        "explain": "5.25 / 0.60 = 8.75 times."
      }
    ]
  },
  "bcpc203-q6": {
    "title": "Week 6 — Time Value of Money",
    "questions": [
      {
        "q": "The time value of money means that:",
        "options": [
          "A cedi is worth the same at any date",
          "Interest is always zero",
          "Future cedis are worth more than today's",
          "A cedi received today is worth more than a cedi received in the future"
        ],
        "correct": 3,
        "explain": "Money invested today starts earning interest sooner."
      },
      {
        "q": "Ama invests GH¢1,000 at 10% p.a. for 4 years under simple interest. At the end of year 4 she has:",
        "options": [
          "GH¢1,400",
          "GH¢1,464.10",
          "GH¢1,100",
          "GH¢1,040"
        ],
        "correct": 0,
        "explain": "Simple interest = 1,000 x 10% x 4 = 400, so 1,000 + 400 = 1,400."
      },
      {
        "q": "If the same GH¢1,000 earns 10% p.a. compound interest for 4 years, it grows to:",
        "options": [
          "GH¢1,464.10",
          "GH¢1,400",
          "GH¢1,410",
          "GH¢1,500"
        ],
        "correct": 0,
        "explain": "1,000 x 1.1^4 = 1,464.10, which is GH¢64.10 more than simple interest."
      },
      {
        "q": "A nominal rate of 6% and inflation of 3%: using the Fisher effect, the real rate is about:",
        "options": [
          "3.00%",
          "9.00%",
          "1.03%",
          "2.91%"
        ],
        "correct": 3,
        "explain": "1.06 / 1.03 - 1 = 0.0291."
      },
      {
        "q": "A loan has a nominal rate of 12% with monthly compounding. The effective annual rate (EAR) is about:",
        "options": [
          "1.00%",
          "12.68%",
          "12.00%",
          "13.20%"
        ],
        "correct": 1,
        "explain": "(1 + 0.12/12)^12 - 1 = 12.68%."
      },
      {
        "q": "What is GH¢2,000 worth in 3 years at 10% compound interest?",
        "options": [
          "GH¢2,420",
          "GH¢2,640",
          "GH¢2,600",
          "GH¢2,662"
        ],
        "correct": 3,
        "explain": "2,000 x 1.1^3 = 2,662."
      },
      {
        "q": "What is the present value of GH¢1,331 due in 3 years at 10%?",
        "options": [
          "GH¢1,000",
          "GH¢1,200",
          "GH¢900",
          "GH¢1,331"
        ],
        "correct": 0,
        "explain": "1,331 / 1.1^3 = 1,000."
      },
      {
        "q": "5% interest on GH¢26,000 for 10 years is offered by Bank A (quarterly), Bank B (monthly) and Bank C (daily). Which gives the highest final amount?",
        "options": [
          "Bank C, because more frequent compounding gives a higher effective rate",
          "All three give the same amount",
          "Bank A, because it compounds least often",
          "Bank B, because monthly is optimal"
        ],
        "correct": 0,
        "explain": "The more often interest is compounded, the higher the effective rate."
      },
      {
        "q": "The present value of GH¢1,000 received at the end of each of the next 3 years at 10% is about:",
        "options": [
          "GH¢3,000",
          "GH¢3,310",
          "GH¢2,486.85",
          "GH¢2,000"
        ],
        "correct": 2,
        "explain": "1,000 x (1/1.1 + 1/1.21 + 1/1.331) = 2,486.85."
      },
      {
        "q": "A perpetuity pays GH¢500 per year forever. At a 10% discount rate, its present value is:",
        "options": [
          "GH¢500",
          "GH¢10,000",
          "GH¢5,000",
          "GH¢50"
        ],
        "correct": 2,
        "explain": "PV = 500 / 0.10 = 5,000."
      }
    ]
  },
  "bcpc203-q7": {
    "title": "Week 7 — Introduction to Investment Decisions",
    "questions": [
      {
        "q": "Capital budgeting is the process of:",
        "options": [
          "Raising short-term overdrafts",
          "Identifying, analysing and selecting investment projects whose returns extend beyond one year",
          "Preparing monthly cash budgets",
          "Paying dividends"
        ],
        "correct": 1,
        "explain": "It deals with long-term investment decisions."
      },
      {
        "q": "Plant and machinery is an example of:",
        "options": [
          "Capital expenditure, charged to the balance sheet",
          "A working capital item",
          "Revenue expenditure, charged to the income statement",
          "A dividend"
        ],
        "correct": 0,
        "explain": "Capital expenditure acquires or improves non-current assets."
      },
      {
        "q": "The main weakness of the payback period is that it:",
        "options": [
          "Ignores the time value of money",
          "Considers cash flows after the payback date",
          "Uses discounted cash flows",
          "Is too complex to calculate"
        ],
        "correct": 0,
        "explain": "Payback also ignores cash flows after the payback period."
      },
      {
        "q": "A project costs GH¢10,000 and returns GH¢4,000 per year. Its payback period is:",
        "options": [
          "2 years",
          "4 years",
          "2.5 years",
          "3 years"
        ],
        "correct": 2,
        "explain": "After 2 years GH¢8,000 is recovered; the remaining 2,000 / 4,000 = 0.5 year."
      },
      {
        "q": "The discounted payback period still fails to:",
        "options": [
          "Use the cost of capital",
          "Account for the time value of money",
          "Consider cash flows after the payback period",
          "Recover the investment outlay"
        ],
        "correct": 2,
        "explain": "It discounts cash flows, so it covers the time value of money, but ignores later flows."
      },
      {
        "q": "The NPV decision rule is to accept the project if:",
        "options": [
          "NPV is greater than zero",
          "NPV equals the initial investment",
          "IRR is less than cost of capital",
          "NPV is less than zero"
        ],
        "correct": 0,
        "explain": "A positive NPV means a return above the cost of capital and adds to shareholders' wealth."
      },
      {
        "q": "A project costs GH¢1,000 and returns GH¢600 per year for 3 years. At 10%, its NPV is about:",
        "options": [
          "GH¢300",
          "GH¢492",
          "GH¢800",
          "GH¢1,492"
        ],
        "correct": 1,
        "explain": "600 x 2.4869 = 1,492.1, minus 1,000 = 492.1."
      },
      {
        "q": "The internal rate of return (IRR) is the discount rate at which:",
        "options": [
          "NPV equals zero",
          "Payback is one year",
          "NPV is maximised",
          "PI equals 2"
        ],
        "correct": 0,
        "explain": "A standard project is accepted if IRR exceeds the cost of capital."
      },
      {
        "q": "MIRR differs from IRR because it assumes cash flows are reinvested at:",
        "options": [
          "Zero percent",
          "The inflation rate",
          "The IRR itself",
          "The required rate of return"
        ],
        "correct": 3,
        "explain": "IRR assumes reinvestment at the IRR; MIRR uses the required rate of return."
      },
      {
        "q": "For the project above (NPV GH¢492 on an outlay of GH¢1,000), the profitability index is about:",
        "options": [
          "1.49, so accept",
          "2.49, so reject",
          "0.49, so reject",
          "1.00, so indifferent"
        ],
        "correct": 0,
        "explain": "PI = PV of inflows / initial investment = 1,492 / 1,000 = 1.49. A PI above 1 means accept."
      }
    ]
  },
  "bcpc203-q8": {
    "title": "Weeks 8-9 — Introduction to Risk and Return",
    "questions": [
      {
        "q": "You invest GH¢200 and receive GH¢220 a year later. The holding period return (HPR) is:",
        "options": [
          "0.10",
          "1.20",
          "1.10",
          "10"
        ],
        "correct": 2,
        "explain": "HPR = 220 / 200 = 1.10, and holding period yield (HPY) = HPR - 1 = 10%."
      },
      {
        "q": "Total return on a share equals:",
        "options": [
          "Dividend plus capital gain",
          "Capital gain only",
          "Dividend minus capital gain",
          "Share price only"
        ],
        "correct": 0,
        "explain": "Equity returns come from both dividend yield and capital gains."
      },
      {
        "q": "An investment costs GH¢1,000 and is sold after one year for GH¢1,100 with no dividend. The return is:",
        "options": [
          "100%",
          "10%",
          "1.1%",
          "110%"
        ],
        "correct": 1,
        "explain": "(1,100 - 1,000) / 1,000 = 10%."
      },
      {
        "q": "In finance, risk is:",
        "options": [
          "The certainty of earning a fixed return",
          "The amount invested",
          "The uncertainty that an investment will earn its expected rate of return",
          "The inflation rate"
        ],
        "correct": 2,
        "explain": "The greater the chance of a return far below expected, the greater the risk."
      },
      {
        "q": "The two common measures of stand-alone risk are:",
        "options": [
          "Variance and standard deviation",
          "Payback and NPV",
          "Mean and median",
          "Beta and alpha"
        ],
        "correct": 0,
        "explain": "Both measure dispersion of possible returns around the expected return."
      },
      {
        "q": "The coefficient of variation (CV) is calculated as:",
        "options": [
          "Beta divided by variance",
          "Expected return divided by standard deviation",
          "Standard deviation divided by expected return",
          "Variance times expected return"
        ],
        "correct": 2,
        "explain": "It measures risk per unit of expected return, useful when expected returns differ."
      },
      {
        "q": "An asset returns 20% with probability 0.3, 10% with 0.5 and -5% with 0.2. Its expected return is:",
        "options": [
          "15%",
          "12.5%",
          "10%",
          "8.3%"
        ],
        "correct": 2,
        "explain": "0.3 x 20 + 0.5 x 10 + 0.2 x (-5) = 6 + 5 - 1 = 10%."
      },
      {
        "q": "60% of a portfolio is in a stock expected to return 10% and 40% in one expected to return 15%. The portfolio's expected return is:",
        "options": [
          "12%",
          "10%",
          "15%",
          "12.5%"
        ],
        "correct": 0,
        "explain": "0.6 x 10 + 0.4 x 15 = 12%."
      },
      {
        "q": "The two stocks have standard deviations of 18.2% and 27.3%, and a correlation of 1.0. At 60%/40% weights, portfolio standard deviation is:",
        "options": [
          "18.20%",
          "21.84%",
          "15.00%",
          "22.75%"
        ],
        "correct": 1,
        "explain": "With correlation 1.0 it is the weighted average: 0.6 x 18.2 + 0.4 x 27.3 = 21.84%."
      },
      {
        "q": "According to Markowitz portfolio theory, combining stocks can:",
        "options": [
          "Remove all risk including market risk",
          "Reduce standard deviation below the simple weighted average, because correlation is below 1",
          "Always increase risk",
          "Never reduce risk"
        ],
        "correct": 1,
        "explain": "Correlation coefficients below 1 make diversification benefits possible."
      }
    ]
  },
  "bcpc203-q9": {
    "title": "Week 10 — Cost of Sources of Capital and WACC",
    "questions": [
      {
        "q": "The cost of capital is best described as:",
        "options": [
          "The rate of return the firm must pay to satisfy providers of funds, and the cut-off rate for investments",
          "The firm's profit margin",
          "The dividend paid last year",
          "The cost of building a factory"
        ],
        "correct": 0,
        "explain": "It reflects the riskiness of providing funds."
      },
      {
        "q": "The three components of cost of capital are the costs of:",
        "options": [
          "Equity, assets and liabilities",
          "Ordinary equity, preference shares and debt",
          "Cash, inventory and receivables",
          "Sales, profit and tax"
        ],
        "correct": 1,
        "explain": "These are weighted together to get WACC."
      },
      {
        "q": "A share has a constant dividend of GH¢120 forever and costs GH¢800. The cost of equity is:",
        "options": [
          "6.67%",
          "120%",
          "9.6%",
          "15%"
        ],
        "correct": 3,
        "explain": "Ke = D / P0 = 120 / 800 = 15%."
      },
      {
        "q": "You require 20% on shares of a company that pays a constant GH¢150 dividend. The price you should pay is:",
        "options": [
          "GH¢170",
          "GH¢1,200",
          "GH¢30",
          "GH¢750"
        ],
        "correct": 3,
        "explain": "P0 = D / Ke = 150 / 0.20 = 750."
      },
      {
        "q": "Co. Shalom has just paid a GH¢200 dividend growing at 10% forever. The share price is GH¢1,200. The cost of equity is about:",
        "options": [
          "26.7%",
          "18.3%",
          "28.3%",
          "16.7%"
        ],
        "correct": 2,
        "explain": "Ke = D0(1+g)/P0 + g = 220 / 1,200 + 0.10 = 28.3%."
      },
      {
        "q": "Co. XY will pay GH¢180 next year, growing at 8% forever. The price is GH¢900. Investors' expected return is:",
        "options": [
          "12%",
          "8%",
          "28%",
          "20%"
        ],
        "correct": 2,
        "explain": "Ke = D1 / P0 + g = 180 / 900 + 0.08 = 28%."
      },
      {
        "q": "A share bought 'cum dividend' means the buyer:",
        "options": [
          "Is not entitled to the next dividend",
          "Pays no tax on the dividend",
          "Must resell the share",
          "Is entitled to receive the next dividend"
        ],
        "correct": 3,
        "explain": "Ex dividend means the buyer does not receive the next dividend."
      },
      {
        "q": "A GH¢100 irredeemable debenture pays 10% and trades at GH¢95. Tax is 25%. After-tax cost of debt is about:",
        "options": [
          "7.89%",
          "10.53%",
          "7.50%",
          "10.00%"
        ],
        "correct": 0,
        "explain": "kd = i(1 - t) / P0 = 10 x 0.75 / 95 = 7.89%."
      },
      {
        "q": "The cost of redeemable debt is found as:",
        "options": [
          "The dividend yield",
          "The IRR of the cash flows involved",
          "The coupon rate only",
          "The firm's profit margin"
        ],
        "correct": 1,
        "explain": "It can be found by linear interpolation between two NPVs."
      },
      {
        "q": "A firm has equity of GH¢600 costing 20% and after-tax debt of GH¢400 costing 10%. Its WACC is:",
        "options": [
          "14%",
          "16%",
          "18%",
          "15%"
        ],
        "correct": 1,
        "explain": "(600 x 0.20 + 400 x 0.10) / 1,000 = 16%."
      },
      {
        "q": "WACC is often used as:",
        "options": [
          "The dividend payout ratio",
          "The tax rate",
          "The discount rate when evaluating investments",
          "The inflation rate"
        ],
        "correct": 2,
        "explain": "Projects with a positive NPV at the WACC add value. Market values are preferred to book values for the weights."
      }
    ]
  },
  "bcpc203-q10": {
    "title": "Week 11 — Introduction to Dividend Policy",
    "questions": [
      {
        "q": "Which statement about retained earnings is correct?",
        "options": [
          "They are a form of debt",
          "They belong to creditors",
          "They are free of any cost",
          "They are not a free source of finance because they carry an opportunity cost"
        ],
        "correct": 3,
        "explain": "Shareholders could have invested the dividends elsewhere to earn a return."
      },
      {
        "q": "An advantage of using retained earnings is that:",
        "options": [
          "They change the pattern of shareholdings",
          "There are no issue costs and no dilution of control",
          "They require a prospectus",
          "They always increase dividends"
        ],
        "correct": 1,
        "explain": "Retained earnings are also a flexible source of finance."
      },
      {
        "q": "The residual theory says a firm should:",
        "options": [
          "Pay a constant payout ratio",
          "Never pay dividends",
          "Finance all positive-NPV projects first and pay dividends from what is left",
          "Pay dividends first, then invest"
        ],
        "correct": 2,
        "explain": "External funds are expensive, so retained earnings come first."
      },
      {
        "q": "M&M's dividend irrelevance theory assumes:",
        "options": [
          "No tax, no transaction costs and a perfect market",
          "High taxes on dividends",
          "High transaction costs",
          "Imperfect information"
        ],
        "correct": 0,
        "explain": "Under those conditions shareholders are indifferent between dividends and capital gains."
      },
      {
        "q": "The signalling effect means that a dividend cut may suggest:",
        "options": [
          "The company has cash flow problems",
          "The company will issue bonds",
          "Shares are overvalued",
          "The company is highly profitable"
        ],
        "correct": 0,
        "explain": "This is part of the traditional view that dividend policy matters."
      },
      {
        "q": "The clientele effect is where:",
        "options": [
          "Managers choose their shareholders",
          "All shareholders dislike dividends",
          "Some shareholders prefer dividends and so buy shares of firms that pay them",
          "Dividends are paid in shares"
        ],
        "correct": 2,
        "explain": "Different groups of investors are attracted by different dividend policies."
      },
      {
        "q": "A constant payout ratio policy means the firm pays:",
        "options": [
          "A fixed percentage of net income as dividend, such as 40%",
          "Dividends only after investing",
          "No dividend",
          "A fixed cedi amount every year"
        ],
        "correct": 0,
        "explain": "Dividends then rise and fall with earnings."
      },
      {
        "q": "A stable dividend policy is where the firm pays:",
        "options": [
          "A varying percentage of net income",
          "Nothing",
          "A stable amount as dividend without variations",
          "Only scrip dividends"
        ],
        "correct": 2,
        "explain": "This contrasts with the constant payout ratio policy."
      },
      {
        "q": "A zero dividend policy assumes that earnings are:",
        "options": [
          "Paid out in full",
          "Used to repay shareholders' loans",
          "Held as idle cash forever",
          "Reinvested in viable projects to raise the share price in the long run"
        ],
        "correct": 3,
        "explain": "No dividend is paid."
      },
      {
        "q": "A scrip dividend is a dividend paid:",
        "options": [
          "By repurchasing debt",
          "From the share premium account only",
          "In foreign currency",
          "By issuing additional company shares instead of cash"
        ],
        "correct": 3,
        "explain": "Share repurchase is a different route, where the company buys back its own shares."
      }
    ]
  }
});
