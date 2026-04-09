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
        this.homeProducts = [
            { id: 1, name: 'Тёмно синий топик', status: 'Ограниченно', price: 790000, category: 'clothing', subcategory: 'men-clothing', article: '10001', image: 'new_products/Без названия (73).jpg', variants: ['new_products/Без названия (73).jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Стильная мужская куртка для повседневной носки.' },
            { id: 2, name: 'Женское пальто', status: 'Рекомендованно', price: 800000, category: 'clothing', subcategory: 'women-clothing', article: '10002', image: 'new_products/Fashion People Rely on This Classic Wardrobe Staple—21 of the Best For Winter.jpg', variants: ['new_products/Fashion People Rely on This Classic Wardrobe Staple—21 of the Best For Winter.jpg'], sizes: ['XS', 'S', 'M', 'L'], description: 'Классический элемент зимнего гардероба.' },
            { id: 3, name: 'Кроссовки Adidas Samba', status: 'Доступно', price: 550000, category: 'sport', subcategory: 'sportswear', article: '10003', image: 'new_products/Без названия (75).jpg', variants: ['new_products/Без названия (75).jpg'], sizes: ['S', 'M', 'L'], description: 'Удобный костюм для спорта и отдыха.' },
            { id: 4, name: 'Женские классические туфли', status: 'Ограниченно', price: 650000, category: 'shoes', subcategory: 'sneakers', article: '10004', image: 'new_products/Без названия (76).jpg', variants: ['new_products/Без названия (76).jpg'], sizes: [40, 41, 42, 43], description: 'Легкие кроссовки для бега.' },
            { id: 5, name: 'Стильная ', status: 'Ограниченно', price: 450000, category: 'accessories', subcategory: 'bags', article: '10005', image: 'new_products/Без названия (77).jpg', variants: ['new_products/Без названия (77).jpg'], sizes: ['One Size'], description: 'Элегантная сумка на каждый день.' },
            { id: 6, name: 'Кепка Ralph Lauren', status: 'Рекомендованно', price: 134000, category: 'electronics', subcategory: 'watches', article: '10006', image: 'new_products/Без названия (78).jpg', variants: ['new_products/Без названия (78).jpg'], sizes: ['One Size'], description: 'Современные смарт-часы с полезными функциями.' },
            { id: 7, name: 'Женская куртка', status: 'Рекомендованно', price: 567000, category: 'shoes', subcategory: 'formal-shoes', article: '10007', image: 'new_products/Без названия (79).jpg', variants: ['new_products/Без названия (79).jpg'], sizes: [40, 41, 42], description: 'Строгие туфли из качественных материалов.' },
            { id: 8, name: 'Классические брюки', status: 'Доступно', price: 200000, category: 'clothing', subcategory: 'women-clothing', article: '10008', image: 'new_products/Без названия (74).jpg', variants: ['new_products/Без названия (74).jpg'], sizes: ['XS', 'S', 'M'], description: 'Базовый черный топ для любого образа.' },
            { id: 9, name: 'Белоснежный пиджак', status: 'Доступно', price: 640000, category: 'clothing', subcategory: 'men-clothing', article: '10009', image: 'new_products/белый.jpg', variants: ['new_products/белый.jpg'], sizes: ['S', 'M', 'L', 'XL'], description: 'Классическая белая футболка из хлопка.' }
        ];
        return [
            ...this.homeProducts
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
        document.getElementById('real-price').textContent = `${product.price.toLocaleString('ru-RU')} сум`;
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
        switch (subcategoryId) {
            case 'fire-drop':
                filteredProducts = this.products.filter(p =>
                    p.category === 'accessories' && p.subcategory === 'jewelry' ||
                    p.category === 'electronics' && p.subcategory === 'watches'
                );
                break;
            case 'luxury-drop':
                filteredProducts = this.products.filter(p =>
                    p.price > 100000 && (p.category === 'shoes' || p.category === 'accessories')
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
                    p.name.toLowerCase().includes('классич') || p.name.toLowerCase().includes('пиджак') || p.name.toLowerCase().includes('пальто')
                );
                break;
            case 'theme-minimalism':
                filteredProducts = this.products.filter(p =>
                    p.category === 'clothing' && p.subcategory === 'women-clothing' ||
                    p.name.toLowerCase().includes('топик') ||
                    p.name.toLowerCase().includes('базовая')
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
                    (p.category === 'clothing' && p.price > 80000)
                );
                break;
            case 'theme-business':
                filteredProducts = this.products.filter(p =>
                    p.category === 'shoes' && p.subcategory === 'formal-shoes' ||
                    p.name.toLowerCase().includes('пиджак') || p.name.toLowerCase().includes('брюки')
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
