import map from "../assets/sample-map.jpg";
import emailIcon from "../assets/email-outline.svg";
import phoneIcon from "../assets/phone-outline.svg";
import locationIcon from "../assets/map-marker-outline.svg";

const Contact = () => {
  return (
    <main>
      <header>
        <h1>Contact Us</h1>
      </header>
      <div>
        <section>
          <h2>Miralou No.1</h2>
          <ul>
            <li>
              <img src={locationIcon} alt="location" width="24" height="24" />{" "}
              2715 Ash Dr. San Jose, South Dakota 83475
            </li>
            <li>
              <img src={phoneIcon} alt="phone" width="24" height="24" /> (808)
              555-0111
            </li>
            <li>
              <img src={emailIcon} alt="Email" width="24" height="24" />{" "}
              miralou.contacts@example.com
            </li>
          </ul>
          <h2>Miralou No.2</h2>
          <ul>
            <li>
              <img src={locationIcon} alt="location" width="24" height="24" />{" "}
              445 MLK Street, Soth Dakota 55631
            </li>
            <li>
              <img src={phoneIcon} alt="phone" width="24" height="24" /> (808)
              333-0888
            </li>
            <li>
              <img src={emailIcon} alt="Email" width="24" height="24" />{" "}
              miralou.contacts@example.com
            </li>
          </ul>
        </section>
        <img src={map} alt="Map of locations" width="1040" height="612" />
      </div>
      <div>
        <section>
          <h2>Get in Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            elementum malesuada leo, ut pretium nulla tincidunt at. Curabitur
            pretium mattis molestie. Cras tincidunt euismod suscipit. In sed
            nisi erat. Suspendisse posuere libero a tellus iaculis facilisis.
            Duis vel tellus augue. Vivamus cursus leo a tellus porta maximus.
          </p>
        </section>
        <form>
          <input type="text" id="name" placeholder="Name" aria-label="Name" />
          <input
            type="email"
            id="email"
            placeholder="Email"
            aria-label="Email"
          />
          <textarea
            id="message"
            placeholder="Message..."
            aria-label="Message"
          />
          <button>Send Message</button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
