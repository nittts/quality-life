import Heckler from "../../assets/Heckler.png";
import Jaque from "../../assets/Jaque.png";
import Baierle from "../../assets/Baierle.png";
import Edson from "../../assets/Edson.png";
import Douglas from "../../assets/Douglas.png";
import { Ul } from "./style";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const DevCard = () => {
  const developers = [
    {
      name: "William Heckler",
      age: "27",
      img: Heckler,
      role: "Product Owner",
      gitLink: "https://github.com/wiickrz/",
      linkedinLink: "https://www.linkedin.com/in/wiickrz/",
      city: "Curitiba - PR",
    },
    {
      name: "Jaqueline Pereira",
      age: "28",
      img: Jaque,
      role: "Quality Assurance",
      gitLink: "https://github.com/JaquePerera",
      linkedinLink: "https://www.linkedin.com/in/jaqueline-silva-44584894/",
      city: "São Paulo - SP",
    },
    {
      name: "William Baierle",
      age: "21",
      img: Baierle,
      role: "Tech Leader",
      gitLink: "https://github.com/nittts",
      linkedinLink: "https://www.linkedin.com/in/william-baierle-dev/",
      city: "Sobradinho - RS",
    },
    {
      name: "Edson Rodrigues",
      age: "28",
      img: Edson,
      role: "Scrum Master",
      gitLink: "https://github.com/edsonrdev",
      linkedinLink: "https://www.linkedin.com/in/edsssonrodrigues/",
      city: "Floresta - PE",
    },
    {
      name: "Douglas Braz",
      age: "33",
      img: Douglas,
      role: "Quality Assurance",
      gitLink: "https://github.com/ltkbigdad",
      linkedinLink: "https://www.linkedin.com/in/dougbatista/",
      city: "Resende - RJ",
    },
  ];

  return (
    <>
      <Ul>
        {developers.map(
          ({ name, img, role, age, city, linkedinLink, gitLink }) => (
            <li key={name}>
              <img alt={name} src={img} />
              <h2>{name}</h2>
              <h3>{role}</h3>
              <h4>{age} anos</h4>
              <h4>Front-end Developer</h4>
              <span>HTML, CSS, JavaScript, React, TypeScript</span>
              <div>
                <a href={gitLink}>
                  <FaGithub size={24} />
                </a>
                <a href={linkedinLink}>
                  <FaLinkedin size={24} />
                </a>
              </div>
              <span>{city}</span>
            </li>
          )
        )}
      </Ul>
    </>
  );
};

export default DevCard;
