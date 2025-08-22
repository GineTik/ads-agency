# Landing Page Components для TinaCMS

Цей модуль містить конфігурації компонентів для створення лендінг сторінок за допомогою TinaCMS.

## Структура файлів

- `components.config.ts` - Експорт всіх конфігурацій секцій лендінгу
- `landing-page.collection.ts` - Приклад колекції лендінг сторінок
- `README.md` - Документація

## Доступні секції

### 1. Hero Section (`heroComponent`)

**Поля:**

- `title` (string) - Основний заголовок
- `subtitle` (string) - Підзаголовок
- `advantages` (object) - Блок переваг з title та description
- `buttons` (array) - Кнопки дій з text, url та variant
- `carousel` (object) - Карусель зображень з alt та caption

### 2. Companies Section (`companiesComponent`)

**Поля:**

- `title` (string) - Заголовок секції
- `subtitle` (string) - Підзаголовок секції
- `companyLogos` (array) - Логотипи компаній з logo, companyName та websiteUrl

### 3. Features Section (`featuresComponent`)

**Поля:**

- `title` (string) - Заголовок секції
- `description` (string) - Опис секції
- `featureBlocks` (array) - Блоки функцій з title, description, icon та iconName

### 4. Advantages Section (`advantagesComponent`)

**Поля:**

- `title` (string) - Заголовок секції
- `advantageBlocks` (array) - Блоки переваг з title, subtitle та image

### 5. Trusted By Section (`trustedByComponent`)

**Поля:**

- `title` (string) - Заголовок секції
- `description` (string) - Опис секції
- `button` (object) - Кнопка дії
- `testimonialBlocks` (array) - Відгуки з image, quote, fullName, position та company

### 6. Call to Action Section (`callToActionComponent`)

**Поля:**

- `title` (string) - Заголовок CTA
- `description` (string) - Опис CTA
- `buttons` (array) - Кнопки дій
- `backgroundImage` (image) - Фонове зображення

### 7. FAQ Section (`faqComponent`)

**Поля:**

- `title` (string) - Заголовок секції
- `description` (string) - Опис секції
- `questions` (array) - FAQ з question та answer (rich-text)

## Використання

### Варіант 1: Окремі компоненти

```typescript
import { heroComponent, featuresComponent } from './components.config'

// Використовуйте окремі компоненти у вашій TinaCMS конфігурації
```

### Варіант 2: Всі компоненти разом

```typescript
import { landingPageComponents } from './components.config'

// Масив всіх компонентів лендінгу
```

### Варіант 3: Template-підхід

```typescript
import { landingPageTemplate } from './components.config'

// Готовий template з усіма секціями
```

### Варіант 4: Готова колекція

```typescript
import { landingPageCollection } from './landing-page.collection'

// Готова колекція для додавання в TinaCMS конфіг
```

## Інтеграція в основний TinaCMS конфіг

```typescript
// tina/config.ts
import { defineConfig } from 'tinacms'
import { landingPageCollection } from '../src/features/landing/landing-page.collection'

export default defineConfig({
	// ... інші налаштування
	schema: {
		collections: [
			// ... існуючі колекції
			landingPageCollection,
		],
	},
})
```

## Типи кнопок

Всі кнопки мають три варіанти стилізації:

- `primary` - Основна кнопка
- `secondary` - Вторинна кнопка
- `outline` - Кнопка з обводкою

## Іконки

У Features секції можна використовувати:

- `icon` (image) - Завантажити власне зображення іконки
- `iconName` (string) - Вказати назву іконки з Lucide React

## Структура контенту

Після додавання колекції, контент буде зберігатися в:

```
src/app/tina/content/landing-pages/
```

URL маршрути будуть:

```
/landing/[filename]
```
