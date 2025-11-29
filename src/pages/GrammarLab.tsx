import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { allGrammarTopics, type GrammarTopic } from '@/data/grammarLab';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, CheckCircle, Circle, Flame, Clock, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

const GrammarLab = () => {
  const { language } = useLanguage();
  const [selectedClass, setSelectedClass] = useState<9 | 10>(9);
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null);
  const [activeTab, setActiveTab] = useState<'explanation' | 'practice'>('explanation');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const filteredTopics = allGrammarTopics.filter(topic => topic.class_level === selectedClass);

  const handleTopicSelect = (topic: GrammarTopic) => {
    setSelectedTopic(topic);
    setUserAnswers({});
    setShowResults(false);
    setActiveTab('explanation');
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async () => {
    if (!selectedTopic) return;

    let correct = 0;
    selectedTopic.practice_questions.forEach(q => {
      const userAnswer = userAnswers[q.id]?.trim().toLowerCase();
      const correctAnswer = q.correct_answer.trim().toLowerCase();
      
      // For questions with multiple acceptable answers (e.g., "Can/Could/Will/Would")
      const acceptableAnswers = correctAnswer.split('/').map(a => a.trim().toLowerCase());
      
      if (acceptableAnswers.some(ans => userAnswer === ans)) {
        correct++;
      }
    });

    const total = selectedTopic.practice_questions.length;
    const percentage = (correct / total) * 100;

    setShowResults(true);
    
    // Save progress to database
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('grammar_progress').upsert({
          user_id: user.id,
          topic_id: selectedTopic.id,
          class_level: selectedTopic.class_level,
          questions_attempted: total,
          questions_correct: correct,
          score_percentage: percentage,
          completed: percentage >= 70,
          last_attempted: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Error saving progress:', error);
    }

    toast.success(
      language === 'hindi' 
        ? `आपका स्कोर: ${correct}/${total} (${percentage.toFixed(1)}%)`
        : `Your Score: ${correct}/${total} (${percentage.toFixed(1)}%)`
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'basic': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getWeightageColor = (weightage: string) => {
    switch (weightage) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!selectedTopic) {
    return (
      <div className="container mx-auto p-4 max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📚 {language === 'hindi' ? 'व्याकरण प्रयोगशाला' : 'Grammar Lab'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'hindi' 
              ? 'व्याकरण नियमों को सीखें और अभ्यास करें'
              : 'Learn and practice grammar rules'}
          </p>
        </div>

        <div className="mb-6">
          <Select value={selectedClass.toString()} onValueChange={(val) => setSelectedClass(Number(val) as 9 | 10)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9">
                {language === 'hindi' ? 'कक्षा 9' : 'Class 9'}
              </SelectItem>
              <SelectItem value="10">
                {language === 'hindi' ? 'कक्षा 10' : 'Class 10'}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTopics.map(topic => (
            <Card 
              key={topic.id} 
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleTopicSelect(topic)}
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  {language === 'hindi' ? topic.topic_name_hindi : topic.topic_name}
                </CardTitle>
                <CardDescription className="space-y-2">
                  <div className="flex gap-2 flex-wrap mt-2">
                    <Badge className={getDifficultyColor(topic.difficulty)}>
                      {topic.difficulty}
                    </Badge>
                    <Badge className={getWeightageColor(topic.exam_weightage)}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {topic.exam_weightage}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Clock className="w-4 h-4" />
                    {topic.estimated_study_time} {language === 'hindi' ? 'मिनट' : 'min'}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {topic.practice_questions.length} {language === 'hindi' ? 'अभ्यास प्रश्न' : 'practice questions'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="mb-4">
        <Button variant="ghost" onClick={() => setSelectedTopic(null)}>
          ← {language === 'hindi' ? 'वापस जाएं' : 'Back to Topics'}
        </Button>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          {language === 'hindi' ? selectedTopic.topic_name_hindi : selectedTopic.topic_name}
        </h1>
        <div className="flex gap-2 flex-wrap">
          <Badge className={getDifficultyColor(selectedTopic.difficulty)}>
            {selectedTopic.difficulty}
          </Badge>
          <Badge className={getWeightageColor(selectedTopic.exam_weightage)}>
            <TrendingUp className="w-3 h-3 mr-1" />
            {selectedTopic.exam_weightage} weightage
          </Badge>
          <Badge variant="outline">
            <Clock className="w-3 h-3 mr-1" />
            {selectedTopic.estimated_study_time} min
          </Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as 'explanation' | 'practice')}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="explanation">
            📖 {language === 'hindi' ? 'व्याख्या' : 'Explanation'}
          </TabsTrigger>
          <TabsTrigger value="practice">
            ✍️ {language === 'hindi' ? 'अभ्यास' : 'Practice'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="explanation">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'hindi' ? 'परिभाषा' : 'Definition'}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base">
                {language === 'hindi' ? selectedTopic.explanation.definition_hindi : selectedTopic.explanation.definition}
              </p>

              {/* Identification Marks Section */}
              {selectedTopic.identification_marks && (
                <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-700 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 text-amber-800 dark:text-amber-300 flex items-center gap-2">
                    🔍 {language === 'hindi' ? 'पहचान के संकेत (Signal Words)' : 'Identification Marks (Signal Words)'}
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Signal Words */}
                    <div>
                      <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-2">
                        {language === 'hindi' ? '📌 पहचान शब्द:' : '📌 Signal Words:'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(language === 'hindi' 
                          ? selectedTopic.identification_marks.signal_words_hindi 
                          : selectedTopic.identification_marks.signal_words
                        ).map((word, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 rounded-full text-sm font-medium"
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Sentence Endings */}
                    <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-3 border border-orange-300 dark:border-orange-700">
                      <p className="text-sm font-semibold text-orange-700 dark:text-orange-400 mb-2">
                        {language === 'hindi' ? '✏️ वाक्य की पहचान (Hindi Endings):' : '✏️ Sentence Structure:'}
                      </p>
                      <ul className="space-y-1">
                        {(language === 'hindi' 
                          ? selectedTopic.identification_marks.sentence_endings_hindi 
                          : selectedTopic.identification_marks.sentence_endings
                        ).map((ending, idx) => (
                          <li key={idx} className="text-sm text-orange-800 dark:text-orange-200 flex items-start gap-2">
                            <span className="text-orange-500">•</span>
                            <span className="font-mono">{ending}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  {language === 'hindi' ? '🔑 मुख्य बिंदु' : '🔑 Key Points'}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {(language === 'hindi' ? selectedTopic.explanation.key_points_hindi : selectedTopic.explanation.key_points).map((point, idx) => (
                    <li key={idx} className="text-muted-foreground">{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  {language === 'hindi' ? '📏 नियम' : '📏 Rules'}
                </h3>
                <ul className="list-decimal list-inside space-y-2">
                  {(language === 'hindi' ? selectedTopic.explanation.rules_hindi : selectedTopic.explanation.rules).map((rule, idx) => (
                    <li key={idx} className="text-muted-foreground font-mono text-sm bg-muted p-2 rounded">{rule}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  {language === 'hindi' ? '💡 उदाहरण' : '💡 Examples'}
                </h3>
                <div className="space-y-4">
                  {selectedTopic.explanation.examples.map((example, idx) => (
                    <Card key={idx} className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-4">
                        <p className="font-semibold mb-1">
                          {language === 'hindi' ? example.sentence_hindi : example.sentence}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === 'hindi' ? example.explanation_hindi : example.explanation}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  {language === 'hindi' ? '⚠️ सामान्य गलतियां' : '⚠️ Common Mistakes'}
                </h3>
                <div className="space-y-4">
                  {selectedTopic.explanation.common_mistakes.map((mistake, idx) => (
                    <Card key={idx} className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
                      <CardContent className="pt-4 space-y-2">
                        <p className="text-red-600 dark:text-red-400 line-through">❌ {mistake.wrong}</p>
                        <p className="text-green-600 dark:text-green-400 font-semibold">✅ {mistake.correct}</p>
                        <p className="text-sm text-muted-foreground">
                          {language === 'hindi' ? mistake.reason_hindi : mistake.reason}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice">
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'hindi' ? 'अभ्यास प्रश्न' : 'Practice Questions'}
              </CardTitle>
              <CardDescription>
                {selectedTopic.practice_questions.length} {language === 'hindi' ? 'प्रश्न' : 'questions'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {selectedTopic.practice_questions.map((q, idx) => (
                <Card key={q.id} className="bg-accent/50">
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold">
                        Q{idx + 1}. {language === 'hindi' ? q.question_text_hindi : q.question_text}
                      </p>
                      <Badge variant="outline">{q.marks} {language === 'hindi' ? 'अंक' : 'marks'}</Badge>
                    </div>

                    {q.question_type === 'mcq' && q.options && (
                      <div className="space-y-2">
                        {q.options.map((option, optIdx) => (
                          <label key={optIdx} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name={q.id}
                              value={option}
                              checked={userAnswers[q.id] === option}
                              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                              className="w-4 h-4"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    )}

                    {(q.question_type === 'fill_blank' || q.question_type === 'transformation' || q.question_type === 'error_correction') && (
                      <input
                        type="text"
                        placeholder={language === 'hindi' ? 'अपना उत्तर यहाँ लिखें...' : 'Type your answer here...'}
                        value={userAnswers[q.id] || ''}
                        onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                        className="w-full p-2 border rounded-md bg-background"
                      />
                    )}

                    {showResults && (
                      <div className="mt-3 p-3 rounded-md bg-muted">
                        <p className="font-semibold text-sm mb-1">
                          ✅ {language === 'hindi' ? 'सही उत्तर:' : 'Correct Answer:'} {q.correct_answer}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === 'hindi' ? q.explanation_hindi : q.explanation}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              <Button onClick={handleSubmit} size="lg" className="w-full">
                {language === 'hindi' ? 'जमा करें' : 'Submit Answers'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GrammarLab;
