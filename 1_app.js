const staff = [{
    name:'Zeeshan',age:25,position:'Software Developer',salery:1000},
    {name:'Mohammad',age:35,position:'Android Developer',salery:2000},
    {name:'Ahmad',age:22,position:'Intern',salery:3000}]

    const totalstaff = staff.reduce((total,person)=>{
     
     total += person.salery 

     return total;
    },0)
console.log(totalstaff);
    