//ejercicio 1
class mifuncion{
    constructor(number){

    this.items=["Manzana","Cebolla","Apio","Naranja","Papaya","Sandía","Melón"]
    this.number=number
    }
    Array(){

    for (let i = 0; i = (this.items.length-this.number); i++) {
        this.items.pop();
       
    }
    console.log(this.items);

    }
}


let ejer=new mifuncion(4)
ejer.Array()


//ejercicio 2

class reemplazar{
    constructor(nuevo, viejo){

    this.items2=[3,2,3,4,6,8,1,2,5,5]
    this.nuevo=nuevo
    this.viejo=viejo
    }
    reemplazo(){

        let pek

    do{
        pek=this.items2[this.items2.length-1]
  
            this.items2.pop();

    } while (pek != this.viejo);

    
      
        this.items2.push(this.nuevo);
    
        console.log(this.items2);
    


    }
    }



let reemplazo1=new reemplazar(7,2)
reemplazo1.reemplazo()
//EJERCICIO 3
class micamino{
    constructor(){

    this.ida=["origen","pueblo1","pueblo2","destino"]
   
    this.vuelta=[]
   
    }
    camino(){

    console.log(this.ida)


    for (let i = 0; i = this.ida.length; i++) {
        let pek=this.ida[this.ida.length-1];
        this.vuelta.push(pek);
        this.ida.pop();

     
       
    }

  
    console.log(this.vuelta)

    }
}


let camino1=new micamino()
camino1.camino()
//ejercicio 4 (dado que el ejercico no especifica el tamaño de la pila inicial ni que numero se desea retirar 
//se considera pila de 10 y que se desea retirar el 4)

class apilar{
    constructor(n){

    this.pila=[1,2,3,4,5,6,7,8,9,10]
    this.n=n
    this.pila2=[]
   
    }
    sacar(){

    for (let i = 0; i = (this.pila.length-this.n); i++) {
        let pek=this.pila[this.pila.length-1];
        this.pila2.push(pek);
        this.pila.pop();
    }
    this.pila.pop();

    for (let i = 0; i = (this.pila2.length); i++) {
        let pek2=this.pila2[this.pila2.length-1];
        this.pila.push(pek2);
        this.pila2.pop();
    }



  
    console.log(this.pila)
   

    }
}


let pilanueva=new apilar(4)
pilanueva.sacar()