// ============================================================
// NEW COURSES — quizzes for BCPC201, BCPC203, BCPC205, BCPC209, BACT201
// Paste this block at the very bottom of data.js.
// ============================================================
Object.assign(QUIZZES, {
  "bcpc201-w1-what-is-is": {
    "title": "Week 1 — What Is an Information System?",
    "questions": [
      {
        "q": "Information systems (IS) is best described as the study of:",
        "options": [
          "Only the internet",
          "Complementary networks of hardware and software that people and organisations use to collect, filter, process, create and distribute data",
          "Only the physical parts of a computer",
          "Only computer programming"
        ],
        "correct": 1,
        "explain": "IS combines technology, people and process, not just machines."
      },
      {
        "q": "Which of these is a component of an information system?",
        "options": [
          "Data",
          "Advertising",
          "Competitors",
          "Tax"
        ],
        "correct": 0,
        "explain": "The components are technology (hardware and software), data, people and process."
      },
      {
        "q": "In an information system, a 'process' is:",
        "options": [
          "The programs on a computer",
          "The users of the system",
          "A series of steps undertaken to achieve a desired outcome",
          "The physical equipment"
        ],
        "correct": 2,
        "explain": "People follow processes to turn data into useful information."
      },
      {
        "q": "Hardware is:",
        "options": [
          "The data stored",
          "The people who use the system",
          "The physical components of the information system",
          "The instructions that run a computer"
        ],
        "correct": 2,
        "explain": "Software is the set of instructions; hardware is what you can touch."
      },
      {
        "q": "In the mainframe era (late 1950s to 1960s), computers were mainly used for:",
        "options": [
          "Calculations and automating business processes, and by the late 1960s MRP systems appeared",
          "Social networking",
          "Online shopping",
          "Cloud storage"
        ],
        "correct": 0,
        "explain": "Mainframes were large, expensive machines used by big organisations."
      },
      {
        "q": "The first microcomputer announced in 1975, which started the PC revolution, was the:",
        "options": [
          "Apple Watch",
          "Windows 95",
          "IBM 704",
          "Altair 8800"
        ],
        "correct": 3,
        "explain": "Its popularity brought computing to individuals and small businesses."
      },
      {
        "q": "In the client-server era (mid-1980s), businesses:",
        "options": [
          "Moved everything to the cloud",
          "Used only mainframes",
          "Connected their computers together to collaborate and share resources",
          "Stopped using computers"
        ],
        "correct": 2,
        "explain": "The first Enterprise Resource Planning (ERP) systems were developed and ran on the client-server model."
      },
      {
        "q": "In 1989, Tim Berners-Lee developed:",
        "options": [
          "The first microcomputer",
          "The first mainframe",
          "The first smartphone",
          "A simpler way for researchers to share information over the Internet, the World Wide Web"
        ],
        "correct": 3,
        "explain": "The Internet itself was invented in 1969 and was confined to universities and the military."
      },
      {
        "q": "Web 2.0 is the second generation of the WWW, focused on:",
        "options": [
          "Static web pages only",
          "Large mainframe computers",
          "Collaboration and sharing of information, such as blogging and social networking",
          "Dial-up connections"
        ],
        "correct": 2,
        "explain": "Interactive comments, social networks and blogs are typical examples."
      },
      {
        "q": "The Internet of Things (IoT) refers to:",
        "options": [
          "A single large computer",
          "Only websites",
          "The network of interconnected physical devices that can collect and exchange data",
          "Only mobile phones"
        ],
        "correct": 2,
        "explain": "It follows the cloud computing era in the timeline of business computing."
      }
    ]
  },
  "bcpc201-w2-hardware": {
    "title": "Week 2 — Hardware",
    "questions": [
      {
        "q": "The Central Processing Unit (CPU) is:",
        "options": [
          "The main storage device",
          "The 'brain' of the computer, which manipulates data and controls the tasks of other components",
          "The monitor",
          "The keyboard"
        ],
        "correct": 1,
        "explain": "It contains the control unit and the arithmetic logic unit."
      },
      {
        "q": "Primary storage (main memory) is used to store:",
        "options": [
          "Data being processed, for very brief periods",
          "Backups",
          "Large amounts of data permanently",
          "Operating systems only"
        ],
        "correct": 0,
        "explain": "Primary storage is fast, but it is volatile."
      },
      {
        "q": "Which type of primary storage has the least capacity?",
        "options": [
          "Registers",
          "Hard disk",
          "Flash drive",
          "RAM"
        ],
        "correct": 0,
        "explain": "Registers hold extremely limited amounts of instructions and data directly in the CPU."
      },
      {
        "q": "Which of these is a characteristic of secondary storage?",
        "options": [
          "It is volatile",
          "It is faster than RAM",
          "It is nonvolatile and cheaper than RAM",
          "It holds very small amounts of data"
        ],
        "correct": 2,
        "explain": "Secondary storage keeps very large amounts of data for extended periods, but retrieval is slower than RAM."
      },
      {
        "q": "A peripheral device is:",
        "options": [
          "Any auxiliary device that connects to a computer, such as a mouse or keyboard",
          "The operating system",
          "The motherboard",
          "The CPU"
        ],
        "correct": 0,
        "explain": "Peripherals provide input, output or extra storage."
      },
      {
        "q": "Computer speed is commonly measured in:",
        "options": [
          "Pixels",
          "GHz (billions of cycles per second)",
          "Kilograms",
          "Megabytes of RAM"
        ],
        "correct": 1,
        "explain": "Higher clock speed generally means faster processing."
      },
      {
        "q": "A netbook is a portable computer that:",
        "options": [
          "Has no hard drive and depends on the network",
          "Is a desktop",
          "Has the most storage",
          "Runs only mainframe software"
        ],
        "correct": 0,
        "explain": "Laptops, notebooks and netbooks are the portable computers listed."
      },
      {
        "q": "Which of these is a recent change in hardware?",
        "options": [
          "Larger, heavier devices",
          "Disappearance of the CPU",
          "Miniaturisation and portability",
          "Return to mainframes only"
        ],
        "correct": 2,
        "explain": "Smartphones and tablets are examples, and cloud computing reduces reliance on local hardware."
      },
      {
        "q": "A byte is made up of:",
        "options": [
          "8 bits",
          "16 bits",
          "4 bits",
          "10 bits"
        ],
        "correct": 0,
        "explain": "Storage is measured in bytes, kilobytes, megabytes, gigabytes and so on."
      },
      {
        "q": "Smartphones evolved from:",
        "options": [
          "Cell phones, adding email, location services and applications",
          "Mainframes",
          "Desktop monitors",
          "Printers"
        ],
        "correct": 0,
        "explain": "They are now general-purpose computing devices."
      }
    ]
  },
  "bcpc201-w2-software": {
    "title": "Week 2 — Software",
    "questions": [
      {
        "q": "Software is:",
        "options": [
          "The set of instructions or programs used to operate computers and perform tasks",
          "The physical parts of a computer",
          "The people using a computer",
          "The network cables"
        ],
        "correct": 0,
        "explain": "Hardware is the physical equipment; software tells it what to do."
      },
      {
        "q": "Which is a key function of an operating system?",
        "options": [
          "Designing web pages",
          "Sending emails",
          "Printing documents",
          "Managing the hardware resources of the computer"
        ],
        "correct": 3,
        "explain": "It also provides a user interface and manages files and applications."
      },
      {
        "q": "Application software:",
        "options": [
          "Manages hardware",
          "Makes the computer start",
          "Produces software only",
          "Performs specific tasks such as word processing, accounting or video games"
        ],
        "correct": 3,
        "explain": "Productivity software is a type of application software."
      },
      {
        "q": "A network operating system (NOS) runs on:",
        "options": [
          "A keyboard",
          "A printer",
          "A smartphone only",
          "A server, giving it the capability to manage data, users, groups, security and applications"
        ],
        "correct": 3,
        "explain": "Its advantages include centralised, highly stable servers; its disadvantages include high cost."
      },
      {
        "q": "Enterprise Resource Planning (ERP) software was developed to:",
        "options": [
          "Play videos",
          "Create websites",
          "Bring an organisation's information under centralised control",
          "Scan for viruses"
        ],
        "correct": 2,
        "explain": "It integrates processes such as finance, HR and operations in one system."
      },
      {
        "q": "Cloud computing refers to:",
        "options": [
          "A type of mainframe",
          "Applications, services and data storage located on the Internet",
          "Software installed only on a local PC",
          "A weather forecasting tool"
        ],
        "correct": 1,
        "explain": "Advantages include no software to install; disadvantages include your data stored on someone else's server."
      },
      {
        "q": "Virtualisation is:",
        "options": [
          "Removing a virus",
          "The process of using software to simulate a computer or some other device",
          "A type of network cable",
          "Copying software illegally"
        ],
        "correct": 1,
        "explain": "One physical server can run many virtual machines."
      },
      {
        "q": "Open-source software is software whose:",
        "options": [
          "Price is very high",
          "Source code is available for anyone to copy and use",
          "Code is secret",
          "Licence forbids changes"
        ],
        "correct": 1,
        "explain": "The open-source movement has produced many widely used programs."
      },
      {
        "q": "A computer worm differs from a traditional virus because it:",
        "options": [
          "Is harmless",
          "Needs a user to open a file",
          "Usually does not require a user's action to spread",
          "Only affects printers"
        ],
        "correct": 2,
        "explain": "Worms self-replicate across networks."
      },
      {
        "q": "Making copies of software without the manufacturer's explicit permission is called:",
        "options": [
          "Piracy",
          "Open sourcing",
          "Virtualisation",
          "Licensing"
        ],
        "correct": 0,
        "explain": "It is illegal. Companies copyright their software to protect their investment."
      },
      {
        "q": "Which is good protection against computer viruses?",
        "options": [
          "Opening all email attachments",
          "Using public Wi-Fi without care",
          "Using antivirus protection and a firewall and keeping them up to date",
          "Never updating software"
        ],
        "correct": 2,
        "explain": "Software updates fix security flaws."
      }
    ]
  },
  "bcpc201-w3-networking": {
    "title": "Week 3 — Networking and Communication",
    "questions": [
      {
        "q": "The Internet began as a response to which event?",
        "options": [
          "The invention of the PC",
          "The Soviet launch of Sputnik in 1957, which led the US to create ARPA",
          "The launch of Windows",
          "The dot-com bubble"
        ],
        "correct": 1,
        "explain": "ARPANET was the first network built under ARPA."
      },
      {
        "q": "The standard protocol of the Internet is:",
        "options": [
          "CSS",
          "VoIP",
          "HTML",
          "TCP/IP"
        ],
        "correct": 3,
        "explain": "Transmission control protocol/Internet protocol made it possible to connect different networks."
      },
      {
        "q": "A packet is:",
        "options": [
          "A type of cable",
          "A type of server",
          "A website",
          "The fundamental unit of data transmitted over the Internet"
        ],
        "correct": 3,
        "explain": "Data is broken into packets, sent across the network and reassembled."
      },
      {
        "q": "A switch is a device that:",
        "options": [
          "Stores web pages",
          "Connects multiple devices and filters packets based on their destination",
          "Blocks viruses only",
          "Converts voice to digital form"
        ],
        "correct": 1,
        "explain": "A hub simply connects devices without filtering."
      },
      {
        "q": "A modem, short for 'modulator-demodulator':",
        "options": [
          "Stores data",
          "Prints pages",
          "Converts digital signals to analogue (and back) for transmission over telephone lines",
          "Powers the computer"
        ],
        "correct": 2,
        "explain": "Early Internet access used a modem over an analogue telephone line."
      },
      {
        "q": "A broadband connection is an Internet connection of at least:",
        "options": [
          "10 megabits per second",
          "1,000 bits per second",
          "56,000 bits per second",
          "256,000 bits per second"
        ],
        "correct": 3,
        "explain": "Dial-up connections were slower than this."
      },
      {
        "q": "Wi-Fi is a technology that:",
        "options": [
          "Uses fibre optic cables",
          "Takes an Internet signal and converts it into radio waves",
          "Needs a telephone line",
          "Works only without the Internet"
        ],
        "correct": 1,
        "explain": "The radio waves are picked up by wireless devices."
      },
      {
        "q": "VoIP is a protocol that:",
        "options": [
          "Converts sound to digital form for transmission over the Internet",
          "Prints documents",
          "Blocks spam",
          "Compresses images"
        ],
        "correct": 0,
        "explain": "VoIP stands for voice over IP."
      },
      {
        "q": "A LAN is:",
        "options": [
          "A local network, usually in the same building or campus",
          "A type of mobile network",
          "A type of virus",
          "A network spanning countries"
        ],
        "correct": 0,
        "explain": "A WAN covers a wide area."
      },
      {
        "q": "An intranet is:",
        "options": [
          "A network open to everyone",
          "A type of website",
          "The public Internet",
          "A private network contained within an enterprise"
        ],
        "correct": 3,
        "explain": "An extranet allows secure access to selected outsiders such as suppliers."
      },
      {
        "q": "The Internet differs from the World Wide Web in that the Internet:",
        "options": [
          "Is the same as a browser",
          "Only runs email",
          "Is a part of the Web",
          "Is an interconnected network of networks running many services, and the Web is one of those services"
        ],
        "correct": 3,
        "explain": "The Web is accessed through browsers using HTTP."
      }
    ]
  },
  "bcpc201-w4-types-is": {
    "title": "Week 4 — Types of Information Systems",
    "questions": [
      {
        "q": "The three main categories of information systems, based on organisational level, are:",
        "options": [
          "Local, national and global",
          "Hardware, software and network",
          "Input, process and output",
          "Operational, management (tactical) and strategic level systems"
        ],
        "correct": 3,
        "explain": "Each serves a different group in the organisation."
      },
      {
        "q": "A transaction processing system (TPS) is mainly used to:",
        "options": [
          "Support top management's strategic planning",
          "Design websites",
          "Emulate a human expert",
          "Record, process and validate routine business transactions"
        ],
        "correct": 3,
        "explain": "Examples: payroll, hotel reservation and shipping systems."
      },
      {
        "q": "In an online transaction processing system:",
        "options": [
          "No data is stored",
          "There is a direct connection between the operator and the TPS program",
          "Only managers can use it",
          "Data is collected and processed later in groups"
        ],
        "correct": 1,
        "explain": "Batch systems process transactions in groups."
      },
      {
        "q": "A management information system (MIS) mainly provides:",
        "options": [
          "Programming tools",
          "Routine reports to help middle managers monitor and control",
          "Entertainment",
          "Raw transaction data only"
        ],
        "correct": 1,
        "explain": "The lecture compares MIS to the heart of the body, with information as the blood."
      },
      {
        "q": "A decision support system (DSS) supports:",
        "options": [
          "Only data entry",
          "Complex, non-routine decisions",
          "Only filing",
          "Only routine payroll tasks"
        ],
        "correct": 1,
        "explain": "Increasingly it uses machine learning and AI for predictive analytics."
      },
      {
        "q": "An executive information system (EIS) is:",
        "options": [
          "A type of network",
          "A game",
          "A payroll system",
          "A special type of DSS designed to support decision making at the top level of an organisation"
        ],
        "correct": 3,
        "explain": "Typical sessions begin with financial and business situation reports and key performance indicators."
      },
      {
        "q": "Knowledge work systems (KWS) serve:",
        "options": [
          "Only the CEO",
          "The information needs of knowledge workers such as engineers and designers",
          "Only customers",
          "Only data entry staff"
        ],
        "correct": 1,
        "explain": "Knowledge management platforms store, organise and share knowledge."
      },
      {
        "q": "Office automation systems (OAS) are designed to increase the productivity of:",
        "options": [
          "Only top managers",
          "Customers",
          "Machines on the factory floor",
          "Data workers in the office"
        ],
        "correct": 3,
        "explain": "Word processing, email and scheduling are examples."
      },
      {
        "q": "An expert system is software that:",
        "options": [
          "Emulates the decision-making ability of a human expert in a narrow, well-defined domain",
          "Connects computers",
          "Stores payroll",
          "Prints reports"
        ],
        "correct": 0,
        "explain": "It solves problems using rules from experts."
      },
      {
        "q": "The components of an expert system include:",
        "options": [
          "A modem and a router",
          "A switch and a hub",
          "A keyboard and mouse",
          "A knowledge base, an inference engine and a user interface"
        ],
        "correct": 3,
        "explain": "The knowledge base holds facts and rules; the inference engine reasons with them."
      }
    ]
  },
  "bcpc201-w4-globalisation": {
    "title": "Week 4 — Globalisation and the Digital Divide",
    "questions": [
      {
        "q": "Globalisation refers to:",
        "options": [
          "The growth of one country's economy",
          "The use of a single language",
          "The integration of goods, services and culture among the nations of the world",
          "Only international travel"
        ],
        "correct": 2,
        "explain": "Information technology plays a central role in it."
      },
      {
        "q": "Thomas Friedman's 2005 book on the effects of globalisation is called:",
        "options": [
          "The World Is Flat",
          "The Global Village",
          "Digital Divide",
          "The Network Society"
        ],
        "correct": 0,
        "explain": "It described how personal computers, the Internet and workflow software levelled the playing field."
      },
      {
        "q": "According to Friedman, Globalisation 1.0 ran from:",
        "options": [
          "1800 to 2000, driven by companies",
          "1950 to 1990",
          "2000 onwards, driven by individuals",
          "1492 until about 1800, driven by countries"
        ],
        "correct": 3,
        "explain": "Globalisation 2.0 was driven by companies, and 3.0 by individuals."
      },
      {
        "q": "Which of these is an advantage of globalisation to firms?",
        "options": [
          "Identical laws everywhere",
          "The ability to locate expertise and labour around the world",
          "No competition",
          "Equal Internet speed everywhere"
        ],
        "correct": 1,
        "explain": "Challenges include infrastructure differences, labour laws and legal requirements."
      },
      {
        "q": "The digital divide is:",
        "options": [
          "The gap between two computer brands",
          "The gap between those who have access to technology and the Internet and those who do not",
          "A division of the IT department",
          "A type of network error"
        ],
        "correct": 1,
        "explain": "It exists between and within countries."
      },
      {
        "q": "The One Laptop per Child (OLPC) project aimed to:",
        "options": [
          "Build a network",
          "Sell laptops to companies",
          "Replace teachers",
          "Empower children in developing countries to learn by giving them a low-cost laptop"
        ],
        "correct": 3,
        "explain": "The lecture lists different cultures, corruption and competition among the reasons it did not succeed."
      },
      {
        "q": "Jakob Nielsen's three stages of the digital divide are:",
        "options": [
          "Economic, usability and empowerment",
          "Social, political and legal",
          "Local, regional and global",
          "Hardware, software and data"
        ],
        "correct": 0,
        "explain": "The first-level divide is about access, the second about digital skills, and the third about the quality and relevance of content."
      },
      {
        "q": "The first-level digital divide is about:",
        "options": [
          "Quality of content only",
          "Basic infrastructure and access to the Internet",
          "Digital literacy only",
          "Social media use"
        ],
        "correct": 1,
        "explain": "People without electricity or connectivity fall in this group."
      },
      {
        "q": "The second-level digital divide concerns:",
        "options": [
          "Access to electricity",
          "Internet speed only",
          "Differences in digital literacy and skills among people who already have access",
          "Ownership of phones"
        ],
        "correct": 2,
        "explain": "Having access does not mean being able to use it effectively."
      },
      {
        "q": "Castells' 'network society' describes an economy with the capacity to:",
        "options": [
          "Use only paper records",
          "Avoid technology",
          "Work as a unit in real time on a planetary scale",
          "Operate only locally"
        ],
        "correct": 2,
        "explain": "It highlights how networks connect the global economy."
      }
    ]
  },
  "bcpc201-w5-ai": {
    "title": "Week 5 — Artificial Intelligence in Business and Academia",
    "questions": [
      {
        "q": "The term 'artificial intelligence' was coined in:",
        "options": [
          "1989",
          "1956 at a conference at Dartmouth College",
          "2005",
          "1836"
        ],
        "correct": 1,
        "explain": "The Dartmouth conference is considered the birth of AI as a field."
      },
      {
        "q": "AI involves machines performing tasks that:",
        "options": [
          "Need no data",
          "Cannot be programmed",
          "Require intelligence, such as acquiring knowledge and applying it",
          "Are purely physical"
        ],
        "correct": 2,
        "explain": "Learning in AI focuses on acquiring data and developing algorithms."
      },
      {
        "q": "An algorithm is:",
        "options": [
          "A virus",
          "A type of hardware",
          "A set of step-by-step instructions",
          "A network device"
        ],
        "correct": 2,
        "explain": "AI programming focuses on acquiring data and developing algorithms."
      },
      {
        "q": "The AI winters were periods in which:",
        "options": [
          "AI progress stalled and funding was cut because its ambitious goals proved elusive",
          "AI was banned",
          "AI grew very fast",
          "AI was used in cold climates"
        ],
        "correct": 0,
        "explain": "The first AI winter ran from 1974 to 1980."
      },
      {
        "q": "Reactive AI is AI that:",
        "options": [
          "Works on predefined algorithms and has no memory or adaptability",
          "Understands human emotions",
          "Learns from all past data",
          "Is self-aware"
        ],
        "correct": 0,
        "explain": "The four types are reactive, limited memory, theory of mind and self-aware."
      },
      {
        "q": "Theory of Mind AI is AI that:",
        "options": [
          "Cannot interact with people",
          "Only follows fixed rules",
          "Understands the mental states and intentions of others",
          "Has no memory"
        ],
        "correct": 2,
        "explain": "Self-aware AI, the most advanced type, is still a concept."
      },
      {
        "q": "Which is a benefit of AI in the enterprise?",
        "options": [
          "No need for data",
          "Guaranteed zero errors",
          "Lower use of electricity in all cases",
          "Enhanced, personalised and faster customer service"
        ],
        "correct": 3,
        "explain": "AI also automates tedious tasks and supports better decisions."
      },
      {
        "q": "Which is a risk of AI at work?",
        "options": [
          "No costs",
          "No ethical issues",
          "Worker mistrust, including fear of job loss",
          "Perfect accuracy"
        ],
        "correct": 2,
        "explain": "AI errors can also occur because of problematic data, training or algorithms."
      },
      {
        "q": "Which of these is a goal of AI?",
        "options": [
          "To reduce data",
          "To end the use of the Internet",
          "To replace all humans",
          "To make computers more useful by letting them take over dangerous or tedious tasks from humans"
        ],
        "correct": 3,
        "explain": "Another goal is to understand the principles of intelligence."
      },
      {
        "q": "Which of these is a disadvantage of AI listed in the lecture?",
        "options": [
          "Increased costs and difficulty with software",
          "No data required",
          "No need for maintenance",
          "Cheaper operation always"
        ],
        "correct": 0,
        "explain": "AI systems can be expensive to build and maintain."
      }
    ]
  },
  "bcpc201-w5-iot": {
    "title": "Week 5 — Industrial Internet of Things (IIoT)",
    "questions": [
      {
        "q": "The first industrial revolution (1760s) was based on:",
        "options": [
          "The steam engine and mechanisation",
          "Electricity",
          "Hyper-connectivity",
          "Computers"
        ],
        "correct": 0,
        "explain": "The 2nd (1870s) brought electricity and mass production, and the 3rd (1960s) brought computers."
      },
      {
        "q": "The fourth industrial revolution is characterised by:",
        "options": [
          "Steam engines",
          "The first computers",
          "Mass production using electricity",
          "Hyper-connectivity"
        ],
        "correct": 3,
        "explain": "It brings technologies such as AI, IoT, robotics, data analytics and VR."
      },
      {
        "q": "The Internet of Things is a network of:",
        "options": [
          "Physical devices with sensors and connectivity that collect and exchange data",
          "Only phones",
          "Only websites",
          "Only servers"
        ],
        "correct": 0,
        "explain": "Everyday objects can be connected, such as fridges, cars and farm sensors."
      },
      {
        "q": "IoT smart farming uses wireless sensors to:",
        "options": [
          "Collect data about the location, well-being and health of livestock and crops",
          "Build roads",
          "Print money",
          "Replace farmers entirely"
        ],
        "correct": 0,
        "explain": "It improves farm decision-making."
      },
      {
        "q": "Which is an advantage of IoT for businesses?",
        "options": [
          "No cost of installation",
          "No data needed",
          "Zero security risk",
          "Improved customer engagement and reduced waste"
        ],
        "correct": 3,
        "explain": "IoT also improves technology optimisation and data collection."
      },
      {
        "q": "Which is a disadvantage of IoT?",
        "options": [
          "Less data",
          "Simple design always",
          "No regulations",
          "Security and privacy risks"
        ],
        "correct": 3,
        "explain": "IoT also adds complexity and compliance challenges."
      },
      {
        "q": "Securing IoT devices includes:",
        "options": [
          "Authentication for devices connecting to the network and network-enforced policy",
          "Disabling all security",
          "Leaving default passwords",
          "Sharing credentials"
        ],
        "correct": 0,
        "explain": "Weak device security can expose an entire network."
      },
      {
        "q": "An example of IoT for the elderly is a device that:",
        "options": [
          "Only makes calls",
          "Detects falls using an accelerometer and sends medication reminders",
          "Plays only music",
          "Prints documents"
        ],
        "correct": 1,
        "explain": "GPS can also help locate the wearer."
      }
    ]
  },
  "bcpc201-w7-html-css": {
    "title": "Week 7-8 — HTML Basics and CSS",
    "questions": [
      {
        "q": "HTML stands for:",
        "options": [
          "Hyperlinks and Text Management Language",
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "High Tech Machine Language"
        ],
        "correct": 1,
        "explain": "It is the standard markup language for creating web pages."
      },
      {
        "q": "In the house analogy used in the lecture, HTML is the:",
        "options": [
          "Structure (beams, walls and rooms)",
          "Paint and furniture",
          "Garden",
          "Electricity"
        ],
        "correct": 0,
        "explain": "CSS is the presentation, and JavaScript is the behaviour."
      },
      {
        "q": "The ‹!DOCTYPE html› declaration:",
        "options": [
          "Links a style sheet",
          "Creates a heading",
          "Adds an image",
          "Tells the browser that the document is an HTML5 document"
        ],
        "correct": 3,
        "explain": "It appears at the very top of the page."
      },
      {
        "q": "An HTML element is made up of:",
        "options": [
          "A CSS rule",
          "A start tag, some content and an end tag",
          "Only text",
          "Only a start tag"
        ],
        "correct": 1,
        "explain": "For example, ‹p›My paragraph.‹/p›."
      },
      {
        "q": "Which tag creates a hyperlink?",
        "options": [
          "‹a›",
          "‹img›",
          "‹h1›",
          "‹p›"
        ],
        "correct": 0,
        "explain": "For example, ‹a href=\"https://upsa.edu.gh\"›Visit UPSA‹/a›."
      },
      {
        "q": "Which attribute provides alternative text for an image?",
        "options": [
          "href",
          "src",
          "alt",
          "style"
        ],
        "correct": 2,
        "explain": "The src attribute gives the image file path."
      },
      {
        "q": "CSS stands for:",
        "options": [
          "Cascading Style Sheets",
          "Computer Style Syntax",
          "Coded Site Styling",
          "Creative Style System"
        ],
        "correct": 0,
        "explain": "It is used to control colours, fonts and layout."
      },
      {
        "q": "A CSS rule consists of:",
        "options": [
          "A tag and a link",
          "A heading and a paragraph",
          "A selector and a declaration block",
          "A script and a form"
        ],
        "correct": 2,
        "explain": "The selector points to the element to style, and the declarations set the properties."
      },
      {
        "q": "Which are the three ways to add CSS to a page?",
        "options": [
          "Block, inline and flex",
          "Local, global and regional",
          "Top, middle and bottom",
          "Inline, internal and external"
        ],
        "correct": 3,
        "explain": "External CSS is linked with ‹link rel=\"stylesheet\" href=\"styles.css\"›."
      },
      {
        "q": "An internal style sheet is placed:",
        "options": [
          "In the footer",
          "In a ‹style› element inside the ‹head›",
          "In an image",
          "In a separate .css file only"
        ],
        "correct": 1,
        "explain": "It styles a single HTML page."
      },
      {
        "q": "The CSS box model, from the inside out, is:",
        "options": [
          "Padding, content, margin, border",
          "Border, margin, content, padding",
          "Margin, content, border, padding",
          "Content, padding, border and margin"
        ],
        "correct": 3,
        "explain": "Padding is inside the border; margin is outside."
      },
      {
        "q": "The difference between ‹div› and ‹span› is that:",
        "options": [
          "‹div› is a block container and ‹span› is an inline container",
          "They are the same",
          "‹div› is for images only",
          "‹div› is inline and ‹span› is block"
        ],
        "correct": 0,
        "explain": "Div is commonly used to group sections of a page for layout."
      }
    ]
  },
  "bcpc201-w9-js-dom": {
    "title": "Week 9-11 — JavaScript, Forms and the DOM",
    "questions": [
      {
        "q": "JavaScript is:",
        "options": [
          "An operating system",
          "A client-side scripting language that runs in the browser and adds interactivity",
          "A database",
          "A style language"
        ],
        "correct": 1,
        "explain": "HTML gives structure, CSS gives style and JavaScript gives behaviour."
      },
      {
        "q": "Which keyword declares a variable whose value cannot be changed?",
        "options": [
          "var",
          "function",
          "let",
          "const"
        ],
        "correct": 3,
        "explain": "let is changeable; var is legacy and best avoided."
      },
      {
        "q": "Which of these is a way to include JavaScript in a page?",
        "options": [
          "Only inside CSS",
          "Only in images",
          "Only inline",
          "Inline, internal (‹script›) and external (a .js file)"
        ],
        "correct": 3,
        "explain": "External files are recommended for larger projects."
      },
      {
        "q": "A function in JavaScript is:",
        "options": [
          "A type of variable",
          "A comment",
          "A reusable block of code that runs when something calls (invokes) it",
          "A CSS property"
        ],
        "correct": 2,
        "explain": "For example, function myFunction(p1, p2) { return p1 * p2; }."
      },
      {
        "q": "The DOM (Document Object Model) is:",
        "options": [
          "A type of database",
          "A network protocol",
          "A style sheet",
          "A programming interface that represents the web page so it can be found and changed"
        ],
        "correct": 3,
        "explain": "It treats the page as a tree of elements."
      },
      {
        "q": "Which method selects an element by its id?",
        "options": [
          "window.open()",
          "document.getElementById()",
          "document.createCSS()",
          "console.log()"
        ],
        "correct": 1,
        "explain": "querySelector() and querySelectorAll() are other ways to select elements."
      },
      {
        "q": "Which property changes the HTML content of an element?",
        "options": [
          "display",
          "alt",
          "innerHTML",
          "href"
        ],
        "correct": 2,
        "explain": "For example, element.innerHTML = '‹strong›New‹/strong› content!';"
      },
      {
        "q": "An event listener:",
        "options": [
          "Saves a file",
          "Creates a table",
          "Waits for an event such as a click and runs code when it happens",
          "Styles a page"
        ],
        "correct": 2,
        "explain": "For example, button.addEventListener('click', ...)."
      },
      {
        "q": "Which HTML element is used to collect user input?",
        "options": [
          "‹form›",
          "‹title›",
          "‹br›",
          "‹img›"
        ],
        "correct": 0,
        "explain": "The ‹input› element is the most used form element."
      },
      {
        "q": "The ‹label› element is useful because it:",
        "options": [
          "Styles the form",
          "Defines a label for form elements and helps screen-reader users",
          "Submits the form",
          "Validates the input"
        ],
        "correct": 1,
        "explain": "It also lets users click the label to focus the field."
      },
      {
        "q": "The 'web trinity' refers to:",
        "options": [
          "Client, server and database",
          "HTML (structure), CSS (presentation) and JavaScript (behaviour)",
          "HTTP, FTP and SMTP",
          "Hardware, software and data"
        ],
        "correct": 1,
        "explain": "Each has a distinct role in a web page."
      }
    ]
  },
  "bcpc201-w10-forms-addons": {
    "title": "Week 10 — Google Forms Add-ons and Automation",
    "questions": [
      {
        "q": "Google Forms add-ons are:",
        "options": [
          "A type of virus",
          "Hardware devices",
          "Third-party applications that extend Google Forms' functionality",
          "Printers"
        ],
        "correct": 2,
        "explain": "They are available through the Google Workspace Marketplace."
      },
      {
        "q": "Form Publisher is an add-on used to:",
        "options": [
          "Automatically generate documents or PDFs from form responses using templates",
          "Send email only",
          "Close forms",
          "Design logos"
        ],
        "correct": 0,
        "explain": "Merge tags insert form data into the template."
      },
      {
        "q": "FormLimiter is used to:",
        "options": [
          "Open a form to everyone",
          "Automatically close a form by date/time or response count",
          "Delete responses",
          "Generate PDFs"
        ],
        "correct": 1,
        "explain": "It is useful for events with limited capacity."
      },
      {
        "q": "Which security practice is recommended when installing add-ons?",
        "options": [
          "Share your password",
          "Disable updates",
          "Check permissions and grant only minimal permissions",
          "Accept all permissions"
        ],
        "correct": 2,
        "explain": "Risky permissions should be avoided."
      },
      {
        "q": "Zapier and Make are platforms that:",
        "options": [
          "Teach programming",
          "Print forms",
          "Connect Google Forms to thousands of other apps using 'if this, then that' logic",
          "Create hardware"
        ],
        "correct": 2,
        "explain": "For example, a new form response can create a Trello card or post to Slack."
      },
      {
        "q": "Successful automation requires:",
        "options": [
          "Random tools",
          "Only free tools",
          "No planning",
          "A clear understanding of the business process and the appropriate tools"
        ],
        "correct": 3,
        "explain": "Free tiers have limits, such as a limited number of documents per month."
      }
    ]
  },
  "bcpc203-w1-overview": {
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
  "bcpc203-w2-markets": {
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
  "bcpc203-w3-sources": {
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
  "bcpc203-w4-capital-structure": {
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
  "bcpc203-w5-fsa": {
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
  "bcpc203-w6-tvm": {
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
  "bcpc203-w7-capital-budgeting": {
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
  "bcpc203-w8-risk-return": {
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
  "bcpc203-w9-wacc": {
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
  "bcpc203-w10-dividends": {
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
  },
  "bcpc205-w1-overview1": {
    "title": "Week 1 — Overview of Marketing 1",
    "questions": [
      {
        "q": "According to the American Marketing Association (2013), marketing is:",
        "options": [
          "Only the activity of advertising products to customers",
          "The process of persuading people to buy products they do not want",
          "The activity, set of institutions and processes for creating, communicating, delivering and exchanging offerings that have value for customers, clients, partners and society at large",
          "The department responsible for selling and distribution only"
        ],
        "correct": 2,
        "explain": "The AMA definition covers a whole range of activities and institutions, not just advertising or selling."
      },
      {
        "q": "The CIM (UK) defines marketing as the management process responsible for:",
        "options": [
          "Producing goods at the lowest possible cost",
          "Controlling the prices of competing products",
          "Maximising sales through heavy promotion",
          "Identifying, anticipating and satisfying consumer requirements profitably"
        ],
        "correct": 3,
        "explain": "Note the three verbs: identify, anticipate, satisfy, all done profitably."
      },
      {
        "q": "Which activities help a firm to identify and anticipate consumer requirements?",
        "options": [
          "Market research and strategic marketing planning",
          "Product development and pricing",
          "Distribution and storage",
          "Personal selling and promotion"
        ],
        "correct": 0,
        "explain": "Identifying and anticipating needs involves research and planning. Product development, pricing, promotion and selling are about satisfying requirements."
      },
      {
        "q": "Which of these is NOT listed as a function of marketing?",
        "options": [
          "Promotion",
          "Marketing information management",
          "Distribution",
          "Auditing"
        ],
        "correct": 3,
        "explain": "The functions listed are distribution, financing, marketing information management, product/service management, promotion and selling."
      },
      {
        "q": "Which of these is a common mistaken assumption about marketing?",
        "options": [
          "Marketing operates as a system",
          "Marketing is the same thing as advertising or selling",
          "Marketing is an ongoing process",
          "Marketing is a function of business"
        ],
        "correct": 1,
        "explain": "Advertising and selling are only parts of marketing. Marketing is a concept, a business function, an ongoing process and a system."
      },
      {
        "q": "In marketing, 'demands' are:",
        "options": [
          "States of deprivation",
          "The set of actual and potential buyers",
          "The form that needs take, shaped by culture",
          "Wants that are backed by buying power"
        ],
        "correct": 3,
        "explain": "Needs are states of deprivation, wants are shaped by culture and personality, and demands are wants backed by buying power."
      },
      {
        "q": "Marketing myopia is:",
        "options": [
          "Ignoring competitors' prices",
          "Focusing only on existing wants and losing sight of underlying consumer needs",
          "Selling products only in local markets",
          "Spending too much on advertising"
        ],
        "correct": 1,
        "explain": "A myopic marketer concentrates on the product and forgets the need the product satisfies."
      },
      {
        "q": "An exchange is:",
        "options": [
          "A written contract between two firms",
          "Any gift given to a customer",
          "The act of obtaining a desired object from someone by offering something in return",
          "A discount on the price of a product"
        ],
        "correct": 2,
        "explain": "Exchange is the heart of marketing: both parties give something and get something."
      },
      {
        "q": "A market is:",
        "options": [
          "The firm's sales department",
          "The group of competitors in an industry",
          "The set of actual and potential buyers of a product",
          "Only the place where goods are sold"
        ],
        "correct": 2,
        "explain": "These buyers share a particular need or want that can be satisfied through exchange relationships."
      }
    ]
  },
  "bcpc205-w2-overview2": {
    "title": "Week 2 — Overview of Marketing 2",
    "questions": [
      {
        "q": "A value proposition is:",
        "options": [
          "The profit a company expects to make",
          "The set of benefits or values a company promises to deliver to customers to satisfy their needs",
          "A discount offered to new customers",
          "The price the company charges for a product"
        ],
        "correct": 1,
        "explain": "It is the promise that differentiates the firm's offering in the customer's mind."
      },
      {
        "q": "The production concept holds that consumers will favour products that are:",
        "options": [
          "Heavily promoted",
          "Of the highest quality and features",
          "Good for society in the long run",
          "Available and highly affordable"
        ],
        "correct": 3,
        "explain": "The production concept focuses on improving production and distribution efficiency."
      },
      {
        "q": "Which orientation says consumers favour products offering the most quality, performance and features?",
        "options": [
          "The production concept",
          "The product concept",
          "The marketing concept",
          "The selling concept"
        ],
        "correct": 1,
        "explain": "Under this concept, the organisation devotes its energy to continuous product improvements."
      },
      {
        "q": "The selling concept assumes that consumers:",
        "options": [
          "Will not buy enough of the firm's products unless it undertakes a large-scale selling and promotion effort",
          "Always choose the cheapest product",
          "Know exactly what they want",
          "Buy only products that are good for society"
        ],
        "correct": 0,
        "explain": "The selling concept pushes what the firm makes, instead of starting from customer needs."
      },
      {
        "q": "The marketing concept says that achieving organisational goals depends on:",
        "options": [
          "Producing as many units as possible",
          "Selling aggressively to every market",
          "Knowing the needs and wants of target markets and delivering satisfaction better than competitors do",
          "Cutting prices below competitors"
        ],
        "correct": 2,
        "explain": "It starts with the customer, not with the factory."
      },
      {
        "q": "The societal marketing concept adds which consideration to the marketing concept?",
        "options": [
          "Only the company's requirements",
          "Only competitors' strategies",
          "Only consumers' immediate wants",
          "Consumers' long-term interests and society's long-run interests"
        ],
        "correct": 3,
        "explain": "It balances consumer wants, company requirements, and the long-term welfare of consumers and society."
      },
      {
        "q": "The marketing mix (the four Ps) consists of:",
        "options": [
          "Product, profit, people and position",
          "People, process, physical evidence and price",
          "Planning, pricing, publicity and production",
          "Product, price, promotion and place"
        ],
        "correct": 3,
        "explain": "The four Ps are the tools the firm uses to implement its marketing strategy."
      },
      {
        "q": "Partner relationship management involves:",
        "options": [
          "Competing with suppliers to lower prices",
          "Replacing all intermediaries with the firm's own staff",
          "Selling only to a few loyal customers",
          "Working closely with partners inside and outside the company to jointly bring greater value to customers"
        ],
        "correct": 3,
        "explain": "Partners inside include every functional area; partners outside include suppliers, channel partners and competitors."
      },
      {
        "q": "Customer relationship management is the overall process of:",
        "options": [
          "Advertising to new customers",
          "Setting prices for different customers",
          "Building and maintaining profitable customer relationships by delivering superior customer value and satisfaction",
          "Collecting customer complaints"
        ],
        "correct": 2,
        "explain": "It is the core of the marketing process: creating value for customers and capturing value in return."
      }
    ]
  },
  "bcpc205-w3-environment": {
    "title": "Week 3 — The Marketing Environment",
    "questions": [
      {
        "q": "The marketing environment consists of:",
        "options": [
          "The actors and forces outside marketing that affect management's ability to develop and maintain successful transactions with target customers",
          "Only the firm's own departments",
          "The firm's pricing policies",
          "Only the firm's customers"
        ],
        "correct": 0,
        "explain": "This is the definition given by Kotler and others."
      },
      {
        "q": "The micro-environment refers to:",
        "options": [
          "Only the firm's competitors",
          "Forces remote from the firm, such as the economy",
          "The firm's financial statements",
          "Forces close to the firm that affect its ability to serve its customers"
        ],
        "correct": 3,
        "explain": "The macro-environment is the set of remote forces; the micro-environment is the set of close ones."
      },
      {
        "q": "Which of these is a micro-environmental factor?",
        "options": [
          "The demographic environment",
          "Suppliers",
          "The natural environment",
          "The technological environment"
        ],
        "correct": 1,
        "explain": "Micro factors: units in the firm, customers, suppliers, marketing intermediaries, competitors and publics."
      },
      {
        "q": "Which of these is a macro-environmental factor?",
        "options": [
          "Publics",
          "The economic environment",
          "Customers",
          "Marketing intermediaries"
        ],
        "correct": 1,
        "explain": "Macro factors: socio-cultural, legal/political, economic, demographic, technological and natural environments."
      },
      {
        "q": "Marketing intermediaries are firms that help the company to:",
        "options": [
          "Finance the government",
          "Promote, sell and distribute its products to final buyers",
          "Supply raw materials",
          "Regulate its prices"
        ],
        "correct": 1,
        "explain": "They include resellers, physical distribution firms, marketing services agencies and financial intermediaries."
      },
      {
        "q": "A 'public' in the marketing environment is:",
        "options": [
          "Any firm that sells similar products",
          "Only the general population",
          "Only the firm's customers",
          "Any group that has an actual or potential interest in, or impact on, a firm's ability to achieve its objectives"
        ],
        "correct": 3,
        "explain": "Examples: financial, media, government, citizen action, local, general and internal publics."
      },
      {
        "q": "Which of these is NOT one of the customer markets listed?",
        "options": [
          "Reseller markets",
          "Competitor markets",
          "Consumer markets",
          "Government markets"
        ],
        "correct": 1,
        "explain": "The listed customer markets are consumer, business, reseller, institutional, government and international."
      },
      {
        "q": "The economic environment consists of factors that affect:",
        "options": [
          "The firm's production methods",
          "Consumer purchasing power and spending patterns",
          "The laws on product safety",
          "The firm's brand image"
        ],
        "correct": 1,
        "explain": "Income, cost of living, interest rates, savings and borrowing patterns all affect the marketing task."
      },
      {
        "q": "The demographic environment is about:",
        "options": [
          "New inventions",
          "Interest rates and inflation",
          "Consumer protection laws",
          "People: population size, density, location, age, gender, race and occupation"
        ],
        "correct": 3,
        "explain": "People are important because they make up markets."
      },
      {
        "q": "Marketers can respond to the marketing environment by:",
        "options": [
          "Relying on government to act for them",
          "Ignoring it completely",
          "Only reacting after a crisis",
          "Adapting to changes or adopting an environmental management perspective"
        ],
        "correct": 3,
        "explain": "Environmental factors are also highly interrelated, so changes in one can affect others."
      }
    ]
  },
  "bcpc205-w5-consumer": {
    "title": "Week 5 — Understanding Consumer Behaviour",
    "questions": [
      {
        "q": "Consumer behaviour is the buying behaviour of:",
        "options": [
          "Government departments",
          "Businesses buying raw materials",
          "Resellers buying for resale",
          "Final consumers, meaning individuals and households who buy goods and services for personal consumption"
        ],
        "correct": 3,
        "explain": "Business buyer behaviour is a separate topic."
      },
      {
        "q": "Routine response behaviour is when consumers:",
        "options": [
          "Buy on a sudden strong urge",
          "Seek information on many substitutes",
          "Frequently buy low-value items that need very little thought",
          "Carefully research every purchase"
        ],
        "correct": 2,
        "explain": "Examples: bread, soap, sachet water."
      },
      {
        "q": "Extensive decision-making is typical when buying:",
        "options": [
          "Low-value everyday items",
          "Durable products, after seeking information on substitutes",
          "Free samples",
          "Items on a sudden impulse"
        ],
        "correct": 1,
        "explain": "The higher the cost and risk, the more thought goes into the decision."
      },
      {
        "q": "Impulse buying is when a consumer:",
        "options": [
          "Buys only on discount",
          "Compares several brands over weeks",
          "Follows a shopping list",
          "Buys because of a strong urge to buy something immediately, with little thought"
        ],
        "correct": 3,
        "explain": "Marketers use displays and placement at checkouts to trigger impulse purchases."
      },
      {
        "q": "The first stage of the consumer decision process is:",
        "options": [
          "Post-purchase evaluation",
          "Problem or opportunity recognition",
          "Information search",
          "Evaluation of alternatives"
        ],
        "correct": 1,
        "explain": "It starts when the buyer senses a difference between the actual state and a desired state."
      },
      {
        "q": "The 'evoked set' is:",
        "options": [
          "The brand the consumer finally buys",
          "The brands the consumer has never heard of",
          "The number of brands a consumer considers when searching for information",
          "All the brands available on the market"
        ],
        "correct": 2,
        "explain": "Marketers try to increase the size of the evoked set through repetition and advertising."
      },
      {
        "q": "Brand image is:",
        "options": [
          "The price of a brand",
          "The logo of a brand",
          "The packaging of a brand",
          "The set of beliefs that consumers hold about a particular brand"
        ],
        "correct": 3,
        "explain": "It is one of the evaluative criteria used when comparing alternatives."
      },
      {
        "q": "Cognitive dissonance in consumer behaviour is:",
        "options": [
          "Discomfort caused by post-purchase conflict",
          "The process of selecting information",
          "A strong urge to buy",
          "A type of social class"
        ],
        "correct": 0,
        "explain": "It may occur just after a purchase and can lead the buyer to doubt the decision."
      },
      {
        "q": "Which of these is a SOCIAL factor affecting consumer behaviour?",
        "options": [
          "Personality",
          "Reference group influence",
          "Motivation",
          "Perception"
        ],
        "correct": 1,
        "explain": "Social factors: culture and sub-culture, roles and status, reference groups, family and social class. Motivation, perception and personality are psychological factors."
      },
      {
        "q": "In a buying decision-making unit, the 'initiator' is the person who:",
        "options": [
          "First suggests or thinks of buying the product",
          "Uses the product",
          "Pays for the product",
          "Has the final say"
        ],
        "correct": 0,
        "explain": "The roles are initiator, influencer, decider, buyer and user."
      }
    ]
  },
  "bcpc205-w6-stp": {
    "title": "Week 6 — Segmentation, Targeting and Positioning",
    "questions": [
      {
        "q": "Market segmentation is:",
        "options": [
          "Advertising on every available medium",
          "Selling one product to everybody",
          "Dividing a large, heterogeneous market into smaller markets that can be reached efficiently with products that match their unique needs",
          "Lowering prices in all markets"
        ],
        "correct": 2,
        "explain": "Segments are groups of buyers who share similar needs."
      },
      {
        "q": "The four main bases for segmenting consumer markets are:",
        "options": [
          "Product, price, place and promotion",
          "Economic, political, social and technical",
          "Local, regional, national and international",
          "Geographic, demographic, psychographic and behavioural"
        ],
        "correct": 3,
        "explain": "Each base divides the market by a different set of variables."
      },
      {
        "q": "Dividing buyers by social class, lifestyle or personality traits is:",
        "options": [
          "Geographic segmentation",
          "Demographic segmentation",
          "Psychographic segmentation",
          "Behavioural segmentation"
        ],
        "correct": 2,
        "explain": "Psychographic segmentation looks at how people live and think."
      },
      {
        "q": "Segmenting by occasions, benefits sought, user status, usage rate and loyalty status is:",
        "options": [
          "Psychographic segmentation",
          "Behavioural segmentation",
          "Demographic segmentation",
          "Geographic segmentation"
        ],
        "correct": 1,
        "explain": "Behavioural segmentation is based on knowledge, attitudes, uses or responses to a product."
      },
      {
        "q": "Which of these is NOT a condition for effective segmentation?",
        "options": [
          "Actionable",
          "Seasonal",
          "Measurable",
          "Accessible"
        ],
        "correct": 1,
        "explain": "The conditions listed are measurable, accessible, profitable (substantial), differentiable and actionable."
      },
      {
        "q": "Undifferentiated marketing means the firm:",
        "options": [
          "Targets individuals",
          "Goes for a large share of a niche",
          "Ignores segment differences and serves the whole market with one offer",
          "Targets several segments with separate offers"
        ],
        "correct": 2,
        "explain": "It focuses on what is common in the needs of consumers and relies on mass distribution and mass advertising."
      },
      {
        "q": "Differentiated marketing is when a firm:",
        "options": [
          "Serves only one niche",
          "Ignores segment differences",
          "Uses the same offer for everyone",
          "Targets several market segments and designs separate offers for each"
        ],
        "correct": 3,
        "explain": "It usually creates more total sales than undifferentiated marketing, but costs more."
      },
      {
        "q": "Concentrated (niche) marketing is ideal for:",
        "options": [
          "Large firms with huge budgets",
          "Firms with no competitors",
          "Firms that want to serve the whole market",
          "Small firms with limited resources"
        ],
        "correct": 3,
        "explain": "The firm goes for a large share of one or a few submarkets that are usually ignored."
      },
      {
        "q": "Positioning refers to:",
        "options": [
          "The price of the product",
          "The place a product holds in the minds of the target audience relative to competing products",
          "The shelf where the product is placed",
          "The location of the factory"
        ],
        "correct": 1,
        "explain": "Positioning is about perception, which is why repositioning is demanding."
      },
      {
        "q": "Which of these is a reason for repositioning a product?",
        "options": [
          "A fall in the cost of paper",
          "A change in the firm's logo colour",
          "A change in customer needs",
          "A decrease in the number of employees"
        ],
        "correct": 2,
        "explain": "Other reasons: changes in organisational objectives or in the environment, new competitors, new technology and changes in buying behaviour."
      }
    ]
  },
  "bcpc205-w8-product": {
    "title": "Week 8 — Setting Product Strategy",
    "questions": [
      {
        "q": "A product is best described as:",
        "options": [
          "Only a physical good",
          "Anything that can be offered to a market for attention, acquisition, use or consumption to satisfy a want or need",
          "Only something sold for money",
          "Only a branded item"
        ],
        "correct": 1,
        "explain": "A product can be a good, a service, an idea or an experience."
      },
      {
        "q": "Durable goods are:",
        "options": [
          "Goods consumed quickly",
          "Goods bought on impulse",
          "Goods that are always cheap",
          "Goods used over an extended period of time"
        ],
        "correct": 3,
        "explain": "Non-durable goods are used up or outdated quickly."
      },
      {
        "q": "Convenience products are:",
        "options": [
          "Low-value consumable items bought regularly, such as staples, impulse items and emergency items",
          "Expensive items bought rarely",
          "Products consumers do not think of buying",
          "Products with unique qualities"
        ],
        "correct": 0,
        "explain": "Promotion is usually done by the manufacturer."
      },
      {
        "q": "Shopping products are goods that:",
        "options": [
          "Last longer than convenience goods and need careful thought before purchase, such as furniture",
          "Are bought out of habit",
          "Are never compared",
          "Have no competition"
        ],
        "correct": 0,
        "explain": "Consumers compare features, price and quality before buying."
      },
      {
        "q": "Specialty products usually have:",
        "options": [
          "Low prices and many outlets",
          "No brand name",
          "Unique qualities, a high price, a reputable brand and availability at a few outlets",
          "Short life"
        ],
        "correct": 2,
        "explain": "Consumers know exactly what they want and will make special efforts to buy it."
      },
      {
        "q": "Unsought products are:",
        "options": [
          "Products consumers actively search for",
          "Products with high demand",
          "Products consumers usually do not think of buying unless prompted",
          "Cheap daily items"
        ],
        "correct": 2,
        "explain": "They can be new unsought products or regularly unsought products."
      },
      {
        "q": "Which stage of the product life cycle has low sales and little or no profit because of heavy expenses?",
        "options": [
          "Maturity",
          "Introduction",
          "Decline",
          "Growth"
        ],
        "correct": 1,
        "explain": "The product is launched onto the market, awareness is low and promotion costs are high."
      },
      {
        "q": "During maturity, which of these happens?",
        "options": [
          "The product is withdrawn",
          "Sales growth slows, profits stabilise and competition is intense",
          "Profits are at zero",
          "Sales rise rapidly"
        ],
        "correct": 1,
        "explain": "Most potential buyers have already accepted the product."
      },
      {
        "q": "The BCG matrix analyses a firm's portfolio on which two dimensions?",
        "options": [
          "Market growth rate and relative market share",
          "Price and quality",
          "Sales and advertising",
          "Cost and profit"
        ],
        "correct": 0,
        "explain": "Its four categories are stars, question marks, cash cows and dogs."
      },
      {
        "q": "In the new product development process, which stage comes immediately after idea screening?",
        "options": [
          "Commercialisation",
          "Test marketing",
          "Idea generation",
          "Business analysis"
        ],
        "correct": 3,
        "explain": "The order is: idea generation, idea screening, business analysis, product development, test marketing, commercialisation."
      },
      {
        "q": "Test marketing involves:",
        "options": [
          "Launching nationwide",
          "Evaluating ideas against firm objectives",
          "Testing the product and its marketing programme in a realistic market setting",
          "Searching for new ideas"
        ],
        "correct": 2,
        "explain": "Feedback from potential consumers can be used to fine-tune the product."
      }
    ]
  },
  "bcpc205-w9-pricing": {
    "title": "Week 9 — Pricing Strategies and Programmes",
    "questions": [
      {
        "q": "Price is:",
        "options": [
          "The discount given to a customer",
          "The amount of money charged for a product or service, or the sum of the values consumers exchange for the benefits of having or using it",
          "The cost of making the product",
          "The profit on a product"
        ],
        "correct": 1,
        "explain": "Price helps buyers measure the value placed on an exchange."
      },
      {
        "q": "Why is price special among the elements of the marketing mix?",
        "options": [
          "It is controlled by the government",
          "It is the least important",
          "It is the cheapest to change",
          "It is the only element that produces revenue; the others represent costs"
        ],
        "correct": 3,
        "explain": "Product, place and promotion all cost money; price brings money in."
      },
      {
        "q": "Which of these is an INTERNAL influence on price?",
        "options": [
          "Government policy",
          "Elasticity of demand",
          "Competitors' behaviour",
          "The firm's marketing objectives and cost pattern"
        ],
        "correct": 3,
        "explain": "External influences include competitors, elasticity of demand, suppliers' pressure and government policy."
      },
      {
        "q": "Which of these is an EXTERNAL influence on price?",
        "options": [
          "Elasticity of demand for the product",
          "The firm's marketing objectives",
          "The firm's cost pattern",
          "The firm's own pricing ideas"
        ],
        "correct": 0,
        "explain": "Elasticity shows how sensitive demand is to a change in price."
      },
      {
        "q": "Target return and profit maximisation are examples of:",
        "options": [
          "Sales-oriented pricing objectives",
          "Non-price objectives",
          "Income-oriented pricing objectives",
          "Status-quo pricing objectives"
        ],
        "correct": 2,
        "explain": "Sales-oriented objectives are growth in sales or market share."
      },
      {
        "q": "Meeting competition and non-price competition are:",
        "options": [
          "Sales-oriented objectives",
          "Income-oriented objectives",
          "Status-quo pricing objectives",
          "Cost-plus methods"
        ],
        "correct": 2,
        "explain": "The firm aims to maintain its position rather than change it."
      },
      {
        "q": "Skimming pricing means:",
        "options": [
          "Setting one low price for the whole market",
          "Reducing price to destroy competitors",
          "Selling at cost",
          "Setting a high initial price for a new product to get high initial returns"
        ],
        "correct": 3,
        "explain": "Prices are later lowered to reach the next group of customers."
      },
      {
        "q": "Penetration pricing is used when:",
        "options": [
          "Demand is inelastic",
          "Demand is elastic and the firm wants to sell to the whole market at one low price",
          "The product is unique and prestigious",
          "Competitors have left the market"
        ],
        "correct": 1,
        "explain": "It suits products with high fixed costs that need high volumes."
      },
      {
        "q": "Destroyer pricing aims to:",
        "options": [
          "Reward loyal customers",
          "Increase quality perception",
          "Undermine competitors' sales or warn potential entrants by pricing artificially low",
          "Recover development costs quickly"
        ],
        "correct": 2,
        "explain": "It reduces the price of an existing product, or launches a new product at an artificially low price."
      },
      {
        "q": "A loss leader is:",
        "options": [
          "A discontinued product",
          "A product that always makes losses",
          "The most expensive product",
          "A good sold at little or no profit to attract customers to the shop"
        ],
        "correct": 3,
        "explain": "It is a key part of promotional pricing."
      }
    ]
  },
  "bcpc205-w10-place": {
    "title": "Week 10 — Place and Marketing Channels",
    "questions": [
      {
        "q": "Place in the marketing mix is the process of:",
        "options": [
          "Researching the market",
          "Making goods and services available in the right quantities and locations to those who want to buy them",
          "Setting prices",
          "Advertising the product"
        ],
        "correct": 1,
        "explain": "It might involve a single step or several steps."
      },
      {
        "q": "A marketing channel is:",
        "options": [
          "The firm's sales force only",
          "The firm's advertising media",
          "A television station",
          "A set of interdependent organisations that help make a product available for use or consumption"
        ],
        "correct": 3,
        "explain": "Channels connect producers to consumers."
      },
      {
        "q": "Which is a benefit of using intermediaries?",
        "options": [
          "Reducing the number of marketplace contacts and transactions",
          "Less availability",
          "Higher prices for consumers",
          "More work for the producer"
        ],
        "correct": 0,
        "explain": "Intermediaries also lower storage costs, sort goods into assortments and provide specialist skills."
      },
      {
        "q": "Wholesalers:",
        "options": [
          "Stock a range of goods from competing manufacturers to sell on to retailers and other organisations",
          "Never hold stock",
          "Manufacture the goods",
          "Sell only to final consumers"
        ],
        "correct": 0,
        "explain": "Retailers buy in bulk from wholesalers to sell small quantities to final consumers."
      },
      {
        "q": "A franchise is:",
        "options": [
          "Permission to market a product in a specified area",
          "A tax on retailers",
          "A government licence to import",
          "A type of advert"
        ],
        "correct": 0,
        "explain": "The firm selling the franchise is the franchisor; the buyer is the franchisee."
      },
      {
        "q": "Which three criteria are used to evaluate distribution channels?",
        "options": [
          "Cost, time and size",
          "Price, quality and promotion",
          "Speed, safety and style",
          "Economic performance, control and adaptability"
        ],
        "correct": 3,
        "explain": "Channels must be judged on how well they perform, how much control the firm keeps, and how flexible they are."
      },
      {
        "q": "Intensive distribution means:",
        "options": [
          "Choosing only a few outlets",
          "Selling direct to consumers only",
          "Securing as many outlets as possible to maximise availability",
          "Giving one outlet exclusive rights"
        ],
        "correct": 2,
        "explain": "Selective distribution uses only a few outlets."
      },
      {
        "q": "A corporate vertical marketing system:",
        "options": [
          "Relies on one dominant member's influence",
          "Combines all channel stages under one ownership",
          "Uses formal contracts between members",
          "Has no coordination"
        ],
        "correct": 1,
        "explain": "Contractual VMS uses formal agreements; administered VMS relies on the leading member's power."
      },
      {
        "q": "Physical distribution is:",
        "options": [
          "Hiring salespeople",
          "Creating advertisements",
          "The transportation and storage of goods to match target customers' needs along a channel of distribution",
          "Setting the price of goods"
        ],
        "correct": 2,
        "explain": "It balances customer service against cost."
      },
      {
        "q": "Which of these is a factor in choosing the most appropriate transport?",
        "options": [
          "The brand of the driver",
          "The colour of the vehicle",
          "Cost, time, reliability and traceability",
          "The slogan of the firm"
        ],
        "correct": 2,
        "explain": "Accessibility and capability are also factors."
      }
    ]
  },
  "bcpc205-w11-promotion": {
    "title": "Week 11 — Promotion",
    "questions": [
      {
        "q": "Promotion is communication by marketers that:",
        "options": [
          "Delivers goods to customers",
          "Records sales",
          "Sets the product price",
          "Informs, persuades and reminds potential buyers in order to influence an opinion or elicit a response"
        ],
        "correct": 3,
        "explain": "These are the three goals and tasks of promotion."
      },
      {
        "q": "Which element is NOT part of the promotional mix in the lecture?",
        "options": [
          "Public relations",
          "Personal selling",
          "Physical distribution",
          "Advertising"
        ],
        "correct": 2,
        "explain": "The elements are advertising, public relations, sales promotion and personal selling."
      },
      {
        "q": "In the communication process, the receiver:",
        "options": [
          "Creates the noise",
          "Decodes and interprets the message and gives feedback",
          "Chooses the channel",
          "Encodes the message"
        ],
        "correct": 1,
        "explain": "The sender encodes the message and sends it through a channel; noise can disrupt the process."
      },
      {
        "q": "Advertising is any paid form of:",
        "options": [
          "Free publicity",
          "Price cutting",
          "Non-personal presentation and promotion of ideas, goods or services through mass media by an identified sponsor",
          "Face-to-face selling"
        ],
        "correct": 2,
        "explain": "This is the AMA definition used in the lecture."
      },
      {
        "q": "The first step in an advertising campaign is to:",
        "options": [
          "Identify the target market",
          "Allocate the budget",
          "Execute the campaign",
          "Evaluate the results"
        ],
        "correct": 0,
        "explain": "The seven steps run from identifying the target market through to evaluating the campaign."
      },
      {
        "q": "Personal selling involves:",
        "options": [
          "Mass media broadcasts",
          "Free samples only",
          "Persuasive communication between a seller and a buyer designed to convince the customer to buy",
          "Press releases"
        ],
        "correct": 2,
        "explain": "It is two-way and personal."
      },
      {
        "q": "In the personal selling process, which step follows prospecting?",
        "options": [
          "Pre-approach",
          "Closing the sale",
          "Handling objections",
          "Presentation"
        ],
        "correct": 0,
        "explain": "Order: preparation, prospecting, pre-approach, presentation, handling objections, closing, post-sales support."
      },
      {
        "q": "Sales promotion adds:",
        "options": [
          "Only publicity",
          "Only advertising space",
          "Only discounts to staff",
          "Intrinsic, tangible value to a product or service to achieve given objectives"
        ],
        "correct": 3,
        "explain": "Examples: point-of-sale materials, competitions and demonstrations."
      },
      {
        "q": "Which are the three types of sales promotion?",
        "options": [
          "Product, price and place",
          "Consumer-oriented, trade-oriented and salesforce promotions",
          "Press, radio and television",
          "Local, national and international"
        ],
        "correct": 1,
        "explain": "Examples: price-offs and contests (consumer), free goods and training (trade), bonuses and commissions (salesforce)."
      },
      {
        "q": "Public relations is about:",
        "options": [
          "Giving discounts",
          "Paying for adverts",
          "Selling directly",
          "Building good relations with the organisation's publics by obtaining favourable publicity and a good corporate image"
        ],
        "correct": 3,
        "explain": "Tools include press relations, product publicity, corporate communications, lobbying and counselling."
      }
    ]
  },
  "bcpc205-w12-crm": {
    "title": "Week 12 — Building and Maintaining Customer Relationships",
    "questions": [
      {
        "q": "Customer relationship management (CRM) is:",
        "options": [
          "Giving discounts to all customers",
          "Advertising to customers",
          "The overall process of building and maintaining profitable customer relationships by delivering superior customer value and satisfaction",
          "A database of customer names only"
        ],
        "correct": 2,
        "explain": "CRM is a strategic approach, not just software."
      },
      {
        "q": "Customer-perceived value is:",
        "options": [
          "The number of products sold",
          "The difference between total customer value and total customer cost",
          "The price of the product",
          "The profit made on the product"
        ],
        "correct": 1,
        "explain": "Customers buy from the firm that offers the highest perceived value."
      },
      {
        "q": "Customer satisfaction depends on:",
        "options": [
          "The brand name alone",
          "The price alone",
          "The number of outlets",
          "How the product's perceived performance matches the buyer's expectations"
        ],
        "correct": 3,
        "explain": "Marketers must set the right level of expectations: not too high, not too low."
      },
      {
        "q": "Selective relationship management means:",
        "options": [
          "Building relationships with everyone",
          "Ignoring all customers",
          "Selling only to wholesalers",
          "Relating with more carefully selected customers, targeting fewer but more profitable ones"
        ],
        "correct": 3,
        "explain": "Not all customers are equally profitable."
      },
      {
        "q": "Customer-managed relationships are those in which:",
        "options": [
          "Customers have no say",
          "Customers, empowered by digital technologies, interact with companies and each other to shape the relationship",
          "Only salespeople communicate",
          "The company controls all contact"
        ],
        "correct": 1,
        "explain": "Social media and review sites are examples."
      },
      {
        "q": "A supply chain is:",
        "options": [
          "A channel that stretches from raw materials to components to final products to final buyers",
          "A chain of shops",
          "A set of advertising media",
          "A list of customers"
        ],
        "correct": 0,
        "explain": "Supply chain management coordinates this flow."
      },
      {
        "q": "Customer lifetime value is:",
        "options": [
          "The price of the product",
          "The value of one purchase",
          "The value of the entire stream of purchases a customer would make over a lifetime of patronage",
          "The firm's total sales"
        ],
        "correct": 2,
        "explain": "It shows why keeping a customer is worth more than one sale."
      },
      {
        "q": "Share of customer is:",
        "options": [
          "The portion of the customer's purchasing that a company gets in its product categories",
          "The firm's market share",
          "The firm's profit",
          "The customer's age"
        ],
        "correct": 0,
        "explain": "Companies grow share of customer by offering more to existing customers."
      },
      {
        "q": "Customer equity is:",
        "options": [
          "The firm's advertising budget",
          "The firm's total profit",
          "The total combined customer lifetime values of all of the company's customers",
          "The firm's share capital"
        ],
        "correct": 2,
        "explain": "The more loyal and profitable the customers, the higher the customer equity."
      },
      {
        "q": "Developing relationship marketing capabilities starts with steps such as:",
        "options": [
          "Closing outlets",
          "Reducing staff",
          "Data collection, access to marketing tools, customisation and customer service procedures",
          "Cutting prices"
        ],
        "correct": 2,
        "explain": "Done well, these lock customers in through satisfaction, ease of service and value."
      }
    ]
  },
  "bcpc209-w1-law-sources": {
    "title": "Weeks 1-2 — What Is Law? Sources of Law in Ghana",
    "questions": [
      {
        "q": "Law can be defined as:",
        "options": [
          "The opinions of judges only",
          "A body of rules and regulations that regulate the conduct and activities of a group of people within a society",
          "A list of punishments only",
          "Customs that nobody follows"
        ],
        "correct": 1,
        "explain": "Law is a mechanism of social control, ensuring people behave in ways considered acceptable in society."
      },
      {
        "q": "Article 11(1) of the 1992 Constitution lists the laws of Ghana as:",
        "options": [
          "Only Acts of Parliament",
          "Only customary law",
          "Only the Constitution and the common law",
          "The Constitution, enactments made by or under Parliament, orders, rules and regulations under constitutional power, the existing law and the common law"
        ],
        "correct": 3,
        "explain": "These five sources make up the laws of Ghana."
      },
      {
        "q": "Which of these is NOT listed as a source of law in Article 11(1)?",
        "options": [
          "The existing law",
          "Religious doctrine",
          "The common law",
          "The Constitution"
        ],
        "correct": 1,
        "explain": "Religious doctrine is not listed as a source of law, although some religious rules may overlap with law."
      },
      {
        "q": "Equity is:",
        "options": [
          "A set of legal principles that supplement the common law where its application would operate harshly",
          "Another name for customary law",
          "A type of tax",
          "A law made by Parliament"
        ],
        "correct": 0,
        "explain": "It is said to 'mitigate the rigour of common law'."
      },
      {
        "q": "Which of these is a maxim of equity?",
        "options": [
          "Possession is nine-tenths of the law",
          "He who comes to equity must come with clean hands",
          "An eye for an eye",
          "Might is right"
        ],
        "correct": 1,
        "explain": "Others include 'he who seeks equity must do equity'."
      },
      {
        "q": "For customary law to be recognised, it must:",
        "options": [
          "Not be repugnant to natural justice and must comply with the Constitution",
          "Be older than 1,000 years",
          "Be written in a statute",
          "Apply to the whole country"
        ],
        "correct": 0,
        "explain": "Customary law is community specific and develops through usage."
      },
      {
        "q": "Under Article 106, a Bill must be published in the Gazette at least:",
        "options": [
          "14 days before its introduction in Parliament",
          "30 days after",
          "3 days before",
          "6 months before"
        ],
        "correct": 0,
        "explain": "Bills concerning chieftaincy must also be referred to the National House of Chiefs."
      },
      {
        "q": "Delegated legislation refers to:",
        "options": [
          "Customary rules",
          "Enactments made under the authority of Parliament, such as rules made by ministers",
          "The Constitution",
          "Laws made by the courts"
        ],
        "correct": 1,
        "explain": "They are often issued as Legislative Instruments."
      },
      {
        "q": "Under Article 11(4), the 'existing law' includes:",
        "options": [
          "Only laws made after 1992",
          "The written and unwritten laws of Ghana as they existed immediately before the 1992 Constitution came into force",
          "Only foreign law",
          "Only customary law"
        ],
        "correct": 1,
        "explain": "It also includes Acts, Decrees and Statutory Instruments issued before the Constitution."
      }
    ]
  },
  "bcpc209-w2-courts-adr": {
    "title": "Weeks 1-2 — The Court System, Litigation and ADR",
    "questions": [
      {
        "q": "The final appellate court in Ghana is the:",
        "options": [
          "Court of Appeal",
          "High Court",
          "Supreme Court",
          "Circuit Court"
        ],
        "correct": 2,
        "explain": "It also has exclusive jurisdiction in matters relating to the enforcement or interpretation of the Constitution."
      },
      {
        "q": "The Court of Appeal:",
        "options": [
          "Hears only criminal matters",
          "Is purely an appellate court with no original jurisdiction",
          "Is the highest court",
          "Hears all first-instance cases"
        ],
        "correct": 1,
        "explain": "It is normally constituted by a panel of three, and appeals from it lie to the Supreme Court."
      },
      {
        "q": "The High Court is normally constituted by:",
        "options": [
          "A jury of twelve only",
          "A single judge",
          "Three judges",
          "Five judges"
        ],
        "correct": 1,
        "explain": "It has exclusive jurisdiction for enforcing fundamental human rights."
      },
      {
        "q": "Regional Tribunals:",
        "options": [
          "Hear civil cases only",
          "Hear family matters only",
          "Hear land disputes",
          "Exercise special criminal jurisdiction and have no civil jurisdiction"
        ],
        "correct": 3,
        "explain": "They try offences against the state and public interest."
      },
      {
        "q": "The Circuit Court has civil jurisdiction in contract or tort for liquidated claims not exceeding:",
        "options": [
          "GH¢100",
          "GH¢500,000",
          "GH¢2,000,000",
          "GH¢20,000"
        ],
        "correct": 2,
        "explain": "The District Court's limit is GH¢500,000."
      },
      {
        "q": "Which courts are District Courts?",
        "options": [
          "The Family Court, Juvenile Court and Motor Court",
          "The Court of Appeal",
          "Regional Tribunals",
          "The Supreme Court and High Court"
        ],
        "correct": 0,
        "explain": "The District Courts are the largest number of courts in the country."
      },
      {
        "q": "Which is a challenge of litigation?",
        "options": [
          "It is always private",
          "It is always cheap",
          "It is time consuming and costly",
          "It is always fast"
        ],
        "correct": 2,
        "explain": "Filing fees, legal fees and delays are all costs of going to court."
      },
      {
        "q": "Alternative Dispute Resolution (ADR) is:",
        "options": [
          "A law",
          "A type of court",
          "A tax",
          "A means of resolving disputes other than litigation"
        ],
        "correct": 3,
        "explain": "The main forms in Ghana are negotiation, mediation and arbitration."
      },
      {
        "q": "In mediation, the mediator:",
        "options": [
          "Decides the case",
          "Is a neutral facilitator who helps the parties reach a voluntary agreement",
          "Represents one party",
          "Is a judge"
        ],
        "correct": 1,
        "explain": "A mediator cannot favour one party over another."
      },
      {
        "q": "Negotiation differs from mediation because in negotiation:",
        "options": [
          "The parties settle the dispute themselves without a third party",
          "The police are involved",
          "An arbitrator decides",
          "A judge decides"
        ],
        "correct": 0,
        "explain": "Success needs willingness to compromise and good faith."
      },
      {
        "q": "Which of these is an advantage of ADR over litigation?",
        "options": [
          "It helps reduce the backlog of cases in the courts and improves access to justice",
          "It is always more formal",
          "It is always slower",
          "It cannot be used for commercial disputes"
        ],
        "correct": 0,
        "explain": "The Commercial Division of the High Court was created for efficient settlement of commercial disputes."
      }
    ]
  },
  "bcpc209-w3-contract-offer": {
    "title": "Weeks 3-4 — Introduction to the Law of Contract and Offer",
    "questions": [
      {
        "q": "A contract is best described as:",
        "options": [
          "A friendly arrangement",
          "Any promise",
          "A verbal threat",
          "An agreement that the law will enforce"
        ],
        "correct": 3,
        "explain": "It is a promise or set of promises which the law will enforce."
      },
      {
        "q": "Which of these is an element of a valid contract?",
        "options": [
          "Offer, acceptance, consideration, intention to create legal relations and capacity",
          "Only witnesses",
          "Only a lawyer",
          "Only a signature"
        ],
        "correct": 0,
        "explain": "These elements must all be present."
      },
      {
        "q": "The doctrine of privity of contract states that:",
        "options": [
          "A contract confers rights and benefits only on the parties themselves, not on third parties",
          "Everyone can enforce a contract",
          "Contracts must be secret",
          "Only companies can contract"
        ],
        "correct": 0,
        "explain": "There are some exceptions to the rule."
      },
      {
        "q": "An offer is:",
        "options": [
          "A proposal in which the offeror expresses willingness to be bound if the offeree accepts",
          "A rejection",
          "A request for information",
          "An invitation to negotiate"
        ],
        "correct": 0,
        "explain": "NTHC Ltd v Antwi defined an offer as an indication by words or conduct that the offeror is prepared to be bound."
      },
      {
        "q": "An invitation to treat is:",
        "options": [
          "A revocation",
          "An acceptance",
          "An invitation to negotiate on the terms proposed",
          "A binding offer"
        ],
        "correct": 2,
        "explain": "A response to an invitation to treat does not create a contract; it results in negotiation."
      },
      {
        "q": "In Fisher v Bell and Pharmaceutical Society v Boots, the display of goods was held to be:",
        "options": [
          "An offer",
          "An invitation to treat",
          "A counter-offer",
          "An acceptance"
        ],
        "correct": 1,
        "explain": "The customer makes the offer when taking the goods to the till."
      },
      {
        "q": "A revocation of an offer by post is effective:",
        "options": [
          "Never",
          "When it is posted",
          "When it is received by the offeree",
          "When the offeror dies"
        ],
        "correct": 2,
        "explain": "A purported revocation after the offer has been accepted is ineffective."
      },
      {
        "q": "Which of these terminates an offer?",
        "options": [
          "Reading the offer",
          "Rejection, counter-offer, lapse of time, or death or insanity of the parties",
          "Payment of tax",
          "Silence for one day only"
        ],
        "correct": 1,
        "explain": "Destruction of the subject matter can also end an offer."
      },
      {
        "q": "A counter-offer:",
        "options": [
          "Accepts the original offer",
          "Extends the original offer",
          "Operates as a rejection of the original offer",
          "Has no effect"
        ],
        "correct": 2,
        "explain": "The original offer cannot later be accepted unless it is renewed."
      },
      {
        "q": "To decide whether a statement is an offer, the court asks if there was:",
        "options": [
          "A signature",
          "A witness",
          "An expression of a promise or commitment to contract, and certainty and definiteness of the essential terms",
          "A lawyer"
        ],
        "correct": 2,
        "explain": "Communication to the offeree is also required."
      }
    ]
  },
  "bcpc209-w4-acceptance-consideration": {
    "title": "Week 4 — Acceptance and Consideration",
    "questions": [
      {
        "q": "Acceptance is:",
        "options": [
          "A final and unqualified manifestation of assent to the terms of an offer",
          "A new offer",
          "A conditional reply",
          "A request for changes"
        ],
        "correct": 0,
        "explain": "It may be express or implied from conduct."
      },
      {
        "q": "The effect of acceptance is that it:",
        "options": [
          "Cancels the offer",
          "Transforms the offer into a contract",
          "Has no effect",
          "Creates an invitation to treat"
        ],
        "correct": 1,
        "explain": "The offeree exercises the power given by the offeror."
      },
      {
        "q": "Acceptance must be:",
        "options": [
          "Absolute and unconditional",
          "Silent",
          "Conditional",
          "Partial"
        ],
        "correct": 0,
        "explain": "A reply that changes the terms is a counter-offer."
      },
      {
        "q": "If the offeror prescribes a method of acceptance, the offeree must:",
        "options": [
          "Use that method or another that is as swift",
          "Wait a year",
          "Use silence",
          "Use any method"
        ],
        "correct": 0,
        "explain": "Manchester Diocesan Council for Education v Commercial and General Investments is the case cited."
      },
      {
        "q": "For an acceptance to create a contract, the offeree must:",
        "options": [
          "Be a lawyer",
          "Be a company",
          "Be wealthy",
          "Have known of the offer"
        ],
        "correct": 3,
        "explain": "Knowledge of the offer is necessary."
      },
      {
        "q": "Consideration is:",
        "options": [
          "The inducement, price or motive that causes a party to enter into a contract",
          "A gift",
          "A penalty",
          "A signature"
        ],
        "correct": 0,
        "explain": "It is something of value given in exchange, for example rent paid for the right to occupy a flat."
      },
      {
        "q": "Consideration may be:",
        "options": [
          "Only goods",
          "A benefit to the promisor or a detriment to the promisee",
          "Only services",
          "Only money"
        ],
        "correct": 1,
        "explain": "The benefit or detriment must be at the request of the promisor."
      },
      {
        "q": "If consideration fails completely, then:",
        "options": [
          "A new contract is created automatically",
          "There is no contract",
          "The court sets the price",
          "The contract is stronger"
        ],
        "correct": 1,
        "explain": "A false consideration cannot support a contract."
      }
    ]
  },
  "bcpc209-w5-intention-capacity": {
    "title": "Week 5 — Intention to Create Legal Relations and Capacity",
    "questions": [
      {
        "q": "Intention to create legal relations refers to:",
        "options": [
          "The intention to be friends",
          "A wish to avoid tax",
          "A plan to sign a document",
          "The intention of the parties that their agreement be legally enforceable in court"
        ],
        "correct": 3,
        "explain": "Mutual promises do not always create a contract."
      },
      {
        "q": "In commercial agreements, the general position is that:",
        "options": [
          "The law ignores them",
          "They did not intend it",
          "Parties are presumed to have intended to create legal relations",
          "Only written agreements count"
        ],
        "correct": 2,
        "explain": "The presumption can be rebutted by an express exclusion."
      },
      {
        "q": "Agreements between husband and wife in a domestic setting are presumed:",
        "options": [
          "To be illegal",
          "To be commercial",
          "To be binding contracts",
          "Not to create legal relations"
        ],
        "correct": 3,
        "explain": "Agreements between parent and child in a domestic setting are treated similarly."
      },
      {
        "q": "Which statement about the contractual age in Ghana is given in the lecture?",
        "options": [
          "The contractual age is 21 years, though other laws such as the Children's Act 1998 set the age of majority at 18",
          "There is no age",
          "It is 30 years",
          "It is 12 years"
        ],
        "correct": 0,
        "explain": "The general rule is that a contract between a minor and an adult is not binding on the minor but is binding on the adult."
      },
      {
        "q": "A contract for 'necessaries' with a minor is:",
        "options": [
          "Void",
          "Binding on the minor",
          "Always voidable",
          "Illegal"
        ],
        "correct": 1,
        "explain": "Necessaries are goods suitable to the minor's condition in life and actual requirements at the time of delivery."
      },
      {
        "q": "The Sale of Goods Act, 1962 (Act 137) defines necessaries in:",
        "options": [
          "Section 2(3)",
          "Section 28",
          "Section 5",
          "Section 100"
        ],
        "correct": 0,
        "explain": "This is the statutory definition used in contract law."
      },
      {
        "q": "Beneficial contracts of service for minors include:",
        "options": [
          "Loan sharking",
          "Apprenticeship contracts",
          "Trading contracts",
          "Gambling"
        ],
        "correct": 1,
        "explain": "The law recognises it is in the minor's interest to learn a trade or profession."
      },
      {
        "q": "A voidable contract with a minor is:",
        "options": [
          "Always enforceable",
          "Binding on the minor until he takes steps to avoid it",
          "Illegal",
          "Void from the start"
        ],
        "correct": 1,
        "explain": "Examples include contracts involving continuing obligations."
      },
      {
        "q": "A minor who is a trader:",
        "options": [
          "Is treated as an adult",
          "Is always liable",
          "Is not liable for goods supplied to him for the purpose of trade",
          "Cannot buy anything"
        ],
        "correct": 2,
        "explain": "Trading contracts are generally not binding on minors."
      },
      {
        "q": "A company registered in Ghana:",
        "options": [
          "Can contract only through the court",
          "Has the powers of a natural person of full capacity",
          "Has no capacity",
          "Cannot enter contracts"
        ],
        "correct": 1,
        "explain": "Companies act through their directors and agents."
      }
    ]
  },
  "bcpc209-w6-mistake-misrep": {
    "title": "Week 6 — Mistake and Misrepresentation",
    "questions": [
      {
        "q": "Vitiating factors are:",
        "options": [
          "Factors that negatively affect the effectiveness of a contract or a party's consent",
          "Types of consideration",
          "Rules about signatures",
          "Factors that strengthen the contract"
        ],
        "correct": 0,
        "explain": "They include mistake, misrepresentation, duress, undue influence and illegality."
      },
      {
        "q": "A unilateral mistake is where:",
        "options": [
          "Both parties are mistaken in the same way",
          "The court makes a mistake",
          "Neither party is mistaken",
          "Only one party is mistaken about the terms or subject matter"
        ],
        "correct": 3,
        "explain": "Generally, unilateral mistakes do not affect the validity of a contract."
      },
      {
        "q": "In a common mistake, both parties:",
        "options": [
          "Make the same mistake about a fundamental fact",
          "Are unaware of the contract",
          "Are both lying",
          "Have different mistakes"
        ],
        "correct": 0,
        "explain": "For example, both parties think the subject matter exists but it does not."
      },
      {
        "q": "If the subject matter had already perished when the contract was made, the contract is:",
        "options": [
          "Illegal",
          "Void for common mistake",
          "Voidable by either party",
          "Valid"
        ],
        "correct": 1,
        "explain": "The principle was stated by Lord Atkin in Bell v Lever Brothers."
      },
      {
        "q": "In Magee v Pennine Insurance, the court held that a mistake as to quality:",
        "options": [
          "Does not generally make the contract void",
          "Makes it illegal",
          "Always makes it void",
          "Is irrelevant to insurance only"
        ],
        "correct": 0,
        "explain": "Only a fundamental mistake will do so."
      },
      {
        "q": "A representation is:",
        "options": [
          "A term of the contract",
          "A statement made before the contract that induces it but does not become a term",
          "An offer",
          "A consideration"
        ],
        "correct": 1,
        "explain": "An operative misrepresentation is a false statement of fact that induces the other party."
      },
      {
        "q": "The three types of misrepresentation are:",
        "options": [
          "Active, passive and mixed",
          "Fraudulent, negligent and innocent",
          "Verbal, written and implied",
          "Good, bad and neutral"
        ],
        "correct": 1,
        "explain": "The remedies differ for each."
      },
      {
        "q": "A fraudulent misrepresentation makes a contract:",
        "options": [
          "Void from the start",
          "Voidable at the option of the party defrauded",
          "Illegal",
          "Automatically valid"
        ],
        "correct": 1,
        "explain": "A voidable contract remains valid until rescinded (Clarke v Dickson)."
      },
      {
        "q": "An innocent misrepresentation is an untrue statement made:",
        "options": [
          "With intent to cheat",
          "Deliberately",
          "Carelessly without belief",
          "In good faith with an honest belief in its truth"
        ],
        "correct": 3,
        "explain": "It generally gives the misled party the right to rescind."
      }
    ]
  },
  "bcpc209-w7-duress-illegality": {
    "title": "Week 7 — Duress, Undue Influence and Illegality",
    "questions": [
      {
        "q": "Duress is:",
        "options": [
          "A negotiation",
          "A friendly request",
          "A gift",
          "Obtaining a party's consent by improper pressure or threats"
        ],
        "correct": 3,
        "explain": "Agreements obtained by coercion are generally not enforceable."
      },
      {
        "q": "A contract entered into under duress is:",
        "options": [
          "Valid",
          "Voidable at the option of the party who was pressured",
          "Always void",
          "A deed"
        ],
        "correct": 1,
        "explain": "The victim may set the contract aside."
      },
      {
        "q": "Undue influence is:",
        "options": [
          "A type of mistake",
          "A type of acceptance",
          "A criminal offence only",
          "An equitable doctrine where one person uses influence over another to get them to contract on disadvantageous terms"
        ],
        "correct": 3,
        "explain": "It applies where there is an absence of free will."
      },
      {
        "q": "A presumption of undue influence may arise where:",
        "options": [
          "There is a relationship of trust and confidence and the transaction is disadvantageous to the weaker party",
          "The parties are strangers",
          "The price is fair",
          "The contract is in writing"
        ],
        "correct": 0,
        "explain": "Examples include parent and child, or solicitor and client."
      },
      {
        "q": "An illegal contract is one whose subject matter, purpose or performance:",
        "options": [
          "Is too long",
          "Contravenes the law",
          "Is oral",
          "Is too expensive"
        ],
        "correct": 1,
        "explain": "The courts will generally not enforce it."
      },
      {
        "q": "A contract against public policy is one that:",
        "options": [
          "Is signed by a minor",
          "Harms the public interest",
          "Has no consideration",
          "Benefits the public"
        ],
        "correct": 1,
        "explain": "Public policy has to do with public interest."
      },
      {
        "q": "A contract in restraint of trade is:",
        "options": [
          "Always illegal",
          "Always enforceable",
          "Never allowed in business",
          "Enforceable only if the restraint is reasonable and just"
        ],
        "correct": 3,
        "explain": "The court will uphold a reasonable restraint depending on the circumstances."
      },
      {
        "q": "A voidable contract is one that:",
        "options": [
          "Is void from the start",
          "Is illegal",
          "Is valid until the innocent party chooses to set it aside",
          "Is oral only"
        ],
        "correct": 2,
        "explain": "A void contract has no legal effect from the start."
      }
    ]
  },
  "bcpc209-w8-discharge": {
    "title": "Week 8 — Discharge of Contracts",
    "questions": [
      {
        "q": "Discharge of a contract means:",
        "options": [
          "The contract is renewed",
          "The contract is signed",
          "The contract is made",
          "One or both parties are relieved of their obligations under the contract"
        ],
        "correct": 3,
        "explain": "The effect is that the contract is terminated."
      },
      {
        "q": "The general rule on discharge by performance is that a party must perform:",
        "options": [
          "Completely and exactly",
          "Only if convenient",
          "Partly",
          "Roughly"
        ],
        "correct": 0,
        "explain": "Exceptions exist where strict performance would be unfair."
      },
      {
        "q": "Which is an exception to the rule of exact performance?",
        "options": [
          "Cancelling the contract",
          "Performing a different contract",
          "Substantial performance, where the shortfall is trivial",
          "Complete refusal to perform"
        ],
        "correct": 2,
        "explain": "The party must still pay the price less a deduction for the defect."
      },
      {
        "q": "Other exceptions to exact performance include:",
        "options": [
          "Silence of the parties",
          "Divisible contracts, acceptance of part performance and prevention of performance by the other party",
          "Changes in fashion",
          "Cheap prices"
        ],
        "correct": 1,
        "explain": "These exceptions protect fairness."
      },
      {
        "q": "Discharge by agreement means:",
        "options": [
          "One party leaves",
          "The contract expires by silence",
          "The court ends it",
          "The parties agree to end or replace their contract"
        ],
        "correct": 3,
        "explain": "The new agreement needs consideration or a deed."
      },
      {
        "q": "A contract is frustrated when:",
        "options": [
          "One party changes their mind",
          "Performance becomes impossible or impracticable because of events beyond the parties' control after formation",
          "A party is late",
          "The price rises"
        ],
        "correct": 1,
        "explain": "The parties are discharged from further obligations."
      },
      {
        "q": "Taylor v Caldwell is the case about frustration involving:",
        "options": [
          "A car",
          "The hire of a music hall which was destroyed by fire",
          "A ship",
          "A horse"
        ],
        "correct": 1,
        "explain": "It introduced the doctrine of frustration."
      },
      {
        "q": "Anticipatory breach occurs when a party:",
        "options": [
          "Performs perfectly",
          "Performs late",
          "Asks for more time",
          "Shows by words or conduct that they will not perform before the time for performance"
        ],
        "correct": 3,
        "explain": "Frost v Knight is the leading case."
      },
      {
        "q": "A breach of contract always entitles the innocent party to:",
        "options": [
          "Be punished",
          "Receive no remedy",
          "Cancel the contract automatically",
          "Maintain an action for damages"
        ],
        "correct": 3,
        "explain": "Not every breach discharges the innocent party from performing; a fundamental breach does."
      }
    ]
  },
  "bcpc209-w9-agency": {
    "title": "Weeks 9-10 — Agency",
    "questions": [
      {
        "q": "Agency is a relationship in which:",
        "options": [
          "A person lends money",
          "Two firms merge",
          "Two people compete",
          "One person (the agent) is appointed to act as the representative of another (the principal) to form legally binding contracts"
        ],
        "correct": 3,
        "explain": "The agent can bind the principal in contracts with third parties."
      },
      {
        "q": "Agency is described as a:",
        "options": [
          "Criminal relationship",
          "Competitive relationship",
          "Temporary relationship only",
          "Fiduciary relationship"
        ],
        "correct": 3,
        "explain": "The agent must act in the principal's interest, not their own."
      },
      {
        "q": "Agency may be created by:",
        "options": [
          "Only by a government",
          "Only a deed",
          "Agreement, implication or necessity",
          "Only a court order"
        ],
        "correct": 2,
        "explain": "Agreement may be express or implied."
      },
      {
        "q": "What formality is generally required to appoint an agent?",
        "options": [
          "A notary always",
          "None, unless the agent is to execute a deed, which requires authority by deed",
          "A registered contract",
          "A court order"
        ],
        "correct": 1,
        "explain": "The appointment may be oral or written."
      },
      {
        "q": "Agency of necessity may arise where:",
        "options": [
          "There is a genuine emergency and the agent cannot obtain the principal's instructions",
          "The agent just prefers it",
          "There is no property",
          "The principal is happy"
        ],
        "correct": 0,
        "explain": "An example is perishable goods that will spoil (Springer v Great Western Railway)."
      },
      {
        "q": "Which is NOT a condition for agency of necessity?",
        "options": [
          "It is impossible to get instructions",
          "The agent is in control of the principal's property",
          "The agent acts for personal gain",
          "The agent acts bona fide in the interests of all the parties"
        ],
        "correct": 2,
        "explain": "The agent must act bona fide, not for private gain."
      },
      {
        "q": "Express (actual) authority is:",
        "options": [
          "Authority assumed without any words",
          "Authority by silence",
          "Authority granted by the terms of a written or oral agreement between principal and agent",
          "Authority of a stranger"
        ],
        "correct": 2,
        "explain": "It is strictly limited to the given purpose."
      },
      {
        "q": "Implied authority allows the agent to:",
        "options": [
          "Appoint a new principal",
          "Do nothing",
          "Do anything",
          "Act in a reasonable, incidental and necessary manner to carry out their duties"
        ],
        "correct": 3,
        "explain": "Ryan v Pilkington is a case on implied authority."
      },
      {
        "q": "An agent's fiduciary duty means:",
        "options": [
          "Keeping secret profits",
          "Making a profit from the position",
          "Putting aside self-interest in favour of the principal",
          "Ignoring instructions"
        ],
        "correct": 2,
        "explain": "It is imposed by law, whatever the contract says."
      },
      {
        "q": "The duty of skill and care means the agent:",
        "options": [
          "Must be a lawyer",
          "Needs no skill",
          "Must use the skill and care expected of someone with their expertise",
          "Can be careless"
        ],
        "correct": 2,
        "explain": "An agent is usually taken on because of special knowledge or skills."
      },
      {
        "q": "One of the principal's duties is to:",
        "options": [
          "Hide information from the agent",
          "Indemnify the agent against liabilities properly incurred in carrying out the agency",
          "Pay the agent nothing",
          "Dismiss the agent at will"
        ],
        "correct": 1,
        "explain": "For example, the landowner who failed to warn agents about a phone line was required to indemnify them."
      }
    ]
  },
  "bcpc209-w11-sale-of-goods": {
    "title": "Weeks 11-12 — Sale of Goods",
    "questions": [
      {
        "q": "Section 1(1) of the Sale of Goods Act, 1962 (Act 137) defines a sale of goods as:",
        "options": [
          "A gift of goods",
          "An exchange of goods for goods",
          "A loan of goods",
          "A contract whereby the seller agrees to transfer the property in goods to the buyer for a price consisting wholly or partly of money"
        ],
        "correct": 3,
        "explain": "Money must be at least part of the price."
      },
      {
        "q": "A barter transaction differs from a sale because barter:",
        "options": [
          "Is free",
          "Exchanges goods for goods without money",
          "Uses only money",
          "Is illegal"
        ],
        "correct": 1,
        "explain": "A sale necessarily involves a money price."
      },
      {
        "q": "A gift differs from a sale because in a gift:",
        "options": [
          "There is a contract of sale",
          "The goods are given for free",
          "The buyer pays later",
          "There is a price"
        ],
        "correct": 1,
        "explain": "No consideration is given for the goods."
      },
      {
        "q": "In a bailment:",
        "options": [
          "Goods are given to another for a particular purpose and title does not pass",
          "Ownership passes to the other party",
          "The goods are sold",
          "The goods are destroyed"
        ],
        "correct": 0,
        "explain": "For example, leaving a car with a mechanic for repairs."
      },
      {
        "q": "Specific goods are goods that are:",
        "options": [
          "Identified and agreed on at the time the contract is made",
          "Not yet made",
          "Not identified",
          "Always expensive"
        ],
        "correct": 0,
        "explain": "Section 5 of Act 137 defines them."
      },
      {
        "q": "Unascertained goods are:",
        "options": [
          "Specific goods",
          "Gifts",
          "Stolen goods",
          "Goods not identified and agreed on at the time of the contract"
        ],
        "correct": 3,
        "explain": "The seller fulfils the contract by delivering goods that match the description."
      },
      {
        "q": "Future goods are goods which:",
        "options": [
          "Are delivered",
          "Do not exist at the time of the contract, such as goods yet to be manufactured or grown",
          "Are in the shop",
          "Are returned"
        ],
        "correct": 1,
        "explain": "The contract is made about goods that will exist later."
      },
      {
        "q": "Section 28 of Act 137 states generally that a non-owner:",
        "options": [
          "Cannot pass a better title than he has",
          "Can always pass good title",
          "Passes title to the second buyer",
          "Needs no authority"
        ],
        "correct": 0,
        "explain": "This is the nemo dat rule; the true owner can recover the goods."
      },
      {
        "q": "Under 'sale or return', ownership passes to the buyer when:",
        "options": [
          "The buyer signifies approval, adopts the transaction or keeps the goods beyond the agreed time",
          "The goods are advertised",
          "The seller pays",
          "The buyer first sees the goods"
        ],
        "correct": 0,
        "explain": "The buyer may return the goods if not satisfied."
      },
      {
        "q": "Section 13 of Act 137 gives the buyer protection about:",
        "options": [
          "Delivery time only",
          "Price only",
          "Quality and fitness of the goods",
          "Packaging only"
        ],
        "correct": 2,
        "explain": "The seller is liable for defects unless they were known to the buyer or would have been revealed on examination."
      },
      {
        "q": "Under sections 21-22, the buyer's obligations include:",
        "options": [
          "Only paying part of the price",
          "Insuring the seller",
          "Returning the goods",
          "Accepting delivery and paying the price"
        ],
        "correct": 3,
        "explain": "If the seller's delivery is not in accordance with the contract, the buyer may refuse it."
      }
    ]
  },
  "bact201-w1-intro": {
    "title": "Week 1 — Introduction to Accounting",
    "questions": [
      {
        "q": "Modern accounting owes its origin to an Italian, Luca Pacioli, who published his work in:",
        "options": [
          "1894",
          "1794",
          "1294",
          "1494"
        ],
        "correct": 3,
        "explain": "His book Summa de Arithmetica, Geometria included a description of double-entry bookkeeping."
      },
      {
        "q": "Accounting is best defined as:",
        "options": [
          "Only recording transactions",
          "Only auditing",
          "The process of identifying, measuring and communicating economic information to permit informed judgements and decisions",
          "Only preparing tax returns"
        ],
        "correct": 2,
        "explain": "It also involves classifying and summarising transactions in money terms."
      },
      {
        "q": "Which of these is an aim of accounting?",
        "options": [
          "To reduce the number of customers",
          "To keep systematic records and to ascertain the profit or loss of the business",
          "To increase the number of staff",
          "To advertise the business"
        ],
        "correct": 1,
        "explain": "Other aims: protecting business property, providing information on financial position and supporting decisions."
      },
      {
        "q": "The five components of a full set of financial statements include:",
        "options": [
          "A statement of financial position, a statement of comprehensive income, a statement of changes in equity, a cash flow statement and notes",
          "Only a balance sheet",
          "A trial balance and a ledger",
          "Only a profit and loss account"
        ],
        "correct": 0,
        "explain": "The notes include a summary of significant accounting policies."
      },
      {
        "q": "Which body is the Ghanaian accounting standard setter named in the lecture?",
        "options": [
          "FASB",
          "ASB",
          "Ghana National Accounting Standards Board (GNASB)",
          "IASB"
        ],
        "correct": 2,
        "explain": "FASB is in the US, the ASB in the UK, and the IASB issues international standards."
      },
      {
        "q": "The two fundamental qualities of useful accounting information are:",
        "options": [
          "Understandability and verifiability",
          "Comparability and timeliness",
          "Speed and accuracy",
          "Relevance and faithful representation"
        ],
        "correct": 3,
        "explain": "Comparability, understandability and timeliness are enhancing qualities."
      },
      {
        "q": "Information is 'relevant' if it:",
        "options": [
          "Is only about the past",
          "Is very long",
          "Is capable of making a difference to the decisions of users",
          "Is expensive to produce"
        ],
        "correct": 2,
        "explain": "It may have predictive or confirmatory value."
      },
      {
        "q": "Comparability means that information must be:",
        "options": [
          "Always positive",
          "Very detailed",
          "Prepared by an expert",
          "Recorded and presented in a consistent format so valid comparisons can be made over time and between entities"
        ],
        "correct": 3,
        "explain": "It is an enhancing quality."
      },
      {
        "q": "Which of these is a user of financial statements?",
        "options": [
          "Lenders such as banks",
          "Only the government",
          "Nobody",
          "Only the owner"
        ],
        "correct": 0,
        "explain": "Others: management, investors, employees, suppliers, customers, tax authorities and external auditors."
      },
      {
        "q": "A difference between financial accounting and management accounting is that financial accounting:",
        "options": [
          "Is optional",
          "Provides information mainly to outsiders about past events",
          "Is not based on records",
          "Provides information mainly to managers about the future"
        ],
        "correct": 1,
        "explain": "Management accounting is for internal use and focuses more on the future."
      }
    ]
  },
  "bact201-w2-documents": {
    "title": "Week 2 — Business Documents",
    "questions": [
      {
        "q": "Source documents are used to:",
        "options": [
          "Record business transactions in the books of account",
          "Replace the ledger",
          "Calculate depreciation",
          "Print newspapers"
        ],
        "correct": 0,
        "explain": "They are the first evidence of a transaction."
      },
      {
        "q": "Source documents are needed because they:",
        "options": [
          "Are optional for audits",
          "Replace the trial balance",
          "Provide details of transactions, evidence for audit, and proof of income and expenditure for tax authorities",
          "Are free"
        ],
        "correct": 2,
        "explain": "Without them, a transaction cannot be properly supported."
      },
      {
        "q": "A purchase order is used to:",
        "options": [
          "Pay a supplier",
          "Record a sale",
          "Record depreciation",
          "Advise a supplier of particulars of goods required to be purchased"
        ],
        "correct": 3,
        "explain": "Ordinarily no entry is made in the books when an order is placed."
      },
      {
        "q": "An invoice is a document that:",
        "options": [
          "Is issued by the tax office",
          "Is used for cash sales only",
          "Is sent by a seller to a customer showing details of goods sold on credit",
          "Is issued by the bank"
        ],
        "correct": 2,
        "explain": "To the seller it is a sales invoice; to the buyer it is a purchase invoice."
      },
      {
        "q": "A cheque is an order made to a bank to:",
        "options": [
          "Pay on demand a stated sum of money to a named person, their order, or the bearer",
          "Open an account",
          "Close an account",
          "Charge interest"
        ],
        "correct": 0,
        "explain": "The cheque counterfoil is a record of cheques issued."
      },
      {
        "q": "A payment voucher is a source document for:",
        "options": [
          "The credit side of the cash book",
          "The trial balance",
          "The debit side of the cash book",
          "The sales day book"
        ],
        "correct": 0,
        "explain": "Payments can only be made when it has been authorised by responsible officials."
      },
      {
        "q": "A journal voucher is designed to:",
        "options": [
          "Record cheques",
          "Fulfil the functions of the journal proper and requires authorisation before posting",
          "Replace invoices",
          "Record cash sales"
        ],
        "correct": 1,
        "explain": "It is used for entries that do not pass through other books."
      },
      {
        "q": "A bank statement:",
        "options": [
          "Is prepared by the customer",
          "Details the customer's activities with the bank, showing incomings and outgoings on the account",
          "Is prepared by the tax authority",
          "Is a type of invoice"
        ],
        "correct": 1,
        "explain": "It is a source document for bank reconciliation."
      },
      {
        "q": "A bank advice slip informs a customer of:",
        "options": [
          "Debits and credits other than cheques, such as standing orders, interest and bank charges",
          "The bank's profit",
          "The customer's invoices",
          "The customer's stock"
        ],
        "correct": 0,
        "explain": "These items are often missing from the cash book until the advice is received."
      }
    ]
  },
  "bact201-w3-concepts": {
    "title": "Week 3 — Accounting Concepts and Conventions",
    "questions": [
      {
        "q": "The going concern concept assumes that the business:",
        "options": [
          "Has no assets",
          "Has no debts",
          "Will continue to operate for the foreseeable future",
          "Will close soon"
        ],
        "correct": 2,
        "explain": "Assets are therefore not valued at 'break-up' value."
      },
      {
        "q": "The consistency concept states that:",
        "options": [
          "Accounts need not be consistent",
          "Once a method of accounting treatment is chosen, all similar items should be treated in the same way from period to period",
          "Only one method exists",
          "Methods should change every year"
        ],
        "correct": 1,
        "explain": "Frequent changes of policy reduce comparability."
      },
      {
        "q": "The accrual concept says that net profit is:",
        "options": [
          "Sales minus purchases",
          "Cash received minus cash paid",
          "Closing cash minus opening cash",
          "The difference between revenues and the expenses used up to obtain those revenues"
        ],
        "correct": 3,
        "explain": "This is also called matching."
      },
      {
        "q": "The prudence concept requires the accountant to:",
        "options": [
          "Be on the side of safety and choose the less favourable result where alternatives exist",
          "Ignore losses",
          "Always choose the most favourable result",
          "Ignore profits"
        ],
        "correct": 0,
        "explain": "Prudence does not justify deliberately understating profits."
      },
      {
        "q": "Substance over form means transactions should be accounted for:",
        "options": [
          "According to their economic reality rather than their legal form",
          "Randomly",
          "According to the owner's wishes",
          "According to their legal form only"
        ],
        "correct": 0,
        "explain": "It ensures the accounts present a faithful picture."
      },
      {
        "q": "The business entity concept treats:",
        "options": [
          "The owner and business as one",
          "The affairs of the business as separate from the personal affairs of its owner",
          "All businesses as one",
          "The business as having no owner"
        ],
        "correct": 1,
        "explain": "The owner's personal transactions should not be included in the business accounts."
      },
      {
        "q": "Under the money measurement concept:",
        "options": [
          "Only transactions that can be expressed in money terms are recorded",
          "All facts are recorded",
          "Non-monetary information is recorded",
          "Only cash is recorded"
        ],
        "correct": 0,
        "explain": "It assumes the value of money is constant, ignoring inflation."
      },
      {
        "q": "The realisation concept holds that:",
        "options": [
          "Profit is never recognised",
          "Profit is recognised when goods are produced",
          "Profit is recognised when an order is placed",
          "Profit is recognised only when realisation has occurred, normally when goods are delivered"
        ],
        "correct": 3,
        "explain": "For sales of goods, revenue is generally recognised on delivery."
      },
      {
        "q": "The disclosure concept requires financial statements to:",
        "options": [
          "Include all information necessary for users to make valid decisions",
          "Hide unfavourable information",
          "Include only financial data",
          "Be kept secret"
        ],
        "correct": 0,
        "explain": "Any information relevant to investors or creditors should be disclosed."
      },
      {
        "q": "Under IAS 1, assets and liabilities may NOT be offset unless:",
        "options": [
          "Another IFRS permits it",
          "They are equal",
          "The owner wishes",
          "It is convenient"
        ],
        "correct": 0,
        "explain": "Income and expenses may be offset only in specified situations."
      }
    ]
  },
  "bact201-w4-equation": {
    "title": "Week 4 — Systems of Recording and the Accounting Equation",
    "questions": [
      {
        "q": "The double-entry system is one in which:",
        "options": [
          "Only cash is recorded",
          "Transactions are recorded twice in the same account",
          "Only one aspect is recorded",
          "Both aspects (a debit and a credit) of every transaction are recorded"
        ],
        "correct": 3,
        "explain": "It allows arithmetical accuracy to be checked and true profit to be determined."
      },
      {
        "q": "The accounting equation is:",
        "options": [
          "Assets = Capital - Liabilities",
          "Assets = Capital + Liabilities",
          "Capital = Assets + Liabilities",
          "Liabilities = Assets + Capital"
        ],
        "correct": 1,
        "explain": "Every transaction must keep this equation in balance."
      },
      {
        "q": "If assets are GH¢70,000 and liabilities are GH¢20,000, the owner's capital is:",
        "options": [
          "GH¢70,000",
          "GH¢20,000",
          "GH¢50,000",
          "GH¢90,000"
        ],
        "correct": 2,
        "explain": "Capital = 70,000 - 20,000 = 50,000."
      },
      {
        "q": "A business borrows GH¢10,000 from the bank. The effect is:",
        "options": [
          "Liabilities decrease",
          "Capital increases",
          "Cash (an asset) increases and the loan (a liability) increases by GH¢10,000",
          "Assets decrease"
        ],
        "correct": 2,
        "explain": "Both sides of the equation increase equally."
      },
      {
        "q": "Buying inventory of GH¢3,000 on credit will:",
        "options": [
          "Increase capital",
          "Decrease cash",
          "Decrease liabilities",
          "Increase inventory (an asset) and increase trade payables (a liability)"
        ],
        "correct": 3,
        "explain": "No cash is paid at the time of purchase."
      },
      {
        "q": "Paying part of a supplier's account by cheque will:",
        "options": [
          "Decrease capital",
          "Increase capital",
          "Decrease assets (bank) and decrease liabilities (trade payables)",
          "Increase assets"
        ],
        "correct": 2,
        "explain": "Both sides of the equation decrease equally."
      },
      {
        "q": "Paying expenses such as electricity and salaries:",
        "options": [
          "Increases assets",
          "Increases capital",
          "Increases liabilities",
          "Decreases assets (cash) and decreases capital (profit)"
        ],
        "correct": 3,
        "explain": "Expenses reduce profit and therefore capital."
      },
      {
        "q": "The sales day book records:",
        "options": [
          "Credit sales, using sales invoices as source documents",
          "Cash sales",
          "All cash and bank transactions",
          "Credit purchases"
        ],
        "correct": 0,
        "explain": "The purchases day book records credit purchases from purchase invoices."
      },
      {
        "q": "Return inwards are:",
        "options": [
          "Goods returned by customers after a sale",
          "Goods held in stock",
          "Goods bought for cash",
          "Goods returned to suppliers"
        ],
        "correct": 0,
        "explain": "They reduce sales revenue."
      }
    ]
  },
  "bact201-w4-journal": {
    "title": "Week 4-5 — The Journal, Capital and Revenue Expenditure",
    "questions": [
      {
        "q": "According to the double-entry system, transactions are recorded in two stages:",
        "options": [
          "The trial balance, then the ledger",
          "The journal first, then the ledger",
          "The cash book, then the balance sheet",
          "The ledger first, then the journal"
        ],
        "correct": 1,
        "explain": "The journal is the book of original entry."
      },
      {
        "q": "In the journal, 'Being' at the end of an entry introduces:",
        "options": [
          "The credit",
          "The narration, explaining the entry",
          "The folio",
          "The debit"
        ],
        "correct": 1,
        "explain": "For example, 'Being goods sold for cash'."
      },
      {
        "q": "The journal entry for introducing capital in cash is:",
        "options": [
          "Debit Cash, credit Sales",
          "Debit Sales, credit Cash",
          "Debit Capital, credit Cash",
          "Debit Cash, credit Capital"
        ],
        "correct": 3,
        "explain": "Cash (an asset) increases; capital (owner's equity) increases."
      },
      {
        "q": "Furniture of GH¢10,000 is bought on credit from Kpogas Ltd. The entry is:",
        "options": [
          "Debit Furniture, credit Kpogas Ltd",
          "Debit Purchases, credit Cash",
          "Debit Kpogas Ltd, credit Furniture",
          "Debit Cash, credit Furniture"
        ],
        "correct": 0,
        "explain": "The asset increases, and the liability to the supplier increases."
      },
      {
        "q": "Capital expenditure is expenditure whose benefit:",
        "options": [
          "Is always small",
          "Is used up within the year",
          "Is always paid by cheque",
          "Is long term, lasting more than one accounting year"
        ],
        "correct": 3,
        "explain": "It is shown on the balance sheet as an asset."
      },
      {
        "q": "Revenue expenditure is expenditure whose benefit:",
        "options": [
          "Lasts for many years",
          "Is shown on the balance sheet",
          "Increases assets",
          "Is received within the accounting year"
        ],
        "correct": 3,
        "explain": "It is charged to the profit and loss account."
      },
      {
        "q": "Which is revenue expenditure?",
        "options": [
          "Repairs and maintenance of a machine",
          "Purchase of land",
          "Building a new factory",
          "Purchase of a new motor van"
        ],
        "correct": 0,
        "explain": "Repairs restore the existing asset; they do not create a new asset."
      },
      {
        "q": "Which is capital expenditure?",
        "options": [
          "Payment of salaries",
          "Purchase of a motor van for use in the business",
          "Payment of rent",
          "Payment of electricity"
        ],
        "correct": 1,
        "explain": "The van will benefit the business for several years."
      },
      {
        "q": "Capital receipts include:",
        "options": [
          "Interest received",
          "A long-term contribution by the owner or a loan",
          "Rent received",
          "Sales revenue"
        ],
        "correct": 1,
        "explain": "Revenue receipts arise from normal trading."
      }
    ]
  },
  "bact201-w5-ledger": {
    "title": "Week 5 — The Ledger and the Cash Book",
    "questions": [
      {
        "q": "A ledger is:",
        "options": [
          "A book containing accounts, where entries from the journal are posted",
          "A bank statement",
          "A trial balance",
          "A source document"
        ],
        "correct": 0,
        "explain": "Entries are posted from the books of original entry."
      },
      {
        "q": "Which account is DEBITED when an asset increases?",
        "options": [
          "The asset account",
          "The sales account",
          "The capital account",
          "A liability account"
        ],
        "correct": 0,
        "explain": "Assets and expenses are debited when they increase; liabilities, capital and income are credited."
      },
      {
        "q": "Which account is CREDITED when income increases?",
        "options": [
          "The cash account",
          "The expense account",
          "The income (e.g. sales) account",
          "The asset account"
        ],
        "correct": 2,
        "explain": "Income increases are credits."
      },
      {
        "q": "Drawings by the owner are:",
        "options": [
          "Credited to capital",
          "Credited to the drawings account",
          "Credited to sales",
          "Debited to the drawings account"
        ],
        "correct": 3,
        "explain": "Drawings reduce the owner's capital."
      },
      {
        "q": "When an account is balanced, a balance carried down (c/d) is:",
        "options": [
          "The difference between the two sides, brought down (b/d) on the opposite side at the start of the next period",
          "Always zero",
          "The total of both sides",
          "Written only on the debit side"
        ],
        "correct": 0,
        "explain": "A debit balance is brought down on the debit side."
      },
      {
        "q": "The cash book is special because it is:",
        "options": [
          "Only a trial balance",
          "A source document",
          "Only a journal",
          "Both a book of original entry and a ledger account"
        ],
        "correct": 3,
        "explain": "It records all cash and bank transactions."
      },
      {
        "q": "A two-column cash book has columns for:",
        "options": [
          "Bank and discount",
          "Cash and discount",
          "Sales and purchases",
          "Cash and bank"
        ],
        "correct": 1,
        "explain": "A three-column cash book has discount, cash and bank columns."
      },
      {
        "q": "Discount allowed to customers is recorded:",
        "options": [
          "On the debit side of the cash book, in the discount column",
          "In the sales account",
          "On the credit side",
          "In the bank account"
        ],
        "correct": 0,
        "explain": "Discount received from suppliers is recorded on the credit side."
      },
      {
        "q": "A contra entry in the cash book is:",
        "options": [
          "A return",
          "A sale",
          "A purchase",
          "A transfer between cash and bank, appearing on both sides of the cash book"
        ],
        "correct": 3,
        "explain": "For example, depositing cash in the bank."
      }
    ]
  },
  "bact201-w6-trial-balance": {
    "title": "Week 6 — The Trial Balance and Errors",
    "questions": [
      {
        "q": "A trial balance is:",
        "options": [
          "A source document",
          "A bank statement",
          "A list of ledger account balances at a point in time to check that total debits equal total credits",
          "A final account"
        ],
        "correct": 2,
        "explain": "It is an arithmetical test of the ledger accounts."
      },
      {
        "q": "The trial balance serves three main purposes. Which of these is one?",
        "options": [
          "It records transactions",
          "It gives the bank balance",
          "It replaces the cash book",
          "It is the basis for preparing the final accounts"
        ],
        "correct": 3,
        "explain": "It also checks equality of debits and credits and summarises the ledger."
      },
      {
        "q": "Which error does NOT affect the agreement of the trial balance?",
        "options": [
          "An error of omission, where a transaction is completely left out",
          "Wrong addition",
          "A wrong amount on one side",
          "Posting to one side only"
        ],
        "correct": 0,
        "explain": "If both sides are omitted, the totals still agree."
      },
      {
        "q": "A compensating error is:",
        "options": [
          "An omission",
          "A reversal",
          "A single posting error",
          "Where errors of equal amounts on opposite sides cancel each other out"
        ],
        "correct": 3,
        "explain": "For example, purchases and sales both overcast by GH¢150."
      },
      {
        "q": "An error of principle is:",
        "options": [
          "A missing entry",
          "Posting an item to the wrong class of account, such as an expense as an asset",
          "A wrong total",
          "A reversal"
        ],
        "correct": 1,
        "explain": "For example, repairs to a building posted to the building account."
      },
      {
        "q": "An error of reversal of entries is where:",
        "options": [
          "The amount is wrong",
          "A transaction is omitted",
          "The debit and credit are posted on the wrong sides",
          "Only one side is posted"
        ],
        "correct": 2,
        "explain": "The trial balance still agrees."
      },
      {
        "q": "Errors that DO affect the trial balance are corrected through:",
        "options": [
          "The capital account",
          "The bank account",
          "A suspense account",
          "The sales account"
        ],
        "correct": 2,
        "explain": "A suspense account is a temporary account opened when the trial balance does not agree."
      },
      {
        "q": "A trial balance has debits of GH¢85,400 and credits of GH¢84,900. The suspense account will show:",
        "options": [
          "A credit balance of GH¢170,300",
          "A debit balance of GH¢500",
          "A credit balance of GH¢500",
          "No entry"
        ],
        "correct": 2,
        "explain": "The credit side is short by 500, so 500 is credited to suspense to make the totals agree."
      },
      {
        "q": "If a trial balance agrees, this proves that:",
        "options": [
          "The accounts are fully accurate",
          "The profit is correct",
          "Total debits equal total credits, but not that there are no errors",
          "No error exists"
        ],
        "correct": 2,
        "explain": "Several errors can exist without affecting the agreement."
      }
    ]
  },
  "bact201-w7-petty-cash-bank-rec": {
    "title": "Weeks 7-8 — Petty Cash and Bank Reconciliation",
    "questions": [
      {
        "q": "The petty cash book is used to record:",
        "options": [
          "Capital",
          "Sales",
          "Numerous small payments",
          "Large payments"
        ],
        "correct": 2,
        "explain": "A petty cashier is appointed by the chief cashier or accountant."
      },
      {
        "q": "Under the imprest system:",
        "options": [
          "There is no fixed sum",
          "The petty cashier receives a fixed sum and is reimbursed periodically for exactly the amount spent",
          "The cashier keeps no records",
          "The cashier gets a different sum each time"
        ],
        "correct": 1,
        "explain": "The float is restored to the original amount."
      },
      {
        "q": "A petty cashier starts with an imprest of GH¢400 and spends GH¢250. The amount reimbursed to restore the imprest is:",
        "options": [
          "GH¢400",
          "GH¢250",
          "GH¢650",
          "GH¢150"
        ],
        "correct": 1,
        "explain": "Under the imprest system the float is restored by reimbursing exactly the amount spent, which is GH¢250. The cash left in the float is GH¢150."
      },
      {
        "q": "A bank reconciliation statement is prepared to:",
        "options": [
          "Explain the difference between the cash book balance and the bank statement balance",
          "Record depreciation",
          "Prepare a trial balance",
          "Calculate profit"
        ],
        "correct": 0,
        "explain": "It also reduces the chances of fraud."
      },
      {
        "q": "The balances of the cash book and the bank statement may differ because:",
        "options": [
          "The cash book is always wrong",
          "The bank is always wrong",
          "Of inflation",
          "Of timing differences, items one party does not know about, and errors"
        ],
        "correct": 3,
        "explain": "These are the three reasons given."
      },
      {
        "q": "Cheques issued but not yet paid by the bank are called:",
        "options": [
          "Unpresented cheques",
          "Standing orders",
          "Direct debits",
          "Uncleared lodgements"
        ],
        "correct": 0,
        "explain": "They are included in the cash book but not yet on the bank statement."
      },
      {
        "q": "Amounts paid into the bank but not yet credited by the bank are called:",
        "options": [
          "Bank charges",
          "Interest",
          "Uncleared lodgements",
          "Unpresented cheques"
        ],
        "correct": 2,
        "explain": "They are in the cash book but not yet on the bank statement."
      },
      {
        "q": "The cash book shows a debit balance of GH¢5,000. Bank charges of GH¢120 and a standing order of GH¢300 are not yet in the cash book, and a direct dividend of GH¢200 was received. The adjusted cash book balance is:",
        "options": [
          "GH¢4,780",
          "GH¢5,000",
          "GH¢4,580",
          "GH¢5,620"
        ],
        "correct": 0,
        "explain": "5,000 - 120 - 300 + 200 = 4,780."
      },
      {
        "q": "The bank statement shows GH¢4,500. Unpresented cheques total GH¢600 and uncleared lodgements GH¢880. The reconciled balance is:",
        "options": [
          "GH¢5,980",
          "GH¢4,780",
          "GH¢4,220",
          "GH¢4,500"
        ],
        "correct": 1,
        "explain": "4,500 + 880 - 600 = 4,780, which agrees with the adjusted cash book."
      }
    ]
  },
  "bact201-w9-depreciation": {
    "title": "Weeks 9-10 — Depreciation and Disposal of Fixed Assets",
    "questions": [
      {
        "q": "Depreciation is:",
        "options": [
          "The sale of an asset",
          "The allocation of the cost of a fixed asset over its useful life",
          "The repair of an asset",
          "The purchase of an asset"
        ],
        "correct": 1,
        "explain": "It is charged to the profit and loss account."
      },
      {
        "q": "Fixed assets are assets that are:",
        "options": [
          "Acquired for use in the business and not for resale",
          "Always land",
          "Converted into cash in the normal cycle",
          "Acquired for resale"
        ],
        "correct": 0,
        "explain": "Examples: buildings, plant and machinery, furniture and motor vehicles."
      },
      {
        "q": "Which of these is a cause of depreciation?",
        "options": [
          "Wear and tear and the passage of time",
          "Rising sales",
          "More staff",
          "Higher profits"
        ],
        "correct": 0,
        "explain": "Obsolescence is another cause."
      },
      {
        "q": "The straight-line formula for annual depreciation is:",
        "options": [
          "(Cost - scrap value) / estimated useful life",
          "Cost + scrap value",
          "Cost x rate",
          "Cost / scrap value"
        ],
        "correct": 0,
        "explain": "The charge is the same each year."
      },
      {
        "q": "An asset costs GH¢50,000, has a scrap value of GH¢5,000 and a life of 5 years. Straight-line depreciation per year is:",
        "options": [
          "GH¢11,000",
          "GH¢45,000",
          "GH¢9,000",
          "GH¢10,000"
        ],
        "correct": 2,
        "explain": "(50,000 - 5,000) / 5 = 9,000."
      },
      {
        "q": "Using the reducing balance method at 20%, depreciation on an asset costing GH¢50,000 in year 1 is:",
        "options": [
          "GH¢20,000",
          "GH¢8,000",
          "GH¢10,000",
          "GH¢9,000"
        ],
        "correct": 2,
        "explain": "20% of 50,000 = 10,000. The year 2 charge is 20% of the NBV of 40,000 = 8,000."
      },
      {
        "q": "The difference between straight-line and reducing balance is that reducing balance charges depreciation:",
        "options": [
          "Only in the last year",
          "At a fixed percentage on the net book value, so the charge falls each year",
          "On the scrap value",
          "At a fixed amount each year"
        ],
        "correct": 1,
        "explain": "Straight-line charges a fixed amount, calculated on original cost."
      },
      {
        "q": "Net book value (NBV) is:",
        "options": [
          "Sale price",
          "Scrap value",
          "Cost plus depreciation",
          "Cost less accumulated depreciation"
        ],
        "correct": 3,
        "explain": "It is the amount at which the asset appears on the balance sheet."
      },
      {
        "q": "An asset with cost GH¢20,000 and accumulated depreciation GH¢12,000 is sold for GH¢9,500. The result is:",
        "options": [
          "A profit of GH¢9,500",
          "A loss of GH¢2,000",
          "A profit of GH¢1,500 on disposal",
          "A loss of GH¢1,500"
        ],
        "correct": 2,
        "explain": "NBV is 8,000; 9,500 - 8,000 = 1,500 profit."
      },
      {
        "q": "The same asset sold for GH¢6,000 results in:",
        "options": [
          "A loss of GH¢2,000 on disposal",
          "A profit of GH¢2,000",
          "A loss of GH¢6,000",
          "No gain or loss"
        ],
        "correct": 0,
        "explain": "NBV is 8,000; 6,000 - 8,000 = -2,000."
      }
    ]
  },
  "bact201-w11-final-accounts": {
    "title": "Weeks 11-12 — Final Accounts",
    "questions": [
      {
        "q": "The five main components of financial statements include:",
        "options": [
          "The cash book and the day books",
          "The journal and the ledger",
          "Only the trial balance",
          "The statement of profit or loss, the statement of financial position, the statement of cash flows, the statement of changes in equity and notes"
        ],
        "correct": 3,
        "explain": "These are the five components listed in the lecture."
      },
      {
        "q": "The trading account shows:",
        "options": [
          "The capital",
          "The cash flow",
          "The net profit",
          "The gross profit or loss from buying and selling goods"
        ],
        "correct": 3,
        "explain": "Gross profit is sales minus the cost of goods sold."
      },
      {
        "q": "Cost of goods sold is calculated as:",
        "options": [
          "Opening stock + purchases - purchases returns + direct expenses on purchases - closing stock",
          "Closing stock + purchases",
          "Sales - purchases",
          "Opening stock - closing stock only"
        ],
        "correct": 0,
        "explain": "Carriage inwards is a direct expense on purchases."
      },
      {
        "q": "Fiati has opening stock GH¢10,000, purchases GH¢40,000, purchases returns GH¢3,000, closing stock GH¢15,000, sales GH¢60,000 and sales returns GH¢10,000. The cost of goods sold is:",
        "options": [
          "GH¢42,000",
          "GH¢32,000",
          "GH¢27,000",
          "GH¢35,000"
        ],
        "correct": 1,
        "explain": "10,000 + 40,000 - 3,000 - 15,000 = 32,000."
      },
      {
        "q": "For the same business, gross profit is:",
        "options": [
          "GH¢25,000",
          "GH¢18,000",
          "GH¢28,000",
          "GH¢20,000"
        ],
        "correct": 1,
        "explain": "Net sales = 60,000 - 10,000 = 50,000; 50,000 - 32,000 = 18,000."
      },
      {
        "q": "Net profit is:",
        "options": [
          "Gross profit plus other income less expenses",
          "Cash less liabilities",
          "Sales less purchases",
          "Gross profit less drawings"
        ],
        "correct": 0,
        "explain": "Drawings are not expenses; they are deducted from capital."
      },
      {
        "q": "In the profit and loss account, an insurance expense of GH¢500 with GH¢50 prepaid at the year end is shown as:",
        "options": [
          "GH¢50",
          "GH¢500",
          "GH¢450, with GH¢50 as a prepayment in the balance sheet",
          "GH¢550"
        ],
        "correct": 2,
        "explain": "The prepaid amount relates to the next period."
      },
      {
        "q": "Closing stock appears:",
        "options": [
          "Only in the profit and loss account",
          "Only as a liability",
          "In the trading account (deducted from cost of goods sold) and as a current asset in the balance sheet",
          "Nowhere"
        ],
        "correct": 2,
        "explain": "It is used to find cost of goods sold."
      },
      {
        "q": "Depreciation of a fixed asset appears in the profit and loss account as:",
        "options": [
          "Income",
          "A liability",
          "Capital",
          "An expense"
        ],
        "correct": 3,
        "explain": "The accumulated depreciation is deducted from the asset in the balance sheet."
      }
    ]
  }
});

Object.assign(COURSES, {
  "BCPC201": {
    "name": "Information Systems",
    "quizzes": [
      {
        "week": "Week 1",
        "title": "What Is an Information System?",
        "quizId": "bcpc201-w1-what-is-is"
      },
      {
        "week": "Week 2",
        "title": "Hardware",
        "quizId": "bcpc201-w2-hardware"
      },
      {
        "week": "Week 2",
        "title": "Software",
        "quizId": "bcpc201-w2-software"
      },
      {
        "week": "Week 3",
        "title": "Networking and Communication",
        "quizId": "bcpc201-w3-networking"
      },
      {
        "week": "Week 4",
        "title": "Types of Information Systems",
        "quizId": "bcpc201-w4-types-is"
      },
      {
        "week": "Week 4",
        "title": "Globalisation and the Digital Divide",
        "quizId": "bcpc201-w4-globalisation"
      },
      {
        "week": "Week 5",
        "title": "Artificial Intelligence in Business and Academia",
        "quizId": "bcpc201-w5-ai"
      },
      {
        "week": "Week 5",
        "title": "Industrial Internet of Things (IIoT)",
        "quizId": "bcpc201-w5-iot"
      },
      {
        "week": "Week 7-8",
        "title": "HTML Basics and CSS",
        "quizId": "bcpc201-w7-html-css"
      },
      {
        "week": "Week 9-11",
        "title": "JavaScript, Forms and the DOM",
        "quizId": "bcpc201-w9-js-dom"
      },
      {
        "week": "Week 10",
        "title": "Google Forms Add-ons and Automation",
        "quizId": "bcpc201-w10-forms-addons"
      }
    ]
  },
  "BCPC203": {
    "name": "Introduction to Business Finance",
    "quizzes": [
      {
        "week": "Week 1",
        "title": "Overview of Business Finance",
        "quizId": "bcpc203-w1-overview"
      },
      {
        "week": "Week 2",
        "title": "Introduction to Financial Markets",
        "quizId": "bcpc203-w2-markets"
      },
      {
        "week": "Week 3",
        "title": "Sources of Finance",
        "quizId": "bcpc203-w3-sources"
      },
      {
        "week": "Week 4",
        "title": "Introduction to Capital Structure",
        "quizId": "bcpc203-w4-capital-structure"
      },
      {
        "week": "Week 5",
        "title": "Introduction to Financial Statement Analysis",
        "quizId": "bcpc203-w5-fsa"
      },
      {
        "week": "Week 6",
        "title": "Time Value of Money",
        "quizId": "bcpc203-w6-tvm"
      },
      {
        "week": "Week 7",
        "title": "Introduction to Investment Decisions",
        "quizId": "bcpc203-w7-capital-budgeting"
      },
      {
        "week": "Weeks 8-9",
        "title": "Introduction to Risk and Return",
        "quizId": "bcpc203-w8-risk-return"
      },
      {
        "week": "Week 10",
        "title": "Cost of Sources of Capital and WACC",
        "quizId": "bcpc203-w9-wacc"
      },
      {
        "week": "Week 11",
        "title": "Introduction to Dividend Policy",
        "quizId": "bcpc203-w10-dividends"
      }
    ]
  },
  "BCPC205": {
    "name": "Elements of Marketing",
    "quizzes": [
      {
        "week": "Week 1",
        "title": "Overview of Marketing 1",
        "quizId": "bcpc205-w1-overview1"
      },
      {
        "week": "Week 2",
        "title": "Overview of Marketing 2",
        "quizId": "bcpc205-w2-overview2"
      },
      {
        "week": "Week 3",
        "title": "The Marketing Environment",
        "quizId": "bcpc205-w3-environment"
      },
      {
        "week": "Week 5",
        "title": "Understanding Consumer Behaviour",
        "quizId": "bcpc205-w5-consumer"
      },
      {
        "week": "Week 6",
        "title": "Segmentation, Targeting and Positioning",
        "quizId": "bcpc205-w6-stp"
      },
      {
        "week": "Week 8",
        "title": "Setting Product Strategy",
        "quizId": "bcpc205-w8-product"
      },
      {
        "week": "Week 9",
        "title": "Pricing Strategies and Programmes",
        "quizId": "bcpc205-w9-pricing"
      },
      {
        "week": "Week 10",
        "title": "Place and Marketing Channels",
        "quizId": "bcpc205-w10-place"
      },
      {
        "week": "Week 11",
        "title": "Promotion",
        "quizId": "bcpc205-w11-promotion"
      },
      {
        "week": "Week 12",
        "title": "Building and Maintaining Customer Relationships",
        "quizId": "bcpc205-w12-crm"
      }
    ]
  },
  "BCPC209": {
    "name": "Legal Environment of Business",
    "quizzes": [
      {
        "week": "Weeks 1-2",
        "title": "What Is Law? Sources of Law in Ghana",
        "quizId": "bcpc209-w1-law-sources"
      },
      {
        "week": "Weeks 1-2",
        "title": "The Court System, Litigation and ADR",
        "quizId": "bcpc209-w2-courts-adr"
      },
      {
        "week": "Weeks 3-4",
        "title": "Introduction to the Law of Contract and Offer",
        "quizId": "bcpc209-w3-contract-offer"
      },
      {
        "week": "Week 4",
        "title": "Acceptance and Consideration",
        "quizId": "bcpc209-w4-acceptance-consideration"
      },
      {
        "week": "Week 5",
        "title": "Intention to Create Legal Relations and Capacity",
        "quizId": "bcpc209-w5-intention-capacity"
      },
      {
        "week": "Week 6",
        "title": "Mistake and Misrepresentation",
        "quizId": "bcpc209-w6-mistake-misrep"
      },
      {
        "week": "Week 7",
        "title": "Duress, Undue Influence and Illegality",
        "quizId": "bcpc209-w7-duress-illegality"
      },
      {
        "week": "Week 8",
        "title": "Discharge of Contracts",
        "quizId": "bcpc209-w8-discharge"
      },
      {
        "week": "Weeks 9-10",
        "title": "Agency",
        "quizId": "bcpc209-w9-agency"
      },
      {
        "week": "Weeks 11-12",
        "title": "Sale of Goods",
        "quizId": "bcpc209-w11-sale-of-goods"
      }
    ]
  },
  "BACT201": {
    "name": "Principles of Accounting 1",
    "quizzes": [
      {
        "week": "Week 1",
        "title": "Introduction to Accounting",
        "quizId": "bact201-w1-intro"
      },
      {
        "week": "Week 2",
        "title": "Business Documents",
        "quizId": "bact201-w2-documents"
      },
      {
        "week": "Week 3",
        "title": "Accounting Concepts and Conventions",
        "quizId": "bact201-w3-concepts"
      },
      {
        "week": "Week 4",
        "title": "Systems of Recording and the Accounting Equation",
        "quizId": "bact201-w4-equation"
      },
      {
        "week": "Week 4-5",
        "title": "The Journal, Capital and Revenue Expenditure",
        "quizId": "bact201-w4-journal"
      },
      {
        "week": "Week 5",
        "title": "The Ledger and the Cash Book",
        "quizId": "bact201-w5-ledger"
      },
      {
        "week": "Week 6",
        "title": "The Trial Balance and Errors",
        "quizId": "bact201-w6-trial-balance"
      },
      {
        "week": "Weeks 7-8",
        "title": "Petty Cash and Bank Reconciliation",
        "quizId": "bact201-w7-petty-cash-bank-rec"
      },
      {
        "week": "Weeks 9-10",
        "title": "Depreciation and Disposal of Fixed Assets",
        "quizId": "bact201-w9-depreciation"
      },
      {
        "week": "Weeks 11-12",
        "title": "Final Accounts",
        "quizId": "bact201-w11-final-accounts"
      }
    ]
  }
});

// ---- NOTES AND ESSAY PAGES ----
MATERIALS.notes.unshift(...([
  {
    "title": "BCPC 201 — Information Systems: All Notes",
    "course": "BCPC201",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Tap to open the simplified notes for every topic, with key points and a link to the quiz for each.",
    "link": "https://asare984.github.io/bcpc201-notes.html"
  },
  {
    "title": "BCPC 203 — Introduction to Business Finance: All Notes",
    "course": "BCPC203",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Tap to open the simplified notes for every topic, with key points and a link to the quiz for each.",
    "link": "https://asare984.github.io/bcpc203-notes.html"
  },
  {
    "title": "BCPC 205 — Elements of Marketing: All Notes",
    "course": "BCPC205",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Tap to open the simplified notes for every topic, with key points and a link to the quiz for each.",
    "link": "https://asare984.github.io/bcpc205-notes.html"
  },
  {
    "title": "BCPC 209 — Legal Environment of Business: All Notes",
    "course": "BCPC209",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Tap to open the simplified notes for every topic, with key points and a link to the quiz for each.",
    "link": "https://asare984.github.io/bcpc209-notes.html"
  },
  {
    "title": "BACT 201 — Principles of Accounting 1: All Notes",
    "course": "BACT201",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Tap to open the simplified notes for every topic, with key points and a link to the quiz for each.",
    "link": "https://asare984.github.io/bact201-notes.html"
  }
]));
MATERIALS.exercises.unshift(...([
  {
    "title": "BCPC 201 — Information Systems: Essay Questions",
    "course": "BCPC201",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Exam-style essay questions for every topic, with an outline of what a good answer includes.",
    "link": "https://asare984.github.io/bcpc201-essay-questions.html"
  },
  {
    "title": "BCPC 203 — Introduction to Business Finance: Essay Questions",
    "course": "BCPC203",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Exam-style essay questions for every topic, with an outline of what a good answer includes.",
    "link": "https://asare984.github.io/bcpc203-essay-questions.html"
  },
  {
    "title": "BCPC 205 — Elements of Marketing: Essay Questions",
    "course": "BCPC205",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Exam-style essay questions for every topic, with an outline of what a good answer includes.",
    "link": "https://asare984.github.io/bcpc205-essay-questions.html"
  },
  {
    "title": "BCPC 209 — Legal Environment of Business: Essay Questions",
    "course": "BCPC209",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Exam-style essay questions for every topic, with an outline of what a good answer includes.",
    "link": "https://asare984.github.io/bcpc209-essay-questions.html"
  },
  {
    "title": "BACT 201 — Principles of Accounting 1: Essay Questions",
    "course": "BACT201",
    "week": "All weeks",
    "date": "Nov 1, 2026",
    "desc": "Exam-style essay questions for every topic, with an outline of what a good answer includes.",
    "link": "https://asare984.github.io/bact201-essay-questions.html"
  }
]));
