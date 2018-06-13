import React from 'react'

class  SearchBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {searchText:"",
            placeHolder:"Tapez votre film...",
            intervalBeforeRequest:1000,
            lockRequest:false
        }
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-8 input-group">
                   <input className="form-control input-lg" type="text" onKeyUp={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>GO</button>
                    </span>
                </div>
            </div>
        )
    }

    handleChange(event){
        this.setState({searchText:event.target.value})
        if(!this.state.lockRequest){
            this.setState({lockRequest:true})
            setTimeout(function(){this.search()}.bind(this), this.state.intervalBeforeRequest)
        }
    }

    handleOnClick(event){
        this.search();
    }

    search(){
        this.props.callback(this.state.searchText)
        this.setState({lockRequest:false})    
    }
}



export default SearchBar
