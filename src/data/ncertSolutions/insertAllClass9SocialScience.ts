import { supabase } from "@/integrations/supabase/client";
import { class9SocialScienceNCERTData } from "./class9SocialScienceNCERT";

export const insertClass9SocialScienceNCERT = async () => {
  try {
    console.log("Starting Class 9 Social Science NCERT insertion...");
    console.log("Total questions to insert:", class9SocialScienceNCERTData.length);

    // Process data to add required fields
    const processedData = class9SocialScienceNCERTData.map((item) => ({
      class_level: 9,
      subject: "social_science",
      chapter_number: item.chapter_number,
      chapter_name: item.chapter_name,
      chapter_name_english: item.chapter_name_english,
      exercise_number: item.exercise_number,
      question_number: item.question_number,
      question_text: item.question_text,
      question_text_english: item.question_text_english,
      solution_text: item.solution_text,
      solution_text_english: item.solution_text_english,
      difficulty: item.difficulty,
      marks: item.marks,
      question_type: item.question_type,
    }));

    let successCount = 0;
    let errorCount = 0;
    const errors: string[] = [];

    // Insert in batches of 50
    const batchSize = 50;
    for (let i = 0; i < processedData.length; i += batchSize) {
      const batch = processedData.slice(i, i + batchSize);
      
      const { data, error } = await supabase
        .from("ncert_solutions")
        .insert(batch);

      if (error) {
        console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
        errorCount += batch.length;
        errors.push(error.message);
      } else {
        console.log(`✅ Batch ${i / batchSize + 1} inserted successfully`);
        successCount += batch.length;
      }
    }

    console.log("✅ Class 9 Social Science NCERT insertion completed");
    return {
      success: errorCount === 0,
      total: processedData.length,
      successCount,
      errorCount,
      errors,
      message: `Inserted ${successCount} of ${processedData.length} Class 9 Social Science NCERT solutions`,
    };
  } catch (error) {
    console.error("Failed to insert Class 9 Social Science NCERT:", error);
    return {
      success: false,
      total: 0,
      successCount: 0,
      errorCount: class9SocialScienceNCERTData.length,
      errors: [error instanceof Error ? error.message : "Unknown error occurred"],
      message: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
