# 🚀 Proje Portföyü

Küçük projelerinizi sergileyebileceğiniz modern ve responsive bir portföy sayfası.

## ✨ Özellikler

- 🎨 Modern ve şık tasarım
- 📱 Tamamen responsive (mobil uyumlu)
- 🔍 Projeleri modal içinde görüntüleme
- 🎯 Kolay proje ekleme sistemi
- ⚡ Hızlı yükleme ve animasyonlar
- 🎪 Hover efektleri ve geçişler

## 🛠️ Kullanım

### Mevcut Projeleri Görüntüleme

1. `index.html` dosyasını tarayıcınızda açın
2. İstediğiniz projeye tıklayın
3. Proje modal içinde açılacaktır
4. Modal'ı kapatmak için:
   - Sağ üstteki X butonuna tıklayın
   - Modal dışına tıklayın
   - ESC tuşuna basın

### Yeni Proje Ekleme

1. `projects/` klasörü altında yeni bir klasör oluşturun
2. Klasör adı projenizin adı olacak (örn: `TodoApp`)
3. Klasör içinde `index.html` dosyası oluşturun
4. `index.html` dosyasını ana sayfada açın ve projenizi test edin

### Portföyde Yeni Projeyi Gösterme

1. `index.html` dosyasını açın
2. `projects-grid` div'i içinde yeni bir proje kartı ekleyin:

```html
<div class="project-card" data-project="YeniProjeAdi">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3 class="project-title">Proje Başlığı</h3>
        <p class="project-description">
            Proje açıklaması buraya gelecek.
        </p>
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
        </div>
        <button class="view-project-btn" onclick="openProject('YeniProjeAdi')">
            <i class="fas fa-external-link-alt"></i>
            Projeyi Görüntüle
        </button>
    </div>
</div>
```

3. `script.js` dosyasında `projects` objesine yeni projeyi ekleyin:

```javascript
const projects = {
    // ... mevcut projeler ...
    'YeniProjeAdi': {
        path: 'projects/YeniProjeAdi/index.html',
        title: 'Proje Başlığı'
    }
};
```

## 📁 Dosya Yapısı

```
small-projects/
├── index.html          # Ana portföy sayfası
├── style.css           # Stil dosyası
├── script.js           # JavaScript fonksiyonları
├── README.md           # Bu dosya
└── projects/           # Projeler klasörü
    ├── CharaterCounter/
    │   ├── index.html
    │   ├── index.js
    │   └── style.css
    └── Fire-Trail-Animation/
        ├── index.html
        ├── index.js
        ├── style.css
        └── fire.png
```

## 🎨 Özelleştirme

### Renk Teması Değiştirme

`style.css` dosyasında aşağıdaki CSS değişkenlerini değiştirebilirsiniz:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ffd700;
}
```

### Font Değiştirme

Google Fonts'tan yeni font ekleyebilirsiniz:

```html
<link href="https://fonts.googleapis.com/css2?family=YeniFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 🚀 Canlı Demo

Portföyü canlı olarak görüntülemek için `index.html` dosyasını tarayıcınızda açın.

## 📝 Notlar

- Tüm projeler `projects/` klasörü altında olmalıdır
- Her proje kendi `index.html` dosyasına sahip olmalıdır
- Proje klasör adları JavaScript'te kullanıldığı için boşluk içermemelidir
- Font Awesome ikonları kullanılmaktadır, yeni ikonlar için [Font Awesome](https://fontawesome.com/icons) sitesini ziyaret edin

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**İyi kodlamalar! 🎉** 