import React from "react";

function Notification({ geoLocation, errorMsg }) {
  return (
    <>
      <section>
        <h1>
          <p>{geoLocation.latitdue}</p>
          <p>{geoLocation.longitude}</p>
        </h1>
      </section>

      <section>{errorMsg.err === null && <h1>Error Msg</h1>}</section>
    </>
  );
}

export default Notification;
