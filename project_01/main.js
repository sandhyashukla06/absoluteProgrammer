
    
//type="text/javascript"

//Q.1: Find the primeNumber
    function isPrime()
    {
    let flag=0, i;
    let number = parseInt(document.getElementById("num").value);

        //number = Number(document.getElementById("num").value);
        //console.log(number);
        //PrimeNumber   
        if(number === 1 || number < 1){
            flag = 1;
        }
        for(i=2; i <= number/2; i++)
        {
            if(number%i == 0)
            {
                flag = 1;
                break;
            }
        }
        if(flag == 0)
        {
         //   console.log("=?",number)
            document.getElementById('resultPrime').innerHTML=number + ' is a Prime number';
        }
        else
        {
            document.getElementById('resultPrime').innerHTML=number + ' is not a Prime number';
        }

    }//function closed

    //Q.2: find the palindromeNumber
    function isPalin()
    {
        // checking palindrome
        let a, pal, temp=0;
        let number = parseInt(document.getElementById("num").value);
        //console.log("=?",number, temp)

        pal=number;
        
            while(number>0)
            {
                a=number%10;
                number=parseInt(number/10);
                temp=temp*10+a;
            }
            //console.log(temp);
            if(temp == pal)
            {
                document.getElementById('resultPalin').innerHTML= pal + ' is a Palindrome';
            }
            else
            {
                document.getElementById('resultPalin').innerHTML= pal + ' is not a Palindrome';
            }
            //debugger;

    }//function closed

    //Q.3:Number is Perfect or Not.
    function isPerfect()
    {
        
    let i, temp = 0;
    let number = parseInt(document.getElementById("num").value);
    for(i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
            console.log("==>"+temp)
            document.getElementById('resultPerfect').innerHTML= number + ' is a Perfect';
        }
        else
        {
            document.getElementById('resultPerfect').innerHTML= number + ' is not a Perfect';
        } 
}//function closed

//Q.5: find the primeNumber between two value
function primeBetween(){
    let number1 = parseInt(document.getElementById("firstNumber").value);
    let number2 = parseInt(document.getElementById("lastNumber").value);
    let flag=0;

}