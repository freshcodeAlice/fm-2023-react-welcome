import React from 'react';
/*
Створити компоненту dayPart, яка приймає години і повертає "Гарного дня", якщо зараз від 11 до 16 або "Добрий вечір", якщо від 17 до 21


*/

class DayPart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {hours} = this.props;
        let helloText = '';
        if (hours > 11 && hours <= 16) {
            helloText = 'Гарного дня'
        } else if (hours >= 17 && hours <= 21) {
            helloText = 'Добрий вечір'
        } else {
            helloText = "Вітаю"
        }
        return (
           <>{helloText}</> 
        )
    }
}


export default DayPart;