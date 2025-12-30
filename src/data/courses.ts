// Helper to generate consistent dummy data for companies
const generateCompanies = (category: string) => {
    const baseCompanies: Record<string, { name: string; pckg: string }[]> = {
        coding: [
            { name: "Optum", pckg: "4.5 - 7.5 LPA" }, { name: "Omega Healthcare", pckg: "3.5 - 6.0 LPA" },
            { name: "GeBBS Healthcare", pckg: "3.8 - 6.5 LPA" }, { name: "CorroHealth", pckg: "4.0 - 7.0 LPA" },
            { name: "R1 RCM", pckg: "4.2 - 7.5 LPA" }, { name: "AGS Health", pckg: "3.6 - 6.2 LPA" },
            { name: "Episource", pckg: "4.0 - 7.2 LPA" }, { name: "Cotiviti", pckg: "5.0 - 9.0 LPA" },
            { name: "Change Healthcare", pckg: "5.5 - 9.5 LPA" }, { name: "Cognizant", pckg: "4.0 - 7.0 LPA" },
            { name: "TCS", pckg: "3.5 - 6.5 LPA" }, { name: "Wipro", pckg: "3.5 - 6.5 LPA" },
            { name: "Infosys", pckg: "3.5 - 6.5 LPA" }, { name: "HCL Tech", pckg: "3.8 - 7.0 LPA" },
            { name: "Accenture", pckg: "4.5 - 8.5 LPA" }, { name: "Sutherland", pckg: "3.2 - 5.5 LPA" },
            { name: "Access Healthcare", pckg: "3.5 - 6.0 LPA" }, { name: "Vee Technologies", pckg: "3.2 - 5.8 LPA" },
            { name: "Ajuba", pckg: "3.5 - 6.0 LPA" }, { name: "MiraMed", pckg: "3.5 - 6.2 LPA" },
            { name: "Visionary RCM", pckg: "3.8 - 6.5 LPA" }, { name: "Promorph Solutions", pckg: "3.5 - 6.0 LPA" },
            { name: "Advantmed", pckg: "4.0 - 7.0 LPA" }, { name: "Ciox Health", pckg: "4.5 - 8.0 LPA" },
            { name: "E4 Health", pckg: "4.0 - 7.5 LPA" }, { name: "MModal", pckg: "3.8 - 6.8 LPA" },
            { name: "Nuance", pckg: "5.0 - 9.0 LPA" }, { name: "3M Health", pckg: "6.0 - 10.0 LPA" },
            { name: "Dolbey", pckg: "4.5 - 8.0 LPA" }, { name: "nThrive", pckg: "4.2 - 7.8 LPA" },
            { name: "Conifer Health", pckg: "4.5 - 8.2 LPA" }, { name: "Parallon", pckg: "4.0 - 7.5 LPA" },
            { name: "Guidehouse", pckg: "5.5 - 9.5 LPA" }, { name: "Huron", pckg: "6.0 - 10.5 LPA" },
            { name: "Navigant", pckg: "5.8 - 10.0 LPA" }, { name: "Deloitte", pckg: "6.5 - 12.0 LPA" },
            { name: "EY", pckg: "6.0 - 11.5 LPA" }, { name: "PwC", pckg: "6.5 - 12.5 LPA" },
            { name: "KPMG", pckg: "6.0 - 11.5 LPA" }, { name: "McKesson", pckg: "5.5 - 10.0 LPA" },
            { name: "AmerisourceBergen", pckg: "5.0 - 9.5 LPA" }, { name: "Cardinal Health", pckg: "5.2 - 9.8 LPA" },
            { name: "CVS Health", pckg: "5.5 - 10.5 LPA" }, { name: "Cigna", pckg: "6.0 - 11.0 LPA" },
            { name: "Humana", pckg: "5.8 - 10.8 LPA" }, { name: "Aetna", pckg: "5.5 - 10.5 LPA" },
            { name: "Anthem", pckg: "6.0 - 11.5 LPA" }, { name: "UnitedHealth", pckg: "6.5 - 12.5 LPA" },
            { name: "Centene", pckg: "5.5 - 10.5 LPA" }, { name: "Molina", pckg: "5.0 - 9.5 LPA" }
        ],
        clinical: [
            { name: "IQVIA", pckg: "4.5 - 8.0 LPA" }, { name: "Parexel", pckg: "5.0 - 9.5 LPA" },
            { name: "Icon plc", pckg: "5.2 - 9.5 LPA" }, { name: "Syneos Health", pckg: "5.5 - 10.0 LPA" },
            { name: "PPD", pckg: "5.0 - 9.0 LPA" }, { name: "LabCorp", pckg: "4.8 - 8.5 LPA" },
            { name: "Covance", pckg: "4.8 - 8.5 LPA" }, { name: "PRA Health", pckg: "5.0 - 9.0 LPA" },
            { name: "Charles River", pckg: "6.0 - 10.0 LPA" }, { name: "Medpace", pckg: "5.5 - 9.5 LPA" },
            { name: "PSI CRO", pckg: "5.0 - 9.0 LPA" }, { name: "Worldwide Trials", pckg: "5.2 - 9.2 LPA" },
            { name: "George Clinical", pckg: "4.5 - 8.5 LPA" }, { name: "Novartis", pckg: "6.0 - 12.0 LPA" },
            { name: "Pfizer", pckg: "6.5 - 12.5 LPA" }, { name: "Roche", pckg: "7.0 - 13.5 LPA" },
            { name: "Sanofi", pckg: "6.0 - 11.5 LPA" }, { name: "AstraZeneca", pckg: "6.5 - 12.0 LPA" },
            { name: "GSK", pckg: "5.5 - 11.0 LPA" }, { name: "Merck", pckg: "6.5 - 12.5 LPA" },
            { name: "BMS", pckg: "7.0 - 13.0 LPA" }, { name: "AbbVie", pckg: "7.0 - 13.5 LPA" },
            { name: "Amgen", pckg: "7.5 - 14.0 LPA" }, { name: "Gilead", pckg: "8.0 - 15.0 LPA" },
            { name: "Biogen", pckg: "7.5 - 14.0 LPA" }, { name: "Regeneron", pckg: "8.0 - 15.0 LPA" },
            { name: "Vertex", pckg: "7.5 - 14.5 LPA" }, { name: "Moderna", pckg: "7.0 - 13.5 LPA" },
            { name: "Novo Nordisk", pckg: "7.0 - 13.0 LPA" }, { name: "Eli Lilly", pckg: "7.5 - 14.0 LPA" },
            { name: "TCS", pckg: "4.0 - 7.5 LPA" }, { name: "Cognizant", pckg: "4.5 - 8.0 LPA" },
            { name: "Accenture", pckg: "5.0 - 9.0 LPA" }, { name: "Wipro", pckg: "4.0 - 7.5 LPA" },
            { name: "HCL", pckg: "4.2 - 7.8 LPA" }, { name: "Tech Mahindra", pckg: "4.0 - 7.5 LPA" },
            { name: "Oracle", pckg: "6.0 - 11.0 LPA" }, { name: "IBM Watson", pckg: "7.0 - 13.0 LPA" },
            { name: "Microsoft", pckg: "8.0 - 15.0 LPA" }, { name: "Google Health", pckg: "8.5 - 16.0 LPA" },
            { name: "Amazon", pckg: "8.0 - 15.0 LPA" }, { name: "Sutter Health", pckg: "6.0 - 11.0 LPA" },
            { name: "Kaiser Permanente", pckg: "6.5 - 12.0 LPA" }, { name: "Mayo Clinic", pckg: "6.0 - 11.5 LPA" },
            { name: "Cleveland Clinic", pckg: "6.0 - 11.5 LPA" }, { name: "Ascension", pckg: "5.5 - 10.5 LPA" },
            { name: "Providence", pckg: "5.5 - 10.5 LPA" }, { name: "HCA Healthcare", pckg: "5.0 - 9.5 LPA" },
            { name: "Tenet Health", pckg: "5.0 - 9.5 LPA" }, { name: "CHS", pckg: "4.8 - 9.0 LPA" }
        ],
        tech: [
            { name: "TCS", pckg: "4.5 - 8.5 LPA" }, { name: "Cognizant", pckg: "5.0 - 9.0 LPA" },
            { name: "Accenture", pckg: "5.5 - 9.5 LPA" }, { name: "Capgemini", pckg: "5.0 - 9.0 LPA" },
            { name: "Wipro", pckg: "4.5 - 8.5 LPA" }, { name: "HCL Tech", pckg: "4.8 - 8.8 LPA" },
            { name: "Infosys", pckg: "4.5 - 8.5 LPA" }, { name: "Tech Mahindra", pckg: "4.5 - 8.5 LPA" },
            { name: "LTIMindtree", pckg: "5.0 - 9.5 LPA" }, { name: "Oracle Health", pckg: "7.0 - 12.0 LPA" },
            { name: "SAS", pckg: "6.5 - 11.5 LPA" }, { name: "IQVIA", pckg: "6.0 - 11.0 LPA" },
            { name: "Parexel", pckg: "6.5 - 11.5 LPA" }, { name: "Novartis", pckg: "7.5 - 13.5 LPA" },
            { name: "Pfizer", pckg: "8.0 - 14.0 LPA" }, { name: "GSK", pckg: "7.0 - 12.5 LPA" },
            { name: "AstraZeneca", pckg: "7.5 - 13.0 LPA" }, { name: "Roche", pckg: "8.0 - 15.0 LPA" },
            { name: "Sanofi", pckg: "7.0 - 13.0 LPA" }, { name: "Bayer", pckg: "7.5 - 13.5 LPA" },
            { name: "Merck", pckg: "7.5 - 14.0 LPA" }, { name: "J&J", pckg: "8.0 - 14.5 LPA" },
            { name: "Genpact", pckg: "4.5 - 8.0 LPA" }, { name: "EXL", pckg: "5.0 - 9.0 LPA" },
            { name: "Mu Sigma", pckg: "6.0 - 10.0 LPA" }, { name: "Fractal Analytics", pckg: "7.0 - 12.0 LPA" },
            { name: "ZS Associates", pckg: "8.0 - 14.0 LPA" }, { name: "Axtria", pckg: "7.5 - 13.0 LPA" },
            { name: "Tiger Analytics", pckg: "7.5 - 13.0 LPA" }, { name: "LatentView", pckg: "7.0 - 12.0 LPA" },
            { name: "Quantiphi", pckg: "6.5 - 11.5 LPA" }, { name: "Tredence", pckg: "6.5 - 11.5 LPA" },
            { name: "Absolutdata", pckg: "6.0 - 11.0 LPA" }, { name: "TheMathCompany", pckg: "6.0 - 11.0 LPA" },
            { name: "Bridgei2i", pckg: "6.0 - 11.0 LPA" }, { name: "Course5", pckg: "5.5 - 10.0 LPA" },
            { name: "Evalueserve", pckg: "5.5 - 10.0 LPA" }, { name: "WNS", pckg: "5.0 - 9.0 LPA" },
            { name: "IBM", pckg: "7.0 - 13.0 LPA" }, { name: "Microsoft", pckg: "9.0 - 18.0 LPA" },
            { name: "Google", pckg: "10.0 - 20.0 LPA" }, { name: "Amazon", pckg: "9.5 - 19.0 LPA" },
            { name: "Flatiron Health", pckg: "8.5 - 16.0 LPA" }, { name: "Tempus", pckg: "8.5 - 16.0 LPA" },
            { name: "BenevolentAI", pckg: "9.0 - 17.0 LPA" }, { name: "Exscientia", pckg: "9.0 - 17.0 LPA" },
            { name: "Insilico", pckg: "8.5 - 16.5 LPA" }, { name: "Schrodinger", pckg: "8.0 - 15.0 LPA" },
            { name: "Atomwise", pckg: "8.5 - 16.0 LPA" }, { name: "Recursion", pckg: "8.5 - 16.0 LPA" }
        ],
        regulatory: [
            { name: "Dr. Reddy's", pckg: "5.0 - 9.0 LPA" }, { name: "Sun Pharma", pckg: "5.0 - 9.0 LPA" },
            { name: "Cipla", pckg: "4.8 - 8.5 LPA" }, { name: "Lupin", pckg: "4.8 - 8.5 LPA" },
            { name: "Aurobindo", pckg: "4.5 - 8.0 LPA" }, { name: "Biocon", pckg: "5.0 - 9.5 LPA" },
            { name: "Torrent", pckg: "4.5 - 8.0 LPA" }, { name: "Zydus", pckg: "4.5 - 8.0 LPA" },
            { name: "Alkem", pckg: "4.2 - 7.5 LPA" }, { name: "Mankind", pckg: "4.2 - 7.5 LPA" },
            { name: "Glenmark", pckg: "4.8 - 8.5 LPA" }, { name: "Intas", pckg: "4.5 - 8.0 LPA" },
            { name: "Piramal", pckg: "5.0 - 9.0 LPA" }, { name: "Jubilant", pckg: "4.8 - 8.5 LPA" },
            { name: "Granules", pckg: "4.2 - 7.5 LPA" }, { name: "Divis", pckg: "4.5 - 8.0 LPA" },
            { name: "Natco", pckg: "4.5 - 8.0 LPA" }, { name: "Aleor", pckg: "4.0 - 7.0 LPA" },
            { name: "Hetero", pckg: "4.0 - 7.0 LPA" }, { name: "MSN Labs", pckg: "4.0 - 7.0 LPA" },
            { name: "Novartis", pckg: "6.5 - 12.0 LPA" }, { name: "Pfizer", pckg: "7.0 - 13.0 LPA" },
            { name: "GSK", pckg: "6.5 - 12.0 LPA" }, { name: "Sanofi", pckg: "6.0 - 11.5 LPA" },
            { name: "AstraZeneca", pckg: "6.5 - 12.5 LPA" }, { name: "Abbott", pckg: "6.0 - 11.0 LPA" },
            { name: "Bayer", pckg: "6.5 - 12.0 LPA" }, { name: "Merck", pckg: "7.0 - 13.0 LPA" },
            { name: "J&J", pckg: "7.5 - 14.0 LPA" }, { name: "Roche", pckg: "7.0 - 13.5 LPA" },
            { name: "Parexel", pckg: "6.0 - 11.0 LPA" }, { name: "IQVIA", pckg: "6.0 - 11.5 LPA" },
            { name: "Icon", pckg: "6.0 - 11.0 LPA" }, { name: "PPD", pckg: "5.5 - 10.5 LPA" },
            { name: "Syneos", pckg: "6.0 - 11.0 LPA" }, { name: "LabCorp", pckg: "5.5 - 10.0 LPA" },
            { name: "Charles River", pckg: "6.0 - 11.0 LPA" }, { name: "Medpace", pckg: "5.8 - 10.5 LPA" },
            { name: "TCS", pckg: "4.5 - 8.0 LPA" }, { name: "Cognizant", pckg: "4.8 - 8.5 LPA" },
            { name: "Accenture", pckg: "5.0 - 9.0 LPA" }, { name: "Wipro", pckg: "4.5 - 8.0 LPA" },
            { name: "HCL", pckg: "4.8 - 8.5 LPA" }, { name: "Freyr Solutions", pckg: "4.5 - 8.5 LPA" },
            { name: "Celegence", pckg: "5.0 - 9.0 LPA" }, { name: "RegAffairs", pckg: "5.5 - 9.5 LPA" },
            { name: "Pharmalex", pckg: "5.5 - 10.0 LPA" }, { name: "ProPharma", pckg: "5.5 - 10.0 LPA" },
            { name: "Certara", pckg: "6.0 - 11.0 LPA" }, { name: "Simulations Plus", pckg: "6.5 - 12.0 LPA" }
        ]
    };
    return baseCompanies[category] || baseCompanies.clinical;
};

// Helper to generate consistent dummy reviews
const generateReviews = (category: string) => {
    const baseReviews: Record<string, { id: number, name: string, comment: string, image?: string, mentor?: string, college?: string, program?: string }[]> = {
        coding: [
            { id: 1, name: "VIJAY A", comment: "The detailed breakdown of ICD-10 guidelines was fantastic. Passed my CPC exam on the first attempt!", image: "" },
            { id: 2, name: "ROSHINI K", comment: "I really appreciated the live chart auditing sessions. It gave me real confidence for my interview.", image: "" },
            { id: 3, name: "AKASH", comment: "The anatomy and medical terminology modules were explained very clearly for non-science backgrounds.", image: "" },
            { id: 4, name: "MEGHA S", comment: "Excellent training on CPT E/M coding. The mock tests were slightly harder than the real exam, which helped.", image: "" },
            { id: 5, name: "PRADEEP R", comment: "Got placed at Omega Healthcare within 2 months of completing the course. Thank you team!", image: "" },
            { id: 6, name: "SHALINI N", comment: "The RCM concepts were explained well. Good balance of theory and practicals.", image: "" }
        ],
        medical_coding: [
            { id: 1, name: "Anuja Bhosale", comment: "Recently completed my Medical Coding course at Vision Tech Ltd and had a great learning experience. My mentor, Pravallika ma’am, taught very well and cleared doubts immediately, which gave better clarity of concepts. Weekly quizzes and real-time projects helped a lot. Vision Tech is doing a great job.", image: "", mentor: "Pravallika Yadav" },
            { id: 2, name: "Bhoomika Molli", comment: "I am Bhoomika from Vignan College and recently pursued my M.Pharm. Training in Medical Coding at VisionTech was an excellent experience. Dr. Pravallika ma’am explains concepts in a simple and beginner-friendly way. Well-structured classes, regular practice, and doubt-clearing sessions helped build confidence. A good coaching center to start a career in medical coding.", image: "", mentor: "Pravallika Yadav", college: "Vignan College" },
            { id: 3, name: "Bhosale Anuja Madhav", comment: "I had a great learning experience in medical coding coaching. Pravallika ma’am explains coding concepts clearly and patiently. The training improved both my theoretical and practical knowledge. Highly recommended for building a strong career in medical coding.", image: "", mentor: "Pravallika Yadav", college: "Swami Vivekanand College, Swami Ramanand Tirth University" },
            { id: 4, name: "Prashant Mali", comment: "Excellent experience with the Medical Coding training program. The curriculum covered ICD-10, CPT, and HCPCS in depth. Mentorship by Pravallika Yadav gave me confidence to pursue a career in healthcare.", image: "", mentor: "Pravallika Yadav", college: "P.G College of Pharmaceutical Sciences and Research, Chaupale" },
            { id: 5, name: "Anonymous Student", comment: "Completed an online Medical Coding course with VisionTech. Beginner-friendly classes, MCQ tests, and practical projects provided real-time exposure and boosted my confidence.", image: "" },
            { id: 6, name: "Indhuja Jeevagan", comment: "The online Medical Coding course at VisionTech was very valuable. Clear explanations, regular tests, and projects helped me gain confidence.", image: "" },
            { id: 7, name: "Pranali Ravekar", comment: "VisionTech is a very good platform for medical coding. Dr. Pravallika ma’am’s teaching is excellent and helped me understand concepts clearly.", image: "" },
            { id: 8, name: "Amena Tabassum", comment: "Learning medical coding from VisionTech was an amazing experience. The mentors were very cooperative and supportive.", image: "" },
            { id: 9, name: "Gowthami Satharajupalli", comment: "The medical coding internship course was a great learning experience and strengthened my understanding of coding concepts.", image: "" },
            { id: 10, name: "Arjun Chary", comment: "A great platform to learn medical coding.", image: "" },
            // { id: 11, name: "Harsha Tony", comment: "Good experience. Best platform to learn medical coding.", image: "" },
            { id: 12, name: "Shradha Khot", comment: "Hello! I am Shradha Maruti khot, student of Tatyasaheb kore college of pharmacy warananagar. Dist - Kolhapur, Maharashtra. I recently completed the internship program in medical coding with Vision Tech! 😊🌟 My program mentor was Pravallika Mam which provided good support and doubt solving with quick resolution of doubts and queries. Mr. Hari sir gives the clear idea about aptitude. Key highlight: Placement opportunities: Vision Tech provides support for placements, with some students securing internships and jobs. The program covers key areas like: Medical terminology and clinical record reading, Standard coding systems (ICD-10, CPT, HCPCS), Accuracy-driven approach to healthcare records. Thank you so much Vision Tech for giving knowledge about the medical coding and providing this wonderful experience. 😊👍", image: "", mentor: "Pravallika Yadav", college: "Tatyasaheb kore college of pharmacy warananagar" },
            { id: 13, name: "Harsha Vardhini", comment: "Vision tech was very good flat form. I found the medical coding and coaching teaching to be very helpful and well-structured. The coach explained concepts clearly, cleared doubts patiently, and provided good guidance for practical understanding and career support. Overall, it was a valuable and positive learning experience. Learning medical coding is improving my knowledge of ICD, CPT, and HCPCS codes and building confidence in healthcare documentation.", image: "", mentor: "Pravallika Yadav", college: "New Pragathi College Commerce and Science" }
        ],
        pharmacovigilance: [
            { id: 1, name: "Kunika", comment: "My experience with VisionTech Pvt Ltd was amazing. The Pharmacovigilance and Clinical Research internship and training sessions were knowledgeable and well-organized. The staff and team were very cooperative, and I faced no technical issues during online classes. I learned a lot and truly appreciate the opportunity provided by VisionTech.", image: "", mentor: "Vamsikrishna Vasabhakthula", college: "Lamrin Tech Skills University, Punjab", program: "Pharmacovigilance & Clinical Research" },
            { id: 2, name: "Nityapriya Maharana", comment: "The Pharmacovigilance training program with VisionTech was insightful and career-focused. It provided practical exposure to industry-relevant concepts. I am thankful to my mentor, Vamsi Krishna Vasavaktula sir, whose guidance made sessions interactive and easy to understand.", image: "", mentor: "Vamsi Krishna Vasavaktula", college: "Xavier Pharmacy College", program: "Pharmacovigilance" },
            { id: 3, name: "Swetha T", comment: "Vision Tech Academy provides excellent training with knowledgeable instructors and a supportive learning environment. The sessions were practical, well-structured, and industry-oriented, helping build strong skills and confidence.", image: "", program: "Pharmacovigilance" },
            { id: 4, name: "Fathimafirdose Shaik", comment: "I had an excellent learning experience during the PV and Clinical Research training program at VisionTech. The course covered both theoretical and practical aspects with real-time examples. Special thanks to Vamsi sir for his engaging teaching and continuous support.", image: "", mentor: "Vamsi", college: "SIMS College of Pharmacy", program: "PV & Clinical Research" },
            { id: 5, name: "Sathvika Yada", comment: "Completed the Pharmacovigilance course through Vision Tech. The program was well-structured with clear conceptual and practical explanations. Mentorship by Mr. V. Vanshikrishna made complex topics easy to understand.", image: "", mentor: "V. Vanshikrishna", college: "Vaagdevi College of Pharmacy, Hanamkonda", program: "Pharmacovigilance" },
            { id: 6, name: "Pratham Bidkar", comment: "VisionTech’s live Pharmacovigilance classes were engaging, informative, and student-friendly. Doubts were addressed instantly, making the learning experience smooth and effective.", image: "", mentor: "M Navya", college: "Shivajirao Kadam Institute of Pharmacy and Research, Indore", program: "Pharmacovigilance" },
            { id: 7, name: "Juby Appu", comment: "I completed the Pharmacovigilance Training Program at VisionTech, and it was a very informative and well-structured training. As a student from KMCH College of Pharmacy, I found the sessions extremely useful and relevant to my field. The mentor Vamsi Krishna explained concepts clearly, was very supportive, and guided us patiently throughout the training. The program helped improve my understanding of pharmacovigilance concepts and practical aspects. Overall, it was a great learning experience. I would definitely recommend VisionTech training programs to other pharmacy students.", image: "", mentor: "Vamsi Krishna", college: "KMCH College of Pharmacy" },
            { id: 8, name: "kirti khandwal", comment: "I completed the Pharmacovigilance intership from @VisionTech as a student of PGIMS Rohtak. The training was well-structured and my mentor Vamshi Krishna explained concepts clearly and supportively.", image: "", mentor: "Vamshi Krishna", college: "PGIMS Rohtak" },
            { id: 9, name: "Jeeban Pradeep Agnihotry", comment: "I had an excellent learning experience with the Pharmacovigilance Training Program. The sessions were very well-structured and practical, which helped me gain valuable knowledge and skills. I am from Xavier Pharmacy College, and I would like to sincerely thank my mentor, Vamsi Krishna Sir, for his guidance and support throughout the training. His teaching style made complex topics easy to understand and apply. Highly recommend VisionTech for anyone looking to build a strong foundation in pharmacovigilance!", image: "", mentor: "Vamsi Krishna Sir", college: "Xavier Pharmacy College" },
            { id: 10, name: "RAHUL LOKARE", comment: "My experience with Visiontech has been truly exceptional. The knowledge and support they provide are top-notch, and I've really appreciated the efforts they've put into helping me grow. Overall, I'm really happy with my experience and grateful for the opportunity to learn from such a great team. Thank you, Visiontech.", image: "" },
            { id: 11, name: "Shanthi priya", comment: "Am frm JNTUH UCPS joined pharmacovigellence learned frm mentor vamshi its really awesome", image: "", mentor: "vamshi", college: "JNTUH UCPS" },
            { id: 12, name: "Yakkanti Pushpalatha", comment: "This is Pushpalatha, I have joined in vision tech, I have joined in pharmacovililance and my mentor name is Vamsi sir, he is very active and help students to face the interviews, seminars etc They are very informative and I am from sims college of Pharmacy. I am very happy to a part of vision tech", image: "", mentor: "Vamsi sir", college: "sims college of Pharmacy" },
            { id: 13, name: "Sai Teja Goud", comment: "I have took Pharmacovigilence training in the @VisionTech. I'm very much satisfied with the course and gained knowledge about Pharmacovigilence role by Vamshi Krishna sir . I'm very thankful to VisionTech Group and Vinay Teja sir for providing a best platform to learn .", image: "", mentor: "Vamshi Krishna sir" },
            { id: 14, name: "Manish Chaurasiya", comment: "I had a very good learning experience😊 during my Pharmacovigilance internship at Vision Tech Group. The course was well structured and covered essential concept.🌟 My mentor is Vamsi Krishna sir ,very supportive, knowledgeable, and patient. They explained topics clearly and always encouraged us to ask questions, which helped us build confidence and practical understanding. The training was beginner-friendly and very helpful . Overall, this internship improved my knowledge, skills, and understanding of real-time PV processes. I am thankful to the mentor and the Vision Tech Group team for their guidance and support. I would definitely recommend this course to anyone interested Pharmacovigilance.", image: "", mentor: "Vamsi Krishna" },
            { id: 15, name: "I Chandrika", comment: "I took Pharmacovigilance coaching and Vamshi krishna sir was my mentor. I had a great experience with sir", image: "", mentor: "Vamshi krishna" },
            { id: 16, name: "Divyansh Meena", comment: "I am very satisfied with the online training provided by the VisionTech team. The sessions were well organized, easy to understand, and very informative. The instructors explained the concepts clearly and were always supportive. Overall, it was a great learning experience and I would definitely recommend VisionTech.", image: "" },
            { id: 17, name: "Utkarsh Dwivedi", comment: "Best institute. Pharmacovigilance course I'm choosing for my knowledge and further growth. Utkarsh dwivedi (chhatrapati shahu Ji Maharaj university kanpur) My mentor is Vamsi Krishna sir", image: "", mentor: "Vamsi Krishna", college: "chhatrapati shahu Ji Maharaj university kanpur" },
            { id: 18, name: "Jyothi Dondaprolu", comment: "Recently I completed my pharmacovigilance and clinical research course in Vision Tech PVT LTD the sessions given by vamsikrishna sir are so clear and understandable the experience with vision tech was amazing I'm so happy 😊 THANK YOU SO MUCH vision tech groups", image: "", mentor: "vamsikrishna" }
        ],
        clinical: [
            { id: 1, name: "VIJAY A", comment: "The hands-on Argus Safety training was a game changer. I felt ready for the job from day one.", image: "" },
            { id: 2, name: "ROSHINI K", comment: "Great explanation of MedDRA coding and causality assessment. Very relevant to industry standards.", image: "" },
            { id: 3, name: "AKASH", comment: "The clinical trial phases module was very detailed. Helped me crack the CRA interview.", image: "" },
            { id: 4, name: "MEGHA S", comment: "I loved the case processing workshops. It felt like actually working in a CRO.", image: "" },
            { id: 5, name: "PRADEEP R", comment: "The GCP guidelines were taught with real-life examples, not just dry theory.", image: "" },
            { id: 6, name: "SHALINI N", comment: "Support for resume building was excellent. Got shortlistings from IQVIA and Icon.", image: "" },
            { id: 7, name: "Fathimafirdose Shaik", comment: "I had an excellent learning experience at VisionTech Pvt Ltd during the PV and CR training program. The course was well structured and covered both theoretical and practical aspects in detail. Each concept was explained clearly with real-time examples, which made learning easy and effective. Special thanks to Vamsi sir, whose teaching style is very engaging and supportive. He patiently clarified every doubt and ensured that we understood the concepts thoroughly. This training has enhanced my knowledge and confidence in pharmacovigilance and clinical research. I highly recommend this program to pharmacy students.", image: "", mentor: "Vamsi Sir", college: "SIMS College of Pharmacy" },
            { id: 8, name: "Jyothi Dondaprolu", comment: "Recently I completed my pharmacovigilance and clinical research course in Vision Tech PVT LTD the sessions given by vamsikrishna sir are so clear and understandable the experience with vision tech was amazing I'm so happy 😊 THANK YOU SO MUCH vision tech groups", image: "", mentor: "vamsikrishna" }
        ],
        tech: [
            { id: 1, name: "VIJAY A", comment: "The hands-on SDTM and ADaM practice was incredibly useful. I felt confident working with real clinical datasets.", image: "" },
            { id: 2, name: "ROSHINI K", comment: "The coding exercises and mini-projects helped me understand SAS logic clearly. Instructors were patient.", image: "" },
            { id: 3, name: "AKASH", comment: "Covered everything from Base SAS to TLFs. Perfectly matched what CROs expect in interviews.", image: "" },
            { id: 4, name: "MEGHA S", comment: "Working with real trial datasets helped me understand how data transforms into submission standards.", image: "" },
            { id: 5, name: "PRADEEP R", comment: "The project-based learning boosted my confidence. My final TLF project impressed interviewers.", image: "" },
            { id: 6, name: "SHALINI N", comment: "The TLF generation module was excellent. It gave me real exposure to reporting workflows.", image: "" }
        ],
        regulatory: [
            { id: 1, name: "VIJAY A", comment: "The eCTD submission demo was excellent. I finally understood the M1-M5 structure practically.", image: "" },
            { id: 2, name: "ROSHINI K", comment: "Great insights into US FDA vs EMA requirements. Very useful for regulatory strategy roles.", image: "" },
            { id: 3, name: "AKASH", comment: "The sessions on initial IND applications were very detailed and easy to follow.", image: "" },
            { id: 4, name: "MEGHA S", comment: "I liked the focus on CMC documentation. It's a critical part of the job that is often ignored.", image: "" },
            { id: 5, name: "PRADEEP R", comment: "Mock audit sessions were an eye-opener. Learned how to handle inspector queries.", image: "" },
            { id: 6, name: "SHALINI N", comment: "The instructors have deep industry knowledge. Their tips on dossier compilation were gold.", image: "" }
        ],
        sas_programming: [
            { id: 1, name: "Shruti Singh", comment: "Great experience with the Clinical SAS course with real-time projects. Anjan sir taught very patiently, covering both theory and practical concepts clearly.", image: "" },
            { id: 2, name: "Divyanshu Singh", comment: "Completed the SAS Programming course and had an excellent experience. The balance between theory and hands-on practice boosted my confidence in SAS.", image: "" },
            { id: 3, name: "Pilli Ashwini", comment: "The Clinical SAS training program was well-structured, covering Base SAS and Advanced SAS clinical programming topics. Excellent teaching by Anjan Kumar sir.", image: "" },
            { id: 4, name: "Sachin Pande", comment: "Statistical analysis through SAS felt like live research work. Interactive sessions on interview preparation and model questions were very helpful.", image: "" },
            { id: 5, name: "Sindhuja Reddy", comment: "Excellent learning experience starting from basic SAS programming to advanced concepts like data management, statistical procedures, and reporting.", image: "" },
            { id: 6, name: "Akshee", comment: "Recently completed the SAS Programming online course. The explanations were clear, practical, and easy to follow.", image: "" },
            { id: 7, name: "Neha Chavare", comment: "All SAS topics were covered clearly and all doubts were solved. The online SAS coding course was very effective.", image: "" },
            { id: 8, name: "Tanaya Balip", comment: "Good learning experience in SAS programming. It helped me a lot and will be useful for my future career.", image: "" },
            { id: 9, name: "Krish Panday", comment: "Learned Clinical SAS programming with database handling and report formation. Teachers explained everything very clearly at an affordable price.", image: "" },
            { id: 10, name: "Debasish Dey", comment: "Completed SAS programming with a good learning experience. Mentor was supportive and explained concepts well.", image: "" },
            { id: 11, name: "Faiyaz Modi", comment: "Great experience learning SAS programming. Teaching quality was excellent and easy to understand.", image: "" },
            { id: 12, name: "Sanskruti Daphal", comment: "A great course to get started with SAS programming. It helped build a strong foundation.", image: "" }
        ]
    };
    return baseReviews[category] || baseReviews.clinical;
};

// Helper to generate consistent dummy FAQs
const generateFAQs = (category: string) => {
    const baseFAQs: Record<string, { question: string, answer: string }[]> = {
        coding: [
            { question: "Is CPC Certification mandatory for a job?", answer: "While not always mandatory for entry-level roles, having a CPC certification significantly increases your hiring chances and salary potential. Most top-tier companies prefer certified coders." },
            { question: "Do I need a medical background?", answer: "A life sciences background (B.Pharm, B.Sc Bio, Nursing) helps, but it is not strictly required. Our course covers all necessary Anatomy and Physiology basics." },
            { question: "What is the starting salary for a Medical Coder?", answer: "Freshers typically start between ₹3.0 LPA to ₹4.5 LPA. Certified coders with 1-2 years of experience can earn upwards of ₹6.0 LPA." },
            { question: "Is this training online or offline?", answer: "We offer both! You can attend live online classes or visit our centers for classroom training. All sessions are recorded for later viewing." },
            { question: "Does this course cover ICD-11?", answer: "Currently, the industry standard in the US and most countries is still ICD-10-CM, which is our primary focus. We provide overview materials for ICD-11." }
        ],
        clinical: [
            { question: "What is the difference between CRA and CRC?", answer: "A Clinical Research Coordinator (CRC) works at the hospital site managing patients and data. A Clinical Research Associate (CRA) monitors the sites on behalf of the sponsor to ensure compliance." },
            { question: "Is Pharmacovigilance a good career for Pharmacy graduates?", answer: "Absolutely. It is one of the most stable and high-growth career paths for PharmD and M.Pharm graduates, with opportunities in global MNCs." },
            { question: "What softwares are taught in PV?", answer: "We provide hands-on training simulations for Oracle Argus Safety and ArisG, which are the industry-standard drug safety databases." },
            { question: "Do you provide placement assistance?", answer: "Yes, we have a dedicated placement cell that helps with resume building, mock interviews, and connecting you with hiring CROs." }
        ],
        tech: [
            { question: "Do I need to be good at programming for Clinical SAS?", answer: "No prior programming experience is needed. SAS is a 4th-generation language specifically designed for data analysis and is easier to learn than Java or C++." },
            { question: "What is CDISC and why is it important?", answer: "CDISC standards (SDTM and ADaM) are mandatory for submitting clinical trial data to the FDA. Learning this is crucial for any Clinical SAS or Data Management role." },
            { question: "Can I work from home in this field?", answer: "Yes, Clinical SAS and Data Management roles are largely desk-based and offer excellent remote work flexibility compared to site-based roles." },
            { question: "How long does it take to get certified?", answer: "Our comprehensive course is 6 months long, which prepares you thoroughly for both the Base SAS and Advanced SAS certification exams." }
        ],
        regulatory: [
            { question: "What is a dossier in Regulatory Affairs?", answer: "A dossier is a collection of documents containing data on a drug's safety, efficacy, and quality, submitted to regulators (like FDA) for approval." },
            { question: "Is this course suitable for freshers?", answer: "Regulatory Affairs is competitive. While freshers can join, we recommend this course especially for those with 1-2 years of pharma experience looking to switch to RA." },
            { question: "What is eCTD?", answer: "eCTD (Electronic Common Technical Document) is the standard format for submitting regulatory information. Our course includes a dedicated module on eCTD compilation." }
        ]
    };
    return baseFAQs[category] || baseFAQs.clinical;
};

export const courses = [
    {
        id: "medical-coding",
        title: "MEDICAL CODING",
        headline: "YOUR GATEWAY TO HEALTHCARE CODING EXCELLENCE",
        heroImage: "landing/c1.png",
        description: "Gain the skills to translate medical data into accurate, industry-ready codes. Build confidence with practical training designed for global certification success.",
        price: "₹15,000",
        overview: {
            about: "This Medical Coding Course Online by pharmavision Edtech is designed for freshers, graduates, and healthcare professionals aiming to build a strong career in pharmaceutical online courses, healthcare professional development courses, and the rapidly growing US RCM industry. \n\nLearn ICD-10-CM, CPT, HCPCS, compliance, auditing, denial management, case coding, and exam prep with structured online training.",
            details: [
                { label: "Level", value: "Beginner → Advanced" },
                { label: "Duration", value: "6 - 12 Months" },
                { label: "Study Mode", value: "Online (Live + Recorded)" },
                { label: "Students Enrolled", value: "12,540+" },
                { label: "Instructor", value: "BDS / CPC certified, 3+ years experience" },
                { label: "Platform", value: "pharmavision.world" }
            ]
        },
        modules: [
            "Introduction to Medical Coding & US Healthcare",
            "Anatomy, Physiology & Medical Terminology",
            "ICD-10-CM Guidelines & Conventions",
            "CPT Coding (Evaluation & Management, Surgery, etc.)",
            "HCPCS Level II Coding",
            "Compliance & HIPAA Regulations",
            "Revenue Cycle Management (RCM) Basics",
            "Live Case Studies & Chart Auditing",
            "CPC Exam Preparation Mock Tests"
        ],
        career: {
            roles: ["Medical Coder", "Coding Specialist", "Medical Auditor", "RCM Analyst", "Compliance Officer"],
            growth: "High demand in US Healthcare outsourcing hubs (India, Philippines). Career path leads to Senior Coder, Team Lead, and Auditor roles."
        },
        companies: generateCompanies("coding"),
        reviews: generateReviews("medical_coding"),
        faqs: generateFAQs("coding"),
        pricingFeatures: [
            "Live classes (2x WEEKLY)",
            "LIFETIME ACCESS TO RECORDED VIDEOS",
            "ICD-10-CM, CPT, HCPCS FULL MODULES",
            "400+ PRACTICE QUESTIONS",
            "REAL MEDICAL CHART CODING",
            "DOUBT-CLEARING SESSIONS",
            "DOWNLOADABLE PDFs & MATERIALS",
            "RESUME + INTERVIEW PREPARATION",
            "PLACEMENT ASSISTANCE",
            "COURSE COMPLETION CERTIFICATE"
        ],
        emi: "₹1,200/month"
    },
    {
        id: "pharmacovigilance",
        title: "PHARMACOVIGILANCE",
        headline: "SHAPE THE FUTURE OF PATIENT SAFETY THROUGH EXPERTISE",
        heroImage: "landing/c2.png",
        description: "Learn how medicines are monitored, evaluated, and made safer for the world. Develop strong expertise in case processing, analysis, and global safety standards.",
        price: "₹18,000",
        overview: {
            about: "Master the science of drug safety. This course covers the entire spectrum of Pharmacovigilance (PV), from individual case safety reports (ICSR) to aggregate reporting and signal detection.",
            details: [
                { label: "Level", value: "Intermediate" },
                { label: "Duration", value: "3 - 6 Months" },
                { label: "Study Mode", value: "Online (Live + Recorded)" },
                { label: "Students Enrolled", value: "8,200+" },
                { label: "Instructor", value: "PharmD / PV Team Lead, 7+ years experience" },
                { label: "Platform", value: "pharmavision.world" }
            ]
        },
        modules: [
            "Introduction to Pharmacovigilance & Drug Safety",
            "Global Regulatory Guidelines (ICH, FDA, EMA)",
            "ICSR Case Processing (Argus/ArisG Simulation)",
            "MedDRA Coding & Narratives",
            "Serious vs. Non-Serious AE Assessment",
            "Aggregate Reporting (PSUR, PADER)",
            "Signal Detection & Risk Management",
            "Introduction to QPPV Roles"
        ],
        career: {
            roles: ["Drug Safety Associate", "PV Officer", "Safety Scientist", "QPPV Deputy"],
            growth: "Critical role in every pharma company. Path moves from Associate to Scientist to Safety Physician."
        },
        companies: generateCompanies("clinical"),
        reviews: generateReviews("pharmacovigilance"),
        faqs: generateFAQs("clinical"),
        pricingFeatures: [
            "Hands-on Argus Safety Database Training",
            "Real-world Case Processing Scenarios",
            "MedDRA Coding Workshops",
            "Interview Prep for PV Roles",
            "Resume Building for CROs",
            "Lifetime LMS Access"
        ],
        emi: "₹1,500/month"
    },
    {
        id: "clinical-research",
        title: "CLINICAL RESEARCH",
        headline: "WHERE SCIENTIFIC DISCOVERY MEETS REAL-WORLD IMPACT",
        heroImage: "landing/c3.png",
        description: "Learn how clinical trials transform ideas into life-changing treatments. Build the skills to support global research, patient safety, and medical breakthroughs.",
        price: "₹20,000",
        overview: {
            about: "A comprehensive program designed to launch your career in Clinical Research. Understand the 4 phases of clinical trials, Good Clinical Practice (GCP), and the roles of CRAs and CRCs.",
            details: [
                { label: "Level", value: "Beginner → Intermediate" },
                { label: "Duration", value: "4 - 8 Months" },
                { label: "Study Mode", value: "Online Hybrid" },
                { label: "Students Enrolled", value: "10,000+" },
                { label: "Instructor", value: "M.Sc Clinical Research, 10+ years exp" },
                { label: "Platform", value: "pharmavision.world" }
            ]
        },
        modules: [
            "Drug Discovery & Development Process",
            "Phases of Clinical Trials (I-IV)",
            "ICH-GCP Guidelines",
            "Ethical Considerations & Informed Consent",
            "Essential Documents (Protocol, IB, ICF)",
            "Roles & Responsibilities (Sponsor, CRO, Investigator)",
            "Clinical Monitoring & Site Visits",
            "Data Collection & query resolution"
        ],
        career: {
            roles: ["Clinical Research Coordinator (CRC)", "Clinical Research Associate (CRA)", "Clinical Trial Assistant"],
            growth: "Field work intensive. Rapid growth to Senior CRA and Project Manager within 5 years."
        },
        companies: generateCompanies("clinical"),
        reviews: generateReviews("clinical"),
        faqs: generateFAQs("clinical"),
        pricingFeatures: [
            "GCP Certification Included",
            "Mock Site Initiation Visit Training",
            "Essential Document Templates",
            "Placement Support in CROs",
            "Guest Lectures from Industry Leaders"
        ],
        emi: "₹1,800/month"
    },
    {
        id: "clinical-sas-programming",
        title: "CLINICAL SAS PROGRAMMING",
        headline: "TURN CLINICAL DATA INTO POWERFUL INSIGHTS WITH ANALYTICS",
        heroImage: "landing/c4.png",
        description: "Learn SAS programming for clinical trial data cleaning, analysis, TLF creation, and CDISC workflows. Develop the skills needed for high-value roles in biostatistics.",
        price: "₹25,000",
        overview: {
            about: "Become a specialist in Clinical SAS. This course focuses on SDTM and ADaM dataset creation, generating Tables, Listings, and Figures (TLFs) using SAS.",
            details: [
                { label: "Level", value: "Advanced" },
                { label: "Duration", value: "6 Months" },
                { label: "Study Mode", value: "Online (Live Coding)" },
                { label: "Students Enrolled", value: "5,500+" },
                { label: "Instructor", value: "Certified SAS Programmer" },
                { label: "Platform", value: "pharmavision.world" }
            ]
        },
        modules: [
            "Base SAS Programming Fundamentals",
            "SAS Macros & SQL",
            "CDISC Standards (SDTM, ADaM)",
            "Define.xml creation",
            "TLF Validation & Generation",
            "FDA Submission Data Standards",
            "Real-time Clinical Study Projects"
        ],
        career: {
            roles: ["Statistical Programmer", "Clinical SAS Programmer", "Data Analyst"],
            growth: "High paying niche. Senior programmers often move into Biostatistics or Principal Programmer roles."
        },
        companies: generateCompanies("tech"),
        reviews: generateReviews("sas_programming"),
        faqs: generateFAQs("tech"),
        pricingFeatures: [
            "SAS Certification Guidance",
            "Real Clinical Datasets for Practice",
            "Project-Based Portfolio Building",
            "1-on-1 Code Reviews",
            "Placement Referrals"
        ],
        emi: "₹2,200/month"
    },
    {
        id: "clinical-data-management",
        title: "CLINICAL DATA MANAGEMENT",
        headline: "BUILD ACCURACY AND INTEGRITY IN CLINICAL DATA MANAGEMENT",
        heroImage: "landing/c5.png",
        description: "Gain practical skills in CRF design, database setup, discrepancy handling, and study close-out. Get job-ready for CDM roles across CROs, pharma companies, and global research teams.",
        price: "₹16,000",
        overview: {
            about: "Learn to manage the lifecycle of clinical data. From Case Report Form (CRF) design to database lock, master the tools and processes used to ensure data integrity.",
            details: [
                { label: "Level", value: "Intermediate" },
                { label: "Duration", value: "4 Months" },
                { label: "Study Mode", value: "Online" },
                { label: "Students Enrolled", value: "7,000+" },
                { label: "Instructor", value: "Biomedical Engineer / CDM Lead" },
                { label: "Platform", value: "pharmavision.world" }
            ]
        },
        modules: [
            "Introduction to CDM & 21 CFR Part 11",
            "Data Management Plan (DMP)",
            "CRF Design & Annotation",
            "Database Validation & Edit Checks",
            "Discrepancy Management",
            "Medical Coding (WhoDrug/MedDRA Basics for CDM)",
            "SAE Reconciliation",
            "Database Lock & Archival"
        ],
        career: {
            roles: ["Clinical Data Coordinator", "Clinical Data Manager", "CDM Specialist"],
            growth: "Steady career progression in CROs and Pharma IT divisions."
        },
        companies: generateCompanies("tech"),
        reviews: generateReviews("tech"),
        faqs: generateFAQs("tech"),
        pricingFeatures: [
            "Hands-on with EDC Tools (Rave/Oracle Clinical demos)",
            "DMP Template Creation",
            "Mock Study Setup Project",
            "Interview Prep",
            "Certification"
        ],
        emi: "₹1,400/month"
    },
    {
        id: "ai-in-pharma",
        title: "AI IN PHARMA",
        headline: "WHERE DRUG DISCOVERY MEETS INTELLIGENT AUTOMATION",
        heroImage: "landing/c6.png",
        description: "Explore how AI improves research, safety workflows, and real-world evidence. Develop skills to use modern AI tools shaping future drug development.",
        price: "₹30,000",
        overview: {
            about: "A cutting-edge course for forward-thinkers. Understand the application of Artificial Intelligence and Machine Learning in drug discovery, clinical trials, and PV.",
            details: [
                { label: "Level", value: "Advanced / Specialized" },
                { label: "Duration", value: "3 Months" },
                { label: "Study Mode", value: "Weekend Workshops" },
                { label: "Students Enrolled", value: "2,000+" },
                { label: "Instructor", value: "PhD in Bioinformatics / AI Specialist" },
                { label: "Platform", value: "pharmavision.world" }
            ]
        },
        modules: [
            "AI Landscape in Pharma",
            "Machine Learning for Drug Repurposing",
            "AI in Clinical Trial Optimization",
            "Natural Language Processing (NLP) in PV",
            "Real World Evidence (RWE) Analytics",
            "Digital Therapeutics & Wearables"
        ],
        career: {
            roles: ["Pharma AI Consultant", "Bioinformatics Analyst", "Innovation Lead"],
            growth: "Emerging field with massive potential for tech-savvy pharma professionals."
        },
        companies: generateCompanies("tech"),
        reviews: generateReviews("tech"),
        faqs: generateFAQs("tech"),
        pricingFeatures: [
            "Access to AI/ML Tools & Libraries",
            "Case Studies from Top Pharma Giants",
            "Networking with Tech-Pharma Innovators",
            "Certificate of Specialization"
        ],
        emi: "₹3,000/month"
    },
    {
        id: "medical-writing-certification",
        title: "MEDICAL WRITING CERTIFICATION",
        headline: "WRITE WITH CLARITY, PRECISION, AND SCIENTIFIC IMPACT",
        heroImage: "landing/c7.png",
        description: "Create clear regulatory documents, clinical study reports, and publication-ready content. Build skills for careers in scientific communication and regulatory writing.",
        price: "₹14,000",
        overview: {
            about: "Develop the capability to communicate complex scientific information clearly. Covers Regulatory Writing (CSRs, Protocols) and Medico-Marketing Writing.",
            details: [
                { label: "Level", value: "Beginner" },
                { label: "Duration", value: "3 Months" },
                { label: "Study Mode", value: "Online" },
                { label: "Students Enrolled", value: "4,500+" },
                { label: "Instructor", value: "Senior Medical Writer" },
                { label: "Platform", value: "pharmavision.world" }
            ]
        },
        modules: [
            "Types of Medical Writing",
            "Literature Search & Referencing",
            "Clinical Study Reports (CSR - ICH E3)",
            "Protocol Writing & Amendments",
            "Publication Planning & Manuscripts",
            "Patient Education Materials"
        ],
        career: {
            roles: ["Medical Writer", "Scientific Communications Specialist", "Regulatory Writer"],
            growth: "Flexible work options, including freelancing."
        },
        companies: generateCompanies("clinical"),
        reviews: generateReviews("clinical"),
        faqs: generateFAQs("clinical"),
        pricingFeatures: [
            "Portfolio Creation (3 Writing Samples)",
            "Grammar & Style Guidelines (AMA Style)",
            "Feedback from Editors",
            "Job Leads"
        ],
        emi: "₹1,200/month"
    },
    {
        id: "quality-assurance",
        title: "QUALITY ASSURANCE",
        headline: "ENSURE EXCELLENCE ACROSS EVERY PHARMA PROCESS",
        heroImage: "landing/c8.png",
        description: "Learn GxP standards, audits, CAPA, and key documentation practices in pharma quality systems. Build the skills needed for QA roles focused on compliance and inspection readiness.",
        price: "₹16,500",
        overview: {
            about: "The backbone of the pharma induustry. Learn Quality Assurance (QA) principles, electronic Quality Management Systems (eQMS), and how to handle audits.",
            details: [
                { label: "Level", value: "Intermediate" },
                { label: "Duration", value: "4 Months" },
                { label: "Study Mode", value: "Online" },
                { label: "Students Enrolled", value: "6,000+" },
                { label: "Instructor", value: "QA Manager" },
                { label: "Platform", value: "pharmavision.world" }
            ]
        },
        modules: [
            "Concept of Quality (QA vs QC)",
            "GMP / GLP / GCP Overview",
            "Documentation Practices (GDP)",
            "Change Control & Deviations",
            "CAPA (Corrective & Preventive Action)",
            "Audits & Inspections (FDA/EU)",
            "Risk Management (ICH Q9)"
        ],
        career: {
            roles: ["QA Executive", "Compliance Officer", "Audit Coordinator"],
            growth: "Stable career with path to Quality Head/Director."
        },
        companies: generateCompanies("regulatory"),
        reviews: generateReviews("regulatory"),
        faqs: generateFAQs("regulatory"),
        pricingFeatures: [
            "Mock Audit Sessions",
            "SOP Writing Workshop",
            "QMS Software Overview",
            "Certification"
        ],
        emi: "₹1,400/month"
    },
    {
        id: "regulatory-affairs",
        title: "REGULATORY AFFAIRS",
        headline: "NAVIGATE GLOBAL DRUG APPROVAL WITH CONFIDENCE",
        heroImage: "landing/c9.png",
        description: "Learn the essentials of dossiers, submissions, labeling, and global regulatory standards. Prepare for roles in regulatory strategy, compliance, and product lifecycle management.",
        price: "₹19,000",
        overview: {
            about: "Bridging the gap between science and law. Learn how to get drugs approved in different markets (US, EU, ROW) and maintain their licenses.",
            details: [
                { label: "Level", value: "Advanced" },
                { label: "Duration", value: "5 Months" },
                { label: "Study Mode", value: "Online" },
                { label: "Students Enrolled", value: "5,100+" },
                { label: "Instructor", value: "RA Manager US/EU Markets" },
                { label: "Platform", value: "pharmavision.world" }
            ]
        },
        modules: [
            "Regulatory Agencies (FDA, EMA, CDSCO)",
            "Drug Development Lifecycle",
            "CTD / eCTD Structure (M1-M5)",
            "IND / NDA / ANDA Submissions",
            "CMC (Chemistry, Manufacturing & Controls)",
            "Labeling & Ad-Promo Regulations",
            "Post-Marketing Changes (Variations)"
        ],
        career: {
            roles: ["Regulatory Affairs Executive", "RA Associate", "Submission Specialist"],
            growth: "High strategic importance. Senior roles are highly paid consultants."
        },
        companies: generateCompanies("regulatory"),
        reviews: generateReviews("regulatory"),
        faqs: generateFAQs("regulatory"),
        pricingFeatures: [
            "eCTD Submission Democracy",
            "Dossier Compilation Project",
            "Case Studies on Regulatory Failures",
            "Placement Assistance"
        ],
        emi: "₹1,600/month"
    }
];
