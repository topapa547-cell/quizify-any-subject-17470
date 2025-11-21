import { supabase } from "@/integrations/supabase/client";
import { class10ScienceNCERT } from "./class10ScienceNCERT";
import { class10ScienceInTextNCERT } from "./class10ScienceInText";

export async function insertClass10ScienceComplete() {
  try {
    // Combine both exercise and in-text questions
    const allQuestions = [...class10ScienceNCERT, ...class10ScienceInTextNCERT];
    
    console.log(`📚 Inserting ${allQuestions.length} Class 10 Science NCERT solutions...`);
    console.log(`   - Exercise questions: ${class10ScienceNCERT.length}`);
    console.log(`   - In-text questions: ${class10ScienceInTextNCERT.length}`);
    
    // Insert in batches of 50 to avoid timeout
    const batchSize = 50;
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < allQuestions.length; i += batchSize) {
      const batch = allQuestions.slice(i, i + batchSize);
      
      const { data, error } = await supabase
        .from('ncert_solutions')
        .insert(batch);
      
      if (error) {
        console.error(`❌ Error inserting batch ${i / batchSize + 1}:`, error);
        errorCount += batch.length;
      } else {
        successCount += batch.length;
        console.log(`✅ Batch ${i / batchSize + 1} inserted successfully (${batch.length} questions)`);
      }
    }
    
    console.log(`\n🎉 Class 10 Science insertion complete!`);
    console.log(`   ✅ Success: ${successCount} questions`);
    console.log(`   ❌ Errors: ${errorCount} questions`);
    
    return { 
      success: errorCount === 0, 
      total: allQuestions.length,
      successCount,
      errorCount 
    };
  } catch (error) {
    console.error('❌ Error inserting Class 10 Science solutions:', error);
    return { success: false, error };
  }
}
