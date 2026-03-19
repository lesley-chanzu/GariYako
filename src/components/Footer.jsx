import React from "react";

const Footer = () => {
  const footerLinks = {
    about: [
      { name: "About us", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "Authors and experts", href: "#" },
      { name: "Carrow newsroom", href: "#" },
      { name: "Official Carrow Merchandise", href: "#" },
    ],
    legal: [
      { name: "Terms & conditions", href: "#" },
      { name: "Accessibility notice", href: "#" },
      { name: "Manage cookies & privacy", href: "#" },
      { name: "Fraud disclaimer", href: "#" },
      { name: "ESG Policy", href: "#" },
    ],
    policies: [
      { name: "Privacy policy", href: "#" },
      { name: "Fake Reviews Policy", href: "#" },
      { name: "Modern slavery statement", href: "#" },
    ],
    countries: [
      { name: "KENYA", flag: " 🇰🇪", href: "#" },
      { name: "Germany", flag: "🇩🇪", href: "#" },
      { name: "UK", flag: "🇬🇧", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#0A1428] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Help Centre */}
        <div className="mb-10">
          <h3 className="text-[#FF6B00] font-bold text-lg mb-3">Help Centre</h3>
          <div className="text-gray-300 text-sm space-y-1">
            <p>Monday to Friday 9.00 A.M - 7.00 P.M</p>
            <p>Saturday 9.00 A.M - 2.30 P.M</p>
            <p>Sundays and Bank Holidays CLOSED</p>
          </div>
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* About Column */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF6B00] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF6B00] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Policies</h4>
            <ul className="space-y-2">
              {footerLinks.policies.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FF6B00] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries Column */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Country</h4>
            <ul className="space-y-2">
              {footerLinks.countries.map((country) => (
                <li key={country.name}>
                  <a
                    href={country.href}
                    className="text-gray-400 hover:text-[#FF6B00] text-sm transition-colors flex items-center gap-2"
                  >
                    <span>{country.name}</span>
                    <span className="text-base">{country.flag}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <p className="text-gray-400 text-sm">
            © 2026 GariYako Ltd. All rights reserved
          </p>
        </div>

        {/* Legal Disclaimer - Collapsible on mobile */}
        <details className="group text-xs text-gray-500 leading-relaxed">
          <summary className="cursor-pointer text-[#FF6B00] hover:text-white transition-colors font-medium mb-2">
            Legal information & disclaimers
          </summary>
          <div className="space-y-4 mt-4">
            <p>
              * Please contact the dealer for a personalised quote, including
              terms and conditions. Quote is subject to dealer requirements,
              including status and availability. Illustrations are based on
              personal contract hire, 9 month upfront fee, £8 month term, 8000
              miles annually, inc VAT, excluding fees. Vehicle returned at term
              end.
            </p>
            <p>** Our marketing claims explained.</p>
            <p>
              Average savings are calculated daily based on the best dealer
              prices on GariYako vs manufacturer RRP. Where it is shown that the
              EV Grant is included, this refers to the Government grant awarded
              to manufacturers on certain EV models and derivatives, the amount
              awarded under the EV Grant is included in the Savings stated and
              applied at the point of sale. Carrow is the trading name of Carrow
              Ltd, which is authorised and regulated by the Financial Conduct
              Authority for credit banking and insurance distribution activities
              (firm reference number: 76155). Carrow Lease Limited is an
              appointed representative of ITC Compliance Limited which is
              authorised and regulated by the Financial Conduct Authority for
              credit banking (firm reference number: 313486) Carrow and Carrow
              Lease Limited are each credit brokers and not a lenders. Carrow
              and Carrow Lease Limited may receive a fee from retailers
              advertising finance and may receive a commission from partners
              (including dealers) for introducing customers. All finance offers
              and monthly payments shown are subject to application and status.
              Carrow is covered by the Financial Ombudsman Service (please see
              www.financial-ombudsman.org.uk for more information). Carrow Ltd
              is registered in England (company number 07103079), registered
              office 2nd Floor, Verde Building, 10 Bressenden Place, London,
              England, SW1E 5DH. Carrow Lease Limited is registered in England
              (company number 13601174), registered office 2nd Floor, Verde
              Building, 10 Bressenden Place, London, England, SW1E 5DH and is a
              wholly owned subsidiary of Carrow Ltd.
            </p>
          </div>
        </details>
      </div>
    </footer>
  );
};

export default Footer;
