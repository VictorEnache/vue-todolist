const app = new Vue({
    el: '#root',
    data: {


        list: [

            {
                text: 'studiare HTML',
                done: true
            },
            {
                text: 'studiare CSS',
                done: false
            },
            {
                text: 'studiare JavaScript',
                done: true
            },
            {
                text: 'studiare VueJs',
                done: false
            }
        ],

        xmark: '<i class="fa-solid fa-circle-xmark"></i>',
        
    },

    methods:{
        isDone(index){
            if(this.list[index].done){
                return 'done'
            }
        },

        removeTodo(index){
            this.list.splice(index, 1)
        }
    }
    

})