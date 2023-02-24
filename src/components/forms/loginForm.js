import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validate() {
        if(email==="admin@gmail.com" && password==="admin") {
            window.location = '/home';
        } else {
            Swal({
                title: "Invalid Credentials",
                text: "Please Try Again",
                dangerMode: true
            });
        }
    }
    
    return(
        <section className="text-center">
        <div className="bg-image" style={{backgroundImage: `url('https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, height: '600px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
        <div className="card mx-4 mx-md-5 shadow-5-strong" style={{marginTop: '-500px', marginBottom: '100px', background: `hsla(0, 0%, 100%, 0.8)`, backdropFilter: `blur(10px)`}}>
            <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4">
                <h2 className="fw-bold mb-5">Sign In</h2>

                    <div className="form-outline mb-4">
                        <input 
                            type="email" 
                            id="form3Example3" 
                            className="form-control"
                            placeholder="example@gmail.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} 
                        />
                        <label className="form-label" for="form3Example3">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input 
                            type="password" 
                            id="form3Example4" 
                            className="form-control"
                            placeholder="password" 
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <label className="form-label" for="form3Example4">Password</label>
                    </div>
                    <Button onClick={validate} variant='success'>
                        Sign In
                    </Button>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default LoginForm;