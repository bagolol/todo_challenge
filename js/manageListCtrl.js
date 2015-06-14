todoList.controller('manageListCtrl', [function(){

  var self = this;
  self.taskList = [];
  self.completedTasks = 0;

  self.addTask = function(){

    var task = {"description" : self.taskDesc,
                "open": true,
                "date": new Date()}
    self.taskList.push(task)
  };

  self.removeTask = function(idx) {
   self.completedTasks ++;
   self.taskList[idx].open = false;
  };
}]);