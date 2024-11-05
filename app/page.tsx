import Image from "next/image"
import ProfilePic from "/assets/images/profile-pic.jpg"
import Cta from "@/components/Cta";
import Chip from "@/components/Chip";
import { SKILLS } from "@/data/skills";
import { PROJECTS } from "@/data/projects";
import Card from "@/components/Card";
import Slide from "@/components/Slide";
import { WORKFLOW } from "@/data/workflow";
import SendIcon from "@/assets/icons/send.svg";
import DownloadIcon from "@/assets/icons/download.svg";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col p-6">
      {/* Hero */}
      <section className="flex flex-col justify-center items-center space-y-6 min-h-svh py-24">
        <Image src={ProfilePic} alt="Matteo Peroni" width={200} height={200} className="size-[200px] object-cover rounded-full" />
        <div className="max-w-xl space-y-6">
          <h1 className="font-title text-center text-3xl">Ciao 👋, sono Matteo Peroni</h1>
          <h2 className="title-gradient text-center text-4xl lg:text-6xl">Web Designer e Sviluppatore Web</h2>
          <p className="font-text text-center text-xl">Ho un'esperienza di 10 anni nel mondo della programmazione web. Utilizzo le ultime tecnologie per sviluppare prodotti altamente performanti. Non smetto mai di essere aggiornato sulle ultime tendenze del web e del mondo dello sviluppo.</p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            <Cta label="Contattami" link="#contatti">
              <SendIcon className="size-6" />
            </Cta>
            <Cta label="Download CV" link="https://github.com/MatteoPeroniDev" target="_blank">
              <DownloadIcon className="size-6" />
            </Cta>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="max-w-xl space-y-6">
          <h2 className="font-title text-center text-4xl">Di più su di me 🧑‍💻</h2>
          <p className="font-text text-xl">
            Sono un appassionato sviluppatore web full stack con 10 anni di esperienza nella creazione di applicazioni web belle e funzionali.
            Il mio viaggio nella tecnologia è iniziato con la curiosità per come funzionano le cose su Internet e si è evoluto in una carriera appagante in cui riesco a dare vita alle idee attraverso il codice.
            <br />
            <br />
            Quando non sto programmando, puoi trovarmi ad esplorare nuovi sentieri escursionistici o a sperimentare nuove ricette in cucina.
          </p>
        </div>
      </section>
      {/* Skills */}
      <section id="skills" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="max-w-xl space-y-6">
          <h2 className="font-title text-center text-4xl">Cosa so fare 💪</h2>
          <div className="flex gap-6 flex-wrap justify-center">
            {
              SKILLS.map((skill, index) => (
                <Chip key={index} label={skill.name} />
              ))
            }
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="space-y-6">
          <h2 className="font-title text-center text-4xl">I miei progetti 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              PROJECTS.map((project, index) => (
                <Card key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
              ))
            }
          </div>
        </div>
      </section>
      {/* Workflow */}
      <section id="workflow" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="space-y-6">
          <h2 className="font-title text-center text-4xl">Il mio workflow 🛠️</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW.map((slide, index) => (
              <Slide key={index} title={slide.title} description={slide.description} icon={slide.icon} />
            ))}
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contacts" className="flex flex-col justify-center items-center space-y-6 pb-24">
        <div className="space-y-6">
          <h2 className="font-title text-center text-4xl">Mettiamoci in contatto 📲</h2>
          <ContactForm />
        </div>
      </section>
      { /* Footer */}
      <footer id="contatti" className="flex flex-col justify-center items-center pt-40 pb-4 text-foreground-muted">
        <p>© {new Date().getFullYear()} Matteo Peroni. All rights reserved.</p>
      </footer>
    </main>
  );
}
