const weekDays = require('./testDays');
const workDays = require('./testDays')

test('Sunday is a week day', () => {
    expect(weekDays).toContain('Sunday');
  });
  
  test('Sunday is not a workday', () => {
    expect(workDays).not.toContain('Sunday');
  });
  
  