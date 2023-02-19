//  function old(){
//      console.log(2023-l[0])
//     console.log(2023-l[1])
//      console.log(2023-l[4])
//  }
//  let l = [1920, 2013, 2020, 1996, 1630,];
//  old();
// let o = ['hwets', 5, 'haeh']
// o.push("Топ")  // добавляет последнее число
// console.log(o)
// o.pop() // удаляет последнее число
// console.log(o)
// o.unshift("роналдо") //добавляет первое число
// console.log(o)
// o.shift() // удаляет первое число
// console.log(o)
 // console.log(o.indexOf(3))
//.includes проверка элемента
// let off = ['gift', 'бот', 'hhhh']
// let off1 = prompt(`Введи ник`)
// off.includes(off1)
// let f = {
//     name: ["Антон"],
//     age: ["30"],
//     plase: ["Новосибирск"],
//     job: ["Учитель вебика"],
//     calcAge: function () {
//         return 2023 - this.age;
//     }

// };
// console.log(f.calcAge())
// console.log (f);
// console.log
// //delete (код) -стирает 

let a1 = {
    name: "Имя1",
    bolt: 78,
    size: 1.69,
    imt: function(){
        return this.bolt / (this.size**2)
    }
}

let a2 = {
    name: "Имя2",
    bolt: 92,
    size: 1.95,
    imt: function(){
        return this.bolt / (this.size**2)
    }
}
if (a1.imt > a2.imt){
    console.log("A1 Жирнее")
}else{
    console.log("A2 Жирнее")
}
console.log(a1.imt()); 
console.log(a2.imt());