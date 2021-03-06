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
           <div className="text-container">
            <div className="text" id="first-text">
              <h2>The Boy who tamed the sea</h2>
                <p>On any morning, at 5:30, I can handle it, I'll lip out of the dark mouth of my covers and creep through the silver lig...
                 </p>
                  </div>
                   <div className="byline">
                    <div className="writer-image" id="first-writer"></div>
                      <p>Carl Moore Oct 8</p>
                        <div className="bookmark"></div>
                  </div>
              </div>
        </article>

      <article className="blog" id="second-blog">
        <div className="blog-image" id="second-image"></div>
           <div className="text-container">
            <div className="text" id="second-text">
              <h2>The role of human emotion in the future of transport</h2>
                <p>Getting from A to B is about to feel very different.</p>
                  </div>
                   <div className="byline">
                    <div className="writer-image" id="second-writer"></div>
                      <p>Ben Bland Nov 1</p>
                    <div className="bookmark"></div>
                </div>
            </div>
        </article>

        <article className="blog" id="third-blog">
            <div className="blog-image" id="third-image"></div>
             <div className="text-container">
              <div className="text" id="third-text">
                  <h2>The march of the losers</h2>
                    <p>lorem ipsum</p>
                      </div>
                       <div className="byline">
                        <div className="writer-image" id="third-writer"></div>
                          <p>Per Persson</p>
                          <div className="bookmark"></div>
                        </div>
                    </div>
              </article>

        <article className="blog" id="fourth-blog">
          <div className="blog-image" id="fourth-image"></div>
           <div className="text-container">
            <div className="text" id="fourth-text">
              <h2>The burning season</h2>
                <p>You cannot save everything when the fires come to Northern California</p>
                  </div>
                    <div className="byline">
                      <div className="writer-image" id="fourth-writer"></div>
                        <p>Lindsey Smith Nov 9</p>
                          <div className="bookmark"></div>
                      </div>
                  </div>
          </article>
      </section>
    </div>
  </div>
    )
  }

}

export default App
