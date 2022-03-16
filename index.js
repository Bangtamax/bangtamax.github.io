class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
          </tr>
        `;
    });

    return open + close;
  }

  render(element) {
    let table = "<table class='table table-hover'>" + this.createHeader(this.init.columns) + this.createBody(this.init.data) + "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["Name", "Email", "Age"],
  data: [
    ["Kurniawan Pratama", "k.cadenza13@gmail.com", "25"],
    ["Wahyu Bilung", "Bilung@email.id", "23"],
  ],
});
const app = document.getElementById("app");
table.render(app);
