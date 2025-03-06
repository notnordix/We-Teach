import Image from "next/image"
import { Mail, ExternalLink, Building, Calendar, FileText, Shield, User, Globe } from "lucide-react"

export default function MentionsLegales() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px]">
        <Image
          src="/job-seeker-1300x1300.png?height=1200&width=2000"
          alt="WeTeach - Mentions légales"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tomato text-white">
                Mentions légales<span className="text-wet-macadamia">.</span>
              </h1>
              <p className="text-xl text-white">Toutes les informations clés au sujet de WeTEACH</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Éditeur du site */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-6">
                  <Building className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold font-tomato">1. Éditeur du site</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Le site internet de WeTeach est édité par la société ACTION CBM, société par actions simplifiée
                    (SAS), immatriculée au Registre National des Entreprises (RNE) sous le numéro SIREN 982 410 474 et
                    le numéro SIRET 982 410 474 00018.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold mb-2">Adresse du siège social :</p>
                    <p>149 avenue du Maine, 75014 Paris, France</p>
                  </div>
                  <p className="mb-2">
                    <span className="font-semibold">Activité principale :</span> Formation continue d'adultes (Code
                    NAF/APE : 85.59A)
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Capital social :</span> 1 000,00 €
                  </p>
                  <p>
                    <span className="font-semibold">Date de création :</span> 08/12/2023
                  </p>
                </div>
              </div>

              {/* Numéro de TVA */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-6">
                  <FileText className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold font-tomato">2. Numéro de TVA intracommunautaire</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700">Non renseigné.</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-6">
                  <Mail className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold font-tomato">3. Contact</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700 mb-4">
                    Pour toute question, demande d'information ou réclamation, vous pouvez contacter ACTION CBM à
                    l'adresse suivante :
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Adresse postale :</p>
                    <p>149 avenue du Maine, 75014 Paris, France</p>
                  </div>
                </div>
              </div>

              {/* Hébergement */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-6">
                  <Globe className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold font-tomato">4. Hébergement du site</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700">Hostinger</p>
                </div>
              </div>

              {/* Certificat */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-6">
                  <Shield className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold font-tomato">5. Certificat et conformité</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700">ACTION CBM est un organisme de formation certifié Qualiopi.</p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-6">
                  <FileText className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold font-tomato">6. Propriété intellectuelle</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700">
                    Le contenu du site internet, incluant mais non limité aux textes, images, graphismes et logos, est
                    la propriété exclusive d'ACTION CBM, sauf mention contraire. Toute reproduction, même partielle, est
                    strictement interdite sans l'autorisation écrite préalable d'ACTION CBM.
                  </p>
                </div>
              </div>

              {/* Données personnelles */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-6">
                  <User className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold font-tomato">7. Données personnelles</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700">
                    Les informations collectées via le site internet sont destinées à ACTION CBM pour la gestion de ses
                    services. Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de
                    rectification et de suppression de vos données personnelles. Pour exercer ce droit, veuillez nous
                    contacter via les coordonnées mentionnées ci-dessus.
                  </p>
                </div>
              </div>

              {/* Responsabilité */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-6">
                  <Shield className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold font-tomato">8. Responsabilité</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700">
                    ACTION CBM s'efforce d'assurer l'exactitude et la mise à jour des informations présentes sur son
                    site internet. Toutefois, elle ne saurait être tenue responsable des erreurs ou omissions
                    éventuelles, ni des dommages résultant de l'utilisation des informations diffusées.
                  </p>
                </div>
              </div>

              {/* Durée */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-6">
                  <Calendar className="h-8 w-8 text-wet-blue mr-4 flex-shrink-0" />
                  <h2 className="text-2xl font-semibold font-tomato">9. Durée de la personne morale</h2>
                </div>
                <div className="pl-12">
                  <p className="text-gray-700">La durée de la société est fixée à 99 ans à compter de sa création.</p>
                </div>
              </div>

              {/* Mise à jour */}
              <div className="bg-wet-macadamia/20 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-2">Mise à jour : 20/12/2024</p>
                <p className="text-gray-600 text-sm">Sources : INSEE, VIES, MTPEI, INPI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-wet-redwood text-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5 text-center">
          <h2 className="text-3xl font-semibold mb-6 font-tomato">Discutons ensemble</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Parlez-nous de vos besoins et nous vous proposerons des solutions adaptées pour propulser vos compétences et
            celles de vos équipes. Prenez rendez-vous dès maintenant pour échanger avec le centre de formation pour
            apprentis WeTEACH.
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

