// import gsap from 'gsap';
// import { SplitText} from 'gsap/all'
// import { useGSAP } from '@gsap/react'

// const About = () => {
//  useGSAP(() => {
// 	const titleSplit = SplitText.create('#about h2', {
// 	 type: 'words'
// 	})

// 	const scrollTimeline = gsap.timeline({
// 	 scrollTrigger: {
// 		trigger: '#about',
// 		start: 'top center'
// 	 }
// 	})

// 	scrollTimeline
// 	 .from(titleSplit.words, {
// 		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
// 	})
// 	 .from('.top-grid div, .bottom-grid div', {
// 		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
// 	}, '-=0.5')
//  })

//  return (
// 	<div id="about">
// 	 <div className="mb-16 md:px-0 px-5">
// 		<div className="content">
// 		 <div className="md:col-span-8">
// 			<p className="badge">Best Cocktails</p>
// 			<h2>
// 			 Where every detail matters <span className="text-white">-</span>
// 				from muddle to garnish
// 			</h2>
// 		 </div>

// 		 <div className="sub-content">
// 			<p>
// 			 Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
// 			</p>

// 			<div>
// 			 <p className="md:text-3xl text-xl font-bold">
// 				<span>4.5</span>/5
// 			 </p>
// 			 <p className="text-sm text-white-100">
// 				More than +12000 customers
// 			 </p>
// 			</div>
// 		 </div>
// 		</div>
// 	 </div>

// 	 <div className="top-grid">
// 		<div className="md:col-span-3">
// 		 <div  className="noisy" />
// 		 <img src="/images/abt1.png" alt="grid-img-1" />
// 		</div>

// 		<div className="md:col-span-6">
// 		 <div  className="noisy" />
// 		 <img src="/images/abt2.png" alt="grid-img-2" />
// 		</div>

// 		<div className="md:col-span-3">
// 		 <div  className="noisy" />
// 		 <img src="/images/abt5.png" alt="grid-img-5" />
// 		</div>
// 	 </div>

// 	 <div className="bottom-grid">
// 		<div className="md:col-span-8">
// 		 <div  className="noisy" />
// 		 <img src="/images/abt3.png" alt="grid-img-3" />
// 		</div>

// 		<div className="md:col-span-4">
// 		 <div  className="noisy" />
// 		 <img src="/images/abt4.png" alt="grid-img-4" />
// 		</div>
// 	 </div>

// 	</div>
//  )
// }
// export default About

import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Enhanced animations with multiple layers
    scrollTimeline
      .from(".badge", {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .from(
        titleSplit.words,
        {
          opacity: 0,
          duration: 1.2,
          yPercent: 100,
          rotationX: 90,
          ease: "expo.out",
          stagger: 0.03,
        },
        "-=0.3"
      )
      .from(
        ".about-description",
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .from(
        ".rating-card",
        {
          opacity: 0,
          scale: 0.9,
          y: 30,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )
      .from(
        ".grid-item",
        {
          opacity: 0,
          scale: 0.95,
          y: 40,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.4"
      );

    // Floating animation for images
    gsap.to(".grid-item img", {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.2,
    });

    // Parallax effect for background elements
    gsap.to(".parallax-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  return (
    <div id="about" className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="parallax-bg absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="mb-16 md:px-0 px-5 relative z-10">
        <div className="">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8">
              <div className="badge inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm font-medium text-white mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
                <span className="relative z-10 text-purple-800 ">
                  Best Cocktails
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Where every detail matters{" "}
                <span className="text-amber-400 mr-2">—</span>
                from muddle to garnish
              </h2>
            </div>

            <div className="md:col-span-4 space-y-8 md:mt-16">
              <div className="about-description">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Every cocktail we serve is a reflection of our obsession with
                  detail — from the first muddle to the final garnish. That care
                  is what turns a simple drink into something truly memorable.
                </p>
              </div>

              <div className="rating-card bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
                <div className="relative z-10">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                      4.5
                    </span>
                    <span className="text-xl text-gray-400">/5</span>
                    <div className="flex ml-2 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < 4 ? "text-amber-400" : "text-gray-600"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    More than{" "}
                    <span className="text-white font-semibold">+12,000</span>{" "}
                    customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Grid Layout */}
      <div className="space-y-4  px-4">
        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-3 grid-item group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div className="noisy absolute inset-0 opacity-20"></div>
                <img
                  src="/images/abt1.png"
                  alt="Cocktail crafting detail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 grid-item group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div className="noisy absolute inset-0 opacity-20"></div>
                <img
                  src="/images/abt2.png"
                  alt="Friends enjoying cocktails"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 grid-item group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div className="noisy absolute inset-0 opacity-20"></div>
                <img
                  src="/images/abt5.png"
                  alt="Premium cocktail preparation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          <div className="md:col-span-8 grid-item group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div className="noisy absolute inset-0 opacity-20"></div>
                <img
                  src="/images/abt3.png"
                  alt="Colorful cocktail collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 grid-item group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden">
                <div className="noisy absolute inset-0 opacity-20"></div>
                <img
                  src="/images/abt4.png"
                  alt="Artisanal cocktail ingredients"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
