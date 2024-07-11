function yearlyTabsChange() {
    let x = document.getElementById("yearlyTabsChange").value;
    
    let content2023 = `
    
    <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan" type="button" role="tab"
                aria-controls="jan" aria-selected="true">Jan</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button" role="tab"
                aria-controls="feb" aria-selected="false">Feb</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button" role="tab"
                aria-controls="mar" aria-selected="false">Mar</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button" role="tab"
                aria-controls="apr" aria-selected="false">Apr</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button" role="tab"
                aria-controls="may" aria-selected="false">May</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button" role="tab"
                aria-controls="jun" aria-selected="false">Jun</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button" role="tab"
                aria-controls="jul" aria-selected="false">Jul</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button" role="tab"
                aria-controls="aug" aria-selected="false">Aug</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button" role="tab"
                aria-controls="sep" aria-selected="false">Sep</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button" role="tab"
                aria-controls="oct" aria-selected="false">Oct</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button" role="tab"
                aria-controls="nov" aria-selected="false">Nov</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button" role="tab"
                aria-controls="dec" aria-selected="false">Dec</button>
        </li>
    </ul>
    <div class="container">
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="jan" role="tabpanel" aria-labelledby="jan-tab">
                <div class="row align-items-center">
                    <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
            <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
                <div class="row align-items-center">
                    <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
            <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
                <div class="row align-items-center">
                    <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
            <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/todd.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Saving Grace Never Walking Alone: A Mother's Dementia - A Son's Devotion</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Todd Schulze</span>
                                <p>"A true gift from the heart and soul." -Curt
                                    "Beautiful, uplifting, yet heart-wrenching story; incredibly well-told."-Kate</p>
                                <a href="https://www.amazon.com/Saving-Grace-Never-Walking-Alone-ebook/dp/B0C3PPDP69/ref=sr_1_1?crid=2NMSYRQPEEY96&dib=eyJ2IjoiMSJ9.msToiaGgSjiLYOVBFXwrog.CHbcvU_XqJE-1t4s79YCtpSAN1uCfAeVrImi31qYOtQ&dib_tag=se&keywords=saving+grace+never+walking+alone&qid=1720565712&s=books&sprefix=saving+grace+never+walking+alo%2Cstripbooks-intl-ship%2C298&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/paul.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>A Christological Briefing of the New Testament: Your Guide to a Better Understanding of
                                    Christ</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Paul Dan</span>
                                <p>This Christological essay was written with you, the reader, in mind. Your time is
                                    limited, but your interest in spirituality</p>
                                <a href="https://www.amazon.com/Christological-Briefing-New-Testament-Understanding-ebook/dp/B0C58BF5DZ/ref=sr_1_1?crid=A1IH237T2GVV&dib=eyJ2IjoiMSJ9.4m1zNYAeKZf1FYyz4bX-XvdS6zsWOQJDGZ25Y0JroAE.MORmYBRt4i5pdqfPy154ZmE9fm9EVeFD5JG_lJgXC7k&dib_tag=se&keywords=a+christological+briefing&qid=1720563575&s=books&sprefix=a+christologocal+brifing%2Cstripbooks-intl-ship%2C264&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/seven.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Toward a New Metaphysics: Seven Biorhythms And The Evolution of Consciousness</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>M. F. Taylor</span>
                                <p>This book is about the evolution of consciousness as a process of cyclic transcendence as
                                    seven levels of identity</p>
                                <a href="https://www.amazon.com/Toward-New-Metaphysics-Biorhythms-Consciousness/dp/B0C47J8X6Z/ref=sr_1_6?crid=3KGZI8BIVH1P3&dib=eyJ2IjoiMSJ9._a06DpwfzknB3YhfoAdfdR-2UdR1ilxnoq3PCC9AVtNWav0hLSvEVJf3bASjmG42WKXH-Q5hG5iAI--V-mEb7tg6XIOfhzfsvYKlMtdf3zk4DObXD7cE3YP3tzEsuPdcVEtRLUArOoEl217yhAxPK4igmY9sJ9HTtRMuDik2lumEUNcLBCmXAEd_JUmdKq3NEFci4GYj9HyGnTSDCKIFPGmfk0AJhaWrwJeUv9PIyaA.VENWgMz1cu5rf9ixLufzSCiVmvyUNLs55fg38PeGUOI&dib_tag=se&keywords=toward+a+new+metaphysics&qid=1720564571&s=books&sprefix=toward+a+new+metaphysics%27%2Cstripbooks-intl-ship%2C273&sr=1-6"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/john.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>GREEN CARD LOTTERY AND AMERICAN DREAM</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>John Kananda</span>
                                <p>Green Card Lottery and American Dream is a book by John Kananda, a Canadian citizen who
                                    lived in the U.S. for 17 years</p>
                                <a href="https://www.amazon.com/GREEN-CARD-LOTTERY-AMERICAN-DREAM-ebook/dp/B0C7LRM9L9/ref=sr_1_1?crid=28U8R3D9HYOQ5&dib=eyJ2IjoiMSJ9.qQTbSGcP45iw2bdt7dYrTzuqwuS2LYz-1KVtPVMOdaEf68t18Iq-SoYZ7PBjU71-.JyiUt17yw3iG2k9tVBnQlVffXkoop63TJd541gcuoRU&dib_tag=se&keywords=green+card+lottery+and+american+dream&qid=1720562603&s=books&sprefix=green+card+lottery+and+american+dream%2Cstripbooks-intl-ship%2C280&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/kyra.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>I Like the New Me Better:: Inspiration for Women Going Through a Hard Time</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Kyra Denton</span>
                                <p>Have you suffered hardships in life and thought to yourself "it'll never get better” or
                                    “this is obviously how my life</p>
                                <a href="https://www.amazon.com/Like-New-Me-Better-Inspiration/dp/B0C6W2YYML/ref=sr_1_1?crid=14G9299IW9YLZ&dib=eyJ2IjoiMSJ9.oUHxlMhygqZJXKPENopf5r-hOUTYKbm9xFq1zxRlMvLfEITeSHnHcEIwRCfXuUaHvsD-4SFykDRb95ceAgwUi5Rm0qWY5fbjrFrADd_fmS7CRsCTsmuiZZ6a7ju3n2vI1JPbhQSiqS31HipAPToW6xEbJ2AodDqSEwMVlW5fQ00pBb4I7DYMFo_Uvk0Rl3KanS-KEs1YUBvjbaTGpThd2n5EaLW24MDis_18ScnE7k0.ishDThj64UtUdxIi8JH7ydchfrRIoJKoVqpKf5gLBKs&dib_tag=se&keywords=i+like+the+new+me+better&qid=1720562764&s=books&sprefix=i+like+the+new+me+bette%2Cstripbooks-intl-ship%2C277&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/william-02.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Worth The Wait: Tragedy Transition Redemption</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Richard Emerson Williams</span>
                                <p>This is a romantic fiction spiritually based story with principles and morals that you
                                    may not see in today’s novels.</p>
                                <a href="https://www.amazon.com/Worth-Wait-Tragedy-Transition-Redemption/dp/B0C6VZ2WDG/ref=sr_1_1?crid=34BXITBUKBKTR&dib=eyJ2IjoiMSJ9.zAR6nsboCWbx8eclf1_JJYdCopYCuvB0gO_UABXi0J7vyJALNJ7QjsAEAKkLK1JGimZZd32M7mA0IzwluTpDQbrv4EWTLnQBReJuwIp4ovK1QajpmAJlxOMFCVt6qt-5u0cOXIQ6fO5jljM8IlG2ubkLzyB7X2tTdpAzRMacjevsAoecGZ2Kl6IJOH6y623xOBwe6kbrxlLxuxo_NOqDx14aSPU6hUnlylI2wpI1nYA.Hq0U7pzVqevwu-B92SnIuaZBgYqJvC64TZ6ERqVfFf8&dib_tag=se&keywords=worth+the+wait+tragedy&qid=1720566189&s=books&sprefix=worth+the+wait+tragedy%2Cstripbooks-intl-ship%2C267&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="jul" role="tabpanel" aria-labelledby="jul-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/cheryl.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Bedtime Prayers <br />with Lolli & Pops</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Cheryl Kacal</span>
                                <p>Bedtime Prayers with Lolli & Pops is a book that keeps grandparents and grandchildren
                                    close in heart even when they are miles apart!</p>
                                <a href="https://www.amazon.com/Bedtime-Prayers-Lolli-Cheryl-Kacal/dp/B0C9SF6JF7/ref=sr_1_1?crid=RCVNH5XM3DAY&dib=eyJ2IjoiMSJ9.ntlFRxoE1JMIYGH4iqqdpg.gewtOVpm0ORImAgfQVwR9FScnQvqCvmbMi6HILYLBFQ&dib_tag=se&keywords=bedtime+prayers+with+lollipops&qid=1720557200&s=digital-text&sprefix=bedtime+prayers+with+loll%2Cdigital-text%2C272&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/james.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>A Badge <br />Well Worn</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>James Mitchell</span>
                                <p>"A Badge Well Worn" is a captivating exploration of the unsung heroes, the Sheepdogs, who
                                    protect the weak and defenseless</p>
                                <a href="https://www.amazon.com/Badge-Well-Worn-James-Mitchell-ebook/dp/B0C9YNBNCN/ref=sr_1_1?crid=19CFAPAKOTHW2&dib=eyJ2IjoiMSJ9.n7PrkdxkH_DoVBqTNqmULQ.oCuMFpLhANHtnLlxHdtMHt1ry-DSd881jMySu3H4mUU&dib_tag=se&keywords=a+badge+well+worn&qid=1720562282&s=books&sprefix=a+badge+well+wor%2Cstripbooks-intl-ship%2C283&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/rodrigo.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>O Amante <br />(The Lover)</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Rodrigo Brand</span>
                                <p>Following the Brazilian writing style called “Tragédia Carioca”, originally created by
                                    the great playwright Nelson Rodrigues,</p>
                                <a href="https://www.amazon.com/Amante-Lover-Rodrigo-Brand-ebook/dp/B0CBXTKMQW/ref=sr_1_2?crid=369ODPRZ1NS5N&dib=eyJ2IjoiMSJ9.t0DdV7qcridcm9hwV3MbaAUb6ggmGo4krZlIRZGmgYUNDYNxmipP4izxw275c4ra_qDBeOC9cyQxik3XTxljdpOwb4NkX_YaOr2wsLfLfIJzUvm3duWohzC1WYKN0JEjnZogR7WEhfKeqXei8tLxJHhF3zsE7CyUR7OB40ueAoLWayIY3djyxxcwRvBXc4PFQKZulmxDsTK4PrPwDq7FOFQXK9_bhZWy0dcyc6DIO80.hKBBIuWhZE6RpSpl8r48nPm8KknngfiM5czDL8DexbU&dib_tag=se&keywords=O+amante&qid=1720564249&s=books&sprefix=o+amante+%2Cstripbooks-intl-ship%2C272&sr=1-2"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">
                <div class="row align-items-center">
                     <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
            <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/a.lang.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>LITTLE BOOK <br />OF BASEBALL</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Amy Lang</span>
                                <p>Whether you’re an avid fan or a newcomer to the sport, you’ll find The Little Book of
                                    Baseball packed with everything</p>
                                <a href="https://www.amazon.com/LITTLE-BOOK-BASEBALL-Lang/dp/1961563118"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/a-young-boy's-dream.webp"
                                    alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>A Young <br />Boy’s Dream</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Captain Aubrey</span>
                                <p>The author describes his Navy life beginning with growing up in the” Cradle of Naval
                                    Aviation” in Pensacola,</p>
                                <a href="https://www.amazon.com/Young-Boys-Dream-Captain-Aubrey-ebook/dp/B0CK7W5ZWL/ref=sr_1_1?crid=1X6JRMSH2R9X3&dib=eyJ2IjoiMSJ9.AkT6ocTGWU4kyfgdpqHRhULpfN5aFMeC6Cj9WLOFsqbc9ZJ0HOqkw0CZPnm85j4qE5D8G5UlDKyzJcNK7v5sMN2x73BvcLw7npWimilvXjO1QnOBuSjpxFPkkqayz3pq1g87CjLOp7MXfT2hhonwbK9PVRJw11J7vs9py4xQAATFzdYt1Vf99Jo3n-6zaJVIHdjeNyJNPFGjWzwu2422B6ss8RAlW-KDMTH9_XaVvAs.iyq-l51LIgnjdcqrrCVlrwstF_IMDLPXD686UDpAvgg&dib_tag=se&keywords=a+young+boys+dream&qid=1720555471&s=books&sprefix=a+young+boys+%2Cstripbooks-intl-ship%2C276&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/haroon.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>LEADERS ARE NOT PROPHETS: You Are a Leader…Be Confident About Inspiring Others</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Haroon Khan</span>
                                <p>Why Do Some Leaders Make People Feel Important and Inspire Them To Achieve Success Again
                                    And Again?</p>
                                <a href="https://www.amazon.com/LEADERS-ARE-NOT-PROPHETS-Confident-ebook/dp/B0CJZC6TW9/ref=sr_1_1?crid=3B2PH153WEOAH&dib=eyJ2IjoiMSJ9.SOyWOM5cK-zuEvC0xvXExQ.oOQA_ytOmwF9wJ-wjdYON_CzRjDEzNYYrddtwKrpA7U&dib_tag=se&keywords=leaders+are+not+prophet&qid=1720558353&s=books&sprefix=leaders+are+not+prophe%2Cstripbooks-intl-ship%2C285&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/matilda.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Diamonds in the Dirt: A Women's Journey from Survival to Serenity</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Matilda Cathyagar</span>
                                <p>This book can serve as a guide to wholeness for others who have suffered sexual abuse. It
                                    also delivers a colorful backdrop</p>
                                <a href="https://www.amazon.com/Diamonds-Dirt-Journey-Survival-Serenity/dp/B0CJ3X988K/ref=sr_1_5?crid=1OIPXXOXFWPOA&dib=eyJ2IjoiMSJ9.yHHkRaT8kGBYZCjhhtAKPnBPkMP8qTPPwGCSRR-HH5zpMBXdyzh3V5Uole5ccIgz_5hS5i2-CJwJSD34ChUxurUQYpmztfdTHrx-G5ZuOsBOddBNW5abFB2ZubQ1M3bF9qNoBdqUJdfZFI1UeL6p3kyaonUMtxd1iyOdzFYLwWHsSytpfIhrUwN_nxV9yLCqcWbHMtBqTXMocx8VNwqkPrH0BUvhI648MO_Xuwh-TOE.5px1aArZVvfFC7Ct-vC_O2TuJwTaR1WQ79Op2Pc1DhY&dib_tag=se&keywords=diamond+in+the+dirt&qid=1720563234&s=books&sprefix=diamond+in+the+dir%2Cstripbooks-intl-ship%2C274&sr=1-5"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/stephen.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>The Invisible <br />Enemy</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Stephen J. Babsky</span>
                                <p>In the dynamic urban center of China, beneath the shadow of towering research facilities,
                                    two American agents are entrusted</p>
                                <a href="https://www.amazon.com/Invisible-Enemy-Stephen-J-Babsky-ebook/dp/B0CK7XKGKM/ref=sr_1_1?crid=1TVV7RUZL9HYN&dib=eyJ2IjoiMSJ9.wmTLX27ro0yreCtLA1fhf3sOzlqI4TPGQIOd8cXnvoBp_WUGAFKqoHw5Tse_2aq_noO8vR7OUxqeI84glhy5dkAhlX6dWG0gQ7ePFxwAorQVr6qD-smq1PgNGK9WFL5cv_HHPal0tK_dSBYPa9Kq7InDcP92qBrSJUXItHdcbpz1rop6-EZr1QrG3lIr1cLV7u-HK-PlSA9EAzkfWFJ_LFJC4YktNBuwlDlQ_oESC_s.3-3fyVg4NnkLd7t09TSLlwh5N-fXVAPruXCT4hg4X4M&dib_tag=se&keywords=the+invisible+enemy&qid=1720565359&s=books&sprefix=the+invisible+enem%2Cstripbooks-intl-ship%2C271&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/alex.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Denying the Beauty Within: The Forbidden SMILE</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Alexandra Lovio</span>
                                <p>To my children,
                                    Thank you for believing in me and making it possible to become the mother you so
                                    deserved as children.</p>
                                <a href="https://www.amazon.com/Denying-Beauty-Within-Forbidden-SMILE/dp/B0CKKJL2MR/ref=sr_1_1?crid=18ZXB1D5U26BD&dib=eyJ2IjoiMSJ9.lviSqRGvY6CPbmLI-ytKjou6TVgNesCOKevx4fd8xoXGjHj071QN20LucGBJIEps.jaHkkb6iIH03E6tEXcAGbdqs5AXdul2p1ohRlmuwV8U&dib_tag=se&keywords=Denying+the+beauty+within&qid=1720482971&s=books&sprefix=denying+the+beauty+within%2Cstripbooks%2C329&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/brad.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Hate Me Now, Thank Me Later: Barefoot Brad’s Guide to Healthy Aging and Weight Loss</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Brad Henderson</span>
                                <p>This book is about a hero. The hero in the book is you. All humans have the same basic
                                    goals in life: Survive and thrive.</p>
                                <a href="https://www.amazon.com/Hate-Me-Now-Thank-Later/dp/B0CLJQGSY3/ref=sr_1_1?crid=39IXDVKRL470W&dib=eyJ2IjoiMSJ9.ED5bwifj6krlYpeJSkC9uG0oPyiRtrInuSeLyh1r9c4.fRC6SXhHKKwMR_24jljIjRK6Jm3B9cGqGhM-dh1K2ws&dib_tag=se&keywords=hate+me+now+thank+me+later+brad+henderson&qid=1720555940&s=books&sprefix=hate+me+now+%2Cstripbooks-intl-ship%2C276&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/brandon.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>The Art <br />of Adaptation</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Brandon Richard</span>
                                <p>As a young boy, Brandon’s world shatters when he is forced to move away from home,
                                    leaving behind the one person</p>
                                <a href="https://www.amazon.com/Art-Adaptation-Brandon-Richard/dp/1961563126/ref=sr_1_1?crid=3BYCKBB37HDQO&dib=eyJ2IjoiMSJ9.yXE_bMUp69ATWMXB7TTpNkjpyomRlG2PsZTlKwv4XqwH1WqM0Q1Ect4PPRQLSi6OOvUbMv5w-_yD6TjW8_ILD_zVmuCDGvHiS67aIdjJE3eKkbUG1nYYXQmsieD87xPhZIGErNj-n-3E710YYb4Vi-J8t8jVYHUqAG1VvYiNG6h_o8HhcfFj8FDY4k4zYdm6mF6BwxcYsPZSnCsknWuZ3N6DAc-OVCLFonXzw0TM88Y.VWIjz6ipwh3ZOX3xJjjZfb9Xlqz3lQSb1_llgEw_ScQ&dib_tag=se&keywords=the+art+of+adaptation&qid=1720556413&s=books&sprefix=the+art+of+adaptation%2Cstripbooks-intl-ship%2C252&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/adda.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>She Lived Happily <br /> Ever After</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Adda Dahlke</span>
                                <p>Adda Christine Dahlke’s book takes you on a journey of finding joy in simple things–a
                                    memoir that will unravel the incredible</p>
                                <a href="https://www.amazon.com/She-Lived-Happily-Ever-After-ebook/dp/B0CNYJ5SFK/ref=sr_1_1?crid=DY6SX54YA2WE&dib=eyJ2IjoiMSJ9.XI-OiaphJsz89EpDIzRcv-92hyu-8G0MlXws9HsEeP4pSJSplELT7p5bcJrIVEYzrbZtTyDV2BAHZ5dr7abmD8sTmNEvbSlJYoL6xS6nxRFYjRVsRfX4Dape33wUyCvpytpEhyBDylJhJXyyy6sYTiJvm1KTkqrcZq-z7bl0tkBdgu9fMBkXCP-qNgo5ym63kgV96_qubl0P_ciHJOPzbI70xKAudLuY6DqCwO056g-kJlEUjlfMDH9Z6-djzMF75TQqGy2OCQfM2bscXlZVQB__7okayRn4mQfQAFiRsQs.dKbWdjQ_bvJW44xrDDscv1VvkUMDcnt3UMLWxa-3kHY&dib_tag=se&keywords=she+lived+happily+ever+after&qid=1720481009&sprefix=she+lived+happily+ever+after%2Caps%2C335&sr=8-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/drnajiba.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Irreplaceable Human Intelligence:: Surpassing AI Outreach</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Najiba Benabess</span>
                                <p>Irreplaceable Human Intelligence: Surpassing AI Outreach" by Najiba Benabess serves as a
                                    guide for leaders facing</p>
                                <a href="https://www.amazon.com/Irreplaceable-Human-Intelligence-Surpassing-Outreach-ebook/dp/B0CN57VGLN/ref=sr_1_2?crid=265ABI1TD1DRU&dib=eyJ2IjoiMSJ9.jYpgoUju51KWHD7WEIj_2xYk0_g9G6KCt8tVbzlOk-338uGIUqDg-Ou54r2dUSLsiVUOkq4bXcAdIIr4brZRGTCrwf1G2uAuKHMzB687qbRvkTzAqQTGCnwweXAeSEON96y9ZzoNeZY2NjVd-Zw1zAGV5pyaEw2shiklWQK-efqcXbKFm3miye3lgu3CXQXwEBsHoeGYgfEx9aXhB9DT4A.Qhcu4Wybmp28Qs7t1Omvna6-9uylO2vrQvMA26dOp-Y&dib_tag=se&keywords=irreplaceable+human&qid=1720557903&s=books&sprefix=irreplaceable+human%2Cstripbooks-intl-ship%2C261&sr=1-2"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/stacy.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>The Emperor And The Desert Queen</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Stacy Haigney</span>
                                <p>"This novel tells the story of Emperor Aurelian's near-miraculous restoration of the
                                    Roman Empire after it had collapsed</p>
                                <a href="https://www.amazon.com/Emperor-Desert-Queen-Stacy-Haigney-ebook/dp/B0CNMV3QT7/ref=sr_1_1?crid=BQEQ52HZQD9O&dib=eyJ2IjoiMSJ9.MyRXGxKp_56Z2T6O2m5IEQ.muopNuPPAhHX6dJ9TbbxAU2VVfUwUIxG1r6wMuwcqhA&dib_tag=se&keywords=the+emperor+of+and+the+desert+queen&qid=1720565191&s=books&sprefix=the+emperor+of+and+the+desert+quee%2Cstripbooks-intl-ship%2C280&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/ana.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Discovering The Rainforest Where Animals Come To Life</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Ana Marques</span>
                                <p>The author of this children’s book is a talented and passionate storyteller with a love
                                    for vivid imagination.</p>
                                <a href="https://www.amazon.com/Discovering-Rainforest-Where-Animals-Come-ebook/dp/B0CQ73VW9P/ref=sr_1_2?crid=36ZYPVSIUFYGB&dib=eyJ2IjoiMSJ9.d5CDdFuR-WHcGtUc8fT7gL1QseQIvRcEWcpGjQ_YMFeWOLzHNEYAZvUlWuAd0XnmZZchtouxcwUO0xozu80iwzowmnXMO3UzLfat9a4lIBu2cOyPa81bzRiP8PtCbo3UAnwzrLw6J4w5VDexIxWdjPiKFq3iCvYFe4XVXilPHBU8WepmbcagtPBwmh-Iomwmw7SYZI-O3h0sckCy6WifoYII4GkxrVlZHpgvuFEp3xo.1HI-XlIl9auy857n6C3uY9b5JInIHJn3pU8COwfTAfs&dib_tag=se&keywords=discovering+the+rainforest&qid=1720554893&s=books&sprefix=discovering+the+rain%2Cstripbooks-intl-ship%2C302&sr=1-2"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/herbert.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>The Unkosher <br />Truth</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Herbert Brody</span>
                                <p>Herbert Brody's memoir, "The Unkosher Truth," is a refreshing and light-
                                    hearted read, capturing the journey,</p>
                                <a href="https://www.amazon.com/Unkosher-Truth-Herbert-Brody/dp/B0CR5NCL7G/ref=sr_1_1?crid=1GUFH1W1TDLDY&dib=eyJ2IjoiMSJ9.s7AMMu2IVdzfnYWy2UGeFw.PkWm455BRQwNLuFjuBD-i82E0k3I8R-eF7UNSyzKtRY&dib_tag=se&keywords=the+unkosher+truth&qid=1720558654&s=books&sprefix=the+unkosher+truth%2Cstripbooks-intl-ship%2C293&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/richard.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Enterprise Architecture in Action: Turning Business Strategy into Reality</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Richard Reese</span>
                                <p>If you are asking yourself these questions then this book is for you:
                                    Will AI eliminate the need for Enterprise Architects?</p>
                                <a href="https://www.amazon.com/Enterprise-Architecture-Action-Business-Strategy-ebook/dp/B0CQZ48T42/ref=sr_1_1?crid=2N6WJ6BRD0D8L&dib=eyJ2IjoiMSJ9.U9cowWFco3mEhHnwvTiMbAFS9lAYB58gJHnZIj7ScCb6F4uWWf7tuGt7NFIuoYpEF0ZaqfAEiBs9fz6ojGNTgLUiaYG4aSJH9uVExC7tVB9_TQ9VFuoEwCLtmW4csB_MX8isbi-DAbcp4VQPQTuy5d5p87arQtFgmaoVOgPI5i3NteLB2lahr9vQ-dM1acy1DPIbtlYZss1ukQHjeou_Evp53lASZ-yJQ0L9LNHkfZY.ve5WCNOCO2lkZTGfS60fFO7XDQwQEluerjD7Kgzz4yo&dib_tag=se&keywords=enterprise+architecture+in+action&qid=1720563934&s=books&sprefix=enterprise+architecture+in+actio%2Cstripbooks-intl-ship%2C248&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    let content2024 = `
    <ul class="nav nav-tabs my-5" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="jan-tab" data-toggle="tab" data-target="#jan" type="button" role="tab"
                aria-controls="jan" aria-selected="true">Jan</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="feb-tab" data-toggle="tab" data-target="#feb" type="button" role="tab"
                aria-controls="feb" aria-selected="false">Feb</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="mar-tab" data-toggle="tab" data-target="#mar" type="button" role="tab"
                aria-controls="mar" aria-selected="false">Mar</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="apr-tab" data-toggle="tab" data-target="#apr" type="button" role="tab"
                aria-controls="apr" aria-selected="false">Apr</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="may-tab" data-toggle="tab" data-target="#may" type="button" role="tab"
                aria-controls="may" aria-selected="false">May</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="jun-tab" data-toggle="tab" data-target="#jun" type="button" role="tab"
                aria-controls="jun" aria-selected="false">Jun</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="jul-tab" data-toggle="tab" data-target="#jul" type="button" role="tab"
                aria-controls="jul" aria-selected="false">Jul</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="aug-tab" data-toggle="tab" data-target="#aug" type="button" role="tab"
                aria-controls="aug" aria-selected="false">Aug</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="sep-tab" data-toggle="tab" data-target="#sep" type="button" role="tab"
                aria-controls="sep" aria-selected="false">Sep</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="oct-tab" data-toggle="tab" data-target="#oct" type="button" role="tab"
                aria-controls="oct" aria-selected="false">Oct</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="nov-tab" data-toggle="tab" data-target="#nov" type="button" role="tab"
                aria-controls="nov" aria-selected="false">Nov</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="dec-tab" data-toggle="tab" data-target="#dec" type="button" role="tab"
                aria-controls="dec" aria-selected="false">Dec</button>
        </li>
    </ul>
    <div class="container">
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="jan" aria-selected="true" role="tabpanel" aria-labelledby="jan-tab">
                <div class="row align-items-center">
    
                    <div class="col-md-6 col-12 py-md-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/riddhima.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Echoes of <br /> Resilience</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Riddhima Rai</span>
                                <p>"Echoes of Resilience" is a suspense contemporary fiction novel that takes readers on an
                                    emotional journey of</p>
                                <a href="https://www.amazon.com/Echoes-Resilience-Riddhima-Rai-ebook/dp/B0CT8X2VZ9/ref=sr_1_4?crid=20IKYR5M097D4&dib=eyJ2IjoiMSJ9.kaAw0FZR-BNIBalw7gMcoBu8JPsZch-rYG0mX_NucnQjxp2b-bbeq5IO29ZcNg13OCxZgZpW7OwdGr7ObGCY6EwIgHFj19XElLGL2b2ye94QapMsq_Ip0sV6AlSBSwqsq5TjjlviQGTfTdyDcPbDRCLKH9MZGSGWMs-ahfUWEP2WwnwQ_zlHlCQIi6wyaRPqTU7ZWW1HguKll-wZz_g1tEak1t-hcij-HsZJefaGFVM.3QMgvHxJyNLJhSY5KLuhhU0o3_hDX39Sk752w0iyMIA&dib_tag=se&keywords=echoes+of+resilience&qid=1720486523&s=books&sprefix=Echos+of+Resi%2Cstripbooks%2C332&sr=1-4"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/bradley.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>I Just Wanna <br /> Go Home</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Bradley Bisho</span>
                                <p>Surrounded by the charm of the Puritan farming town of Millbrisk, East Anglia, three
                                    sisters – Janice, Gillis, and Agnes</p>
                                <a href="https://www.amazon.com/I-Just-Wanna-Go-Home/dp/B0CTMJ6NW3/ref=sr_1_1?crid=36OKO58R3ZZR2&dib=eyJ2IjoiMSJ9.zltlwAbZ73h_5C5Bca8yrw.pN8U9T6bWxDsIXRfv9UtfScGlTNc0JgOHINO30iY7Eo&dib_tag=se&keywords=i+just+wanna+go+home&qid=1720556204&s=books&sprefix=i+just+wanna+go+ho%2Cstripbooks-intl-ship%2C277&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/george.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Dirtman</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>George Russ</span>
                                <p>Dirt Man originated back in the mid 1970’s as a bedtime story told by the author to his
                                    three youngest children at the time.</p>
                                <a href="https://www.amazon.com/Dirtman-George-Russ-ebook/dp/B0CS58L8P9/ref=sr_1_1?crid=27IMZ9OSKLJ1Y&dib=eyJ2IjoiMSJ9.WpKvgn88e7jOXEOcEQGgLA.f-8hOeUu3Kdo1dbeoQtaxPNNrBoLhJf_6caPfe2NcAE&dib_tag=se&keywords=dirtman&qid=1720558143&s=books&sprefix=dirtman%2Cstripbooks-intl-ship%2C263&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="feb" role="tabpanel" aria-labelledby="feb-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/drapril.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>BEING <br />CHRIST-LIKE</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Dr. April Capiña</span>
                                <p>The author skillfully guides readers through a transforming journey in this biblical
                                    account in order to strengthen their resistance</p>
                                <a href="https://www.amazon.com/BEING-CHRIST-LIKE-Dr-April-Capi%C3%B1a-ebook/dp/B0CTXN4BPS/ref=sr_1_1?crid=DKYC8U1UNN4I&dib=eyJ2IjoiMSJ9.pLPW7xwZKTvEr3xCs8umt8onu0DeBpNqBw0fnIhYPfqib3DL2YZpm8efQGvMCLdlHYRIMJMK-haqAB0qMsGMNS3E9qyzwp7FIUO1JBUIONushNiONnJLv5KoAC9kC5gYMgmwrpjJcD3Mq2r5j0q9Itcw8PfDCLZ21TYZ5CzJinZfRrAEc2zkjf25reWSPtFGii0TGyFJlt38MPQqQd2YQ9ttP8f0nxJ6cYrQwxj64dw.1kta9T808dcsNC3BCuSQtpqiPHkGglL1x0zFJgTp4q0&dib_tag=se&keywords=being+christ+like&qid=1720557711&s=books&sprefix=being+christ+li%2Cstripbooks-intl-ship%2C271&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/zezaf.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Maati In Belgium: An Inspiring Story Of Immigration</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Mohamed Zefzaf</span>
                                <p>Maati in Belgium is an inspiring and unique semi-autobiographical children's story about
                                    immigration as experienced by Maati,</p>
                                <a href="https://www.amazon.com/Maati-Belgium-Inspiring-Story-Immigration/dp/B0CWFD7TPP/ref=sr_1_1?crid=1VYEJXYZAXDC0&dib=eyJ2IjoiMSJ9.utGzVLWNe4K5IyhK8pVO0emYF44Wl7T5s3pdNxu2MkQ.AdxMd00EvYWH-vco3SrVvpACngvtq3lkN-y1qOfMz5E&dib_tag=se&keywords=maati+in+belgium&qid=1720566367&s=books&sprefix=maati+in+%2Cstripbooks-intl-ship%2C250&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="mar" role="tabpanel" aria-labelledby="mar-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-md-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/abdirrazak.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>U.S. CITIZENSHIP AND IMMIGRATION EXAM</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Abdirazak Qasim</span>
                                <p>Learn and successfully pass the United States Citizenship Exam with Abdirazak Qasim's
                                    comprehensive guide.</p>
                                <a href="https://www.amazon.com/U-S-CITIZENSHIP-IMMIGRATION-Abdirazak-Qasim-ebook/dp/B0CWYYHPG6/ref=sr_1_2?crid=2KAY0XSUOP4R5&dib=eyJ2IjoiMSJ9.Di_UnXoLfozpnqjUk1CYDmvgazT-csfeHjLFOeLJv_v0sMXpq8wTo1QONpTJdjcVvblM8mkc7ezmdAI5pjaC4A_cyfFAxRZv7RyK6pPOjB7x8xIWHT6aMfVYsrinFeVgukaRr-1sEXDxx-8GFmk8c2gfvghWzu48akK4_IKvtJq9OpwQIxAObRfWQJTfzhGNt2et--DLl2flIiajsDxOLkK0O3YFymkI8Wq35cB3qNE.YSOYiAh_MOSQu8s5oEiGRibNxKfn3WIf2BahB0EZT3E&dib_tag=se&keywords=us+citizenship+and+immigration+exam&qid=1720553018&s=books&sprefix=us+citizenship+and+immigration+exa%2Cstripbooks-intl-ship%2C253&sr=1-2"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/bert.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Sam R. Squirrel Unlikely Hero</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Bert Haagenstad</span>
                                <p>Join Sam R. the flying squirrel and his adventures when he becomes part of
                                    the Hazelwood School for The Mystical Arts.</p>
                                <a href="https://www.amazon.com/Sam-R-Squirrel-Unlikely-Hero-ebook/dp/B0CXYM4DQZ/ref=sr_1_1?crid=TGLWY07FUQZW&dib=eyJ2IjoiMSJ9.ysxC7RA3N-vHwuB8CEvx22c1e9Dwxtv-MX2QUC49rHnGjHj071QN20LucGBJIEps.EExzlUKu6s0zWb6hj76CaK46F3jzSbUXOWnuBb09aYY&dib_tag=se&keywords=sam+r+squirrel&qid=1720555730&s=books&sprefix=sam+r+squirrel%2Cstripbooks-intl-ship%2C281&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/leonard.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Chiropractic Odyssey: A Journey of Practice, Seminars, Observation and Reading Science
                                </h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Leonard Faye</span>
                                <p>Dr. Faye, a professional Chiropractic doctor, released a new book, “Chiropractic Odyssey
                                    – A Journey of Practice,</p>
                                <a href="https://www.amazon.com/Chiropractic-Odyssey-Practice-Seminars-Observation/dp/B0CY3CG8N8/ref=sr_1_1?crid=F820UG8LYZGV&dib=eyJ2IjoiMSJ9.A5tQBdnPkA4CH-U5Fae3rY3ZVuhVzvqvDrlbefy_dFHqMVBGL5YEP-OfKvCw0momcu2SxdjhRPAaE0m9ABJ6q3fklHJlEQImpjh_9Nn_Kc4.Su_IrdnDwYCM7XPC8HttMQij-kn3qADf9uuyFEG0cwM&dib_tag=se&keywords=chiropractic+odyssey&qid=1720562961&s=books&sprefix=chiropractic+odyssey%2Cstripbooks-intl-ship%2C279&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/skyeabellanosa.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>I AM <br />BECOME</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Skye Abellanosa</span>
                                <p>Not everyone is comfortable or has someone they can share their feelings with, causing
                                    them to bottle up their emotions.</p>
                                <a href="https://www.amazon.com/I-AM-BECOME-Skye-Abellanosa/dp/B0CXGCKLK4/ref=sr_1_2?crid=2CQ3NZB6E2AOL&dib=eyJ2IjoiMSJ9._xdmccQrTSnQdPf8l0OTpVYD8tFyDgNioAOIAxb7ZA02hEOqK6dGBH9IbGTz38CWJjPyFgCU18T9kOwgRZ0UFiD2-LzN8balzznn1wr0qDXWElsgkNgBQ8WC_TJG5iOzk5licGtKv5yuKtSnSUSFaHlNaXfYhTHjL3xoBGfwRZsCg9AylnT701r98vt1ey9f4qANxBtFMbIz6XfsY7IKAwA6iV6Yc9SYi6TXDRnwoLA.YnuYJJm7wli6Cjvw1CD-tIFrx35oWCvBYgVnyZo0TU8&dib_tag=se&keywords=i+am+become&qid=1720564962&s=books&sprefix=i+am+become%2Cstripbooks-intl-ship%2C270&sr=1-2"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="apr" role="tabpanel" aria-labelledby="apr-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/arjun.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Awesome Narsimha Friends: Battle With Asuras</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Arjun Chervu</span>
                                <p>Join the Awesome Narsimha Friends (ANF) Crew as they face a sudden and unexpected threat
                                    in "The Return of the Asuras."</p>
                                <a href="https://www.amazon.com/Awesome-Narsimha-Friends-Battle-Asuras/dp/B0D2VDFW93/ref=sr_1_1?crid=1NOH24TKKA4VW&dib=eyJ2IjoiMSJ9.hH4G7tfQ9i-Ui7WeqIif1Q.4xbHzCUzixtBKLQHnOzkWdTY0xK6z0Q9wAJnVj3isPA&dib_tag=se&keywords=awesome+narsimha+friends&qid=1720555250&s=books&sprefix=awesome+narsim%2Cstripbooks-intl-ship%2C276&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/carey.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Off He Goes</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Carey Trahan</span>
                                <p>Carey Trahan married into a wonderful Cajun family that completely changed her life.
                                    After teaching at various schools</p>
                                <a href="https://www.amazon.com/Off-He-Goes-Carey-Trahan/dp/B0D2QR6DF2/ref=sr_1_1?crid=5QBCUIPECGLH&dib=eyJ2IjoiMSJ9.G5mxQ77ypW29uJ9qJUs_LF9_-QkfVcTcx9K3UNsdxwHJMrqTYJIEV8rs3AcHMG7FFRbkXo8ntNn_lFsetiTOr7Pc0mHeJxak3P85LIMI4tPvPjBBEw7wY4Ib-R8w9k5O.101lASI4VWkEOS03-B85MC0f1xKjjgy9bCc_d2x712A&dib_tag=se&keywords=off+he+goes&qid=1720556578&s=books&sprefix=off+he+goes%2Cstripbooks-intl-ship%2C264&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/sharon.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Reclaiming the Self: A Journey of Healing</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Sharon Alexander</span>
                                <p>Growing up with narcissistic parents, Sharon Alexander survived the insidious cycle of
                                    abuse. She experienced firsthand</p>
                                <a href="https://www.amazon.com/Reclaiming-Self-Journey-Sharon-Alexander/dp/B0D1NBSX6N/ref=sr_1_2?crid=2V5YIE6BSALS4&dib=eyJ2IjoiMSJ9.zu8iEsR3tDIIpM7di4HqFmFleRkPMcTbC9yjVlGkWjT8AatAfXmaC0yQuUY_cZ85WL-fqEvxglBkN7z29wO50Ytx9AfSGQQyd6zT6hLmEfeHeECO2jpgWhdKHusK5I4XAURXUdTjOlZ_RywgbVVmhSDMY0DASBtn4sZ0zejZgHV1yKzU0-qbwooZLEBd3xdo_ZeDHIU79MFdRnh195cPTwK403WH12OFRBnJaNi811g.GPeg-ctrFhLJ5CRDGB8HTvDnyVo3WrvgRVg9-1Sez9Y&dib_tag=se&keywords=reclaiming+the+self&qid=1720564775&s=books&sprefix=reclaiming+the+self%2Cstripbooks-intl-ship%2C270&sr=1-2"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/steve.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>Real Life <br />Rants</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Steve Ricke</span>
                                <p>Real Life Rants is a collection of humorous stories the author lived through as well as
                                    ideas that became stories.</p>
                                <a href="https://www.amazon.com/Real-Life-Rants-Steve-Ricke-ebook/dp/B0D2BSXK9R/ref=sr_1_1?crid=3K44753GLSIWS&dib=eyJ2IjoiMSJ9.aFF8Y9epsTzhuAB6HG8VfEKCKwC9ENOaX7iymFuaq7A-O7EIbOHVIJS15kUMKIX9iLYt6qzP0GcoLCxRMS97dOnTyTabJ0Ki1ge11WvR-1KMA80PNLlsRg3iKeL-DSpiaCkd5Kg78ZPXYb-BXlvKC0pNwf8NiwQ8MiD3wQ7BovFpPD4w08ZDArupQycKMvjA67B8MriFmd-X2F9GjbJAEdvhnUy0bEvmfBwTNek1kFY.4JyTWVpu4iLRzhLp13I447wtb33IhUmrnnggbVBNDeg&dib_tag=se&keywords=real+life+rants&qid=1720565527&s=books&sprefix=real+life+rant%2Cstripbooks-intl-ship%2C279&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="may" role="tabpanel" aria-labelledby="may-tab">
                <div class="row align-items-center">
                    <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
            <div class="tab-pane fade" id="jun" role="tabpanel" aria-labelledby="jun-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/william.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>The legend <br />of Jack Hollow</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>William Strickler</span>
                                <p>The legend of Jack Hollow follows the life of “Hungry” Jack Hollow as he grows into
                                    maturity orphaned on the dirt streets</p>
                                <a href="https://www.amazon.com/legend-Jack-Hollow-William-Strickler/dp/B0D717X5FJ/ref=sr_1_1?crid=3S5GSTLSX94UP&dib=eyJ2IjoiMSJ9.OwXmdj70bEWFlWbBNMITgFS8D2pMjCTnRmU1M_vkPwXK9eyJ4PK6j7eubh3fdrwkquctbtvT2v0xMmElcigKCS2ZXnbabqA5y3m7LYiJK8kEdh8h7ucNj6FOh8O-GN42mjx23wo5tUfnNiVoiPpKGLJtedktdnIFY5v6O_2DvvJ7QQ0HGSdT47uqwKMJi8a05noFzE5i4il-TeYfvot2Hy-xPYAJdCQ-cwD4JuO3SWM.1WzKBByo-Hr1T5_fhaywHh_UZjIqzFCHVVHLyvqwndU&dib_tag=se&keywords=the+legend+of+jack+hollow&qid=1720566006&s=books&sprefix=the+legend+of+jack+hollow%2Cstripbooks-intl-ship%2C263&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="jul" role="tabpanel" aria-labelledby="jul-tab">
                <div class="row align-items-center">
                    <div class="col-md-6 col-12 py-5">
                        <div class="__card d-flex flex-lg-nowrap flex-wrap align-items-start">
                            <div class="__bookImages">
                                <img width="150" height="225" src="../images/portfolio-lp/imelda.webp" alt="Book" />
                            </div>
                            <div class="__content">
                                <h3>BIBLE PLUS <br />NOTHING</h3>
                                <img src="../images/portfolio-lp/default.jpg" alt="Client"
                                    style="margin: 24px 5px 24px 0; box-shadow: 0 4px 10px; border-radius: 50px;">
                                <span>Imelda Anyaoha</span>
                                <p>The Bible, the Word of God, does not need any help to progress or improve, yet today, we
                                    see people getting their spiritual</p>
                                <a href="https://www.amazon.com/BIBLE-PLUS-NOTHING-Imelda-Anyaoha/dp/B0D8L6584S/ref=sr_1_1?crid=2G186IPVPG1D4&dib=eyJ2IjoiMSJ9.p4-wozOK6vCd8hUUWLi5zLO9NbwvfGuzswWTfHUeDOz5EZVov9CIOnKKWA2cSyTUP9KCAaPYyKqterERMk68r5qiuhaZ1SGDLlOm0vXQLmGXtsdZFlK98LtCM5bEhJJDgEKCNAFUcdeGYKOeSmhxgW1zzbn-O2dorNfL7XonAa_ThwK9eYvGKS0SfU0HzsUvzK0QbBDDos4qMyvDWMd8bQ-6UypYUfAiNQcBxAD_NXY.FjvgSF5PxtUCxsWiplXAFqdeG163kzz6WXlv5Z5oM9Y&dib_tag=se&keywords=bible+plus+nothing&qid=1720558868&s=books&sprefix=bible+plus+nothing%2Cstripbooks-intl-ship%2C260&sr=1-1"
                                    target="_blank"><u>Visit On Amazon</u> <img
                                        src="../images/portfolio-lp/arrow-right-orange.png" alt="Icons"
                                        class="d-inline-block"></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="aug" role="tabpanel" aria-labelledby="aug-tab">
                <div class="row align-items-center">
                    <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
            <div class="tab-pane fade" id="sep" role="tabpanel" aria-labelledby="sep-tab">
                <div class="row align-items-center">
                    <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
            <div class="tab-pane fade" id="oct" role="tabpanel" aria-labelledby="oct-tab">
                <div class="row align-items-center">
                    <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
            <div class="tab-pane fade" id="nov" role="tabpanel" aria-labelledby="nov-tab">
                <div class="row align-items-center">
                    <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
            <div class="tab-pane fade" id="dec" role="tabpanel" aria-labelledby="dec-tab">
                <div class="row align-items-center">
                    <p class="text-center py-5 w-100">No Book Found</p>
                </div>
            </div>
        </div>
    </div>
    `
    if (x == 2023){
    document.getElementById("yearlyTabsChangeContent").innerHTML = content2023;
    } else if (x == 2024) {
    document.getElementById("yearlyTabsChangeContent").innerHTML = content2024;
    }
    
    }