import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [years, setyears] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    axios.get('https://api.spaceXdata.com/v3/launches?limit=12')
      .then(res => {
        if (res.status === 200) {
          setData(res.data)
        }
      })
    
  },[]);

  useEffect(() => {
    sortData();
  });



  const sortData = () => {
    const yearData = data.map(item => {
      return item.launch_year
    })
    
    const map = [];
    for (let value of yearData) {
      if (map.indexOf(value) === -1) {
        map.push(value);
      }
    }

    setyears(map);
    
  }

  // const onYear = (year) =>{
  
  //   axios.get(`https://api.spaceXdata.com/v3/launches?limit=10&launch_success=true&land_success=true&launch_year=${year}`)
  //   .then(res => {
  //     if (res.status === 200) {
  //       setResult(res.data)
  //     }
  //   })
  // }
  
  return (
    <section className="shop-content_wrapper pb-55">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 space-title">
            <h4>SpaceX Launch Programs</h4>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 filter-leftside mb-20">
            <div className="filter-title mt-2">
              <h5>Filter</h5>
            </div>
            <div className="text-center">
              <p>Launch Year</p>
            </div>
            <div className="year-box clearfix mt-2">
              {years.map(even => {
                return (
                  <div className="pull-left ml-3 mt-2">
                    <button className="btn btn-success btn-sm">{even}</button>
                  </div>
                )
              })}
              
            </div>
            <div className="text-center mt-4">
						<p>Successful Launch </p>
					</div>
					<div className="year-box clearfix mt-2">
						<div className="pull-left">
							<button className="btn btn-success btn-sm">True</button>
						</div>
						<div className="pull-right">
							<button className="btn btn-success btn-sm">False</button>
						</div>
					</div>
					<div className="text-center mt-4">
						<p>Successful Landing </p>
					</div>
					<div className="year-box clearfix mt-2 mb-50">
						<div className="pull-left">
							<button className="btn btn-success btn-sm">True</button>
						</div>
						<div className="pull-right">
							<button className="btn btn-success btn-sm">False</button>
						</div>
					</div>
          </div>
          
          <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
            <div className="row">
              {data.map(item => {

                return (
                  <div className="col-lg-3 col-md-4 mb-20">
                    <div className="single-product">
                      <div className="product-img">
                        <img src={item.links.mission_patch_small} />
                      </div>
                      <div className="product-content mt-2">
                        <p className="text-blue1">{`${item.mission_name} #${item.flight_number}`}</p>
                        <p className="mt-3"><strong>Mission Ids: </strong></p>
                        <p className="mt-2"><i className="fa fa-star"></i> <span className="text-blue">{item.mission_id == '' ? 'Not Available' : item.mission_id}</span></p>
                        <p className="mt-2"><strong>Launch Year :</strong> <span className="text-blue">{item.launch_year}</span> </p>
                        <p className="mt-2"><strong>Successful Launch :</strong> <span className="text-blue">{item.launch_success === false ? 'false' : 'true'}</span></p>
                        <p className="mt-2"><strong>Successful Landing :</strong> <span className="text-blue">Lorem </span></p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
