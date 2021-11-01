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
                    <td scope="row">${name[i]}</th>
                    <td class="table-danger text-center">${this.lineA[i]}</td>
                    <td class="table-primary text-center">${this.lineB[i]}</td>
                </tr>`
        }

        const table = `<table class="table">
                <thead>
                    <tr>
                        <th scope="col">Векторы</th>
                        <th scope="col" class="table-danger text-center">Линия А</th>
                        <th scope="col" class="table-primary text-center">Линия Б</th>
                    </tr>
                </thead>
                <tbody>
                ${content}
                </tbody>
                </table>
                <div class="row">
                <a href="./index.html" target="_self" class="btn btn-secondary mt-2 mb-2">Пройти тест
                    заново</a>
                    </div>                    
        `
        document.querySelector('#table').innerHTML = table;
        document.querySelector('#table').classList.remove('hide');

    }
}