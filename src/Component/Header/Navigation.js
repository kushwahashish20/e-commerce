import { Link } from "react-router-dom";
const Navigation = () => {
    return (
    <>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/admin">Admin</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/signin">Sign In</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/signup">Sign Up</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/signout">Signout</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search" />
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>



</>
    )
}
export default Navigation;