// база данных
let listData =[
  {
    name: 'Олег',
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
  
  console.log(listData)
  // создание элементов
  const app = document.getElementById('app')
  const table = document.createElement('table')
  const tableHead = document.createElement('thead')
  const tableBody = document.createElement('tbody')

  tableHeadTr = document.createElement('tr'),
  tableHeadThFIO = document.createElement('th'),
  tableHeadThAge = document.createElement('th'),
  tableHeadThBirthYear = document.createElement('th'),
  tableHeadThHobby = document.createElement('th');


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


  // рендер

// Подготовка 



  

// Отрисовка

for (const oneUser of listData) {
  const userTr = document.createElement('tr'),
  userFIO = document.createElement('th'),
  userAge = document.createElement('th'),
  userBirthYear = document.createElement('th'),
  userHobby = document.createElement('th');


  userFIO.textContent = oneUser.name
  userAge.textContent = oneUser.age
  userBirthYear.textContent = 'Год'
  userHobby.textContent = oneUser.hobby
  
  userTr.append(userFIO)
  userTr.append(userAge)
  userTr.append(userBirthYear)
  userTr.append(userHobby)

  tableBody.append(userTr)
}

 