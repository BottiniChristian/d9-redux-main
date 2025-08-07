import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { fetchJobs } from '../redux/actions/jobsActions';
import Job from './Job'; 

const MainSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const { results: jobs, loading, error } = useSelector((state) => state.jobs);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) dispatch(fetchJobs(query));
  };

  return (
    <Container className="py-4">
      <Row>
        <Col xs={12} className="mx-auto my-3">
          <h1 className="display-2 text-center mb-4">Remote Jobs Search</h1>
        </Col>
        <Col xs={12} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="type and press Enter"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(8px)',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                color: '#333',
                marginBottom: '1.5rem',
                maxWidth: '720px',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block'
              }}
            />
          </Form>
        </Col>
        <Col xs={12} className="mx-auto mb-5">
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-danger">Error: {error}</p>}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

