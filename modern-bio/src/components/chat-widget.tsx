"use client";
import * as React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState<Msg[]>([
    { role: "assistant", content: "Hi! Ask me about my research, projects, or publications." },
  ]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMsgs(m => [...m, { role: "user", content: text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...msgs, { role: "user", content: text }] }),
      });
      const data = await res.json();
      setMsgs(m => [...m, { role: "assistant", content: data.reply ?? "…" }]);
    } catch {
      setMsgs(m => [...m, { role: "assistant", content: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg border bg-white dark:bg-slate-900"
          aria-label="Open chat"
          title="Chat"
        >💬</button>
      </SheetTrigger>

      <SheetContent className="max-h-[80vh] flex flex-col">
        <SheetHeader><SheetTitle>AI Assistant</SheetTitle></SheetHeader>

        <div className="px-1 py-3 space-y-3 overflow-y-auto flex-1">
          {msgs.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
              <div className={`inline-block max-w-[85%] px-3 py-2 rounded-2xl text-sm ${
                m.role === "user"
                  ? "bg-slate-800 text-white dark:bg-white dark:text-slate-900"
                  : "bg-slate-100 dark:bg-slate-800"
              }`}>{m.content}</div>
            </div>
          ))}
        </div>

        <div className="p-2 border-t flex gap-2">
          <Textarea
            placeholder="Ask about my work…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey ? (e.preventDefault(), send()) : null}
          />
          <Button onClick={send} disabled={loading}>{loading ? "…" : "Send"}</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
