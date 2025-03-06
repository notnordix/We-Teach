import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Split layout */}
      <section className="flex flex-col md:flex-row">
        {/* Left side - Red background with title and description */}
        <div className="w-full md:w-3/5 relative flex items-center justify-center min-h-[90vh]">
          <Image
            src="/qsn4-1536x1536.png?height=1200&width=800"
            alt="WeTeach Hero Background"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-20 px-4 md:px-16 py-16 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-tomato text-white uppercase">
              Révélez votre potentiel avec WeTeach<span className="text-wet-macadamia">.</span>
            </h1>
            <p className="text-xl text-white">
              Depuis 2023, WeTeach redonne le plaisir d'apprendre et d'exercer les métiers du tertiaire grâce à des
              formations adaptées et accessibles.
            </p>
          </div>
        </div>

        {/* Right side - Images and links - Hidden on mobile */}
        <div className="hidden md:flex w-full md:w-2/5 flex-col min-h-[100vh]">
          {/* Images section */}
          <div className="grid grid-cols-2 h-[70vh]">
            <div className="relative overflow-hidden">
              <Image
                src="/pexels-divinetechygirl-1181534-2.jpg?height=600&width=500"
                alt="Formation WeTeach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/qsn2-1536x1536.png?height=600&width=500"
                alt="Apprentissage WeTeach"
                fill
                className="object-cover "
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>

          {/* Links section */}
          <div className="flex flex-row h-[30vh]">
            <Link
              href="/nos-formations"
              className="bg-wet-blue w-full h-full group flex items-center px-3 transition-all duration-300 hover:bg-wet-blue/90"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-wet-blue rounded-full flex items-center justify-center text-white mr-4 border-2 border-white">
                  <ArrowRight className="w-12 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Nos formations</h2>
                  <p className="text-white/80 hidden lg:block text-sm">
                    Découvrez nos formations certifiantes pour booster votre carrière.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/futur-apprenti"
              className="bg-wet-macadamia w-full h-full group flex items-center px-3 transition-all duration-300 hover:bg-wet-macadamia/90"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-wet-redwood rounded-full flex items-center justify-center text-white mr-4 border-2 border-white">
                  <ArrowRight className="w-12 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-wet-blue">Futur(e) apprenti(e)</h2>
                  <p className="text-wet-blue/80 hidden lg:block text-sm">
                    Montez en compétences et étendez vos perspectives d'avenir.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Qui sommes nous? Section - Redesigned with the requested style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="flex items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold font-tomato">Qui sommes nous?</h1>
            <Link
              href="/qui-sommes-nous"
              className="ml-auto group flex items-center justify-center w-12 h-12 rounded-full border-2 border-current hover:text-wet-blue hover:border-wet-blue transition-all duration-300"
              aria-label="En savoir plus sur qui sommes-nous"
            >
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 font-tomato leading-relaxed">
                Chez WeTeach, nous croyons en la puissance de la formation pour transformer des carrières et propulser
                des talents vers l'avenir. Agréé par le Ministère du Travail, du Plein Emploi et de l'Insertion et
                certifié Qualiopi.
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Nos formations accélérées – du CAP/BEP au Bac+2, en un an seulement – sont conçues pour être flexibles
                et accessibles.
                <br />
                En présentiel, nos professeurs sont là pour guider chaque apprenti ; en distanciel, ceux-ci bénéficient
                d'un accompagnement digital complet, avec une tablette fournie pour suivre les cours en ligne, peu
                importe leur localisation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nos parcours sont ouverts aux salariés, aux demandeurs d'emploi et aux étudiants, avec des solutions de
                financement et des prises en charge couvrant jusqu'à 100% des frais de formation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                S'engager dans la formation de ses équipes est un atout pour les entreprises, qui en retirent des
                bénéfices concrets et durables. En rejoignant WeTeach, les entreprises bénéficient de dispositifs
                d'allègement financier tout en renforçant un personnel qualifié, prêt à relever les défis de demain.
              </p>
            </div>
          </div>

          {/* 3 divided image containers in 1 row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="aspect-square relative overflow-hidden">
              <Image src="/image1.png?height=500&width=400" alt="WeTeach Image 1" fill className="object-cover" />
            </div>
            <div className="aspect-square relative overflow-hidden">
              <Image src="/image2.png?height=500&width=400" alt="WeTeach Image 2" fill className="object-cover" />
            </div>
            <div className="aspect-square relative overflow-hidden">
              <Image src="/image3.png?height=500&width=400" alt="WeTeach Image 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Nos formations Section - Simplified layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="flex items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold font-tomato">Nos formations</h1>
            <Link
              href="/nos-formations"
              className="ml-auto group flex items-center justify-center w-12 h-12 rounded-full border-2 border-current hover:text-wet-blue hover:border-wet-blue transition-all duration-300"
              aria-label="En savoir plus sur nos formations"
            >
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col text-center">
              <div className="aspect-square relative overflow-hidden">
                <Image src="/assistant-650x650.png" alt="Assistant(e) de direction" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Assistant(e) de direction <br />(BAC +2)</h3>
              <p className="text-gray-600 mb-4">
                Assure le soutien des équipes dirigeantes
                <br />
                RNCP 38667
              </p>
              <Link
                href="https://www.francecompetences.fr/recherche/rncp/38667/"
                className="border border-wet-blue text-wet-blue py-2 px-4 inline-block hover:bg-wet-blue hover:text-white transition-colors text-center"
              >
                En Savoir Plus
              </Link>
            </div>

            <div className="flex flex-col text-center">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/negotiator-650x650.png"
                  alt="Négociateur technico-commercial"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Négociateur technico-commercial (BAC +2)</h3>
              <p className="text-gray-600 mb-4">
                Pilote la croissance des relations clients
                <br />
                RNCP 39063
              </p>
              <Link
                href="https://www.francecompetences.fr/recherche/rncp/39063/"
                className="border border-wet-blue text-wet-blue py-2 px-4 inline-block hover:bg-wet-blue hover:text-white transition-colors text-center"
              >
                En Savoir Plus
              </Link>
            </div>

            <div className="flex flex-col text-center">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/grapich-designer-650x650.png"
                  alt="Infographiste - Metteur en Page"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Infographiste - Metteur en Page (BAC)</h3>
              <p className="text-gray-600 mb-4">
                Optimise la création des supports visuels
                <br />
                RNCP 1267
              </p>
              <Link
                href="https://www.francecompetences.fr/recherche/rncp/1267/"
                className="border border-wet-blue text-wet-blue py-2 px-4 inline-block hover:bg-wet-blue hover:text-white transition-colors text-center"
              >
                En Savoir Plus
              </Link>
            </div>

            <div className="flex flex-col text-center">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/manager-650x650.png"
                  alt="Responsable de petite et moyenne structure"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Responsable de petite et moyenne structure (BAC +2)</h3>
              <p className="text-gray-600 mb-4">
                Dirige et fait grandir une organisation
                <br />
                RNCP 38575
              </p>
              <Link
                href="https://www.francecompetences.fr/recherche/rncp/38575/"
                className="border border-wet-blue text-wet-blue py-2 px-4 inline-block hover:bg-wet-blue hover:text-white transition-colors text-center"
              >
                En Savoir Plus
              </Link>
            </div>

            <div className="flex flex-col text-center">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/food-crew-650x650.png"
                  alt="Employé polyvalent en restauration"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Employé polyvalent en restauration (CAP/BEP)</h3>
              <p className="text-gray-600 mb-4">
                Maîtrise les essentiels de la restauration
                <br />
                RNCP 38663
              </p>
              <Link
                href="https://www.francecompetences.fr/recherche/rncp/38663/"
                className="border border-wet-blue text-wet-blue py-2 px-4 inline-block hover:bg-wet-blue hover:text-white transition-colors text-center"
              >
                En Savoir Plus
              </Link>
            </div>

            <div className="flex flex-col text-center">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/accountant-650x650.png"
                  alt="Gestionnaire comptable et fiscal"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Gestionnaire comptable et fiscal (BAC +2)</h3>
              <p className="text-gray-600 mb-4">
                Orchestre les finances d'une organisation
                <br />
                RNCP 31677
              </p>
              <Link
                href="https://www.francecompetences.fr/recherche/rncp/31677/"
                className="border border-wet-blue text-wet-blue py-2 px-4 inline-block hover:bg-wet-blue hover:text-white transition-colors text-center"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Futur(e) apprenti(e) Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="flex items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold font-tomato">Futur(e) apprenti(e)</h1>
            <Link
              href="/futur-apprenti"
              className="ml-auto group flex items-center justify-center w-12 h-12 rounded-full border-2 border-current hover:text-wet-blue hover:border-wet-blue transition-all duration-300"
              aria-label="En savoir plus sur devenir apprenti"
            >
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-tomato">
                Montez en compétences et étendez vos perspectives d'avenir
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  WeTeach vous ouvre les portes d'un avenir professionnel prometteur grâce à des parcours de formation
                  sur mesure. Nos programmes allient expertise et pragmatisme pour vous offrir des compétences
                  concrètes, directement valorisables sur le marché du travail.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 text-wet-blue mr-2 flex-shrink-0 mt-0.5">✓</div>
                    <span>Formations certifiées par des titres RNCP</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 text-wet-blue mr-2 flex-shrink-0 mt-0.5">✓</div>
                    <span>Méthodes pédagogiques modernes (cours en ligne et en présentiel)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 text-wet-blue mr-2 flex-shrink-0 mt-0.5">✓</div>
                    <span>Tablette fournie gratuitement pour les apprenants en distanciel</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link
                    href="/futur-apprenti"
                    className="inline-flex items-center bg-wet-redwood text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Découvrir nos formations
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/fa3.png?height=800&width=600"
                alt="Apprentissage chez WeTeach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Futur(e) partenaire Section - with image on right and SVG in middle */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="flex items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold font-tomato">Futur(e) partenaire</h1>
            <Link
              href="/futur-partenaire"
              className="ml-auto group flex items-center justify-center w-12 h-12 rounded-full border-2 border-current hover:text-wet-blue hover:border-wet-blue transition-all duration-300"
              aria-label="En savoir plus sur devenir partenaire"
            >
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/futur-partenaire#performance"
              className="relative rounded-lg overflow-hidden h-80 text-white p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
              aria-label="En savoir plus sur augmenter la performance"
            >
              <Image
                src="/pic1.png?height=400&width=600"
                alt="Augmenter la performance background"
                fill
                className="object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-wet-blue/30 z-10"></div>
              <div className="relative z-20">
                <h4 className="text-2xl font-semibold mb-3 text-wet-light-grayish">
                  AUGMENTER LA
                  <br /> PERFORMANCE
                </h4>
                <p className="text-sm text-white/90">
                  Boostez votre productivité
                  <br /> en rendant les équipes
                  <br /> plus autonomes.
                </p>
              </div>
              <div className="self-start mt-4 relative z-20">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-wet-blue transition-all duration-300">
                  <ArrowRight
                    size={20}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>

            <Link
              href="/futur-partenaire#culture-rh"
              className="relative rounded-lg overflow-hidden h-80 text-wet-blue p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
              aria-label="En savoir plus sur culture RH - GPEC - RSE"
            >
              <Image
                src="/pic2.png?height=400&width=600"
                alt="Culture RH background"
                fill
                className="object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-wet-macadamia/30 z-10"></div>
              <div className="relative z-20">
                <h4 className="text-2xl font-semibold mb-3">
                  CULTURE
                  <br /> RH - GPEC - RSE
                </h4>
                <p className="text-sm text-gray-800">
                  Renforcez votre marque
                  <br /> employeur et incarnez vos
                  <br /> engagements RSE en
                  <br /> valorisant le développement
                  <br /> humain.
                </p>
              </div>
              <div className="self-start mt-4 relative z-20">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-wet-blue transition-all duration-300">
                  <ArrowRight
                    size={20}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>

            <Link
              href="/futur-partenaire#satisfaction"
              className="relative rounded-lg overflow-hidden h-80 text-wet-blue p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
              aria-label="En savoir plus sur satisfaction au travail"
            >
              <Image
                src="/pic3.png?height=400&width=600"
                alt="Satisfaction au travail background"
                fill
                className="object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-wet-light-grayish/30 z-10"></div>
              <div className="relative z-20">
                <h4 className="text-2xl font-semibold mb-3">
                  SATISFACTION AU <br />
                  TRAVAIL
                </h4>
                <p className="text-sm text-gray-800">
                  Augmentez l'épanouissement
                  <br /> professionnel, fidélisez
                  <br /> les talents et réduisez <br />
                  le turn-over.
                </p>
              </div>
              <div className="self-start mt-4 relative z-20">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-wet-blue transition-all duration-300">
                  <ArrowRight
                    size={20}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>

            <Link
              href="/futur-partenaire#simulateur"
              className="relative rounded-lg overflow-hidden h-80 text-wet-blue p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
              aria-label="En savoir plus sur simulateur URSSAF"
            >
              <Image
                src="/pic4.png?height=400&width=600"
                alt="Simulateur URSSAF background"
                fill
                className="object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-wet-redwood/30 z-10"></div>
              <div className="relative z-20">
                <h4 className="text-2xl font-semibold  mb-3">SIMULATEUR URSSAF</h4>
                <p className="text-sm text-gray-800">
                  Bénéficiez des opportunités
                  <br /> fiscales liées à la montée <br />
                  en compétences.
                </p>
              </div>
              <div className="self-start mt-4 relative z-20">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-wet-blue transition-all duration-300">
                  <ArrowRight
                    size={20}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action Section - Redesigned with better layout */}
      <section className="py-24 md:py-32 bg-wet-redwood text-white">
        <div className="container mx-auto px-4 md:px-12 w-full md:w-4/5 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-10 font-tomato">Discutons ensemble</h1>
            <p className="text-xl mb-12 md:mb-16">
              Parlez-nous de vos besoins et nous vous proposerons des solutions adaptées pour propulser vos compétences
              et celles de vos équipes. Prenez rendez-vous dès maintenant pour échanger avec le centre de formation pour
              apprentis WeTEACH.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="bg-white text-wet-redwood py-3 px-8 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors font-medium w-full md:w-auto"
              >
                <Mail className="mr-2" size={18} /> Contactez-nous
              </Link>
              <a
                href="/Brochure-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md hover:bg-white hover:text-wet-redwood flex items-center justify-center transition-colors font-medium w-full md:w-auto"
              >
                <ExternalLink className="mr-2" size={18} /> Notre brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

