import React, { Component } from 'react'
import { Card, CardTitle, Button, Col, Row } from "react-materialize";
import { projectItems } from '../InfoService'

export default class Projects extends Component {
    render() {        
        return (
          <div className="Projects">
            <h1 className="Projects-Title">Recent Projects</h1>
            <div className="Projects-List">
              <Row children={2}>
                {projectItems.map((item, index) => {
                  return (
                      // https://materializecss.com/grid.html
                    <Col key={index} s={12} m={4} l={4} xl={4}>
                      <Card
                        header={<CardTitle image={item.imageUrl}/>}
                        title={item.title}
                      >
                        <hr />
                        {item.description}
                        <br />
                        <br />

                        <Button waves="light">
                          <a style={{ color: "white" }} href={item.link}>
                            View{" "}
                          </a>
                        </Button>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>    
          </div>
        )
    }
}