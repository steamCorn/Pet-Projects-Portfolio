import React from "react";
import ColorFile from "./ColorFile";
import SocialFollow from "../components/SocialFollow";

class QuotesBlock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quotes: [],
            quoteShow: {},
            color: ''
        }
        this.selectRandomQuote = this.selectRandomQuote.bind(this);
        this.changeQuote = this.changeQuote.bind(this);
    }
    componentDidMount(){
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then( data => data.json())
            .then(data => this.setState({quotes: data.quotes}, ()=>{
                this.setState({
                    quoteShow: this.selectRandomQuote(),
                    color: this.selectRandomColor() 
                });
            }));
    }
    selectRandomQuote(){
        return  this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)] 
    }
    selectRandomColor(){
        return ColorFile[Math.floor(Math.random()* ColorFile.length)]
    }
    changeQuote(){
        this.setState({
            quoteShow: this.selectRandomQuote(),
            color: this.selectRandomColor()
        });
    }
    render(){
        const stylesObj = {
            background : this.state.color,
            color: this.state.color,
            transition: "all .9s ease"
        }
        return (
            <div className="pageQuote" style={stylesObj}>
                <div id="quote-box">
                    <div className="titel">Start your day with new quote:</div>
                    <div className="context">
                        <div id="text" >{this.state.quoteShow.quote}</div>
                        <div id="author">{this.state.quoteShow.author}</div>
                    </div>  
                    <div className="buttons-quote" >

                        <SocialFollow color = {this.state.color}/>

                        <button id="new-quote" className="button"
                        onClick={this.changeQuote} 
                        style={{background : this.state.color}}>Next Quote
                        </button>
                    </div>
                </div>
                <fotter>
                    <div className="footer">by <a href="https://www.linkedin.com/in/marina-parinova-205186129/"
                    target="_blank">Marina</a>
                    </div>
                </fotter>      
            </div>
        )
    }
}

export default QuotesBlock;