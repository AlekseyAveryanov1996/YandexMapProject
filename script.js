ymaps.ready(init); // инициализируем карту




let mylabels = [
  {
    name: 'Moscow',
    coord: [55.8, 37.8]
  },
  {
    name: 'Piter',
    coord: [59.94, 30.31]
  },
  {
    name: 'Tula',
    coord: [54.1961, 37.6182]
  },

]


function init(){
    // Создание карты.
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });


    let myCollection = new ymaps.GeoObjectCollection({}, {
      preset: 'islands#redIcon', //все метки красные
      //draggable: true, // и их можно перемещать
      // geometry: {
      //   type: "Point", // тип геометрии - точка
      //   coordinates: objectMap.coord, //[55.8, 37.8] // координаты точки
      // }
    });


    // циклом проходимся по массиву метод с координатами и получем координаты каждого города
    mylabels.forEach(function(currentValue) {
      myCollection.add(new ymaps.Placemark(currentValue.coord));
    })


    myMap.geoObjects.add(myCollection); // создание коллекции из меток


    // обработка события в select при смене пункта списка
    let select = document.querySelector('.city');

    select.addEventListener('change', function() {
      let value = select.value
      let array = mylabels.filter((el) =>  el.name == value)

      myMap.setCenter(array[0].coord); // перемещаем центр карты в точку
      
    })
}










