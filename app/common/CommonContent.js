const myInfo = {
  name: "Salman Raza",
  frontend: "Frontend Developer",
  designer: "UX/UI Designer",
  graphic: "Graphic Designer",
  email: "salraza@gmail.com",
  number: "+971551532975"
}

const myResume = `
// Personal Introduction
// A self-driven graduate with a passion for front-end development and UX/UI design.

class SalmanRaza {
  
  constructor() {
    this.name = "Salman Raza";
    this.profession = "Front-end Developer & UX/UI Designer";
    this.email = "salraza1993@gmail.com";
    this.mobile = "+971 55 1532 975";
    this.dob = "25 December 1990";
    this.nationality = "Indian";
    this.location = "Dubai, UAE";
    this.portfolio = ["www.be.net/salraza1993", "www.salraza.com"];
  }

  // Profile Summary
  profileSummary() {
    return [
      "I'm Salman Raza, and I have over 7+ years of experience as a Front-end Developer and UI/UX Designer. I'm truly passionate about creating visually stunning and user-friendly interfaces for both web and mobile applications. I'm well-versed in various JavaScript frameworks like Angular, ReactJS, VueJS, and NextJS, and I have a strong foundation in HTML, CSS, & JavaScript.",

      "I also have design skills and work with tools like Photoshop, Illustrator, Figma, XD, and Sketch. This unique blend of technical and design expertise allows me to bridge the gap between design and development, resulting in seamless and visually appealing user experiences. I'm dedicated to delivering exceptional digital products."
    ]
  }

  // Area of Expertise
  areaOfExpertise() {
    return [
      "Expertise in Front-end development and UX/UI design.",
      "Strong team-building and project management skills.",
      "Design and maintenance of Internet-facing websites using Cascade Server CMS with a focus",
      "on user interface customization and experience optimization.",
      "Custom layout design and conversion into JavaScript-based frameworks (ReactJs, NextJs,",
      "VueJs, NuxtJs, Angular).",
      "Proficiency in modern web development technologies (HTML, CSS, SCSS, JavaScript, jQuery).",
      "Responsive design and cross-browser compatibility.",
      "Version control systems (Git/Github).",
      "Agile development methodologies.",
      "Problem-solving and attention to detail.",
      "Independent project management.",
      "Effective cross-functional communication and presentation."
    ]
  }

  // Work Experience
  workExperience() {
    return [
      {
        "Role": "Lead Front-end Developer & UX/UI Designer",
        "Company": "NSAS Tourism L.L.C",
        "CompanyWebsite": "https://nsas-tourism.com/",
        "Location": "Dubai, UAE"
        "Duration": { "From": "03/2023", "To": "Present" },
        "Responsibilities": [
          "Developing and maintaining web and mobile interfaces using JavaScript frameworks such as ReactJs, NextJs, Angular, and GraphQL, Wordpress"
          "Converting layouts for various types of websites including informative/portfolio, e-commerce, and portals into HTML/CSS/JS and JavaScript frameworks.",
          "Integrating REST APIs to provide dynamic functionality",
          "Enhancing existing designs and websites",
          "Designed and developed visually appealing and responsive websites, landing pages, and web applications.",
          "Created and maintained design elements such as logos, graphics, and layouts for various mediums including websites, social media, email campaigns, and print materials.",
          "Created wireframes, mockups, and prototypes to help clients visualize the final product.",
          "Collaborated with developers and other team members to ensure that designs are translated into fully functional web and mobile applications."
        ],
        "Projects": [ "nsas-tourism.com", "ndc-x.com", "backofficeadmin.ndcport.com" ]
      },

      {
        "Role": "Senior Front-end Developer & UX/UI Designer",
        "Company": "Index Holding LLC",
        "CompanyWebsite": "https://www.index.ae/",
        "Location": "Dubai, UAE"
        "Duration": { "From": "07/2021", "To": "02/2023" },
        "Responsibilities": [
          "Enhanced UI/UX design and resolved issues for CRM and ERP Management Systems, optimizing user experiences across platforms.",
          "Developed and maintained web and mobile interfaces using modern JavaScript frameworks like VueJs, NuxtJs, and ReactJs, ensuring scalability and performance.",
          "Converted diverse website layouts, including informative/portfolio sites, e-commerce platforms, and portals, into HTML/CSS/JS and JavaScript frameworks for seamless functionality.",
          "Integrated REST APIs to enable dynamic and responsive functionality in various applications.",
          "Designed engaging mobile applications, impactful social media graphics, professional presentations (PPTs), and logo designs, enhancing branding and user engagement.",
          "Continuously enhanced and refined existing designs and websites, improving both aesthetics and functionality."
        ],
        "Projects": [ "theqlab.ae ", "ichs.uk ", "e-dental.market ", "maestro.index.ae", "index.ae ", "aeedc.com ", "dihad.org" ]
      },

      {
        "Role": "Senior Front-end Developer & UX/UI Designer",
        "Company": "TP Connects LLC",
        "CompanyWebsite": "https://tpconnects.com/",
        "Location": "Dubai, UAE"
        "Duration": { "From": "10/2020", "To": "06/2021" },
        "Responsibilities": [
          "Developed and maintained web and mobile interfaces using JavaScript frameworks such as AngularJs, ReactJs.",
          "Converted layouts for airline domain-based websites into HTML/CSS/JS and JavaScript frameworks.",
          "Designed social media graphics, PPT, and logo designs",
          "Enhanced existing designs and websites",
          "Developed and implemented Pravasi Chat Applications similar to WhatsApp & Messenger"
        ],
        "Projects": [ "iflyea.com ", "zeeyarah.ae ", "goeasternaircargo.com", "web.tpconnects.com ", "holidays.gulfair.com ", "web.tpconnects.online" ]
      },

      {
        "Role": "Graphic/UX/UI Designer and Web Designer",
        "Company": "Ummah Design FZF",
        "CompanyWebsite": "https://www.linkedin.com/company/ummahdesign/",
        "Location": "Sharjah, UAE"
        "Duration": { "From": "09/2018", "To": "09/2020" },
        "Responsibilities": [
          "Designed and developed visually appealing and responsive websites, landing pages, and web applications.",
          "Created and maintained design elements such as logos, graphics, and layouts for various mediums including websites, social media, email campaigns, and print materials.",
          "Created wireframes, mockups, and prototypes to help clients visualize the final product.",
          "Collaborated with developers and other team members to ensure that designs are translated into fully functional web and mobile applications.",
          "Created and maintained code and design documentation.",
          "Participated in code reviews and testing to ensure high-quality and maintainable code.",
          "Keep up-to-date with the latest design trends, technologies and tools to ensure that the company is using the best practices.",
          "Managed and prioritized multiple design projects and meet tight deadlines.",
          "Communicated with clients to understand their needs and goals and provide design solutions that align with their brand and vision."
        ],
        "Projects": [ "sia.gov.ae ", "sharjahcd.ae ", "sharjahchildfriendlyoffice.ae" ]
      },

      {
        "Role": "Graphic/UX/UI & Lead Web Designer",
        "Company": "Transformative Learning Solutions",
        "CompanyWebsite": "https://sg.theayurvedaexperience.com/",
        "Location": "Delhi, India"
        "Duration": { "From": "09/2016", "To": "08/2018" },
        "Responsibilities": null,
        "Projects": [ "theayurvedaexperience.com", "theayurvedaexperience.com/blog", "transformative.in" ]
      },
      {
        "Role": "Graphic and Web Designer",
        "Company": "Quarter Pie Interactive Pvt. Ltd",
        "CompanyWebsite": "https://quarterpie.com/",
        "Location": "Delhi, India"
        "Duration": { "From": "01/2015", "To": "08/2016" },
        "Responsibilities": null,
        "Projects": [ "thehindu.com/", "watchtime.in/", "irachaudhuri.com/" ]
      }
    ];
  }

  // Education Details
  education() {
    return [
      { "Degree": "Bachelor of Technology', 'Field': 'Computer Science', 'Institution': 'MANNU, Hyderabad, India" },
      { "Degree": "Intermediate', 'Field': 'Science', 'Institution': 'Bihar Board, Bihar, India' }
    ];
  }

  // Technical Skills
  skills() {
    return {
      frontendDevelopment: [
        "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Bulma", "Material Design",
        "Tailwind", "SASS", "GIT", "Firebase", "WordPress", "TypeScript", "NestJS",
        "Angular", "React", "NextJS", "VueJS", "NuxtJS"
      ],
      designing: [
        "Photoshop", "Illustrator", "Figma", "Sketch"
      ]
    };
  }

  // Languages Spoken
  languages() {
    return ["English - Fluent", "Urdu - Native", "Hindi - Native", "Arabic - Basic"];
  }

  // Hobbies
  hobbies() {
    return ["Reading Blogs", "Watching Web Series", "Listening to Music"];
  }

  // Social Links
  socialLinks() {
    return [
      {
        "LinkedIn": "https://www.linkedin.com/in/salraza1993/",
        "Github": "https://github.com/salraza1993",
        "CodePen": "https://codepen.io/salraza1993",
        "Behance": "https://www.behance.net/salraza1993",
        "Facebook": "https://www.facebook.com/salraza1993/"
      }
    ];
  }
}`;
export { myInfo, myResume }