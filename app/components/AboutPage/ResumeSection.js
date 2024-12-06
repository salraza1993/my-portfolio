"use client";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

export default function StaticCodeEditor() {
  const staticCode = `
class SalmanRaza {
  // Personal Introduction
  // A self-driven graduate with a passion for front-end development and UX/UI design.

  constructor() {
    this.name = 'Salman Raza';
    this.profession = 'Front-end Developer & UX/UI Designer';
    this.email = 'salraza1993@gmail.com';
    this.mobile = '+971 55 1532 975';
    this.dob = '25 December 1990';
    this.nationality = 'Indian';
    this.location = 'Dubai, UAE';
    this.portfolio = 'www.be.net/salraza1993';
  }

  // Work Experience
  workExperience() {
    return [
      {
        'Role': 'Lead Front-end Developer & UX/UI Designer',
        'Company': 'NSAS Tourism L.L.C',
        'Duration': '03/2023 - Present',
        'Responsibilities': [
          'Developing and maintaining web and mobile interfaces using ReactJs, NextJs, Angular, GraphQL.',
          'Converting layouts for various websites into HTML/CSS/JS frameworks.',
          'Integrating REST APIs and optimizing website performance.'
        ]
      },
      {
        'Role': 'Senior Front-end Developer & UX/UI Designer',
        'Company': 'Index Holding LLC',
        'Duration': '07/2021 - 02/2023',
        'Responsibilities': [
          'Enhanced UI/UX design for CRM and ERP Management Systems.',
          'Worked with VueJs, NuxtJs, and ReactJs frameworks.',
          'Designed mobile applications, branding graphics, and social media visuals.'
        ]
      }
    ];
  }

  // Education Details
  education() {
    return [
      { 'Degree': 'Bachelor of Technology', 'Field': 'Computer Science', 'Institution': 'MANNU, Hyderabad, India' },
      { 'Degree': 'Intermediate', 'Field': 'Science', 'Institution': 'Bihar Board, Bihar, India' }
    ];
  }

  // Technical Skills
  skills() {
    return {
      frontendDevelopment: [
        'HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Bulma', 'Material Design',
        'Tailwind', 'SASS', 'GIT', 'Firebase', 'WordPress', 'C#', 'TypeScript', 'NestJS',
        'Angular', 'React', 'NextJS', 'VueJS', 'NuxtJS'
      ],
      designing: [
        'Photoshop', 'Illustrator', 'Figma', 'Sketch'
      ]
    };
  }

  // Languages Spoken
  languages() {
    return ['English - Fluent', 'Urdu - Native', 'Hindi - Native', 'Arabic - Basic'];
  }

  // Hobbies
  hobbies() {
    return ['Reading Blogs', 'Watching Web Series', 'Listening to Music'];
  }
}

`;

  return (
    <section className="code-editor-section">
      <div className="wrapper">
        <AceEditor
          mode="javascript"
          theme="monokai"
          name="static-code-editor"
          value={staticCode}
          readOnly={true} // Disable editing
          fontSize={14}
          width="100%"
          height="400px"
          showGutter={true}
          highlightActiveLine={false}
          setOptions={{
            useWorker: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    </section>
  );
}
