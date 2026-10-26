# FRATA — гайд для партнёров

- `index.html` — сам гайд (один файл, 16 слайдов).
- `embed.js` — скрипт встраивания на сайт.
- `example.html` — пример страницы.

## Публикация (GitHub Pages)
Settings → Pages → Deploy from branch → `main` / root. Адрес: `https://myluuk.github.io/frata-partner-guide/`.

## Встраивание на сайт
```html
<div id="frata-guide"></div>
<script src="https://myluuk.github.io/frata-partner-guide/embed.js" defer></script>
```
Если файлы лежат на другом хосте: `data-src="https://.../index.html"`.
Параметры: `data-height="80vh"`, `data-radius="20"`, `data-target="my-id"`.
