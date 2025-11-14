interface InfoBarProps {
  hours?: string
  phone?: string
  tagline?: string
}

export default function InfoBar({ 
  hours = "Hours: 5PM - 11PM Daily",
  phone = "+1 (555) 123-4567",
  tagline = "Fine Dining Experience"
}: InfoBarProps) {
  return (
    <div className="bg-primary text-primary-foreground text-sm py-3">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-8">
          <span>{hours}</span>
          <span>{phone}</span>
        </div>
        <span>{tagline}</span>
      </div>
    </div>
  )
}
