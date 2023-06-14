import React from "react";

// props -> page(current page no.) , setPage(change page no.) , total(total no. of pages)
const Pagination = (props) => {

  // onclick on any Pagination no.->go to that page
  const goThisPage = (thePage) => {
    props.setPage(thePage)
    window.scrollTo(0, 0);  //scroll to top
  }

  // its also working but ,problem here is ,it starts from 0
  // const numbers = [...Array(props.total + 2)]

  // numbers is an Array -> [1,2,3....total]
  const numbers = Array.from({ length: props.total }, (_, i) => i + 1)

  return (<>
    <div className="pagination" style={{ textAlign: "center", padding: "1rem", display: "grid", gridTemplateColumns: "5% 90% 5%", gridGap: "2px" }}>
      {/* for left arrow button (diappears when page is 1) */}
      <button style={props.page === 1 ? { opacity: "0" } : { opacity: "100" }} onClick={() => goThisPage(props.page - 1)}>&laquo;</button>

      {/* pagination */}
      <div>{numbers.map((i) => <button className={props.page === i ? "clickedBTN" : "unClicked"} onClick={() => goThisPage(i)}>{i}</button>)}</div>

      {/* for right arrow button (diappears when it is last page ) */}
      <button style={props.page === props.total ? { opacity: "0" } : { opacity: "100" }} onClick={() => goThisPage(props.page + 1)}>&raquo;</button>
    </div>
  </>)
}

export default Pagination;