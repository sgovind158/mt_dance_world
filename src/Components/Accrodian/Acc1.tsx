"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; // Optional icons

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface Acc1Props {
  accordionItems: AccordionItem[];
}

const Acc1: React.FC<Acc1Props> = ({ accordionItems }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {accordionItems.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
        >
          <button
            onClick={() => handleToggle(item.id)}
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-all text-left"
          >
            <span className="text-lg font-medium text-black">{item.title}</span>
            <span className="text-gray-500">
              {expandedItem === item.id ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {expandedItem === item.id && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-gray-50"
              >
                <div className="p-4 text-gray-700 text-base">
                  <p>{item.content}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Acc1;
