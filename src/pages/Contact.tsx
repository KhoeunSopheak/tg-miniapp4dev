"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  console.log(isSubmitting)
  console.log(formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await emailjs.send(
        "service_q24f7tu", // Replace with your EmailJS service ID
        "template_t0zlb48", // Replace with your EmailJS template ID
        {
          from_name: formData.fullname,
          from_email: formData.email,
          message: formData.message,
        },
        "THHZPFOxw0xEaB5Hd", // Replace with your EmailJS public key
      )

      console.log(result.text)
      setSubmitStatus("success")
      setFormData({ fullname: "", email: "", message: "" })
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full mx-auto bg-black text-white rounded-xl overflow-hidden flex flex-col h-full">
      {/* Header Image Section */}

      <div className="px-4 pb-3 p-3">
        <div className="relative rounded-xl overflow-hidden bg-black">
          <div className="relative h-56 w-full">
            <img
              src="https://i.pinimg.com/736x/ee/2f/85/ee2f85e71ecab5cf4ffa17531899b3b6.jpg"
              alt="Person working out with weights"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-6">
          <h1 className="text-green-500 text-xl font-medium">Get fit and healthy</h1>
        </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 px-6 py-4">
        <h2 className="text-green-500 text-2xl font-medium mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Fullname"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What can I help you?"
                rows={4}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 resize-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${isSubmitting ? "bg-green-700" : "bg-green-500"} text-white rounded-lg py-3 font-medium hover:bg-green-600 transition-colors`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {submitStatus === "success" && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
          {submitStatus === "error" && (
            <p className="text-red-500 text-center mt-2">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto">
      </div>
    </div>
  )
}

