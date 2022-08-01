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
                src="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1659353501~hmac=fce2315992956211adcbd1b7549be8e9"
                alt="icons"
              />{" "}
              @infoaccess-shop
            </li>
            <li>
              <img
                src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494479.png?token=exp=1659353198~hmac=00d9bf86c36ac8fdbb6448629804e72b"
                alt="icons"
              />
              Facebook
            </li>
            <li>
              <img
                src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1659353198~hmac=5d4057a43377412394470562690a0ee4"
                alt="icons"
              />
              Linkedin
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
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
