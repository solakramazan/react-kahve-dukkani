# 🚀 GitHub'a Yükleme Adımları

## 1. GitHub'da Yeni Repository Oluşturun

1. https://github.com adresine gidin
2. Sağ üstteki "+" butonuna tıklayın ve "New repository" seçin
3. Repository adını girin: `react-kahve-dukkani` veya `no48-coffee-roasters`
4. Description (opsiyonel): "☕ Fethiye Çalış Sahili için responsive ve SEO optimize edilmiş kahve dükkanı web sitesi"
5. **Public** seçin (veya Private, tercih size kalmış)
6. ❌ **README, .gitignore ve license eklemeden** "Create repository" tıklayın
   (Çünkü bunlar zaten projede var)

## 2. Terminal Komutları

Aşağıdaki komutları sırasıyla çalıştırın:

```bash
# GitHub'da oluşturduğunuz repository URL'ini ekleyin
# [kullanici-adiniz] yerine kendi GitHub kullanıcı adınızı yazın
git remote add origin https://github.com/[kullanici-adiniz]/react-kahve-dukkani.git

# Ana branch'i ayarlayın (GitHub artık 'main' kullanıyor)
git branch -M main

# Projeyi GitHub'a yükleyin
git push -u origin main
```

## 3. Örnek Komut Dizisi

Eğer GitHub kullanıcı adınız "mehmetali" ise:

```bash
git remote add origin https://github.com/mehmetali/react-kahve-dukkani.git
git branch -M main
git push -u origin main
```

## 4. GitHub Pages ile Deploy (Opsiyonel)

Projeyi canlı yayına almak için:

```bash
# gh-pages paketini yükleyin
npm install --save-dev gh-pages

# package.json'a şunu ekleyin:
# "homepage": "https://[kullanici-adiniz].github.io/react-kahve-dukkani"

# Scripts bölümüne şunları ekleyin:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy edin
npm run deploy
```

## 5. Alternatif Deploy Seçenekleri

### Vercel (Önerilen - En Kolay)
1. https://vercel.com adresine gidin
2. GitHub ile giriş yapın
3. "Import Project" tıklayın
4. Repository'nizi seçin
5. Deploy! 🎉

### Netlify
1. https://netlify.com adresine gidin
2. "Add new site" > "Import an existing project"
3. GitHub repository'nizi seçin
4. Build ayarları:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy! 🎉

---

✅ **Tamamlandı!** Projeniz artık GitHub'da ve isteğe bağlı olarak canlı yayında!
