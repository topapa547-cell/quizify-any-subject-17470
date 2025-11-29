// Curated YouTube educational video links database
// Free educational resources from Khan Academy, BYJU's, Unacademy, etc.

interface VideoLinks {
  [key: string]: string;
}

interface SubjectVideos {
  [topic: string]: {
    hindi?: string;
    english?: string;
  };
}

interface ClassVideos {
  [subject: string]: SubjectVideos;
}

const educationalVideos: { [classLevel: string]: ClassVideos } = {
  "10": {
    "विज्ञान": {
      "विद्युत": {
        hindi: "https://www.youtube.com/results?search_query=class+10+electricity+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+electricity+khan+academy",
      },
      "प्रकाश": {
        hindi: "https://www.youtube.com/results?search_query=class+10+light+reflection+refraction+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+light+khan+academy",
      },
      "रासायनिक अभिक्रियाएँ": {
        hindi: "https://www.youtube.com/results?search_query=class+10+chemical+reactions+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+chemical+reactions+khan+academy",
      },
      "जीवन प्रक्रियाएँ": {
        hindi: "https://www.youtube.com/results?search_query=class+10+life+processes+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+life+processes",
      },
      "अम्ल क्षार लवण": {
        hindi: "https://www.youtube.com/results?search_query=class+10+acids+bases+salts+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+acids+bases+salts",
      },
      "धातु अधातु": {
        hindi: "https://www.youtube.com/results?search_query=class+10+metals+nonmetals+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+metals+nonmetals",
      },
    },
    "गणित": {
      "वास्तविक संख्याएँ": {
        hindi: "https://www.youtube.com/results?search_query=class+10+real+numbers+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+real+numbers+khan+academy",
      },
      "द्विघात समीकरण": {
        hindi: "https://www.youtube.com/results?search_query=class+10+quadratic+equations+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+quadratic+equations+khan+academy",
      },
      "त्रिकोणमिति": {
        hindi: "https://www.youtube.com/results?search_query=class+10+trigonometry+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+trigonometry+khan+academy",
      },
      "समान्तर श्रेढ़ी": {
        hindi: "https://www.youtube.com/results?search_query=class+10+arithmetic+progression+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+arithmetic+progression",
      },
      "निर्देशांक ज्यामिति": {
        hindi: "https://www.youtube.com/results?search_query=class+10+coordinate+geometry+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+coordinate+geometry",
      },
    },
    "सामाजिक विज्ञान": {
      "राष्ट्रवाद": {
        hindi: "https://www.youtube.com/results?search_query=class+10+nationalism+india+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+nationalism+india",
      },
      "लोकतंत्र": {
        hindi: "https://www.youtube.com/results?search_query=class+10+democracy+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+democracy",
      },
      "संसाधन": {
        hindi: "https://www.youtube.com/results?search_query=class+10+resources+development+hindi",
        english: "https://www.youtube.com/results?search_query=class+10+resources+development",
      },
    },
    "English": {
      "First Flight": {
        english: "https://www.youtube.com/results?search_query=class+10+first+flight+summary",
      },
      "Footprints": {
        english: "https://www.youtube.com/results?search_query=class+10+footprints+without+feet+summary",
      },
    },
    "हिंदी": {
      "क्षितिज": {
        hindi: "https://www.youtube.com/results?search_query=class+10+kshitij+hindi",
      },
      "कृतिका": {
        hindi: "https://www.youtube.com/results?search_query=class+10+kritika+hindi",
      },
    },
  },
  "9": {
    "विज्ञान": {
      "गति": {
        hindi: "https://www.youtube.com/results?search_query=class+9+motion+hindi",
        english: "https://www.youtube.com/results?search_query=class+9+motion+khan+academy",
      },
      "बल": {
        hindi: "https://www.youtube.com/results?search_query=class+9+force+laws+motion+hindi",
        english: "https://www.youtube.com/results?search_query=class+9+force+laws+motion",
      },
      "परमाणु": {
        hindi: "https://www.youtube.com/results?search_query=class+9+atoms+molecules+hindi",
        english: "https://www.youtube.com/results?search_query=class+9+atoms+molecules",
      },
      "कोशिका": {
        hindi: "https://www.youtube.com/results?search_query=class+9+cell+structure+hindi",
        english: "https://www.youtube.com/results?search_query=class+9+cell+structure",
      },
    },
    "गणित": {
      "संख्या पद्धति": {
        hindi: "https://www.youtube.com/results?search_query=class+9+number+system+hindi",
        english: "https://www.youtube.com/results?search_query=class+9+number+system+khan+academy",
      },
      "बहुपद": {
        hindi: "https://www.youtube.com/results?search_query=class+9+polynomials+hindi",
        english: "https://www.youtube.com/results?search_query=class+9+polynomials+khan+academy",
      },
      "त्रिभुज": {
        hindi: "https://www.youtube.com/results?search_query=class+9+triangles+hindi",
        english: "https://www.youtube.com/results?search_query=class+9+triangles+khan+academy",
      },
    },
    "सामाजिक विज्ञान": {
      "फ्रांसीसी क्रांति": {
        hindi: "https://www.youtube.com/results?search_query=class+9+french+revolution+hindi",
        english: "https://www.youtube.com/results?search_query=class+9+french+revolution",
      },
      "लोकतंत्र": {
        hindi: "https://www.youtube.com/results?search_query=class+9+democracy+hindi",
        english: "https://www.youtube.com/results?search_query=class+9+democracy",
      },
    },
    "English": {
      "Beehive": {
        english: "https://www.youtube.com/results?search_query=class+9+beehive+summary",
      },
      "Moments": {
        english: "https://www.youtube.com/results?search_query=class+9+moments+summary",
      },
    },
    "हिंदी": {
      "क्षितिज": {
        hindi: "https://www.youtube.com/results?search_query=class+9+kshitij+hindi",
      },
      "कृतिका": {
        hindi: "https://www.youtube.com/results?search_query=class+9+kritika+hindi",
      },
    },
  },
};

// Generic topic keywords for fuzzy matching
const topicKeywords: { [keyword: string]: string[] } = {
  "विद्युत": ["electricity", "current", "voltage", "resistance", "ohm"],
  "प्रकाश": ["light", "reflection", "refraction", "lens", "mirror"],
  "गति": ["motion", "velocity", "speed", "acceleration"],
  "बल": ["force", "newton", "inertia", "momentum"],
  "त्रिकोणमिति": ["trigonometry", "sin", "cos", "tan", "angle"],
  "द्विघात समीकरण": ["quadratic", "equation", "roots", "discriminant"],
};

export const getYouTubeLink = (
  subject: string,
  classLevel: number,
  term: string
): string | null => {
  const classKey = classLevel.toString();
  const classVideos = educationalVideos[classKey];
  
  if (!classVideos) return null;
  
  const subjectVideos = classVideos[subject];
  if (!subjectVideos) {
    // Try to find by subject name variations
    const subjectKeys = Object.keys(classVideos);
    for (const key of subjectKeys) {
      if (subject.toLowerCase().includes(key.toLowerCase()) || 
          key.toLowerCase().includes(subject.toLowerCase())) {
        const videos = classVideos[key];
        // Return generic subject search
        const firstTopic = Object.values(videos)[0];
        return firstTopic?.hindi || firstTopic?.english || null;
      }
    }
    return null;
  }

  // Try to find exact topic match
  for (const [topic, links] of Object.entries(subjectVideos)) {
    if (term.toLowerCase().includes(topic.toLowerCase()) ||
        topic.toLowerCase().includes(term.toLowerCase())) {
      return links.hindi || links.english || null;
    }
  }

  // Fuzzy match using keywords
  const termLower = term.toLowerCase();
  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    for (const keyword of keywords) {
      if (termLower.includes(keyword.toLowerCase())) {
        const videos = subjectVideos[topic];
        if (videos) {
          return videos.hindi || videos.english || null;
        }
      }
    }
  }

  // Fallback: generic YouTube search
  return `https://www.youtube.com/results?search_query=class+${classLevel}+${encodeURIComponent(subject)}+${encodeURIComponent(term)}`;
};

export default educationalVideos;
