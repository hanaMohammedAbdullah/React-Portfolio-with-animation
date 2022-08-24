import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const Skills = () => {
  return (
    <section className='skill' id='skill'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                exercitationem dignissimos quidem commodi tempore quos nobis
                deserunt tenetur fugiat dolores porro, omnis quasi explicabo in
                quia eligendi incidunt tempora repellendus!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'>
                <div className='item'>
                <img src={meter1} alt='Image' />
                  <h5>Web design</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='Image' />
                  <h5>Web deveoper</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Image' />
                  <h5>Ui / ux design</h5>
                </div>
                <div className='item'>
                  <img src={meter3}alt='Image' />
                  <h5> creating brand</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Image' />
                  <h5>Vedio editor</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='Image' />
                  <h5>Data scince</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="colorSharp" className="background-image-left" />
    </section>
  );
};
