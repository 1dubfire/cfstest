import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionFAQ = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`}>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
               How to Join the CFS Carrier Network
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <h5>Requirements To Haul for CFS</h5><br></br>
    <ul>
      <li><b>Valid MC or US DOT number</b></li>
        <ul>
            <li>
            Safety Rating must be Satisfactory, Conditional or None.
            </li>
            <li>
            Authority active for a minimum of 30 days.
            </li>
        </ul>
        <br></br>
        <li><b>Active Insurance Policy</b></li>
        <ul>
            <li>
            Minimum $1 million auto liability insurance.
            </li>
            <li>
            Minimum $100,000 cargo insurance policy.
            </li>
            <li>
            Reefer Breakdown on insurance certificate (if applicable)
            </li>
        </ul>
        <br></br>
      <li><strong>Complete Online Carrier Profile & Contract</strong></li>
    </ul>
    <p>
    If you meet the requirements and are ready to begin the registration process, click 
    <strong> <u><a href="www.capitalfreightcarriers.com">here</a></u></strong> to start.
</p>
    
    
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Load Assistance
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><h5>Having trouble with a shipment?</h5>

                    <p><br></br>Contact your Account Executive using our office line at 650-445-2624 and dial the extension found on the upper right corner of your rate confirmation. If you do not have an extension or are unable to reach them, please dial extension "1" to reach our Operations team.</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
               Payment
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <h5>Need help getting paid on a shipment?</h5><br></br>
    <ul>
      <li><b>Documents that must be submitted</b></li>
        <ul>
            <li>
            A Capital Freight Invoice or Rate Confirmation
            </li>
            <li>
            Signed Bill of Lading (BOL) / Proof of Delivery (POD)
            </li>
            <li>
            Lumper receipts, scale tickets, or any other receipts requirig reimbursement (if applicable)
            </li>
            <li>
            Your company's invoice
            </li>
        </ul>
        <br></br>
        <li><b>Where to send the documents</b></li>
        <ul>
            <li>
            Once you have gathered all the documents, you can send them in pdf
             format to: accounting@capitalfreight.net. 
             Have the load number in the subject line and attach all
             required documents. 
            </li>
            <li>
            By default, we will send a check to 
             your business address within 30 days of receiving your load documents.
             If you prefer ACH, please notate that in your email so that our accounting
             department can make the appropriate changes to your account.
            </li>
            <li>
            We offer quickpay options which can be found in the next section below.
            </li>
            <li>
            If you have further questions regarding payments, please contact
            accounts payable via email at accounting@capitalfreight.net or by 
            phone at 650-445-2624 (extension 2).
            </li>
        </ul>
        <br></br>
        <ul>
        </ul>
        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
               Quickpay
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    <h5>Need to get paid faster?</h5><br></br>
                    <p>We've got you covered with our quickpay options below:</p>
    <ul>
            <li>
            Same Day Quickpay: 5%
            </li>
            <li>
            3 Day Quickpay: 2.5%
            </li>
            </ul>
<p>
            Want to opt in for quickpay? Please contact
            accounts payable via email at accounting@capitalfreight.net or by 
            phone at 650-445-2624 (extension 2).
            </p>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Claims
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body><h5>Who To Contact Regarding Claims/Losses?</h5>
                    
                    <p><br></br>In the event of an active or potential claim, immediately contact our Claims Department at 650-445-2624 and hit option 3</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    Fraud/Identity Theft
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body><h5>Who To Contact Regarding Identity Theft/Fraud Incidents?</h5>
                    
                    <p><br></br>If your company has been targeted in an identity theft and/or fraud case, please immediately contact our Operations Department at 650-445-2624 and press option 1.</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>

        
    )
}
export default AccordionFAQ

