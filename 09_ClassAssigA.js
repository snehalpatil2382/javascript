console.log(`------------------------ Step 1 ---------------------------------`);
class Vehicle{

    constructor(model,color,price,vehicleType){
   this.model=model;
   this.color=color;
   this.price=price;
  this.vehicleType=vehicleType;
    }
    getdetails(){
      console.log(`Model: ${this.model} , Color: ${this.color} , Price: ${this.price} , Vehicle Type: ${this.vehicleType}`);  
    }
}
const bolero = new Vehicle("Bolero","White","15 Lakh","4 Wheeler");
bolero.getdetails();
const swift = new Vehicle("Swift","White","10 Lakh","4 Wheeler");
swift.getdetails();
const thar = new Vehicle("Thar","Black","25 Lakh","4 Wheeler");
thar.getdetails();
const unicorn = new Vehicle("Unicorn","Black","1.5 Lakh","2 Wheeler");
unicorn.getdetails();
const scooty = new Vehicle("Passion","Black","1 Lakh","2 Wheeler");
scooty.getdetails();
// console.log(`Traversing array of Object...`);
// const arrayOfVehicles = [ bolero, swift, thar,unicorn,scooty];
// for (const element of arrayOfVehicles) {
//     element.getdetails();
// }
console.log(`-------------------- Step 2 -----------------------------`);
class College{

    constructor(clgname,city,course,fees,univercity){
        this.clgname=clgname;
        this.city=city;
        this.course=course;
        this.fees=fees;
        this.univercity=univercity;
    }
    display(){
        console.log(`Collage Name:${this.clgname} , City:${this.city} ,  Course:${this.course} ,  Fees:${this.fees} , Univercity:${this.univercity}`);
    }
}
const vms = new College("VMS","Sangola","BSC",15000,"Solapur");
vms.display();

const sms = new College("SMS","Sangola","BCS",20000,"Solapur");
sms.display();

const kbp = new College("KBP ","Pandharpur",50000,"BCA","Kolhapur");
kbp.display();

const fabtech = new College("Fabtech","Sangola",70000,"CivilEngi","Pune");
fabtech.display();


console.log(`-------------------- Step 3 -----------------------------`);
console.log(`Traversing Object 1 is :`);
const arrayOfCollege = [ vms,sms, kbp, fabtech];
for (const key in vms) {
    if (Object.hasOwnProperty.call(vms, key)) {
        const element = vms[key];
        console.log(`${key} ---> ${element}`);
    }
}
console.log("");
console.log(`Traversing Object 2 is :`);
for (const key in sms) {
    if (Object.hasOwnProperty.call(sms, key)) {
        const element = sms[key];
        console.log(`${key} ---> ${element}`);
    }
}
console.log("");
console.log(`Traversing Object 3 is :`);
for (const key in kbp) {
    if (Object.hasOwnProperty.call(kbp, key)) {
        const element = kbp[key];
        console.log(`${key} ---> ${element}`);
    }
}
console.log("");
console.log(`Traversing Object 4 is :`);
for (const key in fabtech) {
    if (Object.hasOwnProperty.call(fabtech, key)) {
        const element = fabtech[key];
        console.log(`${key} ---> ${element}`);
    }
}

