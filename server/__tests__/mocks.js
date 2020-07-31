const YEAR_RESULT = {
  breakDownType: 'year',
  breakdown: [
    { key: 2011, percentage: 85 },
    { key: 2010, percentage: 15 },
  ],
};

const VARIETY_RESULT = {
  breakDownType: 'variety',
  breakdown: [
    { key: 'Chardonnay', percentage: 90 },
    { key: 'Pinot Noir', percentage: 10 },
  ],
};

const REGION_RESULT = {
  breakDownType: 'region',
  breakdown: [
    { key: 'Yarra Valley', percentage: 80 },
    { key: 'Macedon', percentage: 15 },
    { key: 'Mornington', percentage: 5 },
  ],
};

const YEAR_VARIETY_RESULT = {
  breakDownType: 'year and variety',
  breakdown: {
    year: [
      { key: 2011, percentage: 85 },
      { key: 2010, percentage: 15 },
    ],
    variety: [
      { key: 'Chardonnay', percentage: 90 },
      { key: 'Pinot Noir', percentage: 10 },
    ],
  },
};

module.exports = {
  YEAR_RESULT,
  VARIETY_RESULT,
  REGION_RESULT,
  YEAR_VARIETY_RESULT,
};
