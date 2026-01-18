import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  heading: string;
  description?: string;
  action?: {
    label: string;
    onClick?: () => void; // Or use an href for links
    href?: string;
  };
}

export function PageHeader({ heading, description, action }: PageHeaderProps) {
  return (
    <div className="space-y-4 pb-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">{heading}</h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        {action && (
          <Button asChild={!!action.href}>
            {action.href ? (
              <a href={action.href}>
                <Plus className="mr-2 h-4 w-4" /> {action.label}
              </a>
            ) : (
              <button onClick={action.onClick}>
                <Plus className="mr-2 h-4 w-4" /> {action.label}
              </button>
            )}
          </Button>
        )}
      </div>
      <Separator />
    </div>
  );
}
