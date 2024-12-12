import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();
  const { data: teste} = await supabase.from("apichecker_rooms").select();

  return (
    <>
        <pre>{JSON.stringify(notes, null, 2)}</pre>
        <pre>{JSON.stringify(teste, null, 2)}</pre>
    </>
  );
}