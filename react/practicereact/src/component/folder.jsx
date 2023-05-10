import React, { useState } from "react";

const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      {data.isNested ? (
        <>
          {" "}
          <span onClick={() => setExpand((prev) => !prev)}>{data.name}</span>
          <div style={{ display: expand ? "block" : "none" }}>
            {data.items.map((e) => {
              return <Folder data={e} />;
            })}
          </div>
        </>
      ) : (
        <span>{data.name}</span>
      )}
    </div>
  );
};

export default Folder;
