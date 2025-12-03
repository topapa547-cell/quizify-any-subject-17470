import { KeyPoint } from './index';

// Phase 2 - 30 Additional Key Points for Class 10 IT
export const class10ITKeyPointsExpanded: KeyPoint[] = [
  // Advanced Excel Functions
  {
    id: "it10-exp-1",
    subject: "it_ites",
    class_level: 10,
    chapter: "एमएस एक्सेल एडवांस्ड",
    chapter_number: 4,
    point_hindi: "=IF(condition, true_value, false_value) | शर्त के आधार पर result",
    point_english: "=IF(condition, true_value, false_value) | Result based on condition",
    importance: "high",
    category: "formula"
  },
  {
    id: "it10-exp-2",
    subject: "it_ites",
    class_level: 10,
    chapter: "एमएस एक्सेल एडवांस्ड",
    chapter_number: 4,
    point_hindi: "=COUNTIF(range, criteria) | Specific criteria match करने वाली cells count करता है",
    point_english: "=COUNTIF(range, criteria) | Counts cells matching specific criteria",
    importance: "high",
    category: "formula"
  },
  {
    id: "it10-exp-3",
    subject: "it_ites",
    class_level: 10,
    chapter: "एमएस एक्सेल एडवांस्ड",
    chapter_number: 4,
    point_hindi: "=SUMIF(range, criteria, sum_range) | Condition match होने पर sum करता है",
    point_english: "=SUMIF(range, criteria, sum_range) | Sums values when condition matches",
    importance: "high",
    category: "formula"
  },
  {
    id: "it10-exp-4",
    subject: "it_ites",
    class_level: 10,
    chapter: "एमएस एक्सेल एडवांस्ड",
    chapter_number: 4,
    point_hindi: "=VLOOKUP(value, table, col_index, FALSE) | Table में value search करता है",
    point_english: "=VLOOKUP(value, table, col_index, FALSE) | Searches value in table",
    importance: "high",
    category: "formula"
  },
  {
    id: "it10-exp-5",
    subject: "it_ites",
    class_level: 10,
    chapter: "एमएस एक्सेल एडवांस्ड",
    chapter_number: 4,
    point_hindi: "=CONCATENATE(A1,B1) या =A1&B1 | Text को जोड़ता है",
    point_english: "=CONCATENATE(A1,B1) or =A1&B1 | Joins text together",
    importance: "medium",
    category: "formula"
  },
  {
    id: "it10-exp-6",
    subject: "it_ites",
    class_level: 10,
    chapter: "एमएस एक्सेल एडवांस्ड",
    chapter_number: 4,
    point_hindi: "=LEN(text) = Characters count | =LEFT(text,n) = Left से n characters | =RIGHT(text,n)",
    point_english: "=LEN(text) = Character count | =LEFT(text,n) = n characters from left | =RIGHT(text,n)",
    importance: "medium",
    category: "formula"
  },
  {
    id: "it10-exp-7",
    subject: "it_ites",
    class_level: 10,
    chapter: "एमएस एक्सेल एडवांस्ड",
    chapter_number: 4,
    point_hindi: "Pivot Table = Data summarize करने का powerful tool | Insert → PivotTable",
    point_english: "Pivot Table = Powerful tool to summarize data | Insert → PivotTable",
    importance: "high",
    category: "fact"
  },
  {
    id: "it10-exp-8",
    subject: "it_ites",
    class_level: 10,
    chapter: "एमएस एक्सेल एडवांस्ड",
    chapter_number: 4,
    point_hindi: "Data Validation = Cell में specific type का data ही allow करना | Data → Data Validation",
    point_english: "Data Validation = Allow only specific type of data in cell | Data → Data Validation",
    importance: "medium",
    category: "definition"
  },

  // Database Concepts
  {
    id: "it10-exp-9",
    subject: "it_ites",
    class_level: 10,
    chapter: "डेटाबेस कॉन्सेप्ट्स",
    chapter_number: 9,
    point_hindi: "Database = Organized collection of data | DBMS = Database Management System",
    point_english: "Database = Organized collection of data | DBMS = Database Management System",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-10",
    subject: "it_ites",
    class_level: 10,
    chapter: "डेटाबेस कॉन्सेप्ट्स",
    chapter_number: 9,
    point_hindi: "Table = Rows (Records) + Columns (Fields) | Primary Key = Unique identifier",
    point_english: "Table = Rows (Records) + Columns (Fields) | Primary Key = Unique identifier",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-11",
    subject: "it_ites",
    class_level: 10,
    chapter: "डेटाबेस कॉन्सेप्ट्स",
    chapter_number: 9,
    point_hindi: "RDBMS = Relational DBMS | Examples: MySQL, Oracle, SQL Server, PostgreSQL",
    point_english: "RDBMS = Relational DBMS | Examples: MySQL, Oracle, SQL Server, PostgreSQL",
    importance: "high",
    category: "fact"
  },
  {
    id: "it10-exp-12",
    subject: "it_ites",
    class_level: 10,
    chapter: "डेटाबेस कॉन्सेप्ट्स",
    chapter_number: 9,
    point_hindi: "SQL = Structured Query Language | Database से communicate करने की language",
    point_english: "SQL = Structured Query Language | Language to communicate with database",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-13",
    subject: "it_ites",
    class_level: 10,
    chapter: "डेटाबेस कॉन्सेप्ट्स",
    chapter_number: 9,
    point_hindi: "Query = Database से data retrieve करने का request | SELECT * FROM table_name",
    point_english: "Query = Request to retrieve data from database | SELECT * FROM table_name",
    importance: "medium",
    category: "definition"
  },

  // Web Applications
  {
    id: "it10-exp-14",
    subject: "it_ites",
    class_level: 10,
    chapter: "वेब एप्लीकेशन",
    chapter_number: 10,
    point_hindi: "HTML = HyperText Markup Language | Web pages की structure बनाता है",
    point_english: "HTML = HyperText Markup Language | Creates structure of web pages",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-15",
    subject: "it_ites",
    class_level: 10,
    chapter: "वेब एप्लीकेशन",
    chapter_number: 10,
    point_hindi: "CSS = Cascading Style Sheets | Web pages को design और style करता है",
    point_english: "CSS = Cascading Style Sheets | Designs and styles web pages",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-16",
    subject: "it_ites",
    class_level: 10,
    chapter: "वेब एप्लीकेशन",
    chapter_number: 10,
    point_hindi: "JavaScript = Web pages को interactive बनाता है | Client-side scripting",
    point_english: "JavaScript = Makes web pages interactive | Client-side scripting",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-17",
    subject: "it_ites",
    class_level: 10,
    chapter: "वेब एप्लीकेशन",
    chapter_number: 10,
    point_hindi: "Web Page vs Website: Page = Single document | Website = Pages का collection",
    point_english: "Web Page vs Website: Page = Single document | Website = Collection of pages",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-18",
    subject: "it_ites",
    class_level: 10,
    chapter: "वेब एप्लीकेशन",
    chapter_number: 10,
    point_hindi: "Static Website = Fixed content | Dynamic Website = Content changes (User-specific)",
    point_english: "Static Website = Fixed content | Dynamic Website = Content changes (User-specific)",
    importance: "medium",
    category: "definition"
  },
  {
    id: "it10-exp-19",
    subject: "it_ites",
    class_level: 10,
    chapter: "वेब एप्लीकेशन",
    chapter_number: 10,
    point_hindi: "Domain Name = Website का address (example.com) | Hosting = Website को store करने की service",
    point_english: "Domain Name = Website address (example.com) | Hosting = Service to store website",
    importance: "high",
    category: "definition"
  },

  // Cyber Security Extended
  {
    id: "it10-exp-20",
    subject: "it_ites",
    class_level: 10,
    chapter: "साइबर सुरक्षा",
    chapter_number: 11,
    point_hindi: "Ransomware = Files encrypt करके पैसे मांगता है | Example: WannaCry attack 2017",
    point_english: "Ransomware = Encrypts files and demands money | Example: WannaCry attack 2017",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-21",
    subject: "it_ites",
    class_level: 10,
    chapter: "साइबर सुरक्षा",
    chapter_number: 11,
    point_hindi: "DDoS Attack = Distributed Denial of Service | Website को overwhelm करके crash करना",
    point_english: "DDoS Attack = Distributed Denial of Service | Overwhelm and crash website",
    importance: "medium",
    category: "definition"
  },
  {
    id: "it10-exp-22",
    subject: "it_ites",
    class_level: 10,
    chapter: "साइबर सुरक्षा",
    chapter_number: 11,
    point_hindi: "VPN = Virtual Private Network | Secure और encrypted connection | IP address hide करता है",
    point_english: "VPN = Virtual Private Network | Secure encrypted connection | Hides IP address",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-23",
    subject: "it_ites",
    class_level: 10,
    chapter: "साइबर सुरक्षा",
    chapter_number: 11,
    point_hindi: "Encryption = Data को code में convert करना | Only authorized person read कर सकता है",
    point_english: "Encryption = Converting data to code | Only authorized person can read",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-24",
    subject: "it_ites",
    class_level: 10,
    chapter: "साइबर सुरक्षा",
    chapter_number: 11,
    point_hindi: "Cyber Crime: Hacking, Identity theft, Phishing, Cyberbullying, Online fraud",
    point_english: "Cyber Crime: Hacking, Identity theft, Phishing, Cyberbullying, Online fraud",
    importance: "high",
    category: "fact"
  },
  {
    id: "it10-exp-25",
    subject: "it_ites",
    class_level: 10,
    chapter: "साइबर सुरक्षा",
    chapter_number: 11,
    point_hindi: "IT Act 2000 (India) = Cyber crimes के खिलाफ कानून | Section 66 - Hacking punishment",
    point_english: "IT Act 2000 (India) = Law against cyber crimes | Section 66 - Hacking punishment",
    importance: "medium",
    category: "fact"
  },

  // Cloud & Emerging Tech
  {
    id: "it10-exp-26",
    subject: "it_ites",
    class_level: 10,
    chapter: "क्लाउड कंप्यूटिंग",
    chapter_number: 12,
    point_hindi: "IaaS = Infrastructure as a Service | AWS EC2, Azure VMs | Virtual machines provide करता है",
    point_english: "IaaS = Infrastructure as a Service | AWS EC2, Azure VMs | Provides virtual machines",
    importance: "medium",
    category: "definition"
  },
  {
    id: "it10-exp-27",
    subject: "it_ites",
    class_level: 10,
    chapter: "क्लाउड कंप्यूटिंग",
    chapter_number: 12,
    point_hindi: "PaaS = Platform as a Service | Google App Engine, Heroku | Development platform देता है",
    point_english: "PaaS = Platform as a Service | Google App Engine, Heroku | Provides development platform",
    importance: "medium",
    category: "definition"
  },
  {
    id: "it10-exp-28",
    subject: "it_ites",
    class_level: 10,
    chapter: "क्लाउड कंप्यूटिंग",
    chapter_number: 12,
    point_hindi: "SaaS = Software as a Service | Gmail, Office 365, Dropbox | Ready software browser पर",
    point_english: "SaaS = Software as a Service | Gmail, Office 365, Dropbox | Ready software on browser",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-29",
    subject: "it_ites",
    class_level: 10,
    chapter: "उभरती तकनीक",
    chapter_number: 13,
    point_hindi: "AI = Artificial Intelligence | Machines को intelligent बनाना | Example: Siri, Alexa, ChatGPT",
    point_english: "AI = Artificial Intelligence | Making machines intelligent | Example: Siri, Alexa, ChatGPT",
    importance: "high",
    category: "definition"
  },
  {
    id: "it10-exp-30",
    subject: "it_ites",
    class_level: 10,
    chapter: "उभरती तकनीक",
    chapter_number: 13,
    point_hindi: "IoT = Internet of Things | Devices का internet से connected होना | Smart home, Wearables",
    point_english: "IoT = Internet of Things | Devices connected to internet | Smart home, Wearables",
    importance: "high",
    category: "definition"
  },
];
