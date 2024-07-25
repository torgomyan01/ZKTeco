import "./Investment.scss";
import Image from "next/image";

function Investment() {
  return (
    <div className="investment">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            src="/images/ultima/Investment-logo.svg"
            alt="public/images/ultima/Investment-logo.svg"
            height={80}
            width={80}
          />
        </div>

        <h2 className="investment-title">High Return on Investment</h2>
        <div className="investment-description">
          Partners can choose to develop their own Time Clock application with
          the Linux or Android platform, or can license ZKTeco’s TimeTrack
          Android Application Ultima scales to virtually any environment and
          application.
        </div>
      </div>
    </div>
  );
}

export default Investment;
