import { Link } from "react-router-dom"

export const Navigation = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Bracelets</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"><Link to="/">Homepage</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><Link to="/contacts">Contacts</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"> <Link to="/login"> Login</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/profile">Profile</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/about">About</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/productList">Products</Link></a>
            </li>
          </ul>
        </div>
      </nav>
     
    );
};