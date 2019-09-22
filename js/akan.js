var maleNames = ["Kwasi", "Kwandwo", "Kabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function giveAkanName
var date = new Date(year +"/" +month +"/"+day);
var dayBorn = date.getDay();
var akanName;
if(gender ==="male"){
    akanName = maleNames[dayBorn];
}
else{
    akanName = femaleNames[dayBorn];
}
alert("You were born on "+dayOfTheWeek[dayBorn]+ "Your name is.."+akanName);

