import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="py-4">
     <Row>
  <Col xs={12}>
    <div className="mx-auto text-center mb-4" style={{ maxWidth: '600px' }}>
      <h1 className="display-2 mb-4">Remote Jobs Search</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="type and press Enter"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(8px)',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 1rem',
            color: '#333',
            marginBottom: '1.5rem',
          }}
        />
      </Form>
    </div>
  </Col>
    <Col xs={12} className="mx-auto mb-5">
      {jobs.map(jobData => (
        <Job key={jobData._id} data={jobData} />
      ))}
    </Col>
    </Row>
    </Container>
  );
};
export default MainSearch;
