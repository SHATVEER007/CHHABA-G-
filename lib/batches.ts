export interface Batch {
  id: string
  name: string
  price: number
  originalPrice?: number
  category: string
  isLifetime: boolean
  isFree: boolean
  isPremium: boolean
}

export const categories = [
  { id: "all", name: "All Batches", icon: "🎯" },
  { id: "ssc", name: "SSC", icon: "📚" },
  { id: "defence", name: "Defence", icon: "🎖️" },
  { id: "railway", name: "Railway", icon: "🚃" },
  { id: "banking", name: "Banking", icon: "🏦" },
  { id: "state", name: "State Exams", icon: "🏛️" },
  { id: "teaching", name: "Teaching", icon: "👨‍🏫" },
  { id: "ugc", name: "UGC NET", icon: "🎓" },
  { id: "board", name: "Board Exams", icon: "📖" },
  { id: "police", name: "Police", icon: "👮" },
  { id: "other", name: "Other", icon: "📋" },
]

export const batches: Batch[] = [
  // SSC Batches
  { id: "1", name: "SSC Foundation Batch 2026 (संकल्प बैच)", price: 999, category: "ssc", isLifetime: true, isFree: false, isPremium: true },
  { id: "2", name: "SSC Foundation Batch 2026 (लक्ष्य बैच)", price: 499, category: "ssc", isLifetime: true, isFree: false, isPremium: false },
  { id: "3", name: "SSC CGL 2025 (Mains Batch)", price: 0, category: "ssc", isLifetime: true, isFree: true, isPremium: false },
  { id: "4", name: "SSC Mains CGL, CHSL, CPO 2025 (English Special Batch)", price: 399, category: "ssc", isLifetime: true, isFree: false, isPremium: false },
  { id: "5", name: "SSC GD 2026 (कर्मा 2.O बैच)", price: 0, category: "ssc", isLifetime: true, isFree: true, isPremium: false },
  { id: "6", name: "SSC CGL, CPO, CHSL 2025 (Target Batch)", price: 0, category: "ssc", isLifetime: true, isFree: true, isPremium: false },
  { id: "7", name: "SSC MTS 2025 (Target Batch)", price: 0, category: "ssc", isLifetime: true, isFree: true, isPremium: false },
  { id: "8", name: "SSC Stenographer 2026 CBT+Shorthand (HINDI & ENGLISH) (साधना बैच)", price: 999, category: "ssc", isLifetime: true, isFree: false, isPremium: true },
  { id: "9", name: "English Steno Shorthand Batch 2026", price: 799, category: "ssc", isLifetime: true, isFree: false, isPremium: false },
  { id: "10", name: "हिंदी Steno Shorthand Batch 2026", price: 799, category: "ssc", isLifetime: true, isFree: false, isPremium: false },
  
  // Defence Batches
  { id: "11", name: "NDA 1/2026 (शौर्य बैच 2.O)", price: 1199, category: "defence", isLifetime: true, isFree: false, isPremium: true },
  { id: "12", name: "NDA 1/2026 (शौर्य बैच)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "13", name: "CAPF BSF (HCM & ASI) 2026 – अग्नि 2.0 बैच", price: 699, category: "defence", isLifetime: true, isFree: false, isPremium: false },
  { id: "14", name: "ARMY भर्ती 2026 (योद्धा बैच) (Army Technical Batch)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "15", name: "ARMY भर्ती 2026 (योद्धा बैच) (Army Clerk Batch)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "16", name: "ARMY भर्ती 2026 (योद्धा बैच) (Nursing Assistant Batch)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "17", name: "ARMY भर्ती 2026 (योद्धा बैच) (GD, TDN, WMP Batch)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "18", name: "Indian Navy SSR Vacancy 2026 (विक्रांत बैच)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "19", name: "Indian Navy MR Vacancy 2026 (विक्रांत बैच)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "20", name: "Indian Navy Medical Assistant Vacancy 2026 (विक्रांत बैच)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "21", name: "AIRFORCE 01/2027 X-GROUP (वायु बैच) 2.0", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "22", name: "AIRFORCE 01/2027 Y-GROUP & MEDICAL ASSISTANT (वायु बैच) 2.0", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "23", name: "Indian Coast Guard 2026 (रक्षक बैच)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "24", name: "Airforce Phase-2 2/2026 Astra बैच (2)", price: 0, category: "defence", isLifetime: true, isFree: true, isPremium: false },
  { id: "25", name: "BSF RO RM Vacancy 2025 (संचार बैच)", price: 999, category: "defence", isLifetime: true, isFree: false, isPremium: true },
  { id: "26", name: "BSF Tradesman Vacancy 2025 (Border Batch)", price: 799, category: "defence", isLifetime: true, isFree: false, isPremium: false },
  { id: "27", name: "CISF TRADESMAN 2025 (वीर बैच)", price: 499, category: "defence", isLifetime: true, isFree: false, isPremium: false },
  
  // Railway Batches
  { id: "28", name: "RRB Group D 2026 (विजय रथ बैच)", price: 799, category: "railway", isLifetime: true, isFree: false, isPremium: true },
  { id: "29", name: "Rail Foundation Batch 2025-26", price: 0, category: "railway", isLifetime: true, isFree: true, isPremium: false },
  { id: "30", name: "RRB TECHNICIAN 2025 (इंजीनियर बैच)", price: 799, category: "railway", isLifetime: true, isFree: false, isPremium: false },
  { id: "31", name: "Railway ALP 2025 (तेजस बैच)", price: 0, category: "railway", isLifetime: true, isFree: true, isPremium: false },
  
  // Banking Batches
  { id: "32", name: "RBI Assistant 2026 (विजय बैच)", price: 499, category: "banking", isLifetime: true, isFree: false, isPremium: false },
  { id: "33", name: "RBI Office Attendant 2026 (सेवक बैच)", price: 799, category: "banking", isLifetime: true, isFree: false, isPremium: false },
  { id: "34", name: "BANKING FOUNDATION 2026 (आधार बैच)", price: 1499, category: "banking", isLifetime: true, isFree: false, isPremium: true },
  { id: "35", name: "ग्रामीण बैंक RRB भर्ती 2025 (IBPS RRB PO/CLERK) चौपाल 2.O बैच", price: 0, category: "banking", isLifetime: true, isFree: true, isPremium: false },
  { id: "36", name: "SBI 2024-2025 (FOUNDATION BATCH)", price: 0, category: "banking", isLifetime: true, isFree: true, isPremium: false },
  
  // State Exam Batches
  { id: "37", name: "UPPCS 2026-27 (प्रतिज्ञा बैच 2.0)", price: 0, category: "state", isLifetime: true, isFree: true, isPremium: false },
  { id: "38", name: "UPSSSC लेखपाल 2025 (पंचायत बैच)", price: 799, category: "state", isLifetime: true, isFree: false, isPremium: true },
  { id: "39", name: "UP POLICE कंप्यूटर ऑपरेटर SI & ASI 2025 (ऑपरेटर बैच)", price: 999, category: "state", isLifetime: true, isFree: false, isPremium: true },
  { id: "40", name: "UP POLICE CONSTABLE 2025 (दीवान जी बैच 2.O)", price: 0, category: "state", isLifetime: true, isFree: true, isPremium: false },
  { id: "41", name: "UPSI 2025 (प्रज्ञान बैच)", price: 0, category: "state", isLifetime: true, isFree: true, isPremium: false },
  { id: "42", name: "UP Home Guard Bharti 2025 रक्षक बैच", price: 499, category: "state", isLifetime: true, isFree: false, isPremium: false },
  { id: "43", name: "ALLAHABAD HIGH COURT (RO/ARO 2026) अपील बैच", price: 999, category: "state", isLifetime: true, isFree: false, isPremium: true },
  { id: "44", name: "Haryana CET Group-D 2026 – रोज़गार बैच 2.0", price: 749, category: "state", isLifetime: true, isFree: false, isPremium: false },
  { id: "45", name: "Haryana Police Vacancy 2026 (खाकी वर्दी बैच)", price: 0, category: "state", isLifetime: true, isFree: true, isPremium: false },
  { id: "46", name: "RAJASTHAN LDC 2026 (वीर धरा बैच)", price: 799, category: "state", isLifetime: true, isFree: false, isPremium: false },
  { id: "47", name: "मध्य प्रदेश (MP Foundation Batch 2026)", price: 799, category: "state", isLifetime: true, isFree: false, isPremium: false },
  { id: "48", name: "MP POLICE CONSTABLE 2026 (आजाद बैच)", price: 499, category: "state", isLifetime: true, isFree: false, isPremium: false },
  { id: "49", name: "Bihar Foundation बैच 2025-26", price: 699, category: "state", isLifetime: true, isFree: false, isPremium: false },
  { id: "50", name: "Bihar Police Driver Vacancy 2025 (चालक बैच)", price: 799, category: "state", isLifetime: true, isFree: false, isPremium: false },
  { id: "51", name: "Jharkhand कक्षपाल सुरक्षा बैच 2026", price: 499, category: "state", isLifetime: true, isFree: false, isPremium: false },
  { id: "52", name: "Jharkhand उत्पाद सिपाही भर्ती (जोहार बैच)", price: 499, category: "state", isLifetime: true, isFree: false, isPremium: false },
  { id: "53", name: "कनिष्ठ सहायक (सहयोग बैच) 2025", price: 599, category: "state", isLifetime: true, isFree: false, isPremium: false },
  
  // Police Batches
  { id: "54", name: "DELHI POLICE 2025 - CONSTABLE (यकीन 2.O बैच)", price: 0, category: "police", isLifetime: true, isFree: true, isPremium: false },
  { id: "55", name: "DELHI POLICE 2025 - HCM (यकीन 2.O बैच)", price: 0, category: "police", isLifetime: true, isFree: true, isPremium: false },
  { id: "56", name: "DELHI POLICE 2025 - AWO/TPO (यकीन 2.O बैच)", price: 0, category: "police", isLifetime: true, isFree: true, isPremium: false },
  { id: "57", name: "DELHI POLICE 2025 - DRIVER (यकीन 2.O बैच)", price: 0, category: "police", isLifetime: true, isFree: true, isPremium: false },
  { id: "58", name: "राजस्थान पुलिस भर्ती 2025 (एकलव्य बैच)", price: 749, category: "police", isLifetime: true, isFree: false, isPremium: false },
  { id: "59", name: "Rajasthan Police Sub Inspector Vacancy 2025 (थानेदार बैच)", price: 999, category: "police", isLifetime: true, isFree: false, isPremium: true },
  { id: "60", name: "राजस्थान जेल प्रहरी एवं चतुर्थ श्रेणी भर्ती 2025 (वीर भूमि बैच)", price: 499, category: "police", isLifetime: true, isFree: false, isPremium: false },
  { id: "61", name: "DSSSB Jail Warder Recruitment 2025 (जेलर बैच)", price: 799, category: "police", isLifetime: true, isFree: false, isPremium: false },
  { id: "62", name: "बिहार पुलिस भर्ती 2025 (नालंदा बैच)", price: 0, category: "police", isLifetime: true, isFree: true, isPremium: false },
  { id: "63", name: "छत्तीसगढ़ पुलिस 2024 (युग बैच)", price: 499, category: "police", isLifetime: true, isFree: false, isPremium: false },
  { id: "64", name: "झारखण्ड पुलिस 2024 (सेवक बैच)", price: 499, category: "police", isLifetime: true, isFree: false, isPremium: false },
  
  // Teaching Batches
  { id: "65", name: "UPTET 2026 – कुशलता बैच Upper Primary Level (6-8)", price: 499, category: "teaching", isLifetime: true, isFree: false, isPremium: false },
  { id: "66", name: "UPTET 2026 – कुशलता बैच (Primary Level 1-5)", price: 499, category: "teaching", isLifetime: true, isFree: false, isPremium: false },
  { id: "67", name: "UP CNET 2026 – मदर टेरेसा बैच", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "68", name: "UP SUPERTET 2023-24 (गुरु जी बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "69", name: "CTET Feb. Paper 2 बुनियाद बैच 2026", price: 699, category: "teaching", isLifetime: true, isFree: false, isPremium: false },
  { id: "70", name: "CTET Feb. Paper 1 बुनियाद बैच 2026", price: 699, category: "teaching", isLifetime: true, isFree: false, isPremium: false },
  { id: "71", name: "KVS & NVS Tier 1 PRT, TGT & PGT वरदान बैच 2025", price: 799, category: "teaching", isLifetime: true, isFree: false, isPremium: false },
  { id: "72", name: "KVS & NVS Tier 1 & 2 TGT Science वरदान बैच 2025", price: 0, category: "teaching", isLifetime: true, isFree: true, isPremium: false },
  { id: "73", name: "KVS & NVS Tier 1 & 2 TGT SST वरदान बैच 2025", price: 0, category: "teaching", isLifetime: true, isFree: true, isPremium: false },
  { id: "74", name: "KVS & NVS Tier 1 & 2 TGT Sanskrit वरदान बैच 2025", price: 0, category: "teaching", isLifetime: true, isFree: true, isPremium: false },
  { id: "75", name: "DSSSB TGT संस्कृत (SCHOLAR BATCH)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "76", name: "DSSSB TGT हिंदी (SCHOLAR BATCH)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "77", name: "DSSSB TGT SST (SCHOLAR BATCH)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "78", name: "DSSSB TGT ENGLISH (SCHOLAR BATCH)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "79", name: "DSSSB TGT MATHS (SCHOLAR BATCH)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "80", name: "DSSSB PRT: TGT & PGT PART-A ONLY (SCHOLAR BATCH)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "81", name: "DSSSB PRT COMPLETE PART (A+B)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  
  // LT Grade Batches
  { id: "82", name: "Commerce LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "83", name: "Computer LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "84", name: "Biology LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "85", name: "Physical Education LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "86", name: "English LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "87", name: "Maths LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "88", name: "Science LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "89", name: "Home Science LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "90", name: "SST LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "91", name: "कृषि LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "92", name: "Hindi LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "93", name: "Sanskrit LT Grade Teacher Vacancy 2025 (शिक्षक बैच)", price: 999, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  
  // GIC Lecturer Batches
  { id: "94", name: "GIC Biology Lecturer Vacancy 2025 (प्रवक्ता बैच)", price: 1500, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "95", name: "GIC Geography Lecturer Vacancy 2025 (प्रवक्ता बैच)", price: 1500, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "96", name: "GIC Chemistry Lecturer Vacancy 2025 (प्रवक्ता बैच)", price: 1500, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "97", name: "GIC Polity Lecturer Vacancy 2025 (प्रवक्ता बैच)", price: 1500, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "98", name: "GIC History Lecturer Vacancy 2025 (प्रवक्ता बैच)", price: 1500, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  { id: "99", name: "GIC Economics Lecturer Vacancy 2025 (प्रवक्ता बैच)", price: 1500, category: "teaching", isLifetime: true, isFree: false, isPremium: true },
  
  // UGC NET Batches
  { id: "100", name: "UGC NET JUNE 2026: Paper 1st (आचार्य बैच)", price: 999, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "101", name: "Education UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "102", name: "Physical Education UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "103", name: "History UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "104", name: "Hindi UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "105", name: "Sanskrit UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "106", name: "Sociology UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "107", name: "Political Science UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "108", name: "LAW UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "109", name: "Home Science UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "110", name: "Geography UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "111", name: "English UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "112", name: "Economics UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "113", name: "Computer Science UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  { id: "114", name: "Commerce UGC NET JUNE 2026: Paper 2nd (आचार्य बैच)", price: 2499, category: "ugc", isLifetime: true, isFree: false, isPremium: true },
  
  // Board Exam Batches
  { id: "115", name: "Class 12th यूपी बोर्ड PCB (ज्ञानी बैच)", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "116", name: "Class 12th यूपी बोर्ड PCM (ज्ञानी बैच)", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "117", name: "Class 12th यूपी बोर्ड PCM English Medium (ज्ञानी बैच)", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "118", name: "Class 12th यूपी बोर्ड PCB English Medium (ज्ञानी बैच)", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "119", name: "UP Board 10th Class CAPSULE CRASH COURSE 2026", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "120", name: "UP Board English Medium 12th Class (PCM) CAPSULE CRASH COURSE 2026", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "121", name: "UP Board 12th Class (PCB) CAPSULE CRASH COURSE 2026", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "122", name: "UP Board English Medium 12th Class (PCB) CAPSULE CRASH COURSE 2026", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "123", name: "UP Board 12th Class (PCM) CAPSULE CRASH COURSE 2026", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "124", name: "Bihar Board 12th Class Crash Course (विजय बैच)", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "125", name: "बिहार बोर्ड 11th Toppers 2026 बैच", price: 799, category: "board", isLifetime: true, isFree: false, isPremium: false },
  { id: "126", name: "बिहार बोर्ड 12th Toppers 2026 बैच", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "127", name: "बिहार बोर्ड 10th Toppers 2026 बैच", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "128", name: "UP, MP, राजस्थान 10th Toppers 2026 (2.0 बैच)", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "129", name: "UP, MP, राजस्थान 12th PCM Toppers 2026 (2.0 बैच)", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "130", name: "UP, MP, राजस्थान 12th PCB Toppers 2026 (2.0 बैच)", price: 0, category: "board", isLifetime: true, isFree: true, isPremium: false },
  { id: "131", name: "UP, MP, राजस्थान 11th (PCB) Toppers 2026 बैच", price: 799, category: "board", isLifetime: true, isFree: false, isPremium: false },
  { id: "132", name: "UP, MP, राजस्थान 11th (PCM) Toppers 2026 बैच", price: 799, category: "board", isLifetime: true, isFree: false, isPremium: false },
  { id: "133", name: "UP, MP, राजस्थान 9th Toppers 2026 बैच", price: 799, category: "board", isLifetime: true, isFree: false, isPremium: false },
  { id: "134", name: "TOPPERS 2026 BATCH Class - 11th (PCM) (UP BOARD ENGLISH MEDIUM)", price: 799, category: "board", isLifetime: true, isFree: false, isPremium: false },
  { id: "135", name: "TOPPERS 2026 BATCH Class - 11th (PCB) (UP BOARD ENGLISH MEDIUM)", price: 799, category: "board", isLifetime: true, isFree: false, isPremium: false },
  
  // Other Batches
  { id: "136", name: "UP B.Ed Entrance Exam 2026 (ENTRY BATCH V.O.D)", price: 399, category: "other", isLifetime: true, isFree: false, isPremium: false },
  { id: "137", name: "Mission CUET 2026 – English Medium", price: 1199, category: "other", isLifetime: true, isFree: false, isPremium: true },
  { id: "138", name: "CUET UG 2026 – प्रवेश 3.0 बैच", price: 1199, category: "other", isLifetime: true, isFree: false, isPremium: true },
  { id: "139", name: "प्रतिज्ञा Mentorship Program 2025", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "140", name: "Science Special Foundation Batch 2025", price: 299, category: "other", isLifetime: true, isFree: false, isPremium: false },
  { id: "141", name: "प्रारम्भ 2.O NEET हिंदी 2026", price: 1199, category: "other", isLifetime: true, isFree: false, isPremium: true },
  { id: "142", name: "RWA Tech. Civil Engineering Foundation Batch 2025-26", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "143", name: "RWA Tech. Mechanical Engineering Foundation Batch 2025-26", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "144", name: "RWA Tech. Electrical Engineering Foundation Batch 2025-26", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "145", name: "RWA Electronics & Communication Engineering Foundation Batch 2025-26", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "146", name: "DSSSB+SSC MTS (दफ्तरी बैच)", price: 799, category: "other", isLifetime: true, isFree: false, isPremium: false },
  { id: "147", name: "UP PCS 2025-26 (NCERT सार बैच)", price: 999, category: "other", isLifetime: true, isFree: false, isPremium: true },
  { id: "148", name: "Foundation Batch MATHS", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "149", name: "Foundation Batch REASONING", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "150", name: "Math's Special by Ankit Bhati Sir", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "151", name: "Reasoning Special By Ankit Bhati Sir", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "152", name: "Science Special by Bhawna Maam & B.K Pathak Sir", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "153", name: "Hindi Special By Ankit Bhati Sir", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
  { id: "154", name: "Polity + मूलविधि Special by S.L Sir & Naveen Sir", price: 0, category: "other", isLifetime: true, isFree: true, isPremium: false },
]

export function getBatchesByCategory(categoryId: string): Batch[] {
  if (categoryId === "all") return batches
  return batches.filter((batch) => batch.category === categoryId)
}

export function getFreeBatches(): Batch[] {
  return batches.filter((batch) => batch.isFree)
}

export function getPremiumBatches(): Batch[] {
  return batches.filter((batch) => batch.isPremium)
}

export function searchBatches(query: string): Batch[] {
  const searchTerm = query.toLowerCase()
  return batches.filter((batch) => 
    batch.name.toLowerCase().includes(searchTerm)
  )
}
