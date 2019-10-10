// Header.js
import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <header id="header-container">
                    <div id="header">
                        <div class="container">

                            <div class="left-side">

                                <div id="logo">
                                    <a href="index.html"><img src="images/logo.png" alt="" /></a>
                                </div>
                                <div class="mmenu-trigger">
                                    <button class="hamburger hamburger--collapse" type="button">
                                        <span class="hamburger-box">
                                            <span class="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                                <nav id="navigation" class="style-1">
                                    <ul id="responsive">

                                        <li><a class="current" href="#">Home</a>
                                            <ul>
                                                <li><a href="index.html">Home 1</a></li>
                                                <li><a href="index-2.html">Home 2</a></li>
                                                <li><a href="index-3.html">Home 3</a></li>
                                                <li><a href="index-4.html">Home 4</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="#">Listings</a>
                                            <ul>
                                                <li><a href="#">List Layout</a>
                                                    <ul>
                                                        <li><a href="listings-list-with-sidebar.html">With Sidebar</a></li>
                                                        <li><a href="listings-list-with-map.html">With Map</a></li>
                                                        <li><a href="listings-list-full-width.html">Full Width</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Grid Layout</a>
                                                    <ul>
                                                        <li><a href="listings-grid-standard-with-sidebar.html">Standard With Sidebar</a></li>
                                                        <li><a href="listings-grid-compact-with-sidebar.html">Compact With Sidebar</a></li>
                                                        <li><a href="listings-grid-with-map.html">With Map</a></li>
                                                        <li><a href="listings-grid-full-width.html">Full Width</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Half Map</a>
                                                    <ul>
                                                        <li><a href="listings-half-map-list.html">List Layout</a></li>
                                                        <li><a href="listings-half-map-grid-standard.html">Grid Standard Layout</a></li>
                                                        <li><a href="listings-half-map-grid-compact.html">Grid Compact Layout</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li><a href="#">Features</a>
                                            <ul>
                                                <li><a href="#">Single Properties</a>
                                                    <ul>
                                                        <li><a href="single-property-page-1.html">Property Style 1</a></li>
                                                        <li><a href="single-property-page-2.html">Property Style 2</a></li>
                                                        <li><a href="single-property-page-3.html">Property Style 3</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Search Styles</a>
                                                    <ul>
                                                        <li><a href="index.html">Home Search 1</a></li>
                                                        <li><a href="index-2.html">Home Search 2</a></li>
                                                        <li><a href="index-3.html">Home Search 3</a></li>
                                                        <li><a href="listings-list-full-width.html">Advanced Style</a></li>
                                                        <li><a href="listings-list-with-sidebar.html">Sidebar Search</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">My Account</a>
                                                    <ul>
                                                        <li><a href="my-profile.html">My Profile</a></li>
                                                        <li><a href="my-bookmarks.html">Bookmarked Listings</a></li>
                                                        <li><a href="my-properties.html">My Properties</a></li>
                                                        <li><a href="change-password.html">Change Password</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Agencies & Agents</a>
                                                    <ul>
                                                        <li><a href="agencies-list.html">Agencies List</a></li>
                                                        <li><a href="agency-page.html">Agency Page</a></li>
                                                        <li><a href="agents-list.html">Agents List</a></li>
                                                        <li><a href="agent-page.html">Agent Page</a></li>
                                                    </ul>
                                                </li>

                                                <li><a href="compare-properties.html">Compare Properties</a></li>
                                                <li><a href="submit-property.html">Submit Property</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="#">Pages</a>
                                            <ul>
                                                <li><a href="blog.html">Blog</a>
                                                    <ul>
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-post.html">Blog Post</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="elements.html">Elements</a></li>
                                                <li><a href="pricing-tables.html">Pricing Tables</a></li>
                                                <li><a href="typography.html">Typography</a></li>
                                                <li><a href="icons.html">Icons</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                                <div class="clearfix"></div>

                            </div>

                            <div class="right-side">
                                <div class="header-widget">
                                    <a href="login-register.html" class="sign-in"><i class="fa fa-user"></i> Log In / Register</a>
                                    <a href="submit-property.html" class="button border">Submit Property</a>
                                </div>
                            </div>

                        </div>
                    </div>

            </header>
        );
    }
}