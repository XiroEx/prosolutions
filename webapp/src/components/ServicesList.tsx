import { useNavigate } from "react-router";

const services = [
  {
    title: "Transloading Services",
    img: "/containers.jpg",
    details: [
      "<strong>Cross-Docking:</strong> Unload containers or trailers and reload goods onto outbound trucks for faster deliveries and less storage.",
      "<strong>Modal Transfers:</strong> Seamless transitions between ship, rail, and truck to minimize disruptions.",
      "<strong>Cargo Reconfiguration:</strong> Break down large shipments and redistribute them to meet your delivery requirements.",
    ],
  },
  {
    title: "Pick and Pack Services",
    img: "/packing.jpg",
    details: [
      "<strong>Order Fulfillment:</strong> Accurate picking and packing of individual items for shipping.",
      "<strong>Custom Packaging:</strong> Branded packaging and labeling tailored to your specifications.",
      "<strong>Real-Time Inventory Tracking:</strong> Up-to-date stock levels and order status via our advanced WMS.",
    ],
  },
  {
    title: "Freight Brokerage Solutions",
    img: "/freight.jpg",
    details: [
      "<strong>Full Truckload (FTL):</strong> Dedicated truck capacity, expedited routes, and nationwide service.",
      "<strong>Less Than Truckload (LTL):</strong> Consolidated shipments, customized solutions, and multi-location pickups/deliveries.",
      "<strong>Refrigerated & Non-Refrigerated:</strong> Flexible options for all freight types.",
    ],
  },
  {
    title: "Port Drayage",
    img: "/drayage.jpg",
    details: [
      "Import/export container drayage between ports, warehouses, and rail yards.",
      "Full compliance with port regulations.",
      "Coordination with steamship lines and terminal operators.",
    ],
  },
  {
    title: "Warehousing Solutions",
    img: "/coldstore.jpg",
    details: [
      "Flexible, scalable storage for short- or long-term needs.",
      "State-of-the-art facilities with inventory management and security.",
    ],
  },
  {
    title: "Distribution & Fulfillment",
    img: "/warehousing.jpg",
    details: [
      "End-to-end management from storage to pick-and-pack.",
      "Inventory tracking, packaging, and labeling.",
    ],
  },
  {
    title: "Cross-Docking",
    img: "/port.jpg",
    details: [
      "Direct transfer from inbound to outbound transportation.",
      "Minimized handling and storage costs, faster delivery, reduced risk of damage.",
    ],
  },
  {
    title: "Value-Added Services",
    img: "/labeling.jpg",
    details: [
      "Kitting and assembly",
      "Repackaging and relabeling",
      "Quality control inspections",
    ],
  },
];

function ServicesList() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-2xl font-bold mb-8 text-center text-[var(--color-primary)]">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col cursor-pointer"
              onClick={() => navigate('/contact')}
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold mb-2 text-[var(--color-primary)]">{service.title}</h2>
                <ul className="text-gray-700 flex-1 space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: detail }} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}

export default ServicesList