"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, Star, ThumbsUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="medium"
        background="circleGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Reviews", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="R&B Creative"
      button={{ text: "Get Started", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "gradient-bars" }}
      title="Empowering Your Business Through Creative Excellence"
      description="We are a passionate team dedicated to crafting websites, optimizing social media, and delivering creative solutions that drive real results. Join our satisfied partners."
      tag="Trusted Digital Agency"
      buttons={[{ text: "View Our Reviews", href: "#testimonials" }]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/people-working-together-animation-studio_23-2149207962.jpg", imageAlt: "creative agency meeting" },
        { imageSrc: "http://img.b2bpic.net/free-photo/business-chart-visual-graphics-report-concept_53876-125580.jpg", imageAlt: "digital marketing interface" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="5.0 Rating from 6 Google Reviews"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Creative Souls," },
        { type: "image", src: "http://img.b2bpic.net/free-photo/work-desk-with-papers_1134-249.jpg", alt: "About R&B" },
        { type: "text", content: "Reliable Results" },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Mobiart", "Hovhannisyan Corp", "Panosyan Studios", "Tech Solutions", "Creative Lab", "Growth Partners", "Digital Hub"]}
      title="Trusted by Growing Brands"
      description="We partner with industry-leading brands to deliver exceptional digital experiences."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        { title: "Web Development", description: "Beautiful, high-performing websites designed to convert visitors into customers.", imageSrc: "http://img.b2bpic.net/free-photo/ideas-creative-mission-strategy-vision-concept_53876-124143.jpg" },
        { title: "Social Media Growth", description: "Strategic management to make your social platforms look better than ever.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nmvvdo" },
        { title: "Creative Strategy", description: "Unique, professional ideas from specialists committed to your success.", imageSrc: "http://img.b2bpic.net/free-psd/social-media-logo-design_23-2151299465.jpg" },
      ]}
      title="How We Help You Grow"
      description="Our team specializes in tailored solutions to increase your online presence and sales."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "9+", title: "Years Experience", description: "Long-term partnership approach.", icon: Award },
        { id: "m2", value: "100%", title: "Client Satisfaction", description: "Kind and helpful support.", icon: Star },
        { id: "m3", value: "6", title: "Verified Reviews", description: "Consistently 5-star feedback.", icon: ThumbsUp },
      ]}
      title="Milestones We've Achieved"
      description="Our passion drives measurable impact for our clients."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Mobiart Accessories", role: "Partner", company: "Accessories Brand", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-business-executive-with-arms-crossed_1170-1133.jpg" },
        { id: "t2", name: "Margarita Hovhannisyan", role: "Client", company: "Creative Industry", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-serious-bearded-male-dressed-suit_613910-5596.jpg" },
        { id: "t3", name: "Arpine Panosyan", role: "Customer", company: "Service Provider", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-desk-front-view_23-2149741202.jpg" },
        { id: "t4", name: "John Doe", role: "Client", company: "Startup", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/people-working-together-office_23-2149337246.jpg" },
        { id: "t5", name: "Jane Smith", role: "Partner", company: "GrowthCo", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/top-view-arrangement-emotions_23-2148860286.jpg" },
      ]}
      kpiItems={[
        { value: "5.0", label: "Avg Rating" },
        { value: "6", label: "Google Reviews" },
        { value: "100%", label: "Happy Clients" },
      ]}
      title="Kind Words from Our Partners"
      description="We are proud to serve such amazing clients and help their businesses thrive."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How long have you been in business?", content: "We have been providing creative services for over 9 years." },
        { id: "f2", title: "What makes your team different?", content: "Our team is built on creative ideas, kindness, and deep expertise." },
        { id: "f3", title: "Can you help our sales grow?", content: "Yes, our social media and web strategies are proven to increase sales." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-customer-support-representative-wearing-headset-while-working-call-center_637285-133.jpg"
      title="Common Questions"
      description="Everything you need to know about working with us."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      title="Ready to Start Your Awesome Project?"
      description="We are ready to hear your ideas and turn them into something great."
      tag="Get In Touch"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="R&B Creative"
      columns={[
        { title: "Explore", items: [{ label: "Home", href: "#hero" }, { label: "About", href: "#about" }] },
        { title: "Support", items: [{ label: "Reviews", href: "#testimonials" }, { label: "Contact", href: "#contact" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
