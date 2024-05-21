$('.topbarnav').before(` <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center main">
                <a href="/" class="navbar-brand d-flex mr-auto" rel="noopener noreferrer">
                    <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/df7c785a-cce4-41eb-0eb6-00666d56a800/public"
                        class="img-fluid" width="150" height="38" title="logo" alt="logo">
                </a>
                <button class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse"
                    type="button"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about-us/">About us</a>
                        </li> 
                        <li class="nav-item dropdown position-static show">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown"
                                role="button" aria-expanded="true">Services</a>
                            <ul class="dropdown-menu megamenu midmenu">
                                <div class="row p-4">
                                    <li class="col-md-3 ">
                                        <ul>
                                            <li>
                                                <a href="/book-writing-services/">Book Writing</a>
                                            </li>
                                            <li>
                                                <a href="/book-editing-services/">Book Editing</a>
                                            </li>
                                            <li>
                                                <a href="/ebook-writing-services/">Ebook Writing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/book-marketing-services/">Book Marketing</a>
                                            </li>
                                            <li>
                                                
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="col-md-5 border-left">
                                        <ul>
                                            <li>
                                                <a href="/book-publishing-services/">Book Publishing</a>
                                            </li>

                                            <li>
                                                <a href="/digital-marketing-services/">Digital Marketing
                                                </a>
                                            </li>
                                           
                                            <li>
                                                <a href="/publication-services/">Children Book Publication
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/book-illustration-services/">Children's Book
                                                    Illustrations
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="col-md-4 d-none d-lg-block d-md-block d-sm-none border-left">
                                        <ul>
                                            <img src="../images/pricing/marketing.png" width="368" height="192"
                                                class="img-fluid" alt="book_writing_cube">
                                        </ul>
                                    </li>

                                </div>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pricing/">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/faqs/">Faqs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blogs/">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact/">Contact us</a>
                        </li>
                        <li class="nav-item pl-4 ">
                            <a href="#" data-toggle="modal" data-target="#mypopupdiscuss" rel="noopener noreferrer"
                                class="btn btn-secondary" style="font-size: 15px;">Get A Quote</a>
                        </li>
                    </ul>
                </div>
            </nav>`);
var topbar = document.getElementById('topBarId');