# PPT Maker - Presentation Builder

🎉 **It comes in handy to make PPT** - A simple, web-based PowerPoint presentation maker built with vanilla JavaScript, HTML5, and CSS.

## ✨ Features

✅ **Core Features:**
- Create and manage multiple slides
- Add text to slides with custom formatting
- Insert images from your device
- Add shapes (rectangles, circles)
- Customize background colors for each slide
- Adjust font sizes (8-72px) and colors
- Slide thumbnails for easy navigation
- Delete unwanted slides
- Simple, intuitive UI

🔮 **Coming Soon:**
- 📥 Export presentations as PDF
- 📤 Export presentations as PPTX
- 🎨 More shape options
- 🎬 Animations and transitions
- 📂 Import existing presentations
- 🎭 Multiple themes/templates

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- **No dependencies required!** - Works instantly

### Quick Start

1. **Visit the App:**
   - Open the `index.html` file in your web browser
   - Or clone and open locally:
   ```bash
   git clone https://github.com/studychannel279-alt/Ppt-maker.git
   cd Ppt-maker
   ```

2. **Run Locally (Optional):**
   ```bash
   # Using Python 3
   python -m http.server 8000

   # OR using Python 2
   python -m SimpleHTTPServer 8000

   # OR using Node.js http-server
   npx http-server
   ```

3. **Open in Browser:**
   ```
   http://localhost:8000
   ```

## 📖 How to Use

### Creating Slides
1. Click the **"+ Add Slide"** button to create new slides
2. Click on the title and subtitle to edit them directly
3. Each slide is automatically saved in memory

### Adding Content

**Text:**
- Enter text in the input field under "Text" section
- Click "+ Add Text" or press Enter
- Text will appear on your slide

**Images:**
- Click the file picker under "Image" section
- Select an image from your device
- Image will be placed on your slide

**Shapes:**
- Click "□ Rectangle" to add a rectangle
- Click "○ Circle" to add a circle
- Multiple shapes can be added per slide

### Formatting

**Background Color:**
- Use the color picker to change slide background
- Each slide can have a different background

**Font Size:**
- Adjust the slider from 8px to 72px
- Apply to all text on the slide

**Font Color:**
- Use the color picker to change text color
- Updates text appearance in real-time

### Slide Navigation
- Click on slide thumbnails in the **left panel** to switch between slides
- The active slide is highlighted in blue
- Delete slides using the "🗑️ Delete Slide" button (minimum 1 slide required)

## 📁 Project Structure

```
Ppt-maker/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # Core application logic
└── README.md       # Documentation
```

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Fully Supported |
| Firefox | 88+     | ✅ Fully Supported |
| Safari  | 14+     | ✅ Fully Supported |
| Edge    | 90+     | ✅ Fully Supported |

## 🔧 Future Enhancements

### Enable PDF Export:
```bash
npm install html2pdf.js
```
Then update `exportAsPDF()` function in `script.js`

### Enable PPTX Export:
```bash
npm install pptxgenjs
```
Then update `exportAsPPTX()` function in `script.js`

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Commit** your changes: `git commit -m 'Add your feature'`
4. **Push** to the branch: `git push origin feature/your-feature`
5. **Open** a Pull Request

## 📝 License

This project is licensed under the **MIT License** - feel free to use it however you like!

## 🆘 Support

Have questions or found a bug?
- 📧 Open an issue on GitHub
- 💬 Check the documentation
- 🐛 Report bugs with details

## 👨‍💻 Author

Created with ❤️ by **studychannel279-alt**

---

**Start creating amazing presentations today! 🎉**
