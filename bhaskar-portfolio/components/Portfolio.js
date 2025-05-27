
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      <header className="text-center space-y-3 animate-fade-in">
        <h1 className="text-4xl font-extrabold tracking-tight">Bhaskar Chowdary Chundru</h1>
        <p className="text-lg text-gray-600">Clinical SAS Programmer | Pharmacist | AI Enthusiast | Healthcare Tech Innovator | Future Pharma Entrepreneur</p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:bchowdary78@gmail.com" aria-label="Email"><Mail className="hover:text-blue-500" /></a>
          <a href="https://www.linkedin.com/in/bchowdary78" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="hover:text-blue-600" /></a>
          <a href="https://bhaskar-chowdary-q04avpk.gamma.site/" target="_blank" rel="noopener noreferrer" aria-label="Website"><Globe className="hover:text-green-600" /></a>
        </div>
      </header>
      <div className="mt-10 text-center">[...Your Portfolio Sections Here...]</div>
    </div>
  );
}
