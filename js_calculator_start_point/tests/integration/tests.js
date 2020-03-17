const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('number buttons should update the display of the running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('26')
  })


  it('arithmetical operations update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add ')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals ')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('multiple operations can be chained together and the display updates correctly', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_add ')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply ')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals ')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('36')
  })


});
