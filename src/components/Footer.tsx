import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className=" pt-20 py-6 bg-slate-800 text-white">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-6">
        <div>
          <p className="text-lg font-semibold">Elite Homes </p>
          <p className="max-w-lg text-slate-300 mt-1">
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold">Contacts</p>
          <address className="text-slate-300 mt-1">
            <MapPin className="inline-block w-5 h-5 mt-0.5" />
            135 Walnut St,
            <br />
            Yet Another City, USA
          </address>
        </div>
      </div>
    </footer>
  );
}
