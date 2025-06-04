import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClient';

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (project: any) => {
      const { data, error } = await supabase.from('projects').insert(project).select();
      if (error) throw error;
      return data[0];
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    }
  });
};

export const useUserProjects = (userId: string | null) => {
  return useQuery({
    queryKey: ['projects', userId],
    queryFn: async () => {
      const { data, error } = await supabase.from('projects').select('*').eq('user_id', userId);
      if (error) throw error;
      return data;
    },
    enabled: !!userId
  });
};

export const usePublicProjects = () => {
  return useQuery({
    queryKey: ['publicProjects'],
    queryFn: async () => {
      const { data, error } = await supabase.from('projects').select('*, user:profiles(*), likes(count)').eq('visibility', 'public');
      if (error) throw error;
      return data;
    }
  });
};
