
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import EventCard from './components/EventCard'
import { cards } from './utils/cards'

function App() {

  return (
    <div className="App">
      <Container fluid style={{padding: 20, margin: "auto", width: '90%'}}>
        <Row>
          <Col className="mb-3">
            <h1 className="text-center">Calendario de Eventos 2022 - 2023</h1>
          </Col>
        </Row>
        <Row>
          {cards.map(card => (
            <Col sm="6" md="4" lg="3" key={card.month}>
              <EventCard title={card.title} description={card.description}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default App
