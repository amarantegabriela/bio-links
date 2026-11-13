import {
  Instagram, Music2, Github, Linkedin, Mail, GraduationCap, Coffee, Code2,
  NotebookPen, Headphones, Tablet, Cog, Keyboard, Lamp, Link as LinkIcon,
} from "lucide-react";

// Registre aqui novos ícones usados em data.js
export const icons = {
  Instagram, Music2, Github, Linkedin, Mail, GraduationCap, Coffee, Code2,
  NotebookPen, Headphones, Tablet, Cog, Keyboard, Lamp,
};

export const getIcon = (name) => icons[name] || LinkIcon;
