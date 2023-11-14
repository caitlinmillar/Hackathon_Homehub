import React from 'react';
import Navbar from '../components/navBar';
import Tabsbar from '../components/tabsBar';
import houseCircle from '../assets/houseCircle.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LandingPage = () => {
    const address = `64 Zoo Lane`
    const mortageBalance = `£100'000`
    const remainingTerm = `1 year 3 months`

    return (
        <div>
            <div className="landingWrapper">
                <Navbar />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p> Your Home at {address}</p>
                </div>
                <div className="imageDiv">
                    <img src={houseCircle} alt="House" className="centered-image" />
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginRight: '20px', textAlign: 'center' }}>
                        <a href="#">Estimated Property Value</a>
                        <div style={{ fontSize: '24px' }}>1000</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <a href="#">Estimated Equity</a>
                        <div style={{ fontSize: '24px' }}>1000</div>
                    </div>
                </div>
                <Tabsbar />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '18rem', margin: '0 10px', border: 'none', backgroundColor: 'rgb(238,246,255)' }}>
                    <Card.Body>
                        <Card.Title>Mortgage Balance</Card.Title>
                        <Card.Text>
                            {mortageBalance}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '0 10px', border: 'none', backgroundColor: 'rgb(238,246,255)' }}>
                    <Card.Body>
                        <Card.Title>Remaining Term</Card.Title>
                        <Card.Text>
                            {remainingTerm}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default LandingPage;
