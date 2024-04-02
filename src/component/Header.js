
function Header(props) {

    return <div id="header">
        <h1><a href="#" onClick={() => { props.onTitle() }}>{props.title}</a></h1>
    </div>
};
export default Header;