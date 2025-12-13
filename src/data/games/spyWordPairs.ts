export interface SpyWordPair {
  id: string;
  citizenWord: string;
  citizenWordHi: string;
  spyWord: string;
  spyWordHi: string;
  category: string;
}

export const spyWordPairs: SpyWordPair[] = [
  // Animals (15 pairs)
  { id: "a1", citizenWord: "Cat", citizenWordHi: "बिल्ली", spyWord: "Dog", spyWordHi: "कुत्ता", category: "animals" },
  { id: "a2", citizenWord: "Lion", citizenWordHi: "शेर", spyWord: "Tiger", spyWordHi: "बाघ", category: "animals" },
  { id: "a3", citizenWord: "Elephant", citizenWordHi: "हाथी", spyWord: "Rhino", spyWordHi: "गैंडा", category: "animals" },
  { id: "a4", citizenWord: "Horse", citizenWordHi: "घोड़ा", spyWord: "Donkey", spyWordHi: "गधा", category: "animals" },
  { id: "a5", citizenWord: "Crow", citizenWordHi: "कौआ", spyWord: "Sparrow", spyWordHi: "गौरैया", category: "animals" },
  { id: "a6", citizenWord: "Monkey", citizenWordHi: "बंदर", spyWord: "Gorilla", spyWordHi: "गोरिल्ला", category: "animals" },
  { id: "a7", citizenWord: "Deer", citizenWordHi: "हिरण", spyWord: "Antelope", spyWordHi: "मृग", category: "animals" },
  { id: "a8", citizenWord: "Parrot", citizenWordHi: "तोता", spyWord: "Pigeon", spyWordHi: "कबूतर", category: "animals" },
  { id: "a9", citizenWord: "Snake", citizenWordHi: "साँप", spyWord: "Lizard", spyWordHi: "छिपकली", category: "animals" },
  { id: "a10", citizenWord: "Cow", citizenWordHi: "गाय", spyWord: "Buffalo", spyWordHi: "भैंस", category: "animals" },
  { id: "a11", citizenWord: "Peacock", citizenWordHi: "मोर", spyWord: "Swan", spyWordHi: "हंस", category: "animals" },
  { id: "a12", citizenWord: "Eagle", citizenWordHi: "बाज़", spyWord: "Hawk", spyWordHi: "बाज", category: "animals" },
  { id: "a13", citizenWord: "Rabbit", citizenWordHi: "खरगोश", spyWord: "Squirrel", spyWordHi: "गिलहरी", category: "animals" },
  { id: "a14", citizenWord: "Fox", citizenWordHi: "लोमड़ी", spyWord: "Wolf", spyWordHi: "भेड़िया", category: "animals" },
  { id: "a15", citizenWord: "Frog", citizenWordHi: "मेंढक", spyWord: "Toad", spyWordHi: "भेक", category: "animals" },

  // Food (20 pairs)
  { id: "f1", citizenWord: "Pizza", citizenWordHi: "पिज़्ज़ा", spyWord: "Burger", spyWordHi: "बर्गर", category: "food" },
  { id: "f2", citizenWord: "Tea", citizenWordHi: "चाय", spyWord: "Coffee", spyWordHi: "कॉफी", category: "food" },
  { id: "f3", citizenWord: "Rice", citizenWordHi: "चावल", spyWord: "Roti", spyWordHi: "रोटी", category: "food" },
  { id: "f4", citizenWord: "Mango", citizenWordHi: "आम", spyWord: "Banana", spyWordHi: "केला", category: "food" },
  { id: "f5", citizenWord: "Apple", citizenWordHi: "सेब", spyWord: "Orange", spyWordHi: "संतरा", category: "food" },
  { id: "f6", citizenWord: "Ice Cream", citizenWordHi: "आइसक्रीम", spyWord: "Kulfi", spyWordHi: "कुल्फी", category: "food" },
  { id: "f7", citizenWord: "Samosa", citizenWordHi: "समोसा", spyWord: "Kachori", spyWordHi: "कचौरी", category: "food" },
  { id: "f8", citizenWord: "Biryani", citizenWordHi: "बिरयानी", spyWord: "Pulao", spyWordHi: "पुलाव", category: "food" },
  { id: "f9", citizenWord: "Coke", citizenWordHi: "कोक", spyWord: "Pepsi", spyWordHi: "पेप्सी", category: "food" },
  { id: "f10", citizenWord: "Chocolate", citizenWordHi: "चॉकलेट", spyWord: "Candy", spyWordHi: "टॉफी", category: "food" },
  { id: "f11", citizenWord: "Paneer", citizenWordHi: "पनीर", spyWord: "Tofu", spyWordHi: "टोफू", category: "food" },
  { id: "f12", citizenWord: "Dal", citizenWordHi: "दाल", spyWord: "Rajma", spyWordHi: "राजमा", category: "food" },
  { id: "f13", citizenWord: "Cake", citizenWordHi: "केक", spyWord: "Pastry", spyWordHi: "पेस्ट्री", category: "food" },
  { id: "f14", citizenWord: "Noodles", citizenWordHi: "नूडल्स", spyWord: "Pasta", spyWordHi: "पास्ता", category: "food" },
  { id: "f15", citizenWord: "Milk", citizenWordHi: "दूध", spyWord: "Lassi", spyWordHi: "लस्सी", category: "food" },
  { id: "f16", citizenWord: "Gulab Jamun", citizenWordHi: "गुलाब जामुन", spyWord: "Rasgulla", spyWordHi: "रसगुल्ला", category: "food" },
  { id: "f17", citizenWord: "Paratha", citizenWordHi: "पराठा", spyWord: "Naan", spyWordHi: "नान", category: "food" },
  { id: "f18", citizenWord: "Jalebi", citizenWordHi: "जलेबी", spyWord: "Imarti", spyWordHi: "इमरती", category: "food" },
  { id: "f19", citizenWord: "Pav Bhaji", citizenWordHi: "पाव भाजी", spyWord: "Chole Bhature", spyWordHi: "छोले भटूरे", category: "food" },
  { id: "f20", citizenWord: "Dosa", citizenWordHi: "डोसा", spyWord: "Idli", spyWordHi: "इडली", category: "food" },

  // Sports (15 pairs)
  { id: "s1", citizenWord: "Cricket", citizenWordHi: "क्रिकेट", spyWord: "Football", spyWordHi: "फुटबॉल", category: "sports" },
  { id: "s2", citizenWord: "Tennis", citizenWordHi: "टेनिस", spyWord: "Badminton", spyWordHi: "बैडमिंटन", category: "sports" },
  { id: "s3", citizenWord: "Hockey", citizenWordHi: "हॉकी", spyWord: "Polo", spyWordHi: "पोलो", category: "sports" },
  { id: "s4", citizenWord: "Basketball", citizenWordHi: "बास्केटबॉल", spyWord: "Volleyball", spyWordHi: "वॉलीबॉल", category: "sports" },
  { id: "s5", citizenWord: "Swimming", citizenWordHi: "तैराकी", spyWord: "Diving", spyWordHi: "डाइविंग", category: "sports" },
  { id: "s6", citizenWord: "Boxing", citizenWordHi: "बॉक्सिंग", spyWord: "Wrestling", spyWordHi: "कुश्ती", category: "sports" },
  { id: "s7", citizenWord: "Chess", citizenWordHi: "शतरंज", spyWord: "Carrom", spyWordHi: "कैरम", category: "sports" },
  { id: "s8", citizenWord: "Golf", citizenWordHi: "गोल्फ", spyWord: "Polo", spyWordHi: "पोलो", category: "sports" },
  { id: "s9", citizenWord: "Kabaddi", citizenWordHi: "कबड्डी", spyWord: "Kho-Kho", spyWordHi: "खो-खो", category: "sports" },
  { id: "s10", citizenWord: "Archery", citizenWordHi: "तीरंदाज़ी", spyWord: "Shooting", spyWordHi: "निशानेबाज़ी", category: "sports" },
  { id: "s11", citizenWord: "Running", citizenWordHi: "दौड़", spyWord: "Walking", spyWordHi: "चलना", category: "sports" },
  { id: "s12", citizenWord: "Cycling", citizenWordHi: "साइकिलिंग", spyWord: "Skating", spyWordHi: "स्केटिंग", category: "sports" },
  { id: "s13", citizenWord: "Yoga", citizenWordHi: "योग", spyWord: "Gym", spyWordHi: "जिम", category: "sports" },
  { id: "s14", citizenWord: "Table Tennis", citizenWordHi: "टेबल टेनिस", spyWord: "Squash", spyWordHi: "स्क्वैश", category: "sports" },
  { id: "s15", citizenWord: "Javelin", citizenWordHi: "भाला फेंक", spyWord: "Shot Put", spyWordHi: "गोला फेंक", category: "sports" },

  // Countries & Cities (15 pairs)
  { id: "c1", citizenWord: "India", citizenWordHi: "भारत", spyWord: "Pakistan", spyWordHi: "पाकिस्तान", category: "places" },
  { id: "c2", citizenWord: "USA", citizenWordHi: "अमेरिका", spyWord: "UK", spyWordHi: "ब्रिटेन", category: "places" },
  { id: "c3", citizenWord: "Delhi", citizenWordHi: "दिल्ली", spyWord: "Mumbai", spyWordHi: "मुंबई", category: "places" },
  { id: "c4", citizenWord: "China", citizenWordHi: "चीन", spyWord: "Japan", spyWordHi: "जापान", category: "places" },
  { id: "c5", citizenWord: "Paris", citizenWordHi: "पेरिस", spyWord: "London", spyWordHi: "लंदन", category: "places" },
  { id: "c6", citizenWord: "Dubai", citizenWordHi: "दुबई", spyWord: "Singapore", spyWordHi: "सिंगापुर", category: "places" },
  { id: "c7", citizenWord: "Kolkata", citizenWordHi: "कोलकाता", spyWord: "Chennai", spyWordHi: "चेन्नई", category: "places" },
  { id: "c8", citizenWord: "Jaipur", citizenWordHi: "जयपुर", spyWord: "Udaipur", spyWordHi: "उदयपुर", category: "places" },
  { id: "c9", citizenWord: "Australia", citizenWordHi: "ऑस्ट्रेलिया", spyWord: "New Zealand", spyWordHi: "न्यूजीलैंड", category: "places" },
  { id: "c10", citizenWord: "Russia", citizenWordHi: "रूस", spyWord: "Germany", spyWordHi: "जर्मनी", category: "places" },
  { id: "c11", citizenWord: "Agra", citizenWordHi: "आगरा", spyWord: "Lucknow", spyWordHi: "लखनऊ", category: "places" },
  { id: "c12", citizenWord: "Goa", citizenWordHi: "गोवा", spyWord: "Kerala", spyWordHi: "केरल", category: "places" },
  { id: "c13", citizenWord: "Brazil", citizenWordHi: "ब्राज़ील", spyWord: "Argentina", spyWordHi: "अर्जेंटीना", category: "places" },
  { id: "c14", citizenWord: "Italy", citizenWordHi: "इटली", spyWord: "Spain", spyWordHi: "स्पेन", category: "places" },
  { id: "c15", citizenWord: "Egypt", citizenWordHi: "मिस्र", spyWord: "Saudi Arabia", spyWordHi: "सऊदी अरब", category: "places" },

  // Vehicles (10 pairs)
  { id: "v1", citizenWord: "Car", citizenWordHi: "कार", spyWord: "Bike", spyWordHi: "बाइक", category: "vehicles" },
  { id: "v2", citizenWord: "Bus", citizenWordHi: "बस", spyWord: "Train", spyWordHi: "ट्रेन", category: "vehicles" },
  { id: "v3", citizenWord: "Airplane", citizenWordHi: "हवाई जहाज", spyWord: "Helicopter", spyWordHi: "हेलीकॉप्टर", category: "vehicles" },
  { id: "v4", citizenWord: "Ship", citizenWordHi: "जहाज", spyWord: "Boat", spyWordHi: "नाव", category: "vehicles" },
  { id: "v5", citizenWord: "Cycle", citizenWordHi: "साइकिल", spyWord: "Scooter", spyWordHi: "स्कूटर", category: "vehicles" },
  { id: "v6", citizenWord: "Rickshaw", citizenWordHi: "रिक्शा", spyWord: "Auto", spyWordHi: "ऑटो", category: "vehicles" },
  { id: "v7", citizenWord: "Truck", citizenWordHi: "ट्रक", spyWord: "Tempo", spyWordHi: "टेम्पो", category: "vehicles" },
  { id: "v8", citizenWord: "Metro", citizenWordHi: "मेट्रो", spyWord: "Local Train", spyWordHi: "लोकल ट्रेन", category: "vehicles" },
  { id: "v9", citizenWord: "Ambulance", citizenWordHi: "एम्बुलेंस", spyWord: "Fire Truck", spyWordHi: "फायर ट्रक", category: "vehicles" },
  { id: "v10", citizenWord: "Tractor", citizenWordHi: "ट्रैक्टर", spyWord: "Bulldozer", spyWordHi: "बुलडोज़र", category: "vehicles" },

  // Professions (12 pairs)
  { id: "p1", citizenWord: "Doctor", citizenWordHi: "डॉक्टर", spyWord: "Nurse", spyWordHi: "नर्स", category: "professions" },
  { id: "p2", citizenWord: "Teacher", citizenWordHi: "शिक्षक", spyWord: "Professor", spyWordHi: "प्रोफेसर", category: "professions" },
  { id: "p3", citizenWord: "Police", citizenWordHi: "पुलिस", spyWord: "Army", spyWordHi: "सेना", category: "professions" },
  { id: "p4", citizenWord: "Engineer", citizenWordHi: "इंजीनियर", spyWord: "Architect", spyWordHi: "आर्किटेक्ट", category: "professions" },
  { id: "p5", citizenWord: "Chef", citizenWordHi: "रसोइया", spyWord: "Waiter", spyWordHi: "वेटर", category: "professions" },
  { id: "p6", citizenWord: "Pilot", citizenWordHi: "पायलट", spyWord: "Air Hostess", spyWordHi: "एयर होस्टेस", category: "professions" },
  { id: "p7", citizenWord: "Lawyer", citizenWordHi: "वकील", spyWord: "Judge", spyWordHi: "जज", category: "professions" },
  { id: "p8", citizenWord: "Singer", citizenWordHi: "गायक", spyWord: "Musician", spyWordHi: "संगीतकार", category: "professions" },
  { id: "p9", citizenWord: "Actor", citizenWordHi: "अभिनेता", spyWord: "Director", spyWordHi: "निर्देशक", category: "professions" },
  { id: "p10", citizenWord: "Farmer", citizenWordHi: "किसान", spyWord: "Gardner", spyWordHi: "माली", category: "professions" },
  { id: "p11", citizenWord: "Barber", citizenWordHi: "नाई", spyWord: "Tailor", spyWordHi: "दर्ज़ी", category: "professions" },
  { id: "p12", citizenWord: "Carpenter", citizenWordHi: "बढ़ई", spyWord: "Blacksmith", spyWordHi: "लोहार", category: "professions" },

  // Festivals & Occasions (10 pairs)
  { id: "fe1", citizenWord: "Diwali", citizenWordHi: "दिवाली", spyWord: "Holi", spyWordHi: "होली", category: "festivals" },
  { id: "fe2", citizenWord: "Christmas", citizenWordHi: "क्रिसमस", spyWord: "New Year", spyWordHi: "नया साल", category: "festivals" },
  { id: "fe3", citizenWord: "Eid", citizenWordHi: "ईद", spyWord: "Bakrid", spyWordHi: "बकरीद", category: "festivals" },
  { id: "fe4", citizenWord: "Raksha Bandhan", citizenWordHi: "रक्षा बंधन", spyWord: "Bhai Dooj", spyWordHi: "भाई दूज", category: "festivals" },
  { id: "fe5", citizenWord: "Birthday", citizenWordHi: "जन्मदिन", spyWord: "Anniversary", spyWordHi: "सालगिरह", category: "festivals" },
  { id: "fe6", citizenWord: "Wedding", citizenWordHi: "शादी", spyWord: "Engagement", spyWordHi: "सगाई", category: "festivals" },
  { id: "fe7", citizenWord: "Navratri", citizenWordHi: "नवरात्रि", spyWord: "Durga Puja", spyWordHi: "दुर्गा पूजा", category: "festivals" },
  { id: "fe8", citizenWord: "Ganesh Chaturthi", citizenWordHi: "गणेश चतुर्थी", spyWord: "Janmashtami", spyWordHi: "जन्माष्टमी", category: "festivals" },
  { id: "fe9", citizenWord: "Republic Day", citizenWordHi: "गणतंत्र दिवस", spyWord: "Independence Day", spyWordHi: "स्वतंत्रता दिवस", category: "festivals" },
  { id: "fe10", citizenWord: "Makar Sankranti", citizenWordHi: "मकर संक्रांति", spyWord: "Pongal", spyWordHi: "पोंगल", category: "festivals" },

  // Electronics & Tech (10 pairs)
  { id: "t1", citizenWord: "Mobile", citizenWordHi: "मोबाइल", spyWord: "Tablet", spyWordHi: "टैबलेट", category: "tech" },
  { id: "t2", citizenWord: "Laptop", citizenWordHi: "लैपटॉप", spyWord: "Desktop", spyWordHi: "डेस्कटॉप", category: "tech" },
  { id: "t3", citizenWord: "TV", citizenWordHi: "टीवी", spyWord: "Projector", spyWordHi: "प्रोजेक्टर", category: "tech" },
  { id: "t4", citizenWord: "Camera", citizenWordHi: "कैमरा", spyWord: "Webcam", spyWordHi: "वेबकैम", category: "tech" },
  { id: "t5", citizenWord: "Headphones", citizenWordHi: "हेडफोन", spyWord: "Earbuds", spyWordHi: "ईयरबड्स", category: "tech" },
  { id: "t6", citizenWord: "Keyboard", citizenWordHi: "कीबोर्ड", spyWord: "Mouse", spyWordHi: "माउस", category: "tech" },
  { id: "t7", citizenWord: "WiFi", citizenWordHi: "वाईफाई", spyWord: "Bluetooth", spyWordHi: "ब्लूटूथ", category: "tech" },
  { id: "t8", citizenWord: "iPhone", citizenWordHi: "आईफोन", spyWord: "Samsung", spyWordHi: "सैमसंग", category: "tech" },
  { id: "t9", citizenWord: "Printer", citizenWordHi: "प्रिंटर", spyWord: "Scanner", spyWordHi: "स्कैनर", category: "tech" },
  { id: "t10", citizenWord: "Pen Drive", citizenWordHi: "पेन ड्राइव", spyWord: "Hard Disk", spyWordHi: "हार्ड डिस्क", category: "tech" },

  // Movies & Entertainment (8 pairs)
  { id: "m1", citizenWord: "Bollywood", citizenWordHi: "बॉलीवुड", spyWord: "Hollywood", spyWordHi: "हॉलीवुड", category: "entertainment" },
  { id: "m2", citizenWord: "Netflix", citizenWordHi: "नेटफ्लिक्स", spyWord: "Amazon Prime", spyWordHi: "अमेज़न प्राइम", category: "entertainment" },
  { id: "m3", citizenWord: "YouTube", citizenWordHi: "यूट्यूब", spyWord: "Instagram", spyWordHi: "इंस्टाग्राम", category: "entertainment" },
  { id: "m4", citizenWord: "WhatsApp", citizenWordHi: "व्हाट्सएप", spyWord: "Telegram", spyWordHi: "टेलीग्राम", category: "entertainment" },
  { id: "m5", citizenWord: "PUBG", citizenWordHi: "पब्जी", spyWord: "Free Fire", spyWordHi: "फ्री फायर", category: "entertainment" },
  { id: "m6", citizenWord: "Cinema Hall", citizenWordHi: "सिनेमा हॉल", spyWord: "Theatre", spyWordHi: "थिएटर", category: "entertainment" },
  { id: "m7", citizenWord: "Facebook", citizenWordHi: "फेसबुक", spyWord: "Twitter", spyWordHi: "ट्विटर", category: "entertainment" },
  { id: "m8", citizenWord: "TikTok", citizenWordHi: "टिकटॉक", spyWord: "Reels", spyWordHi: "रील्स", category: "entertainment" },

  // Household Items (10 pairs)
  { id: "h1", citizenWord: "Chair", citizenWordHi: "कुर्सी", spyWord: "Table", spyWordHi: "मेज़", category: "household" },
  { id: "h2", citizenWord: "Bed", citizenWordHi: "पलंग", spyWord: "Sofa", spyWordHi: "सोफा", category: "household" },
  { id: "h3", citizenWord: "Fan", citizenWordHi: "पंखा", spyWord: "AC", spyWordHi: "एसी", category: "household" },
  { id: "h4", citizenWord: "Fridge", citizenWordHi: "फ्रिज", spyWord: "Freezer", spyWordHi: "फ्रीज़र", category: "household" },
  { id: "h5", citizenWord: "Bucket", citizenWordHi: "बाल्टी", spyWord: "Mug", spyWordHi: "मग", category: "household" },
  { id: "h6", citizenWord: "Pillow", citizenWordHi: "तकिया", spyWord: "Blanket", spyWordHi: "कंबल", category: "household" },
  { id: "h7", citizenWord: "Broom", citizenWordHi: "झाड़ू", spyWord: "Mop", spyWordHi: "पोंछा", category: "household" },
  { id: "h8", citizenWord: "Mirror", citizenWordHi: "आईना", spyWord: "Clock", spyWordHi: "घड़ी", category: "household" },
  { id: "h9", citizenWord: "Lock", citizenWordHi: "ताला", spyWord: "Key", spyWordHi: "चाबी", category: "household" },
  { id: "h10", citizenWord: "Window", citizenWordHi: "खिड़की", spyWord: "Door", spyWordHi: "दरवाज़ा", category: "household" },
];

export const getRandomWordPair = (): SpyWordPair => {
  const randomIndex = Math.floor(Math.random() * spyWordPairs.length);
  return spyWordPairs[randomIndex];
};
