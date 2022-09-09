import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Publications </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Forecasting, Visualization, and Analysis of
              Covid-19 in India using Time-Series Modeling"
              description="Co-Authored a Book Chapter in 'Computational Intelligence and Predictive
              Analysis for Medical Science' published by De Gruyter, Germany"
              ghLink="https://www.degruyter.com/document/doi/10.1515/9783110715279-011/html"
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <h1 className="project-heading">
          <strong className="purple">Certifications </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Redhat Certified System Administrator"
              description=""
              ghLink="https://www.redhat.com/rhtapps/services/certifications/badge/verify/TBZCHMTYYJ56FUIQFT2UKCDU5IAEQU3CUPSQX2KSDXT6RW46LQ3T7ULZ55KZZ56SKO7EQ3ETTLYZQ4U5NQYTCNA62RUWOCM34WWBUYQ="
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
