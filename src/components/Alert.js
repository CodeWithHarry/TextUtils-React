import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {props.alert.type.charAt(0).toUpperCase() +
              props.alert.type.slice(1)}
          </strong>
          {": "} {props.alert.msg}
        </div>
      )}
    </div>
  );
}
