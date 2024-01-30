import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOTR = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
               Full Truckload / Less Than Truckload
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Our vision is to redefine the future of freight brokerage through innovation, sustainability, and strategic foresight. We are committed to staying ahead of industry trends and providing our clients with forward-thinking solutions that address evolving logistics challenges.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Expedited
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Our extensive network encompasses a wide range of reliable carriers and logistics partners, ensuring seamless and flexible freight solutions across the globe. We leverage our connections to provide the best shipping options for our clients, no matter the size or nature of the cargo.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Hazardous Freight
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>We excel in the art of coordination, meticulously organizing and synchronizing every aspect of the transportation process. From route planning to shipment tracking, our team ensures a smooth, efficient, and timely delivery of goods, prioritizing communication and precision at every step.
</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Refrigerated Freight
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>We excel in the art of coordination, meticulously organizing and synchronizing every aspect of the transportation process. From route planning to shipment tracking, our team ensures a smooth, efficient, and timely delivery of goods, prioritizing communication and precision at every step.
</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOTR

