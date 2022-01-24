import React from "react";
import Button from "../components/Button";


class QuotesBlock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quotes: [],
            quoteShow: {}
        }
        this.selectRandomQuote = this.selectRandomQuote.bind(this);
        this.changeQuote = this.changeQuote.bind(this);
    }

    componentDidMount(){
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then( data => data.json())
            .then(data => this.setState({quotes: data.quotes}, ()=>{
                this.setState({
                    quoteShow: this.selectRandomQuote()
                });
            }));
    }
    selectRandomQuote(){
        return  this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)] 
    }
    changeQuote(){
        this.setState({
            quoteShow: this.selectRandomQuote()
        });
    }

   
   
    render(){
        //debugger
        console.log(this.state.quoteShow.quote + "  " + this.state.quoteShow.author);

        return (
            <div className="pageQuote">
                <div id="quote-box">
                    
                    <div id="text">{this.state.quoteShow.quote}</div>
                    
                    
                    <div id="author">{this.state.quoteShow.author}</div>
                    
                    <div className="quote-button">
                        <Button id="new-quote" buttonDisplay="Next Quote" clickHandler={this.changeQuote} />
                    </div>
                    <div className="social-media">
                        <a id="tweet-quote" href="twitter.com/intent/tweet">
                            <i className=""></i>
                        </a>
                        <a id="git">
                            <i className=""></i>
                        </a>
                    </div>
                </div>
                
                
                <fotter>
                    <div className="footer">by <a href="">Marina</a>
                    </div>
                </fotter>
        
            </div>
        
        )
    }
}

export default QuotesBlock;