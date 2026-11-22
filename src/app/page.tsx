import { HugeiconsIcon } from "@hugeicons/react";
import {
  Rocket01Icon,
  SparklesIcon,
  CodeIcon,
  Layers01Icon,
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";

export default function Home() {
  const features = [
    {
      title: "Next.js App Router",
      description: "Modern React 19 architecture with server components, streaming, and Turbopack.",
      icon: Rocket01Icon,
      badge: "Framework",
    },
    {
      title: "Tailwind CSS v4",
      description: "High-performance CSS utility engine with native CSS imports and theme variables.",
      icon: Layers01Icon,
      badge: "Styling",
    },
    {
      title: "Hugeicons",
      description: "Crisp, customizable SVG icons designed on a 24x24 grid with first-class React support.",
      icon: SparklesIcon,
      badge: "Icons",
    },
  ];

  const quickLinks = [
    { text: "TypeScript Configured", icon: Tick01Icon },
    { text: "Tailwind CSS v4 Ready", icon: Tick01Icon },
    { text: "Hugeicons Integrated", icon: Tick01Icon },
    { text: "App Router & Turbopack", icon: Tick01Icon },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col items-center justify-center p-6 sm:p-12">
      <div className="max-w-4xl w-full mx-auto space-y-12">
        {/* Header / Hero */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-400 dark:border-emerald-800">
            <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} strokeWidth={2} />
            <span>Setup Complete & Ready</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Next.js + Tailwind CSS + Hugeicons
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Your project is initialized and pre-configured. Start building your modern web application with sleek styling and rich icon sets.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200">
                    <HugeiconsIcon icon={feature.icon} size={22} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {feature.badge}
                  </span>
                </div>
                <h2 className="text-lg font-semibold">{feature.title}</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Check & Code Snippet */}
        <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <HugeiconsIcon icon={CodeIcon} size={20} strokeWidth={2} />
            <span>Using Hugeicons in your components</span>
          </div>

          <pre className="p-4 rounded-xl bg-zinc-900 text-zinc-100 text-xs sm:text-sm font-mono overflow-x-auto dark:bg-black/80 border border-zinc-800">
{`import { HugeiconsIcon } from "@hugeicons/react";
import { Rocket01Icon } from "@hugeicons/core-free-icons";

export function Example() {
  return <HugeiconsIcon icon={Rocket01Icon} size={24} className="text-blue-500" />;
}`}
          </pre>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {quickLinks.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                <HugeiconsIcon icon={item.icon} size={16} strokeWidth={2.5} className="text-emerald-500" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <footer className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <span className="text-zinc-500 dark:text-zinc-400">
            Run the development server:
          </span>
          <code className="px-3 py-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 font-mono text-xs">
            pnpm dev
          </code>
        </footer>
      </div>
    </div>
  );
}
