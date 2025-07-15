"use client"
import React from "react"


function Object(){


     const user:{
        name:string
         age:number
    }={
        name:"Barun",
        age:23
    }

     //Array
    const names: string[]=["Barun","Sharma"];
     const name: Array<string>=["a",'c','x'];


     const no :number[]=[1,2,3,4];
     const nos:Array<number>=[1,2,3]
    
     const collection :object[]=[{name:"barun",no:22}];



     //Tuple

     const person: [string,number]= ["barun",200];


     //union
     const human: string | object ={name:"Barun" ,no:23}

     

     //intersection Type

     type User={
        name:string,
        age:number
     }
type admin={
    isactive:boolean,
    address?:string
}

     const intro:User & admin={name:"barun",age:28,isactive:true}


      //Enum types

      enum Role{
        user,admin,superadmin
      }

      let userrole:Role=Role.user;  //in console its give the index


      //literal types
      const status:"sucess" | "error"="sucess"

       //interface and class
       interface Product {
        name:string,
        price:number
        sayhello:()=>void
       }

    //    const Superadmin:Product={name:"barun",price:200}

       class Items implements Product{
        name:string;
        price:number;

        constructor(name:string,price:number){
            this.name=name;
            this.price=price;
        }
        sayhello () {
         console.log(`Hi, I'm ${this.name} and age is ${this.price}`);
        }
        
       }
       const obj=new Items("barun",24)
    //    obj.sayhello()

    

    //function type

    function greet(name:string):string{
        // console.log(`Hi, I am ${name}`)
        return `Hi, My name is ${name}` 
    }
    greet("barun")


            function log(message: string = "Hello"): void {
               console.log(message);
              }
            //   log()



            //unknown type

            let value:unknown="barun";

            if(typeof value === "string"){
                // console.log("Hello barun")
            }

            //never type is used in function which throw error and return nothing


            function throwerror(message:string):never{
                throw new Error(message);
            }
            // throwerror("Hello")

        //Generic Type

        function Identify<T>(arg:T):T{        //in generic you can give any type of types
        console.log(`Hi, My name is ${arg}` )
        }
        //  Identify<number>(400)
        // Identify<string>("barun")



        //Readonly Type
        //readonly help to make array,object or variavble unchangeble
        type Point ={
           readonly name:string,
           readonly age:number

        }

        let point : Point={name:"barun",age:34}
        
        // console.log(point)



        //type asseration

        //Type Assertion is a way to manually tell TypeScript the type of a value when you know more than the compiler.
  
        let someValue:any ="Hello World";
        let strLength:number=(someValue as string).length

        // console.log(strLength)


      //Mapped Type

      type Person={
        name:string,
        age:number
      }

      type Optionalperson={
        [key in keyof Person]?:Person[key]   //key in keyof person become optional
      }
      const info:Optionalperson={}
    //   console.log(info)


        //typeof and keyof

      type Person2={
        name:string,
        age:number
      }
      type Userkeys=keyof Person2;  //"name","age"
     
  type Person3={
        name:string,
        age:number
      }

     type usertype=typeof Person3;  //typeof lets you grab the type of a variable or constant so you can reuse it elsewhere in your code — super handy to keep things DRY and type-safe.

     const information:usertype={name:"barun",age:34}
   console.log(information)




    return(
        <>
        
        
        </>
    )
}

export default Object;
