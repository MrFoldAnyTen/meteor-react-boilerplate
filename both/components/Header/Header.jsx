Header = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <div className="jumbotron">
          {/*None of the above 3 divs make any difference twbs is not working*/}
          <header className='Header'>
            <b>Header</b> &nbsp;
              <a href="/">Home</a> &nbsp;
              <a href="/about">About Page</a> &nbsp;
              <a href="/design">Design Page</a> &nbsp;
              <a href="/gallery">Gallery Page</a> &nbsp;
              <a href="/contact">Contact Page</a> &nbsp;
              <a href="/bad-url">Not Found Page</a> &nbsp;

        <LoginButtons align='left' />
      </header>
    </div>
    </div>
  </div>
    );
  }
});
