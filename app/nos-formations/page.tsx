import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Award, BookOpen, Users, Mail, ExternalLink } from "lucide-react"

export default function NosFormations() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        <Image
          src="/job-seeker-1300x1300.png?height=1200&width=2000"
          alt="WeTeach - Nos formations"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tomato text-white">
                Nos formations<span className="text-wet-macadamia">.</span>
              </h1>
              <p className="text-xl text-white mb-8">Montez en compétences et étendez vos perspectives d'avenir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 font-tomato">Notre approche pédagogique</h2>
            <p className="text-lg text-gray-700 mb-8">
              Chez WeTeach, nous croyons en une approche pédagogique qui combine théorie et pratique. Nos formations
              sont conçues pour vous donner les compétences et les connaissances nécessaires pour réussir dans votre
              domaine.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-wet-blue rounded-full flex items-center justify-center text-white mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-tomato">Apprentissage pratique</h3>
                <p className="text-gray-600 text-center">
                  Des projets concrets et des mises en situation professionnelle.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-wet-redwood rounded-full flex items-center justify-center text-white mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-tomato">Accompagnement personnalisé</h3>
                <p className="text-gray-600 text-center">Un suivi individuel pour garantir votre réussite.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-wet-macadamia rounded-full flex items-center justify-center text-gray-800 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-tomato">Diplômes reconnus</h3>
                <p className="text-gray-600 text-center">
                  Des certifications reconnues par l'État et les professionnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <h2 className="text-3xl font-semibold mb-12 text-center font-tomato">Découvrez nos formations</h2>

          {/* Formation 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-64 md:h-auto">
                <Image src="/assistant-650x650.png" alt="Assistant(e) de direction" fill className="object-cover" />
                <div className="absolute top-0 right-0 bg-wet-blue text-white px-4 py-2">BAC +2</div>
              </div>
              <div className="col-span-2 p-8">
                <h3 className="text-2xl font-semibold mb-4 font-tomato">Assistant(e) de direction</h3>
                <p className="text-gray-700 mb-6">
                  La formation Assistant(e) de direction (BAC +2) vous prépare à devenir un acteur clé dans le bon
                  fonctionnement des entreprises. Polyvalent(e) et indispensable, vous apprendrez à gérer efficacement
                  les tâches administratives, organisationnelles et de communication nécessaires à la direction.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Durée: 2 ans</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2" />
                    <span>RNCP 38667</span>
                  </div>
                </div>
                <Link
                  href="https://www.francecompetences.fr/recherche/rncp/38667/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-wet-blue hover:text-wet-redwood transition-colors"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Formation 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/negotiator-650x650.png"
                  alt="Négociateur technico-commercial"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-wet-blue text-white px-4 py-2">BAC +2</div>
              </div>
              <div className="col-span-2 p-8">
                <h3 className="text-2xl font-semibold mb-4 font-tomato">Négociateur technico-commercial</h3>
                <p className="text-gray-700 mb-6">
                  La formation Négociateur technico-commercial (BAC +2) a pour objectif de former des professionnels
                  capables de développer des relations commerciales, de négocier des contrats et de proposer des
                  solutions adaptées aux besoins des clients. Ce diplôme prépare les étudiants à intégrer des
                  environnements dynamiques et concurrentiels.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Durée: 2 ans</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2" />
                    <span>RNCP 39063</span>
                  </div>
                </div>
                <Link
                  href="https://www.francecompetences.fr/recherche/rncp/39063/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-wet-blue hover:text-wet-redwood transition-colors"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Formation 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/grapich-designer-650x650.png"
                  alt="Infographiste - Metteur en Page"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-wet-blue text-white px-4 py-2">BAC</div>
              </div>
              <div className="col-span-2 p-8">
                <h3 className="text-2xl font-semibold mb-4 font-tomato">Infographiste - Metteur en Page</h3>
                <p className="text-gray-700 mb-6">
                  La formation Infographiste – Metteur en Page (BAC) est conçue pour vous préparer à devenir un expert
                  en création graphique et mise en page. Ce programme vous permet de maîtriser les outils essentiels du
                  design graphique et de la publication afin de répondre aux besoins des entreprises et agences de
                  communication.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Durée: 1 an</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2" />
                    <span>RNCP 1267</span>
                  </div>
                </div>
                <Link
                  href="https://www.francecompetences.fr/recherche/rncp/1267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-wet-blue hover:text-wet-redwood transition-colors"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Formation 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/manager-650x650.png"
                  alt="Responsable de petite et moyenne structure"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-wet-blue text-white px-4 py-2">BAC +2</div>
              </div>
              <div className="col-span-2 p-8">
                <h3 className="text-2xl font-semibold mb-4 font-tomato">Responsable de petite et moyenne structure</h3>
                <p className="text-gray-700 mb-6">
                  La formation Responsable de Petite et Moyenne Structure (BAC +2) vous prépare à gérer et diriger une
                  organisation de petite ou moyenne taille. En tant que responsable polyvalent, vous apprendrez à
                  coordonner les différentes activités de votre structure tout en assurant son développement stratégique
                  et opérationnel.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Durée: 2 ans</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2" />
                    <span>RNCP 38575</span>
                  </div>
                </div>
                <Link
                  href="https://www.francecompetences.fr/recherche/rncp/38575/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-wet-blue hover:text-wet-redwood transition-colors"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Formation 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/food-crew-650x650.png"
                  alt="Employé polyvalent en restauration"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-wet-blue text-white px-4 py-2">CAP/BEP</div>
              </div>
              <div className="col-span-2 p-8">
                <h3 className="text-2xl font-semibold mb-4 font-tomato">Employé polyvalent en restauration</h3>
                <p className="text-gray-700 mb-6">
                  La formation Employé Polyvalent en Restauration (CAP/BEP) est conçue pour vous former aux métiers de
                  la restauration rapide, collective ou traditionnelle. Grâce à un programme alliant théorie et
                  pratique, vous apprendrez les bases indispensables pour intégrer rapidement le secteur de la
                  restauration.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Durée: 1 an</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2" />
                    <span>RNCP 38663</span>
                  </div>
                </div>
                <Link
                  href="https://www.francecompetences.fr/recherche/rncp/38663/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-wet-blue hover:text-wet-redwood transition-colors"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Formation 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/accountant-3650x650.png"
                  alt="Gestionnaire comptable et fiscal"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-wet-blue text-white px-4 py-2">BAC +2</div>
              </div>
              <div className="col-span-2 p-8">
                <h3 className="text-2xl font-semibold mb-4 font-tomato">Gestionnaire comptable et fiscal</h3>
                <p className="text-gray-700 mb-6">
                  La formation Gestionnaire Comptable et Fiscal (BAC +2) prépare des professionnels capables de gérer la
                  comptabilité, les obligations fiscales et financières d'une entreprise. Ce programme allie compétences
                  techniques et pratiques pour répondre aux besoins des entreprises, cabinets d'expertise comptable et
                  organismes publics.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Durée: 2 ans</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2" />
                    <span>RNCP 31677</span>
                  </div>
                </div>
                <Link
                  href="https://www.francecompetences.fr/recherche/rncp/31677/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-wet-blue hover:text-wet-redwood transition-colors"
                >
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-wet-redwood text-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5 text-center">
          <h2 className="text-3xl font-semibold mb-6 font-tomato">Prêt à vous former avec WeTeach ?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Rejoignez-nous et développez les compétences qui vous permettront de réussir dans votre carrière
            professionnelle.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/futur-apprenti"
              className="bg-white text-wet-redwood py-4 px-10 rounded-md hover:bg-gray-100 transition-colors font-medium w-full md:w-auto flex items-center justify-center"
            >
              <Mail className="mr-2" size={18} /> Candidater maintenant
            </Link>
            <a
              href="/Brochure-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white py-4 px-10 rounded-md hover:bg-white hover:text-wet-redwood transition-colors font-medium w-full md:w-auto flex items-center justify-center"
            >
              <ExternalLink className="mr-2" size={18} /> Télécharger la brochure
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

