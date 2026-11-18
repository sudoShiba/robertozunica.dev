import type { StoryColumns } from "../types/types.ts"

// Content of the three story columns. Links inside text: [label](url)

export const story: StoryColumns = {
  // Work experience
  "col-1": [
    {
      type: "single",
      title: "Full-Stack Engineer Intern",
      subtitle: "DataCamp",
      date: "July 2026 - September 2026",
      size: 2,
      text: "During my internship as a Full-Stack Software Engineer on the Learner-Experience team at DataCamp, I worked on further developing the learning platform. I actively contributed to both the website and the mobile app, with responsibilities across the front-end and back-end.",
      sites: ["https://datacamp.com"]
    },
    {
      type: "multi",
      title: "Quivr",
      items: [
        { title: "Infrastructure team", date: "July 2026 - Present", text: "I'm part of the infrastructure team, which runs Quivr on Kubernetes with Flux (GitOps)." },
        { title: "Treasurer", date: "July 2026 - Present", text: "I serve as the treasurer for Student Innovations vzw and take part in the general board duties." },
        { title: "Front-end coordinator", date: "July 2026 - Present", text: "I coordinate the front-end work on the Quivr website and app." },
        { title: "Front-end developer", date: "November 2024 - Present", text: "I work on the Quivr frontend site (ReactTS) and app (React Native). Quivr is the student app by and for students, with over 50,000 users." }
      ],
      sites: ["https://quivr.be"]
    },
    {
      type: "single",
      title: "Freelance Developer",
      subtitle: "Shiba.house",
      date: "October 2026 - Present",
      size: 1,
      text: "Under the name Shiba.house, I build custom websites, web apps and internal tools for clients. I'm also building my own product, Penny: a web app that helps youth associations handle their expense claims.",
      sites: ["https://shiba.house", "https://getpenny.be"]
    },
    {
      type: "multi",
      title: "Codefever VZW",
      items: [
        { title: "Teacher", date: "February 2026 - Present", text: "I became a teacher at Codefever after being a teacher's aid for a while. I've taught HTML/CSS/JS." },
        { title: "Teacher's Aid", date: "September 2023 - Present", text: "As a teacher's aid at Codefever, I assist in teaching programming and computer science to students. I've been helping out various classes, from Scratch to Python and web development." }
      ],
      sites: ["https://codefever.be"]
    },
    {
      type: "single",
      title: "Student Developer",
      subtitle: "Groen",
      date: "August 2025 - September 2025",
      size: 1,
      text: "At Groen, I contributed to the development and conceptualization of an interactive platform that provides insight into citizens’ voting behavior. Using Python, I processed the voting data and imported it into the SQL database, and translated the data into a user-friendly web app with an Alpine.js frontend and a PHP backend. The application featured a fully responsive and dynamic design and could also be installed as a PWA.",
      sites: ["https://groen.be"]
    }
  ],

  // Education
  "col-2": [
    {
      type: "single",
      title: "Master's Degree in Computer Science",
      subtitle: "KU Leuven",
      date: "2026 - Present",
      size: 1,
      text: "I've started my Master's in Computer Science at KU Leuven, combining a first master course with the last part of my bachelor.",
      sites: ["https://wms.cs.kuleuven.be"]
    },
    {
      type: "single",
      title: "Bachelor's Degree in Computer Science",
      subtitle: "KU Leuven",
      date: "2024 - Present",
      size: 1,
      image: "assets/KUL.jpg",
      caption: "Department of Computer Science © KU Leuven",
      text: "I am currently pursuing a Bachelor's degree in Computer Science at KU Leuven. My studies have provided me with a solid foundation in programming, algorithms, and software development. I am passionate about learning and applying new technologies to solve real-world problems.",
      sites: ["https://wms.cs.kuleuven.be"]
    },
    {
      type: "single",
      title: "High School Diploma in Maths & Sciences",
      subtitle: "Sint-Leo Hemelsdaele",
      date: "2018 - 2024",
      size: 1,
      image: "assets/SLHD.jpeg",
      caption: "Sint-Leo Hemelsdaele",
      text: "I graduated from high school with a focus on Maths and Sciences. This background has equipped me with strong analytical and problem-solving skills, which I apply in my studies and projects.",
      sites: ["https://sint-leo.be"]
    }
  ],

  // Achievements & more
  "col-3": [
    {
      type: "single",
      title: "Code Relay Winner",
      subtitle: "Proximus & 42 Belgium",
      date: "April 2026",
      size: 1,
      image: "assets/coderelay.jpg",
      caption: "Sverre and I receiving our prize",
      text: "Together with three fellow students [Shahd Abuzubaida](https://www.linkedin.com/in/shahd-abuzubaida-0b749b327/), [Thibo Verstraete](https://www.linkedin.com/in/thibo-verstraete-062497276/) and [Sverre Leeman](https://www.linkedin.com/in/sverreleeman/), we won the Python Code Relay hosted by 42 Belgium during the Proximus Student Tech Experience Day on April 2. The competition was designed as a high-speed relay, testing our ability to think fast, communicate clearly, and build directly upon each other's code under tight deadlines. By maintaining a seamless workflow, our team achieved the leading performance of the workshop and was awarded the first-place prize.",
      sites: ["https://proximus.be", "https://42belgium.be"]
    },
    {
      type: "single",
      title: "Editx Challenges Top Scorer",
      subtitle: "Editx",
      date: "2026",
      size: 1,
      text: "I was a top scorer in two Editx challenges: the CIO Challenge by BNP Paribas Fortis and the Future of IT Leaders in Belgium: Data & AI Challenge.",
      sites: ["https://editx.eu"]
    },
    {
      type: "single",
      title: "L-Interpreter",
      subtitle: "Haskell & WebAssembly",
      size: 1,
      text: "An interpreter for Martin Davis's L language, written in Haskell and compiled to WebAssembly. It runs a program step by step in your browser and shows the state after every step. It can also turn a program into its number, and a number back into its program.",
      sites: ["https://l.robertozunica.dev", "https://github.com/sudoShiba/L-interpreter"]
    },
    {
      type: "single",
      title: "BEST coding challenge winner",
      subtitle: "BEST Leuven",
      date: "November 2024",
      size: 1,
      image: "assets/BEST2024.jpg",
      caption: "Rik, Thomas and I receiving our prize",
      text: "Together with two fellow students [Thomas Verboven](https://www.linkedin.com/in/thomas-verboven/) and Rik Van den Eynde, we won the BEST-NMBS coding challenge on November 26. The competition consisted of a series of small but tricky coding challenges in Python, each designed to test our problem-solving skills and teamwork under time pressure. Throughout the event, we managed to earn points by solving as many challenges as possible within the time limit. Our efforts paid off, and we were awarded the prize for best beginner team.",
      sites: ["https://bestleuven.eu"]
    },
    {
      type: "single",
      title: "ULYSSIS",
      date: "October 2024 - August 2026",
      size: 1,
      image: "assets/ULYSSIS.jpg",
      caption: "the ULYSSIS team at Walibi during teambuilding",
      text: "ULYSSIS is a student organization at KU Leuven that focuses on making computer science and open source more accessible to students. It combines technical projects with workshops and events to share technology in a hands-on, approachable way within the student community.",
      sites: ["https://ulyssis.org"]
    },
    {
      type: "single",
      title: "Best Youth Developer 2024",
      subtitle: "De Lijn",
      date: "January 2024",
      size: 2,
      image: "assets/delijn.jpeg",
      caption: "I am the fourth from the left",
      text: "Together with my randomly assembled team, we were the winners of the De Lijn Best Youth Developer Challenge 2024.",
      sites: [
        "https://www.leuvenactueel.be/nieuws/leuven/de-lijn-bekroont-top-talenten-in-best-youth-developer-challenge?nid=17897",
        "https://pub.be/nl/de-lijn-bekroont-toptalenten-in-best-youth-developer-challenge/"
      ]
    },
    {
      type: "multi",
      title: "KSA Kriko",
      items: [
        { title: "Treasurer", date: "2024 - 2026", text: "As treasurer at KSA Kriko, I managed the group's finances and budget." },
        { title: "Youth Leader", date: "2023 - 2026", text: "As a youth leader at KSA, I organize and guide activities for young people. I'm also the group's webmaster and have been responsible for coordinating a specific age group." }
      ],
      sites: ["https://ksa-kriko.be"]
    }
  ]
}
