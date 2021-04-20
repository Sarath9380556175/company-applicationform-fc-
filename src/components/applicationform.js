import React from 'react';
import '../styles/appform.css'
import axios from 'axios'
class Appform extends React.Component{
    constructor()
    {
        super();
        this.state={
            universityregisterednumber:undefined,
            name:undefined,
            gender:undefined,
            email:undefined,
            emails:undefined,
            mobilenumber:undefined,
            dob:undefined,
            course:undefined,
            yearofcompletion:undefined,
            ugpercentage:undefined,
            ramanareddy:undefined,
            Diplomabranch:undefined,
            Diplomapercentage:undefined,
            pucpercentage:undefined,
            tenthpercentage:undefined,
            collegename:undefined,
            city:undefined,
            nativeplace:undefined,
            uname:undefined,
            file:undefined,
            gopal:undefined,
            fileuploaddetails:{},
            jobseekersdetails:{}
        }
    }

    handlesubmit=()=>{

        const {universityregisterednumber,name,gender,email,emails,mobilenumber,dob,course,yearofcompletion,ugpercentage,
        ramanareddy,Diplomabranch,Diplomapercentage,pucpercentage,tenthpercentage,collegename,city,nativeplace,uname,file}=this.state;
axios({
    url:'https://pure-ocean-78296.herokuapp.com/jobseekers',
    method:'POST',
    headers:{'content-Type':'application/json'},
    data:{
        usn:universityregisterednumber,
        name:name,
        gender:gender,
        email:email,
        alternateemail:emails,
        mobilenumber:mobilenumber,
    dateofbirth:dob,
    course:course,
    YOP:yearofcompletion,
    UGMarks:ugpercentage,
    diploma:ramanareddy,
    diplomabranch:Diplomabranch,
    diplomapercentage:Diplomapercentage,
    twelvethpercentage:pucpercentage,
tenthpercentage:tenthpercentage,
nameofthecollege:collegename,
city:city,
state:nativeplace,
universityname:uname,
resume:file


    }
    
})

    .then(res=>this.setState({jobseekersdetails:res.data.Jobseekersdetails}))   
    .catch(err=>console.log(err)) 

    this.props.history.push('/thankyou')
    
    }

    usnnumber=(event)=>{
        const {file,gopal}=this.state;
        console.log(file)
        console.log(gopal)

    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
    this.setState({[name]:value})
    }

    name=(event)=>{
        const name=event.target.name;
        console.log(name)
        const value=event.target.value;
        console.log(value)
        this.setState({[name]:value})
        }
        gender=(gendervalue)=>{
            console.log(gendervalue)
            this.setState({gender:gendervalue})
            }

            email=(event)=>{
                const name=event.target.name;
                console.log(name)
                const value=event.target.value;
                console.log(value)
                this.setState({[name]:value})
                }

                emails=(event)=>{
                    const name=event.target.name;
                    console.log(name)
                    const value=event.target.value;
                    console.log(value)
                    this.setState({[name]:value})
                    }

                    mobilenumber=(event)=>{
                        const name=event.target.name;
                        console.log(name)
                        const value=event.target.value;
                        console.log(value)
                        this.setState({[name]:value})
                        }

                        dob=(event)=>{
                            const name=event.target.name;
                            console.log(name)
                            const value=event.target.value;
                            console.log(value)
                            this.setState({[name]:value})
                            }


                            course=(coursename)=>{
                                console.log(coursename)
                                this.setState({course:coursename})
                                }


                                yoc=(yoc)=>{
                                    console.log(yoc)
                                    this.setState({yearofcompletion:yoc})
                                    }

                                   

        
 ugmarks=(event)=>{
    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
 this.setState({[name]:value})
}


dropbox=(event)=>{
  
   
    const value=event.target.value;
    console.log(value)
 this.setState({ramanareddy:value})
}


branch=(event)=>{
    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
 this.setState({[name]:value})
}

Diplomapercentage=(event)=>{
    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
 this.setState({[name]:value})
}

pucpercentage=(event)=>{
    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
 this.setState({[name]:value})
}

tenthpercentage=(event)=>{
    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
 this.setState({[name]:value})
}

collegename=(event)=>{
    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
 this.setState({[name]:value})
}

city=(event)=>{
    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
 this.setState({[name]:value})
}

nativeplace=(event)=>{
    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
 this.setState({[name]:value})
}

uname=(event)=>{
    const name=event.target.name;
    console.log(name)
    const value=event.target.value;
    console.log(value)
 this.setState({[name]:value})
}

resumeuploading=(event)=>{
   
    const name=event.target.name;

    console.log(name)
    const files=event.target.files[0];
    console.log(files.name)
     this.setState({[name]:files.name,gopal:files})

}
resume=()=>{
    this.props.history.push('/resume')
}

    render()
    {
        return(
           <div>
              
           <form className="text-center skr" style={{backgroundImage:'url(Images/seven.jpg)'}}  onSubmit={this.handlesubmit}>
                <div>
                    <br/>
                <div onClick={this.resume} className="btn-outline-secondary rounded" style={{display:'inline-block',fontSize:'20px'}}>Resume</div><br/>
           <div className="mt-3 tkr" style={{textDecoration:'underline'}}>Application Form</div>
          
           <br/>
           <div style={{color:'black',fontWeight:'bold',fontFamily:'serif'}} className="text-center">University Number</div>
        
           <input type="text" name="universityregisterednumber" style={{width:'10em'}} className="rounded ukp" onChange={this.usnnumber} required/><br/><br/>
           <div style={{color:'black',fontWeight:'bold',fontFamily:'serif'}} className="text-center">Name</div>
        
           <i className="fas fa-user"  style={{fontSize:'30px'}}></i>&nbsp;<input type="text" name="name" style={{width:'15em'}} required className="rounded ukp" onChange={this.name}/><br/><br/>
           
            <div style={{textDecoration:'underline',color:'black',fontFamily:'serif'}}>Gender</div>
           <i className="fas fa-male" style={{fontSize:'30px'}}></i>&nbsp;<input type="radio" name="gender" required  onChange={()=>this.gender("male")}/><span className="rmr">male</span>&nbsp;&nbsp;
           <i className="fas fa-female" style={{fontSize:'30px'}}></i>&nbsp;<input type="radio" name="gender" required onChange={()=>this.gender("female")}/><span className="rmr">female</span>
           <br/><br/>
           <div style={{color:'black',fontWeight:'bold',fontFamily:'serif'}} className="text-center">Email</div>
        
          <i className="fas fa-envelope"  style={{fontSize:'30px'}}></i>&nbsp;<input type="email" name="email" required style={{width:'15em'}} className="rounded ukp" onChange={this.email}/>
           <br/><br/>
           <div style={{color:'black',fontWeight:'bold',fontFamily:'serif'}} className="text-center">Alternate Email</div>
        
           <i className="fas fa-envelope"  style={{fontSize:'30px'}}></i>&nbsp; <input type="email" name="emails" required style={{width:'15em'}} className="rounded ukp" onChange={this.emails}/>
           <br/>
           <br/>
           <div style={{color:'black',fontWeight:'bold',fontFamily:'serif'}} className="text-center">Mobile Number</div>
        
           <input type="tel" maxLength="10" required style={{width:'10em'}} name="mobilenumber" className="rounded ukp"  onChange={this.mobilenumber}/>
           <br/>
        <span className="rmr">Ex:9000000000</span>
           <br/>
           <br/>
           <div style={{color:'black'}}>D-O-B:</div>
           <input type="date" name="dob" required className="rounded ukp" onChange={this.dob}/>
    <br/>

    <br/>

    <div className="akr" style={{textDecoration:'underline'}}>Degree & Course&nbsp;<span className="gopal">*</span></div>
    <input type="radio" name="course" required onChange={()=>this.course("B.E/B.Tech")}/><span className="rmr">&nbsp;&nbsp;B.E / B.Tech (CSE, IT, ECE, EEE, E&I & MECH)</span>&nbsp;&nbsp;<br/>
    <br/>
           <input type="radio" name="course" required onChange={()=>this.course("M.E/M.Tech")}/>&nbsp;&nbsp;<span className="rmr">M.E / M.Tech (CSE, IT, ECE, EEE, E&I & MECH)</span>

           <br/>
           <br/>
           <div className="akr" style={{textDecoration:'underline'}}>Year of Completion&nbsp;<span className="gopal">*</span>
</div>

<input type="radio" name="completion" required onChange={()=>this.yoc('2019')}/>&nbsp;<span className="rmr">2019</span><br/><br/>
           <input type="radio" name="completion" required onChange={()=>this.yoc('2020')}/>&nbsp;<span className="rmr">2020</span>
           <br/>
           <div style={{color:'orangered'}}>Note: (Only for 2020, 2019 Batches)&nbsp;<span className="gopal">*</span></div>
           <br/>
        
           <br/>
           <div className="akr" style={{textDecoration:'underline'}}>UG % of Marks&nbsp;<span className="gopal">*</span></div>
           <input type="text" name="ugpercentage" required style={{width:'15em'}} className="rounded ukp" onChange={this.ugmarks}/><br/>
           <div className="akr">Please enter a value between 50 and 100.</div>
           <br/>
           <div className="akr" style={{textDecoration:'underline'}}>Diploma&nbsp;<span className="gopal">*</span></div>
           <select style={{width:'10em',paddingLeft:'20px'}} className="rounded ukp" onChange={this.dropbox}>
               <option defaultValue>select an option</option>
               <option name="option">yes</option>
               <option name="option">no</option>
           </select>
           <br/>
           <div className="akr" style={{textDecoration:'underline'}}>Diploma Branch</div>
           <input type="text" name="Diplomabranch"  style={{width:'15em'}} className="rounded ukp" onChange={this.branch}/><br/>
           <div className="akr" style={{textDecoration:'underline'}}>Diploma % of Marks</div>
           <input type="text" name="Diplomapercentage"  style={{width:'15em'}} className="rounded ukp" onChange={this.Diplomapercentage}/><br/>
           <div className="tkr">Please enter a value between 50 and 100.</div>
           <br/>
           <div className="akr" style={{textDecoration:'underline'}}>12th % of Marks&nbsp;<span className="gopal">*</span></div>
           <input type="text" name="pucpercentage"  style={{width:'15em'}} className="rounded ukp" onChange={this.pucpercentage}/><br/>
           <div className="tkr">Please enter a value between 50 and 100.</div>
           <div className="akr" style={{textDecoration:'underline'}}>10th % of Marks&nbsp;<span className="gopal">*</span></div>
           <input type="text" name="tenthpercentage" required style={{width:'15em'}} className="rounded ukp" onChange={this.tenthpercentage}/><br/>
           <div className="tkr">Please enter a value between 50 and 100.</div>
           <br/>
           <div className="akr" style={{textDecoration:'underline'}}>Name of the College Studied&nbsp;<span className="gopal">*</span></div>
           <input type="text" name="collegename" required style={{width:'15em'}} className="rounded ukp" onChange={this.collegename}/><br/>
           <br/>
           <div className="akr" style={{textDecoration:'underline'}}>City&nbsp;<span className="gopal">*</span></div>
           <input type="text" name="city" required style={{width:'15em'}} className="rounded ukp" onChange={this.city}/>
           <br/><br/>
           <div className="akr" style={{textDecoration:'underline'}}>State&nbsp;<span className="gopal">*</span></div>
           <input type="text" name="nativeplace" required style={{width:'15em'}} className="rounded ukp" onChange={this.nativeplace}/>
           <br/><br/>
           <div className="akr" style={{textDecoration:'underline'}}>University Name&nbsp;<span className="gopal">*</span></div>
           <input type="text" name="uname" required style={{width:'15em'}} className="rounded ukp" onChange={this.uname}/>
           <br/><br/>
           <input type="file" required className="rounded" name="file" onChange={this.resumeuploading}/><br/>
           <br/>
           <button className="btn btn-success btn-sm">SUBMIT</button>
           </div>
           </form>
           
            </div>
        )
    }
    
}


export default Appform;
