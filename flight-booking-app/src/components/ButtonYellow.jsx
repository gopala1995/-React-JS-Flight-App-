import React from "react";

export const ButtonYellow = ({ label, extraStyle }) => {
  return (
    <div className={`${extraStyle}`}>
      {/* <a href=""> */}
        <div className="py-2 px-5 bg-yellow-400 text-sm">
          <p className="text-white text-center">{label}</p>
        </div>
      {/* </a> */}
    </div>
  );
};
