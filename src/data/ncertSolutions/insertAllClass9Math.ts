import { supabase } from "@/integrations/supabase/client";
import { class9MathNCERT } from "./class9MathNCERT";

export const insertClass9MathNCERT = async () => {
  try {
    console.log("Starting Class 9 Math NCERT insertion...");
    console.log("Total questions to insert:", class9MathNCERT.length);

    const { data, error } = await supabase
      .from("ncert_solutions")
      .insert(class9MathNCERT);

    if (error) {
      console.error("Error inserting Class 9 Math NCERT:", error);
      throw error;
    }

    console.log("✅ Successfully inserted Class 9 Math NCERT solutions");
    return {
      success: true,
      count: class9MathNCERT.length,
      message: `Inserted ${class9MathNCERT.length} Class 9 Math NCERT solutions`,
    };
  } catch (error) {
    console.error("Failed to insert Class 9 Math NCERT:", error);
    return {
      success: false,
      count: 0,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
