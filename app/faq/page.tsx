"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ChevronDown,
  Mail,
  ExternalLink,
  HelpCircle,
  Briefcase,
  GraduationCap,
  Clock,
  DollarSign,
  FileCheck,
  Calendar,
  FileText,
} from "lucide-react"

// FAQ Item component with accordion functionality
const FAQItem = ({ question, answer, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <button
        className="w-full text-left p-6 flex items-start justify-between focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-start">
          <div className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold font-tomato pr-8">{question}</h3>
        </div>
        <ChevronDown
          className={`h-6 w-6 text-wet-blue transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 pt-0 pl-18 border-t border-gray-100">
          <div className="pl-12">{typeof answer === "string" ? <p className="text-gray-700">{answer}</p> : answer}</div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  // FAQ data with questions, answers and icons
  const faqItems = [
    {
      question: "Qu'est-ce que le contrat d'apprentissage ?",
      answer:
        "C'est un contrat de travail combinant formation théorique et pratique, permettant d'obtenir un diplôme ou un titre professionnel reconnu.",
      icon: FileText,
    },
    {
      question: "Qui peut devenir apprenti ?",
      answer: (
        <div>
          <p className="mb-2">Toute personne :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Âgée de 16 à 29 ans.</li>
            <li>
              De plus de 29 ans si dérogation (travailleur handicapé, sportif de haut niveau, projet entrepreneurial).
            </li>
          </ul>
        </div>
      ),
      icon: GraduationCap,
    },
    {
      question: "Quels employeurs peuvent recruter des apprentis ?",
      answer: "Toutes les entreprises privées, quel que soit leur secteur ou leur taille.",
      icon: Briefcase,
    },
    {
      question: "Quels types de contrats sont éligibles ?",
      answer: "Les CDD ou CDI d'une durée minimum de 12 mois.",
      icon: FileCheck,
    },
    {
      question: "Quels avantages pour l'employeur ?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Exonération de charges sociales.</li>
          <li>Aide financière de 500 € par apprenti.</li>
          <li>Personnel formé et qualifié sur mesure.</li>
        </ul>
      ),
      icon: DollarSign,
    },
    {
      question: "Quels bénéfices pour l'apprenti ?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Formation rémunérée et reconnue.</li>
          <li>Revenus exonérés d'impôt jusqu'à 20 000 €.</li>
          <li>Flexibilité grâce au distanciel.</li>
        </ul>
      ),
      icon: GraduationCap,
    },
    {
      question: "Comment se déroule la formation ?",
      answer: "En alternance, avec des cours théoriques (en présentiel ou à distance) et une pratique en entreprise.",
      icon: Clock,
    },
    {
      question: "Les formations sont-elles accessibles aux personnes en situation de handicap ?",
      answer: "Oui, un référent handicap est dédié pour garantir un accompagnement adapté.",
      icon: HelpCircle,
    },
    {
      question: "Quels sont les modes de financement possibles ?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Prise en charge par l'OPCO de l'entreprise d'accueil.</li>
          <li>Financement personnel pour les candidats souhaitant investir dans leur avenir.</li>
          <li>Aides via France Travail pour les demandeurs d'emploi.</li>
          <li>
            Autres dispositifs publics ou privés, selon les situations, n'hésitez pas à nous contacter pour en discuter.
          </li>
        </ul>
      ),
      icon: DollarSign,
    },
    {
      question: "Est-il possible de faire valider des compétences déjà acquises ?",
      answer: "Oui, certaines formations permettent une Validation des Acquis de l'Expérience (VAE).",
      icon: FileCheck,
    },
    {
      question: "Quels sont les horaires et la charge de travail en alternance ?",
      answer:
        "En entreprise, les horaires respectent les règles classiques du Code du travail. En formation, l'emploi du temps est adapté pour permettre un équilibre (la formation correspond à 7 heures par semaine à répartir comme vous le souhaitez).",
      icon: Calendar,
    },
    {
      question: "Quels documents dois-je fournir pour candidater ?",
      answer: "Un CV, une pièce d'identité, un justificatif de sécurité sociale, et le dernier diplôme obtenu.",
      icon: FileText,
    },
    {
      question: "Y a-t-il des conditions pour suivre la formation en distanciel ?",
      answer:
        "Une tablette fournie par WeTEACH, une connexion internet stable, et un espace calme suffisent pour suivre les cours en ligne.",
      icon: HelpCircle,
    },
    {
      question: "Comment candidater ?",
      answer: "Contactez-nous via le formulaire de contact.",
      icon: HelpCircle,
    },
  ]

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px]">
        <Image
          src="/job-seeker-1300x1300.png?height=1200&width=2000"
          alt="WeTeach - FAQ"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tomato text-white">
                Foire aux questions<span className="text-wet-macadamia">.</span>
              </h1>
              <p className="text-xl text-white">Toutes les informations clés au sujet de WeTEACH</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-red-100">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-center font-tomato">Foire aux Questions (FAQ)</h2>
              <p className="text-gray-700 text-center mb-8">
                Retrouvez les réponses aux questions les plus fréquemment posées sur WeTeach et nos formations.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vous avez d'autres questions Section */}
      <section className="py-16 md:py-24 bg-wet-redwood text-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5 text-center">
          <h2 className="text-3xl font-semibold mb-6 font-tomato">Vous avez d'autres questions ?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Nous sommes à votre écoute via notre formulaire de contact ou par téléphone ! Notre équipe est à votre
            disposition pour répondre à toutes vos interrogations concernant nos formations et le processus
            d'apprentissage.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:contact@we-teach.fr"
              className="bg-white text-wet-redwood py-4 px-10 rounded-md hover:bg-gray-100 transition-colors font-medium w-full md:w-auto flex items-center justify-center"
            >
              <Mail className="mr-2" size={18} /> Contactez-nous
            </a>
            <a
              href="/Brochure-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white py-4 px-10 rounded-md hover:bg-white hover:text-wet-redwood transition-colors font-medium w-full md:w-auto flex items-center justify-center"
            >
              <ExternalLink className="mr-2" size={18} /> Notre brochure
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

