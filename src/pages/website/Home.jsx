import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero__eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".hero__title span",
          {
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .from(
          ".hero__description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".hero__buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".hero__features",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          ".hero__image-wrapper",
          {
            scale: 1.15,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=1",
        )
        .from(
          ".hero__circle",
          {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.7",
        );

      gsap.to(".hero__image-wrapper", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero__circle", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="container">
          <div className="row align-items-center min-vh-100 py-5">
            <div className="col-lg-6">
              <div className="hero__content">
                <p className="hero__eyebrow">PREMIUM FURNITURE CARE</p>

                <h1 className="hero__title">
                  <span>Restore.</span>
                  <span>Refine.</span>
                  <span>Redefine.</span>
                </h1>

                <p className="hero__description">
                  Give your furniture a fresh new life with professional
                  polishing, painting and restoration services using premium
                  materials and expert craftsmanship.
                </p>

                <div className="hero__buttons d-flex flex-wrap gap-3">
                  <Link to="/booking" className="common__btn w-50">
                    Book a Service
                  </Link>
                </div>

                <div className="hero__features d-flex flex-wrap gap-4 mt-4">
                  <div>
                    <strong>✓ Premium Finish</strong>
                  </div>

                  <div>
                    <strong>✓ Professional Work</strong>
                  </div>

                  <div>
                    <strong>✓ Quality Materials</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero__visual position-relative">
                <div className="hero__circle"></div>

                <div className="hero__image-wrapper">
                  <img
                    src="/images/furniture-hero.jpg"
                    alt="Professional Furniture Polishing"
                    className="hero__image"
                  />
                </div>

                <div className="hero__badge">
                  <span>15+</span>
                  <small>
                    Years of
                    <br />
                    Craftsmanship
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="py-5 py-lg-6 bg-light overflow-hidden"
      >
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div ref={imageRef} className="position-relative">
                <img
                  src="/images/about-furniture.jpg"
                  alt="Furniture polishing"
                  className="img-fluid rounded-4 shadow-lg w-100"
                  style={{
                    height: "500px",
                    objectFit: "cover",
                  }}
                />

                <div className="position-absolute bottom-0 start-0 m-4 bg-white rounded-4 shadow p-3 px-4">
                  <h3 className="fw-bold mb-0">15+</h3>
                  <small className="text-muted">Years of Experience</small>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div ref={contentRef}>
                <span
                  className="text-uppercase fw-semibold small"
                  style={{ letterSpacing: "3px" }}
                >
                  About Us
                </span>

                <h2 className="display-5 fw-bold mt-3 mb-4">
                  Bringing New Life to
                  <span className="d-block">Your Furniture</span>
                </h2>

                <p className="text-muted fs-5 lh-lg">
                  We specialize in professional furniture polishing,
                  restoration, and finishing services. Our goal is to transform
                  old and worn-out furniture into beautiful pieces that look
                  fresh and elegant.
                </p>

                <p className="text-muted lh-lg">
                  From traditional wooden furniture to modern interiors, our
                  skilled team focuses on quality craftsmanship, attention to
                  detail, and long-lasting finishes.
                </p>

                <div className="row mt-4 mb-4">
                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center"
                        style={{
                          width: "42px",
                          height: "42px",
                        }}
                      >
                        ✓
                      </div>

                      <span className="fw-semibold">Quality Finishing</span>
                    </div>
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center"
                        style={{
                          width: "42px",
                          height: "42px",
                        }}
                      >
                        ✓
                      </div>

                      <span className="fw-semibold">Skilled Craftsmanship</span>
                    </div>
                  </div>
                </div>

                <a href="/about" className="common__btn">
                  Learn More
                  <span className="ms-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
