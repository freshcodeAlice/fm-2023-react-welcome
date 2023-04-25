import React from 'react';

/*
Зробити елемент FlexContainer, який рендерить будь-яку кількість переданих йому дітей

Очікування: флекс-контейнер, якому ми задаємо основні параметри через пропси
flex-direction
justify-content
align-items
flex-wrap

Обов'язково описати пропи через propTypes
(опціонально - defaultProps)



*/

const FlexContainer = (props) => {

    const {children, fd, jc, ai, fw,} = props;

    const inlineStyles = {
        display: 'flex',
        flexDirection: fd,
        justifyContent: jc,
        alignItems: ai,
        flexWrap: fw
    }

    return (
        <div style={inlineStyles}>
            {children}
        </div>
    );
}

export default FlexContainer;
