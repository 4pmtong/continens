import React from 'react';

import { withStyles, createStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import theme from '../_util/theme';

import { TableScrollProps, TableScrollState } from './proptype';


const styles = () => (createStyles({
  tableContainer: {
    backgroundColor: theme.white,
    position: 'relative',
    borderBottom: '1px solid #e8e8e8',
  },
  table: {
    tableLayout: 'fixed',
    wordBreak: 'break-all',
    direction: 'ltr',
  },
  tr: {
    height: '3.5rem',
  },
  td: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap', 
    borderBottom: '1px solid #E8E8E8',
    borderRight: '1px solid #E8E8E8',
    '&:first-of-type': {
      borderLeft: '1px solid #E8E8E8',
    }
  },
  tdVal: {
    boxSizing: 'border-box',
    padding: '0 1.75rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: 0,
  },
  tdHeadVal: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: 0,
  },
  tableScrollBox: {
    position: 'relative',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  tableHead: {
    width: '100%',
  },
  topFixedBoxShadow: {
    boxShadow: '0px 10px 30px #f2f2f2',
  },
  headTr: {
    backgroundColor: '#F9F9F9',
  },
  headTd: {
    borderTop: '1px solid #E8E8E8',
    padding: '0 1.75rem',
    fontSize: '1.2rem',
    fontWeight: 500,
    color: '#31394d',
    fontFamily: 'Roboto, sans-serif',
  },
  mainTableBody: {
    overflowY: 'auto',
    overflowX: 'hidden', 
    maxHeight: '25rem',
  },
  leftFixedBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9,
    transition: 'box-shadow .3s linear',
  },
  leftFixedBoxShadow: {
    boxShadow: '10px 0px 30px #f2f2f2',
  },
  leftTableBody: {
    overflowY: 'auto',
    overflowX: 'hidden', 
    maxHeight: '25rem',
    backgroundColor: '#fff',
    direction: 'rtl',
  },
  leftFixedTd: {
    fontSize: '1.2rem',
    fontWeight: 500,
    color: '#31394d',
    fontFamily: 'Roboto, sans-serif',
  },
  rightFixedBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 9,
    transition: 'box-shadow .3s linear'
  },
  rightFixedBoxShadow: {
    boxShadow: '-10px 0px 30px #f2f2f2',
  },
  rightTableBody: {
    overflowY: 'auto',
    overflowX: 'hidden', 
    maxHeight: '25rem',
    backgroundColor: '#fff',

    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  rigthFixedNormalTd: {
    '&:first-of-type': {
      borderLeft: 'none',
    }
  },

  tableInput: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    textAlign: 'right',
    outline: 'none',
    border: '2px solid #2d72d9',
    fontSize: '1.2rem',
    color: '#31394d',
    padding: '0 1rem',
    position: 'relative',
  },

  tdNoBorderBottom: {
    borderBottom: 'none',
  },
}));

class TableScroll extends React.Component<TableScrollProps, TableScrollState> {
  constructor(props: TableScrollProps) {
    super(props);
    this.state = {
      XScrollStatus: 'left',
      YScrollStatus: 'top',
    };

    this.handleScrollX = this.handleScrollX.bind(this);
    this.handleScrollY = this.handleScrollY.bind(this);
  }

  refTableBody: any = null;
  refTableLeft: any = null;
  refTableRight: any = null;
  scrollLeft: any = 0;
  scrollTop: any = 0;

  componentDidMount() {
  }

  handleScrollX(e: any){
    let status: 'left' | 'center' | 'right' = 'left';
    if (e.currentTarget.scrollLeft <= 0) {
      status = 'left';
    } else if (e.currentTarget.scrollLeft >= this.refTableBody.clientWidth - e.currentTarget.clientWidth) {
      status = 'right';
    } else {
      status = 'center';
    }

    this.state.XScrollStatus !== status && this.setState({
      XScrollStatus: status
    });  
  }

  /**
   * @desc handleScrollY
   * @param e 
   * @param target 'center' | 'left' | 'right'
   */
  handleScrollY(e: any, target = 'center') {
    this.scrollTop =  e.currentTarget.scrollTop;

    switch (target) {
      case 'left':
        this.refTableBody && (this.refTableBody.scrollTop = this.scrollTop);
        this.refTableRight && (this.refTableRight.scrollTop = this.scrollTop);
        break;
      case 'right':
        this.refTableBody && (this.refTableBody.scrollTop = this.scrollTop);
        this.refTableLeft && (this.refTableLeft.scrollTop = this.scrollTop);
        break;
      default: 
        this.refTableLeft && (this.refTableLeft.scrollTop = this.scrollTop);
        this.refTableRight && (this.refTableRight.scrollTop = this.scrollTop);
        break;
    }

    const status = (this.scrollTop > 0) ? 'center' : 'top';

    this.state.YScrollStatus !== status && this.setState({ YScrollStatus: status });
  }

  createColGroup() {
    return (
      <colgroup>
        {
          this.props.tableHeads.map((headItem, headIndex) => {
            return (
              <col key={headIndex} width={headItem.width || '10rem'}/>
            );
          })
        }
      </colgroup>
    );
  }

  calBoxWholeWidth() {
    if (!!this.props.boxWidth) return this.props.boxWidth;
    let width = 0;
    for(let i = 0; i < this.props.tableHeads.length; i++) {
      if (!this.props.tableHeads[i].width) return '100%';
      const num = parseFloat(this.props.tableHeads[i].width);

      if(isNaN(num)) return '100%';

      width += num;
    }

    return `${width}rem`;
  }

  render() {
    const { 
      classes, hasLeftFixed, hasRightFixed, tableBodys, tableHeads, leftWidth, rightWdith, rowHeight, maxScrollHeight,
      selectedEdit, onInputChange, onActiveInput, 
    } = this.props;

    const THLength = tableHeads.length;
    const mainTableWidth = this.calBoxWholeWidth();
    const leftFixedWidth = leftWidth || tableHeads[0].width || '10rem';
    const rightFixedWidth = rightWdith || tableHeads[THLength - 1].width || '10rem';

    return (
      <div className={classes.tableContainer}>
        <div 
          className={classes.tableScrollBox}
          onScroll={e => { 
            this.handleScrollX(e); }}
        >
          <table 
            cellPadding='0' 
            cellSpacing='0'
            className={`${classes.table} ${classes.tableHead} ${this.state.YScrollStatus !== 'top' ? classes.topFixedBoxShadow : ''}`}
            style={{
              width: mainTableWidth
            }}
          >
            {this.createColGroup()}
            <thead>
              <tr className={`${classes.tr} ${classes.headTr}`}>
                {tableHeads.map((headItem, headIndex) => {
                  return (
                    <td
                      key={headItem.key || headIndex}
                      className={`${classes.td} ${classes.headTd}`}
                      style={{
                        textAlign: headItem.align || 'center',
                        width: headItem.width || '10rem',
                        height: rowHeight || '3.5rem',
                        ...headItem.style
                      }}
                    >
                      <Tooltip title={headItem.formatter ? headItem.formatter(headItem.value) : headItem.value}  placement='top'>
                        <p className={classes.tdHeadVal}>{(headItem.formatter ? headItem.formatter(headItem.value) : headItem.value) || ''}</p>
                      </Tooltip>
                    </td>
                  );
                })}
              </tr>
            </thead>
          </table>

          <div
            className={classes.mainTableBody}
            style={{ 
              width: mainTableWidth,
              maxHeight: maxScrollHeight || '25rem' 
            }}
            ref={el => { this.refTableBody = el; }}
            onScroll={e => { this.handleScrollY(e, 'center'); }}
          >
            <table
              cellPadding='0' 
              cellSpacing='0'
              className={classes.table}
              style={{ width: mainTableWidth }}
            >
              {this.createColGroup()}
              <tbody>
                {tableBodys.map((rowArr, rowIndex) => {
                  const isLastRow = rowIndex === tableBodys.length - 1;
                  return(
                    <tr key={rowIndex} className={classes.tr}>
                      {rowArr.map((cellItem, cellIndex) => {
                        return (
                          <td 
                            key={cellIndex} 
                            className={`${classes.td} ${isLastRow ? classes.tdNoBorderBottom : ''}`}
                            style={{
                              textAlign: cellItem.align || 'center',
                              width: tableHeads[cellIndex].width || '10rem',
                              height: rowHeight || '3.5rem',
                              ...cellItem.style
                            }}
                            onClick={() => {
                              !!onActiveInput &&  onActiveInput(cellItem, rowIndex, cellIndex);
                            }}
                          >
                            {
                              (!selectedEdit || cellItem.id !== selectedEdit.id) &&
                              <p className={classes.tdVal}>{cellItem.formatter ? cellItem.formatter(cellItem.value) : cellItem.value}</p>
                            }
                            {
                              (selectedEdit && cellItem.id === selectedEdit.id) &&
                              <input 
                                className={classes.tableInput}
                                style={{
                                  height: rowHeight ? `calc(${rowHeight} - 1px` : 'calc(3.5rem - 1px)'
                                }}
                                value={selectedEdit.value} 
                                autoFocus={true}
                                onChange={e => {
                                  !!onInputChange && onInputChange(e.currentTarget.value, cellItem, rowIndex, cellIndex);
                                }}
                              />
                            }
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {
          !!hasLeftFixed && 
          <div 
            className={`${classes.leftFixedBox} ${this.state.XScrollStatus !== 'left' && classes.leftFixedBoxShadow}`}
            style={{
              width: leftFixedWidth
            }}
          >
            <table 
              cellPadding='0' 
              cellSpacing='0'
              className={`${classes.table} ${classes.leftTableHead}`}
              style={{
                width: leftFixedWidth
              }}
            >
              <thead>
                <tr className={`${classes.tr} ${classes.headTr}`}>
                  <td
                    className={`${classes.td} ${classes.headTd}`}
                    style={{
                      textAlign: tableHeads[0].align || 'center',
                      width: tableHeads[0].width || '10rem',
                      height: rowHeight || '3.5rem',
                      ...tableHeads[0].style
                    }}
                  >
                    <Tooltip title={tableHeads[0].formatter ? tableHeads[0].formatter(tableHeads[0].value) : tableHeads[0].value}  placement='top'>
                      <p className={classes.tdHeadVal}>{tableHeads[0].formatter ? tableHeads[0].formatter(tableHeads[0].value) : tableHeads[0].value}</p>
                    </Tooltip>
                  </td>
                </tr>
              </thead>
            </table>

            <div 
              className={classes.leftTableBody}
              style={{ 
                width: leftFixedWidth,
                maxHeight: maxScrollHeight || '25rem', 
              }}
              ref={el => { this.refTableLeft = el; }}
              onScroll={e => {this.handleScrollY(e, 'left');}}
            >
              <table
                cellPadding='0' 
                cellSpacing='0'
                className={classes.table}
                style={{ width: leftFixedWidth }}
              >
                <tbody>
                  {tableBodys.map((rowArr, rowIndex) => {
                    const isLastRow = rowIndex === tableBodys.length - 1;
                    return(
                      <tr key={rowIndex} className={classes.tr}>
                        <td 
                          key='0' 
                          className={`${classes.td} ${classes.leftFixedTd} ${isLastRow ? classes.tdNoBorderBottom : ''}`}
                          style={{
                            textAlign: rowArr[0].align || 'center',
                            width: tableHeads[0].width || '10rem',
                            height: rowHeight || '3.5rem',
                            ...rowArr[0].style
                          }}
                        >
                          <Tooltip title={rowArr[0].formatter ? rowArr[0].formatter(rowArr[0].value) : rowArr[0].value}  placement='top'>
                            <p className={classes.tdVal}>{rowArr[0].formatter ? rowArr[0].formatter(rowArr[0].value) : rowArr[0].value}</p>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        }

        {
          !!hasRightFixed && 
          <div
            className={`${classes.rightFixedBox} ${this.state.XScrollStatus !== 'right' && classes.rightFixedBoxShadow}`}
            style={{ width: rightFixedWidth }}
          >
            <table 
              cellPadding='0' 
              cellSpacing='0'
              className={`${classes.table} ${classes.rightTableHead}`}
              style={{ width: rightFixedWidth }}
            >
              <thead>
                <tr className={`${classes.tr} ${classes.headTr}`}>
                  <td
                    className={`${classes.td} ${classes.headTd}`}
                    style={{
                      textAlign: tableHeads[THLength - 1].align || 'center',
                      width: tableHeads[THLength - 1].width || '10rem',
                      height: rowHeight || '3.5rem',
                      ...tableHeads[THLength - 1].style
                    }}
                  >
                    <Tooltip title={tableHeads[THLength - 1].formatter ? tableHeads[THLength - 1].formatter(tableHeads[THLength - 1].value) : tableHeads[THLength - 1].value || ''}  placement='top'>
                      <p className={classes.tdHeadVal}>{(tableHeads[THLength - 1].formatter ? tableHeads[THLength - 1].formatter(tableHeads[THLength - 1].value) : tableHeads[THLength - 1].value) || ''}</p>
                    </Tooltip>
                  </td>
                </tr>
              </thead>
            </table>

            <div 
              className={classes.rightTableBody}
              style={{ 
                width: rightFixedWidth,
                maxHeight: maxScrollHeight || '25rem'
              }}
              ref={el => { this.refTableRight = el; }}
              onScroll={e => {this.handleScrollY(e, 'right');}}
            >
              <table
                cellPadding='0' 
                cellSpacing='0'
                className={classes.table}
                style={{ width: rightFixedWidth }}
              >
                <tbody>
                  {tableBodys.map((rowArr, rowIndex) => {
                    const isLastRow = rowIndex === tableBodys.length - 1;
                    return(
                      <tr key={rowIndex} className={classes.tr}>
                        <td 
                          key='0' 
                          className={`${classes.td} ${isLastRow ? classes.tdNoBorderBottom : ''}`}
                          style={{
                            textAlign: rowArr[THLength - 1].align || 'center',
                            width: tableHeads[THLength - 1].width || '10rem',
                            height: rowHeight || '3.5rem',
                            ...rowArr[THLength - 1].style
                          }}
                        >
                          
                          <Tooltip title={rowArr[THLength - 1].formatter ? rowArr[THLength - 1].formatter(rowArr[THLength - 1].value) : rowArr[THLength - 1].value}  placement='top-end'>
                            <p className={classes.tdVal}>{rowArr[THLength - 1].formatter ? rowArr[THLength - 1].formatter(rowArr[THLength - 1].value) : rowArr[THLength - 1].value}</p>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    );
  }
};

export default withStyles(styles)(TableScroll);