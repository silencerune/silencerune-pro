import React from 'react';
import InTheLabel from './InTheLabel/InTheLabel';
import _ from 'lodash';
const PIC_LIST1 = [
    'ajax',
    'Barrage',
    'comic',
    'sheet',
    'webtest',
]
class Webpage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ background: 'black' }}>
                <div className="blockset">
                    {_.map(PIC_LIST1, fig =>
                        (<InTheLabel key={`${fig}`} className="comicComponent" fig={`${fig}`} />)
                    )}
                </div>
            </div>
        );
    }

}
export default Webpage;