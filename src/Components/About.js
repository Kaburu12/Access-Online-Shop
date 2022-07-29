import React from "react";

const About = () => {
  return (
    <div id="about-container">
      <div id="about">
        <h1>About Us</h1>
        <div className="our-mission">
          <p>
            Africa's no. 1 online shopping shop .<br />
            Access-Shop is your number one Online Shopping solution. <br />
            You can purchase all your mobile phones, tablets, computers &
            laptops <br /> and more online and have them delivered to you.{" "}
            <br /> Access-Shop has payment options that suit everyone,
            <br />
            and we have a payment-on-delivery option for extra convenience.
          </p>
        </div>
        <div className="about-left">
          <h2>Contact</h2>
          <ul>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/484/484525.png"
                alt="icons"
              />{" "}
              +254720000001
            </li>
            <li>
              <img
                src="https://cdn-icons.flaticon.com/png/512/2374/premium/2374449.png?token=exp=1659009173~hmac=343e37d0b78e6b3d8d45dc3515636207"
                alt="icons"
              />{" "}
              @infoaccess-shop
            </li>
            <li>
              <img
                src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494475.png?token=exp=1659008117~hmac=2809bfb15427bb99a937443801518018"
                alt="icons"
              />
              Facebook
            </li>
            <li>
              <img
                src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1659008117~hmac=35931595acc4f14d6639945e57fb002b"
                alt="icons"
              />
              Linkedin
            </li>
            <li>
              <img
                src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494477.png?token=exp=1659008117~hmac=6b01430401e3a2dae4544c48686706e9"
                alt="icons"
              />
              Twitter
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="icons"
              />
              Instagram
            </li>
          </ul>
        </div>
      </div>
      <section>
        <footer>
          <h3>Access-Shop</h3>
          <p>Designed by : Michael Kaburu | Contact : @infoaccessshop</p>
          <p>Copyright © 2022</p>
        </footer>
      </section>
    </div>
  );
};

export default About;
