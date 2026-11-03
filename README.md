# MaloyCser — Halloween

Лендинг на Node.js без npm-зависимостей. Все три фотографии включены. Кнопка ведёт на https://t.me/MaloyCser2.

## Локальный запуск

Нужен Node.js 20 или новее. В папке проекта выполните:

```sh
npm start
```

Откройте http://localhost:3000. Порт можно изменить через переменную окружения PORT.

## Запуск на BotHost

1. Распакуйте архив. Загрузите содержимое папки проекта через доступный в панели способ или в свой Git-репозиторий, затем подключите его к BotHost.
2. Для проекта Node.js команда запуска: `npm start` (либо `node server.js`). Установка зависимостей не требуется; если панель требует команду установки, используйте `npm install --omit=dev`.
3. Установите PORT=3000 и тот же внутренний порт 3000 в настройках веб-приложения BotHost. Сервер слушает 0.0.0.0.
4. Если используется Docker, в корне уже есть Dockerfile. Внутренний порт: 3000.
5. Включите веб-доступ / домен в панели. После запуска `/health` должен отдавать `{"status":"ok"}`.

Названия пунктов панели могут отличаться. Документация: https://bothost.ru/docs/domains-and-ports

Регистрация домена и публикация на BotHost пока не выполнены.

## Файлы

- `server.js` — HTTP-сервер с поддержкой PORT.
- `public/index.html` — тексты и ссылки.
- `public/style.css` — адаптивный дизайн, тыквы, паутина, анимации.
- `public/app.js` — искры и год в подвале.
- `public/assets/` — фотографии и SVG-тыква.

Два изображения обработаны встроенным Imagegen. Фото с микрофоном оставлено в оригинале, поскольку сервис отклонил обработку. Генеративное восстановление может добавлять детали, которых не было в исходнике; оригиналы первых двух фото также сохранены в assets.

Промпт обработки: “Restore and enhance this exact photo for a website. Reduce JPEG artifacts and noise, improve natural sharpness and clarity with restrained contrast. Preserve exact identity, facial features, expression, pose, all objects, composition and original colors. Do not stylize, beautify, change clothing, add text or invent detail. Return one clean restored photograph, same aspect ratio.”

Шрифты Oswald, Rubik и Comforter загружаются из Google Fonts; при недоступности сервиса работают системные подстановки. Анимации отключаются при системной настройке reduced motion.
