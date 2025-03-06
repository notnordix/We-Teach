import Image from "next/image"
import Link from "next/link"
import { CheckCircle, GraduationCap, BookOpen, Briefcase, Users, Award, ExternalLink } from "lucide-react"

export default function FuturApprenti() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        <Image
          src="/student-1300x1300.png?height=1200&width=2000"
          alt="WeTeach - Futur(e) apprenti(e)"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tomato text-white">
                Futur(e) apprenti(e)<span className="text-wet-macadamia">.</span>
              </h1>
              <p className="text-xl text-white mb-8">Montez en compétences et étendez vos perspectives d'avenir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Se former pour l'avenir */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 font-tomato">Se former pour l'avenir</h2>
              <p className="text-gray-700 leading-relaxed">
                WeTeach vous ouvre les portes d'un avenir professionnel prometteur grâce à des parcours de formation sur
                mesure. Nos programmes allient expertise et pragmatisme pour vous offrir des compétences concrètes,
                directement valorisables sur le marché du travail. Conçus pour faciliter votre insertion et bâtir une
                carrière durable, ils vous accompagnent à chaque étape de votre réussite.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/fa3.png?height=800&width=600"
                alt="Se former pour l'avenir avec WeTeach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi WeTeach ? */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <h2 className="text-3xl font-semibold mb-12 font-tomato">Pourquoi WeTeach ?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/fa2-1536x1536.png?height=800&width=600"
                alt="Pourquoi choisir WeTeach"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-700 leading-relaxed mb-8">
                Toutes nos formations sont certifiées par des titres RNCP, vous garantissant une reconnaissance
                nationale de vos compétences. Nous combinons des méthodes pédagogiques modernes, avec des cours en ligne
                et en présentiel, pour répondre aux besoins de chaque profil. Grâce à un accompagnement personnalisé,
                vous bénéficiez d'un suivi individualisé pour maximiser vos chances de réussite. Et pour les apprenants
                en distanciel, une tablette est fournie gratuitement, afin de vous offrir les meilleures conditions
                d'apprentissage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-12 w-12 bg-wet-blue rounded-full flex items-center justify-center text-white mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-tomato">Titres RNCP</h3>
                  <p className="text-gray-600 text-sm">Formations certifiées et reconnues nationalement</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-12 w-12 bg-wet-redwood rounded-full flex items-center justify-center text-white mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-tomato">Suivi personnalisé</h3>
                  <p className="text-gray-600 text-sm">Accompagnement individuel tout au long de votre parcours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conserver son contrat */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 font-tomato">Conserver son contrat</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Nos formations vous permettent de développer vos compétences tout en conservant votre contrat de travail
                et votre emploi, pendant et après la formation. Ce modèle d'apprentissage garantit une continuité
                professionnelle, alliant montée en compétences et stabilité. Vous progressez sans interruption de votre
                activité, tout en préparant votre avenir avec des qualifications reconnues.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-wet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <span>Continuez à travailler pendant votre formation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-wet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <span>Conservez votre salaire et vos avantages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-wet-blue mr-3 flex-shrink-0 mt-0.5" />
                  <span>Appliquez immédiatement vos nouvelles compétences</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/fa1-1536x1536.png?height=800&width=600"
                alt="Conserver son contrat avec WeTeach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Suis-je éligible ? */}
      <section className="py-16 md:py-20 bg-wet-macadamia/20">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <h2 className="text-3xl font-semibold mb-12 text-center font-tomato">Suis-je éligible ?</h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-10 text-center">
              Nos formations s'adressent à tous ceux qui souhaitent construire ou transformer leur avenir professionnel.
              Que vous soyez étudiant en reconversion, salarié cherchant à enrichir vos compétences ou demandeur
              d'emploi désireux d'intégrer rapidement le marché du travail, nos programmes sont conçus pour répondre à
              vos besoins. L'admission repose sur un entretien d'orientation préalable et une étude approfondie de votre
              dossier, pour s'assurer que votre parcours correspond parfaitement à vos ambitions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
                <div className="h-14 w-14 bg-wet-blue rounded-full flex items-center justify-center text-white mb-4">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-tomato">Étudiants</h3>
                <p className="text-gray-600">
                  En reconversion ou souhaitant compléter votre formation initiale avec des compétences pratiques.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
                <div className="h-14 w-14 bg-wet-redwood rounded-full flex items-center justify-center text-white mb-4">
                  <Briefcase className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-tomato">Salariés</h3>
                <p className="text-gray-600">
                  Désireux d'enrichir vos compétences ou de vous réorienter tout en conservant votre emploi actuel.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
                <div className="h-14 w-14 bg-wet-macadamia rounded-full flex items-center justify-center text-gray-800 mb-4">
                  <BookOpen className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-tomato">Demandeurs d'emploi</h3>
                <p className="text-gray-600">
                  Souhaitant acquérir rapidement des compétences recherchées pour faciliter votre retour à l'emploi.
                </p>
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
              href="/nos-formations"
              className="bg-white text-wet-redwood py-4 px-10 rounded-md hover:bg-gray-100 transition-colors font-medium w-full md:w-auto flex items-center justify-center"
            >
              <BookOpen className="mr-2" size={18} /> Découvrir nos formations
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

