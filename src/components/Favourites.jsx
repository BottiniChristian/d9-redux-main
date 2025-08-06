import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.companies);

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '3rem',
        textAlign: 'center',
      }}
    >
      <h2 style={{ marginBottom: '2rem' }}>Favourite Companies</h2>
      {favourites.length === 0 ? (
        <p>No favourite companies added.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {favourites.map((company) => (
            <li key={company} style={{ marginBottom: '1rem' }}>
              <Link
                to={`/${company}`}
                style={{
                  textDecoration: 'none',
                  color: '#007bff',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                {company}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Favourites;
