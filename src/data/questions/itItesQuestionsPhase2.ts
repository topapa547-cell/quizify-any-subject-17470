import { QuizQuestion } from '../quizData';

// Phase 2 - 100 Additional IT/ITes MCQs
export const itItesQuestionsPhase2: QuizQuestion[] = [
  // Class 9 - Memory & Storage (15)
  {
    question_id: 6001,
    text: "RAM का full form क्या है?",
    options: [
      { option_id: 60101, option_text: "Random Access Memory" },
      { option_id: 60102, option_text: "Read Access Memory" },
      { option_id: 60103, option_text: "Run Access Memory" },
      { option_id: 60104, option_text: "Real Access Memory" }
    ],
    correct_option_id: 60101,
    class_level: 9,
    difficulty: "easy",
    explanation: "RAM = Random Access Memory, यह primary memory है जो temporary data store करती है।"
  },
  {
    question_id: 6002,
    text: "कौन सी memory volatile है?",
    options: [
      { option_id: 60201, option_text: "RAM" },
      { option_id: 60202, option_text: "ROM" },
      { option_id: 60203, option_text: "Hard Disk" },
      { option_id: 60204, option_text: "SSD" }
    ],
    correct_option_id: 60201,
    class_level: 9,
    difficulty: "easy",
    explanation: "RAM volatile memory है - power off होने पर इसका data खो जाता है।"
  },
  {
    question_id: 6003,
    text: "1 GB में कितने MB होते हैं?",
    options: [
      { option_id: 60301, option_text: "1024 MB" },
      { option_id: 60302, option_text: "1000 MB" },
      { option_id: 60303, option_text: "512 MB" },
      { option_id: 60304, option_text: "2048 MB" }
    ],
    correct_option_id: 60301,
    class_level: 9,
    difficulty: "easy",
    explanation: "1 GB = 1024 MB (binary system में)।"
  },
  {
    question_id: 6004,
    text: "Cache Memory का उपयोग किसलिए होता है?",
    options: [
      { option_id: 60401, option_text: "CPU और RAM के बीच speed बढ़ाने के लिए" },
      { option_id: 60402, option_text: "Data permanently store करने के लिए" },
      { option_id: 60403, option_text: "Files backup करने के लिए" },
      { option_id: 60404, option_text: "Internet से data download करने के लिए" }
    ],
    correct_option_id: 60401,
    class_level: 9,
    difficulty: "medium",
    explanation: "Cache Memory CPU और RAM के बीच frequently used data store करती है ताकि processing fast हो।"
  },
  {
    question_id: 6005,
    text: "ROM का क्या अर्थ है?",
    options: [
      { option_id: 60501, option_text: "Read Only Memory" },
      { option_id: 60502, option_text: "Random Only Memory" },
      { option_id: 60503, option_text: "Run Only Memory" },
      { option_id: 60504, option_text: "Real Only Memory" }
    ],
    correct_option_id: 60501,
    class_level: 9,
    difficulty: "easy",
    explanation: "ROM = Read Only Memory, इसमें data केवल पढ़ा जा सकता है, write नहीं।"
  },
  {
    question_id: 6006,
    text: "SSD का full form क्या है?",
    options: [
      { option_id: 60601, option_text: "Solid State Drive" },
      { option_id: 60602, option_text: "Super Speed Drive" },
      { option_id: 60603, option_text: "System Storage Device" },
      { option_id: 60604, option_text: "Secure Storage Drive" }
    ],
    correct_option_id: 60601,
    class_level: 9,
    difficulty: "easy",
    explanation: "SSD = Solid State Drive, यह HDD से faster storage device है।"
  },
  {
    question_id: 6007,
    text: "कौन सी secondary storage device है?",
    options: [
      { option_id: 60701, option_text: "Hard Disk" },
      { option_id: 60702, option_text: "RAM" },
      { option_id: 60703, option_text: "Cache" },
      { option_id: 60704, option_text: "Register" }
    ],
    correct_option_id: 60701,
    class_level: 9,
    difficulty: "easy",
    explanation: "Hard Disk secondary storage है जो data permanently store करती है।"
  },
  {
    question_id: 6008,
    text: "DDR4 क्या है?",
    options: [
      { option_id: 60801, option_text: "RAM का एक प्रकार" },
      { option_id: 60802, option_text: "Hard disk का प्रकार" },
      { option_id: 60803, option_text: "Processor का नाम" },
      { option_id: 60804, option_text: "Graphics card" }
    ],
    correct_option_id: 60801,
    class_level: 9,
    difficulty: "medium",
    explanation: "DDR4 = Double Data Rate 4, यह modern computers में use होने वाली RAM है।"
  },
  {
    question_id: 6009,
    text: "1 Byte में कितने Bits होते हैं?",
    options: [
      { option_id: 60901, option_text: "8 Bits" },
      { option_id: 60902, option_text: "4 Bits" },
      { option_id: 60903, option_text: "16 Bits" },
      { option_id: 60904, option_text: "2 Bits" }
    ],
    correct_option_id: 60901,
    class_level: 9,
    difficulty: "easy",
    explanation: "1 Byte = 8 Bits, यह data measurement की basic unit है।"
  },
  {
    question_id: 6010,
    text: "BIOS किस memory में store होता है?",
    options: [
      { option_id: 61001, option_text: "ROM" },
      { option_id: 61002, option_text: "RAM" },
      { option_id: 61003, option_text: "Hard Disk" },
      { option_id: 61004, option_text: "Cache" }
    ],
    correct_option_id: 61001,
    class_level: 9,
    difficulty: "medium",
    explanation: "BIOS (Basic Input/Output System) ROM में store होता है जो computer boot करने में help करता है।"
  },

  // Class 9 - Computer Security (15)
  {
    question_id: 6011,
    text: "Computer Virus क्या है?",
    options: [
      { option_id: 61101, option_text: "Malicious program जो खुद को replicate करता है" },
      { option_id: 61102, option_text: "Hardware की problem" },
      { option_id: 61103, option_text: "Internet connection" },
      { option_id: 61104, option_text: "Operating system" }
    ],
    correct_option_id: 61101,
    class_level: 9,
    difficulty: "easy",
    explanation: "Virus एक malicious program है जो खुद को replicate करके system को damage करता है।"
  },
  {
    question_id: 6012,
    text: "Antivirus का क्या काम है?",
    options: [
      { option_id: 61201, option_text: "Virus detect और remove करना" },
      { option_id: 61202, option_text: "Internet speed बढ़ाना" },
      { option_id: 61203, option_text: "Files backup करना" },
      { option_id: 61204, option_text: "Computer को restart करना" }
    ],
    correct_option_id: 61201,
    class_level: 9,
    difficulty: "easy",
    explanation: "Antivirus software computer में viruses को detect और remove करता है।"
  },
  {
    question_id: 6013,
    text: "Firewall किससे protect करता है?",
    options: [
      { option_id: 61301, option_text: "Unauthorized network access से" },
      { option_id: 61302, option_text: "Electricity से" },
      { option_id: 61303, option_text: "Heat से" },
      { option_id: 61304, option_text: "Water से" }
    ],
    correct_option_id: 61301,
    class_level: 9,
    difficulty: "medium",
    explanation: "Firewall network traffic को monitor करके unauthorized access से protect करता है।"
  },
  {
    question_id: 6014,
    text: "Strong password में क्या होना चाहिए?",
    options: [
      { option_id: 61401, option_text: "Letters, numbers और special characters" },
      { option_id: 61402, option_text: "केवल अपना नाम" },
      { option_id: 61403, option_text: "केवल numbers" },
      { option_id: 61404, option_text: "123456" }
    ],
    correct_option_id: 61401,
    class_level: 9,
    difficulty: "easy",
    explanation: "Strong password में uppercase, lowercase letters, numbers और special characters होने चाहिए।"
  },
  {
    question_id: 6015,
    text: "Malware का full form क्या है?",
    options: [
      { option_id: 61501, option_text: "Malicious Software" },
      { option_id: 61502, option_text: "Mail Software" },
      { option_id: 61503, option_text: "Main Software" },
      { option_id: 61504, option_text: "Male Software" }
    ],
    correct_option_id: 61501,
    class_level: 9,
    difficulty: "easy",
    explanation: "Malware = Malicious Software, यह harmful programs का collective name है।"
  },
  {
    question_id: 6016,
    text: "Trojan Horse क्या है?",
    options: [
      { option_id: 61601, option_text: "Malware जो useful program जैसा दिखता है" },
      { option_id: 61602, option_text: "एक game" },
      { option_id: 61603, option_text: "एक browser" },
      { option_id: 61604, option_text: "एक search engine" }
    ],
    correct_option_id: 61601,
    class_level: 9,
    difficulty: "medium",
    explanation: "Trojan Horse एक malware है जो legitimate software जैसा दिखता है लेकिन harmful होता है।"
  },
  {
    question_id: 6017,
    text: "Worm और Virus में क्या अंतर है?",
    options: [
      { option_id: 61701, option_text: "Worm खुद network पर फैलता है, Virus को host file चाहिए" },
      { option_id: 61702, option_text: "कोई अंतर नहीं" },
      { option_id: 61703, option_text: "Worm safe है, Virus harmful" },
      { option_id: 61704, option_text: "Virus network पर फैलता है" }
    ],
    correct_option_id: 61701,
    class_level: 9,
    difficulty: "hard",
    explanation: "Worm independently network पर spread होता है, जबकि Virus को host file की जरूरत होती है।"
  },
  {
    question_id: 6018,
    text: "Spam क्या है?",
    options: [
      { option_id: 61801, option_text: "Unwanted bulk emails" },
      { option_id: 61802, option_text: "Important emails" },
      { option_id: 61803, option_text: "Office documents" },
      { option_id: 61804, option_text: "Games" }
    ],
    correct_option_id: 61801,
    class_level: 9,
    difficulty: "easy",
    explanation: "Spam unwanted bulk emails होती हैं जो advertising या scam के लिए भेजी जाती हैं।"
  },
  {
    question_id: 6019,
    text: "Windows Defender क्या है?",
    options: [
      { option_id: 61901, option_text: "Microsoft का built-in antivirus" },
      { option_id: 61902, option_text: "एक game" },
      { option_id: 61903, option_text: "Web browser" },
      { option_id: 61904, option_text: "Word processor" }
    ],
    correct_option_id: 61901,
    class_level: 9,
    difficulty: "easy",
    explanation: "Windows Defender Microsoft का free built-in antivirus है जो Windows 10/11 में आता है।"
  },
  {
    question_id: 6020,
    text: "Backup का क्या purpose है?",
    options: [
      { option_id: 62001, option_text: "Data की extra copy रखना loss से बचने के लिए" },
      { option_id: 62002, option_text: "Computer को fast करना" },
      { option_id: 62003, option_text: "Internet speed बढ़ाना" },
      { option_id: 62004, option_text: "Screen brightness बढ़ाना" }
    ],
    correct_option_id: 62001,
    class_level: 9,
    difficulty: "easy",
    explanation: "Backup important data की copy रखना है ताकि data loss होने पर recover किया जा सके।"
  },

  // Class 9 - File Extensions (10)
  {
    question_id: 6021,
    text: "MS Word file का extension क्या होता है?",
    options: [
      { option_id: 62101, option_text: ".docx" },
      { option_id: 62102, option_text: ".xlsx" },
      { option_id: 62103, option_text: ".pptx" },
      { option_id: 62104, option_text: ".pdf" }
    ],
    correct_option_id: 62101,
    class_level: 9,
    difficulty: "easy",
    explanation: "MS Word files का extension .docx होता है।"
  },
  {
    question_id: 6022,
    text: ".xlsx किस software की file है?",
    options: [
      { option_id: 62201, option_text: "MS Excel" },
      { option_id: 62202, option_text: "MS Word" },
      { option_id: 62203, option_text: "MS PowerPoint" },
      { option_id: 62204, option_text: "Notepad" }
    ],
    correct_option_id: 62201,
    class_level: 9,
    difficulty: "easy",
    explanation: ".xlsx MS Excel spreadsheet files का extension है।"
  },
  {
    question_id: 6023,
    text: "Image file का extension कौन सा है?",
    options: [
      { option_id: 62301, option_text: ".jpg" },
      { option_id: 62302, option_text: ".mp3" },
      { option_id: 62303, option_text: ".mp4" },
      { option_id: 62304, option_text: ".exe" }
    ],
    correct_option_id: 62301,
    class_level: 9,
    difficulty: "easy",
    explanation: ".jpg एक image file format है जो photos के लिए commonly use होता है।"
  },
  {
    question_id: 6024,
    text: ".mp3 किस type की file है?",
    options: [
      { option_id: 62401, option_text: "Audio file" },
      { option_id: 62402, option_text: "Video file" },
      { option_id: 62403, option_text: "Document file" },
      { option_id: 62404, option_text: "Image file" }
    ],
    correct_option_id: 62401,
    class_level: 9,
    difficulty: "easy",
    explanation: ".mp3 audio file format है जो music files के लिए use होता है।"
  },
  {
    question_id: 6025,
    text: ".exe file क्या होती है?",
    options: [
      { option_id: 62501, option_text: "Executable/Program file" },
      { option_id: 62502, option_text: "Text file" },
      { option_id: 62503, option_text: "Image file" },
      { option_id: 62504, option_text: "Audio file" }
    ],
    correct_option_id: 62501,
    class_level: 9,
    difficulty: "medium",
    explanation: ".exe executable file है जो programs को run करती है।"
  },

  // Class 9 - Internet Protocols (10)
  {
    question_id: 6026,
    text: "HTTP का full form क्या है?",
    options: [
      { option_id: 62601, option_text: "HyperText Transfer Protocol" },
      { option_id: 62602, option_text: "High Text Transfer Protocol" },
      { option_id: 62603, option_text: "Hyper Transfer Text Protocol" },
      { option_id: 62604, option_text: "Home Text Transfer Protocol" }
    ],
    correct_option_id: 62601,
    class_level: 9,
    difficulty: "easy",
    explanation: "HTTP = HyperText Transfer Protocol, यह web pages transfer करने का protocol है।"
  },
  {
    question_id: 6027,
    text: "HTTPS में S का क्या मतलब है?",
    options: [
      { option_id: 62701, option_text: "Secure" },
      { option_id: 62702, option_text: "Speed" },
      { option_id: 62703, option_text: "Simple" },
      { option_id: 62704, option_text: "System" }
    ],
    correct_option_id: 62701,
    class_level: 9,
    difficulty: "easy",
    explanation: "HTTPS में S = Secure, यह encrypted और secure connection है।"
  },
  {
    question_id: 6028,
    text: "IP Address क्या है?",
    options: [
      { option_id: 62801, option_text: "Computer का unique network address" },
      { option_id: 62802, option_text: "Email address" },
      { option_id: 62803, option_text: "Home address" },
      { option_id: 62804, option_text: "Website name" }
    ],
    correct_option_id: 62801,
    class_level: 9,
    difficulty: "medium",
    explanation: "IP Address network पर हर device का unique identifier है।"
  },
  {
    question_id: 6029,
    text: "FTP का use किसलिए होता है?",
    options: [
      { option_id: 62901, option_text: "Files transfer करने के लिए" },
      { option_id: 62902, option_text: "Email भेजने के लिए" },
      { option_id: 62903, option_text: "Games खेलने के लिए" },
      { option_id: 62904, option_text: "Music सुनने के लिए" }
    ],
    correct_option_id: 62901,
    class_level: 9,
    difficulty: "medium",
    explanation: "FTP = File Transfer Protocol, यह files को transfer करने के लिए use होता है।"
  },
  {
    question_id: 6030,
    text: "URL का full form क्या है?",
    options: [
      { option_id: 63001, option_text: "Uniform Resource Locator" },
      { option_id: 63002, option_text: "Universal Resource Locator" },
      { option_id: 63003, option_text: "Unique Resource Locator" },
      { option_id: 63004, option_text: "United Resource Locator" }
    ],
    correct_option_id: 63001,
    class_level: 9,
    difficulty: "easy",
    explanation: "URL = Uniform Resource Locator, यह website का address है।"
  },

  // Class 10 - Cyber Security (15)
  {
    question_id: 6031,
    text: "Phishing attack क्या है?",
    options: [
      { option_id: 63101, option_text: "Fake emails/websites से personal info चुराना" },
      { option_id: 63102, option_text: "मछली पकड़ना" },
      { option_id: 63103, option_text: "Gaming" },
      { option_id: 63104, option_text: "Photo editing" }
    ],
    correct_option_id: 63101,
    class_level: 10,
    difficulty: "easy",
    explanation: "Phishing attack में fake emails/websites के through sensitive information चुराई जाती है।"
  },
  {
    question_id: 6032,
    text: "Ransomware क्या करता है?",
    options: [
      { option_id: 63201, option_text: "Files encrypt करके ransom मांगता है" },
      { option_id: 63202, option_text: "Computer को fast करता है" },
      { option_id: 63203, option_text: "Free games देता है" },
      { option_id: 63204, option_text: "Internet speed बढ़ाता है" }
    ],
    correct_option_id: 63201,
    class_level: 10,
    difficulty: "medium",
    explanation: "Ransomware victim की files encrypt करके उन्हें unlock करने के लिए पैसे मांगता है।"
  },
  {
    question_id: 6033,
    text: "2FA का full form क्या है?",
    options: [
      { option_id: 63301, option_text: "Two-Factor Authentication" },
      { option_id: 63302, option_text: "Two File Authentication" },
      { option_id: 63303, option_text: "Two Fast Authentication" },
      { option_id: 63304, option_text: "Two Factor Application" }
    ],
    correct_option_id: 63301,
    class_level: 10,
    difficulty: "easy",
    explanation: "2FA = Two-Factor Authentication, यह extra security layer है।"
  },
  {
    question_id: 6034,
    text: "VPN का क्या use है?",
    options: [
      { option_id: 63401, option_text: "Secure और encrypted connection बनाना" },
      { option_id: 63402, option_text: "Games खेलना" },
      { option_id: 63403, option_text: "Files delete करना" },
      { option_id: 63404, option_text: "Screen record करना" }
    ],
    correct_option_id: 63401,
    class_level: 10,
    difficulty: "medium",
    explanation: "VPN (Virtual Private Network) secure, encrypted connection बनाता है और IP address hide करता है।"
  },
  {
    question_id: 6035,
    text: "Digital Footprint क्या है?",
    options: [
      { option_id: 63501, option_text: "Internet पर आपकी activities का data trail" },
      { option_id: 63502, option_text: "पैर का निशान" },
      { option_id: 63503, option_text: "Digital camera" },
      { option_id: 63504, option_text: "Computer screen" }
    ],
    correct_option_id: 63501,
    class_level: 10,
    difficulty: "medium",
    explanation: "Digital Footprint वह data है जो आप internet पर अपनी activities से छोड़ते हैं।"
  },
  {
    question_id: 6036,
    text: "Spyware का क्या काम है?",
    options: [
      { option_id: 63601, option_text: "User की जानकारी secretly collect करना" },
      { option_id: 63602, option_text: "Computer को fast करना" },
      { option_id: 63603, option_text: "Games install करना" },
      { option_id: 63604, option_text: "Files organize करना" }
    ],
    correct_option_id: 63601,
    class_level: 10,
    difficulty: "medium",
    explanation: "Spyware secretly user की activities monitor करता है और information collect करता है।"
  },
  {
    question_id: 6037,
    text: "DDoS attack का मतलब क्या है?",
    options: [
      { option_id: 63701, option_text: "Website को traffic से overwhelm करना" },
      { option_id: 63702, option_text: "Password चुराना" },
      { option_id: 63703, option_text: "Files delete करना" },
      { option_id: 63704, option_text: "Email भेजना" }
    ],
    correct_option_id: 63701,
    class_level: 10,
    difficulty: "hard",
    explanation: "DDoS = Distributed Denial of Service, इसमें website को heavy traffic से crash किया जाता है।"
  },
  {
    question_id: 6038,
    text: "Encryption क्या है?",
    options: [
      { option_id: 63801, option_text: "Data को unreadable code में convert करना" },
      { option_id: 63802, option_text: "Data delete करना" },
      { option_id: 63803, option_text: "Data copy करना" },
      { option_id: 63804, option_text: "Data print करना" }
    ],
    correct_option_id: 63801,
    class_level: 10,
    difficulty: "medium",
    explanation: "Encryption data को code में convert करता है जो केवल authorized person read कर सकता है।"
  },
  {
    question_id: 6039,
    text: "Cyberbullying क्या है?",
    options: [
      { option_id: 63901, option_text: "Internet पर किसी को harass या intimidate करना" },
      { option_id: 63902, option_text: "Online shopping" },
      { option_id: 63903, option_text: "Email भेजना" },
      { option_id: 63904, option_text: "Games खेलना" }
    ],
    correct_option_id: 63901,
    class_level: 10,
    difficulty: "easy",
    explanation: "Cyberbullying digital platforms पर किसी को harass, threaten या embarrass करना है।"
  },
  {
    question_id: 6040,
    text: "IT Act 2000 किससे संबंधित है?",
    options: [
      { option_id: 64001, option_text: "Cyber crimes और electronic transactions" },
      { option_id: 64002, option_text: "Road safety" },
      { option_id: 64003, option_text: "Education" },
      { option_id: 64004, option_text: "Agriculture" }
    ],
    correct_option_id: 64001,
    class_level: 10,
    difficulty: "medium",
    explanation: "IT Act 2000 India का cyber law है जो cyber crimes और e-commerce को regulate करता है।"
  },

  // Class 10 - Advanced Excel (15)
  {
    question_id: 6041,
    text: "Excel में =SUM(A1:A10) क्या करता है?",
    options: [
      { option_id: 64101, option_text: "A1 से A10 तक की values का sum" },
      { option_id: 64102, option_text: "A1 से A10 का average" },
      { option_id: 64103, option_text: "A1 से A10 की count" },
      { option_id: 64104, option_text: "A1 से A10 का maximum" }
    ],
    correct_option_id: 64101,
    class_level: 10,
    difficulty: "easy",
    explanation: "=SUM(A1:A10) range A1 से A10 तक की सभी numbers का total देता है।"
  },
  {
    question_id: 6042,
    text: "=IF(A1>50,\"Pass\",\"Fail\") क्या return करेगा अगर A1=60?",
    options: [
      { option_id: 64201, option_text: "Pass" },
      { option_id: 64202, option_text: "Fail" },
      { option_id: 64203, option_text: "60" },
      { option_id: 64204, option_text: "Error" }
    ],
    correct_option_id: 64201,
    class_level: 10,
    difficulty: "medium",
    explanation: "चूंकि 60>50 है (true), तो formula \"Pass\" return करेगा।"
  },
  {
    question_id: 6043,
    text: "VLOOKUP का use किसलिए होता है?",
    options: [
      { option_id: 64301, option_text: "Table में value search करने के लिए" },
      { option_id: 64302, option_text: "Sum करने के लिए" },
      { option_id: 64303, option_text: "Graph बनाने के लिए" },
      { option_id: 64304, option_text: "Print करने के लिए" }
    ],
    correct_option_id: 64301,
    class_level: 10,
    difficulty: "medium",
    explanation: "VLOOKUP table में vertically value search करके related data return करता है।"
  },
  {
    question_id: 6044,
    text: "Excel में Pie Chart किसके लिए best है?",
    options: [
      { option_id: 64401, option_text: "Percentages और parts of whole दिखाने के लिए" },
      { option_id: 64402, option_text: "Time trends के लिए" },
      { option_id: 64403, option_text: "Multiple series compare करने के लिए" },
      { option_id: 64404, option_text: "Negative values के लिए" }
    ],
    correct_option_id: 64401,
    class_level: 10,
    difficulty: "easy",
    explanation: "Pie Chart percentage या whole का parts दिखाने के लिए ideal है।"
  },
  {
    question_id: 6045,
    text: "=AVERAGE(A1:A10) क्या calculate करता है?",
    options: [
      { option_id: 64501, option_text: "Mean/Average value" },
      { option_id: 64502, option_text: "Maximum value" },
      { option_id: 64503, option_text: "Minimum value" },
      { option_id: 64504, option_text: "Total sum" }
    ],
    correct_option_id: 64501,
    class_level: 10,
    difficulty: "easy",
    explanation: "=AVERAGE() function given range की average value calculate करता है।"
  },
  {
    question_id: 6046,
    text: "Excel में Cell Address क्या है?",
    options: [
      { option_id: 64601, option_text: "Column letter + Row number (जैसे A1, B2)" },
      { option_id: 64602, option_text: "Email address" },
      { option_id: 64603, option_text: "Home address" },
      { option_id: 64604, option_text: "IP address" }
    ],
    correct_option_id: 64601,
    class_level: 10,
    difficulty: "easy",
    explanation: "Cell Address column letter और row number का combination है जैसे A1, B5, C10।"
  },
  {
    question_id: 6047,
    text: "=MAX(A1:A10) क्या return करता है?",
    options: [
      { option_id: 64701, option_text: "Range की largest value" },
      { option_id: 64702, option_text: "Range की smallest value" },
      { option_id: 64703, option_text: "Range का sum" },
      { option_id: 64704, option_text: "Range का average" }
    ],
    correct_option_id: 64701,
    class_level: 10,
    difficulty: "easy",
    explanation: "=MAX() function given range से maximum (largest) value return करता है।"
  },
  {
    question_id: 6048,
    text: "Pivot Table का use किसलिए होता है?",
    options: [
      { option_id: 64801, option_text: "Data summarize और analyze करने के लिए" },
      { option_id: 64802, option_text: "Text formatting के लिए" },
      { option_id: 64803, option_text: "Images insert करने के लिए" },
      { option_id: 64804, option_text: "Email भेजने के लिए" }
    ],
    correct_option_id: 64801,
    class_level: 10,
    difficulty: "hard",
    explanation: "Pivot Table large data को summarize, analyze और reorganize करने का powerful tool है।"
  },
  {
    question_id: 6049,
    text: "=COUNT(A1:A10) क्या करता है?",
    options: [
      { option_id: 64901, option_text: "Numbers containing cells count करता है" },
      { option_id: 64902, option_text: "Sum करता है" },
      { option_id: 64903, option_text: "Average निकालता है" },
      { option_id: 64904, option_text: "Maximum देता है" }
    ],
    correct_option_id: 64901,
    class_level: 10,
    difficulty: "easy",
    explanation: "=COUNT() range में numeric values वाली cells की count देता है।"
  },
  {
    question_id: 6050,
    text: "Excel में $ sign का क्या use है?",
    options: [
      { option_id: 65001, option_text: "Absolute cell reference बनाने के लिए" },
      { option_id: 65002, option_text: "Currency format के लिए" },
      { option_id: 65003, option_text: "Multiplication के लिए" },
      { option_id: 65004, option_text: "Division के लिए" }
    ],
    correct_option_id: 65001,
    class_level: 10,
    difficulty: "hard",
    explanation: "$A$1 absolute reference है जो copy करने पर change नहीं होता।"
  },

  // Class 10 - Network Devices (10)
  {
    question_id: 6051,
    text: "Router का क्या काम है?",
    options: [
      { option_id: 65101, option_text: "Different networks को connect करना" },
      { option_id: 65102, option_text: "Print करना" },
      { option_id: 65103, option_text: "Scan करना" },
      { option_id: 65104, option_text: "Type करना" }
    ],
    correct_option_id: 65101,
    class_level: 10,
    difficulty: "easy",
    explanation: "Router different networks को connect करता है और data packets को route करता है।"
  },
  {
    question_id: 6052,
    text: "Switch और Hub में क्या अंतर है?",
    options: [
      { option_id: 65201, option_text: "Switch specific device को data भेजता है, Hub सबको" },
      { option_id: 65202, option_text: "कोई अंतर नहीं" },
      { option_id: 65203, option_text: "Hub smarter है" },
      { option_id: 65204, option_text: "Switch slower है" }
    ],
    correct_option_id: 65201,
    class_level: 10,
    difficulty: "medium",
    explanation: "Switch intelligent है और data केवल target device को भेजता है, Hub सभी को broadcast करता है।"
  },
  {
    question_id: 6053,
    text: "Modem का full form क्या है?",
    options: [
      { option_id: 65301, option_text: "Modulator-Demodulator" },
      { option_id: 65302, option_text: "Modern Device" },
      { option_id: 65303, option_text: "Mode Manager" },
      { option_id: 65304, option_text: "Model Maker" }
    ],
    correct_option_id: 65301,
    class_level: 10,
    difficulty: "easy",
    explanation: "Modem = Modulator-Demodulator, यह digital और analog signals convert करता है।"
  },
  {
    question_id: 6054,
    text: "LAN का full form क्या है?",
    options: [
      { option_id: 65401, option_text: "Local Area Network" },
      { option_id: 65402, option_text: "Large Area Network" },
      { option_id: 65403, option_text: "Long Area Network" },
      { option_id: 65404, option_text: "Light Area Network" }
    ],
    correct_option_id: 65401,
    class_level: 10,
    difficulty: "easy",
    explanation: "LAN = Local Area Network, यह एक building या campus में होता है।"
  },
  {
    question_id: 6055,
    text: "WAN का example क्या है?",
    options: [
      { option_id: 65501, option_text: "Internet" },
      { option_id: 65502, option_text: "Office network" },
      { option_id: 65503, option_text: "Home WiFi" },
      { option_id: 65504, option_text: "Bluetooth" }
    ],
    correct_option_id: 65501,
    class_level: 10,
    difficulty: "medium",
    explanation: "WAN = Wide Area Network, Internet सबसे बड़ा WAN है जो पूरी दुनिया को connect करता है।"
  },

  // Class 10 - Cloud Computing (10)
  {
    question_id: 6056,
    text: "Cloud Computing क्या है?",
    options: [
      { option_id: 65601, option_text: "Internet के through computing services deliver करना" },
      { option_id: 65602, option_text: "बादलों का अध्ययन" },
      { option_id: 65603, option_text: "Weather forecasting" },
      { option_id: 65604, option_text: "Airplane technology" }
    ],
    correct_option_id: 65601,
    class_level: 10,
    difficulty: "easy",
    explanation: "Cloud Computing में internet के through servers, storage, और software access किए जाते हैं।"
  },
  {
    question_id: 6057,
    text: "Google Drive किस type की cloud service है?",
    options: [
      { option_id: 65701, option_text: "SaaS (Software as a Service)" },
      { option_id: 65702, option_text: "IaaS" },
      { option_id: 65703, option_text: "PaaS" },
      { option_id: 65704, option_text: "None" }
    ],
    correct_option_id: 65701,
    class_level: 10,
    difficulty: "medium",
    explanation: "Google Drive SaaS है - ready-to-use software जो browser से access होता है।"
  },
  {
    question_id: 6058,
    text: "Cloud Computing का major benefit क्या है?",
    options: [
      { option_id: 65801, option_text: "Anywhere, anytime access और cost savings" },
      { option_id: 65802, option_text: "Slower performance" },
      { option_id: 65803, option_text: "Limited storage" },
      { option_id: 65804, option_text: "Hardware purchase जरूरी" }
    ],
    correct_option_id: 65801,
    class_level: 10,
    difficulty: "easy",
    explanation: "Cloud से कहीं से भी access, no hardware investment, और scalability मिलती है।"
  },
  {
    question_id: 6059,
    text: "Public Cloud का example क्या है?",
    options: [
      { option_id: 65901, option_text: "AWS, Google Cloud, Azure" },
      { option_id: 65902, option_text: "Company's own servers" },
      { option_id: 65903, option_text: "Home PC" },
      { option_id: 65904, option_text: "USB drive" }
    ],
    correct_option_id: 65901,
    class_level: 10,
    difficulty: "medium",
    explanation: "AWS, Google Cloud, Azure public cloud providers हैं जो anyone को services देते हैं।"
  },
  {
    question_id: 6060,
    text: "IaaS का full form क्या है?",
    options: [
      { option_id: 66001, option_text: "Infrastructure as a Service" },
      { option_id: 66002, option_text: "Internet as a Service" },
      { option_id: 66003, option_text: "Information as a Service" },
      { option_id: 66004, option_text: "Integration as a Service" }
    ],
    correct_option_id: 66001,
    class_level: 10,
    difficulty: "medium",
    explanation: "IaaS = Infrastructure as a Service, जिसमें virtual machines और storage मिलता है।"
  },

  // More questions for both classes...
  {
    question_id: 6061,
    text: "Operating System का main function क्या है?",
    options: [
      { option_id: 66101, option_text: "Hardware और Software को manage करना" },
      { option_id: 66102, option_text: "Games खेलना" },
      { option_id: 66103, option_text: "Photos edit करना" },
      { option_id: 66104, option_text: "Music सुनना" }
    ],
    correct_option_id: 66101,
    class_level: 9,
    difficulty: "easy",
    explanation: "OS computer के hardware और software resources को manage करता है।"
  },
  {
    question_id: 6062,
    text: "Windows, Linux, macOS क्या हैं?",
    options: [
      { option_id: 66201, option_text: "Operating Systems" },
      { option_id: 66202, option_text: "Web browsers" },
      { option_id: 66203, option_text: "Programming languages" },
      { option_id: 66204, option_text: "Games" }
    ],
    correct_option_id: 66201,
    class_level: 9,
    difficulty: "easy",
    explanation: "Windows, Linux, macOS popular operating systems हैं।"
  },
  {
    question_id: 6063,
    text: "GUI का full form क्या है?",
    options: [
      { option_id: 66301, option_text: "Graphical User Interface" },
      { option_id: 66302, option_text: "General User Interface" },
      { option_id: 66303, option_text: "Great User Interface" },
      { option_id: 66304, option_text: "Group User Interface" }
    ],
    correct_option_id: 66301,
    class_level: 9,
    difficulty: "easy",
    explanation: "GUI = Graphical User Interface, जिसमें icons, windows, menus use होते हैं।"
  },
  {
    question_id: 6064,
    text: "Android किस type का OS है?",
    options: [
      { option_id: 66401, option_text: "Mobile Operating System" },
      { option_id: 66402, option_text: "Desktop OS" },
      { option_id: 66403, option_text: "Server OS" },
      { option_id: 66404, option_text: "Embedded OS" }
    ],
    correct_option_id: 66401,
    class_level: 9,
    difficulty: "easy",
    explanation: "Android Google का mobile operating system है जो smartphones में use होता है।"
  },
  {
    question_id: 6065,
    text: "Ctrl+C का shortcut क्या करता है?",
    options: [
      { option_id: 66501, option_text: "Copy" },
      { option_id: 66502, option_text: "Cut" },
      { option_id: 66503, option_text: "Paste" },
      { option_id: 66504, option_text: "Delete" }
    ],
    correct_option_id: 66501,
    class_level: 9,
    difficulty: "easy",
    explanation: "Ctrl+C selected content को copy करता है।"
  },

  // Communication Skills
  {
    question_id: 6066,
    text: "7 C's of Communication में 'Clear' का क्या मतलब है?",
    options: [
      { option_id: 66601, option_text: "संदेश स्पष्ट और समझने में आसान हो" },
      { option_id: 66602, option_text: "संदेश लंबा हो" },
      { option_id: 66603, option_text: "संदेश complex हो" },
      { option_id: 66604, option_text: "संदेश में errors हों" }
    ],
    correct_option_id: 66601,
    class_level: 10,
    difficulty: "easy",
    explanation: "Clear का मतलब है कि message simple और easily understandable हो।"
  },
  {
    question_id: 6067,
    text: "Non-verbal Communication में क्या शामिल है?",
    options: [
      { option_id: 66701, option_text: "Body language, Gestures, Eye contact" },
      { option_id: 66702, option_text: "केवल Written text" },
      { option_id: 66703, option_text: "केवल Phone calls" },
      { option_id: 66704, option_text: "केवल Emails" }
    ],
    correct_option_id: 66701,
    class_level: 10,
    difficulty: "easy",
    explanation: "Non-verbal communication में body language, facial expressions, gestures आदि शामिल हैं।"
  },
  {
    question_id: 6068,
    text: "Professional Email में Subject line क्यों जरूरी है?",
    options: [
      { option_id: 66801, option_text: "Email का purpose तुरंत बताने के लिए" },
      { option_id: 66802, option_text: "Decoration के लिए" },
      { option_id: 66803, option_text: "Space भरने के लिए" },
      { option_id: 66804, option_text: "जरूरी नहीं है" }
    ],
    correct_option_id: 66801,
    class_level: 10,
    difficulty: "easy",
    explanation: "Subject line से receiver को email का topic और purpose immediately पता चलता है।"
  },
  {
    question_id: 6069,
    text: "Resume में कौन सी information जरूरी है?",
    options: [
      { option_id: 66901, option_text: "Personal details, Education, Skills, Experience" },
      { option_id: 66902, option_text: "केवल नाम" },
      { option_id: 66903, option_text: "केवल फोटो" },
      { option_id: 66904, option_text: "पसंदीदा खाना" }
    ],
    correct_option_id: 66901,
    class_level: 10,
    difficulty: "easy",
    explanation: "Resume में contact info, education, skills, work experience और achievements होने चाहिए।"
  },
  {
    question_id: 6070,
    text: "Active Listening में क्या important है?",
    options: [
      { option_id: 67001, option_text: "ध्यान से सुनना, Eye contact, Feedback देना" },
      { option_id: 67002, option_text: "बीच में बोलना" },
      { option_id: 67003, option_text: "Phone चेक करना" },
      { option_id: 67004, option_text: "Ignore करना" }
    ],
    correct_option_id: 67001,
    class_level: 10,
    difficulty: "easy",
    explanation: "Active Listening में पूरा ध्यान देना, eye contact, और appropriate feedback देना जरूरी है।"
  },

  // Additional questions to reach 100
  {
    question_id: 6071,
    text: "Star Topology का main feature क्या है?",
    options: [
      { option_id: 67101, option_text: "सभी devices central hub से connected" },
      { option_id: 67102, option_text: "सभी devices एक line में" },
      { option_id: 67103, option_text: "Circle में connected" },
      { option_id: 67104, option_text: "हर device हर device से connected" }
    ],
    correct_option_id: 67101,
    class_level: 10,
    difficulty: "medium",
    explanation: "Star Topology में सभी devices central hub/switch से connected होती हैं।"
  },
  {
    question_id: 6072,
    text: "Bus Topology में single point of failure क्या है?",
    options: [
      { option_id: 67201, option_text: "Main backbone cable" },
      { option_id: 67202, option_text: "Any computer" },
      { option_id: 67203, option_text: "Monitor" },
      { option_id: 67204, option_text: "Keyboard" }
    ],
    correct_option_id: 67201,
    class_level: 10,
    difficulty: "medium",
    explanation: "Bus Topology में main cable damage होने पर पूरा network down हो जाता है।"
  },
  {
    question_id: 6073,
    text: "PowerPoint में F5 key क्या करती है?",
    options: [
      { option_id: 67301, option_text: "Slideshow start करती है" },
      { option_id: 67302, option_text: "File save करती है" },
      { option_id: 67303, option_text: "Print करती है" },
      { option_id: 67304, option_text: "Delete करती है" }
    ],
    correct_option_id: 67301,
    class_level: 10,
    difficulty: "easy",
    explanation: "PowerPoint में F5 key presentation को beginning से start करती है।"
  },
  {
    question_id: 6074,
    text: "Transition और Animation में क्या अंतर है?",
    options: [
      { option_id: 67401, option_text: "Transition slides के बीच, Animation objects पर" },
      { option_id: 67402, option_text: "कोई अंतर नहीं" },
      { option_id: 67403, option_text: "दोनों same हैं" },
      { option_id: 67404, option_text: "Animation slides के बीच" }
    ],
    correct_option_id: 67401,
    class_level: 10,
    difficulty: "medium",
    explanation: "Transition slide change पर apply होता है, Animation individual objects पर।"
  },
  {
    question_id: 6075,
    text: "HTML का use किसलिए होता है?",
    options: [
      { option_id: 67501, option_text: "Web pages की structure बनाने के लिए" },
      { option_id: 67502, option_text: "Calculations के लिए" },
      { option_id: 67503, option_text: "Games बनाने के लिए" },
      { option_id: 67504, option_text: "Music बनाने के लिए" }
    ],
    correct_option_id: 67501,
    class_level: 10,
    difficulty: "easy",
    explanation: "HTML = HyperText Markup Language, web pages का basic structure बनाता है।"
  },
  {
    question_id: 6076,
    text: "CSS का main purpose क्या है?",
    options: [
      { option_id: 67601, option_text: "Web pages को style और design करना" },
      { option_id: 67602, option_text: "Database manage करना" },
      { option_id: 67603, option_text: "Emails भेजना" },
      { option_id: 67604, option_text: "Files download करना" }
    ],
    correct_option_id: 67601,
    class_level: 10,
    difficulty: "easy",
    explanation: "CSS = Cascading Style Sheets, web pages की appearance और layout control करता है।"
  },
  {
    question_id: 6077,
    text: "Database में Primary Key क्या है?",
    options: [
      { option_id: 67701, option_text: "Unique identifier for each record" },
      { option_id: 67702, option_text: "Password" },
      { option_id: 67703, option_text: "Username" },
      { option_id: 67704, option_text: "Email address" }
    ],
    correct_option_id: 67701,
    class_level: 10,
    difficulty: "medium",
    explanation: "Primary Key हर record को uniquely identify करती है, duplicate नहीं हो सकती।"
  },
  {
    question_id: 6078,
    text: "E-Waste क्या है?",
    options: [
      { option_id: 67801, option_text: "Discarded electronic devices" },
      { option_id: 67802, option_text: "Email waste" },
      { option_id: 67803, option_text: "Water waste" },
      { option_id: 67804, option_text: "Paper waste" }
    ],
    correct_option_id: 67801,
    class_level: 10,
    difficulty: "easy",
    explanation: "E-Waste electronic waste है - पुराने computers, phones, TVs आदि।"
  },
  {
    question_id: 6079,
    text: "Green Computing का क्या मतलब है?",
    options: [
      { option_id: 67901, option_text: "Environmentally friendly computing practices" },
      { option_id: 67902, option_text: "Green color monitor" },
      { option_id: 67903, option_text: "Garden में computer use" },
      { option_id: 67904, option_text: "Plants की photo editing" }
    ],
    correct_option_id: 67901,
    class_level: 10,
    difficulty: "easy",
    explanation: "Green Computing में energy efficient और environmentally friendly practices follow होती हैं।"
  },
  {
    question_id: 6080,
    text: "AI का full form क्या है?",
    options: [
      { option_id: 68001, option_text: "Artificial Intelligence" },
      { option_id: 68002, option_text: "Automatic Intelligence" },
      { option_id: 68003, option_text: "Auto Information" },
      { option_id: 68004, option_text: "Advanced Internet" }
    ],
    correct_option_id: 68001,
    class_level: 10,
    difficulty: "easy",
    explanation: "AI = Artificial Intelligence, machines को intelligent बनाने की technology।"
  },

  // Final batch
  {
    question_id: 6081,
    text: "IoT का full form क्या है?",
    options: [
      { option_id: 68101, option_text: "Internet of Things" },
      { option_id: 68102, option_text: "Input of Technology" },
      { option_id: 68103, option_text: "Internet of Technology" },
      { option_id: 68104, option_text: "Information of Things" }
    ],
    correct_option_id: 68101,
    class_level: 10,
    difficulty: "easy",
    explanation: "IoT = Internet of Things, जिसमें devices internet से connected होती हैं।"
  },
  {
    question_id: 6082,
    text: "Smart Home में IoT का example क्या है?",
    options: [
      { option_id: 68201, option_text: "Smart lights, Smart AC, Smart lock" },
      { option_id: 68202, option_text: "Normal bulb" },
      { option_id: 68203, option_text: "Wooden door" },
      { option_id: 68204, option_text: "Paper book" }
    ],
    correct_option_id: 68201,
    class_level: 10,
    difficulty: "easy",
    explanation: "Smart home devices जैसे smart lights, thermostat, locks IoT के examples हैं।"
  },
  {
    question_id: 6083,
    text: "Entrepreneur की main quality क्या है?",
    options: [
      { option_id: 68301, option_text: "Risk-taking और Innovation" },
      { option_id: 68302, option_text: "Only following orders" },
      { option_id: 68303, option_text: "Avoiding responsibilities" },
      { option_id: 68304, option_text: "Fixed salary preference" }
    ],
    correct_option_id: 68301,
    class_level: 10,
    difficulty: "easy",
    explanation: "Entrepreneur में risk-taking ability, innovation, और leadership qualities होनी चाहिए।"
  },
  {
    question_id: 6084,
    text: "Business Plan में क्या शामिल होना चाहिए?",
    options: [
      { option_id: 68401, option_text: "Executive Summary, Market Analysis, Financial Plan" },
      { option_id: 68402, option_text: "केवल नाम" },
      { option_id: 68403, option_text: "केवल logo" },
      { option_id: 68404, option_text: "पसंदीदा color" }
    ],
    correct_option_id: 68401,
    class_level: 10,
    difficulty: "medium",
    explanation: "Business Plan में company description, market analysis, financial projections आदि होने चाहिए।"
  },
  {
    question_id: 6085,
    text: "MS Word में Mail Merge का use किसलिए होता है?",
    options: [
      { option_id: 68501, option_text: "Multiple personalized documents बनाने के लिए" },
      { option_id: 68502, option_text: "Email भेजने के लिए" },
      { option_id: 68503, option_text: "Photos edit करने के लिए" },
      { option_id: 68504, option_text: "Videos बनाने के लिए" }
    ],
    correct_option_id: 68501,
    class_level: 10,
    difficulty: "medium",
    explanation: "Mail Merge से एक template से multiple personalized letters/documents बना सकते हैं।"
  },
  {
    question_id: 6086,
    text: "Open Source Software का example क्या है?",
    options: [
      { option_id: 68601, option_text: "Linux, Firefox, LibreOffice" },
      { option_id: 68602, option_text: "Windows" },
      { option_id: 68603, option_text: "MS Office" },
      { option_id: 68604, option_text: "Adobe Photoshop" }
    ],
    correct_option_id: 68601,
    class_level: 9,
    difficulty: "medium",
    explanation: "Open Source software free है और source code available होता है।"
  },
  {
    question_id: 6087,
    text: "Freeware और Shareware में क्या अंतर है?",
    options: [
      { option_id: 68701, option_text: "Freeware totally free, Shareware trial period के बाद pay" },
      { option_id: 68702, option_text: "कोई अंतर नहीं" },
      { option_id: 68703, option_text: "दोनों paid हैं" },
      { option_id: 68704, option_text: "दोनों trial हैं" }
    ],
    correct_option_id: 68701,
    class_level: 9,
    difficulty: "medium",
    explanation: "Freeware permanently free है, Shareware trial के बाद payment require करता है।"
  },
  {
    question_id: 6088,
    text: "Device Driver क्या करता है?",
    options: [
      { option_id: 68801, option_text: "Hardware और OS के बीच communication" },
      { option_id: 68802, option_text: "Games खेलना" },
      { option_id: 68803, option_text: "Music बजाना" },
      { option_id: 68804, option_text: "Photos edit करना" }
    ],
    correct_option_id: 68801,
    class_level: 9,
    difficulty: "medium",
    explanation: "Device Driver hardware को OS से communicate करने में help करता है।"
  },
  {
    question_id: 6089,
    text: "Recycle Bin में files कब तक रहती हैं?",
    options: [
      { option_id: 68901, option_text: "जब तक manually delete या restore न करें" },
      { option_id: 68902, option_text: "1 दिन" },
      { option_id: 68903, option_text: "1 घंटा" },
      { option_id: 68904, option_text: "Immediately delete हो जाती हैं" }
    ],
    correct_option_id: 68901,
    class_level: 9,
    difficulty: "easy",
    explanation: "Recycle Bin में files तब तक रहती हैं जब तक manually empty न किया जाए।"
  },
  {
    question_id: 6090,
    text: "Shift+Delete क्या करता है?",
    options: [
      { option_id: 69001, option_text: "Permanently delete (Recycle Bin में नहीं जाता)" },
      { option_id: 69002, option_text: "Copy करता है" },
      { option_id: 69003, option_text: "Paste करता है" },
      { option_id: 69004, option_text: "Rename करता है" }
    ],
    correct_option_id: 69001,
    class_level: 9,
    difficulty: "easy",
    explanation: "Shift+Delete file को permanently delete करता है, Recycle Bin में नहीं जाती।"
  },
  {
    question_id: 6091,
    text: "Google Chrome क्या है?",
    options: [
      { option_id: 69101, option_text: "Web Browser" },
      { option_id: 69102, option_text: "Operating System" },
      { option_id: 69103, option_text: "Search Engine" },
      { option_id: 69104, option_text: "Email Service" }
    ],
    correct_option_id: 69101,
    class_level: 9,
    difficulty: "easy",
    explanation: "Google Chrome एक web browser है जो websites access करने के लिए use होता है।"
  },
  {
    question_id: 6092,
    text: "Google क्या है?",
    options: [
      { option_id: 69201, option_text: "Search Engine" },
      { option_id: 69202, option_text: "Web Browser" },
      { option_id: 69203, option_text: "Operating System" },
      { option_id: 69204, option_text: "Word Processor" }
    ],
    correct_option_id: 69201,
    class_level: 9,
    difficulty: "easy",
    explanation: "Google एक search engine है जो web पर information search करता है।"
  },
  {
    question_id: 6093,
    text: "DNS का full form क्या है?",
    options: [
      { option_id: 69301, option_text: "Domain Name System" },
      { option_id: 69302, option_text: "Digital Network System" },
      { option_id: 69303, option_text: "Data Name Service" },
      { option_id: 69304, option_text: "Direct Network Service" }
    ],
    correct_option_id: 69301,
    class_level: 9,
    difficulty: "medium",
    explanation: "DNS = Domain Name System, domain names को IP addresses में convert करता है।"
  },
  {
    question_id: 6094,
    text: "Web Server क्या करता है?",
    options: [
      { option_id: 69401, option_text: "Websites host और deliver करता है" },
      { option_id: 69402, option_text: "Games खेलता है" },
      { option_id: 69403, option_text: "Music बजाता है" },
      { option_id: 69404, option_text: "Photos edit करता है" }
    ],
    correct_option_id: 69401,
    class_level: 9,
    difficulty: "medium",
    explanation: "Web Server websites को store करता है और users' requests पर web pages deliver करता है।"
  },
  {
    question_id: 6095,
    text: "IPv4 address कितने bits का होता है?",
    options: [
      { option_id: 69501, option_text: "32 bits" },
      { option_id: 69502, option_text: "64 bits" },
      { option_id: 69503, option_text: "128 bits" },
      { option_id: 69504, option_text: "16 bits" }
    ],
    correct_option_id: 69501,
    class_level: 10,
    difficulty: "hard",
    explanation: "IPv4 address 32 bits का होता है, जैसे 192.168.1.1"
  },
  {
    question_id: 6096,
    text: "IPv6 address कितने bits का होता है?",
    options: [
      { option_id: 69601, option_text: "128 bits" },
      { option_id: 69602, option_text: "32 bits" },
      { option_id: 69603, option_text: "64 bits" },
      { option_id: 69604, option_text: "256 bits" }
    ],
    correct_option_id: 69601,
    class_level: 10,
    difficulty: "hard",
    explanation: "IPv6 address 128 bits का होता है, IPv4 से बहुत ज्यादा addresses provide करता है।"
  },
  {
    question_id: 6097,
    text: "TCP/IP में TCP का full form क्या है?",
    options: [
      { option_id: 69701, option_text: "Transmission Control Protocol" },
      { option_id: 69702, option_text: "Transfer Control Protocol" },
      { option_id: 69703, option_text: "Technical Control Protocol" },
      { option_id: 69704, option_text: "Total Control Protocol" }
    ],
    correct_option_id: 69701,
    class_level: 10,
    difficulty: "medium",
    explanation: "TCP = Transmission Control Protocol, reliable data transmission ensure करता है।"
  },
  {
    question_id: 6098,
    text: "Stress Management क्यों important है?",
    options: [
      { option_id: 69801, option_text: "Mental और physical health के लिए" },
      { option_id: 69802, option_text: "केवल time pass के लिए" },
      { option_id: 69803, option_text: "इसकी जरूरत नहीं है" },
      { option_id: 69804, option_text: "केवल बड़ों के लिए" }
    ],
    correct_option_id: 69801,
    class_level: 9,
    difficulty: "easy",
    explanation: "Stress management mental और physical health maintain करने के लिए जरूरी है।"
  },
  {
    question_id: 6099,
    text: "SMART Goals में S का क्या मतलब है?",
    options: [
      { option_id: 69901, option_text: "Specific" },
      { option_id: 69902, option_text: "Simple" },
      { option_id: 69903, option_text: "Strong" },
      { option_id: 69904, option_text: "Slow" }
    ],
    correct_option_id: 69901,
    class_level: 9,
    difficulty: "easy",
    explanation: "SMART Goals = Specific, Measurable, Achievable, Relevant, Time-bound।"
  },
  {
    question_id: 6100,
    text: "Time Management का main benefit क्या है?",
    options: [
      { option_id: 61001, option_text: "काम efficiently complete होता है" },
      { option_id: 61002, option_text: "समय बर्बाद होता है" },
      { option_id: 61003, option_text: "Stress बढ़ता है" },
      { option_id: 61004, option_text: "कोई benefit नहीं" }
    ],
    correct_option_id: 61001,
    class_level: 9,
    difficulty: "easy",
    explanation: "Time Management से काम efficiently होता है, stress कम होता है, और productivity बढ़ती है।"
  },
];
