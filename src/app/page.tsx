'use client'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-enterprise';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo, useState } from 'react'
import { mockData } from '@/lib/data'
import './globals.css'

export default function Home() {
  const { data } = mockData
  const [columnDefs] = useState([
    {
      headerName: '',
      children: [
        { field: 'KANAL', width: 200, pinned: 'left', sortable: false, rowGroup: true, hide: true },
        { field: 'ULKE', pinned: 'left', sortable: true, aggFunc: 'first', filter: 'agSetColumnFilter', menuTabs: ['filterMenuTab'] },
        { field: 'TR/YD', pinned: 'left', sortable: true, aggFunc: 'first', filter: 'agSetColumnFilter', menuTabs: ['filterMenuTab'] },
        { field: 'YIL', pinned: 'left', aggFunc: 'first' },
        { field: 'AY', pinned: 'left' },
      ]
    },
    {
      headerName: '2023 YILI SATIŞ LFL',
      children: [
        { field: 'IF_TUTAR', aggFunc: 'sum' },
        { field: 'CIRO', columnGroupShow: 'open'},
        { field: 'CIRO %', columnGroupShow: 'open' },
        { field: 'ADET', columnGroupShow: 'open'},
        { field: 'BKAR', columnGroupShow: 'open'},
        { field: 'IPS', columnGroupShow: 'open'},
        { field: 'PSF', columnGroupShow: 'open'},
        { field: 'IMU', columnGroupShow: 'open'},
        { field: 'IND %', columnGroupShow: 'open'},
        { field: 'MARJ'},
      ]
    },
    {
      headerName: '2023 YILI SATIŞLAR',
      children: [
        { field: 'IF_TUTAR', aggFunc: 'sum' },
        { field: 'CIRO', columnGroupShow: 'open' },
        { field: 'CIRO %', columnGroupShow: 'open' },
        { field: 'ADET', columnGroupShow: 'open' },
        { field: 'BKAR', columnGroupShow: 'open' },
        { field: 'IPS', columnGroupShow: 'open' },
        { field: 'PSF', columnGroupShow: 'open' },
        { field: 'IMU', columnGroupShow: 'open' },
        { field: 'IND %', columnGroupShow: 'open' },
        { field: 'MARJ' },
      ]
    },
    {
      headerName: '2024 BUTCE',
      children: [
        { field: 'IF_TUTAR', aggFunc: 'sum', cellClass: 'green' },
        { field: 'CIRO', cellClass: 'green' },
        { field: 'CIRO %', cellClass: 'green' },
        { field: 'ADET', cellClass: 'green' },
        { field: 'BKAR', cellClass: 'green' },
        { field: 'IPS', cellClass: 'green' },
        { field: 'PSF', cellClass: 'green' },
        { field: 'MARJ', cellClass: 'green' },
        { field: 'LFL_Mgz_Ciro', cellClass: 'green' },
        { field: 'Yeni_Mgz_Ciro', cellClass: 'green' },
        { field: 'LFL_Mgz_Adet', cellClass: 'green' },
        { field: 'LFL_Adet', cellClass: 'green' },
        { field: 'IMU', cellClass: 'green' },
        { field: 'IND %', cellClass: 'green' },
        { field: 'LFL_CIRO', cellClass: 'green' },
        { field: 'ym_oprsyn%', cellClass: 'green' },
        { field: 'Ips_degisimi%', cellClass: 'green' },
      ]
    }
  ]);

  const [rowData, setRowData] = useState(data);

  const defaultColDef = useMemo(() => {
    return {
      width: 130,
      resizable: true,
      suppressMovable: true,
      filter: 'agTextColumnFilter',
      menuTabs: []
    };
  }, []);

  return (
    <main style={{ width: '100%', height: 'calc(100vh - 50px)' }}>
      <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
        <AgGridReact
          singleClickEdit
          stopEditingWhenCellsLoseFocus
          debounceVerticalScrollbar
          defaultColDef={defaultColDef}
          columnDefs={columnDefs}
          rowData={rowData}
          showOpenedGroup
          suppressAggFuncInHeader
          suppressDragLeaveHidesColumns
          groupDisplayType={'multipleColumns'}
          suppressMenuHide
          autoGroupColumnDef={{
            width: 250,
            headerName: 'KANAL',
            pinned: 'left',
            sortable: true,
            cellRendererParams: {
              suppressCount: true,
            }
          }}
        />
      </div>
    </main>
  )
}
