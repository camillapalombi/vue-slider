const app = new Vue ({
    el : '#root',
    data : { //struttura dati:
        activeIndex : 0,
        arrObjCountries : [
            {
                title : 'Svezia',
                image : '01.jpg',
                description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                title : 'Svizzera',
                image : '02.jpg',
                description : 'Lorem ipsum.'
            },
            {
                title : 'Gran Bretagna',
                image : '03.jpg',
                description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                title : 'Germania',
                image : '04.jpg',
                description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            },
            {
                title : 'Paradise',
                image : '05.jpg',
                description : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            }
        ],
    },
    methods : {
        next() { //bottone avanti
            if (this.activeIndex < this.arrObjCountries.length - 1) {
                this.activeIndex++; //incrementa di uno
            } else {
                this.activeIndex = 0;
            }
        },
        previus() { //bottone indietro
            if (this.activeIndex == 0) {
            this.activeIndex = this.arrObjCountries.length - 1;
            } else {
            this.activeIndex--; //descremento di uno
            }
        }
    }
});