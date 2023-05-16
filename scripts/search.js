const search = document.querySelector('.table__search input');
const tableRows = document.querySelectorAll('tbody tr');

function searchCode() {
  search.addEventListener('input', () => {
    tableRows.forEach((row, i) => {
      console.log(row.textContent);
      let tableData = row.textContent.toLowerCase();
      let searchData = search.value.toLowerCase();
      console.log(searchData);

      row.classList.toggle('hide', tableData.indexOf(searchData) < 0);

      row.style.setProperty('--delay', i / 6 + 's');
    });
  });
}

searchCode();

export default searchCode;
