import DrawIcon from "@/assets/icons/draw.svg";
import DevIcon from "@/assets/icons/dev.svg";
import GlobeIcon from "@/assets/icons/globe.svg";

interface IWorkflow {
  title: string;
  description: string;
  icon: any;
}

export const WORKFLOW: IWorkflow[] = [
  {
    title: "1. Planning & Design",
    description: "Inizio comprendendo i requisiti del progetto e creando wireframe e disegni dettagliati.",
    icon: <DrawIcon />,
  },
  {
    title: "2. Development",
    description: "Costruisco l'applicazione utilizzando le ultime tecnologie e le migliori pratiche nello sviluppo web.",
    icon: <DevIcon />,
  },
  {
    title: "3. Deployment",
    description: "Testo accuratamente l'applicazione e la distribuisco in tutto il mondo.",
    icon: <GlobeIcon />,
  },
];
