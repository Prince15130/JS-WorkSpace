console.log("Hello World!!!");
var hammingDistance = function(x, y) {
       x=x.toString();
        y=y.toString();
      let xUni = "";
      let yUni = "";
      for (i=0; i < x.length; i++) {
            xUni+=x[i].charCodeAt(0).toString(2) + " ";
        }
      for (i=0; i < y.length; i++) {
            yUni+=y[i].charCodeAt(0).toString(2) + " ";
        }
      console.log(xUni);
      console.log(yUni);
      debugger;
      let xArr = xUni.split('');
      let yArr = yUni.split('');
      let count = 0;
      for(var j=0; j<=xArr.length;j++){
        if(xArr[j]!=yArr[j]){
           count++;}
      }
      console.log(count);
        return count;
    };

    var massMark = 75;
    var heightMark = 1.69;

    var massJohn = 92;
    var heightJohn = 1.90;

    var BMImark = massMark/(heightMark*heightMark);
    var BMIjohn = massJohn/(heightJohn*heightJohn);

    if(BMImark>BMIjohn){
      console.log('MArk ka Jyaada hai');
    }
    else{
      console.log('John ka Jyaada hai');
    }