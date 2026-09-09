import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Flame,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import logoImg from "@/assets/raceface-logo.jpg";
import ridersImg from "@/assets/raceface-riders.jpg";
import podiumImg from "@/assets/raceface-podium.jpg";
import nationalsImg from "@/assets/NATIONALS.jpg";
import athleteImg from "@/assets/raceface-athlete.jpg";
import sanjayImg from "@/assets/SANJAY.jpeg";
import sivaImg from "@/assets/SHIVA.jpeg";
import rajuImg from "@/assets/RAJU.jpg";
import perryImg from "@/assets/perry1.jpg";
import dhilipImg from "@/assets/DHILIP.jpg";

const WHATSAPP_NUMBER = "918838396148";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20RaceFace%20Coaching%2C%20I%27d%20like%20to%20talk%20about%20a%20training%20plan.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RaceFace Coaching | Train With Purpose" },
      {
        name: "description",
        content:
          "Personalized cycling, running, and strength coaching for athletes who want to train with purpose and race with confidence.",
      },
      { property: "og:title", content: "RaceFace Coaching | Train With Purpose" },
      {
        property: "og:description",
        content: "Personalized plans for cyclists and runners, built around your goals and real life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const plans = [
  {
    name: "Flex Plan",
    price: "₹3K",
    cadence: "Monthly flexibility",
    accent: "plan-cyan",
    features: [
      "Training plan updated every 4 weeks",
      "1 monthly progress review call",
      "Weekly WhatsApp & text support",
      "Pacing & heart rate zone setup",
    ],
  },
  {
    name: "Advantage Plan",
    price: "₹5K",
    cadence: "Bi-weekly updates",
    accent: "plan-orange",
    popular: true,
    features: [
      "Training plan updated every 2 weeks",
      "1 coaching call every 2 weeks",
      "Workout file analysis & metrics",
      "Weekly text / message support",
      "Target race strategy & nutrition",
    ],
  },
  {
    name: "Elite Plan",
    price: "₹8K",
    cadence: "Weekly precision",
    accent: "plan-red",
    features: [
      "Training plan updated every week",
      "1 coaching call every week",
      "Daily text & message communication",
      "Full race simulation & power profiling",
      "Custom strength & recovery integration",
    ],
  },
];

const services = [
  {
    number: "01",
    title: "Cycling Coaching",
    copy: "A personalized plan built around your power metrics, schedule, terrain, and target races—from gran fondos to state road championships.",
    footer: "Custom power plan · Ongoing feedback",
  },
  {
    number: "02",
    title: "Running Coaching",
    copy: "Smart, progressive run training that balances mileage volume, threshold intervals, strength work, and recovery.",
    footer: "5K to marathon · Peak performance",
  },
  {
    number: "03",
    title: "1:1 Strength & Conditioning",
    copy: "Endurance-specific strength sessions to build injury resilience, core power, and sustainable wattage on the road.",
    footer: "Personal sessions · Athlete-specific",
  },
];

const spotlightAthletes = [
  {
    name: "Sree Vinayak",
    badge: "Athlete Journey · Sree Vinayak",
    image: athleteImg,
    alt: "Young RaceFace cyclist Sree Vinayak standing with Trek road bike at coastal breakwater",
    statHeader: "Under-10 Champion",
    statDesc: "Fastest in Under-10, Tamilnadu, Top athelte in India.",
    kicker: "Athlete Spotlight",
    title: "Developing tomorrow’s champions with 1:1 attention.",
    lede: "True speed and endurance aren't built in a single day. They are sculpted through focused miles, dedicated technique drills, and passionate mentorship from coaches who ride alongside you.",
    highlights: [
      {
        title: "Championship Pedigree",
        desc: "Athletes competing and winning in State Cycling Championships and open endurance races.",
        icon: Trophy,
      },
      {
        title: "Individualized Metrics",
        desc: "Heart rate, power zones, and recovery tracking tailored to real biology, not generic algorithms.",
        icon: Zap,
      },
      {
        title: "Real Accountability",
        desc: "Direct mentor communication that adapts when life, work, or fatigue demands adjustments.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    name: "Sanjay",
    badge: "Athlete Journey · Sanjay",
    image: sanjayImg,
    alt: "RaceFace athlete Sanjay, National Championship Silver Medalist",
    statHeader: "National & Asian Championship",
    statDesc: "Silver in National Championship'25, Represented India in Asian Champs",
    kicker: "Athlete Spotlight",
    title: "From State Excellence to Asian Championship representation.",
    lede: "Relentless discipline, precision aerodynamic power pacing, and international-caliber training blocks turned potential into podium silver on the national stage.",
    highlights: [
      {
        title: "National Silver Medalist",
        desc: "Secured Silver in National Championship 2025 with masterclass race execution and tactical pacing.",
        icon: Award,
      },
      {
        title: "International Representation",
        desc: "Selected to represent India in the Asian Championships, racing against the continent's best.",
        icon: Trophy,
      },
      {
        title: "Elite Power Development",
        desc: "Bespoke high-wattage sprint profiles and lactate threshold conditioning sculpted by RaceFace.",
        icon: Zap,
      },
    ],
  },
  {
    name: "Siva Prakash",
    badge: "Athlete Journey · Siva Prakash",
    image: sivaImg,
    alt: "RaceFace athlete Siva Prakash, All India Police Nationalist",
    statHeader: "All India Police Nationalist",
    statDesc: "All India Police National Medalist ",
    kicker: "Athlete Spotlight",
    title: "Disciplined grit & high-velocity power on the national stage.",
    lede: "Balancing the call of duty with grueling endurance training, Siva Prakash channels unwavering dedication into national-level racing results powered by individualized lactate and cadence strategies.",
    highlights: [
      {
        title: "All India Police Nationalist",
        desc: "Representing with distinction and podium-grade consistency at the All India Police National events.",
        icon: Award,
      },
      {
        title: "High-Output Endurance Pacing",
        desc: "Precision threshold conditioning and aggressive aerobic wattage engineered for grueling breakaways.",
        icon: Zap,
      },
      {
        title: "Duty & Athletic Mastery",
        desc: "Tailored training structures harmonized around demanding duty hours to keep form peak on race day.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    name: "Raju",
    badge: "Athlete Journey · Raju",
    image: rajuImg,
    alt: "RaceFace athlete Raju, Under-14 Silver Medalist representing Tamil Nadu in Nationals",
    statHeader: "Under-14 Silver Medalist",
    statDesc: "Under-14 Silver Medalist · Representing TamilNadu in Nationals",
    kicker: "Athlete Spotlight",
    title: "Rising prodigy representing Tamil Nadu at the National Championships.",
    lede: "With explosive juvenile cadence, strategic race acumen, and relentless dedication, Raju claimed Silver in the Under-14 category, earning his selection to represent Tamil Nadu on the prestigious national stage.",
    highlights: [
      {
        title: "Under-14 Silver Medalist",
        desc: "Secured Silver medal at the state championships with clinical finish-line acceleration and tactical positioning.",
        icon: Trophy,
      },
      {
        title: "Representing Tamil Nadu in Nationals",
        desc: "Officially selected to wear the state colors and represent Tamil Nadu in the National Championships.",
        icon: Award,
      },
      {
        title: "Youth Precision Coaching",
        desc: "Scientific power profiling and youth endurance progression sculpted under RaceFace mentorship.",
        icon: Zap,
      },
    ],
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [athleteIndex, setAthleteIndex] = useState(0);

  const currentAthlete = spotlightAthletes[athleteIndex];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      {/* Header */}
      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="RaceFace Coaching home" onClick={closeMenu}>
          <img src={logoImg} alt="RaceFace Coaching Logo" />
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#approach" onClick={closeMenu}>
            Approach
          </a>
          <a href="#spotlight" onClick={closeMenu}>
            Athletes
          </a>
          <a href="#coaching" onClick={closeMenu}>
            Coaching
          </a>
          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>
          <a href="#results" onClick={closeMenu}>
            Results
          </a>
          <a href="#about" onClick={closeMenu}>
            About Us
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="nav-cta"
          >
            Start your coaching journey <ArrowRight size={16} />
          </a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </header>

      {/* Hero Section */}
      <section id="top" className="hero-section page-section">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="spark">✣</span> Personalized coaching for cyclists &amp; runners
          </div>
          <h1>
            Train with <strong>purpose.</strong> <em>Race with confidence.</em>
          </h1>
          <p className="hero-lede">
            Your goal is personal. Your training should be too. Get expert structure, honest feedback,
            and a plan that evolves with you every single week.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg" className="button-coral">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Start your journey <ArrowRight size={18} />
              </a>
            </Button>
            <a className="text-link" href="#coaching">
              Explore coaching <ArrowRight size={16} />
            </a>
          </div>
          <div className="community-row">
            <div className="avatar-stack" aria-hidden="true">
              <span>RUN</span>
              <span>RIDE</span>
              <span>RF</span>
            </div>
            <div>
              <strong>A dedicated athlete community</strong>
              <small>Road cyclists, runners &amp; endurance racers</small>
            </div>
          </div>
        </div>

        <div className="hero-media-wrap">
          <div className="hero-ring hero-ring-one" />
          <div className="hero-ring hero-ring-two" />
          <div className="hero-image-frame">
            <img src={ridersImg} alt="RaceFace athletes riding together in team kits on road training" />
          </div>
          <div className="status-card status-top">
            <span className="status-icon">
              <Play size={14} fill="currentColor" />
            </span>
            <div>
              <small>This week</small>
              <strong>Training on track</strong>
            </div>
          </div>
          <div className="status-card status-bottom">
            <span className="status-check">
              <Check size={16} />
            </span>
            <div>
              <strong>Race plan ready</strong>
              <small>Pacing · Fuel · Mindset</small>
            </div>
          </div>
          <p className="image-caption">
            Build the engine.
            <br />
            Earn the finish. ↗
          </p>
        </div>
      </section>

      {/* Marquee Strip */}
      <section className="marquee-strip" aria-label="RaceFace coaching benefits">
        <span>Personalized plans</span>
        <b>✦</b>
        <span>Smart recovery</span>
        <b>✦</b>
        <span>Race-day ready</span>
        <b>✦</b>
        <span>State championship proven</span>
        <b>✦</b>
        <span>Stronger athletes</span>
      </section>

      {/* Approach Section */}
      <section id="approach" className="approach-section page-section">
        <div className="split-intro">
          <div>
            <div className="section-kicker">The RaceFace approach</div>
            <h2>Consistency beats intensity when intensity has no direction.</h2>
          </div>
          <div className="intro-side">
            <p>
              Great coaching connects daily sessions to the bigger breakthrough. We combine your data,
              perceived exertion, schedule, and recovery to create progressive, sustainable gains.
            </p>
            <a className="text-link" href="#coaching">
              Find your coaching path <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="why-panel" id="philosophy">
          <div className="why-copy">
            <div className="section-kicker">Why coaching works</div>
            <h2>From random workouts to real progress.</h2>
            <p>
              You bring the goal. RaceFace brings the scientific structure, accountability, and
              adaptations that propel you forward.
            </p>
          </div>
          <div className="reason-list">
            {[
              "A plan built for your specific physiology—not a generic template",
              "Training that adapts dynamically to your progress and real schedule",
              "Strength, core, and recovery seamlessly integrated into your weeks",
              "Calm, tactical confidence when you line up on race day",
            ].map((reason, index) => (
              <div className="reason-row" key={reason}>
                <span>0{index + 1}</span>
                <strong>{reason}</strong>
                <Check size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Spotlight & Dedicated Training Section */}
      <section id="spotlight" className="athlete-spotlight-section page-section">
        <div className="spotlight-card">
          <div className="spotlight-media">
            <div className="spotlight-image-wrapper">
              <img
                key={currentAthlete.name}
                src={currentAthlete.image}
                alt={currentAthlete.alt}
                className="spotlight-fade-img"
              />
              <div className="spotlight-badge">
                <span className="badge-pulse" />
                <span>{currentAthlete.badge}</span>
              </div>
              <div className="spotlight-stat-box">
                <div className="stat-header">
                  <Flame size={16} className="text-coral" />
                  <strong>{currentAthlete.statHeader}</strong>
                </div>
                <p>{currentAthlete.statDesc}</p>
              </div>

              {/* Swipe Right Button (Click to load Sanjay from Sree, or next athlete) */}
              <button
                type="button"
                className="spotlight-swipe-btn spotlight-swipe-next"
                onClick={() => setAthleteIndex((prev) => (prev + 1) % spotlightAthletes.length)}
                aria-label={`Swipe to ${spotlightAthletes[(athleteIndex + 1) % spotlightAthletes.length].name}`}
                title={`Swipe to ${spotlightAthletes[(athleteIndex + 1) % spotlightAthletes.length].name}`}
              >
                <ChevronRight size={24} />
              </button>

              {/* Swipe Left Button (Click to load previous athlete) */}
              {athleteIndex > 0 && (
                <button
                  type="button"
                  className="spotlight-swipe-btn spotlight-swipe-prev"
                  onClick={() => setAthleteIndex((prev) => (prev - 1 + spotlightAthletes.length) % spotlightAthletes.length)}
                  aria-label={`Swipe to ${spotlightAthletes[(athleteIndex - 1 + spotlightAthletes.length) % spotlightAthletes.length].name}`}
                  title={`Swipe to ${spotlightAthletes[(athleteIndex - 1 + spotlightAthletes.length) % spotlightAthletes.length].name}`}
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Quick switch indicator dots */}
              <div className="spotlight-indicators">
                {spotlightAthletes.map((item, idx) => (
                  <button
                    key={item.name}
                    type="button"
                    className={`indicator-dot ${idx === athleteIndex ? "is-active" : ""}`}
                    onClick={() => setAthleteIndex(idx)}
                    aria-label={`Switch to ${item.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="spotlight-content">
            <div className="spotlight-tabs-row">
              <div className="section-kicker">{currentAthlete.kicker}</div>
              <div className="athlete-selector-pills">
                {spotlightAthletes.map((item, idx) => (
                  <button
                    key={item.name}
                    type="button"
                    className={`athlete-pill-btn ${idx === athleteIndex ? "is-active" : ""}`}
                    onClick={() => setAthleteIndex(idx)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <h2>{currentAthlete.title}</h2>
            <p className="spotlight-lede">{currentAthlete.lede}</p>
            <div className="spotlight-highlights">
              {currentAthlete.highlights.map((item) => (
                <div className="highlight-item" key={item.title}>
                  <div className="highlight-icon">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="spotlight-actions">
              <Button asChild size="lg" className="button-coral">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Talk with Coach <ArrowRight size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Services Section */}
      <section id="coaching" className="coaching-section page-section">
        <div className="section-kicker">Coaching services</div>
        <div className="services-heading">
          <h2>Built for the athlete you are — and the one you’re becoming.</h2>
          <p>
            Whether you’re chasing your first 100km ride, a marathon PB, or podium positions at state
            events, your coaching begins with your goals.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-top">
                <span className="service-icon">{index === 0 ? "◈" : index === 1 ? "◎" : "♧"}</span>
                <span>{service.number}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
              <div className="service-footer">
                <strong>{service.footer}</strong>
                <ArrowRight size={18} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section page-section">
        <div className="section-kicker section-kicker-light">Custom cycling &amp; running plans</div>
        <h2>Choose your level of coaching.</h2>
        <p className="pricing-lede">
          All plans are billed monthly. Every athlete receives fully individualized programming
          calibrated to your current fitness, schedule, and race calendar.
        </p>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article
              className={`plan-card ${plan.accent} ${plan.popular ? "is-popular" : ""}`}
              key={plan.name}
            >
              {plan.popular && <span className="popular-badge">Most popular</span>}
              <div className="price-line">
                <strong>{plan.price}</strong>
                <span>/ month</span>
              </div>
              <h3>{plan.name}</h3>
              <div className="plan-cadence">{plan.cadence}</div>
              <div className="plan-divider" />
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="plan-button">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20RaceFace%20Coaching%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Choose {plan.name} <ArrowRight size={18} />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      {/* Story & Championship Results Section */}
      <section id="results" className="story-section page-section">
        <div className="story-image">
          <img
            src={nationalsImg}
            alt="RaceFace athletes celebrating on the National Championship podium"
          />
          <span className="story-tag">National Championship 2026 · Proven Podiums</span>
        </div>
        <div className="story-copy">
          <div className="section-kicker">Real Work. Real Finishes.</div>
          <h2>Train for the moment you’ve been imagining.</h2>
          <p>
            From the quiet early-morning training miles to standing tall on the championship podium,
            RaceFace turns hard preparation into unforgettable race-day results.
          </p>
          <div className="story-checklist">
            <div className="story-check-item">
              <Check size={18} className="text-coral" />
              <span>Championship-caliber race pacing &amp; tactics</span>
            </div>
            <div className="story-check-item">
              <Check size={18} className="text-coral" />
              <span>Tailored tapering and peak fitness timing</span>
            </div>
            <div className="story-check-item">
              <Check size={18} className="text-coral" />
              <span>Comprehensive post-race debriefs</span>
            </div>
          </div>
          <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Tell us what you’re training for <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section page-section">
        <div className="about-card">
          <div className="about-media">
            <div className="about-coaches-stack">
              <div className="about-image-wrapper">
                <img
                  src={dhilipImg}
                  alt="Coach Dhilipan, performance endurance coach at RaceFace Coaching"
                />
                <div className="about-badge">
                  <span className="badge-pulse" />
                  <span>Dilipan Raj · Coach</span>
                </div>
              </div>

              <div className="about-image-wrapper">
                <img
                  src={perryImg}
                  alt="Coach Phiramoth (Perry), founder and head coach of RaceFace Coaching"
                />
                <div className="about-badge">
                  <span className="badge-pulse" />
                  <span>Phiramoth · Coach</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="eyebrow">
              <span className="spark">✣</span> Est. 2021 · About RaceFace Coaching
            </div>
            <h2>
              Born on the tarmac. <em>Driven by physiological science.</em>
            </h2>
            <p className="about-lede">
              Founded in <strong>2021</strong>, RaceFace Coaching began with a singular focus: to bring
              structured, high-performance endurance coaching to cyclists and runners who refuse to settle
              for generic plans through TrainingPeaks.
            </p>
            <p className="about-body">
              What started in 2021 as grassroots race mentorship has expanded into a championship-winning
              coaching system. Under Coach Dilipan and Phiramoth’s direction, we blend metabolic zone profiling, lactate threshold
              development, and power analysis with daily athlete communication—empowering athletes from their first
              century ride to state, national, international championship podiums.
            </p>

            <div className="about-metrics-row">
              <div className="metric-pill">
                <strong>2021</strong>
                <small>Established</small>
              </div>
              <div className="metric-pill">
                <strong>100%</strong>
                <small>Tailored 1:1 Plans</small>
              </div>
              <div className="metric-pill">
                <strong>Podiums</strong>
                <small>State Championship</small>
              </div>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <Target size={20} />
                </div>
                <div>
                  <strong>Individualized Physiology</strong>
                  <p>Heart rate kinetics, customized power curves, and smart fatigue tracking built for real schedules.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <strong>Hands-On Mentorship</strong>
                  <p>Weekly workout feedback, race strategy walkthroughs, and personal accountability every step.</p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <Button asChild size="lg" className="button-coral">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Talk with Coach <ArrowRight size={18} />
                </a>
              </Button>
              <a className="text-link" href="#coaching">
                Explore coaching services <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div>
          <div className="section-kicker section-kicker-light">Your next start line</div>
          <h2>Tell us what you’re training for.</h2>
        </div>
        <div className="contact-details">
          <p>
            Share your goal, current weekly mileage, and target event. We’ll help you find the
            perfect coaching path to hit your personal best.
          </p>
          <Button asChild size="lg" className="button-light">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp +91 88383 96148 <MessageCircle size={18} />
            </a>
          </Button>
          <a className="email-link" href="mailto:racefacecoaching@gmail.com">
            racefacecoaching@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <img src={logoImg} alt="RaceFace Coaching Logo" />
        <p>Personalized coaching for cyclists &amp; runners.</p>
        <a href="https://www.instagram.com/raceface.coaching" target="_blank" rel="noreferrer">
          @raceface.coaching ↗
        </a>
        <a className="back-top" href="#top" aria-label="Back to top">
          <ArrowDownRight size={18} />
        </a>
      </footer>
    </main>
  );
}
