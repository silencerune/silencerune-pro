import React, { Component } from 'react';
import InTheLabel from './InTheLabel/InTheLabel';
import Axjx from './axjx'
import _ from 'lodash';
import Webpage from './webpage';
const PIC_LIST1 = [
  'ajax',
  'Barrage',
  'comic',
  'sheet',
  'webtest',
]
const PIC_LIST2 = [
  '01build',
  '02universe',
  '03stick',
  '04clock',
  '05door',
  '06roll',
  '07runing',
  '08segway',
  '09wheel'
]
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onoff1: true,
      onoff2: true,
    }
  }
  render() {
    return (
      <div>
        <Webpage />
        {/* 
        <details class="settitle" onclick="onoff(1);">
          <summary>web</summary>

          <div class="blockset">
            {_.map(PIC_LIST1, fig =>
              (<InTheLabel className="comicComponent" fig={`${fig}`} />)
            )}
          </div>
        </details> */}
        {/* <details class="settitle" onclick="onoff(2);">
          <summary>animation</summary>
          <div class="blockset">
            {_.map(PIC_LIST2, fig =>
              (<InTheLabel className="comicComponent" fig={`${fig}`} />)
            )}
          </div>
        </details> */}

      </div>
      // <div class="row rowfix">
      //   <div class="col-sm-2">
      //     <div class="mainDiv">
      //       <div class="mainDiv2">
      //         <div class="innerWord "> hello </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div class="blockbox col-sm-10">
      //     block~~~~~~~~~~~~~~~~
      // </div>
      // </div>
    )
  }

}
export default MainPage;