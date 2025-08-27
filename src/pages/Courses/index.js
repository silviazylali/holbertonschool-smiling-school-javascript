import { Container, Row, Col, Form, Card } from "react-bootstrap";
import "./index.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import videos from "../../mockdata/videos.js";
import { IoStarSharp } from "react-icons/io5";

const Courses = () => {
  return (
    <>
      <Navigation />
      <div className="form-container">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
      <Container>
        <Row>
          {videos.map((video, index) => {
            return (
              <Col md={3} key={index}>
                <Card className="custom-card">
                  <Card.Img
                    variant="top"
                    src={`${video.video_poster}`}
                    className="custom-image"
                  />
                  <Card.Body>
                    <Card.Title>{video.user_quote}</Card.Title>
                    <Card.Text>{video.paragraph}</Card.Text>
                    <div className="user-data">
                      <Card.Img
                        variant="top"
                        src={`${video.user_image}`}
                        className="user-image"
                      />
                      <span>{video.username}</span>
                    </div>
                    {video.rating.map((el, i) => {
                      return <IoStarSharp className="star-container" key={i} />;
                    })}
                    <h3 className="video-minutes">{video.minutes}</h3>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      </div>
      <Footer />
    </>
    
  )
}

export default Courses;