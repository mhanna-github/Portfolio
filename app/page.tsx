import { createClient } from "@/prismicio";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Links } from "./components/Links";
import { Hero } from "./components/Hero";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");
  

  const projects = page.data.projects.map(project => ({
    title: project.title || "Projects",
    link: project.project_link?.text || "#",
    name: project.projects_name || "",
    image: project.project_image?.url || "/default-image.jpg",
    frameworks: project.frameworks || "",
    about: project.project_about || ""
}));

  const links = page.data.links.map(link => ({
    title: link.link_title || "Links",
    link: link.link?.text || "#",
    name: link.link_name || ""
  }));

  
  return (
    <main className='min-h-[100dvh] w-full overflow-x-hidden overflow-overlay z-[999] position relative flex justify-center items-center font-space-mono'>
      <div className='flex flex-col w-[528px] px-4 py-10'>
        <Hero 
            title={page.data.hero_title}
            location={page.data.hero_location}
            hero_position_1={page.data.hero_position_1}
            hero_position_2={page.data.hero_position_2}
        />
        <About title={page.data.about_title} text={page.data.about_text} />
        <Projects projects={projects} />
        <Links 
            title={page.data.links_title} 
            links={links} 
        />
      </div>
    </main>
  );
}
