import React,{Component} from "react";

class TableHeader extends Component {
    
    render(){
        return (
            <div className="row" id="tableHeader">
                <div className="col">
                    <p>#</p>
                </div>
                <div className="col">
                    <p>Name Surname</p>
                </div>
                <div className="col">
                    <p>Phone Number</p>
                </div>
                <div className="col">
                    <p>Email</p>
                </div>                
                <div className="col">
                    <p>Actions</p>
                </div>
            </div>
        )
    }
}

export default TableHeader;
