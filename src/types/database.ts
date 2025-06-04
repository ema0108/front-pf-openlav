export type Profile = {
  id: string;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  created_at: string;
};

export type Project = {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  tags: string[] | null;
  visibility: 'public' | 'private';
  created_at: string;
};

export type Like = {
  id: string;
  project_id: string;
  user_id: string;
  created_at: string;
};