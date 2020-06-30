// storage controller

// item controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data structure / State
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", calories: 1200 },
      { id: 1, name: "Cookie", calories: 400 },
      { id: 2, name: "Eggs", calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    logData: function () {
      return data;
    },
  };
})();

// ui controller
const UICtrl = (function () {
  // Public methods
  return {};
})();

// app controller
const App = (function (ItemCtrl, UICtrl) {
  return {
    init: function () {
      console.log("Initializing App...");
    },
  };
})(ItemCtrl, UICtrl);

// Initialize App
App.init();
