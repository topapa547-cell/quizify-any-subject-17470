import { supabase } from "@/integrations/supabase/client";
import { class10SocialScienceNCERT } from "./class10SocialScienceNCERT";
import { class10SocialScienceInText } from "./class10SocialScienceInText";

export const insertClass10SocialScienceComplete = async () => {
  try {
    console.log("🚀 Starting Class 10 Social Science NCERT Solutions insertion...");
    
    // Combine all questions (exercise + in-text)
    const allQuestions = [
      ...class10SocialScienceNCERT,
      ...class10SocialScienceInText
    ];
    
    console.log(`📊 Total questions to insert: ${allQuestions.length}`);
    console.log(`   - Exercise questions: ${class10SocialScienceNCERT.length}`);
    console.log(`   - In-text questions: ${class10SocialScienceInText.length}`);
    
    let successCount = 0;
    let errorCount = 0;
    const batchSize = 50;
    
    // Insert in batches of 50
    for (let i = 0; i < allQuestions.length; i += batchSize) {
      const batch = allQuestions.slice(i, i + batchSize);
      
      // Remove 'id' field from each question to let database auto-generate UUIDs
      const batchWithoutIds = batch.map((question: any) => {
        const { id, ...rest } = question;
        return rest;
      });
      
      const { data, error } = await supabase
        .from('ncert_solutions')
        .insert(batchWithoutIds);
      
      if (error) {
        console.error(`❌ Error inserting batch ${i / batchSize + 1}:`, error);
        errorCount += batch.length;
      } else {
        console.log(`✅ Batch ${i / batchSize + 1} inserted successfully (${batch.length} questions)`);
        successCount += batch.length;
      }
    }
    
    console.log("\n📈 Insertion Summary:");
    console.log(`   ✅ Successfully inserted: ${successCount} questions`);
    console.log(`   ❌ Failed: ${errorCount} questions`);
    console.log(`   📊 Total: ${allQuestions.length} questions`);
    
    return {
      success: errorCount === 0,
      total: allQuestions.length,
      successCount,
      errorCount
    };
    
  } catch (error) {
    console.error("💥 Fatal error during insertion:", error);
    throw error;
  }
};
