const generateUniqueId = require('../../src/utils/generateUniqueId');

//test para a fubnção genereteUniqueId
describe('Generate Unique ID', () => {
  it('should generate an  unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});