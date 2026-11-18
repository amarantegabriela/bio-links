import {
  Instagram, Music2, Github, Linkedin, Mail, GraduationCap, Coffee, Code2,
  NotebookPen, Headphones, Tablet, Cog, Keyboard, Lamp, Link as LinkIcon,
  Armchair,
  Pen,
  Watch,
  Percent,
  Monitor,
  ShoppingBag,
  Sparkles,
  Terminal,
  BookOpen,
  Gift,
} from "lucide-react";

// Registre aqui novos ícones usados em data.js
export const icons = {
  Instagram, Music2, Github, Linkedin, Mail, GraduationCap, Coffee, Code2,
  NotebookPen, Headphones, Tablet, Cog, Keyboard, Lamp, Armchair, Pen, Watch, Percent, Monitor,
  ShoppingBag, Sparkles, Terminal, BookOpen, Gift
};

export const getIcon = (name) => icons[name] || LinkIcon;
