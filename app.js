let newBook;

// dataBase is the collection for all the books info
const dataBase = [];

// this function adds new input information to the dataBase and the HTML table
function add() {
  dataBase.push(newBook);
  console.log(dataBase);

  const table = document.getElementById('tbody'); 
  const row = document.createElement('tr');
  table.appendChild(row);
  const dataTitle = document.createElement('td');
  dataTitle.textContent = newBook.title;
  row.appendChild(dataTitle);
  const dataAuthor = document.createElement('td');
  dataAuthor.textContent = newBook.author;
  row.appendChild(dataAuthor);
  const dataRemove = document.createElement('td');
  row.appendChild(dataRemove);
  const btnRemove = document.createElement('button');
  btnRemove.textContent = 'Remove';
  dataRemove.appendChild(btnRemove);
}

const btnAdd = document.getElementById('button');

btnAdd.addEventListener('click', () => {
  function Store(title, author) {
    this.title = title;
    this.author = author;
  }

  const nameTitle = document.getElementById('book').value;
  const nameAuthor = document.getElementById('author').value;

  newBook = new Store(nameTitle, nameAuthor);
  // console.log(newBook);
  add();
});
