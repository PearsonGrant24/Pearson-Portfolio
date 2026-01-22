// import React from "react";
// //import "./ContactPage.scss";
// import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// const ContactPage: React.FC = () => {
//   return (
//     <div className="contact-page">
//       <h1 className="contact-title">Let's Work Together</h1>
//       <p className="contact-subtitle">
//         Have a project in mind? I’d love to hear about it. Let’s create something amazing together.
//       </p>

//       <div className="contact-grid">

//         {/* LEFT — FORM */}
//         <div className="contact-card form-card">
//           <h2>Send me a message</h2>

//           <form className="contact-form">
//             <div className="form-row">
//               <div className="form-group">
//                 <label>Name *</label>
//                 <input type="text" placeholder="Your name" />
//               </div>

//               <div className="form-group">
//                 <label>Email *</label>
//                 <input type="email" placeholder="your.email@example.com" />
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Subject</label>
//               <input type="text" placeholder="What’s this about?" />
//             </div>

//             <div className="form-group">
//               <label>Message *</label>
//               <textarea placeholder="Tell me about your project..." />
//             </div>

//             <button type="submit" className="send-btn">
//               <FiSend className="icon" />
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* RIGHT — CONTACT DETAILS */}
//         <div className="contact-right">

//           {/* GET IN TOUCH */}
//           <div className="contact-card">
//             <h2>Get in touch</h2>
//             <div className="contact-item">
//               <FiMail className="icon" />
//               <span>pearsongrant23@gmail.com</span>
//             </div>
//             <div className="contact-item">
//               <FiMapPin className="icon" />
//               <span>Harare, Zimbabwe</span>
//             </div>
//           </div>

//           {/* FOLLOW ME */}
//           <div className="contact-card">
//             <h2>Follow me</h2>
//             <div className="social-icons">
//               <a href="#"><FaGithub /></a>
//               <a href="#"><FaLinkedin /></a>
//               <a href="#"><FiMail /></a>
//             </div>
//           </div>

//           {/* QUICK EMAIL BUTTON */}
//           {/* <button className="quick-email-btn">
//             <FiMail className="icon" />
//             Quick Email
//           </button> */}

//           {/* ALTERNATIVE CONTACT */}
//           {/* <div className="contact-card">
//             <h2>Alternative Contact</h2>
//             <p>If the form doesn’t work, you can also reach me directly:</p>

//             <a href="mailto:pearson@example.com" className="alt-btn">
//               <FaEnvelope className="icon" /> Send Direct Email
//             </a>

//             <a href="#" className="alt-btn">
//               <FaLinkedin className="icon" /> Message on LinkedIn
//             </a>
//           </div> */}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ContactPage;
