// Importing Helpers
import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <img
          src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
          alt="logo"
        />
        <nav>
          <ul>
            <li>TV</li>
            <li>Movies</li>
            <li>Sports</li>
            <li>News</li>
            <li>Premium</li>
            <li>Disney+</li>
          </ul>
        </nav>

        <form action="">
          <div class="search-field">
            <label for="searchbar"></label>
            <input type="text" id="searchbar" />
          </div>
        </form>

        <div>
          <button>Subscribe</button>
          <button>Login</button>
        </div>
      </header>
    </>
  );
};

export default Header;
