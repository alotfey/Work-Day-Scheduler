// show time now
var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = moment().format('dddd, MMMM Do');
//
var cal = new Date(); // init date and time
var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock

    for (var i = 9; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }
// save to local storage
    document.querySelectorAll('.saveBtn').forEach(item => {
    item.addEventListener('click', event => {

    var hour1 = document.getElementById('9').value;
    localStorage.setItem('text1', hour1);
    var hour2 = document.getElementById('10').value;
    localStorage.setItem('text2', hour2);
    var hour3 = document.getElementById('11').value;
    localStorage.setItem('text3', hour3);
    var hour4 = document.getElementById('12').value;
    localStorage.setItem('text4', hour4);
    var hour5 = document.getElementById('13').value;
    localStorage.setItem('text5', hour5);
    var hour6 = document.getElementById('14').value;
    localStorage.setItem('text6', hour6);
    var hour7 = document.getElementById('15').value;
    localStorage.setItem('text7', hour7);
    var hour8 = document.getElementById('16').value;
    localStorage.setItem('text8', hour8);
    var hour9 = document.getElementById('17').value;
    localStorage.setItem('text9', hour9);
})
});

     // Display saved storage
     var saved1 = localStorage.getItem('text1');
     document.getElementById('9').value = saved1;
     var saved2 = localStorage.getItem('text2');
     document.getElementById('10').value = saved2;
     var saved3 = localStorage.getItem('text3');
     document.getElementById('11').value = saved3;
     var saved4 = localStorage.getItem('text4');
     document.getElementById('12').value = saved4;
     var saved5 = localStorage.getItem('text5');
     document.getElementById('13').value = saved5;
     var saved6 = localStorage.getItem('text6');
     document.getElementById('14').value = saved6;
     var saved7 = localStorage.getItem('text7');
     document.getElementById('15').value = saved7;
     var saved8 = localStorage.getItem('text8');
     document.getElementById('16').value = saved8;
     var saved9 = localStorage.getItem('text9');
     document.getElementById('17').value = saved9;
