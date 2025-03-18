import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, CheckCircle, BookOpen, Award, Building, Users } from "lucide-react"

export default function QuiSommesNous() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        <Image
          src="/classroom-1536x918.png?height=1200&width=2000"
          alt="WeTeach - Qui sommes-nous"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tomato text-white">
                Qui sommes-nous<span className="text-wet-macadamia">?</span>
              </h1>
              <p className="text-xl text-white mb-8">
                Découvrez notre centre de formation pour apprentis (CFA) WeTEACH
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Pédagogie Section */}
      <section className="py-16 md:py-20 bg-red-100">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold font-tomato">Notre Pédagogie</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                WeTeach s'appuie sur une pédagogie innovante et flexible, permettant à chaque apprenant de progresser à
                son rythme. Nous combinons :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 text-wet-blue mr-2 flex-shrink-0 mt-0.5">✓</div>
                  <span>Cours en présentiel ou en distanciel animés par des formateurs experts.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 text-wet-blue mr-2 flex-shrink-0 mt-0.5">✓</div>
                  <span>
                    Accompagnement digital complet avec des outils modernes, y compris une tablette fournie pour les
                    apprentis.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 text-wet-blue mr-2 flex-shrink-0 mt-0.5">✓</div>
                  <span>Méthodes interactives favorisant la participation et l'engagement.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/pexels-divinetechygirl-1181534-2.jpg?height=800&width=600"
                alt="Notre pédagogie chez WeTeach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos certifications Section */}
      <section className="py-16 md:py-20 bg-red-100">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold font-tomato">Nos certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden h-80 text-white p-8 flex flex-col justify-between">
              <Image
                src="/qsn3-1536x1536.png?height=400&width=600"
                alt="Certification Qualiopi"
                fill
                className="object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-wet-blue/80 z-10"></div>
              <div className="relative z-20">
                <Award className="h-12 w-12 mb-4 text-wet-macadamia" />
                <h3 className="text-2xl font-semibold mb-3">Certification Qualiopi</h3>
                <p className="text-sm text-white/90">
                  Garantissant une qualité optimale dans nos processus de formation.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-80 text-white p-8 flex flex-col justify-between">
              <Image
                src="/qsn3-1536x1536.png?height=400&width=600"
                alt="Agrément ministériel"
                fill
                className="object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-wet-redwood/80 z-10"></div>
              <div className="relative z-20">
                <CheckCircle className="h-12 w-12 mb-4 text-wet-macadamia" />
                <h3 className="text-2xl font-semibold mb-3">Agrément ministériel</h3>
                <p className="text-sm text-white/90">
                  Agréé par le Ministère du Travail, du Plein Emploi et de l'Insertion, confirmant notre statut d'acteur
                  fiable.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-80 text-wet-blue p-8 flex flex-col justify-between">
              <Image
                src="/qsn3-1536x1536.png?height=400&width=600"
                alt="Titres RNCP"
                fill
                className="object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-wet-macadamia/80 z-10"></div>
              <div className="relative z-20">
                <Award className="h-12 w-12 mb-4 text-wet-blue" />
                <h3 className="text-2xl font-semibold mb-3">Titres RNCP</h3>
                <p className="text-sm text-gray-800">
                  Des titres RNCP répertoriés par France Compétences, attestant la valeur du parcours diplômant que nous
                  proposons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locaux et équipements Section */}
      <section className="py-16 md:py-20 bg-red-100">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold font-tomato">Locaux et équipements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 bg-wet-blue rounded-full flex items-center justify-center text-white mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-tomato">Accueil administratif</h3>
              <p className="text-gray-600">
                Un accueil administratif accessible et des équipes disponibles par téléphone, par e-mail et en visio.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 bg-wet-redwood rounded-full flex items-center justify-center text-white mb-4">
                <Building className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-tomato">Formation en entreprise</h3>
              <p className="text-gray-600">
                La possibilité pour nos formateurs de se déplacer au sein des entreprises partenaires pour les groupes
                de plus de 15 apprentis.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 bg-wet-macadamia rounded-full flex items-center justify-center text-gray-800 mb-4">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-tomato">Supports pédagogiques</h3>
              <p className="text-gray-600">Des supports de formations complets et régulièrement mis à jour.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos engagements Section */}
      <section className="py-16 md:py-20 bg-red-100">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold font-tomato">Nos engagements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/qsn4-1536x1536.png?height=800&width=600"
                alt="Nos engagements chez WeTeach"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-wet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 font-tomato">Accessibilité universelle</h3>
                    <p className="text-gray-600">
                      Des formations ouvertes aux salariés, étudiants et demandeurs d'emploi.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-wet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 font-tomato">Solutions de financement adaptées</h3>
                    <p className="text-gray-600">Jusqu'à 100% des frais de formation pris en charge.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-wet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 font-tomato">Impact social et environnemental</h3>
                    <p className="text-gray-600">En promouvant le développement durable et l'inclusion.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-wet-blue text-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold font-tomato">Infos pratiques et contact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg">
              <Phone className="h-12 w-12 mb-4 text-wet-macadamia" />
              <h3 className="text-xl font-semibold mb-3 font-tomato">Téléphone</h3>
              <a href="tel:+33624529805" className="text-white hover:text-wet-macadamia transition-colors">
                +33 6 24 52 98 05
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg">
              <Mail className="h-12 w-12 mb-4 text-wet-macadamia" />
              <h3 className="text-xl font-semibold mb-3 font-tomato">E-mail</h3>
              <a href="mailto:contact@we-teach.fr" className="text-white hover:text-wet-macadamia transition-colors">
                contact@we-teach.fr
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg">
              <MapPin className="h-12 w-12 mb-4 text-wet-macadamia" />
              <h3 className="text-xl font-semibold mb-3 font-tomato">Adresse</h3>
              <address className="not-italic">
                2-4 Bd du Général de Gaulle,
                <br />
                94270 Le Kremlin-Bicêtre, France
              </address>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/nos-formations"
              className="bg-wet-macadamia text-wet-blue py-3 px-8 rounded-md hover:bg-amber-200 transition-colors font-medium inline-block"
            >
              Découvrir nos formations
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

