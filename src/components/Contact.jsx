import { motion } from "framer-motion";
import { CONTACT } from "../constants";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

export const GmailEmailLink = ({ email, subject = "", body = "" }) => {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={gmailLink} target="_blank" rel="noopener noreferrer">
      {email}
    </a>
  );
};

export const PhoneLink = ({ phoneNumber }) => {
  return (
    <a href={`tel:${phoneNumber}`} className=" hover:underline">
      {phoneNumber}
    </a>
  );
};

const Contact = () => {
  return (
    <div className="border-t border-stone-500 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <FaLocationDot className="inline-block mr-2 text-[#9f1239]" />{" "}
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <BiLogoGmail className="inline-block mr-2 text-[#dc2626]" />{" "}
          <GmailEmailLink
            email={CONTACT.email}
            subject="Let's Connect"
            body="Hello, I would like to connect with you."
          />
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <IoCall className="inline-block mr-2 text-[#15803d]" />{" "}
          <PhoneLink phoneNumber={CONTACT.phoneNo} />
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
