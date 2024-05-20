import React from 'react';
import './TechStack.css';
import reactImage from '../assets/images/react.png';
import cssImage from '../assets/images/css.png';
import cImage from '../assets/images/c.png';
import htmlImage from '../assets/images/html.png';
import javaImage from '../assets/images/java.png';
import jsImage from '../assets/images/javascript.png';
import oracleImage from '../assets/images/oracle.png';
import springImage from '../assets/images/spring.png';
import kafkaImage from '../assets/images/kafka.png';
import mavenImage from '../assets/images/maven.png';
import mysqlImage from '../assets/images/mysql.png';
import cplusImage from '../assets/images/pngegg.png';

function TechStack() {
  return (
    <div className="tech-stack-container">
      <div className="tech-stack">
        <div className="tech-item single-item">
          <div className="tech-image-container">
            <img src={reactImage} alt="React" className="tech-image" />
          </div>
          <p>React</p>
        </div>
        <div className="tech-item">
          <div className="tech-image-container">
            <img src={cssImage} alt="CSS" className="tech-image" />
          </div>
          <p>CSS</p>
        </div>
        <div className="tech-item">
          <div className="tech-image-container">
            <img src={cImage} alt="C" className="tech-image" />
          </div>
          <p>C</p>
        </div>
        <div className="tech-item single-item">
          <div className="tech-image-container">
            <img src={htmlImage} alt="HTML" className="tech-image" />
          </div>
          <p>HTML</p>
        </div>
        <div className="tech-item">
          <div className="tech-image-container">
            <img src={javaImage} alt="Java" className="tech-image" />
          </div>
          <p>Java</p>
        </div>
        <div className="tech-item">
          <div className="tech-image-container">
            <img src={jsImage} alt="JavaScript" className="tech-image" />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="tech-item single-item">
          <div className="tech-image-container">
            <img src={oracleImage} alt="Oracle" className="tech-image" />
          </div>
          <p>Oracle</p>
        </div>
        <div className="tech-item">
          <div className="tech-image-container">
            <img src={springImage} alt="Spring" className="tech-image" />
          </div>
          <p>Spring</p>
        </div>
        <div className="tech-item">
          <div className="tech-image-container">
            <img src={kafkaImage} alt="Kafka" className="tech-image" />
          </div>
          <p>Kafka</p>
        </div>
        <div className="tech-item single-item">
          <div className="tech-image-container">
            <img src={mavenImage} alt="Maven" className="tech-image" />
          </div>
          <p>Maven</p>
        </div>
        <div className="tech-item">
          <div className="tech-image-container">
            <img src={mysqlImage} alt="Python" className="tech-image" />
          </div>
          <p>MySQL</p>
        </div>
        <div className="tech-item">
          <div className="tech-image-container">
            <img src={cplusImage} alt="Docker" className="tech-image" />
          </div>
          <p>C++</p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
