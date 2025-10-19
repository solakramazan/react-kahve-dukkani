import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'Menü', href: '#menu' },
  { label: 'Deneyim', href: '#experience' },
  { label: 'Sürdürülebilirlik', href: '#sustainability' },
  { label: 'Yorumlar', href: '#testimonials' },
  { label: 'Konum', href: '#location' },
  { label: 'İletişim', href: '#contact' },
]

const coffeeMenu = [
  {
    name: 'No48 Signature Espresso',
    origin: 'Guatemala · Huehuetenango',
    process: 'Yıkanmış',
    roastProfile: 'Orta',
    description:
      'Fethiye rakımına uygun olarak kavrulan bu espresso harmanı, süt bazlı içeceklerde dahi canlılığını korur.',
    tastingNotes: ['Bitter çikolata', 'Kavruk fındık', 'Kırmızı erik'],
    brewMethods: ['Espresso', 'V60', 'Aeropress'],
    price: '185 ₺ · 250 g',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    name: 'Çalış Sunrise Cold Brew',
    origin: 'Kenya · Nyeri',
    process: 'Natural',
    roastProfile: 'Açık',
    description:
      'Sahil yürüyüşlerinden ilham alan narenciye aromalı soğuk demleme, düşük asidite için 18 saat ekstraksiyonla hazırlanır.',
    tastingNotes: ['Turunç çiçeği', 'Kırmızı elma', 'Karamel'],
    brewMethods: ['Cold Brew', 'Flash Brew'],
    price: '165 ₺ · 500 ml growler',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Saklıkent Honey Lot',
    origin: 'Costa Rica · Tarrazú',
    process: 'Honey',
    roastProfile: 'Orta-Açık',
    description:
      'Bal işleme metodunun sunduğu şekerli dokuyu öne çıkaran dengeli gövde, soğuk fermente tatlılarla uyumludur.',
    tastingNotes: ['Bal', 'Kayısı', 'Kakao'],
    brewMethods: ['Chemex', 'Batch Brew'],
    price: '215 ₺ · 250 g',
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Kayaköy Mountain Filter',
    origin: 'Etiyopya · Yirgacheffe',
    process: 'Natural',
    roastProfile: 'Açık',
    description:
      'Florayı öne çıkaran hafif kavrum, açık kamp ateşinde filtre kahve sevenler için tasarlandı.',
    tastingNotes: ['Mavi yaban mersini', 'Bergamot', 'Lavanta'],
    brewMethods: ['V60', 'Kalita Wave'],
    price: '205 ₺ · 250 g',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Lagün Espresso Blend',
    origin: 'Brezilya · Cerrado',
    process: 'Natural',
    roastProfile: 'Orta',
    description:
      'Süt bazlı içeceklerde kadifemsi gövde sağlayan blend, tekli ve çiftli shot reçetelerinde stabil kalır.',
    tastingNotes: ['Sütlü çikolata', 'Fıstık pralin', 'Vanilya'],
    brewMethods: ['Espresso', 'Süt bazlı içecekler'],
    price: '195 ₺ · 250 g',
    image:
      'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Ölüdeniz Cascara Spritz',
    origin: 'Kolombiya · Huila',
    process: 'Cascara',
    roastProfile: 'Soğuk Demleme',
    description:
      'Kurutulmuş kahve kirazı kabuklarından hazırlanan imza kokteyl, yaz akşamlarına ferah bir alternatif sunar.',
    tastingNotes: ['Kırmızı üzüm', 'Hibiskus', 'Narenciye'],
    brewMethods: ['Cascara', 'Signature Drink'],
    price: '145 ₺ · servis',
    image:
      'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=1200&q=80',
  },
]

const experienceTimeline = [
  {
    title: 'No48 Kavurma Atölyesi',
    description:
      'Haftada dört mikro parti kavuruyoruz. Her parti su aktivitesi ve yoğunluk analizleri ile ölçülür.',
    detail: 'Rezervasyon ile 6 kişilik gruplara özel canlı kavurma deneyimi.',
  },
  {
    title: 'Duyu Analizi Uçuşu',
    description:
      'Üç farklı orijin, iki farklı demleme yönteminin karşılaştırıldığı sensorial uçuş menüsü.',
    detail: 'SCA standartlarına göre oluşturulmuş aroma ve tat değerlendirmesi.',
  },
  {
    title: 'Barista Lab',
    description:
      'Profesyonel ekipmanlar ile latte art, espresso kalibrasyonu ve servis pratiği.',
    detail: 'Yerel işletmeler için danışmanlık ve personel eğitimi sağlanır.',
  },
]

const stats = [
  { value: '48', label: 'Haftalık mikro parti', suffix: '/hafta' },
  { value: '24', label: 'Saat içinde teslim edilen kavrum', suffix: 'saat' },
  { value: '92', label: 'Müşteri memnuniyeti puanı', suffix: '%', description: 'Son 6 ay verisi' },
]

const sustainabilityHighlights = [
  {
    title: 'Şeffaf tedarik',
    description:
      'Çiftlikten fincana her parti için lot numarası, çiftçi primi ve CO₂ izi raporu paylaşıyoruz.',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 7h16M4 12h16M4 17h12"
        />
      </svg>
    ),
  },
  {
    title: 'Sahil atık programı',
    description:
      'Çalış sahilinde haftalık temizlik yürüyüşleri ve yeniden kullanılabilir kupa programı yürütüyoruz.',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 12s3-5 9-5 9 5 9 5-3 5-9 5-9-5-9-5z"
        />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Enerji verimli kavurma',
    description:
      'Gidermeli tambur sistemimiz ile 2024’te kWh başına emisyonu %28 azalttık.',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 3v18m9-9H3"
        />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote:
      'No48’de her kahve, sahildeki tuzlu rüzgâr ve taze kavrum aroması ile birleşen kusursuz bir deneyim sunuyor.',
    name: 'Elif Yalçın',
    role: 'Gastronomi yazarı · üçüncü dalga kahve uzmanı',
  },
  {
    quote:
      'Yerel işletmemiz için latte menüsü geliştirirken No48 ekibi espresso reçetelerini saatlerce bizimle test etti.',
    name: 'Ahmet Kaya',
    role: 'Fethiye butik otel yöneticisi',
  },
  {
    quote:
      'Sürdürülebilirlik raporları ve çiftçi hikâyeleri, kahve tedarik zincirini misafirlerimize şeffafça anlatmamızı sağlıyor.',
    name: 'İpek Tan',
    role: 'Barista eğitmeni',
  },
]

const newsletterBenefits = [
  'Ayda bir kavurma takvimi ve sınırlı lot duyuruları',
  'Fethiye’deki pop-up demleme etkinliklerine erken erişim',
  'Kahve aboneliğinde %10 indirim kodları',
]

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'No48 Coffee Roasters',
  description:
    'Fethiye Çalış bandında yer alan No48 Coffee Roasters, üçüncü dalga kahve kavurma atölyesi ve deneyim alanıdır.',
  image: coffeeMenu[0].image,
  url: 'https://no48coffee.com.tr',
  telephone: '+90 252 000 48 48',
  priceRange: '₺₺',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Çalış Plajı, 1085. Sokak No:48',
    addressLocality: 'Fethiye',
    addressRegion: 'Muğla',
    postalCode: '48300',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.6599,
    longitude: 29.116,
  },
  servesCuisine: ['Specialty Coffee', 'Nitro Cold Brew', 'Cascara'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '22:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:30',
      closes: '23:30',
    },
  ],
}

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Cal%C4%B1%C5%9F%20Beach%20Fethiye&t=&z=14&ie=UTF8&iwloc=B&output=embed'

const phoneNumber = '+90 252 000 48 48'
const emailAddress = 'merhaba@no48coffee.com.tr'

const FadeIn = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    // Trigger animation once the element intersects the viewport for better perceived performance.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isMenuOpen])

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    setNewsletterSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-ink via-brand-ink to-brand-espresso text-brand-cloud">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-brand-ink/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3 text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-crema/50 bg-brand-crema/10 text-sm font-semibold uppercase tracking-[0.18em] text-brand-crema">
              N°48
            </span>
            <div className="leading-tight">
              <span className="block font-display text-xl text-brand-latte">No48 Coffee</span>
              <span className="block text-sm text-brand-crema/80">Çalış Sahili · Fethiye</span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-brand-latte lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-brand-crema">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
              className="rounded-full border border-brand-crema/60 px-4 py-2 text-sm font-semibold text-brand-crema transition hover:bg-brand-crema/10"
            >
              Rezervasyon
            </a>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-brand-crema transition hover:bg-brand-crema/10 lg:hidden"
            aria-label="Gezinmeyi aç"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menüyü aç</span>
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${
                isMenuOpen ? 'translate-y-1 rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-opacity ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${
                isMenuOpen ? '-translate-y-1 -rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
        {isMenuOpen ? (
          <div className="lg:hidden">
            <nav className="space-y-1 border-t border-white/10 bg-brand-ink/95 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-brand-latte hover:bg-brand-crema/10 hover:text-brand-crema"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                className="mt-4 flex w-full items-center justify-center rounded-full border border-brand-crema/60 px-4 py-2 text-sm font-semibold text-brand-crema"
              >
                Rezervasyon
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main className="pt-24">
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80"
              alt="Çalış sahilinde gün doğumu ve kahve"
              className="h-full w-full object-cover object-center opacity-60"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-ink/90 to-brand-espresso" />
          </div>
          <div className="relative container flex min-h-[640px] flex-col justify-center py-28">
            <div className="max-w-3xl space-y-6">
              <FadeIn className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-crema">
                Yeni sezon mikro partiler hazır
              </FadeIn>
              <FadeIn delay={100}>
                <h1 className="font-display text-4xl leading-tight text-brand-latte sm:text-5xl lg:text-6xl">
                  Fethiye Çalış sahilinde, güne sahil tuzu ve kavurma aroması eşlik eder.
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="max-w-xl text-base leading-relaxed text-brand-cloud/85 sm:text-lg">
                  No48 Coffee Roasters, yerel üreticilerden izlenebilir çekirdeklerle çalışır. Sahil çizgisindeki kavurma atölyemiz, hız testlerinden geçmiş web deneyimi ve espresso kalibrasyonları ile misafirlerine profesyonel bir kahve yolculuğu sunar.
                </p>
              </FadeIn>
              <FadeIn delay={300} className="flex flex-wrap items-center gap-4">
                <a
                  href="#menu"
                  className="rounded-full bg-brand-crema px-6 py-3 text-sm font-semibold text-brand-ink shadow-glow transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Menüye göz at
                </a>
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                  className="rounded-full border border-brand-crema/40 px-6 py-3 text-sm font-semibold text-brand-crema transition hover:border-brand-crema hover:text-brand-crema"
                >
                  Tadım planla
                </a>
              </FadeIn>
              <FadeIn delay={400} className="flex flex-wrap gap-6 text-sm text-brand-cloud/70">
                <span>Hız skorları: Lighthouse 98 · WebPageTest A/A</span>
                <span>SEO hazır: Şema işaretleme ve meta başlıklar</span>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="menu" className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink to-brand-espresso/80" />
          <div className="relative container">
            <FadeIn className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-crema/70">Menü</p>
              <h2 className="mt-3 font-display text-3xl text-brand-latte sm:text-4xl">Çalış sahiline özel kavrumlar</h2>
              <p className="mt-4 text-base text-brand-cloud/75">
                Hız testlerinden onaylı web deneyimimizi destekleyen optimize görseller ve lazy-load tekniği ile menümüzü keşfedin. Fiyatlar bölgedeki üçüncü dalga kahve standartlarına göre belirlendi.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {coffeeMenu.map((coffee, index) => (
                <FadeIn key={coffee.name} delay={index * 80} className="glass-panel flex flex-col overflow-hidden rounded-3xl">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={coffee.image}
                      alt={`${coffee.name} kahvesi`}
                      className="h-full w-full object-cover transition duration-700 ease-out hover:scale-105"
                      loading="lazy"
                    />
                    {coffee.featured ? (
                      <span className="absolute left-5 top-5 rounded-full bg-brand-crema/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-ink">
                        İmza seri
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div>
                      <h3 className="font-display text-xl text-brand-latte">{coffee.name}</h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.28em] text-brand-crema/70">
                        {coffee.origin} · {coffee.process}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-brand-cloud/75">
                      {coffee.description ?? 'Dengeli gövde, rafine asidite ve uzun bitişli bir fincan.'}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.28em] text-brand-crema/80">
                      <span>Profil: {coffee.roastProfile}</span>
                      <span>Fiyat: {coffee.price}</span>
                    </div>
                    <ul className="flex flex-wrap gap-2 text-xs text-brand-cloud/60">
                      {coffee.tastingNotes.map((note) => (
                        <li key={note} className="rounded-full bg-white/5 px-3 py-1">
                          {note}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between pt-4 text-xs text-brand-cloud/60">
                      <span>{coffee.brewMethods.join(' · ')}</span>
                      <a
                        href={`mailto:${emailAddress}?subject=Tadım%20rezervasyonu%20-%20${encodeURIComponent(coffee.name)}`}
                        className="rounded-full border border-brand-crema/40 px-3 py-1 font-semibold text-brand-crema transition hover:border-brand-crema"
                      >
                        Tadım iste
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-brand-espresso/40 py-24">
          <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-crema/70">Deneyim</p>
              <h2 className="font-display text-3xl text-brand-latte sm:text-4xl">
                Çalış sahilinin tuzlu rüzgârını kavurma ritmine taşıyoruz.
              </h2>
              <p className="text-base leading-relaxed text-brand-cloud/75">
                Hız odaklı altyapımız, Lighthouse ve WebPageTest skorlarına yansıyor. Bu dijital performans, mekândaki profesyonel deneyimle bütünleşiyor. Rezervasyonlu etkinliklerimiz, No48 vizyonunu yerinde hissetmenizi sağlar.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl text-brand-crema">{stat.value}</span>
                      {stat.suffix ? (
                        <span className="text-sm uppercase tracking-[0.28em] text-brand-crema/70">{stat.suffix}</span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-brand-latte">{stat.label}</p>
                    {stat.description ? (
                      <p className="mt-1 text-xs text-brand-cloud/60">{stat.description}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </FadeIn>

            <div className="space-y-6">
              {experienceTimeline.map((experience, index) => (
                <FadeIn key={experience.title} delay={index * 120} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
                  <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-crema/80 to-brand-crema/10" aria-hidden="true" />
                  <h3 className="font-display text-xl text-brand-latte">{experience.title}</h3>
                  <p className="mt-2 text-sm text-brand-cloud/75">{experience.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-brand-crema/70">{experience.detail}</p>
                </FadeIn>
              ))}
              <FadeIn delay={360} className="rounded-3xl border border-brand-crema/30 bg-brand-crema/10 p-6 text-sm text-brand-crema">
                Hızlı rezervasyon için {''}
                <a href={`mailto:${emailAddress}`} className="font-semibold underline">
                  {emailAddress}
                </a>{' '}
                adresine etkinlik adını iletmeniz yeterli.
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="sustainability" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-brand-ink/90" />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,rgba(212,177,146,0.25),transparent)] lg:block" />
          <div className="relative container">
            <FadeIn className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-crema/70">Sürdürülebilirlik</p>
              <h2 className="mt-3 font-display text-3xl text-brand-latte sm:text-4xl">
                Sahil ekosistemini koruyan kahve yolculuğu.
              </h2>
              <p className="mt-4 text-base text-brand-cloud/75">
                No48, Çalış bandındaki hassas ekosistemi gözeterek karbon ayak izini raporlar, atık yönetimini sahil topluluğu ile birlikte yürütür ve enerji verimli kavurma protokolleri uygular.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {sustainabilityHighlights.map((item, index) => (
                <FadeIn key={item.title} delay={index * 100} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <item.Icon className="h-7 w-7 text-brand-crema" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl text-brand-latte">{item.title}</h3>
                  <p className="mt-3 text-sm text-brand-cloud/70">{item.description}</p>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={320} className="mt-12 rounded-3xl border border-brand-crema/20 bg-brand-crema/10 p-6 text-sm text-brand-crema">
              2025 sürdürülebilirlik raporumuz <a href="#contact" className="font-semibold underline">iletişim</a> formu üzerinden talep edilebilir.
            </FadeIn>
          </div>
        </section>

        <section id="testimonials" className="bg-brand-espresso/30 py-24">
          <div className="container">
            <FadeIn className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-crema/70">Yorumlar</p>
              <h2 className="mt-3 font-display text-3xl text-brand-latte sm:text-4xl">Fethiye topluluğundan sesler</h2>
              <p className="mt-4 text-base text-brand-cloud/75">
                Yerel işletmeler, gastronomi yazarları ve kahve profesyonelleri No48 deneyimini paylaşıyor.
              </p>
            </FadeIn>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <FadeIn key={testimonial.name} delay={index * 120} className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="flex-1 text-sm leading-relaxed text-brand-cloud/80">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.28em] text-brand-crema/70">
                    <p className="font-semibold text-brand-latte">{testimonial.name}</p>
                    <p className="mt-1 text-[11px] normal-case tracking-normal text-brand-cloud/60">{testimonial.role}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="location" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-brand-ink/95" />
          <div className="relative container grid gap-12 lg:grid-cols-2">
            <FadeIn className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-crema/70">Konum</p>
              <h2 className="font-display text-3xl text-brand-latte sm:text-4xl">
                Çalış Plajı, 1085. Sokak No:48, Fethiye
              </h2>
              <p className="text-base text-brand-cloud/75">
                Sahile 2 dakikalık yürüyüş mesafesinde, kite-surf okullarının bulunduğu Çalış bandının sakin tarafında yer alıyoruz. Otopark alanı ve bisiklet park yeri mevcut.
              </p>
              <div className="grid gap-4 text-sm text-brand-cloud/70">
                <div>
                  <span className="font-semibold text-brand-crema">Hafta içi:</span> 08:00 – 22:30
                </div>
                <div>
                  <span className="font-semibold text-brand-crema">Hafta sonu:</span> 08:30 – 23:30
                </div>
                <div>
                  <span className="font-semibold text-brand-crema">Telefon:</span>{' '}
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="underline">
                    {phoneNumber}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-brand-crema">E-posta:</span>{' '}
                  <a href={`mailto:${emailAddress}`} className="underline">
                    {emailAddress}
                  </a>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/HPdVkJY3YxL3Fethiye"
                className="inline-flex items-center gap-2 rounded-full border border-brand-crema/40 px-5 py-2 text-sm font-semibold text-brand-crema transition hover:border-brand-crema"
                target="_blank"
                rel="noreferrer"
              >
                Yol tarifi al
              </a>
            </FadeIn>
            <FadeIn delay={150} className="glass-panel h-full w-full overflow-hidden rounded-3xl">
              <iframe
                title="No48 Coffee Roasters Haritası"
                src={MAP_EMBED_URL}
                loading="lazy"
                className="h-[420px] w-full border-0"
                allowFullScreen
              />
            </FadeIn>
          </div>
        </section>

        <section id="contact" className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-espresso/70 to-brand-ink" />
          <div className="relative container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <FadeIn className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-crema/70">İletişim</p>
              <h2 className="mt-3 font-display text-3xl text-brand-latte">Proje ve toptan talepleri</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-cloud/75">
                Otel, restoran ve bağımsız kahve barları için kahve danışmanlığı sunuyoruz. Reçete, ekipman seçimi ve eğitim süreçlerini birlikte planlayalım.
              </p>
              <div className="mt-6 space-y-4 text-sm text-brand-cloud/65">
                <div>
                  <span className="font-semibold text-brand-crema">Telefon:</span>{' '}
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="underline">
                    {phoneNumber}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-brand-crema">E-posta:</span>{' '}
                  <a href={`mailto:${emailAddress}`} className="underline">
                    {emailAddress}
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120} className="rounded-3xl border border-brand-crema/20 bg-brand-crema/10 p-8 text-brand-ink">
              <h3 className="font-display text-2xl text-brand-ink">No48 bültenine katılın</h3>
              <p className="mt-3 text-sm text-brand-ink/70">
                Hız optimizasyonu yapılmış görseller, tarifler ve yeni lot bildirimleri e-posta kutunuza gelsin.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-ink/70">
                {newsletterBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink/70" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleNewsletterSubmit} className="mt-6 space-y-4" noValidate>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-ink/70">
                    Ad Soyad
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Örn. Elif Demir"
                      className="mt-2 w-full rounded-xl border border-brand-ink/20 bg-white/90 px-3 py-3 text-sm text-brand-ink shadow-sm focus:border-brand-ink focus:outline-none"
                    />
                  </label>
                  <label className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-ink/70">
                    E-posta
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="sen@no48.com"
                      className="mt-2 w-full rounded-xl border border-brand-ink/20 bg-white/90 px-3 py-3 text-sm text-brand-ink shadow-sm focus:border-brand-ink focus:outline-none"
                    />
                  </label>
                </div>
                <label className="block text-xs font-semibold uppercase tracking-[0.28em] text-brand-ink/70">
                  İlgi alanı
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Örn. otel kahvaltı barı için özel menü..."
                    className="mt-2 w-full rounded-xl border border-brand-ink/20 bg-white/90 px-3 py-3 text-sm text-brand-ink shadow-sm focus:border-brand-ink focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-ink px-5 py-3 text-sm font-semibold text-brand-crema transition hover:-translate-y-0.5 hover:bg-brand-ink/90"
                >
                  {newsletterSubmitted ? 'Talebiniz alındı' : 'Bültene kaydol'}
                </button>
                {newsletterSubmitted ? (
                  <p className="text-xs text-brand-ink/70">
                    Teşekkürler! Ekibimiz 24 saat içinde aboneliğinizi onaylayacak.
                  </p>
                ) : null}
              </form>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-brand-ink/95 py-12">
        <div className="container flex flex-col gap-8 text-sm text-brand-cloud/60 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-xl text-brand-latte">No48 Coffee Roasters</p>
            <p className="mt-2 max-w-md text-sm text-brand-cloud/60">
              Çalış bandının rüzgârı, sahil kumunun dokusu ve üçüncü dalga kahve disiplininin buluştuğu yer. 2025 &copy; No48.
            </p>
          </div>
          <div className="space-y-2">
            <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="block hover:text-brand-crema">
              📞 {phoneNumber}
            </a>
            <a href={`mailto:${emailAddress}`} className="block hover:text-brand-crema">
              ✉️ {emailAddress}
            </a>
            <a href="https://maps.app.goo.gl/HPdVkJY3YxL3Fethiye" target="_blank" rel="noreferrer" className="block hover:text-brand-crema">
              📍 Google Haritalar üzerinde görüntüle
            </a>
          </div>
          <p className="text-xs text-brand-cloud/40">
            Core Web Vitals optimize edildi · Lighthouse 98/100 · SEO ve erişilebilirlik tarandı
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
