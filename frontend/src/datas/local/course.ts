import aet from "../../image/course/aet.png";
import cet from "../../image/course/cet.jpg";
import det from "../../image/course/det.jpg";
import qtls from "../../image/course/qtls.jpg";

export type TCourse = {
  course: string;
  article: { title: string; content: string; image: any; alt: string };
  details: {
    description: {
      title: string;
      img: any;
      alt: string;
      generalThems: { question: string; answer: string[]; list?: string[] }[];
    };
    curriculum: {
      section: string;
      detail: { title: string; content: string }[];
    };
    faq: { question: string; answer: string }[];
    announcement: {
      mainTitle: string;
      details: { title: string; announcement: string }[];
    };
  };
}[];

const courses: TCourse = [
  {
    course: "AET",
    article: {
      title: "Award Education and training (Level 3)",
      content:
        "This course is suitable for anyone who is thinking to start a career in teaching. You do not need to be teaching or have any experience in teaching to undertake this qualification. ",
      image: aet,
      alt: "Award education and training",
    },
    details: {
      description: {
        title: "AET Education and training (Level 3)",
        img: aet,
        alt: "education and training",
        generalThems: [
          {
            question: "Where will this course lead?",
            answer: [
              "This course is for pre-service or in-service teachers who are new to teaching and training or those wishing to teach or train. It is designed as a qualification which will equip a wide range of teachers and facilitators with a threshold license to teach.",
              "The course suits those who work, or want to work, as teachers in the post 14 Sector; technicians and support staff in further and adult education; and training personnel in commerce, industry and the public sector. We strongly advice learners who have no experience in teaching to undertake this course first to ensure the basic knowledge is understood and mastered.",
            ],
          },
          {
            question: "What will I study?",
            answer: [
              "The course introduces you to the key principles of delivering learning, including:",
            ],
            list: [
              "Roles and responsibilities of the teacher",
              "Planning and preparing sessions",
              "Delivering learning activities",
              "Assessment of learning",
            ],
          },
          {
            question: "How will this course be delivered?",
            answer: [
              "The course is very active and participative, with opportunities for micro teaching with your peers (short teaching sessions) built into the programme.",
              "Note: due to the current situation, the college will assess, considering learners preferences, if the course should be delivered face to face or online.",
            ],
          },
          {
            question: "How the qualification is assessed ?",
            answer: [
              "The Level 3 Award in Education and Training is a competence-based qualification which is internally assessed through a portfolio of evidence, which is externally quality assured. ",
            ],
          },
          {
            question: "What qualifications will I get?",
            answer: ["Award in Education and Training Level 3 (NCfE)"],
          },
          {
            question: "Benefits and progression opportunities",
            answer: [
              "The objectives of this qualification are to prepare learners for employment and upport learners to progress to a teaching role within the workplace.",
              "Learners who achieve this qualification could progress to NCFE Level 4 Certificate in Education and Training and NCFE Level 5 Diploma in Education and Training",
            ],
          },
          {
            question: "What are the entry requirements?",
            answer: [
              "There is no formal entry requirement for the course and you do not have to be teaching or training already to join the course. However, teachers in the Lifelong learning sector are expected to have a Level 3 qualification in their own teaching subject and Level 2 Literacy and Numeracy.",
            ],
          },
          {
            question: "What else do I need to know?",
            answer: [
              "If you have a Learning Difficulty or Disability please let us know when you apply. You will be offered support in your interview. If you need help completing your application we can help with this too.",
            ],
          },
        ],
      },
      curriculum: {
        section: "Eduction And Training level 3",
        detail: [
          {
            title:
              "Understanding roles, responsibilities and relationships in education and training ",
            content: "NO CONTENT",
          },
          {
            title: "Optional units",
            content:
              "Optional units available for this qualification cover areas such as understanding and using inclusive teaching and learning approaches and assessment in education and training as well as facilitate learning and development for individuals or in groups (please refer to the Qualification Specification for more information.",
          },
        ],
      },
      faq: [
        {
          question: "How do I register my interest for this course?",
          answer:
            "My name is NabilThe easiest and fastest way to show your interest for this course is to fill in the form on the website and submit it. The admin team will get back to you within 72 hours. If you have an enquiry about the course please contact the admin on:admin@thenorthwestcollege.co.uk.",
        },
        {
          question: "Is the AET course funded?",
          answer:
            "If by funded you mean government funds then no the AET is not government funded. However if you are already in a placement or working within a school we can contact your school and discuss with your employer to see if they can help you with the cost.",
        },
        {
          question: "How much does the AET cost?",
          answer:
            "The AET costs 350£. Instalments are available, please contact the admin for more information on the instalment procedure. ",
        },
      ],
      announcement: {
        mainTitle: "Eduction And Training level 3",
        details: [
          {
            title: "The official next dates for the AET",
            announcement:
              "The: 2nd of November 2020, 4th of January 2021, 8th of March 2021, 10th of May 2021 ",
          },
        ],
      },
    },
  },
  {
    course: "CET",
    article: {
      title: "Certificate Education and training (Level 4)",
      content:
        "If you have experience in teaching or are in a teaching position but have no qualifications the certificate in education and training is the starting point of your career.",
      image: cet,
      alt: "Certificate Education and training (Level 4)",
    },
    details: {
      description: {
        title: "CET Education and training (Level 4)",
        img: cet,
        alt: "education and training",
        generalThems: [
          {
            question: "Where will this course lead?",
            answer: ["The CET Award is comprised of 5 mandatory units:"],
            list: [
              "Understanding roles, responsibilities and relationships in education and training",
              "Planning to Meet the Needs of Learners in Education and Training",
              "Delivering Education and Training",
              "Using Resources for Education and Training",
              "Assessing Learners in Education and Training",
            ],
          },
          {
            question: "How will this course be delivered?",
            answer: [
              "The course consists of classroom-based learning, tutorial support and observation of your teaching practice.",
              "You will have the opportunity to explore key educational theories and to link these to your own practice. Your tutor will give you individual support with your assignments and will give you detailed written feedback on your observed teaching sessions.",
              "(3 tutor observations lasting for approximately an hour are required)",
            ],
          },
          {
            question: "How will I be assessed?",
            answer: [
              "Assessment will be by assignments and observation of teaching performance.",
              "You will need to complete a Teaching Practice File, 6 written assignments, some of them may be carried out through seminar presentations.",
              "If you have done previous courses or qualifications which could be accredited (eg/ PTLLS/ AET), you have an Accreditation of Prior Learning interview with your tutor to identify what evidence can be carried forward.",
            ],
          },
          {
            question: "What are the entry requirements?",
            answer: [
              "You will need to have completed the Award in Education and Training, PTLLS, or an equivalent qualification. Learners who are already in a teaching position may be given a place into this course.",
              "You will need to have 30 hours of teaching practice whilst on the course, working with groups or in a one to one context in the post-16 sector.",
              "Teachers are expected to have at least a Level 3 qualification in their subject teaching area and you will need to show evidence of this or have appropriate experience and be working towards a Level 3 qualification.",
              "You should also have English and Maths qualifications at Level 2 or be willing to work towards these qualifications. You are required to have at least a level 2 functional skills English qualification to access the programme.",
            ],
          },
          {
            question: "What else do I need to know?",
            answer: [
              "You will need to have a subject specialist mentor in the workplace who can observe your teaching. Two mentor observations lasting for approximately an hour are required.",
              "If you have Learning Difficulty or Disability please let us know when you apply. You will be offered support in your interview. If you need help completing your application we can help with this too.",
              "Please note that when you enrol you are accepting that the course content and module descriptions are accurate at the time of publishing and that the course content as described is based on what is possible to deliver under the government advice and social distancing rules at that particular time. In the event of changes made to those rules, by national or local government, the College may need to make further alterations to the published course content. By enrolling with the College, you will be confirming that you are content to proceed with the course as detailed at that time and on the basis that the programme may be subject to reasonable change.",
              "(Course duration – 4 to 6 months)",
            ],
          },
          {
            question: "What can I do after this course?",
            answer: [
              "The objective of this qualification is to confirm occupational competence in a teaching role within the workplace.",
              "You can progress onto Diploma in Education and Training (DET), Level 5, or a University Certification in Education.",
              "Completion of the course enables you to meet the minimum requirement for those employed as a teacher or trainer in Further Education colleges, Adult Education centres or Work-Based learning.",
              "It will also enable you to apply for the DET (Diploma in Education and Training), providing you have relevant subject qualifications and teaching hours (see DET information page relating to entry requirements).",
              "To obtain QTLS and become fully qualified as a teacher, you need to provide evidence that teaching is your main employment activity and that you teach a range of classes and levels.",
            ],
          },
        ],
      },
      curriculum: {
        section: "Eduction And Training level 4",
        detail: [
          {
            title:
              "Understanding roles, responsibilities and relationships in education and training ",
            content: "",
          },
          {
            title: "Delivering education and training",
            content: "",
          },
          {
            title: "Using resources for education and training",
            content: "",
          },
          {
            title: "Optional units ",
            content:
              "Optional units available for this qualification are chosen by the centre prior to the course and will be released on the first day of this course.",
          },
        ],
      },
      faq: [
        {
          question: "How do I register my interest for this course?",
          answer:
            "The easiest and fastest way to show your interest for this course is to fill in the form on the website and submit it. The admin team will get back to you within 72 hours. If you have an enquiry about the course please contact the admin on: admin@thenorthwestcollege.co.uk",
        },
        {
          question: "Is the CET course funded?",
          answer:
            "If by funded you mean government funds then no the AET is not government funded. However if you are already in a placement or working within a school we can contact your school and discuss with your employer to see if they can help you with the cost. ",
        },
        {
          question: "How much does the CET cost?",
          answer:
            "The CET costs 700£. Instalments are available, please contact the admin for more information on the instalment procedure.",
        },
      ],
      announcement: {
        mainTitle: "Eduction And Training level 5",
        details: [
          {
            title: "The official next dates for the CET ",
            announcement: "The: 2nd of November 2020 and 8th of March 2021",
          },
        ],
      },
    },
  },
  {
    course: "DET",
    article: {
      title: "Diploma Education and training (Level 5)",
      content:
        "After completing the CET or equivalent teaching qualification, you can progress onto the DET course which will be you final year which will conduct you to the QTLS.",
      image: det,
      alt: "Diploma Education and training (Level 5)",
    },
    details: {
      description: {
        title: "DET Education and training (Level 5)",
        img: det,
        alt: "education and training",
        generalThems: [
          {
            question: "Where will this course lead?",
            answer: [
              "This course is aimed at those who are employed in a full teaching role in the post-14 sector and leads to full qualification at Level 5.",
              "The course provides progression from the Certificate to Teach in the Lifelong Learning Sector (CTLLS Level 4) and Certificate in Education and Training (CET Level 4). The programme is for candidates who are in a full teaching role with responsibility for initial assessment, design and delivery of courses, assessment of learning, programme evaluation and curriculum development.",
              "For entry in to DET you will need to have completed AET/PTLLS and CTLLS/CET or have equivalent qualifications.",
            ],
          },
          {
            question: "What will I study?",
            answer: ["The course consists of the following:"],
            list: [
              "Planning, delivering and evaluating teaching and learning developing the skills to assess learning in education and training",
              "Developing knowledge around theories, principles and models in education and training.",
              "Understanding professionalism and the influence of professional values in education and training.",
              "Developing Teaching, Learning and Assessment.",
              "Theories, Principles and Models in Education and Training.",
              "Action Research.",
              "Wider Professional Practice and Development in Education and Training.",
              "Developing, using and Organising Resources in a Specialist Area.",
            ],
          },
          {
            question: "What qualifications will I get?",
            answer: ["Diploma in Education and Training (DET) Level 5 NCFE."],
          },
          {
            question: "How will I be assessed?",
            answer: [
              "Assessment will be by assignments, a portfolio of teaching evidence, seminars and presentations, a research assignment, and observations of teaching performance carried out by your course tutor and mentor.",
            ],
          },
          {
            question: "How do I get a place on the course?",
            answer: [
              "After completing the online form, you will need to have an interview before joining the course.",
            ],
          },
          {
            question: "What are the entry requirements?",
            answer: [
              "You will need to have 100 hours of teaching practice working with groups throughout the duration of the course. Teachers are expected to have at least a Level 3 Qualification in their subject teaching area and you will need to show evidence of this or have appropriate experience and be working towards a Level 3 Qualification.",
              "You should also have English and Maths qualifications at Level 2 or be willing to work towards these qualifications. You are required to have at least a level 2 functional skills English qualification to access the programme. You will require a named mentor to support you whilst on programme. They will observe your teaching, mentor and support you in your development.",
              "The college may be able to help you to get a placement in a school or college, contact us for further information.",
            ],
          },
          {
            question: "What else do I need to know?",
            answer: [
              "If you have a learning difficulty or disability please let us know when you apply. Options for personalised support can be discussed at interview. If you need help completing your application we can help with this too.",
              "Please note that when you enrol you are accepting that the course content and module descriptions are accurate at the time of publishing and that the course content as described is based on what is possible to deliver under the government advice and social distancing rules at that particular time. In the event of changes made to those rules, by national or local government, the College may need to make further alterations to the published course content. By enrolling with the College, you will be confirming that you are content to proceed with the course as detailed at that time and on the basis that the programme may be subject to reasonable change.",
              "Course duration 10 months (academic year).",
            ],
          },
          {
            question: "What can I do after this course?",
            answer: [
              "This is a full qualification for teaching in the Lifelong Learning Sector. On successful completion applicants can consider applying for QTLS.",
            ],
          },
        ],
      },
      curriculum: {
        section: "Eduction And Training level 5",
        detail: [
          {
            title:
              "Teaching, learning and assessment in education and training.",
            content: "",
          },
          {
            title:
              "Developing teaching, learning and assessment in education and training.",
            content: "",
          },
          {
            title: "Theories, principles and models in education and training.",
            content: "",
          },
          {
            title: "Optional units",
            content:
              "Optional units available for this qualification are chosen by the centre prior to the course and will be released on the first day of this course.",
          },
        ],
      },
      faq: [
        {
          question: "How do I register my interest for this course?",
          answer:
            "The easiest and fastest way to show your interest for this course is to fill in the form on the website and submit it. The admin team will get back to you within 72 hours. If you have an enquiry about the course please contact the admin on: admin@thenorthwestcollege.co.uk",
        },
        {
          question: "Is the DET course funded?",
          answer:
            "If by funded you mean government funds then no the AET is not government funded. However if you are already in a placement or working within a school we can contact your school and discuss with your employer to see if they can help you with the cost. ",
        },
        {
          question: "How much does the DET cost?",
          answer:
            "The DET costs 1500£. Instalments are available, please contact the admin for more information on the instalment procedure.",
        },
      ],
      announcement: {
        mainTitle: "Eduction And Training level 5",
        details: [
          {
            title: "The official next dates for the DET ",
            announcement: "The: 2nd of November 2020 ",
          },
        ],
      },
    },
  },
  {
    course: "QTLS",
    article: {
      title: "Qualified teacher learning and skills",
      content:
        "The QTLS status is the achievement of your teaching pathway. After completing this formation you will be considered as a fully qualified teacher.",
      image: qtls,
      alt: "Qualified teacher learning and skills",
    },
    details: {
      description: {
        title: "Qualified teacher learning and skills.",
        img: qtls,
        alt: "eQualified teacher learning and skills.",
        generalThems: [
          {
            question: "About QTLS",
            answer: [
              "QTLS (Qualified Teacher Learning and Skills) status is the badge of professionalism for post-14 education and training, helping practitioners advance in their careers and demonstrate their expertise and experience to colleagues, employers and learners. SET members can gain QTLS status by successfully completing professional formation.",
              "Since April 2012, teachers and trainers holding QTLS status who are also members of SET have been recognised in legislation as equivalent in status to teachers with QTS in schools. Holders of QTLS are able to teach across all subjects and all ages on equal pay and conditions, opening up career development and wider employment opportunities.",
            ],
          },
          {
            question: "How does it work?",
            answer: [
              "The QTLS programme is an online portfolio which must be evidenced from your current teaching position. Mostly, you will be writing about yourself; your experience, your teaching practice, your goals and aspirations. You must have a mentor supporting you throughout the programme.",
              "The programme lasts six months. If your portfolio is not successful at the first submission, two choices will be considered:",
            ],
            list: [
              "SET asks you to amend different points and give you a deadline where they will be reviewing your portfolio again.",
              "You were not awarded or you have not submitted your portfolio by the deadline: SET will extend the deadline automatically to the next cohort. ",
              "Under special circumstances, your portfolio’s deadline can be extended if you experienced issues to complete it for the submission deadline.",
            ],
          },
          {
            question: "What are the entry requirements?",
            answer: [
              "You need a recognised Level 5 initial teacher training equivalent to the Diploma in Teaching in the Lifelong Learning Sector (DTLLS) or Diploma in Education and Training (DET), for example: PGCE, Certificate in Education, Certificate in FE Teaching Stages 1-3.",
              "You also need evidence of a Level 2 qualification in maths and English.",
              "If you teach maths or English (numeracy, literacy, ESOL, GCSE or Functional Skills) in either the FE and skills sector or in schools, you will also need to hold maths and/or English qualifications at a minimum of Level 3, such as A Level Maths or English or Level 3 Award in Mathematics for Numeracy teaching or Level 3 Award in English for Literacy and Language teaching. ",
            ],
          },
          {
            question: "What are the dates for the QTLS registrations?",
            answer: [
              "You can express your interest in undertaking professional formation at any time.",
              "There are two cohorts a year: one commencing early October and one in early January. Those who have expressed an interest in undertaking QTLS will be invited to register and make payment one month before the start date. All workbooks will be issued on the cohort start date.",
              "The North West College next dates for the QTLS support and mentoring applications are: 1st August- 6th October 2020 and 15th November- 16th January 2021. ",
            ],
          },
          {
            question: "How much does it cost?",
            answer: [
              "The QTLS itself costs 485£.",
              "There are two options for making the payment:",
            ],
            list: [
              "Pay £485 in full by credit/debit card or by one direct debit payment",
              "Pay £110 as a deposit by credit/debit card and arrange for three further monthly payments of £125 to be made by direct debit.",
            ],
          },
          {
            question: "What can you expect after the QTLS?",
            answer: [
              "Your employability will be boosted and employers will look at your profile with more interest. You will be recognised as a fully qualified teacher and your pay will be considered from the teaching pay",
            ],
          },
        ],
      },
      curriculum: {
        section: "Qualified teacher learning and skills.",
        detail: [
          {
            title: "About You",
            content: "",
          },
          {
            title: "Role and Responsibilities",
            content: "",
          },
          {
            title: "Self-Assessment",
            content: "",
          },
          {
            title: "Professional Development Plan CPD Record",
            content: "",
          },
          {
            title: "Critical Reflection",
            content: "",
          },
          {
            title: "Final Action Plan",
            content: "",
          },
        ],
      },
      faq: [
        {
          question: "How do I register my interest for this course?",
          answer:
            "The easiest and fastest way to show your interest for this course is to fill in the form on the website and submit it. The admin team will get back to you within 72 hours. If you have an enquiry about the course please contact the admin on: admin@thenorthwestcollege.co.uk",
        },
        {
          question: "Is the QTLS mentoring programme funded?",
          answer:
            "If by funded you mean government funds then no the QTLS is not government funded. The SET foundation does not have a bursary scheme in place either. However, if you are already in a placement or working within a school we can contact your school and discuss with your employer to see if they can help you with the cost. ",
        },
        {
          question: "How much does the QTLS cost?",
          answer:
            "The QTLS costs 350£. Instalments are available, please contact the admin for more information on the instalment procedure.",
        },
      ],
      announcement: {
        mainTitle: "Eduction And Training level 5",
        details: [
          {
            title: "The official last dates for the QTLS:",
            announcement: "The: 6th October 2020 and- 16th January 2021. ",
          },
        ],
      },
    },
  },
];

export { courses };
