"use client";
import * as React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, X, Loader2 } from "lucide-react";

/**
 * ChatWidgetDominant
 * A more eye-catching chat widget with:
 * - Pulsing, gradient FAB with unread badge
 * - Proactive nudge bubble (once per session)
 * - Quick prompt chips to reduce friction
 * - Typing indicator and subtle animations
 * - Full-height sheet on mobile, comfy panel on desktop
 */

type Msg = { role: "user" | "assistant"; content: string };

const QUICK_PROMPTS = [
  "Show me Suman's top projects",
  "What skills does Suman use?",
  "Give me a 30-sec bio",
];

export default function ChatWidgetDominant() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState<Msg[]>([
    { role: "assistant", content: "Hi! I can answer questions about Suman's projects, skills, and experience." },
  ]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [unread, setUnread] = React.useState(0);
  const [showNudge, setShowNudge] = React.useState(false);

  // Proactive nudge once per session
  React.useEffect(() => {
    const key = "chat-nudge-shown";
    if (sessionStorage.getItem(key)) return;
    const t = setTimeout(() => {
      setShowNudge(true);
      sessionStorage.setItem(key, "1");
    }, 5500);
    return () => clearTimeout(t);
  }, []);

  // Reset unread when opened
  React.useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  async function send(textFromChip?: string) {
    const text = (textFromChip ?? input).trim();
    if (!text) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", content: text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...msgs, { role: "user", content: text }] }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: "assistant", content: data.reply ?? "…" }]);
      if (!open) setUnread((n) => Math.min(9, n + 1));
    } catch {
      setMsgs((m) => [...m, { role: "assistant", content: "Sorry, something went wrong." }]);
      if (!open) setUnread((n) => Math.min(9, n + 1));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* Floating Action Button (bigger, gradient, pulsing) */}
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-sky-500 via-fuchsia-500 to-amber-500 text-white shadow-xl outline-none"
          aria-label="Open chat"
          title="Chat with the AI assistant"
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            animate={{ boxShadow: ["0 0 0 0 rgba(255,255,255,0.6)", "0 0 0 16px rgba(255,255,255,0)"] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <Bot className="relative h-6 w-6 drop-shadow-sm" />
          {/* Unread badge */}
          <AnimatePresence>
            {unread > 0 && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-white text-[11px] font-semibold text-slate-900 shadow"
              >
                {unread}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </SheetTrigger>

      {/* One-time nudge bubble */}
      <AnimatePresence>
        {showNudge && !open && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-24 right-6 z-40 max-w-[240px] rounded-2xl bg-white/95 p-3 text-sm text-slate-900 shadow-xl backdrop-blur dark:bg-white/10 dark:text-white"
          >
            <div className="flex items-start gap-2">
              <Sparkles className="mt-[2px] h-4 w-4" />
              <p>Ask me about Suman's projects or get a quick portfolio tour.</p>
              <button
                className="ml-auto rounded-md p-1 text-slate-500 hover:bg-slate-100/60 dark:hover:bg-white/10"
                onClick={() => setShowNudge(false)}
                aria-label="Dismiss"
                title="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SheetContent className="flex max-h-[85vh] w-full flex-col p-0 sm:max-w-lg">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <SheetHeader>
            <SheetTitle>AI Assistant</SheetTitle>
          </SheetHeader>
          <div className="text-xs text-slate-500 dark:text-slate-400">Answers in seconds</div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
          {msgs.map((m, i) => (
            <motion.div key={i} className={m.role === "user" ? "text-right" : "text-left"} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
              <div
                className={`inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                }`}
              >
                {m.content}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <AnimatePresence>
            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="inline-flex items-center gap-1 rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-white">
                  <Dot /> <Dot delay={0.12} /> <Dot delay={0.24} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick prompts */}
        <div className="flex flex-wrap gap-2 border-t px-3 py-2">
          {QUICK_PROMPTS.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="rounded-full border border-slate-300/70 bg-white px-3 py-1 text-xs text-slate-700 hover:bg-slate-50 active:scale-[0.98] dark:border-white/20 dark:bg-white/10 dark:text-white"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Composer */}
        <div className="flex items-end gap-2 border-t p-2">
          <Textarea
            placeholder="Ask about Suman’s work…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" && !e.shiftKey ? (e.preventDefault(), send()) : null)}
            className="min-h-[44px]"
          />
          <Button onClick={() => send()} disabled={loading} className="min-w-[88px]">
            {loading ? (
              <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin"/> Sending</span>
            ) : (
              "Send"
            )}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className="inline-block h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-200"
      initial={{ opacity: 0.2, y: 0 }}
      animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, delay }}
    />
  );
}
