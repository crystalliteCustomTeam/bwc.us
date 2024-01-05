function yearlyTabsChange() {
    let x = document.getElementById("yearlyTabsChange").value;
    let content2018 = `
            <h2 class="font-secondary fw-900 text-center font-50 font-50rem text-blue">2018</h2>
            <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan"
                                    type="button" role="tab" aria-controls="jan" aria-selected="true">Jan</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button"
                                    role="tab" aria-controls="feb" aria-selected="false">Feb</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button"
                                    role="tab" aria-controls="mar" aria-selected="false">Mar</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button"
                                    role="tab" aria-controls="apr" aria-selected="false">Apr</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button"
                                    role="tab" aria-controls="may" aria-selected="false">May</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button"
                                    role="tab" aria-controls="jun" aria-selected="false">Jun</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button"
                                    role="tab" aria-controls="jul" aria-selected="false">Jul</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button"
                                    role="tab" aria-controls="aug" aria-selected="false">Aug</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button"
                                    role="tab" aria-controls="sep" aria-selected="false">Sep</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button"
                                    role="tab" aria-controls="oct" aria-selected="false">Oct</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button"
                                    role="tab" aria-controls="nov" aria-selected="false">Nov</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button"
                                    role="tab" aria-controls="dec" aria-selected="false">Dec</button>
                            </li>
                        </ul>
                        <div class="container">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="jan" role="tabpanel"
                                    aria-labelledby="jan-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jul" role="tabpanel" aria-labelledby="jul-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                        rel="noopener noreferrer" class="btn d-block btn-secondary px-sm-4 px-3"
                                        style="font-size: 15px; width: max-content; margin: 50px auto 0;">See More
                                        Books</a>
                                </div>
                            </div>
                        </div>`;
    let content2019 = `
            <h2 class="font-secondary fw-900 text-center font-50 font-50rem text-blue">2019</h2>
            <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan"
                                    type="button" role="tab" aria-controls="jan" aria-selected="true">Jan</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button"
                                    role="tab" aria-controls="feb" aria-selected="false">Feb</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button"
                                    role="tab" aria-controls="mar" aria-selected="false">Mar</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button"
                                    role="tab" aria-controls="apr" aria-selected="false">Apr</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button"
                                    role="tab" aria-controls="may" aria-selected="false">May</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button"
                                    role="tab" aria-controls="jun" aria-selected="false">Jun</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button"
                                    role="tab" aria-controls="jul" aria-selected="false">Jul</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button"
                                    role="tab" aria-controls="aug" aria-selected="false">Aug</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button"
                                    role="tab" aria-controls="sep" aria-selected="false">Sep</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button"
                                    role="tab" aria-controls="oct" aria-selected="false">Oct</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button"
                                    role="tab" aria-controls="nov" aria-selected="false">Nov</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button"
                                    role="tab" aria-controls="dec" aria-selected="false">Dec</button>
                            </li>
                        </ul>
                        <div class="container">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="jan" role="tabpanel"
                                    aria-labelledby="jan-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jul" role="tabpanel" aria-labelledby="jul-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                        rel="noopener noreferrer" class="btn d-block btn-secondary px-sm-4 px-3"
                                        style="font-size: 15px; width: max-content; margin: 50px auto 0;">See More
                                        Books</a>
                                </div>
                            </div>
                        </div>`;
    let content2020 = `
            <h2 class="font-secondary fw-900 text-center font-50 font-50rem text-blue">2020</h2>
            <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan"
                                    type="button" role="tab" aria-controls="jan" aria-selected="true">Jan</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button"
                                    role="tab" aria-controls="feb" aria-selected="false">Feb</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button"
                                    role="tab" aria-controls="mar" aria-selected="false">Mar</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button"
                                    role="tab" aria-controls="apr" aria-selected="false">Apr</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button"
                                    role="tab" aria-controls="may" aria-selected="false">May</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button"
                                    role="tab" aria-controls="jun" aria-selected="false">Jun</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button"
                                    role="tab" aria-controls="jul" aria-selected="false">Jul</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button"
                                    role="tab" aria-controls="aug" aria-selected="false">Aug</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button"
                                    role="tab" aria-controls="sep" aria-selected="false">Sep</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button"
                                    role="tab" aria-controls="oct" aria-selected="false">Oct</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button"
                                    role="tab" aria-controls="nov" aria-selected="false">Nov</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button"
                                    role="tab" aria-controls="dec" aria-selected="false">Dec</button>
                            </li>
                        </ul>
                        <div class="container">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="jan" role="tabpanel"
                                    aria-labelledby="jan-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jul" role="tabpanel" aria-labelledby="jul-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                        rel="noopener noreferrer" class="btn d-block btn-secondary px-sm-4 px-3"
                                        style="font-size: 15px; width: max-content; margin: 50px auto 0;">See More
                                        Books</a>
                                </div>
                            </div>
                        </div>`;
    let content2021 = `
            <h2 class="font-secondary fw-900 text-center font-50 font-50rem text-blue">2021</h2>
            <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan"
                                    type="button" role="tab" aria-controls="jan" aria-selected="true">Jan</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button"
                                    role="tab" aria-controls="feb" aria-selected="false">Feb</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button"
                                    role="tab" aria-controls="mar" aria-selected="false">Mar</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button"
                                    role="tab" aria-controls="apr" aria-selected="false">Apr</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button"
                                    role="tab" aria-controls="may" aria-selected="false">May</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button"
                                    role="tab" aria-controls="jun" aria-selected="false">Jun</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button"
                                    role="tab" aria-controls="jul" aria-selected="false">Jul</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button"
                                    role="tab" aria-controls="aug" aria-selected="false">Aug</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button"
                                    role="tab" aria-controls="sep" aria-selected="false">Sep</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button"
                                    role="tab" aria-controls="oct" aria-selected="false">Oct</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button"
                                    role="tab" aria-controls="nov" aria-selected="false">Nov</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button"
                                    role="tab" aria-controls="dec" aria-selected="false">Dec</button>
                            </li>
                        </ul>
                        <div class="container">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="jan" role="tabpanel"
                                    aria-labelledby="jan-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jul" role="tabpanel" aria-labelledby="jul-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                        rel="noopener noreferrer" class="btn d-block btn-secondary px-sm-4 px-3"
                                        style="font-size: 15px; width: max-content; margin: 50px auto 0;">See More
                                        Books</a>
                                </div>
                            </div>
                        </div>`;
    let content2022 = `
            <h2 class="font-secondary fw-900 text-center font-50 font-50rem text-blue">2022</h2>
            <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan"
                                    type="button" role="tab" aria-controls="jan" aria-selected="true">Jan</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button"
                                    role="tab" aria-controls="feb" aria-selected="false">Feb</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button"
                                    role="tab" aria-controls="mar" aria-selected="false">Mar</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button"
                                    role="tab" aria-controls="apr" aria-selected="false">Apr</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button"
                                    role="tab" aria-controls="may" aria-selected="false">May</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button"
                                    role="tab" aria-controls="jun" aria-selected="false">Jun</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button"
                                    role="tab" aria-controls="jul" aria-selected="false">Jul</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button"
                                    role="tab" aria-controls="aug" aria-selected="false">Aug</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button"
                                    role="tab" aria-controls="sep" aria-selected="false">Sep</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button"
                                    role="tab" aria-controls="oct" aria-selected="false">Oct</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button"
                                    role="tab" aria-controls="nov" aria-selected="false">Nov</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button"
                                    role="tab" aria-controls="dec" aria-selected="false">Dec</button>
                            </li>
                        </ul>
                        <div class="container">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="jan" role="tabpanel"
                                    aria-labelledby="jan-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jul" role="tabpanel" aria-labelledby="jul-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                        rel="noopener noreferrer" class="btn d-block btn-secondary px-sm-4 px-3"
                                        style="font-size: 15px; width: max-content; margin: 50px auto 0;">See More
                                        Books</a>
                                </div>
                            </div>
                        </div>`;
    let content2023 = `
            <h2 class="font-secondary fw-900 text-center font-50 font-50rem text-blue">2023</h2>
            <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan"
                                    type="button" role="tab" aria-controls="jan" aria-selected="true">Jan</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button"
                                    role="tab" aria-controls="feb" aria-selected="false">Feb</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button"
                                    role="tab" aria-controls="mar" aria-selected="false">Mar</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button"
                                    role="tab" aria-controls="apr" aria-selected="false">Apr</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button"
                                    role="tab" aria-controls="may" aria-selected="false">May</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button"
                                    role="tab" aria-controls="jun" aria-selected="false">Jun</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button"
                                    role="tab" aria-controls="jul" aria-selected="false">Jul</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button"
                                    role="tab" aria-controls="aug" aria-selected="false">Aug</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button"
                                    role="tab" aria-controls="sep" aria-selected="false">Sep</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button"
                                    role="tab" aria-controls="oct" aria-selected="false">Oct</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button"
                                    role="tab" aria-controls="nov" aria-selected="false">Nov</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button"
                                    role="tab" aria-controls="dec" aria-selected="false">Dec</button>
                            </li>
                        </ul>
                        <div class="container">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="jan" role="tabpanel"
                                    aria-labelledby="jan-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jul" role="tabpanel" aria-labelledby="jul-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book2.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Ren Jorden</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 py-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book1.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Gateway to <br /> Deception</h3>
                                                    <img src="../images/portfolio-lp/client1.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Barbara Wilkey</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book3.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Prejudice, Racism, <br /> and Tribalism</h3>
                                                    <img src="../images/portfolio-lp/client2.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Anthony M. D'Agostino</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-5">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book4.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>The Collection Of <br /> Humor From The <br /> American Civil
                                                        War</h3>
                                                    <img src="../images/portfolio-lp/client3.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Marion Sidney Mayer</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book5.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Reminisces of a <br /> Minnesota boy</h3>
                                                    <img src="../images/portfolio-lp/client4.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Steve Asbury</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12 pb-0">
                                            <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                                                <div class="">
                                                    <img src="../images/portfolio-lp/book6.png" alt="Book">
                                                </div>
                                                <div class="__content">
                                                    <h3>Dirty Deed <br /> Cold Dirty Game</h3>
                                                    <img src="../images/portfolio-lp/client5.png" alt="Client"
                                                        style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                                    <span>Bernard J. Owens, Jr.</span>
                                                    <div
                                                        class="__publisher d-flex flex-lg-nowrap flex-wrap justify-content-center align-items-center">
                                                        <h6>Publisher</h6>
                                                        <h5><a href="">Kevin Sanders</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <a href="#" data-toggle="modal" data-target="#mypopupdiscuss"
                                        rel="noopener noreferrer" class="btn d-block btn-secondary px-sm-4 px-3"
                                        style="font-size: 15px; width: max-content; margin: 50px auto 0;">See More
                                        Books</a>
                                </div>
                            </div>
                        </div>`;

    if (x == 2018) {
        document.getElementById("yearlyTabsChangeContent").innerHTML = content2018;
    } else if (x == 2019) {
        document.getElementById("yearlyTabsChangeContent").innerHTML = content2019;
    } else if (x == 2020) {
        document.getElementById("yearlyTabsChangeContent").innerHTML = content2020;
    } else if (x == 2021) {
        document.getElementById("yearlyTabsChangeContent").innerHTML = content2021;
    } else if (x == 2022) {
        document.getElementById("yearlyTabsChangeContent").innerHTML = content2022;
    } else if (x == 2023) {
        document.getElementById("yearlyTabsChangeContent").innerHTML = content2023;
    }
}