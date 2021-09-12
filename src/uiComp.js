import cx from "classnames";
import React from "react";

export function Bit({ isSet }) {
  return (
    <span
      className={cx("box", {
        taken: isSet
      })}
    >
      {isSet ? 1 : 0}
    </span>
  );
}
export const Sign = ({ bits = [] }) => {
  return GenArr(1).map((entry) => {
    return <Bit key={entry} isSet={bits[entry] === 1} />;
  });
};
export const Mantissa = ({ bits = [] }) => {
  return GenArr(52).map((entry) => {
    return (
      <React.Fragment key={entry}>
        <Bit isSet={bits[entry] === 1} hidden={entry === 0} />
        {(entry + 1) % 13 === 0 && <br />}
      </React.Fragment>
    );
  });
};

export const Exponent = ({ bits = [] }) => {
  return GenArr(11).map((entry) => {
    return <Bit key={entry} isSet={bits[entry] === 1} />;
  });
};

function GenArr(number) {
  return Array.from({ length: number }, (_, idx) => idx);
}
