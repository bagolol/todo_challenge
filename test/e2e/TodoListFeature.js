describe('TodoList Manager', function(){
  it('has a title', function(){
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Todo List Manager');
  });

//   it('should change state', function() {
//   var value1 = element(by.binding('checkboxModel.value1'));
//   var value2 = element(by.binding('checkboxModel.value2'));

//   expect(value1.getText()).toContain('true');
//   expect(value2.getText()).toContain('YES');

//   element(by.model('checkboxModel.value1')).click();
//   element(by.model('checkboxModel.value2')).click();

//   expect(value1.getText()).toContain('false');
//   expect(value2.getText()).toContain('NO');
});
