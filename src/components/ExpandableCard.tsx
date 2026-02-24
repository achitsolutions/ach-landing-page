import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  children: React.ReactNode;
  expandedContent: React.ReactNode;
  className?: string;
}

const ExpandableCard = ({ children, expandedContent, className }: ExpandableCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn("cursor-pointer", className)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">{children}</div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground/50" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-3 mt-3 border-t border-border/30 text-sm text-muted-foreground leading-relaxed">
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableCard;
