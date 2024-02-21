"use client";

import { Virtuoso } from "react-virtuoso";

const InfiniteScroll = () => {
  return (
    <>
      <Virtuoso
        style={{ height: "calc(100vh - 50px)", margin: "0px" }}
        useWindowScroll
        totalCount={3000}
        itemContent={(index) => <div>Item {index}</div>}
      />
    </>
  );
};

export default InfiniteScroll;
