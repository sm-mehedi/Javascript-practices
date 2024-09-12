function calculateTax(income, expenses) {
    let result;

    if (income>=expenses && income>0 && expenses>0) {
        result=(income-expenses)*0.20;
        console.log(result);
        

        
    }
    else{
        console.log("Invalid Input");
    }
    return result;
}


function sendNotification(email) {
    let cut,rest;
    if(email.includes('@')){
        cut = email.split("@",1);
        rest = email.split("@")[1];
        console.log(cut+" sent you an email from "+rest);

    }
    else{
        console.log("Invalid Email");
    }
}


function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    for (let i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '9') {
            return true;
        }
    }
    
    return false;
}



function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null || 
        typeof obj.name !== 'string' || 
        typeof obj.testScore !== 'number' || 
        typeof obj.schoolGrade !== 'number' || 
        typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    else{
        let finalScore = obj.testScore + obj.schoolGrade;
    
    if (obj.isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
    }
}



function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }   
    let count = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        count+=waitingTimes[i];
        
    }
    let averageTime = Math.round(count / waitingTimes.length);

    return (serialNumber-1-waitingTimes.length)*averageTime;

   

}






