import React, { useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
const Home = () => {

  const [pageNo, setPageNo] = useState(0)
  const [allProduct,setallProduct]= useState([]);
  const perpage = 20;
  const pagevisit = pageNo * perpage;
  const data = allProduct.slice(pagevisit, pagevisit + perpage);
  const boxno = Math.ceil(allProduct.length / perpage)
  const pageChange = ({ selected }) => {
    setPageNo(selected)
  }
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        setallProduct(response.data);
        // console.log(response);
    })
}, []);
console.log(allProduct);

  return (

    <>
      <div className="box">
        <div className="container">
          <div className="row">

         
              {data.map((value, ind) => (
                <div className="col-lg-3 col-md-3 col-6 mb-3" key={ind}>
                  <div className="card">
                    <div className="sml mb-2" key={ind}>
                      <img src={value.avatar} alt={value.first_name} />
                      <h1>{value.title.length > 10 ? `${value.title.substring(0, 10)}...` : value.title}</h1>
                      {/* <p>{value.body}</p> */}
                      <p>{value.body.length > 10 ? `${value.body.substring(0, 100)}...` : value.body}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='pagination-container'>
          <ReactPaginate 
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={boxno}
            onPageChange={pageChange}
            containerClassName={"pagination"}
         
            activeClassName={"activebutton"}
          />
          </div>
        
        </div>
        <br /> <br />
      </div>
    </>
  )
}

export default Home;
