const fetch = require('isomorphic-unfetch');
const { YEAR_RESULT, VARIETY_RESULT, REGION_RESULT, YEAR_VARIETY_RESULT } = require('./mocks');

describe('/getYearBreakdown/:lotCode', () => {
  it('should return the year breakdown', async () => {
    const result = await (await fetch('http://localhost:3001/getYearBreakdown/11YVCHAR001')).json();
    expect(result).toEqual(YEAR_RESULT);
  });
  it('should return the 404 error message', async () => {
    const { error } = await (
      await fetch('http://localhost:3001/getYearBreakdown/11YVCHAR00')
    ).json();
    expect(error).toEqual('not-found');
  });
});
describe('Wine API', () => {
  describe('/getVarietyBreakdown/:lotCode', () => {
    it('should return the year breakdown', async () => {
      const result = await (
        await fetch('http://localhost:3001/getVarietyBreakdown/11YVCHAR001')
      ).json();
      expect(result).toEqual(VARIETY_RESULT);
    });
  });

  describe('/getRegionBreakdown/:lotCode', () => {
    it('should return the year breakdown', async () => {
      const result = await (
        await fetch('http://localhost:3001/getRegionBreakdown/11YVCHAR001')
      ).json();
      expect(result).toEqual(REGION_RESULT);
    });
  });

  describe('/getYearAndVarietyBreakdown/:lotCode', () => {
    it('should return the year breakdown', async () => {
      const result = await (
        await fetch('http://localhost:3001/getYearAndVarietyBreakdown/11YVCHAR001')
      ).json();
      expect(result).toEqual(YEAR_VARIETY_RESULT);
    });
  });
});
