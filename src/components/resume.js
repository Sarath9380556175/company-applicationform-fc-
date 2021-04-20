import React from 'react';
import axios from 'axios'
class Resume extends React.Component{
    constructor()
    {
        super();
        this.state={
            resume:null,
            name:undefined,
            details:{}

        }
    }

    uploadresume=()=>{
        const {resume,name}=this.state;
    
        axios({
            url:'https://pure-ocean-78296.herokuapp.com/uploadresume',
            method:'POST',
            headers:{'content-Type':'application/json'},
            data:
            {
                resume:resume,
                name:name
            }

            
        })

        .then(res=>this.setState({details:res.data.uploaddetails}))

        .catch(err=>console.log(err))
        this.props.history.push('/thankyou')
    }




    skr=(event)=>{
        const name=event.target.name;
        const file=event.target.files[0];
        console.log(name);

        console.log(file.name)
        this.setState({[name]:file.name})

    }
    rmr=(event)=>{
const name=event.target.name;
const value=event.target.value;
this.setState({[name]:value})
    }
    render()
    {
        return(
            <div>
            <form className="text-center mt-3" onSubmit={this.uploadresume}>
                <div className="btn-outline-success rounded" style={{display:'inline-block'}}>Name</div><br/>
            
                <input type="text" name="name" required  onChange={this.rmr} className="rounded"/><br/><br/>
                <input type="file" name="resume" onChange={this.skr.bind(this)} required/><br/><br/>
                <button className="btn btn-success btn-sm">submit</button>
            </form>
            </div>
        )
    }
}

export default Resume;
