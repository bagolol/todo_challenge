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

  self.completeTask = function(idx) {
    console.log(idx)
   self.completedTasks ++;
   self.taskList[idx].open = false;
  };
}]);