
import React from "react";
import Section from "../components/Section";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaMobileAlt,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Web & App Development",
      items: [
        { name: "React JS", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "React Native", icon: <FaMobileAlt /> },
         { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend & ERP Systems",
      items: [
        { name: "Frappe Framework", icon: <FaDatabase /> },
        { name: "ERPNext", icon: <FaDatabase /> },
        { name: "Java", icon: <FaJava /> },
        { name: "J2EE (Servlets, JSP)", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },       
        { name: "RESTful APIs", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Databases & Testing",
      items: [
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "MariaDB", icon: <FaDatabase /> },
        { name: "Postman (API Testing)", icon: <SiPostman /> },
      ],
    },
  ];

  const cardStyle = {
    background: "#0b5b8d",
    borderRadius: "14px",
    border: "1px solid #e5e7eb",
    padding: "24px",
    height: "100%",
    transition: "all 0.35s ease",
  };

  const badgeStyle = {
    background: "#f8f9fa",
    border: "1px solid #dee2e6",
    borderRadius: "999px",
    padding: "6px 14px",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "default",
  };

  return (
    <Section id="skills">
      <h2 className="mb-5">Skills</h2>

      <div className="row g-4">
        {skills.map((group, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h5
                style={{
                  fontWeight: "700",
                  marginBottom: "16px",
                  color: "#ecf2f4ff",
                }}
              >
                {group.title}
              </h5>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    style={badgeStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#0d6efd";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f8f9fa";
                      e.currentTarget.style.color = "#212529";
                    }}
                  >
                    <span style={{ color: "#0d6efd" }}>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
