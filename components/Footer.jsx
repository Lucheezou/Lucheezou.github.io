import "./Footer.css"

const Footer = () =>{


return(<>

<div id="contact" class="container">
  <footer class="py-5">
    <div class="row">
     

      <div class="col-12 col-md-12 mb-3">
        <h5>CONTACT INFORMATION</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">Phone Number : +639489810630</p></li>
          <li class="nav-item mb-2"><p class="nav-link p-0 text-muted">Email : lukevincent4@gmail.com</p></li>
        </ul>
      </div>

      
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2024 Lucheezou. </p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a href="https://facebook.com/Lucheezou"><i class="fa-brands fa-facebook"></i></a></li>
        <li class="ms-3"><a href="https://twitter.com/Lucheezou"><i class="fa-brands fa-twitter"></i></a></li>
        <li class="ms-3"></li>
      </ul>
    </div>
  </footer>
</div>

</>)
}

export default Footer