class TableGinger {
    constructor(lineA, lineB) {
        this.lineA = lineA;
        this.lineB = lineB;
    }

    render() {
        const name = [
            'Паранойя',
            'Садизм',
            'Мания',
            'Истерия',
            'Шизоидность',
            'Мазохизм',
            'Депрессия',
            'Обсессивность'
        ];

        let content = '';

        for (let i = 0; i < 8; i++) {
            content += `
                <tr>
                    <th scope="row">${name[i]}</th>
                    <td class="table-danger">${this.lineA[i]}</td>
                    <td class="table-primary">${this.lineB[i]}</td>
                </tr>`
        }

        const table = `<table class="table">
                <thead>
                    <tr>
                        <th scope="col">Векторы</th>
                        <th scope="col" class="table-danger">Линия А</th>
                        <th scope="col" class="table-primary">Линия Б</th>
                    </tr>
                </thead>
                <tbody>
                ${content}
                </tbody>
                </table>
        `
        document.querySelector('#table').innerHTML = table;
        document.querySelector('#table').classList.remove('hide');

    }
}