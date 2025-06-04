import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getLikesCount, toggleLike } from '@/services/likes.service';

export const useLikes = (projectId: string) => {
  return useQuery(['likes', projectId], () => getLikesCount(projectId));
};

export const useToggleLike = (projectId: string) => {
  const queryClient = useQueryClient();
  
  return useMutation(
    (userId: string) => toggleLike(projectId, userId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['likes', projectId]);
      }
    }
  );
};