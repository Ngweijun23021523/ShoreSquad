# 🌊 ShoreSquad - Rally Your Crew for Beach Cleanups

**ShoreSquad** is a Gen-Z friendly web app that mobilizes youth to organize beach cleanup events. Track real-time weather, find cleanup spots on interactive maps, and connect with your eco-crew through live chat!

## 🚀 Features

✅ **Real-Time Weather** - Live Singapore weather data from NEA API  
✅ **Interactive Maps** - Google Maps iframe showing cleanup locations (e.g., Pasir Ris, East Coast Park)  
✅ **Squad Chat** - Tawk.to widget for real-time team communication  
✅ **Event Management** - Browse and join upcoming cleanup events  
✅ **Mobile First** - Fully responsive design optimized for iOS/Android  
✅ **Gen-Z Appeal** - Beachy vibes with emojis and Singapore slang  

---

## 📋 Setup Instructions

### Prerequisites
- Modern browser (Chrome, Safari, Firefox, Edge)
- Internet connection (for API calls and Live Server)
- Git (optional, for version control)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/Ngweijun23021523/ShoreSquad.git
   cd ShoreSquad
   ```

2. **Open with Live Server** (VS Code)
   - Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
   - Right-click `index.html` → "Open with Live Server"
   - App opens at `http://localhost:5500`

3. **Or use Python's built-in server**
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

---

## 🔧 Configuration

### NEA Weather API
The app automatically fetches Singapore weather from:
```
https://api.data.gov.sg/v1/environment/4-day-weather-forecast
```
No API key required! The WeatherModule handles fetch requests with error fallback.

**Test in Console:**
```javascript
fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast')
  .then(r => r.json())
  .then(d => console.log(d));
```

### Google Maps Iframe
Current location: **Pasir Ris** (1.381497, 103.955574)

To change cleanup spot:
1. Open `index.html`
2. Find the `<iframe src="https://www.google.com/maps/embed?...">` tag
3. Update coordinates in the embed URL

### Tawk.to Chat Widget
1. Sign up at [Tawk.to](https://www.tawk.to)
2. Create a property and get your **Property ID**
3. Replace `YOUR_PROPERTY_ID` in `index.html`:
   ```html
   <script src='https://embed.tawk.to/YOUR_PROPERTY_ID/default'></script>
   ```

---

## 📱 Browser Testing

### Desktop
✅ Chrome, Firefox, Safari, Edge  
✅ DevTools: F12 → Toggle device toolbar

### Mobile (iOS)
- Safari on iPhone/iPad
- Test with DevTools device emulation

### Mobile (Android)
- Chrome on Android
- Use Chrome DevTools for remote debugging

### Network Testing (4G Simulation)
1. Open Chrome DevTools (F12)
2. Network tab → Throttling → "Slow 4G"
3. Reload page and check load time

**Target: <1s load on 4G**

---

## 📊 Project Structure

```
ShoreSquad/
├── index.html           # Main HTML with map & chat
├── css/
│   └── styles.css      # Beachy styles (blues, yellows)
├── js/
│   └── app.js          # Core logic & API integration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

---

## 🛠️ Development Roadmap

### ✅ Week 1: Skeleton (Complete)
- [x] HTML5, CSS3, ES6+ setup
- [x] Tawk.to snippet added
- [x] Google Maps iframe embedded
- [x] .gitignore configured

### ✅ Week 2: MVP with Mock Vibes (Complete)
- [x] Beachy UI colors (ocean blue #0066CC, sand #F4E4C1, eco green #2ECC71)
- [x] Mock weather data with emojis
- [x] Static event cards
- [x] Gen-Z styling

### ✅ Week 3: Real API & Squad Chat (In Progress)
- [x] NEA Weather API integration (4-day forecast)
- [x] Google Maps iframe shows cleanup location with pin
- [x] Tawk.to chat widget embedded
- [ ] Test error handling in Chrome DevTools
- [ ] Verify weather displays on mobile 4G

### 📌 Week 4: Polish & Launch
- [ ] Minify CSS/JS for <1s 4G load
- [ ] Add loading spinners
- [ ] Deploy to GitHub Pages
- [ ] Add more Gen-Z slang ("lah!", "chup!", "confirm or what?")
- [ ] Beach emojis 🌊 throughout UI

---

## 🐛 Troubleshooting

### Weather Not Loading?
1. Check browser console: F12 → Console
2. Verify NEA API endpoint:
   ```javascript
   console.log('🌤️ Initializing weather module...');
   ```
3. Check network tab for failed requests

### Maps Not Displaying?
1. Verify iframe URL in `index.html`
2. Check for AdBlocker extensions
3. Ensure secure context (HTTPS on production)

### Tawk.to Not Showing?
1. Replace `YOUR_PROPERTY_ID` with actual ID
2. Check Tawk.to dashboard for status
3. Verify no JS errors in console

### Slow Load Times?
1. Minify CSS/JS (Week 4 task)
2. Enable gzip compression on server
3. Use Chrome Lighthouse audit

---

## 📈 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Page Load (4G) | <1s | 🔄 Testing |
| Weather API Response | <2s | ✅ Good |
| Maps Load | <3s | ✅ Good |
| Mobile Score (Lighthouse) | >90 | 📊 TBD |

---

## 🌊 Gen-Z Flair

Current vibe: Ocean blue + Sand yellow + Eco green  
Current copy: "Rally Your Crew" + "Clean Beaches, Connect Communities"

**Planned additions:**
- 🌊 Beach wave emojis
- "Confirm or what lah!" (Singapore slang)
- "Don't bluff, join cleanup!" (Singlish)
- Event countdown timers
- Crew member leaderboards

---

## 🚀 Deployment

### GitHub Pages
1. Push code to `main` branch
   ```bash
   git add .
   git commit -m "ShoreSquad Week 4 - Polish & Launch"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Repo Settings → Pages → Source: `main` branch
   - Wait 1-2 min for deployment

3. Access at: `https://Ngweijun23021523.github.io/ShoreSquad/`

### Custom Domain
- Update GitHub Pages settings with custom domain
- Configure DNS records

---

## 👥 Contributing

Want to help ShoreSquad grow? 
1. Fork the repo
2. Create feature branch (`git checkout -b feature/cool-feature`)
3. Commit changes (`git commit -m 'Add cool feature'`)
4. Push to branch (`git push origin feature/cool-feature`)
5. Open Pull Request

---

## 📞 Support

- **Tawk.to Chat**: Click the chat widget on ShoreSquad (live support)
- **GitHub Issues**: [Report bugs here](https://github.com/Ngweijun23021523/ShoreSquad/issues)
- **Email**: Contact form on footer

---

## 📄 License

ShoreSquad is open-source and available under the MIT License.

---

## 🌍 Impact

Every cleanup matters! ShoreSquad helps Singapore youth:
- ♻️ Keep beaches clean and pristine
- 👥 Build eco-conscious communities
- 🎯 Track real environmental impact
- 🌊 Protect marine ecosystems

**Join the crew. Clean the beaches. Save the world. Lah!** 🌊

---

*Last Updated: December 1, 2025*
