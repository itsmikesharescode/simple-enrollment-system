import type { Session } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
import {writable} from "svelte/store";
import type { INTERACTION_COMMENTS_TB, INTERACTION_POST_TB, STUDENT_APP_TB } from "./types";

export const navState = writable({
    activeItem: "",

    default: [
        {
            title: "Created By @mikeSharesCode",
            url: "https://www.youtube.com/@mikeSharesCode",
        }
    ],

    static: [
        {
            title: "Home",
            url: "/"
        },

        {
            title: "Scholarship",
            url: "/Scholarship"
        },

        {
            title: "Admission",
            url: "/Admission",
        },

    ],

    student: [
        {
            title: "Home",
            url: "/"
        },

        {
            title: "Scholarship",
            url: "/Scholarship"
        },

        {
            title: "Admission",
            url: "/Admission",
        },

        {
            title: "Interaction",
            url: "/Interaction"
        },

        {
            title: "Status",
            url: "/Status"
        }
    ],

    admin: [
        {
            title: "Home",
            url: "/"
        },

        {
            title: "Scholarship",
            url: "/Scholarship"
        },

        {
            title: "Interaction",
            url: "/Interaction/Admin"
        },

        {
            title: "Request",
            url: "/Request"
        }
    ],

    sessionState: <Session | null> null,

});

//admission store management
export const admissionSelection = writable({
    college: [
        {
            header: "College of Arts & Sciences",
            courses: [
                {
                    title: "(ABCom)Bachelor of Arts in Communication (Masscom)",
                    img: "https://th.bing.com/th/id/OIP.X7FL75kalYoY-aQdv7VPEAHaC9?rs=1&pid=ImgDetMain",
                    url: "/Admission/College/ABCom",
                    intro: "The Bachelor of Arts in Communication with a specialization in Mass Communication (ABCom Masscom) is an undergraduate academic program designed to equip students with a comprehensive understanding of communication theories, media practices, and the dynamics of mass communication. This degree program aims to prepare students for a variety of careers in the rapidly evolving field of media and communication.",
                    curriculum: "The ABCom Masscom program typically encompasses a diverse range of courses that cover various aspects of communication, journalism, and media studies. Students can expect to study subjects such as media ethics, communication theories, journalism, public relations, digital media production, and media management. The curriculum often includes a blend of theoretical concepts and practical skills development to ensure that graduates are well-rounded and capable professionals.",
                    coreCompetenies: "Throughout the course of the program, students develop core competencies in communication, critical thinking, research, and media production. They learn to analyze and interpret information, create compelling content, and effectively communicate across different media platforms. The program also emphasizes the ethical considerations and responsibilities associated with media and communication practices.",
                    specialization: "The Mass Communication specialization within the ABCom program focuses specifically on the various forms of mass media, including print, broadcast, and digital media. Students delve into topics such as journalism ethics, media law, multimedia storytelling, and the impact of mass media on society. They also gain hands-on experience in media production, editing, and content creation.",
                    opportunities: "Upon completion of the ABCom Masscom program, graduates are well-prepared for a range of careers in the field of communication and media. They may pursue roles such as journalists, editors, public relations specialists, media analysts, content creators, and digital media producers. The skills acquired during the program make graduates adaptable to the evolving landscape of media and communication, where technological advancements continually shape the way information is shared and consumed.",
                    experience: "Many ABCom Masscom programs incorporate internships, practicums, or capstone projects that provide students with real-world experience in media organizations. This practical exposure allows students to apply their knowledge in professional settings and build a portfolio of work, enhancing their employability upon graduation. In summary, the Bachelor of Arts in Communication with a specialization in Mass Communication offers a holistic education in communication studies with a specific focus on the dynamic and influential realm of mass media. It prepares students for rewarding careers in journalism, broadcasting, digital media, and other communication-related fields."
                },

                {
                    title: "(ABEng)Bachelor of Arts in English",
                    img: "https://th.bing.com/th/id/OIP.781RS7pfpBTRvZNslQKGuQHaDL?rs=1&pid=ImgDetMain",
                    url: "/Admission/College/ABEng",
                    intro: "The Bachelor of Arts in English (ABEng) is an undergraduate academic program designed to foster a deep understanding of the English language, literature, and related disciplines. This program aims to develop students' critical thinking, communication, and analytical skills, preparing them for a variety of careers and further academic pursuits.",
                    curriculum: "The ABEng program typically offers a diverse curriculum covering various aspects of English language and literature. Courses may include literature surveys, creative writing, linguistics, poetry analysis, drama studies, and literary theory. The curriculum often combines historical perspectives with contemporary approaches to provide students with a well-rounded understanding of the field.",
                    coreCompetenies: "Throughout the program, students develop core competencies in critical analysis, effective written and verbal communication, and the interpretation of literary texts. They gain insights into the cultural, historical, and social contexts that shape literature and language. Additionally, creative writing components may encourage students to express themselves through poetry, fiction, and other literary forms.",
                    opportunities: "Graduates of the ABEng program are equipped for a wide range of career paths. They may pursue professions such as writers, editors, journalists, educators, content creators, and communication specialists. The program's emphasis on communication and critical thinking skills also makes graduates adaptable to diverse professional environments.",
                    specialization: "Many ABEng graduates choose to pursue advanced degrees such as Master of Arts in English, MFA in Creative Writing, or other specialized postgraduate programs. The program serves as a solid foundation for those interested in academic research, teaching, or advanced literary studies.",
                    experience: "Some ABEng programs incorporate practical experiences, such as internships, writing workshops, or collaborative projects, allowing students to apply their knowledge in real-world contexts. These experiences contribute to the development of practical skills and the building of a portfolio that can enhance career prospects. In summary, the Bachelor of Arts in English provides students with a rich and comprehensive exploration of the English language and literature. Graduates emerge with a skill set that is valuable in various professional fields, including writing, education, communication, and further academic pursuits."

                },

                {
                    title: "(BSM)Bachelor of Sciences in Mathematics",
                    img: "https://th.bing.com/th/id/OIP.KfKIzRJ3MQ9RsYTqmfcGwgHaFG?rs=1&pid=ImgDetMain",
                    url: "/Admission/College/BSM",
                    intro: "The Bachelor of Science in Mathematics (BSM) is an undergraduate program designed to provide students with a strong foundation in mathematical theory, problem-solving skills, and the ability to apply mathematical concepts to various fields. This program aims to develop analytical thinking and quantitative reasoning, preparing students for careers in areas such as finance, technology, research, and education.",
                    curriculum: "The BSM program typically includes a comprehensive curriculum covering various branches of mathematics. Courses may include calculus, algebra, geometry, statistics, number theory, and mathematical modeling. The curriculum is structured to provide a progression from foundational concepts to more advanced topics, allowing students to build a solid understanding of mathematical principles.",
                    coreCompetenies: "Throughout the program, students develop core competencies in abstract reasoning, logical thinking, problem-solving, and quantitative analysis. They learn to approach complex problems methodically and apply mathematical tools to find solutions. The program often emphasizes the development of a rigorous and systematic approach to mathematical reasoning.",
                    opportunities: "Graduates of the BSM program are well-prepared for careers that require strong analytical and quantitative skills. Potential career paths include roles in finance, data analysis, computer science, research, education, and actuarial science. The program's focus on mathematical reasoning also provides a solid foundation for those considering advanced studies in mathematics or related fields.",
                    specialization: "Many BSM graduates choose to pursue advanced degrees, such as a Master's or Ph.D. in Mathematics or a related field. Advanced studies open up opportunities for research, academia, and specialized roles in areas like pure mathematics, applied mathematics, or mathematical modeling.",
                    experience: "Some BSM programs integrate practical experiences, such as internships, research projects, or applied mathematics courses. These experiences allow students to apply theoretical knowledge to real-world problems, gaining valuable insights into the practical applications of mathematics. In summary, the Bachelor of Science in Mathematics equips students with a strong mathematical foundation and analytical skills that are highly valued in a variety of fields. Graduates have the flexibility to pursue diverse career paths or continue their education in advanced mathematical studies."

                },

                {
                    title: "(BSP)Bachelor of Sciences in Psychology",
                    img: "https://online.methodist.edu/wp-content/uploads/2020/07/mth_bsp_image-1.jpg",
                    url: "/Admission/College/BSP",
                    intro: "The Bachelor of Science in Psychology (BSP) is an undergraduate program designed to provide students with a comprehensive understanding of the principles and theories of psychology. This program aims to equip students with the knowledge and skills necessary for a variety of careers in psychology and related fields.",
                    curriculum: "The BSP program typically covers a broad range of topics within psychology. Courses may include introductory psychology, abnormal psychology, developmental psychology, social psychology, cognitive psychology, and research methods. The curriculum is designed to expose students to the various subfields of psychology, allowing them to develop a well-rounded understanding of the discipline.",
                    coreCompetenies: "Throughout the program, students develop core competencies in critical thinking, research skills, data analysis, and an understanding of human behavior. They learn to apply psychological principles to real-world situations and gain insights into the complexities of individual and group behavior. The program often emphasizes the importance of ethical considerations in psychological research and practice.",
                    opportunities: "Graduates of the BSP program are prepared for a range of career paths in psychology and related fields. They may pursue roles such as research assistants, human resources specialists, mental health technicians, or case managers. The program also serves as a foundation for those interested in pursuing advanced degrees and becoming licensed psychologists.",
                    specialization: "Many BSP graduates choose to pursue advanced degrees, such as a Master's or Ph.D. in Psychology, counseling, or a specialized area within psychology. Advanced degrees are often required for individuals seeking licensure as clinical psychologists or practicing in certain specialized fields of psychology.",
                    experience: "BSP programs may include practical experiences such as internships, field placements, or research projects. These opportunities allow students to apply theoretical knowledge in real-world settings, gaining hands-on experience and enhancing their skills. In summary, the Bachelor of Science in Psychology provides students with a solid foundation in the principles of psychology and prepares them for diverse career opportunities or further study in advanced psychology programs. Graduates are equipped with valuable skills for understanding human behavior and addressing psychological challenges in various professional settings.",
                },

            ]
        },

        {
            header: "Business & Accountancy",
            courses: [
                {
                    title: "(ABA)Associate in Business Administration",
                    img: "https://www.thoughtco.com/thmb/8FWSd8-FlSrE_RlWhE162qZEwMo=/2122x1415/filters:fill(auto,1)/169943641_5-56a0d3d43df78cafdaa56556.jpg",
                    url: "/Admission/College/ABA",
                    intro: "The Associate in Business Administration (ABA) is a two-year undergraduate program that provides students with a foundational understanding of various aspects of business and management. This program is designed to equip students with essential knowledge and skills needed for entry-level positions in the business sector or to continue their education in a bachelor's degree program.",
                    curriculum: "The ABA program typically covers a broad spectrum of business-related subjects. Common courses include principles of management, marketing, accounting, finance, business law, economics, and organizational behavior. The curriculum is structured to provide students with a well-rounded understanding of fundamental business concepts.",
                    coreCompetenies: "Throughout the program, students develop core competencies in areas such as business communication, problem-solving, teamwork, and decision-making. They gain insights into the functioning of organizations, financial principles, and the broader economic environment. The ABA program aims to cultivate skills that are applicable in various business settings.",
                    opportunities: "Graduates of the ABA program are prepared for entry-level positions in a variety of business fields. Career opportunities may include roles in business administration, office management, retail management, customer service, and sales. The program also serves as a stepping stone for those who wish to pursue a bachelor's degree in business administration or related fields.",
                    specialization: "While the ABA program is designed to prepare students for immediate entry into the workforce, many graduates choose to continue their education by enrolling in a bachelor's degree program in business administration or a related discipline. A bachelor's degree provides a more in-depth exploration of business topics and can enhance career prospects.",
                    experience: "Some ABA programs incorporate practical experiences such as internships, cooperative education, or capstone projects. These experiences allow students to apply theoretical knowledge in real-world business situations, gaining valuable hands-on experience and enhancing their employability. In summary, the Associate in Business Administration is a two-year program that provides students with a foundational understanding of business principles and prepares them for entry-level positions in the business sector. Graduates can choose to enter the workforce directly or pursue further education to advance their career opportunities in the field of business administration."
                },

                {
                    title: "(BSAIS)Bachelor of Science in Accounting Information System",
                    img: "https://www.sti.edu/images/2022/prospectus/Simulation_BM.jpg",
                    url: "/Admission/College/BSAIS",
                    intro: "The Bachelor of Science in Accounting Information Systems (BSAIS) is an undergraduate program that integrates accounting principles with information systems technology. This program is designed to equip students with the skills and knowledge necessary to manage financial information and accounting systems in modern business environments.",
                    curriculum: "The BSAIS program typically includes a combination of accounting and information systems courses. Common subjects may include financial accounting, managerial accounting, auditing, database management, systems analysis, and information technology (IT) security. The curriculum is structured to provide students with a strong foundation in both accounting practices and information systems management.",
                    coreCompetenies: "Throughout the program, students develop core competencies in accounting principles, financial reporting, data management, and the use of information technology in accounting processes. They learn how to analyze financial data, design and implement accounting information systems, and ensure the security and integrity of financial information.",
                    opportunities: "Graduates of the BSAIS program are well-prepared for careers at the intersection of accounting and information systems. Potential career paths include roles such as accounting information systems analyst, auditor, database administrator, financial analyst, or IT consultant. The program's emphasis on both accounting and information systems allows graduates to contribute to the effective management of financial information in various industries.",
                    specialization: "The BSAIS program often aligns with the requirements for professional certifications in accounting, such as the Certified Public Accountant (CPA) or Certified Information Systems Auditor (CISA). Graduates may choose to pursue these certifications to enhance their professional credentials and career opportunities.",
                    experience: "Some BSAIS programs include practical components such as internships, cooperative education, or capstone projects. These experiences provide students with real-world exposure, allowing them to apply theoretical knowledge in actual business scenarios and develop practical skills that are valuable in the workplace. In summary, the Bachelor of Science in Accounting Information Systems is a specialized program that prepares students to bridge the gap between accounting principles and information systems technology. Graduates emerge with a unique skill set that is in demand in a technology-driven business environment, positioning them for diverse and rewarding career opportunities in the fields of accounting and information systems management."
                },

                {
                    title: "(BSA)Bachelor of Sciences in Accountancy",
                    img: "https://msuiit.edu.ph/assets/img/colleges/cbaa/bs-accountancy.png",
                    url: "/Admission/College/BSA",
                    intro: "The Bachelor of Science in Accountancy (BSA) is an undergraduate program designed to provide students with a comprehensive education in accounting principles, financial management, and business ethics. This program prepares students for careers in accounting and finance and serves as a foundation for pursuing professional certifications such as the Certified Public Accountant (CPA) designation.",
                    curriculum: "The BSA program typically includes a rigorous curriculum covering core accounting courses, business courses, and related electives. Common subjects include financial accounting, managerial accounting, auditing, taxation, business law, economics, and financial management. The curriculum is structured to ensure that students acquire a deep understanding of accounting principles and their application in various business contexts.",
                    coreCompetenies: "Throughout the program, students develop core competencies in financial reporting, budgeting, auditing, and taxation. They learn to analyze financial data, interpret accounting regulations, and apply ethical considerations in accounting practices. The program emphasizes the development of strong analytical and problem-solving skills necessary for success in the field of accountancy.",
                    opportunities: "Graduates of the BSA program are well-equipped for a variety of roles in accounting and finance. Career opportunities include positions such as staff accountant, auditor, tax analyst, financial analyst, and budget analyst. The program's comprehensive curriculum prepares graduates to contribute effectively to the financial management and decision-making processes of organizations.",
                    specialization: "Many BSA programs align with the educational requirements for professional certifications, particularly the Certified Public Accountant (CPA) designation. Graduates may choose to pursue the CPA exam after completing the program, enhancing their professional qualifications and expanding their career opportunities.",
                    experience: "Some BSA programs incorporate practical experiences such as internships, cooperative education, or capstone projects. These experiences provide students with real-world exposure, allowing them to apply theoretical knowledge in actual business scenarios and develop practical skills that are highly valuable in the workplace. In summary, the Bachelor of Science in Accountancy provides students with a solid foundation in accounting principles and financial management. Graduates are well-prepared for diverse career opportunities in the field of accounting and finance, and the program serves as a pathway to obtaining professional certifications such as the CPA designation."
                },

                {
                    title: "(BSMA)Bachelor of Science in Management Accounting",
                    img: "https://s3-ap-southeast-1.amazonaws.com/blog-edukasyon/wp-content/uploads/2018/10/19175936/Which-is-the-best-choice-BS-Accountancy-Managerial-Accounting-or-Accounting-Technology.jpg",
                    url: "/Admission/College/BSMA",
                    intro: "The Bachelor of Science in Management Accounting (BSMA) is an undergraduate program designed to provide students with a specialized education in accounting, with a focus on managerial decision-making and financial management. This program prepares students for careers in management accounting and financial analysis, equipping them with the skills needed to support organizational planning and decision-making.",
                    curriculum: "The BSMA program typically includes a comprehensive curriculum that covers fundamental accounting principles, financial management, cost accounting, and managerial accounting. Common courses may include financial accounting, managerial accounting, budgeting, financial analysis, taxation, and strategic management. The curriculum is designed to ensure that students develop a strong foundation in both accounting and business management.",
                    coreCompetenies: "Throughout the program, students develop core competencies in cost analysis, budgeting, financial reporting, and strategic planning. They learn to apply accounting principles to support decision-making processes within organizations, with a focus on optimizing financial performance. The program emphasizes the development of analytical and critical-thinking skills essential for success in management accounting roles.",
                    opportunities: "Graduates of the BSMA program are well-prepared for careers in management accounting, financial analysis, and related fields. Potential career paths include management accountant, cost analyst, financial analyst, budget analyst, and financial consultant. The program's emphasis on both accounting and managerial skills makes graduates valuable contributors to organizational success.",
                    specialization: "The BSMA program often aligns with the educational requirements for professional certifications in accounting and finance. Graduates may choose to pursue certifications such as Certified Management Accountant (CMA) to enhance their professional credentials and advance their career prospects.",
                    experience: "Some BSMA programs incorporate practical experiences, such as internships, cooperative education, or capstone projects. These experiences allow students to apply theoretical knowledge in real-world business scenarios, develop practical skills, and gain insights into the challenges and opportunities faced by organizations in the field of management accounting. In summary, the Bachelor of Science in Management Accounting provides students with a specialized education that combines accounting principles with managerial skills. Graduates are prepared for roles that involve financial analysis, cost management, and strategic decision-making within organizations. The program also serves as a pathway to professional certifications, enhancing graduates' competitiveness in the job market."
                },

                {
                    title: "(BSREM)Bachelor of Science in Real Estate Management",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-X7BAQuz29963nXmYjTJqaS2P_xtLZHV6ag&usqp=CAU",
                    url: "/Admission/College/BSREM",
                    intro: "The Bachelor of Science in Real Estate Management (BSREM) is an undergraduate program designed to provide students with a comprehensive understanding of the real estate industry. This program prepares students for careers in real estate management, property development, and related fields by equipping them with the knowledge and skills needed to navigate the complexities of the real estate market.",
                    curriculum: "The BSREM program typically includes a diverse curriculum covering key areas of real estate management. Common courses may include real estate law, property valuation, real estate finance, property development, urban planning, and property management. The curriculum is designed to provide students with a solid foundation in both theoretical concepts and practical aspects of real estate.",
                    specialization: "The BSREM program may align with the educational requirements for professional certifications in real estate. Graduates may choose to pursue certifications such as Real Estate Salesperson or Real Estate Broker licenses, depending on their career goals. Professional certifications can enhance graduates' credibility and marketability in the real estate industry.",
                    coreCompetenies: "Throughout the program, students develop core competencies in property analysis, market research, negotiation, and real estate investment. They learn to evaluate the economic and legal factors influencing real estate transactions, assess property values, and make informed decisions in property management and development. The program emphasizes critical thinking and problem-solving skills essential for success in the real estate industry.",
                    opportunities: "Graduates of the BSREM program are well-prepared for various roles in the real estate sector. Career opportunities include real estate manager, property developer, real estate analyst, leasing consultant, and property investment advisor. The program's comprehensive curriculum allows graduates to contribute effectively to the dynamic and evolving field of real estate management.",
                    experience: "Some BSREM programs incorporate practical experiences such as internships, cooperative education, or capstone projects. These experiences provide students with real-world exposure, allowing them to apply theoretical knowledge in actual real estate scenarios. Practical experiences also help students build professional networks within the industry. In summary, the Bachelor of Science in Real Estate Management is a specialized program that prepares students for careers in the dynamic and multifaceted real estate industry. Graduates emerge with a strong foundation in real estate principles, market dynamics, and practical skills necessary for success in real estate management, development, and related fields."
                },

                {
                    title: "(BSIA)Bachelor of Science in Internal Auditing",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXpfo-7FS3YbCu69zdsU1biZIJYpfw1K1xw&usqp=CAU",
                    url: "/Admission/College/BSIA",
                    intro: "The Bachelor of Science in Internal Auditing (BSIA) is an undergraduate program designed to equip students with the knowledge and skills necessary for a career in internal auditing. Internal auditing involves assessing and evaluating an organization's internal controls, risk management processes, and financial procedures to ensure compliance and operational effectiveness.",
                    curriculum: "The BSIA program typically includes a comprehensive curriculum covering key areas of internal auditing. Common courses may include internal audit principles, risk management, fraud examination, governance, ethics, and financial reporting. The curriculum is designed to provide students with a deep understanding of auditing standards, regulatory compliance, and the role of internal auditors within organizations.",
                    specialization: "The BSIA program often aligns with the educational requirements for professional certifications in auditing, such as the Certified Internal Auditor (CIA) designation. Graduates may choose to pursue certifications to enhance their professional credentials and demonstrate their expertise in internal auditing practices.",
                    coreCompetenies: "Throughout the program, students develop core competencies in risk assessment, internal control evaluation, audit planning, and financial analysis. They learn to identify areas of potential risk, assess the effectiveness of internal controls, and make recommendations for improvement. The program emphasizes critical thinking, attention to detail, and ethical considerations in auditing practices.",
                    opportunities: "Graduates of the BSIA program are well-prepared for careers in internal auditing, risk management, and compliance. Career opportunities may include roles such as internal auditor, risk analyst, compliance officer, and forensic auditor. The program's focus on internal controls and risk assessment enables graduates to contribute to the efficiency and integrity of organizational operations.",
                    experience: "Some BSIA programs incorporate practical experiences, such as internships, cooperative education, or capstone projects. These experiences provide students with real-world exposure, allowing them to apply theoretical knowledge in actual auditing scenarios. Practical experiences also help students develop the communication and interpersonal skills necessary for interacting with organizational stakeholders. In summary, the Bachelor of Science in Internal Auditing is a specialized program that prepares students for careers in internal auditing, risk management, and compliance. Graduates emerge with a solid foundation in auditing principles, risk assessment, and ethical considerations, positioning them for success in ensuring the integrity and effectiveness of organizational processes."
                },

                

            ]
        },

        {
            header: "College of Computer Studies",
            courses: [
                {
                    title: "(ACT)Associate in Computer Technology",
                    img: "https://lpubatangas.edu.ph/wp-content/uploads/2021/06/DSC_0161-scaled.jpg",
                    url: "/Admission/College/ACT",
                    intro: "The Associate in Computer Technology (ACT) is an undergraduate program designed to provide students with foundational knowledge and skills in computer technology. This program typically spans two years and aims to prepare students for entry-level positions in the field of computer technology or for further studies in related areas.",
                    curriculum: "The ACT program usually includes a comprehensive curriculum covering key aspects of computer technology. Common courses may include computer programming, computer hardware and software, networking fundamentals, database management, web development, and system analysis. The curriculum is designed to provide a broad understanding of various components within the field of computer technology.",
                    specialization: "In addition to technical skills, the ACT program often emphasizes the development of transferable skills such as critical thinking, problem-solving, and effective communication. These skills are valuable in a wide range of professional settings and contribute to a graduate's overall employability.",
                    coreCompetenies: "Throughout the program, students develop core competencies in computer programming, system analysis, network administration, and problem-solving. They gain proficiency in using programming languages, configuring computer systems, managing databases, and troubleshooting common technical issues. The program emphasizes both theoretical concepts and practical applications to ensure students are well-rounded in computer technology.",
                    opportunities: "Graduates of the ACT program are prepared for entry-level positions in the field of computer technology. Career opportunities may include roles such as computer support specialist, help desk technician, network administrator, and system analyst. The program provides a solid foundation for individuals seeking to start their careers in various technology-related roles.",
                    experience: "Some ACT programs incorporate practical experiences such as internships, cooperative education, or hands-on projects. These experiences allow students to apply theoretical knowledge in real-world scenarios, gaining practical skills and exposure to the challenges of the technology industry. In summary, the Associate in Computer Technology program provides students with a foundational education in various aspects of computer technology. Graduates are well-prepared for entry-level positions in the technology workforce or for further studies in related fields, and they have acquired a set of skills that are valuable in today's technology-driven world."
                },

                {
                    title: "(BSCS)Bachelor of Science in Computer Science",
                    img: "https://www.sti.edu/images/2022/prospectus/Simulation_IT.jpg",
                    url: "/Admission/College/BSCS",
                    intro: "The Bachelor of Science in Computer Science (BSCS) is an undergraduate program designed to provide students with a comprehensive education in the field of computer science. This program typically spans four years and aims to equip students with a strong foundation in theoretical and practical aspects of computer science, preparing them for a wide range of career opportunities.",
                    curriculum: "The BSCS program includes a rigorous and well-rounded curriculum covering key areas of computer science. Common courses may include programming languages, data structures, algorithms, computer architecture, software engineering, databases, artificial intelligence, and computer networks. The curriculum is designed to expose students to both foundational and advanced topics in computer science.",
                    specialization: "Given the fast-paced nature of technology, BSCS programs often integrate the latest tools, programming languages, and development environments relevant to computer science. Students gain hands-on experience with industry-standard software and hardware, ensuring they are well-prepared for the demands of the technology workforce.",
                    coreCompetenies: "Throughout the program, students develop core competencies in programming, algorithm design, problem-solving, and system analysis. They gain proficiency in various programming languages, learn to design and implement algorithms, and understand the theoretical underpinnings of computer science. The program emphasizes critical thinking and analytical skills essential for success in the rapidly evolving field of computer science.",
                    opportunities: "Graduates of the BSCS program are well-prepared for a multitude of career opportunities in the technology industry. Career paths may include software development, systems analysis, data science, cybersecurity, artificial intelligence, and more. The program's comprehensive curriculum ensures that graduates are versatile and can adapt to various roles within the dynamic field of computer science.",
                    experience: "While the BSCS program prepares students for immediate entry into the workforce, some graduates choose to pursue advanced degrees such as a Master's or Ph.D. in Computer Science or related fields. Advanced studies open up opportunities for research, academia, and specialized roles in areas like artificial intelligence, machine learning, or cybersecurity. In summary, the Bachelor of Science in Computer Science provides students with a comprehensive education in computer science, preparing them for diverse and rewarding careers in the technology industry. Graduates emerge with a strong foundation in computer science principles, practical skills, and the adaptability needed to excel in this rapidly evolving field."
                },

                {
                    title: "(BSIT)Bachelor of Science in Information Technology",
                    img: "https://ustangelicum.edu.ph/Images/college/college_bsit.jpg",
                    url: "/Admission/College/BSIT",
                    intro: "The Bachelor of Science in Information Technology (BSIT) is an undergraduate program designed to provide students with a comprehensive education in the field of information technology. This program typically spans four years and aims to equip students with a broad understanding of IT concepts, skills, and applications, preparing them for various roles in the technology sector.",
                    curriculum: "The BSIT program includes a diverse and well-rounded curriculum covering key areas of information technology. Common courses may include programming, database management, networking, web development, cybersecurity, systems analysis, and project management. The curriculum is designed to expose students to both foundational and advanced topics in information technology.",
                    specialization: "Given the ever-evolving nature of technology, BSIT programs often integrate the latest tools, programming languages, and technologies relevant to information technology. Students gain hands-on experience with industry-standard software and hardware, ensuring they are familiar with the tools commonly used in the IT workforce.",
                    coreCompetenies: "Throughout the program, students develop core competencies in programming, system administration, network management, cybersecurity, and project management. They gain proficiency in various programming languages, learn to design and implement IT solutions, and understand the principles of information security. The program emphasizes critical thinking and problem-solving skills essential for success in the dynamic field of information technology.",
                    opportunities: "Graduates of the BSIT program are well-prepared for a wide range of career opportunities in the technology industry. Career paths may include roles such as software developer, network administrator, IT consultant, systems analyst, database administrator, and cybersecurity analyst. The program's comprehensive curriculum ensures that graduates are versatile and can adapt to various roles within the evolving field of information technology.",
                    experience: "Many BSIT programs incorporate practical experiences such as internships, co-op programs, or capstone projects. These experiences allow students to apply their theoretical knowledge in real-world settings, work on projects, and gain exposure to industry practices. Practical experiences enhance students' problem-solving skills and provide valuable insights into the professional aspects of information technology. In summary, the Bachelor of Science in Information Technology provides students with a comprehensive education in IT principles, applications, and best practices. Graduates are well-positioned for diverse and dynamic careers in the technology industry, equipped with the skills and knowledge needed to contribute to the innovation and advancement of information technology."
                },

                {
                    title: "(BSIS)Bachelor of Science in Information System",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0sX06J6RlIq0Y_4qIgFKK2b22alubig-rg&usqp=CAU",
                    url: "/Admission/College/BSIS",
                    intro: "The Bachelor of Science in Information Systems (BSIS) is an undergraduate program designed to provide students with a comprehensive education in the field of information systems. This program typically spans four years and aims to equip students with the knowledge and skills needed to design, implement, and manage information systems within organizations.",
                    curriculum: "The BSIS program includes a diverse and well-structured curriculum covering key areas of information systems. Common courses may include systems analysis and design, database management, programming, network management, cybersecurity, project management, and business intelligence. The curriculum is designed to provide a balanced understanding of both technical and business aspects of information systems.",
                    specialization: "Given the ever-evolving nature of technology, BSIS programs integrate the latest tools, programming languages, and technologies relevant to information systems. Students gain hands-on experience with industry-standard software and hardware, ensuring they are familiar with the tools commonly used in the information systems field.",
                    coreCompetenies: "Throughout the program, students develop core competencies in systems analysis, database design, programming, and project management. They gain proficiency in various technologies, learn to analyze organizational needs, and design and implement information systems solutions. The program emphasizes critical thinking and problem-solving skills essential for success in the dynamic field of information systems.",
                    opportunities: "Graduates of the BSIS program are well-prepared for a variety of career opportunities in the technology and business sectors. Career paths may include roles such as systems analyst, database administrator, IT consultant, business intelligence analyst, project manager, and cybersecurity analyst. The program's comprehensive curriculum ensures that graduates are versatile and can contribute to the effective use of information systems in diverse organizational settings.",
                    experience: "Many BSIS programs incorporate practical experiences such as internships, co-op programs, or capstone projects. These experiences allow students to apply their theoretical knowledge in real-world settings, work on projects, and gain exposure to industry practices. Practical experiences enhance students' problem-solving skills and provide valuable insights into the professional aspects of information systems. In summary, the Bachelor of Science in Information Systems provides students with a comprehensive education in designing and managing information systems. Graduates are well-equipped for diverse and dynamic careers, capable of contributing to the effective use of information systems in organizations."
                },
            ]
        },

        {
            header: "College of Teacher Education",
            courses: [
                {
                    title: "(BECEd)Bachelor in Early Childhood Education",
                    img: "https://lh4.googleusercontent.com/1TnMWyf0mtza6o3ZskLZx1UMgXB7eltY5ruzzrxtTGKNfvdr8m37jaekVEO-65HL34iiosYz68PlTj243V7bQ7jTTsYNnluNNj5hwAx0dsHodxFp1pXQYkpDo-zNfQR_GtoKD38",
                    url: "/Admission/College/BECEd",
                    intro: "The Bachelor in Early Childhood Education (BECEd) is an undergraduate program designed to prepare individuals for a career in educating and nurturing young children. This program typically spans three to four years and focuses on providing students with the knowledge, skills, and competencies needed to work effectively with young learners.",
                    curriculum: "The BECEd program includes a well-structured curriculum covering key aspects of early childhood education. Common courses may include child development, curriculum design for young children, educational psychology, early literacy, classroom management, and inclusive education. The curriculum is designed to equip students with a solid understanding of child development and effective teaching strategies for young learners.",
                    opportunities: "In many regions, completion of a BECEd program is a prerequisite for obtaining certification or licensure to work as an early childhood educator. Graduates may need to meet specific requirements, such as passing exams or completing additional practical experiences, to attain professional credentials.",
                    specialization: "Throughout the program, students develop core competencies in understanding the developmental stages of young children, creating age-appropriate learning experiences, and implementing effective teaching methods. They learn about the social, emotional, cognitive, and physical development of children and how to create a supportive and inclusive learning environment.",
                    coreCompetenies: "Throughout the program, students develop core competencies in understanding the developmental stages of young children, creating age-appropriate learning experiences, and implementing effective teaching methods. They learn about the social, emotional, cognitive, and physical development of children and how to create a supportive and inclusive learning environment.",
                    experience: "Many BECEd programs incorporate practical experiences such as practicum placements or field experiences in early childhood education settings. These experiences allow students to apply theoretical knowledge in real-world classroom settings, work with young children, and receive mentorship from experienced educators. In summary, the Bachelor in Early Childhood Education is a specialized program that prepares individuals to work with young children in educational settings. Graduates emerge with the knowledge and skills needed to create engaging learning experiences and support the holistic development of young learners."
                },

                {
                    title: "(BEEd)Bachelor in Elementary Education",
                    img: "https://msuiit.edu.ph/assets/img/colleges/ced/beed-english-header.png",
                    url: "/Admission/College/BEEd",
                    intro: "The Bachelor in Elementary Education (BEEd) is an undergraduate program designed to prepare individuals for a career as elementary school teachers. This program typically spans four years and focuses on providing students with the knowledge, skills, and pedagogical techniques needed to teach children in the elementary grades.",
                    curriculum: "The BEEd program includes a well-structured curriculum covering key aspects of elementary education. Common courses may include educational psychology, curriculum development, methods of teaching different subjects (such as mathematics, science, language arts, and social studies), classroom management, and assessment and evaluation. The curriculum is designed to ensure that future educators are well-equipped with the necessary content knowledge and teaching strategies.",
                    opportunities: "BEEd programs cover methods of assessing and evaluating student learning. Students learn how to use various assessment tools, create fair and effective tests, and interpret assessment results. The goal is to ensure that teachers can monitor student progress and tailor instruction to meet individual needs.",
                    specialization: "Throughout the program, students develop core competencies in effective teaching methods, lesson planning, and creating a positive and inclusive learning environment for elementary school students. They learn how to adapt their teaching approaches to the diverse needs of students and engage children in meaningful learning experiences.",
                    coreCompetenies: "Throughout the program, students develop core competencies in effective teaching methods, lesson planning, and creating a positive and inclusive learning environment for elementary school students. They learn how to adapt their teaching approaches to the diverse needs of students and engage children in meaningful learning experiences.",
                    experience: "Many BEEd programs include practicum experiences or teaching internships in elementary school settings. These experiences provide students with opportunities to apply their theoretical knowledge in real classrooms, work with students under the supervision of experienced educators, and develop their teaching skills. In summary, the Bachelor in Elementary Education prepares individuals to become elementary school teachers. Graduates are equipped with the knowledge, skills, and practical experiences needed to create engaging learning environments and support the educational development of elementary school students."
                },

            ]
        },

        {
            header: "Bachelor in Secondary Education",
            courses: [
                {
                    title: "(BSEd)Major in Information Management",
                    img: "https://baliuagu.edu.ph/storage/A0G5aqfQUzq4Syu8pIhxTIO3rYcqMa2CePfWXmb9.jpg",
                    url: "/Admission/College/BSEdIM",
                    intro: "The Bachelor of Science in Education (BSEd) majoring in Information Management is an undergraduate program designed to prepare students to become educators with expertise in information and technology-related fields. This program typically spans four years and aims to equip students with the knowledge and skills needed to teach information management concepts to students in educational settings.",
                    curriculum: "The BSEd major in Information Management program includes a well-structured curriculum covering key areas of information management, educational technology, and pedagogy. Common courses may include information systems, database management, instructional design, educational technology integration, and classroom management. The curriculum is designed to ensure that future educators are proficient in both information management principles and effective teaching strategies.",
                    opportunities: "Completion of a BSEd major in Information Management is typically a prerequisite for obtaining a teaching license or certification. Graduates may need to meet specific requirements, such as passing licensure exams, to become licensed educators in information management.",
                    specialization: "BSEd major in Information Management programs focus on preparing educators to employ effective teaching strategies in conveying information management principles to students. This includes designing interactive lessons, creating engaging learning materials, and utilizing various instructional methods to cater to diverse learning styles.",
                    coreCompetenies: "Throughout the program, students develop core competencies in information management, instructional design, and the integration of technology in education. They learn to design and implement educational materials that incorporate information technology, assess the needs of diverse learners, and create engaging and effective learning experiences.",
                    experience: "Many BSEd programs include practicum experiences or teaching internships in educational settings. These experiences provide students with opportunities to apply their theoretical knowledge in real classrooms, work with students, and develop their teaching skills under the guidance of experienced educators. In summary, the BSEd major in Information Management prepares individuals to become educators with expertise in information technology and management. Graduates are equipped with the knowledge and skills needed to integrate information management concepts into their teaching practices and to support students in developing proficiency in this field."
                },

                {
                    title: "(BSEd)Major in English",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1vHFVvSvBYHr86KfMxhCzlpZbUZY3gj5tg&usqp=CAU",
                    url: "/Admission/College/BSEdEng",
                    intro: "The Bachelor of Science in Education (BSEd) majoring in English is an undergraduate program designed to prepare students to become educators with expertise in teaching the English language. This program typically spans four years and aims to equip students with the knowledge and skills needed to teach English language and literature in educational settings.",
                    curriculum: "The BSEd major in English program includes a well-structured curriculum covering key areas of English language and literature. Common courses may include English grammar and composition, literature surveys, linguistics, language acquisition, teaching methods, and classroom management. The curriculum is designed to ensure that future educators are well-versed in both the theoretical and practical aspects of English language teaching.",
                    opportunities: "Completion of a BSEd major in English is typically a prerequisite for obtaining a teaching license or certification to teach English. Graduates may need to meet specific requirements, such as passing licensure exams or completing additional practical experiences, to become licensed English educators.",
                    specialization: "BSEd major in English programs focus on preparing educators to employ effective teaching strategies in conveying language and literature concepts to students. This includes designing interactive lessons, integrating technology in language instruction, and utilizing various instructional methods to cater to diverse learning styles.",
                    coreCompetenies: "Throughout the program, students develop core competencies in effective English language instruction, literary analysis, and language acquisition. They learn to design and implement engaging lessons, assess language proficiency, and foster a love for literature in their students. The program emphasizes critical thinking, communication skills, and cultural sensitivity in teaching English.",
                    experience: "Many BSEd programs include practicum experiences or teaching internships in educational settings. These experiences provide students with opportunities to apply their theoretical knowledge in real classrooms, work with students, and develop their teaching skills under the guidance of experienced educators. In summary, the BSEd major in English prepares individuals to become educators with expertise in teaching the English language and literature. Graduates are equipped with the knowledge and skills needed to foster language proficiency, appreciation for literature, and effective communication skills in their students."
                },

                {
                    title: "(BSEd)Major in Filipino",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtVlSm7s1hmiFjR76OZTY7ZcWHJv48T1bBQ&usqp=CAU",
                    url: "/Admission/College/BSEdFil",
                    intro: "The Bachelor of Science in Education (BSEd) majoring in Filipino is an undergraduate program designed to prepare students to become educators with expertise in teaching the Filipino language. This program typically spans four years and aims to equip students with the knowledge and skills needed to teach Filipino language and literature in educational settings.",
                    curriculum: "The BSEd major in Filipino program includes a well-structured curriculum covering key areas of Filipino language and literature. Common courses may include Filipino grammar and composition, literature surveys, linguistics, language acquisition, teaching methods, and classroom management. The curriculum is designed to ensure that future educators are well-versed in both the theoretical and practical aspects of teaching the Filipino language.",
                    opportunities: "Completion of a BSEd major in Filipino is typically a prerequisite for obtaining a teaching license or certification to teach Filipino. Graduates may need to meet specific requirements, such as passing licensure exams or completing additional practical experiences, to become licensed Filipino educators.",
                    specialization: "BSEd major in Filipino programs focus on preparing educators to employ effective teaching strategies in conveying language and literature concepts to students. This includes designing interactive lessons, integrating technology in language instruction, and utilizing various instructional methods to cater to diverse learning styles.",
                    coreCompetenies: "Throughout the program, students develop core competencies in effective Filipino language instruction, literary analysis, and language acquisition. They learn to design and implement engaging lessons, assess language proficiency, and foster an appreciation for Filipino literature in their students. The program emphasizes critical thinking, communication skills, and cultural sensitivity in teaching Filipino.",
                    experience: "Many BSEd programs include practicum experiences or teaching internships in educational settings. These experiences provide students with opportunities to apply their theoretical knowledge in real classrooms, work with students, and develop their teaching skills under the guidance of experienced educators. In summary, the BSEd major in Filipino prepares individuals to become educators with expertise in teaching the Filipino language and literature. Graduates are equipped with the knowledge and skills needed to foster language proficiency, an appreciation for Filipino culture, and effective communication skills in their students."
                },

                {
                    title: "(BSEd)Major in Mathematics",
                    img: "https://www.msuiit.edu.ph/assets/img/colleges/ced/bsed-mathematics.png",
                    url: "/Admission/College/BSEdMath",
                    intro: "The Bachelor of Science in Education (BSEd) majoring in Mathematics is an undergraduate program designed to prepare students for a career in teaching mathematics in educational settings. This program typically spans four years and aims to equip students with the knowledge and skills needed to teach various mathematical concepts to students at different levels.",
                    curriculum: "The BSEd major in Mathematics program includes a well-structured curriculum covering key areas of mathematics. Common courses may include algebra, geometry, calculus, statistics, number theory, teaching methods, educational technology, and classroom management. The curriculum is designed to ensure that future educators are proficient in both the theoretical and practical aspects of teaching mathematics.",
                    opportunities: "Completion of a BSEd major in Mathematics is typically a prerequisite for obtaining a teaching license or certification to teach mathematics. Graduates may need to meet specific requirements, such as passing licensure exams or completing additional practical experiences, to become licensed mathematics educators.",
                    specialization: "BSEd major in Mathematics programs focus on preparing educators to employ effective teaching strategies in conveying mathematical concepts to students. This includes designing interactive lessons, integrating technology in mathematics instruction, and utilizing various instructional methods to cater to diverse learning styles.",
                    coreCompetenies: "Throughout the program, students develop core competencies in effective mathematics instruction, pedagogy, and classroom management. They learn to design and implement engaging lessons, assess mathematical understanding, and foster problem-solving skills in their students. The program emphasizes critical thinking, communication skills, and adaptability in teaching mathematics to diverse learners.",
                    experience: "Many BSEd programs include practicum experiences or teaching internships in educational settings. These experiences provide students with opportunities to apply their theoretical knowledge in real classrooms, work with students, and develop their teaching skills under the guidance of experienced educators. In summary, the BSEd major in Mathematics prepares individuals to become educators with expertise in teaching mathematics. Graduates are equipped with the knowledge and skills needed to foster mathematical proficiency, problem-solving skills, and a love for mathematics in their students."
                },

                {
                    title: "(BSEd)Major in Science",
                    img: "https://www.msuiit.edu.ph/assets/img/colleges/ced/bsed-biology.png",
                    url: "/Admission/College/BSEdScience",
                    intro: "The Bachelor of Science in Education (BSEd) majoring in Science is an undergraduate program designed to prepare students for a career in teaching science subjects in educational settings. This program typically spans four years and aims to equip students with the knowledge and skills needed to teach various scientific concepts to students at different levels.",
                    curriculum: "The BSEd major in Science program includes a well-structured curriculum covering key areas of science. Common courses may include biology, chemistry, physics, earth science, teaching methods, educational technology, and classroom management. The curriculum is designed to ensure that future educators are proficient in both the theoretical and practical aspects of teaching science.",
                    specialization: "BSEd major in Science programs focus on preparing educators to employ effective teaching strategies in conveying scientific concepts to students. This includes designing inquiry-based lessons, incorporating real-world applications, and utilizing various instructional methods to cater to diverse learning styles.",
                    opportunities: "Completion of a BSEd major in Science is typically a prerequisite for obtaining a teaching license or certification to teach science. Graduates may need to meet specific requirements, such as passing licensure exams or completing additional practical experiences, to become licensed science educators.",
                    coreCompetenies: "Throughout the program, students develop core competencies in effective science instruction, pedagogy, and classroom management. They learn to design and implement engaging lessons, assess scientific understanding, and foster critical thinking and inquiry skills in their students. The program emphasizes hands-on experiments, demonstrations, and interactive learning experiences.",
                    experience: "Many BSEd programs include practicum experiences or teaching internships in educational settings. These experiences provide students with opportunities to apply their theoretical knowledge in real classrooms, work with students, and develop their teaching skills under the guidance of experienced educators. In summary, the BSEd major in Science prepares individuals to become educators with expertise in teaching science. Graduates are equipped with the knowledge and skills needed to foster scientific curiosity, critical thinking, and a love for science in their students."
                },
            ]
        },

        {
            header: "BT Vocational Teacher Education",
            courses: [
                {
                    title: "(BTVTEd)Major in Home Economics and Livelihood Education / HELE",
                    img: "https://www.msuiit.edu.ph/assets/img/colleges/ced/bsed-tle.png",
                    url: "/Admission/College/BTVTEdHELE",
                    intro: "The Bachelor of Technical-Vocational Education (BTVTEd) majoring in Home Economics and Livelihood Education (HELE) is an undergraduate program designed to prepare students for a career in teaching home economics and related vocational skills. This program typically spans four years and aims to equip students with the knowledge and skills needed to teach various aspects of home economics and practical livelihood education.",
                    curriculum: "The BTVTEd major in Home Economics and Livelihood Education program includes a well-structured curriculum covering key areas related to home economics. Common courses may include nutrition, culinary arts, textiles and clothing, family and consumer science, entrepreneurship, teaching methods, and classroom management. The curriculum is designed to ensure that future educators are proficient in both the theoretical and practical aspects of home economics.",
                    opportunities: "Completion of a BTVTEd major in Home Economics and Livelihood Education is typically a prerequisite for obtaining a teaching license or certification to teach vocational education. Graduates may need to meet specific requirements, such as passing licensure exams or completing additional practical experiences, to become licensed vocational education educators.",
                    specialization: "BTVTEd major in Home Economics and Livelihood Education programs focus on preparing educators to employ effective teaching strategies in conveying practical and vocational skills to students. This includes designing hands-on lessons, integrating real-world applications, and utilizing various instructional methods to cater to diverse learning styles.",
                    coreCompetenies: "Throughout the program, students develop core competencies in effective instruction, pedagogy, and vocational education related to home economics. They learn to design and implement engaging lessons, assess practical skills, and foster creativity and entrepreneurship in their students. The program emphasizes hands-on experiences and real-world applications.",
                    experience: "Many BTVTEd programs include practicum experiences or teaching internships in educational settings. These experiences provide students with opportunities to apply their theoretical knowledge in real classrooms, work with students, and develop their teaching skills under the guidance of experienced educators. In summary, the BTVTEd major in Home Economics and Livelihood Education prepares individuals to become educators with expertise in teaching practical and vocational skills related to home economics. Graduates are equipped with the knowledge and skills needed to foster creativity, entrepreneurship, and practical proficiency in their students."
                },

                {
                    title: "(BTVTEd)Major in Information Communication Technology / ICT",
                    img: "https://www.msuiit.edu.ph/assets/img/colleges/ced/industrial-technology.png",
                    url: "/Admission/College/BTVTEdICT",
                    intro: "The Bachelor of Technical-Vocational Education (BTVTEd) majoring in Information Communication Technology (ICT) is an undergraduate program designed to prepare students for a career in teaching ICT and related technical skills. This program typically spans four years and aims to equip students with the knowledge and skills needed to teach various aspects of information communication technology in vocational and technical education settings.",
                    curriculum: "The BTVTEd major in Information Communication Technology program includes a well-structured curriculum covering key areas related to ICT. Common courses may include programming, database management, networking, web development, educational technology, teaching methods, and classroom management. The curriculum is designed to ensure that future educators are proficient in both the theoretical and practical aspects of ICT.",
                    opportunities: "Completion of a BTVTEd major in Information Communication Technology is typically a prerequisite for obtaining a teaching license or certification to teach ICT. Graduates may need to meet specific requirements, such as passing licensure exams or completing additional practical experiences, to become licensed ICT educators.",
                    coreCompetenies: "Throughout the program, students develop core competencies in effective instruction, pedagogy, and vocational education related to ICT. They learn to design and implement engaging lessons, assess technical skills, and foster problem-solving and critical thinking in their students. The program emphasizes hands-on experiences and real-world applications of ICT concepts.",
                    specialization: "BTVTEd major in ICT programs focus on preparing educators to employ effective teaching strategies in conveying technical skills to students. This includes designing hands-on lessons, integrating real-world applications, and utilizing various instructional methods to cater to diverse learning styles.",
                    experience: "Many BTVTEd programs include practicum experiences or teaching internships in educational settings. These experiences provide students with opportunities to apply their theoretical knowledge in real classrooms, work with students, and develop their teaching skills under the guidance of experienced educators. In summary, the BTVTEd major in Information Communication Technology prepares individuals to become educators with expertise in teaching technical skills related to ICT. Graduates are equipped with the knowledge and skills needed to foster technical proficiency, problem-solving abilities, and a solid foundation in ICT in their students."
                },

                
            ]
        },

        {
            header: "College of Criminology",
            courses: [
                {
                    title: "(BSC)Bachelor of Sciences in Criminology",
                    img: "https://perpetualdalta.edu.ph/wp-content/uploads/2018/04/IMG_1463-1024x683.jpg",
                    url: "/Admission/College/BSC",
                    intro: "The Bachelor of Science in Criminology (BSC) is an undergraduate program designed to provide students with a comprehensive understanding of crime, criminal justice systems, and the factors influencing criminal behavior. This program typically spans four years and aims to equip students with the knowledge and skills necessary for a career in various areas of criminology and criminal justice.",
                    curriculum: "The BSC program includes a well-structured curriculum covering key areas of criminology, criminal justice, law, and social sciences. Common courses may include criminal law, criminal procedure, forensic science, criminal investigation, sociology of crime, psychology of crime, and criminal justice administration. The curriculum is designed to provide a broad and multidisciplinary foundation in the study of crime and its prevention.",
                    opportunities: "Students in BSC programs study legal and constitutional issues relevant to criminology and criminal justice. This includes an understanding of individual rights, due process, and the legal constraints within which criminal justice professionals operate.",
                    coreCompetenies: "Throughout the program, students develop core competencies in understanding the causes and consequences of criminal behavior, analyzing crime patterns, and implementing effective strategies for crime prevention and control. They also gain insights into the legal aspects of criminal justice and law enforcement procedures.",
                    specialization: "Given the sensitive nature of criminal justice work, BSC programs emphasize the importance of ethical conduct and professionalism. Students learn about ethical considerations in law enforcement, the judiciary, and corrections, as well as the responsibilities associated with maintaining integrity within the criminal justice system.",
                    experience: "Many BSC programs incorporate internships or practical experiences in criminal justice agencies. This hands-on experience allows students to apply theoretical knowledge in real-world settings, gain exposure to different aspects of the criminal justice field, and develop practical skills relevant to their future careers. In summary, the Bachelor of Science in Criminology provides students with a comprehensive education in the study of crime, criminal justice systems, and related disciplines. Graduates are well-prepared for diverse career opportunities within the field of criminology and criminal justice."
                },

                {
                    title: "(BSPA)Bachelor of Sciences in Public Administration",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRz9ma27-roKTv72_FxqQ1kKL8K3wh4C5hug&usqp=CAU",
                    url: "/Admission/College/BSPA",
                    intro: "The Bachelor of Science in Public Administration (BSPA) is an undergraduate program designed to prepare students for careers in public service, governance, and administration. This program typically spans four years and provides students with a comprehensive understanding of public administration principles, policies, and practices.",
                    curriculum: "The BSPA program includes a well-structured curriculum covering key areas of public administration, political science, economics, and related disciplines. Common courses may include public policy analysis, government and politics, administrative law, organizational behavior, public finance, and research methods. The curriculum is designed to provide students with a solid foundation in both theoretical and practical aspects of public administration.",
                    opportunities: "Students study the principles of organizational management within the public sector. This includes topics such as human resource management, public budgeting, strategic planning, and organizational behavior specific to government and public organizations.",
                    coreCompetenies: "Throughout the program, students develop core competencies in understanding government structures, public policy development and analysis, organizational management, and the ethical considerations involved in public service. They also gain skills in effective communication, decision-making, and leadership within the public sector.",
                    specialization: "BSPA programs often include courses focused on analyzing public policies and their impact on society. Students learn to assess policy alternatives, evaluate the effectiveness of public programs, and understand the role of government in addressing societal issues.",
                    experience: "Many BSPA programs incorporate internships or practical experiences in public agencies, government offices, or non-profit organizations. This hands-on experience allows students to apply theoretical knowledge in real-world settings, gain exposure to different aspects of public administration, and develop practical skills. In summary, the Bachelor of Science in Public Administration equips students with the knowledge and skills needed for careers in public service, governance, and administration. Graduates are well-prepared to contribute to the effective and ethical functioning of public organizations and agencies."
                },

                {
                    title: "(BSISM)Bachelor of Sciences in Industrial Security Management",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6P2S6mZEr9inq4xy-gPkltKwrk7cwSzp28g&usqp=CAU",
                    url: "/Admission/College/BSISM",
                    intro: "The Bachelor of Science in Industrial Security Management (BSISM) is an undergraduate program designed to prepare students for careers in the field of industrial security. This program typically spans four years and provides students with a comprehensive understanding of security management principles, risk assessment, and strategies for protecting industrial and corporate assets.",
                    curriculum: "The BSISM program includes a well-structured curriculum covering key areas of security management, risk assessment, law and regulations, emergency response, and related disciplines. Common courses may include industrial security management principles, security technology, risk analysis, crisis management, legal aspects of security, and business continuity planning.",
                    coreCompetenies: "Throughout the program, students develop core competencies in understanding security threats and vulnerabilities specific to industrial environments. They learn risk mitigation strategies, crisis response planning, and the application of security technologies to protect assets and personnel.",
                    opportunities: "Given the importance of preparedness in the field of industrial security, students study emergency response procedures and crisis management. This includes developing plans for responding to security incidents, natural disasters, and other emergencies.",
                    specialization: "Given the sensitive nature of security work, BSISM programs emphasize the importance of ethical conduct and professionalism. Students learn about ethical considerations in security decision-making and the responsibilities associated with maintaining integrity in the field.",
                    experience: "Many BSISM programs incorporate internships or practical experiences in industrial settings, allowing students to apply theoretical knowledge in real-world scenarios. This hands-on experience provides valuable insights into the day-to-day challenges of industrial security management. In summary, the Bachelor of Science in Industrial Security Management equips students with the knowledge and skills needed to protect industrial assets and personnel from security threats. Graduates are well-prepared for careers in industrial security and related fields, contributing to the overall safety and resilience of industrial operations."
                },
            ]
        },

        {
            header: "College of Engineering",
            courses: [
                {
                    title: "(BSELE)Bachelor of Sciences in Electronics Engineering",
                    img: "https://www.amaes.edu.ph/wp-content/uploads/2023/06/BS-EE-course-lo.jpg",
                    url: "/Admission/College/BSELE",
                    intro: "The Bachelor of Science in Electronics Engineering (BSELE) is an undergraduate program designed to prepare students for a career in the field of electronics and electrical engineering. This program typically spans four years and provides students with a comprehensive understanding of electronic systems, circuits, communication systems, and other related disciplines.",
                    curriculum: "The BSELE program includes a well-structured curriculum covering key areas of electronics engineering. Common courses may include electrical circuits, digital electronics, analog electronics, signals and systems, communication systems, control systems, power systems, and electronic design. The curriculum is designed to provide students with a strong foundation in both theoretical principles and practical applications of electronics engineering.",
                    coreCompetenies: "Throughout the program, students develop core competencies in designing, analyzing, and troubleshooting electronic systems. They learn about semiconductor devices, integrated circuits, communication protocols, and the application of electrical principles in various engineering domains.",
                    opportunities: "BSELE programs often include courses on communication systems, covering principles of modulation, demodulation, transmission, and reception of signals. Students learn about various communication technologies, including wireless communication, fiber optics, and digital communication.",
                    specialization: "BSELE programs often include courses on communication systems, covering principles of modulation, demodulation, transmission, and reception of signals. Students learn about various communication technologies, including wireless communication, fiber optics, and digital communication.",
                    experience: "Many BSELE programs incorporate internships or practical experiences in industry or research institutions. This real-world experience allows students to apply their knowledge in professional settings, gain exposure to industry practices, and develop practical skills. In summary, the Bachelor of Science in Electronics Engineering equips students with the knowledge and skills needed for a career in the dynamic and evolving field of electronics. Graduates contribute to the development and implementation of electronic systems that impact various aspects of modern technology."
                },

                {
                    title: "(BSCE)Bachelor of Science in Computer Engineering",
                    img: "https://erau.edu/-/media/images/shared/degrees/university/bachelors-computer-engineering.jpg?as=0&mw=1600&hash=FEF80017366842A1B35D289329699DD6",
                    url: "/Admission/College/BSCE",
                    intro: "The Bachelor of Science in Computer Engineering (BSCE) is an undergraduate program designed to prepare students for a career in the field of computer engineering. This program typically spans four years and provides students with a comprehensive understanding of both computer science and electrical engineering principles, focusing on the design and integration of computer systems.",
                    curriculum: "The BSCE program includes a well-structured curriculum covering key areas of computer engineering. Common courses may include digital logic design, computer organization and architecture, programming languages, data structures, algorithms, computer networks, embedded systems, and hardware-software integration. The curriculum is designed to provide students with a strong foundation in both theoretical principles and practical applications of computer engineering.",
                    opportunities: "Programming is an essential skill in computer engineering. Students learn programming languages and software development methodologies to design and implement software for various applications.",
                    coreCompetenies: "Throughout the program, students develop core competencies in designing and implementing computer systems. They learn about digital circuits, microprocessors, programming, computer networks, and the integration of hardware and software components.",
                    specialization: "A significant component of the curriculum is dedicated to digital logic design. Students learn how to design and analyze digital circuits, including combinational and sequential logic circuits.",
                    experience: "Many BSCE programs incorporate internships or practical experiences in industry or research institutions. This real-world experience allows students to apply their knowledge in professional settings, gain exposure to industry practices, and develop practical skills. In summary, the Bachelor of Science in Computer Engineering equips students with the knowledge and skills needed for a career in designing and implementing computer systems. Graduates play a crucial role in advancing technology and innovation in the field of computer engineering."
                },
            ]
        },

        {
            header: "College of Health Sciences",
            courses: [
                {
                    title: "(BSMedTech)Bachelor of Sciences in Medical Technology",
                    img: "https://www.hallmarksconsultancy.com/uploads/9/7/7/1/97716354/edited/medical-technology-hallmarks.jpeg?1487426918",
                    url: "/Admission/College/BSMedTech",
                    intro: "The Bachelor of Science in Medical Technology (BSMedTech) is an undergraduate program designed to prepare students for a career in the medical laboratory sciences. This program typically spans four years and provides students with a comprehensive understanding of laboratory techniques, diagnostic procedures, and the application of technology in the field of medical diagnostics.",
                    curriculum: "The BSMedTech program includes a well-structured curriculum covering key areas of medical laboratory sciences. Common courses may include clinical chemistry, hematology, microbiology, immunology, pathology, medical instrumentation, and laboratory management. The curriculum is designed to provide students with a strong foundation in both theoretical principles and practical skills relevant to medical technology.",
                    opportunities: "Clinical chemistry courses cover the analysis of blood and body fluids to assess various health parameters. Students learn about chemical tests used in the diagnosis and monitoring of diseases such as diabetes, kidney disorders, and metabolic imbalances.",
                    coreCompetenies: "Throughout the program, students develop core competencies in laboratory techniques, specimen analysis, and the interpretation of results. They learn about the principles of various diagnostic tests and gain hands-on experience in conducting laboratory procedures.",
                    specialization: "Clinical chemistry courses cover the analysis of blood and body fluids to assess various health parameters. Students learn about chemical tests used in the diagnosis and monitoring of diseases such as diabetes, kidney disorders, and metabolic imbalances.",
                    experience: "Many BSMedTech programs include a clinical internship or practicum, where students work in actual clinical laboratory settings. This hands-on experience allows students to apply their knowledge in a real-world environment and develop practical skills under the guidance of experienced professionals. In summary, the Bachelor of Science in Medical Technology prepares students for a rewarding career in medical laboratory sciences, where they play a crucial role in diagnosing and monitoring diseases through laboratory testing and analysis."
                }
            ]
        },

        {
            header: "Hospitality & Tourism",
            courses: [
                {
                    title: "(BSHM)Bachelor of Sciences in Hospitality Management",
                    img: "https://www.sti.edu/images/2022/prospectus/Simulation_HRM.jpg",
                    url: "/Admission/College/BSHM",
                    intro: "The Bachelor of Science in Hospitality Management (BSHM) is an undergraduate program designed to prepare students for careers in the diverse and dynamic field of hospitality. This program typically spans four years and provides students with a comprehensive understanding of hospitality operations, management principles, and customer service in the hospitality industry.",
                    curriculum: "The BSHM program includes a well-structured curriculum covering key areas of hospitality management. Common courses may include hotel management, restaurant management, event planning, tourism management, hospitality marketing, human resource management, and hospitality law. The curriculum is designed to provide students with a strong foundation in both theoretical principles and practical skills relevant to the hospitality industry.",
                    opportunities: "Hotel management courses cover the principles of managing hotel operations, including front office management, housekeeping, food and beverage service, and reservations. Students gain insights into the day-to-day operations of hotels and hospitality establishments.",
                    coreCompetenies: "Throughout the program, students develop core competencies in managing various aspects of hospitality establishments, including hotels, restaurants, resorts, and event venues. They learn about customer service, effective communication, financial management, and strategic planning.",
                    specialization: "Tourism management courses provide an understanding of the tourism industry, including travel and tour operations, destination management, and marketing strategies to attract tourists.",
                    experience: "Many BSHM programs include internships or practical experiences in hospitality settings. This hands-on experience allows students to apply their knowledge in real-world environments, gain exposure to industry practices, and develop practical skills under the guidance of experienced professionals. In summary, the Bachelor of Science in Hospitality Management equips students with the knowledge and skills needed for successful careers in the vibrant and diverse hospitality industry. Graduates contribute to the efficient and customer-focused management of hotels, restaurants, events, and tourism services."
                },

                {
                    title: "(BSTM)Bachelor of Sciences in Tourism Management",
                    img: "https://www.wccaviation.com/storage/aerotech_course/20210326/resized/sq2cpKnD0D83rzjzFIZw032620210758.jpeg",
                    url: "/Admission/College/BSTM",
                    intro: "The Bachelor of Science in Tourism Management (BSTM) is an undergraduate program designed to equip students with the knowledge and skills needed for successful careers in the tourism and hospitality industry. This program typically spans four years and provides a comprehensive understanding of tourism, travel, and hospitality management.",
                    curriculum: "The BSTM program includes a well-structured curriculum covering key areas of tourism management. Common courses may include tourism principles and practices, travel agency management, hospitality management, tourism marketing, destination management, tourism planning, and sustainable tourism. The curriculum is designed to provide students with a strong foundation in both theoretical principles and practical skills relevant to the tourism industry.",
                    opportunities: "Hospitality management courses provide insights into the principles of managing hospitality establishments, such as hotels, resorts, and restaurants. Students learn about front office management, housekeeping, food and beverage service, and customer relations.",
                    coreCompetenies: "Throughout the program, students develop core competencies in managing various aspects of tourism, including travel services, hospitality operations, destination marketing, and event planning. They learn about customer service, effective communication, financial management, and strategic planning in the context of tourism.",
                    specialization: "This course covers the principles of tourism planning at various levels, including local, regional, and national. Students learn how to assess tourism potential, create tourism development plans, and address challenges associated with tourism growth.",
                    experience: "Many BSTM programs include internships or practical experiences in the tourism and hospitality industry. This hands-on experience allows students to apply their knowledge in real-world settings, gain exposure to industry practices, and develop practical skills under the guidance of experienced professionals. In summary, the Bachelor of Science in Tourism Management equips students with the knowledge and skills needed for successful careers in the dynamic and evolving field of tourism. Graduates contribute to the sustainable development and management of tourism destinations, services, and experiences."
                },

               
            ]
        },

        
    ],

    seniorHigh: [
        {
            header: "Academic Track",
            courses: [
                {
                    title: "(ABM)Accountancy, Business & Management Strand",
                    img: "https://lh3.googleusercontent.com/-VCY2JrapA4k/X8jSATIaBLI/AAAAAAAAAC4/muQjailMNpcG8PuCLm1_T3CGiLYeRlN7wCLcBGAsYHQ/w1200-h630-p-k-no-nu/1606996449246790-0.png",
                    url: "/Admission/SeniorHigh/ABM",
                    intro: "The ABM Strand serves as a cornerstone for aspiring professionals in the fields of accountancy, business, and management. This comprehensive program, embedded in the senior high school curriculum, lays the groundwork for future success in the dynamic business landscape. With a focus on holistic education, students in the ABM Strand embark on a journey that nurtures their analytical skills, ethical decision-making, and entrepreneurial mindset.",
                    curriculum: "The ABM curriculum encompasses a well-rounded selection of subjects, including accountancy, business and management, applied economics, fundamentals of ABM, and business ethics. This carefully crafted curriculum integrates theoretical knowledge with practical applications, ensuring students graduate with a deep understanding of key business concepts and the ability to apply them in real-world scenarios.",
                    coreCompetenies: "Throughout the program, students develop a diverse set of core competencies. These include analytical prowess, financial literacy, effective communication, leadership skills, and a strong sense of ethical decision-making. ABM students emerge with the skills needed to navigate the complexities of the business world and contribute meaningfully to their chosen professions.",
                    specialization: "The ABM Strand offers a specialization in various fields such as accountancy, business management, entrepreneurship, marketing, and human resource management. This allows students to tailor their education to align with their specific career aspirations, providing a solid foundation for more specialized studies at the college level.",
                    opportunities: "Graduates of the ABM Strand are presented with a myriad of opportunities across diverse industries. From pursuing further studies in accountancy, business management, or economics to entering the workforce in roles such as financial analysts, marketing executives, or entrepreneurs, ABM alumni are well-equipped to thrive in today's competitive job market.",
                    experience: "The ABM program emphasizes practical experience through internships and hands-on projects. Students have the opportunity to apply classroom learning in real-world settings, gaining valuable insights into the day-to-day operations of businesses. This experiential learning approach ensures that ABM graduates not only possess theoretical knowledge but also the practical skills needed for success in their chosen fields.",
                },

                {
                    title: "(STEM)Science, Technology, Engineering & Mathematics Strand",
                    img: "https://4.bp.blogspot.com/-AHWy11DmkAo/W-tzt_wzv6I/AAAAAAAAABI/ABeZtk901rk8ax4enLgoo3YlV7gPBMODACLcBGAs/s400/14016.senior-high-school.jpg",
                    url: "/Admission/SeniorHigh/STEM",
                    intro: "The STEM Strand stands as a beacon for students passionate about delving into the realms of science, technology, engineering, and mathematics. This dynamic program, embedded within the senior high school curriculum, serves as a gateway to a world of innovation and discovery. Aspiring scientists, engineers, and tech enthusiasts find a nurturing environment that fosters critical thinking, problem-solving skills, and a deep appreciation for the wonders of STEM.",
                    curriculum: "The STEM curriculum is a robust blend of advanced science and mathematics courses, coupled with hands-on experiences in technology and engineering. Students explore physics, chemistry, biology, calculus, and programming, gaining a solid foundation in the core STEM disciplines. The curriculum is designed to stimulate curiosity, foster analytical thinking, and prepare students for the rigors of STEM-focused higher education.",
                    coreCompetenies: "Throughout the program, students cultivate core competencies crucial for success in STEM fields. These include analytical reasoning, research skills, computational thinking, experimental design, and effective communication of scientific concepts. STEM students develop a mindset geared towards innovation and are equipped to tackle complex challenges in the ever-evolving landscape of science and technology.",
                    specialization: "The STEM Strand offers a range of specializations, allowing students to tailor their education to specific STEM disciplines. Specializations may include physics, chemistry, biology, computer science, engineering, and applied mathematics. This flexibility enables students to focus on their areas of interest and lays the groundwork for specialized studies at the university level.",
                    opportunities: "STEM graduates are presented with abundant opportunities across various sectors. Whether pursuing higher education in engineering, computer science, or the natural sciences or entering the workforce as research scientists, engineers, data analysts, or technology specialists, STEM alumni are well-prepared to contribute to cutting-edge advancements and address global challenges.",
                    experience: "The STEM program emphasizes hands-on experience through laboratory work, research projects, and collaborative problem-solving initiatives. Students engage in real-world applications of STEM concepts, fostering a deep understanding of how scientific principles translate into technological innovations. This experiential learning approach ensures that STEM graduates not only possess theoretical knowledge but also the practical skills needed to drive progress in STEM-related industries.",
                },

                {
                    title: "(HUMSS) Humanities & Social Sciences Strand",
                    img: "https://www.onlineshs.com/wp-content/uploads/2020/02/shutterstock_1200781357_compressed-1024x683.jpg",
                    url: "/Admission/SeniorHigh/HUMSS",
                    intro: "The HUMSS Strand stands as an intellectual hub for students inclined towards the humanities and social sciences. This thought-provoking program, embedded in the senior high school curriculum, serves as a gateway to understanding human behavior, societies, and cultures. With a strong emphasis on critical thinking and social awareness, HUMSS cultivates students into well-rounded individuals prepared to contribute meaningfully to the world.",
                    curriculum: "The HUMSS curriculum is a rich tapestry of subjects encompassing literature, philosophy, sociology, psychology, political science, and economics. Students delve into the complexities of human experiences, societal structures, and cultural phenomena. The curriculum fosters analytical thinking, effective communication, and a deep appreciation for the interconnectedness of human societies.",
                    coreCompetenies: "Throughout the program, students develop core competencies such as critical analysis, research skills, effective communication, cultural sensitivity, and a nuanced understanding of social issues. HUMSS students emerge with the ability to navigate the diverse landscapes of the humanities and social sciences, contributing to informed discourse and positive societal change.",
                    specialization: "The HUMSS Strand offers specializations that allow students to tailor their education to specific areas within the humanities and social sciences. Specializations may include literature, psychology, political science, sociology, and cultural studies. This flexibility empowers students to explore their passions and lays the foundation for specialized studies at the university level.",
                    opportunities: "HUMSS graduates have diverse opportunities awaiting them. Whether pursuing higher education in fields like psychology, literature, or political science, or entering the workforce in roles such as educators, social workers, researchers, or policy analysts, HUMSS alumni are equipped to engage with the complex issues shaping our societies.",
                    experience: "The HUMSS program places a strong emphasis on experiential learning through research projects, community engagement, and internships. Students actively apply theoretical knowledge to real-world scenarios, gaining insights into the complexities of human behavior and societal dynamics. This hands-on approach ensures that HUMSS graduates not only possess academic knowledge but also the practical skills needed to navigate the multifaceted realms of the humanities and social sciences.",
                },

                {
                    title: "(GAS)General Academic Strand",
                    img: "https://www.onlineshs.com/wp-content/uploads/2022/09/shutterstock_1009373512_compressed-1536x1024-1.jpg",
                    url: "/Admission/SeniorHigh/GAS",
                    intro: "The General Academic Strand, or GAS, serves as a flexible and comprehensive avenue within the senior high school curriculum, providing students with a broad range of subjects to explore. Positioned as a generalist track, GAS is designed to nurture versatile learners equipped with critical thinking skills and a well-rounded understanding of various academic disciplines.",
                    curriculum: "The GAS curriculum is characterized by its diversity, encompassing subjects from various academic domains. Students engage with subjects such as humanities, social sciences, natural sciences, and mathematics, providing a holistic educational experience. This broad curriculum encourages students to explore different fields, laying the groundwork for a multidisciplinary approach to learning.",
                    coreCompetenies: "Throughout the program, students in the GAS Strand develop core competencies in critical thinking, communication, research skills, and adaptability. The emphasis on a well-rounded education equips students with the ability to analyze information from different perspectives, fostering intellectual agility that is valuable in various academic and professional pursuits.",
                    specialization: "While GAS is considered a generalist track, it allows students the flexibility to specialize based on their interests. Students may choose elective subjects in alignment with their career aspirations, providing them with the opportunity to delve deeper into specific fields of study. This flexibility prepares students for a variety of paths in higher education and the workforce.",
                    opportunities: "GAS graduates have diverse opportunities available to them. Whether pursuing higher education in liberal arts, social sciences, business, or other fields, or entering the workforce in roles that require a broad skill set, GAS alumni are prepared to adapt to the changing demands of academic and professional environments.",
                    experience: "The GAS program places a premium on a well-rounded educational experience. Through exposure to a variety of subjects and elective options, students gain a comprehensive understanding of different disciplines. This exposure is complemented by experiential learning opportunities, including research projects and collaborative activities, ensuring that GAS graduates are not only knowledgeable but also adept at applying their skills in practical settings.",
                },
            ]
        },

        {
            header: "Technical-Vocational Track",
            courses: [
                {
                    title: "(ICT) Information & Communication Technology Strand * Specializes in Computer Programming, Digital Arts & Robotics Technology",
                    img: "https://gist.edu.ph/wp-content/uploads/2021/08/css-870x440.jpg",
                    url: "/Admission/SeniorHigh/ICT",
                    intro: "The ICT Strand stands as a cornerstone in the senior high school curriculum, offering a specialized focus on computer programming, digital arts, and robotics technology. This dynamic program is crafted to immerse students in the forefront of technological innovation, providing them with a comprehensive understanding of key ICT principles and hands-on experience in areas crucial to the evolving tech industry.",
                    curriculum: "The ICT curriculum is a robust fusion of computer programming, digital arts, and robotics technology. Students delve into the intricacies of coding languages, graphic design, animation, and the principles of robotics. The curriculum is designed to provide a holistic education, ensuring students acquire both technical expertise and creative skills essential in the contemporary world of information and communication technology.",
                    coreCompetenies: "Throughout the program, students in the ICT Strand develop core competencies in computer programming languages, digital design tools, and robotics technology. Emphasis is placed on problem-solving, critical thinking, and effective collaboration, equipping students with the skills needed to excel in the dynamic and interdisciplinary field of ICT.",
                    specialization: "The ICT Strand specializes in three key areas: computer programming, digital arts, and robotics technology. Students have the opportunity to deepen their knowledge and skills in these specific domains, allowing them to pursue specialized paths aligned with their interests and career aspirations within the broader ICT field.",
                    opportunities: "ICT graduates specializing in computer programming, digital arts, and robotics technology are well-positioned for diverse opportunities. Whether advancing to higher education in computer science, pursuing careers as software developers, graphic designers, animators, or robotics engineers, ICT alumni are prepared to contribute to the forefront of technological innovation.",
                    experience: "The ICT program places a strong emphasis on experiential learning through practical projects, coding challenges, digital art creation, and robotics technology applications. Students actively engage in hands-on experiences, working with industry-standard tools and technologies, ensuring they graduate not only with theoretical knowledge but also with the practical skills needed to excel in their chosen specializations.",
                },

                {
                    title: "(HE) Home Economics Strand * Specializes in Hotel & Restaurant",
                    img: "https://settiesbloghome.files.wordpress.com/2019/03/5-months-hotel-management-course-500x500.jpg",
                    url: "/Admission/SeniorHigh/HE",
                    intro: "The Home Economics Strand takes center stage in the senior high school curriculum, offering a specialized focus on Hotel and Restaurant Management. This unique program is tailored to immerse students in the art and science of culinary excellence and hospitality management, providing a comprehensive education that prepares them for thriving careers in the dynamic world of hotels and restaurants.",
                    curriculum: "The HE Strand's curriculum is a delectable blend of culinary arts, hospitality management, and business skills. Students delve into the principles of cooking, food and beverage management, customer service, and the intricacies of running a hotel or restaurant. The curriculum is designed to provide a holistic education, blending practical culinary skills with the essential knowledge of managing a successful hospitality business.",
                    coreCompetenies: "Throughout the program, students in the HE Strand develop core competencies in culinary arts, service excellence, and hospitality management. Emphasis is placed on hands-on culinary training, customer relations, business acumen, and effective communication in the context of the hotel and restaurant industry. HE students graduate with the skills needed to excel in various roles within the vibrant world of hospitality.",
                    specialization: "The HE Strand specializes in Hotel and Restaurant Management. Students have the opportunity to deepen their knowledge and skills in this specific domain, allowing them to pursue specialized paths aligned with their interests and career aspirations within the broader field of Home Economics.",
                    opportunities: "HE graduates specializing in Hotel and Restaurant Management are well-prepared for diverse opportunities in the hospitality industry. Whether advancing to higher education in hotel management, pursuing careers as chefs, restaurant managers, hoteliers, or entrepreneurs in the food and beverage sector, HE alumni are equipped to contribute to the thriving and ever-evolving world of hospitality.",
                    experience: "The HE program places a strong emphasis on experiential learning through practical cooking sessions, restaurant simulations, and internships in real-world hospitality settings. Students actively engage in the art of culinary creation, learn the nuances of providing exceptional customer service, and gain insights into the operational aspects of managing hotels and restaurants. This immersive learning approach ensures that HE graduates not only possess theoretical knowledge but also the practical skills needed to shine in the exciting field of Hotel and Restaurant Management.",
                },
            ]
        },
    ],
});

//status store management
export const statusStore = writable({
    applicationState:<STUDENT_APP_TB | null> null,
    showDelete: false,
})

//interaction store management
export const interactionStore = writable({
    
    createdPostArray:<INTERACTION_POST_TB[] | null> null,
})

export const supabaseStore = writable<SupabaseClient>();

//admin request store management
export const applicationFormsArray = writable([
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 7, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 8, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 9, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 10, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 11, name: 'Boron', weight: 10.811, symbol: 'B' },
]);

export const applicationsArray = writable<STUDENT_APP_TB[]>([]);