import Navigation from "@/components/Navigation";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Team</h1>
          <p className="text-lg text-muted-foreground">
            Meet our amazing team members working on the Awareness & Communications Workstream.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Team;
