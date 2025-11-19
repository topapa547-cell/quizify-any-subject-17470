export interface MotivationalQuote {
  id: number;
  quote_hindi: string;
  quote_english: string;
  author: string;
  category: 'success' | 'education' | 'leadership' | 'life' | 'courage' | 'hardwork';
}

export const motivationalQuotes: MotivationalQuote[] = [
  // APJ Abdul Kalam (25 quotes)
  {
    id: 1,
    quote_hindi: "सपने वो नहीं जो आप सोते समय देखते हैं, सपने वो हैं जो आपको सोने नहीं देते।",
    quote_english: "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
    author: "APJ Abdul Kalam",
    category: "success"
  },
  {
    id: 2,
    quote_hindi: "अगर तुम सूरज की तरह चमकना चाहते हो तो पहले सूरज की तरह जलो।",
    quote_english: "If you want to shine like a sun, first burn like a sun.",
    author: "APJ Abdul Kalam",
    category: "hardwork"
  },
  {
    id: 3,
    quote_hindi: "महान शिक्षक ज्ञान नहीं, सीखने की ललक पैदा करते हैं।",
    quote_english: "Great teachers emanate out of knowledge, passion and compassion.",
    author: "APJ Abdul Kalam",
    category: "education"
  },
  {
    id: 4,
    quote_hindi: "असफलता तभी आती है जब हम अपने आदर्श, उद्देश्य और सिद्धांत भूल जाते हैं।",
    quote_english: "Failure comes only when we forget our ideals, objectives and principles.",
    author: "APJ Abdul Kalam",
    category: "success"
  },
  {
    id: 5,
    quote_hindi: "इंतजार करने वालों को सिर्फ उतना ही मिलता है, जितना कोशिश करने वाले छोड़ देते हैं।",
    quote_english: "Those who wait only get what those who hustle leave behind.",
    author: "APJ Abdul Kalam",
    category: "hardwork"
  },
  {
    id: 6,
    quote_hindi: "शिक्षण एक बहुत ही महान पेशा है जो किसी व्यक्ति के चरित्र, क्षमता और भविष्य को आकार देता है।",
    quote_english: "Teaching is a very noble profession that shapes the character, caliber, and future of an individual.",
    author: "APJ Abdul Kalam",
    category: "education"
  },
  {
    id: 7,
    quote_hindi: "किसी भी मिशन की सफलता के लिए, रचनात्मक नेतृत्व आवश्यक है।",
    quote_english: "For success of any mission, creative leadership is essential.",
    author: "APJ Abdul Kalam",
    category: "leadership"
  },
  {
    id: 8,
    quote_hindi: "जीवन एक कठिन खेल है। आप एक व्यक्ति होने के अपने जन्मसिद्ध अधिकार को बनाए रखकर ही इसे जीत सकते हैं।",
    quote_english: "Life is a difficult game. You can win it only by retaining your birthright to be a person.",
    author: "APJ Abdul Kalam",
    category: "life"
  },
  {
    id: 9,
    quote_hindi: "मनुष्य को कठिनाइयों की आवश्यकता होती है, क्योंकि सफलता का आनंद उठाने के लिए ये जरूरी हैं।",
    quote_english: "Man needs difficulties in life because they are necessary to enjoy the success.",
    author: "APJ Abdul Kalam",
    category: "success"
  },
  {
    id: 10,
    quote_hindi: "अपने मिशन में कामयाब होने के लिए, आपको अपने लक्ष्य के प्रति एकचित्त निष्ठावान होना पड़ेगा।",
    quote_english: "To succeed in your mission, you must have single-minded devotion to your goal.",
    author: "APJ Abdul Kalam",
    category: "success"
  },
  {
    id: 11,
    quote_hindi: "इससे पहले कि सपने सच हों आपको सपने देखने होंगे।",
    quote_english: "You have to dream before your dreams can come true.",
    author: "APJ Abdul Kalam",
    category: "success"
  },
  {
    id: 12,
    quote_hindi: "विज्ञान मानवता के लिए एक खूबसूरत उपहार है; हमें इसे बिगाड़ना नहीं चाहिए।",
    quote_english: "Science is a beautiful gift to humanity; we should not distort it.",
    author: "APJ Abdul Kalam",
    category: "education"
  },
  {
    id: 13,
    quote_hindi: "छोटा लक्ष्य अपराध है; महान लक्ष्य होना चाहिए।",
    quote_english: "Small aim is a crime; have great aim.",
    author: "APJ Abdul Kalam",
    category: "success"
  },
  {
    id: 14,
    quote_hindi: "महान सपने देखने वालों के महान सपने हमेशा पूरे होते हैं।",
    quote_english: "Great dreams of great dreamers are always transcended.",
    author: "APJ Abdul Kalam",
    category: "success"
  },
  {
    id: 15,
    quote_hindi: "सभी पक्षी बारिश में आश्रय ढूंढ़ते हैं। लेकिन बाज बादलों के ऊपर उड़कर बारिश से बचते हैं।",
    quote_english: "All birds find shelter during a rain. But eagle avoids rain by flying above the clouds.",
    author: "APJ Abdul Kalam",
    category: "courage"
  },
  {
    id: 16,
    quote_hindi: "एक अच्छी पुस्तक हजार दोस्तों के बराबर होती है लेकिन एक अच्छा दोस्त एक लाइब्रेरी के बराबर होता है।",
    quote_english: "A good book is equal to a hundred friends but a good friend is equal to a library.",
    author: "APJ Abdul Kalam",
    category: "life"
  },
  {
    id: 17,
    quote_hindi: "शिखर तक पहुंचने के लिए ताकत की जरूरत होती है, चाहे वो माउंट एवरेस्ट का शिखर हो या आपके पेशे का।",
    quote_english: "Climbing to the top demands strength, whether it is to the top of Mount Everest or to the top of your career.",
    author: "APJ Abdul Kalam",
    category: "hardwork"
  },
  {
    id: 18,
    quote_hindi: "भगवान ने हमारे दिमाग और व्यक्तित्व में असीमित शक्तियां और क्षमताएं दी हैं।",
    quote_english: "God has given us unlimited powers and abilities in our mind and personality.",
    author: "APJ Abdul Kalam",
    category: "life"
  },
  {
    id: 19,
    quote_hindi: "अगर आप असफल होते हैं, कभी हार मत मानिए क्योंकि F.A.I.L का मतलब है First Attempt In Learning।",
    quote_english: "If you fail, never give up because FAIL means First Attempt In Learning.",
    author: "APJ Abdul Kalam",
    category: "courage"
  },
  {
    id: 20,
    quote_hindi: "जो लोग दिल से काम करते हैं वो कभी असफल नहीं होते, वे सिर्फ ऐसे परिणाम पाते हैं जिनकी उन्हें उम्मीद नहीं थी।",
    quote_english: "Those who work with heart never fail, they only find results they didn't expect.",
    author: "APJ Abdul Kalam",
    category: "hardwork"
  },
  {
    id: 21,
    quote_hindi: "जब तक भारत दुनिया के सामने खड़ा नहीं होता, कोई हमारी इज्जत नहीं करेगा।",
    quote_english: "Unless India stands up to the world, no one will respect us.",
    author: "APJ Abdul Kalam",
    category: "leadership"
  },
  {
    id: 22,
    quote_hindi: "हमें हार नहीं माननी चाहिए और हमें समस्याओं को खुद को हराने नहीं देना चाहिए।",
    quote_english: "We should not give up and we should not allow the problem to defeat us.",
    author: "APJ Abdul Kalam",
    category: "courage"
  },
  {
    id: 23,
    quote_hindi: "भ्रष्टाचार एक कैंसर की तरह है। इसकी रोकथाम की क्षमता हम सभी में है।",
    quote_english: "Corruption is like a cancer. All of us have the power to prevent it.",
    author: "APJ Abdul Kalam",
    category: "leadership"
  },
  {
    id: 24,
    quote_hindi: "राष्ट्र लोगों से मिलकर बनता है। और उनके प्रयासों से, राष्ट्र जो भी बन सकता है वो बनता है।",
    quote_english: "Nations are made by people. And by their efforts, nations become what they can be.",
    author: "APJ Abdul Kalam",
    category: "leadership"
  },
  {
    id: 25,
    quote_hindi: "युवाओं को जॉब सीकर से जॉब जेनरेटर बनना चाहिए।",
    quote_english: "Youth should transform from job seekers to job generators.",
    author: "APJ Abdul Kalam",
    category: "success"
  },

  // Swami Vivekananda (25 quotes)
  {
    id: 26,
    quote_hindi: "उठो, जागो और तब तक मत रुको जब तक लक्ष्य प्राप्त न हो जाए।",
    quote_english: "Arise, awake, and stop not until the goal is achieved.",
    author: "Swami Vivekananda",
    category: "courage"
  },
  {
    id: 27,
    quote_hindi: "एक समय में एक काम करो, और ऐसा करते समय अपनी पूरी आत्मा उसमें डाल दो।",
    quote_english: "Take up one idea. Make that one idea your life. Think of it, dream of it, live on that idea.",
    author: "Swami Vivekananda",
    category: "success"
  },
  {
    id: 28,
    quote_hindi: "शक्ति जीवन है, निर्बलता मृत्यु है। विस्तार जीवन है, संकुचन मृत्यु है।",
    quote_english: "Strength is life, weakness is death. Expansion is life, contraction is death.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 29,
    quote_hindi: "जो अग्नि हमें गर्मी देती है, वही हमें नष्ट भी कर सकती है; यह अग्नि का दोष नहीं है।",
    quote_english: "The fire that warms us can also consume us; it is not the fault of the fire.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 30,
    quote_hindi: "तुम खुद वह परिवर्तन बनो जो तुम दुनिया में देखना चाहते हो।",
    quote_english: "You have to grow from the inside out. None can teach you, none can make you spiritual.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 31,
    quote_hindi: "जब तक जीना, तब तक सीखना।",
    quote_english: "As long as you live, keep learning.",
    author: "Swami Vivekananda",
    category: "education"
  },
  {
    id: 32,
    quote_hindi: "किसी की निंदा न करें। अगर आप मदद के लिए हाथ बढ़ा सकते हैं, तो जरूर बढ़ाएं।",
    quote_english: "Condemn none. If you can stretch out a helping hand, do so.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 33,
    quote_hindi: "सत्य को हजार तरीकों से बताया जा सकता है, फिर भी हर एक सत्य ही होगा।",
    quote_english: "Truth can be stated in a thousand different ways, yet each one can be true.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 34,
    quote_hindi: "ब्रह्मांड की सारी शक्तियां पहले से हमारी हैं। वो हमीं हैं जो अपनी आंखों पर हाथ रख लेते हैं और फिर रोते हैं कि कितना अंधकार है।",
    quote_english: "All power is within you. You can do anything and everything. Believe in that.",
    author: "Swami Vivekananda",
    category: "courage"
  },
  {
    id: 35,
    quote_hindi: "पहले खुद पर विश्वास करना सीखो, उसके बाद ईश्वर पर विश्वास करने का मतलब समझ आएगा।",
    quote_english: "First believe in yourself, then believe in God.",
    author: "Swami Vivekananda",
    category: "courage"
  },
  {
    id: 36,
    quote_hindi: "जिस तरह से विभिन्न स्रोतों से उत्पन्न धाराएं अपने घुमावदार रास्तों से गुजरते हुए अंततः समुद्र में विलीन हो जाती हैं, उसी तरह मनुष्य अपनी इच्छा से चुने हुए विभिन्न मार्ग अंततः ईश्वर तक जाते हैं।",
    quote_english: "As different streams having different sources all mingle in the sea, so different paths men take all lead to God.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 37,
    quote_hindi: "अगर धन दूसरों की भलाई करने में मदद करे, तो इसका कुछ मूल्य है, अन्यथा, ये सिर्फ बुराई का एक ढेर है।",
    quote_english: "If money helps man to do good, it is of some value; otherwise, it is simply a mass of evil.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 38,
    quote_hindi: "विश्व एक विशाल व्यायामशाला है जहां हम खुद को मजबूत बनाने के लिए आते हैं।",
    quote_english: "The world is a great gymnasium where we come to make ourselves strong.",
    author: "Swami Vivekananda",
    category: "hardwork"
  },
  {
    id: 39,
    quote_hindi: "जो कुछ भी तुम सोचते हो वह हो जाओगे। अगर खुद को कमजोर सोचते हो, कमजोर हो जाओगे; अगर खुद को ताकतवर सोचते हो, ताकतवर हो जाओगे।",
    quote_english: "Whatever you think, that you will be. If you think yourselves weak, weak you will be.",
    author: "Swami Vivekananda",
    category: "courage"
  },
  {
    id: 40,
    quote_hindi: "किसी दिन, जब आपके सामने कोई समस्या ना आए - आप यकीन कर सकते हैं कि आप गलत रास्ते पर जा रहे हैं।",
    quote_english: "In a day, when you don't come across any problems, you can be sure that you are travelling in a wrong path.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 41,
    quote_hindi: "शिक्षा मनुष्य में पहले से विद्यमान पूर्णता की अभिव्यक्ति है।",
    quote_english: "Education is the manifestation of perfection already in man.",
    author: "Swami Vivekananda",
    category: "education"
  },
  {
    id: 42,
    quote_hindi: "खुद को कमजोर समझना सबसे बड़ा पाप है।",
    quote_english: "The greatest sin is to think yourself weak.",
    author: "Swami Vivekananda",
    category: "courage"
  },
  {
    id: 43,
    quote_hindi: "सबसे बड़ा धर्म है अपने स्वभाव के प्रति सच्चे होना। स्वयं पर विश्वास करो।",
    quote_english: "The greatest religion is to be true to your own nature. Have faith in yourselves.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 44,
    quote_hindi: "तुम्हें अंदर से बाहर की तरफ विकसित होना है। कोई तुम्हें पढ़ा नहीं सकता, कोई तुम्हें आध्यात्मिक नहीं बना सकता।",
    quote_english: "You have to grow from the inside out. None can teach you, none can make you spiritual.",
    author: "Swami Vivekananda",
    category: "education"
  },
  {
    id: 45,
    quote_hindi: "विचार को शब्द में, शब्द को कर्म में ढालना ही शिक्षा है।",
    quote_english: "Education is the manifestation of the perfection already in man.",
    author: "Swami Vivekananda",
    category: "education"
  },
  {
    id: 46,
    quote_hindi: "जितना बड़ा संघर्ष होगा, जीत उतनी ही शानदार होगी।",
    quote_english: "The greater the struggle, the more glorious the triumph.",
    author: "Swami Vivekananda",
    category: "success"
  },
  {
    id: 47,
    quote_hindi: "सबसे अच्छा तरीका अपने आप को पाने का है अपने आप को दूसरों की सेवा में खो देना।",
    quote_english: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 48,
    quote_hindi: "किसी चीज से डरो मत। तुम अद्भुत काम करोगे। यह निर्भयता है जो तुरंत प्रबुद्धता लाती है।",
    quote_english: "Be not afraid of anything. You will do marvelous work. It is fearlessness that brings instantaneous enlightenment.",
    author: "Swami Vivekananda",
    category: "courage"
  },
  {
    id: 49,
    quote_hindi: "किसी व्यक्ति की सोच ही उसके जीवन की दिशा निर्धारित करती है।",
    quote_english: "As a man thinks, so he becomes.",
    author: "Swami Vivekananda",
    category: "life"
  },
  {
    id: 50,
    quote_hindi: "ध्यान लगाओ। यदि ऐसा नहीं किया, तो तुम कभी भी अपने लक्ष्य तक नहीं पहुंच पाओगे।",
    quote_english: "Meditate. If you don't, you will never reach your goal.",
    author: "Swami Vivekananda",
    category: "success"
  },

  // Mahatma Gandhi (25 quotes)
  {
    id: 51,
    quote_hindi: "कमजोर कभी माफ नहीं कर सकते। क्षमा ताकतवर का गुण है।",
    quote_english: "The weak can never forgive. Forgiveness is the attribute of the strong.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 52,
    quote_hindi: "खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।",
    quote_english: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    category: "leadership"
  },
  {
    id: 53,
    quote_hindi: "अहिंसा मानवता के लिए सबसे बड़ी ताकत है।",
    quote_english: "Nonviolence is the greatest force at the disposal of mankind.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 54,
    quote_hindi: "जीवित रहने की एक कला है - एक कला जिसे सीखा जा सकता है।",
    quote_english: "There is an art of dying well. There is an art of living well.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 55,
    quote_hindi: "आप मानवता में विश्वास मत खोइए। मानवता सागर की तरह है; अगर सागर की कुछ बूंदें गंदी हैं, तो सागर गंदा नहीं हो जाता।",
    quote_english: "You must not lose faith in humanity. Humanity is like an ocean; if a few drops are dirty, the ocean does not become dirty.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 56,
    quote_hindi: "थोड़ा सा अभ्यास बहुत सारे उपदेशों से बेहतर है।",
    quote_english: "An ounce of practice is worth more than tons of preaching.",
    author: "Mahatma Gandhi",
    category: "hardwork"
  },
  {
    id: 57,
    quote_hindi: "प्रेम दुनिया की सबसे बड़ी शक्ति है और फिर भी हम जिसकी कल्पना कर सकते हैं उसमें सबसे नम्र है।",
    quote_english: "Love is the strongest force the world possesses, and yet it is the humblest imaginable.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 58,
    quote_hindi: "खुशी तब मिलती है जब आप जो सोचते हैं, जो कहते हैं और जो करते हैं, सामंजस्य में हों।",
    quote_english: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 59,
    quote_hindi: "पहले वो आप पर ध्यान नहीं देंगे, फिर वो आप पर हँसेंगे, फिर वो आप से लड़ेंगे, और तब आप जीत जाएँगे।",
    quote_english: "First they ignore you, then they laugh at you, then they fight you, then you win.",
    author: "Mahatma Gandhi",
    category: "success"
  },
  {
    id: 60,
    quote_hindi: "भविष्य इस बात पर निर्भर करता है कि आप आज क्या करते हैं।",
    quote_english: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    category: "success"
  },
  {
    id: 61,
    quote_hindi: "ताकत शारीरिक क्षमता से नहीं आती। यह एक अदम्य इच्छाशक्ति से आती है।",
    quote_english: "Strength does not come from physical capacity. It comes from an indomitable will.",
    author: "Mahatma Gandhi",
    category: "courage"
  },
  {
    id: 62,
    quote_hindi: "कोई त्रुटि तर्क-वितर्क करने से सत्य नहीं बन सकती और न ही कोई सत्य इसलिए त्रुटि नहीं बन सकता है क्योंकि कोई उसे देख नहीं रहा।",
    quote_english: "An error does not become truth by reason of multiplied propagation, nor does truth become error because nobody sees it.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 63,
    quote_hindi: "जहाँ प्रेम है वहाँ जीवन है।",
    quote_english: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 64,
    quote_hindi: "अपने ज्ञान के प्रति अति आत्मविश्वास से सावधान रहें।",
    quote_english: "Beware of being too confident in your own knowledge.",
    author: "Mahatma Gandhi",
    category: "education"
  },
  {
    id: 65,
    quote_hindi: "आप तब तक नहीं समझ सकते कि कोई व्यक्ति कितना ईमानदार है जब तक आप उसे पूरी तरह से न जान लें।",
    quote_english: "You can't judge a person until you know them completely.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 66,
    quote_hindi: "विश्वास को हमेशा तर्क से तौलना चाहिए। जब विश्वास अंधा हो जाता है तो वह मर जाता है।",
    quote_english: "Faith must be enforced by reason. When faith becomes blind it dies.",
    author: "Mahatma Gandhi",
    category: "education"
  },
  {
    id: 67,
    quote_hindi: "आप मुझे जंजीरों में जकड़ सकते हैं, यातना दे सकते हैं, यहां तक कि आप इस शरीर को नष्ट कर सकते हैं, लेकिन आप मेरे विचारों को कभी कैद नहीं कर सकते।",
    quote_english: "You can chain me, you can torture me, you can even destroy this body, but you will never imprison my mind.",
    author: "Mahatma Gandhi",
    category: "courage"
  },
  {
    id: 68,
    quote_hindi: "सत्य एक है, रास्ते कई।",
    quote_english: "Truth is one, paths are many.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 69,
    quote_hindi: "किसी चीज में यकीन करना और उसे ना जीना बेईमानी है।",
    quote_english: "To believe in something, and not to live it, is dishonest.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 70,
    quote_hindi: "मेरा जीवन मेरा संदेश है।",
    quote_english: "My life is my message.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 71,
    quote_hindi: "आँख के बदले आँख पूरी दुनिया को अंधा बना देगी।",
    quote_english: "An eye for an eye will only make the whole world blind.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 72,
    quote_hindi: "स्वयं को जानने का सर्वोत्तम तरीका है स्वयं को दूसरों की सेवा में समर्पित करना।",
    quote_english: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 73,
    quote_hindi: "कोई भी संस्कृति जीवित नहीं रह सकती यदि वह अपने को हम दबाने का प्रयास करें।",
    quote_english: "No culture can live if it attempts to be exclusive.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 74,
    quote_hindi: "गरीबी हिंसा का सबसे बुरा रूप है।",
    quote_english: "Poverty is the worst form of violence.",
    author: "Mahatma Gandhi",
    category: "life"
  },
  {
    id: 75,
    quote_hindi: "सादगी का सार विचार में है, भाषण में नहीं।",
    quote_english: "The essence of simplicity is in thought, not in speech.",
    author: "Mahatma Gandhi",
    category: "life"
  },

  // Chanakya (25 quotes)
  {
    id: 76,
    quote_hindi: "किसी व्यक्ति की महानता उसकी असफलता के समय के व्यवहार से मापी जाती है।",
    quote_english: "A person's greatness is measured by his conduct during times of failure.",
    author: "Chanakya",
    category: "leadership"
  },
  {
    id: 77,
    quote_hindi: "शिक्षा सबसे अच्छी मित्र है। एक शिक्षित व्यक्ति हर जगह सम्मान पाता है।",
    quote_english: "Education is the best friend. An educated person is respected everywhere.",
    author: "Chanakya",
    category: "education"
  },
  {
    id: 78,
    quote_hindi: "जीवन में सफलता के लिए तीन चीजें आवश्यक हैं: दृढ़ संकल्प, कठोर परिश्रम और ईमानदारी।",
    quote_english: "Three things are necessary for success in life: determination, hard work, and honesty.",
    author: "Chanakya",
    category: "success"
  },
  {
    id: 79,
    quote_hindi: "जो व्यक्ति अपने गुस्से पर काबू नहीं रख सकता, वह शत्रुओं के हाथों में खिलौना है।",
    quote_english: "A person who cannot control his anger is a toy in the hands of enemies.",
    author: "Chanakya",
    category: "life"
  },
  {
    id: 80,
    quote_hindi: "विद्या सबसे बड़ी धन है जो चोर नहीं चुरा सकते।",
    quote_english: "Knowledge is the greatest wealth that thieves cannot steal.",
    author: "Chanakya",
    category: "education"
  },
  {
    id: 81,
    quote_hindi: "अपने रहस्य को किसी के साथ साझा मत करो। यह तुम्हें नष्ट कर देगा।",
    quote_english: "Do not share your secrets with anyone. It will destroy you.",
    author: "Chanakya",
    category: "life"
  },
  {
    id: 82,
    quote_hindi: "समय से पहले और भाग्य से ज्यादा कभी किसी को कुछ नहीं मिलता।",
    quote_english: "No one gets anything before time and more than destiny.",
    author: "Chanakya",
    category: "life"
  },
  {
    id: 83,
    quote_hindi: "जो व्यक्ति अपनी गलतियों से सीखता है, वह बुद्धिमान है।",
    quote_english: "A person who learns from his mistakes is wise.",
    author: "Chanakya",
    category: "education"
  },
  {
    id: 84,
    quote_hindi: "धन की रक्षा बुरे समय में करनी चाहिए। पत्नी की रक्षा धन खत्म होने पर करनी चाहिए। लेकिन खुद की रक्षा हमेशा करनी चाहिए।",
    quote_english: "Protect your wealth in bad times. Protect your wife when wealth is gone. But protect yourself always.",
    author: "Chanakya",
    category: "life"
  },
  {
    id: 85,
    quote_hindi: "दूसरों की गलतियों से सीखो। अपने खुद के जीवन काफी छोटा है सारी गलतियां करने के लिए।",
    quote_english: "Learn from others' mistakes. Your own life is too short to make all the mistakes.",
    author: "Chanakya",
    category: "education"
  },
  {
    id: 86,
    quote_hindi: "जो व्यक्ति अपने लक्ष्य के प्रति समर्पित है, वह कभी असफल नहीं होता।",
    quote_english: "A person dedicated to his goal never fails.",
    author: "Chanakya",
    category: "success"
  },
  {
    id: 87,
    quote_hindi: "सबसे बड़ा गुरु आपकी अपनी गलतियां हैं।",
    quote_english: "The greatest teacher is your own mistakes.",
    author: "Chanakya",
    category: "education"
  },
  {
    id: 88,
    quote_hindi: "भय को दूर रहने दो। यह तुम्हारी प्रगति में सबसे बड़ी बाधा है।",
    quote_english: "Keep fear away. It is the biggest obstacle to your progress.",
    author: "Chanakya",
    category: "courage"
  },
  {
    id: 89,
    quote_hindi: "जो व्यक्ति अपने कर्तव्य को नहीं समझता, वह जीवन में कभी सफल नहीं हो सकता।",
    quote_english: "A person who does not understand his duty can never succeed in life.",
    author: "Chanakya",
    category: "success"
  },
  {
    id: 90,
    quote_hindi: "सच बोलो, मीठा बोलो, और कभी किसी की बुराई मत करो।",
    quote_english: "Speak the truth, speak sweetly, and never speak ill of others.",
    author: "Chanakya",
    category: "life"
  },
  {
    id: 91,
    quote_hindi: "अगर आप किसी काम को टाल रहे हैं तो याद रखें: सही समय कभी नहीं आएगा।",
    quote_english: "If you are postponing any work, remember: the right time will never come.",
    author: "Chanakya",
    category: "hardwork"
  },
  {
    id: 92,
    quote_hindi: "दुश्मन को कभी कमजोर मत समझो।",
    quote_english: "Never underestimate your enemy.",
    author: "Chanakya",
    category: "leadership"
  },
  {
    id: 93,
    quote_hindi: "विपत्ति में धैर्य रखना सबसे बड़ी बुद्धिमानी है।",
    quote_english: "Patience in adversity is the greatest wisdom.",
    author: "Chanakya",
    category: "life"
  },
  {
    id: 94,
    quote_hindi: "राजा वही है जो प्रजा का ध्यान रखता है।",
    quote_english: "A true king is one who takes care of his people.",
    author: "Chanakya",
    category: "leadership"
  },
  {
    id: 95,
    quote_hindi: "एक बार अगर आपने काम करना शुरू कर दिया है, तो असफलता से मत डरिये।",
    quote_english: "Once you start working, don't be afraid of failure.",
    author: "Chanakya",
    category: "courage"
  },
  {
    id: 96,
    quote_hindi: "जिसके पास धैर्य है, वह जो चाहे वह पा सकता है।",
    quote_english: "He who has patience can get what he wants.",
    author: "Chanakya",
    category: "success"
  },
  {
    id: 97,
    quote_hindi: "ज्ञान का अभ्यास करना शिक्षा है।",
    quote_english: "Practicing knowledge is education.",
    author: "Chanakya",
    category: "education"
  },
  {
    id: 98,
    quote_hindi: "सत्य की हमेशा जीत होती है।",
    quote_english: "Truth always wins.",
    author: "Chanakya",
    category: "life"
  },
  {
    id: 99,
    quote_hindi: "अपनी आत्मा को शांत रखो। यही सबसे बड़ा धन है।",
    quote_english: "Keep your soul calm. This is the greatest wealth.",
    author: "Chanakya",
    category: "life"
  },
  {
    id: 100,
    quote_hindi: "नेतृत्व करने के लिए सबसे पहले खुद को नियंत्रित करना सीखो।",
    quote_english: "To lead, first learn to control yourself.",
    author: "Chanakya",
    category: "leadership"
  },

  // Bhagat Singh (20 quotes)
  {
    id: 101,
    quote_hindi: "मैं एक मानव हूं और जो कुछ भी मानवता को प्रभावित करता है उससे मुझे मतलब है।",
    quote_english: "I am a man and all that affects mankind concerns me.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 102,
    quote_hindi: "जिंदगी अपने दम पर जी जाती है, दूसरों के कंधों पर नहीं।",
    quote_english: "Life is lived on its own terms, not on others' shoulders.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 103,
    quote_hindi: "मैं यह जानता हूं कि मैंने जो किया है वह सही है और मुझे इसका कोई पछतावा नहीं है।",
    quote_english: "I know what I did was right, and I have no regrets.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 104,
    quote_hindi: "इंकलाब जिंदाबाद!",
    quote_english: "Long live the revolution!",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 105,
    quote_hindi: "किसी को फांसी देने से एक विचार को नहीं मारा जा सकता।",
    quote_english: "You cannot kill an idea by hanging a person.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 106,
    quote_hindi: "मेरा धर्म देश की सेवा है।",
    quote_english: "My religion is to serve my country.",
    author: "Bhagat Singh",
    category: "leadership"
  },
  {
    id: 107,
    quote_hindi: "निष्ठुर आलोचना और स्वतंत्र विचार ये क्रांतिकारी सोच के दो अहम लक्षण हैं।",
    quote_english: "Merciless criticism and independent thinking are the two necessary traits of revolutionary thinking.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 108,
    quote_hindi: "मैं एक आशावादी हूं लेकिन मैं एक रोमांटिक नहीं हूं।",
    quote_english: "I am an optimist, but I am not a romantic.",
    author: "Bhagat Singh",
    category: "life"
  },
  {
    id: 109,
    quote_hindi: "व्यक्ति नश्वर होता है, विचार नहीं।",
    quote_english: "Individuals are mortal, but ideas are immortal.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 110,
    quote_hindi: "किसी को 'क्रांति' शब्द से नहीं डरना चाहिए।",
    quote_english: "One should not be afraid of the word 'revolution'.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 111,
    quote_hindi: "प्रेम हमेशा मनुष्य के चरित्र को ऊंचा बनाता है।",
    quote_english: "Love always elevates the character of man.",
    author: "Bhagat Singh",
    category: "life"
  },
  {
    id: 112,
    quote_hindi: "क्रांति मनुष्य का एक अविच्छिन्न अधिकार है।",
    quote_english: "Revolution is an inalienable right of mankind.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 113,
    quote_hindi: "बम बहरों को सुनाने के लिए जरूरी है।",
    quote_english: "Bombs are necessary to make the deaf hear.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 114,
    quote_hindi: "जो व्यक्ति विकास के लिए खड़ा है उसे हर एक रूढ़िवादी चीज की आलोचना करनी होगी।",
    quote_english: "Any man who stands for progress has to criticize, disbelieve and challenge every item of the old faith.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 115,
    quote_hindi: "क्रांति की तलवार विचारों के धार से तेज होती है।",
    quote_english: "The sword of revolution is sharpened on the edge of ideas.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 116,
    quote_hindi: "राख का हर एक कण मेरी गर्मी से गतिमान है। मैं एक ऐसा पागल हूं जो जेल में भी आजाद है।",
    quote_english: "Every particle of ash is animated by my heat. I am a madman who is free even in prison.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 117,
    quote_hindi: "मैं यह मानता हूं कि मुझे फांसी होनी चाहिए।",
    quote_english: "I believe that I should be hanged.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 118,
    quote_hindi: "देशभक्ति धर्म से कहीं ऊपर है।",
    quote_english: "Patriotism is far above religion.",
    author: "Bhagat Singh",
    category: "leadership"
  },
  {
    id: 119,
    quote_hindi: "स्वतंत्रता मनुष्य का जन्मसिद्ध अधिकार है।",
    quote_english: "Freedom is the birthright of man.",
    author: "Bhagat Singh",
    category: "courage"
  },
  {
    id: 120,
    quote_hindi: "युवाओं को क्रांतिकारी होना चाहिए।",
    quote_english: "Youth should be revolutionary.",
    author: "Bhagat Singh",
    category: "courage"
  },

  // Dr. BR Ambedkar (20 quotes)
  {
    id: 121,
    quote_hindi: "शिक्षित बनो, संगठित रहो, संघर्ष करो।",
    quote_english: "Educate, Agitate, Organize.",
    author: "Dr. BR Ambedkar",
    category: "education"
  },
  {
    id: 122,
    quote_hindi: "मैं एक समुदाय की प्रगति को इस बात से मापता हूं कि महिलाओं ने कितनी प्रगति की है।",
    quote_english: "I measure the progress of a community by the degree of progress which women have achieved.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 123,
    quote_hindi: "जीवन लंबा होने की बजाय महान होना चाहिए।",
    quote_english: "Life should be great rather than long.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 124,
    quote_hindi: "मैं ऐसे धर्म को मानता हूं जो स्वतंत्रता, समानता और भाईचारा सिखाए।",
    quote_english: "I like the religion that teaches liberty, equality and fraternity.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 125,
    quote_hindi: "संविधान एक खाली कागज है, इसकी रक्षा करने वाले लोगों पर निर्भर करता है।",
    quote_english: "Constitution is not a mere lawyers document, it is a vehicle of life.",
    author: "Dr. BR Ambedkar",
    category: "leadership"
  },
  {
    id: 126,
    quote_hindi: "मैं एक समाज चाहता हूं जो स्वतंत्रता, समानता और बंधुत्व पर आधारित हो।",
    quote_english: "I want a society based on liberty, equality and fraternity.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 127,
    quote_hindi: "अगर मुझे लगता है कि संविधान का दुरुपयोग हो रहा है, तो मैं इसे सबसे पहले जलाऊंगा।",
    quote_english: "If I find the constitution being misused, I shall be the first to burn it.",
    author: "Dr. BR Ambedkar",
    category: "courage"
  },
  {
    id: 128,
    quote_hindi: "ज्ञान वो हथियार है जो हर समस्या का समाधान है।",
    quote_english: "Knowledge is the weapon that solves every problem.",
    author: "Dr. BR Ambedkar",
    category: "education"
  },
  {
    id: 129,
    quote_hindi: "सामाजिक बुराइयों के खिलाफ लड़ना ही असली धर्म है।",
    quote_english: "Fighting against social evils is the real religion.",
    author: "Dr. BR Ambedkar",
    category: "courage"
  },
  {
    id: 130,
    quote_hindi: "खोया हुआ अधिकार कभी अपने आप नहीं मिलता, उसे वापस लेना पड़ता है।",
    quote_english: "Lost rights are never regained by appeals to conscience, they are regained by force.",
    author: "Dr. BR Ambedkar",
    category: "courage"
  },
  {
    id: 131,
    quote_hindi: "मैं किसी समुदाय की प्रगति महिलाओं की प्रगति से नापता हूं।",
    quote_english: "I measure the progress of a community by the progress of women.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 132,
    quote_hindi: "स्वतंत्रता का कोई मतलब नहीं अगर वह सबके लिए न हो।",
    quote_english: "Freedom has no meaning if it is not for all.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 133,
    quote_hindi: "मैं धर्म को मानता हूं जो समानता सिखाता है।",
    quote_english: "I believe in a religion that teaches equality.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 134,
    quote_hindi: "बुद्धिमत्ता ही मुक्ति का मार्ग है।",
    quote_english: "Intelligence is the path to liberation.",
    author: "Dr. BR Ambedkar",
    category: "education"
  },
  {
    id: 135,
    quote_hindi: "जिस धर्म में इंसानियत न हो, वह धर्म नहीं है।",
    quote_english: "A religion without humanity is not a religion.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 136,
    quote_hindi: "न्याय देर से मिले तो वह अन्याय के बराबर है।",
    quote_english: "Justice delayed is justice denied.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 137,
    quote_hindi: "कानून और व्यवस्था राजनीतिक शरीर की दवा है और जब राजनीतिक शरीर बीमार हो जाए तो दवा जरूरी हो जाती है।",
    quote_english: "Law and order are the medicine of political body and when political body gets sick, medicine is necessary.",
    author: "Dr. BR Ambedkar",
    category: "leadership"
  },
  {
    id: 138,
    quote_hindi: "हर व्यक्ति को समान अवसर मिलना चाहिए।",
    quote_english: "Every person should get equal opportunity.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 139,
    quote_hindi: "मैं धर्म में विश्वास नहीं करता, मैं मानवता में विश्वास करता हूं।",
    quote_english: "I don't believe in religion, I believe in humanity.",
    author: "Dr. BR Ambedkar",
    category: "life"
  },
  {
    id: 140,
    quote_hindi: "राजनीतिक शक्ति सामाजिक शक्ति की कुंजी है।",
    quote_english: "Political power is the key to social power.",
    author: "Dr. BR Ambedkar",
    category: "leadership"
  },

  // Rabindranath Tagore (20 quotes)
  {
    id: 141,
    quote_hindi: "केवल खड़े होकर पानी को घूरने से आप समुद्र पार नहीं कर सकते।",
    quote_english: "You can't cross the sea merely by standing and staring at the water.",
    author: "Rabindranath Tagore",
    category: "success"
  },
  {
    id: 142,
    quote_hindi: "जहाँ मन भय से मुक्त हो, जहाँ सिर ऊंचा हो।",
    quote_english: "Where the mind is without fear and the head is held high.",
    author: "Rabindranath Tagore",
    category: "courage"
  },
  {
    id: 143,
    quote_hindi: "कितनी भी कठिनाइयाँ क्यों न हों, मुस्कान मत खोना।",
    quote_english: "Don't lose your smile, no matter how difficult it is.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 144,
    quote_hindi: "सबसे ऊँची शिक्षा वह है जो हमें सभी जीवों के साथ सामंजस्य में रहना सिखाती है।",
    quote_english: "The highest education is that which teaches us to live in harmony with all living beings.",
    author: "Rabindranath Tagore",
    category: "education"
  },
  {
    id: 145,
    quote_hindi: "तितली महीनों नहीं गिनती, वह क्षण गिनती है, और उसके पास पर्याप्त समय होता है।",
    quote_english: "The butterfly counts not months but moments, and has time enough.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 146,
    quote_hindi: "जो कुछ हमारा है वह हमसे दूर भागता है अगर हम उसका पीछा करें।",
    quote_english: "That which is ours runs away from us if we chase it.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 147,
    quote_hindi: "प्रेम एक अंतहीन रहस्य है, क्योंकि इसे समझाने के लिए कुछ और नहीं है।",
    quote_english: "Love is an endless mystery, for there is nothing else to explain it.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 148,
    quote_hindi: "बादल मेरे जीवन में तैरते आते हैं, मुझे अब कविता लिखने या प्यार करने के लिए नहीं, बल्कि आकाश को रंगीन करने के लिए।",
    quote_english: "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 149,
    quote_hindi: "संगीत दो आत्माओं के बीच की जगह को भरता है।",
    quote_english: "Music fills the infinite between two souls.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 150,
    quote_hindi: "विश्वास वह पक्षी है जो सुबह अंधेरे में ही गाने लगता है।",
    quote_english: "Faith is the bird that feels the light and sings when the dawn is still dark.",
    author: "Rabindranath Tagore",
    category: "courage"
  },
  {
    id: 151,
    quote_hindi: "सच्ची मित्रता उस पौधे की तरह है जो धीरे-धीरे बढ़ता है।",
    quote_english: "True friendship is like a plant that grows slowly.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 152,
    quote_hindi: "जब मैं खुद पर हंसता हूं तो मेरे ऊपर का बोझ हल्का हो जाता है।",
    quote_english: "When I laugh at myself, the burden upon me is lightened.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 153,
    quote_hindi: "हम दुनिया में तब जीते हैं जब हम दुनिया से प्यार करते हैं।",
    quote_english: "We live in the world when we love the world.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 154,
    quote_hindi: "गहराई से प्यार करने में खतरा है, लेकिन प्यार न करने में और भी बड़ा खतरा है।",
    quote_english: "To love deeply is dangerous, but not to love is even more dangerous.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 155,
    quote_hindi: "मैं सोया और सपना देखा कि जीवन आनंद है। मैं जागा और देखा कि जीवन सेवा है।",
    quote_english: "I slept and dreamt that life was joy. I awoke and saw that life was service.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 156,
    quote_hindi: "जो कुछ भी आपके हाथ में है उसे पकड़ो मत, उसे मुक्त करो।",
    quote_english: "Don't hold on to what you have, set it free.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 157,
    quote_hindi: "आपके भीतर जो सबसे छोटा सा है वह हमेशा सबसे बड़े से बोलता है।",
    quote_english: "The smallest in you always speaks to the greatest.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 158,
    quote_hindi: "मृत्यु जीवन के विपरीत नहीं है, बल्कि उसका एक हिस्सा है।",
    quote_english: "Death is not the opposite of life, but a part of it.",
    author: "Rabindranath Tagore",
    category: "life"
  },
  {
    id: 159,
    quote_hindi: "शिक्षा का उद्देश्य है ज्ञान प्राप्त करना नहीं, बल्कि जीवन को बेहतर बनाना।",
    quote_english: "The object of education is not to acquire knowledge, but to make life better.",
    author: "Rabindranath Tagore",
    category: "education"
  },
  {
    id: 160,
    quote_hindi: "अगर आप सभी गलतियों के लिए दरवाजे बंद कर देंगे तो सच भी बाहर रह जाएगा।",
    quote_english: "If you shut the door to all errors, truth will be shut out.",
    author: "Rabindranath Tagore",
    category: "life"
  },

  // Mother Teresa (15 quotes)
  {
    id: 161,
    quote_hindi: "अगर आप सौ लोगों को नहीं खिला सकते, तो एक को ही खिलाएं।",
    quote_english: "If you can't feed a hundred people, then feed just one.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 162,
    quote_hindi: "प्यार की भूख रोटी की भूख से कहीं ज्यादा मुश्किल है।",
    quote_english: "The hunger for love is much more difficult to remove than the hunger for bread.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 163,
    quote_hindi: "शांति मुस्कान से शुरू होती है।",
    quote_english: "Peace begins with a smile.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 164,
    quote_hindi: "हम सभी महान काम नहीं कर सकते, लेकिन हम छोटे काम बड़े प्यार से कर सकते हैं।",
    quote_english: "We cannot all do great things, but we can do small things with great love.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 165,
    quote_hindi: "प्यार फल है जो हर मौसम में और सभी के लिए उपलब्ध है।",
    quote_english: "Love is a fruit in season at all times, and within reach of every hand.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 166,
    quote_hindi: "हम सभी एक ही रोशनी के तरफ जा रहे हैं।",
    quote_english: "We are all pencils in the hand of God.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 167,
    quote_hindi: "अकेलापन और किसी द्वारा अवांछित महसूस किया जाना सबसे भयानक गरीबी है।",
    quote_english: "Loneliness and the feeling of being unwanted is the most terrible poverty.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 168,
    quote_hindi: "छोटी चीजों में विश्वासी बनो क्योंकि उनमें आपकी ताकत है।",
    quote_english: "Be faithful in small things because it is in them that your strength lies.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 169,
    quote_hindi: "जो प्यार बांटते हैं वे कभी गरीब नहीं होते।",
    quote_english: "Those who give love are never poor.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 170,
    quote_hindi: "अच्छे शब्द छोटे हो सकते हैं, लेकिन उनकी गूंज अनंत होती है।",
    quote_english: "Kind words can be short, but their echoes are endless.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 171,
    quote_hindi: "जिंदगी एक अवसर है, इसे उपयोग करो।",
    quote_english: "Life is an opportunity, make use of it.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 172,
    quote_hindi: "मैं चाहती हूं कि आप अपने पड़ोसी के बारे में चिंतित हों।",
    quote_english: "I want you to be concerned about your neighbor.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 173,
    quote_hindi: "प्रेम बिना सीमाओं का है।",
    quote_english: "Love has no boundaries.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 174,
    quote_hindi: "दया और प्रेम सार्वभौमिक भाषाएं हैं।",
    quote_english: "Kindness and love are universal languages.",
    author: "Mother Teresa",
    category: "life"
  },
  {
    id: 175,
    quote_hindi: "जो भी आप करते हैं, प्यार से करो।",
    quote_english: "Whatever you do, do it with love.",
    author: "Mother Teresa",
    category: "life"
  },

  // Nelson Mandela (15 quotes)
  {
    id: 176,
    quote_hindi: "शिक्षा सबसे शक्तिशाली हथियार है जिससे आप दुनिया बदल सकते हैं।",
    quote_english: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    category: "education"
  },
  {
    id: 177,
    quote_hindi: "यह असंभव लगता है जब तक यह पूरा नहीं हो जाता।",
    quote_english: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    category: "success"
  },
  {
    id: 178,
    quote_hindi: "मैं कभी हारा नहीं। मैं या तो जीतता हूं या सीखता हूं।",
    quote_english: "I never lose. I either win or learn.",
    author: "Nelson Mandela",
    category: "success"
  },
  {
    id: 179,
    quote_hindi: "बहादुर वह नहीं जो डर नहीं महसूस करता, बल्कि वह है जो डर को जीतता है।",
    quote_english: "Courage is not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
    category: "courage"
  },
  {
    id: 180,
    quote_hindi: "असली नेता वह है जो दूसरों को प्रेरित करे।",
    quote_english: "A real leader is one who inspires others.",
    author: "Nelson Mandela",
    category: "leadership"
  },
  {
    id: 181,
    quote_hindi: "कोई भी व्यक्ति त्वचा के रंग, पृष्ठभूमि या धर्म के कारण दूसरे से नफरत करने के लिए पैदा नहीं होता।",
    quote_english: "No one is born hating another person because of the color of his skin, or his background, or his religion.",
    author: "Nelson Mandela",
    category: "life"
  },
  {
    id: 182,
    quote_hindi: "सबसे बड़ी महिमा कभी न गिरने में नहीं, बल्कि हर बार गिरने पर उठने में है।",
    quote_english: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "courage"
  },
  {
    id: 183,
    quote_hindi: "स्वतंत्रता का मतलब सिर्फ अपनी जंजीरें तोड़ना नहीं, बल्कि ऐसे जीवन जीना है जो दूसरों की स्वतंत्रता का सम्मान और बढ़ावा देता है।",
    quote_english: "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.",
    author: "Nelson Mandela",
    category: "life"
  },
  {
    id: 184,
    quote_hindi: "जो हम करते हैं वह इस बात पर निर्भर करता है कि हम क्या सोचते हैं।",
    quote_english: "What we do depends on what we think.",
    author: "Nelson Mandela",
    category: "life"
  },
  {
    id: 185,
    quote_hindi: "मैं चाहता हूं कि हर बच्चे को शिक्षा मिले।",
    quote_english: "I want every child to have education.",
    author: "Nelson Mandela",
    category: "education"
  },
  {
    id: 186,
    quote_hindi: "असंभव को संभव बनाना हमेशा असंभव लगता है जब तक यह पूरा नहीं हो जाता।",
    quote_english: "Making the impossible possible always seems impossible until it is done.",
    author: "Nelson Mandela",
    category: "success"
  },
  {
    id: 187,
    quote_hindi: "एक अच्छा दिमाग और एक अच्छा दिल हमेशा एक शक्तिशाली संयोजन है।",
    quote_english: "A good head and a good heart are always a formidable combination.",
    author: "Nelson Mandela",
    category: "life"
  },
  {
    id: 188,
    quote_hindi: "जेल में होना बुरा नहीं है, बुरा तो वह है जब आप अपनी आजादी के लिए लड़ें नहीं।",
    quote_english: "Being in prison is not bad, what's bad is not fighting for your freedom.",
    author: "Nelson Mandela",
    category: "courage"
  },
  {
    id: 189,
    quote_hindi: "मुझे पता है कि मैं कहां जा रहा हूं और मुझे पता है कि सच क्या है।",
    quote_english: "I know where I'm going and I know the truth.",
    author: "Nelson Mandela",
    category: "courage"
  },
  {
    id: 190,
    quote_hindi: "मैंने सीखा है कि साहस डर की अनुपस्थिति नहीं है, बल्कि इस पर जीत है।",
    quote_english: "I learned that courage was not the absence of fear, but the triumph over it.",
    author: "Nelson Mandela",
    category: "courage"
  },

  // Steve Jobs (10 quotes)
  {
    id: 191,
    quote_hindi: "अपने दिल और अंतर्ज्ञान का अनुसरण करने का साहस रखें।",
    quote_english: "Have the courage to follow your heart and intuition.",
    author: "Steve Jobs",
    category: "courage"
  },
  {
    id: 192,
    quote_hindi: "इनोवेशन एक नेता और फॉलोअर में अंतर बताता है।",
    quote_english: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "leadership"
  },
  {
    id: 193,
    quote_hindi: "आपका समय सीमित है, इसलिए इसे किसी और की जिंदगी जीने में बर्बाद मत करो।",
    quote_english: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "life"
  },
  {
    id: 194,
    quote_hindi: "महान काम करने का एकमात्र तरीका है जो आप करते हैं उससे प्यार करना।",
    quote_english: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    id: 195,
    quote_hindi: "सादगी परम परिष्कार है।",
    quote_english: "Simplicity is the ultimate sophistication.",
    author: "Steve Jobs",
    category: "life"
  },
  {
    id: 196,
    quote_hindi: "भूखे रहो, मूर्ख बने रहो।",
    quote_english: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    id: 197,
    quote_hindi: "जो लोग पागल हैं सोचते हैं कि वे दुनिया बदल सकते हैं, वे ही होते हैं जो बदलते हैं।",
    quote_english: "The people who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    id: 198,
    quote_hindi: "डिजाइन सिर्फ कैसा दिखता है और कैसा महसूस होता है नहीं है। डिजाइन यह है कि यह कैसे काम करता है।",
    quote_english: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    category: "hardwork"
  },
  {
    id: 199,
    quote_hindi: "गुणवत्ता मात्रा से अधिक महत्वपूर्ण है। एक होम रन दो डबल से बेहतर है।",
    quote_english: "Quality is more important than quantity. One home run is better than two doubles.",
    author: "Steve Jobs",
    category: "success"
  },
  {
    id: 200,
    quote_hindi: "मुझे यकीन है कि जो चीज सफल उद्यमियों को असफल से अलग करती है वह शुद्ध दृढ़ता है।",
    quote_english: "I'm convinced that what separates successful entrepreneurs from non-successful ones is pure perseverance.",
    author: "Steve Jobs",
    category: "success"
  },
];
