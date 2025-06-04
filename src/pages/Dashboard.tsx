import { useEffect, useState } from 'react';
import { useUserProjects } from '../hooks/useProjects';
import { supabase } from '../lib/supabaseClient';
import ProjectCard from '../components/ProjectCard';

export default function Dashboard() {
  const [userId, setUserId] = useState<string | null>(null);
  const { data: projects, isLoading, error } = useUserProjects(userId);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserId(user.id);
    });
  }, []);

  if (!userId) return <p>Cargando usuario...</p>;
  if (isLoading) return <p>Cargando proyectos...</p>;
  if (error) return <p>Error al cargar tus proyectos</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects?.map((p: any) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  );
}
