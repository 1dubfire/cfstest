import React, { Component } from "react";

class GoogleMapStyle extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly

      <div className="google-map-style-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.5212614314214!2d-122.3407343!3d37.5898894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9d93c091d25d%3A0x6577774467e2798b!2s533%20Airport%20Blvd%20%23400%2C%20Burlingame%2C%20CA%2094010!5e0!3m2!1sen!2sus!4v1706209025295!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ borderRadius: "10px", position: "relative", border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default GoogleMapStyle;
