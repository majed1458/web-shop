
function App() {
  return (
    
      <div id="app">
       
    <header class="header_area">
      <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
        
          <nav class="classy-navbar" id="essenceNav">
          
              <a class="nav-brand" href="#">Jassa</a>
            
              <div class="classy-navbar-toggler">
                  <span class="navbarToggler"><span></span><span></span><span></span></span>
              </div>
              
              <div class="classy-menu">
                
                  <div class="classycloseIcon">
                      <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                  </div>
                
                  <div class="classynav">
                      <ul>
                          <li><a href="#">Shop</a>
                              <div class="megamenu">
                                  <ul class="single-mega cn-col-4">
                                      <li class="title">Women's Collection</li>
                                      <li><a href="#">Dresses</a></li>
                                      <li><a href="#">Blouses &amp; Shirts</a></li>
                                      <li><a href="#">T-shirts</a></li>
                                      <li><a href="#">Rompers</a></li>
                                      <li><a href="#">Bras &amp; Panties</a></li>
                                  </ul>
                                  <ul class="single-mega cn-col-4">
                                      <li class="title">Men's Collection</li>
                                      <li><a href="#">T-Shirts</a></li>
                                      <li><a href="#">Polo</a></li>
                                      <li><a href="#">Shirts</a></li>
                                      <li><a href="#">Jackets</a></li>
                                      <li><a href="#">Trench</a></li>
                                  </ul>
                                  <ul class="single-mega cn-col-4">
                                      <li class="title">Kid's Collection</li>
                                      <li><a href="#">Dresses</a></li>
                                      <li><a href="#">Shirts</a></li>
                                      <li><a href="#">T-shirts</a></li>
                                      <li><a href="#">Jackets</a></li>
                                      <li><a href="#">Trench</a></li>
                                  </ul>
                                  <div class="single-mega cn-col-4">
                                      <img src="assets/img/bg-img/bg-6.jpg" alt="" />
                                  </div>
                              </div>
                          </li>
                          <li><a href="#">Pages</a>
                              <ul class="dropdown">
                                  <li><a href="#">Home</a></li>
                                  <li><a href="#">Shop</a></li>
                                  <li><a href="#">Product Details</a></li>
                                  <li><a href="#">Checkout</a></li>
                                  <li><a href="#">Blog</a></li>
                                  <li><a href="#">Single Blog</a></li>
                                  <li><a href="#">Regular Page</a></li>
                                  <li><a href="#">Contact</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Contact</a></li>
                      </ul>
                  </div>
               
              </div>
          </nav>
        
          <div class="header-meta d-flex clearfix justify-content-end">
             
              <div class="search-area">
                  <form action="#" method="post">
                      <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                      <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                  </form>
              </div>
             
              <div class="favourite-area">
                  <a href="#"><img src="assets/img/core-img/heart.svg" alt="" /></a>
              </div>
             
              <div class="user-login-info">
                  <a href="#"><img src="assets/img/core-img/user.svg" alt="" /></a>
              </div>
             
              <div class="cart-area">
                  <a href="#" id="essenceCartBtn"><img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span></a>
              </div>
          </div>
      </div>
  </header>
  <div class="cart-bg-overlay"></div>
  <div class="right-side-cart-area">
      
      <div class="cart-button">
          <a href="#" id="rightSideCart"><img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span></a>
      </div>
      <div class="cart-content d-flex">
        
          <div class="cart-list">
           
              <div class="single-cart-item">
                  <a href="#" class="product-image">
                      <img src="assets/img/product-img/product-1.jpg" class="cart-thumb" alt="" />
                    
                      <div class="cart-item-desc">
                        <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                          <span class="badge">Mango</span>
                          <h6>Button Through Strap Mini Dress</h6>
                          <p class="size">Size: S</p>
                          <p class="color">Color: Red</p>
                          <p class="price">$45.00</p>
                      </div>
                  </a>
              </div>
             
              <div class="single-cart-item">
                  <a href="#" class="product-image">
                      <img src="assets/img/product-img/product-2.jpg" class="cart-thumb" alt="" />
                  
                      <div class="cart-item-desc">
                        <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                          <span class="badge">Mango</span>
                          <h6>Button Through Strap Mini Dress</h6>
                          <p class="size">Size: S</p>
                          <p class="color">Color: Red</p>
                          <p class="price">$45.00</p>
                      </div>
                  </a>
              </div>
            
              <div class="single-cart-item">
                  <a href="#" class="product-image">
                      <img src="assets/img/product-img/product-3.jpg" class="cart-thumb" alt="" />
                    
                      <div class="cart-item-desc">
                        <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                          <span class="badge">Mango</span>
                          <h6>Button Through Strap Mini Dress</h6>
                          <p class="size">Size: S</p>
                          <p class="color">Color: Red</p>
                          <p class="price">$45.00</p>
                      </div>
                  </a>
              </div>
          </div>
        
          <div class="cart-amount-summary">
              <h2>Summary</h2>
              <ul class="summary-table">
                  <li><span>subtotal:</span> <span>$274.00</span></li>
                  <li><span>delivery:</span> <span>Free</span></li>
                  <li><span>discount:</span> <span>-15%</span></li>
                  <li><span>total:</span> <span>$232.00</span></li>
              </ul>
              <div class="checkout-btn mt-100">
                  <a href="#" class="btn essence-btn">check out</a>
              </div>
          </div>
      </div>
  </div>
  <section class="welcome_area bg-img background-overlay" style={{backgroundImage: "url(assets/img/bg-img/bg-1.jpg)"}}>
      <div class="container h-100">
          <div class="row h-100 align-items-center">
              <div class="col-12">
                  <div class="hero-content">
                      <h6>asoss</h6>
                      <h2>New Collection</h2>
                      <a href="#" class="btn essence-btn">view collection</a>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <div class="top_catagory_area section-padding-80 clearfix">
      <div class="container">
          <div class="row justify-content-center">
            
              <div class="col-12 col-sm-6 col-md-4">
                  <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-2.jpg)"}}>
                      <div class="catagory-content">
                          <a href="#">Clothing</a>
                      </div>
                  </div>
              </div>
           
              <div class="col-12 col-sm-6 col-md-4">
                  <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-3.jpg)"}}>
                      <div class="catagory-content">
                          <a href="#">Shoes</a>
                      </div>
                  </div>
              </div>
          
              <div class="col-12 col-sm-6 col-md-4">
                  <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-4.jpg)"}}>
                      <div class="catagory-content">
                          <a href="#">Accessories</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="cta-area">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="cta-content bg-img background-overlay" style={{backgroundImage: "url(assets/img/bg-img/bg-5.jpg)"}}>
                      <div class="h-100 d-flex align-items-center justify-content-end">
                          <div class="cta--text">
                              <h6>-60%</h6>
                              <h2>Global Sale</h2>
                              <a href="#" class="btn essence-btn">Buy Now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <section class="new_arrivals_area section-padding-80 clearfix">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="section-heading text-center">
                      <h2>Popular Products</h2>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="popular-products-slides owl-carousel">
                   
                      <div class="single-product-wrapper">
                      
                          <div class="product-img">
                              <img src="assets/img/product-img/product-1.jpg" alt="" />
                          
                              <img class="hover-img" src="assets/img/product-img/product-2.jpg" alt="" />
                          
                              <div class="product-favourite">
                                  <a href="#" class="favme fa fa-heart"></a>
                              </div>
                          </div>
                      
                          <div class="product-description">
                              <span>topshop</span>
                              <a href="#">
                                  <h6>Knot Front Mini Dress</h6>
                              </a>
                              <p class="product-price">$80.00</p>
                             
                              <div class="hover-content">
                                
                                  <div class="add-to-cart-btn">
                                      <a href="#" class="btn essence-btn">Add to Cart</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                    
                      <div class="single-product-wrapper">
                         
                          <div class="product-img">
                              <img src="assets/img/product-img/product-2.jpg" alt="" />
                            
                              <img class="hover-img" src="assets/img/product-img/product-3.jpg" alt="" />
                           
                              <div class="product-favourite">
                                  <a href="#" class="favme fa fa-heart"></a>
                              </div>
                          </div>
                        
                          <div class="product-description">
                              <span>topshop</span>
                              <a href="#">
                                  <h6>Poplin Displaced Wrap Dress</h6>
                              </a>
                              <p class="product-price">$80.00</p>
                             
                              <div class="hover-content">
                                 
                                  <div class="add-to-cart-btn">
                                      <a href="#" class="btn essence-btn">Add to Cart</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                     
                      <div class="single-product-wrapper">
                          
                          <div class="product-img">
                              <img src="assets/img/product-img/product-3.jpg" alt="" />
                             
                              <img class="hover-img" src="assets/img/product-img/product-4.jpg" alt="" />
                             
                              <div class="product-badge offer-badge">
                                  <span>-30%</span>
                              </div>
                             
                              <div class="product-favourite">
                                  <a href="#" class="favme fa fa-heart"></a>
                              </div>
                          </div>
                         
                          <div class="product-description">
                              <span>mango</span>
                              <a href="#">
                                  <h6>PETITE Crepe Wrap Mini Dress</h6>
                              </a>
                              <p class="product-price"><span class="old-price">$75.00</span> $55.00</p>
                             
                              <div class="hover-content">
                                 
                                  <div class="add-to-cart-btn">
                                      <a href="#" class="btn essence-btn">Add to Cart</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                     
                      <div class="single-product-wrapper">
                         
                          <div class="product-img">
                              <img src="assets/img/product-img/product-4.jpg" alt="" />
                            
                              <img class="hover-img" src="assets/img/product-img/product-5.jpg" alt="" />
                             
                              <div class="product-badge new-badge">
                                  <span>New</span>
                              </div>
                              
                              <div class="product-favourite">
                                  <a href="#" class="favme fa fa-heart"></a>
                              </div>
                          </div>
                        
                          <div class="product-description">
                              <span>mango</span>
                              <a href="#">
                                  <h6>PETITE Belted Jumper Dress</h6>
                              </a>
                              <p class="product-price">$80.00</p>
                             
                              <div class="hover-content">
                                 
                                  <div class="add-to-cart-btn">
                                      <a href="#" class="btn essence-btn">Add to Cart</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <div class="brands-area d-flex align-items-center justify-content-between">
     
      <div class="single-brands-logo">
          <img src="assets/img/core-img/brand1.png" alt="" />
      </div>
      
      <div class="single-brands-logo">
          <img src="assets/img/core-img/brand2.png" alt="" />
      </div>
     
      <div class="single-brands-logo">
          <img src="assets/img/core-img/brand3.png" alt="" />
      </div>
    
      <div class="single-brands-logo">
          <img src="assets/img/core-img/brand4.png" alt="" />
      </div>
     
      <div class="single-brands-logo">
          <img src="assets/img/core-img/brand5.png" alt="" />
      </div>
     
      <div class="single-brands-logo">
          <img src="assets/img/core-img/brand6.png" alt="" />
      </div>
  </div>
  <footer class="footer_area clearfix">
      <div class="container">
          <div class="row">
           
              <div class="col-12 col-md-6">
                  <div class="single_widget_area d-flex mb-30">
                   
                      <div class="footer-logo mr-50">
                          <a href="#">Jassa</a>
                      </div>
                  
                      <div class="footer_menu">
                          <ul>
                              <li><a href="#">Shop</a></li>
                              <li><a href="#">Blog</a></li>
                              <li><a href="#">Contact</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
            
              <div class="col-12 col-md-6">
                  <div class="single_widget_area mb-30">
                      <ul class="footer_widget_menu">
                          <li><a href="#">Order Status</a></li>
                          <li><a href="#">Payment Options</a></li>
                          <li><a href="#">Shipping and Delivery</a></li>
                          <li><a href="#">Guides</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                          <li><a href="#">Terms of Use</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="row align-items-end">
             
              <div class="col-12 col-md-6">
                  <div class="single_widget_area">
                      <div class="footer_heading mb-30">
                          <h6>Subscribe</h6>
                      </div>
                      <div class="subscribtion_form">
                          <form>
                              <input type="email" name="mail" class="mail" placeholder="Your email here" />
                              <button type="button" class="submit"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                          </form>
                      </div>
                  </div>
              </div>
             
              <div class="col-12 col-md-6">
                  <div class="single_widget_area">
                      <div class="footer_social_area">
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                          <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                      </div>
                  </div>
              </div>
          </div>
  <div class="row mt-5">
              <div class="col-md-12 text-center">
                  <p>
                      
  Copyright &copy;2021 All rights reserved | Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://therichpost.com" target="_blank">therichpost</a>, distributed by <a href="https://therichpost.com/" target="_blank">therichpost</a>
                  </p>
              </div>
          </div>
      </div>
  </footer>
  </div>
      
    );
}

export default App;
