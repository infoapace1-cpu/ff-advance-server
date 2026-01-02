import { FileText, Shield, Zap, AlertTriangle, Download, Smartphone, Key, Map, User, Crosshair, Check, X, Trophy, Star } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Register', href: '#register' },
  { name: 'Install', href: '#install' },
  { name: 'Eligibility', href: '#eligibility' },
  { name: 'FAQ', href: '#faq' },
];

export const FEATURES = [
  {
    icon: User,
    title: "New Characters",
    description: "The FF Advance Server allows players to communicate with other skilled players and developers."
  },
  {
    icon: Shield,
    title: "Report Bugs",
    description: "Players will be able to denote and report bugs in the game."
  },
  {
    icon: FileText,
    title: "Provide Feedback",
    description: "Players can provide feedback about their impressions regarding the new content."
  },
  {
    icon: Star,
    title: "Game Improvements",
    description: "Furnish suggestions for improving the game and what needs to be added."
  },
  {
    icon: Trophy,
    title: "Earn Rewards",
    description: "Assist developers and become liable to receive 1000 diamonds for finding bugs."
  }
];

export const APK_INFO = {
  appName: "FF Advance Server",
  version: "OB51",
  fileSize: "714 MB",
  platform: "Android",
  requirement: "Android 8.0 and up",
  lastUpdated: "09.26.2025",
  downloads: "14.2 million",
  publisher: "Free Fire",
  category: "Action, Game",
  price: "Free"
};

export const INSTALL_STEPS = [
  {
    title: "Download APK",
    desc: "First of all, go to the Free Fire Advance Server menu and download the APK file.",
    icon: Download
  },
  {
    title: "Open File",
    desc: "After locating the APK file in your device’s storage, click on it. Follow the prompts on the screen to continue installing the Free Fire Advanced Server.",
    icon: FileText
  },
  {
    title: "Allow Permissions",
    desc: "You might be asked to allow certain permissions to proceed with the installation. Grant them and continue installing the APK.",
    icon: Shield
  },
  {
    title: "Open App",
    desc: "Once the APK has finished installing, proceed to opening the Free Fire Advanced Server APK.",
    icon: Zap
  }
];

export const FAQS = [
  {
    question: "What is the FF Advance Server APK?",
    answer: "FF Advance Sever is a program created by Free Fire that allows players to test out new and fresh content before it is released to the general public."
  },
  {
    question: "What rewards can I get from participating in the FF Advance Server program?",
    answer: "You can earn rewards like 1000 diamonds by locating and reporting bugs in the FF Advance Server program."
  },
  {
    question: "Do I have to report bugs and provide feedback while using FF Advance Server?",
    answer: "Yes, users are expected to provide feedback. You might be kicked out of the program if you don't."
  },
  {
    question: "Can I invite my friends over to the FF Advance Server?",
    answer: "No, you cannot invite other players. Access is restricted to selected registrants with a unique activation code."
  },
  {
    question: "Can any player participate in the FF Advance Server program?",
    answer: "No, you must be 18+, have a valid FB/Gmail account linked to Free Fire, be an expert player, and reside in a supported region."
  }
];