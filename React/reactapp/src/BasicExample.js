import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <div className='container'>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        hey there
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         welcome
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default BasicExample;