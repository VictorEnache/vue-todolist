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

        newTask:''
        
    },

    methods:{
        isDone(index){
            if(this.list[index].done){
                return 'done'
            }
        },

        removeTodo(index){
            this.list.splice(index, 1)
        },

        addTask(){
            const todo = {text: this.newTask, done:false}
            if(this.newTask !== ''){
                this.list.unshift(todo)
            }
            this.newTask = ''
        },

        doneChange(index){
            if(this.list[index].done){
                this.list[index].done = false
            } else {
                this.list[index].done = true
            }
        }
    }
    

})