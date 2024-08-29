// Task 4: delUser(number)
/*
Tarea 4: Cree y exporte un método para eliminar a un usuario del servidor JSON.
El método delUser() debería:
Tomar un número de identificación (id) como entrada de la siguiente manera: delUser(<id>)
*/

export function delUser(id){
    fetch('http://localhost:3000/users/' + id,{
        method: 'DELETE',
    })

}
   

