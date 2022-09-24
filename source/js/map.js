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
