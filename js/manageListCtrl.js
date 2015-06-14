todoList.controller('manageListCtrl', [function(){

  var self = this;
  self.taskList = [];

  this.addTask = function(){

    var task = {"description" : self.taskDesc,
                "completed": false,
                "date": date()}
    self.taskList.push(task)
  };

  function date(){
    var date = new Date().toISOString().slice(0, 10);
    return date;
  }

  this.removeTask = function ( idx ) {
    self.taskList.splice(idx, 1);
  };
}]);