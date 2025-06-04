import { useSession } from '@supabase/auth-helpers-react';
import { useLikes, useToggleLike } from '@/hooks/useLikes';

interface Props {
  projectId: string;
}

export const LikeButton = ({ projectId }: Props) => {
  const session = useSession();
  const { data: likesCount } = useLikes(projectId);
  const { mutate: toggleLike } = useToggleLike(projectId);

  return (
    <button
      onClick={() => session?.user?.id && toggleLike(session.user.id)}
      disabled={!session}
      className="flex items-center gap-1"
    >
      ❤️ {likesCount}
    </button>
  );
};