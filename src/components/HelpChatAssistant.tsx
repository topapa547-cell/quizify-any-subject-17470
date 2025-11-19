import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Trash2, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { streamHelpChat } from "@/utils/helpChatStream";
import { toast } from "sonner";

type Message = { role: "user" | "assistant"; content: string };

const HelpChatAssistant = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickQuestions = language === "hindi" 
    ? [
        "MCQ quiz कैसे शुरू करें?",
        "Points कैसे मिलते हैं?",
        "League system क्या है?",
        "Daily Challenge क्या है?",
      ]
    : [
        "How to start MCQ quiz?",
        "How do I earn points?",
        "What is the league system?",
        "What is Daily Challenge?",
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || isLoading) return;

    const userMsg: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (nextChunk: string) => {
      assistantSoFar += nextChunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamHelpChat({
        messages: [...messages, userMsg],
        language: language === "hindi" ? "hindi" : "english",
        onDelta: (chunk) => upsertAssistant(chunk),
        onDone: () => setIsLoading(false),
        onError: (error) => {
          setIsLoading(false);
          toast.error(error.message);
        },
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error(t("कुछ गलत हो गया। कृपया पुनः प्रयास करें।", "Something went wrong. Please try again."));
    }
  };

  const clearChat = () => {
    setMessages([]);
    toast.success(t("चैट साफ़ हो गई", "Chat cleared"));
  };

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Bot className="w-6 h-6 text-primary" />
            {t("🤖 AI सहायक", "🤖 AI Assistant")}
          </CardTitle>
          {messages.length > 0 && (
            <Button variant="ghost" size="sm" onClick={clearChat}>
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {t("मुझसे ऐप के बारे में कुछ भी पूछें", "Ask me anything about the app")}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Quick Questions */}
        {messages.length === 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {t("त्वरित प्रश्न:", "Quick questions:")}
            </p>
            <div className="grid grid-cols-1 gap-2">
              {quickQuestions.map((q, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  className="justify-start text-left h-auto py-2 px-3"
                  onClick={() => handleSend(q)}
                >
                  {q}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.length > 0 && (
          <div
            ref={chatContainerRef}
            className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-gradient-to-r from-purple-100 to-blue-100 text-foreground border border-primary/20"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <Bot className="w-4 h-4 inline-block mr-2 text-primary" />
                  )}
                  <span className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 text-foreground border border-primary/20 rounded-lg px-4 py-2">
                  <Bot className="w-4 h-4 inline-block mr-2 text-primary" />
                  <Loader2 className="w-4 h-4 inline-block animate-spin" />
                  <span className="ml-2 text-sm">{t("सोच रहा हूँ...", "Thinking...")}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder={t("अपना प्रश्न यहाँ टाइप करें...", "Type your question here...")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            disabled={isLoading}
            className="flex-1"
          />
          <Button onClick={() => handleSend()} disabled={!input.trim() || isLoading} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HelpChatAssistant;
