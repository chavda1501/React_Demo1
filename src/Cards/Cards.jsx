import React, { Component } from 'react'
import Card from './CardUI';

import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';

export default class Cards extends Component {
    render() {
        return (
            <div>
                <div className="container justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={img1} title="Nature1"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img2} title="Nature2"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img3} title="Nature3"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
