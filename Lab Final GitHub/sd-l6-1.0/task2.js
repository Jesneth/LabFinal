// Task 2: listUsers()
/*
Tarea 2: Cree y exporte un método para imprimir una lista de usuarios desde el servidor JSON.
El método listUsers() debería simplemente imprimir la respuesta JSON completa, que contiene la lista de usuarios, en la consola.
*/
//import fetch from "node fetch";
//import { getServerURL} from "./task1.js"

export  function listUsers() {

        /*const res = await fetch("http://localhost:3000/users");
        const data = await res.json();
        console.log(data) 
        */
       fetch("http://localhost:3000/users")
       .then((res) => res.json())
       .then((data) => {
        const formattedUsers = data.map(
            (data) => `{\n  id: ${data.id},\n  first_name: '${data.first_name}',\n  last_name: '${data.last_name}',\n  email: '${data.email}'\n}`
          ).join(",\n");
    
        // Imprime en la consola el array de usuarios formateado como un string
        console.log(`[\n${formattedUsers}\n]`);

    })
}       




