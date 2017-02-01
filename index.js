var arr= [
{
  className:"cat1",
  source:"1.jpg",
  count:0
},
{
  className:"cat2",
  source:"2.jpg",
  count:0
},
{
  className:"cat3",
  source:"3.jpg",
  count:0
},
{
  className:"cat4",
  source:"4.jpg",
  count:0
},
{
  className:"cat5",
  source:"5.jpg",
  count:0
},
];
var index = 0;
var i=0;
for (i in arr){
  console.log(i);

document.getElementById(arr[i].className).addEventListener('click', (function(j){
    return function(){
      console.log(j);
      arr[j].count++;
      document.getElementById("disp").innerHTML="<img"+" src="+"'"+arr[j].source+"'"+"height='200' width='200'><p>Count:"+arr[j].count+"</p>";
    };

})(i));
}
