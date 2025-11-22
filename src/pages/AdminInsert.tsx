import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { insertClass10ScienceComplete } from "@/data/ncertSolutions/insertAllClass10ScienceComplete";
import { insertClass10MathComplete } from "@/data/ncertSolutions/insertAllClass10MathComplete";
import { toast } from "sonner";

const AdminInsert = () => {
  const [isInsertingMath, setIsInsertingMath] = useState(false);
  const [isInsertingScience, setIsInsertingScience] = useState(false);
  const [mathResult, setMathResult] = useState<any>(null);
  const [scienceResult, setScienceResult] = useState<any>(null);

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
      </div>
    </div>
  );
};

export default AdminInsert;
