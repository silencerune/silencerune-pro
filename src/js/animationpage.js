import React from 'react';
import InTheLabel from './InTheLabel/InTheLabel';
import _ from 'lodash';

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
class AnimationPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ background: 'black' }}>
                <div className="blockset">
                    {_.map(PIC_LIST2, fig =>
                        (<InTheLabel key={`${fig}`} className="comicComponent" fig={`${fig}`} />)
                    )}
                </div>
            </div>
        );
    }

}
export default AnimationPage;
