import { supabase } from '@/lib/supabase';
import { Like } from '@/types/database.types';

export const getLikesCount = async (projectId: string): Promise<number> => {
  const { count, error } = await supabase
    .from('likes')
    .select('*', { count: 'exact', head: true })
    .eq('project_id', projectId);

  if (error) throw new Error(error.message);
  return count || 0;
};

export const toggleLike = async (projectId: string, userId: string): Promise<boolean> => {
  const { data: existingLike } = await supabase
    .from('likes')
    .select()
    .eq('project_id', projectId)
    .eq('user_id', userId)
    .maybeSingle();

  if (existingLike) {
    await supabase.from('likes').delete().eq('id', existingLike.id);
    return false;
  } else {
    await supabase.from('likes').insert({ project_id: projectId, user_id: userId });
    return true;
  }
};