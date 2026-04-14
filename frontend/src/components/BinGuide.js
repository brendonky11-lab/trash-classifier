import React from 'react';
import './BinGuide.css';

const BinGuide = () => {
    return (
        <div className='bin-guide'>
            <h1>Waste Bin Guide</h1>
            <div className='bins'>
                <div className='bin'>
                    <h2>Recyclable Bin</h2>
                    <ul>
                        <li>Plastic Bottles</li>
                        <li>Glass Jars</li>
                        <li>Aluminum Cans</li>
                        <li>Paper and Cardboard</li>
                    </ul>
                </div>
                <div className='bin'>
                    <h2>Organic Waste Bin</h2>
                    <ul>
                        <li>Food Scraps</li>
                        <li>Yard Waste</li>
                        <li>Soiled Paper</li>
                    </ul>
                </div>
                <div className='bin'>
                    <h2>General Trash Bin</h2>
                    <ul>
                        <li>Non-recyclable Plastics</li>
                        <li>Used Diapers</li>
                        <li>Broken Glass</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BinGuide;