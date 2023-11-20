interface MerchSalesDto {
  productCode: string
  salesOrganizationCode: string | null
  salesOrganizationDesc: string | null
  distrChannelCode: string | null
  distrChannelDesc: string | null
  genderCode: string | null
  genderDesc: string | null
  mainGroupCode: string | null
  mainGroupDesc: string | null
  currencyCode: string | null
  salesQuantity: number
  trSalesAmount: number
  lcSalesAmount: number
  date_ID: number
  date?: string | null
  lflDate_ID?: number | null
  lflDate?: string | null
}

export interface MerchSalesDtoICollectionFloResponse {
  count: number
  errors: string | null
  data: null | MerchSalesDto[]
}

export const mockData: MerchSalesDtoICollectionFloResponse = {
  'count': 1000,
  'errors': null,
  'data': [
    {
      'KANAL': 'A TURKIYE',
      'ULKE': 'TURKIYE',
      'TR/YD': 'TURKIYE',
      'YIL': '2024',
      'AY': 'OCAK',
      'IF_TUTAR': 816,
      'CIRO': 655.8,
      'CIRO %': 5,
      'ADET': 2.964,
      'BKAR': 324.2,
      'IPS': 275.5,
      'PSF': 221.2,
      'IMU': 2.46,
      'IND %': 19.7,
      'MARJ': 49.4
    },
    {
      'KANAL': 'B TURKIYE',
      'ULKE': 'TURKIYE',
      'TR/YD': 'magaza',
      'YIL': '2024',
      'AY': 'OCAK',
      'IF_TUTAR': 300,
      'CIRO': 655.8,
      'CIRO %': 5,
      'ADET': 2.964,
      'BKAR': 324.2,
      'IPS': 275.5,
      'PSF': 221.2,
      'IMU': 2.46,
      'IND %': 19.7,
      'MARJ': 49.4
    },
    {
      'KANAL': 'A KZ',
      'ULKE': 'Kazakistan',
      'TR/YD': 'Yurt dışı',
      'YIL': '2024',
      'AY': 'OCAK',
      'IF_TUTAR': 100,
      'CIRO': 655.8,
      'CIRO %': 5,
      'ADET': 2.964,
      'BKAR': 324.2,
      'IPS': 275.5,
      'PSF': 221.2,
      'IMU': 2.46,
      'IND %': 19.7,
      'MARJ': 49.4
    },
    {
      'KANAL': 'A TURKIYE',
      'ULKE': 'TURKIYE',
      'TR/YD': 'TURKIYE',
      'YIL': '2024',
      'AY': 'ŞUBAT',
      'IF_TUTAR': 816,
      'CIRO': 655.8,
      'CIRO %': 5,
      'ADET': 2.964,
      'BKAR': 324.2,
      'IPS': 275.5,
      'PSF': 221.2,
      'IMU': 2.46,
      'IND %': 19.7,
      'MARJ': 49.4
    },
    {
      'KANAL': 'A TURKIYE',
      'ULKE': 'TURKIYE',
      'TR/YD': 'TURKIYE',
      'YIL': '2024',
      'AY': 'MART',
      'IF_TUTAR': 816,
      'CIRO': 655.8,
      'CIRO %': 5,
      'ADET': 2.964,
      'BKAR': 324.2,
      'IPS': 275.5,
      'PSF': 221.2,
      'IMU': 2.46,
      'IND %': 19.7,
      'MARJ': 49.4
    },
    {
      'KANAL': 'A TURKIYE',
      'ULKE': 'TURKIYE',
      'TR/YD': 'TURKIYE',
      'YIL': '2024',
      'AY': 'NISAN',
      'IF_TUTAR': 816,
      'CIRO': 655.8,
      'CIRO %': 5,
      'ADET': 2.964,
      'BKAR': 324.2,
      'IPS': 275.5,
      'PSF': 221.2,
      'IMU': 2.46,
      'IND %': 19.7,
      'MARJ': 49.4
    },
    {
      'KANAL': 'A TURKIYE',
      'ULKE': 'TURKIYE',
      'TR/YD': 'TURKIYE',
      'YIL': '2024',
      'AY': 'MAYIS',
      'IF_TUTAR': 81,
      'CIRO': 655.8,
      'CIRO %': 5,
      'ADET': 2.964,
      'BKAR': 324.2,
      'IPS': 275.5,
      'PSF': 221.2,
      'IMU': 2.46,
      'IND %': 19.7,
      'MARJ': 49.4
    },
    {
      'KANAL': 'A TURKIYE',
      'ULKE': 'TURKIYE',
      'TR/YD': 'TURKIYE',
      'YIL': '2024',
      'AY': 'HAZIRAN',
      'IF_TUTAR': 816,
      'CIRO': 655.8,
      'CIRO %': 5,
      'ADET': 2.964,
      'BKAR': 324.2,
      'IPS': 275.5,
      'PSF': 221.2,
      'IMU': 2.46,
      'IND %': 19.7,
      'MARJ': 49.4
    }
  ]
}
