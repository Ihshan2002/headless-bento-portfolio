import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Goal, Trophy, Gamepad2, Github, Linkedin, Twitter, ExternalLink, Code2, Cpu } from 'lucide-react';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2024-02-14",
});

export const metadata = {
  title: "Ihshan | Lead Developer 2026",
  description: "Specializing in custom-coded eCommerce and Headless CMS architectures.",
};



const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function Home() {
  const profile = await client.fetch(`*[_type == "profile"][0]`, {}, { next: { revalidate: 60 } });
  const skills = await client.fetch(`*[_type == "skill"] | order(level desc)`, {}, { next: { revalidate: 60 } });
  const projects = await client.fetch(`*[_type == "project"]`, {}, { next: { revalidate: 60 } });
  const hobbies = await client.fetch(`*[_type == "hobby"]`, {}, { next: { revalidate: 60 } });

  return (
    <main className="min-h-screen w-full bg-[#020617] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      {/* Floating Navigation Dock */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full flex items-center gap-8 shadow-2xl">
        <a href="#" className="hover:text-cyan-400 transition-colors"><Cpu size={20} /></a>
        <a href="#projects" className="text-xs font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">Works</a>
        <a href="#hobbies" className="text-xs font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">Life</a>
        <div className="h-4 w-[1px] bg-white/10"></div>
        <div className="flex gap-4">
          <a href="https://github.com/Ihshan2002"><Github size={18} className="hover:text-cyan-400" /></a>
          <a href="#"><Linkedin size={18} className="hover:text-cyan-400" /></a>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        
        {/* --- HERO SECTION --- */}
        <header className="flex flex-col md:flex-row items-center gap-12 mb-32">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            {profile?.image && (
              <img
                src={urlFor(profile.image).width(400).height(400).url()}
                alt="Profile"
                className="relative w-56 h-56 rounded-[2.5rem] object-cover border border-white/10 grayscale hover:grayscale-0 transition duration-700 shadow-2xl"
              />
            )}
            <div className="absolute -bottom-4 -right-4 bg-white text-black text-[10px] font-black px-4 py-2 rounded-2xl tracking-[0.2em] uppercase shadow-xl">
              Lead '26
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white mb-6">
              {profile?.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <span className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-widest">
                {profile?.role}
              </span>
              <span className="text-slate-500 text-sm italic font-light">Based in Sri Lanka</span>
            </div>
            <p className="max-w-xl text-slate-400 text-xl leading-relaxed font-light">
              &quot;{profile?.bio}&quot;
            </p>
          </div>
        </header>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* STATS WIDGET (Top Full) */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
             {[
               { label: 'Experience', val: '2+ Yrs' },
               { label: 'Projects', val: projects?.length || '10+' },
               { label: 'Rating', val: '2200+' },
               { label: 'Commitment', val: '100%' }
             ].map((stat, i) => (
               <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-[2rem] text-center">
                 <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{stat.label}</p>
                 <p className="text-2xl font-bold text-white tracking-tight">{stat.val}</p>
               </div>
             ))}
          </div>

          {/* SKILLS BOX */}
          <section className="md:col-span-4 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-[3rem] p-10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Core Stack</h3>
              <Code2 size={16} className="text-cyan-500" />
            </div>
            <div className="space-y-6">
              {skills?.map((skill: any) => (
                <div key={skill._id} className="group cursor-default">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-slate-300 group-hover:text-cyan-400 transition">{skill.title}</span>
                    <span className="text-[10px] font-mono text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-600 to-blue-500 transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS GRID */}
          <div id="projects" className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects?.map((project: any) => (
              <div key={project._id} className="group relative bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:scale-[1.02] transition-all duration-500">
                <div className="p-10 flex flex-col h-full">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-cyan-500/10 rounded-2xl">
                      <ExternalLink size={20} className="text-cyan-400" />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">{project.title}</h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech?.map((t: string) => (
                      <span key={t} className="text-[9px] border border-white/10 bg-white/5 text-slate-300 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="w-full py-4 text-center border border-white/10 rounded-2xl text-[10px] uppercase font-black tracking-widest hover:bg-white hover:text-black transition-all">
                    View Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* HOBBY SECTION */}
          <div id="hobbies" className="md:col-span-12 space-y-6">
            {hobbies?.map((hobby: any) => (
              <section 
                key={hobby._id} 
                className="bg-white/5 border border-white/10 rounded-[3.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group"
              >
                <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-[15rem] pointer-events-none group-hover:opacity-[0.06] transition-all duration-700 rotate-12">
                   {hobby.emoji || "🎱"}
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/20">
                      {hobby.emoji || <Gamepad2 />}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white tracking-tighter lowercase">
                        /{hobby.name}
                      </h3>
                      <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em]">Personal Mastery</p>
                    </div>
                  </div>
                  <p className="text-slate-400 font-light max-w-2xl text-lg leading-relaxed">
                    {hobby.description}
                  </p>
                </div>

                <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 text-center min-w-[280px] backdrop-blur-3xl relative z-10 shadow-2xl">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mb-4">Verification</p>
                  <p className="text-white text-2xl font-bold mb-8 tracking-tight italic">
                    &quot;{hobby.awardTitle}&quot;
                  </p>
                  <a 
                    href={hobby.awardLink} 
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black text-xs font-black rounded-2xl hover:bg-cyan-400 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                  >
                    <span>EXPLORE STATS</span>
                    <Trophy size={14} />
                  </a>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="mt-40 pt-16 border-t border-white/5 flex flex-col items-center text-center gap-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white tracking-tighter">Let&apos;s build something bold.</h2>
            <p className="text-slate-500 font-light">Available for remote leadership roles and high-impact projects.</p>
          </div>
          <button className="px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-cyan-400 hover:scale-110 transition-all shadow-2xl">
            Get in touch
          </button>
          <div className="flex gap-12 text-slate-600 text-[10px] font-black uppercase tracking-widest mt-10">
             <a href="https://github.com/Ihshan2002" className="hover:text-white transition">Instagram</a>
             <a href="#" className="hover:text-white transition">Dribbble</a>
             <a href="#" className="hover:text-white transition">Read.cv</a>
          </div>
          <p className="text-[10px] text-slate-700 mt-10 pb-20">© 2026 {profile?.name}. All Rights Reserved.</p>
        </footer>

      </div>
    </main>
  );
}