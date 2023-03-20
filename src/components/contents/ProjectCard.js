import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "next/image";

function ProjectCard({ project }) {
  return (
    <Col className="p-3 col-xs-12 col-md-6 col-lg-4 d-flex align-items-stretch project-card">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          src={`/img/${project.imgURL}.png`}
          alt="Card image"
          className="project-img"
        />
        <Card.ImgOverlay className="text-light">
          <Card.Body className="project-body">
            <Card.Text>
              {project.type.map((item) => (
                <Image
                  priority
                  title={item.toUpperCase()}
                  src={`/${item}.svg`}
                  height={32}
                  width={32}
                  alt={item}
                  className="m-1"
                />
              ))}
            </Card.Text>
            <Card.Link href={project.github} target="_blank">
              View Github
            </Card.Link>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

export default ProjectCard;
