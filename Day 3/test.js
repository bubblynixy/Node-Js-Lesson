let date = new Date();
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

exports.dayofWeek = function(){
return days[date.getDay() - 1];
};