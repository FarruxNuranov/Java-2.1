
var years = +prompt('Введите свой возраст')



if ((years > 0) && (years <= 18)) {
1
     alert('Вы еще молоды, Вам нужно учиться')
}
else if( (years > 18) && (years <= 50)){
    alert ('Вам нужно работать')
}

else if ( (years > 50) && (years <= 59)) {

    
    alert('Вам скоро на пенсию' )
}
else if((years > 59) && (years <= 100)) {
    
    alert('Вы пенсионер')
}

else(
    alert('Что-то пошло не так')
)









