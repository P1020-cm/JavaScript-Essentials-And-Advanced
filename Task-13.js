try{

        let num1 = 10;

        let num2 = 0;


        if(num2 === 0){

            throw new Error("Cannot divide by zero!");

        }


        let result = num1 / num2;

        console.log(result);

    }

    catch(error){

        console.log("Error:", error.message);

    }