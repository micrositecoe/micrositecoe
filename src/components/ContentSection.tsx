interface ContentSectionProps {
  icon: string;
  title: string;
  description: string;
}

const ContentSection = ({ icon, title, description }: ContentSectionProps) => {
  return (
    <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ContentSection;
