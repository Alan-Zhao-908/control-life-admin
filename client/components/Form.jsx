import axios from 'axios'

export default class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      options: []
    };

    this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
    this.handleChangeOptions = this.handleChangeOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeQuestion(event) {
    this.setState({question: event.target.value});
  }

  handleChangeOptions(event) {
    this.setState({options: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault(); 
    let finalOptions = this.state.options.split(',')
    axios.post(`https://poll-asgard.herokuapp.com/v1/question`,{
      "question": this.state.question,
      "options": finalOptions
    }) 
    .then(({data}) => {
      console.log(data)
    })
    this.setState({
      question: '',
      options: ''
    })
    alert('New question was submitted ' + this.state.question + 'options: ' + this.state.options);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Question:
          <br />
          <input style={{width: "700px"}} type="text" value={this.state.question} onChange={this.handleChangeQuestion} />
        </label>
        <br />
        <label>
          Options: (please separate the options by commas e.g. "option 1, option 2, option 3")
          <br />
          <input style={{width: "700px"}} type="text" value={this.state.options} onChange={this.handleChangeOptions} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}