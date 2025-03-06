"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev: FormState) => ({
        ...prev,
        [name]: value,
    }))
}

  const validateForm = () => {
      const newErrors: { name?: string; email?: string; message?: string } = {}
    
    if (!formState.name.trim()) newErrors.name = "Le nom est requis"
    if (!formState.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Format d'email invalide"
    }
    if (!formState.message.trim()) newErrors.message = "Le message est requis"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

interface FormState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    message?: string;
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        })
    }, 1500)
}

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[300px]">
        <Image
          src="/classroom-1536x918.png?height=1200&width=2000"
          alt="WeTeach - Contact"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-tomato text-white">
                Contactez-nous<span className="text-wet-macadamia">.</span>
              </h1>
              <p className="text-xl text-white">
                Nous sommes à votre écoute pour répondre à toutes vos questions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-6 font-tomato">Nos coordonnées</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-wet-blue rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 font-tomato">Téléphone</h3>
                    <a href="tel:+33624529805" className="text-gray-700 hover:text-wet-redwood transition-colors">
                      +33 6 24 52 98 05
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-wet-redwood rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 font-tomato">Email</h3>
                    <a href="mailto:contact@we-teach.fr" className="text-gray-700 hover:text-wet-redwood transition-colors">
                      contact@we-teach.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-wet-macadamia rounded-full flex items-center justify-center text-gray-800 mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 font-tomato">Adresse</h3>
                    <address className="not-italic text-gray-700">
                      2-4 Bd du Général de Gaulle,<br />
                      94270 Le Kremlin-Bicêtre, France
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 relative h-32 rounded-lg overflow-hidden">
                <Image 
                  src="/cropped-w-300x71.png?height=400&width=600" 
                  alt="Carte WeTeach" 
                  fill 
                  className="object-conatin"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6 font-tomato">Envoyez-nous un message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-tomato">Message envoyé avec succès !</h3>
                  <p className="text-gray-700 mb-4">
                    Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-wet-blue text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet <span className="text-wet-redwood">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-wet-blue ${
                          errors.name ? "border-wet-redwood" : "border-gray-300"
                        }`}
                        placeholder="Votre nom"
                      />
                      {errors.name && <p className="mt-1 text-sm text-wet-redwood">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-wet-redwood">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-wet-blue ${
                          errors.email ? "border-wet-redwood" : "border-gray-300"
                        }`}
                        placeholder="votre@email.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-wet-redwood">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wet-blue"
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wet-blue"
                        placeholder="Sujet de votre message"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-wet-redwood">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-wet-blue ${
                        errors.message ? "border-wet-redwood" : "border-gray-300"
                      }`}
                      placeholder="Votre message..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-wet-redwood">{errors.message}</p>}
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-wet-redwood text-white py-3 px-8 rounded-md hover:bg-red-700 transition-colors flex items-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" /> Envoyer
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 w-full md:w-4/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 font-tomato">Questions fréquentes</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Vous avez des questions ? Consultez notre FAQ ou contactez-nous directement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 font-tomato">Comment s'inscrire à une formation ?</h3>
              <p className="text-gray-700">
                Pour vous inscrire à l'une de nos formations, vous pouvez nous contacter via ce formulaire, par téléphone ou par email. Notre équipe vous guidera à travers le processus d'inscription.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 font-tomato">Les formations sont-elles éligibles au CPF ?</h3>
              <p className="text-gray-700">
                Certaines de nos formations sont éligibles au Compte Personnel de Formation (CPF). Contactez-nous pour vérifier l'éligibilité de la formation qui vous intéresse.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 font-tomato">Comment se déroulent les cours à distance ?</h3>
              <p className="text-gray-700">
                Nos cours à distance sont dispensés via une plateforme en ligne interactive. Une tablette est fournie à chaque apprenant pour suivre les cours. Des sessions en direct et des ressources pédagogiques sont disponibles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 font-tomato">Quels sont les modes de financement disponibles ?</h3>
              <p className="text-gray-700">
                Plusieurs options de financement sont disponibles : prise en charge par l'OPCO, financement personnel, aides via France Travail pour les demandeurs d'emploi, et d'autres dispositifs publics ou privés.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
