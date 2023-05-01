import UserContext from "../contexts/UserContext";


const withUser = (Component) => (props) => {
    return ( 
    <UserContext.Consumer>
        {([user, setUser]) => {
            return <Component user={user} setUser={setUser} {...props}/>
        }}
    </UserContext.Consumer>
    )
}

export default withUser