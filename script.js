// ========= работа c DOM елементами 
const titleElement = document.createElement('h1'); 
titleElement.append('Hello from it-incubator'); 

// Добавление элемента заголовка в тело документа 
document.body.append(titleElement); 


// Создание выпадающего списка (select) 
const techSelectElement = document.createElement('select'); 

// Создание первого варианта (option) для выпадающего списка 
const techSelectOption0Element = document.createElement('option'); 
techSelectOption0Element.value = 1; 
techSelectOption0Element.append('JS'); // Добавление текста 'JS' к первому варианту 
techSelectElement.append(techSelectOption0Element); // Добавление первого варианта в выпадающий список 

// Создание второго варианта (option) для выпадающего списка 
const techSelectOption1Element = document.createElement('option'); 
techSelectOption1Element.value = 2; 
techSelectOption1Element.append('HTML'); // Добавление текста 'HTML' ко второму варианту 
techSelectElement.append(techSelectOption1Element); // Добавление второго варианта в выпадающий список 

// Добавление второго варианта в тело документа (вместо этого, вероятно, предполагалось добавить сам выпадающий список) 
document.body.append(techSelectElement);

// ==================================================================

const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true
}

// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);


// ==========================
// data - В блоке render отрисуйте выпадающий список <select> с 3-мя <options> внутри со значениями из массива (внимание, for, forEach, map не использовать, просто достать три раза по индексу значения из массива)
const infos = {
    title: 'it-incubator',
    graduatesCount: 3000,
    areYouChampion: true,
    technologies: [
        {id:1, name:'Front'}, 
        {id:2, name:'Back'}, 
        {id:3, name:'DevOps'},
    ]
}
// render

const div = document.createElement('div');
div.innerText = '--------------------------------------------';
document.body.append(div);

const tityleElement = document.createElement('h1')
tityleElement.innerText = infos.title;
document.body.append(tityleElement);

const countElement = document.createElement('input');
countElement.type = 'number';
countElement.value = infos.graduatesCount;
document.body.append(countElement);

const championElement = document.createElement('input');
championElement.type = 'checkbox';
championElement.checked = infos.areYouChampion;
document.body.append(championElement);

const selectElement = document.createElement('select');
const optionElement1 = document.createElement('option');
const optionElement2 = document.createElement('option');
const optionElement3 = document.createElement('option');

// optionElement1.value = 1;
// optionElement2.value = 2;
// optionElement3.value = 3;
// optionElement1.append(infos.technologies[0]) ;
// optionElement2.append(infos.technologies[1]) ;
// optionElement3.append(infos.technologies[2]);


// selectElement.append(optionElement1, optionElement2, optionElement3);
// document.body.append(selectElement);




// =============================================

// А теперь самостоятельно доработайте прошлый пример, чтобы в массиве хранились не строки с названиями технологий, а объекты, у которых есть св-во title, равное названию технологии и id (уникальный числовой идентификатор)
optionElement1.append(infos.technologies[0].name) ;
optionElement2.append(infos.technologies[1].name) ;
optionElement3.append(infos.technologies[2].name);


selectElement.append(optionElement1, optionElement2, optionElement3);
document.body.append(selectElement);



