let counter = 0;
// Increment function
function increment(){
    if (counter>=0) {
        counter++;
        document.getElementById('counter').innerHTML = counter;
        document.getElementById('error').innerHTML ="";
        document.getElementById('btnID').style.display='inline';
    }
}
//  decrement function
function decrement(){
    {
        if (counter>0) {
            counter--;
            document.getElementById('counter').innerHTML = counter;
        } else {
            document.getElementById('error').innerHTML ="Error : Cannot go below 0";
        }
    }
    if (counter==0) {
        document.getElementById('btnID').style.display='none';
    }
}
//  Reset function
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
    if (counter==0) {
        document.getElementById('btnID').style.display='none';
    }
}