const app = new Vue(
    {
        el: '#app',
        data: {
            newTask: "",
            toDo: [
                {
                    text: 'Iscriversi in palestra',
                    done: false
                },
                {
                    text: 'Andare a fare la spesa',
                    done: true
                },
                {
                    text: 'Andare in banca',
                    done: false
                },
                {
                    text: 'Comprare un\'aspirapolvere nuovo',
                    done: false
                }
            ]
        },
        methods: {
            addTask() {
                this.toDo.unshift(this.newTask, text)
            },
            removeTask(index) {
                this.toDo.splice(index, 1)
            }
        }
    }
)