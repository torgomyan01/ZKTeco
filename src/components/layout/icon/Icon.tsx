import React from "react";

import "./style.scss";
import User from "@components/layout/icon/user";
import Touch from "@components/layout/icon/touch";
import Arm from "@components/layout/icon/arm";
import Card from "@components/layout/icon/card";
import Tem from "@components/layout/icon/tem";
import Radio from "@components/layout/icon/radio";
import WiFi from "@components/layout/icon/wify";

function Icons({ name }: { name: string }) {
  if (name === "user") {
    return <User />;
  }
  if (name === "touch") {
    return <Touch />;
  }
  if (name === "arm") {
    return <Arm />;
  }
  if (name === "card") {
    return <Card />;
  }
  if (name === "tem") {
    return <Tem />;
  }
  if (name === "radio") {
    return <Radio />;
  }
  if (name === "wify") {
    return <WiFi />;
  }
}

function Icon({ name }: { name: string }) {
  return (
    <div className="header-animation-icon">
      <Icons name={name} />
    </div>
  );
}

export default Icon;
