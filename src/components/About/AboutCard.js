import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi Everyone, I am <span className="purple">Sourabh Burnwal </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br />Currently working as MLOps Engineer at Vimaan Robotics.
            <br />
            <br /> */}
            <ul>
              <li>
                <p style={{textAlign: "left"}}>
                  <b className="purple"> MLOps Engineer </b>
                  <span style={{float:"right"}}>
                    <i>
                      June 2022-Present
                    </i>
                  </span>
                  {/* <p style={{textAlign: "right" }}>June 2022 - Present</p> */}
                </p>
                <i>
                <p style={{color: "Pink"}}>Vimaan Robotics</p>
                </i>
                <ul>
                  <br />
                  <li>
                    Developing a custom Data Versioning tool for the project
                  </li>
                  <br />
                  <li>
                    Working on the implementation of Continuous Training pipeline which spans across all enterprise products
                  </li>
                </ul>
              </li>
              <br />
              <br />
              <li>
              <p style={{textAlign: "left"}}>
                  <b className="purple"> Director of Infrastructure </b>
                  <span style={{float:"right"}}>
                    <i>
                      Jan 2022-May 2022
                    </i>
                  </span>
                  {/* <p style={{textAlign: "right" }}>June 2022 - Present</p> */}
                </p>
                <i>
                <p style={{color: "Pink"}}>SkyLark Labs</p>
                </i>
                <ul>
                <br />
                  <li>
                  Led the foundation of MLOps in the organisation, was leading DevOps and MLOps
teams of 4
                  </li>
                  <br />
                  <li>
                  Designed and successfully implemented a new improved and lightweight Inference Server
architecture for on-premise local deployments
                  </li>
                  <br />
                  <li>
                  Indulged in interdisciplinary meetings including Full Stack, Machine Learning, Business and
Sales teams to understand the complete product lifecycle and market compatibility
                  </li>
                  <br />
                  <li>
                  Regular communication with Business team to explain technicality of the products and sales
team analysing cost effectiveness
                  </li>
                </ul>
              </li>
              <br />
              <br />
              <li>
              <p style={{textAlign: "left"}}>
                  <b className="purple"> MLOps Engineer </b>
                  <span style={{float:"right"}}>
                    <i>
                      June 2021-Dec 2021
                    </i>
                  </span>
                  {/* <p style={{textAlign: "right" }}>June 2022 - Present</p> */}
                </p>
                <i>
                <p style={{color: "Pink"}}>SkyLark Labs</p>
                </i>
                <ul>
                <br />
                  <li>
                  Worked with Nvidia Triton Inference Server to develop the inference server for all the
products
                  </li>
                  <br />
                  <li>
                  Planned and successfully implemented inference server infrastructure for ML models with
fail-safe and no down-time using DevOps tools like Docker, and Kubernetes to orchestrate the
inference server
                  </li>
                  <br />
                  <li>
                  Developed CI/CD pipelines using Jenkins, implementing Infrastructure as Code using
Terraform for AWS
                  </li>
                </ul>
              </li>
              <br />
              <br />
              <li>
              <p style={{textAlign: "left"}}>
                  <b className="purple"> Computer Vision Intern </b>
                  <span style={{float:"right"}}>
                    <i>
                      Jan 2021-May 2021
                    </i>
                  </span>
                  {/* <p style={{textAlign: "right" }}>June 2022 - Present</p> */}
                </p>
                <i>
                <p style={{color: "Pink"}}>TakeLeap India</p>
                </i>
                <ul>
                <br />
                  <li>
                  Applied various image processing techniques to increase the detection accuracy while
making the algorithm more robust
                  </li>
                  <br />
                  <li>
                  Developed a multi-object tracker for counting multiple assets per frame while reducing the
number of false detections
                  </li>
                  <br />
                  <li>
                  Deployed the product on AWS using Docker, Kubernetes, and Terraform ensuring
Load-Balancing, Auto-Scaling, and Reliability for testing
                  </li>
                  <br />
                  <li>
                  Developed multiple POCs and working prototypes for the team
                  </li>
                </ul>
              </li>
            </ul>
            <br />
            <br />
            <br />
            Apart from work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching content on Finance
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
