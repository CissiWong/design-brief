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

          <button className="start-btn"></button>
          <button className="learn-btn"></button>

        </section>

        <section className="blog-section">

          <article className="blog" id="first">
            <div className="blog-image"></div>
              <h2>The Boy who tamed the sea</h2>
                <p className="blog-text">lorem ipsum</p>
                  <img className="writer-image" src="assignment-design-brief/code/public/images/bookmark.png" alt="image of writer one"></img>
                    <p className="writer">Per Persson</p>
                      <img className="bookmark" src="assignment-design-brief/code/public/images/bookmark.png" alt="bookmark image"></img>
          </article>

          <article className="blog" id="second">
              <div className="blog-image"></div>
                <h2>The role of human emotion in the future of transport</h2>
                  <p className="blog-text">lorem ipsum</p>
                    <img className="writer-image" src="assignment-design-brief/code/public/images/writer-2.jpeg" alt="image of writer two"></img>
                      <p className="writer">Per Persson</p>
                        <img className="bookmark" src="assignment-design-brief/code/public/images/bookmark.png" alt="bookmark image"></img>
          </article>

          <article className="blog" id="third">
            <div className="blog-image"></div>
              <h2>The march of the losers</h2>
                <p className="blog-text">lorem ipsum</p>
                  <img className="writer-image" src="assignment-design-brief/code/public/images/writer-3.jpeg" alt="image of writer three"></img>
                    <p className="writer">Per Persson</p>
                      <img className="bookmark" src="assignment-design-brief/code/public/images/bookmark.png" alt="bookmark image"></img>
          </article>

          <article className="blog" id="fourth">
            <div className="blog-image"></div>
              <h2>The burning season</h2>
                <p className="blog-text">lorem ipsum</p>
                  <img className="writer-image" src="assignment-design-brief/code/public/images/writer-4.jpeg" alt="image of writer one"></img>
                    <p className="writer">Per Persson</p>
                      <img className="bookmark" src="assignment-design-brief/code/public/images/bookmark.png" alt="bookmark image"></img>
          </article>

        </section>
      </div>
    </div>
    )
  }

}

export default App
