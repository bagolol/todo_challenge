describe('manageListCtrl', function(){
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('manageListCtrl');
  }));

  it('initialises with an empty task list', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});