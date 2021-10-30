import React from "react";

function FlexContainer() {
  return (
    <div className="container">
      <header className="flex-header">Header</header>
      <main className="flex-main">
        <nav className="flex-side">
          <h1>Side Nav1</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, voluptate omnis ullam ipsa laborum quis rerum soluta
            corrupti magni veniam?
          </p>
        </nav>
        <article className="flex-article">
          <h1>Main content</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
            cupiditate aliquid aperiam nulla quod exercitationem eligendi, amet
            odit maxime odio eius, consequuntur unde suscipit! Tempora sit
            pariatur maiores, corporis perspiciatis odit officiis temporibus vel
            mollitia consequuntur nam aliquam vero. Vel laboriosam nulla
            doloribus cupiditate sunt dolores saepe voluptate sit. Dicta.
          </p>
        </article>
        <nav className="flex-side">
          <h1>Side Nav2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            iusto provident sint eius iure, ea consequuntur officiis aspernatur
            in fugit enim itaque repellat temporibus laborum expedita eligendi
            neque fugiat ex?
          </p>
        </nav>
      </main>
      <footer className="flex-footer">Footer</footer>
    </div>
  );
}

export default FlexContainer;
