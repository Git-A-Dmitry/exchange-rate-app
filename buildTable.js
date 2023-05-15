import code from './data';

const buildTable = (data) => {
  const table = document.getElementById('codeTable');

  const rows = data.map((item) => {
    return `<tr>
              <td>${item.name}</td>
              <td>${item.meaning}</td>
            </tr>`;
  });

  table.innerHTML = rows.join('');
};

buildTable(code);

// const buildTable = (data) => {
//   const table = document.getElementById('codeTable');

//   for (let i = 0; i < data.length; i++) {
//     const row = `<tr>
//       <td>${data[i].name}</td>
//       <td>${data[i].meaning}</td>
//     </tr>`;

//     table.innerHTML += row;
//   }
// };

// buildTable(code);

export default buildTable;
