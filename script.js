function swapbyref(object)
{
    var temp=object.a;
    object.a=object.b;
    object.b=temp;

    document.write("<h1><center>In the Function:  </center></h1>");
document.write(`<h2><center>a=${object.a}, b=${object.b} </center></h2><hr><br>`);
}
var object={ a:"",b:""};

object.a=parseInt(prompt("Enter 1st Number value:"));
object.b=parseInt(prompt("Enter 2nd Number value:"));

document.write('<h1><center>Before swap: <br> </center></h1>');
document.write(`<h2><center>a=${object.a}, b=${object.b} </center></h2><br><hr>`);

swapbyref(object);

document.write("<h1><center>After swap:  </center></h1>");
document.write(`<h2><center>a=${object.a}, b=${object.b} </center></h2><br>`);