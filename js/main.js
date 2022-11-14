// HEADER
class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light atas ">
            <img src="images/logo.png" class="logo" alt="">
                <a class="navbar-brand" href="profil.html">Anugrah Agung</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                                <a class="nav-link" href="profil.html">Profil</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="katalog.html" role="button" data-toggle="dropdown" aria-expanded="false">
                                Katalog
                            </a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="katalog.html">Katalog</a>
                            <a class="dropdown-item" href="katalog/barang.html">Barang dan Supplier</a>
                            <a class="dropdown-item" href="katalog/jasa.html">Jasa Mekanik</a>
                            <a class="dropdown-item" href="katalog/jasae.html">Jasa Elektrik</a>
                            </div>
                        </li>
                        <li class="nav-item">
                                <a class="nav-link" href="kontak.html">Kontak</a>
                        </li>
                    </ul>
                </div>
            </nav> 
        `
    }
}

// FOOTER
class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer class="foot">
    <div class="divLuar">
        <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 sub3">
                <div class="tentang">
                <img src="../images/logo.png" class="logo" alt="">

                    <h2 class="tgh">
                        <a href="#">CV. Anugrah Agung</a>
                    </h2>
                </div>
                <br>
                <div class="deskripsi f13">
                    <p>CV. Anugrah Agung adalah perusahaan yang bergerak dibidang General Contractor & Supplier yang memiliki fokus pada bidang industri mesin manufaktur (mesin terapan tepat guna), perawatan dan perbaikan mesin industri, serta mechanical electrical service (ME)</p>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-6 col-sm-6 mar">
                        <div class="kontak">
                            <img src="../images/phone-line.svg" alt="">
                            <p>Telepon : </p><br>
                        </div>
                        <p class="p f13">(024) 764 89095</p>
                        <p class="p f13">(024) 764 89096</p>
                    </div>
                    <div class="col-md-6 col-sm-6 mar">
                        <div class="kontak">
                            <img src="../images/phone-line.svg" alt="">
                            <p>Faximile : </p><br>
                        </div>
                        <p class="p f13">(024) 764 82771</p>
                    </div>
                    <div class="col-lg-12 col-md-6 col-sm-6 mar">
                        <div class="kontak">
                            <img src="../images/whatsapp-line.svg" alt="">
                            <p>WhatsApp : </p><br>
                        </div>
                        <p class="p f13">+62 812-2508-170</p>
                        <p class="p f13">+62 856-4000-5562</p>
                    </div>
                    <div class="col-lg-12 col-md-6 col-sm-6 mar">
                        <div class="kontak">
                            <img src="../images/mail-line.svg" alt="">
                            <p>Email : </p><br>
                        </div>
                        <p class="p f13">anugrah_agg@yahoo.com</p>
                        <p class="p f13">enginering.aagroup@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 sub3">
                <h3>Produk dan Jasa</h3>
                <br>
                <h5><a href="">Barang dan Supplier</a></h5>
                <div class="menjorok f13">
                    <ul>
                        <li><a href="barang.html#knockdown">Material Knockdown System</a></li>
                        <li><a href="barang.html#tools">Tools and Power Tools</a></li>
                        <li><a href="barang.html#glove">Glove</a></li>
                        <li><a href="barang.html#tepat_guna">Teknologi Tepat Guna</a></li>
                    </ul>
                </div>
                <h5><a href="">Jasa Mekanik</a></h5>
                <div class="menjorok f13">
                    <ul>
                        <li><a href="jasa.html#cnc">Computer Numerical Control (CNC)</a></li>
                        <li><a href="jasa.html#seal">Mechanical Seal, Gear, and Hidrolics</a></li>
                        <li><a href="jasa.html#welding">Pengelasan (Welding) dan Bubut</a></li>
                        <li><a href="jasa.html#plat">Pekerjaan Plat</a></li>
                        <li><a href="jasa.html#conveyor">Pembuatan Conveyor - Roller Conveyor</a></li>
                    </ul>
                </div>
                <h5><a href="">Jasa Elektrik</a></h5>
                <div class="menjorok f13">
                    <ul>
                        <li><a href="jasae.html#wiring">Pembuatan Panel dan Wiring</a></li>
                        <li><a href="jasae.html#kontrol">Pembuatan/Perbaikan Kontrol Mesin</a></li>
                        <li><a href="jasae.html#pompa">Perbaikan Pompa/Dinamo</a></li>
                        <li><a href="jasae.html#listrik">Instalasi Kelistrikan</a></li>
                    </ul>
                </div>
                
                <div class="temukan">
                    <h5>Temukan juga kami di :</h5>
                    <a href="https://www.instagram.com/cv.anugrahagung/"><img src="../images/instagram-line.svg" alt=""></a> 
                    <a href=""><img src="../images/youtube-line.svg" alt=""></a>
                </div>
            </div>
            <div class="col-lg-5 col-md-12 col-sm-12 sub3">
                <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5821077884657!2d110.46962724940468!3d-7.058288671103695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708e80e9dee363%3A0x8ef2535aac874b74!2sAnugrah%20Agung%20Group!5e0!3m2!1sen!2sid!4v1661151905123!5m2!1sen!2sid" width="550" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <br>
                <div class="kontak">
                    <img src="../images/map-pin-line.svg" alt="">
                    <p>Alamat : </p><br>
                </div>
                <p class="p f13">JI. Raya Meteseh - Rowosari No. 09</p>
                <p class="p f13">Tembalang, Kota Semarang</p>
                <br>
                <br>
            </div>
        </div>
    </div>
</footer>      
        `
    }
} 

customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)











/*
            <header>
                <div class="satu">
                    <img src="images/logo.png" class="logo" alt="">
                    <a href="#" >Anugrah Agung</a>
                </div>

                <nav class="nav">
                    <div class="nav-menu flex-row">
                        <div>
                            <ul class="dua">
                                <li class="nav-link">
                                    <a href="index.html">Home</a>
                                </li>
                                <li class="nav-link">
                                    <a href="profil.html">Profil</a>
                                </li>
                                <li class="nav-link">
                                    <a href="katalog.html">Katalog</a>
                                </li>
                                <li class="nav-link">
                                    <a href="kontak.html">Kontak</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

*/