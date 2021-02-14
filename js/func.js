const av_salary = 3500;

document.getElementById("getSalary").addEventListener("click",calc)

function calc(e) {
    e.preventDefault();
    const salary = document.getElementById("salary").value;
    //salary >= av_salary ? document.getElementById("result").innerHTML = "Zarabiasz >= niz srednia" : document.getElementById("result").innerHTML = "Zarabiasz < niz srednia" 
        
    if (salary >= av_salary ){
        document.getElementById("result").innerHTML = "Zarabiasz >= niz srednia"
    } else {
        document.getElementById("result").innerHTML = "Zarabiasz < niz srednia"
    }
}