// Budget Controller
var budgetController = (function()  {


})();

//UI Controller
var UIController = (function()  {


})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl)  {

    document.querySelector('.add__btn').addEventListener('click', function()    {

    });

    document.addEventListener('keypress', function ()   {

        if (event.keyCode==13 || event.which==13)   {

            console.log('pressed');

        }
    });

}) (budgetController ,UIController);