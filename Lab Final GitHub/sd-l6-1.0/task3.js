// Task 3: addUser(first_name, last_name, email)

/*
Tarea 3: Cree y exporte un método para agregar un nuevo usuario al servidor JSON.
El método addUser() debe:
Tomar tres entradas de la siguiente manera: addUser(<primer_nombre>, <apellido>, <correo_electrónico>)
Resultar en la adición de un nuevo usuario completo al servidor JSON con un nuevo número de identificación único, secuencial.
Por ejemplo, si el número de identificación más alto en la lista existente es 4, entonces este nuevo número de identificación debería ser 5.

*/

export function addUser(first_name, last_name, email){
    fetch("http://localhost:3000/users",{
       method:"POST",
       body: JSON.stringify({
        id: '6',
        first_name: first_name,
        last_name: last_name,
        email: email
       }),
       headers:{
         "content-Type":"application/json; charset=UTF-8"
       }
    })

}
    