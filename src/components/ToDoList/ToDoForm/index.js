import React, { Component } from 'react';
import {format} from 'date-fns';
import styles from './ToDoForm.module.css';
import {isBefore} from 'date-fns';
import cx from 'classnames';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoBody: '',
            isDone: false,
            deadline: new Date(),
            isInputValid: true,
            isDateValid: true
        }
    }
    
    submitHandler = (event) => {
        event.preventDefault();
      this.props.callback(this.state);
    }

    generalHandler = ({target}) => {
        switch(target.type) {
            case 'text': {
                if(target.value.includes(' ')) {
                    this.setState({
                        isInputValid: false
                    })
                } else {
                    this.setState({
                        isInputValid: true
                    })
                }
                this.setState({
                    todoBody: target.value
                 });
                 break;
            }
            case 'checkbox': {
                this.setState({
                     isDone: target.checked
                 });
                 break;
            }
            case 'datetime-local': {
                if(isBefore(new Date(target.value), new Date())) {
                    this.setState({
                        isDateValid: false
                    })
                } else {
                    this.setState({
                        isDateValid: true
                    })
                }
                this.setState({
                 deadline: new Date(target.value)
              });
              break;
            }
        }
    }


    /*

    handler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

     */



    render() {
        const {todoBody, isDone, deadline, isInputValid, isDateValid} = this.state;
        const cnames = cx(styles['input-normal'], {
            [styles.valid]: isInputValid,
            [styles.invalid]: !isInputValid
        });

        const dateCN = cx({
            [styles.valid]: isDateValid,
            [styles.invalid]: !isDateValid
        })
        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                <h2>What need to be done?</h2>
                <input type="text" 
                value={todoBody} 
                onChange={this.generalHandler} 
                placeholder="Type your todo"
                className={cnames}
                autoFocus
                />
                <label>
                    <input 
                    type="checkbox" 
                    checked={isDone} 
                    onChange={this.generalHandler}/> is done?</label>
                <input 
                type="datetime-local" 
                value={format(deadline, "yyyy-MM-dd hh:mm")} 
                onChange={this.generalHandler}
                className={dateCN}/>
                <button>Submit</button>
            </form>
        );
    }
}

export default ToDoForm;


/* Реалізувати валідацію інпуту з датою таким чином, щоб дедлайн таски не міг бути у минулому заздалегідь

*/