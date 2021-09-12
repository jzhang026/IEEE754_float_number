import React from "react";

export default function useBits(value) {
  const bitsArray = [];
  const [bytesRef, bitsInMemory] = React.useMemo(createBuffer, []);
  bitsInMemory[0] = value;
  for (let i = 0; i < 8; i++) {
    let byte = bytesRef[i];
    for (let j = 0; j < 8; j++) {
      bitsArray.unshift(byte & 1);
      byte = byte >> 1;
    }
  }
  return bitsArray;
}

function createBuffer() {
  const bytesRef = new Uint8Array(8);
  const bitsInMemory = new Float64Array(bytesRef.buffer);
  return [bytesRef, bitsInMemory];
}
