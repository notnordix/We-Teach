"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Phone, Mail, Send, X, MessageSquare, Loader2 } from "lucide-react"
import { useClickAway } from "react-use"

export function ContactButtons() {
  const [activeButton, setActiveButton] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)

  const formRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  // Close form when clicking outside
  useClickAway(formRef, (e) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setActiveButton(null)
    }
  })

  // Reset form state after success or error
  useEffect(() => {
    if (formState === "success") {
      const timer = setTimeout(() => {
        setFormState("idle")
        setActiveButton(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [formState])

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Toggle the main button expansion
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
    if (activeButton) {
      setActiveButton(null)
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setFormState("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      setFormState("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message")
    }
  }

  // Handle button click
  const handleButtonClick = (buttonId: string) => {
    if (activeButton === buttonId) {
      setActiveButton(null)
    } else {
      setActiveButton(buttonId)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Main Contact Button */}
      <div ref={buttonRef} className="relative">
        {/* Main Button */}
        <button
          onClick={toggleExpand}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isExpanded ? "bg-gray-700 rotate-45" : "bg-wet-blue"
          }`}
          aria-label={isExpanded ? "Fermer le menu de contact" : "Ouvrir le menu de contact"}
        >
          {isExpanded ? <X className="text-white h-6 w-6" /> : <MessageSquare className="text-white h-6 w-6" />}
        </button>

        {/* Expanded Buttons */}
        <div
          className={`absolute bottom-full right-0 mb-4 space-y-3 transition-all duration-300 ${
            isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {/* Email Button */}
          <button
            onClick={() => handleButtonClick("email")}
            className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              activeButton === "email" ? "bg-wet-redwood scale-110" : "bg-wet-redwood hover:scale-110"
            }`}
            aria-label="Envoyer un email"
          >
            <Mail className="text-white h-5 w-5" />
          </button>

          {/* Phone Button */}
          <a
            href="tel:+33624529805"
            className="w-12 h-12 bg-wet-blue rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
            aria-label="Appeler"
          >
            <Phone className="text-white h-5 w-5" />
            <span className="absolute right-full mr-3 bg-wet-blue text-white py-1 px-3 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              +33 6 24 52 98 05
            </span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/33624529805"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div
        ref={formRef}
        className={`absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 transform ${
          activeButton === "email"
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-wet-redwood text-white p-4 relative">
          <button
            onClick={() => setActiveButton(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Fermer le formulaire"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="text-lg font-semibold">Contactez-nous</h3>
          <p className="text-sm text-white/80 mt-1">Envoyez-nous un message et nous vous répondrons rapidement</p>
        </div>

        {formState === "success" ? (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Message envoyé !</h4>
            <p className="text-gray-600">
              Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            {formState === "error" && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
                <p className="font-medium">Erreur lors de l'envoi</p>
                <p>{errorMessage || "Veuillez réessayer plus tard."}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom <span className="text-wet-redwood">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-wet-blue focus:border-transparent transition-all"
                  placeholder="Votre nom"
                  disabled={formState === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-wet-redwood">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-wet-blue focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                  disabled={formState === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-wet-blue focus:border-transparent transition-all"
                  placeholder="Votre numéro"
                  disabled={formState === "submitting"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-wet-redwood">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-wet-blue focus:border-transparent transition-all"
                  placeholder="Votre message..."
                  disabled={formState === "submitting"}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className={`w-full py-2.5 px-4 rounded-md text-white font-medium flex items-center justify-center transition-all ${
                  formState === "submitting"
                    ? "bg-wet-redwood/70 cursor-not-allowed"
                    : "bg-wet-redwood hover:bg-red-700"
                }`}
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

