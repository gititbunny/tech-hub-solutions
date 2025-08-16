export default function MapEmbed() {
  return (
    <section className="map">
      <div className="container map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.635246469677!2d30.23491131503219!3d-23.8853198848719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d8b8b1a5a5a5%3A0x1a3b3b3b3b3b3b3b!2sLetsitele%2C%200885%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1629196911285!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Letsitele Map"
        ></iframe>
      </div>
    </section>
  );
}
