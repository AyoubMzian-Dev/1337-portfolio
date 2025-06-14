"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { khouribga1, khouribga2, khouribga3, rabat, rabat2, rabat3, tetouan, tetouan2, tetouan3, tetouan4, benguerir1, benguerir2, benguerir3, benguerir4, benguerir5 } from "@/lib/images"
import { imacsCount } from "@/lib/content"

export default function CampusGallery() {
  const [activeTab, setActiveTab] = useState("khouribga")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  // Reset scroll position when activeTab changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth"
      })
    }
  }, [activeTab])

  const campusImages = {
    khouribga: [
      {
        src: khouribga1.src,
        alt: "Khouribga Campus Main Hall",
        caption: "Main Hall with 300 iMacs",
      },
      {
        src: khouribga2.src,
        alt: "Khouribga Campus Collaboration Space",
        caption: "Collaboration Space",
      },
      {
        src: khouribga3.src,
        alt: "Khouribga Campus Cafeteria",
        caption: "Campus Cafeteria",
      }
    ],
    benguerir: [
      {
        src: benguerir1.src,
        alt: "Ben Guerir Campus Exterior",
        caption: "Mohammed VI Polytechnic University Campus",
      },
      {
        src: benguerir2.src,
        alt: "Ben Guerir Campus Workstations",
        caption: "Student Workstations",
      },
      {
        src: benguerir3.src,
        alt: "Ben Guerir Campus Meeting Room",
        caption: "Meeting and Project Rooms",
      },
      {
        src: benguerir4.src,
        alt: "Ben Guerir Campus Lounge",
        caption: "Student Lounge",
      },
      {
        src: benguerir5.src,
        alt: "Ben Guerir Campus View",
        caption: "Campus View",
      },
    ],
    tetouan: [
      {
        src: tetouan.src,
        alt: "Tétouan Campus Entrance",
        caption: "Med Campus Entrance",
      },
      {
        src: tetouan2.src,
        alt: "Tétouan Campus Lab",
        caption: "Computer Lab with 210 iMacs",
      },
      {
        src: tetouan3.src,
        alt: "Tétouan Campus Breakout Area",
        caption: "Breakout and Brainstorming Area",
      },
      {
        src: tetouan4.src,
        alt: "Tétouan Campus View",
        caption: "Campus View",
      },
    ],
    rabat: [
      {
        src: rabat.src,
        alt: "Rabat Campus Main Hall",
        caption: "Main Hall with 210 iMacs",
      },
      {
        src: rabat2.src,
        alt: "Rabat Campus View",
        caption: "Campus View",
      },
      {
        src: rabat3.src,
        alt: "Rabat Campus View",
        caption: "Campus View",
      }
    ],
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef
      const scrollAmount = direction === "left" ? -container.clientWidth : container.clientWidth
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-primary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-text mb-4">{t.campuses.gallery.title}</h2>
          <p className="text-text/70 text-lg max-w-3xl mx-auto">{t.campuses.gallery.subtitle}</p>
        </div>

        {/* Campus Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(campusImages).map(([id]) => (
            <Button
              key={id}
              onClick={() => setActiveTab(id)}
              variant={activeTab === id ? "default" : "outline"}
              className={`font-mono ${
                activeTab === id
                  ? "bg-[#00ff8c] text-[#020c1b] hover:bg-bg-primary-90"
                  : "border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c]"
              }`}
            >
              {id === "khouribga"
                ? t.campuses.gallery.campusLabels.khouribga
                : id === "benguerir"
                  ? t.campuses.gallery.campusLabels.benguerir
                  : id === "tetouan"
                    ? t.campuses.gallery.campusLabels.tetouan
                    : id === "rabat"
                      ? t.campuses.gallery.campusLabels.rabat
                      : "there is no campus"}
            </Button>
          ))}
        </div>

        {/* Gallery */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-bg-primary-20" style={{ height: "630px" }}>
            {/* Gallery Navigation */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-primary-dark/80 border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c] cursor-pointer"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-primary-dark/80 border-bg-primary-30 text-primary hover:bg-bg-primary-10 hover:border-[#00ff8c] cursor-pointer"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Gallery Images */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory h-full hide-scrollbar scroll-smooth"
              style={{ 
                scrollbarWidth: "none", 
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth"
              }}
            >
              {campusImages[activeTab as keyof typeof campusImages].map((image, index) => (
                <div
                  key={index}
                  className="min-w-full h-full flex-shrink-0 snap-center relative group"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-transparent to-transparent z-10"></div>
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="bg-primary-dark/80 backdrop-blur-sm rounded-xl border border-bg-primary-30 p-4">
                      <h3 className="text-xl font-mono font-bold text-primary mb-1">{image.alt}</h3>
                      <p className="text-text/70">{image.caption}</p>
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-primary-dark/80 backdrop-blur-sm rounded-full border border-bg-primary-30 px-3 py-1 z-20">
                    <span className="text-primary font-mono text-sm">
                      {index + 1}/{campusImages[activeTab as keyof typeof campusImages].length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal-style decorative elements */}
          <div className="absolute top-4 left-4 opacity-70 z-20">
            <div className="font-mono text-xs text-primary">{"> gallery.view()"}</div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-6 grid grid-cols-4 gap-4">
          {campusImages[activeTab as keyof typeof campusImages].map((image, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const { current: container } = scrollContainerRef
                  container.scrollTo({
                    left: index * container.clientWidth,
                    behavior: "smooth",
                  })
                }
              }}
              className="relative rounded-lg overflow-hidden border-2 hover:border-[#00ff8c] transition-colors"
              style={{ height: "80px" }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-dark/50 hover:bg-transparent transition-colors"></div>
            </button>
          ))}
        </div>

        {/* Campus Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#0a192f]/80 to-[#020c1b]/80 backdrop-blur-sm rounded-2xl border border-bg-primary-20 p-6 hover:border-bg-primary-40 transition-colors">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bg-primary-10 rounded-full border border-bg-primary-30">
                <div className="text-2xl font-mono font-bold text-primary">24/7</div>
              </div>
              <h3 className="text-xl font-mono font-semibold text-text">{t.campuses.overview.alwaysOpen.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">{t.campuses.overview.alwaysOpen.description}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0a192f]/80 to-[#020c1b]/80 backdrop-blur-sm rounded-2xl border border-bg-primary-20 p-6 hover:border-bg-primary-40 transition-colors">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bg-primary-10 rounded-full border border-bg-primary-30">
                <div className="text-2xl font-mono font-bold text-primary">{imacsCount}</div>
              </div>
              <h3 className="text-xl font-mono font-semibold text-text">iMacs</h3>
              <p className="text-text/70 text-sm leading-relaxed">{t.campuses.overview.equipment.description}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0a192f]/80 to-[#020c1b]/80 backdrop-blur-sm rounded-2xl border border-bg-primary-20 p-6 hover:border-bg-primary-40 transition-colors">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bg-primary-10 rounded-full border border-bg-primary-30">
                <div className="text-2xl font-mono font-bold text-primary">4</div>
              </div>
              <h3 className="text-xl font-mono font-semibold text-text">{t.campuses.overview.strategic.title}</h3>
              <p className="text-text/70 text-sm leading-relaxed">{t.campuses.overview.strategic.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
