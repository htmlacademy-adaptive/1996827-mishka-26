// https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html
// Шаг 1. Получите API-ключ
// Зайдите на страницу Кабинета Разработчика и нажмите кнопку Получить ключ.
// Во всплывающем окне выберите сервис «JavaScript API и HTTP Геокодер».
// После заполнения формы появится надпись «Сервис успешно подключен».
// Созданный ключ будет доступен в разделе «Ключи».
// Его необходимо использовать в дальнейшем при подключении API.
// Примечание. Ключ будет активирован в течение 15 минут после получения.

// const { init } = require("browser-sync");

// https://api-maps.yandex.ru/2.1/?apikey=<ваш API-ключ>&lang=ru_RU
// API-ключ получение: https://developer.tech.yandex.ru/ -> JavaScript API и HTTP Геокодер
// API-ключ: 9d06696d-b312-4eb1-929a-a74d5b2c64e5

// https://yandex.ru/dev/maps/jsapi/doc/2.1/dg/concepts/load.html
// Для бесплатной версии API ссылка для загрузки имеет вид:
// https://api-maps.yandex.ru/2.1?apikey=ваш API-ключ&lang=<идентификатор языка>&<дополнительные параметры>

// Для бесплатной версии API ссылка для загрузки имеет вид:
// https://api-maps.yandex.ru/2.1?apikey=9d06696d-b312-4eb1-929a-a74d5b2c64e5&lang=ru_RU
// <script
//  src="https://api-maps.yandex.ru/2.1?apikey=9d06696d-b312-4eb1-929a-a74d5b2c64e5&lang=ru_RU" type="text/javascript">
// </script>

ymaps = window.ymaps;

ymaps.ready(function () {
    var myMap = new ymaps.Map('yandexmap', {
            center: [59.938767, 30.323129],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Тут находится HTML Academia',
            balloonContent: 'Вход со двора. Офис 101'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map/map-marker.svg',
            // Размеры метки.
            iconImageSize: [67, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-22, -85]
        });

    myMap.geoObjects
        .add(myPlacemark);
});
