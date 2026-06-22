"use client";

import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string; // e.g. "573001234567"
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hola! Me gustaría hacer un pedido 🌭",
}: WhatsAppButtonProps) {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(180, 70, 30, 0.55); }
          70% { box-shadow: 0 0 0 14px rgba(180, 70, 30, 0); }
          100% { box-shadow: 0 0 0 0 rgba(180, 70, 30, 0); }
        }
        .wa-btn {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #c2652a 0%, #8b3a1e 100%);
          color: #fff;
          border-radius: 50px;
          padding: 11px 11px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(180, 70, 30, 0.45);
          animation: wa-pulse 2.2s infinite;
          transition: padding 0.3s cubic-bezier(.4,0,.2,1),
                      border-radius 0.3s cubic-bezier(.4,0,.2,1),
                      box-shadow 0.3s ease;
          overflow: hidden;
          max-width: 46px;
        }
        @media (min-width: 640px) {
          .wa-btn {
            bottom: 28px;
            right: 28px;
            padding: 13px 13px;
            max-width: 52px;
          }
        }
        .wa-btn:hover {
          padding: 13px 20px 13px 16px;
          border-radius: 50px;
          max-width: 260px;
          box-shadow: 0 10px 36px rgba(180, 70, 30, 0.6);
          animation: none;
        }
        .wa-btn svg {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          transition: transform 0.3s ease;
        }
        .wa-btn:hover svg {
          transform: scale(1.1);
        }
        .wa-label {
          white-space: nowrap;
          font-family: var(--font-sans, sans-serif);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.25s ease 0.05s, transform 0.25s ease 0.05s;
          pointer-events: none;
        }
        .wa-btn:hover .wa-label {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Contáctanos por WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.15" />
          <path
            d="M16 4.5C9.649 4.5 4.5 9.649 4.5 16c0 2.034.535 3.944 1.47 5.597L4.5 27.5l6.07-1.448A11.45 11.45 0 0 0 16 27.5c6.351 0 11.5-5.149 11.5-11.5S22.351 4.5 16 4.5Zm0 21c-1.891 0-3.661-.526-5.163-1.438l-.37-.22-3.598.859.874-3.504-.24-.382A9.458 9.458 0 0 1 6.5 16C6.5 10.753 10.753 6.5 16 6.5S25.5 10.753 25.5 16 21.247 25.5 16 25.5Zm5.22-7.073c-.286-.143-1.692-.835-1.954-.93-.263-.095-.454-.143-.645.143-.191.287-.738.93-.905 1.121-.167.19-.334.215-.62.072-.286-.143-1.208-.445-2.3-1.42-.85-.758-1.424-1.694-1.591-1.98-.167-.287-.018-.442.125-.584.128-.128.286-.334.43-.501.143-.167.19-.286.286-.477.095-.19.048-.358-.024-.501-.072-.143-.645-1.556-.883-2.13-.233-.56-.47-.485-.645-.494l-.549-.01c-.19 0-.5.072-.763.358s-1 .977-1 2.383 1.024 2.765 1.167 2.956c.143.19 2.016 3.078 4.886 4.316.683.295 1.215.47 1.63.602.685.218 1.308.187 1.8.113.549-.082 1.692-.692 1.93-1.36.238-.67.238-1.243.167-1.36-.072-.12-.263-.19-.549-.334Z"
            fill="white"
          />
        </svg>
        <span className="wa-label">¡Escríbenos!</span>
      </a>
    </>
  );
}
