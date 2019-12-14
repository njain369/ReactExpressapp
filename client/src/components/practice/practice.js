import React from 'react';


function FormattedDate(props){
    return(<h2>Time is {props.date.toLocaleTimeString()}</h2>);
    
    }
    
class Practice extends React.Component{
constructor(props){
    super(props);
    this.state={date:new Date()}
}


componentDidMount(){
this.timerID=setInterval(
    ()=>this.tick(),
    1000
)
}
componentWillUnmount(){
clearInterval(this.timerID);
}

tick(){
    this.setState({
        date:new Date()
    })
}
render(){
    return (
        <div>
            <h1>
                Cool
            </h1>
    <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
    <FormattedDate date={this.state.date} />
    </div>
    )
    }

}

export default Practice;