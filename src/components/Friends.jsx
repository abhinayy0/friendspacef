import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getFollowers } from "../api/getPosts";
import { UserContext } from "../context/Context";
import { Follower } from ".";

function Friends(props) {
  const [allFollowers, setAllFollowers] = useState([{}]);

  useEffect(() => {
    let isActive = true;
    const getallFollowers = async () => {
      const allFollowers = await getFollowers();
      console.log(allFollowers);
      if (isActive) {
        setAllFollowers(allFollowers);
      }
    };
    getallFollowers();
  }, []);

  return (
    <div>
      <Container className="justify-content-md-center">
        <Row className="justify-content-md-center">
          <label htmlFor="myEmail">Followers</label>
          {allFollowers.map((follower) => {
            return (
              <div key={follower.id}>
                <Follower follower />
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Friends;
