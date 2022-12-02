import React from "react";

const Sidebar = () => {
  

  return (
    <>
    <body className="app ">
    {/* <!-- Sidebar content here --> */}
    <div class="sidebar">
    <div class="sidebar-inner">
        <div class="sidebar-logo">
        <div class="d-flex align-items-center flex-nowrap">
            <a class="sidebar-link text-decoration-none" href="#">
            <div class="d-flex align-items-center flex-nowrap">
                <div class="logo-sm">
                <div class="logo d-flex align-items-center justify-content-center">
                    {/* <!-- The Minify logo here --> */}
                    <img src="assets/img/logo.png" alt="" />
                </div>
                </div>
                <div class="logo-text d-flex align-items-center justify-content-center">
                    {/* <!-- The Full Logo here --> */}
                    <img src="assets/img/logo.png" alt="" />
                </div>
            </div>
            </a>
            <div class="">
            <div class="mobile-toggle sidebar-toggle">
                <a href="#" class="text-decoration-none">
                {/* <!-- closing sidebar icon here --> */}
                </a>
            </div>
            </div>
        </div>
    </div>
              
    <ul class="sidebar-menu scrollable position-relative">
        <li class="nav-item dropdown">
            <a class="nav-link" href="#">
                {/* <!-- Navigation icon here  --> */}
            <span class="icon-holder">
                {/* <i class="fal fa-home"></i> */}
                <img src="assets/img/menu.svg" alt="" />
            </span>
            {/* <!-- Navigation link here --> */}
            <span class="title">Dashboard</span>
            </a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#">
            <span class="icon-holder">
                {/* <i class="fas fa-fingerprint"></i> */}
                <img src="assets/img/chart.svg" alt="" />
            </span>
            <span class="title">Trade</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#">
            <span class="icon-holder">
                {/* <i class="fas fa-fingerprint"></i> */}
                <img src="assets/img/wallet.svg" alt="" />
            </span>
            <span class="title">Wallet</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#">
            <span class="icon-holder">
                {/* <i class="fas fa-fingerprint"></i> */}
                <img src="assets/img/chatting.svg" alt="" />
            </span>
            <span class="title">Message</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#">
            <span class="icon-holder">
                {/* <i class="fas fa-fingerprint"></i> */}
                <img src="assets/img/gear.svg" alt="" />
            </span>
            <span class="title">Settings</span>
            {/* <!-- Icon for dropdown here --> */}
            </a>
        </li>
        </ul>
    </div>
</div>



    <div className="container-wide">
        {/* <!-- Page content here --> */}
        <a id="sidebar-toggle" class="sidebar-toggle nav-link" href="#">
        <i class="fa-solid fa-bars"></i>
</a>
    </div>
</body>
    </>
  );
};

export default Sidebar;
