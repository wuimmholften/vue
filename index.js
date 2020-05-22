//Crear instancia de Vue.js
var app = new Vue({
    //Elemento con cual se va a ligar Vue.js
    //# => id
    el: '#app',
    //Información que se va a manipular desde Vue
    //Todas las propiedades que se van a actualizar "automáticamente"
    data: {
        name: 'Vue',

        todos: [
            {
                value: 'TODO #1',
                editMode: false
            },
            {
                value: 'TODO #2',
                editMode: false
            },
            {
                value: 'TODO #3',
                editMode: false
            }
        ],
        todo: ''
    },
    //Funciones de Vue
    methods: {
        addItem() {
            //Agregar item a arreglo
            this.todos.push({
                value: this.todo,
                editMode: false
            });

            //"Borrar" valor del input después de agregarlo
            this.todo = '';
        },
        deleteItem(index) {
            //"Borrar" elemento en la posición index
            this.todos.splice(index, 1);
        },
        editItem(index) {
            //Marcar como que se está "editando" (Pasar a modo edición)
            this.todos[index].editMode = true;
        },
        saveItem(index) {
            this.todos[index].editMode = false;
        }
    }
});