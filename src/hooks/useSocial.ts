import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClient';

export const useLikeProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (projectId: string) => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error('Debe iniciar sesión para dar like');

      const { error } = await supabase.from('likes').insert({ project_id: projectId, user_id: user.id });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['publicProjects'] });
    }
  });
};
