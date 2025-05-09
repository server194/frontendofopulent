"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Paperclip, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Message = {
  id: string
  text: string
  sender: "user" | "agent"
  timestamp: Date
}

export function CustomerSupportChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Opulent International. How can I assist you today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate agent response after a delay
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message. One of our textile specialists will respond shortly. Is there anything specific about our products or services you'd like to know?",
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  // Format time as HH:MM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 shadow-lg ${
          isOpen ? "bg-gray-600" : "bg-primary"
        } hover:scale-105 transition-transform`}
        aria-label="Customer Support"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originY: 1, originX: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Chat Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png"
                    alt="Opulent Support"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Opulent Support</h3>
                  <p className="text-xs opacity-80">Typically replies within 10 minutes</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChat}
                className="text-white hover:bg-primary-foreground/10"
                aria-label="Close chat"
              >
                <X size={18} />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-primary-foreground/70" : "text-gray-500"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-primary"
                  aria-label="Attach file"
                >
                  <Paperclip size={18} />
                </Button>
                <div className="flex-grow relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="w-full py-2 px-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
                    aria-label="Add emoji"
                  >
                    <Smile size={18} />
                  </Button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  className="bg-primary text-white rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-primary/90"
                  aria-label="Send message"
                  disabled={inputValue.trim() === ""}
                >
                  <Send size={18} />
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">Your chat is encrypted and secure</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
