import { supabase } from "@/integrations/supabase/client";
import { class10ITNCERTSolutions } from "./class10ITNCERT";
import { class9ITNCERTSolutions } from "./class9ITNCERT";

export const insertClass10ITNCERT = async () => {
  const solutions = class10ITNCERTSolutions;
  let successCount = 0;
  let errorCount = 0;

  // Insert in batches of 50
  const batchSize = 50;
  for (let i = 0; i < solutions.length; i += batchSize) {
    const batch = solutions.slice(i, i + batchSize);
    
    const { error } = await supabase
      .from("ncert_solutions")
      .insert(batch);

    if (error) {
      console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
      errorCount += batch.length;
    } else {
      successCount += batch.length;
      console.log(`✅ Batch ${i / batchSize + 1} inserted successfully`);
    }
  }

  return {
    success: errorCount === 0,
    total: solutions.length,
    successCount,
    errorCount
  };
};

export const insertClass9ITNCERT = async () => {
  const solutions = class9ITNCERTSolutions;
  let successCount = 0;
  let errorCount = 0;

  // Insert in batches of 50
  const batchSize = 50;
  for (let i = 0; i < solutions.length; i += batchSize) {
    const batch = solutions.slice(i, i + batchSize);
    
    const { error } = await supabase
      .from("ncert_solutions")
      .insert(batch);

    if (error) {
      console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
      errorCount += batch.length;
    } else {
      successCount += batch.length;
      console.log(`✅ Batch ${i / batchSize + 1} inserted successfully`);
    }
  }

  return {
    success: errorCount === 0,
    total: solutions.length,
    successCount,
    errorCount
  };
};
