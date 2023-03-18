import React from 'react';

function ExternalNavLink(props) {
  const { to, className, activeClassName, children } = props;

  function handleNavLinkClick(event) {
    event.preventDefault();
    window.open(to, '_blank');
  }

  return (
    <a
      href={to}
      className={className}
      activeClassName={activeClassName}
      onClick={handleNavLinkClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default ExternalNavLink;
