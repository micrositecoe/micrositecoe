import Navigation from "@/components/Navigation";
import SideMenu from "@/components/SideMenu";
import Countdown from "@/components/Countdown";

const People = () => {
  const menuItems = [
    { label: "First Days", id: "first-days" },
    { label: "CV", id: "cv" },
    { label: "Short Bio", id: "short-bio" },
    { label: "Skills", id: "skills" },
    { label: "Methodology", id: "methodology" },
    { label: "Platforms", id: "platforms" },
    { label: "Misc", id: "misc" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        <SideMenu items={menuItems} />
        
        <main className="flex-1 p-12">
          <div className="max-w-4xl">
            <Countdown />
            
            <div id="cv" className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">The One Page CV</h1>
                <p className="text-foreground/90 leading-relaxed">
                  The One Page CV is a simple yet powerful tool designed to provide a clear and concise overview of your professional experience and skills. It plays a key role in ensuring that we have consistent, up-to-date profiles for all team members. Additionally, the One Page CV is shared with leadership to promote the team and provide insight into the talents available. This helps clients plan ahead and assemble teams that meet project demands effectively.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Updating Your CV</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Keeping your One Page CV updated is essential for accurate representation and alignment with our organizational goals. The process involves uploading both a PowerPoint (PPT) and PDF version to the One Slide CV Repository.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Please complete this task within your <span className="font-semibold">first day</span> to ensure a smooth introduction to the team.
                </p>
              </div>

              <div className="bg-card/50 border border-border rounded-lg p-6 space-y-4">
                <p className="text-foreground/90">
                  For more information on how to complete the one page CV, check the{" "}
                  <a href="#" className="text-primary hover:underline font-medium">
                    "1-slide CV Guidelines"
                  </a>{" "}
                  file.
                </p>
                <p className="text-foreground/90">
                  If you have any doubt, feel free to contact either{" "}
                  <a href="#" className="text-primary hover:underline font-medium">
                    Cristóvão Zhu
                  </a>{" "}
                  or{" "}
                  <a href="#" className="text-primary hover:underline font-medium">
                    Gustavo Coelho
                  </a>
                  .
                </p>
              </div>
            </div>

            <div id="short-bio" className="mt-16 space-y-4">
              <h2 className="text-2xl font-semibold">Short Bio</h2>
              <p className="text-foreground/90 leading-relaxed">
                Content for Short Bio section...
              </p>
            </div>

            <div id="skills" className="mt-16 space-y-4">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <p className="text-foreground/90 leading-relaxed">
                Content for Skills section...
              </p>
            </div>

            <div id="methodology" className="mt-16 space-y-4">
              <h2 className="text-2xl font-semibold">Methodology</h2>
              <p className="text-foreground/90 leading-relaxed">
                Content for Methodology section...
              </p>
            </div>

            <div id="platforms" className="mt-16 space-y-4">
              <h2 className="text-2xl font-semibold">Platforms</h2>
              <p className="text-foreground/90 leading-relaxed">
                Content for Platforms section...
              </p>
            </div>

            <div id="misc" className="mt-16 space-y-4">
              <h2 className="text-2xl font-semibold">Misc</h2>
              <p className="text-foreground/90 leading-relaxed">
                Content for Misc section...
              </p>
            </div>
          </div>
        </main>
      </div>

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

export default People;
