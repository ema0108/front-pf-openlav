import { useLikeProject } from '../hooks/useSocial';

interface Project {
  id: string;
  title: string;
  description: string;
  featured_image: string;
  likes?: { count: number }[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const likeMutation = useLikeProject();

  const handleLike = () => {
    likeMutation.mutate(project.id);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <img 
        src={project.featured_image} 
        alt={project.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-bold mt-2">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>

      <div className="flex items-center mt-4">
        <button onClick={handleLike} className="flex items-center text-red-500 font-bold">
          ❤️ {project.likes?.[0]?.count || 0}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
