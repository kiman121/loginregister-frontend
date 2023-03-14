import React from 'react';

const PageWrapper = ({ className, children }) => {
  return <div className={`page-wrapper ${className}`}>{children}</div>;
};

export default PageWrapper;
