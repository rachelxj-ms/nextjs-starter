import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';

const Home = () => (
  <div className="home">
    <h1>What Can I Deploy to Static Apps?</h1>
    <h2><a href="/api/message?name=World">Hello, World</a></h2>
    <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return <SmallCard key={project.id} Icon={Icon} title={project.name} slug={project.slug} />;
      })}
    </div>
    
  </div>
);

export default Home;
