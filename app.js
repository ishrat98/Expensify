// Budget Controller
var budgetController = (function()  {

    var Expense = function(id, description, value)  {
        this.id = id;
        this.description = description ;
        this.value = value;

    };

    var Income = function(id, description, value)  {
        this.id = id;
        this.description = description ;
        this.value = value;

    };

    var data =  {
        allItems:   {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return  {
        addItem: function(type, des, val)   {
            var newItem, ID;

            // create new ID
            if(data.allItems[type].length>0)    {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;

            }   else 
                    ID = 0;

            if(type==='exp')    {
                newItem = new Expense(ID, des,val);
            } else if (type === 'inc')  {
                newItem = new Income(ID, des , val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        }
    },

    testing = function() {

        console.log(data);
    };

    


})();

//UI Controller
var UIController = (function()  {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'

    };

    return {
        getInput : function()   {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem: function(obj, type)    {

        
            // create html string with placeholder text
            var html , newHtml;
            if(type === 'inc') {

                html =  '<div class="item clearfix" id="income-%id"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }   else if(type === 'exp')    {
                
                html = '<div class="item clearfix" id="expense-%id"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // replace the placeholder text with the actual data
            
            newHtml = html.replace('%id',obj.id);
         //   newHtml =

            // Insert the HTML into the DOM
        }

        getDOMstrings: function()   {
            return DOMstrings;
        }
    };


})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl)  {

    var setupEventListeners = function ()   {
        
        var DOM= UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event)   {  //.....
    
            if (event.keyCode==13 || event.which==13)   {
    
                ctrlAddItem();
    
            }
        });
    }

    var ctrlAddItem = function() {

        var input = UICtrl.getInput();
        console.log(input);

    };

    return {
        init: function()    {
            console.log('Initialized');
            setupEventListeners();
        }
    };



}) (budgetController ,UIController);

controller.init();