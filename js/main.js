// база данных
let listData = [
  {
    name: 'Виктор',
    surename: 'Иванович',
    lastname: 'Мостин',
    age: 21,
    hobby: 'Спорт'
  },
  {
    name: 'Иван',
    surename: 'Сергеевич',
    lastname: 'Воронин',
    age: 25,
    hobby: 'Танцы'
  },
  {
    name: 'Олеся',
    surename: 'Ивановна',
    lastname: 'Малых',
    age: 23,
    hobby: 'Шитье'
  },
  {
    name: 'Сергей',
    surename: 'Иванович',
    lastname: 'Мотор',
    age: 28,
    hobby: 'Рыбала'
  },
  {
    name: 'Олег',
    surename: 'Александрович',
    lastname: 'Иванов',
    age: 35,
    hobby: 'Охота'
  },
]

let sortColumnFlag = 'fio',
  sortDirectFlag = true

console.log(listData)
// создание элементов
const app = document.getElementById('app')
addForm = document.getElementById('add-form')
nameInp = document.getElementById('add-form__name-inp')
surenameInp = document.getElementById('add-form__surename-inp')
lastnameInp = document.getElementById('add-form__lastname-inp')
ageInp = document.getElementById('add-form__age-inp')
hobbyInp = document.getElementById('add-form__hobby-inp')
sortFioBtn = document.getElementById('sort__fio')
sortAgeBtn = document.getElementById('sort__age')

filterForm = document.getElementById('filter-form')
fioFilterInp = document.getElementById('filter-form__fio-inp')
hobbyFilterInp = document.getElementById('filter-form__hobby-inp')

const table = document.createElement('table')
const tableHead = document.createElement('thead')
const tableBody = document.createElement('tbody')

tableHeadTr = document.createElement('tr'),
  tableHeadThFIO = document.createElement('th'),
  tableHeadThAge = document.createElement('th'),
  tableHeadThBirthYear = document.createElement('th'),
  tableHeadThHobby = document.createElement('th');

table.classList.add('table', 'table-dark')


tableHeadThFIO.textContent = 'ФИО'
tableHeadThAge.textContent = 'Возраст'
tableHeadThBirthYear.textContent = 'Год рождения'
tableHeadThHobby.textContent = 'Хобби'

tableHeadTr.append(tableHeadThFIO)
tableHeadTr.append(tableHeadThAge)
tableHeadTr.append(tableHeadThBirthYear)
tableHeadTr.append(tableHeadThHobby)

tableHead.append(tableHeadTr)
table.append(tableHead)
table.append(tableBody)
app.append(table)


// функция будет создавать одного пользователя

function createUserTr(oneUser) {
  const userTr = document.createElement('tr'),
    userFIO = document.createElement('th'),
    userAge = document.createElement('th'),
    userBirthYear = document.createElement('th'),
    userHobby = document.createElement('th');


  userFIO.textContent = oneUser.fio
  userAge.textContent = oneUser.age
  userBirthYear.textContent = oneUser.birthYear
  userHobby.textContent = oneUser.hobby

  userTr.append(userFIO)
  userTr.append(userAge)
  userTr.append(userBirthYear)
  userTr.append(userHobby)

  return userTr
}

// Фильтрация
function filter(arr, prop, value) {
  return arr.filter(function(oneUser) {
     if(oneUser[prop].includes(value.trim())) return true
     })
}

// рендер
function rander(arrData) {
  tableBody.innerHTML = ''
  // Подготовка 
  let copyListData = [...arrData]
  for (const oneUser of copyListData) {
    oneUser.fio = oneUser.name + ' ' + oneUser.surename + ' ' + oneUser.lastname
    oneUser.birthYear = 2024 - oneUser.age
  }

  // Сортировка
  copyListData = copyListData.sort(function (a, b) {
    let sort = a[sortColumnFlag] < b[sortColumnFlag]
    if (sortDirectFlag == false) sort = a[sortColumnFlag] > b[sortColumnFlag]
    if (sort)
      return -1
  })

// Фильтрация
if (fioFilterInp.value.trim() !== "") {
copyListData = filter(copyListData, 'fio', fioFilterInp.value)
}

if (hobbyFilterInp.value.trim() !== "") {
  copyListData = filter(copyListData, 'hobby', hobbyFilterInp.value)
  }
// copyListData = copyListData.filter(function(oneUser) {
// if(oneUser.fio.includes(fioFilterInp.value.trim())) return true
// })

// if (hobbyFilterInp.value.trim() !== "")
//   copyListData = copyListData.filter(function(oneUser) {
//   if(oneUser.hobby.includes(hobbyFilterInp.value.trim())) return true
//   })

  // Отрисовка
  for (const oneUser of copyListData) {
    const newTr = createUserTr(oneUser)
    tableBody.append(newTr)
  }
}

rander(listData)

// добавление


addForm.addEventListener('submit', function (event) {
  event.preventDefault()

  // валидация(проверка)
  if (nameInp.value.trim() === "") {
    alert('Имя не введено')
    return
  }

  if (surenameInp.value.trim() === "") {
    alert('Отчество не введено')
    return
  }
  if (lastnameInp.value.trim() === "") {
    alert('Фамилия не введена')
    return
  }
  if (ageInp.value.trim() === "") {
    alert('Возраст не введен')
    return
  }


  listData.push({
    name: nameInp.value.trim(),
    surename: surenameInp.value.trim(),
    lastname: lastnameInp.value.trim(),
    age: parseInt(ageInp.value.trim()),
    hobby: hobbyInp.value.trim()
  })
  rander(listData)
})

//  клики сортировки (добавляем события на кнопки)
sortFioBtn.addEventListener('click', function () {
  sortColumnFlag = 'fio'
  sortDirectFlag = !sortDirectFlag
  rander(listData)
})

sortAgeBtn.addEventListener('click', function () {
  sortColumnFlag = 'age'
  sortDirectFlag = !sortDirectFlag
  rander(listData)
})

// Фильтр 
filterForm.addEventListener('submit', function (event) {
  event.preventDefault()
})

fioFilterInp.addEventListener('input', function() {
  rander(listData)
})

hobbyFilterInp.addEventListener('input', function() {
  rander(listData)
})