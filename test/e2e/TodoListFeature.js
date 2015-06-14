describe('TodoList Manager', function(){
  it('has a title', function(){
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Todo List Manager');
  });

  it('can add a new task', function() {
    var newTask = element(by.model('todoCtrl.taskDesc'));
    var button = element(by.className('btn'))
    button.sendKeys('new task')

    expect(element.all(by.repeater('task in todoCtrl.taskList')).count()).toEqual(1);
  });

  it('can mark a task as completed', function(){
    var newTask = element(by.model('todoCtrl.taskDesc'));
    var button = element(by.className('btn'));
    var checkbox = element(by.id('completed'));
    var list = element.all(by.repeater('task in todoCtrl.taskList'))

    button.sendKeys('new task')


    checkbox.click(0);


    // expect(list.get(0).open.toEqual(false));
  });
});
