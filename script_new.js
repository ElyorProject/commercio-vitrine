class CommercioApp {
    constructor() {
        this.currentView = 'catalog';
        this.selectedCategory = 'all';
        this.selectedProduct = null;
        this.products = this.initializeProducts();
        this.showAllProducts = false;
        this.init();
    }

    initializeProducts() {
        // Товары для главной страницы (12 самых привлекательных)
        this.homeProducts = [
            // Видимые на главной странице (первые 6)
            { id: 1, name: 'Rolex Datejust', status: 'Ограниченно', price: 1200, category: 'accessories', subcategory: 'watches', article: '60001', image: 'products/accessories/Rolex Datejust 41 watch_ Oystersteel - m126300-0020.jpg', variants: ['products/accessories/Rolex Datejust 41 watch_ Oystersteel - m126300-0020.jpg', 'products/accessories/ROLEX_DATEJUST 41 Ref_ 126300.jpg'], sizes: ['One Size'], description: 'Luxury Swiss timepiece with precision engineering.' },
            { id: 2, name: 'Peter Millar Oxford', status: 'Ограниченно', price: 280, category: 'shoes', subcategory: 'formal-shoes', article: '30001', image: 'products/shoes/PETER MILLAR.jpg', variants: ['products/shoes/PETER MILLAR.jpg', 'products/shoes/Sapato Masculino Oxford Social Elegante em Couro Legítimo, Sola Antiderrapante, Casual, Confortável com Compass Látego_.jpg'], sizes: [40, 41, 42, 43], description: 'Premium leather Oxford shoes from Peter Millar.' },
            { id: 3, name: 'Classic Suit Premium', status: 'Рекомендованно', price: 450, category: 'classic', subcategory: 'formal', article: '50001', image: 'products/classic/classic1.jpg', variants: ['products/classic/classic1.jpg', 'products/classic/classic2.jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Elegant tailored suit for formal occasions.' },
            { id: 4, name: 'Designer Handbag', status: 'Ограниченно', price: 320, category: 'accessories', subcategory: 'bags', article: '70001', image: 'products/accessories/bags/Без названия (52).jpg', variants: ['products/accessories/bags/Без названия (52).jpg', 'products/accessories/bags/Без названия (53).jpg'], sizes: ['One Size'], description: 'Luxury designer handbag with premium materials.' },
            { id: 5, name: 'Elegant Evening Dress', status: 'Ограниченно', price: 180, category: 'clothing', subcategory: 'women-clothing', article: '20001', image: 'products/clothes/female/Без названия (46).jpg', variants: ['products/clothes/female/Без названия (46).jpg', 'products/clothes/female/Без названия (47).jpg'], sizes: ['XS', 'S', 'M', 'L'], description: 'Sophisticated evening dress for special events.' },
            { id: 6, name: 'Vintage Leather Coat', status: 'Рекомендованно', price: 380, category: 'classic', subcategory: 'outerwear', article: '50002', image: 'products/classic/classic3.jpg', variants: ['products/classic/classic3.jpg', 'products/classic/classic4.jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Timeless vintage coat with premium leather.' },
            
            // Скрытые под кнопкой "Ещё"
            { id: 7, name: 'Apple Watch Series', status: 'Рекомендованно', price: 420, category: 'electronics', subcategory: 'smartwatch', article: '60002', image: 'products/electronics/Apple Watch Series 11.jpg', variants: ['products/electronics/Apple Watch Series 11.jpg'], sizes: ['38mm', '42mm'], description: 'Latest Apple Watch with advanced health features.' },
            { id: 8, name: 'Nike Running Jacket', status: 'Ограниченно', price: 150, category: 'sport', subcategory: 'sportswear', article: '80001', image: 'products/sports/Nike Woven Reflective Running Hooded Jacket Lightweight Men Size Xl Aj3654-010.jpg', variants: ['products/sports/Nike Woven Reflective Running Hooded Jacket Lightweight Men Size Xl Aj3654-010.jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Professional running jacket with reflective elements.' },
            { id: 9, name: 'Premium Leather Wallet', status: 'Доступно', price: 95, category: 'accessories', subcategory: 'bags', article: '70002', image: 'products/accessories/bags/Timeless Leather Wallet.jpg', variants: ['products/accessories/bags/Timeless Leather Wallet.jpg', 'products/accessories/bags/Lacoste - Le portefeuille Fitzgerald.jpg'], sizes: ['One Size'], description: 'Handcrafted leather wallet with elegant design.' },
            { id: 10, name: 'Designer Sneakers', status: 'Рекомендованно', price: 220, category: 'shoes', subcategory: 'sneakers', article: '30002', image: 'products/shoes/The Most Stylish Collection On The High Street.jpg', variants: ['products/shoes/The Most Stylish Collection On The High Street.jpg'], sizes: [38, 39, 40, 41, 42, 43], description: 'High-end designer sneakers for urban style.' },
            { id: 11, name: 'Cashmere Sweater', status: 'Ограниченно', price: 160, category: 'clothing', subcategory: 'women-clothing', article: '20002', image: 'products/clothes/female/ZAFUL Women\'s Cropped Turtleneck Sweater Lantern Sleeve Ribbed Knit Pullover Sweater Jumper.jpg', variants: ['products/clothes/female/ZAFUL Women\'s Cropped Turtleneck Sweater Lantern Sleeve Ribbed Knit Pullover Sweater Jumper.jpg', 'products/clothes/female/mhmm.jpg'], sizes: ['XS', 'S', 'M', 'L'], description: 'Luxurious cashmere sweater with modern cut.' },
            { id: 12, name: 'Classic Formal Dress', status: 'Рекомендованно', price: 280, category: 'classic', subcategory: 'formal', article: '50003', image: 'products/classic/classic5.jpg', variants: ['products/classic/classic5.jpg', 'products/classic/classic6.jpg'], sizes: ['XS', 'S', 'M', 'L'], description: 'Timeless formal dress for elegant occasions.' }
        ];

        // Полный каталог товаров для страницы каталога
        return [
            ...this.homeProducts,
            // Дополнительные товары для каталога
            { id: 13, name: 'Casual T-Shirt', status: 'Доступно', price: 35, category: 'clothing', subcategory: 'men-clothing', article: '10001', image: 'products/clothes/Без названия (37).jpg', variants: ['products/clothes/Без названия (37).jpg', 'products/clothes/Без названия (38).jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Comfortable cotton t-shirt for everyday wear.' },
            { id: 14, name: 'Denim Jeans', status: 'Доступно', price: 85, category: 'clothing', subcategory: 'men-clothing', article: '10002', image: 'products/clothes/Без названия (44).png', variants: ['products/clothes/Без названия (44).png'], sizes: ['30', '32', '34', '36'], description: 'Classic denim jeans with modern fit.' },
            { id: 15, name: 'Women Heels', status: 'Рекомендованно', price: 140, category: 'shoes', subcategory: 'women-shoes', article: '30003', image: 'products/shoes/female/Без названия (49).jpg', variants: ['products/shoes/female/Без названия (49).jpg', 'products/shoes/female/Без названия (50).jpg'], sizes: [36, 37, 38, 39, 40], description: 'Elegant high heels for special occasions.' },
            { id: 16, name: 'Sports Bag', status: 'Доступно', price: 65, category: 'sport', subcategory: 'equipment', article: '80002', image: 'products/sports/Nike Unisex\'s Academy Team-Sp21 Sports Bag.jpg', variants: ['products/sports/Nike Unisex\'s Academy Team-Sp21 Sports Bag.jpg'], sizes: ['One Size'], description: 'Durable sports bag for training and travel.' },
            { id: 17, name: 'Wireless Headphones', status: 'Рекомендованно', price: 180, category: 'electronics', subcategory: 'audio', article: '60003', image: 'products/electronics/Casque supra-auriculaire sans fil Bluetooth JBL Tune 525BT Noir - Casque audio - Achat & prix.jpg', variants: ['products/electronics/Casque supra-auriculaire sans fil Bluetooth JBL Tune 525BT Noir - Casque audio - Achat & prix.jpg'], sizes: ['One Size'], description: 'Premium wireless headphones with noise cancellation.' },
            { id: 18, name: 'Business Wallet', status: 'Доступно', price: 75, category: 'accessories', subcategory: 'bags', article: '70003', image: 'products/accessories/bags/business-wallet.jpg', variants: ['products/accessories/bags/business-wallet.jpg'], sizes: ['One Size'], description: 'Professional leather wallet for business use.' }
        ];
    }

    init() {
        this.bindEvents();
        this.renderProducts();
        this.bindNavigation();
        console.log('App initialized, showAllProducts:', this.showAllProducts);
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
        console.log('renderProducts called, currentView:', this.currentView, 'showAllProducts:', this.showAllProducts);
        const grid = document.getElementById('products-grid');
        const loadMoreContainer = document.getElementById('load-more-container');
        
        // Используем homeProducts для главной страницы, полный каталог для каталога
        let filteredProducts = this.currentView === 'catalog-view' ? this.homeProducts : this.products;
        
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

        // Показываем только первые товары на главной странице
        let productsToShow = filteredProducts;
        console.log('Total products:', filteredProducts.length);
        
        if (this.currentView === 'catalog-view' && !this.showAllProducts && filteredProducts.length > 6) {
            productsToShow = filteredProducts.slice(0, 6);
            console.log('Showing limited products:', productsToShow.length);
            if (loadMoreContainer) {
                loadMoreContainer.style.display = 'block';
                console.log('Load more button shown');
            }
        } else {
            console.log('Showing all products:', productsToShow.length);
            if (loadMoreContainer) {
                loadMoreContainer.style.display = 'none';
            }
        }

        grid.innerHTML = productsToShow.map(product => `
            <div class="product-card" onclick="app.showProductDetails(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price status-${product.status.toLowerCase().replace(/[^а-я]/g, '')}">${product.status}</div>
                    <button class="view-btn" onclick="event.stopPropagation(); app.showProductDetails(${product.id})">Подробнее</button>
                </div>
            </div>
        `).join('');
    }

    loadMoreProducts() {
        this.showAllProducts = true;
        this.renderProducts();
    }

    showProductDetails(productId) {
        // Ищем товар в обоих массивах
        this.selectedProduct = this.products.find(p => p.id === productId) || this.homeProducts.find(p => p.id === productId);
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
        const priceElement = document.getElementById('product-price');
        priceElement.textContent = product.status;
        priceElement.className = `price status-${product.status.toLowerCase().replace(/[^а-я]/g, '')}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('real-price').textContent = `${product.price}$`;
        
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

    copyProductInfo() {
        if (this.selectedProduct) {
            const productInfo = this.selectedProduct.article;
            
            const btn = document.querySelector('.copy-btn');
            navigator.clipboard.writeText(productInfo).then(() => {
                btn.textContent = 'СКОПИРОВАНО';
                btn.style.background = '#888';
                btn.disabled = true;
                setTimeout(() => {
                    btn.textContent = 'Копировать артикул';
                    btn.style.background = '#4A90E2';
                    btn.disabled = false;
                }, 2000);
            });
        }
    }

    checkAvailability() {
        alert('Откройте Телеграм Бот и вставьте артикул');
        window.open('https://t.me/cdesignbot', '_blank');
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
        this.showAllProducts = false;
        this.renderProducts();
    }
    
    showSubcategoryView(subcategoryId) {
        const subcategoryNames = {
            'fire-drop': 'Fire Drop',
            'luxury-drop': 'Luxury Drop',
            'week-streetwear': 'Streetwear Week',
            'week-classic': 'Classic Week',
            'theme-minimalism': 'Минимализм',
            'theme-sport': 'Спорт',
            'theme-night': 'Вечерний',
            'theme-business': 'Деловой',
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
        
        let filteredProducts = [];
        
        switch(subcategoryId) {
            case 'fire-drop':
                filteredProducts = this.products.filter(p => 
                    p.category === 'accessories' && p.subcategory === 'jewelry' ||
                    p.category === 'electronics' && p.subcategory === 'watches'
                );
                break;
            case 'luxury-drop':
                filteredProducts = this.products.filter(p => 
                    p.price > 100 && (p.category === 'shoes' || p.category === 'accessories')
                );
                break;
            case 'week-streetwear':
                filteredProducts = this.products.filter(p => 
                    p.category === 'clothing' || 
                    (p.category === 'shoes' && p.subcategory === 'sneakers') ||
                    (p.category === 'sport' && p.subcategory === 'sportswear')
                );
                break;
            case 'week-classic':
                filteredProducts = this.products.filter(p => 
                    p.category === 'classic'
                );
                break;
            case 'theme-minimalism':
                filteredProducts = this.products.filter(p => 
                    p.category === 'clothing' && p.subcategory === 'women-clothing' ||
                    p.name.toLowerCase().includes('classic') ||
                    p.name.toLowerCase().includes('casual')
                );
                break;
            case 'theme-sport':
                filteredProducts = this.products.filter(p => 
                    p.category === 'sport' || 
                    (p.category === 'shoes' && p.subcategory === 'sneakers')
                );
                break;
            case 'theme-night':
                filteredProducts = this.products.filter(p => 
                    p.category === 'accessories' && p.subcategory === 'bags' ||
                    (p.category === 'clothing' && p.price > 80)
                );
                break;
            case 'theme-business':
                filteredProducts = this.products.filter(p => 
                    p.category === 'shoes' && p.subcategory === 'formal-shoes' ||
                    (p.category === 'accessories' && p.subcategory === 'bags' && p.name.toLowerCase().includes('business'))
                );
                break;
            default:
                filteredProducts = this.products.filter(product => product.subcategory === subcategoryId);
        }
        
        const grid = document.getElementById('subcategory-products-grid');
        
        grid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" onclick="app.showProductDetails(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price status-${product.status.toLowerCase().replace(/[^а-я]/g, '')}">${product.status}</div>
                    <button class="view-btn" onclick="event.stopPropagation(); app.showProductDetails(${product.id})">Подробнее</button>
                </div>
            </div>
        `).join('');
        
        this.showView('subcategory-view');
    }
}

// Initialize app
const app = new CommercioApp();
