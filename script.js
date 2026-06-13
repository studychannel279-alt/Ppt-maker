// PPT Maker Application

class PPTMaker {
    constructor() {
        this.slides = [];
        this.currentSlideIndex = 0;
        this.init();
    }

    init() {
        // Create first slide
        this.addSlide();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Render UI
        this.renderSlideList();
        this.renderSlide();
    }

    setupEventListeners() {
        // Slide management
        document.getElementById('addSlideBtn').addEventListener('click', () => this.addSlide());
        document.getElementById('deleteSlideBtn').addEventListener('click', () => this.deleteSlide());
        
        // Text tools
        document.getElementById('addTextBtn').addEventListener('click', () => this.addTextToSlide());
        document.getElementById('textInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTextToSlide();
        });
        
        // Image tools
        document.getElementById('imageInput').addEventListener('change', (e) => this.addImageToSlide(e));
        
        // Shape tools
        document.getElementById('addRectBtn').addEventListener('click', () => this.addShape('rect'));
        document.getElementById('addCircleBtn').addEventListener('click', () => this.addShape('circle'));
        
        // Formatting
        document.getElementById('bgColor').addEventListener('change', (e) => this.changeBackgroundColor(e.target.value));
        document.getElementById('fontColor').addEventListener('change', (e) => this.changeFontColor(e.target.value));
        document.getElementById('fontSize').addEventListener('change', (e) => this.changeFontSize(e.target.value));
        
        // Export
        document.getElementById('exportBtn').addEventListener('click', () => this.exportAsPDF());
        document.getElementById('exportPptxBtn').addEventListener('click', () => this.exportAsPPTX());
    }

    addSlide() {
        const slide = {
            id: Date.now(),
            title: 'New Slide',
            subtitle: '',
            backgroundColor: '#ffffff',
            elements: []
        };
        this.slides.push(slide);
        this.currentSlideIndex = this.slides.length - 1;
        this.renderSlideList();
        this.renderSlide();
    }

    deleteSlide() {
        if (this.slides.length <= 1) {
            alert('You must have at least one slide!');
            return;
        }
        this.slides.splice(this.currentSlideIndex, 1);
        this.currentSlideIndex = Math.max(0, this.currentSlideIndex - 1);
        this.renderSlideList();
        this.renderSlide();
    }

    selectSlide(index) {
        this.currentSlideIndex = index;
        this.renderSlideList();
        this.renderSlide();
    }

    getCurrentSlide() {
        return this.slides[this.currentSlideIndex];
    }

    addTextToSlide() {
        const textInput = document.getElementById('textInput');
        const text = textInput.value.trim();
        
        if (!text) {
            alert('Please enter text!');
            return;
        }

        const currentSlide = this.getCurrentSlide();
        const element = {
            type: 'text',
            content: text,
            x: 50 + Math.random() * 100,
            y: 150 + Math.random() * 100,
            fontSize: 16,
            color: '#000000'
        };
        currentSlide.elements.push(element);
        textInput.value = '';
        this.renderSlide();
    }

    addImageToSlide(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const currentSlide = this.getCurrentSlide();
            const element = {
                type: 'image',
                src: e.target.result,
                x: 50,
                y: 150,
                width: 300,
                height: 200
            };
            currentSlide.elements.push(element);
            this.renderSlide();
        };
        reader.readAsDataURL(file);
        event.target.value = '';
    }

    addShape(shapeType) {
        const currentSlide = this.getCurrentSlide();
        const element = {
            type: 'shape',
            shapeType: shapeType,
            x: 100,
            y: 150,
            width: 100,
            height: 100,
            color: '#667eea'
        };
        currentSlide.elements.push(element);
        this.renderSlide();
    }

    changeBackgroundColor(color) {
        const currentSlide = this.getCurrentSlide();
        currentSlide.backgroundColor = color;
        this.renderSlide();
    }

    changeFontColor(color) {
        const slideContent = document.getElementById('slideContent');
        slideContent.style.color = color;
    }

    changeFontSize(size) {
        const slideContent = document.getElementById('slideContent');
        slideContent.style.fontSize = size + 'px';
    }

    renderSlideList() {
        const slideList = document.getElementById('slideList');
        slideList.innerHTML = '';

        this.slides.forEach((slide, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `slide-thumbnail ${index === this.currentSlideIndex ? 'active' : ''}`;
            thumbnail.innerHTML = `
                <div class="slide-thumbnail-title">Slide ${index + 1}</div>
                <div>${slide.title || 'Untitled'}</div>
            `;
            thumbnail.addEventListener('click', () => this.selectSlide(index));
            slideList.appendChild(thumbnail);
        });
    }

    renderSlide() {
        const slide = this.getCurrentSlide();
        const slideContent = document.getElementById('slideContent');
        
        // Update background color
        slideContent.style.backgroundColor = slide.backgroundColor;

        // Clear elements but keep title and subtitle
        const title = slideContent.querySelector('.slide-title');
        const subtitle = slideContent.querySelector('.slide-subtitle');
        
        // Remove old elements
        document.querySelectorAll('.slide-element').forEach(el => el.remove());

        // Render elements
        slide.elements.forEach((element, index) => {
            if (element.type === 'text') {
                const textEl = document.createElement('div');
                textEl.className = 'slide-element';
                textEl.textContent = element.content;
                textEl.style.left = element.x + 'px';
                textEl.style.top = element.y + 'px';
                textEl.style.fontSize = element.fontSize + 'px';
                textEl.style.color = element.color;
                slideContent.appendChild(textEl);
            } else if (element.type === 'image') {
                const imgEl = document.createElement('img');
                imgEl.className = 'slide-element slide-image';
                imgEl.src = element.src;
                imgEl.style.left = element.x + 'px';
                imgEl.style.top = element.y + 'px';
                imgEl.style.width = element.width + 'px';
                imgEl.style.height = element.height + 'px';
                slideContent.appendChild(imgEl);
            } else if (element.type === 'shape') {
                const shapeEl = document.createElement('div');
                shapeEl.className = 'slide-element slide-shape';
                shapeEl.style.left = element.x + 'px';
                shapeEl.style.top = element.y + 'px';
                shapeEl.style.width = element.width + 'px';
                shapeEl.style.height = element.height + 'px';
                shapeEl.style.backgroundColor = element.color;
                
                if (element.shapeType === 'circle') {
                    shapeEl.style.borderRadius = '50%';
                }
                slideContent.appendChild(shapeEl);
            }
        });
    }

    exportAsPDF() {
        alert('PDF export requires a library like html2pdf. Install it first!\n\nRun: npm install html2pdf.js');
        // Future implementation with html2pdf library
    }

    exportAsPPTX() {
        alert('PPTX export requires a library like pptxgen. Install it first!\n\nRun: npm install pptxgenjs');
        // Future implementation with pptxgenjs library
    }
}

// Initialize the app
const pptMaker = new PPTMaker();