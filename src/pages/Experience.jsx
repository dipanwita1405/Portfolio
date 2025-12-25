// import React from "react";
// import Section from "../components/Section";

// const Experience = () => {
//   return (
//     <div id="experience">
//       <Section title="Experience">
//         <div className="subheading mb-3">Work Experience</div>
        
//         <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
//           <div className="resume-content">
//             <h3 className="mb-0">Software Developer</h3>
//             <div className="subheading mb-3">Anantdv Tech</div>
//             <p className="mb-0">
//               Tech Stack: <strong>JavaScript</strong>, <strong>React JS</strong>, <strong>React Native</strong>, <strong>Jinja</strong>, <strong>Frappe</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>ERPNext</strong>, <strong>MariaDB</strong>
//             </p>
//             <div className="subheading mb-3">Nov 2024 – Present</div>
//           </div>
//           <div className="resume-date text-md-right">
//             <span className="text-primary">Nov 2024 – Present</span>
//           </div>
//         </div>

//         <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
//           <div className="resume-content">
//             <ul className="fa-ul mb-0">
//               <li>
//                 <span className="fa-li">
//                   <i className="fas fa-check"></i>
//                 </span>
//                 Built and deployed a cross-platform <strong>Money Transaction System</strong> with React.js & React Native, integrating third-party APIs for currency conversion and ERPNext REST API for updating customer transaction data, with all APIs tested via Postman.
//               </li>
//               <li>
//                 <span className="fa-li">
//                   <i className="fas fa-check"></i>
//                 </span>
//                 Delivered an end-to-end <strong>air logistics workflow</strong> using ERPNext, React Native (Expo), JavaScript (client scripts), and Jinja (custom print formats), integrating QR code scanning, REST API-driven status updates, automated PDF generation, and backend optimization with custom doctypes. Customized the Quotation doctype and print layouts to enhance logistics workflow accuracy and documentation.
//               </li>
//               <li>
//                 <span className="fa-li">
//                   <i className="fas fa-check"></i>
//                 </span>
//                 Customized <strong>manufacturing workflows</strong> and forms for a coffee production unit, leveraging Frappe, JavaScript, and SQL to streamline operations and reporting.
//               </li>
//               <li>
//                 <span className="fa-li">
//                   <i className="fas fa-check"></i>
//                 </span>
//                 Developed a <strong>React JS web interface</strong> for the vehicle workshop module to enable vehicle number search or vehicle QR code scanning, displaying all related data from multiple doctypes in a unified view, streamlining workshop management and vehicle tracking.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// };

// export default Experience;
import React from "react";
import Section from "../components/Section";

const Experience = () => {
  return (
    <div id="experience">
      <Section title="WORK EXPERIENCE">
       
        
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Software Developer</h3>
            <div className="subheading mb-3">Anantdv</div>
            <p className="mb-0">
              <strong>Tech Stack:</strong> ERPNext, Frappe, JavaScript, React JS, React Native, Jinja, MariaDB, Python
            </p>
            
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">Nov 2024 – Present</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
          <div className="resume-content">
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
               Delivered end-to-end air logistics workflow with ERPNext, React JS for corporate client, React Native QR scanning, Jinja print formats & custom doctypes.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Customized manufacturing workflows for coffee production using Frappe, JavaScript & SQL optimization.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Built React JS interface for vehicle workshop with QR scanning & multi-doctype data display.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Developed Money Transaction System with React.js, React Native & ERPNext REST API integration.
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Experience;
