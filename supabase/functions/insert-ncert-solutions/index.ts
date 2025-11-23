import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.81.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NCERTSolution {
  subject: string;
  class_level: number;
  chapter_number: number;
  chapter_name: string;
  chapter_name_english?: string;
  exercise_number: string;
  question_number: string;
  question_type: string;
  question_text: string;
  question_text_english?: string;
  solution_text: string;
  solution_text_english?: string;
  marks: number;
  difficulty: string;
  ncert_page_number?: number;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('🚀 Starting NCERT Solutions Batch Insertion...');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Import data - we'll check what already exists first
    const { data: existingData, error: fetchError } = await supabase
      .from('ncert_solutions')
      .select('subject, class_level, chapter_number, question_number')
      .in('subject', ['social_science', 'english', 'hindi'])
      .eq('class_level', 10);

    if (fetchError) {
      console.error('Error fetching existing data:', fetchError);
    }

    const existingKeys = new Set(
      (existingData || []).map(
        (item: any) => `${item.subject}-${item.class_level}-${item.chapter_number}-${item.question_number}`
      )
    );

    console.log(`📊 Found ${existingKeys.size} existing questions in database`);

    const results = {
      socialScience: { total: 0, inserted: 0, skipped: 0, failed: 0 },
      english: { total: 0, inserted: 0, skipped: 0, failed: 0 },
      hindi: { total: 0, inserted: 0, skipped: 0, failed: 0 },
    };

    // Helper function to insert batch
    const insertBatch = async (
      questions: NCERTSolution[],
      subjectName: 'socialScience' | 'english' | 'hindi'
    ) => {
      console.log(`\n📚 Processing ${subjectName}: ${questions.length} questions`);
      results[subjectName].total = questions.length;

      const batchSize = 50;
      for (let i = 0; i < questions.length; i += batchSize) {
        const batch = questions.slice(i, i + batchSize);

        // Filter out duplicates
        const newQuestions = batch.filter((q) => {
          const key = `${q.subject}-${q.class_level}-${q.chapter_number}-${q.question_number}`;
          return !existingKeys.has(key);
        });

        if (newQuestions.length === 0) {
          console.log(`⏭️  Batch ${i / batchSize + 1}: All questions already exist, skipping`);
          results[subjectName].skipped += batch.length;
          continue;
        }

        // Remove id field to let database auto-generate UUIDs
        const batchWithoutIds = newQuestions.map(({ ...rest }) => rest);

        const { data, error } = await supabase.from('ncert_solutions').insert(batchWithoutIds);

        if (error) {
          console.error(`❌ Error in batch ${i / batchSize + 1}:`, error);
          results[subjectName].failed += newQuestions.length;
        } else {
          console.log(
            `✅ Batch ${i / batchSize + 1}: Inserted ${newQuestions.length} questions (skipped ${batch.length - newQuestions.length} duplicates)`
          );
          results[subjectName].inserted += newQuestions.length;
          results[subjectName].skipped += batch.length - newQuestions.length;
        }
      }
    };

    // Note: In a real implementation, you would import the actual data here
    // For now, this is a placeholder that shows the structure
    // You'll need to copy the data from your TypeScript files

    console.log('⚠️  Edge function created successfully!');
    console.log('📝 Next step: Add actual NCERT data to this function');
    console.log('💡 Data should be copied from:');
    console.log('   - insertAllClass10SocialScience.ts');
    console.log('   - insertAllClass10English.ts');
    console.log('   - insertAllClass10Hindi.ts');

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Edge function ready. Add NCERT data to complete implementation.',
        results,
        note: 'This is a template. Populate with actual data from your data files.',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('💥 Fatal error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
