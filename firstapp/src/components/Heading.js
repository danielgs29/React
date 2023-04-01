function Heading(props) {
    return (
        <>
        <h1>Hello, {props.firstName}</h1>
        <div>{props.children}</div>
        </>
    )
}

export default Heading;