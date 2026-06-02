import React, { useEffect } from 'react';

const SEO = ({ title, description, path }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | DLUX Hand Car Wash`;

    // 2. Update Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. Update Canonical Link
    const siteUrl = "https://dluxcarcare.com.au";
    const currentUrl = `${siteUrl}${path || ""}`;
    
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", currentUrl);

  }, [title, description, path]); // Re-run whenever these props change

  return null; // This component renders nothing in the DOM
};

export default SEO;