import React from "react";
import './Style.css'


function Profile() {
    return (
        <>
        <div className="container">
        <div className="row">
            <div className="col-12 p-0">
                <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb py-3 px-3">
                        <li className="breadcrumb-item"><a href="#">Profile</a></li>
                    </ol>
                </nav>
            </div>

            <div className="col-md-5">
                <div className="row">
                    <div className="col-12 profileBox p-0 px-3 py-3 mb-3">
                        <div className="d-flex flex-column align-items-center">
                            <img className="photo"
                                src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                alt=""/>
                            <p className="fw-bold h4 mt-3 text-white">John Doe</p>
                            <p className="text-white">Full Stack Developer</p>
                            <p className="text-white mb-3">joh@email.com</p>

                            <div className="d-flex ">
                                <div className="btn btn-primary follow me-2">Follow</div>
                                <div className="btn btn-outline-primary message">Message</div>
                            </div>
                            <div className="d-flex ">
                                <div className="btn btn-primary follow me-2">Follow</div>
                                <div className="btn btn-outline-primary message">Message</div>
                            </div>
                        </div>
                    </div>
                

                </div>
            </div>

            <div className="col-md-7 ps-md-4">
                <div className="row">
                    <div className="col-12 bg-white px-3 mb-3 pb-3">
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Full Name</p>
                            <p className="py-2 text-muted">Kenneth valdez</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Email</p>
                            <p className="py-2 text-muted">fip@jukmuh.al</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Phone</p>
                            <p className="py-2 text-muted">(239) 816-9029</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Mobile</p>
                            <p className="py-2 text-muted">(320) 380-4539</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="py-2">Address</p>
                            <p className="py-2 text-muted"> Soma,San Francisco,CA</p>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    </div>
       
        </>
    )
}
export default Profile