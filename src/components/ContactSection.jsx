import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
// import { useState } from "react";

export const ContactSection = () => {

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);

//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//       setIsSubmitting(false);
//     }, 1500);
//   };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-8">
            

            <div className="space-y-6   justify-between mt-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rathoreyug87@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start"> Phone</h4>
                  <a
                    href="tel:+918743954285"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8743954285
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Haryana, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/yugshrestha-rathore-a574a328a/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://x.com/Yugshrestha_TW" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/yugg_ig/" target="_blank">
                  <Instagram />
                </a>
                
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};