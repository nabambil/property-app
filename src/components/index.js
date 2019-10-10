import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
            <div class="parallax" data-background="images/home-parallax.jpg" data-color="#36383e" data-color-opacity="0.45" data-img-width="2500" data-img-height="1600">
                <div class="parallax-content">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">

                                <div class="main-search-container">
                                    <h2>Find Your Dream Home</h2>

                                    <form class="main-search-form">

                                        <div class="search-type">
                                            <label class="active"><input class="first-tab" name="tab" checked="checked" type="radio" />Any Status</label>
                                            <label><input name="tab" type="radio" />For Sale</label>
                                            <label><input name="tab" type="radio" />For Rent</label>
                                            <div class="search-type-arrow"></div>
                                        </div>


                                        <div class="main-search-box">

                                            <div class="main-search-input larger-input">
                                                <input type="text" class="ico-01" id="autocomplete-input" placeholder="Enter address e.g. street, city and state or zip" value="" />
                                                <button class="button">Search</button>
                                            </div>

                                            <div class="row with-forms">

                                                <div class="col-md-4">
                                                    <select data-placeholder="Any Type" class="chosen-select-no-single" >
                                                        <option>Any Type</option>
                                                        <option>Apartments</option>
                                                        <option>Houses</option>
                                                        <option>Commercial</option>
                                                        <option>Garages</option>
                                                        <option>Lots</option>
                                                    </select>
                                                </div>


                                                <div class="col-md-4">

                                                    <div class="select-input">
                                                        <input type="text" placeholder="Min Price" data-unit="USD" />
                                                    </div>

                                                </div>


                                                <div class="col-md-4">

                                                    <div class="select-input">
                                                        <input type="text" placeholder="Max Price" data-unit="USD" />
                                                    </div>

                                                </div>

                                            </div>

                                            <a href="#" class="more-search-options-trigger" data-open-title="More Options" data-close-title="Less Options"></a>

                                            <div class="more-search-options">
                                                <div class="more-search-options-container">

                                                    <div class="row with-forms">

                                                        <div class="col-md-6">

                                                            <div class="select-input">
                                                                <input type="text" placeholder="Min Area" data-unit="Sq Ft" />
                                                            </div>

                                                        </div>

                                                        <div class="col-md-6">

                                                            <div class="select-input">
                                                                <input type="text" placeholder="Max Area" data-unit="Sq Ft" />
                                                            </div>

                                                        </div>

                                                    </div>


                                                    <div class="row with-forms">

                                                        <div class="col-md-6">
                                                            <select data-placeholder="Beds" class="chosen-select-no-single" >
                                                                <option label="blank"></option>
                                                                <option>Beds (Any)</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <select data-placeholder="Baths" class="chosen-select-no-single" >
                                                                <option label="blank"></option>
                                                                <option>Baths (Any)</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>

                                                    </div>


                                                    <div class="checkboxes in-row">

                                                        <input id="check-2" type="checkbox" name="check" />
                                                        <label for="check-2">Air Conditioning</label>

                                                        <input id="check-3" type="checkbox" name="check" />
                                                        <label for="check-3">Swimming Pool</label>

                                                        <input id="check-4" type="checkbox" name="check" />
                                                        <label for="check-4">Central Heating</label>

                                                        <input id="check-5" type="checkbox" name="check" />
                                                        <label for="check-5">Laundry Room</label>


                                                        <input id="check-6" type="checkbox" name="check" />
                                                        <label for="check-6">Gym</label>

                                                        <input id="check-7" type="checkbox" name="check" />
                                                        <label for="check-7">Alarm</label>

                                                        <input id="check-8" type="checkbox" name="check" />
                                                        <label for="check-8">Window Covering</label>

                                                    </div>

                                                </div>
                                            </div>


                                        </div>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div class="container">
                <div class="row">

                    <div class="col-md-12">
                        <h3 class="headline margin-bottom-25 margin-top-65">Newly Added</h3>
                    </div>

                    <div class="col-md-12">
                        <div class="carousel">

                            <div class="carousel-item">
                                <div class="listing-item">

                                    <a href="single-property-page-1.html" class="listing-img-container">

                                        <div class="listing-badges">
                                            <span class="featured">Featured</span>
                                            <span>For Sale</span>
                                        </div>

                                        <div class="listing-img-content">
                                            <span class="listing-price">$275,000 <i>$520 / sq ft</i></span>
                                            <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                            <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                                        </div>

                                        <div class="listing-carousel">
                                            <div><img src="images/listing-01.jpg" alt="" /></div>
                                            <div><img src="images/listing-01b.jpg" alt="" /></div>
                                            <div><img src="images/listing-01c.jpg" alt="" /></div>
                                        </div>

                                    </a>

                                    <div class="listing-content">

                                        <div class="listing-title">
                                            <h4><a href="single-property-page-1.html">Eagle Apartments</a></h4>
                                            <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
                                                <i class="fa fa-map-marker"></i>
                                                9364 School St. Lynchburg, NY
                    </a>
                                        </div>

                                        <ul class="listing-features">
                                            <li>Area <span>530 sq ft</span></li>
                                            <li>Bedrooms <span>2</span></li>
                                            <li>Bathrooms <span>1</span></li>
                                        </ul>

                                        <div class="listing-footer">
                                            <a href="#"><i class="fa fa-user"></i> David Strozier</a>
                                            <span><i class="fa fa-calendar-o"></i> 1 day ago</span>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="carousel-item">
                                <div class="listing-item">

                                    <a href="single-property-page-2.html" class="listing-img-container">

                                        <div class="listing-badges">
                                            <span>For Rent</span>
                                        </div>

                                        <div class="listing-img-content">
                                            <span class="listing-price">$900 <i>monthly</i></span>
                                            <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                            <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                                        </div>

                                        <img src="images/listing-02.jpg" alt="" />

                                    </a>

                                    <div class="listing-content">

                                        <div class="listing-title">
                                            <h4><a href="single-property-page-2.html">Serene Uptown</a></h4>
                                            <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
                                                <i class="fa fa-map-marker"></i>
                                                6 Bishop Ave. Perkasie, PA
                    </a>
                                        </div>

                                        <ul class="listing-features">
                                            <li>Area <span>440 sq ft</span></li>
                                            <li>Bedrooms <span>2</span></li>
                                            <li>Bathrooms <span>1</span></li>
                                        </ul>

                                        <div class="listing-footer">
                                            <a href="#"><i class="fa fa-user"></i> Harriette Clark</a>
                                            <span><i class="fa fa-calendar-o"></i> 2 days ago</span>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="carousel-item">
                                <div class="listing-item">

                                    <a href="single-property-page-1.html" class="listing-img-container">

                                        <div class="listing-badges">
                                            <span class="featured">Featured</span>
                                            <span>For Rent</span>
                                        </div>

                                        <div class="listing-img-content">
                                            <span class="listing-price">$1700 <i>monthly</i></span>
                                            <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                            <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                                        </div>

                                        <img src="images/listing-03.jpg" alt="" />

                                    </a>

                                    <div class="listing-content">

                                        <div class="listing-title">
                                            <h4><a href="single-property-page-1.html">Meridian Villas</a></h4>
                                            <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
                                                <i class="fa fa-map-marker"></i>
                                                778 Country St. Panama City, FL
                    </a>
                                        </div>

                                        <ul class="listing-features">
                                            <li>Area <span>1450 sq ft</span></li>
                                            <li>Bedrooms <span>2</span></li>
                                            <li>Bathrooms <span>3</span></li>
                                        </ul>

                                        <div class="listing-footer">
                                            <a href="#"><i class="fa fa-user"></i> Chester Miller</a>
                                            <span><i class="fa fa-calendar-o"></i> 4 days ago</span>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="carousel-item">
                                <div class="listing-item">


                                    <a href="single-property-page-3.html" class="listing-img-container">

                                        <div class="listing-badges">
                                            <span>For Sale</span>
                                        </div>

                                        <div class="listing-img-content">
                                            <span class="listing-price">$420,000 <i>$770 / sq ft</i></span>
                                            <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                            <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                                        </div>

                                        <div class="listing-carousel">
                                            <div><img src="images/listing-04.jpg" alt="" /></div>
                                            <div><img src="images/listing-04b.jpg" alt="" /></div>
                                        </div>

                                    </a>

                                    <div class="listing-content">

                                        <div class="listing-title">
                                            <h4><a href="single-property-page-3.html">Selway Apartments</a></h4>
                                            <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
                                                <i class="fa fa-map-marker"></i>
                                                33 William St. Northbrook, IL
                    </a>
                                        </div>

                                        <ul class="listing-features">
                                            <li>Area <span>540 sq ft</span></li>
                                            <li>Bedrooms <span>2</span></li>
                                            <li>Bathrooms <span>2</span></li>
                                        </ul>

                                        <div class="listing-footer">
                                            <a href="#"><i class="fa fa-user"></i> Kristen Berry</a>
                                            <span><i class="fa fa-calendar-o"></i> 3 days ago</span>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div class="carousel-item">
                                <div class="listing-item">


                                    <a href="single-property-page-1.html" class="listing-img-container">
                                        <div class="listing-badges">
                                            <span>For Sale</span>
                                        </div>

                                        <div class="listing-img-content">
                                            <span class="listing-price">$535,000 <i>$640 / sq ft</i></span>
                                            <span class="like-icon with-tip" data-tip-content="Add to Bookmarks"></span>
                                            <span class="compare-button with-tip" data-tip-content="Add to Compare"></span>
                                        </div>

                                        <img src="images/listing-05.jpg" alt="" />
                                    </a>

                                    <div class="listing-content">

                                        <div class="listing-title">
                                            <h4><a href="single-property-page-1.html">Oak Tree Villas</a></h4>
                                            <a href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom" class="listing-address popup-gmaps">
                                                <i class="fa fa-map-marker"></i>
                                                71 Lower River Dr. Bronx, NY
                                            </a>
                                        </div>

                                        <ul class="listing-features">
                                            <li>Area <span>350 sq ft</span></li>
                                            <li>Bedrooms <span>2</span></li>
                                            <li>Bathrooms <span>1</span></li>
                                        </ul>

                                        <div class="listing-footer">
                                            <a href="#"><i class="fa fa-user"></i> Mabel Gagnon</a>
                                            <span><i class="fa fa-calendar-o"></i> 4 days ago</span>
                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>



            <section class="fullwidth margin-top-105" data-background-color="#f7f7f7">

                <h3 class="headline-box">What are you looking for?</h3>

                <div class="container">
                    <div class="row">

                        <div class="col-md-3 col-sm-6">
                            <div class="icon-box-1">

                                <div class="icon-container">
                                    <i class="im im-icon-Office"></i>
                                    <div class="icon-links">
                                        <a href="listings-grid-standard-with-sidebar.html">For Sale</a>
                                        <a href="listings-grid-standard-with-sidebar.html">For Rent</a>
                                    </div>
                                </div>

                                <h3>Apartments</h3>
                                <p>Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim donec vel lectus vel felis.</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="icon-box-1">

                                <div class="icon-container">
                                    <i class="im im-icon-Home-2"></i>
                                    <div class="icon-links">
                                        <a href="listings-grid-standard-with-sidebar.html">For Sale</a>
                                        <a href="listings-grid-standard-with-sidebar.html">For Rent</a>
                                    </div>
                                </div>

                                <h3>Houses</h3>
                                <p>Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim donec vel lectus vel felis.</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="icon-box-1">

                                <div class="icon-container">
                                    <i class="im im-icon-Car-3"></i>
                                    <div class="icon-links">
                                        <a href="listings-grid-standard-with-sidebar.html">For Sale</a>
                                        <a href="listings-grid-standard-with-sidebar.html">For Rent</a>
                                    </div>
                                </div>

                                <h3>Garages</h3>
                                <p>Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim donec vel lectus vel felis.</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="icon-box-1">

                                <div class="icon-container">
                                    <i class="im im-icon-Clothing-Store"></i>
                                    <div class="icon-links">
                                        <a href="listings-grid-standard-with-sidebar.html">For Sale</a>
                                        <a href="listings-grid-standard-with-sidebar.html">For Rent</a>
                                    </div>
                                </div>

                                <h3>Commercial</h3>
                                <p>Aliquam dictum elit vitae mauris facilisis, at dictum urna dignissim donec vel lectus vel felis.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <div class="container">
                <div class="row">

                    <div class="col-md-12">
                        <h3 class="headline centered margin-bottom-35 margin-top-10">Most Popular Places <span>Properties In Most Popular Places</span></h3>
                    </div>

                    <div class="col-md-4">

                        <a href="listings-list-with-sidebar.html" class="img-box" data-background-image="images/popular-location-01.jpg">

                            <div class="listing-badges">
                                <span class="featured">Featured</span>
                            </div>

                            <div class="img-box-content visible">
                                <h4>New York </h4>
                                <span>14 Properties</span>
                            </div>
                        </a>

                    </div>

                    <div class="col-md-8">

                        <a href="listings-list-with-sidebar.html" class="img-box" data-background-image="images/popular-location-02.jpg">
                            <div class="img-box-content visible">
                                <h4>Los Angeles</h4>
                                <span>24 Properties</span>
                            </div>
                        </a>

                    </div>

                    <div class="col-md-8">

                        <a href="listings-list-with-sidebar.html" class="img-box" data-background-image="images/popular-location-03.jpg">
                            <div class="img-box-content visible">
                                <h4>San Francisco </h4>
                                <span>12 Properties</span>
                            </div>
                        </a>

                    </div>

                    <div class="col-md-4">

                        <a href="listings-list-with-sidebar.html" class="img-box" data-background-image="images/popular-location-04.jpg">
                            <div class="img-box-content visible">
                                <h4>Miami</h4>
                                <span>9 Properties</span>
                            </div>
                        </a>

                    </div>

                </div>
            </div>


            <section class="fullwidth margin-top-95 margin-bottom-0">

                <h3 class="headline-box">Articles & Tips</h3>

                <div class="container">
                    <div class="row">

                        <div class="col-md-4">

                            <div class="blog-post">

                                <a href="blog-post.html" class="post-img">
                                    <img src="images/blog-post-01.jpg" alt="" />
                                </a>

                                <div class="post-content">
                                    <h3><a href="#">8 Tips to Help You Finding New Home</a></h3>
                                    <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>

                                    <a href="blog-post.html" class="read-more">Read More <i class="fa fa-angle-right"></i></a>
                                </div>

                            </div>

                        </div>

                        <div class="col-md-4">

                            <div class="blog-post">

                                <a href="blog-post.html" class="post-img">
                                    <img src="images/blog-post-02.jpg" alt="" />
                                </a>

                                <div class="post-content">
                                    <h3><a href="#">Bedroom Colors You'll Never Regret</a></h3>
                                    <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>

                                    <a href="blog-post.html" class="read-more">Read More <i class="fa fa-angle-right"></i></a>
                                </div>

                            </div>

                        </div>

                        <div class="col-md-4">

                            <div class="blog-post">

                                <a href="blog-post.html" class="post-img">
                                    <img src="images/blog-post-03.jpg" alt="" />
                                </a>

                                <div class="post-content">
                                    <h3><a href="#">What to Do a Year Before Buying Apartment</a></h3>
                                    <p>Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae. </p>

                                    <a href="blog-post.html" class="read-more">Read More <i class="fa fa-angle-right"></i></a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <a href="listings-half-map-grid-standard.html" class="flip-banner parallax" data-background="images/flip-banner-bg.jpg" data-color="#274abb" data-color-opacity="0.9" data-img-width="2500" data-img-height="1600">
                <div class="flip-banner-content">
                    <h2 class="flip-visible">We help people and homes find each other</h2>
                    <h2 class="flip-hidden">Browse Properties <i class="sl sl-icon-arrow-right"></i></h2>
                </div>
            </a>




            <div id="footer" class="sticky-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-6">
                            <img class="footer-logo" src="images/logo.png" alt="" />
                            <br /><br />
                            <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                        </div>

                        <div class="col-md-4 col-sm-6 ">
                            <h4>Helpful Links</h4>
                            <ul class="footer-links">
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Add Property</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>

                            <ul class="footer-links">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Our Agents</a></li>
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>

                        <div class="col-md-3  col-sm-12">
                            <h4>Contact Us</h4>
                            <div class="text-widget">
                                <span>12345 Little Lonsdale St, Melbourne</span> <br />
                                Phone: <span>(123) 123-456 </span><br />
                                E-Mail:<span> <a href="#">office@example.com</a> </span><br />
                            </div>

                            <ul class="social-icons margin-top-20">
                                <li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
                                <li><a class="gplus" href="#"><i class="icon-gplus"></i></a></li>
                                <li><a class="vimeo" href="#"><i class="icon-vimeo"></i></a></li>
                            </ul>

                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="copyrights">© 2016 Findeo. All Rights Reserved.</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
     );
    }
}