/**
 * Last Doctor - Verified Specialists Directory Data
 * Curated directory of top-tier medical specialists across Kerala.
 */

const DOCTORS_DATA = [
  {
    category: "Gastroenterology",
    slug: "gastroenterology",
    icon: "fa-stethoscope",
    description: "Stomach, digestive health, liver & endoscopy specialists",
    doctors: [
      {
        name: "Dr. Mohammed K",
        qualifications: "MBBS, MD, DM Gastroenterology",
        designation: "Senior Consultant Gastroenterologist",
        experience: "Senior Consultant with extensive clinical experience",
        location: "Calicut (Kozhikode)",
        district: "Kozhikode",
        hospital: "Private Practice / Senior Consultant",
        phones: ["8089736690", "8089484843"],
        verified: true,
        notes: "Highly recommended for chronic gastrointestinal & endoscopic care."
      },
      {
        name: "Dr. Varghese Thomas",
        qualifications: "MD, DM Gastroenterology",
        designation: "Former Professor & HOD",
        experience: "Former Head of Gastroenterology, Calicut Medical College",
        location: "Calicut (Kozhikode)",
        district: "Kozhikode",
        hospital: "Calicut Medical College (Retd) / Consultant",
        phones: ["9447378877", "04952377877"],
        verified: true,
        notes: "Veteran academician and leading stomach specialist in Malabar."
      }
    ]
  },
  {
    category: "Psychology",
    slug: "psychology",
    icon: "fa-brain",
    description: "Counselling psychology, CBT therapy & mental wellness",
    whatsappChannel: "https://whatsapp.com/channel/0029Vb7B0eDL2ATyKEjfJA0A",
    doctors: [
      {
        name: "T. P. Jawad",
        qualifications: "M.Sc Counselling Psychology",
        designation: "Counselling Psychologist & CBT Expert",
        experience: "Specialist in Cognitive Behavioral Therapy & Adult Counselling",
        location: "Calicut (Kozhikode)",
        district: "Kozhikode",
        hospital: "Private Practice Clinic",
        phones: ["9037984556"],
        verified: true,
        notes: "Expert in stress management, anxiety counselling, and CBT."
      },
      {
        name: "Dr. Thalhath P",
        qualifications: "PhD / Consultant Psychologist",
        designation: "Counselling Psychologist & CBT Expert",
        experience: "Specialized in behavioral therapy & adolescent counseling",
        location: "Kalamassery, Ernakulam",
        district: "Ernakulam",
        hospital: "Kalamassery Practice",
        phones: [],
        verified: true,
        notes: "Contact via local clinic or community inquiries."
      }
    ]
  },
  {
    category: "Psychiatry",
    slug: "psychiatry",
    icon: "fa-head-side-virus",
    description: "Clinical psychiatry, anxiety, depression & neurodevelopmental care",
    whatsappChannel: "https://whatsapp.com/channel/0029Vb7B0eDL2ATyKEjfJA0A",
    doctors: [
      {
        name: "Dr. Arun Gopalakrishnan",
        qualifications: "MBBS, MD Psychiatry",
        designation: "Consultant Psychiatrist",
        experience: "Specialist in Mood Disorders, Depression & Anxiety Management",
        location: "Calicut (Kozhikode)",
        district: "Kozhikode",
        hospital: "Calicut Psychiatry Services",
        phones: ["7907755471"],
        verified: true,
        notes: "Evidence-based clinical approach for mood, panic, and stress disorders."
      }
    ]
  },
  {
    category: "ENT (Ear, Nose & Throat)",
    slug: "ent",
    icon: "fa-ear-listen",
    description: "Otolaryngology, sinus, allergy & head-neck surgeries",
    doctors: [
      {
        name: "Dr. Subair V. C.",
        qualifications: "MBBS, MS ENT",
        designation: "Senior ENT Specialist & Surgeon",
        experience: "Comprehensive ENT, sinus, and hearing evaluation",
        location: "Kondotty, Malappuram",
        district: "Malappuram",
        hospital: "Kondotty ENT Care",
        phones: ["9633898994"],
        verified: true,
        notes: "Top-rated practitioner for micro-ear and endoscopic sinus procedures."
      }
    ]
  },
  {
    category: "Dermatology (Skin & Hair)",
    slug: "dermatology",
    icon: "fa-hand-sparkles",
    description: "Clinical dermatology, venereology, trichology & allergy treatment",
    doctors: [
      {
        name: "Dr. K. Muhammed",
        qualifications: "MBBS, DVD, DNB, MNAMS, FIMSA, FRCP, FAAD",
        designation: "Senior Consultant Dermatologist",
        experience: "Former Professor & HOD of Dermatology & Venereology, Govt. Medical College Kozhikode",
        location: "Calicut (Kozhikode)",
        district: "Kozhikode",
        hospital: "Govt. Medical College Kozhikode (Former HOD)",
        phones: ["9746836683"],
        verified: true,
        notes: "Renowned pioneer in clinical dermatology across South India."
      },
      {
        name: "Dr. Pavithran K",
        qualifications: "MBBS, DVD, DNB, MNAMS, FIMSA, FRCP, FAAD",
        designation: "Consultant Dermatologist",
        experience: "Distinguished clinical practitioner with international fellowships",
        location: "Calicut (Kozhikode)",
        district: "Kozhikode",
        hospital: "Calicut Skin Clinic",
        phones: [],
        verified: true,
        notes: "Consultation schedule available via hospital desk."
      },
      {
        name: "Dr. Vinod",
        qualifications: "MBBS, DVD, DNB, MNAMS, FIMSA, FRCP, FAAD",
        designation: "Consultant Dermatologist",
        experience: "Specialist in chronic skin disorders & cosmetology",
        location: "Muvattupuzha, Ernakulam",
        district: "Ernakulam",
        hospital: "Muvattupuzha Specialty Practice",
        phones: [],
        verified: true,
        notes: "Top recommendation for Muvattupuzha and central Kerala patients."
      }
    ]
  },
  {
    category: "Pediatrics (Child Healthcare)",
    slug: "pediatrics",
    icon: "fa-baby",
    description: "Newborn care, growth monitoring & childhood medical conditions",
    doctors: [
      {
        name: "Dr. Manoj Kollara",
        qualifications: "MBBS, MD Pediatrics",
        designation: "Senior Consultant Pediatrician",
        experience: "Decades of trusted pediatric diagnostic expertise",
        location: "Kerala",
        district: "Kerala",
        hospital: "Child Healthcare Practice",
        phones: [],
        verified: true,
        notes: "Known for gentle handling and thorough patient evaluations."
      },
      {
        name: "Dr. Dharmaraj",
        qualifications: "MBBS, MD Pediatrics",
        designation: "Consultant Pediatrician",
        experience: "Child care specialist with emergency pediatric background",
        location: "Neyyattinkara, Thiruvananthapuram",
        district: "Thiruvananthapuram",
        hospital: "Neyyattinkara Hospital Care",
        phones: [],
        verified: true,
        notes: "Prominent choice for parents in South Kerala."
      }
    ]
  },
  {
    category: "Orthopedic Surgery",
    slug: "orthopedics",
    icon: "fa-bone",
    description: "Bone & joint health, trauma, spine & arthroscopic surgeries",
    doctors: [
      {
        name: "Dr. Pradosh",
        qualifications: "MBBS, MS / MD Orthopedics",
        designation: "Consultant Orthopedic Surgeon",
        experience: "Joint reconstruction, sports injury & fracture management",
        location: "Kerala",
        district: "Kerala",
        hospital: "Specialty Orthopedic Center",
        phones: [],
        verified: true,
        notes: "Specializes in joint care, knee treatments, and conservative recovery."
      }
    ]
  },
  {
    category: "Neurology (Brain & Spine)",
    slug: "neurology",
    icon: "fa-brain",
    description: "Stroke, epilepsy, migraine, neuropathy & nerve disorders",
    doctors: [
      {
        name: "Dr. Sreeram Prasad",
        qualifications: "MBBS, MD, DM Neurology",
        designation: "Senior Consultant Neurologist",
        experience: "Expertise in complex nerve disorders, stroke rehabilitation & EEG",
        location: "Pullepady, Kochi, Ernakulam",
        district: "Ernakulam",
        hospital: "Pullepady Specialty Clinic / Ernakulam",
        phones: ["9447449790"],
        verified: true,
        notes: "Highly regarded for diagnostic precision in neurological conditions."
      },
      {
        name: "Dr. Jebin John Jacob",
        qualifications: "MBBS, MD, DM Neurology",
        designation: "Consultant Neurologist",
        experience: "Neurological care specialist and clinical clinician",
        location: "Kottayam",
        district: "Kottayam",
        hospital: "Kottayam Medical Center",
        phones: [],
        verified: true,
        notes: "Trusted neurologist for patients across Kottayam & Central Travancore."
      }
    ]
  },
  {
    category: "Gynecology & Women's Health",
    slug: "gynecology",
    icon: "fa-venus",
    description: "Obstetrics, high-risk pregnancy, hormonal health & laparoscopic care",
    doctors: [
      {
        name: "Dr. Sreelatha Warrier",
        qualifications: "MBBS, MD / DGO Obstetrics & Gynecology",
        designation: "Senior Consultant Gynecologist",
        experience: "Expert in maternal care, laparoscopic surgeries & women's wellness",
        location: "Aluva, Ernakulam",
        district: "Ernakulam",
        hospital: "Aluva Hospital Center",
        phones: ["7947120713"],
        verified: true,
        notes: "Compassionate specialist known for personalized care."
      }
    ]
  },
  {
    category: "Hepatology (Liver & Transplant)",
    slug: "hepatology",
    icon: "fa-heart-pulse",
    description: "Liver cirrhosis, viral hepatitis, fatty liver & transplant evaluations",
    doctors: [
      {
        name: "Dr. Cyriac Abby Philips (TheLiverDoc)",
        qualifications: "MBBS, MD, DM Hepatology",
        designation: "Senior Consultant & Head of Hepatology",
        experience: "Clinician-Scientist at The Liver Institute, Rajagiri Hospital",
        location: "Edathala, near Aluva, Ernakulam",
        district: "Ernakulam",
        hospital: "Rajagiri Hospital, Aluva",
        phones: [],
        verified: true,
        notes: "Internationally recognized evidence-based hepatologist and liver disease researcher."
      },
      {
        name: "Dr. Sudheendran",
        qualifications: "MBBS, MS, FRCS, M.Ch",
        designation: "Professor & Chief of Gastrointestinal & Liver Surgery",
        experience: "Director of Solid Organ Transplantation, Amrita Hospital",
        location: "Kochi, Ernakulam",
        district: "Ernakulam",
        hospital: "Amrita Institute of Medical Sciences (AIMS), Kochi",
        phones: [],
        verified: true,
        notes: "Pioneering liver transplant surgeon with thousands of complex procedures."
      },
      {
        name: "Dr. Ismail",
        qualifications: "MBBS, MD, DM Gastroenterology / Hepatology",
        designation: "Senior Consultant Hepatologist",
        experience: "Liver disease and therapeutic endoscopy specialist",
        location: "Cheranallur, Kochi, Ernakulam",
        district: "Ernakulam",
        hospital: "Aster Medcity, Kochi",
        phones: [],
        verified: true,
        notes: "Comprehensive liver ICU care and advanced liver interventions."
      },
      {
        name: "Dr. Abhishek",
        qualifications: "MBBS, MS, M.Ch Liver Surgery",
        designation: "Consultant Liver & Pancreatic Surgeon",
        experience: "Hepato-Pancreato-Biliary (HPB) and liver surgical specialist",
        location: "Nettoor, Maradu, Kochi, Ernakulam",
        district: "Ernakulam",
        hospital: "VPS Lakeshore Hospital, Kochi",
        phones: [],
        verified: true,
        notes: "Excellence in HPB surgery, oncologic liver resections, and transplant."
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = DOCTORS_DATA;
}
