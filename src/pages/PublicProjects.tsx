import { usePublicProjects } from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';

export default function PublicProjects() {
  const { data: projects, isLoading, error } = usePublicProjects();

  if (isLoading) return <p>Cargando proyectos...</p>;
  if (error) return <p>Error al cargar proyectos.</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects?.map((project: any) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
