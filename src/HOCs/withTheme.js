import ThemeContext from "../contexts/ThemeContext"


const withTheme = (Component) => (props) => {
    return ( 
    <ThemeContext.Consumer>
        {([theme, setTheme]) => {
            return <Component theme={theme} setTheme={setTheme} {...props}/>
        }}
    </ThemeContext.Consumer>
    )
}

export default withTheme