function capture() {
  function Store(title, author) {
    this.title = title;
    this.author = author;
  }

  const nameTitle = document.getElementById('book').value;
  const nameAuthor = document.getElementById('author').value;

  newBook = new Store(nameTitle, nameAuthor);
  console.log(newBook);
  add();
}

const dataBase = [];
function add() {
  dataBase.push(newBook);
  document.getElementById('table').innerHTML += '<tbody><td>'+newBook.nameTitle+'</td><td>'+newBook.nameAuthor+'</td><td><button type="button" class="remove">Remove</button></td></tbody>';
};