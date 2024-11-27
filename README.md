Веб-приложение представляет собой онлайн-магазин по продаже кофе. В ходе реализации данного проекта были проведены:
- Определение функционала приложения и стека: Next.js, TypeScript, Redux Toolkit, Axios, CSS.
- Работа с макетом будущего сайта в Figma.
- Организация файловой структуры проекта.
- Создание Redux Store.
- Создание компонентов и страниц.
- Интеграция с API. 

Данное веб-приложение:
- Состоит из нескольких страниц.
- Использует API для подгрузки каталога товаров.
- Реализует функции сортировки и фильтра товаров.
- Содержит пагинацию.
- Поддерживает аторизацию через аккаует Google.
- Содержит информацию о каждом товаре (доступно при клике по товару со страницы каталога).
- Адаптивно. 

Для начала работы воспользуйтесь одной из следующих команд:

npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev

Для корректной работы каталога и авторизации через аккаунт Google:

Создайте файлы env. и env.local. Скопируйте туда следуюие строки:

Для .env: NEXT_PUBLIC_API_URL=https://api.mockfly.dev/mocks/866de2da-e4ef-4271-b192-d9b7a30e73f0 

Для .env.local: GOOGLE_CLIENT_ID='607712273113-i0496bdjj5thn70n1ulm9e7v6nj01ecs.apps.googleusercontent.com'
GOOGLE_SECRET='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'

NEXTAUTH_URL='http://localhost:3000'
NEXTAUTH_SECRET='nextsecretyouwontget'

Откройте сайт через localhost. Убедитесь, что числовой идентификатор порта - 3000. 
