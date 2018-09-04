/**
 * BUDGET CONTROLLER MODULE
 *
 */

var budgetController = (function() {
  // Some code here
})();

/**
 * UI CONTROLLER MODULE
 *
 */

var UIController = (function() {
  // Some code here
})();

/**
 * APP CONTROLLER MODULE
 *
 */

var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. Get the field input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on UI

    console.log("It works.");
  };

  /* Click the check button event listener */
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  /* Press return/enter key event listener */
  document.addEventListener("keypress", function(e) {
    // Checks that enter key was pressed
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
