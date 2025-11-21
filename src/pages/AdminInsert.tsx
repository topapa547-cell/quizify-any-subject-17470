import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { insertClass10ScienceComplete } from "@/data/ncertSolutions/insertAllClass10ScienceComplete";
import { toast } from "sonner";

const AdminInsert = () => {
  const [isInserting, setIsInserting] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleInsertClass10Science = async () => {
    setIsInserting(true);
    setResult(null);
    
    try {
      const insertResult = await insertClass10ScienceComplete();
      setResult(insertResult);
      
      if (insertResult.success) {
        toast.success(`✅ Successfully inserted ${insertResult.successCount} Class 10 Science solutions!`);
      } else {
        toast.error(`❌ Insertion completed with ${insertResult.errorCount} errors`);
      }
    } catch (error) {
      console.error("Error during insertion:", error);
      toast.error("Failed to insert solutions");
      setResult({ success: false, error });
    } finally {
      setIsInserting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">NCERT Solutions Batch Insertion</h1>
      
      <Card className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Batch 1: Class 10 Science</h2>
        <p className="text-muted-foreground mb-4">
          Insert 100 NCERT solutions (50 exercise + 50 in-text questions)
        </p>
        
        <Button 
          onClick={handleInsertClass10Science}
          disabled={isInserting}
          size="lg"
        >
          {isInserting ? "Inserting..." : "Insert Class 10 Science (100 solutions)"}
        </Button>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">Insertion Result:</h3>
          <div className="space-y-2">
            <p>Status: {result.success ? "✅ Success" : "❌ Failed"}</p>
            <p>Total Questions: {result.total}</p>
            <p>Successfully Inserted: {result.successCount}</p>
            <p>Errors: {result.errorCount}</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AdminInsert;
