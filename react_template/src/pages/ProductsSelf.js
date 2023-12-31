import { Component } from "react";
class Products extends Component {


     constructor()
        {
            super();
            this.state={

              name:"",
              age:"",
              email:"",
              password:"",
              gender: '',
              city: '',
              errorMessage: '',
              successMessage: ''
          }
      }
  

      handleChange =(event)=> {

          let fieldsObjects ={};
          fieldsObjects[event.target.getAttribute('name')]= event.target.value;
          this.setState(fieldsObjects);


      }


      saveUser=()=>{
        let options={
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(this.state)
        }
      


      fetch('http://localhost:4000/register',options).then((response)=>{
        this.setState({errorMessage:""});
        response.json().then((result)=>{
            if(result.status==="error"){
                this.setState({
                    errorMessage:result.message
                })
            }

            else{
                this.setState({
                        name: '',
                        age: '',
                        email: '',
                        phone: '',
                        password: '',
                        gender: '',
                        city: '',
                        successMessage:result.message
                })
            }
        })
      })

    }



    render() {
        return (
            <div id="layoutSidenav_content">
            <main>

            <div className="container-fluid px-4">
                    <h1 className="mt-4">Dashboard</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">



                        <table className="table table-bordered table-striped">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>Product 1</td>
                            <td>20</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Product 2</td>
                            <td>20</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Product 3</td>
                            <td>20</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
            </div> 
                <div className="col-md-6 mb-5">
                    <div className="row">
                          <div className="col-md-12 form-group mb-3">
                                <label>Name</label>
                                        
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
                          </div>
                                                
                          <div className="col-md-12 form-group mb-3">
                                    <label>Age</label>
                                            
                                    <input type="text" name="age" value={this.state.age} onChange={this.handleChange} className="form-control" />
                          </div>
    
                          <div className="col-md-12 form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                                        <span className="text-info text-danger">{this.state.errorMessage}</span>
                         </div>

                         <div className="col-md-12 form-group mb-3">
                                        <label>Gender</label>
                             <select className="form-control" name="gender" onChange={this.handleChange}  value={this.state.gender}>

                                <option value="male" >Male</option>
                                <option value="female">Female</option>
                             </select>
                         </div>

                         <div className="col-md-12 form-group mb-3">
                                        <label>Phone</label>
                                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} className="form-control" />
                         </div>

                         <div className="col-md-12 form-group mb-3">
                                        <label>City</label>
                                        <input type="text" name="city" value={this.state.city} onChange={this.handleChange} className="form-control" />
                        </div>

                        <div className="col-md-12 form group mb-3">
                                     <label>Password</label>   
                                  
                                <input type="text" name="password" value={this.state.password} onChange={this.handle.Change} className="form-control"/>
                        </div>   
                        <div className="col-md-12 text-success"> <p>{this.state.successMessage}</p>   </div>

                        <div className="col-md-12">
                            <button className="btn btn-primary" onClick={this.saveUser}>Save User</button>
                        </div>

                     </div>
                    </div>
                  </div>
                </div>
           </main>      
        </div>   

        )
    }
}
export default Products;
