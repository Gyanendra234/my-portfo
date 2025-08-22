import { Download, Mail, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Gyanendra_Kumar_Resume.pdf';
    link.click();
  };

  const handleGetInTouch = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center mb-6 shadow-xl">
            <TrendingUp className="w-16 h-16 text-white" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Gyanendra Kumar
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Data Analyst & Machine Learning Engineer
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Transforming data into insights with expertise in Python, Machine Learning, and advanced analytics. 
          Passionate about leveraging AI to solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleDownloadResume}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button 
            variant="outline"
            onClick={handleGetInTouch}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
