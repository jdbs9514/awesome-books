let newBook;
let btnRemove;
const btnAdd = document.getElementById('button');
const table = document.getElementById('tbody');
let dataBase = [];

// create class //

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    dataBase.push(this);
  }

  displayBook() {
    const row = document.createElement('tr');
    table.appendChild(row);
    const information = document.createElement('td');
    information.textContent = `"${this.title}" by ${this.author}`;
    row.appendChild(information);
    const dataRemove = document.createElement('td');
    row.appendChild(dataRemove);
    btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    dataRemove.appendChild(btnRemove);

    btnRemove.addEventListener('click', (e) => {
      const parentBtn = e.target.parentNode;
      dataBase = dataBase.filter((x) => (x.author !== this.author) || (x.title !== this.title));
      parentBtn.parentElement.remove();

      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });
  }
}

btnAdd.addEventListener('click', () => {
  const nameTitle = document.getElementById('book').value;
  const nameAuthor = document.getElementById('author').value;
  newBook = new Book(nameTitle, nameAuthor);
  newBook.addBook();
  newBook.displayBook();

  localStorage.setItem('baseData', JSON.stringify(dataBase));
});

if (localStorage.getItem('baseData')) {
  dataBase = JSON.parse(localStorage.getItem('baseData'));
  for (let i = 0; i < dataBase.length; i += 1) {
    newBook = new Book(dataBase[i].title, dataBase[i].author);
    newBook.displayBook();
  }
}

// sections variables //
const list = document.querySelector('.section-table');
const add = document.querySelector('.section-add');
const contact = document.querySelector('.section-contact');

// navbar variables //
const listLink = document.getElementById('list');
const addLink = document.getElementById('add');
const contactLink = document.getElementById('contact');
let includeActive = false;

listLink.addEventListener('click', () => {
  for (var i = 0; i < list.classList.length; i += 1) {
    if(list.classList[i] === "active") {
      includeActive = true;
    }
  }

  if(includeActive === false){
    list.classList.add('active');
  }

  // review if section-add have the class 'active'//
  for (var i = 0; i < add.classList.length; i +=1) {
    if (add.classList[i] === "active") {
      includeActive = true;
    }
  }

  if (includeActive === true) {
    add.classList.remove('active');
  }

  //review if section-content have the class 'active'//
  for (var i = 0; i < contact.classList.length; i +=1) {
    if (contact.classList[i] === 'active') {
      includeActive = true;
    }
  }

  if (includeActive === true) {
    contact.classList.remove('active');
  }
  console.log(list.classList);
});

addLink.addEventListener('click', () => {
  for (var i = 0; i < add.classList.length; i += 1) {
    if(add.classList[i] === "active") {
      includeActive = true;
    }
  }

  if(includeActive === false){
    add.classList.add('active');
  }

  // review if section-table has the class 'active'//
  for (var i = 0; i < list.classList.length; i +=1) {
    if (list.classList[i] === 'active') {
      includeActive = true;
    }
  }

  if (includeActive === true) {
    list.classList.remove('active');
  }

  // review if section-contact has the class 'active' //
  for (var i = 0; i < contact.classList.length; i +=1) {
    if (contact.classList[i] === 'active') {
      includeActive = true;
    }
  }

  if (includeActive === true){
    contact.classList.remove('active');
  }
  console.log(add.classList);
});

contactLink.addEventListener('click', () => {
  for (var i = 0; i < contact.classList.length; i += 1) {
    if(contact.classList[i] === "active") {
      includeActive = true;
    }
  }

  if(includeActive === false){
    contact.classList.add('active');
  }

  // review if section-table has the class 'active' //
  for (var i = 0; list.classList.length; i +=1){
    if (list.classList[i] === "active") {
      includeActive = true;
    }
  }

  if (includeActive = true) {
    list.classList.remove('active');
  }

  // review if section-add has the class 'active' //
  for (var i = 0; i < add.classList.length; i +=1) {
    if (add.classList[i] === 'active') {
      includeActive = true;
    }
  }

  if (includeActive === true) {
    add.classList.remove('active');
  }
  console.log(contact.classList);
});