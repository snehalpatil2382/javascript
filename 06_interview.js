function interview(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 ||sscScore>=90) {
        console.log(`Congrates ${candidateName}, you are eligible for TCS interview.`);
    }else{
        console.log(`Unfortunately ${candidateName} ,you are not eligible for TCS interview.`);
    }
}
interview(80,86,90,"Snehal");
interview(70,66,55,"Rohini");
interview(60,79,88,"Rutuja");