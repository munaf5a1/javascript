// const cap ={
//     firstname:"bob",
//     sayHi:function(){
//         console.log(this.firstname);
//     }
// }

// cap.sayHi();

// let sayHi = cap.sayHi;

// var firstname = "Loki";

// sayHi();

// const cap ={
//     firstname:"bob",
//     sayHi:function(){
//         console.log("16",this.firstname);
//         const inner= function(){
//             console.log("21",this.firstname);
//         }
//         inner();
//     }
// }

// cap.sayHi();

// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();
//We are using strict
// "use strict";
// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi : function(){
//         console.log("hi from", this.firstName);
//     }
// }
// cap.sayHi();
// var firstName = "Loki"
// let sayHiAdd = cap.sayHi;
// sayHiAdd();

// let ladder = {
//     stop:0,
//     up(){
//         this.stop ++ ;
//     },
//     down(){
//         this.stop -- ;
//     },
//     showStep: function(){
//         console.log(this.stop);
//     }
// }
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();