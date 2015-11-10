export default React => (props) => (
    <div>
        <div id="footer" style={{ marginTop: 10 }}>
            <a href="/">Home</a> | <a href="/page1">Page 1</a> | <a href="/page2">Page 2</a>
        </div>
        <div style={{ marginTop: 10 }}>
            {props.fooMessage}
        </div>
    </div>
);