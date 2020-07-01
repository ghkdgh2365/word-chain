const React = require('react');
const { Component } = React;

class WordChain extends Component {
  state = {
    word: '바나나',
    value: '',
    result: '',
  }
  
  onChangeValue = (e) => {
    this.setState({value: e.target.value})
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    let r = (this.state.word[this.state.word.length - 1] === this.state.value[0]) ? '정답' : '오답'
    this.setState({
      result: r,
      value: '',
    })

    if (this.state.word[this.state.word.length - 1] === this.state.value[0]){
      this.setState({
        result: '정답',
        word: this.state.value,
        value: '',
      })
    }else{
      this.setState({
        result: '오답',
        value: '',
      })
    }
  }

  input;

  onRefInput = (c) => {
    this.input = c;
  }

  render(){
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} onChange={this.onChangeValue} value={this.state.value}/>
          <button>입력</button>
        </form> 
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = WordChain;