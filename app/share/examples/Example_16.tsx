"use client";

import React from "react";
import ShareButton from "../_components/Share_16";

const ShareExample16 = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <ShareButton title="Share this content" url="https://example.com/awesome-content" />
    </div>
  );
};

export default ShareExample16; 