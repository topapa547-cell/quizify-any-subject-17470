import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { insertClass10ScienceComplete } from "@/data/ncertSolutions/insertAllClass10ScienceComplete";
import { insertClass10MathComplete } from "@/data/ncertSolutions/insertAllClass10MathComplete";
import { insertClass10SocialScienceComplete } from "@/data/ncertSolutions/insertAllClass10SocialScience";
import { insertClass10EnglishComplete } from "@/data/ncertSolutions/insertAllClass10English";
import { insertClass10HindiComplete } from "@/data/ncertSolutions/insertAllClass10Hindi";
import { insertClass9MathNCERT } from "@/data/ncertSolutions/insertAllClass9Math";
import { insertClass9ScienceNCERT } from "@/data/ncertSolutions/insertAllClass9Science";
import { insertClass9EnglishNCERT } from "@/data/ncertSolutions/insertAllClass9English";
import { insertClass9SocialScienceNCERT } from "@/data/ncertSolutions/insertAllClass9SocialScience";
import { insertClass9HindiNCERT } from "@/data/ncertSolutions/insertAllClass9Hindi";
import { insertClass10ITNCERT, insertClass9ITNCERT } from "@/data/ncertSolutions/insertAllITNCERT";
import { toast } from "sonner";

const AdminInsert = () => {
  const [isInsertingMath, setIsInsertingMath] = useState(false);
  const [isInsertingScience, setIsInsertingScience] = useState(false);
  const [isInsertingSocialScience, setIsInsertingSocialScience] = useState(false);
  const [isInsertingEnglish, setIsInsertingEnglish] = useState(false);
  const [isInsertingHindi, setIsInsertingHindi] = useState(false);
  const [isInsertingClass9Math, setIsInsertingClass9Math] = useState(false);
  const [isInsertingClass9Science, setIsInsertingClass9Science] = useState(false);
  const [mathResult, setMathResult] = useState<any>(null);
  const [class9MathResult, setClass9MathResult] = useState<any>(null);
  const [class9ScienceResult, setClass9ScienceResult] = useState<any>(null);
  const [isInsertingClass9English, setIsInsertingClass9English] = useState(false);
  const [class9EnglishResult, setClass9EnglishResult] = useState<any>(null);
  const [isInsertingClass9SocialScience, setIsInsertingClass9SocialScience] = useState(false);
  const [class9SocialScienceResult, setClass9SocialScienceResult] = useState<any>(null);
  const [isInsertingClass10IT, setIsInsertingClass10IT] = useState(false);
  const [class10ITResult, setClass10ITResult] = useState<any>(null);
  const [isInsertingClass9IT, setIsInsertingClass9IT] = useState(false);
  const [class9ITResult, setClass9ITResult] = useState<any>(null);
  const [scienceResult, setScienceResult] = useState<any>(null);
  const [socialScienceResult, setSocialScienceResult] = useState<any>(null);
  const [englishResult, setEnglishResult] = useState<any>(null);
  const [hindiResult, setHindiResult] = useState<any>(null);

  const handleInsertClass10Math = async () => {
    setIsInsertingMath(true);
    setMathResult(null);
    
    try {
      const insertResult = await insertClass10MathComplete();
      setMathResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.successCount} Class 10 Math solutions!`);
      } else {
        toast.error(`❌ Insertion completed with ${insertResult.errorCount} errors`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert Math solutions");
      setMathResult({ success: false, error });
    } finally {
      setIsInsertingMath(false);
    }
  };

  const handleInsertClass10Science = async () => {
    setIsInsertingScience(true);
    setScienceResult(null);
    
    try {
      const insertResult = await insertClass10ScienceComplete();
      setScienceResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.successCount} Class 10 Science solutions!`);
      } else {
        toast.error(`❌ Insertion completed with ${insertResult.errorCount} errors`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert Science solutions");
      setScienceResult({ success: false, error });
    } finally {
      setIsInsertingScience(false);
    }
  };

  const handleInsertClass10SocialScience = async () => {
    setIsInsertingSocialScience(true);
    setSocialScienceResult(null);
    
    try {
      const insertResult = await insertClass10SocialScienceComplete();
      setSocialScienceResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.successCount} Class 10 Social Science solutions!`);
      } else {
        toast.error(`❌ Insertion completed with ${insertResult.errorCount} errors`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert Social Science solutions");
      setSocialScienceResult({ success: false, error });
    } finally {
      setIsInsertingSocialScience(false);
    }
  };

  const handleInsertClass10English = async () => {
    setIsInsertingEnglish(true);
    setEnglishResult(null);
    
    try {
      const insertResult = await insertClass10EnglishComplete();
      setEnglishResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.successCount} Class 10 English solutions!`);
      } else {
        toast.error(`❌ Insertion completed with ${insertResult.errorCount} errors`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert English solutions");
      setEnglishResult({ success: false, error });
    } finally {
      setIsInsertingEnglish(false);
    }
  };

  const handleInsertClass10Hindi = async () => {
    setIsInsertingHindi(true);
    setHindiResult(null);
    
    try {
      const insertResult = await insertClass10HindiComplete();
      setHindiResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.successCount} Class 10 Hindi solutions!`);
      } else {
        toast.error(`❌ Insertion completed with ${insertResult.errorCount} errors`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert Hindi solutions");
      setHindiResult({ success: false, error });
    } finally {
      setIsInsertingHindi(false);
    }
  };

  const handleInsertClass9Math = async () => {
    setIsInsertingClass9Math(true);
    setClass9MathResult(null);
    
    try {
      const insertResult = await insertClass9MathNCERT();
      setClass9MathResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.count} Class 9 Math solutions!`);
      } else {
        toast.error(`❌ Failed to insert Class 9 Math solutions`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert Class 9 Math solutions");
      setClass9MathResult({ success: false, error });
    } finally {
      setIsInsertingClass9Math(false);
    }
  };

  const handleInsertClass9Science = async () => {
    setIsInsertingClass9Science(true);
    setClass9ScienceResult(null);
    
    try {
      const insertResult = await insertClass9ScienceNCERT();
      setClass9ScienceResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.count} Class 9 Science solutions!`);
      } else {
        toast.error(`❌ Failed to insert Class 9 Science solutions`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert Class 9 Science solutions");
      setClass9ScienceResult({ success: false, error });
    } finally {
      setIsInsertingClass9Science(false);
    }
  };

  const handleInsertClass9English = async () => {
    setIsInsertingClass9English(true);
    setClass9EnglishResult(null);
    
    try {
      const insertResult = await insertClass9EnglishNCERT();
      setClass9EnglishResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.successCount} Class 9 English solutions!`);
      } else {
        toast.error(`❌ Failed to insert Class 9 English solutions`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert Class 9 English solutions");
      setClass9EnglishResult({ success: false, error });
    } finally {
      setIsInsertingClass9English(false);
    }
  };

  const handleInsertClass9SocialScience = async () => {
    setIsInsertingClass9SocialScience(true);
    setClass9SocialScienceResult(null);
    
    try {
      const insertResult = await insertClass9SocialScienceNCERT();
      setClass9SocialScienceResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.successCount} Class 9 Social Science solutions!`);
      } else {
        toast.error(`❌ Failed to insert Class 9 Social Science solutions`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert Class 9 Social Science solutions");
      setClass9SocialScienceResult({ success: false, error });
    } finally {
      setIsInsertingClass9SocialScience(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">NCERT Solutions Batch Insertion</h1>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Batch 1: Class 10 Math</h2>
          <p className="text-muted-foreground mb-4">
            Insert ~200 NCERT solutions (exercise + in-text questions)
          </p>
          
          <Button 
            onClick={handleInsertClass10Math}
            disabled={isInsertingMath}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isInsertingMath ? "Inserting..." : "Insert Class 10 Math"}
          </Button>

          {mathResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Math Insertion Result:</h3>
              <div className="space-y-2">
                <p>Status: {mathResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {mathResult.total}</p>
                <p>Successfully Inserted: {mathResult.successCount}</p>
                <p>Errors: {mathResult.errorCount}</p>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Batch 2: Class 10 Science</h2>
          <p className="text-muted-foreground mb-4">
            Insert ~100 NCERT solutions (exercise + in-text questions)
          </p>
          
          <Button 
            onClick={handleInsertClass10Science}
            disabled={isInsertingScience}
            size="lg"
            className="bg-green-600 hover:bg-green-700"
          >
            {isInsertingScience ? "Inserting..." : "Insert Class 10 Science"}
          </Button>

          {scienceResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Science Insertion Result:</h3>
              <div className="space-y-2">
                <p>Status: {scienceResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {scienceResult.total}</p>
                <p>Successfully Inserted: {scienceResult.successCount}</p>
                <p>Errors: {scienceResult.errorCount}</p>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Batch 3: Class 10 Social Science</h2>
          <p className="text-muted-foreground mb-4">
            Insert ~70 NCERT solutions (History + Geography + Politics + Economics)
          </p>
          
          <Button 
            onClick={handleInsertClass10SocialScience}
            disabled={isInsertingSocialScience}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
          >
            {isInsertingSocialScience ? "Inserting..." : "Insert Class 10 Social Science"}
          </Button>

          {socialScienceResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Social Science Insertion Result:</h3>
              <div className="space-y-2">
                <p>Status: {socialScienceResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {socialScienceResult.total}</p>
                <p>Successfully Inserted: {socialScienceResult.successCount}</p>
                <p>Errors: {socialScienceResult.errorCount}</p>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Batch 4: Class 10 English</h2>
          <p className="text-muted-foreground mb-4">
            Insert ~20 NCERT solutions (First Flight + Footprints Without Feet)
          </p>
          
          <Button 
            onClick={handleInsertClass10English}
            disabled={isInsertingEnglish}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700"
          >
            {isInsertingEnglish ? "Inserting..." : "Insert Class 10 English"}
          </Button>

          {englishResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">English Insertion Result:</h3>
              <div className="space-y-2">
                <p>Status: {englishResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {englishResult.total}</p>
                <p>Successfully Inserted: {englishResult.successCount}</p>
                <p>Errors: {englishResult.errorCount}</p>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Batch 5: Class 10 Hindi</h2>
          <p className="text-muted-foreground mb-4">
            Insert ~20 NCERT solutions (Kshitij Part-2 + Kritika Part-2)
          </p>
          
          <Button 
            onClick={handleInsertClass10Hindi}
            disabled={isInsertingHindi}
            size="lg"
            className="bg-amber-600 hover:bg-amber-700"
          >
            {isInsertingHindi ? "Inserting..." : "Insert Class 10 Hindi"}
          </Button>

          {hindiResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Hindi Insertion Result:</h3>
              <div className="space-y-2">
                <p>Status: {hindiResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {hindiResult.total}</p>
                <p>Successfully Inserted: {hindiResult.successCount}</p>
                <p>Errors: {hindiResult.errorCount}</p>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-6 border-2 border-primary">
          <h2 className="text-xl font-semibold mb-4">🆕 Class 9 Mathematics NCERT</h2>
          <p className="text-muted-foreground mb-4">
            Insert 85 comprehensive NCERT solutions for Class 9 Math (all 15 chapters)
          </p>
          
          <Button 
            onClick={handleInsertClass9Math}
            disabled={isInsertingClass9Math}
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            {isInsertingClass9Math ? "Inserting..." : "Insert Class 9 Math"}
          </Button>

          {class9MathResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Class 9 Math Result:</h3>
              <div className="space-y-2">
                <p>Status: {class9MathResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {class9MathResult.count}</p>
              </div>
            </div>
          )}
        </Card>

        {/* Class 9 Science NCERT Solutions */}
        <Card className="p-6 border-2 border-green-500">
          <h2 className="text-xl font-semibold mb-4">🆕 Class 9 Science NCERT</h2>
          <p className="text-muted-foreground mb-4">
            Insert 85 comprehensive NCERT solutions for Class 9 Science (Physics, Chemistry, Biology - all 15 chapters)
          </p>
          
          <Button 
            onClick={handleInsertClass9Science}
            disabled={isInsertingClass9Science}
            size="lg"
            className="bg-green-600 hover:bg-green-700"
          >
            {isInsertingClass9Science ? "Inserting..." : "Insert Class 9 Science"}
          </Button>

          {class9ScienceResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Class 9 Science Result:</h3>
              <div className="space-y-2">
                <p>Status: {class9ScienceResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {class9ScienceResult.count}</p>
              </div>
            </div>
          )}
        </Card>

        {/* Class 9 English NCERT Solutions */}
        <Card className="p-6 border-2 border-orange-500">
          <h2 className="text-xl font-semibold mb-4">🆕 Class 9 English NCERT</h2>
          <p className="text-muted-foreground mb-4">
            Insert 60+ comprehensive NCERT solutions for Class 9 English (Beehive + Moments textbooks)
          </p>
          
          <Button 
            onClick={handleInsertClass9English}
            disabled={isInsertingClass9English}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700"
          >
            {isInsertingClass9English ? "Inserting..." : "Insert Class 9 English"}
          </Button>

          {class9EnglishResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Class 9 English Result:</h3>
              <div className="space-y-2">
                <p>Status: {class9EnglishResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {class9EnglishResult.total}</p>
                <p>Successfully Inserted: {class9EnglishResult.successCount}</p>
              </div>
            </div>
          )}
        </Card>

        {/* Class 9 Social Science NCERT Solutions */}
        <Card className="p-6 border-2 border-purple-500">
          <h2 className="text-xl font-semibold mb-4">🆕 Class 9 Social Science NCERT</h2>
          <p className="text-muted-foreground mb-4">
            Insert 80+ comprehensive NCERT solutions for Class 9 Social Science (History + Geography + Political Science + Economics)
          </p>
          
          <Button 
            onClick={handleInsertClass9SocialScience}
            disabled={isInsertingClass9SocialScience}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
          >
            {isInsertingClass9SocialScience ? "Inserting..." : "Insert Class 9 Social Science"}
          </Button>

          {class9SocialScienceResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Class 9 Social Science Result:</h3>
              <div className="space-y-2">
                <p>Status: {class9SocialScienceResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {class9SocialScienceResult.total}</p>
                <p>Successfully Inserted: {class9SocialScienceResult.successCount}</p>
              </div>
            </div>
          )}
        </Card>

        {/* Class 10 IT/ITes NCERT Solutions */}
        <Card className="p-6 border-2 border-cyan-500">
          <h2 className="text-xl font-semibold mb-4">💻 Class 10 IT/ITes NCERT</h2>
          <p className="text-muted-foreground mb-4">
            Insert 50 comprehensive NCERT solutions for Class 10 IT/ITes (Communication Skills + Information Technology)
          </p>
          
          <Button 
            onClick={async () => {
              setIsInsertingClass10IT(true);
              setClass10ITResult(null);
              try {
                const result = await insertClass10ITNCERT();
                setClass10ITResult(result);
                if (result.success) {
                  toast.success(`✅ Successfully inserted ${result.successCount} Class 10 IT solutions!`);
                } else {
                  toast.error(`❌ Insertion completed with ${result.errorCount} errors`);
                }
              } catch (error) {
                console.error("Error:", error);
                toast.error("Failed to insert Class 10 IT solutions");
                setClass10ITResult({ success: false, error });
              } finally {
                setIsInsertingClass10IT(false);
              }
            }}
            disabled={isInsertingClass10IT}
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            {isInsertingClass10IT ? "Inserting..." : "Insert Class 10 IT/ITes"}
          </Button>

          {class10ITResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Class 10 IT Result:</h3>
              <div className="space-y-2">
                <p>Status: {class10ITResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {class10ITResult.total}</p>
                <p>Successfully Inserted: {class10ITResult.successCount}</p>
              </div>
            </div>
          )}
        </Card>

        {/* Class 9 IT/ITes NCERT Solutions */}
        <Card className="p-6 border-2 border-teal-500">
          <h2 className="text-xl font-semibold mb-4">💻 Class 9 IT/ITes NCERT</h2>
          <p className="text-muted-foreground mb-4">
            Insert 50 comprehensive NCERT solutions for Class 9 IT/ITes (Communication Skills + Information Technology)
          </p>
          
          <Button 
            onClick={async () => {
              setIsInsertingClass9IT(true);
              setClass9ITResult(null);
              try {
                const result = await insertClass9ITNCERT();
                setClass9ITResult(result);
                if (result.success) {
                  toast.success(`✅ Successfully inserted ${result.successCount} Class 9 IT solutions!`);
                } else {
                  toast.error(`❌ Insertion completed with ${result.errorCount} errors`);
                }
              } catch (error) {
                console.error("Error:", error);
                toast.error("Failed to insert Class 9 IT solutions");
                setClass9ITResult({ success: false, error });
              } finally {
                setIsInsertingClass9IT(false);
              }
            }}
            disabled={isInsertingClass9IT}
            size="lg"
            className="bg-teal-600 hover:bg-teal-700"
          >
            {isInsertingClass9IT ? "Inserting..." : "Insert Class 9 IT/ITes"}
          </Button>

          {class9ITResult && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Class 9 IT Result:</h3>
              <div className="space-y-2">
                <p>Status: {class9ITResult.success ? "✅ Success" : "❌ Failed"}</p>
                <p>Total Questions: {class9ITResult.total}</p>
                <p>Successfully Inserted: {class9ITResult.successCount}</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AdminInsert;
