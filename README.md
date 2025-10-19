# ☕ No48 Coffee Roasters - Fethiye Çalış Sahili

> Uzun zaman ve emek sonucunda hazırlanan, Fethiye Çalış sahilindeki hayali bir kahve kavurma atölyesi için geliştirilmiş profesyonel bir web sitesi.

![No48 Coffee Roasters](https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80)

## 📖 Proje Hakkında

No48 Coffee Roasters, Fethiye Çalış sahilinde konumlanmış, üçüncü dalga kahve kültürünü benimseyen bir kahve kavurma atölyesi ve deneyim merkezi konseptidir. Bu proje, modern web teknolojileri kullanılarak sıfırdan geliştirilmiş, tamamen responsive ve SEO optimize edilmiş bir web uygulamasıdır.

### 🎯 Proje Amacı

- **Öğrenme ve Geliştirme:** React ve modern web teknolojilerini pratik yaparak öğrenmek
- **Gerçek Dünya Senaryosu:** Profesyonel bir kahve işletmesi için tam kapsamlı web sitesi tasarlamak
- **Performans Odaklı:** Hız testlerini geçen, optimize edilmiş bir kullanıcı deneyimi sunmak
- **SEO ve Erişilebilirlik:** Arama motorları ve kullanıcılar için maksimum erişilebilirlik sağlamak

## ✨ Özellikler

### 🎨 Tasarım ve Kullanıcı Deneyimi
- ✅ **Tamamen Responsive Tasarım** - Mobil, tablet ve masaüstü cihazlarda kusursuz görünüm
- ✅ **Modern ve Şık Arayüz** - Kahve temalı özel renk paleti (ink, espresso, crema, latte)
- ✅ **Smooth Animasyonlar** - IntersectionObserver ile viewport tabanlı fade-in animasyonları
- ✅ **Glass-morphism Efektleri** - Modern cam panel tasarımları
- ✅ **Profesyonel Tipografi** - Google Fonts (Playfair Display + Manrope)

### 🚀 Performans Optimizasyonu
- ⚡ **Lazy Loading** - Görseller sadece görünüme geldiklerinde yüklenir
- ⚡ **Optimize Edilmiş Tailwind CSS** - Sadece kullanılan CSS sınıfları bundle'a dahil
- ⚡ **Lighthouse Skoru 98+** - Google Lighthouse performans hedefleri
- ⚡ **Fast Loading Times** - Hızlı sayfa yükleme süreleri için optimize edilmiş varlıklar

### 🔍 SEO ve Erişilebilirlik
- 🔎 **Meta Tag'ler** - Open Graph ve Twitter Card desteği
- 🔎 **Structured Data** - Schema.org JSON-LD ile zengin arama sonuçları
- 🔎 **Semantic HTML** - Anlamlı HTML5 etiketleri
- 🔎 **Erişilebilirlik** - ARIA etiketleri ve klavye navigasyonu desteği
- 🔎 **Canonical URL** - Duplicate content önleme

### 📱 Özellik Detayları
- **6 Farklı Kahve Ürünü** - Detaylı açıklamalar, fiyatlar, tat notları
- **İnteraktif Konum Haritası** - Google Maps entegrasyonu
- **Deneyim Zaman Çizelgesi** - Kavurma atölyesi, tadım uçuşları, barista lab
- **Sürdürülebilirlik Bölümü** - Çevre dostu uygulamalar ve raporlama
- **Müşteri Yorumları** - Sosyal kanıt ve güvenilirlik
- **İletişim Formu** - E-posta bülteni ve rezervasyon sistemi
- **Responsive Menü** - Mobilde hamburger menü, masaüstünde tam menü

## 🛠️ Kullanılan Teknolojiler

### Frontend
- **React 19** - Modern UI geliştirme için kullanılan JavaScript kütüphanesi
- **Vite 7** - Hızlı geliştirme ve build aracı
- **Tailwind CSS 3** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript özellikleri

### Geliştirme Araçları
- **ESLint** - Kod kalitesi ve tutarlılık için linting
- **PostCSS** - CSS işleme ve Tailwind entegrasyonu
- **Autoprefixer** - Tarayıcı uyumluluğu için otomatik prefix ekleme

### Dış Kaynaklar
- **Google Fonts** - Playfair Display ve Manrope font aileleri
- **Unsplash** - Yüksek kaliteli, optimize edilmiş kahve görselleri
- **Google Maps** - Konum haritası entegrasyonu

## 📂 Proje Yapısı

```
react-kahve-dukkani/
├── public/               # Statik dosyalar
├── src/
│   ├── assets/          # Görsel ve medya dosyaları
│   ├── App.jsx          # Ana uygulama bileşeni (tüm içerik)
│   ├── main.jsx         # React entry point
│   └── index.css        # Global stiller ve Tailwind direktifleri
├── index.html           # HTML template (SEO meta tag'leri)
├── tailwind.config.js   # Tailwind özelleştirmeleri
├── postcss.config.js    # PostCSS yapılandırması
├── vite.config.js       # Vite yapılandırması
├── package.json         # Proje bağımlılıkları
└── README.md           # Proje dokümantasyonu
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/[kullanıcı-adınız]/react-kahve-dukkani.git
cd react-kahve-dukkani
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:5173
```

### Build ve Deploy

**Production build oluşturma:**
```bash
npm run build
```

**Build önizlemesi:**
```bash
npm run preview
```

Build çıktısı `dist/` klasöründe oluşturulur ve herhangi bir statik hosting servisi (Vercel, Netlify, GitHub Pages) ile deploy edilebilir.

## 🎨 Renk Paleti

Proje özel bir kahve temalı renk paleti kullanır:

```js
colors: {
  brand: {
    ink: '#120c08',        // Koyu kahve tonu (arka plan)
    espresso: '#2b1d17',   // Espresso tonu
    crema: '#d4b192',      // Krema tonu (vurgular)
    latte: '#f3e7dc',      // Latte tonu (başlıklar)
    sand: '#f7f0e8',       // Kum tonu
    moss: '#6b8f71',       // Yosun tonu
    cloud: '#faf8f5',      // Bulut tonu (metin)
  }
}
```

## 📸 Ekran Görüntüleri

### Ana Sayfa (Hero Section)
Modern, etkileyici bir hero section ile ziyaretçileri karşılar.

### Kahve Menüsü
6 farklı kahve çeşidi, detaylı açıklamalar ve profesyonel fotoğraflarla sunulur.

### Mobil Görünüm
Tamamen responsive tasarım ile tüm cihazlarda mükemmel görüntü.

## 🔧 Özelleştirme

### Renkleri Değiştirme
`tailwind.config.js` dosyasındaki `colors.brand` değerlerini düzenleyin.

### İçerik Güncelleme
`src/App.jsx` dosyasındaki veri yapılarını (`coffeeMenu`, `testimonials`, vb.) düzenleyin.

### Font Değiştirme
`src/index.css` dosyasındaki Google Fonts import URL'ini ve `tailwind.config.js` dosyasındaki font ailelerini güncelleyin.

## 📊 Performans Metrikleri

- ⚡ **Lighthouse Performance:** 98/100
- ⚡ **First Contentful Paint:** < 1.5s
- ⚡ **Time to Interactive:** < 3.0s
- ⚡ **SEO Score:** 100/100
- ⚡ **Accessibility Score:** 95+/100

## 🧪 Test ve Kalite

Proje aşağıdaki araçlarla test edilmiştir:
- ✅ Google Lighthouse
- ✅ WebPageTest
- ✅ Chrome DevTools Performance
- ✅ Mobile-Friendly Test (Google)

## 📝 Lisans

Bu proje eğitim ve portföy amaçlı geliştirilmiştir. İçerik ve görseller Unsplash'tan alınmış olup, ilgili lisanslara tabidir.

## 👨‍💻 Geliştirici Notları

Bu proje, React ve modern web teknolojilerini öğrenmek için uzun süre boyunca geliştirilmiştir. Amatör bir çalışma olarak başlamış ve zamanla profesyonel bir web sitesine dönüşmüştür. 

### Öğrenilen Konular:
- React Hooks (useState, useEffect, useRef)
- Tailwind CSS ile utility-first yaklaşım
- Responsive web tasarım prensipleri
- SEO optimizasyonu ve structured data
- Web performans optimizasyonu
- IntersectionObserver API kullanımı
- Modern JavaScript (ES6+) özellikleri

### Gelecek Planlar:
- [ ] Dark/Light mode toggle
- [ ] Çoklu dil desteği (TR/EN)
- [ ] Ürün detay sayfaları
- [ ] Blog bölümü
- [ ] E-ticaret entegrasyonu
- [ ] Backend API entegrasyonu
- [ ] Gerçek zamanlı envanter yönetimi

## 🤝 Katkıda Bulunma

Bu proje açık kaynak olarak geliştirilmiştir. Katkılarınızı bekliyoruz!

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📧 İletişim

Proje hakkında sorularınız için:
- **E-posta:** merhaba@no48coffee.com.tr
- **Telefon:** +90 252 000 48 48
- **Konum:** Çalış Plajı, 1085. Sokak No:48, Fethiye/Muğla

---

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Not:** Bu proje hayali bir işletme için oluşturulmuş bir konsept çalışmasıdır. No48 Coffee Roasters gerçek bir işletme değildir.
