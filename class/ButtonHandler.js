class ButtonHandler {

    constructor(inputElem, questArray, isMobile) {
        this.inputElem = document.querySelectorAll(inputElem);
        this.questArray = questArray;
        this.isMobile = isMobile;
        this.count = 0;
        this.arrAnsw = [];
    }



    handlerInput(arg) {
        switch (arg) {
            case 'next':
                let inputElem = document.querySelectorAll('.btn-check');
                for (var i = 0; i < inputElem.length; i++) {
                    if (inputElem[i].checked) {
                        this.arrAnsw[this.count] = +inputElem[i].value;
                        break;
                    }
                }
                console.log(this.arrAnsw);
                ++this.count;
                break;
            case 'last':
                console.log('laster');
                break;
            case 'result':
                console.log('result');
                break;
        }
    }

    handlerArray() {// записываем ответ в массив

        let inputElem = document.querySelectorAll('.btn-check');
        for (var i = 0; i < inputElem.length; i++) {
            if (inputElem[i].checked) {
                this.arrAnsw[this.count] = +inputElem[i].value;
                inputElem[i].checked = false;
            }
        }
    }

    checkedInput() {
        let inputElem = document.querySelectorAll('.btn-check');
        if (this.arrAnsw[this.count]) {
            inputElem[this.arrAnsw[this.count] - 1].checked = true;
        }
    }

    disabledNext() {
        console.log('disabledNext');

        if (this.count >= this.arrAnsw.length) {
            document.querySelector('#next').disabled = true;
        }
    }

    checkBtnNext() {
        let inputElem = document.querySelectorAll('.btn-check');
        for (var i = 0; i < inputElem.length; i++) {
            inputElem[i].onclick = () => {
                document.querySelector('#next').disabled = false;
                if (this.count === this.questArray.length - 1) {
                    document.querySelector('#result').hidden = false;
                }
            }
        }
    }


    counter(arg) {

        if (arg === 'last' && this.count === 0) {
            document.querySelector('#last').disabled = true;
            return
        } else if (arg === 'next' && this.count === this.questArray.length - 1) {
            document.querySelector('#next').disabled = true;

            return
        } else {
            document.querySelector('#last').disabled = false;
            document.querySelector('#next').disabled = false;
        }


        switch (arg) {
            case 'next':
                this.handlerArray()
                this.count++;
                this.checkedInput();
                this.render();
                this.disabledNext();
                break;
            case 'last':
                this.handlerArray()
                this.count--;
                this.checkedInput();
                this.render();
                break;
            case 'result':
                this.handlerArray()

                let res = this.arrAnsw.reduce((accum, item, index) => {
                    if (index < 8) {
                        accum[0].push(item);
                    } else {
                        accum[1].push(item);
                    }
                    return accum;
                }, [[], []]);

                document.querySelector('.test').classList.add('hide');
                document.querySelector('.chart-container').classList.remove('hide');

                let chartGinger = new ChartGinger(res[0], res[1]);
                if (this.isMobile) {
                    chartGinger.render('3', '14', '1', '400px');
                } else {
                    chartGinger.render('5', '16', '3', '600px');
                }

                let tableGinger = new TableGinger(res[0], res[1]);
                tableGinger.render();
        }
    }



    render() {

        document.querySelector('#list-question').innerHTML = '';//очищаем список
        const listQuestion = this.questArray[this.count].reduce((accum, elem) => {
            accum += `<li class="list-group-item">${elem}</li>`;
            return accum;
        }, '');

        document.querySelector('#list-question').innerHTML = listQuestion;//добавляем новый список


    }
}