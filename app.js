/**
 * BUDGET CONTROLLER MODULE
 *
 */

var budgetController = (function() {
  // Income item constructor
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // Expense item constructor
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, id;
      // Create new id
      if (data.allItems[type].length > 0) {
        id = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        id = 0;
      }

      // Check if type is exp or inc and create new item
      if (type === "exp") {
        newItem = new Expense(id, des, val);
      } else if (type === "inc") {
        newItem = new Income(id, des, val);
      }

      // Pushes the new item to the data object
      data.allItems[type].push(newItem);
      // Return the new item
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };
})();

/**
 * UI CONTROLLER MODULE
 *
 */

var UIController = (function() {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        // Income or expense -- ".inc", ".exp"
        type: document.querySelector(DOMStrings.inputType).value,
        // Budget item description
        description: document.querySelector(DOMStrings.inputDescription).value,
        // Dollar value of budget item
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

/**
 * APP CONTROLLER MODULE
 *
 */

var controller = (function(budgetCtrl, UICtrl) {
  // Sets up event listeners
  var setupEventListeners = function() {
    // Get the DOMStrings object from UI Controller
    var DOM = UICtrl.getDOMStrings();
    // Click the check button event listener
    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    // Press return/enter key event listener
    document.addEventListener("keypress", function(e) {
      // Checks that enter key was pressed
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  };

  // Adds budget item, updates totals
  var ctrlAddItem = function() {
    var input, newItem;

    // 1. Get the field input data
    input = UICtrl.getInput();
    // 2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on UI
  };

  // Intialization of the App
  return {
    init: function() {
      setupEventListeners();
    }
  };
})(budgetController, UIController);

// Starts the app
controller.init();
