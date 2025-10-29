import Navigation from "@/components/Navigation";
import ContentSection from "@/components/ContentSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-start gap-3">
              <span className="text-primary text-3xl mt-1">📢</span>
              <h1 className="text-3xl font-bold leading-tight">
                Who Are We? The Awareness & Communications Workstream
              </h1>
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Welcome to the heart and voice of our team — <span className="font-semibold">the Awareness & Communications Workstream!</span>
              {" "}We're the storytellers, the spotlight crew, and your go-to source for staying informed, inspired, and connected. Here's what we're all about:
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 pt-8">
            <ContentSection 
              icon="🧠"
              title="Awareness"
              description="Ever wondered what amazing things your teammates are working on? We shine a light on their projects, wins, and innovations — so you always know just how awesome this team really is."
            />

            <ContentSection 
              icon="🎤"
              title="Testimonials"
              description="We help leadership tell our story to the world. With polished materials and real-life success stories, we make it easy to showcase our capabilities to future clients and partners."
            />

            <ContentSection 
              icon="📣"
              title="Communications"
              description="Big changes? Team news? Major decisions? We've got you covered. Whether it's a quick update or a deep dive, we're here to make sure no one misses a beat."
            />

            <ContentSection 
              icon="🌐"
              title="Microsite"
              description="Think of it as our digital HQ. Everything you need — all in one place. Projects, highlights, updates, and more. Easy to find, easy to love."
            />
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border/50 my-8"></div>

          {/* Closing Statement */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-foreground/80 leading-relaxed">
              We're not just about sharing info — we're about making sure everyone feels seen, heard, and proud to be part of this journey.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Awareness & Communications: Making our work visible, our voices heard, and our story unforgettable.
            </p>
          </div>
        </div>
      </main>

      {/* Footer with gradient */}
      <footer className="mt-20">
        <div className="h-1 bg-gradient-to-r from-primary via-purple-500 to-primary"></div>
        <div className="bg-secondary/50 py-4">
          <p className="text-center text-sm text-muted-foreground">
            Copyright 2001-2025 Accenture. All rights reserved. Accenture Confidential. For internal use only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
