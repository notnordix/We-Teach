import Image from "next/image"
import { BarChart, Heart, FileText, Calculator, Mail, ExternalLink } from "lucide-react"

export default function FuturPartenaire() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px]">
        <Image
          src="/ceo-1300x1300.png?height=1200&width=2000"
          alt="WeTeach - Futur(e) partenaire"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tomato text-white">
                Futur(e) partenaire<span className="text-wet-macadamia">.</span>
              </h1>
              <p className="text-xl text-white mb-8">Formez vos équipes tout en bénéficiant d'opportunités fiscales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <h2 className="text-3xl font-semibold mb-12 text-center font-tomato">
            Les avantages d'un partenariat avec WeTeach
          </h2>

          {/* Performance Card */}
          <div id="performance" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/pexels-divinetechygirl-1181534-2.jpg?height=800&width=600"
                alt="Augmenter la performance avec WeTeach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-wet-blue/10 flex items-center justify-center">
                <BarChart className="h-24 w-24 text-white opacity-80" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-tomato text-wet-blue">AUGMENTER LA PERFORMANCE</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Investir dans la formation de vos salariés, c'est miser sur leur montée en compétences pour répondre aux
                défis de demain. Grâce à notre CFA, vos collaborateurs acquièrent des savoir-faire concrets et
                immédiatement applicables, boostant ainsi leur efficacité et votre productivité.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Faites le choix d'un partenariat gagnant-gagnant : offrez à vos équipes les outils pour exceller et
                profitez d'une performance accrue au service de votre entreprise.
              </p>
            </div>
          </div>

          {/* Satisfaction Card */}
          <div id="satisfaction" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4 font-tomato text-wet-redwood">SATISFACTION AU TRAVAIL</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Investir dans la formation de vos salariés, c'est aussi investir dans leur épanouissement professionnel.
                En développant leurs compétences grâce à notre CFA, vos collaborateurs gagnent en confiance et en
                motivation, favorisant une ambiance de travail positive et engageante.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Une équipe satisfaite, c'est une entreprise qui rayonne : offrez-leur les moyens de grandir et voyez
                leur enthousiasme se refléter dans vos résultats.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/fp3-1536x1536.png?height=800&width=600"
                alt="Satisfaction au travail avec WeTeach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-wet-redwood/10 flex items-center justify-center">
                <Heart className="h-24 w-24 text-white opacity-80" />
              </div>
            </div>
          </div>

          {/* Culture RH Card */}
          <div id="culture-rh" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/fp2-1536x1536.png?height=800&width=600"
                alt="Culture RH - GPEC - RSE avec WeTeach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-wet-macadamia/10 flex items-center justify-center">
                <FileText className="h-24 w-24 text-white opacity-80" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-tomato text-wet-blue">CULTURE RH - GPEC - RSE</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Intégrer la formation dans votre stratégie RH, c'est renforcer une culture d'entreprise axée sur le
                développement durable des compétences. Avec notre CFA, accompagnez vos salariés dans une gestion
                prévisionnelle des emplois et des compétences (GPEC) qui anticipe vos besoins tout en valorisant leur
                potentiel.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Un tel engagement reflète une démarche RSE forte, plaçant l'humain au cœur de votre performance. Faites
                de la formation un levier stratégique pour conjuguer compétitivité et responsabilité.
              </p>
            </div>
          </div>

          {/* URSSAF Simulator Card */}
          <div id="simulateur" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4 font-tomato text-wet-light-grayish">SIMULATEUR URSSAF</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Formez vos équipes tout en bénéficiant d'opportunités fiscales.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/fp4-1536x1536.png?height=800&width=600"
                alt="Simulateur URSSAF"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-wet-light-grayish/10 flex items-center justify-center">
                <Calculator className="h-24 w-24 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-wet-redwood text-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5 text-center">
          <h2 className="text-3xl font-semibold mb-6 font-tomato">Prêt à former vos équipes avec WeTeach ?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Contactez-nous pour discuter de vos besoins et découvrir comment notre centre de formation peut accompagner
            le développement de vos collaborateurs.
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
              <ExternalLink className="mr-2" size={18} /> Télécharger notre brochure
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

