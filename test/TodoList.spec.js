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

  it('can remove completed tasks', function(){
    var index = 0
    ctrl.taskDesc = "feed the cat"
    ctrl.addTask();
    ctrl.completeTask(0)
    expect(ctrl.taskList[0].open).toBe(false);
  });
});