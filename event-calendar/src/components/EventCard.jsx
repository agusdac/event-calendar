import Card from 'react-bootstrap/Card'

const EventCard = ({month, title, description}) => {
  return (
    <Card style={{backgroundColor: '#19647E', minHeight: '15rem', width: 'auto'}}
      className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EventCard
