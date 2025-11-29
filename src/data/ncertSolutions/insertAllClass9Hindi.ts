import { supabase } from "@/integrations/supabase/client";
import { class9HindiNCERTData } from './class9HindiNCERT';

export const insertClass9HindiNCERT = async () => {
  try {
    const processedData = class9HindiNCERTData.map(solution => ({
      class_level: 9,
      subject: 'hindi',
      chapter_number: solution.chapter_number,
      chapter_name: solution.chapter_name,
      chapter_name_english: solution.chapter_name_english,
      exercise_number: solution.exercise_number,
      question_number: solution.question_number,
      question_text: solution.question_text,
      question_text_english: solution.question_text_english,
      solution_text: solution.solution_text,
      solution_text_english: solution.solution_text_english,
      difficulty: solution.difficulty,
      marks: solution.marks,
      question_type: solution.question_type
    }));

    console.log(`Attempting to insert ${processedData.length} Class 9 Hindi NCERT solutions...`);

    const batchSize = 50;
    let successCount = 0;
    const errors: any[] = [];

    for (let i = 0; i < processedData.length; i += batchSize) {
      const batch = processedData.slice(i, i + batchSize);
      const { data, error } = await supabase
        .from('ncert_solutions')
        .insert(batch)
        .select();

      if (error) {
        console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
        errors.push({ batch: i / batchSize + 1, error: error.message });
      } else {
        successCount += batch.length;
        console.log(`Successfully inserted batch ${i / batchSize + 1} (${batch.length} solutions)`);
      }
    }

    return {
      success: errors.length === 0,
      total: processedData.length,
      successCount,
      errorCount: errors.length,
      errors
    };
  } catch (error: any) {
    console.error('Unexpected error during Class 9 Hindi NCERT insertion:', error);
    return {
      success: false,
      total: class9HindiNCERTData.length,
      successCount: 0,
      errorCount: 1,
      errors: [{ message: error.message }]
    };
  }
};
