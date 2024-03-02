const datasets = [
  {
    id: 1,
    description: 'sample dataset',
    createdAt: '2023-12-31 16:00:00',
    updatedAt: '2023-12-31 16:00:00',
  },
];

const currencies = [
  {
    id: 1,
    ticker: 'KRW',
    createdAt: '2023-12-31 16:00:00',
    updatedAt: '2023-12-31 16:00:00',
  },
  {
    id: 2,
    ticker: 'USD',
    createdAt: '2023-12-31 16:00:00',
    updatedAt: '2023-12-31 16:00:00',
  },
];

const interestRates = [
  {
    id: 1,
    datasetId: 1,
    currencyId: 1,
    baseDate: '2022-12-06',
    maturity: 0.5,
    value: 0.0101,
    createdAt: '2023-12-31 16:00:00',
    updatedAt: '2023-12-31 16:00:00',
  },
  {
    id: 2,
    datasetId: 1,
    currencyId: 1,
    baseDate: '2022-12-06',
    maturity: 1,
    value: 0.0102,
    createdAt: '2023-12-31 16:00:00',
    updatedAt: '2023-12-31 16:00:00',
  },
  {
    id: 3,
    datasetId: 1,
    currencyId: 1,
    baseDate: '2022-12-06',
    maturity: 2,
    value: 0.0103,
    createdAt: '2023-12-31 16:00:00',
    updatedAt: '2023-12-31 16:00:00',
  },
];

const swaptionVols = [
  {
    id: 1,
    datasetId: 1,
    currencyId: 1,
    baseDate: '2022-12-06',
    tenor: 1,
    maturity: 1,
    value: 0.01,
    createdAt: '2023-12-31 16:00:00',
    updatedAt: '2023-12-31 16:00:00',
  },
  {
    id: 2,
    datasetId: 1,
    currencyId: 1,
    baseDate: '2022-12-06',
    tenor: 2,
    maturity: 1,
    value: 0.01,
    createdAt: '2023-12-31 16:00:00',
    updatedAt: '2023-12-31 16:00:00',
  },
  {
    id: 2,
    datasetId: 1,
    currencyId: 1,
    baseDate: '2022-12-06',
    tenor: 3,
    maturity: 1,
    value: 0.01,
    createdAt: '2023-12-31 16:00:00',
    updatedAt: '2023-12-31 16:00:00',
  },
];

module.exports = {
  datasets,
  currencies,
  interestRates,
  swaptionVols,
};
