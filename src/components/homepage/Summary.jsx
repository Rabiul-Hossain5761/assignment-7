import React from "react";

const Summary = () => {
  return (
    <div className="grid grid-cols-4 text-center font-bold mt-8 w-3/4 mx-auto">
      <div className="text-center">
        <p>
          <span>10</span>
        </p>
        <p>Total Friends</p>
      </div>
      <div>
        <p>
          <span>10</span>
        </p>
        <p>On Track</p>
      </div>
      <div>
        <p>
          <span>10</span>
        </p>
        <p>Need Attention</p>
      </div>
      <div>
        <p>
          <span>10</span>
        </p>
        <p>Interactive This Month</p>
      </div>
    </div>
  );
};

export default Summary;
