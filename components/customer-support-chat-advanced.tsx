// "use client";

// import type React from "react";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   MessageSquare,
//   X,
//   Send,
//   Paperclip,
//   Smile,
//   User,
//   Phone,
//   Video,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useMediaQuery } from "@/hooks/use-media-query";

// type Message = {
//   id: string;
//   text: string;
//   sender: "user" | "agent";
//   timestamp: Date;
// };

// export function CustomerSupportChatAdvanced() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       text: "Hello! Welcome to Opulent International. How can I assist you today?",
//       sender: "agent",
//       timestamp: new Date(),
//     },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [isOnline, setIsOnline] = useState(true);
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const isMobile = useMediaQuery("(max-width: 768px)");

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   // const handleSendMessage = () => {
//   //   if (inputValue.trim() === "") return

//   //   // Add user message
//   //   const userMessage: Message = {
//   //     id: Date.now().toString(),
//   //     text: inputValue,
//   //     sender: "user",
//   //     timestamp: new Date(),
//   //   }
//   //   setMessages((prev) => [...prev, userMessage])
//   //   setInputValue("")

//   //   // Show typing indicator
//   //   setIsTyping(true)

//   //   // Simulate agent response after a delay
//   //   setTimeout(() => {
//   //     setIsTyping(false)
//   //     const agentMessage: Message = {
//   //       id: (Date.now() + 1).toString(),
//   //       text: "Thank you for your message. One of our textile specialists will respond shortly. Is there anything specific about our products or services you'd like to know?",
//   //       sender: "agent",
//   //       timestamp: new Date(),
//   //     }
//   //     setMessages((prev) => [...prev, agentMessage])
//   //   }, 2000)
//   // }
//   const handleSendMessage = async () => {
//     if (inputValue.trim() === "") return;

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       text: inputValue,
//       sender: "user",
//       timestamp: new Date(),
//     };
//     setMessages((prev) => [...prev, userMessage]);
//     setInputValue("");
//     setIsTyping(true);

//     try {
//       const response = await fetch("https://backendofopulent-production.up.railway.app/api/chat/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: inputValue }),
//       });

//       const data = await response.json();
//       const agentMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         text: data.reply || "Sorry, something went wrong.",
//         sender: "agent",
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, agentMessage]);
//     } catch (error) {
//       console.error("Chat error:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: (Date.now() + 1).toString(),
//           text: "Sorry, we couldn't reach the server.",
//           sender: "agent",
//           timestamp: new Date(),
//         },
//       ]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   // Auto-scroll to bottom when messages change or typing indicator appears
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isTyping]);

//   // Focus input when chat opens
//   useEffect(() => {
//     if (isOpen) {
//       inputRef.current?.focus();
//     }
//   }, [isOpen]);

//   // Simulate random online/offline status changes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsOnline(Math.random() > 0.3); // 70% chance of being online
//     }, 60000); // Check every minute

//     return () => clearInterval(interval);
//   }, []);

//   // Format time as HH:MM
//   const formatTime = (date: Date) => {
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   };

//   // Chat window variants for animation
//   const chatVariants = {
//     hidden: isMobile
//       ? { opacity: 0, y: "100%" }
//       : { opacity: 0, scale: 0.8, y: 20, originY: 1, originX: 1 },
//     visible: isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 },
//     exit: isMobile
//       ? { opacity: 0, y: "100%" }
//       : { opacity: 0, scale: 0.8, y: 20 },
//   };

//   return (
//     <>
//       {/* Notification Badge */}
//       <AnimatePresence>
//         {!isOpen && messages.length > 1 && (
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0 }}
//             className="fixed bottom-16 right-6 z-50 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
//           >
//             {messages.length - 1}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Chat Button */}
//       <motion.button
//         onClick={toggleChat}
//         className={`fixed ${
//           isMobile ? "bottom-4 right-4" : "bottom-6 right-6"
//         } z-50 rounded-full w-14 h-14 flex items-center justify-center shadow-lg ${
//           isOpen ? "bg-gray-600" : "bg-primary"
//         }`}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         aria-label="Customer Support"
//       >
//         {isOpen ? (
//           <X size={24} className="text-white" />
//         ) : (
//           <MessageSquare size={24} className="text-white" />
//         )}
//       </motion.button>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={chatVariants}
//             transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             className={`fixed z-50 bg-white shadow-xl flex flex-col overflow-hidden border border-gray-200 ${
//               isMobile
//                 ? "inset-0 rounded-none"
//                 : "bottom-24 right-6 w-[350px] sm:w-[380px] h-[500px] rounded-lg"
//             }`}
//           >
//             {/* Chat Header */}
//             <div className="bg-primary text-white p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center">
//                   <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
//                     <Image
//                       src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png"
//                       alt="Opulent Support"
//                       width={30}
//                       height={30}
//                       className="rounded-full"
//                     />
//                     <div
//                       className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-primary ${
//                         isOnline ? "bg-green-500" : "bg-gray-400"
//                       }`}
//                     ></div>
//                   </div>
//                   <div>
//                     <h3 className="font-bold">Opulent Support</h3>
//                     <p className="text-xs opacity-80">
//                       {isOnline ? "Online" : "Away"}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   {!isMobile && (
//                     <>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="text-white hover:bg-primary-foreground/10 h-8 w-8"
//                         aria-label="Voice call"
//                       >
//                         <Phone size={16} />
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="text-white hover:bg-primary-foreground/10 h-8 w-8"
//                         aria-label="Video call"
//                       >
//                         <Video size={16} />
//                       </Button>
//                     </>
//                   )}
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={toggleChat}
//                     className="text-white hover:bg-primary-foreground/10 h-8 w-8"
//                     aria-label="Close chat"
//                   >
//                     <X size={16} />
//                   </Button>
//                 </div>
//               </div>
//               <div className="text-xs opacity-80">
//                 Our textile specialists are here to help with any questions
//                 about our products and services.
//               </div>
//             </div>

//             {/* Chat Messages */}
//             <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
//               <div className="space-y-4">
//                 {messages.map((message) => (
//                   <div
//                     key={message.id}
//                     className={`flex ${
//                       message.sender === "user"
//                         ? "justify-end"
//                         : "justify-start"
//                     }`}
//                   >
//                     {message.sender === "agent" && (
//                       <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 flex-shrink-0">
//                         <Image
//                           src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png"
//                           alt="Agent"
//                           width={20}
//                           height={20}
//                           className="rounded-full"
//                         />
//                       </div>
//                     )}
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className={`max-w-[80%] rounded-lg p-3 ${
//                         message.sender === "user"
//                           ? "bg-primary text-white rounded-br-none"
//                           : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"
//                       }`}
//                     >
//                       <p className="text-sm">{message.text}</p>
//                       <p
//                         className={`text-xs mt-1 ${
//                           message.sender === "user"
//                             ? "text-primary-foreground/70"
//                             : "text-gray-500"
//                         }`}
//                       >
//                         {formatTime(message.timestamp)}
//                       </p>
//                     </motion.div>
//                     {message.sender === "user" && (
//                       <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0">
//                         <User size={16} className="text-gray-600" />
//                       </div>
//                     )}
//                   </div>
//                 ))}

//                 {/* Typing indicator */}
//                 {isTyping && (
//                   <div className="flex justify-start">
//                     <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 flex-shrink-0">
//                       <Image
//                         src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png"
//                         alt="Agent"
//                         width={20}
//                         height={20}
//                         className="rounded-full"
//                       />
//                     </div>
//                     <div className="bg-white text-gray-800 rounded-lg rounded-bl-none shadow-sm border border-gray-100 p-3">
//                       <div className="flex space-x-1">
//                         <motion.div
//                           animate={{ y: [0, -5, 0] }}
//                           transition={{
//                             repeat: Number.POSITIVE_INFINITY,
//                             duration: 1,
//                             delay: 0,
//                           }}
//                           className="w-2 h-2 bg-gray-400 rounded-full"
//                         />
//                         <motion.div
//                           animate={{ y: [0, -5, 0] }}
//                           transition={{
//                             repeat: Number.POSITIVE_INFINITY,
//                             duration: 1,
//                             delay: 0.2,
//                           }}
//                           className="w-2 h-2 bg-gray-400 rounded-full"
//                         />
//                         <motion.div
//                           animate={{ y: [0, -5, 0] }}
//                           transition={{
//                             repeat: Number.POSITIVE_INFINITY,
//                             duration: 1,
//                             delay: 0.4,
//                           }}
//                           className="w-2 h-2 bg-gray-400 rounded-full"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <div ref={messagesEndRef} />
//               </div>
//             </div>

//             {/* Chat Input */}
//             <div className="p-3 border-t border-gray-200 bg-white">
//               <div className="flex items-center gap-2">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-gray-500 hover:text-primary"
//                   aria-label="Attach file"
//                 >
//                   <Paperclip size={18} />
//                 </Button>
//                 <div className="flex-grow relative">
//                   <input
//                     ref={inputRef}
//                     type="text"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     placeholder="Type your message..."
//                     className="w-full py-2 px-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
//                   />
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
//                     aria-label="Add emoji"
//                   >
//                     <Smile size={18} />
//                   </Button>
//                 </div>
//                 <Button
//                   onClick={handleSendMessage}
//                   className="bg-primary text-white rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-primary/90"
//                   aria-label="Send message"
//                   disabled={inputValue.trim() === ""}
//                 >
//                   <Send size={18} />
//                 </Button>
//               </div>
//               <div className="text-xs text-gray-500 mt-2 text-center">
//                 Your chat is encrypted and secure
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Paperclip,
  Smile,
  User,
  Phone,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";

type Message = {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
};

export function CustomerSupportChatAdvanced() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Opulent International. How can I assist you today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json",
          "HTTP-Referer": "https://opulent.ai",
          "X-Title": "Opulent Chat",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-zero:free",
          messages: [
            {
              role: "user",
              content: inputValue,
            },
          ],
        }),
      });

      const data = await response.json();
      const replyContent = data?.choices?.[0]?.message?.content || "Sorry, something went wrong.";

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: replyContent,
        sender: "agent",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Sorry, we couldn't reach the server.",
          sender: "agent",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.3);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const chatVariants = {
    hidden: isMobile
      ? { opacity: 0, y: "100%" }
      : { opacity: 0, scale: 0.8, y: 20 },
    visible: isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 },
    exit: isMobile
      ? { opacity: 0, y: "100%" }
      : { opacity: 0, scale: 0.8, y: 20 },
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && messages.length > 1 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-16 right-6 z-50 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
          >
            {messages.length - 1}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        className={`fixed ${isMobile ? "bottom-4 right-4" : "bottom-6 right-6"} z-50 rounded-full w-14 h-14 flex items-center justify-center shadow-lg ${isOpen ? "bg-gray-600" : "bg-primary"}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Customer Support"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageSquare size={24} className="text-white" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatVariants}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`fixed z-50 bg-white shadow-xl flex flex-col overflow-hidden border border-gray-200 ${isMobile ? "inset-0 rounded-none" : "bottom-24 right-6 w-[350px] sm:w-[380px] h-[500px] rounded-lg"}`}
          >
            <div className="bg-primary text-white p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                    <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png" alt="Opulent Support" width={30} height={30} className="rounded-full" />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-primary ${isOnline ? "bg-green-500" : "bg-gray-400"}`}></div>
                  </div>
                  <div>
                    <h3 className="font-bold">Opulent Support</h3>
                    <p className="text-xs opacity-80">{isOnline ? "Online" : "Away"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {!isMobile && (
                    <>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-primary-foreground/10 h-8 w-8" aria-label="Voice call">
                        <Phone size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-primary-foreground/10 h-8 w-8" aria-label="Video call">
                        <Video size={16} />
                      </Button>
                    </>
                  )}
                  <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-primary-foreground/10 h-8 w-8" aria-label="Close chat">
                    <X size={16} />
                  </Button>
                </div>
              </div>
              <div className="text-xs opacity-80">
                Our textile specialists are here to help with any questions about our products and services.
              </div>
            </div>

            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                    {message.sender === "agent" && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 flex-shrink-0">
                        <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png" alt="Agent" width={20} height={20} className="rounded-full" />
                      </div>
                    )}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`max-w-[80%] rounded-lg p-3 ${message.sender === "user" ? "bg-primary text-white rounded-br-none" : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"}`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === "user" ? "text-primary-foreground/70" : "text-gray-500"}`}>{formatTime(message.timestamp)}</p>
                    </motion.div>
                    {message.sender === "user" && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0">
                        <User size={16} className="text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2 flex-shrink-0">
                      <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWiM2yMsIL1iQuRa2g7dbwMUmEPz5B.png" alt="Agent" width={20} height={20} className="rounded-full" />
                    </div>
                    <div className="bg-white text-gray-800 rounded-lg rounded-bl-none shadow-sm border border-gray-100 p-3">
                      <div className="flex space-x-1">
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-gray-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary" aria-label="Attach file">
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
                  <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary" aria-label="Add emoji">
                    <Smile size={18} />
                  </Button>
                </div>
                <Button onClick={handleSendMessage} className="bg-primary text-white rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-primary/90" aria-label="Send message" disabled={inputValue.trim() === ""}>
                  <Send size={18} />
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">Your chat is encrypted and secure</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
