todoList.controller('manageListCtrl', [function(){

  var self = this;
  self.taskList = [];

  this.addTask = function(){

    var task = {"description" : self.taskDesc,
                "completed": false,
                "date": new Date().toISOString().slice(0, 10)}
    self.taskList.push(task)
  };
}]);