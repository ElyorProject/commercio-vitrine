class CommercioApp {
    constructor() {
        this.currentView = 'catalog';
        this.selectedCategory = 'all';
        this.selectedProduct = null;
        this.products = this.initializeProducts();
        this.init();
    }

    initializeProducts() {
        return [
            // Одежда - Мужская
            { id: 1, name: 'T-Shirt Classic', price: 45, category: 'clothing', subcategory: 'men-clothing', image: 'products/clothes/Без названия (37).jpg', variants: ['products/clothes/Без названия (37).jpg', 'products/clothes/Без названия (38).jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Comfortable cotton t-shirt perfect for everyday wear.' },
            { id: 2, name: 'Casual Shirt', price: 65, category: 'clothing', subcategory: 'men-clothing', image: 'products/clothes/Без названия (38).jpg', variants: ['products/clothes/Без названия (38).jpg', 'products/clothes/Без названия (39).jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Stylish casual shirt for modern lifestyle.' },
            { id: 3, name: 'Premium Hoodie', price: 85, category: 'clothing', subcategory: 'men-clothing', image: 'products/clothes/Без названия (39).jpg', variants: ['products/clothes/Без названия (39).jpg', 'products/clothes/Без названия (40).jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Warm and comfortable premium hoodie.' },
            { id: 4, name: 'Sport Jacket', price: 95, category: 'clothing', subcategory: 'men-clothing', image: 'products/clothes/Без названия (40).jpg', variants: ['products/clothes/Без названия (40).jpg', 'products/clothes/Без названия (41).jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Lightweight sport jacket for active lifestyle.' },
            
            // Одежда - Женская
            { id: 5, name: 'Women Sweater', price: 75, category: 'clothing', subcategory: 'women-clothing', image: 'products/clothes/female/ZAFUL Women\'s Cropped Turtleneck Sweater Lantern Sleeve Ribbed Knit Pullover Sweater Jumper.jpg', variants: ['products/clothes/female/ZAFUL Women\'s Cropped Turtleneck Sweater Lantern Sleeve Ribbed Knit Pullover Sweater Jumper.jpg', 'products/clothes/female/mhmm.jpg'], sizes: ['XS', 'S', 'M', 'L'], description: 'Stylish cropped turtleneck sweater.' },
            { id: 6, name: 'Elegant Dress', price: 105, category: 'clothing', subcategory: 'women-clothing', image: 'products/clothes/female/Без названия (46).jpg', variants: ['products/clothes/female/Без названия (46).jpg', 'products/clothes/female/Без названия (47).jpg'], sizes: ['XS', 'S', 'M', 'L'], description: 'Elegant dress for special occasions.' },
            { id: 7, name: 'Casual Top', price: 55, category: 'clothing', subcategory: 'women-clothing', image: 'products/clothes/female/Без названия (48).jpg', variants: ['products/clothes/female/Без названия (48).jpg', 'products/clothes/female/mhmm.jpg'], sizes: ['XS', 'S', 'M', 'L'], description: 'Comfortable casual top.' },
            
            // Обувь - Мужская
            { id: 8, name: 'Casual Sneakers', price: 85, category: 'shoes', subcategory: 'sneakers', image: 'products/shoes/Без названия (45).jpg', variants: ['products/shoes/Без названия (45).jpg', 'products/shoes/PETER MILLAR.jpg'], sizes: [40, 41, 42, 43], description: 'Comfortable casual sneakers for everyday wear.' },
            { id: 9, name: 'Peter Millar Shoes', price: 150, category: 'shoes', subcategory: 'formal-shoes', image: 'products/shoes/PETER MILLAR.jpg', variants: ['products/shoes/PETER MILLAR.jpg', 'products/shoes/Sapato Masculino Oxford Social Elegante em Couro Legítimo, Sola Antiderrapante, Casual, Confortável com Compass Látego_.jpg'], sizes: [40, 41, 42, 43], description: 'Premium Peter Millar footwear collection.' },
            { id: 10, name: 'Oxford Shoes', price: 120, category: 'shoes', subcategory: 'formal-shoes', image: 'products/shoes/Sapato Masculino Oxford Social Elegante em Couro Legítimo, Sola Antiderrapante, Casual, Confortável com Compass Látego_.jpg', variants: ['products/shoes/Sapato Masculino Oxford Social Elegante em Couro Legítimo, Sola Antiderrapante, Casual, Confortável com Compass Látego_.jpg'], sizes: [40, 41, 42, 43], description: 'Elegant Oxford shoes in genuine leather.' },
            { id: 10, name: 'New balance 350', price: 150, category: 'shoes', subcategory: 'sneakers', image: 'products/shoes/кроссовки.jpg', variants: ['products/shoes/PETER MILLAR.jpg', 'products/shoes/Sapato Masculino Oxford Social Elegante em Couro Legítimo, Sola Antiderrapante, Casual, Confortável com Compass Látego_.jpg'], sizes: [40, 41, 42, 43], description: 'Premium Peter Millar footwear collection.' },

            // Обувь - Женская
            { id: 11, name: 'Women Sneakers', price: 95, category: 'shoes', subcategory: 'sneakers', image: 'products/shoes/female/Chaussure Handball Spezial.jpg', variants: ['products/shoes/female/Chaussure Handball Spezial.jpg', 'products/shoes/female/CALIPSO – Classic Black Canvas.jpg'], sizes: [36, 37, 38, 39], description: 'Stylish women sneakers.' },
            { id: 12, name: 'Classic Canvas', price: 75, category: 'shoes', subcategory: 'sneakers', image: 'products/shoes/female/CALIPSO – Classic Black Canvas.jpg', variants: ['products/shoes/female/CALIPSO – Classic Black Canvas.jpg', 'products/shoes/female/Без названия (49).jpg'], sizes: [36, 37, 38, 39], description: 'Classic black canvas shoes.' },
            { id: 13, name: 'Elegant Heels', price: 110, category: 'shoes', subcategory: 'formal-shoes', image: 'products/shoes/female/Без названия (50).jpg', variants: ['products/shoes/female/Без названия (50).jpg', 'products/shoes/female/Без названия (49).jpg'], sizes: [36, 37, 38, 39], description: 'Elegant heels for special occasions.' },
            
            // Электроника
            { id: 14, name: 'Apple Watch Series 11', price: 400, category: 'electronics', subcategory: 'watches', image: 'products/electronics/Apple Watch Series 11.jpg', variants: ['products/electronics/Apple Watch Series 11.jpg'], sizes: ['38mm', '42mm', '44mm'], description: 'Advanced Apple Watch with cutting-edge technology.' },
            { id: 15, name: 'JBL Tune 525BT', price: 80, category: 'electronics', subcategory: 'headphones', image: 'products/electronics/Casque supra-auriculaire sans fil Bluetooth JBL Tune 525BT Noir - Casque audio - Achat & prix.jpg', variants: ['products/electronics/Casque supra-auriculaire sans fil Bluetooth JBL Tune 525BT Noir - Casque audio - Achat & prix.jpg'], sizes: ['One Size'], description: 'Wireless Bluetooth headphones with superior sound quality.' },
            { id: 32, name: 'Premium Headphones', price: 120, category: 'electronics', subcategory: 'headphones', image: 'products/electronics/headphone.jpg', variants: ['products/accessories/headphone.jpg'], sizes: ['One Size'], description: 'High-quality premium headphones with excellent sound.' },
            { id: 33, name: 'Smart Watch Pro', price: 350, category: 'electronics', subcategory: 'watches', image: 'products/electronics/smartwatch.jpg', variants: ['products/accessories/smartwatch.png'], sizes: ['42mm', '44mm', '46mm'], description: 'Advanced smartwatch with fitness tracking and notifications.' },
            
            // Аксессуары
            { id: 16, name: 'Luxury Accessory', price: 250, category: 'accessories', subcategory: 'jewelry', image: 'products/accessories/Без названия (43).jpg', variants: ['products/accessories/Без названия (43).jpg'], sizes: ['S', 'M', 'L'], description: 'Premium luxury accessory for special occasions.' },
            { id: 17, name: 'Rolex Watch', price: 1200, category: 'accessories', subcategory: 'jewelry', image: 'products/accessories/Rolex Configurator - Configure your Rolex watch _ Rolex®.jpg', variants: ['products/accessories/Rolex Configurator - Configure your Rolex watch _ Rolex®.jpg', 'products/accessories/Rolex Datejust 41 watch_ Oystersteel - m126300-0020.jpg'], sizes: ['S', 'M', 'L'], description: 'Luxury timepiece with precision engineering.' },
            { id: 18, name: 'Premium Watch', price: 1300, category: 'accessories', subcategory: 'jewelry', image: 'products/accessories/ROLEX_DATEJUST 41 Ref_ 126300.jpg', variants: ['products/accessories/ROLEX_DATEJUST 41 Ref_ 126300.jpg'], sizes: ['S', 'M', 'L'], description: 'Premium watch collection with exclusive design.' },
            
            // Сумки
            { id: 23, name: 'Designer Bag', price: 180, category: 'accessories', subcategory: 'bags', image: 'products/accessories/bags/Без названия (51).jpg', variants: ['products/accessories/bags/Без названия (51).jpg', 'products/accessories/bags/Без названия (52).jpg'], sizes: ['One Size'], description: 'Stylish designer bag for everyday use.' },
            { id: 24, name: 'Luxury Handbag', price: 220, category: 'accessories', subcategory: 'bags', image: 'products/accessories/bags/Без названия (52).jpg', variants: ['products/accessories/bags/Без названия (52).jpg', 'products/accessories/bags/Без названия (53).jpg'], sizes: ['One Size'], description: 'Premium luxury handbag.' },
            { id: 25, name: 'Casual Bag', price: 95, category: 'accessories', subcategory: 'bags', image: 'products/accessories/bags/Без названия (53).jpg', variants: ['products/accessories/bags/Без названия (53).jpg'], sizes: ['One Size'], description: 'Comfortable casual bag for daily activities.' },
            { id: 26, name: 'Men Square Bag', price: 85, category: 'accessories', subcategory: 'bags', image: 'products/accessories/bags/homens Bolsa quadrada decoração de etiquetas de letras.jpg', variants: ['products/accessories/bags/homens Bolsa quadrada decoração de etiquetas de letras.jpg'], sizes: ['One Size'], description: 'Modern square bag with letter decoration.' },
            { id: 27, name: 'Lacoste Wallet', price: 65, category: 'accessories', subcategory: 'bags', image: 'products/accessories/bags/Lacoste - Le portefeuille Fitzgerald.jpg', variants: ['products/accessories/bags/Lacoste - Le portefeuille Fitzgerald.jpg'], sizes: ['One Size'], description: 'Lacoste Fitzgerald wallet.' },
            { id: 28, name: 'Oversized Bag', price: 150, category: 'accessories', subcategory: 'bags', image: 'products/accessories/bags/oversized-bag.jpg', variants: ['products/accessories/bags/Oversized Bags Are Back & More "Ludicrously Capacious" Than Ever.jpg'], sizes: ['One Size'], description: 'Trendy oversized bag with large capacity.' },
            { id: 29, name: 'Park Avenue Duffle', price: 120, category: 'accessories', subcategory: 'bags', image: 'products/accessories/bags/Park Avenue Duffle Bag (Black).jpg', variants: ['products/accessories/bags/Park Avenue Duffle Bag (Black).jpg'], sizes: ['One Size'], description: 'Classic black duffle bag for travel.' },
            { id: 30, name: 'Leather Wallet', price: 45, category: 'accessories', subcategory: 'bags', image: 'products/accessories/bags/Timeless Leather Wallet.jpg', variants: ['products/accessories/bags/Timeless Leather Wallet.jpg'], sizes: ['One Size'], description: 'Timeless leather wallet with classic design.' },
            { id: 31, name: 'Business Wallet', price: 75, category: 'accessories', subcategory: 'bags', image: 'products/accessories/bags/business-wallet.jpg', variants: ['products/accessories/bags/WILLIAMPOLO Business Mens Wallet Luxury Brand 100% Genuine Leather Wallet Bank Card Holder Casual.jpg'], sizes: ['One Size'], description: 'Premium business wallet in genuine leather.' },
            
            // Спорт
            { id: 19, name: 'Sport Equipment', price: 60, category: 'sport', subcategory: 'equipment', image: 'products/sports/1.jpg', variants: ['products/sports/1.jpg'], sizes: ['S', 'M', 'L'], description: 'Professional sport equipment for training.' },
            { id: 20, name: 'Adidas Cap', price: 35, category: 'sport', subcategory: 'sportswear', image: 'products/sports/adidas TOUR SNAPBACK KAPPE - Blau _ adidas Deutschland.jpg', variants: ['products/sports/adidas TOUR SNAPBACK KAPPE - Blau _ adidas Deutschland.jpg'], sizes: ['One Size'], description: 'Adidas tour snapback cap in blue.' },
            { id: 21, name: 'Nike Sports Bag', price: 45, category: 'sport', subcategory: 'equipment', image: 'products/sports/Nike Unisex\'s Academy Team-Sp21 Sports Bag.jpg', variants: ['products/sports/Nike Unisex\'s Academy Team-Sp21 Sports Bag.jpg'], sizes: ['One Size'], description: 'Nike Academy team sports bag for all activities.' },
            { id: 22, name: 'Nike Running Jacket', price: 85, category: 'sport', subcategory: 'sportswear', image: 'products/sports/Nike Woven Reflective Running Hooded Jacket Lightweight Men Size Xl Aj3654-010.jpg', variants: ['products/sports/Nike Woven Reflective Running Hooded Jacket Lightweight Men Size Xl Aj3654-010.jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Nike reflective running jacket for men.' }
        ];
    }

    init() {
        this.bindEvents();
        this.renderProducts();
        this.bindNavigation();
    }

    bindNavigation() {
        // Добавляем обработчики для всех навигационных элементов
        document.addEventListener('click', (e) => {
            if (e.target.closest('.nav-item')) {
                const navItem = e.target.closest('.nav-item');
                const span = navItem.querySelector('span');
                
                // Убираем активный класс со всех nav-item
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Добавляем активный класс к текущему
                navItem.classList.add('active');
                
                if (span && span.textContent === 'Catalog') {
                    this.showView('catalog-view-detailed');
                } else if (span && span.textContent === 'Home') {
                    this.showView('catalog-view');
                } else if (span && span.textContent === 'Purchases') {
                    this.showView('purchases-view');
                }
            }
            
            // Обработчик для кнопки "Перейти к покупкам"
            if (e.target.classList.contains('go-home-btn')) {
                this.showView('catalog-view');
                // Обновляем активную навигацию
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelector('.nav-item span[textContent="Home"]')?.parentElement.classList.add('active');
            }
        });
    }

    bindEvents() {
        // Category selection
        document.querySelectorAll('.category-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const button = e.target.closest('.category-item');
                this.selectCategory(button.dataset.category);
            });
        });

        // Back button
        document.getElementById('back-btn').addEventListener('click', () => {
            this.showView('catalog-view');
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Favorite button
        document.getElementById('favorite-btn').addEventListener('click', () => {
            this.toggleFavorite();
        });
    }

    selectCategory(category) {
        this.selectedCategory = category;
        
        // Update active category
        document.querySelectorAll('.category-item').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.renderProducts();
    }

    renderProducts() {
        const grid = document.getElementById('products-grid');
        let filteredProducts = this.products;
        
        // Фильтрация по категории
        if (this.selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => 
                product.category === this.selectedCategory
            );
        }
        
        // Фильтрация по подкатегории
        if (this.selectedSubcategory && this.selectedSubcategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => 
                product.subcategory === this.selectedSubcategory
            );
        }

        grid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" onclick="app.showProductDetails(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price}$</div>
                    <button class="view-btn" onclick="event.stopPropagation(); app.showProductDetails(${product.id})">Перейти</button>
                </div>
            </div>
        `).join('');
    }

    showProductDetails(productId) {
        this.selectedProduct = this.products.find(p => p.id === productId);
        if (!this.selectedProduct) return;

        this.renderProductDetails();
        this.showView('details-view');
    }

    renderProductDetails() {
        const product = this.selectedProduct;
        
        // Update product image
        document.getElementById('product-main-image').src = product.image;
        
        // Update product info
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `${product.price}$`;
        document.getElementById('product-description').textContent = product.description;
        
        // Render variant images
        const variantContainer = document.getElementById('variant-images');
        variantContainer.innerHTML = product.variants.map((variant, index) => `
            <img src="${variant}" alt="Variant ${index + 1}" 
                 class="variant-image ${index === 0 ? 'active' : ''}"
                 onclick="app.selectVariant(${index})">
        `).join('');
        
        // Render size options
        const sizeContainer = document.getElementById('size-options');
        sizeContainer.innerHTML = product.sizes.map((size, index) => `
            <button class="size-option ${index === 2 ? 'active' : ''}" 
                    onclick="app.selectSize(this)">
                ${size}
            </button>
        `).join('');
    }

    selectVariant(index) {
        const variants = document.querySelectorAll('.variant-image');
        variants.forEach(v => v.classList.remove('active'));
        variants[index].classList.add('active');
        
        // Update main image
        document.getElementById('product-main-image').src = this.selectedProduct.variants[index];
    }

    selectSize(element) {
        document.querySelectorAll('.size-option').forEach(btn => {
            btn.classList.remove('active');
        });
        element.classList.add('active');
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Update tab panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(`${tabName}-panel`).classList.add('active');
    }

    toggleFavorite() {
        const btn = document.getElementById('favorite-btn');
        btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
        btn.style.color = btn.textContent === '♥' ? '#ff4757' : '#333';
    }

    showView(viewName) {
        console.log('Switching to view:', viewName);
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        const targetView = document.getElementById(`${viewName}`);
        console.log('Target view element:', targetView);
        if (targetView) {
            targetView.classList.add('active');
        }
        this.currentView = viewName;
    }
    
    showSubcategoryView(subcategoryId) {
        const subcategoryNames = {
            'men-clothing': 'Мужская одежда',
            'women-clothing': 'Женская одежда',
            'sneakers': 'Кроссовки',
            'formal-shoes': 'Классическая обувь',
            'watches': 'Умные часы',
            'headphones': 'Наушники',
            'jewelry': 'Украшения',
            'bags': 'Сумки',
            'sportswear': 'Спортивная одежда',
            'equipment': 'Спортивное оборудование'
        };
        
        document.getElementById('subcategory-title').textContent = subcategoryNames[subcategoryId] || 'Подкатегория';
        
        const filteredProducts = this.products.filter(product => product.subcategory === subcategoryId);
        const grid = document.getElementById('subcategory-products-grid');
        
        grid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" onclick="app.showProductDetails(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price}$</div>
                    <button class="view-btn" onclick="event.stopPropagation(); app.showProductDetails(${product.id})">Перейти</button>
                </div>
            </div>
        `).join('');
        
        this.showView('subcategory-view');
    }
}

// Initialize app
const app = new CommercioApp();