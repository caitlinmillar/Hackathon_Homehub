import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import ModalEl from '../components/modal';
import Modal from 'react-bootstrap/Modal';

function Crisis() {

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <Card style={{ width: '80%', border: 'none', color: 'black' }}>
                <Card.Body className='crisisWrapper'>
                    <Card.Title>Save on your mortgage</Card.Title>
                    <Card.Subtitle>and help someone in need</Card.Subtitle>
                    <Card.Text>
                        Make use of your spare room to reduce your monthly mortgage costs and partner with us to help end homelessness.
                    </Card.Text>
                    <Row>
                        <Col>
                            <ModalEl />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Crisis;