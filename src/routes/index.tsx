import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import {
  Plane,
  FileCheck2,
  Palmtree,
  Hotel,
  Map,
  Compass,
  GraduationCap,
  Award,
  Briefcase,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ArrowRight,
  Check,
  Star,
  ShieldCheck,
  Globe2,
  CalendarCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const WHATSAPP_NUMBER = "2347059838304";

const IMG = {
  hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
  dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  london: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  paris: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  cairo: "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1200&q=80",
  nairobi: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
  seychelles: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?auto=format&fit=crop&w=1200&q=80",
  kenya: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80",
  egypt: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1600&q=80",
  seychellesPack: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80",
  lagos: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?auto=format&fit=crop&w=1000&q=80",
  abuja: "https://images.unsplash.com/photo-1580937056709-2ea1d9e58a05?auto=format&fit=crop&w=1000&q=80",
  ph: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
  kano: "https://images.unsplash.com/photo-1580746738099-1cb1a5f7e21f?auto=format&fit=crop&w=1000&q=80",
  enugu: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1000&q=80",
  gallery1: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
  gallery2: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  gallery3: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
  gallery4: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
  gallery5: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
  gallery6: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  gallery7: "https://images.unsplash.com/photo-1549944850-84e00be4203b?auto=format&fit=crop&w=1200&q=80",
  gallery8: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80",
};

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Destinations />
      <Packages />
      <Gallery />
      <WhyChoose />
      <LocalFlights />
      <Scholarships />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#destinations", label: "Destinations" },
    { href: "#packages", label: "Packages" },
    { href: "#scholarships", label: "Scholarships" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary-soft flex items-center justify-center shadow-md">
            <Plane className="h-5 w-5 text-white -rotate-45" />
          </div>
          <div className="leading-tight">
            <div className={`font-display text-lg font-semibold ${scrolled ? "text-primary-deep" : "text-white"}`}>
              TopShot
            </div>
            <div className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              All Travels & Tours
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-primary-deep transition-colors"
          >
            Book Your Trip
          </a>
        </nav>

        <button
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground hover:text-primary font-medium border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Your Trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/70 via-primary-deep/50 to-primary-deep/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8 text-center text-white py-32 md:py-40">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-gold-soft animate-float-in">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" /> Trusted since 2012
        </span>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight animate-float-in">
          Explore the World<br className="hidden sm:block" /> with Confidence
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/85 leading-relaxed animate-float-in">
          Trusted travel experts helping Nigerians explore the world since 2012. Flights, visas, tours, scholarships and unforgettable travel experiences — all in one place.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 animate-float-in">
          <a
            href="#booking"
            className="rounded-full bg-white text-primary-deep px-7 py-3.5 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Book Your Trip <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-white/70 text-white px-7 py-3.5 font-semibold hover:bg-white/10 transition-all"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 max-w-5xl mx-auto">
          {[
            { n: "2012", l: "Established" },
            { n: "50+", l: "International Destinations" },
            { n: "100%", l: "Visa Assistance" },
            { n: "Global", l: "Study Abroad Support" },
            { n: "12+ Yrs", l: "Trusted Experts" },
          ].map((s) => (
            <div key={s.l} className="glass-card rounded-2xl px-4 py-5 text-center">
              <div className="font-display text-2xl md:text-3xl font-semibold text-white">{s.n}</div>
              <div className="mt-1 text-[11px] md:text-xs uppercase tracking-wider text-white/80">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-gold/20 rounded-3xl blur-2xl" />
          <img
            src={IMG.about}
            alt="Travel experience"
            loading="lazy"
            className="relative rounded-3xl shadow-2xl w-full h-[520px] object-cover"
          />
          <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white rounded-2xl shadow-xl p-5 md:p-6 border">
            <div className="font-display text-4xl font-semibold text-primary">12+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Years of Trust</div>
          </div>
        </div>

        <div>
          <SectionEyebrow>About Us</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary-deep">
            Your journey, crafted with care since 2012
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            TopShot All Travels & Tours has proudly served customers since 2012 — helping families, students, professionals and businesses travel confidently across the world. From your very first booking to your safe return, we design seamless journeys with genuine Nigerian hospitality.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Flight bookings",
              "Holiday packages",
              "Visa assistance",
              "Hotel reservations",
              "International tours",
              "Study abroad support",
              "Scholarship guidance",
              "Travel consultation",
            ].map((i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Plane, title: "Flight Booking", desc: "Local and international flights with the best fares and flexible options." },
    { icon: FileCheck2, title: "Visa Assistance", desc: "Expert guidance and documentation for smooth visa approvals." },
    { icon: Palmtree, title: "Holiday Packages", desc: "Curated getaways to breathtaking destinations worldwide." },
    { icon: Hotel, title: "Hotel Reservations", desc: "Handpicked hotels and resorts to match every budget and style." },
    { icon: Map, title: "Tour Planning", desc: "Personalised itineraries tailored to your interests and pace." },
    { icon: Compass, title: "Travel Consultation", desc: "One-on-one advice from experienced travel professionals." },
    { icon: GraduationCap, title: "Study Abroad Support", desc: "End-to-end support for students pursuing global education." },
    { icon: Award, title: "Scholarship Assistance", desc: "Guidance for identifying and applying to top scholarships." },
    { icon: Briefcase, title: "Corporate Travel", desc: "Reliable travel management for businesses of every size." },
  ];
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow center>Our Services</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary-deep">
            Everything you need to travel well
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A full suite of travel services delivered with premium care and attention to detail.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-2xl p-8 border border-border/60 hover:border-primary/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-soft flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary-deep">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DESTINATIONS ---------------- */
function Destinations() {
  const destinations = [
    { name: "Dubai", country: "United Arab Emirates", img: IMG.dubai, desc: "Where futuristic skylines meet golden desert luxury." },
    { name: "London", country: "United Kingdom", img: IMG.london, desc: "Timeless heritage, world-class shopping and iconic landmarks." },
    { name: "Paris", country: "France", img: IMG.paris, desc: "The romantic capital of art, fashion and fine cuisine." },
    { name: "Cairo", country: "Egypt", img: IMG.cairo, desc: "Ancient pyramids and 5,000 years of unforgettable history." },
    { name: "Nairobi", country: "Kenya", img: IMG.nairobi, desc: "Africa's gateway to breathtaking wildlife and safari." },
    { name: "Seychelles", country: "Indian Ocean", img: IMG.seychelles, desc: "Pristine beaches and turquoise waters in tropical paradise." },
  ];
  return (
    <section id="destinations" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow center>Featured Destinations</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary-deep">
            Iconic places, unforgettable journeys
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <div
              key={d.name}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[420px]"
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/95 via-primary-deep/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-xs uppercase tracking-widest text-gold-soft">{d.country}</div>
                <h3 className="mt-1 font-display text-3xl font-semibold">{d.name}</h3>
                <p className="mt-2 text-sm text-white/85 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">
                  {d.desc}
                </p>
                <a
                  href="#booking"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft hover:text-white transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PACKAGES ---------------- */
function Packages() {
  const packages = [
    {
      name: "Kenya Safari Experience",
      img: IMG.kenya,
      price: "₦2,400,000",
      priceNote: "per person",
      desc: "Embark on an unforgettable wildlife adventure through Kenya's breathtaking landscapes, from the Maasai Mara to Amboseli. Experience Africa's iconic safari in style.",
      inclusions: [
        "Return international flights",
        "Safari lodge accommodation",
        "All park entry fees",
        "Professional safari guide",
        "Morning and evening game drives",
        "Airport transfers",
        "Daily breakfast and dinner",
      ],
    },
    {
      name: "Seychelles Getaway",
      img: IMG.seychellesPack,
      price: "₦2,438,000",
      priceNote: "per person",
      desc: "Escape to the beautiful Indian Ocean with pristine beaches, crystal-clear waters and tropical island luxury.",
      inclusions: [
        "Return international flights",
        "Beachfront accommodation",
        "Airport transfers",
        "Ferry transfers",
        "Island hopping excursions",
        "Snorkelling experience",
        "Travel insurance",
        "Daily breakfast",
      ],
    },
    {
      name: "Egypt Experience",
      img: IMG.egypt,
      price: "₦2,300,000",
      priceNote: "per person (Not Sharing)",
      desc: "Journey through 5,000 years of civilization by exploring the Great Pyramid of Giza, the Sphinx, Luxor Temple and a memorable Nile Cruise.",
      inclusions: [
        "Return international flights",
        "Four-star hotel accommodation",
        "Professional tour guide",
        "Pyramid & Sphinx tour",
        "Nile Cruise",
        "Luxor & Karnak Temple tour",
        "Airport transfers",
        "Daily breakfast",
      ],
    },
  ];
  return (
    <section id="packages" className="py-24 md:py-32 bg-gradient-to-b from-muted/40 to-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow center>Featured Travel Packages</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary-deep">
            Luxury getaways, all-inclusive
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          {packages.map((p) => (
            <article
              key={p.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/60 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-primary text-white text-[11px] font-semibold px-3 py-1">Flights Included</span>
                  <span className="rounded-full bg-white/95 text-primary-deep text-[11px] font-semibold px-3 py-1">Visa Not Included</span>
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display text-2xl font-semibold text-primary-deep">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {p.inclusions.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-6 border-t border-border/60">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold text-primary">{p.price}</span>
                    <span className="text-xs text-muted-foreground">{p.priceNote}</span>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello TopShot, I'd like to book the ${p.name} package.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full rounded-full bg-primary hover:bg-primary-deep text-white font-semibold py-3 inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    Book this Package <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const imgs = [IMG.gallery1, IMG.gallery2, IMG.gallery3, IMG.gallery4, IMG.gallery5, IMG.gallery6, IMG.gallery7, IMG.gallery8];
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow center>Gallery</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary-deep">
            Destinations That Inspire Dreams
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {imgs.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 || i === 5 ? "row-span-2 h-full" : "h-48 md:h-56"
              }`}
            >
              <img
                src={src}
                alt={`Travel scene ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary-deep/0 group-hover:bg-primary-deep/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
function WhyChoose() {
  const items = [
    { icon: CalendarCheck, title: "Established in 2012", desc: "Over a decade of consistent excellence." },
    { icon: ShieldCheck, title: "Trusted Nigerian Travel Company", desc: "Loved by families, students and professionals." },
    { icon: Star, title: "12+ Years Experience", desc: "Seasoned expertise you can rely on." },
    { icon: Globe2, title: "International Tours", desc: "Curated adventures across the globe." },
    { icon: FileCheck2, title: "Visa Assistance", desc: "Higher approval rates with expert guidance." },
    { icon: Plane, title: "Flight Bookings", desc: "Competitive fares on top airlines." },
    { icon: Hotel, title: "Hotel Packages", desc: "Handpicked stays for every budget." },
    { icon: Compass, title: "Personalized Travel", desc: "Journeys designed around you." },
  ];
  return (
    <section className="py-24 md:py-32 bg-primary-deep text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-soft/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow center light>Why Choose TopShot</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">The travel partner Nigerians trust</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <div
              key={i.title}
              className="glass-card !bg-white/10 !border-white/15 rounded-2xl p-6 hover:!bg-white/15 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-gold/20 text-gold-soft flex items-center justify-center">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{i.title}</h3>
              <p className="mt-1.5 text-sm text-white/75">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCAL FLIGHTS ---------------- */
function LocalFlights() {
  const cities = [
    { name: "Lagos", img: IMG.lagos },
    { name: "Abuja", img: IMG.abuja },
    { name: "Port Harcourt", img: IMG.ph },
    { name: "Kano", img: IMG.kano },
    { name: "Enugu", img: IMG.enugu },
  ];
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow center>Local Flights</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary-deep">
            Fly across Nigeria with ease
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
          {cities.map((c) => (
            <a
              key={c.name}
              href="#booking"
              className="group relative rounded-2xl overflow-hidden h-40 md:h-52 shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="font-display text-xl font-semibold">{c.name}</div>
                <div className="text-[11px] uppercase tracking-wider text-gold-soft">Book Flight</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SCHOLARSHIPS ---------------- */
function Scholarships() {
  return (
    <section id="scholarships" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionEyebrow>Scholarships & Study Abroad</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary-deep">
            Turn global education dreams into reality
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            We guide Nigerian students through every step — from choosing the right university and identifying qualifying scholarships to preparing applications, visas and travel. Our team has helped hundreds of students study confidently across the UK, USA, Canada, Europe and beyond.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "University shortlisting and application support",
              "Scholarship identification and application guidance",
              "Student visa assistance and documentation",
              "Pre-departure travel and accommodation planning",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-gold/20 text-primary-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground">{i}</span>
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello TopShot, I'd like scholarship & study abroad guidance.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-deep text-white font-semibold px-7 py-3.5 shadow-md transition-colors"
          >
            Speak with an Advisor <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-gold/20 to-primary/10 rounded-3xl blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80"
            alt="Study abroad students"
            loading="lazy"
            className="relative rounded-3xl shadow-2xl w-full h-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- BOOKING FORM ---------------- */
function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travellers: "1",
    preferred: "",
    requests: "",
  });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      "*New Booking Enquiry — TopShot All Travels & Tours*",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Destination: ${form.destination}`,
      `Travellers: ${form.travellers}`,
      `Preferred Destination: ${form.preferred}`,
      `Special Requests: ${form.requests || "None"}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-gradient-to-br from-primary-deep via-primary to-primary-soft relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <div className="text-center text-white max-w-2xl mx-auto">
          <SectionEyebrow center light>Book Your Trip</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Start Your Journey</h2>
          <p className="mt-4 text-white/85">Tell us about your dream trip and we'll take care of the rest.</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-12 bg-white rounded-3xl shadow-2xl p-6 md:p-10 grid md:grid-cols-2 gap-5"
        >
          <Field label="Full Name" required>
            <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" />
          </Field>
          <Field label="Email Address" required>
            <input required type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@example.com" />
          </Field>
          <Field label="Phone Number" required>
            <input required value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+234 ..." />
          </Field>
          <Field label="Destination" required>
            <input required value={form.destination} onChange={set("destination")} className={inputCls} placeholder="e.g. Dubai, London" />
          </Field>
          <Field label="Number of Travellers" required>
            <select value={form.travellers} onChange={set("travellers")} className={inputCls}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "traveller" : "travellers"}</option>
              ))}
              <option value="10+">10+ travellers</option>
            </select>
          </Field>
          <Field label="Preferred Destination">
            <input value={form.preferred} onChange={set("preferred")} className={inputCls} placeholder="Kenya, Seychelles, Egypt..." />
          </Field>
          <div className="md:col-span-2">
            <Field label="Special Requests">
              <textarea value={form.requests} onChange={set("requests")} rows={4} className={inputCls} placeholder="Dates, budget, dietary needs, anything else..." />
            </Field>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-primary hover:bg-primary-deep text-white font-semibold py-4 shadow-lg inline-flex items-center justify-center gap-2 transition-colors"
            >
              Send Booking to WhatsApp <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Your enquiry opens in WhatsApp so our team can respond instantly.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow center>Contact Us</SectionEyebrow>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-primary-deep">
            We'd love to hear from you
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <ContactCard icon={Phone} title="Phone">
            <a href="tel:+2347059838304" className="block hover:text-primary">+234 705 983 8304</a>
            <a href="tel:+2348033006115" className="block hover:text-primary">+234 803 300 6115</a>
          </ContactCard>
          <ContactCard icon={Mail} title="Email">
            <a href="mailto:TopshotAllTravels01@gmail.com" className="hover:text-primary break-all">
              TopshotAllTravels01@gmail.com
            </a>
          </ContactCard>
          <ContactCard icon={MapPin} title="Location">
            Lagos, Nigeria
          </ContactCard>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="text-sm uppercase tracking-widest text-muted-foreground">Follow Us</div>
          <div className="flex flex-wrap justify-center gap-3">
            <SocialLink href="https://instagram.com/" label="TopShot All Travels and Tours" Icon={Instagram} />
            <SocialLink href="https://tiktok.com/" label="TopShot All Travels" Icon={TikTokIcon} />
            <SocialLink href="https://facebook.com/" label="TopShot All Travels" Icon={Facebook} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-muted/40 rounded-2xl p-8 text-center border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all">
      <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-soft flex items-center justify-center shadow-md">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-4 font-semibold text-primary-deep text-lg">{title}</h3>
      <div className="mt-2 text-sm text-muted-foreground space-y-1">{children}</div>
    </div>
  );
}

function SocialLink({ href, label, Icon }: { href: string; label: string; Icon: any }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:shadow-md transition-all"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.6 6.3a5.4 5.4 0 0 1-3.4-1.2A5.4 5.4 0 0 1 14.5 2h-3v13.3a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1v-3a5.7 5.7 0 1 0 4.9 5.6V9.7a8.4 8.4 0 0 0 5.1 1.7v-3a5.4 5.4 0 0 1-.0 0z"/>
    </svg>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-primary-deep text-white/80">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10">
              <Plane className="h-5 w-5 text-white -rotate-45" />
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-white">TopShot</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/70">All Travels & Tours</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed">
            Trusted Nigerian travel experts since 2012. Flights, visas, tours, scholarships and unforgettable travel experiences.
          </p>
          <div className="mt-5 flex gap-3">
            <FooterSocial href="https://instagram.com/" Icon={Instagram} />
            <FooterSocial href="https://tiktok.com/" Icon={TikTokIcon} />
            <FooterSocial href="https://facebook.com/" Icon={Facebook} />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#destinations" className="hover:text-white">Destinations</a></li>
            <li><a href="#packages" className="hover:text-white">Holiday Packages</a></li>
            <li><a href="#scholarships" className="hover:text-white">Scholarships</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Get in Touch</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 flex-shrink-0" /> +234 705 983 8304</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 flex-shrink-0" /> +234 803 300 6115</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 flex-shrink-0" /> <span className="break-all">TopshotAllTravels01@gmail.com</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /> Lagos, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 text-center text-xs text-white/60">
          © 2026 TopShot All Travels & Tours — Established 2012. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({ href, Icon }: { href: string; Icon: any }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-colors"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

/* ---------------- SHARED ---------------- */
function SectionEyebrow({ children, center, light }: { children: React.ReactNode; center?: boolean; light?: boolean }) {
  return (
    <div className={`${center ? "flex justify-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${
          light ? "text-gold-soft" : "text-primary"
        }`}
      >
        <span className={`h-px w-8 ${light ? "bg-gold-soft" : "bg-primary"}`} /> {children}
      </span>
    </div>
  );
}
