 console.log('hello !!')
 
 const app = Vue.createApp({

    //template: '<h2>SALUT !!</h2>'

    data() {
        return {
            title: 'The final countdown',
            author: 'Europe',
            style: 'Hard Rock',
            sells : 10,
            showInfo: true,
            x: 0,
            y: 0,
            books: [
                { title: 'Dune', author: 'Frank Herbert', img: 'assets/dune.webp', isFav: true},
                { title: 'Les thanatonautes', author: 'Bernard Werber', img: 'assets/thanatonautes.jpg', isFav: false },
                { title: 'L\'empire des Anges', author: 'Bernard Werber', img: 'assets/empire.jpg', isFav: true },
            ],
            url: 'https://github.com/franzk',

        }
    },
    methods : {
        changeTitle() {
            this.title = "Carry"
        },

        changeTitleTo(title) {
            this.title = title
        },

        toggleShowInfo() {
            this.showInfo = !this.showInfo
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data ) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((b) => b.isFav)
        }
    }
 })

 app.mount("#app")

