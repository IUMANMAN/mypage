import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase, Award, Globe } from "lucide-react";

// Resume data
const resumeData = {
  basics: {
    name: "Ziqiang Man",
    email: "my0sterick@gmail.com",
    phone: "925-524-9403",
    location: "Hayward, CA",
    linkedin: "https://www.linkedin.com/in/carl-man-239866249/",
    picture: "https://storage.rxresu.me/cmh9kl7w927eu8g5d6bnkrsyz/pictures/moo78q4ct26y0l96g7qpot9h.jpg",
    summary: "Self-motivated and meticulous team player with a passion for problem-solving. Proven ability to learn new concepts rapidly and deliver high-quality results in collaborative environments."
  },
  experience: [
    {
      company: "Alibaba Group",
      position: "Data Center Technician Intern",
      location: "Santa Clara, CA",
      date: "January 2025 - Present",
      highlights: [
        "On-Site Technical Support: Provide hands-on tech support to IDC customers, ensuring high service quality and rapid issue resolution.",
        "Server Maintenance & Troubleshooting: Perform regular maintenance on customer servers, including diagnosing hardware issues, repairs, and component replacements.",
        "Inventory & Documentation: Maintain complete inventory of all servers and parts, following documented procedures for all tasks.",
        "Vendor Coordination: Interact with outside server vendors and perform special projects as needed to support data center operations."
      ]
    },
    {
      company: "Rich Windows & Doors, Rigo Cabinets",
      position: "IT Technician",
      location: "Union City",
      date: "March 2024 - October 2024",
      highlights: [
        "Cross-Functional Collaboration & Process Optimization: Partnered with Sales, Accounting, and Factory teams to identify operational pain points and re-engineer workflows.",
        "Custom Software Development (ERP & Systems): Designed and developed critical internal tools, including a custom ERP system, factory tracking management system, and automated quotation system.",
        "IT Infrastructure & PLC Maintenance: Maintained and monitored company networks, servers, and factory PLC machinery.",
        "Digital Marketing & Web Management: Revamped the company website and executed digital marketing strategies via Meta Ads and Xiaohongshu."
      ]
    },
    {
      company: "GMS Audio Visual",
      position: "IT Technician",
      location: "Hayward, CA",
      date: "September 2023 - February 2024",
      highlights: [
        "Sensor Installation and Testing: Installed door sensors, glass break sensors, smoke detectors, flood detectors, and motion detectors.",
        "Network Cabling and Testing: Installed and tested network cables for sensors.",
        "Surveillance System Installation and Maintenance.",
        "Access Control System Installation and Maintenance."
      ]
    },
    {
      company: "Shanghai Xitu Information Technology",
      position: "Advertisement Associate",
      location: "Shanghai",
      date: "July 2021 - May 2023",
      highlights: [
        "Website Management: Designed, developed, optimized, and maintained website content and infrastructure.",
        "Marketing & Advertising: Planned, executed, and analyzed advertising campaigns across various platforms.",
        "Product Research & Selection: Conducted market research to identify and evaluate products.",
        "Data Analysis & Optimization: Collected, analyzed, and utilized data to optimize website and advertising performance."
      ]
    }
  ],
  education: {
    institution: "Jilin International Studies University",
    degree: "Bachelor of Literature",
    date: "June 2016 - June 2021"
  },
  skills: [
    {
      category: "Development & Cloud Architecture",
      items: ["React.js", "Next.js", "AWS", "Supabase", "Vercel", "Linux", "Git/GitHub", "Python"]
    },
    {
      category: "Data Analytics & AI",
      items: ["SQL", "ETL Pipelines", "Excel (Advanced)", "N8N (Automation)", "LLM", "Agentic AI", "RAG (Knowledge Base)", "Machine Learning", "Deep Learning"]
    },
    {
      category: "IT Infrastructure & Hardware",
      items: ["Network Administration (TCP/IP)", "PLC Systems", "Surveillance & Security Systems", "IoT Sensor Installation", "Server Maintenance", "Low Voltage Cabling"]
    },
    {
      category: "Digital Marketing & Creative Tools",
      items: ["Meta Ads", "Google Ads", "SEO/SEM", "Shopify", "WordPress", "QuickBooks", "Adobe Premiere Pro", "CapCut", "Canva"]
    }
  ],
  certifications: [
    "Google Data Analytics Certificate",
    "AWS Certified Cloud Practitioner",
    "AWS Certified AI Practitioner"
  ],
  languages: ["English", "Mandarin", "Korean"]
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
          <Image
            src={resumeData.basics.picture}
            alt={resumeData.basics.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{resumeData.basics.name}</h1>
            <p className="text-lg text-muted-foreground mt-2">{resumeData.basics.summary}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              {resumeData.basics.email}
            </a>
            <a href={`tel:${resumeData.basics.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              {resumeData.basics.phone}
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {resumeData.basics.location}
            </span>
            <a href={resumeData.basics.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className={index !== 0 ? "pt-6 border-t" : ""}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{exp.position}</h3>
                  <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-sm text-muted-foreground shrink-0">{exp.date}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="pl-4 border-l-2 border-primary/30">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {resumeData.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="font-medium mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Education & Certifications */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold">{resumeData.education.degree}</h3>
            <p className="text-muted-foreground">{resumeData.education.institution}</p>
            <p className="text-sm text-muted-foreground mt-1">{resumeData.education.date}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {resumeData.certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {cert}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Languages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Languages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            {resumeData.languages.map((lang) => (
              <Badge key={lang} variant="outline" className="text-base py-1 px-4">{lang}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
