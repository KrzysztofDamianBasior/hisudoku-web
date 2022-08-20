import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {};

export default function SudokusScrollList({}: Props) {
  return <div>SudokusScrollList</div>;
}

// <InfiniteScroll
//     dataLength={state.items.length}
//     next={fetchMoreData}
//     hasMore={true / false}
//     loader={<h1>Loading</h1>}
//     endMessage={<h1>End</h1>}
// >
//     state.items.map(    (i,index)=><div key={index}>{i}</div>       )
// </InfiniteScroll>
