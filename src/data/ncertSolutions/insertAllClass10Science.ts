import { supabase } from "@/integrations/supabase/client";
import { class10ScienceNCERT } from "./class10ScienceNCERT";

export async function insertClass10ScienceNCERT() {
  try {
    const { data, error } = await supabase
      .from('ncert_solutions')
      .insert(class10ScienceNCERT);
    
    if (error) throw error;
    
    console.log('✅ Successfully inserted', class10ScienceNCERT.length, 'Class 10 Science NCERT solutions');
    return { success: true, count: class10ScienceNCERT.length };
  } catch (error) {
    console.error('❌ Error inserting Class 10 Science solutions:', error);
    return { success: false, error };
  }
}
