import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import './CSS Files/about.css';

function About() {
  const languages = [
    'JavaScript',
    'TypeScript',
    'HTML/CSS',
    'React',
    'NodeJS',
    'MongoDB',
    'Github/Git',
    'AWS',
    'Bootstrap CSS',
    'Java',
    'JQuery',
    'MYSQL',
  ];

  const learning = [
    'Scala',
    'Android / IOS Development',
    'React native',
    'Vue.js / Angular',
    'Dart / Flutter',
    'Kotlin',
    'Deno'
  ];

  return (
    <section className='about-section' id='About'>
      <h1 className='about-title'>
        About<span style={{ color: '#FF004F' }}>.</span>
      </h1>
      <div className='section-divider'></div>
      <div className='content-wrapper'>
        <div className='about-text'>
          <p>
            {/* Hey there! I'm a passionate web developer with a versatile skill set, specializing primarily in full-stack development. I possess a deep understanding of both front-end and back-end development and am constantly refining my abilities while seeking opportunities for growth in both domains. */}
            안녕하세요. 저는 열정적인 웹 개발자가 되고 싶습니다. 열정을 가지고 있으며 성장 기회를 찾는 동안 끊임없이 능력을 향상시키려 하고 있습니다.
          </p>
          <br />
          <p>
            {/* Currently, I am actively seeking full-stack opportunities that encompass both front-end and back-end development. If you're interested, I'd be thrilled to connect and discuss potential collaborations. I am currently working on several projects that emphasize specific tech stacks and frameworks, allowing me to further enhance my expertise. */}
            현재 저는 기회를 적극적으로 찾고 있습니다.
          </p>
          {/* <br />
          <p>
            In my personal life, I enjoy collecting various figures, spending time watching shows, and creating UI/UX designs, and working out.
            저는 수집을 하고 산책을 합니다.
          </p>
          <br />
          <p>
            Feel free to reach out if you would like to explore the potential of working together!
            </p> */}
        </div>
        <div className='right-section'>
          <div className='tools'>
            <h1>
              <FontAwesomeIcon icon={faFaceSmileWink} style={{ color: '#ff005a' }} />{' '}
              Languages/Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }} /> {' '}
              Learning
            </h1>
            {learning.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;