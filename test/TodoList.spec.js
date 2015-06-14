describe('manageListCtrl', function(){
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('manageListCtrl');
  }));

  it('initialises with an empty task list', function() {
    expect(ctrl.taskList.length).toBe(0);
  });
  it('can add a task', function(){
    ctrl.taskDesc = "feed the cat"
    ctrl.addTask();
    expect(ctrl.taskList.length).toBe(1)
  });

  it('can mark as completed(not open)', function(){
    var index = 0
    addTask();
    ctrl.completeTask(index)
    expect(ctrl.taskList[index].open).toBe(false);
  });

  it('keeps track of the number of complted tasks', function(){
    var index = 0
    addTask();
    ctrl.completeTask(index)
    expect(ctrl.completedTasks).toEqual(1);
  });

  function addTask() {
    ctrl.taskDesc = "feed the cat"
    ctrl.addTask();
  };

});