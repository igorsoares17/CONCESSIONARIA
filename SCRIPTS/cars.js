class Button {

    constructor() {

        this.btns = document.querySelectorAll("button")
        this.changeBtn()
        this.count = []
    }

    changeBtn(){

        this.btns.forEach((item, index) => {

            item.addEventListener('click', e => {

                if (this.count[index] == 1) {

                    item.style.backgroundColor = "orange"
                    item.innerHTML = "Adquirir"
                    this.count[index] = 0
                }

                else {

                    item.style.backgroundColor = "rgb(67, 171, 67)"
                    item.innerHTML = "Selecionado"
                    this.count[index] = 1
                }
            })
        })      
    }


}

let get = new Button()