import React, {useEffect, useState} from "react";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

import classes from "./TrafficLight.module.css";
import traffic from "../../store/TrafficStore";
import { observer } from "mobx-react-lite";

const TrafficLight = observer(() => {
  useEffect(() => {
    const timer =
      traffic.counter > 0 && setInterval(() => traffic.decrement(), 1000);
    return () => clearInterval(timer);
  }, [traffic.counter]);

  useEffect(() => {
    traffic.addSelector();
  }, []);

  return (
    <div className={classes.main_container}>
      <div className={classes.traffic_light_card}>
        <div className={classes.color_indicator}>
          {traffic.counter >= 5 ? <div className={classes.red}> </div> : null}
          {traffic.counter >= 1 && traffic.counter < 5 ? (
            <div className={classes.yellow}> </div>
          ) : null}
          {traffic.counter === 0 ? (
            <div className={classes.green}> </div>
          ) : null}
        </div>
        <div className={classes.direction_indicator}>
          {traffic.direction === "forward" ? (
            <ArrowUpOutlined style={{ fontSize: "100px", margin: "10px" }} />
          ) : null}
          {traffic.direction === "right" ? (
            <ArrowRightOutlined style={{ fontSize: "100px", margin: "10px" }} />
          ) : null}
          {traffic.direction === "left" ? (
            <ArrowLeftOutlined style={{ fontSize: "100px", margin: "10px" }} />
          ) : null}
        </div>
        <div className={classes.time_indicator}>
          Оставшееся время: {traffic.counter}
        </div>
      </div>
    </div>
  );
});

export default TrafficLight;
