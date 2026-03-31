export const DEMO_HREF = "https://calendly.com/nalingupta/30-mins?back=1";

export const IMG_VOICE =
  "https://framerusercontent.com/images/PxlLrohfB7vbY2kpZerhM94.png?width=2400&height=1792";
export const IMG_CHAT =
  "https://framerusercontent.com/images/4i8yutZEGOPt1G5gTBEv2B0.png?width=2400&height=1792";
export const IMG_COPILOT =
  "https://framerusercontent.com/images/hRQDmrCECh64X0oUBxf83WRpEs.webp?width=2400&height=1792";

/** One scripted line in the demo conversation (screenshot sequence). */
type ScriptLine =
  | { role: "user"; text: string }
  | { role: "agent"; text: string; variant?: "default" | "typing" };

export const SCRIPT: ScriptLine[] = [
  {
    role: "user",
    text: "Hi, my checkout keeps failing when I try to pay with my credit card. Can you help?",
  },
  {
    role: "agent",
    variant: "typing",
    text: "Checking your payment details…",
  },
  {
    role: "agent",
    text: "Of course. Are you seeing an error message on the checkout screen or is it just not moving forward after you click Pay?",
  },
  {
    role: "user",
    text: "It shows “Payment could not be processed, try again later.”",
  },
  {
    role: "agent",
    variant: "typing",
    text: "checking the reason…",
  },
  {
    role: "agent",
    text: "Got it. I checked on your region. That error usually shows up when the bank blocks online payments. Can you confirm if you have used this card for online purchases in the last 24 hours?",
  },
  {
    role: "agent",
    variant: "typing",
    text: "Thinking…",
  },
  {
    role: "agent",
    text: "Should I send the payment link to your email ********@gmail.com?",
  },
];

export const STEP_MS = 2600;

export const COPILOT_PROMPT = "So what is the correct response for this case?";

export const SEARCH_STATUS = "searched through docs";

export const TYPING_LINE = "Checking installation guide";

export const COPILOT_ANSWER =
  "Your AC model uses the NEC 32 - bit IR protocol with temperature commands encoded in the final 8 bits. I can also output the full command table if you want to plug it into your hub.";

export const COPILOT_FOLLOWUP = "Would you like me to show the quick 3 - step guide?";

export const MAX_STEP = 6;

export const JOHN_AVATAR_SRC =
  "https://framerusercontent.com/images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg?width=96&height=96";

type ChatTurn = {
  from: "customer" | "agent";
  text: string;
  /** substring to highlight (Framer: "mounting") */
  highlight?: string;
};

export const CUSTOMER_CHAT_SCRIPT: ChatTurn[] = [
  {
    from: "customer",
    text: "Hi, I booked an installation for my AC. Can I reschedule it?",
  },
  {
    from: "agent",
    text: "Yep, just tell me your preferred date and I'll update it for you.",
  },
  {
    from: "customer",
    text: "Also, does the technician bring the mounting brackets?",
    highlight: "mounting",
  },
  {
    from: "agent",
    text: "Yes, standard brackets are included by default.",
  },
  {
    from: "customer",
    text: "My home automation hub needs the AC's exact IR command format. Do you know which protocol the model uses?",
  },
  {
    from: "agent",
    text: "Let me check with the team and get back you",
  },
];

export const bubbleBase =
  "max-w-[80%] rounded-xl px-3.5 py-2.5 text-left text-[11.5px] leading-[1.5] tracking-[-0.02em] whitespace-pre-wrap shadow-[0_1px_2px_rgba(15,23,42,0.06),0_0_0_1px_rgba(15,23,42,0.03)]";


export const INTENTS = [
  {
    id: "order",
    label: "Order tracking",
    prompt: "Where is my order?",
    reply:
      "It’s out for delivery and should arrive tomorrow by 6pm. I’ll text you the tracking link.",
  },
  {
    id: "refund",
    label: "Refund request",
    prompt: "I need a refund for my last purchase.",
    reply:
      "I can start a refund now — it usually posts in 5–7 business days to your original payment method.",
  },
  {
    id: "tech",
    label: "Tech support",
    prompt: "The app keeps crashing on login.",
    reply:
      "Try clearing cache and updating to the latest build. If it still crashes, I’ll escalate with a ticket number.",
  },
  {
    id: "billing",
    label: "Billing",
    prompt: "How do I upgrade my plan?",
    reply:
      "You can upgrade directly from your account settings under Plan & billing — I can walk you through it.",
  },
] as const;
