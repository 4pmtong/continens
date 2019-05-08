import React from 'react';

const Avatar: React.SFC<{ style: object | null }> = ({ style }) => <svg width='2.375rem' height='2.375rem' viewBox='0 0 38 38' version='1.1' style={style || {}}>
<defs>
  <filter x='-0.5%' y='-13.3%' width='101.0%' height='128.3%' filterUnits='objectBoundingBox' id='filter-1'>
    <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>
    <feGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'></feGaussianBlur>
    <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'></feColorMatrix>
    <feMerge>
      <feMergeNode in='shadowMatrixOuter1'></feMergeNode>
      <feMergeNode in='SourceGraphic'></feMergeNode>
    </feMerge>
  </filter>
</defs>
<g {... {id: 'Page-1', stroke: 'none', 'strokeWidth': '1', fill: 'none', 'fillRule': 'evenodd'}}>
  <g id='Campaign-2' transform='translate(-1543.000000, -16.000000)'>
    <g id='Group-2' filter='url(#filter-1)'>
      <g id='User' transform='translate(1412.000000, 10.000000)'>
        <g id='Photo' transform='translate(130.000000, 0.000000)'>
          <path d='M19.6666667,6 C10.4666667,6 3,13.4666667 3,22.6666667 C3,31.8666667 10.4666667,39.3333333 19.6666667,39.3333333 C28.8666667,39.3333333 36.3333333,31.8666667 36.3333333,22.6666667 C36.3333333,13.4666667 28.8666667,6 19.6666667,6 L19.6666667,6 Z M19.6666667,11 C22.4333333,11 24.6666667,13.2333333 24.6666667,16 C24.6666667,18.7666667 22.4333333,21 19.6666667,21 C16.9,21 14.6666667,18.7666667 14.6666667,16 C14.6666667,13.2333333 16.9,11 19.6666667,11 L19.6666667,11 Z M19.6666667,34.6666667 C15.5,34.6666667 11.8166667,32.5333333 9.66666667,29.3 C9.71666667,25.9833333 16.3333333,24.1666667 19.6666667,24.1666667 C22.9833333,24.1666667 29.6166667,25.9833333 29.6666667,29.3 C27.5166667,32.5333333 23.8333333,34.6666667 19.6666667,34.6666667 L19.6666667,34.6666667 Z' id='Shape' fill='#FFFFFF'></path>
          <polygon id='Shape' opacity='0.429999977' points='0 0 40 0 40 40 0 40'></polygon>
        </g>
      </g>
    </g>
  </g>
</g>
</svg>;

export default Avatar;
