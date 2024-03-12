/**
 * admin/layout.jsx
 */

import React from "react";
import { SearchCommand } from "@/components/admin/modals-and-commands/search-command";
import { Navigation } from "@/components/admin/admin-sidenav/navigation";

const layout = async ({ children }) => {
  return (
    <>
      <div className="h-full  pt-14 w-full md:px-10 flex dark:bg-[#1F1F1F]">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">
          <SearchCommand />
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;

// [{"id":"02825149-4878-45a3-975e-006561bae6ac","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":1},"content":[{"type":"text","text":"Elevating Your Business with Expert Consultation","styles":{}}],"children":[]},{"id":"d8116b81-ac42-4913-9bce-a2156b0401bf","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"d39ad336-8152-4879-acf2-ed1795947bc1","type":"image","props":{"backgroundColor":"default","textAlignment":"center","url":"https://mongo-blog.s3.eu-central-1.amazonaws.com/blog/fulllogo_transparent_nobuffer.png","caption":"","width":447},"children":[]},{"id":"f8cee97b-492a-4ff1-b786-a281569316a2","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"c6f8d0cf-f528-40f0-bc95-60d1a9a22dc3","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"d2503df0-00fb-4890-8d59-ff39ad747ce3","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Welcome to our blog, where creativity meets insight. Explore fascinating topics and engage with our community of thinkers.","styles":{}}],"children":[]},{"id":"dc5f8648-299e-478a-8792-a6d2696198f5","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"f377d2e9-00e6-4244-ba93-3f86d90b70ca","type":"heading","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left","level":3},"content":[{"type":"text","text":"Mastering Your Money: Navigating the Financial Landscape with Confidence and Wisdom","styles":{}}],"children":[]},{"id":"bb6a2f98-c5cd-4cfb-980d-0fe43d4b7384","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"f6473538-571f-48bc-9dcc-8f4de6b158e5","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Money management isn't just about accumulating wealth; it's about making smart choices that align with your long-term goals. It's about understanding the basics of budgeting, saving, investing, and protecting your assets. By laying a strong foundation of financial knowledge and discipline, you can navigate the complex landscape of finance with confidence.","styles":{}}],"children":[]},{"id":"5daf7bbe-5eb1-4556-a627-a2ca399972cb","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]},{"id":"ca977eed-4332-46d8-9371-a0b45075f24d","type":"paragraph","props":{"textColor":"default","backgroundColor":"default","textAlignment":"left"},"content":[],"children":[]}]