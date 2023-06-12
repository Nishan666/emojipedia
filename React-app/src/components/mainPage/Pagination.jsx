import React from "react";

const Pagination = (props)=>{


const goThisPage = (thePage)=>{
    props.setPage(thePage)
    window.scrollTo(0, 0);
}

// its also working but ,problem here is ,it starts from 0
// const numbers = [...Array(props.total + 2)]

const numbers = Array.from({length: props.total}, (_, i) => i + 1)



// console.log(numbers);

    return (<>
    <div className="pagination" style={{textAlign:"center", padding:"1rem" ,display:"grid" , gridTemplateColumns: "5% 90% 5%" , gridGap: "2px"}}>
        
    <button style={props.page === 1 ? {opacity:"0"}:{opacity:"100"} } onClick={()=>goThisPage(props.page-1)}>&laquo;</button>

    <div>{ numbers.map((i) =><button className={props.page === i ? "clickedBTN" : "unClicked"} onClick={()=>goThisPage(i)}>{i}</button>)}</div>
    
    <button style={props.page === props.total ? {opacity:"0"}:{opacity:"100"} }  onClick={()=>goThisPage(props.page+1)}>&raquo;</button>
    
  </div>
  </>)
}

export default Pagination;