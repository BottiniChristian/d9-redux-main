import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite, removeFavourite } from '../redux/favouritesSlice'
import { Card, Button } from 'react-bootstrap'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favourites.companies)


  if (!data || !data.company_name || !data.title) return null

  const isFavourite = favourites.includes(data.company_name)

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(data.company_name))
    } else {
      dispatch(addFavourite(data.company_name))
    }
  }

  return (
    <Card className="mb-4 shadow-sm border-0 rounded-3"
    style={{ backgroundColor: 'rgba(200, 210, 220, 0.5)', backdropFilter: 'blur(8px)' }}>
      <Card.Body>
        <Card.Title>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.title}</Card.Subtitle>
        <Card.Text>
          {data.category} - {data.job_type}
        </Card.Text>
        <Button
          variant={isFavourite ? 'danger' : 'outline-success'}
          onClick={toggleFavourite}
        >
          {isFavourite ? '★ Rimuovi dai preferiti' : '☆ Aggiungi ai preferiti'}
        </Button>
      </Card.Body>
    </Card>
  )
}
export default Job
