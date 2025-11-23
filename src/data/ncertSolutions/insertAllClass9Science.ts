import { supabase } from "@/integrations/supabase/client";
import { class9ScienceNCERT } from "./class9ScienceNCERT";

export const insertClass9ScienceNCERT = async () => {
  try {
    console.log("Starting Class 9 Science NCERT insertion...");
    console.log("Total questions to insert:", class9ScienceNCERT.length);

    const { data, error } = await supabase
      .from("ncert_solutions")
      .insert(class9ScienceNCERT);

    if (error) {
      console.error("Error inserting Class 9 Science NCERT:", error);
      throw error;
    }

    console.log("✅ Successfully inserted Class 9 Science NCERT solutions");
    return {
      success: true,
      count: class9ScienceNCERT.length,
      message: `Inserted ${class9ScienceNCERT.length} Class 9 Science NCERT solutions`,
    };
  } catch (error) {
    console.error("Failed to insert Class 9 Science NCERT:", error);
    return {
      success: false,
      count: 0,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
