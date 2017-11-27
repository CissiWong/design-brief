import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        Find me in src/app.js!

        <div className="main">
          <nav>
            <ul>
              <li>Home</li>
              <li>Technology</li>
              <li>Creativity</li>
              <li>Entrepreneurship</li>
              <li>Self</li>
              <li>Culture</li>
              <li>Digital design</li>
              <li>Popular on Medium</li>
              <li>Politics</li>
              <li>More</li>
            </ul>
          <button className="nav-btn">Get started</button>
        </nav>
        <section className="header-section">
          <article className="top">
            <h1>Interesting ideas that set your mind in motion</h1>
              <p>Hear directly from the people that know it best. From tech to politics to creativity and more - whatever your interest, we've got you covered.</p>
          </article>

        <div className="img-playground"></div>

          <div className="btn-section">
              <button className="start-btn">Get started!</button>
              <button className="learn-btn">Learn more!</button>
          </div>
      </section>

      <section className="blog-section">

        <article className="blog" id="first-blog">
          <div className="blog-image" id="first-image"></div>
           <div className="first-text">
              <h2>The Boy who tamed the sea</h2>
                <p className="blog-text">lorem ipsum</p>
                  <div className="writer-image" id="first-writer"></div>
                    <p className="writer">Per Persson</p>
                      <img className="bookmark" src="/images/bookmark.png" alt="bookmark image"></img>
            </div>
        </article>

          <article className="blog" id="second-blog">
            <div className="blog-image" id="second-image"></div>
              <div className="second-text">
               <h2>The role of human emotion in the future of transport</h2>
                  <p className="blog-text">lorem ipsum</p>
                    <div className="writer-image" id="second-writer"></div>
                      <p className="writer">Per Persson</p>
                        <img className="bookmark" src="/images/bookmark.png" alt="bookmark image"></img>
              </div>
          </article>

      <article className="blog" id="third-blog">
        <div className="blog-image" id="third-image"></div>
          <div className="third-text">
            <h2>The march of the losers</h2>
                <p className="blog-text">lorem ipsum</p>
                  <div className="writer-image" id="third-writer"></div>
                    <p className="writer">Per Persson</p>
                      <img className="bookmark" src="/images/bookmark.png" alt="bookmark image"></img>
          </div>
        </article>

        <article className="blog" id="fourth-blog">
          <div className="blog-image" id="fourth-image"></div>
            <div className="fourth-text">
              <h2>The burning season</h2>
                <p className="blog-text">lorem ipsum</p>
                  <div className="writer-image" id="fourth-writer"></div>
                    <p className="writer">Per Persson</p>
                      <img className="bookmark" src="/images/bookmark.png" alt="bookmark image"></img>
              </div>
        </article>
      </section>
    </div>
  </div>
    )
  }

}

export default App
