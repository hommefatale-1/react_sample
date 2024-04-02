function Footer(props) {

    return <div id="footer">
        <h3><a href="#" onClick={() => { props.onFooter() }}>{props.footer}</a></h3>
    </div>
};
export default Footer;