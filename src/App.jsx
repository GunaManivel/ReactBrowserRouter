// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import AllCourses from "./Components/AllCourses";
import FullStackDevelopment from "./Components/FullStackDevelopement";
import DataScience from "./Components/Datascience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/DigitalMarketing";
import DigitalMarketing from "./Components/DigitalMarketing";

function App() {
  const [courses, setCourses] = useState([
    // Full Stack Development
    {
      image: "https://source.unsplash.com/1600x900/?programming",
      head: "Full Stack Development",
      content:
        "Full Stack Development is a comprehensive course covering both front-end and back-end technologies. It includes HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, React.js, and more.",
      date: "10",
      month: "February",
    },
    {
      image: "https://source.unsplash.com/1600x900/?coding",
      head: "Full Stack Development",
      content:
        "Full Stack Development is an in-demand skillset that combines expertise in both front-end and back-end development technologies.",
      date: "15",
      month: "March",
    },
    {
      image: "https://source.unsplash.com/1600x900/?web-development",
      head: "Full Stack Development",
      content:
        "Full Stack Development involves mastering technologies such as HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, React.js, and more.",
      date: "20",
      month: "April",
    },
    {
      image: "https://source.unsplash.com/1600x900/?coding,computer",
      head: "Full Stack Development",
      content:
        "Full Stack Development is a versatile skillset combining front-end and back-end technologies essential for modern web development.",
      date: "25",
      month: "May",
    },
    {
      image: "https://source.unsplash.com/1600x900/?code,developer",
      head: "Full Stack Development",
      content:
        "Full Stack Development encompasses a range of technologies including HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and React.js.",
      date: "10",
      month: "June",
    },
    {
      image: "https://source.unsplash.com/1600x900/?programming,coding",
      head: "Full Stack Development",
      content:
        "Full Stack Development requires proficiency in both front-end and back-end technologies such as HTML, CSS, JavaScript, Node.js, and MongoDB.",
      date: "15",
      month: "July",
    },
    {
      image: "https://source.unsplash.com/1600x900/?software,development",
      head: "Full Stack Development",
      content:
        "Full Stack Development is a sought-after skillset combining expertise in both front-end and back-end technologies.",
      date: "20",
      month: "August",
    },
    {
      image: "https://source.unsplash.com/1600x900/?technology,programming",
      head: "Full Stack Development",
      content:
        "Full Stack Development involves mastering technologies like HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and React.js.",
      date: "25",
      month: "September",
    },
    // Data Science
    {
      image: "https://source.unsplash.com/1600x900/?data,science",
      head: "Data Science",
      content:
        "Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data. Topics include machine learning, data mining, and data visualization.",
      date: "10",
      month: "October",
    },
    {
      image: "https://source.unsplash.com/1600x900/?machine,learning",
      head: "Data Science",
      content:
        "Data Science involves processing and analyzing large datasets to uncover patterns, trends, and insights that can be used to make data-driven decisions.",
      date: "15",
      month: "November",
    },
    {
      image: "https://source.unsplash.com/1600x900/?data,analytics",
      head: "Data Science",
      content:
        "Data Science combines expertise in statistics, programming, and domain knowledge to derive meaningful insights from data.",
      date: "20",
      month: "December",
    },
    {
      image: "https://source.unsplash.com/1600x900/?big,data",
      head: "Data Science",
      content:
        "Data Science is essential for businesses looking to leverage data for strategic decision-making and gaining a competitive edge in the market.",
      date: "25",
      month: "January",
    },
    {
      image: "https://source.unsplash.com/1600x900/?data,analysis",
      head: "Data Science",
      content:
        "Data Science involves applying statistical analysis and machine learning techniques to extract valuable insights from data.",
      date: "10",
      month: "February",
    },
    {
      image: "https://source.unsplash.com/1600x900/?data,visualization",
      head: "Data Science",
      content:
        "Data Science encompasses a range of skills including data wrangling, data visualization, predictive modeling, and statistical analysis.",
      date: "15",
      month: "March",
    },
    {
      image: "https://source.unsplash.com/1600x900/?data,technology",
      head: "Data Science",
      content:
        "Data Science professionals are in high demand as organizations seek to derive actionable insights from the ever-increasing volume of data.",
      date: "20",
      month: "April",
    },
    {
      image: "https://source.unsplash.com/1600x900/?data,mining",
      head: "Data Science",
      content:
        "Data Science involves extracting knowledge and insights from large datasets using a combination of statistical analysis, machine learning, and data visualization techniques.",
      date: "25",
      month: "May",
    },

    // Cyber Security
    {
      image: "https://source.unsplash.com/1600x900/?cyber,crime",
      head: "Cyber Security",
      content:
        "Cyber Security is the practice of protecting systems, networks, and programs from digital attacks. This course covers topics such as network security, cryptography, ethical hacking, and more.",
      date: "10",
      month: "June",
    },
    {
      image: "https://source.unsplash.com/1600x900/?cyber,code",
      head: "Cyber Security",
      content:
        "Cyber Security professionals play a crucial role in safeguarding digital assets from cyber threats such as malware, ransomware, and phishing attacks.",
      date: "15",
      month: "July",
    },
    {
      image: "https://source.unsplash.com/1600x900/?Cyber,Security",
      head: "Cyber Security",
      content:
        "Cyber Security encompasses a range of practices aimed at protecting digital assets, including information security, network security, and application security.",
      date: "20",
      month: "August",
    },
    {
      image: "https://source.unsplash.com/1600x900/?cyber,hacker",
      head: "Cyber Security",
      content:
        "Cyber Security professionals must stay updated with the latest cyber threats and security best practices to effectively protect against evolving threats.",
      date: "25",
      month: "September",
    },
    {
      image: "https://source.unsplash.com/1600x900/?cyber,ethical hacker",
      head: "Cyber Security",
      content:
        "Cyber Security is a rapidly growing field with increasing demand for skilled professionals to combat cyber threats and protect sensitive information.",
      date: "10",
      month: "October",
    },
    {
      image: "https://source.unsplash.com/1600x900/?developer",
      head: "Cyber Security",
      content:
        "Cyber Security professionals use a variety of tools and techniques to identify vulnerabilities, assess risks, and implement security measures.",
      date: "15",
      month: "November",
    },
    {
      image: "https://source.unsplash.com/1600x900/?Code",
      head: "Cyber Security",
      content:
        "Cyber Security professionals play a critical role in securing digital infrastructure, protecting against cyber attacks, and ensuring the confidentiality, integrity, and availability of data.",
      date: "20",
      month: "December",
    },
    {
      image: "https://source.unsplash.com/1600x900/?hacker",
      head: "Cyber Security",
      content:
        "Cyber Security is a multidisciplinary field that requires expertise in areas such as information security, network security, cryptography, and risk management.",
      date: "25",
      month: "January",
    },

    // DigitalMarketing
    {
      image:
        "https://img.freepik.com/free-photo/notebook-with-words-digital-marketing_1134-436.jpg?t=st=1708748963~exp=1708752563~hmac=22356882dd7a28974055fe06655ad9ba392f096db524ab64cc7ee9386056428e&w=996",
      head: "Digital Marketing",
      content:
        "Digital Marketing is a comprehensive course covering various online marketing strategies such as SEO, SEM, social media marketing, email marketing, and content marketing.",
      date: "10",
      month: "February",
    },
    {
      image:
        "https://img.freepik.com/free-photo/marketing-business-seo-landing-page-template_23-2148929030.jpg?t=st=1708749037~exp=1708752637~hmac=6b863b64198c1a1bc9da4b19cd855e10c2ea30e2f9dfe3d4f06eb889b8948109&w=996",
      head: "Digital Marketing",
      content:
        "Digital Marketing involves promoting products or services using digital channels to reach and engage with potential customers.",
      date: "15",
      month: "March",
    },
    {
      image:
        "https://img.freepik.com/free-vector/hand-drawn-marketing-agency-template_23-2150603082.jpg?t=st=1708750016~exp=1708753616~hmac=7a27ae23e0388d70317c43cf1d48c6aec16b2effaad8a77a4577e72e1663438b&w=1060",
      head: "Digital Marketing",
      content:
        "Digital Marketing encompasses a range of techniques to drive traffic, generate leads, and increase brand awareness in the online space.",
      date: "20",
      month: "April",
    },
    {
      image:
        "https://img.freepik.com/free-psd/marketing-business-company-youtube-cover-template_23-2149506934.jpg?t=st=1708750172~exp=1708753772~hmac=5f5c874549517d111c1f77cc6c0d57eceda1e617a34faffceb833b60b12086a7&w=1380",
      head: "Digital Marketing",
      content:
        "Digital Marketing plays a crucial role in today's business landscape, enabling companies to connect with their target audience and achieve marketing objectives.",
      date: "25",
      month: "May",
    },
    {
      image:
        "https://img.freepik.com/free-psd/flat-design-business-template_23-2149281718.jpg?t=st=1708750213~exp=1708753813~hmac=8cb0ffb8e6ce37b505d9120b61e169554a01a26675e0685da503abac188684a4&w=1380",
      head: "Digital Marketing",
      content:
        "Digital Marketing involves leveraging digital channels such as search engines, social media platforms, and email to reach and engage with potential customers.",
      date: "10",
      month: "June",
    },
    {
      image:
        "https://img.freepik.com/free-vector/isometric-marketing-landing-page-template_52683-15616.jpg?t=st=1708750258~exp=1708753858~hmac=082db4a7da48b2835672f97d086efc046004a080c78c13ca83b34101898057ab&w=996",
      head: "Digital Marketing",
      content:
        "Digital Marketing requires a deep understanding of online consumer behavior, analytics, and optimization techniques to drive effective marketing campaigns.",
      date: "15",
      month: "July",
    },
    {
      image:
        "https://img.freepik.com/free-vector/isometric-marketing-landing-page-template_52683-18793.jpg?t=st=1708750320~exp=1708753920~hmac=7cbd0a7d50c68aecf866b7d0a7e0934158976199fd16703df8d2a98bbae49328&w=996",
      head: "Digital Marketing",
      content:
        "Digital Marketing professionals use data-driven insights and creative strategies to attract, convert, and retain customers in the digital realm.",
      date: "20",
      month: "August",
    },
    {
      image:
        "https://img.freepik.com/free-vector/isometric-marketing-landing-page-template_52683-16307.jpg?t=st=1708750432~exp=1708754032~hmac=da43360c01b9e66e12ad5de2e37ec9209e5c598f61b907062816cf95736fda60&w=996",
      head: "Digital Marketing",
      content:
        "Digital Marketing is a dynamic field that continues to evolve with advancements in technology and changes in consumer behavior.",
      date: "25",
      month: "September",
    },
  ]);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<AllCourses courses={courses} />} />
          <Route
            path="/full-stack-development"
            element={<FullStackDevelopment courses={courses} />}
          />
          <Route
            path="/data-science"
            element={<DataScience courses={courses} />}
          />
          <Route
            path="/cyber-security"
            element={<CyberSecurity courses={courses} />}
          />
          <Route
            path="/digitalmarketing"
            element={<DigitalMarketing courses={courses} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
