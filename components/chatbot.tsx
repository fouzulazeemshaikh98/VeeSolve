"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, Send, X, ChevronDown, Loader2, MessageSquare, CreditCard, Zap, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useMediaQuery } from "@/hooks/use-media-query"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

type QuickReply = {
  id: string
  text: string
  icon: React.ReactNode
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "👋 Hi there! I'm Vee, your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [selectedColor, setSelectedColor] = useState<string>("purple-blue")

  const colorOptions = [
    { id: "purple-blue", name: "Purple-Blue", gradient: "from-purple-600 to-blue-600" },
    { id: "blue-purple", name: "Blue-Purple", gradient: "from-blue-600 to-purple-600" },
    { id: "purple-pink", name: "Purple-Pink", gradient: "from-purple-600 to-pink-600" },
    { id: "pink-purple", name: "Pink-Purple", gradient: "from-pink-600 to-purple-600" },
  ]

  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const isTablet = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickReplies: QuickReply[] = [
    { id: "pricing", text: "Pricing plans", icon: <CreditCard className="h-3 w-3" /> },
    { id: "services", text: "AI services", icon: <Zap className="h-3 w-3" /> },
    { id: "demo", text: "Request demo", icon: <MessageSquare className="h-3 w-3" /> },
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async (predefinedMessage?: string) => {
    const messageText = predefinedMessage || inputValue
    if (!messageText.trim()) return

    setShowQuickReplies(false)

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      const response = await fetch("https://saad-khan03.app.n8n.cloud/webhook/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      })

      const data = await response.json()
      const botReply = data.output || "I'm sorry, I couldn't understand that."

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: botReply,
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    } catch (error) {
      console.error("Error fetching bot response:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "⚠️ Oops, something went wrong. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              onClick={scrollToTop}
              className="rounded-full w-10 h-10 p-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
              aria-label="Back to top"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <ArrowUp className="h-5 w-5 mx-auto" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="relative">
            {!isOpen && (
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-gray-900 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              />
            )}
            {!isOpen && (
              <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/20" style={{ animationDuration: "3s" }}></div>
            )}
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full w-10 h-10 p-0 shadow-lg relative group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              aria-label={isOpen ? "Close chat" : "Open chat"}
            >
              {isOpen ? <X className="h-5 w-5 relative z-10 text-white" /> : <Bot className="h-5 w-5 relative z-10 text-white" />}
            </Button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-64 bg-gray-900 rounded-lg shadow-xl z-40 overflow-hidden border border-gray-800"
            style={{ maxHeight: "350px" }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 p-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="p-1 rounded-full bg-white/10">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-green-500 rounded-full border border-gray-800"></span>
                </div>
                <div>
                  <h3 className="font-medium text-xs text-white">Vee AI Assistant</h3>
                  <p className="text-[8px] text-white/70">Online | Typically replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 rounded-full text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <ChevronDown className="h-3 w-3" />
              </Button>
            </div>

            <div className="h-[160px] overflow-y-auto p-3 flex flex-col gap-2 bg-gray-900">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.sender === "bot" && (
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-1.5 flex-shrink-0">
                      <Bot className="h-2.5 w-2.5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-xs ${
                      message.sender === "user"
                        ? `bg-gradient-to-r ${colorOptions.find((c) => c.id === selectedColor)?.gradient} text-white rounded-br-none`
                        : "bg-gray-800 text-white rounded-bl-none"
                    }`}
                  >
                    <p className="text-[10px]">{message.text}</p>
                    {message.sender === "bot" && (
                      <p className="text-[8px] text-gray-400 mt-1 text-right">
                        {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    )}
                  </div>
                  {message.sender === "user" && (
                    <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center ml-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-1.5 flex-shrink-0">
                    <Bot className="h-2.5 w-2.5 text-white" />
                  </div>
                  <div className="max-w-[80%] p-2 rounded-lg bg-gray-800 text-white rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0ms", animationDuration: "1.2s" }}></div>
                      <div className="w-1 h-1 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms", animationDuration: "1.2s" }}></div>
                      <div className="w-1 h-1 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "600ms", animationDuration: "1.2s" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {showQuickReplies && (
              <motion.div
                className="px-3 py-2 border-t border-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <p className="text-[9px] text-gray-400 mb-1.5">Suggested questions:</p>
                <div className="flex flex-wrap gap-1.5">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply.id}
                      onClick={() => handleSendMessage(reply.text)}
                      className="px-2 py-1 bg-gray-800 hover:bg-gray-700 text-white text-[9px] rounded-full transition-colors flex items-center gap-1 border border-gray-700"
                    >
                      {reply.icon}
                      {reply.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="px-2 py-1.5 border-t border-gray-800 bg-gray-900">
              <p className="text-[9px] text-gray-400 mb-1">Message color:</p>
              <div className="flex flex-wrap gap-1.5">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-5 h-5 rounded-full bg-gradient-to-r ${color.gradient} ${selectedColor === color.id ? "ring-2 ring-white" : ""}`}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            <div className="p-2 border-t border-gray-800 bg-gray-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
                className="flex gap-1.5"
              >
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white text-[10px] h-7 focus-visible:ring-purple-500"
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-7 w-7 p-0 rounded-full"
                >
                  {isTyping ? <Loader2 className="h-3 w-3 animate-spin" /> : <Send className="h-3 w-3" />}
                </Button>
              </form>
              <div className="mt-1 text-center">
                <p className="text-[8px] text-gray-500">Powered by Vee Solve AI</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
