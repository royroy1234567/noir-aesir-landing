import { motion } from "framer-motion";
import { Swords, Flame, Shield, Crown, Users, Trophy, ChevronRight, Zap } from "lucide-react";
import heroImg from "@/assets/hero-noir.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Embers() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="ember-float absolute block h-1 w-1 rounded-full bg-[var(--ember)]"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 5) * 0.6}s`,
            animationDuration: `${3 + (i % 4)}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-ember shadow-ember">
            <Flame className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-[0.2em] text-foreground">
            NOIR <span className="text-ember">AESIR</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {["Saga", "Pillars", "Ranks", "Join"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-body text-sm tracking-widest text-muted-foreground uppercase transition-colors hover:text-rune">
              {l}
            </a>
          ))}
        </div>
        <a href="#join" className="group flex items-center gap-2 rounded-sm bg-ember px-5 py-2.5 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-ember transition-transform hover:scale-105">
          Enlist
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 noise-overlay">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Noir Aesir warrior shrouded in ember and shadow" width={1536} height={1024} className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-background" />
      </div>
      <Embers />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ember" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">Mobile Legends · Est. 2024</span>
          </div>
        </motion.div>

        <motion.h1
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-6xl font-black tracking-[0.05em] text-foreground md:text-8xl lg:text-9xl"
        >
          NOIR <span className="text-ember text-glow-ember">AESIR</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-rune to-transparent"
        />

        <motion.p
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Forged in shadow. Bound by fire. A brotherhood of Mobile Legends warriors
          chasing rank, glory, and the eternal grind of the Land of Dawn.
        </motion.p>

        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#join" className="group flex items-center gap-3 bg-ember px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground shadow-ember pulse-glow transition-transform hover:scale-105">
            <Swords className="h-4 w-4" />
            Join the Aesir
          </a>
          <a href="#saga" className="group flex items-center gap-3 border border-border bg-card/30 px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.25em] text-foreground backdrop-blur-sm transition-colors hover:border-rune hover:text-rune">
            Read the Saga
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-border/40 pt-8"
        >
          {[
            { v: "1.2K+", l: "Warriors" },
            { v: "Mythic", l: "Avg Rank" },
            { v: "24/7", l: "Scrim Lobby" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-bold text-rune md:text-4xl">{s.v}</div>
              <div className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Saga() {
  return (
    <section id="saga" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-ember">— The Saga</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Born from the <span className="text-rune text-glow-rune">night</span>.<br />
            Tempered by the <span className="text-ember">flame</span>.
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-lg leading-relaxed text-muted-foreground">
            Noir Aesir is no ordinary squad. We are a sworn fellowship of Mobile Legends
            players — strategists, carries, junglers, supports — united by the hunger
            for mastery. Every match is a hunt. Every rotation, a ritual.
          </motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg leading-relaxed text-muted-foreground">
            From dawn-stack scrims to midnight ranked grinds, we sharpen one another.
            No tilt. No toxicity. Only the cold discipline of warriors who know that
            legend is forged — never given.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  { icon: Shield, title: "Brotherhood", text: "A drama-free hall where every warrior has each other's back — in queue and out." },
  { icon: Trophy, title: "Competitive", text: "Internal scrims, tournament squads, and coached VOD reviews to climb the ladder." },
  { icon: Zap, title: "Daily Grind", text: "Active stacks across all timezones. Always a lobby. Always a fight." },
  { icon: Crown, title: "Mastery", text: "Hero pools, draft theory, macro calls — we study the game like a craft." },
];

function Pillars() {
  return (
    <section id="pillars" className="relative border-y border-border/40 bg-card/20 px-6 py-32 noise-overlay">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-ember">— Our Pillars</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">Four Runes. One Code.</h2>
        </motion.div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rune-border group relative rounded-sm p-8 transition-transform hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-rune transition-colors group-hover:bg-ember group-hover:text-primary-foreground">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-wider text-foreground">{p.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ranks = [
  { tier: "I", name: "Initiate", desc: "Newly sworn. Learning the codes of the Aesir." },
  { tier: "II", name: "Berserker", desc: "Proven in ranked. Trusted in scrims and stacks." },
  { tier: "III", name: "Vanguard", desc: "Mythic+ warriors. Tournament-ready core roster." },
  { tier: "IV", name: "Aesir Lord", desc: "The few. The flame-bearers. Council of leadership." },
];

function Ranks() {
  return (
    <section id="ranks" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-ember">— Hierarchy</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">Path of the Warrior</h2>
        </motion.div>
        <div className="mt-16 space-y-4">
          {ranks.map((r, i) => (
            <motion.div
              key={r.tier}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center gap-6 border-l-2 border-border bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-l-ember hover:bg-card/70 md:gap-8 md:p-8"
            >
              <div className="font-display text-5xl font-black text-ember/30 transition-colors group-hover:text-ember md:text-7xl">
                {r.tier}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold tracking-widest text-foreground md:text-2xl">{r.name.toUpperCase()}</h3>
                <p className="mt-2 font-body text-sm text-muted-foreground md:text-base">{r.desc}</p>
              </div>
              <ChevronRight className="hidden h-6 w-6 text-muted-foreground transition-all group-hover:translate-x-2 group-hover:text-rune md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="relative overflow-hidden px-6 py-32 noise-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.22_25/0.15),transparent_60%)]" />
      <Embers />
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <Flame className="mx-auto h-12 w-12 text-ember text-glow-ember" />
          <h2 className="mt-8 font-display text-5xl font-black leading-tight text-foreground md:text-7xl">
            The fire <span className="text-ember text-glow-ember">awaits</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg text-muted-foreground">
            Step into the hall. Bring your Mythic ambition, your hero pool, and your honor.
            The Aesir do not recruit — we summon.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" className="group flex items-center gap-3 bg-ember px-10 py-5 font-body text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground shadow-ember pulse-glow transition-transform hover:scale-105">
              <Users className="h-4 w-4" />
              Join Discord
            </a>
            <a href="#" className="flex items-center gap-3 border border-border bg-card/30 px-10 py-5 font-body text-sm font-bold uppercase tracking-[0.25em] text-foreground backdrop-blur-sm transition-colors hover:border-rune hover:text-rune">
              Apply for Roster
            </a>
          </div>
          <p className="mt-8 font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Mythic+ preferred · All roles · Recruitment open
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-onyx px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-ember">
            <Flame className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-sm font-bold tracking-[0.25em] text-muted-foreground">
            NOIR AESIR © {new Date().getFullYear()}
          </span>
        </div>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
          For glory. For the grind. For the Aesir.
        </p>
      </div>
    </footer>
  );
}

export function NoirLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Saga />
        <Pillars />
        <Ranks />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
