"use client"
import { useState, useEffect } from "react"
export default function ChatAnimation() {
  const [animationStep, setAnimationStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  // Messages for the animation
  const leftMessages = [
    "Hey there! How's it going?",
    "I'm working on that project we discussed.",
    "Should we meet up later this week?",
  ]
  const rightMessages = [
    "Hi! I'm doing great, thanks for asking!",
    "That sounds awesome! How's the progress?",
    "Definitely! How about Thursday afternoon?",
  ]

  useEffect(() => {
    // Animation sequence
    const animationSequence = async () => {
      // Loop through the messages
      for (let i = 0; i < leftMessages.length; i++) {
        // Left side types
        setIsTyping({ side: "left" })
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsTyping(false)
        setAnimationStep((step) => step + 1)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsTyping({ side: "right" })
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsTyping(false)
        setAnimationStep((step) => step + 1)
        if (i < leftMessages.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 1500))
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 3000))
      setAnimationStep(0)
    }
    animationSequence()
    const interval = setInterval(() => {
      setAnimationStep(0)
      animationSequence()
    }, 20000)

    return () => clearInterval(interval)
  }, [])
  const visibleLeftMessages = leftMessages.slice(0, Math.ceil(animationStep / 2))
  const visibleRightMessages = rightMessages.slice(0, Math.floor(animationStep / 2))

  return (
    <div className="flex w-full max-w-3xl mx-auto shadow-2xl rounded-xl overflow-hidden">
      <div className="w-1/2 bg-white p-4 border-r">
        <div className="bg-red-100 rounded-t-lg p-3">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="ml-3">
              <p className="font-semibold">Alex</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>
        <div className="h-80 overflow-y-auto py-4 flex flex-col">
          {visibleLeftMessages.map((message, index) => (
            <div key={`left-${index}`} className="mb-4 max-w-[90%] self-end">
              <div className="bg-black text-white p-3 rounded-lg rounded-tr-none">{message}</div>
              <div className="text-xs text-gray-500 mt-1 text-right">
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          ))}
          {isTyping && isTyping.side === "left" && (
            <div className="mb-4 max-w-[90%] self-end">
              <div className="bg-gray-200 p-3 rounded-lg rounded-tr-none flex space-x-1">
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-3 flex">
          <input
            type="text"
            className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
            placeholder="Type a message..."
            disabled
          />
          <button className="bg-black text-white px-4 py-2 rounded-r-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right side (User 2) */}
      <div className="w-1/2 bg-white p-4">
        <div className="bg-orange-100 rounded-t-lg p-3">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              J
            </div>
            <div className="ml-3">
              <p className="font-semibold">Jamie</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>

        <div className="h-80 overflow-y-auto py-4 flex flex-col">
          {visibleRightMessages.map((message, index) => (
            <div key={`right-${index}`} className="mb-4 max-w-[90%]">
              <div className="bg-red-600 text-white p-3 rounded-lg rounded-tl-none">{message}</div>
              <div className="text-xs text-gray-500 mt-1">
                {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          ))}

          {isTyping && isTyping.side === "right" && (
            <div className="mb-4 max-w-[90%]">
              <div className="bg-gray-200 p-3 rounded-lg rounded-tl-none flex space-x-1">
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t pt-3 flex">
          <input
            type="text"
            className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
            placeholder="Type a message..."
            disabled
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

