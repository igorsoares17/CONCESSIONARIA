class form {

    constructor() {

        this.submitEl = document.querySelector("form")
       
        this.inputsEl = document.querySelectorAll("input")

        this.txtAreaEl = document.querySelector("textarea")

        this.access = ""

        this.submitEvents()
    }

    submitEvents() {

        this.submitEl.addEventListener('submit', e => {

            e.preventDefault() 

            

            this.inputsEl.forEach((input, index) => {

                if (!input.value) {

                    this.access = "block"
                }

            })

            if (!this.txtAreaEl.value) {

                this.access = "block" 
            }

            if (this.access == "block") {

                if (this.nameAcept == "block") {

                    window.alert("Nome e/ou Sobrenome Digitado(s) Inválido(s)")
                    this.access = ""
                }

                else {

                    window.alert("Por favor, preencha todos os campos!")
                    this.access = ""
                }
            }

            else {

                window.alert("Sua mensagem foi enviada com sucesso!")
                this.submitEl.reset()
            }
        })
    }

    nameTest(value) {

        for (let i = 0; i < this.nameValid.length; i++) {

            if (value.indexOf(this.nameValid[i]) > -1) {

                this.access = "block" 
                this.nameAcept = "block"
            }
        }
    }



    
}

let controller = new form()
