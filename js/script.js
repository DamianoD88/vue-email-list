// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus Far comparire gli indirizzi email solamente quando sono stati tutti generati.

// get per ottenere una risorsa post per inviare dei dati

const app = new Vue (
    {
        el: '#app',
        data: {
            number: ['']
        },
        mounted(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                // console.log(result.data);
                this.number = result.data.response;
            });
        }
    }
)