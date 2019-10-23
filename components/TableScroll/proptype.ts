export interface TableScrollProps {
  tableHeads: Array<HeaderItem>,
  tableBodys: Array<Array<TableCell>>,
  hasLeftFixed?: boolean,
  hasRightFixed?: boolean,
  maxScrollHeight?: string,
  rowHeight?: string,
  boxWidth?: string,
  leftWidth?: string,
  rightWdith?: string,

  selectedEdit?: TableCell,
  onInputChange?: Function,
  onActiveInput?: Function,
  classes?: any
}

export interface TableScrollState {
  XScrollStatus: 'left' | 'center' | 'right',
  YScrollStatus: 'top' | 'center',
};

declare type HeaderItem = {
  key: string,
  value: string | React.ReactNode,
  width?: string,
  align?: 'center' | 'left' | 'right',
  style?: Object,
  formatter?: Function
};

declare type TableCell = {
  id: string,
  value: number | string,
  align?: 'center' | 'left' | 'right',
  style?: Object,
  formatter?: Function
}
