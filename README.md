> CUL_TRIP_FRONTEND Repository

# Рекомендательная система для хакатона [moscityhack](https://moscityhack.innoagency.ru)

Описание
-----------------------------------------
Реализация рекомендательной системы на основе эмбеддингов описания событий (doc2vec). Эмбединги строились на [датасете](https://data.mos.ru/opendata/2251) с описанием событий с конца 2017 года и на недавних событиях с [mos.ru/afisha](https://www.mos.ru/api/newsfeed/v4/frontend/json/ru/afisha).

Рекомендательная система по выбранным записям из таблицы `events` выдаёт оценку соответствия двух событий между собой. Данная оценка записывается в таблицу `scores` для дальнейшего использования на backend.

Требования к запуску
-----------------------------------------
```
node version 12.*.*
yarn (npm не рекомендуется)
```


Запуск
-----------------------------------------
1. Написать параметры в `.env` файле, скопировав .env.example

```dotenv
VUE_APP_ROOT_API=http://localhost:8000 # Урл до backend
VUE_APP_IMG_URL=https://www.mos.ru # Урл до mos.ru, откуда грузятся картинки
```

2. Выполнить установку и запуск yarn

``` bash
# Установить зависисмотси
yarn

# Запустить локальный сервер на 8080 порту
yarn serve

# Билд для продакшена (делается сам в докер-контейнере)
yarn build
```

Использовано:
```
- JS
- Vue
- Vue CLI
- VUEX
- Vue-router
- Yandex Maps API
- Axios
```

Для более детальной информации гайд по [vue](https://vuejs.org/v2/guide/installation.html).

[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)

## Запуск с докером
1. Получить пермишены для sh-файла
```
chmod -x build_and_start.sh
```
2. Build image
```
./build_and_start.sh
```

### Структура приложения:

Все исходники лежат в папке src

- app
  - module
    - components - *вспомогательные компоненты модуля*
      - ModuleFeatureA
        - ModuleFeatureAItem.vue
        - ModuleFeatureADetail.vue
        - ModuleFeatureAMain.vue
      - ModuleFeatureB
        - ModuleFeatureBItem.vue
        - ModuleFeatureBDetail.vue
        - ModuleFeatureBMain.vue
      - ModuleMain.vue
    - vuex
      - actions.js
      - getters.js
      - index.js
      - mutations.js
      - mutations-types.js
      - state.js
    - index.js - *файл подключения к глобальному vuex, router*
    - routes.js - *урлы, на которые опирается модуль и их описание*
    - main.vue - *точка входа в модуль*

- assets - *хранилище общих стилей, картинок и шрифтов*
- classes - *классы для работы с js*
- plugins - *подключаемые плагины*
- router - *первоначальная настройка роутера и импорт всех роутов*
- store - *хранилище данных, его настройка*
- utils - *функции-хелперы*
- config.js - *переменные окружения*
- main.js - *точка входа приложения*
- registerServiceWorker.js - *сервис-воркер для приложения*
- store.js - *импорт сторы*

Repo Group
---------------
* back_api:  [Konab/cul_trip_back](https://github.com/Konab/cul_trip_back)
* ML:  [cut4cut/cul_trip](https://github.com/cut4cut/cul_trip)
* front_web:  [this project](https://github.com/Tenutes/cul_trip_frontend)

Enjoy ❤️
