import React from "react";
import { Mantissa, Exponent, Sign } from "./uiComp";
import useBits from "./useBits";
import "./styles.css";

export default function App() {
  const [value, setValue] = React.useState(0.1);
  const bits = useBits(value);

  const sign = bits.slice(0, 1);
  const exponent = bits.slice(1, 12);
  const mantissa = bits.slice(12);

  return (
    <div className="App">
      <div className="entername">
        <label htmlFor="user">
          Enter a decimal number to be converted to binary bits
        </label>
        <input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
      <h4>IEEE754 Double precision 64-bit</h4>
      <p>
        Implementation based on{" "}
        <a href="https://en.wikipedia.org/wiki/IEEE_754">IEEE754</a>
      </p>

      <>
        <p className="result-title">
          Decimal number <span style={{ color: "blue" }}>{value || 0}</span> is
          converted to:{" "}
        </p>
        <p className="result-string">
          {sign.join("")} - {exponent.join("")} - {mantissa.join("")}
        </p>
      </>

      <div className="container">
        <div className="sign">
          <p className="title">Sign:</p>
          <Sign bits={sign} />
        </div>
        <div className="exponent">
          <p className="exponent">Exponent:</p>
          <Exponent bits={exponent} />
        </div>
        <div className="mantissa">
          <p className="Mantissa">Mantissa:</p>
          <Mantissa bits={mantissa} />
          {/* <p className="tip">* bit bordered in Blue color is hidden bit</p> */}
        </div>
      </div>
    </div>
  );
}
